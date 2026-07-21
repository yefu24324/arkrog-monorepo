/**

 * JSON 逻辑模块 `details/char-buff-data/char-buff-data` 的 Zod Schema。

 */

import { z } from "zod";

import type { CharBuffData } from "../../../../types/roguelike-topic-table/details/char-buff-data/char-buff-data.types.js";

import {
  Rogue2_Mutation1_ClassSchema,
  Rogue2__Mutation4Schema,
} from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 CharBuffData 的运行时校验结构。
 */
export const CharBuffDataSchema = z
  .strictObject({
    rogue_2_mutation_1: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_2: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_3: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_4: Rogue2__Mutation4Schema.optional(),
    rogue_2_mutation_5: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_6: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_7: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_8: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_9: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_10: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_11: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_12: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_13: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_14: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_15: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_16: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_17: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_18: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_mutation_19: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_1: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_2: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_3: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_4: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_5: Rogue2__Mutation4Schema.optional(),
    rogue_6_from_relic_6: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_7: Rogue2__Mutation4Schema.optional(),
    rogue_6_from_relic_8: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_9: Rogue2__Mutation4Schema.optional(),
    rogue_6_from_relic_10: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_11: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_12: Rogue2__Mutation4Schema.optional(),
    rogue_6_from_relic_13: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_14: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_6_from_relic_15: Rogue2_Mutation1_ClassSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 CharBuffData 的运行时校验结构。",
  ) satisfies z.ZodType<CharBuffData>;
