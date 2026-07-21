/**

 * JSON 逻辑模块 `details/difficulties/difficulties` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  DetailDifficulty,
  DisplayIconId,
  FailForceDesc,
  FailTitle,
  NameImage,
  RuleDescReplacement,
} from "../../../../types/roguelike-topic-table/details/difficulties/difficulties.types.js";

import {
  HistoricalRecordsModeSchema,
  ModeSchema,
} from "../../shared/common-enums.schemas.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 DisplayIconId 的运行时校验结构。
 */
export const DisplayIconIdSchema = z
  .enum([
    "icon_difficulty_0",
    "icon_difficulty_1",
    "icon_difficulty_2",
    "icon_difficulty_3",
  ])
  .describe(
    "roguelike_topic_table.json 中 DisplayIconId 的运行时校验结构。",
  ) satisfies z.ZodType<DisplayIconId>;

/**
 * roguelike_topic_table.json 中 FailForceDesc 的运行时校验结构。
 */
export const FailForceDescSchema = z
  .enum([
    "通过提升干员等级、技能等级或将干员精英化，可以在战斗中取得更大优势",
    "理解月度小队成员的特点并灵活运用，可以在战斗中取得更大优势",
    "充分利用【调查条目】提供的特殊条件，可以在战斗中取得更大优势",
    "理解追忆映射成员的特点并灵活运用，可以在战斗中取得更大优势",
    "充分利用【探索条目】提供的特殊条件，可以在战斗中取得更大优势",
    "掌握探索者档案所记录的成员特点并灵活运用，可以在战斗中取得更大优势",
    "在本次深入调查中，非险路恶敌作战失败不会结束探索",
    "掌握讲述者列表所记录的成员特点并灵活运用，可以在战斗中取得更大优势",
  ])
  .describe(
    "roguelike_topic_table.json 中 FailForceDesc 的运行时校验结构。",
  ) satisfies z.ZodType<FailForceDesc>;

/**
 * roguelike_topic_table.json 中 FailTitle 的运行时校验结构。
 */
export const FailTitleSchema = z
  .enum(["联系中断", "小队解散", "调查终止", "暂时撤退"])
  .describe(
    "roguelike_topic_table.json 中 FailTitle 的运行时校验结构。",
  ) satisfies z.ZodType<FailTitle>;

/**
 * roguelike_topic_table.json 中 NameImage 的运行时校验结构。
 */
export const NameImageSchema = z
  .enum(["name_2", "name_1"])
  .describe(
    "roguelike_topic_table.json 中 NameImage 的运行时校验结构。",
  ) satisfies z.ZodType<NameImage>;

/**
 * roguelike_topic_table.json 中 RuleDescReplacement 的运行时校验结构。
 */
export const RuleDescReplacementSchema = z
  .strictObject({
    enrollId: EnrollIdSchema,
    ruleDesc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 RuleDescReplacement 的运行时校验结构。",
  ) satisfies z.ZodType<RuleDescReplacement>;

/**
 * roguelike_topic_table.json 中 DetailDifficulty 的运行时校验结构。
 */
export const DetailDifficultySchema = z
  .strictObject({
    modeDifficulty: ModeSchema,
    grade: z.number(),
    name: z.string(),
    nameImage: z.union([NameImageSchema, z.null()]),
    subName: z.union([z.null(), z.string()]),
    enrollId: z.union([z.null(), z.string()]),
    haveInitialRelicIcon: z.boolean(),
    scoreFactor: z.number(),
    canUnlockItem: z.boolean(),
    doMonthTask: z.boolean(),
    ruleDesc: z.string(),
    ruleDescReplacements: z.union([
      z.array(RuleDescReplacementSchema),
      z.null(),
    ]),
    failTitle: FailTitleSchema,
    failImageId: z.string(),
    failForceDesc: FailForceDescSchema,
    sortId: z.number(),
    equivalentGrade: z.number(),
    color: z.union([z.null(), z.string()]),
    bpValue: z.number(),
    bossValue: z.number(),
    addDesc: z.union([z.null(), z.string()]),
    warningType: HistoricalRecordsModeSchema,
    unlockText: z.union([z.null(), z.string()]),
    displayIconId: z.union([DisplayIconIdSchema, z.null()]),
    hideEndingStory: z.boolean(),
    haveLegacy: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 DetailDifficulty 的运行时校验结构。",
  ) satisfies z.ZodType<DetailDifficulty>;
