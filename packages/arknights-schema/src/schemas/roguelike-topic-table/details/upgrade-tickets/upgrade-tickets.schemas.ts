/**

 * JSON 逻辑模块 `details/upgrade-tickets/upgrade-tickets` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Rogue1_UpgradeTicket5StarClass,
  Rogue1_UpgradeTicketAllClass,
  Rogue1_UpgradeTicketCasterClass,
  UpgradeTickets,
} from "../../../../types/roguelike-topic-table/details/upgrade-tickets/upgrade-tickets.types.js";

import { CategorySchema } from "../../shared/common-enums.schemas.js";

import {
  ProfessionSchema,
  RarityListSchema,
} from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 Rogue1_UpgradeTicket5StarClass 的运行时校验结构。
 */
export const Rogue1_UpgradeTicket5StarClassSchema = z
  .strictObject({
    id: z.string(),
    profession: z.number(),
    rarity: z.number(),
    professionList: z.array(ProfessionSchema),
    rarityList: z.array(RarityListSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue1_UpgradeTicket5StarClass 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue1_UpgradeTicket5StarClass>;

/**
 * roguelike_topic_table.json 中 Rogue1_UpgradeTicketAllClass 的运行时校验结构。
 */
export const Rogue1_UpgradeTicketAllClassSchema = z
  .strictObject({
    id: z.string(),
    profession: z.number(),
    rarity: CategorySchema,
    professionList: z.array(ProfessionSchema),
    rarityList: z.array(RarityListSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue1_UpgradeTicketAllClass 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue1_UpgradeTicketAllClass>;

/**
 * roguelike_topic_table.json 中 Rogue1_UpgradeTicketCasterClass 的运行时校验结构。
 */
export const Rogue1_UpgradeTicketCasterClassSchema = z
  .strictObject({
    id: z.string(),
    profession: ProfessionSchema,
    rarity: CategorySchema,
    professionList: z.array(ProfessionSchema),
    rarityList: z.array(RarityListSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue1_UpgradeTicketCasterClass 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue1_UpgradeTicketCasterClass>;

/**
 * roguelike_topic_table.json 中 UpgradeTickets 的运行时校验结构。
 */
export const UpgradeTicketsSchema = z
  .strictObject({
    rogue_1_upgrade_ticket_all: Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_1_upgrade_ticket_5star:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_1_upgrade_ticket_pioneer:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_warrior:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_tank:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_sniper:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_caster:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_support:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_medic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_1_upgrade_ticket_special:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_all: Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_2_upgrade_ticket_5star:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_2_upgrade_ticket_pioneer:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_warrior:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_tank:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_sniper:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_caster:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_support:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_medic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_2_upgrade_ticket_special:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_all: Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_3_upgrade_ticket_5star:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_3_upgrade_ticket_pioneer:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_warrior:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_tank:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_sniper:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_caster:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_support:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_medic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_3_upgrade_ticket_special:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_all: Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_4_upgrade_ticket_5star:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_4_upgrade_ticket_pioneer:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_warrior:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_tank:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_sniper:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_caster:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_support:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_medic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_4_upgrade_ticket_special:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_all: Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_5_upgrade_ticket_5star:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_5_upgrade_ticket_pioneer:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_warrior:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_tank:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_sniper:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_caster:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_support:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_medic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_special:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_all_candle:
      Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_5_upgrade_ticket_5star_candle:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_5_upgrade_ticket_pioneer_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_warrior_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_tank_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_sniper_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_caster_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_support_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_medic_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_5_upgrade_ticket_special_candle:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_all: Rogue1_UpgradeTicketAllClassSchema.optional(),
    rogue_6_upgrade_ticket_5star:
      Rogue1_UpgradeTicket5StarClassSchema.optional(),
    rogue_6_upgrade_ticket_pioneer:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_warrior:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_tank:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_sniper:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_caster:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_support:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_medic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_special:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_pioneer_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_warrior_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_tank_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_sniper_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_caster_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_support_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_medic_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
    rogue_6_upgrade_ticket_special_from_relic:
      Rogue1_UpgradeTicketCasterClassSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 UpgradeTickets 的运行时校验结构。",
  ) satisfies z.ZodType<UpgradeTickets>;
