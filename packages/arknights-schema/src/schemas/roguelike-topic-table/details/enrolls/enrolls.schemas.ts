/**

 * JSON 逻辑模块 `details/enrolls/enrolls` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  DetailEnroll,
  EnrollType,
} from "../../../../types/roguelike-topic-table/details/enrolls/enrolls.types.js";

/**
 * roguelike_topic_table.json 中 EnrollType 的运行时校验结构。
 */
export const EnrollTypeSchema = z
  .enum(["DLC", "REVIEW"])
  .describe(
    "roguelike_topic_table.json 中 EnrollType 的运行时校验结构。",
  ) satisfies z.ZodType<EnrollType>;

/**
 * roguelike_topic_table.json 中 DetailEnroll 的运行时校验结构。
 */
export const DetailEnrollSchema = z
  .strictObject({
    enrollId: z.string(),
    enrollTime: z.number(),
    enrollType: EnrollTypeSchema,
    enrollNoticeEndTime: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 DetailEnroll 的运行时校验结构。",
  ) satisfies z.ZodType<DetailEnroll>;
