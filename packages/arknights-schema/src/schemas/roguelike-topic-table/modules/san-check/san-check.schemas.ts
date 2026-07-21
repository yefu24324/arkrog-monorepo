/**

 * JSON 逻辑模块 `modules/san-check/san-check` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  SanCheck,
  SanCheckModuleConsts,
  SanRange,
} from "../../../../types/roguelike-topic-table/modules/san-check/san-check.types.js";

/**
 * roguelike_topic_table.json 中 SanCheckModuleConsts 的运行时校验结构。
 */
export const SanCheckModuleConstsSchema = z
  .strictObject({
    sanDecreaseToast: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 SanCheckModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<SanCheckModuleConsts>;

/**
 * roguelike_topic_table.json 中 SanRange 的运行时校验结构。
 */
export const SanRangeSchema = z
  .strictObject({
    sanMax: z.number(),
    diceGroupId: z.string(),
    description: z.string(),
    sanDungeonEffect: z.string(),
    sanEffectRank: z.string(),
    sanEndingDesc: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 SanRange 的运行时校验结构。",
  ) satisfies z.ZodType<SanRange>;

/**
 * roguelike_topic_table.json 中 SanCheck 的运行时校验结构。
 */
export const SanCheckSchema = z
  .strictObject({
    sanRanges: z.array(SanRangeSchema),
    moduleConsts: SanCheckModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 SanCheck 的运行时校验结构。",
  ) satisfies z.ZodType<SanCheck>;
