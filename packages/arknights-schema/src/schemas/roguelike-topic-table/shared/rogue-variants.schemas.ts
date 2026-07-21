/**

 * JSON 逻辑模块 `shared/rogue-variants` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Ro4FailEnding1,
  Rogue2_Mutation1_Class,
  Rogue2__Mutation4,
  Rogue3__Difficulty1,
  Rogue3__ExploreTool1,
} from "../../../types/roguelike-topic-table/shared/rogue-variants.types.js";

import { BuffDisplayInfoSchema, BuffElementSchema } from "./buffs.schemas.js";

import {
  EffectTypeSchema,
  ValidModeEnumSchema,
} from "./common-enums.schemas.js";

import { IconIdSchema } from "./item-enums.schemas.js";

import {
  EnrollIdSchema,
  GroupIdSchema,
  Rogue2_Mutation1_BuffTypeSchema,
} from "./rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 Ro4FailEnding1 的运行时校验结构。
 */
export const Ro4FailEnding1Schema = z
  .strictObject({
    id: IconIdSchema,
    name: z.string(),
    desc: z.string(),
    iconId: IconIdSchema,
    priority: z.number().optional(),
    unlockDesc: z.union([z.null(), z.string()]).optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Ro4FailEnding1 的运行时校验结构。",
  ) satisfies z.ZodType<Ro4FailEnding1>;

/**
 * roguelike_topic_table.json 中 Rogue2_Mutation1_Class 的运行时校验结构。
 */
export const Rogue2_Mutation1_ClassSchema = z
  .strictObject({
    id: z.string(),
    buffType: Rogue2_Mutation1_BuffTypeSchema.optional(),
    iconId: z.string(),
    relatedItemId: z.union([z.null(), z.string()]).optional(),
    outerName: z.string(),
    innerName: z.string(),
    functionDesc: z.string(),
    desc: z.string(),
    buffs: z.array(BuffElementSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue2_Mutation1_Class 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2_Mutation1_Class>;

/**
 * roguelike_topic_table.json 中 Rogue2__Mutation4 的运行时校验结构。
 */
export const Rogue2__Mutation4Schema = z
  .strictObject({
    id: z.string(),
    buffType: Rogue2_Mutation1_BuffTypeSchema.optional(),
    iconId: z.union([z.null(), z.string()]),
    relatedItemId: z.union([z.null(), z.string()]).optional(),
    outerName: z.string().optional(),
    innerName: z.string().optional(),
    functionDesc: z.string(),
    desc: z.string(),
    buffs: z.array(BuffElementSchema).optional(),
    type: z.string().optional(),
    sound: z.union([z.null(), z.string()]).optional(),
    isPositive: z.boolean().optional(),
    name: z.string().optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue2__Mutation4 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2__Mutation4>;

/**
 * roguelike_topic_table.json 中 Rogue3__Difficulty1 的运行时校验结构。
 */
export const Rogue3__Difficulty1Schema = z
  .strictObject({
    buffId: z.string(),
    nodeType: ValidModeEnumSchema,
    frontNodeId: z.array(z.string()),
    nextNodeId: z.array(z.string()),
    positionRow: z.number(),
    positionOrder: z.number(),
    tokenCost: z.number(),
    buffName: z.string(),
    activeIconId: z.string().optional(),
    inactiveIconId: z.string().optional(),
    bottomIconId: z.string().optional(),
    effectType: EffectTypeSchema,
    rawDesc: z.array(z.string()),
    buffDisplayInfo: z.array(BuffDisplayInfoSchema),
    groupId: GroupIdSchema,
    enrollId: z.union([EnrollIdSchema, z.null()]),
    buffIconId: z.string().optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue3__Difficulty1 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue3__Difficulty1>;

/**
 * roguelike_topic_table.json 中 Rogue3__ExploreTool1 的运行时校验结构。
 */
export const Rogue3__ExploreTool1Schema = z
  .strictObject({
    itemId: z.string(),
    trapId: z.string(),
    trapDesc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue3__ExploreTool1 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue3__ExploreTool1>;
