/**

 * JSON 逻辑模块 `details/archive-comp/capsule` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompCapsule,
  CapsuleValue,
} from "../../../../types/roguelike-topic-table/details/archive-comp/capsule.types.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 CapsuleValue 的运行时校验结构。
 */
export const CapsuleValueSchema = z
  .strictObject({
    capsuleId: z.string(),
    capsuleSortId: z.number(),
    englishName: z.string(),
    enrollId: z.union([EnrollIdSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 CapsuleValue 的运行时校验结构。",
  ) satisfies z.ZodType<CapsuleValue>;

/**
 * roguelike_topic_table.json 中 ArchiveCompCapsule 的运行时校验结构。
 */
export const ArchiveCompCapsuleSchema = z
  .strictObject({
    capsule: z.record(z.string(), CapsuleValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompCapsule 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompCapsule>;
