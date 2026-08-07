/** 编排全部集成战略 JSON 报告；各产物的数据来源详见对应 export 模块。 */

import path from "node:path";

import { readJson, writeJson } from "#shared/json-file";
import { buildRelicsReport } from "#roguelike/export-relics";
import { buildRoguelikeIndex } from "#roguelike/export-roguelike-index";
import { buildStagesReport } from "#roguelike/export-stages";
import { buildTopicExtReport } from "#roguelike/export-topic-ext";
import { buildTopicReport } from "#roguelike/export-topic";
import type { RoguelikeTopicTableForReport } from "#roguelike/types";

/** 返回稳定排序的全部 rogue_N 主题 ID，并验证四个主题分区完整。 */
export function selectTopicIds(table: RoguelikeTopicTableForReport): string[] {
  const topicIds = Object.keys(table.details)
    .filter((topicId) => /^rogue_\d+$/.test(topicId))
    .sort((left, right) => Number(left.slice(6)) - Number(right.slice(6)));
  for (const topicId of topicIds) {
    if (
      !table.topics[topicId] ||
      !table.details[topicId] ||
      !table.modules[topicId] ||
      !table.customizeData[topicId]
    ) {
      throw new Error(`主题数据分区不完整：${topicId}`);
    }
  }
  return topicIds;
}

/** 读取主题表并写入索引和每个主题的四份报告。 */
export async function exportRoguelikeReports(
  gameDataRoot: string,
  outputRoot: string,
): Promise<{ fileCount: number; itemCount: number }> {
  const table = await readJson<RoguelikeTopicTableForReport>(
    path.join(gameDataRoot, "excel", "roguelike_topic_table.json"),
  );
  const topicIds = selectTopicIds(table);
  await writeJson(path.join(outputRoot, "roguelike.json"), buildRoguelikeIndex(table, topicIds));
  for (const topicId of topicIds) {
    const topicDirectory = path.join(outputRoot, "roguelike", topicId);
    // topic_ext 的 rogue_6 专用结构复用 stage report，确保完整 Level 只读取一次。
    const stageReport = await buildStagesReport(gameDataRoot, topicId, table.details[topicId]!);
    await Promise.all([
      writeJson(path.join(topicDirectory, "topic.json"), buildTopicReport(table, topicId)),
      writeJson(
        path.join(topicDirectory, "relics.json"),
        buildRelicsReport(table.details[topicId]!),
      ),
      writeJson(path.join(topicDirectory, "stage.json"), stageReport),
      writeJson(
        path.join(topicDirectory, "topic_ext.json"),
        buildTopicExtReport(table, topicId, stageReport),
      ),
    ]);
  }
  return { fileCount: topicIds.length * 4 + 1, itemCount: topicIds.length };
}
