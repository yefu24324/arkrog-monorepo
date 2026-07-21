/**

 * JSON 逻辑模块 `details/stashable-tickets/stashable-tickets` 的 Zod Schema。

 */

import { z } from "zod";

import type { StashableTicket } from "../../../../types/roguelike-topic-table/details/stashable-tickets/stashable-tickets.types.js";

/**
 * roguelike_topic_table.json 中 StashableTicket 的运行时校验结构。
 */
export const StashableTicketSchema = z
  .strictObject({
    ticketId: z.string(),
    stashedTicketId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 StashableTicket 的运行时校验结构。",
  ) satisfies z.ZodType<StashableTicket>;
