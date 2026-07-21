/**

 * JSON 逻辑模块 `details/archive-comp/chaos` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompChaos,
  Chao,
} from "../../../../types/roguelike-topic-table/details/archive-comp/chaos.types.js";

/**
 * roguelike_topic_table.json 中 Chao 的运行时校验结构。
 */
export const ChaoSchema = z
  .strictObject({
    id: z.string(),
    isHidden: z.boolean(),
    enrollId: z.null(),
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Chao 的运行时校验结构。",
  ) satisfies z.ZodType<Chao>;

/**
 * roguelike_topic_table.json 中 ArchiveCompChaos 的运行时校验结构。
 */
export const ArchiveCompChaosSchema = z
  .strictObject({
    chaos: z.record(z.string(), ChaoSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompChaos 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompChaos>;
