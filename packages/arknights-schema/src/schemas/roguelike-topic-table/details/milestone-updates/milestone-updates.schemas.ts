/**

 * JSON 逻辑模块 `details/milestone-updates/milestone-updates` 的 Zod Schema。

 */

import { z } from "zod";

import type { MilestoneUpdate } from "../../../../types/roguelike-topic-table/details/milestone-updates/milestone-updates.types.js";

/**
 * roguelike_topic_table.json 中 MilestoneUpdate 的运行时校验结构。
 */
export const MilestoneUpdateSchema = z
  .strictObject({
    updateTime: z.number(),
    endTime: z.number(),
    maxBpLevel: z.number(),
    maxBpCount: z.number(),
    maxDisplayBpCount: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 MilestoneUpdate 的运行时校验结构。",
  ) satisfies z.ZodType<MilestoneUpdate>;
