import { FormulaZoneId } from "./formula-book.js";

/**
 * FormulaZoneId 对应的中文名称。
 * 名称直接来自枚举成员注释，供程序和界面按需显示，避免消费者各自维护别名。
 * 图谱产物仍只输出 FormulaZoneId，由具体前端决定是否翻译。
 */
export const FORMULA_ZONE_NAMES: Readonly<Record<FormulaZoneId, string>> = {
  [FormulaZoneId.char_base_max_hp]: "干员基础最大生命",
  [FormulaZoneId.char_out_max_hp_add]: "干员局外最大生命加成",
  [FormulaZoneId.char_out_max_hp_mul]: "干员局外最大生命倍率",
  [FormulaZoneId.char_out_max_hp]: "干员局外最大生命",
  [FormulaZoneId.char_in_max_hp_add]: "干员局内最大生命加成",
  [FormulaZoneId.char_in_max_hp_mul]: "干员局内最大生命倍率",
  [FormulaZoneId.char_in_max_hp]: "干员局内最大生命",
  [FormulaZoneId.char_final_max_hp_add]: "干员最终最大生命加成",
  [FormulaZoneId.char_final_max_hp]: "干员最终最大生命",
  [FormulaZoneId.char_base_atk]: "干员基础攻击力",
  [FormulaZoneId.char_out_atk_add]: "干员局外攻击力加成",
  [FormulaZoneId.char_out_atk_mul]: "干员局外攻击力倍率",
  [FormulaZoneId.char_out_atk]: "干员局外攻击力",
  [FormulaZoneId.char_in_atk_add]: "干员局内攻击力加成",
  [FormulaZoneId.char_in_atk_mul]: "干员局内攻击力倍率",
  [FormulaZoneId.char_in_atk]: "干员局内攻击力",
  [FormulaZoneId.char_final_atk_add]: "干员最终攻击力加成",
  [FormulaZoneId.char_final_atk]: "干员最终攻击力",
  [FormulaZoneId.char_base_attack_speed]: "干员基础攻击速度",
  [FormulaZoneId.char_direct_attack_speed_add]: "干员直接攻击速度加成",
  [FormulaZoneId.char_final_attack_speed]: "干员最终攻击速度",
  [FormulaZoneId.char_base_def]: "干员基础防御力",
  [FormulaZoneId.char_out_def_add]: "干员局外防御力加成",
  [FormulaZoneId.char_out_def_mul]: "干员局外防御力倍率",
  [FormulaZoneId.char_out_def]: "干员局外防御力",
  [FormulaZoneId.char_in_def_add]: "干员局内防御力加成",
  [FormulaZoneId.char_in_def_mul]: "干员局内防御力倍率",
  [FormulaZoneId.char_in_def]: "干员局内防御力",
  [FormulaZoneId.char_final_def_add]: "干员最终防御力加成",
  [FormulaZoneId.char_final_def]: "干员最终防御力",
  [FormulaZoneId.enemy_base_max_hp]: "敌方基础生命",
  [FormulaZoneId.enemy_direct_max_hp_mul]: "敌人直接血量乘算",
  [FormulaZoneId.enemy_final_max_hp_mul]: "敌人最终血量乘算",
  [FormulaZoneId.enemy_final_max_hp]: "敌人最终血量",
  [FormulaZoneId.enemy_base_atk]: "敌方基础攻击力",
  [FormulaZoneId.enemy_direct_atk_mul]: "敌人直接攻击力乘算",
  [FormulaZoneId.enemy_final_atk_mul]: "敌人最终攻击力乘算",
  [FormulaZoneId.enemy_final_atk]: "敌人最终攻击力",
  [FormulaZoneId.enemy_base_def]: "敌方基础防御力",
  [FormulaZoneId.enemy_direct_def_mul]: "敌人直接防御力乘算",
  [FormulaZoneId.enemy_final_def_mul]: "敌人最终防御力乘算",
  [FormulaZoneId.enemy_final_def]: "敌人最终防御力",
  [FormulaZoneId.enemy_base_magic_resist]: "敌方基础法抗",
  [FormulaZoneId.enemy_direct_magic_resist_mul]: "敌人直接法抗乘算",
  [FormulaZoneId.enemy_final_magic_resist_mul]: "敌人最终法抗乘算",
  [FormulaZoneId.enemy_final_magic_resist]: "敌人最终法抗",
  [FormulaZoneId.enemy_phy_taken_add]: "敌人物理易伤",
  [FormulaZoneId.enemy_phy_fragile]: "敌人物理脆弱",
  [FormulaZoneId.enemy_phy_damage_mul]: "物理伤害独立增幅",
  [FormulaZoneId.enemy_final_phy_damage_scale]: "敌人受到物理伤害放大",
  [FormulaZoneId.enemy_mag_taken_add]: "敌人法术易伤",
  [FormulaZoneId.enemy_mag_fragile]: "敌人法术脆弱",
  [FormulaZoneId.enemy_mag_damage_mul]: "法术伤害独立增幅",
  [FormulaZoneId.enemy_final_mag_damage_scale]: "敌人受到法术伤害放大",
  [FormulaZoneId.enemy_pure_taken_add]: "敌人真实易伤",
  [FormulaZoneId.enemy_pure_fragile]: "敌人真实脆弱",
  [FormulaZoneId.enemy_pure_damage_mul]: "真实伤害独立增幅",
  [FormulaZoneId.enemy_final_pure_damage_scale]: "敌人受到真实伤害放大",
  [FormulaZoneId.enemy_ep_damage_mul]: "敌人受到元素损伤独立增幅",
  [FormulaZoneId.enemy_elment_damage_mul]: "敌人受到元素伤害独立增幅",
};

/** 读取乘区中文名；调用方已经持有 FormulaZoneId 时无需自行索引常量。 */
export function formulaZoneName(zoneId: FormulaZoneId): string {
  return FORMULA_ZONE_NAMES[zoneId];
}
