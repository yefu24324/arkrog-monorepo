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

/** 将可能使用绝对倍率编码的直接生命倍率统一成增量。 */
function directMultiplier(value: number): number {
  return value >= 1 ? value - 1 : value;
}

/** 解释明确的敌方攻击力降低模板。 */
export function enemyAttackMultiplierProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "atk");
  return value === undefined || value === 0
    ? []
    : [{ zoneId: FormulaZoneId.enemy_direct_atk_mul, value: directMultiplier(value) }];
}

/** 解释明确的敌方防御力降低模板。 */
export function enemyDefenseMultiplierProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "def");
  return value === undefined || value === 0
    ? []
    : [{ zoneId: FormulaZoneId.enemy_direct_def_mul, value: directMultiplier(value) }];
}

/** 解释明确的敌方最大生命降低模板。 */
export function enemyMaxHpMultiplierProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "max_hp");
  return value === undefined || value === 0
    ? []
    : [{ zoneId: FormulaZoneId.enemy_direct_max_hp_mul, value: directMultiplier(value) }];
}

/** 解释敌方属性载体中当前 FormulaBook 已覆盖的参数。 */
export function enemyAttributeProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const outputs: GeneratedFormulaContribution[] = [];
  const configuration = [
    ["atk", FormulaZoneId.enemy_direct_atk_mul],
    ["def", FormulaZoneId.enemy_direct_def_mul],
    ["max_hp", FormulaZoneId.enemy_direct_max_hp_mul],
    ["magic_resistance", FormulaZoneId.enemy_direct_magic_resist_mul],
  ] as const;
  for (const [parameter, zoneId] of configuration) {
    const value = blackboardNumber(effect.blackboard, parameter);
    if (value !== undefined && value !== 0) {
      outputs.push({ zoneId, value: directMultiplier(value) });
    }
  }
  return outputs;
}
