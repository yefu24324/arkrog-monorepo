/**

 * JSON 逻辑模块 `details/fusion-data/fusion-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  FusionData,
  Variation,
} from "../../../../types/roguelike-topic-table/details/fusion-data/fusion-data.types.js";

/**
 * roguelike_topic_table.json 中 Variation 的运行时校验结构。
 */
export const VariationSchema = z
  .strictObject({
    id: z.string(),
    type: z.string(),
    name: z.string(),
    functionDesc: z.string(),
    desc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Variation 的运行时校验结构。",
  ) satisfies z.ZodType<Variation>;

/**
 * roguelike_topic_table.json 中 FusionData 的运行时校验结构。
 */
export const FusionDataSchema = z
  .strictObject({
    variation_14: VariationSchema.optional(),
    variation_15: VariationSchema.optional(),
    variation_16: VariationSchema.optional(),
    variation_17: VariationSchema.optional(),
    variation_18: VariationSchema.optional(),
    variation_19: VariationSchema.optional(),
    variation_20: VariationSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 FusionData 的运行时校验结构。",
  ) satisfies z.ZodType<FusionData>;
