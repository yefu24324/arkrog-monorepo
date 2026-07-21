/**

 * JSON 逻辑模块 `details/archive-comp/module-archives` 的显式类型。

 */

import type { Pos } from "../../shared/core.types.js";

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompDisaster 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompDisaster {
  /** 原始数据字段 `disasters`。 */
  disasters: { [key: string]: DisasterValue };
}

/**
 * roguelike_topic_table.json 中 ArchiveCompFragment 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompFragment {
  /** 原始数据字段 `fragment`。 */
  fragment: { [key: string]: FragmentValue };
}

/**
 * roguelike_topic_table.json 中 ArchiveCompScrap 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompScrap {
  /** 原始数据字段 `scraps`。 */
  scraps: { [key: string]: ScrapValue };
}

/**
 * roguelike_topic_table.json 中 ArchiveCompTotem 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompTotem {
  /** 原始数据字段 `totem`。 */
  totem: { [key: string]: TotemValue };
}

/**
 * roguelike_topic_table.json 中 ArchiveCompWeather 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompWeather {
  /** 原始数据字段 `weathers`。 */
  weathers: { [key: string]: WeatherValue };
}

/**
 * roguelike_topic_table.json 中 ArchiveCompWrath 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompWrath {
  /** 原始数据字段 `wraths`。 */
  wraths: { [key: string]: WrathValue };
}

/**
 * roguelike_topic_table.json 中 DisasterValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DisasterValue {
  /** 原始数据字段 `disasterId`。 */
  disasterId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `enrollConditionId`。 */
  enrollConditionId: null;
  /** 原始数据字段 `picSmallId`。 */
  picSmallId: string;
  /** 原始数据字段 `picBigActiveId`。 */
  picBigActiveId: string;
  /** 原始数据字段 `picBigInactiveId`。 */
  picBigInactiveId: string;
}

/**
 * roguelike_topic_table.json 中 FragmentValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface FragmentValue {
  /** 原始数据字段 `fragmentId`。 */
  fragmentId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `enrollConditionId`。 */
  enrollConditionId: EnrollId | null;
}

/**
 * roguelike_topic_table.json 中 ScrapValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapValue {
  /** 原始数据字段 `scrapId`。 */
  scrapId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `enrollConditionId`。 */
  enrollConditionId: null;
}

/**
 * roguelike_topic_table.json 中 TotemValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface TotemValue {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `type`。 */
  type: Pos;
  /** 原始数据字段 `enrollConditionId`。 */
  enrollConditionId: EnrollId | null;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
}

/**
 * roguelike_topic_table.json 中 WeatherValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface WeatherValue {
  /** 原始数据字段 `weatherId`。 */
  weatherId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `enrollConditionId`。 */
  enrollConditionId: null;
}

/**
 * roguelike_topic_table.json 中 WrathValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface WrathValue {
  /** 原始数据字段 `wrathId`。 */
  wrathId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `picTitleId`。 */
  picTitleId: string;
  /** 原始数据字段 `picSmallInactiveId`。 */
  picSmallInactiveId: null | string;
  /** 原始数据字段 `picSmallActiveId`。 */
  picSmallActiveId: string;
  /** 原始数据字段 `picBigActiveId`。 */
  picBigActiveId: string;
  /** 原始数据字段 `picBigInactiveId`。 */
  picBigInactiveId: null | string;
  /** 原始数据字段 `enrollId`。 */
  enrollId: null;
  /** 原始数据字段 `isSp`。 */
  isSp: boolean;
}
