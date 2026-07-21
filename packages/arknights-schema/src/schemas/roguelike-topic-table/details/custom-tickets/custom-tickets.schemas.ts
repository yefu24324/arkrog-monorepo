/**

 * JSON 逻辑模块 `details/custom-tickets/custom-tickets` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CustomTickets,
  Rogue2_CustomTicketPurifyClass,
} from "../../../../types/roguelike-topic-table/details/custom-tickets/custom-tickets.types.js";

/**
 * roguelike_topic_table.json 中 Rogue2_CustomTicketPurifyClass 的运行时校验结构。
 */
export const Rogue2_CustomTicketPurifyClassSchema = z
  .strictObject({
    id: z.string(),
    subType: z.string(),
    discardText: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue2_CustomTicketPurifyClass 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue2_CustomTicketPurifyClass>;

/**
 * roguelike_topic_table.json 中 CustomTickets 的运行时校验结构。
 */
export const CustomTicketsSchema = z
  .strictObject({
    rogue_2_custom_ticket_purify:
      Rogue2_CustomTicketPurifyClassSchema.optional(),
    rogue_5_recruit_ticket_only_candle:
      Rogue2_CustomTicketPurifyClassSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 CustomTickets 的运行时校验结构。",
  ) satisfies z.ZodType<CustomTickets>;
