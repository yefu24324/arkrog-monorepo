import type { DamageZoneId } from "../domain/damage-zones.js";

/** 求和乘区的结构化聚合规则。 */
export interface SumZoneAggregation {
  /** 聚合方式判别字段。 */
  kind: "sum";
  /** 没有贡献项时的基数。 */
  base: number;
  /** 每个贡献项进入总和前统一乘以的系数。 */
  termScale: number;
}

/** 独立来源逐项相乘的结构化聚合规则。 */
export interface ProductOnePlusZoneAggregation {
  /** 聚合方式判别字段。 */
  kind: "product-one-plus";
}

/** 实验乘区支持的聚合规则。 */
export type ZoneAggregation = SumZoneAggregation | ProductOnePlusZoneAggregation;

/** 一条可计算、可生成说明的实验乘区定义。 */
export interface FormulaZoneDefinition {
  /** 稳定乘区 ID。 */
  id: DamageZoneId;
  /** 完整公式中展示的短符号。 */
  symbol: string;
  /** 人类可读乘区名称。 */
  name: string;
  /** 乘区用途说明。 */
  tooltip: string;
  /** 单个贡献项的数值单位。 */
  unit: "point" | "ratio" | "percent" | "damage";
  /** 区内贡献项的结构化聚合方式。 */
  aggregation: ZoneAggregation;
}

/**
 * 与现有 DAMAGE_ZONES 并行的实验乘区定义。
 * 这里刻意不修改旧文件，等数值对照完成后再决定替换方式。
 */
export const FORMULA_DAMAGE_ZONES = {
  FLAT_ATK: {
    id: "FLAT_ATK",
    symbol: "F",
    name: "攻击力直加",
    tooltip: "在百分比攻击力乘区之前加入基础攻击力的点数贡献。",
    unit: "point",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
  OUTER_ATK: {
    id: "OUTER_ATK",
    symbol: "O",
    name: "局外攻击力加成",
    tooltip: "编队、藏品 rune 等局外百分比攻击力在区内加算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  INNER_ATK: {
    id: "INNER_ATK",
    symbol: "I",
    name: "局内攻击力加成",
    tooltip: "战斗内百分比攻击力在区内加算，并与局外攻击区乘算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  FLAT_MAX_HP: {
    id: "FLAT_MAX_HP",
    symbol: "HPf",
    name: "干员生命直加",
    tooltip: "在百分比生命乘区之前加入基础最大生命的点数贡献。",
    unit: "point",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
  OUTER_MAX_HP: {
    id: "OUTER_MAX_HP",
    symbol: "HPo",
    name: "局外生命加成",
    tooltip: "编队、藏品 rune 等局外百分比生命在区内加算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  INNER_MAX_HP: {
    id: "INNER_MAX_HP",
    symbol: "HPi",
    name: "局内生命加成",
    tooltip: "战斗内百分比生命在区内加算，并与局外生命区乘算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  FLAT_CHAR_DEF: {
    id: "FLAT_CHAR_DEF",
    symbol: "DEFf",
    name: "干员防御直加",
    tooltip: "在百分比防御乘区之前加入基础防御的点数贡献。",
    unit: "point",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
  OUTER_CHAR_DEF: {
    id: "OUTER_CHAR_DEF",
    symbol: "DEFo",
    name: "局外防御加成",
    tooltip: "编队、藏品 rune 等局外百分比防御在区内加算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  INNER_CHAR_DEF: {
    id: "INNER_CHAR_DEF",
    symbol: "DEFi",
    name: "局内防御加成",
    tooltip: "战斗内百分比防御在区内加算，并与局外防御区乘算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  FLAT_CHAR_RES: {
    id: "FLAT_CHAR_RES",
    symbol: "RESf",
    name: "干员法抗直加",
    tooltip: "在百分比法抗乘区之前加入基础法抗的点数贡献。",
    unit: "point",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
  OUTER_CHAR_RES: {
    id: "OUTER_CHAR_RES",
    symbol: "RESo",
    name: "局外法抗加成",
    tooltip: "编队、藏品 rune 等局外百分比法抗在区内加算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  INNER_CHAR_RES: {
    id: "INNER_CHAR_RES",
    symbol: "RESi",
    name: "局内法抗加成",
    tooltip: "战斗内百分比法抗在区内加算，并与局外法抗区乘算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: 1 },
  },
  DEF_PERCENT: {
    id: "DEF_PERCENT",
    symbol: "DP",
    name: "敌方防御百分比降低",
    tooltip: "先按比例修改敌方基础防御，再处理防御点数直减。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: -1 },
  },
  DEF_FLAT: {
    id: "DEF_FLAT",
    symbol: "DF",
    name: "敌方防御点数直减",
    tooltip: "百分比防御结算后减去的正向点数降低量。",
    unit: "point",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
  RES_PERCENT: {
    id: "RES_PERCENT",
    symbol: "RP",
    name: "敌方法抗百分比降低",
    tooltip: "先按比例修改敌方基础法抗，再处理法抗点数直减。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: -1 },
  },
  RES_FLAT: {
    id: "RES_FLAT",
    symbol: "RF",
    name: "敌方法抗点数直减",
    tooltip: "百分比法抗结算后减去的正向点数降低量。",
    unit: "point",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
  DAMAGE_AMPLIFICATION: {
    id: "DAMAGE_AMPLIFICATION",
    symbol: "AMP",
    name: "独立伤害放大",
    tooltip: "同一伤害类型下，不同独立来源分别按一加倍率相乘。",
    unit: "ratio",
    aggregation: { kind: "product-one-plus" },
  },
  ENEMY_HP_RELIC: {
    id: "ENEMY_HP_RELIC",
    symbol: "HP_R",
    name: "藏品敌方生命降低",
    tooltip: "普通藏品造成的敌方生命降低量在本区加算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: -1 },
  },
  ENEMY_HP_COPPER: {
    id: "ENEMY_HP_COPPER",
    symbol: "HP_C",
    name: "通宝敌方生命降低",
    tooltip: "通宝内部加算，并与普通藏品敌方生命区乘算。",
    unit: "ratio",
    aggregation: { kind: "sum", base: 1, termScale: -1 },
  },
  ATTACK_SPEED: {
    id: "ATTACK_SPEED",
    symbol: "SPD",
    name: "攻击速度加成",
    tooltip: "攻击速度点数在区内加算，并转换为每秒攻击次数倍率。",
    unit: "percent",
    aggregation: { kind: "sum", base: 1, termScale: 0.01 },
  },
  SPECIAL_TARGET_AMPLIFICATION: {
    id: "SPECIAL_TARGET_AMPLIFICATION",
    symbol: "HW",
    name: "特定目标独立增伤",
    tooltip: "仅在目标条件命中时，按来源逐项独立相乘。",
    unit: "ratio",
    aggregation: { kind: "product-one-plus" },
  },
  ADDITIONAL_DAMAGE_PACKET: {
    id: "ADDITIONAL_DAMAGE_PACKET",
    symbol: "PACKET",
    name: "追加伤害包",
    tooltip: "各追加伤害包独立完成自身结算后，在总伤害阶段求和。",
    unit: "damage",
    aggregation: { kind: "sum", base: 0, termScale: 1 },
  },
} as const satisfies Record<DamageZoneId, FormulaZoneDefinition>;

/** 通过稳定 ID 获取实验乘区定义。 */
export function getFormulaZone(zoneId: DamageZoneId): FormulaZoneDefinition {
  return FORMULA_DAMAGE_ZONES[zoneId];
}
