/**

 * JSON 逻辑模块 `details/custom-tickets/custom-tickets` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 CustomTickets 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface CustomTickets {
  /** 原始数据字段 `rogue_2_custom_ticket_purify`。 */
  rogue_2_custom_ticket_purify?: Rogue2_CustomTicketPurifyClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_only_candle`。 */
  rogue_5_recruit_ticket_only_candle?: Rogue2_CustomTicketPurifyClass;
}

/**
 * roguelike_topic_table.json 中 Rogue2_CustomTicketPurifyClass 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Rogue2_CustomTicketPurifyClass {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `subType`。 */
  subType: string;
  /** 原始数据字段 `discardText`。 */
  discardText: string;
}
