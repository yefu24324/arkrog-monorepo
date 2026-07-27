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
  type FormulaDefinition,
  type FormulaId,
} from "./ast.js";

/**
 * 与旧计算器并行验证的完整实验公式簿。
 * 最低伤害比例等尚需按具体战斗语义确认的常量作为输入暴露，避免把未经验证的数值写死。
 */
export const FORMULA_BOOK = {
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
  FINAL_DEPLOY_COST: {
    id: "FINAL_DEPLOY_COST",
    name: "最终部署费用",
    symbol: "COST",
    tooltip: "部署费用先结算点数修改，再结算费用倍率，结果不低于零。",
    expression: max(
      "部署费用下限",
      constant(0),
      multiply(
        "部署费用点数与倍率阶段",
        add("基础费用与点数修改", input("DEPLOY_COST0", "COST₀", "干员基础部署费用"), zone("DEPLOY_COST_ADD")),
        zone("DEPLOY_COST_MULTIPLIER"),
      ),
    ),
  },
  FINAL_INITIAL_DP: {
    id: "FINAL_INITIAL_DP",
    name: "战斗初始部署费用",
    symbol: "DP₀*",
    tooltip: "初始部署费用与干员部署费用是不同资源，独立做点数加算。",
    expression: max(
      "初始部署费用下限",
      constant(0),
      add("基础初始费用与藏品修改", input("INITIAL_DP0", "DP₀", "关卡基础初始部署费用"), zone("INITIAL_DP_ADD")),
    ),
  },
  FINAL_BLOCK_COUNT: {
    id: "FINAL_BLOCK_COUNT",
    name: "最终阻挡数",
    symbol: "BLOCK",
    tooltip: "阻挡数先做点数加算，再应用 ensure_block 等效果提供的最低阻挡数。",
    expression: max(
      "阻挡数最低约束",
      zone("MIN_BLOCK_COUNT"),
      add("基础阻挡数与点数修改", input("BLOCK_COUNT0", "BLOCK₀", "干员基础阻挡数"), zone("BLOCK_COUNT_ADD")),
    ),
  },
  FINAL_INITIAL_SP: {
    id: "FINAL_INITIAL_SP",
    name: "最终初始技力",
    symbol: "SP₀*",
    tooltip: "只计算出生或部署时获得的初始技力，不混入攻击、受击等事件回复。",
    expression: max(
      "初始技力下限",
      constant(0),
      add("基础初始技力与藏品修改", input("INITIAL_SP0", "SP₀", "技能基础初始技力"), zone("INITIAL_SP_ADD")),
    ),
  },
  FINAL_SP_COST: {
    id: "FINAL_SP_COST",
    name: "最终技力消耗",
    symbol: "SP_cost",
    tooltip: "技力消耗使用 GameData 提供的绝对 scale 逐项乘算。",
    expression: max(
      "技力消耗下限",
      constant(0),
      multiply("基础消耗与倍率", input("SP_COST0", "SPC₀", "技能基础技力消耗"), zone("SP_COST_MULTIPLIER")),
    ),
  },
  FINAL_SP_RECOVERY_PER_SECOND: {
    id: "FINAL_SP_RECOVERY_PER_SECOND",
    name: "每秒技力恢复",
    symbol: "SPR",
    tooltip: "自然技力恢复按每秒点数加算，不混入事件触发回复。",
    expression: add(
      "基础恢复与每秒恢复修改",
      input("SP_RECOVERY_PER_SECOND0", "SPR₀", "技能基础每秒技力恢复"),
      zone("SP_RECOVERY_PER_SECOND_ADD"),
    ),
  },
  SP_GAIN_PER_TRIGGER: {
    id: "SP_GAIN_PER_TRIGGER",
    name: "单次事件技力回复",
    symbol: "SP_trigger",
    tooltip: "调用方必须用 triggerType 筛选同一种攻击、受击、击倒或技能事件。",
    expression: zone("SP_GAIN_PER_TRIGGER"),
  },
  PHYSICAL_EVASION_RATE: {
    id: "PHYSICAL_EVASION_RATE",
    name: "物理闪避率",
    symbol: "EVA_phy",
    tooltip: "不同物理闪避来源按概率并集计算。",
    expression: zone("PHYSICAL_EVASION"),
  },
  MAGICAL_EVASION_RATE: {
    id: "MAGICAL_EVASION_RATE",
    name: "法术闪避率",
    symbol: "EVA_mag",
    tooltip: "不同法术闪避来源按概率并集计算。",
    expression: zone("MAGICAL_EVASION"),
  },
  FINAL_ENEMY_ATK: {
    id: "FINAL_ENEMY_ATK",
    name: "敌人最终攻击力",
    symbol: "EATK",
    tooltip: "敌人基础攻击依次结算局外倍率增量区和局内绝对倍率区。",
    expression: multiply(
      "敌人攻击力局外与局内阶段",
      input("ENEMY_ATK0", "EATK₀", "敌人基础攻击力"),
      zone("OUTER_ENEMY_ATK"),
      zone("INNER_ENEMY_ATK"),
    ),
  },
  FINAL_ENEMY_ATTACK_SPEED: {
    id: "FINAL_ENEMY_ATTACK_SPEED",
    name: "敌人最终攻击速度",
    symbol: "EASPD",
    tooltip: "敌人基础攻击速度与难度等常驻点数修改加算。",
    expression: add(
      "敌人攻击速度点数修改",
      input("ENEMY_ATTACK_SPEED0", "EASPD₀", "敌人基础攻击速度"),
      zone("ENEMY_ATTACK_SPEED_ADD"),
    ),
  },
  FINAL_ENEMY_MOVE_SPEED: {
    id: "FINAL_ENEMY_MOVE_SPEED",
    name: "敌人最终移动速度",
    symbol: "EMS",
    tooltip: "敌人基础移动速度乘以局外移动速度倍率。",
    expression: multiply(
      "敌人移动速度局外阶段",
      input("ENEMY_MOVE_SPEED0", "EMS₀", "敌人基础移动速度"),
      zone("OUTER_ENEMY_MOVE_SPEED"),
    ),
  },
  FINAL_DEPLOY_LIMIT: {
    id: "FINAL_DEPLOY_LIMIT",
    name: "最终可部署人数",
    symbol: "DLIM",
    tooltip: "关卡基础可部署人数与难度等点数修改加算，最终不低于零。",
    expression: max(
      "可部署人数下限",
      constant(0),
      add(
        "基础可部署人数与点数修改",
        input("DEPLOY_LIMIT0", "DLIM₀", "关卡基础可部署人数"),
        zone("DEPLOY_LIMIT_ADD"),
      ),
    ),
  },
  FINAL_ENEMY_DEF: {
    id: "FINAL_ENEMY_DEF",
    name: "敌人属性结算后防御力",
    symbol: "EDEF",
    tooltip: "先应用敌人自身局外、局内防御属性，再进入减防结算。",
    expression: multiply(
      "敌人防御属性阶段",
      input("DEF0", "DEF₀", "敌人基础防御力"),
      zone("OUTER_ENEMY_DEF"),
      zone("INNER_ENEMY_DEF"),
    ),
  },
  FINAL_ENEMY_RES: {
    id: "FINAL_ENEMY_RES",
    name: "敌人属性结算后法术抗性",
    symbol: "ERES",
    tooltip: "敌人基础法抗先应用常驻点数修改，再进入减抗结算。",
    expression: add("敌人基础法抗与属性修改", input("RES0", "RES₀", "敌人基础法术抗性"), zone("ENEMY_RES_ADD")),
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
        multiply("防御百分比修改", formula("FINAL_ENEMY_DEF"), zone("DEF_PERCENT")),
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
      multiply("法抗百分比修改", formula("FINAL_ENEMY_RES"), zone("RES_PERCENT")),
      zone("RES_FLAT"),
    ),
  },
  ENEMY_MAX_HP: {
    id: "ENEMY_MAX_HP",
    name: "敌方最终最大生命值",
    symbol: "HP",
    tooltip: "难度局外生命区、普通藏品区、通宝区与局内生命区依次乘算。",
    expression: multiply(
      "敌方最大生命值乘区",
      input("HP0", "HP₀", "敌方基础最大生命值"),
      zone("OUTER_ENEMY_MAX_HP"),
      zone("ENEMY_HP_RELIC"),
      zone("ENEMY_HP_COPPER"),
      zone("INNER_ENEMY_MAX_HP"),
    ),
  },
  FINAL_ENEMY_DAMAGE_RESISTANCE: {
    id: "FINAL_ENEMY_DAMAGE_RESISTANCE",
    name: "敌人最终物理法术减伤",
    symbol: "EDR",
    tooltip: "局外减伤取最大值，局内减伤取并集，两区的剩余伤害倍率彼此乘算。",
    expression: subtract(
      "敌人最终减伤率",
      constant(1),
      multiply(
        "局外与局内剩余伤害倍率",
        subtract("局外剩余倍率", constant(1), zone("OUTER_ENEMY_DAMAGE_RESISTANCE")),
        subtract("局内剩余倍率", constant(1), zone("INNER_ENEMY_DAMAGE_RESISTANCE")),
      ),
    ),
  },
  CHAR_TAKEN_DAMAGE: {
    id: "CHAR_TAKEN_DAMAGE",
    name: "我方最终承受伤害",
    symbol: "DMG_taken",
    tooltip: "接收完成攻防结算的原始承伤，并应用我方减伤并集。",
    expression: multiply(
      "我方承伤减免",
      input("RAW_INCOMING_DAMAGE", "DMG_in", "进入承伤减免阶段前的伤害"),
      subtract("我方剩余承伤倍率", constant(1), zone("CHAR_DAMAGE_RESISTANCE")),
    ),
  },
  ENEMY_OUTGOING_DAMAGE: {
    id: "ENEMY_OUTGOING_DAMAGE",
    name: "敌人最终造成伤害",
    symbol: "EDMG_out",
    tooltip: "接收完成敌人攻击属性结算的原始伤害，并应用敌人造成伤害降低。",
    expression: multiply(
      "敌人输出伤害降低",
      input("RAW_INCOMING_DAMAGE", "EDMG_raw", "敌人造成伤害降低前的伤害"),
      subtract("敌人剩余输出倍率", constant(1), zone("ENEMY_OUTGOING_DAMAGE_REDUCTION")),
    ),
  },
  ELEMENTAL_IMPAIRMENT_TO_ENEMY: {
    id: "ELEMENTAL_IMPAIRMENT_TO_ENEMY",
    name: "对敌元素损伤累计",
    symbol: "EP_enemy",
    tooltip: "元素损伤放大与敌人基础元素损伤抗性分别结算。",
    expression: multiply(
      "对敌元素损伤结算",
      input("RAW_ELEMENTAL_IMPAIRMENT", "EP_raw", "元素损伤放大前的累计值"),
      zone("ELEMENTAL_IMPAIRMENT_AMPLIFICATION"),
      subtract("敌人元素损伤抗性", constant(1), input("ENEMY_EP_RESISTANCE0", "EPRES₀", "敌人基础元素损伤抗性")),
    ),
  },
  ELEMENTAL_IMPAIRMENT_TO_CHAR: {
    id: "ELEMENTAL_IMPAIRMENT_TO_CHAR",
    name: "我方最终承受元素损伤",
    symbol: "EP_char",
    tooltip: "先应用难度提供的元素损伤提高，再由我方元素损伤减免降低累计。",
    expression: multiply(
      "我方元素损伤减免",
      input("RAW_ELEMENTAL_IMPAIRMENT", "EP_raw", "元素损伤减免前的累计值"),
      zone("CHAR_ELEMENTAL_IMPAIRMENT_AMPLIFICATION"),
      subtract("我方剩余元素损伤倍率", constant(1), zone("CHAR_EP_DAMAGE_RESISTANCE")),
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
      subtract("敌人局外剩余承伤倍率", constant(1), zone("OUTER_ENEMY_DAMAGE_RESISTANCE", "physical")),
      subtract("敌人局内剩余承伤倍率", constant(1), zone("INNER_ENEMY_DAMAGE_RESISTANCE", "physical")),
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
      subtract("敌人局外剩余承伤倍率", constant(1), zone("OUTER_ENEMY_DAMAGE_RESISTANCE", "magical")),
      subtract("敌人局内剩余承伤倍率", constant(1), zone("INNER_ENEMY_DAMAGE_RESISTANCE", "magical")),
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
      subtract(
        "敌人基础元素伤害抗性",
        constant(1),
        input("ENEMY_EP_DAMAGE_RESISTANCE0", "EPDR₀", "敌人基础元素伤害抗性"),
      ),
      zone("ENEMY_EP_DAMAGE_RESISTANCE", "elemental"),
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
} as const satisfies Record<FormulaId, FormulaDefinition>;

/** 通过稳定 ID 获取公式定义。 */
export function getFormula(formulaId: FormulaId): FormulaDefinition {
  return FORMULA_BOOK[formulaId];
}

/** @deprecated 公式簿已不限于伤害，请使用 FORMULA_BOOK。 */
export const DAMAGE_FORMULA_BOOK = FORMULA_BOOK;

/** @deprecated 请使用 getFormula；保留旧函数名兼容现有消费者。 */
export const getDamageFormula = getFormula;
