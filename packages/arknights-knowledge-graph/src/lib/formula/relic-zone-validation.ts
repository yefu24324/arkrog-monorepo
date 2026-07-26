/**
 * 将纯 TS 藏品路由结果转换为“函数实际可写入的乘区”校验表。
 * 该表只检查乘区，不求公式数值，并统一假设所有效果生效。
 */

import type {
  ExportedRelicEffect,
  ExportedZonePrediction,
  RelicZoneExport,
} from "../classify/types.js";
import { DAMAGE_ZONES } from "../domain/damage-zones.js";
import {
  contributionsFromClassifiedEffect,
  toContributionEffect,
} from "./relic-contributions.js";

/** JSON 产物的生成路径说明，供文档站明确区分图谱与函数结果。 */
export interface RelicZoneArtifactProducer {
  /** graph 表示 Kuzu 边，formula 表示公式贡献函数。 */
  kind: "graph" | "formula";
  /** 是否检查运行时生效条件。 */
  activationPolicy: "not_applicable" | "assume_active";
  /** 本产物是否执行公式数值求值。 */
  numericEvaluation: false;
  /** 人类可读用途说明。 */
  description: string;
}

/** 带生成路径说明的主题藏品乘区产物。 */
export interface RelicZoneValidationArtifact extends RelicZoneExport {
  /** graph/formula 产物身份。 */
  producer: RelicZoneArtifactProducer;
}

/** 将公式贡献转换回统一的乘区预测展示结构。 */
function predictionFromContribution(
  effect: ExportedRelicEffect,
  contribution: ReturnType<typeof contributionsFromClassifiedEffect>[number],
): ExportedZonePrediction {
  const zone = DAMAGE_ZONES.find((entry) => entry.id === contribution.zoneId);
  return {
    id: contribution.zoneId,
    symbol: zone?.symbol ?? contribution.zoneId,
    name: zone?.name ?? contribution.zoneId,
    formula: zone?.formula ?? "",
    status: "computed",
    reason: contribution.reason ?? "公式贡献函数已将该参数写入乘区。",
    ruleId: contribution.source?.ruleId ?? "formula-contribution",
    evidencePaths: [contribution.source?.effectPath ?? effect.jsonPath],
  };
}

/** 去除同一效果因多个参数映射产生的完全重复预测。 */
function uniquePredictions(predictions: ExportedZonePrediction[]): ExportedZonePrediction[] {
  const unique = new Map<string, ExportedZonePrediction>();
  for (const prediction of predictions) {
    const key = `${prediction.id}\u0000${prediction.ruleId}\u0000${prediction.reason}`;
    if (!unique.has(key)) unique.set(key, prediction);
  }
  return [...unique.values()];
}

/**
 * 构建函数乘区表。
 * 输入来自现场 classify，输出只记录 contributionsFromClassifiedEffect 真正能写入的乘区；
 * 不调用 FormulaContext.evaluateZone，也不检查职业、敌人、关卡或前置藏品。
 */
export function buildFormulaRelicZoneValidationArtifact(
  classified: RelicZoneExport,
): RelicZoneValidationArtifact {
  let mappedEffectCount = 0;
  let unknownEffectCount = 0;
  let notApplicableEffectCount = 0;

  const items = classified.items.map((item) => {
    const itemZones = new Map<string, { id: string; symbol: string; name: string }>();
    const effects = item.effects.map((effect) => {
      // active 默认为 true，刻意绕过运行时生效判定，只检验乘区路由与取值能力。
      const contributions = contributionsFromClassifiedEffect(
        item,
        toContributionEffect(effect),
        { active: true },
      );
      const predictions = uniquePredictions(
        contributions.map((contribution) => predictionFromContribution(effect, contribution)),
      );
      for (const prediction of predictions) {
        itemZones.set(prediction.id, {
          id: prediction.id,
          symbol: prediction.symbol,
          name: prediction.name,
        });
      }

      if (predictions.length > 0) mappedEffectCount += 1;
      const classification =
        predictions.length > 0
          ? "predicted"
          : effect.predictions.length > 0
            ? "unknown"
            : effect.classification;
      if (classification === "unknown") unknownEffectCount += 1;
      if (classification === "not_applicable") notApplicableEffectCount += 1;

      return {
        ...effect,
        classification,
        evidenceStatuses: predictions.length > 0 ? ["computed"] : [],
        predictions,
        unclassifiedReason:
          predictions.length > 0
            ? null
            : effect.predictions.length > 0
              ? "语义路由已有乘区预测，但公式贡献函数尚不能从黑板提取对应参数。"
              : effect.unclassifiedReason,
      };
    });

    return {
      ...item,
      zones: [...itemZones.values()],
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
      description: "公式贡献函数乘区检查；全部 buff 假定生效，不执行公式数值求值。",
    },
    sources: [
      ...classified.sources,
      "packages/arknights-knowledge-graph/src/lib/formula/relic-contributions.ts",
      "packages/arknights-knowledge-graph/src/lib/formula/relic-template-programs.ts",
    ],
    coverage: {
      verifiedEffectCount: 0,
      inferredEffectCount: mappedEffectCount,
      unknownEffectCount,
      notApplicableEffectCount,
    },
    items,
  };
}
