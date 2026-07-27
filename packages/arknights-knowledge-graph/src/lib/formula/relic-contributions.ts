/** 将战斗模板或 classify 语义预测转换为公式簿贡献项。 */

import type { ExportedRelicEffect, ExportedZonePrediction } from "../classify/types.js";
import type { FormulaContribution } from "./context.js";
import { runRelicFormulaProgram } from "./relic-template-programs.js";

/** 黑板条目。 */
export interface BlackboardEntry {
  /** 参数名。 */
  key: string;
  /** 数值。 */
  value: number;
  /** 字符串值。 */
  valueStr: string | null;
}

/** 参与贡献映射的效果（可由 classify 结果直接转入）。 */
export interface RelicEffectForContribution {
  /** 稳定效果 ID。 */
  effectId: string;
  /** relics 或 charBuffData:...，用于识别定向赋予的角色效果。 */
  source?: string;
  /** buff 载体 key。 */
  key: string;
  /** 由黑板引用的战斗模板名；缺失时只允许走通用语义规则。 */
  mechanicName?: string;
  /** 黑板。 */
  blackboard: BlackboardEntry[];
  /** 原始 JSON 路径。 */
  jsonPath: string;
  /** 乘区预测。 */
  predictions: ReadonlyArray<Pick<ExportedZonePrediction, "id" | "ruleId" | "reason">>;
}

/** 参与贡献映射的藏品摘要。 */
export interface RelicItemForContribution {
  /** 藏品 ID。 */
  id: string;
  /** 显示名（用作 tooltip）。 */
  name: string;
  /** 效果列表。 */
  effects: readonly RelicEffectForContribution[];
}

/** 将已分类的单条效果转为公式贡献。 */
export function contributionsFromClassifiedEffect(
  item: Pick<RelicItemForContribution, "id" | "name">,
  effect: RelicEffectForContribution,
  options: {
    /** 是否参与求值；默认 true。 */
    active?: boolean;
    /** 未生效原因，写入 reason 后缀便于 UI 展示。 */
    inactiveReasons?: readonly string[];
    /** 用户填写的藏品层数，由具体模板程序解释。 */
    layer?: number;
  } = {},
): FormulaContribution[] {
  const active = options.active ?? true;
  const inactiveSuffix =
    !active && options.inactiveReasons?.length
      ? `（未生效：${options.inactiveReasons.join("；")}）`
      : "";
  const writes = runRelicFormulaProgram(effect, { layer: options.layer ?? 0 });
  return writes.map((write, writeIndex) => ({
    // writeIndex 允许同一模板将一个参数拆成多个同乘区贡献，同时保持 ID 稳定唯一。
    id: `${item.id}:${effect.effectId}:${write.ruleId}:${write.zoneId}:${writeIndex}`,
    zoneId: write.zoneId,
    value: write.value,
    tooltip: item.name,
    reason: `${write.reason}${inactiveSuffix}`,
    damageTypes: write.damageTypes,
    active,
    source: {
      kind: "relic",
      itemId: item.id,
      effectPath: effect.jsonPath,
      buffKey: effect.key,
      parameterKey: write.parameterKey,
      ruleId: write.ruleId,
    },
  }));
}

/** 将多选藏品（已带 predictions）展开为公式贡献列表。 */
export function buildRelicContributions(
  items: readonly RelicItemForContribution[],
): FormulaContribution[] {
  const contributions: FormulaContribution[] = [];
  for (const item of items) {
    for (const effect of item.effects) {
      contributions.push(...contributionsFromClassifiedEffect(item, effect));
    }
  }
  return contributions;
}

/** 把 classify 输出的 ExportedRelicEffect 转成贡献映射输入。 */
export function toContributionEffect(effect: ExportedRelicEffect): RelicEffectForContribution {
  return {
    effectId: effect.effectId,
    source: effect.source,
    key: effect.key,
    mechanicName: effect.mechanic.name || undefined,
    blackboard: effect.blackboard,
    jsonPath: effect.jsonPath,
    predictions: effect.predictions,
  };
}
