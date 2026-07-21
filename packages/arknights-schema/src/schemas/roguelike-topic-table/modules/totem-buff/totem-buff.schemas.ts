/**

 * JSON 逻辑模块 `modules/totem-buff/totem-buff` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BgIconId,
  BlurNodeType,
  ColorCombineDesc,
  CombineGroupName,
  LinkedNodeTypeData,
  Rogue3__TotemEnchant,
  SubBuffs,
  TotemBuff,
  TotemBuffData,
  TotemBuffDataColor,
  TotemBuffModuleConsts,
} from "../../../../types/roguelike-topic-table/modules/totem-buff/totem-buff.types.js";

import { NodeTypeElementSchema } from "../../shared/common-enums.schemas.js";

import { PosSchema } from "../../shared/core.schemas.js";

/**
 * roguelike_topic_table.json 中 BgIconId 的运行时校验结构。
 */
export const BgIconIdSchema = z
  .enum(["bg_all", "bg_blue", "bg_green", "bg_red", "bg_boss"])
  .describe(
    "roguelike_topic_table.json 中 BgIconId 的运行时校验结构。",
  ) satisfies z.ZodType<BgIconId>;

/**
 * roguelike_topic_table.json 中 BlurNodeType 的运行时校验结构。
 */
export const BlurNodeTypeSchema = z
  .enum(["BATTLE", "NO_BATTLE", "NONE"])
  .describe(
    "roguelike_topic_table.json 中 BlurNodeType 的运行时校验结构。",
  ) satisfies z.ZodType<BlurNodeType>;

/**
 * roguelike_topic_table.json 中 ColorCombineDesc 的运行时校验结构。
 */
export const ColorCombineDescSchema = z
  .strictObject({
    RED: z.string(),
    GREEN: z.string(),
    BLUE: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ColorCombineDesc 的运行时校验结构。",
  ) satisfies z.ZodType<ColorCombineDesc>;

/**
 * roguelike_topic_table.json 中 CombineGroupName 的运行时校验结构。
 */
export const CombineGroupNameSchema = z
  .enum(["normal", "boss"])
  .describe(
    "roguelike_topic_table.json 中 CombineGroupName 的运行时校验结构。",
  ) satisfies z.ZodType<CombineGroupName>;

/**
 * roguelike_topic_table.json 中 Rogue3__TotemEnchant 的运行时校验结构。
 */
export const Rogue3__TotemEnchantSchema = z
  .strictObject({
    subBuffId: z.string(),
    name: z.string(),
    desc: z.string(),
    combinedDesc: z.string(),
    info: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue3__TotemEnchant 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue3__TotemEnchant>;

/**
 * roguelike_topic_table.json 中 TotemBuffDataColor 的运行时校验结构。
 */
export const TotemBuffDataColorSchema = z
  .enum(["ALL", "BLUE", "GREEN", "RED", "NONE"])
  .describe(
    "roguelike_topic_table.json 中 TotemBuffDataColor 的运行时校验结构。",
  ) satisfies z.ZodType<TotemBuffDataColor>;

/**
 * roguelike_topic_table.json 中 LinkedNodeTypeData 的运行时校验结构。
 */
export const LinkedNodeTypeDataSchema = z
  .strictObject({
    effectiveNodeTypes: z.array(NodeTypeElementSchema),
    blurNodeTypes: z.array(BlurNodeTypeSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 LinkedNodeTypeData 的运行时校验结构。",
  ) satisfies z.ZodType<LinkedNodeTypeData>;

/**
 * roguelike_topic_table.json 中 SubBuffs 的运行时校验结构。
 */
export const SubBuffsSchema = z
  .strictObject({
    rogue_3_totem_enchant_1: Rogue3__TotemEnchantSchema,
    rogue_3_totem_enchant_2: Rogue3__TotemEnchantSchema,
    rogue_3_totem_enchant_3: Rogue3__TotemEnchantSchema,
    rogue_3_totem_enchant_4: Rogue3__TotemEnchantSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 SubBuffs 的运行时校验结构。",
  ) satisfies z.ZodType<SubBuffs>;

/**
 * roguelike_topic_table.json 中 TotemBuffModuleConsts 的运行时校验结构。
 */
export const TotemBuffModuleConstsSchema = z
  .strictObject({
    totemPredictDescription: z.string(),
    colorCombineDesc: ColorCombineDescSchema,
    bossCombineDesc: z.string(),
    battleNoPredictDescription: z.string(),
    shopNoGoodsDescription: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 TotemBuffModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<TotemBuffModuleConsts>;

/**
 * roguelike_topic_table.json 中 TotemBuffData 的运行时校验结构。
 */
export const TotemBuffDataSchema = z
  .strictObject({
    totemId: z.string(),
    color: TotemBuffDataColorSchema,
    pos: PosSchema,
    rhythm: z.string(),
    normalDesc: z.string(),
    synergyDesc: z.string(),
    archiveDesc: z.string(),
    combineGroupName: CombineGroupNameSchema,
    bgIconId: BgIconIdSchema,
    isManual: z.boolean(),
    linkedNodeTypeData: LinkedNodeTypeDataSchema,
    distanceMin: z.number(),
    distanceMax: z.number(),
    vertPassable: z.boolean(),
    expandLength: z.number(),
    onlyForVert: z.boolean(),
    portalLinkedNodeTypeData: LinkedNodeTypeDataSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 TotemBuffData 的运行时校验结构。",
  ) satisfies z.ZodType<TotemBuffData>;

/**
 * roguelike_topic_table.json 中 TotemBuff 的运行时校验结构。
 */
export const TotemBuffSchema = z
  .strictObject({
    totemBuffDatas: z.record(z.string(), TotemBuffDataSchema),
    subBuffs: SubBuffsSchema,
    moduleConsts: TotemBuffModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 TotemBuff 的运行时校验结构。",
  ) satisfies z.ZodType<TotemBuff>;
