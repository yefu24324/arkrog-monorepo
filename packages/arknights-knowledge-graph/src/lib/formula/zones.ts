import { FORMULA_ZONES as DOMAIN_FORMULA_ZONES, type FormulaZoneId } from "../domain/damage-zones.js";

/** 求和乘区的结构化聚合规则。 */
export interface SumZoneAggregation {
  /** 聚合方式判别字段。 */
  kind: "sum";
  /** 没有贡献项时的基数。 */
  base: number;
  /** 每个贡献项进入总和前统一乘以的系数。 */
  termScale: number;
}

/** 独立增量逐项乘算的结构化聚合规则。 */
export interface ProductOnePlusZoneAggregation {
  /** 每项以 `1 + value` 进入乘积。 */
  kind: "product-one-plus";
}

/** 黑板已经提供绝对倍率时使用的直接乘积规则。 */
export interface ProductZoneAggregation {
  /** 每项原值直接进入乘积。 */
  kind: "product";
}

/** 概率或减伤按并集聚合的规则。 */
export interface UnionZoneAggregation {
  /** 聚合结果为 `1 - Π(1 - value)`。 */
  kind: "union";
}

/** 互斥局外规则使用的最大值聚合。 */
export interface MaxZoneAggregation {
  /** 聚合结果为所有贡献与基数中的最大值。 */
  kind: "max";
  /** 无贡献时的默认值。 */
  base: number;
}

/** FormulaContext 支持的全部聚合规则。 */
export type ZoneAggregation =
  | SumZoneAggregation
  | ProductOnePlusZoneAggregation
  | ProductZoneAggregation
  | UnionZoneAggregation
  | MaxZoneAggregation;

/** 一条可计算、可生成说明的公式乘区定义。 */
export interface FormulaZoneDefinition {
  /** 稳定乘区 ID。 */
  id: FormulaZoneId;
  /** 完整公式中展示的短符号。 */
  symbol: string;
  /** 人类可读乘区名称。 */
  name: string;
  /** 乘区用途与顺序说明。 */
  tooltip: string;
  /** 单个贡献项的数值单位。 */
  unit: "point" | "ratio" | "percent" | "damage" | "sp-per-second";
  /** 区内贡献项的结构化聚合方式。 */
  aggregation: ZoneAggregation;
}

/** 创建常见的求和聚合配置，避免乘区定义重复可变对象。 */
const sum = (base = 0, termScale = 1): SumZoneAggregation => ({ kind: "sum", base, termScale });

/** 每个稳定乘区对应的唯一聚合语义。 */
const ZONE_AGGREGATIONS: Record<FormulaZoneId, ZoneAggregation> = {
  FLAT_ATK: sum(), OUTER_ATK: sum(1), INNER_ATK: sum(1),
  FLAT_MAX_HP: sum(), OUTER_MAX_HP: sum(1), INNER_MAX_HP: sum(1),
  FLAT_CHAR_DEF: sum(), OUTER_CHAR_DEF: sum(1), INNER_CHAR_DEF: sum(1),
  FLAT_CHAR_RES: sum(), OUTER_CHAR_RES: sum(1), INNER_CHAR_RES: sum(1),
  DEPLOY_COST_ADD: sum(), DEPLOY_COST_MULTIPLIER: sum(1), INITIAL_DP_ADD: sum(),
  BLOCK_COUNT_ADD: sum(), MIN_BLOCK_COUNT: { kind: "max", base: 0 },
  INITIAL_SP_ADD: sum(), SP_COST_MULTIPLIER: { kind: "product" },
  SP_RECOVERY_PER_SECOND_ADD: sum(), SP_GAIN_PER_TRIGGER: sum(),
  PHYSICAL_EVASION: { kind: "union" }, MAGICAL_EVASION: { kind: "union" },
  OUTER_ENEMY_ATK: sum(1), INNER_ENEMY_ATK: { kind: "product" },
  OUTER_ENEMY_DEF: sum(1), INNER_ENEMY_DEF: { kind: "product" },
  OUTER_ENEMY_MAX_HP: sum(1), INNER_ENEMY_MAX_HP: { kind: "product" },
  ENEMY_RES_ADD: sum(), ENEMY_ATTACK_SPEED_ADD: sum(), OUTER_ENEMY_MOVE_SPEED: sum(1),
  DEF_PERCENT: sum(1, -1), DEF_FLAT: sum(), RES_PERCENT: sum(1, -1), RES_FLAT: sum(),
  DAMAGE_AMPLIFICATION: { kind: "product-one-plus" },
  CHAR_DAMAGE_RESISTANCE: { kind: "union" },
  ENEMY_OUTGOING_DAMAGE_REDUCTION: { kind: "union" },
  OUTER_ENEMY_DAMAGE_RESISTANCE: { kind: "max", base: 0 },
  INNER_ENEMY_DAMAGE_RESISTANCE: { kind: "union" },
  CHAR_EP_DAMAGE_RESISTANCE: { kind: "union" },
  ELEMENTAL_IMPAIRMENT_AMPLIFICATION: { kind: "product-one-plus" },
  ENEMY_EP_DAMAGE_RESISTANCE: { kind: "product" },
  CHAR_ELEMENTAL_IMPAIRMENT_AMPLIFICATION: sum(1), DEPLOY_LIMIT_ADD: sum(),
  ENEMY_HP_RELIC: sum(1), ENEMY_HP_COPPER: sum(1),
  ATTACK_SPEED: sum(1, 0.01),
  SPECIAL_TARGET_AMPLIFICATION: { kind: "product-one-plus" },
  ADDITIONAL_DAMAGE_PACKET: sum(),
};

/** 根据属性族给公式 UI 选择稳定单位。 */
function zoneUnit(id: FormulaZoneId): FormulaZoneDefinition["unit"] {
  if (id === "ADDITIONAL_DAMAGE_PACKET") return "damage";
  if (id === "ATTACK_SPEED") return "percent";
  if (id === "SP_RECOVERY_PER_SECOND_ADD") return "sp-per-second";
  if (/FLAT|_ADD$|COUNT|INITIAL|SP_GAIN/.test(id) && !id.includes("RESISTANCE")) return "point";
  return "ratio";
}

/**
 * 通用公式乘区字典。
 * 领域清单负责稳定 ID 与文档顺序，本文件只负责可执行聚合语义。
 */
export const FORMULA_ZONES = Object.fromEntries(
  DOMAIN_FORMULA_ZONES.map((zone) => [zone.id, {
    id: zone.id,
    symbol: zone.symbol,
    name: zone.name,
    tooltip: `${zone.stacking}；${zone.formula}`,
    unit: zoneUnit(zone.id),
    aggregation: ZONE_AGGREGATIONS[zone.id],
  }]),
) as Record<FormulaZoneId, FormulaZoneDefinition>;

/** @deprecated 请使用 FORMULA_ZONES。 */
export const FORMULA_DAMAGE_ZONES = FORMULA_ZONES;

/** 通过稳定 ID 获取公式乘区定义。 */
export function getFormulaZone(zoneId: FormulaZoneId): FormulaZoneDefinition {
  return FORMULA_ZONES[zoneId];
}
