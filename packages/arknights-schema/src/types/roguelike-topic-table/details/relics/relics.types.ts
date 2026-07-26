/**

 * JSON 逻辑模块 `details/relics/relics` 的显式类型。

 */

import type { BuffElement } from "../../shared/buffs.types.js";

/**
 * roguelike_topic_table.json 中 DetailRelic 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface DetailRelic {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `buffs`。 */
  buffs: BuffElement[];
}
