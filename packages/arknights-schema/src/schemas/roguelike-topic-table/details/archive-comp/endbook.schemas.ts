/**

 * JSON 逻辑模块 `details/archive-comp/endbook` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompEndbook,
  ClientEndbookItemData,
  EndbookValue,
} from "../../../../types/roguelike-topic-table/details/archive-comp/endbook.types.js";

import { EnrollIdSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 ClientEndbookItemData 的运行时校验结构。
 */
export const ClientEndbookItemDataSchema = z
  .strictObject({
    endBookId: z.string(),
    sortId: z.number(),
    enrollId: z.union([EnrollIdSchema, z.null()]),
    isLast: z.boolean(),
    endbookName: z.string(),
    unlockDesc: z.string(),
    textId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ClientEndbookItemData 的运行时校验结构。",
  ) satisfies z.ZodType<ClientEndbookItemData>;

/**
 * roguelike_topic_table.json 中 EndbookValue 的运行时校验结构。
 */
export const EndbookValueSchema = z
  .strictObject({
    endId: z.string(),
    endingId: z.string(),
    sortId: z.number(),
    title: z.string(),
    cgId: z.string(),
    backBlurId: z.string(),
    cardId: z.string(),
    hasAvg: z.boolean(),
    avgId: z.string(),
    clientEndbookItemDatas: z.array(ClientEndbookItemDataSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 EndbookValue 的运行时校验结构。",
  ) satisfies z.ZodType<EndbookValue>;

/**
 * roguelike_topic_table.json 中 ArchiveCompEndbook 的运行时校验结构。
 */
export const ArchiveCompEndbookSchema = z
  .strictObject({
    endbook: z.record(z.string(), EndbookValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompEndbook 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompEndbook>;
