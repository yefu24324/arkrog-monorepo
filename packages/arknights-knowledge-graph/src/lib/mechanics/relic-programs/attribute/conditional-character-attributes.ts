/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import { FormulaZoneId } from "../../../formula/formula-book.js";
import type {
  GeneratedFormulaContribution,
  MechanicsEffectInput,
} from "../../contracts/program.js";
import { blackboardNumber } from "../../shared/blackboard.js";

/** 明确属于敌方或特殊最终倍率的模板不能按干员条件属性解释。 */
const EXCLUDED_MECHANIC_PARTS = ["enemy", "defdown", "rogue_6_start_3"];

/**
 * 解释 char_ability_new 与 global_buff_normal 的常见干员战斗内属性。
 * 这里只归纳图谱已有一致预测的四类参数；层数、目标或算法不明确的模板仍保持 unknown。
 */
export function conditionalCharacterAttributeProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const mechanicName = effect.mechanicName.toLowerCase();
  if (EXCLUDED_MECHANIC_PARTS.some((part) => mechanicName.includes(part))) return [];

  const configuration = [
    ["atk", FormulaZoneId.char_in_atk_mul],
    ["def", FormulaZoneId.char_in_def_mul],
    ["max_hp", FormulaZoneId.char_in_max_hp_mul],
    ["attack_speed", FormulaZoneId.char_direct_attack_speed_add],
  ] as const;
  return configuration.flatMap(([parameter, zoneId]) => {
    const value = blackboardNumber(effect.blackboard, parameter);
    return value === undefined || value === 0 ? [] : [{ zoneId, value }];
  });
}
