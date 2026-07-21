/**

 * JSON 逻辑模块 `details/challenges/challenges` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ChallengeElement,
  ChallengeTask,
} from "../../../../types/roguelike-topic-table/details/challenges/challenges.types.js";

import { RewardSchema } from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 ChallengeTask 的运行时校验结构。
 */
export const ChallengeTaskSchema = z
  .strictObject({
    taskId: z.string(),
    taskDes: z.string(),
    completionClass: z.string(),
    completionParams: z.array(z.string()),
  })
  .describe(
    "roguelike_topic_table.json 中 ChallengeTask 的运行时校验结构。",
  ) satisfies z.ZodType<ChallengeTask>;

/**
 * roguelike_topic_table.json 中 ChallengeElement 的运行时校验结构。
 */
export const ChallengeElementSchema = z
  .strictObject({
    challengeId: z.string(),
    sortId: z.number(),
    challengeName: z.string(),
    challengeGroup: z.number(),
    challengeGroupSortId: z.number(),
    challengeGroupName: z.union([z.null(), z.string()]),
    challengeUnlockDesc: z.union([z.null(), z.string()]),
    challengeUnlockToastDesc: z.union([z.null(), z.string()]),
    challengeDes: z.string(),
    challengeConditionDes: z.array(z.string()),
    challengeTasks: z.record(z.string(), ChallengeTaskSchema),
    defaultTaskId: z.string(),
    rewards: z.array(RewardSchema),
    challengeStoryId: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 ChallengeElement 的运行时校验结构。",
  ) satisfies z.ZodType<ChallengeElement>;
