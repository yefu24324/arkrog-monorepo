/**

 * JSON 逻辑模块 `details/archive-comp/module-archives` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompDisaster,
  ArchiveCompFragment,
  ArchiveCompScrap,
  ArchiveCompTotem,
  ArchiveCompWeather,
  ArchiveCompWrath,
  DisasterValue,
  FragmentValue,
  ScrapValue,
  TotemValue,
  WeatherValue,
  WrathValue,
} from "../../../../types/roguelike-topic-table/details/archive-comp/module-archives.types.js";

import { PosSchema } from "../../shared/core.schemas.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 DisasterValue 的运行时校验结构。
 */
export const DisasterValueSchema = z
  .strictObject({
    disasterId: z.string(),
    sortId: z.number(),
    enrollConditionId: z.null(),
    picSmallId: z.string(),
    picBigActiveId: z.string(),
    picBigInactiveId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 DisasterValue 的运行时校验结构。",
  ) satisfies z.ZodType<DisasterValue>;

/**
 * roguelike_topic_table.json 中 FragmentValue 的运行时校验结构。
 */
export const FragmentValueSchema = z
  .strictObject({
    fragmentId: z.string(),
    sortId: z.number(),
    enrollConditionId: z.union([EnrollIdSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 FragmentValue 的运行时校验结构。",
  ) satisfies z.ZodType<FragmentValue>;

/**
 * roguelike_topic_table.json 中 ScrapValue 的运行时校验结构。
 */
export const ScrapValueSchema = z
  .strictObject({
    scrapId: z.string(),
    sortId: z.number(),
    enrollConditionId: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapValue 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapValue>;

/**
 * roguelike_topic_table.json 中 TotemValue 的运行时校验结构。
 */
export const TotemValueSchema = z
  .strictObject({
    id: z.string(),
    type: PosSchema,
    enrollConditionId: z.union([EnrollIdSchema, z.null()]),
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 TotemValue 的运行时校验结构。",
  ) satisfies z.ZodType<TotemValue>;

/**
 * roguelike_topic_table.json 中 WeatherValue 的运行时校验结构。
 */
export const WeatherValueSchema = z
  .strictObject({
    weatherId: z.string(),
    sortId: z.number(),
    enrollConditionId: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 WeatherValue 的运行时校验结构。",
  ) satisfies z.ZodType<WeatherValue>;

/**
 * roguelike_topic_table.json 中 WrathValue 的运行时校验结构。
 */
export const WrathValueSchema = z
  .strictObject({
    wrathId: z.string(),
    sortId: z.number(),
    picTitleId: z.string(),
    picSmallInactiveId: z.union([z.null(), z.string()]),
    picSmallActiveId: z.string(),
    picBigActiveId: z.string(),
    picBigInactiveId: z.union([z.null(), z.string()]),
    enrollId: z.null(),
    isSp: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 WrathValue 的运行时校验结构。",
  ) satisfies z.ZodType<WrathValue>;

/**
 * roguelike_topic_table.json 中 ArchiveCompDisaster 的运行时校验结构。
 */
export const ArchiveCompDisasterSchema = z
  .strictObject({
    disasters: z.record(z.string(), DisasterValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompDisaster 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompDisaster>;

/**
 * roguelike_topic_table.json 中 ArchiveCompFragment 的运行时校验结构。
 */
export const ArchiveCompFragmentSchema = z
  .strictObject({
    fragment: z.record(z.string(), FragmentValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompFragment 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompFragment>;

/**
 * roguelike_topic_table.json 中 ArchiveCompScrap 的运行时校验结构。
 */
export const ArchiveCompScrapSchema = z
  .strictObject({
    scraps: z.record(z.string(), ScrapValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompScrap 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompScrap>;

/**
 * roguelike_topic_table.json 中 ArchiveCompTotem 的运行时校验结构。
 */
export const ArchiveCompTotemSchema = z
  .strictObject({
    totem: z.record(z.string(), TotemValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompTotem 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompTotem>;

/**
 * roguelike_topic_table.json 中 ArchiveCompWeather 的运行时校验结构。
 */
export const ArchiveCompWeatherSchema = z
  .strictObject({
    weathers: z.record(z.string(), WeatherValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompWeather 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompWeather>;

/**
 * roguelike_topic_table.json 中 ArchiveCompWrath 的运行时校验结构。
 */
export const ArchiveCompWrathSchema = z
  .strictObject({
    wraths: z.record(z.string(), WrathValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompWrath 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompWrath>;
