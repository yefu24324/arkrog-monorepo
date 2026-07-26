/**

 * JSON 逻辑模块 `modules/candle/candle` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 Candle 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Candle {
  /** 原始数据字段 `candleTicketIdList`。 */
  candleTicketIdList: string[];
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: CandleModuleConsts;
  /** 原始数据字段 `candleBattleStageIdList`。 */
  candleBattleStageIdList: string[];
}

/**
 * roguelike_topic_table.json 中 CandleModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface CandleModuleConsts {
  /** 原始数据字段 `candleHolderBuffId`。 */
  candleHolderBuffId: string;
}
