/**

 * JSON 逻辑模块 `modules/copper/copper` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CopperDatum,
  CopperDatumBuffType,
  CopperDivineDatum,
  CopperModuleConsts,
  DivineType,
  LayerCntDesc,
  ModuleCopper,
} from "../../../../types/roguelike-topic-table/modules/copper/copper.types.js";

import { CopperGildTypeDatumSchema } from "../../shared/buffs.schemas.js";

import { ResultTypeSchema } from "../../shared/common-enums.schemas.js";

import { IdSchema } from "../../shared/core.schemas.js";

import { LuckyLevelSchema } from "../../shared/rogue-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 CopperDatumBuffType 的运行时校验结构。
 */
export const CopperDatumBuffTypeSchema = z
  .enum(["NONE", "REFRESH", "MOVE"])
  .describe(
    "roguelike_topic_table.json 中 CopperDatumBuffType 的运行时校验结构。",
  ) satisfies z.ZodType<CopperDatumBuffType>;

/**
 * roguelike_topic_table.json 中 CopperModuleConsts 的运行时校验结构。
 */
export const CopperModuleConstsSchema = z
  .strictObject({
    copperDrawMaxNum: z.number(),
    copperDrawMinNum: z.number(),
    copperAllLuckyLevelGildId: IdSchema,
    copperDrawFreezeCostItemId: z.string(),
    copperDrawFreezeCostCount: z.array(z.number()),
  })
  .describe(
    "roguelike_topic_table.json 中 CopperModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<CopperModuleConsts>;

/**
 * roguelike_topic_table.json 中 DivineType 的运行时校验结构。
 */
export const DivineTypeSchema = z
  .enum(["EVENT", "DIVINE"])
  .describe(
    "roguelike_topic_table.json 中 DivineType 的运行时校验结构。",
  ) satisfies z.ZodType<DivineType>;

/**
 * roguelike_topic_table.json 中 LayerCntDesc 的运行时校验结构。
 */
export const LayerCntDescSchema = z
  .enum([
    "<color=#2fac78>（已投出{0}次）</color>",
    "<color=#2fac78>（钱盒内持有{0}枚衡钱）</color>",
    "<color=#2fac78>（已经过{0}个节点）</color>",
    "<color=#2fac78>（失去时可获得{0}个收藏品）</color>",
    "<color=#2fac78>（已交换{0}次）</color>",
  ])
  .describe(
    "roguelike_topic_table.json 中 LayerCntDesc 的运行时校验结构。",
  ) satisfies z.ZodType<LayerCntDesc>;

/**
 * roguelike_topic_table.json 中 CopperDatum 的运行时校验结构。
 */
export const CopperDatumSchema = z
  .strictObject({
    id: z.string(),
    groupId: z.string(),
    gildTypeId: z.union([IdSchema, z.null()]),
    luckyLevel: LuckyLevelSchema,
    buffType: CopperDatumBuffTypeSchema,
    layerCntDesc: LayerCntDescSchema,
    poemList: z.array(z.string()),
    alwaysShowCountDown: z.boolean(),
    buffItemIdList: z.array(z.string()),
    isAllLuckyLevel: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 CopperDatum 的运行时校验结构。",
  ) satisfies z.ZodType<CopperDatum>;

/**
 * roguelike_topic_table.json 中 CopperDivineDatum 的运行时校验结构。
 */
export const CopperDivineDatumSchema = z
  .strictObject({
    eventId: z.string(),
    groupId: z.string(),
    showDesc: z.string(),
    divineType: DivineTypeSchema,
    resultType: ResultTypeSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 CopperDivineDatum 的运行时校验结构。",
  ) satisfies z.ZodType<CopperDivineDatum>;

/**
 * roguelike_topic_table.json 中 ModuleCopper 的运行时校验结构。
 */
export const ModuleCopperSchema = z
  .strictObject({
    copperData: z.record(z.string(), CopperDatumSchema),
    copperDivineData: z.record(z.string(), CopperDivineDatumSchema),
    copperGildTypeData: z.record(z.string(), CopperGildTypeDatumSchema),
    changeCopperMap: z.record(z.string(), z.string()),
    moduleConsts: CopperModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleCopper 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleCopper>;
