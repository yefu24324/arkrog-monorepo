/**
 * 将攻击力藏品的公式项写入结果整理为人工校验产物。
 * 本模块只使用 FormulaBook 的真实可写 zone，不保留旧全属性乘区兼容层。
 */

import type { MechanicIndex } from "../classify/mechanic-index.js";
import type {
  ExportedRelicEffect,
  ExportedZonePrediction,
  RelicZoneExport,
} from "../classify/types.js";
import type { EvidenceStatus } from "../types.js";
import { formulaItemsFromRelicEffect } from "./relic-items.js";
import { routeRelicBuffToZones } from "./relic-programs.js";

/** JSON 产物的生成路径说明，供文档站明确区分图谱与公式项结果。 */
export interface RelicZoneArtifactProducer {
  /** graph 表示 Kuzu 边，formula 表示公式项写入函数。 */
  kind: "graph" | "formula";
  /** graph 不判断生效，formula 统一假定效果已生效。 */
  activationPolicy: "not_applicable" | "assume_active";
  /** 当前校验产物只检查可写乘区，不执行公式求值。 */
  numericEvaluation: false;
  /** 人类可读用途说明。 */
  description: string;
}

/** 带生成路径说明的攻击力藏品乘区产物。 */
export interface RelicZoneValidationArtifact extends RelicZoneExport {
  /** graph/formula 产物身份。 */
  producer: RelicZoneArtifactProducer;
}

/** 人工校验统一按已触发一层解释，存在层数上限时直接使用上限。 */
function assumedActiveLayer(effect: ExportedRelicEffect): number {
  const maximum = effect.blackboard.find(
    (parameter) => parameter.key.trim() === "max_stack_cnt",
  )?.value;
  return maximum !== undefined && Number.isFinite(maximum) && maximum > 0
    ? maximum
    : 1;
}

/** 将公式项写入记录转换为当前攻击力 JSON 的乘区预测。 */
function predictionFromPlacement(
  effect: ExportedRelicEffect,
  routedPredictions: ReturnType<typeof routeRelicBuffToZones>["predictions"],
  placement: ReturnType<typeof formulaItemsFromRelicEffect>[number],
): ExportedZonePrediction {
  const route = routedPredictions.find(
    (prediction) => prediction.ruleId === placement.route.ruleId,
  ) ?? routedPredictions.find((prediction) => prediction.zoneId === placement.zoneId);
  return {
    zoneId: placement.zoneId,
    status: route?.status ?? "inferred",
    confidence: route?.confidence ?? 1,
    reason: placement.route.reason,
    ruleId: placement.route.ruleId,
    evidencePaths: [placement.route.evidencePath || effect.jsonPath],
  };
}

/** 去除同一效果因多个解释路径产生的完全重复预测。 */
function uniquePredictions(predictions: ExportedZonePrediction[]): ExportedZonePrediction[] {
  const unique = new Map<string, ExportedZonePrediction>();
  for (const prediction of predictions) {
    const key = `${prediction.zoneId}\u0000${prediction.ruleId}\u0000${prediction.reason}`;
    if (!unique.has(key)) unique.set(key, prediction);
  }
  return [...unique.values()];
}

/** 按最终效果状态累加主题覆盖统计。 */
function countCoverage(effects: readonly ExportedRelicEffect[]): RelicZoneExport["coverage"] {
  let verifiedEffectCount = 0;
  let inferredEffectCount = 0;
  let unknownEffectCount = 0;
  let notApplicableEffectCount = 0;
  for (const effect of effects) {
    if (effect.evidenceStatuses.includes("verified")) verifiedEffectCount += 1;
    if (effect.evidenceStatuses.includes("inferred")) inferredEffectCount += 1;
    if (effect.classification === "unknown") unknownEffectCount += 1;
    if (effect.classification === "not_applicable") notApplicableEffectCount += 1;
  }
  return {
    verifiedEffectCount,
    inferredEffectCount,
    unknownEffectCount,
    notApplicableEffectCount,
  };
}

/**
 * 构建公式项校验产物。
 * 每个原始 buff 都重新经过运行时攻击力路由与 FormulaItem 构造函数；只记录实际可写入的 zone。
 */
export function buildFormulaRelicZoneValidationArtifact(
  classified: RelicZoneExport,
  mechanicIndex?: MechanicIndex,
): RelicZoneValidationArtifact {
  const allEffects: ExportedRelicEffect[] = [];
  const items = classified.items.map((item) => {
    const itemZones = new Set<RelicZoneExport["items"][number]["zones"][number]>();
    const effects = item.effects.map((effect): ExportedRelicEffect => {
      const routed = routeRelicBuffToZones({
        effectId: effect.effectId,
        source: effect.source,
        buffIndex: effect.buffIndex,
        key: effect.key,
        blackboard: effect.blackboard,
        jsonPath: effect.jsonPath,
        mechanicIndex,
      });
      // 校验产物假设触发条件成立，只检查公式程序是否能解释数值并产生写入项。
      const placements = formulaItemsFromRelicEffect(item, routed.effect, {
        layer: assumedActiveLayer(effect),
      });
      const predictions = uniquePredictions(
        placements.map((placement) => predictionFromPlacement(
          effect,
          routed.predictions,
          placement,
        )),
      );
      predictions.forEach((prediction) => itemZones.add(prediction.zoneId));
      const evidenceStatuses = [
        ...new Set(predictions.map((prediction) => prediction.status)),
      ] as EvidenceStatus[];
      const classification = predictions.length > 0
        ? "predicted"
        : routed.classification;
      const normalized: ExportedRelicEffect = {
        ...effect,
        classification,
        evidenceStatuses,
        predictions,
        unclassifiedReason: predictions.length > 0
          ? null
          : routed.predictions.length > 0
            ? "攻击力语义已有乘区预测，但公式项程序没有产生有效的非零写入项。"
            : routed.unclassifiedReason,
      };
      allEffects.push(normalized);
      return normalized;
    });

    return {
      ...item,
      zones: [...itemZones],
      effects,
    };
  });

  return {
    ...classified,
    generatedAt: new Date().toISOString(),
    producer: {
      kind: "formula",
      activationPolicy: "assume_active",
      numericEvaluation: false,
      description: "攻击力公式项写入检查；全部 buff 假定生效，不执行公式数值求值。",
    },
    sources: [
      ...classified.sources,
      "packages/arknights-knowledge-graph/src/lib/mechanics/relic-programs.ts",
      "packages/arknights-knowledge-graph/src/lib/mechanics/relic-items.ts",
      "packages/arknights-knowledge-graph/src/lib/mechanics/relic-template-programs.ts",
    ],
    coverage: countCoverage(allEffects),
    items,
  };
}
