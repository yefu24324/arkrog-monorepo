/**

 * JSON 逻辑模块 `customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CustomizeDatumDevelopmentsDifficultyNodeInfos,
  Rogue3_Difficulty1_NodeMap,
  Rogue3__Difficulty,
} from "../../../../types/roguelike-topic-table/customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos.types.js";

/**
 * roguelike_topic_table.json 中 Rogue3_Difficulty1_NodeMap 的运行时校验结构。
 */
export const Rogue3_Difficulty1_NodeMapSchema = z
  .strictObject({
    frontNode: z.string(),
    nextNode: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue3_Difficulty1_NodeMap 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue3_Difficulty1_NodeMap>;

/**
 * roguelike_topic_table.json 中 Rogue3__Difficulty 的运行时校验结构。
 */
export const Rogue3__DifficultySchema = z
  .strictObject({
    buffId: z.string(),
    nodeMap: z.array(Rogue3_Difficulty1_NodeMapSchema),
    enableGrade: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue3__Difficulty 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue3__Difficulty>;

/**
 * roguelike_topic_table.json 中 CustomizeDatumDevelopmentsDifficultyNodeInfos 的运行时校验结构。
 */
export const CustomizeDatumDevelopmentsDifficultyNodeInfosSchema = z
  .strictObject({
    rogue_3_difficulty_1: Rogue3__DifficultySchema,
    rogue_3_difficulty_2: Rogue3__DifficultySchema,
    rogue_3_difficulty_3: Rogue3__DifficultySchema,
  })
  .describe(
    "roguelike_topic_table.json 中 CustomizeDatumDevelopmentsDifficultyNodeInfos 的运行时校验结构。",
  ) satisfies z.ZodType<CustomizeDatumDevelopmentsDifficultyNodeInfos>;
