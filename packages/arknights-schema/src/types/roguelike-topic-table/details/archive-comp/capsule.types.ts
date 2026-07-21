/**

 * JSON 逻辑模块 `details/archive-comp/capsule` 的显式类型。

 */

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompCapsule 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ArchiveCompCapsule {
  /** 原始数据字段 `capsule`。 */
  capsule: { [key: string]: CapsuleValue };
}

/**
 * roguelike_topic_table.json 中 CapsuleValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CapsuleValue {
  /** 原始数据字段 `capsuleId`。 */
  capsuleId: string;
  /** 原始数据字段 `capsuleSortId`。 */
  capsuleSortId: number;
  /** 原始数据字段 `englishName`。 */
  englishName: string;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
}
