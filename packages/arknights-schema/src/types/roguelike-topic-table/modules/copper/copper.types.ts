/**

 * JSON 逻辑模块 `modules/copper/copper` 的显式类型。

 */

import type { CopperGildTypeDatum } from "../../shared/buffs.types.js";

import type { ResultType } from "../../shared/common-enums.types.js";

import type { Id } from "../../shared/core.types.js";

import type { LuckyLevel } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 CopperDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CopperDatum {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `groupId`。 */
  groupId: string;
  /** 原始数据字段 `gildTypeId`。 */
  gildTypeId: Id | null;
  /** 原始数据字段 `luckyLevel`。 */
  luckyLevel: LuckyLevel;
  /** 原始数据字段 `buffType`。 */
  buffType: CopperDatumBuffType;
  /** 原始数据字段 `layerCntDesc`。 */
  layerCntDesc: LayerCntDesc;
  /** 原始数据字段 `poemList`。 */
  poemList: string[];
  /** 原始数据字段 `alwaysShowCountDown`。 */
  alwaysShowCountDown: boolean;
  /** 原始数据字段 `buffItemIdList`。 */
  buffItemIdList: string[];
  /** 原始数据字段 `isAllLuckyLevel`。 */
  isAllLuckyLevel: boolean;
}

/**
 * roguelike_topic_table.json 中 CopperDatumBuffType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type CopperDatumBuffType = "NONE" | "REFRESH" | "MOVE";

/**
 * roguelike_topic_table.json 中 CopperDivineDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CopperDivineDatum {
  /** 原始数据字段 `eventId`。 */
  eventId: string;
  /** 原始数据字段 `groupId`。 */
  groupId: string;
  /** 原始数据字段 `showDesc`。 */
  showDesc: string;
  /** 原始数据字段 `divineType`。 */
  divineType: DivineType;
  /** 原始数据字段 `resultType`。 */
  resultType: ResultType;
}

/**
 * roguelike_topic_table.json 中 CopperModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CopperModuleConsts {
  /** 原始数据字段 `copperDrawMaxNum`。 */
  copperDrawMaxNum: number;
  /** 原始数据字段 `copperDrawMinNum`。 */
  copperDrawMinNum: number;
  /** 原始数据字段 `copperAllLuckyLevelGildId`。 */
  copperAllLuckyLevelGildId: Id;
  /** 原始数据字段 `copperDrawFreezeCostItemId`。 */
  copperDrawFreezeCostItemId: string;
  /** 原始数据字段 `copperDrawFreezeCostCount`。 */
  copperDrawFreezeCostCount: number[];
}

/**
 * roguelike_topic_table.json 中 DivineType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DivineType = "EVENT" | "DIVINE";

/**
 * roguelike_topic_table.json 中 LayerCntDesc 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type LayerCntDesc =
  | "<color=#2fac78>（已投出{0}次）</color>"
  | "<color=#2fac78>（钱盒内持有{0}枚衡钱）</color>"
  | "<color=#2fac78>（已经过{0}个节点）</color>"
  | "<color=#2fac78>（失去时可获得{0}个收藏品）</color>"
  | "<color=#2fac78>（已交换{0}次）</color>";

/**
 * roguelike_topic_table.json 中 ModuleCopper 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ModuleCopper {
  /** 原始数据字段 `copperData`。 */
  copperData: { [key: string]: CopperDatum };
  /** 原始数据字段 `copperDivineData`。 */
  copperDivineData: { [key: string]: CopperDivineDatum };
  /** 原始数据字段 `copperGildTypeData`。 */
  copperGildTypeData: { [key: string]: CopperGildTypeDatum };
  /** 原始数据字段 `changeCopperMap`。 */
  changeCopperMap: { [key: string]: string };
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: CopperModuleConsts;
}
