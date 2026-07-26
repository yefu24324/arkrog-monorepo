/**

 * JSON 逻辑模块 `details/archive-comp/buff` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 ArchiveCompBuff 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveCompBuff {
  /** 原始数据字段 `buff`。 */
  buff: { [key: string]: BuffValue };
}

/**
 * roguelike_topic_table.json 中 BuffColor 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type BuffColor = "#9266b2" | "#b43b3b" | "#0098dc";

/**
 * roguelike_topic_table.json 中 BuffValue 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface BuffValue {
  /** 原始数据字段 `buffId`。 */
  buffId: string;
  /** 原始数据字段 `buffGroupIndex`。 */
  buffGroupIndex: number;
  /** 原始数据字段 `innerSortId`。 */
  innerSortId: number;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
  /** 原始数据字段 `usage`。 */
  usage: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `color`。 */
  color: BuffColor;
}
