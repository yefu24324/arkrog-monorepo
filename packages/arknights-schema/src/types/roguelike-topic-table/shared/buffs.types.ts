/**

 * JSON 逻辑模块 `shared/buffs` 的显式类型。

 */

import type { DisplayForm } from "./common-enums.types.js";

import type { Id } from "./core.types.js";

import type { LeftDisasterDesc } from "./rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 Blackboard 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Blackboard {
  /** 原始数据字段 `key`。 */
  key: string;
  /** 原始数据字段 `value`。 */
  value: number;
  /** 原始数据字段 `valueStr`。 */
  valueStr: null | string;
}

/**
 * roguelike_topic_table.json 中 BuffDisplayInfo 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface BuffDisplayInfo {
  /** 原始数据字段 `displayType`。 */
  displayType: string;
  /** 原始数据字段 `displayNum`。 */
  displayNum: number;
  /** 原始数据字段 `displayForm`。 */
  displayForm: DisplayForm;
  /** 原始数据字段 `tokenDesc`。 */
  tokenDesc: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
}

/**
 * roguelike_topic_table.json 中 BuffElement 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface BuffElement {
  /** 原始数据字段 `key`。 */
  key: string;
  /** 原始数据字段 `blackboard`。 */
  blackboard: Blackboard[];
}

/**
 * roguelike_topic_table.json 中 CopperGildTypeDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface CopperGildTypeDatum {
  /** 原始数据字段 `gildTypeId`。 */
  gildTypeId: Id;
  /** 原始数据字段 `gildName`。 */
  gildName: string;
  /** 原始数据字段 `gildDesc`。 */
  gildDesc: string;
}

/**
 * roguelike_topic_table.json 中 DevelopmentToken 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface DevelopmentToken {
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `displayForm`。 */
  displayForm: DisplayForm;
  /** 原始数据字段 `tokenDesc`。 */
  tokenDesc: string;
}

/**
 * roguelike_topic_table.json 中 ErDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ErDatum {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
  /** 原始数据字段 `toastIconId`。 */
  toastIconId?: string;
  /** 原始数据字段 `level`。 */
  level: number;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `levelName`。 */
  levelName: LeftDisasterDesc;
  /** 原始数据字段 `type`。 */
  type: string;
  /** 原始数据字段 `functionDesc`。 */
  functionDesc: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `sound`。 */
  sound: null;
  /** 原始数据字段 `iconBigId`。 */
  iconBigId?: string;
  /** 原始数据字段 `isPositive`。 */
  isPositive?: boolean;
}

/**
 * roguelike_topic_table.json 中 Idea 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Idea {
  /** 原始数据字段 `type`。 */
  type: string;
  /** 原始数据字段 `typeName`。 */
  typeName: string;
  /** 原始数据字段 `typeDesc`。 */
  typeDesc: string;
  /** 原始数据字段 `typeIconId`。 */
  typeIconId: string;
}
