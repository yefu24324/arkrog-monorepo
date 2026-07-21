/**

 * JSON 逻辑模块 `customize-data/difficulties/difficulties` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CustomizeDatumDifficulty,
  GildProbDisplay,
  LeftOverweightDesc,
  LeftWeatherDesc,
  SkyStepDescription,
  WeightStatusLimitDesc,
} from "../../../../types/roguelike-topic-table/customize-data/difficulties/difficulties.types.js";

import { ModeSchema } from "../../shared/common-enums.schemas.js";

import {
  LeftDisasterDescSchema,
  LeftWrathDescSchema,
} from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 GildProbDisplay 的运行时校验结构。
 */
export const GildProbDisplaySchema = z
  .enum(["低", "标准", "中", "高"])
  .describe(
    "roguelike_topic_table.json 中 GildProbDisplay 的运行时校验结构。",
  ) satisfies z.ZodType<GildProbDisplay>;

/**
 * roguelike_topic_table.json 中 LeftOverweightDesc 的运行时校验结构。
 */
export const LeftOverweightDescSchema = z
  .enum(["轻松", "标准", "沉重", "崩溃"])
  .describe(
    "roguelike_topic_table.json 中 LeftOverweightDesc 的运行时校验结构。",
  ) satisfies z.ZodType<LeftOverweightDesc>;

/**
 * roguelike_topic_table.json 中 LeftWeatherDesc 的运行时校验结构。
 */
export const LeftWeatherDescSchema = z
  .enum(["无", "早期", "中期", "晚期"])
  .describe(
    "roguelike_topic_table.json 中 LeftWeatherDesc 的运行时校验结构。",
  ) satisfies z.ZodType<LeftWeatherDesc>;

/**
 * roguelike_topic_table.json 中 SkyStepDescription 的运行时校验结构。
 */
export const SkyStepDescriptionSchema = z
  .literal("每进入一次节点，将有1点烛火熄灭，烛火全部熄灭时，意识将被逐回界园")
  .describe(
    "roguelike_topic_table.json 中 SkyStepDescription 的运行时校验结构。",
  ) satisfies z.ZodType<SkyStepDescription>;

/**
 * roguelike_topic_table.json 中 WeightStatusLimitDesc 的运行时校验结构。
 */
export const WeightStatusLimitDescSchema = z
  .enum([
    "每前进一步，失去1点目标生命（不会使目标生命低于1）",
    "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+2",
    "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+3",
    "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+3，攻击力-20%，技力自然回复速度-20%",
  ])
  .describe(
    "roguelike_topic_table.json 中 WeightStatusLimitDesc 的运行时校验结构。",
  ) satisfies z.ZodType<WeightStatusLimitDesc>;

/**
 * roguelike_topic_table.json 中 CustomizeDatumDifficulty 的运行时校验结构。
 */
export const CustomizeDatumDifficultySchema = z
  .strictObject({
    modeDifficulty: ModeSchema,
    grade: z.number(),
    buffDesc: z.array(z.string()),
    totemProb: z.number().optional(),
    relicDevLevel: z.union([z.null(), z.string()]).optional(),
    buffs: z.union([z.array(z.string()), z.null()]).optional(),
    leftDisasterDesc: LeftDisasterDescSchema.optional(),
    leftOverweightDesc: LeftOverweightDescSchema.optional(),
    weightStatusLimitDesc: WeightStatusLimitDescSchema.optional(),
    leftWrathDesc: LeftWrathDescSchema.optional(),
    gildProbDisplay: GildProbDisplaySchema.optional(),
    skyStepDescription: SkyStepDescriptionSchema.optional(),
    leftWeatherDesc: LeftWeatherDescSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 CustomizeDatumDifficulty 的运行时校验结构。",
  ) satisfies z.ZodType<CustomizeDatumDifficulty>;
