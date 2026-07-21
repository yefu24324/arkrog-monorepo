/**

 * JSON 逻辑模块 `details/ending-detail-list/ending-detail-list` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  EndingDetailList,
  EndingDetailListShowType,
  EventType,
  SpZoneEvtType,
} from "../../../../types/roguelike-topic-table/details/ending-detail-list/ending-detail-list.types.js";

/**
 * roguelike_topic_table.json 中 EndingDetailListShowType 的运行时校验结构。
 */
export const EndingDetailListShowTypeSchema = z
  .enum(["SUM", "SHOW_CONST", "SHOW_CHOICE", "SHOW_BOSS_END", "SHOW_BATTLE"])
  .describe(
    "roguelike_topic_table.json 中 EndingDetailListShowType 的运行时校验结构。",
  ) satisfies z.ZodType<EndingDetailListShowType>;

/**
 * roguelike_topic_table.json 中 EventType 的运行时校验结构。
 */
export const EventTypeSchema = z
  .enum([
    "INCIDENT",
    "ENTERTAINMENT",
    "BATTLE_BOSS",
    "STASHED_RECRUIT",
    "NONE",
    "SPECIAL_ZONE",
  ])
  .describe(
    "roguelike_topic_table.json 中 EventType 的运行时校验结构。",
  ) satisfies z.ZodType<EventType>;

/**
 * roguelike_topic_table.json 中 SpZoneEvtType 的运行时校验结构。
 */
export const SpZoneEvtTypeSchema = z
  .literal("TRIAL_GATE")
  .describe(
    "roguelike_topic_table.json 中 SpZoneEvtType 的运行时校验结构。",
  ) satisfies z.ZodType<SpZoneEvtType>;

/**
 * roguelike_topic_table.json 中 EndingDetailList 的运行时校验结构。
 */
export const EndingDetailListSchema = z
  .strictObject({
    textId: z.string(),
    text: z.string(),
    eventType: EventTypeSchema,
    spZoneEvtType: z.union([SpZoneEvtTypeSchema, z.null()]),
    showType: EndingDetailListShowTypeSchema,
    choiceSceneId: z.union([z.null(), z.string()]),
    paramList: z.array(z.string()),
    otherPara1: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 EndingDetailList 的运行时校验结构。",
  ) satisfies z.ZodType<EndingDetailList>;
