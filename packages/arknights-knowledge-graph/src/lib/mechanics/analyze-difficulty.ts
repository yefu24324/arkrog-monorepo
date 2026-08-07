/** 集成战略难度 report 数据到 FormulaBook 的稳定编排入口。 */

import type {
  ExportedRoguelikeTopicReport,
  WrappedRelicItem,
} from "@arkrog/arknights-gamedata-report";

/** 直接从 report 公开契约取得难度元素类型，避免 mechanics 依赖原始 schema。 */
type ReportDifficulty = ExportedRoguelikeTopicReport["difficulties"][number];

import { item as createFormulaItem } from "../formula/ast.js";
import type { FormulaBook } from "../formula/formula-book.js";
import type {
  AppliedFormulaItem,
  MechanicsAnalysis,
} from "./contracts/index.js";
import { selectAppliedDifficulties } from "./difficulty-programs/cumulative-grade.js";
import {
  resolveDifficultyRules,
  type GeneratedDifficultyRule,
} from "./difficulty-programs/registry.js";
import { applyRelic } from "./analyze-relic.js";
import type { FormulaActivationContext } from "./shared/activation.js";

/** 难度分析与应用需要的 report 和用户选择。 */
export interface DifficultyAnalysisInput {
  /** 当前集成战略主题 ID。 */
  topicId: string;
  /** gamedata-report 导出的主题报告。 */
  report: ExportedRoguelikeTopicReport;
  /** 用户当前选择；null 表示不应用难度。 */
  selectedDifficulty: ReportDifficulty | null;
  /** 用户明确启用的难度条件藏品或遗留支援关联 ID。 */
  enabledConditionalRelicIds?: readonly string[];
  /** 当前敌人、关卡和时间事实。 */
  activation?: FormulaActivationContext;
}

/** 将难度规则条件转换成静态展示文本。 */
function difficultyConditions(rule: GeneratedDifficultyRule["rule"]): string[] {
  const conditions: string[] = [];
  if (rule.target !== "all-enemies") conditions.push(`目标：${rule.target}`);
  if (rule.stageKinds?.length) conditions.push(`关卡：${rule.stageKinds.join("、")}`);
  if (rule.durationSeconds !== undefined) conditions.push(`敌人登场前 ${rule.durationSeconds} 秒`);
  if (rule.requiredEnemyBuffs?.length) conditions.push(`敌人状态：${rule.requiredEnemyBuffs.join("、")}`);
  return conditions;
}

/** 保守判断难度规则的运行时目标与场景条件。 */
function difficultyRuleActive(
  rule: GeneratedDifficultyRule["rule"],
  activation: FormulaActivationContext,
): boolean {
  const levelType = activation.enemy?.levelType?.split(".").at(-1)?.toUpperCase() ?? "";
  if (rule.target === "elite" && levelType !== "ELITE") return false;
  if (rule.target === "elite-and-boss" && !["ELITE", "BOSS"].includes(levelType)) return false;
  if (rule.target === "boss" && levelType !== "BOSS") return false;
  if (rule.stageKinds?.length) {
    const matches = (rule.stageKinds.includes("emergency") && activation.stage?.isEmergency)
      || (rule.stageKinds.includes("danger") && activation.stage?.isDanger);
    if (!matches) return false;
  }
  if (rule.durationSeconds !== undefined && (
    activation.elapsedSeconds === undefined
    || activation.elapsedSeconds > rule.durationSeconds
  )) return false;
  if (rule.requiredEnemyBuffs?.length) {
    const buffs = new Set(activation.enemy?.buffKeys ?? []);
    if (rule.requiredEnemyBuffs.some((buff) => !buffs.has(buff))) return false;
  }
  return true;
}

/** 将条件关联的目标藏品转换为 report 的包装藏品输入。 */
function conditionalRelicItem(
  input: DifficultyAnalysisInput,
  link: ExportedRoguelikeTopicReport["difficultyConditionalRelics"][number],
): WrappedRelicItem {
  return {
    id: link.targetId,
    name: link.targetItem.name,
    pinyin: "",
    relic: {
      ...link.targetItem,
      usage: link.targetItem.usage ?? "",
      ...link.targetRelic,
    },
    charBuffs: [],
    layer: 0,
    enable: new Set(input.enabledConditionalRelicIds ?? []).has(link.id),
  };
}

/** 判断条件藏品是否与当前所选难度匹配。 */
function conditionalRelicMatches(
  selected: ReportDifficulty | null,
  link: ExportedRoguelikeTopicReport["difficultyConditionalRelics"][number],
): boolean {
  if (!selected) return false;
  if (link.kind === "LEGACY_CHOICE") return true;
  return link.modeDifficulty === selected.modeDifficulty
    && (link.grades?.includes(selected.grade) ?? false);
}

/** 静态分析当前选择会引入的难度公式效果。 */
export function analyzeDifficulty(input: DifficultyAnalysisInput): MechanicsAnalysis[] {
  const appliedDifficulties = selectAppliedDifficulties(
    input.report.difficulties,
    input.selectedDifficulty,
  );
  const results: MechanicsAnalysis[] = [];
  for (const difficulty of appliedDifficulties) {
    const rules = resolveDifficultyRules(input.topicId, difficulty);
    if (rules.length === 0 && difficulty.ruleDesc.trim()) {
      results.push({
        effectId: `difficulty:${input.topicId}:${difficulty.modeDifficulty}:${difficulty.grade}`,
        status: "unknown",
      });
      continue;
    }
    for (const resolved of rules) {
      results.push({
        effectId: resolved.rule.id,
        status: "supported",
        zoneId: resolved.zoneId,
        item: createFormulaItem(
          `${difficulty.name} ${difficulty.grade} · ${resolved.rule.matchedText}`,
          resolved.rule.value,
        ),
        conditions: difficultyConditions(resolved.rule),
      });
    }
  }
  return results;
}

/** 将当前真正生效的难度贡献写入传入 FormulaBook。 */
export function applyDifficulty(
  input: DifficultyAnalysisInput,
  book: FormulaBook,
): AppliedFormulaItem[] {
  const applied: AppliedFormulaItem[] = [];
  for (const difficulty of selectAppliedDifficulties(
    input.report.difficulties,
    input.selectedDifficulty,
  )) {
    for (const resolved of resolveDifficultyRules(input.topicId, difficulty)) {
      if (!difficultyRuleActive(resolved.rule, input.activation ?? {})) continue;
      const formulaItem = createFormulaItem(
        `${difficulty.name} ${difficulty.grade} · ${resolved.rule.matchedText}`,
        resolved.rule.value,
      );
      book.add_item(resolved.zoneId, formulaItem);
      applied.push({ zoneId: resolved.zoneId, item: formulaItem });
    }
  }

  const enabledIds = new Set(input.enabledConditionalRelicIds ?? []);
  for (const link of input.report.difficultyConditionalRelics) {
    if (!enabledIds.has(link.id) || !conditionalRelicMatches(input.selectedDifficulty, link)) continue;
    applied.push(...applyRelic(conditionalRelicItem(input, link), book, {
      topicId: input.topicId,
      activation: input.activation,
    }));
  }
  return applied;
}
