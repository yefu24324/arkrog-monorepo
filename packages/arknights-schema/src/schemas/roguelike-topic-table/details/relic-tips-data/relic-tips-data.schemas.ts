/**

 * JSON 逻辑模块 `details/relic-tips-data/relic-tips-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  RelicTipsData,
  Rogue5__,
} from "../../../../types/roguelike-topic-table/details/relic-tips-data/relic-tips-data.types.js";

/**
 * roguelike_topic_table.json 中 Rogue5__ 的运行时校验结构。
 */
export const Rogue5__Schema = z
  .strictObject({
    itemId: z.string(),
    toastText: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue5__ 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue5__>;

/**
 * roguelike_topic_table.json 中 RelicTipsData 的运行时校验结构。
 */
export const RelicTipsDataSchema = z
  .strictObject({
    rogue_5_relic_explore_5: Rogue5__Schema.optional(),
    rogue_5_relic_explore_10: Rogue5__Schema.optional(),
    rogue_5_feature_band_28_1: Rogue5__Schema.optional(),
    rogue_5_feature_band_28_2: Rogue5__Schema.optional(),
    rogue_5_feature_band_28_3: Rogue5__Schema.optional(),
    rogue_5_feature_band_28_4: Rogue5__Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 RelicTipsData 的运行时校验结构。",
  ) satisfies z.ZodType<RelicTipsData>;
