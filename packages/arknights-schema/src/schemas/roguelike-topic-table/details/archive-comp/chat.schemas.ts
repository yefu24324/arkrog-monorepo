/**

 * JSON 逻辑模块 `details/archive-comp/chat` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ArchiveCompChat,
  ChatItemList,
  ChatValue,
} from "../../../../types/roguelike-topic-table/details/archive-comp/chat.types.js";

import { ZoneIdSchema } from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 ChatItemList 的运行时校验结构。
 */
export const ChatItemListSchema = z
  .strictObject({
    floor: z.number(),
    chatZoneId: ZoneIdSchema,
    chatDesc: z.union([z.null(), z.string()]),
    chatStoryId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ChatItemList 的运行时校验结构。",
  ) satisfies z.ZodType<ChatItemList>;

/**
 * roguelike_topic_table.json 中 ChatValue 的运行时校验结构。
 */
export const ChatValueSchema = z
  .strictObject({
    sortId: z.number(),
    chatItemList: z.array(ChatItemListSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ChatValue 的运行时校验结构。",
  ) satisfies z.ZodType<ChatValue>;

/**
 * roguelike_topic_table.json 中 ArchiveCompChat 的运行时校验结构。
 */
export const ArchiveCompChatSchema = z
  .strictObject({
    chat: z.record(z.string(), ChatValueSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveCompChat 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveCompChat>;
