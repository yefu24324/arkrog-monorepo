/**

 * JSON 逻辑模块 `customize-data/development-lines/development-lines` 的显式类型。

 */

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 DevelopmentLine 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DevelopmentLine {
  /** 原始数据字段 `fromNode`。 */
  fromNode: string;
  /** 原始数据字段 `toNode`。 */
  toNode: string;
  /** 原始数据字段 `fromNodeP`。 */
  fromNodeP: number;
  /** 原始数据字段 `fromNodeR`。 */
  fromNodeR: number;
  /** 原始数据字段 `toNodeP`。 */
  toNodeP: number;
  /** 原始数据字段 `toNodeR`。 */
  toNodeR: number;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
}
