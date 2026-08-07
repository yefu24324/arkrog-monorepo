/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import { FormulaZoneId } from "../../../formula/formula-book.js";
import type {
  GeneratedFormulaContribution,
  MechanicsEffectInput,
  MechanicsProgram,
} from "../../contracts/program.js";
import { blackboardNumber } from "../../shared/blackboard.js";

/** 已由人类知识和正式图谱共同确认的元素倍率效果。 */
interface ElementalDamageEffectRule {
  /** 外层 GameData buff 载体。 */
  effectKey: string;
  /** 黑板 key 参数解析出的战斗模板。 */
  mechanicName: string;
  /** 需要读取的数值参数。 */
  parameterKey: string;
  /** FormulaBook 中实际接收绝对倍率的乘区。 */
  zoneId: FormulaZoneId.enemy_ep_damage_mul | FormulaZoneId.enemy_elment_damage_mul;
}

/**
 * 规则只覆盖正式图谱中三条 human_verified 边。
 * 藏品 ID 作为第一层版本护栏，模板和参数键作为第二层数据护栏。
 */
const ELEMENTAL_DAMAGE_EFFECT_RULES: Readonly<Record<string, readonly ElementalDamageEffectRule[]>> = {
  rogue_6_relic_legacy_104: [{
    effectKey: "global_buff_normal",
    mechanicName: "enemy_take_element_damage_up",
    parameterKey: "damage_scale",
    zoneId: FormulaZoneId.enemy_elment_damage_mul,
  }],
  rogue_6_relic_fight_21: [
    {
      effectKey: "global_buff_normal",
      mechanicName: "enemy_damage_scale[ep]",
      parameterKey: "ep_damage_scale",
      zoneId: FormulaZoneId.enemy_ep_damage_mul,
    },
    {
      effectKey: "global_buff_normal",
      mechanicName: "enemy_take_element_damage_up",
      parameterKey: "damage_scale",
      zoneId: FormulaZoneId.enemy_elment_damage_mul,
    },
  ],
};

/** 取得一条已确认元素倍率效果的程序；没有精确签名时交给后续通用注册表。 */
export function elementalDamageProgramForEffect(
  relicId: string,
  effect: MechanicsEffectInput,
): MechanicsProgram | undefined {
  const rule = ELEMENTAL_DAMAGE_EFFECT_RULES[relicId]?.find((candidate) =>
    candidate.effectKey === effect.key
    && candidate.mechanicName === effect.mechanicName
  );
  if (!rule) return undefined;
  return (matchedEffect: MechanicsEffectInput): readonly GeneratedFormulaContribution[] => {
    const value = blackboardNumber(matchedEffect.blackboard, rule.parameterKey);
    return value === undefined || value === 0
      ? []
      : [{ zoneId: rule.zoneId, value }];
  };
}
