/**

 * JSON 逻辑模块 `shared/buffs` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Blackboard,
  BuffDisplayInfo,
  BuffElement,
  CopperGildTypeDatum,
  DevelopmentToken,
  ErDatum,
  Idea,
} from "../../../types/roguelike-topic-table/shared/buffs.types.js";

import { DisplayFormSchema } from "./common-enums.schemas.js";

import { IdSchema } from "./core.schemas.js";

import { LeftDisasterDescSchema } from "./rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 Blackboard 的运行时校验结构。
 */
export const BlackboardSchema = z
  .strictObject({
    key: z.string(),
    value: z.number(),
    valueStr: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 Blackboard 的运行时校验结构。",
  ) satisfies z.ZodType<Blackboard>;

/**
 * roguelike_topic_table.json 中 BuffDisplayInfo 的运行时校验结构。
 */
export const BuffDisplayInfoSchema = z
  .strictObject({
    displayType: z.string(),
    displayNum: z.number(),
    displayForm: DisplayFormSchema,
    tokenDesc: z.string(),
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 BuffDisplayInfo 的运行时校验结构。",
  ) satisfies z.ZodType<BuffDisplayInfo>;

/**
 * roguelike_topic_table.json 中 CopperGildTypeDatum 的运行时校验结构。
 */
export const CopperGildTypeDatumSchema = z
  .strictObject({
    gildTypeId: IdSchema,
    gildName: z.string(),
    gildDesc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 CopperGildTypeDatum 的运行时校验结构。",
  ) satisfies z.ZodType<CopperGildTypeDatum>;

/**
 * roguelike_topic_table.json 中 DevelopmentToken 的运行时校验结构。
 */
export const DevelopmentTokenSchema = z
  .strictObject({
    sortId: z.number(),
    displayForm: DisplayFormSchema,
    tokenDesc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 DevelopmentToken 的运行时校验结构。",
  ) satisfies z.ZodType<DevelopmentToken>;

/**
 * roguelike_topic_table.json 中 ErDatum 的运行时校验结构。
 */
export const ErDatumSchema = z
  .strictObject({
    id: z.string(),
    iconId: z.string(),
    toastIconId: z.string().optional(),
    level: z.number(),
    name: z.string(),
    levelName: LeftDisasterDescSchema,
    type: z.string(),
    functionDesc: z.string(),
    desc: z.string(),
    sound: z.null(),
    iconBigId: z.string().optional(),
    isPositive: z.boolean().optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 ErDatum 的运行时校验结构。",
  ) satisfies z.ZodType<ErDatum>;

/**
 * roguelike_topic_table.json 中 Idea 的运行时校验结构。
 */
export const IdeaSchema = z
  .strictObject({
    type: z.string(),
    typeName: z.string(),
    typeDesc: z.string(),
    typeIconId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Idea 的运行时校验结构。",
  ) satisfies z.ZodType<Idea>;

/**
 * roguelike_topic_table.json 中 BuffElement 的运行时校验结构。
 */
export const BuffElementSchema = z
  .strictObject({
    key: z.string(),
    blackboard: z.array(BlackboardSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 BuffElement 的运行时校验结构。",
  ) satisfies z.ZodType<BuffElement>;
