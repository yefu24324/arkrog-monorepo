/**

 * JSON 逻辑模块 `modules/totem-buff/totem-buff` 的显式类型。

 */

import type { NodeTypeElement } from "../../shared/common-enums.types.js";

import type { Pos } from "../../shared/core.types.js";

/**
 * roguelike_topic_table.json 中 BgIconId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type BgIconId = "bg_all" | "bg_blue" | "bg_green" | "bg_red" | "bg_boss";

/**
 * roguelike_topic_table.json 中 BlurNodeType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type BlurNodeType = "BATTLE" | "NO_BATTLE" | "NONE";

/**
 * roguelike_topic_table.json 中 ColorCombineDesc 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ColorCombineDesc {
  /** 原始数据字段 `RED`。 */
  RED: string;
  /** 原始数据字段 `GREEN`。 */
  GREEN: string;
  /** 原始数据字段 `BLUE`。 */
  BLUE: string;
}

/**
 * roguelike_topic_table.json 中 CombineGroupName 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type CombineGroupName = "normal" | "boss";

/**
 * roguelike_topic_table.json 中 LinkedNodeTypeData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface LinkedNodeTypeData {
  /** 原始数据字段 `effectiveNodeTypes`。 */
  effectiveNodeTypes: NodeTypeElement[];
  /** 原始数据字段 `blurNodeTypes`。 */
  blurNodeTypes: BlurNodeType[];
}

/**
 * roguelike_topic_table.json 中 Rogue3__TotemEnchant 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue3__TotemEnchant {
  /** 原始数据字段 `subBuffId`。 */
  subBuffId: string;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `combinedDesc`。 */
  combinedDesc: string;
  /** 原始数据字段 `info`。 */
  info: string;
}

/**
 * roguelike_topic_table.json 中 SubBuffs 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SubBuffs {
  /** 原始数据字段 `rogue_3_totem_enchant_1`。 */
  rogue_3_totem_enchant_1: Rogue3__TotemEnchant;
  /** 原始数据字段 `rogue_3_totem_enchant_2`。 */
  rogue_3_totem_enchant_2: Rogue3__TotemEnchant;
  /** 原始数据字段 `rogue_3_totem_enchant_3`。 */
  rogue_3_totem_enchant_3: Rogue3__TotemEnchant;
  /** 原始数据字段 `rogue_3_totem_enchant_4`。 */
  rogue_3_totem_enchant_4: Rogue3__TotemEnchant;
}

/**
 * roguelike_topic_table.json 中 TotemBuff 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface TotemBuff {
  /** 原始数据字段 `totemBuffDatas`。 */
  totemBuffDatas: { [key: string]: TotemBuffData };
  /** 原始数据字段 `subBuffs`。 */
  subBuffs: SubBuffs;
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: TotemBuffModuleConsts;
}

/**
 * roguelike_topic_table.json 中 TotemBuffData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface TotemBuffData {
  /** 原始数据字段 `totemId`。 */
  totemId: string;
  /** 原始数据字段 `color`。 */
  color: TotemBuffDataColor;
  /** 原始数据字段 `pos`。 */
  pos: Pos;
  /** 原始数据字段 `rhythm`。 */
  rhythm: string;
  /** 原始数据字段 `normalDesc`。 */
  normalDesc: string;
  /** 原始数据字段 `synergyDesc`。 */
  synergyDesc: string;
  /** 原始数据字段 `archiveDesc`。 */
  archiveDesc: string;
  /** 原始数据字段 `combineGroupName`。 */
  combineGroupName: CombineGroupName;
  /** 原始数据字段 `bgIconId`。 */
  bgIconId: BgIconId;
  /** 原始数据字段 `isManual`。 */
  isManual: boolean;
  /** 原始数据字段 `linkedNodeTypeData`。 */
  linkedNodeTypeData: LinkedNodeTypeData;
  /** 原始数据字段 `distanceMin`。 */
  distanceMin: number;
  /** 原始数据字段 `distanceMax`。 */
  distanceMax: number;
  /** 原始数据字段 `vertPassable`。 */
  vertPassable: boolean;
  /** 原始数据字段 `expandLength`。 */
  expandLength: number;
  /** 原始数据字段 `onlyForVert`。 */
  onlyForVert: boolean;
  /** 原始数据字段 `portalLinkedNodeTypeData`。 */
  portalLinkedNodeTypeData: LinkedNodeTypeData;
}

/**
 * roguelike_topic_table.json 中 TotemBuffDataColor 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type TotemBuffDataColor = "ALL" | "BLUE" | "GREEN" | "RED" | "NONE";

/**
 * roguelike_topic_table.json 中 TotemBuffModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface TotemBuffModuleConsts {
  /** 原始数据字段 `totemPredictDescription`。 */
  totemPredictDescription: string;
  /** 原始数据字段 `colorCombineDesc`。 */
  colorCombineDesc: ColorCombineDesc;
  /** 原始数据字段 `bossCombineDesc`。 */
  bossCombineDesc: string;
  /** 原始数据字段 `battleNoPredictDescription`。 */
  battleNoPredictDescription: string;
  /** 原始数据字段 `shopNoGoodsDescription`。 */
  shopNoGoodsDescription: string;
}
