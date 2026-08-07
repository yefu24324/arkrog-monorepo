/** rogue_4 萨卡兹年代与年代印痕的独立编排入口。 */

import type { ExportedRoguelikeTopicExtReport } from "@arkrog/arknights-gamedata-report";
import type { FormulaBook } from "../formula/formula-book.js";
import type { AppliedFormulaItem, MechanicsAnalysis } from "./contracts/index.js";

/** rogue_4 入口只接收 report 的主题扩展数据。 */
export interface Rogue4TopicSpecInput {
  report: ExportedRoguelikeTopicExtReport;
}

/** report 尚未提供公式输入契约，当前明确保持未知。 */
export function analyzeRogue4TopicSpec(_input: Rogue4TopicSpecInput): MechanicsAnalysis[] {
  return [{ effectId: "topic-spec:rogue_4", status: "unknown" }];
}

/** 当前 rogue_4 主题特殊系统不写入 FormulaBook。 */
export function applyRogue4TopicSpec(
  _input: Rogue4TopicSpecInput,
  _book: FormulaBook,
): AppliedFormulaItem[] {
  return [];
}
