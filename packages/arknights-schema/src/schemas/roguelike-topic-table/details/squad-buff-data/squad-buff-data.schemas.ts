/**

 * JSON 逻辑模块 `details/squad-buff-data/squad-buff-data` 的 Zod Schema。

 */

import { z } from "zod";

import type { SquadBuffData } from "../../../../types/roguelike-topic-table/details/squad-buff-data/squad-buff-data.types.js";

import {
  Rogue2_Mutation1_ClassSchema,
  Rogue2__Mutation4Schema,
} from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 SquadBuffData 的运行时校验结构。
 */
export const SquadBuffDataSchema = z
  .strictObject({
    rogue_2_virtue_1: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_2: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_3: Rogue2__Mutation4Schema.optional(),
    rogue_2_virtue_4: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_5: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_6: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_7: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_8: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_9: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_10: Rogue2__Mutation4Schema.optional(),
    rogue_2_virtue_11: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_12: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_13: Rogue2_Mutation1_ClassSchema.optional(),
    rogue_2_virtue_14: Rogue2_Mutation1_ClassSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 SquadBuffData 的运行时校验结构。",
  ) satisfies z.ZodType<SquadBuffData>;
