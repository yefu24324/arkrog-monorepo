/**

 * JSON 逻辑模块 `details/endings/endings` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Ending,
  IconElement,
} from "../../../../types/roguelike-topic-table/details/endings/endings.types.js";

/**
 * roguelike_topic_table.json 中 IconElement 的运行时校验结构。
 */
export const IconElementSchema = z
  .strictObject({
    level: z.number(),
    iconId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 IconElement 的运行时校验结构。",
  ) satisfies z.ZodType<IconElement>;

/**
 * roguelike_topic_table.json 中 Ending 的运行时校验结构。
 */
export const EndingSchema = z
  .strictObject({
    id: z.string(),
    familyId: z.number(),
    name: z.string(),
    desc: z.string(),
    bgId: z.string(),
    icons: z.array(IconElementSchema),
    priority: z.number(),
    changeEndingDesc: z.union([z.null(), z.string()]),
    bossIconId: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 Ending 的运行时校验结构。",
  ) satisfies z.ZodType<Ending>;
