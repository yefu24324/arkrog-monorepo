/**
 * 藏品战斗模板程序注册表。
 * 精确模板程序优先于通用语义规则程序，避免同一黑板参数被按错误目标重复解释。
 */

import type { FormulaDamageType } from "./ast.js";
import type { RelicEffectForContribution } from "./relic-contributions.js";
import type { DamageZoneId } from "../domain/damage-zones.js";

/** 模板或规则程序完成语义解释后产生的标准写入指令。 */
export interface RelicFormulaWrite {
  /** 指令写入的公式乘区。 */
  zoneId: DamageZoneId;
  /** 已按乘区方向规范化的数值。 */
  value: number;
  /** 真正提供数值的黑板参数。 */
  parameterKey: string;
  /** 负责解释该参数的模板或语义规则 ID。 */
  ruleId: string;
  /** 面向公式解释器的计算原因。 */
  reason: string;
  /** 未指定时对所有伤害类型生效。 */
  damageTypes?: readonly FormulaDamageType[];
}

/** 精确战斗模板使用的独立处理函数。 */
export type RelicTemplateProgram = (
  effect: RelicEffectForContribution,
) => readonly RelicFormulaWrite[];

/** 单条图谱语义预测使用的通用处理函数。 */
type RelicRuleProgram = (
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
) => RelicFormulaWrite | null;

/** 按精确 key 读取黑板数值。 */
function blackboardNumber(
  effect: RelicEffectForContribution,
  key: string,
): number | undefined {
  return effect.blackboard.find((entry) => entry.key === key)?.value;
}

/** 按 key 模式读取黑板数值，并保留真实参数名用于证据追踪。 */
function blackboardNumberByPattern(
  effect: RelicEffectForContribution,
  pattern: RegExp,
): { key: string; value: number } | null {
  const entry = effect.blackboard.find((candidate) => pattern.test(candidate.key));
  return entry ? { key: entry.key, value: entry.value } : null;
}

/** 构造只做同名数值读取的语义规则程序。 */
function directParameterProgram(
  parameterKey: string,
  zoneId: DamageZoneId,
): RelicRuleProgram {
  return (effect, prediction) => {
    const value = blackboardNumber(effect, parameterKey);
    if (value === undefined) return null;
    return {
      zoneId,
      value,
      parameterKey,
      ruleId: prediction.ruleId,
      reason: prediction.reason,
    };
  };
}

/** 构造敌方减益程序：GameData 使用负值，公式乘区统一保存正的降低量。 */
function enemyReductionProgram(
  parameterKey: string,
  zoneId: DamageZoneId,
): RelicRuleProgram {
  return (effect, prediction) => {
    const value = blackboardNumber(effect, parameterKey);
    if (value === undefined) return null;
    return {
      zoneId,
      value: Math.abs(value),
      parameterKey,
      ruleId: prediction.ruleId,
      reason: prediction.reason,
    };
  };
}

/** `damage_scale` 的绝对倍率需要转成 product-one-plus 约定的增量。 */
function damageScaleProgram(
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
): RelicFormulaWrite | null {
  const parameter = blackboardNumberByPattern(
    effect,
    /^(damage_scale|ep_damage_scale|damage_scale_factor)$/,
  );
  if (!parameter) return null;
  return {
    zoneId: "DAMAGE_AMPLIFICATION",
    value: parameter.value >= 1 ? parameter.value - 1 : parameter.value,
    parameterKey: parameter.key,
    ruleId: prediction.ruleId,
    reason: prediction.reason,
  };
}

/** 攻击速度允许使用带命名空间前缀的黑板 key。 */
function attackSpeedProgram(
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
): RelicFormulaWrite | null {
  const parameter = blackboardNumberByPattern(effect, /(^|_)attack_speed$/);
  if (!parameter) return null;
  return {
    zoneId: "ATTACK_SPEED",
    value: parameter.value,
    parameterKey: parameter.key,
    ruleId: prediction.ruleId,
    reason: prediction.reason,
  };
}

/** 先锋新典训：技能开启后给 buff 持有者增加攻击力。 */
function applyRogue6PioneerSkillTemplate(
  effect: RelicEffectForContribution,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "atk");
  if (value === undefined) return [];
  return [{
    zoneId: "INNER_ATK",
    value,
    parameterKey: "atk",
    ruleId: "template:rogue_6_pioneer_skill",
    reason: "战斗模板 rogue_6_pioneer_skill 在技能开启时对 BUFF_OWNER 写入 ATK MULTIPLIER。",
  }];
}

/** 术师新典训：造成伤害时只降低本次伤害目标的法术抗性。 */
function applyRogue6CasterAttackTemplate(
  effect: RelicEffectForContribution,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "magic_resistance");
  if (value === undefined) return [];
  return [{
    zoneId: "RES_FLAT",
    value: Math.abs(value),
    parameterKey: "magic_resistance",
    ruleId: "template:rogue_6_caster_attack",
    reason: "战斗模板 rogue_6_caster_attack 在造成伤害时对 MODIFIER_TARGET 写入 MAGIC_RESISTANCE ADDITION。",
  }];
}

/** 古堡的子嗣：部署满 interval 后给 buff 持有者直加防御和法抗点数。 */
function applyTriggeredDefenseAndResistanceTemplate(
  effect: RelicEffectForContribution,
): readonly RelicFormulaWrite[] {
  const writes: RelicFormulaWrite[] = [];
  const defense = blackboardNumber(effect, "def");
  const resistance = blackboardNumber(effect, "magic_resistance");
  if (defense !== undefined) {
    writes.push({
      zoneId: "FLAT_CHAR_DEF",
      value: defense,
      parameterKey: "def",
      ruleId: "template:attr_up_on_trigger[def&mag_resist]:def",
      reason: "战斗模板 attr_up_on_trigger[def&mag_resist] 触发后对 BUFF_OWNER 写入 DEF ADDITION。",
    });
  }
  if (resistance !== undefined) {
    writes.push({
      zoneId: "FLAT_CHAR_RES",
      value: resistance,
      parameterKey: "magic_resistance",
      ruleId: "template:attr_up_on_trigger[def&mag_resist]:magic_resistance",
      reason: "战斗模板 attr_up_on_trigger[def&mag_resist] 触发后对 BUFF_OWNER 写入 MAGIC_RESISTANCE ADDITION。",
    });
  }
  return writes;
}

/** 已由 GameData Action 核实、需要精确控制上下文写入目标的战斗模板。 */
export const RELIC_TEMPLATE_PROGRAMS: ReadonlyMap<string, RelicTemplateProgram> = new Map([
  ["rogue_6_pioneer_skill", applyRogue6PioneerSkillTemplate],
  ["rogue_6_caster_attack", applyRogue6CasterAttackTemplate],
  ["attr_up_on_trigger[def&mag_resist]", applyTriggeredDefenseAndResistanceTemplate],
]);

/** 通用语义规则程序只处理规则已经明确声明的参数和目标乘区。 */
const RELIC_RULE_PROGRAMS: ReadonlyMap<string, RelicRuleProgram> = new Map([
  ["atk-static-multiplier", directParameterProgram("atk", "OUTER_ATK")],
  ["atk-runtime-multiplier", directParameterProgram("atk", "INNER_ATK")],
  ["atk-flat-addition", directParameterProgram("atk", "FLAT_ATK")],
  ["hp-static-multiplier", directParameterProgram("max_hp", "OUTER_MAX_HP")],
  ["hp-runtime-multiplier", directParameterProgram("max_hp", "INNER_MAX_HP")],
  ["hp-flat-addition", directParameterProgram("max_hp", "FLAT_MAX_HP")],
  ["max-hp-static-multiplier", directParameterProgram("max_hp", "OUTER_MAX_HP")],
  ["max-hp-runtime-multiplier", directParameterProgram("max_hp", "INNER_MAX_HP")],
  ["max-hp-flat-addition", directParameterProgram("max_hp", "FLAT_MAX_HP")],
  ["char-def-static-multiplier", directParameterProgram("def", "OUTER_CHAR_DEF")],
  ["char-def-runtime-multiplier", directParameterProgram("def", "INNER_CHAR_DEF")],
  ["char-def-runtime-flat-addition", directParameterProgram("def", "FLAT_CHAR_DEF")],
  ["char-def-flat-addition", directParameterProgram("def", "FLAT_CHAR_DEF")],
  ["char-res-static-multiplier", directParameterProgram("magic_resistance", "OUTER_CHAR_RES")],
  ["char-res-runtime-multiplier", directParameterProgram("magic_resistance", "INNER_CHAR_RES")],
  ["char-res-runtime-flat-addition", directParameterProgram("magic_resistance", "FLAT_CHAR_RES")],
  ["char-res-flat-addition", directParameterProgram("magic_resistance", "FLAT_CHAR_RES")],
  ["attack-speed-addition", attackSpeedProgram],
  ["enemy-defense-percent", enemyReductionProgram("def", "DEF_PERCENT")],
  ["enemy-hp-relic", enemyReductionProgram("max_hp", "ENEMY_HP_RELIC")],
  ["enemy-hp-copper", enemyReductionProgram("max_hp", "ENEMY_HP_COPPER")],
  ["target-res-flat-addition", enemyReductionProgram("magic_resistance", "RES_FLAT")],
  ["target-res-percent-multiplier", enemyReductionProgram("magic_resistance", "RES_PERCENT")],
  ["target-def-flat-addition", enemyReductionProgram("def", "DEF_FLAT")],
  ["damage-scale-action", damageScaleProgram],
  ["damage-scale-blackboard", damageScaleProgram],
]);

// additional-atk-packet 的 atk_scale 是比例，而 ADDITIONAL_DAMAGE_PACKET 需要伤害点数；
// 在模板程序能取得攻击力、伤害类型和防御结算输入前，禁止把比例伪装成伤害贡献。

/**
 * 选择并执行单条效果的公式程序。
 * 精确模板一旦注册就独占该效果；未注册模板才逐条执行通用语义规则。
 */
export function runRelicFormulaProgram(
  effect: RelicEffectForContribution,
): readonly RelicFormulaWrite[] {
  const templateProgram = effect.mechanicName
    ? RELIC_TEMPLATE_PROGRAMS.get(effect.mechanicName)
    : undefined;
  if (templateProgram) return templateProgram(effect);

  const writes: RelicFormulaWrite[] = [];
  for (const prediction of effect.predictions) {
    const ruleProgram = RELIC_RULE_PROGRAMS.get(prediction.ruleId);
    const write = ruleProgram?.(effect, prediction) ?? null;
    if (write) writes.push(write);
  }
  return writes;
}
