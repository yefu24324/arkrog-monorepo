/**

 * JSON 逻辑模块 `details/updates/updates` 的 Zod Schema。

 */

import { z } from "zod";

import type { Update } from "../../../../types/roguelike-topic-table/details/updates/updates.types.js";

/**
 * roguelike_topic_table.json 中 Update 的运行时校验结构。
 */
export const UpdateSchema = z
  .strictObject({
    updateId: z.string(),
    topicUpdateTime: z.number(),
    topicEndTime: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Update 的运行时校验结构。",
  ) satisfies z.ZodType<Update>;
