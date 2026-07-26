/**

 * JSON 逻辑模块 `details/enrolls/enrolls` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 DetailEnroll 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface DetailEnroll {
  /** 原始数据字段 `enrollId`。 */
  enrollId: string;
  /** 原始数据字段 `enrollTime`。 */
  enrollTime: number;
  /** 原始数据字段 `enrollType`。 */
  enrollType: EnrollType;
  /** 原始数据字段 `enrollNoticeEndTime`。 */
  enrollNoticeEndTime: number;
}

/**
 * roguelike_topic_table.json 中 EnrollType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type EnrollType = "DLC" | "REVIEW";
