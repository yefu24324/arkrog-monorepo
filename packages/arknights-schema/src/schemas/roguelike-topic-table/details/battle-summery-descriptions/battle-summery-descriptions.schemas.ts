/**

 * JSON 逻辑模块 `details/battle-summery-descriptions/battle-summery-descriptions` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BattleSummeryDescriptions,
  ChallengeClass,
} from "../../../../types/roguelike-topic-table/details/battle-summery-descriptions/battle-summery-descriptions.types.js";

/**
 * roguelike_topic_table.json 中 ChallengeClass 的运行时校验结构。
 */
export const ChallengeClassSchema = z
  .strictObject({
    randomDescriptionList: z.array(z.string()),
  })
  .describe(
    "roguelike_topic_table.json 中 ChallengeClass 的运行时校验结构。",
  ) satisfies z.ZodType<ChallengeClass>;

/**
 * roguelike_topic_table.json 中 BattleSummeryDescriptions 的运行时校验结构。
 */
export const BattleSummeryDescriptionsSchema = z
  .strictObject({
    EASY: ChallengeClassSchema,
    NORMAL: ChallengeClassSchema,
    HARD: ChallengeClassSchema,
    MONTH_TEAM: ChallengeClassSchema,
    CHALLENGE: ChallengeClassSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BattleSummeryDescriptions 的运行时校验结构。",
  ) satisfies z.ZodType<BattleSummeryDescriptions>;
