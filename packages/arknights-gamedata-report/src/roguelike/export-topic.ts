/**
 * 生成 `roguelike/{topicId}/topic.json`。
 * 数据来源：roguelike_topic_table.json 的 topics、details.difficulties、
 * customizeData.difficulties，以及藏品和选项中的难度关联。
 */

import { collectDifficultyConditionalRelics } from "#roguelike/collect-difficulty-relics";
import type {
  ExportedRoguelikeTopicReport,
  RoguelikeTopicTableForReport,
  WrappedRelicTopicDetail,
} from "#roguelike/types";

/** 构建一个主题的入口、难度和条件藏品报告。 */
export function buildTopicReport(
  table: RoguelikeTopicTableForReport,
  topicId: string,
): ExportedRoguelikeTopicReport {
  const detail = table.details[topicId]!;
  return {
    topic: table.topics[topicId]!,
    difficulties: detail.difficulties,
    customizedDifficulties: table.customizeData[topicId]!.difficulties,
    difficultyConditionalRelics: collectDifficultyConditionalRelics(
      topicId,
      detail as unknown as WrappedRelicTopicDetail,
    ),
  };
}
