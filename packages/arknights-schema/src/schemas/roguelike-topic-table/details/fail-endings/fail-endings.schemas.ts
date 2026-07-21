/**

 * JSON 逻辑模块 `details/fail-endings/fail-endings` 的 Zod Schema。

 */

import { z } from "zod";

import type { FailEndings } from "../../../../types/roguelike-topic-table/details/fail-endings/fail-endings.types.js";

import { Ro4FailEnding1Schema } from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 FailEndings 的运行时校验结构。
 */
export const FailEndingsSchema = z
  .strictObject({
    ro4_fail_ending_1: Ro4FailEnding1Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 FailEndings 的运行时校验结构。",
  ) satisfies z.ZodType<FailEndings>;
