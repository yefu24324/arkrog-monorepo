/**

 * JSON 逻辑模块 `modules/disaster/disaster` 的显式类型。

 */

import type { ErDatum } from "../../shared/buffs.types.js";

/**
 * roguelike_topic_table.json 中 ModuleDisaster 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ModuleDisaster {
  /** 原始数据字段 `disasterData`。 */
  disasterData: { [key: string]: ErDatum };
}
