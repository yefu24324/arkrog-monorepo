/**

 * JSON 逻辑模块 `details/archive-comp/buff` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompBuff,
  BuffColor,
  BuffValue,
} from "../../../../types/roguelike-topic-table/details/archive-comp/buff.types.js";

/**
 * roguelike_topic_table.json 中 BuffColor 的运行时校验结构。
 */
export const BuffColorSchema = z
  .enum(["#9266b2", "#b43b3b", "#0098dc"])
  .describe(
    "roguelike_topic_table.json 中 BuffColor 的运行时校验结构。",
  ) satisfies z.ZodType<BuffColor>;

/**
 * roguelike_topic_table.json 中 BuffValue 的运行时校验结构。
 */
export const BuffValueSchema = z
  .strictObject({
    buffId: z.string(),
    buffGroupIndex: z.number(),
    innerSortId: z.number(),
    name: z.string(),
    iconId: z.string(),
    usage: z.string(),
    desc: z.string(),
    color: BuffColorSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BuffValue 的运行时校验结构。",
  ) satisfies z.ZodType<BuffValue>;

/**
 * roguelike_topic_table.json 中 ArchiveCompBuff 的运行时校验结构。
 */
export const ArchiveCompBuffSchema = z
  .strictObject({
    buff: z.record(z.string(), BuffValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompBuff 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompBuff>;
