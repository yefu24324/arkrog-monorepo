/** rogue_6 实托邦、乌托邦与概念体的独立编排入口。 */

import type { ExportedRogue6TopicExtReport } from "@arkrog/arknights-gamedata-report";

import { item as createFormulaItem } from "../formula/ast.js";
import type { FormulaBook } from "../formula/formula-book.js";
import type { AppliedFormulaItem, MechanicsAnalysis } from "./contracts/index.js";
import {
  resolveRogue6TopicEffect,
  type Rogue6TopicEffectProgramInput,
} from "./rogue_6-topic-spec-programs/topic-effects.js";

/** “孤立石林”按两个互斥战斗状态派生的稳定选择 ID。 */
export const ROGUE6_ISOLATED_STONE_UP_ID = "variation_4:attack-speed-up";
export const ROGUE6_ISOLATED_STONE_DOWN_ID = "variation_4:attack-speed-down";

/** rogue_6 三类主题效果的公开选择引用。 */
export interface Rogue6TopicSpecSelection {
  kind: "realUtopia" | "utopia" | "conceptualEntity";
  /** 原始对象 ID；“孤立石林”使用上方两个派生 ID。 */
  id: string;
}

/** rogue_6 入口只消费专用 report 和当前主题效果选择。 */
export interface Rogue6TopicSpecInput {
  report: ExportedRogue6TopicExtReport;
  /** 三类效果可同时传入；调用方负责实托邦和乌托邦单选约束。 */
  selectedEffects?: readonly Rogue6TopicSpecSelection[];
}

/** 从报告中解析单个选择，同时把派生状态还原到原始 variation_4。 */
function resolveProgramInput(
  report: ExportedRogue6TopicExtReport,
  selection: Rogue6TopicSpecSelection,
): Rogue6TopicEffectProgramInput | null {
  if (selection.kind === "realUtopia") {
    const effect = report.realUtopia.effects[selection.id];
    return effect ? {
      kind: selection.kind,
      id: selection.id,
      sourceId: effect.id,
      displayName: `${effect.name} ${effect.levelName}`,
      description: effect.functionDesc,
    } : null;
  }
  if (selection.kind === "utopia") {
    const sourceId = selection.id === ROGUE6_ISOLATED_STONE_UP_ID
      || selection.id === ROGUE6_ISOLATED_STONE_DOWN_ID
      ? "variation_4"
      : selection.id;
    const effect = report.utopia.effects[sourceId];
    if (!effect) return null;
    const stateName = selection.id === ROGUE6_ISOLATED_STONE_UP_ID
      ? "（范围内存在我方干员）"
      : selection.id === ROGUE6_ISOLATED_STONE_DOWN_ID
        ? "（范围内不存在我方干员）"
        : "";
    return {
      kind: selection.kind,
      id: selection.id,
      sourceId,
      displayName: `${effect.outerName ?? effect.innerName ?? sourceId}${stateName}`,
      description: effect.functionDesc,
    };
  }
  const entry = report.conceptualEntities.entries[selection.id];
  return entry ? {
    kind: selection.kind,
    id: selection.id,
    sourceId: entry.effect.scrapId,
    displayName: entry.item.name,
    description: entry.effect.scrapDesc,
  } : null;
}

/** 分析单个主题效果，供页面逐行展示属性乘区。 */
export function analyzeRogue6TopicSpecEffect(
  report: ExportedRogue6TopicExtReport,
  selection: Rogue6TopicSpecSelection,
): MechanicsAnalysis[] {
  const input = resolveProgramInput(report, selection);
  const effectId = `topic-spec:rogue_6:${selection.kind}:${selection.id}`;
  if (!input) return [{ effectId, status: "unknown" }];
  const resolution = resolveRogue6TopicEffect(input);
  if (resolution.status !== "supported") return [{ effectId, status: resolution.status }];
  return resolution.contributions.map((contribution) => ({
    effectId,
    status: "supported",
    zoneId: contribution.zoneId,
    item: createFormulaItem(input.displayName, contribution.value),
    conditions: [...(contribution.conditions ?? [])],
  }));
}

/** 静态分析当前已选择的 rogue_6 三类主题效果。 */
export function analyzeRogue6TopicSpec(input: Rogue6TopicSpecInput): MechanicsAnalysis[] {
  return (input.selectedEffects ?? []).flatMap((selection) =>
    analyzeRogue6TopicSpecEffect(input.report, selection));
}

/** 将当前真正生效的 rogue_6 主题效果写入调用方 FormulaBook。 */
export function applyRogue6TopicSpec(
  input: Rogue6TopicSpecInput,
  book: FormulaBook,
): AppliedFormulaItem[] {
  const applied: AppliedFormulaItem[] = [];
  for (const analysis of analyzeRogue6TopicSpec(input)) {
    if (analysis.status !== "supported") continue;
    book.add_item(analysis.zoneId, analysis.item);
    applied.push({ zoneId: analysis.zoneId, item: analysis.item });
  }
  return applied;
}
