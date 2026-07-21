/**

 * JSON 逻辑模块 `modules/sky/sky` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  EffId,
  NodeDatum,
  Sky,
  SkyModuleConsts,
  SkySubTypeDatum,
} from "../../../../types/roguelike-topic-table/modules/sky/sky.types.js";

/**
 * roguelike_topic_table.json 中 EffId 的运行时校验结构。
 */
export const EffIdSchema = z
  .enum(["sp_green", "sp_cyan"])
  .describe(
    "roguelike_topic_table.json 中 EffId 的运行时校验结构。",
  ) satisfies z.ZodType<EffId>;

/**
 * roguelike_topic_table.json 中 SkyModuleConsts 的运行时校验结构。
 */
export const SkyModuleConstsSchema = z
  .strictObject({
    skyApItemId: z.string(),
    skyMaxColumns: z.number(),
    skySacrificeChoiceDynamicKey: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 SkyModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<SkyModuleConsts>;

/**
 * roguelike_topic_table.json 中 SkySubTypeDatum 的运行时校验结构。
 */
export const SkySubTypeDatumSchema = z
  .strictObject({
    evtType: z.string(),
    subTypeId: z.number(),
    desc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 SkySubTypeDatum 的运行时校验结构。",
  ) satisfies z.ZodType<SkySubTypeDatum>;

/**
 * roguelike_topic_table.json 中 NodeDatum 的运行时校验结构。
 */
export const NodeDatumSchema = z
  .strictObject({
    evtType: z.string(),
    name: z.string(),
    iconId: z.string(),
    effId: EffIdSchema,
    desc: z.string(),
    nameBkgClr: z.string(),
    selectClr: z.string(),
    isRepeatedly: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 NodeDatum 的运行时校验结构。",
  ) satisfies z.ZodType<NodeDatum>;

/**
 * roguelike_topic_table.json 中 Sky 的运行时校验结构。
 */
export const SkySchema = z
  .strictObject({
    nodeData: z.record(z.string(), NodeDatumSchema),
    subTypeData: z.array(SkySubTypeDatumSchema),
    moduleConsts: SkyModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Sky 的运行时校验结构。",
  ) satisfies z.ZodType<Sky>;
