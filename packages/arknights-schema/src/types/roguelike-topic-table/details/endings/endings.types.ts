/**

 * JSON 逻辑模块 `details/endings/endings` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 Ending 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Ending {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `familyId`。 */
  familyId: number;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `bgId`。 */
  bgId: string;
  /** 原始数据字段 `icons`。 */
  icons: IconElement[];
  /** 原始数据字段 `priority`。 */
  priority: number;
  /** 原始数据字段 `changeEndingDesc`。 */
  changeEndingDesc: null | string;
  /** 原始数据字段 `bossIconId`。 */
  bossIconId: null | string;
}

/**
 * roguelike_topic_table.json 中 IconElement 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface IconElement {
  /** 原始数据字段 `level`。 */
  level: number;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
}
