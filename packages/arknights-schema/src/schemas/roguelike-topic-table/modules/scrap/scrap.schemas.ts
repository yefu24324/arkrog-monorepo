/**

 * JSON 逻辑模块 `modules/scrap/scrap` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  GoodsScrapDatum,
  Grid,
  ModuleScrap,
  MoveScrapDatum,
  MoveScrapRangeData,
  PassiveScrapDatum,
  R1,
  RangeType,
  ScrapItemToType,
  ScrapModuleConsts,
  ScrapTypeData,
} from "../../../../types/roguelike-topic-table/modules/scrap/scrap.types.js";

import { IdeaSchema } from "../../shared/buffs.schemas.js";

import { Rogue6_ScrapM01_EnumSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 GoodsScrapDatum 的运行时校验结构。
 */
export const GoodsScrapDatumSchema = z
  .strictObject({
    scrapId: z.string(),
    scrapDesc: z.string(),
    sellPrice: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 GoodsScrapDatum 的运行时校验结构。",
  ) satisfies z.ZodType<GoodsScrapDatum>;

/**
 * roguelike_topic_table.json 中 Grid 的运行时校验结构。
 */
export const GridSchema = z
  .strictObject({
    row: z.number(),
    col: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Grid 的运行时校验结构。",
  ) satisfies z.ZodType<Grid>;

/**
 * roguelike_topic_table.json 中 PassiveScrapDatum 的运行时校验结构。
 */
export const PassiveScrapDatumSchema = z
  .strictObject({
    node: z.string(),
    buffStack: z.number(),
    scrapId: z.string(),
    scrapDesc: z.string(),
    sellPrice: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 PassiveScrapDatum 的运行时校验结构。",
  ) satisfies z.ZodType<PassiveScrapDatum>;

/**
 * roguelike_topic_table.json 中 RangeType 的运行时校验结构。
 */
export const RangeTypeSchema = z
  .enum(["RANGE", "FULL_MAP"])
  .describe(
    "roguelike_topic_table.json 中 RangeType 的运行时校验结构。",
  ) satisfies z.ZodType<RangeType>;

/**
 * roguelike_topic_table.json 中 ScrapItemToType 的运行时校验结构。
 */
export const ScrapItemToTypeSchema = z
  .strictObject({
    rogue_6_scrap_M_01: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_02: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_03: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_04: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_05: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_06: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_07: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_08: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_09: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_10: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_11: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_M_12: Rogue6_ScrapM01_EnumSchema,
    rogue_6_scrap_G_01: z.string(),
    rogue_6_scrap_G_02: z.string(),
    rogue_6_scrap_G_03: z.string(),
    rogue_6_scrap_G_04: z.string(),
    rogue_6_scrap_G_05: z.string(),
    rogue_6_scrap_G_06: z.string(),
    rogue_6_scrap_G_07: z.string(),
    rogue_6_scrap_G_08: z.string(),
    rogue_6_scrap_G_09: z.string(),
    rogue_6_scrap_G_10: z.string(),
    rogue_6_scrap_G_11: z.string(),
    rogue_6_scrap_G_12: z.string(),
    rogue_6_scrap_P_01: z.string(),
    rogue_6_scrap_P_02: z.string(),
    rogue_6_scrap_P_03: z.string(),
    rogue_6_scrap_P_04: z.string(),
    rogue_6_scrap_P_05: z.string(),
    rogue_6_scrap_P_06: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapItemToType 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapItemToType>;

/**
 * roguelike_topic_table.json 中 ScrapModuleConsts 的运行时校验结构。
 */
export const ScrapModuleConstsSchema = z
  .strictObject({
    identifyScrapId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapModuleConsts>;

/**
 * roguelike_topic_table.json 中 ScrapTypeData 的运行时校验结构。
 */
export const ScrapTypeDataSchema = z
  .strictObject({
    GOODS: IdeaSchema,
    MOVE: IdeaSchema,
    PASSIVE: IdeaSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapTypeData 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapTypeData>;

/**
 * roguelike_topic_table.json 中 MoveScrapDatum 的运行时校验结构。
 */
export const MoveScrapDatumSchema = z
  .strictObject({
    count: z.number(),
    range: z.union([z.null(), z.string()]),
    rangeType: RangeTypeSchema,
    node: z.array(z.string()),
    step: z.number(),
    isRandomMove: z.boolean(),
    scrapId: z.string(),
    scrapDesc: z.string(),
    sellPrice: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 MoveScrapDatum 的运行时校验结构。",
  ) satisfies z.ZodType<MoveScrapDatum>;

/**
 * roguelike_topic_table.json 中 R1 的运行时校验结构。
 */
export const R1Schema = z
  .strictObject({
    id: z.string(),
    direction: z.string(),
    grids: z.array(GridSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 R1 的运行时校验结构。",
  ) satisfies z.ZodType<R1>;

/**
 * roguelike_topic_table.json 中 MoveScrapRangeData 的运行时校验结构。
 */
export const MoveScrapRangeDataSchema = z
  .strictObject({
    "r-1": R1Schema,
    "r-2": R1Schema,
    "r-3": R1Schema,
    "r-4": R1Schema,
    "r-5": R1Schema,
    "r-6": R1Schema,
    "r-7": R1Schema,
  })
  .describe(
    "roguelike_topic_table.json 中 MoveScrapRangeData 的运行时校验结构。",
  ) satisfies z.ZodType<MoveScrapRangeData>;

/**
 * roguelike_topic_table.json 中 ModuleScrap 的运行时校验结构。
 */
export const ModuleScrapSchema = z
  .strictObject({
    scrapItemToType: ScrapItemToTypeSchema,
    scrapTypeData: ScrapTypeDataSchema,
    moveScrapData: z.record(z.string(), MoveScrapDatumSchema),
    goodsScrapData: z.record(z.string(), GoodsScrapDatumSchema),
    passiveScrapData: z.record(z.string(), PassiveScrapDatumSchema),
    moveScrapRangeData: MoveScrapRangeDataSchema,
    moduleConsts: ScrapModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleScrap 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleScrap>;
