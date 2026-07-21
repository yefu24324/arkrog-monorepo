/**

 * JSON 逻辑模块 `details/challenges/challenges` 的显式类型。

 */

import type { Reward } from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 ChallengeElement 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ChallengeElement {
  /** 原始数据字段 `challengeId`。 */
  challengeId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `challengeName`。 */
  challengeName: string;
  /** 原始数据字段 `challengeGroup`。 */
  challengeGroup: number;
  /** 原始数据字段 `challengeGroupSortId`。 */
  challengeGroupSortId: number;
  /** 原始数据字段 `challengeGroupName`。 */
  challengeGroupName: null | string;
  /** 原始数据字段 `challengeUnlockDesc`。 */
  challengeUnlockDesc: null | string;
  /** 原始数据字段 `challengeUnlockToastDesc`。 */
  challengeUnlockToastDesc: null | string;
  /** 原始数据字段 `challengeDes`。 */
  challengeDes: string;
  /** 原始数据字段 `challengeConditionDes`。 */
  challengeConditionDes: string[];
  /** 原始数据字段 `challengeTasks`。 */
  challengeTasks: { [key: string]: ChallengeTask };
  /** 原始数据字段 `defaultTaskId`。 */
  defaultTaskId: string;
  /** 原始数据字段 `rewards`。 */
  rewards: Reward[];
  /** 原始数据字段 `challengeStoryId`。 */
  challengeStoryId: null | string;
}

/**
 * roguelike_topic_table.json 中 ChallengeTask 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ChallengeTask {
  /** 原始数据字段 `taskId`。 */
  taskId: string;
  /** 原始数据字段 `taskDes`。 */
  taskDes: string;
  /** 原始数据字段 `completionClass`。 */
  completionClass: string;
  /** 原始数据字段 `completionParams`。 */
  completionParams: string[];
}
