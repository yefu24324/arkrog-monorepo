/**

 * JSON 逻辑模块 `details/archive-comp/copper` 的显式类型。

 */

import type { CopperGildTypeDatum } from "../../shared/buffs.types.js";

import type { EnrollId, LuckyLevel } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompCopper 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompCopper {
  /** 原始数据字段 `coppers`。 */
  coppers: { [key: string]: CopperValue };
  /** 原始数据字段 `copperTypes`。 */
  copperTypes: CopperTypes;
  /** 原始数据字段 `gilds`。 */
  gilds: { [key: string]: CopperGildTypeDatum };
  /** 原始数据字段 `luckyLevels`。 */
  luckyLevels: LuckyLevels;
}

/**
 * roguelike_topic_table.json 中 Blank 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Blank {
  /** 原始数据字段 `copperType`。 */
  copperType: CopperType;
  /** 原始数据字段 `typeName`。 */
  typeName: string;
  /** 原始数据字段 `typeIconId`。 */
  typeIconId: string;
}

/**
 * roguelike_topic_table.json 中 CopperArchiveType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type CopperArchiveType = "LUCK" | "COPPER" | "GILD";

/**
 * roguelike_topic_table.json 中 CopperType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type CopperType =
  "NONE" | "BLANK" | "RESOURCE" | "FIGHT" | "TREASURE" | "UNSOUND";

/**
 * roguelike_topic_table.json 中 CopperTypes 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CopperTypes {
  /** 原始数据字段 `BLANK`。 */
  BLANK: Blank;
  /** 原始数据字段 `FIGHT`。 */
  FIGHT: Blank;
  /** 原始数据字段 `RESOURCE`。 */
  RESOURCE: Blank;
  /** 原始数据字段 `UNSOUND`。 */
  UNSOUND: Blank;
  /** 原始数据字段 `TREASURE`。 */
  TREASURE: Blank;
}

/**
 * roguelike_topic_table.json 中 CopperValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CopperValue {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `displayCopperId`。 */
  displayCopperId: null | string;
  /** 原始数据字段 `archiveType`。 */
  archiveType: CopperArchiveType;
  /** 原始数据字段 `copperType`。 */
  copperType: CopperType;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
  /** 原始数据字段 `coppersInGroup`。 */
  coppersInGroup: string[];
}

/**
 * roguelike_topic_table.json 中 High 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface High {
  /** 原始数据字段 `luckyLevel`。 */
  luckyLevel: LuckyLevel;
  /** 原始数据字段 `luckyName`。 */
  luckyName: string;
  /** 原始数据字段 `luckyDesc`。 */
  luckyDesc: string;
  /** 原始数据字段 `luckyUsage`。 */
  luckyUsage: string;
}

/**
 * roguelike_topic_table.json 中 LuckyLevels 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface LuckyLevels {
  /** 原始数据字段 `MID`。 */
  MID: High;
  /** 原始数据字段 `HIGH`。 */
  HIGH: High;
  /** 原始数据字段 `LOW`。 */
  LOW: High;
}
