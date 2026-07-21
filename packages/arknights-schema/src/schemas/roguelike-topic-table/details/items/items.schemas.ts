/**

 * JSON 逻辑模块 `details/items/items` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Item,
  ObtainApproach,
  SubType,
  TinyIconColor,
} from "../../../../types/roguelike-topic-table/details/items/items.types.js";

import {
  RaritySchema,
  RewardItemTypeEnumSchema,
} from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 ObtainApproach 的运行时校验结构。
 */
export const ObtainApproachSchema = z
  .enum(["在集成战略模式中获得", "步数发放", "完成遭遇战"])
  .describe(
    "roguelike_topic_table.json 中 ObtainApproach 的运行时校验结构。",
  ) satisfies z.ZodType<ObtainApproach>;

/**
 * roguelike_topic_table.json 中 SubType 的运行时校验结构。
 */
export const SubTypeSchema = z
  .enum([
    "NONE",
    "CURSE",
    "RED_CAPSULE",
    "TEMP_TICKET",
    "TOTEM_UPPER",
    "TOTEM_LOWER",
    "SINGLE_RAND_FREE",
    "SECRET",
  ])
  .describe(
    "roguelike_topic_table.json 中 SubType 的运行时校验结构。",
  ) satisfies z.ZodType<SubType>;

/**
 * roguelike_topic_table.json 中 TinyIconColor 的运行时校验结构。
 */
export const TinyIconColorSchema = z
  .enum(["33a8e2", "02d3ae", "008aff", "ffffff"])
  .describe(
    "roguelike_topic_table.json 中 TinyIconColor 的运行时校验结构。",
  ) satisfies z.ZodType<TinyIconColor>;

/**
 * roguelike_topic_table.json 中 Item 的运行时校验结构。
 */
export const ItemSchema = z
  .strictObject({
    id: z.string(),
    name: z.string(),
    description: z.union([z.null(), z.string()]),
    usage: z.union([z.null(), z.string()]),
    obtainApproach: z.union([ObtainApproachSchema, z.null()]),
    iconId: z.string(),
    itemIconGroupId: z.union([z.null(), z.string()]),
    type: RewardItemTypeEnumSchema,
    subType: SubTypeSchema,
    rarity: RaritySchema,
    sortId: z.number(),
    canSacrifice: z.boolean(),
    tinyIconColor: z.union([TinyIconColorSchema, z.null()]),
    unlockCondDesc: z.union([z.null(), z.string()]),
    shortUsage: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 Item 的运行时校验结构。",
  ) satisfies z.ZodType<Item>;
