/**

 * JSON 逻辑模块 `details/band-ref/band-ref` 的 Zod Schema。

 */

import { z } from "zod";

import type { BandRef } from "../../../../types/roguelike-topic-table/details/band-ref/band-ref.types.js";

/**
 * roguelike_topic_table.json 中 BandRef 的运行时校验结构。
 */
export const BandRefSchema = z
  .strictObject({
    itemId: z.string(),
    bandLevel: z.number(),
    normalBandId: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 BandRef 的运行时校验结构。",
  ) satisfies z.ZodType<BandRef>;
