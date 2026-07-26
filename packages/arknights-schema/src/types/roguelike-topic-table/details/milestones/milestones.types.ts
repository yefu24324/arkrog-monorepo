/**

 * JSON 逻辑模块 `details/milestones/milestones` 的显式类型。

 */

import type { ItemTypeEnum } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 Milestone 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Milestone {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `level`。 */
  level: number;
  /** 原始数据字段 `tokenNum`。 */
  tokenNum: number;
  /** 原始数据字段 `nextTokenNum`。 */
  nextTokenNum: number;
  /** 原始数据字段 `itemID`。 */
  itemID: string;
  /** 原始数据字段 `itemType`。 */
  itemType: ItemTypeEnum;
  /** 原始数据字段 `itemCount`。 */
  itemCount: number;
  /** 原始数据字段 `isGoodPrize`。 */
  isGoodPrize: boolean;
  /** 原始数据字段 `isGrandPrize`。 */
  isGrandPrize: boolean;
  /** 原始数据字段 `isReturnDisplay`。 */
  isReturnDisplay: boolean;
  /** 原始数据字段 `returnSortId`。 */
  returnSortId: number;
}
