/**

 * JSON 逻辑模块 `details/month-mission/month-mission` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  MonthMission,
  TaskClass,
} from "../../../../types/roguelike-topic-table/details/month-mission/month-mission.types.js";

/**
 * roguelike_topic_table.json 中 TaskClass 的运行时校验结构。
 */
export const TaskClassSchema = z
  .enum(["C", "B", "A"])
  .describe(
    "roguelike_topic_table.json 中 TaskClass 的运行时校验结构。",
  ) satisfies z.ZodType<TaskClass>;

/**
 * roguelike_topic_table.json 中 MonthMission 的运行时校验结构。
 */
export const MonthMissionSchema = z
  .strictObject({
    id: z.string(),
    taskName: z.string(),
    taskClass: TaskClassSchema,
    innerClassWeight: z.number(),
    template: z.string(),
    paramList: z.array(z.string()),
    desc: z.string(),
    tokenRewardNum: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 MonthMission 的运行时校验结构。",
  ) satisfies z.ZodType<MonthMission>;
