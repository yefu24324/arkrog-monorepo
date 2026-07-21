/**

 * JSON 逻辑模块 `details/upgrade-tickets/upgrade-tickets` 的显式类型。

 */

import type { Category } from "../../shared/common-enums.types.js";

import type { Profession, RarityList } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 Rogue1_UpgradeTicket5StarClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue1_UpgradeTicket5StarClass {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `profession`。 */
  profession: number;
  /** 原始数据字段 `rarity`。 */
  rarity: number;
  /** 原始数据字段 `professionList`。 */
  professionList: Profession[];
  /** 原始数据字段 `rarityList`。 */
  rarityList: RarityList[];
}

/**
 * roguelike_topic_table.json 中 Rogue1_UpgradeTicketAllClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue1_UpgradeTicketAllClass {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `profession`。 */
  profession: number;
  /** 原始数据字段 `rarity`。 */
  rarity: Category;
  /** 原始数据字段 `professionList`。 */
  professionList: Profession[];
  /** 原始数据字段 `rarityList`。 */
  rarityList: RarityList[];
}

/**
 * roguelike_topic_table.json 中 Rogue1_UpgradeTicketCasterClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue1_UpgradeTicketCasterClass {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `profession`。 */
  profession: Profession;
  /** 原始数据字段 `rarity`。 */
  rarity: Category;
  /** 原始数据字段 `professionList`。 */
  professionList: Profession[];
  /** 原始数据字段 `rarityList`。 */
  rarityList: RarityList[];
}

/**
 * roguelike_topic_table.json 中 UpgradeTickets 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface UpgradeTickets {
  /** 原始数据字段 `rogue_1_upgrade_ticket_all`。 */
  rogue_1_upgrade_ticket_all?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_5star`。 */
  rogue_1_upgrade_ticket_5star?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_pioneer`。 */
  rogue_1_upgrade_ticket_pioneer?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_warrior`。 */
  rogue_1_upgrade_ticket_warrior?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_tank`。 */
  rogue_1_upgrade_ticket_tank?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_sniper`。 */
  rogue_1_upgrade_ticket_sniper?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_caster`。 */
  rogue_1_upgrade_ticket_caster?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_support`。 */
  rogue_1_upgrade_ticket_support?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_medic`。 */
  rogue_1_upgrade_ticket_medic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_1_upgrade_ticket_special`。 */
  rogue_1_upgrade_ticket_special?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_all`。 */
  rogue_2_upgrade_ticket_all?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_5star`。 */
  rogue_2_upgrade_ticket_5star?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_pioneer`。 */
  rogue_2_upgrade_ticket_pioneer?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_warrior`。 */
  rogue_2_upgrade_ticket_warrior?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_tank`。 */
  rogue_2_upgrade_ticket_tank?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_sniper`。 */
  rogue_2_upgrade_ticket_sniper?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_caster`。 */
  rogue_2_upgrade_ticket_caster?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_support`。 */
  rogue_2_upgrade_ticket_support?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_medic`。 */
  rogue_2_upgrade_ticket_medic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_2_upgrade_ticket_special`。 */
  rogue_2_upgrade_ticket_special?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_all`。 */
  rogue_3_upgrade_ticket_all?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_5star`。 */
  rogue_3_upgrade_ticket_5star?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_pioneer`。 */
  rogue_3_upgrade_ticket_pioneer?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_warrior`。 */
  rogue_3_upgrade_ticket_warrior?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_tank`。 */
  rogue_3_upgrade_ticket_tank?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_sniper`。 */
  rogue_3_upgrade_ticket_sniper?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_caster`。 */
  rogue_3_upgrade_ticket_caster?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_support`。 */
  rogue_3_upgrade_ticket_support?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_medic`。 */
  rogue_3_upgrade_ticket_medic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_3_upgrade_ticket_special`。 */
  rogue_3_upgrade_ticket_special?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_all`。 */
  rogue_4_upgrade_ticket_all?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_5star`。 */
  rogue_4_upgrade_ticket_5star?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_pioneer`。 */
  rogue_4_upgrade_ticket_pioneer?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_warrior`。 */
  rogue_4_upgrade_ticket_warrior?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_tank`。 */
  rogue_4_upgrade_ticket_tank?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_sniper`。 */
  rogue_4_upgrade_ticket_sniper?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_caster`。 */
  rogue_4_upgrade_ticket_caster?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_support`。 */
  rogue_4_upgrade_ticket_support?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_medic`。 */
  rogue_4_upgrade_ticket_medic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_4_upgrade_ticket_special`。 */
  rogue_4_upgrade_ticket_special?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_all`。 */
  rogue_5_upgrade_ticket_all?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_5star`。 */
  rogue_5_upgrade_ticket_5star?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_pioneer`。 */
  rogue_5_upgrade_ticket_pioneer?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_warrior`。 */
  rogue_5_upgrade_ticket_warrior?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_tank`。 */
  rogue_5_upgrade_ticket_tank?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_sniper`。 */
  rogue_5_upgrade_ticket_sniper?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_caster`。 */
  rogue_5_upgrade_ticket_caster?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_support`。 */
  rogue_5_upgrade_ticket_support?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_medic`。 */
  rogue_5_upgrade_ticket_medic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_special`。 */
  rogue_5_upgrade_ticket_special?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_all_candle`。 */
  rogue_5_upgrade_ticket_all_candle?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_5star_candle`。 */
  rogue_5_upgrade_ticket_5star_candle?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_pioneer_candle`。 */
  rogue_5_upgrade_ticket_pioneer_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_warrior_candle`。 */
  rogue_5_upgrade_ticket_warrior_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_tank_candle`。 */
  rogue_5_upgrade_ticket_tank_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_sniper_candle`。 */
  rogue_5_upgrade_ticket_sniper_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_caster_candle`。 */
  rogue_5_upgrade_ticket_caster_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_support_candle`。 */
  rogue_5_upgrade_ticket_support_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_medic_candle`。 */
  rogue_5_upgrade_ticket_medic_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_5_upgrade_ticket_special_candle`。 */
  rogue_5_upgrade_ticket_special_candle?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_all`。 */
  rogue_6_upgrade_ticket_all?: Rogue1_UpgradeTicketAllClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_5star`。 */
  rogue_6_upgrade_ticket_5star?: Rogue1_UpgradeTicket5StarClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_pioneer`。 */
  rogue_6_upgrade_ticket_pioneer?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_warrior`。 */
  rogue_6_upgrade_ticket_warrior?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_tank`。 */
  rogue_6_upgrade_ticket_tank?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_sniper`。 */
  rogue_6_upgrade_ticket_sniper?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_caster`。 */
  rogue_6_upgrade_ticket_caster?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_support`。 */
  rogue_6_upgrade_ticket_support?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_medic`。 */
  rogue_6_upgrade_ticket_medic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_special`。 */
  rogue_6_upgrade_ticket_special?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_pioneer_from_relic`。 */
  rogue_6_upgrade_ticket_pioneer_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_warrior_from_relic`。 */
  rogue_6_upgrade_ticket_warrior_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_tank_from_relic`。 */
  rogue_6_upgrade_ticket_tank_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_sniper_from_relic`。 */
  rogue_6_upgrade_ticket_sniper_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_caster_from_relic`。 */
  rogue_6_upgrade_ticket_caster_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_support_from_relic`。 */
  rogue_6_upgrade_ticket_support_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_medic_from_relic`。 */
  rogue_6_upgrade_ticket_medic_from_relic?: Rogue1_UpgradeTicketCasterClass;
  /** 原始数据字段 `rogue_6_upgrade_ticket_special_from_relic`。 */
  rogue_6_upgrade_ticket_special_from_relic?: Rogue1_UpgradeTicketCasterClass;
}
