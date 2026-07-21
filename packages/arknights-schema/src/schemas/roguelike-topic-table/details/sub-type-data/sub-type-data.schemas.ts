/**

 * JSON 逻辑模块 `details/sub-type-data/sub-type-data` 的 Zod Schema。

 */

import { z } from "zod";

import type { DetailSubTypeDatum } from "../../../../types/roguelike-topic-table/details/sub-type-data/sub-type-data.types.js";

/**
 * roguelike_topic_table.json 中 DetailSubTypeDatum 的运行时校验结构。
 */
export const DetailSubTypeDatumSchema = z
  .strictObject({
    eventType: z.string(),
    subTypeId: z.number(),
    iconId: z.union([z.null(), z.string()]),
    name: z.string(),
    description: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 DetailSubTypeDatum 的运行时校验结构。",
  ) satisfies z.ZodType<DetailSubTypeDatum>;
