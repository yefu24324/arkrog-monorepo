/**

 * JSON 逻辑模块 `details/zones/zones` 的 Zod Schema。

 */

import { z } from "zod";

import type { ZoneValue } from "../../../../types/roguelike-topic-table/details/zones/zones.types.js";

import { BgmSignalSchema } from "../../shared/core.schemas.js";

/**
 * roguelike_topic_table.json 中 ZoneValue 的运行时校验结构。
 */
export const ZoneValueSchema = z
  .strictObject({
    id: z.string(),
    name: z.string(),
    clockPerformance: z.union([z.null(), z.string()]),
    displayTime: z.union([z.null(), z.string()]),
    description: z.string(),
    buffDescription: z.union([z.null(), z.string()]),
    endingDescription: z.string(),
    backgroundId: z.string(),
    zoneIconId: z.string(),
    isHiddenZone: z.boolean(),
    bgmSignal: BgmSignalSchema,
    bgmSignalWithLowSan: z.union([z.null(), z.string()]),
    transitionEffectId: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 ZoneValue 的运行时校验结构。",
  ) satisfies z.ZodType<ZoneValue>;
