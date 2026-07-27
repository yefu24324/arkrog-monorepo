/**
 * 藏品战斗模板程序注册表。
 * 精确模板程序优先于通用语义规则程序，避免同一黑板参数被按错误目标重复解释。
 */

import type { FormulaDamageType } from "./ast.js";
import type { RelicEffectForContribution } from "./relic-contributions.js";
import type { FormulaZoneId } from "../domain/damage-zones.js";

/** 模板或规则程序完成语义解释后产生的标准写入指令。 */
export interface RelicFormulaWrite {
  /** 指令写入的公式乘区。 */
  zoneId: FormulaZoneId;
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
  /** 事件型资源贡献适用的触发事件。 */
  triggerTypes?: readonly string[];
}

/** 单件藏品程序可用的用户态输入。 */
export interface RelicFormulaProgramContext {
  /** 用户填写的藏品层数；具体程序决定从 0 还是从 1 开始解释。 */
  layer: number;
}

/** 精确战斗模板使用的独立处理函数。 */
export type RelicTemplateProgram = (
  effect: RelicEffectForContribution,
  context: RelicFormulaProgramContext,
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

/** 按黑板上限约束非负整数层数，非法输入按 0 层处理。 */
function boundedLayer(
  effect: RelicEffectForContribution,
  context: RelicFormulaProgramContext,
): number {
  const normalized = Number.isFinite(context.layer)
    ? Math.max(0, Math.trunc(context.layer))
    : 0;
  const maximum = blackboardNumber(effect, "max_stack_cnt");
  return maximum === undefined ? normalized : Math.min(normalized, maximum);
}

/** 构造只做同名数值读取的语义规则程序。 */
function directParameterProgram(
  parameterKey: string,
  zoneId: FormulaZoneId,
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
  zoneId: FormulaZoneId,
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

/** 将敌人属性的两种 GameData 编码统一为 `1 + delta` 的增量约定。 */
function enemyAttributeDeltaProgram(
  parameterKey: string,
  zoneId: FormulaZoneId,
): RelicRuleProgram {
  return (effect, prediction) => {
    const value = blackboardNumber(effect, parameterKey);
    if (value === undefined) return null;
    return {
      zoneId,
      // 旧主题的 1.35 表示绝对 135%，新属性表的 -0.07 表示增量 -7%。
      value: value >= 1 ? value - 1 : value,
      parameterKey,
      ruleId: prediction.ruleId,
      reason: prediction.reason,
    };
  };
}

/** 黑板提供绝对倍率时不转换为增量。 */
function absoluteMultiplierProgram(
  parameterKey: string,
  zoneId: FormulaZoneId,
): RelicRuleProgram {
  return directParameterProgram(parameterKey, zoneId);
}

/** ensure_block 模板没有数值黑板，稳定写入最低阻挡数 1。 */
function minimumBlockProgram(
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
): RelicFormulaWrite {
  return {
    zoneId: "MIN_BLOCK_COUNT",
    value: 1,
    parameterKey: "key",
    ruleId: prediction.ruleId,
    reason: prediction.reason,
  };
}

/** 将非出生 sp 效果保留为带事件标签的单次技力回复。 */
function triggeredSpProgram(
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
): RelicFormulaWrite | null {
  const value = blackboardNumber(effect, "sp");
  if (value === undefined) return null;
  return {
    zoneId: "SP_GAIN_PER_TRIGGER",
    value,
    parameterKey: "sp",
    ruleId: prediction.ruleId,
    reason: prediction.reason,
    // 保留模板名作为稳定事件维度，避免攻击、受击、击倒等回复被直接相加。
    triggerTypes: [effect.mechanicName || effect.key],
  };
}

/** 闪避概率可同时写入物理与法术两个独立并集。 */
function evasionProgram(zoneId: "PHYSICAL_EVASION" | "MAGICAL_EVASION"): RelicRuleProgram {
  return (effect, prediction) => {
    const value = blackboardNumber(effect, "prob");
    return value === undefined ? null : {
      zoneId,
      value,
      parameterKey: "prob",
      ruleId: prediction.ruleId,
      reason: prediction.reason,
    };
  };
}

/** 命中率 FINAL_SCALER 使用负增量，公式上下文统一保存正向闪避概率。 */
function hitrateToEvasionProgram(
  parameterKey: "damage_hitrate_physical" | "damage_hitrate_magical",
  zoneId: "PHYSICAL_EVASION" | "MAGICAL_EVASION",
): RelicRuleProgram {
  return (effect, prediction) => {
    const value = blackboardNumber(effect, parameterKey);
    return value === undefined ? null : {
      zoneId,
      value: Math.abs(value),
      parameterKey,
      ruleId: prediction.ruleId,
      reason: prediction.reason,
    };
  };
}

/** 普通物理法术减伤使用并集；方向由语义规则选择具体乘区。 */
function damageResistanceProgram(zoneId: FormulaZoneId): RelicRuleProgram {
  return (effect, prediction) => {
    const value = blackboardNumber(effect, "damage_resistance");
    return value === undefined ? null : {
      zoneId,
      value,
      parameterKey: "damage_resistance",
      ruleId: prediction.ruleId,
      reason: prediction.reason,
      damageTypes: ["physical", "magical"],
    };
  };
}

/** ep_damage_scale 是绝对倍率，转为独立增量后进入元素损伤放大区。 */
function elementalImpairmentScaleProgram(
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
): RelicFormulaWrite | null {
  const value = blackboardNumber(effect, "ep_damage_scale");
  return value === undefined ? null : {
    zoneId: "ELEMENTAL_IMPAIRMENT_AMPLIFICATION",
    value: value >= 1 ? value - 1 : value,
    parameterKey: "ep_damage_scale",
    ruleId: prediction.ruleId,
    reason: prediction.reason,
  };
}

/** `damage_scale` 的绝对倍率需要转成 product-one-plus 约定的增量。 */
function damageScaleProgram(
  effect: RelicEffectForContribution,
  prediction: RelicEffectForContribution["predictions"][number],
): RelicFormulaWrite | null {
  const parameter = blackboardNumberByPattern(
    effect,
    /^(damage_scale|damage_scale_factor)$/,
  );
  if (!parameter) return null;
  return {
    zoneId: "DAMAGE_AMPLIFICATION",
    value: parameter.value >= 1 ? parameter.value - 1 : parameter.value,
    parameterKey: parameter.key,
    ruleId: prediction.ruleId,
    reason: prediction.reason,
    // DamageScale 的 ELEMENT 模板只放大实际元素伤害，不能污染物理、法术或元素损伤累计。
    damageTypes: effect.mechanicName === "enemy_take_element_damage_up" ? ["elemental"] : undefined,
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
  context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "atk");
  if (value === undefined) return [];
  const layer = boundedLayer(effect, context);
  return [{
    zoneId: "INNER_ATK",
    // 该模板每次开启技能增加一层，未开启技能时从 0 层开始。
    value: value * layer,
    parameterKey: "atk",
    ruleId: "template:rogue_6_pioneer_skill",
    reason: "战斗模板 rogue_6_pioneer_skill 在技能开启时对 BUFF_OWNER 写入 ATK MULTIPLIER。",
  }];
}

/** 术师新典训：造成伤害时只降低本次伤害目标的法术抗性。 */
function applyRogue6CasterAttackTemplate(
  effect: RelicEffectForContribution,
  context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "magic_resistance");
  if (value === undefined) return [];
  const layer = boundedLayer(effect, context);
  return [{
    zoneId: "RES_FLAT",
    // 该模板每次命中叠加一层法抗降低，未命中时从 0 层开始。
    value: Math.abs(value) * layer,
    parameterKey: "magic_resistance",
    ruleId: "template:rogue_6_caster_attack",
    reason: "战斗模板 rogue_6_caster_attack 在造成伤害时对 MODIFIER_TARGET 写入 MAGIC_RESISTANCE ADDITION。",
  }];
}

/** 古堡的子嗣：部署满 interval 后给 buff 持有者直加防御和法抗点数。 */
function applyTriggeredDefenseAndResistanceTemplate(
  effect: RelicEffectForContribution,
  _context: RelicFormulaProgramContext,
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

/** 襁褓巨龙：模板的 max_hp=0.5 表示敌方最终生命降低 50%，公式区保存 -0.5 增量。 */
function applyRogue6Start3Template(
  effect: RelicEffectForContribution,
  _context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "max_hp");
  if (value === undefined) return [];
  return [{
    zoneId: "ENEMY_HP_RELIC",
    value: -Math.abs(value),
    parameterKey: "max_hp",
    ruleId: "template:rogue_6_start_3",
    reason: "战斗模板 rogue_6_start_3 对敌方写入 MAX_HP FINAL_SCALER；GameData 效果原文确认 0.5 为生命降低 50%。",
  }];
}

/** 已由 GameData Action 核实、需要精确控制上下文写入目标的战斗模板。 */
export const RELIC_TEMPLATE_PROGRAMS: ReadonlyMap<string, RelicTemplateProgram> = new Map([
  ["rogue_6_pioneer_skill", applyRogue6PioneerSkillTemplate],
  ["rogue_6_caster_attack", applyRogue6CasterAttackTemplate],
  ["attr_up_on_trigger[def&mag_resist]", applyTriggeredDefenseAndResistanceTemplate],
  ["rogue_6_start_3", applyRogue6Start3Template],
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
  ["enemy-hp-relic", enemyAttributeDeltaProgram("max_hp", "ENEMY_HP_RELIC")],
  ["enemy-hp-copper", enemyAttributeDeltaProgram("max_hp", "ENEMY_HP_COPPER")],
  ["enemy-hp-legacy-support-action", enemyAttributeDeltaProgram("max_hp", "ENEMY_HP_RELIC")],
  ["enemy-hp-legacy-support-fallback", enemyAttributeDeltaProgram("max_hp", "ENEMY_HP_RELIC")],
  ["target-res-flat-addition", enemyReductionProgram("magic_resistance", "RES_FLAT")],
  ["target-res-percent-multiplier", enemyReductionProgram("magic_resistance", "RES_PERCENT")],
  ["target-def-flat-addition", enemyReductionProgram("def", "DEF_FLAT")],
  ["deploy-cost-addition", directParameterProgram("cost", "DEPLOY_COST_ADD")],
  ["deploy-cost-multiplier", directParameterProgram("cost", "DEPLOY_COST_MULTIPLIER")],
  ["initial-dp-addition", directParameterProgram("value", "INITIAL_DP_ADD")],
  ["block-count-addition", directParameterProgram("block_cnt", "BLOCK_COUNT_ADD")],
  ["minimum-block-count", minimumBlockProgram],
  ["initial-sp-addition", directParameterProgram("sp", "INITIAL_SP_ADD")],
  ["triggered-sp-gain", triggeredSpProgram],
  ["sp-recovery-per-second-addition", directParameterProgram("sp_recovery_per_sec", "SP_RECOVERY_PER_SECOND_ADD")],
  ["sp-cost-absolute-scale", absoluteMultiplierProgram("scale", "SP_COST_MULTIPLIER")],
  ["physical-evasion-probability", evasionProgram("PHYSICAL_EVASION")],
  ["magical-evasion-probability", evasionProgram("MAGICAL_EVASION")],
  ["physical-hitrate-final-scaler", hitrateToEvasionProgram("damage_hitrate_physical", "PHYSICAL_EVASION")],
  ["magical-hitrate-final-scaler", hitrateToEvasionProgram("damage_hitrate_magical", "MAGICAL_EVASION")],
  ["enemy-atk-outer-multiplier", enemyAttributeDeltaProgram("atk", "OUTER_ENEMY_ATK")],
  ["enemy-def-outer-multiplier", enemyAttributeDeltaProgram("def", "OUTER_ENEMY_DEF")],
  ["enemy-def-outer-attribute-multiplier", enemyAttributeDeltaProgram("def", "OUTER_ENEMY_DEF")],
  ["enemy-res-static-addition", directParameterProgram("magic_resistance", "ENEMY_RES_ADD")],
  ["char-damage-resistance-action", damageResistanceProgram("CHAR_DAMAGE_RESISTANCE")],
  ["enemy-outgoing-damage-reduction-action", damageResistanceProgram("ENEMY_OUTGOING_DAMAGE_REDUCTION")],
  ["char-damage-resistance-mechanic-fallback", damageResistanceProgram("CHAR_DAMAGE_RESISTANCE")],
  ["enemy-outgoing-damage-reduction-fallback", damageResistanceProgram("ENEMY_OUTGOING_DAMAGE_REDUCTION")],
  ["enemy-damage-resistance-outer-max", damageResistanceProgram("OUTER_ENEMY_DAMAGE_RESISTANCE")],
  ["char-elemental-impairment-resistance", directParameterProgram("ep_damage_resistance", "CHAR_EP_DAMAGE_RESISTANCE")],
  ["char-elemental-impairment-resistance-fallback", directParameterProgram("ep_damage_resistance", "CHAR_EP_DAMAGE_RESISTANCE")],
  ["elemental-impairment-amplification", elementalImpairmentScaleProgram],
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
  context: RelicFormulaProgramContext = { layer: 0 },
): readonly RelicFormulaWrite[] {
  const templateProgram = effect.mechanicName
    ? RELIC_TEMPLATE_PROGRAMS.get(effect.mechanicName)
    : undefined;
  if (templateProgram) return templateProgram(effect, context);

  const writes: RelicFormulaWrite[] = [];
  for (const prediction of effect.predictions) {
    const ruleProgram = RELIC_RULE_PROGRAMS.get(prediction.ruleId);
    const write = ruleProgram?.(effect, prediction) ?? null;
    if (write) writes.push(write);
  }
  return writes;
}
