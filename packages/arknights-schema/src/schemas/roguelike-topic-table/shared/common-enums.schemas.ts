/**

 * JSON 逻辑模块 `shared/common-enums` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Category,
  DisplayForm,
  EffectType,
  HistoricalRecordsMode,
  Mode,
  NodeTypeElement,
  ResultType,
  ValidModeEnum,
} from "../../../types/roguelike-topic-table/shared/common-enums.types.js";

/**
 * roguelike_topic_table.json 中 Category 的运行时校验结构。
 */
export const CategorySchema = z
  .enum(["ALL", "TIER_5", "TIER_6"])
  .describe(
    "roguelike_topic_table.json 中 Category 的运行时校验结构。",
  ) satisfies z.ZodType<Category>;

/**
 * roguelike_topic_table.json 中 DisplayForm 的运行时校验结构。
 */
export const DisplayFormSchema = z
  .enum(["PERCENTAGE", "ABSOLUTE_VAL"])
  .describe(
    "roguelike_topic_table.json 中 DisplayForm 的运行时校验结构。",
  ) satisfies z.ZodType<DisplayForm>;

/**
 * roguelike_topic_table.json 中 EffectType 的运行时校验结构。
 */
export const EffectTypeSchema = z
  .enum(["RAW_TEXT_EFFECT", "BUFF", "RAW_TEXT_BAND"])
  .describe(
    "roguelike_topic_table.json 中 EffectType 的运行时校验结构。",
  ) satisfies z.ZodType<EffectType>;

/**
 * roguelike_topic_table.json 中 HistoricalRecordsMode 的运行时校验结构。
 */
export const HistoricalRecordsModeSchema = z
  .enum(["NONE", "NORMAL", "HARD"])
  .describe(
    "roguelike_topic_table.json 中 HistoricalRecordsMode 的运行时校验结构。",
  ) satisfies z.ZodType<HistoricalRecordsMode>;

/**
 * roguelike_topic_table.json 中 Mode 的运行时校验结构。
 */
export const ModeSchema = z
  .enum(["EASY", "NORMAL", "MONTH_TEAM", "CHALLENGE"])
  .describe(
    "roguelike_topic_table.json 中 Mode 的运行时校验结构。",
  ) satisfies z.ZodType<Mode>;

/**
 * roguelike_topic_table.json 中 NodeTypeElement 的运行时校验结构。
 */
export const NodeTypeElementSchema = z
  .enum([
    "BATTLE_ELITE",
    "BATTLE_NORMAL",
    "BATTLE_SHOP",
    "DUEL",
    "EXPEDITION",
    "INCIDENT",
    "WISH",
    "REST",
    "SACRIFICE",
    "ENTERTAINMENT",
    "BATTLE_BOSS",
    "PORTAL",
  ])
  .describe(
    "roguelike_topic_table.json 中 NodeTypeElement 的运行时校验结构。",
  ) satisfies z.ZodType<NodeTypeElement>;

/**
 * roguelike_topic_table.json 中 ResultType 的运行时校验结构。
 */
export const ResultTypeSchema = z
  .enum(["GOOD", "BAD", "NORMAL", "BEST", "VERYBAD"])
  .describe(
    "roguelike_topic_table.json 中 ResultType 的运行时校验结构。",
  ) satisfies z.ZodType<ResultType>;

/**
 * roguelike_topic_table.json 中 ValidModeEnum 的运行时校验结构。
 */
export const ValidModeEnumSchema = z
  .enum(["DIFFICULTY", "NORMAL", "KEY"])
  .describe(
    "roguelike_topic_table.json 中 ValidModeEnum 的运行时校验结构。",
  ) satisfies z.ZodType<ValidModeEnum>;
