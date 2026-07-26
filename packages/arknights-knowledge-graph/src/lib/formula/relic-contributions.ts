/**
 * 将 classify 预测 + 黑板映射为公式簿贡献项。
 * 干员生命/防御/法抗在规则未覆盖时，从 char_attribute_* 黑板回退。
 */

import type { DamageZoneId } from "../domain/damage-zones.js";
import type { ExportedRelicEffect, ExportedZonePrediction } from "../classify/types.js";
import type { FormulaContribution } from "./context.js";

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
  /** buff 载体 key。 */
  key: string;
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

/** 按 key 读取黑板数值。 */
function blackboardNumber(
  blackboard: readonly BlackboardEntry[],
  key: string,
): number | undefined {
  const entry = blackboard.find((item) => item.key === key);
  return entry?.value;
}

/** 读取首个 key 匹配正则的黑板数值。 */
function blackboardNumberByPattern(
  blackboard: readonly BlackboardEntry[],
  pattern: RegExp,
): number | undefined {
  const entry = blackboard.find((item) => pattern.test(item.key));
  return entry?.value;
}

/** damage_scale 类黑板：绝对值倍率（>=1）转为 product-one-plus 贡献。 */
function normalizeDamageScale(value: number): number {
  return value >= 1 ? value - 1 : value;
}

/**
 * 按语义规则 ID 从黑板提取贡献数值。
 * 返回 null 表示该预测无法从黑板取值（跳过）。
 */
export function extractContributionValue(
  ruleId: string,
  zoneId: string,
  blackboard: readonly BlackboardEntry[],
): { value: number; parameterKey: string } | null {
  switch (ruleId) {
    case "atk-static-multiplier":
    case "atk-runtime-multiplier":
    case "atk-flat-addition": {
      const value = blackboardNumber(blackboard, "atk");
      if (value === undefined) return null;
      return { value, parameterKey: "atk" };
    }
    case "hp-static-multiplier":
    case "hp-runtime-multiplier":
    case "hp-flat-addition":
    case "max-hp-static-multiplier":
    case "max-hp-runtime-multiplier":
    case "max-hp-flat-addition": {
      const value = blackboardNumber(blackboard, "max_hp");
      if (value === undefined) return null;
      return { value, parameterKey: "max_hp" };
    }
    case "char-def-static-multiplier":
    case "char-def-runtime-multiplier":
    case "char-def-flat-addition": {
      const value = blackboardNumber(blackboard, "def");
      if (value === undefined) return null;
      return { value, parameterKey: "def" };
    }
    case "char-res-static-multiplier":
    case "char-res-runtime-multiplier":
    case "char-res-flat-addition": {
      const value = blackboardNumber(blackboard, "magic_resistance");
      if (value === undefined) return null;
      return { value, parameterKey: "magic_resistance" };
    }
    case "attack-speed-addition": {
      const value = blackboardNumberByPattern(blackboard, /(^|_)attack_speed$/);
      if (value === undefined) return null;
      return { value, parameterKey: "attack_speed" };
    }
    case "enemy-defense-percent": {
      const value = blackboardNumber(blackboard, "def");
      if (value === undefined) return null;
      return { value: Math.abs(value), parameterKey: "def" };
    }
    case "enemy-hp-relic":
    case "enemy-hp-copper": {
      const value = blackboardNumber(blackboard, "max_hp");
      if (value === undefined) return null;
      return { value: Math.abs(value), parameterKey: "max_hp" };
    }
    case "target-res-flat-addition":
    case "target-res-percent-multiplier": {
      const value = blackboardNumber(blackboard, "magic_resistance");
      if (value === undefined) return null;
      return { value: Math.abs(value), parameterKey: "magic_resistance" };
    }
    case "target-def-flat-addition": {
      const value = blackboardNumber(blackboard, "def");
      if (value === undefined) return null;
      return { value: Math.abs(value), parameterKey: "def" };
    }
    case "damage-scale-action":
    case "damage-scale-blackboard": {
      const key =
        blackboard.find((entry) =>
          /^(damage_scale|ep_damage_scale|damage_scale_factor)$/.test(entry.key),
        )?.key ?? "damage_scale";
      const value = blackboardNumber(blackboard, key);
      if (value === undefined) return null;
      return { value: normalizeDamageScale(value), parameterKey: key };
    }
    case "additional-atk-packet": {
      const value = blackboardNumber(blackboard, "atk_scale");
      if (value === undefined) return null;
      return { value, parameterKey: "atk_scale" };
    }
    default: {
      const value = blackboardNumber(blackboard, zoneId.toLowerCase());
      if (value === undefined) return null;
      return { value, parameterKey: zoneId.toLowerCase() };
    }
  }
}

/** 干员属性参数 → 局外/局内/直加乘区。 */
const CHAR_ATTR_ZONE_MAP = {
  max_hp: {
    outer: "OUTER_MAX_HP",
    inner: "INNER_MAX_HP",
    flat: "FLAT_MAX_HP",
  },
  def: {
    outer: "OUTER_CHAR_DEF",
    inner: "INNER_CHAR_DEF",
    flat: "FLAT_CHAR_DEF",
  },
  magic_resistance: {
    outer: "OUTER_CHAR_RES",
    inner: "INNER_CHAR_RES",
    flat: "FLAT_CHAR_RES",
  },
} as const satisfies Record<
  string,
  { outer: DamageZoneId; inner: DamageZoneId; flat: DamageZoneId }
>;

type CharAttrKey = keyof typeof CHAR_ATTR_ZONE_MAP;

/** 是否为局内条件 buff 载体。 */
function isRuntimeEffectKey(effectKey: string): boolean {
  const lower = effectKey.toLowerCase();
  return ["layer_", "ability", "global_buff"].some((token) => lower.includes(token));
}

/** 从 char_attribute_* 黑板回退提取干员生命/防御/法抗贡献。 */
function buildCharAttributeFallbacks(
  item: Pick<RelicItemForContribution, "id" | "name">,
  effect: RelicEffectForContribution,
  coveredZoneIds: ReadonlySet<string>,
): FormulaContribution[] {
  const effectKey = effect.key.toLowerCase();
  const isMul =
    effectKey === "char_attribute_mul" || effectKey === "char_squad_attribute_mul";
  const isAdd = effectKey === "char_attribute_add";
  const isRuntime = isRuntimeEffectKey(effect.key);
  if (!isMul && !isAdd && !isRuntime) return [];

  const results: FormulaContribution[] = [];
  for (const parameterKey of Object.keys(CHAR_ATTR_ZONE_MAP) as CharAttrKey[]) {
    const value = blackboardNumber(effect.blackboard, parameterKey);
    if (value === undefined) continue;
    const zones = CHAR_ATTR_ZONE_MAP[parameterKey];
    let zoneId: DamageZoneId | null = null;
    let ruleId: string | null = null;
    if (isAdd) {
      zoneId = zones.flat;
      ruleId = `${parameterKey}-flat-fallback`;
    } else if (isMul) {
      zoneId = zones.outer;
      ruleId = `${parameterKey}-outer-fallback`;
    } else if (isRuntime) {
      zoneId = zones.inner;
      ruleId = `${parameterKey}-inner-fallback`;
    }
    if (!zoneId || !ruleId || coveredZoneIds.has(zoneId)) continue;
    results.push({
      id: `${item.id}:${effect.effectId}:fallback:${zoneId}`,
      zoneId,
      value,
      tooltip: item.name,
      reason: `黑板回退：${effect.key}.${parameterKey} → ${zoneId}`,
      active: true,
      source: {
        kind: "relic",
        itemId: item.id,
        effectPath: effect.jsonPath,
        buffKey: effect.key,
        parameterKey,
        ruleId,
      },
    });
  }
  return results;
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
  } = {},
): FormulaContribution[] {
  const active = options.active ?? true;
  const inactiveSuffix =
    !active && options.inactiveReasons?.length
      ? `（未生效：${options.inactiveReasons.join("；")}）`
      : "";
  const contributions: FormulaContribution[] = [];
  const coveredZoneIds = new Set<string>();
  for (const prediction of effect.predictions) {
    const extracted = extractContributionValue(
      prediction.ruleId,
      prediction.id,
      effect.blackboard,
    );
    if (!extracted) continue;
    coveredZoneIds.add(prediction.id);
    contributions.push({
      id: `${item.id}:${effect.effectId}:${prediction.ruleId}:${prediction.id}`,
      zoneId: prediction.id as DamageZoneId,
      value: extracted.value,
      tooltip: item.name,
      reason: `${prediction.reason}${inactiveSuffix}`,
      active,
      source: {
        kind: "relic",
        itemId: item.id,
        effectPath: effect.jsonPath,
        buffKey: effect.key,
        parameterKey: extracted.parameterKey,
        ruleId: prediction.ruleId,
      },
    });
  }
  contributions.push(
    ...buildCharAttributeFallbacks(item, effect, coveredZoneIds).map((entry) => ({
      ...entry,
      active,
      reason: `${entry.reason ?? ""}${inactiveSuffix}`,
    })),
  );
  return contributions;
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
    key: effect.key,
    blackboard: effect.blackboard,
    jsonPath: effect.jsonPath,
    predictions: effect.predictions,
  };
}
