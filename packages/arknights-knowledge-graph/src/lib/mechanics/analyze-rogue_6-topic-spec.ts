/** rogue_6 黑流树理想域、天气与装置的独立编排入口。 */

import type {
  ExportedRogue6TopicExtReport,
  ExportedRoguelikeTopicReport,
} from "@arkrog/arknights-gamedata-report";

import { item as createFormulaItem } from "../formula/ast.js";
import type { FormulaBook } from "../formula/formula-book.js";
import type { AppliedFormulaItem, MechanicsAnalysis } from "./contracts/index.js";
import { rogue6LowDifficultyProgram } from "./rogue_6-topic-spec-programs/low-difficulty.js";

/** 当前主题特殊入口复用 report 公开的难度选择结构。 */
type ReportDifficulty = ExportedRoguelikeTopicReport["difficulties"][number];

/** rogue_6 入口消费 report 主题扩展和用户当前难度选择。 */
export interface Rogue6TopicSpecInput {
  report: ExportedRogue6TopicExtReport;
  selectedDifficulty: ReportDifficulty | null;
}

/** 静态分析当前已生成的 rogue_6 特殊规则。 */
export function analyzeRogue6TopicSpec(input: Rogue6TopicSpecInput): MechanicsAnalysis[] {
  const selected = input.selectedDifficulty;
  if (!selected) return [];
  const contributions = rogue6LowDifficultyProgram(selected.modeDifficulty, selected.grade);
  if (contributions.length === 0) {
    return [{ effectId: "topic-spec:rogue_6", status: "unknown" }];
  }
  return contributions.map((contribution, index) => ({
    effectId: `topic-spec:rogue_6:low-difficulty:${selected.grade}:${index}`,
    status: "supported",
    zoneId: contribution.zoneId,
    item: createFormulaItem(`黑流树海难度 ${selected.grade}`, contribution.value),
    conditions: [`仅 NORMAL 精确难度 ${selected.grade} 生效`],
  }));
}

/** 将当前已生成且生效的 rogue_6 主题规则写入 FormulaBook。 */
export function applyRogue6TopicSpec(
  input: Rogue6TopicSpecInput,
  book: FormulaBook,
): AppliedFormulaItem[] {
  const selected = input.selectedDifficulty;
  if (!selected) return [];
  return rogue6LowDifficultyProgram(selected.modeDifficulty, selected.grade).map((contribution) => {
    const formulaItem = createFormulaItem(`黑流树海难度 ${selected.grade}`, contribution.value);
    book.add_item(contribution.zoneId, formulaItem);
    return { zoneId: contribution.zoneId, item: formulaItem };
  });
}
