/**

 * JSON 逻辑模块 `details/fusion-data/fusion-data` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 FusionData 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface FusionData {
  /** 原始数据字段 `variation_14`。 */
  variation_14?: Variation;
  /** 原始数据字段 `variation_15`。 */
  variation_15?: Variation;
  /** 原始数据字段 `variation_16`。 */
  variation_16?: Variation;
  /** 原始数据字段 `variation_17`。 */
  variation_17?: Variation;
  /** 原始数据字段 `variation_18`。 */
  variation_18?: Variation;
  /** 原始数据字段 `variation_19`。 */
  variation_19?: Variation;
  /** 原始数据字段 `variation_20`。 */
  variation_20?: Variation;
}

/**
 * roguelike_topic_table.json 中 Variation 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Variation {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `type`。 */
  type: string;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `functionDesc`。 */
  functionDesc: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
}
