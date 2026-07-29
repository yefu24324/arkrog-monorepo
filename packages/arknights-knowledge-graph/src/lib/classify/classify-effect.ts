import { predictEngineZones } from "../domain/engine-rules.js";
import { resolveMechanicName, type MechanicIndex } from "./mechanic-index.js";
import type { BlackboardValue, ExportedRelicEffect, ExportedZonePrediction } from "./types.js";

/** 将常见战斗事件翻译成可读条件。 */
function translateEvent(event: string): string {
  const translations: Record<string, string> = {
    ON_AFTER_OUTPUT_DAMAGE: "造成伤害后",
    ON_ATTACKED: "受到攻击时",
    ON_ATTACK: "攻击时",
    ON_BUFF_START: "buff 开始时",
    ON_BUFF_TRIGGER: "buff 触发时",
    ON_DEPLOY: "部署时",
    ON_KILLED: "击杀时",
    ON_OUTPUT_DAMAGE: "造成伤害时",
    ON_SKILL_START: "技能开启时",
    ON_TAKE_DAMAGE: "受到伤害时",
  };
  return translations[event] ?? event;
}

/** 从战斗事件和黑板选择器中提炼机器可见的生效条件。 */
export function deriveCondition(events: readonly string[], blackboard: BlackboardValue[]): string {
  const parts = events.map(translateEvent);
  const labels: Record<string, string> = {
    "selector.profession": "职业",
    "selector.sub_profession": "分支职业",
    "selector.buildable": "部署位",
    "selector.enemy_level_type": "敌人等级",
    "selector.enemy": "敌人",
    "selector.enemy_exclude": "排除敌人",
    "selector.char": "角色",
    "selector.side": "阵营",
    trig_type: "触发类型",
    duration: "持续时间",
    interval: "触发间隔",
    max_stack_cnt: "最大层数",
    max_valid_stack_cnt: "有效层数",
    prob: "触发概率",
    node: "节点类型",
  };
  for (const parameter of blackboard) {
    const label = labels[parameter.key];
    if (!label) continue;
    const value = parameter.valueStr ?? parameter.value;
    const suffix = parameter.key === "duration" || parameter.key === "interval" ? "秒" : "";
    parts.push(`${label}=${value}${suffix}`);
  }
  return [...new Set(parts)].join("；") || "常驻/原文未给出额外条件";
}

/** 生成与图谱 Effect.parameters 一致的黑板摘要。 */
export function summarizeBlackboard(blackboard: BlackboardValue[]): string {
  return blackboard
    .map((parameter) => `${parameter.key}=${parameter.valueStr ?? parameter.value}`)
    .join(", ");
}

/** 区分未建模战斗效果与明确不进入伤害公式的载体效果。 */
export function fallbackClassification(
  effectKey: string,
  parameters: string,
  components: string,
): { classification: "unknown" | "not_applicable"; reason: string } {
  const combatSignal = `${effectKey} ${parameters} ${components}`;
  const isCombatValue =
    /atk|attack|damage|def|resistance|max_hp|attack_speed|攻击|伤害|防御|法抗|生命|攻速/i.test(
      combatSignal,
    );
  return isCombatValue
    ? { classification: "unknown", reason: "效果涉及战斗数值，但当前语义规则尚未映射到公式乘区。" }
    : { classification: "not_applicable", reason: "奖励、资源或部署规则等效果不进入伤害乘区。" };
}

/** 将黑板数组转成语义规则需要的 Map。 */
function parameterMap(
  blackboard: BlackboardValue[],
): ReadonlyMap<string, number | string | null> {
  return new Map(blackboard.map((parameter) => [parameter.key, parameter.valueStr ?? parameter.value]));
}

/** 单条效果分类输入。 */
export interface ClassifyRelicEffectInput {
  /** 稳定 Effect ID。 */
  effectId: string;
  /** relics 或 charBuffData:... 来源标签。 */
  source: string;
  /** buffs 零基下标。 */
  buffIndex: number;
  /** buff 载体 key。 */
  key: string;
  /** 黑板。 */
  blackboard: BlackboardValue[];
  /** 原始 JSON 路径。 */
  jsonPath: string;
  /** 战斗模板索引。 */
  mechanicIndex: MechanicIndex;
  /** 效果来源种类，写入 EngineEffectFacts.sourceKind。 */
  sourceKind?: string;
}

/**
 * 对单条藏品/角色 buff 预测乘区。
 * 纯函数：只依赖注入的 mechanicIndex 与规则表。
 */
export function classifyRelicEffect(input: ClassifyRelicEffectInput): ExportedRelicEffect {
  const parameters = summarizeBlackboard(input.blackboard);
  const mechanicName = resolveMechanicName(input.blackboard);
  const actions = [...(input.mechanicIndex.get(mechanicName) ?? [])];
  const events = [...new Set(actions.map((action) => action.event))];
  const componentTypes = [...new Set(actions.map((action) => action.componentType).filter(Boolean))];
  const predictionsRaw = predictEngineZones({
    effectKey: input.key,
    parameters: parameterMap(input.blackboard),
    mechanicName,
    actions,
    sourceKind: input.sourceKind ?? input.source,
    jsonPath: input.jsonPath,
  });

  const predictions: ExportedZonePrediction[] = predictionsRaw.map((prediction) => {
    return {
      zoneId: prediction.zoneId,
      status: prediction.status,
      confidence: prediction.confidence,
      reason: prediction.reason,
      ruleId: prediction.ruleId,
      evidencePaths: prediction.evidencePath.split(" | ").filter(Boolean),
    };
  });

  const componentsJoined = componentTypes.join(" | ");
  const fallback = fallbackClassification(input.key, parameters, componentsJoined);
  const classification = predictions.length > 0 ? ("predicted" as const) : fallback.classification;
  const evidenceStatuses = [...new Set(predictions.map((prediction) => prediction.status))];

  return {
    effectId: input.effectId,
    source: input.source,
    buffIndex: input.buffIndex,
    key: input.key,
    blackboard: input.blackboard,
    parameters,
    mechanic: {
      name: mechanicName,
      events,
      componentTypes,
    },
    condition: deriveCondition(events, input.blackboard),
    classification,
    evidenceStatuses,
    predictions,
    unclassifiedReason: classification === "predicted" ? null : fallback.reason,
    jsonPath: input.jsonPath,
  };
}
