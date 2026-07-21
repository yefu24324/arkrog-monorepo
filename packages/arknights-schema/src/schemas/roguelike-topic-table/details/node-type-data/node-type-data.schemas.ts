/**

 * JSON 逻辑模块 `details/node-type-data/node-type-data` 的 Zod Schema。

 */

import { z } from "zod";

import type { NodeTypeDatum } from "../../../../types/roguelike-topic-table/details/node-type-data/node-type-data.types.js";

/**
 * roguelike_topic_table.json 中 NodeTypeDatum 的运行时校验结构。
 */
export const NodeTypeDatumSchema = z
  .strictObject({
    name: z.string(),
    subName: z.union([z.null(), z.string()]),
    description: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 NodeTypeDatum 的运行时校验结构。",
  ) satisfies z.ZodType<NodeTypeDatum>;
