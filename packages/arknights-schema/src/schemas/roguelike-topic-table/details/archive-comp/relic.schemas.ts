/**

 * JSON 逻辑模块 `details/archive-comp/relic` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompRelic,
  RelicRelic,
  Rogue1__ActiveTool,
} from "../../../../types/roguelike-topic-table/details/archive-comp/relic.types.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 RelicRelic 的运行时校验结构。
 */
export const RelicRelicSchema = z
  .strictObject({
    relicId: z.string(),
    relicSortId: z.number(),
    relicGroupId: z.number(),
    orderId: z.string(),
    isSpRelic: z.boolean(),
    enrollId: z.union([EnrollIdSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 RelicRelic 的运行时校验结构。",
  ) satisfies z.ZodType<RelicRelic>;

/**
 * roguelike_topic_table.json 中 Rogue1__ActiveTool 的运行时校验结构。
 */
export const Rogue1__ActiveToolSchema = z
  .strictObject({
    trapId: z.string(),
    trapSortId: z.number(),
    orderId: z.string(),
    enrollId: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue1__ActiveTool 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue1__ActiveTool>;

/**
 * roguelike_topic_table.json 中 ArchiveCompRelic 的运行时校验结构。
 */
export const ArchiveCompRelicSchema = z
  .strictObject({
    relic: z.record(z.string(), RelicRelicSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompRelic 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompRelic>;
