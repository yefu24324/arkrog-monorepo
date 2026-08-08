/** 集成战略 NORMAL 难度的展示模型、单级 Mechanics 分析与筛选规则。 */

import type { ExportedRoguelikeTopicReport } from '@arkrog/arknights-gamedata-report';
import type { FormulaWritableZoneId } from '@arkrog/arknights-knowledge-graph/formula';
import { analyzeDifficultyLevel } from '@arkrog/arknights-knowledge-graph/mechanics';

/** “无属性乘区”筛选使用的内部稳定值。 */
export const ZONE_FILTER_NONE = '__none__';

/** report 中的单条主难度。 */
export type ReportDifficulty = ExportedRoguelikeTopicReport['difficulties'][number];

/** report 中与主难度按模式和等级配对的主题扩展。 */
export type ReportCustomizedDifficulty = ExportedRoguelikeTopicReport['customizedDifficulties'][number];

/** 一行 NORMAL 难度及其单级属性乘区。 */
export interface RoguelikeDifficultyRow {
  /** 模式和等级共同组成主题内稳定键。 */
  id: string;
  difficulty: ReportDifficulty;
  customized: ReportCustomizedDifficulty | null;
  /** 只包含该等级自身新增的、Mechanics 已支持的可写乘区。 */
  zones: FormulaWritableZoneId[];
}

/** 创建模式和等级的主题内稳定键。 */
export function difficultyId(difficulty: Pick<ReportDifficulty, 'grade' | 'modeDifficulty'>): string {
  return `${difficulty.modeDifficulty}:${difficulty.grade}`;
}

/** 按模式和等级查找同一条 customizedDifficulty。 */
function customizedDifficultyMap(
  report: ExportedRoguelikeTopicReport,
): ReadonlyMap<string, ReportCustomizedDifficulty> {
  return new Map(report.customizedDifficulties.map((entry) => [difficultyId(entry), entry]));
}

/** 构建从最高级到最低级的 NORMAL 难度行。 */
export function buildNormalDifficultyRows(
  report: ExportedRoguelikeTopicReport,
  topicId: string,
  analyzeZones: boolean,
): RoguelikeDifficultyRow[] {
  const customizedById = customizedDifficultyMap(report);
  return report.difficulties
    .filter((difficulty) => difficulty.modeDifficulty === 'NORMAL')
    .sort((left, right) => right.grade - left.grade)
    .map((difficulty) => {
      const zones = analyzeZones
        ? analyzeDifficultyLevel({ topicId, report, selectedDifficulty: difficulty })
          .flatMap((analysis): FormulaWritableZoneId[] => (
            analysis.status === 'supported' ? [analysis.zoneId] : []
          ))
        : [];
      return {
        id: difficultyId(difficulty),
        difficulty,
        customized: customizedById.get(difficultyId(difficulty)) ?? null,
        zones: [...new Set(zones)],
      };
    });
}

/** 难度搜索覆盖主数据、主题扩展和 Mechanics 乘区名称。 */
export function difficultyMatchesSearch(
  row: RoguelikeDifficultyRow,
  query: string,
  comments: Readonly<Record<string, string>>,
): boolean {
  if (!query) return true;
  const customized = row.customized;
  const text = [
    row.id,
    row.difficulty.name,
    row.difficulty.grade,
    row.difficulty.subName,
    row.difficulty.ruleDesc,
    row.difficulty.addDesc,
    ...(customized?.buffDesc ?? []),
    ...(customized?.buffs ?? []),
    ...row.zones.flatMap((zoneId) => [zoneId, comments[zoneId]]),
  ].filter((value) => value !== null && value !== undefined).join(' ').toLowerCase();
  return text.includes(query);
}

/** 难度乘区筛选与藏品保持“全部命中”的相同语义。 */
export function difficultyMatchesZones(
  row: RoguelikeDifficultyRow,
  selected: ReadonlySet<string>,
): boolean {
  if (selected.size === 0) return true;
  for (const zoneId of selected) {
    if (zoneId === ZONE_FILTER_NONE) {
      if (row.zones.length > 0) return false;
    } else if (!row.zones.includes(zoneId as FormulaWritableZoneId)) {
      return false;
    }
  }
  return true;
}
