/** 攻击力藏品的数值解释程序；乘区选择始终来自 engine-rules 或精确模板。 */

import type { FormulaWritableZoneId } from "../formula/formula-book.js";
import { FormulaZoneId } from "../formula/formula-book.js";
import type { RelicAttackEffect } from "./relic-items.js";

/** 模板或规则程序完成解释后产生的标准 FormulaBook 写入指令。 */
export interface RelicFormulaWrite {
  /** FormulaBook 中允许追加 item 的真实 zone。 */
  zoneId: FormulaWritableZoneId;
  /** 已按目标 zone 语义规范化的数值。 */
  value: number;
  /** 真正提供数值的黑板参数。 */
  parameterKey: "atk";
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
  effect: RelicAttackEffect,
  context: RelicFormulaProgramContext,
) => readonly RelicFormulaWrite[];

/** 按精确 key 读取黑板数值。 */
function blackboardNumber(effect: RelicAttackEffect, key: string): number | undefined {
  return effect.blackboard.find((entry) => entry.key.trim() === key)?.value;
}

/** 按黑板上限约束非负整数层数，非法输入统一按零层处理。 */
function boundedLayer(
  effect: RelicAttackEffect,
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
  effect: RelicAttackEffect,
  context: RelicFormulaProgramContext,
): readonly RelicFormulaWrite[] {
  const value = blackboardNumber(effect, "atk");
  if (value === undefined) return [];
  const contribution = value * boundedLayer(effect, context);
  // 零层表示战斗内尚未触发，不向 FormulaBook 留下无效的零值 item。
  if (contribution === 0) return [];
  return [{
    zoneId: FormulaZoneId.operator_in_atk_mul,
    value: contribution,
    parameterKey: "atk",
    ruleId: "template:rogue_6_pioneer_skill",
    reason: "rogue_6_pioneer_skill 在 ON_SKILL_START 对 BUFF_OWNER 写入 ATK MULTIPLIER，并按 max_stack_cnt 限制层数。",
  }];
}

/** 当前版本唯一需要独立层数语义的攻击力战斗模板。 */
export const RELIC_TEMPLATE_PROGRAMS: ReadonlyMap<string, RelicTemplateProgram> = new Map([
  ["rogue_6_pioneer_skill", applyRogue6PioneerSkillTemplate],
]);

/**
 * 将一条已路由攻击力效果解释为 FormulaBook 写入指令。
 * 精确模板独占效果；普通攻击力效果直接使用预测中的真实 zone 和 atk 数值。
 */
export function runRelicFormulaProgram(
  effect: RelicAttackEffect,
  context: RelicFormulaProgramContext = { layer: 0 },
): readonly RelicFormulaWrite[] {
  const templateProgram = effect.mechanicName
    ? RELIC_TEMPLATE_PROGRAMS.get(effect.mechanicName)
    : undefined;
  if (templateProgram) return templateProgram(effect, context);

  const value = blackboardNumber(effect, "atk");
  // 复合属性模板会使用 atk=0 作为占位参数，零值不构成攻击力公式项。
  if (value === undefined || value === 0) return [];
  return effect.predictions.map((prediction) => ({
    zoneId: prediction.zoneId,
    value,
    parameterKey: "atk",
    ruleId: prediction.ruleId,
    reason: prediction.reason,
  }));
}
