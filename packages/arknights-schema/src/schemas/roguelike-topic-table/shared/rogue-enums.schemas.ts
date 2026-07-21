/**

 * JSON 逻辑模块 `shared/rogue-enums` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  EnrollId,
  GroupId,
  LeftDisasterDesc,
  LeftWrathDesc,
  LuckyLevel,
  Rogue2_Mutation1_BuffType,
  Rogue6_ScrapM01_Enum,
} from "../../../types/roguelike-topic-table/shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 EnrollId 的运行时校验结构。
 */
export const EnrollIdSchema = z
  .enum([
    "rogue_4_enroll_2",
    "rogue_5_enroll_1",
    "rogue_5_enroll_2",
    "rogue_3_enroll_2",
    "rogue_1_enroll_3",
    "rogue_1_enroll_2",
    "rogue_2_enroll_2",
    "rogue_2_enroll_3",
    "rogue_4_enroll_1",
  ])
  .describe(
    "roguelike_topic_table.json 中 EnrollId 的运行时校验结构。",
  ) satisfies z.ZodType<EnrollId>;

/**
 * roguelike_topic_table.json 中 GroupId 的运行时校验结构。
 */
export const GroupIdSchema = z
  .enum(["group_1", "group_2", "group_3", "group_4", "group_5"])
  .describe(
    "roguelike_topic_table.json 中 GroupId 的运行时校验结构。",
  ) satisfies z.ZodType<GroupId>;

/**
 * roguelike_topic_table.json 中 LeftDisasterDesc 的运行时校验结构。
 */
export const LeftDisasterDescSchema = z
  .enum(["成型期", "扩张期", "鼎盛期", "早期", "中期", "晚期"])
  .describe(
    "roguelike_topic_table.json 中 LeftDisasterDesc 的运行时校验结构。",
  ) satisfies z.ZodType<LeftDisasterDesc>;

/**
 * roguelike_topic_table.json 中 LeftWrathDesc 的运行时校验结构。
 */
export const LeftWrathDescSchema = z
  .enum(["朦胧", "真切", "入髓", "醒觉"])
  .describe(
    "roguelike_topic_table.json 中 LeftWrathDesc 的运行时校验结构。",
  ) satisfies z.ZodType<LeftWrathDesc>;

/**
 * roguelike_topic_table.json 中 LuckyLevel 的运行时校验结构。
 */
export const LuckyLevelSchema = z
  .enum(["MID", "LOW", "HIGH"])
  .describe(
    "roguelike_topic_table.json 中 LuckyLevel 的运行时校验结构。",
  ) satisfies z.ZodType<LuckyLevel>;

/**
 * roguelike_topic_table.json 中 Rogue2_Mutation1_BuffType 的运行时校验结构。
 */
export const Rogue2_Mutation1_BuffTypeSchema = z
  .enum(["MUTATION", "FROM_RELIC", "EVOLUTION"])
  .describe(
    "roguelike_topic_table.json 中 Rogue2_Mutation1_BuffType 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2_Mutation1_BuffType>;

/**
 * roguelike_topic_table.json 中 Rogue6_ScrapM01_Enum 的运行时校验结构。
 */
export const Rogue6_ScrapM01_EnumSchema = z
  .enum([
    "LEAVE",
    "TRADE",
    "NEXT_PROB",
    "NEXT",
    "TRADE_PROB",
    "WISH",
    "SACRIFICE",
    "TRADE_PROB_SHOW",
    "TELEPORT",
    "EXPEDITION",
    "SACRIFICE_TOTEM",
    "WISH_ALL",
    "USE_STASHED_TICKET",
    "ITEM_REROLL",
    "JUMP_PROB",
    "PACIFY_WRATH",
    "EXPEDITION_ALL",
    "EXPEDITION_RETURN_ALL",
    "ITEM_TOP_UP",
    "GILD_COPPER",
    "GILD_COPPER_ALL",
    "JUMP",
    "ZONE_END",
    "MOVE",
    "VISION",
    "SCRAP_PAY_SHOW",
  ])
  .describe(
    "roguelike_topic_table.json 中 Rogue6_ScrapM01_Enum 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue6_ScrapM01_Enum>;
