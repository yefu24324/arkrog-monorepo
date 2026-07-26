/**

 * JSON 逻辑模块 `details/month-mission/month-mission` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 MonthMission 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface MonthMission {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `taskName`。 */
  taskName: string;
  /** 原始数据字段 `taskClass`。 */
  taskClass: TaskClass;
  /** 原始数据字段 `innerClassWeight`。 */
  innerClassWeight: number;
  /** 原始数据字段 `template`。 */
  template: string;
  /** 原始数据字段 `paramList`。 */
  paramList: string[];
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `tokenRewardNum`。 */
  tokenRewardNum: number;
}

/**
 * roguelike_topic_table.json 中 TaskClass 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type TaskClass = "C" | "B" | "A";
