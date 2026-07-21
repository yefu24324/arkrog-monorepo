/**

 * JSON 逻辑模块 `modules/wrath/wrath` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ModuleWrath,
  WrathDatum,
  WrathModuleConsts,
} from "../../../../types/roguelike-topic-table/modules/wrath/wrath.types.js";

import { LeftWrathDescSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 WrathDatum 的运行时校验结构。
 */
export const WrathDatumSchema = z
  .strictObject({
    id: z.string(),
    group: z.string(),
    level: z.number(),
    name: z.string(),
    levelName: LeftWrathDescSchema,
    functionDesc: z.string(),
    desc: z.string(),
    isPacified: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 WrathDatum 的运行时校验结构。",
  ) satisfies z.ZodType<WrathDatum>;

/**
 * roguelike_topic_table.json 中 WrathModuleConsts 的运行时校验结构。
 */
export const WrathModuleConstsSchema = z
  .strictObject({
    getWrathTransition: z.string(),
    getWrathToast: z.string(),
    hiddenWrathType: z.string(),
    pacifiedWrathLevel: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 WrathModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<WrathModuleConsts>;

/**
 * roguelike_topic_table.json 中 ModuleWrath 的运行时校验结构。
 */
export const ModuleWrathSchema = z
  .strictObject({
    wrathData: z.record(z.string(), WrathDatumSchema),
    moduleConsts: WrathModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleWrath 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleWrath>;
