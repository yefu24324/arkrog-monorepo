/**

 * JSON 逻辑模块 `details/task-data/task-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  RewardSceneId,
  TaskDatum,
} from "../../../../types/roguelike-topic-table/details/task-data/task-data.types.js";

import { RaritySchema } from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 RewardSceneId 的运行时校验结构。
 */
export const RewardSceneIdSchema = z
  .enum([
    "scene_ro2_taskreward3_enter",
    "scene_ro2_taskreward2_enter",
    "scene_ro2_taskreward1_enter",
  ])
  .describe(
    "roguelike_topic_table.json 中 RewardSceneId 的运行时校验结构。",
  ) satisfies z.ZodType<RewardSceneId>;

/**
 * roguelike_topic_table.json 中 TaskDatum 的运行时校验结构。
 */
export const TaskDatumSchema = z
  .strictObject({
    taskId: z.string(),
    taskName: z.string(),
    taskDesc: z.string(),
    rewardSceneId: RewardSceneIdSchema,
    taskRarity: RaritySchema,
  })
  .describe(
    "roguelike_topic_table.json 中 TaskDatum 的运行时校验结构。",
  ) satisfies z.ZodType<TaskDatum>;
