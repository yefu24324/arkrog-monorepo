/**

 * JSON 逻辑模块 `modules/candle/candle` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Candle,
  CandleModuleConsts,
} from "../../../../types/roguelike-topic-table/modules/candle/candle.types.js";

/**
 * roguelike_topic_table.json 中 CandleModuleConsts 的运行时校验结构。
 */
export const CandleModuleConstsSchema = z
  .strictObject({
    candleHolderBuffId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 CandleModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<CandleModuleConsts>;

/**
 * roguelike_topic_table.json 中 Candle 的运行时校验结构。
 */
export const CandleSchema = z
  .strictObject({
    candleTicketIdList: z.array(z.string()),
    moduleConsts: CandleModuleConstsSchema,
    candleBattleStageIdList: z.array(z.string()),
  })
  .describe(
    "roguelike_topic_table.json 中 Candle 的运行时校验结构。",
  ) satisfies z.ZodType<Candle>;
