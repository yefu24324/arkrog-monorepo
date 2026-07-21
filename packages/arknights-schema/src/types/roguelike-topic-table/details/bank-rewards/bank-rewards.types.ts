/**

 * JSON 逻辑模块 `details/bank-rewards/bank-rewards` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 BankReward 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface BankReward {
  /** 原始数据字段 `rewardId`。 */
  rewardId: RewardId;
  /** 原始数据字段 `unlockGoldCnt`。 */
  unlockGoldCnt: number;
  /** 原始数据字段 `rewardType`。 */
  rewardType: RewardType;
  /** 原始数据字段 `desc`。 */
  desc: string;
}

/**
 * roguelike_topic_table.json 中 RewardId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type RewardId =
  | "bank_reward_5"
  | "bank_reward_4"
  | "bank_reward_3"
  | "bank_reward_2"
  | "bank_reward_1";

/**
 * roguelike_topic_table.json 中 RewardType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type RewardType =
  "ADD_SHOP_POS" | "UNLOCK_ITEM" | "UNLOCK_WITHDRAW" | "UNLOCK_SHOP_BATTLE";
