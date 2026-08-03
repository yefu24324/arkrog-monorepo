/** 攻击力、攻击速度、防御力与最大生命藏品的数值解释程序；乘区选择始终来自 engine-rules 或精确模板。 */

import type { EnginePrediction } from "../domain/engine-rules.js";
import type { FormulaWritableZoneId } from "../formula/formula-book.js";
import { FormulaZoneId } from "../formula/formula-book.js";
import type { RelicFormulaEffect } from "./relic-items.js";

/** 当前属性程序能够直接读取的黑板数值键。 */
type FormulaParameterKey = "atk" | "attack_speed" | "def" | "max_hp" | "magic_resistance";

/** 模板或规则程序完成解释后产生的标准 FormulaBook 写入指令。 */
export interface RelicFormulaWrite {
  /** FormulaBook 中允许追加 item 的真实 zone。 */
  zoneId: FormulaWritableZoneId;
  /** 已按目标 zone 语义规范化的数值。 */
  value: number;
  /** 真正提供数值的黑板参数。 */
  parameterKey: FormulaParameterKey;
  /** 负责解释该参数的模板或语义规则 ID。 */
  ruleId: string;
  /** 面向调用方的可追溯解释。 */
  reason: string;
}

/** 单件藏品模板程序可用的用户态输入。 */
export interface RelicFormulaProgramContext {
  /** 当前已触发层数；具体模板负责应用上限。 */
  layer: number;
}

/** 精确战斗模板使用的独立处理函数。 */
export type RelicTemplateProgram = (
  effect: RelicFormulaEffect,
  context: RelicFormulaProgramContext,
) => readonly RelicFormulaWrite[];

/** 按精确 key 读取黑板数值。 */
function blackboardNumber(effect: RelicFormulaEffect, key: string): number | undefined {
  return effect.blackboard.find((entry) => entry.key.trim() === key)?.value;
}

/** 按黑板上限约束非负整数层数，非法输入统一按零层处理。 */
function boundedLayer(
  effect: RelicFormulaEffect,
  context: RelicFormulaProgramContext,
): number {
  const normalized = Number.isFinite(context.layer)
    ? Math.max(0, Math.trunc(context.layer))
    : 0;
  const maximum = blackboardNumber(effect, "max_stack_cnt");
  return maximum === undefined ? normalized : Math.min(normalized, maximum);
}

/** 先锋新典训按已开启技能次数解释每层攻击力增量。 */
function applyRogue6PioneerSkillTemplate(
  effect: RelicFormulaEffect,
  context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "atk");
  if (value === undefined) return [];
  const contribution = value * boundedLayer(effect, context);
  // 零层表示战斗内尚未触发，不向 FormulaBook 留下无效的零值 item。
  if (contribution === 0) return [];
  return [{
    zoneId: FormulaZoneId.char_in_atk_mul,
    value: contribution,
    parameterKey: "atk",
    ruleId: "template:rogue_6_pioneer_skill",
    reason: "rogue_6_pioneer_skill 在 ON_SKILL_START 对 BUFF_OWNER 写入 ATK MULTIPLIER，并按 max_stack_cnt 限制层数。",
  }];
}

/** 襁褓巨龙把 FINAL_SCALER 增量转换为最终生命区消费的绝对倍率。 */
function applyRogue6Start3Template(
  effect: RelicFormulaEffect,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "max_hp");
  if (value === undefined || value === 0) return [];
  return [{
    zoneId: FormulaZoneId.enemy_final_max_hp_mul,
    // enemy_final_max_hp_mul 使用逐项乘算，因此 0.5 增量必须写成绝对倍率 1.5。
    value: 1 + value,
    parameterKey: "max_hp",
    ruleId: "template:rogue_6_start_3",
    reason: "rogue_6_start_3 对敌方 BUFF_OWNER 写入 MAX_HP FINAL_SCALER，并将倍率增量规范化为绝对倍率。",
  }];
}

/** 术师新典训按造成伤害次数解释目标法抗降低层数。 */
function applyRogue6CasterAttackTemplate(
  effect: RelicFormulaEffect,
  context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "magic_resistance");
  const contribution = value === undefined ? 0 : value * boundedLayer(effect, context);
  // 未造成伤害时没有已经生效的法抗降低，不写入零值公式项。
  if (contribution === 0) return [];
  return [{
    zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
    value: contribution,
    parameterKey: "magic_resistance",
    ruleId: "template:rogue_6_caster_attack",
    reason: "rogue_6_caster_attack 在 ON_OUTPUT_DAMAGE 对 MODIFIER_TARGET 写入 MAGIC_RESISTANCE ADDITION，并按 max_stack_cnt 限制层数。",
  }];
}

/** 支柱新典训按攻击范围内敌人的属性减益写入敌方直接防御和法抗乘区。 */
function applyRogue6SupportDefdownTemplate(
  effect: RelicFormulaEffect,
): readonly RelicFormulaWrite[] {
  const writes: RelicFormulaWrite[] = [];
  const defense = blackboardNumber(effect, "def");
  const resistance = blackboardNumber(effect, "magic_resistance");
  if (defense !== undefined && defense !== 0) {
    writes.push({
      zoneId: FormulaZoneId.enemy_direct_def_mul,
      value: defense,
      parameterKey: "def",
      ruleId: "template:defdown[support]:def",
      reason: "defdown[support] 对攻击范围内敌人执行 DEF 减益，写入敌方直接防御力乘区。",
    });
  }
  if (resistance !== undefined && resistance !== 0) {
    writes.push({
      zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
      value: resistance,
      parameterKey: "magic_resistance",
      ruleId: "template:defdown[support]:magic_resistance",
      reason: "defdown[support] 对攻击范围内敌人执行 MAGIC_RESISTANCE 减益，写入敌方直接法抗乘区。",
    });
  }
  return writes;
}

/** 录武官按受到伤害次数解释敌方法抗降低层数。 */
function applyRogue5EnemyMagicResistanceTemplate(
  effect: RelicFormulaEffect,
  context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "magic_resistance");
  const contribution = value === undefined ? 0 : value * boundedLayer(effect, context);
  // 未受到伤害时没有已经生效的法抗降低，不写入零值公式项。
  if (contribution === 0) return [];
  return [{
    zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
    value: contribution,
    parameterKey: "magic_resistance",
    ruleId: "template:rogue_5_enemy_minus_magic_resistance[take_damage]",
    reason: "rogue_5_enemy_minus_magic_resistance[take_damage] 在 ON_TAKE_DAMAGE 对 BUFF_OWNER 写入 MAGIC_RESISTANCE ADDITION，并按 max_stack_cnt 限制层数。",
  }];
}

/** 当前版本需要独立数值语义的战斗模板。 */
export const RELIC_TEMPLATE_PROGRAMS: ReadonlyMap<string, RelicTemplateProgram> = new Map([
  ["rogue_6_pioneer_skill", applyRogue6PioneerSkillTemplate],
  ["rogue_6_caster_attack", applyRogue6CasterAttackTemplate],
  ["defdown[support]", applyRogue6SupportDefdownTemplate],
  ["rogue_5_enemy_minus_magic_resistance[take_damage]", applyRogue5EnemyMagicResistanceTemplate],
  ["rogue_6_start_3", applyRogue6Start3Template],
]);

/** 根据稳定规则 ID 选择真正提供数值的黑板参数。 */
function parameterKeyForPrediction(prediction: EnginePrediction): FormulaParameterKey {
  // 攻击速度 ID 同样含有 attack 字样，必须先于攻击力按完整属性名识别。
  if (prediction.zoneId.includes("attack_speed")) return "attack_speed";
  if (prediction.zoneId.includes("atk")) return "atk";
  if (prediction.zoneId.includes("def")) return "def";
  if (prediction.zoneId.includes("magic_resist")) return "magic_resistance";
  return "max_hp";
}

/** 按目标 zone 的聚合语义规范化原始属性值。 */
function normalizePredictionValue(
  prediction: EnginePrediction,
  value: number,
): number {
  if (prediction.zoneId === FormulaZoneId.enemy_direct_max_hp_mul) {
    // GameData 同时存在 1.35 绝对倍率和 -0.15 倍率增量，直接区统一保存增量。
    return value >= 1 ? value - 1 : value;
  }
  if (prediction.zoneId === FormulaZoneId.enemy_final_max_hp_mul) {
    // 最终区执行逐项乘算，规则后备路径也必须写入绝对倍率。
    return 1 + value;
  }
  return value;
}

/**
 * 将一条已路由属性效果解释为 FormulaBook 写入指令。
 * 精确模板独占效果；普通属性效果按每条预测读取对应参数并规范化数值。
 */
export function runRelicFormulaProgram(
  effect: RelicFormulaEffect,
  context: RelicFormulaProgramContext = { layer: 0 },
): readonly RelicFormulaWrite[] {
  const templateProgram = effect.mechanicName
    ? RELIC_TEMPLATE_PROGRAMS.get(effect.mechanicName)
    : undefined;
  if (templateProgram) return templateProgram(effect, context);

  return effect.predictions.flatMap((prediction): RelicFormulaWrite[] => {
    const parameterKey = parameterKeyForPrediction(prediction);
    const value = blackboardNumber(effect, parameterKey);
    // 复合属性模板会使用零值作为占位参数，零值不构成公式项。
    if (value === undefined || value === 0) return [];
    return [{
      zoneId: prediction.zoneId,
      value: normalizePredictionValue(prediction, value),
      parameterKey,
      ruleId: prediction.ruleId,
      reason: prediction.reason,
    }];
  });
}
