/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import type { ExportedRoguelikeTopicReport } from "@arkrog/arknights-gamedata-report";

/** 只引用 report 对外公开的难度元素类型。 */
type ReportDifficulty = ExportedRoguelikeTopicReport["difficulties"][number];

/** 选出当前难度实际继承的等级；NORMAL 累计，其他模式只应用自身。 */
export function selectAppliedDifficulties(
  difficulties: readonly ReportDifficulty[],
  selected: ReportDifficulty | null,
): ReportDifficulty[] {
  if (!selected) return [];
  if (selected.modeDifficulty !== "NORMAL") return [selected];
  return difficulties.filter(
    (difficulty) => difficulty.modeDifficulty === selected.modeDifficulty
      && difficulty.grade <= selected.grade,
  );
}
