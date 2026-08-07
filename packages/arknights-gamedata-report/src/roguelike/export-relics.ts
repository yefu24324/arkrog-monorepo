/**
 * 写入 `roguelike/{topicId}/relics.json`。
 * 数据来源：roguelike_topic_table.json 的 items、relics 与 charBuffData。
 */

import type { Detail } from "@arkrog/arknights-schema/types";

import { buildWrappedRelicItems } from "#roguelike/wrapped-relics";
import type { ExportedRelicsReport, WrappedRelicTopicDetail } from "#roguelike/types";

/** 从完整主题明细构建藏品裸数组。 */
export function buildRelicsReport(detail: Detail): ExportedRelicsReport {
  return buildWrappedRelicItems(detail as unknown as WrappedRelicTopicDetail);
}
