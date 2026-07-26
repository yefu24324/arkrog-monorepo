import {
  add,
  constant,
  divide,
  formula,
  input,
  max,
  multiply,
  subtract,
  zone,
  type DamageFormulaDefinition,
  type DamageFormulaId,
} from "./ast.js";

/**
 * 与旧计算器并行验证的完整实验公式簿。
 * 最低伤害比例等尚需按具体战斗语义确认的常量作为输入暴露，避免把未经验证的数值写死。
 */
export const DAMAGE_FORMULA_BOOK = {
  FINAL_ATK: {
    id: "FINAL_ATK",
    name: "最终攻击力",
    symbol: "ATK",
    tooltip: "攻击力点数直加后，依次乘以局外和局内攻击力乘区。",
    expression: multiply(
      "最终攻击力各阶段乘算",
      add("基础攻击力与点数直加", input("ATK0", "ATK₀", "未应用实验乘区前的基础攻击力"), zone("FLAT_ATK")),
      zone("OUTER_ATK"),
      zone("INNER_ATK"),
    ),
  },
  FINAL_CHAR_HP: {
    id: "FINAL_CHAR_HP",
    name: "干员最终最大生命",
    symbol: "HP_char",
    tooltip: "生命点数直加后，依次乘以局外和局内生命乘区。",
    expression: multiply(
      "干员最大生命各阶段乘算",
      add(
        "基础生命与点数直加",
        input("CHAR_HP0", "HP₀", "未应用实验乘区前的干员基础最大生命"),
        zone("FLAT_MAX_HP"),
      ),
      zone("OUTER_MAX_HP"),
      zone("INNER_MAX_HP"),
    ),
  },
  FINAL_CHAR_DEF: {
    id: "FINAL_CHAR_DEF",
    name: "干员最终防御力",
    symbol: "DEF_char",
    tooltip: "防御点数直加后，依次乘以局外和局内防御乘区。",
    expression: multiply(
      "干员防御力各阶段乘算",
      add(
        "基础防御与点数直加",
        input("CHAR_DEF0", "DEF₀", "未应用实验乘区前的干员基础防御力"),
        zone("FLAT_CHAR_DEF"),
      ),
      zone("OUTER_CHAR_DEF"),
      zone("INNER_CHAR_DEF"),
    ),
  },
  FINAL_CHAR_RES: {
    id: "FINAL_CHAR_RES",
    name: "干员最终法术抗性",
    symbol: "RES_char",
    tooltip: "法抗点数直加后，依次乘以局外和局内法抗乘区。",
    expression: multiply(
      "干员法术抗性各阶段乘算",
      add(
        "基础法抗与点数直加",
        input("CHAR_RES0", "RES₀", "未应用实验乘区前的干员基础法术抗性"),
        zone("FLAT_CHAR_RES"),
      ),
      zone("OUTER_CHAR_RES"),
      zone("INNER_CHAR_RES"),
    ),
  },
  EFFECTIVE_DEF: {
    id: "EFFECTIVE_DEF",
    name: "敌方有效防御力",
    symbol: "DEF*",
    tooltip: "先结算防御百分比修改，再扣除防御点数直减，最终不低于零。",
    expression: max(
      "防御力下限",
      constant(0),
      subtract(
        "百分比防御减去点数直减",
        multiply("防御百分比修改", input("DEF0", "DEF₀", "敌方基础防御力"), zone("DEF_PERCENT")),
        zone("DEF_FLAT"),
      ),
    ),
  },
  EFFECTIVE_RES: {
    id: "EFFECTIVE_RES",
    name: "敌方有效法术抗性",
    symbol: "RES*",
    tooltip: "先结算法抗百分比修改，再扣除法抗点数直减。",
    expression: subtract(
      "百分比法抗减去点数直减",
      multiply("法抗百分比修改", input("RES0", "RES₀", "敌方基础法术抗性"), zone("RES_PERCENT")),
      zone("RES_FLAT"),
    ),
  },
  ENEMY_MAX_HP: {
    id: "ENEMY_MAX_HP",
    name: "敌方最终最大生命值",
    symbol: "HP",
    tooltip: "普通藏品生命区与通宝生命区分别加算后彼此乘算。",
    expression: multiply(
      "敌方最大生命值乘区",
      input("HP0", "HP₀", "敌方基础最大生命值"),
      zone("ENEMY_HP_RELIC"),
      zone("ENEMY_HP_COPPER"),
    ),
  },
  PHYSICAL_MAIN_DAMAGE: {
    id: "PHYSICAL_MAIN_DAMAGE",
    name: "物理主伤害包",
    symbol: "DMG_phy",
    tooltip: "物理攻击倍率结算后扣除有效防御，并应用最低伤害与独立增伤。",
    expression: multiply(
      "物理伤害独立乘区",
      max(
        "物理伤害与最低伤害取较大值",
        subtract(
          "攻击伤害扣除防御",
          multiply(
            "物理攻击倍率",
            formula("FINAL_ATK"),
            input("PHYSICAL_ATTACK_SCALE", "S_phy", "物理伤害包的攻击力倍率；无物理伤害时传入零"),
          ),
          formula("EFFECTIVE_DEF"),
        ),
        multiply(
          "物理最低伤害",
          formula("FINAL_ATK"),
          input("PHYSICAL_ATTACK_SCALE", "S_phy", "物理伤害包的攻击力倍率；无物理伤害时传入零"),
          input("PHYSICAL_MIN_DAMAGE_RATIO", "MIN_phy", "物理最低伤害比例"),
        ),
      ),
      zone("DAMAGE_AMPLIFICATION", "physical"),
      zone("SPECIAL_TARGET_AMPLIFICATION", "physical"),
    ),
  },
  MAGICAL_MAIN_DAMAGE: {
    id: "MAGICAL_MAIN_DAMAGE",
    name: "法术主伤害包",
    symbol: "DMG_mag",
    tooltip: "攻击倍率乘以法抗减伤系数，并应用法术最低伤害与独立增伤。",
    expression: multiply(
      "法术伤害完整结算",
      formula("FINAL_ATK"),
      input("MAGICAL_ATTACK_SCALE", "S_mag", "法术伤害包的攻击力倍率；无法术伤害时传入零"),
      max(
        "法抗系数与最低伤害系数取较大值",
        input("MAGICAL_MIN_DAMAGE_RATIO", "MIN_mag", "法术最低伤害比例"),
        subtract("法抗减伤系数", constant(1), divide("法抗百分比", formula("EFFECTIVE_RES"), constant(100))),
      ),
      zone("DAMAGE_AMPLIFICATION", "magical"),
      zone("SPECIAL_TARGET_AMPLIFICATION", "magical"),
    ),
  },
  PURE_MAIN_DAMAGE: {
    id: "PURE_MAIN_DAMAGE",
    name: "真实主伤害包",
    symbol: "DMG_pure",
    tooltip: "真实伤害不经过防御或法抗，只应用攻击倍率与对应独立增伤。",
    expression: multiply(
      "真实伤害完整结算",
      formula("FINAL_ATK"),
      input("PURE_ATTACK_SCALE", "S_pure", "真实伤害包的攻击力倍率；无真实伤害时传入零"),
      zone("DAMAGE_AMPLIFICATION", "pure"),
      zone("SPECIAL_TARGET_AMPLIFICATION", "pure"),
    ),
  },
  ELEMENTAL_MAIN_DAMAGE: {
    id: "ELEMENTAL_MAIN_DAMAGE",
    name: "元素主伤害包",
    symbol: "DMG_ep",
    tooltip: "接收独立完成损伤爆发等前置结算的元素伤害，并应用元素独立增伤。",
    expression: multiply(
      "元素伤害完整结算",
      input("RAW_ELEMENTAL_DAMAGE", "EP₀", "进入通用增伤阶段前的元素伤害"),
      zone("DAMAGE_AMPLIFICATION", "elemental"),
      zone("SPECIAL_TARGET_AMPLIFICATION", "elemental"),
    ),
  },
  TOTAL_DAMAGE: {
    id: "TOTAL_DAMAGE",
    name: "单次总伤害",
    symbol: "DMG_total",
    tooltip: "各主伤害类型与已经独立结算完成的追加伤害包求和。",
    expression: add(
      "所有伤害包求和",
      formula("PHYSICAL_MAIN_DAMAGE"),
      formula("MAGICAL_MAIN_DAMAGE"),
      formula("PURE_MAIN_DAMAGE"),
      formula("ELEMENTAL_MAIN_DAMAGE"),
      zone("ADDITIONAL_DAMAGE_PACKET"),
    ),
  },
  DPS: {
    id: "DPS",
    name: "理论每秒伤害",
    symbol: "DPS",
    tooltip: "单次总伤害乘以攻击速度倍率，再除以基础攻击间隔。",
    expression: divide(
      "单位时间伤害",
      multiply("攻击速度修正后的伤害", formula("TOTAL_DAMAGE"), zone("ATTACK_SPEED")),
      input("BASE_ATTACK_INTERVAL", "T₀", "未应用攻击速度点数前的基础攻击间隔"),
    ),
  },
} as const satisfies Record<DamageFormulaId, DamageFormulaDefinition>;

/** 通过稳定 ID 获取公式定义。 */
export function getDamageFormula(formulaId: DamageFormulaId): DamageFormulaDefinition {
  return DAMAGE_FORMULA_BOOK[formulaId];
}
