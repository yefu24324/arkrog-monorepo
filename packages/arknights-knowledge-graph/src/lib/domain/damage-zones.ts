/** 伤害公式中的稳定乘区定义；这里只定义公式本体，不参与效果推断。 */
export const DAMAGE_ZONES = [
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
  { id: "DEF_PERCENT", symbol: "DP", name: "敌方防御百分比降低", stage: 40, stacking: "百分比修改先于点数直减", formula: "DEF0 × (1 - ΣDP)" },
  { id: "DEF_FLAT", symbol: "DF", name: "敌方防御点数直减", stage: 50, stacking: "区内求和", formula: "-ΣDF" },
  { id: "RES_PERCENT", symbol: "RP", name: "敌方法抗百分比降低", stage: 60, stacking: "百分比修改先于点数直减", formula: "RES0 × (1 - ΣRP)" },
  { id: "RES_FLAT", symbol: "RF", name: "敌方法抗点数直减", stage: 70, stacking: "区内求和", formula: "-ΣRF" },
  { id: "DAMAGE_AMPLIFICATION", symbol: "AMP", name: "独立伤害放大", stage: 80, stacking: "不同来源分别乘算", formula: "Πj(1 + AMP[t,j])" },
  { id: "ENEMY_HP_RELIC", symbol: "HP_R", name: "藏品敌方生命降低", stage: 90, stacking: "藏品内部加算", formula: "1 - ΣHP_R" },
  { id: "ENEMY_HP_COPPER", symbol: "HP_C", name: "通宝敌方生命降低", stage: 100, stacking: "通宝内部加算，并与藏品区乘算", formula: "1 - ΣHP_C" },
  { id: "ATTACK_SPEED", symbol: "SPD", name: "攻击速度加成", stage: 110, stacking: "区内加算，只影响 DPS", formula: "(100 + ΣSPD) / 100" },
  { id: "SPECIAL_TARGET_AMPLIFICATION", symbol: "HW", name: "特定目标独立增伤", stage: 120, stacking: "按来源独立乘算", formula: "Πj(1 + HW[j])" },
  { id: "ADDITIONAL_DAMAGE_PACKET", symbol: "PACKET", name: "追加伤害包", stage: 130, stacking: "独立计算后与主伤害包求和", formula: "DMG_main + ΣDMG_packet" },
] as const;

/** 乘区稳定 ID，供语义规则和测试夹具共享。 */
export type DamageZoneId = (typeof DAMAGE_ZONES)[number]["id"];
