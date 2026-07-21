/**

 * JSON 逻辑模块 `customize-data/development-lines/development-lines` 的 Zod Schema。

 */

import { z } from "zod";

import type { DevelopmentLine } from "../../../../types/roguelike-topic-table/customize-data/development-lines/development-lines.types.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 DevelopmentLine 的运行时校验结构。
 */
export const DevelopmentLineSchema = z
  .strictObject({
    fromNode: z.string(),
    toNode: z.string(),
    fromNodeP: z.number(),
    fromNodeR: z.number(),
    toNodeP: z.number(),
    toNodeR: z.number(),
    enrollId: z.union([EnrollIdSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 DevelopmentLine 的运行时校验结构。",
  ) satisfies z.ZodType<DevelopmentLine>;
