/**

 * JSON 逻辑模块 `details/archive-comp/copper` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompCopper,
  Blank,
  CopperArchiveType,
  CopperType,
  CopperTypes,
  CopperValue,
  High,
  LuckyLevels,
} from "../../../../types/roguelike-topic-table/details/archive-comp/copper.types.js";

import { CopperGildTypeDatumSchema } from "../../shared/buffs.schemas.js";

import {
  EnrollIdSchema,
  LuckyLevelSchema,
} from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 CopperArchiveType 的运行时校验结构。
 */
export const CopperArchiveTypeSchema = z
  .enum(["LUCK", "COPPER", "GILD"])
  .describe(
    "roguelike_topic_table.json 中 CopperArchiveType 的运行时校验结构。",
  ) satisfies z.ZodType<CopperArchiveType>;

/**
 * roguelike_topic_table.json 中 CopperType 的运行时校验结构。
 */
export const CopperTypeSchema = z
  .enum(["NONE", "BLANK", "RESOURCE", "FIGHT", "TREASURE", "UNSOUND"])
  .describe(
    "roguelike_topic_table.json 中 CopperType 的运行时校验结构。",
  ) satisfies z.ZodType<CopperType>;

/**
 * roguelike_topic_table.json 中 High 的运行时校验结构。
 */
export const HighSchema = z
  .strictObject({
    luckyLevel: LuckyLevelSchema,
    luckyName: z.string(),
    luckyDesc: z.string(),
    luckyUsage: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 High 的运行时校验结构。",
  ) satisfies z.ZodType<High>;

/**
 * roguelike_topic_table.json 中 Blank 的运行时校验结构。
 */
export const BlankSchema = z
  .strictObject({
    copperType: CopperTypeSchema,
    typeName: z.string(),
    typeIconId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Blank 的运行时校验结构。",
  ) satisfies z.ZodType<Blank>;

/**
 * roguelike_topic_table.json 中 CopperValue 的运行时校验结构。
 */
export const CopperValueSchema = z
  .strictObject({
    id: z.string(),
    displayCopperId: z.union([z.null(), z.string()]),
    archiveType: CopperArchiveTypeSchema,
    copperType: CopperTypeSchema,
    sortId: z.number(),
    enrollId: z.union([EnrollIdSchema, z.null()]),
    coppersInGroup: z.array(z.string()),
  })
  .describe(
    "roguelike_topic_table.json 中 CopperValue 的运行时校验结构。",
  ) satisfies z.ZodType<CopperValue>;

/**
 * roguelike_topic_table.json 中 LuckyLevels 的运行时校验结构。
 */
export const LuckyLevelsSchema = z
  .strictObject({
    MID: HighSchema,
    HIGH: HighSchema,
    LOW: HighSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 LuckyLevels 的运行时校验结构。",
  ) satisfies z.ZodType<LuckyLevels>;

/**
 * roguelike_topic_table.json 中 CopperTypes 的运行时校验结构。
 */
export const CopperTypesSchema = z
  .strictObject({
    BLANK: BlankSchema,
    FIGHT: BlankSchema,
    RESOURCE: BlankSchema,
    UNSOUND: BlankSchema,
    TREASURE: BlankSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 CopperTypes 的运行时校验结构。",
  ) satisfies z.ZodType<CopperTypes>;

/**
 * roguelike_topic_table.json 中 ArchiveCompCopper 的运行时校验结构。
 */
export const ArchiveCompCopperSchema = z
  .strictObject({
    coppers: z.record(z.string(), CopperValueSchema),
    copperTypes: CopperTypesSchema,
    gilds: z.record(z.string(), CopperGildTypeDatumSchema),
    luckyLevels: LuckyLevelsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompCopper 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompCopper>;
