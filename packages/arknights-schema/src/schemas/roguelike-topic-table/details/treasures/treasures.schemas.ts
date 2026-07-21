/**

 * JSON 逻辑模块 `details/treasures/treasures` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Rogue2_Treasure,
  Treasures,
} from "../../../../types/roguelike-topic-table/details/treasures/treasures.types.js";

/**
 * roguelike_topic_table.json 中 Rogue2_Treasure 的运行时校验结构。
 */
export const Rogue2_TreasureSchema = z
  .strictObject({
    treasureId: z.string(),
    groupId: z.string(),
    subIndex: z.number(),
    name: z.string(),
    usage: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue2_Treasure 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2_Treasure>;

/**
 * roguelike_topic_table.json 中 Treasures 的运行时校验结构。
 */
export const TreasuresSchema = z
  .strictObject({
    rogue_2_treasure: z.array(Rogue2_TreasureSchema).optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Treasures 的运行时校验结构。",
  ) satisfies z.ZodType<Treasures>;
