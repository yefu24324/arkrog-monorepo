/**

 * JSON 逻辑模块 `modules/wrath/wrath` 的显式类型。

 */

import type { LeftWrathDesc } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ModuleWrath 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ModuleWrath {
  /** 原始数据字段 `wrathData`。 */
  wrathData: { [key: string]: WrathDatum };
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: WrathModuleConsts;
}

/**
 * roguelike_topic_table.json 中 WrathDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface WrathDatum {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `group`。 */
  group: string;
  /** 原始数据字段 `level`。 */
  level: number;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `levelName`。 */
  levelName: LeftWrathDesc;
  /** 原始数据字段 `functionDesc`。 */
  functionDesc: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `isPacified`。 */
  isPacified: boolean;
}

/**
 * roguelike_topic_table.json 中 WrathModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface WrathModuleConsts {
  /** 原始数据字段 `getWrathTransition`。 */
  getWrathTransition: string;
  /** 原始数据字段 `getWrathToast`。 */
  getWrathToast: string;
  /** 原始数据字段 `hiddenWrathType`。 */
  hiddenWrathType: string;
  /** 原始数据字段 `pacifiedWrathLevel`。 */
  pacifiedWrathLevel: number;
}
