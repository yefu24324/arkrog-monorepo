/**

 * JSON 逻辑模块 `shared/core` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BgmSignal,
  Id,
  None,
  Pos,
  VariationClass,
} from "../../../types/roguelike-topic-table/shared/core.types.js";

/**
 * roguelike_topic_table.json 中 BgmSignal 的运行时校验结构。
 */
export const BgmSignalSchema = z
  .enum([
    "ON_ROGUELIKE_MAP",
    "ON_ROGUELIKE_MAPHIGH",
    "ON_ROGUELIKE_MAPLOW",
    "ON_ROGUELIKE_DEEPMAPHIGH",
    "ON_ROGUELIKE_SECRET_MAP",
    "ON_ROGUELIKE_MAPBOSS",
    "ON_ROGUELIKE_MAPSECRET",
    "ON_ROGUELIKE_MAPBOSS4",
    "ON_ROGUELIKE_MAPAMIYA",
    "ON_ROGUELIKE_MAPSKY",
  ])
  .describe(
    "roguelike_topic_table.json 中 BgmSignal 的运行时校验结构。",
  ) satisfies z.ZodType<BgmSignal>;

/**
 * roguelike_topic_table.json 中 Id 的运行时校验结构。
 */
export const IdSchema = z
  .enum([
    "rogue_5_gild_1",
    "rogue_5_gild_2",
    "rogue_5_gild_3",
    "rogue_5_gild_4",
    "rogue_5_gild_5",
    "rogue_5_gild_6",
    "rogue_5_gild_7",
    "rogue_5_gild_8",
    "rogue_5_gild_9",
    "rogue_5_gild_10",
  ])
  .describe(
    "roguelike_topic_table.json 中 Id 的运行时校验结构。",
  ) satisfies z.ZodType<Id>;

/**
 * roguelike_topic_table.json 中 None 的运行时校验结构。
 */
export const NoneSchema = z
  .strictObject({
    content: z.array(z.string()),
  })
  .describe(
    "roguelike_topic_table.json 中 None 的运行时校验结构。",
  ) satisfies z.ZodType<None>;

/**
 * roguelike_topic_table.json 中 Pos 的运行时校验结构。
 */
export const PosSchema = z
  .enum(["LOCATION", "EFFECT", "AFFIX"])
  .describe(
    "roguelike_topic_table.json 中 Pos 的运行时校验结构。",
  ) satisfies z.ZodType<Pos>;

/**
 * roguelike_topic_table.json 中 VariationClass 的运行时校验结构。
 */
export const VariationClassSchema = z
  .record(z.string(), z.never())
  .describe(
    "roguelike_topic_table.json 中 VariationClass 的运行时校验结构。",
  ) satisfies z.ZodType<VariationClass>;
