/**

 * JSON 逻辑模块 `details/task-data/task-data` 的显式类型。

 */

import type { Rarity } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 RewardSceneId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type RewardSceneId =
  | "scene_ro2_taskreward3_enter"
  | "scene_ro2_taskreward2_enter"
  | "scene_ro2_taskreward1_enter";

/**
 * roguelike_topic_table.json 中 TaskDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface TaskDatum {
  /** 原始数据字段 `taskId`。 */
  taskId: string;
  /** 原始数据字段 `taskName`。 */
  taskName: string;
  /** 原始数据字段 `taskDesc`。 */
  taskDesc: string;
  /** 原始数据字段 `rewardSceneId`。 */
  rewardSceneId: RewardSceneId;
  /** 原始数据字段 `taskRarity`。 */
  taskRarity: Rarity;
}
