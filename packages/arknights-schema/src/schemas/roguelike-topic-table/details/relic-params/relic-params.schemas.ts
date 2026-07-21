/**

 * JSON 逻辑模块 `details/relic-params/relic-params` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CheckCharBoxParam,
  CheckCharBoxType,
  RelicParam,
} from "../../../../types/roguelike-topic-table/details/relic-params/relic-params.types.js";

import { ProfessionSchema } from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 CheckCharBoxParam 的运行时校验结构。
 */
export const CheckCharBoxParamSchema = z
  .strictObject({
    valueProfessionMask: ProfessionSchema,
    valueStrs: z.union([z.array(z.string()), z.null()]),
    valueInt: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 CheckCharBoxParam 的运行时校验结构。",
  ) satisfies z.ZodType<CheckCharBoxParam>;

/**
 * roguelike_topic_table.json 中 CheckCharBoxType 的运行时校验结构。
 */
export const CheckCharBoxTypeSchema = z
  .enum(["PROFESSION", "SUB_PROFESSION", "UPGRADE"])
  .describe(
    "roguelike_topic_table.json 中 CheckCharBoxType 的运行时校验结构。",
  ) satisfies z.ZodType<CheckCharBoxType>;

/**
 * roguelike_topic_table.json 中 RelicParam 的运行时校验结构。
 */
export const RelicParamSchema = z
  .strictObject({
    id: z.string(),
    checkCharBoxTypes: z.array(CheckCharBoxTypeSchema),
    checkCharBoxParams: z.array(CheckCharBoxParamSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 RelicParam 的运行时校验结构。",
  ) satisfies z.ZodType<RelicParam>;
