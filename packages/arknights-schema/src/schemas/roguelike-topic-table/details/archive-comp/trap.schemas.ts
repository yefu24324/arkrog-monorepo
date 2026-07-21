/**

 * JSON 逻辑模块 `details/archive-comp/trap` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompTrap,
  TrapTrap,
} from "../../../../types/roguelike-topic-table/details/archive-comp/trap.types.js";

import { Rogue1__ActiveToolSchema } from "./relic.schemas.js";

/**
 * roguelike_topic_table.json 中 TrapTrap 的运行时校验结构。
 */
export const TrapTrapSchema = z
  .strictObject({
    rogue_1_active_tool_1: Rogue1__ActiveToolSchema.optional(),
    rogue_1_active_tool_2: Rogue1__ActiveToolSchema.optional(),
    rogue_1_active_tool_3: Rogue1__ActiveToolSchema.optional(),
    rogue_1_active_tool_4: Rogue1__ActiveToolSchema.optional(),
    rogue_1_active_tool_5: Rogue1__ActiveToolSchema.optional(),
    rogue_1_active_tool_6: Rogue1__ActiveToolSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 TrapTrap 的运行时校验结构。",
  ) satisfies z.ZodType<TrapTrap>;

/**
 * roguelike_topic_table.json 中 ArchiveCompTrap 的运行时校验结构。
 */
export const ArchiveCompTrapSchema = z
  .strictObject({
    trap: TrapTrapSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompTrap 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompTrap>;
