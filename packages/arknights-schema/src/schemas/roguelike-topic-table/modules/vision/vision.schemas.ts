/**

 * JSON 逻辑模块 `modules/vision/vision` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Vision,
  VisionChoice,
  VisionChoiceType,
  VisionData,
  VisionModuleConsts,
} from "../../../../types/roguelike-topic-table/modules/vision/vision.types.js";

/**
 * roguelike_topic_table.json 中 VisionChoiceType 的运行时校验结构。
 */
export const VisionChoiceTypeSchema = z
  .literal("LOWER")
  .describe(
    "roguelike_topic_table.json 中 VisionChoiceType 的运行时校验结构。",
  ) satisfies z.ZodType<VisionChoiceType>;

/**
 * roguelike_topic_table.json 中 VisionData 的运行时校验结构。
 */
export const VisionDataSchema = z
  .strictObject({
    sightNum: z.number(),
    level: z.number(),
    canForesee: z.boolean(),
    dividedDis: z.number(),
    status: z.string(),
    clr: z.string(),
    desc1: z.string(),
    desc2: z.string(),
    icon: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 VisionData 的运行时校验结构。",
  ) satisfies z.ZodType<VisionData>;

/**
 * roguelike_topic_table.json 中 VisionModuleConsts 的运行时校验结构。
 */
export const VisionModuleConstsSchema = z
  .strictObject({
    maxVision: z.number(),
    totemBottomDescription: z.string(),
    chestBottomDescription: z.string(),
    goodsBottomDescription: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 VisionModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<VisionModuleConsts>;

/**
 * roguelike_topic_table.json 中 VisionChoice 的运行时校验结构。
 */
export const VisionChoiceSchema = z
  .strictObject({
    value: z.number(),
    type: VisionChoiceTypeSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 VisionChoice 的运行时校验结构。",
  ) satisfies z.ZodType<VisionChoice>;

/**
 * roguelike_topic_table.json 中 Vision 的运行时校验结构。
 */
export const VisionSchema = z
  .strictObject({
    visionDatas: z.record(z.string(), VisionDataSchema),
    visionChoices: z.record(z.string(), VisionChoiceSchema),
    moduleConsts: VisionModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Vision 的运行时校验结构。",
  ) satisfies z.ZodType<Vision>;
