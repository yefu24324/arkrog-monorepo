/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import {
  FormulaZoneId,
  type FormulaWritableZoneId,
} from "../../../formula/formula-book.js";
import type {
  GeneratedFormulaContribution,
  MechanicsEffectInput,
} from "../../contracts/program.js";
import { blackboardNumber } from "../../shared/blackboard.js";

/** 静态属性载体与 FormulaBook 局外乘区的配置。 */
const MULTIPLIER_ZONES = [
  ["atk", FormulaZoneId.char_out_atk_mul],
  ["def", FormulaZoneId.char_out_def_mul],
  ["max_hp", FormulaZoneId.char_out_max_hp_mul],
] as const;

/** 静态属性点数载体与 FormulaBook 局外/直接乘区的配置。 */
const ADDITION_ZONES = [
  ["atk", FormulaZoneId.char_out_atk_add],
  ["def", FormulaZoneId.char_out_def_add],
  ["max_hp", FormulaZoneId.char_out_max_hp_add],
  ["attack_speed", FormulaZoneId.char_direct_attack_speed_add],
] as const;

/** 按配置读取非零有限值并形成公式贡献。 */
function configuredContributions(
  effect: MechanicsEffectInput,
  zones: readonly (readonly [string, FormulaWritableZoneId])[],
  scale = 1,
): GeneratedFormulaContribution[] {
  return zones.flatMap(([parameter, zoneId]) => {
    const value = blackboardNumber(effect.blackboard, parameter);
    return value === undefined || value === 0 || scale === 0
      ? []
      : [{ zoneId, value: value * scale }];
  });
}

/** 解释 char_attribute_mul 与 char_squad_attribute_mul。 */
export function characterAttributeMultiplierProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  return configuredContributions(effect, MULTIPLIER_ZONES);
}

/** 解释 char_attribute_add 与 char_squad_attribute_add。 */
export function characterAttributeAdditionProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  return configuredContributions(effect, ADDITION_ZONES);
}

/** 解释显式按当前层数生效的静态属性倍率。 */
export function layeredCharacterAttributeMultiplierProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  return configuredContributions(effect, MULTIPLIER_ZONES, Math.max(0, effect.layer));
}

/** 解释显式按当前层数生效的静态属性点数。 */
export function layeredCharacterAttributeAdditionProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  return configuredContributions(effect, ADDITION_ZONES, Math.max(0, effect.layer));
}
