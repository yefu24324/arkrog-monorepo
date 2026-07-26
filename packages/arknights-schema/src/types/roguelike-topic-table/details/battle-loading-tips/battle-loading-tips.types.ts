/**

 * JSON 逻辑模块 `details/battle-loading-tips/battle-loading-tips` 的显式类型。

 */

import type { Category } from "../../shared/common-enums.types.js";

/**
 * roguelike_topic_table.json 中 BattleLoadingTip 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface BattleLoadingTip {
  /** 原始数据字段 `tip`。 */
  tip: string;
  /** 原始数据字段 `weight`。 */
  weight: number;
  /** 原始数据字段 `category`。 */
  category: Category;
}
