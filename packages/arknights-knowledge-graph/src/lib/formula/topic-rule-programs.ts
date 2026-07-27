/** 人工维护的肉鸽主题规则 → FormulaContext 的统一分派入口。 */

import type { FormulaZoneId } from "../domain/damage-zones.js";
import type { FormulaContext, FormulaContribution } from "./context.js";
import {
  applyRogue6ManualTopicRulesToFormulaContext,
  getRogue6ManualTopicDifficultyEffects,
} from "./topic-rules/rogue-6.js";

/** 人工主题规则需要的难度最小结构。 */
export interface ManualTopicDifficulty {
  /** 原始模式枚举。 */
  modeDifficulty: string;
  /** 原始难度等级。 */
  grade: number;
}

/** 人工主题规则的精确难度输入。 */
export interface ManualTopicDifficultyInput {
  /** 集成战略主题 ID。 */
  topicId: string;
  /** 用户当前选择；null 表示不应用主题规则。 */
  selectedDifficulty: ManualTopicDifficulty | null;
}

/** 一条明确标记为人工维护的主题难度效果。 */
export interface ManualTopicDifficultyEffect {
  /** 稳定人工规则 ID。 */
  ruleId: string;
  /** 原始难度等级。 */
  grade: number;
  /** 进入的公式乘区。 */
  zoneId: FormulaZoneId;
  /** 已规范化到乘区约定的贡献值。 */
  value: number;
  /** 面向文档表格的规则原文。 */
  description: string;
  /** 固定标记，避免与 GameData 或 Kuzu 证据混淆。 */
  maintenance: "manual";
  /** 人工规则源码位置。 */
  evidencePath: string;
}

/** 返回当前精确难度对应的人工主题效果，不参与 NORMAL 累计。 */
export function getManualTopicDifficultyEffects(
  input: ManualTopicDifficultyInput,
): ManualTopicDifficultyEffect[] {
  // 每个主题保持独立函数，新增主题时只在此注册分派。
  return getRogue6ManualTopicDifficultyEffects(input);
}

/** 将当前主题的人工维护规则写入 FormulaContext。 */
export function applyManualTopicRulesToFormulaContext(
  context: FormulaContext,
  input: ManualTopicDifficultyInput,
): FormulaContribution[] {
  // 人工主题程序与 Kuzu 同源难度规则分开执行，防止被误认为游戏数据事实。
  return applyRogue6ManualTopicRulesToFormulaContext(context, input);
}
