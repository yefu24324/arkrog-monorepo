/**

 * JSON 逻辑模块 `details/archive-comp/endbook` 的显式类型。

 */

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompEndbook 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveCompEndbook {
  /** 原始数据字段 `endbook`。 */
  endbook: { [key: string]: EndbookValue };
}

/**
 * roguelike_topic_table.json 中 ClientEndbookItemData 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ClientEndbookItemData {
  /** 原始数据字段 `endBookId`。 */
  endBookId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
  /** 原始数据字段 `isLast`。 */
  isLast: boolean;
  /** 原始数据字段 `endbookName`。 */
  endbookName: string;
  /** 原始数据字段 `unlockDesc`。 */
  unlockDesc: string;
  /** 原始数据字段 `textId`。 */
  textId: string;
}

/**
 * roguelike_topic_table.json 中 EndbookValue 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface EndbookValue {
  /** 原始数据字段 `endId`。 */
  endId: string;
  /** 原始数据字段 `endingId`。 */
  endingId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `title`。 */
  title: string;
  /** 原始数据字段 `cgId`。 */
  cgId: string;
  /** 原始数据字段 `backBlurId`。 */
  backBlurId: string;
  /** 原始数据字段 `cardId`。 */
  cardId: string;
  /** 原始数据字段 `hasAvg`。 */
  hasAvg: boolean;
  /** 原始数据字段 `avgId`。 */
  avgId: string;
  /** 原始数据字段 `clientEndbookItemDatas`。 */
  clientEndbookItemDatas: ClientEndbookItemData[];
}
