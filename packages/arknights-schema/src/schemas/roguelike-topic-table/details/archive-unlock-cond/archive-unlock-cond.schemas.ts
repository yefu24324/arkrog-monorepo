/**

 * JSON 逻辑模块 `details/archive-unlock-cond/archive-unlock-cond` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveUnlockCond,
  ArchiveUnlockCondEnroll,
  EnrollArchiveType,
  UnlockCondDesc,
  UnlockCondDescDescription,
} from "../../../../types/roguelike-topic-table/details/archive-unlock-cond/archive-unlock-cond.types.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 EnrollArchiveType 的运行时校验结构。
 */
export const EnrollArchiveTypeSchema = z
  .enum(["AVG", "ENDBOOK", "MUSIC", "PIC"])
  .describe(
    "roguelike_topic_table.json 中 EnrollArchiveType 的运行时校验结构。",
  ) satisfies z.ZodType<EnrollArchiveType>;

/**
 * roguelike_topic_table.json 中 UnlockCondDescDescription 的运行时校验结构。
 */
export const UnlockCondDescDescriptionSchema = z
  .enum(["需要触发某个故事", "继续探索以解锁"])
  .describe(
    "roguelike_topic_table.json 中 UnlockCondDescDescription 的运行时校验结构。",
  ) satisfies z.ZodType<UnlockCondDescDescription>;

/**
 * roguelike_topic_table.json 中 ArchiveUnlockCondEnroll 的运行时校验结构。
 */
export const ArchiveUnlockCondEnrollSchema = z
  .strictObject({
    archiveType: EnrollArchiveTypeSchema,
    enrollId: z.union([EnrollIdSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveUnlockCondEnroll 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveUnlockCondEnroll>;

/**
 * roguelike_topic_table.json 中 UnlockCondDesc 的运行时校验结构。
 */
export const UnlockCondDescSchema = z
  .strictObject({
    archiveType: EnrollArchiveTypeSchema,
    description: z.union([UnlockCondDescDescriptionSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 UnlockCondDesc 的运行时校验结构。",
  ) satisfies z.ZodType<UnlockCondDesc>;

/**
 * roguelike_topic_table.json 中 ArchiveUnlockCond 的运行时校验结构。
 */
export const ArchiveUnlockCondSchema = z
  .strictObject({
    unlockCondDesc: z.record(z.string(), UnlockCondDescSchema),
    enroll: z.record(z.string(), ArchiveUnlockCondEnrollSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveUnlockCond 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveUnlockCond>;
