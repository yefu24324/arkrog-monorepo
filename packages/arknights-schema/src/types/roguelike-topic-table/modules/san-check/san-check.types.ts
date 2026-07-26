/**

 * JSON 逻辑模块 `modules/san-check/san-check` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 SanCheck 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface SanCheck {
  /** 原始数据字段 `sanRanges`。 */
  sanRanges: SanRange[];
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: SanCheckModuleConsts;
}

/**
 * roguelike_topic_table.json 中 SanCheckModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface SanCheckModuleConsts {
  /** 原始数据字段 `sanDecreaseToast`。 */
  sanDecreaseToast: string;
}

/**
 * roguelike_topic_table.json 中 SanRange 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface SanRange {
  /** 原始数据字段 `sanMax`。 */
  sanMax: number;
  /** 原始数据字段 `diceGroupId`。 */
  diceGroupId: string;
  /** 原始数据字段 `description`。 */
  description: string;
  /** 原始数据字段 `sanDungeonEffect`。 */
  sanDungeonEffect: string;
  /** 原始数据字段 `sanEffectRank`。 */
  sanEffectRank: string;
  /** 原始数据字段 `sanEndingDesc`。 */
  sanEndingDesc: null;
}
