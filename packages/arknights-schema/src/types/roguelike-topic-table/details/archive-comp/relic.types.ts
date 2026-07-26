/**

 * JSON 逻辑模块 `details/archive-comp/relic` 的显式类型。

 */

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompRelic 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveCompRelic {
  /** 原始数据字段 `relic`。 */
  relic: { [key: string]: RelicRelic };
}

/**
 * roguelike_topic_table.json 中 RelicRelic 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface RelicRelic {
  /** 原始数据字段 `relicId`。 */
  relicId: string;
  /** 原始数据字段 `relicSortId`。 */
  relicSortId: number;
  /** 原始数据字段 `relicGroupId`。 */
  relicGroupId: number;
  /** 原始数据字段 `orderId`。 */
  orderId: string;
  /** 原始数据字段 `isSpRelic`。 */
  isSpRelic: boolean;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
}

/**
 * roguelike_topic_table.json 中 Rogue1__ActiveTool 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Rogue1__ActiveTool {
  /** 原始数据字段 `trapId`。 */
  trapId: string;
  /** 原始数据字段 `trapSortId`。 */
  trapSortId: number;
  /** 原始数据字段 `orderId`。 */
  orderId: string;
  /** 原始数据字段 `enrollId`。 */
  enrollId: null;
}
