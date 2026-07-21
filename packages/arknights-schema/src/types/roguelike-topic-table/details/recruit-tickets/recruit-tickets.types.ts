/**

 * JSON 逻辑模块 `details/recruit-tickets/recruit-tickets` 的显式类型。

 */

import type { Category } from "../../shared/common-enums.types.js";

import type { Profession, RarityList } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 ExtraCharId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type ExtraCharId =
  | "char_504_rguard"
  | "char_507_rsnipe"
  | "char_505_rcast"
  | "char_506_rmedic"
  | "char_514_rdfend";

/**
 * roguelike_topic_table.json 中 RecruitTickets 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface RecruitTickets {
  /** 原始数据字段 `rogue_1_recruit_ticket_pioneer`。 */
  rogue_1_recruit_ticket_pioneer?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_warrior`。 */
  rogue_1_recruit_ticket_warrior?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_tank`。 */
  rogue_1_recruit_ticket_tank?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_sniper`。 */
  rogue_1_recruit_ticket_sniper?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_caster`。 */
  rogue_1_recruit_ticket_caster?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_support`。 */
  rogue_1_recruit_ticket_support?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_medic`。 */
  rogue_1_recruit_ticket_medic?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_special`。 */
  rogue_1_recruit_ticket_special?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_pioneer_sp`。 */
  rogue_1_recruit_ticket_pioneer_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_warrior_sp`。 */
  rogue_1_recruit_ticket_warrior_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_tank_sp`。 */
  rogue_1_recruit_ticket_tank_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_sniper_sp`。 */
  rogue_1_recruit_ticket_sniper_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_caster_sp`。 */
  rogue_1_recruit_ticket_caster_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_support_sp`。 */
  rogue_1_recruit_ticket_support_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_medic_sp`。 */
  rogue_1_recruit_ticket_medic_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_special_sp`。 */
  rogue_1_recruit_ticket_special_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_double_1`。 */
  rogue_1_recruit_ticket_double_1?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_double_2`。 */
  rogue_1_recruit_ticket_double_2?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_double_3`。 */
  rogue_1_recruit_ticket_double_3?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_double_4`。 */
  rogue_1_recruit_ticket_double_4?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_quad_melee`。 */
  rogue_1_recruit_ticket_quad_melee?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_quad_ranged`。 */
  rogue_1_recruit_ticket_quad_ranged?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_all`。 */
  rogue_1_recruit_ticket_all?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_5star`。 */
  rogue_1_recruit_ticket_5star?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_all_premium`。 */
  rogue_1_recruit_ticket_all_premium?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_quad_melee_discount`。 */
  rogue_1_recruit_ticket_quad_melee_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_quad_ranged_discount`。 */
  rogue_1_recruit_ticket_quad_ranged_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_all_discount`。 */
  rogue_1_recruit_ticket_all_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_pioneer_red`。 */
  rogue_1_recruit_ticket_pioneer_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_warrior_red`。 */
  rogue_1_recruit_ticket_warrior_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_tank_red`。 */
  rogue_1_recruit_ticket_tank_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_sniper_red`。 */
  rogue_1_recruit_ticket_sniper_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_caster_red`。 */
  rogue_1_recruit_ticket_caster_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_support_red`。 */
  rogue_1_recruit_ticket_support_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_medic_red`。 */
  rogue_1_recruit_ticket_medic_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_1_recruit_ticket_redecial_red`。 */
  rogue_1_recruit_ticket_redecial_red?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_pioneer`。 */
  rogue_2_recruit_ticket_pioneer?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_warrior`。 */
  rogue_2_recruit_ticket_warrior?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_tank`。 */
  rogue_2_recruit_ticket_tank?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_sniper`。 */
  rogue_2_recruit_ticket_sniper?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_caster`。 */
  rogue_2_recruit_ticket_caster?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_support`。 */
  rogue_2_recruit_ticket_support?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_medic`。 */
  rogue_2_recruit_ticket_medic?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_special`。 */
  rogue_2_recruit_ticket_special?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_pioneer_sp`。 */
  rogue_2_recruit_ticket_pioneer_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_warrior_sp`。 */
  rogue_2_recruit_ticket_warrior_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_tank_sp`。 */
  rogue_2_recruit_ticket_tank_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_sniper_sp`。 */
  rogue_2_recruit_ticket_sniper_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_caster_sp`。 */
  rogue_2_recruit_ticket_caster_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_support_sp`。 */
  rogue_2_recruit_ticket_support_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_medic_sp`。 */
  rogue_2_recruit_ticket_medic_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_special_sp`。 */
  rogue_2_recruit_ticket_special_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_pioneer_vip`。 */
  rogue_2_recruit_ticket_pioneer_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_warrior_vip`。 */
  rogue_2_recruit_ticket_warrior_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_tank_vip`。 */
  rogue_2_recruit_ticket_tank_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_sniper_vip`。 */
  rogue_2_recruit_ticket_sniper_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_caster_vip`。 */
  rogue_2_recruit_ticket_caster_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_support_vip`。 */
  rogue_2_recruit_ticket_support_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_medic_vip`。 */
  rogue_2_recruit_ticket_medic_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_special_vip`。 */
  rogue_2_recruit_ticket_special_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_double_1`。 */
  rogue_2_recruit_ticket_double_1?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_double_2`。 */
  rogue_2_recruit_ticket_double_2?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_double_3`。 */
  rogue_2_recruit_ticket_double_3?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_double_4`。 */
  rogue_2_recruit_ticket_double_4?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_quad_melee`。 */
  rogue_2_recruit_ticket_quad_melee?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_quad_ranged`。 */
  rogue_2_recruit_ticket_quad_ranged?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_all`。 */
  rogue_2_recruit_ticket_all?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_5star`。 */
  rogue_2_recruit_ticket_5star?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_all_premium`。 */
  rogue_2_recruit_ticket_all_premium?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_quad_melee_discount`。 */
  rogue_2_recruit_ticket_quad_melee_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_quad_ranged_discount`。 */
  rogue_2_recruit_ticket_quad_ranged_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_all_discount`。 */
  rogue_2_recruit_ticket_all_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_temp_5_up`。 */
  rogue_2_recruit_ticket_temp_5_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_2_recruit_ticket_temp_6_up`。 */
  rogue_2_recruit_ticket_temp_6_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_pioneer`。 */
  rogue_3_recruit_ticket_pioneer?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_warrior`。 */
  rogue_3_recruit_ticket_warrior?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_tank`。 */
  rogue_3_recruit_ticket_tank?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_sniper`。 */
  rogue_3_recruit_ticket_sniper?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_caster`。 */
  rogue_3_recruit_ticket_caster?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_support`。 */
  rogue_3_recruit_ticket_support?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_medic`。 */
  rogue_3_recruit_ticket_medic?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_special`。 */
  rogue_3_recruit_ticket_special?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_pioneer_sp`。 */
  rogue_3_recruit_ticket_pioneer_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_warrior_sp`。 */
  rogue_3_recruit_ticket_warrior_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_tank_sp`。 */
  rogue_3_recruit_ticket_tank_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_sniper_sp`。 */
  rogue_3_recruit_ticket_sniper_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_caster_sp`。 */
  rogue_3_recruit_ticket_caster_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_support_sp`。 */
  rogue_3_recruit_ticket_support_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_medic_sp`。 */
  rogue_3_recruit_ticket_medic_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_special_sp`。 */
  rogue_3_recruit_ticket_special_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_pioneer_vip`。 */
  rogue_3_recruit_ticket_pioneer_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_warrior_vip`。 */
  rogue_3_recruit_ticket_warrior_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_tank_vip`。 */
  rogue_3_recruit_ticket_tank_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_sniper_vip`。 */
  rogue_3_recruit_ticket_sniper_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_caster_vip`。 */
  rogue_3_recruit_ticket_caster_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_support_vip`。 */
  rogue_3_recruit_ticket_support_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_medic_vip`。 */
  rogue_3_recruit_ticket_medic_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_special_vip`。 */
  rogue_3_recruit_ticket_special_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_double_1`。 */
  rogue_3_recruit_ticket_double_1?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_double_2`。 */
  rogue_3_recruit_ticket_double_2?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_double_3`。 */
  rogue_3_recruit_ticket_double_3?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_double_4`。 */
  rogue_3_recruit_ticket_double_4?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_quad_melee`。 */
  rogue_3_recruit_ticket_quad_melee?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_quad_ranged`。 */
  rogue_3_recruit_ticket_quad_ranged?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_all`。 */
  rogue_3_recruit_ticket_all?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_5star`。 */
  rogue_3_recruit_ticket_5star?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_all_premium`。 */
  rogue_3_recruit_ticket_all_premium?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_quad_melee_discount`。 */
  rogue_3_recruit_ticket_quad_melee_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_quad_ranged_discount`。 */
  rogue_3_recruit_ticket_quad_ranged_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_all_discount`。 */
  rogue_3_recruit_ticket_all_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_temp_5_up`。 */
  rogue_3_recruit_ticket_temp_5_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_3_recruit_ticket_temp_6_up`。 */
  rogue_3_recruit_ticket_temp_6_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_pioneer`。 */
  rogue_4_recruit_ticket_pioneer?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_warrior`。 */
  rogue_4_recruit_ticket_warrior?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_tank`。 */
  rogue_4_recruit_ticket_tank?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_sniper`。 */
  rogue_4_recruit_ticket_sniper?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_caster`。 */
  rogue_4_recruit_ticket_caster?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_support`。 */
  rogue_4_recruit_ticket_support?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_medic`。 */
  rogue_4_recruit_ticket_medic?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_special`。 */
  rogue_4_recruit_ticket_special?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_pioneer_sp`。 */
  rogue_4_recruit_ticket_pioneer_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_warrior_sp`。 */
  rogue_4_recruit_ticket_warrior_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_tank_sp`。 */
  rogue_4_recruit_ticket_tank_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_sniper_sp`。 */
  rogue_4_recruit_ticket_sniper_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_caster_sp`。 */
  rogue_4_recruit_ticket_caster_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_support_sp`。 */
  rogue_4_recruit_ticket_support_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_medic_sp`。 */
  rogue_4_recruit_ticket_medic_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_special_sp`。 */
  rogue_4_recruit_ticket_special_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_pioneer_vip`。 */
  rogue_4_recruit_ticket_pioneer_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_warrior_vip`。 */
  rogue_4_recruit_ticket_warrior_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_tank_vip`。 */
  rogue_4_recruit_ticket_tank_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_sniper_vip`。 */
  rogue_4_recruit_ticket_sniper_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_caster_vip`。 */
  rogue_4_recruit_ticket_caster_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_support_vip`。 */
  rogue_4_recruit_ticket_support_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_medic_vip`。 */
  rogue_4_recruit_ticket_medic_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_special_vip`。 */
  rogue_4_recruit_ticket_special_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_1`。 */
  rogue_4_recruit_ticket_double_1?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_2`。 */
  rogue_4_recruit_ticket_double_2?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_3`。 */
  rogue_4_recruit_ticket_double_3?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_4`。 */
  rogue_4_recruit_ticket_double_4?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_1_vip`。 */
  rogue_4_recruit_ticket_double_1_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_2_vip`。 */
  rogue_4_recruit_ticket_double_2_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_3_vip`。 */
  rogue_4_recruit_ticket_double_3_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_double_4_vip`。 */
  rogue_4_recruit_ticket_double_4_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_quad_melee`。 */
  rogue_4_recruit_ticket_quad_melee?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_quad_ranged`。 */
  rogue_4_recruit_ticket_quad_ranged?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_all`。 */
  rogue_4_recruit_ticket_all?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_5star`。 */
  rogue_4_recruit_ticket_5star?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_all_premium`。 */
  rogue_4_recruit_ticket_all_premium?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_quad_melee_discount`。 */
  rogue_4_recruit_ticket_quad_melee_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_quad_ranged_discount`。 */
  rogue_4_recruit_ticket_quad_ranged_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_all_discount`。 */
  rogue_4_recruit_ticket_all_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_temp_5_up`。 */
  rogue_4_recruit_ticket_temp_5_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_temp_6_up`。 */
  rogue_4_recruit_ticket_temp_6_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_4_recruit_ticket_temp_6`。 */
  rogue_4_recruit_ticket_temp_6?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer`。 */
  rogue_5_recruit_ticket_pioneer?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior`。 */
  rogue_5_recruit_ticket_warrior?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank`。 */
  rogue_5_recruit_ticket_tank?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper`。 */
  rogue_5_recruit_ticket_sniper?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster`。 */
  rogue_5_recruit_ticket_caster?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support`。 */
  rogue_5_recruit_ticket_support?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic`。 */
  rogue_5_recruit_ticket_medic?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special`。 */
  rogue_5_recruit_ticket_special?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_sp`。 */
  rogue_5_recruit_ticket_pioneer_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_sp`。 */
  rogue_5_recruit_ticket_warrior_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_sp`。 */
  rogue_5_recruit_ticket_tank_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_sp`。 */
  rogue_5_recruit_ticket_sniper_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_sp`。 */
  rogue_5_recruit_ticket_caster_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_sp`。 */
  rogue_5_recruit_ticket_support_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_sp`。 */
  rogue_5_recruit_ticket_medic_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_sp`。 */
  rogue_5_recruit_ticket_special_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_vip`。 */
  rogue_5_recruit_ticket_pioneer_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_vip`。 */
  rogue_5_recruit_ticket_warrior_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_vip`。 */
  rogue_5_recruit_ticket_tank_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_vip`。 */
  rogue_5_recruit_ticket_sniper_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_vip`。 */
  rogue_5_recruit_ticket_caster_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_vip`。 */
  rogue_5_recruit_ticket_support_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_vip`。 */
  rogue_5_recruit_ticket_medic_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_vip`。 */
  rogue_5_recruit_ticket_special_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_1`。 */
  rogue_5_recruit_ticket_double_1?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_2`。 */
  rogue_5_recruit_ticket_double_2?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_3`。 */
  rogue_5_recruit_ticket_double_3?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_4`。 */
  rogue_5_recruit_ticket_double_4?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_1_vip`。 */
  rogue_5_recruit_ticket_double_1_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_2_vip`。 */
  rogue_5_recruit_ticket_double_2_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_3_vip`。 */
  rogue_5_recruit_ticket_double_3_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_4_vip`。 */
  rogue_5_recruit_ticket_double_4_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_melee`。 */
  rogue_5_recruit_ticket_quad_melee?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_ranged`。 */
  rogue_5_recruit_ticket_quad_ranged?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_all`。 */
  rogue_5_recruit_ticket_all?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_5star`。 */
  rogue_5_recruit_ticket_5star?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_all_premium`。 */
  rogue_5_recruit_ticket_all_premium?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_melee_discount`。 */
  rogue_5_recruit_ticket_quad_melee_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_ranged_discount`。 */
  rogue_5_recruit_ticket_quad_ranged_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_all_discount`。 */
  rogue_5_recruit_ticket_all_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_temp_5_up`。 */
  rogue_5_recruit_ticket_temp_5_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_temp_6_up`。 */
  rogue_5_recruit_ticket_temp_6_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_temp_6`。 */
  rogue_5_recruit_ticket_temp_6?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_candle`。 */
  rogue_5_recruit_ticket_pioneer_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_candle`。 */
  rogue_5_recruit_ticket_warrior_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_candle`。 */
  rogue_5_recruit_ticket_tank_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_candle`。 */
  rogue_5_recruit_ticket_sniper_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_candle`。 */
  rogue_5_recruit_ticket_caster_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_candle`。 */
  rogue_5_recruit_ticket_support_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_candle`。 */
  rogue_5_recruit_ticket_medic_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_candle`。 */
  rogue_5_recruit_ticket_special_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_sp_candle`。 */
  rogue_5_recruit_ticket_pioneer_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_sp_candle`。 */
  rogue_5_recruit_ticket_warrior_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_sp_candle`。 */
  rogue_5_recruit_ticket_tank_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_sp_candle`。 */
  rogue_5_recruit_ticket_sniper_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_sp_candle`。 */
  rogue_5_recruit_ticket_caster_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_sp_candle`。 */
  rogue_5_recruit_ticket_support_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_sp_candle`。 */
  rogue_5_recruit_ticket_medic_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_sp_candle`。 */
  rogue_5_recruit_ticket_special_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_vip_candle`。 */
  rogue_5_recruit_ticket_pioneer_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_vip_candle`。 */
  rogue_5_recruit_ticket_warrior_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_vip_candle`。 */
  rogue_5_recruit_ticket_tank_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_vip_candle`。 */
  rogue_5_recruit_ticket_sniper_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_vip_candle`。 */
  rogue_5_recruit_ticket_caster_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_vip_candle`。 */
  rogue_5_recruit_ticket_support_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_vip_candle`。 */
  rogue_5_recruit_ticket_medic_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_vip_candle`。 */
  rogue_5_recruit_ticket_special_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_1_candle`。 */
  rogue_5_recruit_ticket_double_1_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_2_candle`。 */
  rogue_5_recruit_ticket_double_2_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_3_candle`。 */
  rogue_5_recruit_ticket_double_3_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_4_candle`。 */
  rogue_5_recruit_ticket_double_4_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_1_vip_candle`。 */
  rogue_5_recruit_ticket_double_1_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_2_vip_candle`。 */
  rogue_5_recruit_ticket_double_2_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_3_vip_candle`。 */
  rogue_5_recruit_ticket_double_3_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_double_4_vip_candle`。 */
  rogue_5_recruit_ticket_double_4_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_melee_candle`。 */
  rogue_5_recruit_ticket_quad_melee_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_ranged_candle`。 */
  rogue_5_recruit_ticket_quad_ranged_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_all_candle`。 */
  rogue_5_recruit_ticket_all_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_5star_candle`。 */
  rogue_5_recruit_ticket_5star_candle?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_all_premium_candle`。 */
  rogue_5_recruit_ticket_all_premium_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_melee_discount_candle`。 */
  rogue_5_recruit_ticket_quad_melee_discount_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_quad_ranged_discount_candle`。 */
  rogue_5_recruit_ticket_quad_ranged_discount_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_all_discount_candle`。 */
  rogue_5_recruit_ticket_all_discount_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_temp_5_up_candle`。 */
  rogue_5_recruit_ticket_temp_5_up_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_temp_6_up_candle`。 */
  rogue_5_recruit_ticket_temp_6_up_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_temp_6_candle`。 */
  rogue_5_recruit_ticket_temp_6_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_init`。 */
  rogue_5_recruit_ticket_pioneer_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_init`。 */
  rogue_5_recruit_ticket_warrior_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_init`。 */
  rogue_5_recruit_ticket_tank_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_init`。 */
  rogue_5_recruit_ticket_sniper_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_init`。 */
  rogue_5_recruit_ticket_caster_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_init`。 */
  rogue_5_recruit_ticket_support_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_init`。 */
  rogue_5_recruit_ticket_medic_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_init`。 */
  rogue_5_recruit_ticket_special_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_pioneer_vip_init`。 */
  rogue_5_recruit_ticket_pioneer_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_warrior_vip_init`。 */
  rogue_5_recruit_ticket_warrior_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_tank_vip_init`。 */
  rogue_5_recruit_ticket_tank_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_sniper_vip_init`。 */
  rogue_5_recruit_ticket_sniper_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_caster_vip_init`。 */
  rogue_5_recruit_ticket_caster_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_support_vip_init`。 */
  rogue_5_recruit_ticket_support_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_medic_vip_init`。 */
  rogue_5_recruit_ticket_medic_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_special_vip_init`。 */
  rogue_5_recruit_ticket_special_vip_init?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_5_recruit_ticket_only_candle`。 */
  rogue_5_recruit_ticket_only_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_pioneer`。 */
  rogue_6_recruit_ticket_pioneer?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_warrior`。 */
  rogue_6_recruit_ticket_warrior?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_tank`。 */
  rogue_6_recruit_ticket_tank?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_sniper`。 */
  rogue_6_recruit_ticket_sniper?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_caster`。 */
  rogue_6_recruit_ticket_caster?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_support`。 */
  rogue_6_recruit_ticket_support?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_medic`。 */
  rogue_6_recruit_ticket_medic?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_special`。 */
  rogue_6_recruit_ticket_special?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_pioneer_sp`。 */
  rogue_6_recruit_ticket_pioneer_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_warrior_sp`。 */
  rogue_6_recruit_ticket_warrior_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_tank_sp`。 */
  rogue_6_recruit_ticket_tank_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_sniper_sp`。 */
  rogue_6_recruit_ticket_sniper_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_caster_sp`。 */
  rogue_6_recruit_ticket_caster_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_support_sp`。 */
  rogue_6_recruit_ticket_support_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_medic_sp`。 */
  rogue_6_recruit_ticket_medic_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_special_sp`。 */
  rogue_6_recruit_ticket_special_sp?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_pioneer_vip`。 */
  rogue_6_recruit_ticket_pioneer_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_warrior_vip`。 */
  rogue_6_recruit_ticket_warrior_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_tank_vip`。 */
  rogue_6_recruit_ticket_tank_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_sniper_vip`。 */
  rogue_6_recruit_ticket_sniper_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_caster_vip`。 */
  rogue_6_recruit_ticket_caster_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_support_vip`。 */
  rogue_6_recruit_ticket_support_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_medic_vip`。 */
  rogue_6_recruit_ticket_medic_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_special_vip`。 */
  rogue_6_recruit_ticket_special_vip?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_1`。 */
  rogue_6_recruit_ticket_double_1?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_2`。 */
  rogue_6_recruit_ticket_double_2?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_3`。 */
  rogue_6_recruit_ticket_double_3?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_4`。 */
  rogue_6_recruit_ticket_double_4?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_1_vip`。 */
  rogue_6_recruit_ticket_double_1_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_2_vip`。 */
  rogue_6_recruit_ticket_double_2_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_3_vip`。 */
  rogue_6_recruit_ticket_double_3_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_4_vip`。 */
  rogue_6_recruit_ticket_double_4_vip?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_melee`。 */
  rogue_6_recruit_ticket_quad_melee?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_ranged`。 */
  rogue_6_recruit_ticket_quad_ranged?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_all`。 */
  rogue_6_recruit_ticket_all?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star`。 */
  rogue_6_recruit_ticket_5star?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_all_premium`。 */
  rogue_6_recruit_ticket_all_premium?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_melee_discount`。 */
  rogue_6_recruit_ticket_quad_melee_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_ranged_discount`。 */
  rogue_6_recruit_ticket_quad_ranged_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_all_discount`。 */
  rogue_6_recruit_ticket_all_discount?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_temp_5_up`。 */
  rogue_6_recruit_ticket_temp_5_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_temp_6_up`。 */
  rogue_6_recruit_ticket_temp_6_up?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_temp_6`。 */
  rogue_6_recruit_ticket_temp_6?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_1_vip`。 */
  rogue_6_recruit_ticket_5star_double_1_vip?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_2_vip`。 */
  rogue_6_recruit_ticket_5star_double_2_vip?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_3_vip`。 */
  rogue_6_recruit_ticket_5star_double_3_vip?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_4_vip`。 */
  rogue_6_recruit_ticket_5star_double_4_vip?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_pioneer_candle`。 */
  rogue_6_recruit_ticket_pioneer_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_warrior_candle`。 */
  rogue_6_recruit_ticket_warrior_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_tank_candle`。 */
  rogue_6_recruit_ticket_tank_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_sniper_candle`。 */
  rogue_6_recruit_ticket_sniper_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_caster_candle`。 */
  rogue_6_recruit_ticket_caster_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_support_candle`。 */
  rogue_6_recruit_ticket_support_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_medic_candle`。 */
  rogue_6_recruit_ticket_medic_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_special_candle`。 */
  rogue_6_recruit_ticket_special_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_pioneer_sp_candle`。 */
  rogue_6_recruit_ticket_pioneer_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_warrior_sp_candle`。 */
  rogue_6_recruit_ticket_warrior_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_tank_sp_candle`。 */
  rogue_6_recruit_ticket_tank_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_sniper_sp_candle`。 */
  rogue_6_recruit_ticket_sniper_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_caster_sp_candle`。 */
  rogue_6_recruit_ticket_caster_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_support_sp_candle`。 */
  rogue_6_recruit_ticket_support_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_medic_sp_candle`。 */
  rogue_6_recruit_ticket_medic_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_special_sp_candle`。 */
  rogue_6_recruit_ticket_special_sp_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_pioneer_vip_candle`。 */
  rogue_6_recruit_ticket_pioneer_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_warrior_vip_candle`。 */
  rogue_6_recruit_ticket_warrior_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_tank_vip_candle`。 */
  rogue_6_recruit_ticket_tank_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_sniper_vip_candle`。 */
  rogue_6_recruit_ticket_sniper_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_caster_vip_candle`。 */
  rogue_6_recruit_ticket_caster_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_support_vip_candle`。 */
  rogue_6_recruit_ticket_support_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_medic_vip_candle`。 */
  rogue_6_recruit_ticket_medic_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_special_vip_candle`。 */
  rogue_6_recruit_ticket_special_vip_candle?: Rogue1_RecruitTicketCasterClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_1_candle`。 */
  rogue_6_recruit_ticket_double_1_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_2_candle`。 */
  rogue_6_recruit_ticket_double_2_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_3_candle`。 */
  rogue_6_recruit_ticket_double_3_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_4_candle`。 */
  rogue_6_recruit_ticket_double_4_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_1_vip_candle`。 */
  rogue_6_recruit_ticket_double_1_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_2_vip_candle`。 */
  rogue_6_recruit_ticket_double_2_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_3_vip_candle`。 */
  rogue_6_recruit_ticket_double_3_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_double_4_vip_candle`。 */
  rogue_6_recruit_ticket_double_4_vip_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_melee_candle`。 */
  rogue_6_recruit_ticket_quad_melee_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_ranged_candle`。 */
  rogue_6_recruit_ticket_quad_ranged_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_all_candle`。 */
  rogue_6_recruit_ticket_all_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_candle`。 */
  rogue_6_recruit_ticket_5star_candle?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_all_premium_candle`。 */
  rogue_6_recruit_ticket_all_premium_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_melee_discount_candle`。 */
  rogue_6_recruit_ticket_quad_melee_discount_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_quad_ranged_discount_candle`。 */
  rogue_6_recruit_ticket_quad_ranged_discount_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_all_discount_candle`。 */
  rogue_6_recruit_ticket_all_discount_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_temp_5_up_candle`。 */
  rogue_6_recruit_ticket_temp_5_up_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_temp_6_up_candle`。 */
  rogue_6_recruit_ticket_temp_6_up_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_temp_6_candle`。 */
  rogue_6_recruit_ticket_temp_6_candle?: Rogue1_RecruitTicketAllClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_1_vip_candle`。 */
  rogue_6_recruit_ticket_5star_double_1_vip_candle?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_2_vip_candle`。 */
  rogue_6_recruit_ticket_5star_double_2_vip_candle?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_3_vip_candle`。 */
  rogue_6_recruit_ticket_5star_double_3_vip_candle?: Rogue1_RecruitTicket5StarClass;
  /** 原始数据字段 `rogue_6_recruit_ticket_5star_double_4_vip_candle`。 */
  rogue_6_recruit_ticket_5star_double_4_vip_candle?: Rogue1_RecruitTicket5StarClass;
}

/**
 * roguelike_topic_table.json 中 Rogue1_RecruitTicket5StarClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue1_RecruitTicket5StarClass {
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
  /** 原始数据字段 `extraEliteNum`。 */
  extraEliteNum: number;
  /** 原始数据字段 `extraFreeRarity`。 */
  extraFreeRarity: never[];
  /** 原始数据字段 `extraCharIds`。 */
  extraCharIds: ExtraCharId[];
}

/**
 * roguelike_topic_table.json 中 Rogue1_RecruitTicketAllClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue1_RecruitTicketAllClass {
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
  /** 原始数据字段 `extraEliteNum`。 */
  extraEliteNum: number;
  /** 原始数据字段 `extraFreeRarity`。 */
  extraFreeRarity: never[];
  /** 原始数据字段 `extraCharIds`。 */
  extraCharIds: ExtraCharId[];
}

/**
 * roguelike_topic_table.json 中 Rogue1_RecruitTicketCasterClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue1_RecruitTicketCasterClass {
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
  /** 原始数据字段 `extraEliteNum`。 */
  extraEliteNum: number;
  /** 原始数据字段 `extraFreeRarity`。 */
  extraFreeRarity: RarityList[];
  /** 原始数据字段 `extraCharIds`。 */
  extraCharIds: ExtraCharId[];
}
