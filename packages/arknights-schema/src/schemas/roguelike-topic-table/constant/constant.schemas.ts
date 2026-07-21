/**

 * JSON 逻辑模块 `constant/constant` 的 Zod Schema。

 */

import { z } from "zod";

import type { Constant } from "../../../types/roguelike-topic-table/constant/constant.types.js";

import { PredefinedCharSchema } from "./predefined-chars/predefined-chars.schemas.js";

/**
 * roguelike_topic_table.json 中 Constant 的运行时校验结构。
 */
export const ConstantSchema = z
  .strictObject({
    milestoneTokenRatio: z.number(),
    outerBuffTokenRatio: z.number(),
    relicTokenRatio: z.number(),
    rogueSystemUnlockStage: z.string(),
    ordiModeReOpenCoolDown: z.number(),
    monthModeReOpenCoolDown: z.number(),
    monthlyTaskUncompletedTime: z.number(),
    monthlyTaskManualRefreshLimit: z.number(),
    monthlyTeamUncompletedTime: z.number(),
    bpPurchaseSystemUnlockTime: z.number(),
    predefinedChars: z.record(z.string(), PredefinedCharSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Constant 的运行时校验结构。",
  ) satisfies z.ZodType<Constant>;
