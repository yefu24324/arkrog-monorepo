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

/** 按 max_stack_cnt 约束调用方传入的非负整数层数。 */
function boundedLayer(effect: MechanicsEffectInput): number {
  const layer = Number.isFinite(effect.layer) ? Math.max(0, Math.trunc(effect.layer)) : 0;
  const maximum = blackboardNumber(effect.blackboard, "max_stack_cnt");
  return maximum === undefined ? layer : Math.min(layer, maximum);
}

/** 先锋新典训按已开启技能次数提供局内攻击力倍率。 */
export function rogue6PioneerSkillProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "atk");
  const contribution = (value ?? 0) * boundedLayer(effect);
  return contribution === 0
    ? []
    : [{
        zoneId: FormulaZoneId.char_in_atk_mul,
        value: contribution,
        conditions: ["按当前已触发技能次数生效，并受最大层数限制"],
      }];
}

/** 襁褓巨龙把 FINAL_SCALER 增量转换为最终生命区的绝对倍率。 */
export function rogue6Start3Program(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "max_hp");
  return value === undefined || value === 0
    ? []
    : [{ zoneId: FormulaZoneId.enemy_final_max_hp_mul, value: 1 + value }];
}

/** 术师新典训按造成伤害次数降低敌方法抗。 */
export function rogue6CasterAttackProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "magic_resistance");
  const contribution = (value ?? 0) * boundedLayer(effect);
  return contribution === 0
    ? []
    : [{
        zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
        value: contribution,
        conditions: ["按当前造成伤害次数生效，并受最大层数限制"],
      }];
}

/** 支柱新典训同时解释敌方直接防御力与法抗降低。 */
export function supportDefenseDownProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const outputs: GeneratedFormulaContribution[] = [];
  const defense = blackboardNumber(effect.blackboard, "def");
  const resistance = blackboardNumber(effect.blackboard, "magic_resistance");
  if (defense !== undefined && defense !== 0) {
    outputs.push({ zoneId: FormulaZoneId.enemy_direct_def_mul, value: defense });
  }
  if (resistance !== undefined && resistance !== 0) {
    outputs.push({ zoneId: FormulaZoneId.enemy_direct_magic_resist_mul, value: resistance });
  }
  return outputs;
}

/** 录武官按受到伤害次数降低敌方法抗。 */
export function rogue5EnemyMagicResistanceProgram(
  effect: MechanicsEffectInput,
): readonly GeneratedFormulaContribution[] {
  const value = blackboardNumber(effect.blackboard, "magic_resistance");
  const contribution = (value ?? 0) * boundedLayer(effect);
  return contribution === 0
    ? []
    : [{
        zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
        value: contribution,
        conditions: ["按当前受到伤害次数生效，并受最大层数限制"],
      }];
}
