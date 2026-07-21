/**

 * JSON 逻辑模块 `modules/fragment/fragment` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  AlchemyDatum,
  AlchemyFormulaDatum,
  FragmentBuffDatum,
  FragmentDatum,
  FragmentLevelDatum,
  FragmentModuleConsts,
  FragmentTypeData,
  MaskType,
  ModuleFragment,
  OverrideConditionBandId,
  TypeElement,
} from "../../../../types/roguelike-topic-table/modules/fragment/fragment.types.js";

import { IdeaSchema } from "../../shared/buffs.schemas.js";

import {
  RaritySchema,
  RewardItemTypeEnumSchema,
} from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 AlchemyFormulaDatum 的运行时校验结构。
 */
export const AlchemyFormulaDatumSchema = z
  .strictObject({
    fragmentIds: z.array(z.string()),
    rewardId: z.string(),
    rewardCount: z.number(),
    rewardItemType: RewardItemTypeEnumSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 AlchemyFormulaDatum 的运行时校验结构。",
  ) satisfies z.ZodType<AlchemyFormulaDatum>;

/**
 * roguelike_topic_table.json 中 FragmentLevelDatum 的运行时校验结构。
 */
export const FragmentLevelDatumSchema = z
  .strictObject({
    weightUp: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 FragmentLevelDatum 的运行时校验结构。",
  ) satisfies z.ZodType<FragmentLevelDatum>;

/**
 * roguelike_topic_table.json 中 FragmentModuleConsts 的运行时校验结构。
 */
export const FragmentModuleConstsSchema = z
  .strictObject({
    weightStatusSafeDesc: z.string(),
    weightStatusLimitDesc: z.string(),
    weightStatusOverweightDesc: z.string(),
    charWeightSlot: z.number(),
    limitWeightThresholdValue: z.number(),
    overWeightThresholdValue: z.number(),
    maxAlchemyField: z.number(),
    maxAlchemyCount: z.number(),
    fragmentBagWeightLimitTips: z.string(),
    fragmentBagWeightOverWeightTips: z.string(),
    weightUpgradeToastFormat: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 FragmentModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<FragmentModuleConsts>;

/**
 * roguelike_topic_table.json 中 FragmentTypeData 的运行时校验结构。
 */
export const FragmentTypeDataSchema = z
  .strictObject({
    WISH: IdeaSchema,
    INSPIRATION: IdeaSchema,
    IDEA: IdeaSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 FragmentTypeData 的运行时校验结构。",
  ) satisfies z.ZodType<FragmentTypeData>;

/**
 * roguelike_topic_table.json 中 MaskType 的运行时校验结构。
 */
export const MaskTypeSchema = z
  .enum(["ALL", "BATTLES"])
  .describe(
    "roguelike_topic_table.json 中 MaskType 的运行时校验结构。",
  ) satisfies z.ZodType<MaskType>;

/**
 * roguelike_topic_table.json 中 OverrideConditionBandId 的运行时校验结构。
 */
export const OverrideConditionBandIdSchema = z
  .enum([
    "rogue_4_band_28",
    "rogue_4_band_29",
    "rogue_4_band_21",
    "rogue_4_band_22_22",
  ])
  .describe(
    "roguelike_topic_table.json 中 OverrideConditionBandId 的运行时校验结构。",
  ) satisfies z.ZodType<OverrideConditionBandId>;

/**
 * roguelike_topic_table.json 中 TypeElement 的运行时校验结构。
 */
export const TypeElementSchema = z
  .enum(["WISH", "INSPIRATION", "IDEA"])
  .describe(
    "roguelike_topic_table.json 中 TypeElement 的运行时校验结构。",
  ) satisfies z.ZodType<TypeElement>;

/**
 * roguelike_topic_table.json 中 AlchemyDatum 的运行时校验结构。
 */
export const AlchemyDatumSchema = z
  .strictObject({
    fragmentTypeList: z.array(TypeElementSchema),
    fragmentSquareSum: z.number(),
    poolRarity: RaritySchema,
    relicProp: z.number(),
    shieldProp: z.number(),
    populationProp: z.number(),
    overrideConditionBandIds: z.union([
      z.array(OverrideConditionBandIdSchema),
      z.null(),
    ]),
    overrideRecipeId: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 AlchemyDatum 的运行时校验结构。",
  ) satisfies z.ZodType<AlchemyDatum>;

/**
 * roguelike_topic_table.json 中 FragmentBuffDatum 的运行时校验结构。
 */
export const FragmentBuffDatumSchema = z
  .strictObject({
    itemId: z.string(),
    maskType: MaskTypeSchema,
    desc: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 FragmentBuffDatum 的运行时校验结构。",
  ) satisfies z.ZodType<FragmentBuffDatum>;

/**
 * roguelike_topic_table.json 中 FragmentDatum 的运行时校验结构。
 */
export const FragmentDatumSchema = z
  .strictObject({
    id: z.string(),
    type: TypeElementSchema,
    value: z.number(),
    weight: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 FragmentDatum 的运行时校验结构。",
  ) satisfies z.ZodType<FragmentDatum>;

/**
 * roguelike_topic_table.json 中 ModuleFragment 的运行时校验结构。
 */
export const ModuleFragmentSchema = z
  .strictObject({
    fragmentData: z.record(z.string(), FragmentDatumSchema),
    fragmentTypeData: FragmentTypeDataSchema,
    moduleConsts: FragmentModuleConstsSchema,
    fragmentBuffData: z.record(z.string(), FragmentBuffDatumSchema),
    alchemyData: z.record(z.string(), AlchemyDatumSchema),
    alchemyFormulaData: z.record(z.string(), AlchemyFormulaDatumSchema),
    fragmentLevelData: z.record(z.string(), FragmentLevelDatumSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleFragment 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleFragment>;
