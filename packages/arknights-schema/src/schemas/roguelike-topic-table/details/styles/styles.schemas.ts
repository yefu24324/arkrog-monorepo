/**

 * JSON 逻辑模块 `details/styles/styles` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Rogue3_StyleChallengeClass,
  Styles,
} from "../../../../types/roguelike-topic-table/details/styles/styles.types.js";

import { StyleIdSchema } from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 Rogue3_StyleChallengeClass 的运行时校验结构。
 */
export const Rogue3_StyleChallengeClassSchema = z
  .strictObject({
    styleId: StyleIdSchema,
    styleConfig: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue3_StyleChallengeClass 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue3_StyleChallengeClass>;

/**
 * roguelike_topic_table.json 中 Styles 的运行时校验结构。
 */
export const StylesSchema = z
  .strictObject({
    rogue_3_style_default: Rogue3_StyleChallengeClassSchema.optional(),
    rogue_3_style_challenge: Rogue3_StyleChallengeClassSchema.optional(),
    rogue_4_style_default: Rogue3_StyleChallengeClassSchema.optional(),
    rogue_4_style_challenge: Rogue3_StyleChallengeClassSchema.optional(),
    rogue_5_style_default: Rogue3_StyleChallengeClassSchema.optional(),
    rogue_5_style_challenge: Rogue3_StyleChallengeClassSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Styles 的运行时校验结构。",
  ) satisfies z.ZodType<Styles>;
