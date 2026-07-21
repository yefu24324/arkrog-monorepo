/**

 * JSON 逻辑模块 `constant/predefined-chars/predefined-chars` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  PredefinedChar,
  RecruitType,
} from "../../../../types/roguelike-topic-table/constant/predefined-chars/predefined-chars.types.js";

/**
 * roguelike_topic_table.json 中 RecruitType 的运行时校验结构。
 */
export const RecruitTypeSchema = z
  .enum(["FREE", "THIRD_LOW", "THIRD"])
  .describe(
    "roguelike_topic_table.json 中 RecruitType 的运行时校验结构。",
  ) satisfies z.ZodType<RecruitType>;

/**
 * roguelike_topic_table.json 中 PredefinedChar 的运行时校验结构。
 */
export const PredefinedCharSchema = z
  .strictObject({
    charId: z.string(),
    canBeFree: z.boolean(),
    uniEquipId: z.union([z.null(), z.string()]),
    recruitType: RecruitTypeSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 PredefinedChar 的运行时校验结构。",
  ) satisfies z.ZodType<PredefinedChar>;
