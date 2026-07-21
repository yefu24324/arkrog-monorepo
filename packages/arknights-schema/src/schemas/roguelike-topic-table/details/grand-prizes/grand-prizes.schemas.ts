/**

 * JSON 逻辑模块 `details/grand-prizes/grand-prizes` 的 Zod Schema。

 */

import { z } from "zod";

import type { GrandPrize } from "../../../../types/roguelike-topic-table/details/grand-prizes/grand-prizes.types.js";

import { RewardSchema } from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 GrandPrize 的运行时校验结构。
 */
export const GrandPrizeSchema = z
  .strictObject({
    grandPrizeDisplayId: z.string(),
    sortId: z.number(),
    displayUnlockYear: z.number(),
    displayUnlockMonth: z.number(),
    acquireTitle: z.string(),
    purchaseTitle: z.string(),
    displayName: z.string(),
    displayDiscription: z.string(),
    bpLevelId: z.string(),
    itemBundle: z.union([RewardSchema, z.null()]),
    detailAnnounceTime: z.union([z.null(), z.string()]),
    picIdAftrerUnlock: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 GrandPrize 的运行时校验结构。",
  ) satisfies z.ZodType<GrandPrize>;
