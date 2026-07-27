/**
 * FormulaContext 使用的稳定乘区定义。
 * 文件名暂时保留 damage-zones 以兼容既有导入，但乘区已经覆盖属性、资源和承伤公式。
 */
export const FORMULA_ZONES = [
  { id: "FLAT_ATK", symbol: "F", name: "攻击力直加", stage: 10, stacking: "区内先求和", formula: "ATK0 + ΣF" },
  { id: "OUTER_ATK", symbol: "O", name: "局外攻击力加成", stage: 20, stacking: "同区加算", formula: "1 + ΣO" },
  { id: "INNER_ATK", symbol: "I", name: "局内攻击力加成", stage: 30, stacking: "同区加算，并与局外区乘算", formula: "1 + ΣI" },
  { id: "FLAT_MAX_HP", symbol: "HPf", name: "干员生命直加", stage: 31, stacking: "区内先求和", formula: "CHAR_HP0 + ΣHPf" },
  { id: "OUTER_MAX_HP", symbol: "HPo", name: "局外生命加成", stage: 32, stacking: "同区加算", formula: "1 + ΣHPo" },
  { id: "INNER_MAX_HP", symbol: "HPi", name: "局内生命加成", stage: 33, stacking: "同区加算，并与局外区乘算", formula: "1 + ΣHPi" },
  { id: "FLAT_CHAR_DEF", symbol: "DEFf", name: "干员防御直加", stage: 34, stacking: "区内先求和", formula: "CHAR_DEF0 + ΣDEFf" },
  { id: "OUTER_CHAR_DEF", symbol: "DEFo", name: "局外防御加成", stage: 35, stacking: "同区加算", formula: "1 + ΣDEFo" },
  { id: "INNER_CHAR_DEF", symbol: "DEFi", name: "局内防御加成", stage: 36, stacking: "同区加算，并与局外区乘算", formula: "1 + ΣDEFi" },
  { id: "FLAT_CHAR_RES", symbol: "RESf", name: "干员法抗直加", stage: 37, stacking: "区内先求和", formula: "CHAR_RES0 + ΣRESf" },
  { id: "OUTER_CHAR_RES", symbol: "RESo", name: "局外法抗加成", stage: 38, stacking: "同区加算", formula: "1 + ΣRESo" },
  { id: "INNER_CHAR_RES", symbol: "RESi", name: "局内法抗加成", stage: 39, stacking: "同区加算，并与局外区乘算", formula: "1 + ΣRESi" },
  { id: "DEPLOY_COST_ADD", symbol: "COSTa", name: "部署费用点数修改", stage: 40, stacking: "区内加算", formula: "COST0 + ΣCOSTa" },
  { id: "DEPLOY_COST_MULTIPLIER", symbol: "COSTm", name: "部署费用倍率修改", stage: 41, stacking: "区内加算", formula: "1 + ΣCOSTm" },
  { id: "INITIAL_DP_ADD", symbol: "DP0a", name: "初始部署费用修改", stage: 42, stacking: "区内加算", formula: "DP0 + ΣDP0a" },
  { id: "BLOCK_COUNT_ADD", symbol: "BLOCKa", name: "阻挡数点数修改", stage: 43, stacking: "区内加算", formula: "BLOCK0 + ΣBLOCKa" },
  { id: "MIN_BLOCK_COUNT", symbol: "BLOCKmin", name: "最低阻挡数", stage: 44, stacking: "区内取最大值", formula: "max(0, BLOCKmin[j])" },
  { id: "INITIAL_SP_ADD", symbol: "SP0a", name: "初始技力修改", stage: 45, stacking: "区内加算", formula: "SP0 + ΣSP0a" },
  { id: "SP_COST_MULTIPLIER", symbol: "SPCm", name: "技能技力消耗倍率", stage: 46, stacking: "不同绝对倍率逐项相乘", formula: "ΠjSPCm[j]" },
  { id: "SP_RECOVERY_PER_SECOND_ADD", symbol: "SPRa", name: "每秒技力恢复修改", stage: 47, stacking: "区内加算", formula: "SPR0 + ΣSPRa" },
  { id: "SP_GAIN_PER_TRIGGER", symbol: "SPt", name: "事件触发技力回复", stage: 48, stacking: "相同触发事件内加算", formula: "ΣSPt[event]" },
  { id: "PHYSICAL_EVASION", symbol: "EVAphy", name: "物理闪避", stage: 49, stacking: "按概率并集", formula: "1 - Πj(1 - EVAphy[j])" },
  { id: "MAGICAL_EVASION", symbol: "EVAmag", name: "法术闪避", stage: 50, stacking: "按概率并集", formula: "1 - Πj(1 - EVAmag[j])" },
  { id: "OUTER_ENEMY_ATK", symbol: "EATKo", name: "局外敌人攻击力", stage: 51, stacking: "倍率增量区内加算", formula: "1 + ΣEATKo" },
  { id: "INNER_ENEMY_ATK", symbol: "EATKi", name: "局内敌人攻击力", stage: 52, stacking: "绝对倍率逐项相乘", formula: "ΠjEATKi[j]" },
  { id: "OUTER_ENEMY_DEF", symbol: "EDEFo", name: "局外敌人防御力", stage: 53, stacking: "倍率增量区内加算", formula: "1 + ΣEDEFo" },
  { id: "INNER_ENEMY_DEF", symbol: "EDEFi", name: "局内敌人防御力", stage: 54, stacking: "绝对倍率逐项相乘", formula: "ΠjEDEFi[j]" },
  { id: "OUTER_ENEMY_MAX_HP", symbol: "EHPo", name: "局外敌人最大生命", stage: 55, stacking: "倍率增量区内加算", formula: "1 + ΣEHPo" },
  { id: "INNER_ENEMY_MAX_HP", symbol: "EHPi", name: "局内敌人最大生命", stage: 56, stacking: "绝对倍率逐项相乘", formula: "ΠjEHPi[j]" },
  { id: "ENEMY_RES_ADD", symbol: "ERSa", name: "敌人法抗点数修改", stage: 57, stacking: "区内加算", formula: "RES0 + ΣERSa" },
  { id: "ENEMY_ATTACK_SPEED_ADD", symbol: "EASPD", name: "敌人攻击速度修改", stage: 58, stacking: "区内加算", formula: "EASPD0 + ΣEASPD" },
  { id: "OUTER_ENEMY_MOVE_SPEED", symbol: "EMSo", name: "局外敌人移动速度", stage: 59, stacking: "倍率增量区内加算", formula: "1 + ΣEMSo" },
  { id: "DEF_PERCENT", symbol: "DP", name: "敌方防御百分比降低", stage: 60, stacking: "百分比修改先于点数直减", formula: "DEFbase × (1 - ΣDP)" },
  { id: "DEF_FLAT", symbol: "DF", name: "敌方防御点数直减", stage: 61, stacking: "区内求和", formula: "-ΣDF" },
  { id: "RES_PERCENT", symbol: "RP", name: "敌方法抗百分比降低", stage: 62, stacking: "百分比修改先于点数直减", formula: "RESbase × (1 - ΣRP)" },
  { id: "RES_FLAT", symbol: "RF", name: "敌方法抗点数直减", stage: 63, stacking: "区内求和", formula: "-ΣRF" },
  { id: "DAMAGE_AMPLIFICATION", symbol: "AMP", name: "独立伤害放大", stage: 70, stacking: "不同来源分别乘算", formula: "Πj(1 + AMP[t,j])" },
  { id: "CHAR_DAMAGE_RESISTANCE", symbol: "CDR", name: "我方受到伤害减免", stage: 71, stacking: "按减伤并集乘算", formula: "1 - Πj(1 - CDR[j])" },
  { id: "ENEMY_OUTGOING_DAMAGE_REDUCTION", symbol: "EODR", name: "敌人造成伤害降低", stage: 72, stacking: "按降低量并集乘算", formula: "1 - Πj(1 - EODR[j])" },
  { id: "OUTER_ENEMY_DAMAGE_RESISTANCE", symbol: "EDRo", name: "局外敌人受到伤害减免", stage: 73, stacking: "区内取最大值", formula: "max(0, EDRo[j])" },
  { id: "INNER_ENEMY_DAMAGE_RESISTANCE", symbol: "EDRi", name: "局内敌人受到伤害减免", stage: 74, stacking: "按减伤并集乘算", formula: "1 - Πj(1 - EDRi[j])" },
  { id: "CHAR_EP_DAMAGE_RESISTANCE", symbol: "CEPR", name: "我方元素损伤减免", stage: 75, stacking: "按减免并集乘算", formula: "1 - Πj(1 - CEPR[j])" },
  { id: "ELEMENTAL_IMPAIRMENT_AMPLIFICATION", symbol: "EPAMP", name: "元素损伤放大", stage: 76, stacking: "不同来源分别乘算", formula: "Πj(1 + EPAMP[j])" },
  { id: "ENEMY_EP_DAMAGE_RESISTANCE", symbol: "EEPR", name: "敌人元素伤害抗性修改", stage: 77, stacking: "绝对倍率逐项相乘", formula: "ΠjEEPR[j]" },
  { id: "CHAR_ELEMENTAL_IMPAIRMENT_AMPLIFICATION", symbol: "CEPAMP", name: "我方受到元素损伤提高", stage: 78, stacking: "同一难度体系内加算", formula: "1 + ΣCEPAMP" },
  { id: "DEPLOY_LIMIT_ADD", symbol: "DLIMa", name: "可部署人数修改", stage: 79, stacking: "区内加算", formula: "DLIM0 + ΣDLIMa" },
  { id: "ENEMY_HP_RELIC", symbol: "HP_R", name: "局外藏品敌方生命", stage: 80, stacking: "倍率增量区内加算", formula: "1 + ΣHP_R" },
  { id: "ENEMY_HP_COPPER", symbol: "HP_C", name: "通宝敌方生命", stage: 81, stacking: "倍率增量区内加算，并与普通藏品区乘算", formula: "1 + ΣHP_C" },
  { id: "ATTACK_SPEED", symbol: "SPD", name: "攻击速度加成", stage: 90, stacking: "区内加算，只影响 DPS", formula: "(100 + ΣSPD) / 100" },
  { id: "SPECIAL_TARGET_AMPLIFICATION", symbol: "HW", name: "特定目标独立增伤", stage: 91, stacking: "按来源独立乘算", formula: "Πj(1 + HW[j])" },
  { id: "ADDITIONAL_DAMAGE_PACKET", symbol: "PACKET", name: "追加伤害包", stage: 92, stacking: "独立计算后与主伤害包求和", formula: "DMG_main + ΣDMG_packet" },
] as const;

/** 通用公式乘区稳定 ID。 */
export type FormulaZoneId = (typeof FORMULA_ZONES)[number]["id"];

/** @deprecated 请使用 FORMULA_ZONES；保留旧导出避免迁移期破坏消费者。 */
export const DAMAGE_ZONES = FORMULA_ZONES;

/** @deprecated 请使用 FormulaZoneId；保留旧类型别名避免迁移期破坏消费者。 */
export type DamageZoneId = FormulaZoneId;
