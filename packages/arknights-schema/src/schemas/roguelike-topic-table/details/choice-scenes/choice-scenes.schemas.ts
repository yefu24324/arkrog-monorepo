/**

 * JSON 逻辑模块 `details/choice-scenes/choice-scenes` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ChoiceScene,
  TitleIcon,
} from "../../../../types/roguelike-topic-table/details/choice-scenes/choice-scenes.types.js";

/**
 * roguelike_topic_table.json 中 TitleIcon 的运行时校验结构。
 */
export const TitleIconSchema = z
  .enum(["title_icon_task", "title_icon_task_reward", ""])
  .describe(
    "roguelike_topic_table.json 中 TitleIcon 的运行时校验结构。",
  ) satisfies z.ZodType<TitleIcon>;

/**
 * roguelike_topic_table.json 中 ChoiceScene 的运行时校验结构。
 */
export const ChoiceSceneSchema = z
  .strictObject({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    background: z.union([z.null(), z.string()]),
    titleIcon: z.union([TitleIconSchema, z.null()]),
    subTypeId: z.number(),
    useHiddenMusic: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 ChoiceScene 的运行时校验结构。",
  ) satisfies z.ZodType<ChoiceScene>;
