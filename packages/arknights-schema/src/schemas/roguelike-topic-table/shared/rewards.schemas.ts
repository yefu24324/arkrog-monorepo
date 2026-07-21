/**

 * JSON 逻辑模块 `shared/rewards` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BuyConfirm,
  BuyConfirmGroups,
  FluffyBuySelect,
  FluffyGroups,
  Reward,
} from "../../../types/roguelike-topic-table/shared/rewards.types.js";

import { NoneSchema } from "./core.schemas.js";

import { ItemTypeEnumSchema } from "./item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 BuyConfirmGroups 的运行时校验结构。
 */
export const BuyConfirmGroupsSchema = z
  .strictObject({
    NONE: NoneSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BuyConfirmGroups 的运行时校验结构。",
  ) satisfies z.ZodType<BuyConfirmGroups>;

/**
 * roguelike_topic_table.json 中 FluffyGroups 的运行时校验结构。
 */
export const FluffyGroupsSchema = z
  .strictObject({
    NONE: NoneSchema,
    RECRUIT_TICKET: NoneSchema,
    RELIC: NoneSchema,
    ACTIVE_TOOL: NoneSchema,
    COPPER: NoneSchema.optional(),
    DIVINATION_KIT: NoneSchema.optional(),
    VISION: NoneSchema.optional(),
    SCRAP: NoneSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 FluffyGroups 的运行时校验结构。",
  ) satisfies z.ZodType<FluffyGroups>;

/**
 * roguelike_topic_table.json 中 Reward 的运行时校验结构。
 */
export const RewardSchema = z
  .strictObject({
    id: z.string(),
    count: z.number(),
    type: ItemTypeEnumSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Reward 的运行时校验结构。",
  ) satisfies z.ZodType<Reward>;

/**
 * roguelike_topic_table.json 中 BuyConfirm 的运行时校验结构。
 */
export const BuyConfirmSchema = z
  .strictObject({
    groups: BuyConfirmGroupsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BuyConfirm 的运行时校验结构。",
  ) satisfies z.ZodType<BuyConfirm>;

/**
 * roguelike_topic_table.json 中 FluffyBuySelect 的运行时校验结构。
 */
export const FluffyBuySelectSchema = z
  .strictObject({
    groups: FluffyGroupsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 FluffyBuySelect 的运行时校验结构。",
  ) satisfies z.ZodType<FluffyBuySelect>;
