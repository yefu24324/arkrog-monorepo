/** 关卡 report 数据到 FormulaBook 的稳定编排入口。 */

import type { ExportedRogueStageReportItem } from "@arkrog/arknights-gamedata-report";

import type { FormulaBook } from "../formula/formula-book.js";
import type { AppliedFormulaItem, MechanicsAnalysis } from "./contracts/index.js";

/** 关卡入口只消费 gamedata-report 已公开的完整关卡报告。 */
export interface StageAnalysisInput {
  /** 当前集成战略主题 ID。 */
  topicId: string;
  /** 当前用户选择的关卡报告。 */
  stage: ExportedRogueStageReportItem;
  /** 当前选中的替换 Level ID；未选择时为主 Level。 */
  replacementLevelId?: string;
}

/**
 * 静态分析关卡公式效果。
 * TODO：report 需要进一步整理 Level/LevelReplacement 中的战斗 buff 与装置语义。
 */
export function analyzeStage(input: StageAnalysisInput): MechanicsAnalysis[] {
  return [{
    effectId: `stage:${input.topicId}:${input.stage.stage.id}`,
    status: "unknown",
  }];
}

/** 当前 report 尚未提供可执行关卡公式契约，因此不写入 FormulaBook。 */
export function applyStage(
  _input: StageAnalysisInput,
  _book: FormulaBook,
): AppliedFormulaItem[] {
  return [];
}
