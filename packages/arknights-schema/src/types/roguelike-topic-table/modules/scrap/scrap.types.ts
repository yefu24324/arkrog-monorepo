/**

 * JSON 逻辑模块 `modules/scrap/scrap` 的显式类型。

 */

import type { Idea } from "../../shared/buffs.types.js";

import type { Rogue6_ScrapM01_Enum } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 GoodsScrapDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface GoodsScrapDatum {
  /** 原始数据字段 `scrapId`。 */
  scrapId: string;
  /** 原始数据字段 `scrapDesc`。 */
  scrapDesc: string;
  /** 原始数据字段 `sellPrice`。 */
  sellPrice: number;
}

/**
 * roguelike_topic_table.json 中 Grid 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Grid {
  /** 原始数据字段 `row`。 */
  row: number;
  /** 原始数据字段 `col`。 */
  col: number;
}

/**
 * roguelike_topic_table.json 中 ModuleScrap 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ModuleScrap {
  /** 原始数据字段 `scrapItemToType`。 */
  scrapItemToType: ScrapItemToType;
  /** 原始数据字段 `scrapTypeData`。 */
  scrapTypeData: ScrapTypeData;
  /** 原始数据字段 `moveScrapData`。 */
  moveScrapData: { [key: string]: MoveScrapDatum };
  /** 原始数据字段 `goodsScrapData`。 */
  goodsScrapData: { [key: string]: GoodsScrapDatum };
  /** 原始数据字段 `passiveScrapData`。 */
  passiveScrapData: { [key: string]: PassiveScrapDatum };
  /** 原始数据字段 `moveScrapRangeData`。 */
  moveScrapRangeData: MoveScrapRangeData;
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: ScrapModuleConsts;
}

/**
 * roguelike_topic_table.json 中 MoveScrapDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface MoveScrapDatum {
  /** 原始数据字段 `count`。 */
  count: number;
  /** 原始数据字段 `range`。 */
  range: null | string;
  /** 原始数据字段 `rangeType`。 */
  rangeType: RangeType;
  /** 原始数据字段 `node`。 */
  node: string[];
  /** 原始数据字段 `step`。 */
  step: number;
  /** 原始数据字段 `isRandomMove`。 */
  isRandomMove: boolean;
  /** 原始数据字段 `scrapId`。 */
  scrapId: string;
  /** 原始数据字段 `scrapDesc`。 */
  scrapDesc: string;
  /** 原始数据字段 `sellPrice`。 */
  sellPrice: number;
}

/**
 * roguelike_topic_table.json 中 MoveScrapRangeData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface MoveScrapRangeData {
  /** 原始数据字段 `r-1`。 */
  "r-1": R1;
  /** 原始数据字段 `r-2`。 */
  "r-2": R1;
  /** 原始数据字段 `r-3`。 */
  "r-3": R1;
  /** 原始数据字段 `r-4`。 */
  "r-4": R1;
  /** 原始数据字段 `r-5`。 */
  "r-5": R1;
  /** 原始数据字段 `r-6`。 */
  "r-6": R1;
  /** 原始数据字段 `r-7`。 */
  "r-7": R1;
}

/**
 * roguelike_topic_table.json 中 PassiveScrapDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface PassiveScrapDatum {
  /** 原始数据字段 `node`。 */
  node: string;
  /** 原始数据字段 `buffStack`。 */
  buffStack: number;
  /** 原始数据字段 `scrapId`。 */
  scrapId: string;
  /** 原始数据字段 `scrapDesc`。 */
  scrapDesc: string;
  /** 原始数据字段 `sellPrice`。 */
  sellPrice: number;
}

/**
 * roguelike_topic_table.json 中 R1 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface R1 {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `direction`。 */
  direction: string;
  /** 原始数据字段 `grids`。 */
  grids: Grid[];
}

/**
 * roguelike_topic_table.json 中 RangeType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type RangeType = "RANGE" | "FULL_MAP";

/**
 * roguelike_topic_table.json 中 ScrapItemToType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapItemToType {
  /** 原始数据字段 `rogue_6_scrap_M_01`。 */
  rogue_6_scrap_M_01: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_02`。 */
  rogue_6_scrap_M_02: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_03`。 */
  rogue_6_scrap_M_03: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_04`。 */
  rogue_6_scrap_M_04: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_05`。 */
  rogue_6_scrap_M_05: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_06`。 */
  rogue_6_scrap_M_06: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_07`。 */
  rogue_6_scrap_M_07: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_08`。 */
  rogue_6_scrap_M_08: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_09`。 */
  rogue_6_scrap_M_09: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_10`。 */
  rogue_6_scrap_M_10: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_11`。 */
  rogue_6_scrap_M_11: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_M_12`。 */
  rogue_6_scrap_M_12: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `rogue_6_scrap_G_01`。 */
  rogue_6_scrap_G_01: string;
  /** 原始数据字段 `rogue_6_scrap_G_02`。 */
  rogue_6_scrap_G_02: string;
  /** 原始数据字段 `rogue_6_scrap_G_03`。 */
  rogue_6_scrap_G_03: string;
  /** 原始数据字段 `rogue_6_scrap_G_04`。 */
  rogue_6_scrap_G_04: string;
  /** 原始数据字段 `rogue_6_scrap_G_05`。 */
  rogue_6_scrap_G_05: string;
  /** 原始数据字段 `rogue_6_scrap_G_06`。 */
  rogue_6_scrap_G_06: string;
  /** 原始数据字段 `rogue_6_scrap_G_07`。 */
  rogue_6_scrap_G_07: string;
  /** 原始数据字段 `rogue_6_scrap_G_08`。 */
  rogue_6_scrap_G_08: string;
  /** 原始数据字段 `rogue_6_scrap_G_09`。 */
  rogue_6_scrap_G_09: string;
  /** 原始数据字段 `rogue_6_scrap_G_10`。 */
  rogue_6_scrap_G_10: string;
  /** 原始数据字段 `rogue_6_scrap_G_11`。 */
  rogue_6_scrap_G_11: string;
  /** 原始数据字段 `rogue_6_scrap_G_12`。 */
  rogue_6_scrap_G_12: string;
  /** 原始数据字段 `rogue_6_scrap_P_01`。 */
  rogue_6_scrap_P_01: string;
  /** 原始数据字段 `rogue_6_scrap_P_02`。 */
  rogue_6_scrap_P_02: string;
  /** 原始数据字段 `rogue_6_scrap_P_03`。 */
  rogue_6_scrap_P_03: string;
  /** 原始数据字段 `rogue_6_scrap_P_04`。 */
  rogue_6_scrap_P_04: string;
  /** 原始数据字段 `rogue_6_scrap_P_05`。 */
  rogue_6_scrap_P_05: string;
  /** 原始数据字段 `rogue_6_scrap_P_06`。 */
  rogue_6_scrap_P_06: string;
}

/**
 * roguelike_topic_table.json 中 ScrapModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapModuleConsts {
  /** 原始数据字段 `identifyScrapId`。 */
  identifyScrapId: string;
}

/**
 * roguelike_topic_table.json 中 ScrapTypeData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapTypeData {
  /** 原始数据字段 `GOODS`。 */
  GOODS: Idea;
  /** 原始数据字段 `MOVE`。 */
  MOVE: Idea;
  /** 原始数据字段 `PASSIVE`。 */
  PASSIVE: Idea;
}
