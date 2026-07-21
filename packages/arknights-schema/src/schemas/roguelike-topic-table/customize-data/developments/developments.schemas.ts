/**

 * JSON 逻辑模块 `customize-data/developments/developments` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BuffIconId,
  Developments,
  Outbuff,
  Outbuff1_NodeType,
  Rogue2_Outbuff1_NodeType,
  Rogue2__Outbuff,
} from "../../../../types/roguelike-topic-table/customize-data/developments/developments.types.js";

import { BuffDisplayInfoSchema } from "../../shared/buffs.schemas.js";

import { EffectTypeSchema } from "../../shared/common-enums.schemas.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

import { Rogue3__Difficulty1Schema } from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 BuffIconId 的运行时校验结构。
 */
export const BuffIconIdSchema = z
  .enum([
    "rogue_1_grow_icon_attack",
    "rogue_1_grow_icon_def",
    "rogue_1_grow_icon_hp",
    "rogue_1_grow_icon_gold",
    "rogue_1_grow_icon_mixed",
  ])
  .describe(
    "roguelike_topic_table.json 中 BuffIconId 的运行时校验结构。",
  ) satisfies z.ZodType<BuffIconId>;

/**
 * roguelike_topic_table.json 中 Outbuff1_NodeType 的运行时校验结构。
 */
export const Outbuff1_NodeTypeSchema = z
  .enum(["BRANCH", "KEY"])
  .describe(
    "roguelike_topic_table.json 中 Outbuff1_NodeType 的运行时校验结构。",
  ) satisfies z.ZodType<Outbuff1_NodeType>;

/**
 * roguelike_topic_table.json 中 Rogue2_Outbuff1_NodeType 的运行时校验结构。
 */
export const Rogue2_Outbuff1_NodeTypeSchema = z
  .enum(["SMALL", "NORMAL", "LARGE_RHODES", "LARGE_ABYSSAL", "LARGE_IBERIA"])
  .describe(
    "roguelike_topic_table.json 中 Rogue2_Outbuff1_NodeType 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2_Outbuff1_NodeType>;

/**
 * roguelike_topic_table.json 中 Outbuff 的运行时校验结构。
 */
export const OutbuffSchema = z
  .strictObject({
    buffId: z.string(),
    sortId: z.number(),
    nodeType: Outbuff1_NodeTypeSchema,
    nextNodeId: z.array(z.string()),
    frontNodeId: z.array(z.string()),
    tokenCost: z.number(),
    buffName: z.string(),
    buffIconId: BuffIconIdSchema,
    buffTypeName: z.string(),
    buffDisplayInfo: z.array(BuffDisplayInfoSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Outbuff 的运行时校验结构。",
  ) satisfies z.ZodType<Outbuff>;

/**
 * roguelike_topic_table.json 中 Rogue2__Outbuff 的运行时校验结构。
 */
export const Rogue2__OutbuffSchema = z
  .strictObject({
    buffId: z.string(),
    nodeType: Rogue2_Outbuff1_NodeTypeSchema,
    frontNodeId: z.array(z.string()),
    nextNodeId: z.array(z.string()),
    positionP: z.number(),
    positionR: z.number(),
    tokenCost: z.number(),
    buffName: z.string(),
    buffIconId: z.string(),
    effectType: EffectTypeSchema,
    rawDesc: z.string(),
    buffDisplayInfo: z.array(BuffDisplayInfoSchema),
    enrollId: z.union([EnrollIdSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue2__Outbuff 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2__Outbuff>;

/**
 * roguelike_topic_table.json 中 Developments 的运行时校验结构。
 */
export const DevelopmentsSchema = z
  .strictObject({
    outbuff_1: OutbuffSchema.optional(),
    outbuff_2: OutbuffSchema.optional(),
    outbuff_3: OutbuffSchema.optional(),
    outbuff_4: OutbuffSchema.optional(),
    outbuff_5: OutbuffSchema.optional(),
    outbuff_6: OutbuffSchema.optional(),
    outbuff_7: OutbuffSchema.optional(),
    outbuff_8: OutbuffSchema.optional(),
    outbuff_9: OutbuffSchema.optional(),
    outbuff_10: OutbuffSchema.optional(),
    outbuff_11: OutbuffSchema.optional(),
    outbuff_12: OutbuffSchema.optional(),
    outbuff_13: OutbuffSchema.optional(),
    outbuff_14: OutbuffSchema.optional(),
    outbuff_15: OutbuffSchema.optional(),
    outbuff_16: OutbuffSchema.optional(),
    outbuff_17: OutbuffSchema.optional(),
    outbuff_18: OutbuffSchema.optional(),
    outbuff_19: OutbuffSchema.optional(),
    outbuff_20: OutbuffSchema.optional(),
    outbuff_21: OutbuffSchema.optional(),
    outbuff_22: OutbuffSchema.optional(),
    outbuff_23: OutbuffSchema.optional(),
    outbuff_24: OutbuffSchema.optional(),
    outbuff_25: OutbuffSchema.optional(),
    outbuff_26: OutbuffSchema.optional(),
    outbuff_27: OutbuffSchema.optional(),
    outbuff_28: OutbuffSchema.optional(),
    outbuff_29: OutbuffSchema.optional(),
    outbuff_30: OutbuffSchema.optional(),
    outbuff_31: OutbuffSchema.optional(),
    outbuff_32: OutbuffSchema.optional(),
    outbuff_33: OutbuffSchema.optional(),
    outbuff_34: OutbuffSchema.optional(),
    outbuff_35: OutbuffSchema.optional(),
    outbuff_36: OutbuffSchema.optional(),
    outbuff_37: OutbuffSchema.optional(),
    outbuff_38: OutbuffSchema.optional(),
    outbuff_39: OutbuffSchema.optional(),
    outbuff_40: OutbuffSchema.optional(),
    outbuff_41: OutbuffSchema.optional(),
    outbuff_42: OutbuffSchema.optional(),
    outbuff_43: OutbuffSchema.optional(),
    outbuff_44: OutbuffSchema.optional(),
    outbuff_45: OutbuffSchema.optional(),
    rogue_2_outbuff_1: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_2: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_3: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_4: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_5: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_6: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_7: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_8: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_9: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_10: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_11: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_12: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_13: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_14: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_15: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_16: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_17: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_18: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_19: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_20: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_21: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_22: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_23: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_24: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_25: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_26: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_27: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_28: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_29: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_30: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_31: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_32: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_33: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_34: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_35: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_36: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_37: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_38: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_39: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_40: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_41: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_42: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_43: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_44: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_45: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_46: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_47: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_48: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_49: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_50: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_51: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_52: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_53: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_54: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_55: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_56: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_57: Rogue2__OutbuffSchema.optional(),
    rogue_2_outbuff_58: Rogue2__OutbuffSchema.optional(),
    rogue_3_outbuff_1: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_2: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_3: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_4: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_5: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_6: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_7: Rogue3__Difficulty1Schema.optional(),
    rogue_3_difficulty_1: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_9: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_10: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_11: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_12: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_13: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_14: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_15: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_16: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_17: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_18: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_19: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_20: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_21: Rogue3__Difficulty1Schema.optional(),
    rogue_3_difficulty_2: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_23: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_24: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_25: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_26: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_27: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_28: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_29: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_30: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_31: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_32: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_33: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_34: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_35: Rogue3__Difficulty1Schema.optional(),
    rogue_3_difficulty_3: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_37: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_38: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_39: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_40: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_41: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_42: Rogue3__Difficulty1Schema.optional(),
    rogue_3_outbuff_43: Rogue3__Difficulty1Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Developments 的运行时校验结构。",
  ) satisfies z.ZodType<Developments>;
