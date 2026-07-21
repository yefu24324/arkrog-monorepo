/**

 * JSON 逻辑模块 `details/ending-relic-detail-list/ending-relic-detail-list` 的 Zod Schema。

 */

import { z } from "zod";

import type { EndingRelicDetailList } from "../../../../types/roguelike-topic-table/details/ending-relic-detail-list/ending-relic-detail-list.types.js";

/**
 * roguelike_topic_table.json 中 EndingRelicDetailList 的运行时校验结构。
 */
export const EndingRelicDetailListSchema = z
  .strictObject({
    relicId: z.string(),
    summaryEventText: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 EndingRelicDetailList 的运行时校验结构。",
  ) satisfies z.ZodType<EndingRelicDetailList>;
