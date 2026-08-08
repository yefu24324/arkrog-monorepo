/** 集成战略 NORMAL 难度到 FormulaBook 的稳定编排入口。 */

import type { ExportedRoguelikeTopicReport } from "@arkrog/arknights-gamedata-report";

import { item as createFormulaItem } from "../formula/ast.js";
import type { FormulaBook } from "../formula/formula-book.js";
import type { AppliedFormulaItem, MechanicsAnalysis } from "./contracts/index.js";
import {
  resolveDifficultyPrograms,
  resolveSelectedDifficultyPrograms,
  selectAppliedDifficulties,
  type DifficultyProgramContribution,
  type ReportDifficulty,
} from "./difficulty-programs/program.js";
import type { FormulaActivationContext } from "./shared/activation.js";

/** 难度分析与应用需要的 report 和用户选择。 */
export interface DifficultyAnalysisInput {
  /** 当前集成战略主题 ID。 */
  topicId: string;
  /** gamedata-report 导出的主题报告。 */
  report: ExportedRoguelikeTopicReport;
  /** 用户当前选择；null 表示不应用难度。 */
  selectedDifficulty: ReportDifficulty | null;
  /** 当前层数；缺失时逐层倍率不分析也不应用。 */
  currentFloor?: number;
  /** 当前敌人、关卡和时间事实。 */
  activation?: FormulaActivationContext;
}

/** 把程序贡献转换成稳定 MechanicsAnalysis。 */
function analyzeContribution(
  difficulty: ReportDifficulty,
  contribution: DifficultyProgramContribution,
): MechanicsAnalysis {
  return {
    effectId: contribution.effectId,
    status: "supported",
    zoneId: contribution.zoneId,
    item: createFormulaItem(
      `${difficulty.name} ${difficulty.grade} · ${contribution.label}`,
      contribution.value,
    ),
    conditions: contribution.conditions,
  };
}

/** 分析一组已经确定继承口径的难度，并仅给当前选中等级附加非累计程序。 */
function analyzeDifficultyEntries(
  input: DifficultyAnalysisInput,
  appliedDifficulties: readonly ReportDifficulty[],
): MechanicsAnalysis[] {
  const selected = input.selectedDifficulty;
  const results: MechanicsAnalysis[] = [];
  for (const difficulty of appliedDifficulties) {
    const isSelected = selected?.modeDifficulty === difficulty.modeDifficulty
      && selected.grade === difficulty.grade;
    const contributions = [
      ...resolveDifficultyPrograms(input.topicId, difficulty),
      ...(isSelected
        ? resolveSelectedDifficultyPrograms(input.topicId, difficulty, input.currentFloor)
        : []),
    ];
    if (contributions.length === 0 && difficulty.ruleDesc.trim()) {
      results.push({
        effectId: `difficulty:${input.topicId}:${difficulty.modeDifficulty}:${difficulty.grade}`,
        status: "unknown",
      });
      continue;
    }
    results.push(...contributions.map((contribution) =>
      analyzeContribution(difficulty, contribution)));
  }
  return results;
}

/** 静态分析当前选择会引入的累计 NORMAL 难度公式效果。 */
export function analyzeDifficulty(input: DifficultyAnalysisInput): MechanicsAnalysis[] {
  return analyzeDifficultyEntries(
    input,
    selectAppliedDifficulties(input.report.difficulties, input.selectedDifficulty),
  );
}

/** 只分析当前等级自身新增的公式效果，供逐级表格展示。 */
export function analyzeDifficultyLevel(input: DifficultyAnalysisInput): MechanicsAnalysis[] {
  return analyzeDifficultyEntries(
    input,
    input.selectedDifficulty?.modeDifficulty === "NORMAL" ? [input.selectedDifficulty] : [],
  );
}

/** 将当前真正生效的 NORMAL 难度贡献写入传入 FormulaBook。 */
export function applyDifficulty(
  input: DifficultyAnalysisInput,
  book: FormulaBook,
): AppliedFormulaItem[] {
  const selected = input.selectedDifficulty;
  if (!selected || selected.modeDifficulty !== "NORMAL") return [];
  const contributions = selectAppliedDifficulties(input.report.difficulties, selected)
    .flatMap((difficulty) => resolveDifficultyPrograms(input.topicId, difficulty)
      .map((contribution) => ({ difficulty, contribution })));
  contributions.push(...resolveSelectedDifficultyPrograms(
    input.topicId,
    selected,
    input.currentFloor,
  ).map((contribution) => ({ difficulty: selected, contribution })));

  const applied: AppliedFormulaItem[] = [];
  for (const { difficulty, contribution } of contributions) {
    if (!contribution.active(input.activation ?? {})) continue;
    const formulaItem = createFormulaItem(
      `${difficulty.name} ${difficulty.grade} · ${contribution.label}`,
      contribution.value,
    );
    book.add_item(contribution.zoneId, formulaItem);
    applied.push({ zoneId: contribution.zoneId, item: formulaItem });
  }
  return applied;
}
