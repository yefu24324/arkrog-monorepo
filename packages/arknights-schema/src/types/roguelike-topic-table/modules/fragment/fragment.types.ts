/**

 * JSON 逻辑模块 `modules/fragment/fragment` 的显式类型。

 */

import type { Idea } from "../../shared/buffs.types.js";

import type {
  Rarity,
  RewardItemTypeEnum,
} from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 AlchemyDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface AlchemyDatum {
  /** 原始数据字段 `fragmentTypeList`。 */
  fragmentTypeList: TypeElement[];
  /** 原始数据字段 `fragmentSquareSum`。 */
  fragmentSquareSum: number;
  /** 原始数据字段 `poolRarity`。 */
  poolRarity: Rarity;
  /** 原始数据字段 `relicProp`。 */
  relicProp: number;
  /** 原始数据字段 `shieldProp`。 */
  shieldProp: number;
  /** 原始数据字段 `populationProp`。 */
  populationProp: number;
  /** 原始数据字段 `overrideConditionBandIds`。 */
  overrideConditionBandIds: OverrideConditionBandId[] | null;
  /** 原始数据字段 `overrideRecipeId`。 */
  overrideRecipeId: null | string;
}

/**
 * roguelike_topic_table.json 中 AlchemyFormulaDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface AlchemyFormulaDatum {
  /** 原始数据字段 `fragmentIds`。 */
  fragmentIds: string[];
  /** 原始数据字段 `rewardId`。 */
  rewardId: string;
  /** 原始数据字段 `rewardCount`。 */
  rewardCount: number;
  /** 原始数据字段 `rewardItemType`。 */
  rewardItemType: RewardItemTypeEnum;
}

/**
 * roguelike_topic_table.json 中 FragmentBuffDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface FragmentBuffDatum {
  /** 原始数据字段 `itemId`。 */
  itemId: string;
  /** 原始数据字段 `maskType`。 */
  maskType: MaskType;
  /** 原始数据字段 `desc`。 */
  desc: null | string;
}

/**
 * roguelike_topic_table.json 中 FragmentDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface FragmentDatum {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `type`。 */
  type: TypeElement;
  /** 原始数据字段 `value`。 */
  value: number;
  /** 原始数据字段 `weight`。 */
  weight: number;
}

/**
 * roguelike_topic_table.json 中 FragmentLevelDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface FragmentLevelDatum {
  /** 原始数据字段 `weightUp`。 */
  weightUp: number;
}

/**
 * roguelike_topic_table.json 中 FragmentModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface FragmentModuleConsts {
  /** 原始数据字段 `weightStatusSafeDesc`。 */
  weightStatusSafeDesc: string;
  /** 原始数据字段 `weightStatusLimitDesc`。 */
  weightStatusLimitDesc: string;
  /** 原始数据字段 `weightStatusOverweightDesc`。 */
  weightStatusOverweightDesc: string;
  /** 原始数据字段 `charWeightSlot`。 */
  charWeightSlot: number;
  /** 原始数据字段 `limitWeightThresholdValue`。 */
  limitWeightThresholdValue: number;
  /** 原始数据字段 `overWeightThresholdValue`。 */
  overWeightThresholdValue: number;
  /** 原始数据字段 `maxAlchemyField`。 */
  maxAlchemyField: number;
  /** 原始数据字段 `maxAlchemyCount`。 */
  maxAlchemyCount: number;
  /** 原始数据字段 `fragmentBagWeightLimitTips`。 */
  fragmentBagWeightLimitTips: string;
  /** 原始数据字段 `fragmentBagWeightOverWeightTips`。 */
  fragmentBagWeightOverWeightTips: string;
  /** 原始数据字段 `weightUpgradeToastFormat`。 */
  weightUpgradeToastFormat: string;
}

/**
 * roguelike_topic_table.json 中 FragmentTypeData 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface FragmentTypeData {
  /** 原始数据字段 `WISH`。 */
  WISH: Idea;
  /** 原始数据字段 `INSPIRATION`。 */
  INSPIRATION: Idea;
  /** 原始数据字段 `IDEA`。 */
  IDEA: Idea;
}

/**
 * roguelike_topic_table.json 中 MaskType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type MaskType = "ALL" | "BATTLES";

/**
 * roguelike_topic_table.json 中 ModuleFragment 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ModuleFragment {
  /** 原始数据字段 `fragmentData`。 */
  fragmentData: { [key: string]: FragmentDatum };
  /** 原始数据字段 `fragmentTypeData`。 */
  fragmentTypeData: FragmentTypeData;
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: FragmentModuleConsts;
  /** 原始数据字段 `fragmentBuffData`。 */
  fragmentBuffData: { [key: string]: FragmentBuffDatum };
  /** 原始数据字段 `alchemyData`。 */
  alchemyData: { [key: string]: AlchemyDatum };
  /** 原始数据字段 `alchemyFormulaData`。 */
  alchemyFormulaData: { [key: string]: AlchemyFormulaDatum };
  /** 原始数据字段 `fragmentLevelData`。 */
  fragmentLevelData: { [key: string]: FragmentLevelDatum };
}

/**
 * roguelike_topic_table.json 中 OverrideConditionBandId 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type OverrideConditionBandId =
  | "rogue_4_band_28"
  | "rogue_4_band_29"
  | "rogue_4_band_21"
  | "rogue_4_band_22_22";

/**
 * roguelike_topic_table.json 中 TypeElement 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type TypeElement = "WISH" | "INSPIRATION" | "IDEA";
