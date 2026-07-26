/**

 * JSON 逻辑模块 `details/archive-comp/chaos` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 ArchiveCompChaos 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveCompChaos {
  /** 原始数据字段 `chaos`。 */
  chaos: { [key: string]: Chao };
}

/**
 * roguelike_topic_table.json 中 Chao 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Chao {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `isHidden`。 */
  isHidden: boolean;
  /** 原始数据字段 `enrollId`。 */
  enrollId: null;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
}
