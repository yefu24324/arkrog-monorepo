/**

 * JSON 逻辑模块 `details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 DifficultyUpgradeRelicGroup 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface DifficultyUpgradeRelicGroup {
  /** 原始数据字段 `relicData`。 */
  relicData: RelicDatum[];
}

/**
 * roguelike_topic_table.json 中 RelicDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface RelicDatum {
  /** 原始数据字段 `relicId`。 */
  relicId: string;
  /** 原始数据字段 `equivalentGrade`。 */
  equivalentGrade: number;
}
