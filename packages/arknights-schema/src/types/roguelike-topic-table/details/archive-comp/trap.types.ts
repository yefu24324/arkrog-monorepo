/**

 * JSON 逻辑模块 `details/archive-comp/trap` 的显式类型。

 */

import type { Rogue1__ActiveTool } from "./relic.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompTrap 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveCompTrap {
  /** 原始数据字段 `trap`。 */
  trap: TrapTrap;
}

/**
 * roguelike_topic_table.json 中 TrapTrap 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface TrapTrap {
  /** 原始数据字段 `rogue_1_active_tool_1`。 */
  rogue_1_active_tool_1?: Rogue1__ActiveTool;
  /** 原始数据字段 `rogue_1_active_tool_2`。 */
  rogue_1_active_tool_2?: Rogue1__ActiveTool;
  /** 原始数据字段 `rogue_1_active_tool_3`。 */
  rogue_1_active_tool_3?: Rogue1__ActiveTool;
  /** 原始数据字段 `rogue_1_active_tool_4`。 */
  rogue_1_active_tool_4?: Rogue1__ActiveTool;
  /** 原始数据字段 `rogue_1_active_tool_5`。 */
  rogue_1_active_tool_5?: Rogue1__ActiveTool;
  /** 原始数据字段 `rogue_1_active_tool_6`。 */
  rogue_1_active_tool_6?: Rogue1__ActiveTool;
}
