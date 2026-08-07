/**
 * 生成 `roguelike.json`。
 * 数据来源：ArknightsGameData/zh_CN/gamedata/excel/roguelike_topic_table.json 的 topics。
 */

import type { ExportedRoguelikeIndex, RoguelikeTopicTableForReport } from "#roguelike/types";

/** 按主题编号稳定生成完整主题入口数组。 */
export function buildRoguelikeIndex(
  table: RoguelikeTopicTableForReport,
  topicIds: readonly string[],
): ExportedRoguelikeIndex {
  return topicIds.map((topicId) => table.topics[topicId]!);
}
