/**

 * JSON 逻辑模块 `details/bank-rewards/bank-rewards` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BankReward,
  RewardId,
  RewardType,
} from "../../../../types/roguelike-topic-table/details/bank-rewards/bank-rewards.types.js";

/**
 * roguelike_topic_table.json 中 RewardId 的运行时校验结构。
 */
export const RewardIdSchema = z
  .enum([
    "bank_reward_5",
    "bank_reward_4",
    "bank_reward_3",
    "bank_reward_2",
    "bank_reward_1",
  ])
  .describe(
    "roguelike_topic_table.json 中 RewardId 的运行时校验结构。",
  ) satisfies z.ZodType<RewardId>;

/**
 * roguelike_topic_table.json 中 RewardType 的运行时校验结构。
 */
export const RewardTypeSchema = z
  .enum([
    "ADD_SHOP_POS",
    "UNLOCK_ITEM",
    "UNLOCK_WITHDRAW",
    "UNLOCK_SHOP_BATTLE",
  ])
  .describe(
    "roguelike_topic_table.json 中 RewardType 的运行时校验结构。",
  ) satisfies z.ZodType<RewardType>;

/**
 * roguelike_topic_table.json 中 BankReward 的运行时校验结构。
 */
export const BankRewardSchema = z
  .strictObject({
    rewardId: RewardIdSchema,
    unlockGoldCnt: z.number(),
    rewardType: RewardTypeSchema,
    desc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 BankReward 的运行时校验结构。",
  ) satisfies z.ZodType<BankReward>;
