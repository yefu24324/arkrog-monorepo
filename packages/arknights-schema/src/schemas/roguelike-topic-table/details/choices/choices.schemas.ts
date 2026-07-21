/**

 * JSON 逻辑模块 `details/choices/choices` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Choice,
  DisplayData,
  DisplayDataType,
  IconEnum,
  LeftDecoType,
  THintType,
} from "../../../../types/roguelike-topic-table/details/choices/choices.types.js";

import { Rogue6_ScrapM01_EnumSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 DisplayDataType 的运行时校验结构。
 */
export const DisplayDataTypeSchema = z
  .enum(["NORMAL", "ITEM"])
  .describe(
    "roguelike_topic_table.json 中 DisplayDataType 的运行时校验结构。",
  ) satisfies z.ZodType<DisplayDataType>;

/**
 * roguelike_topic_table.json 中 IconEnum 的运行时校验结构。
 */
export const IconEnumSchema = z
  .enum([
    "leave",
    "initial_reward_hp",
    "initial_reward_population",
    "initial_reward_gold",
    "initial_reward_unknown",
    "relic",
    "hp",
    "population",
    "member",
    "unknown",
    "gold",
    "recruit",
    "battle",
    "initial_reward_shield",
    "key",
    "initial_reward_dice",
    "hpmax",
    "dice",
    "san",
    "shield",
    "sacrifice",
    "teleport",
    "adventure",
    "totem",
    "sacrifice_totem",
    "vision",
    "chaos_purify",
    "fragment",
    "disaster",
    "duel",
    "weight",
    "stashed_recruit",
    "candle_duel",
    "copper_drop",
    "copper",
    "sp_zone_ap",
    "sacrifice_copper",
    "sacrifice_scrap",
    "scrap_drop",
    "zone_end",
    "ap_drop",
    "weather_change",
    "initial_reward_relic",
    "initial_reward_max_weight",
    "initial_reward_unknown_pay_hp",
    "initial_reward_scrap_move",
    "initial_reward_unknown_pay_weight",
    "",
  ])
  .describe(
    "roguelike_topic_table.json 中 IconEnum 的运行时校验结构。",
  ) satisfies z.ZodType<IconEnum>;

/**
 * roguelike_topic_table.json 中 LeftDecoType 的运行时校验结构。
 */
export const LeftDecoTypeSchema = z
  .enum(["NONE", "DICE", "TASK", "TASK_REWARD", "VISION"])
  .describe(
    "roguelike_topic_table.json 中 LeftDecoType 的运行时校验结构。",
  ) satisfies z.ZodType<LeftDecoType>;

/**
 * roguelike_topic_table.json 中 THintType 的运行时校验结构。
 */
export const THintTypeSchema = z
  .enum([
    "NONE",
    "CHAOS",
    "VISION",
    "SEED_COST",
    "ITEM",
    "SACRIFICE",
    "EXPEDITION",
    "SACRIFICE_TOTEM",
    "FRAGMENT",
    "STASHED_RECRUIT",
    "CANDLE",
    "GUIDED",
    "COPPER_LUCK",
    "GUIDED_CHAR",
    "SACRIFICE_SCRAP",
    "AP_LEFT",
  ])
  .describe(
    "roguelike_topic_table.json 中 THintType 的运行时校验结构。",
  ) satisfies z.ZodType<THintType>;

/**
 * roguelike_topic_table.json 中 DisplayData 的运行时校验结构。
 */
export const DisplayDataSchema = z
  .strictObject({
    type: DisplayDataTypeSchema,
    costHintType: THintTypeSchema,
    effectHintType: THintTypeSchema,
    funcIconId: z.union([IconEnumSchema, z.null()]),
    itemId: z.union([z.null(), z.string()]),
    difficultyUpgradeRelicGroupId: z.null(),
    taskId: z.null(),
    instId: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 DisplayData 的运行时校验结构。",
  ) satisfies z.ZodType<DisplayData>;

/**
 * roguelike_topic_table.json 中 Choice 的运行时校验结构。
 */
export const ChoiceSchema = z
  .strictObject({
    id: z.string(),
    title: z.string(),
    description: z.union([z.null(), z.string()]),
    lockedCoverDesc: z.union([z.null(), z.string()]),
    type: Rogue6_ScrapM01_EnumSchema,
    leftDecoType: LeftDecoTypeSchema,
    nextSceneId: z.union([z.null(), z.string()]),
    icon: z.union([IconEnumSchema, z.null()]),
    displayData: DisplayDataSchema,
    forceShowWhenOnlyLeave: z.boolean(),
    isHiddenChoice: z.boolean(),
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Choice 的运行时校验结构。",
  ) satisfies z.ZodType<Choice>;
