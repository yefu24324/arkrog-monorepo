/** rogue_5 界园通宝、烛火与天象的独立编排入口。 */

import type { ExportedRoguelikeTopicExtReport } from "@arkrog/arknights-gamedata-report";
import type { FormulaBook } from "../formula/formula-book.js";
import type { AppliedFormulaItem, MechanicsAnalysis } from "./contracts/index.js";

/** rogue_5 入口只接收 report 的主题扩展数据。 */
export interface Rogue5TopicSpecInput {
  report: ExportedRoguelikeTopicExtReport;
}

/** report 尚未提供公式输入契约，当前明确保持未知。 */
export function analyzeRogue5TopicSpec(_input: Rogue5TopicSpecInput): MechanicsAnalysis[] {
  return [{ effectId: "topic-spec:rogue_5", status: "unknown" }];
}

/** 当前 rogue_5 主题特殊系统不写入 FormulaBook。 */
export function applyRogue5TopicSpec(
  _input: Rogue5TopicSpecInput,
  _book: FormulaBook,
): AppliedFormulaItem[] {
  return [];
}
