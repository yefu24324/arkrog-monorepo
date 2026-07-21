/**

 * JSON 逻辑模块 `customize-data/common-development/common-development` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CommonDevelopment,
  CommonDevelopmentDevelopmentRawTextGroup,
  CommonDevelopmentDevelopmentsDifficultyNodeInfos,
  GroupIconId,
  Rogue4_Difficulty1_Class,
  Rogue4_Difficulty1_NodeMap,
} from "../../../../types/roguelike-topic-table/customize-data/common-development/common-development.types.js";

import { DevelopmentTokenSchema } from "../../shared/buffs.schemas.js";

import { Rogue3__Difficulty1Schema } from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 GroupIconId 的运行时校验结构。
 */
export const GroupIconIdSchema = z
  .enum([
    "img_summary_node_lock",
    "img_summary_node_teamenhance",
    "img_summary_node_fragment",
    "img_summary_node_teamupgrade",
  ])
  .describe(
    "roguelike_topic_table.json 中 GroupIconId 的运行时校验结构。",
  ) satisfies z.ZodType<GroupIconId>;

/**
 * roguelike_topic_table.json 中 Rogue4_Difficulty1_NodeMap 的运行时校验结构。
 */
export const Rogue4_Difficulty1_NodeMapSchema = z
  .strictObject({
    frontNodes: z.array(z.string()),
    nextNode: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue4_Difficulty1_NodeMap 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue4_Difficulty1_NodeMap>;

/**
 * roguelike_topic_table.json 中 CommonDevelopmentDevelopmentRawTextGroup 的运行时校验结构。
 */
export const CommonDevelopmentDevelopmentRawTextGroupSchema = z
  .strictObject({
    nodeIdList: z.array(z.string()),
    groupIconId: GroupIconIdSchema,
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 CommonDevelopmentDevelopmentRawTextGroup 的运行时校验结构。",
  ) satisfies z.ZodType<CommonDevelopmentDevelopmentRawTextGroup>;

/**
 * roguelike_topic_table.json 中 Rogue4_Difficulty1_Class 的运行时校验结构。
 */
export const Rogue4_Difficulty1_ClassSchema = z
  .strictObject({
    buffId: z.string(),
    nodeMap: z.array(Rogue4_Difficulty1_NodeMapSchema),
    enableGrade: z.number(),
    enableDesc: z.string(),
    lightId: z.string(),
    decoId: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rogue4_Difficulty1_Class 的运行时校验结构。",
  ) satisfies z.ZodType<Rogue4_Difficulty1_Class>;

/**
 * roguelike_topic_table.json 中 CommonDevelopmentDevelopmentsDifficultyNodeInfos 的运行时校验结构。
 */
export const CommonDevelopmentDevelopmentsDifficultyNodeInfosSchema = z
  .strictObject({
    rogue_4_difficulty_1: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_4_difficulty_2: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_4_difficulty_3: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_5_difficulty_1: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_5_difficulty_2: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_5_difficulty_3: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_6_difficulty_1: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_6_difficulty_2: Rogue4_Difficulty1_ClassSchema.optional(),
    rogue_6_difficulty_3: Rogue4_Difficulty1_ClassSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 CommonDevelopmentDevelopmentsDifficultyNodeInfos 的运行时校验结构。",
  ) satisfies z.ZodType<CommonDevelopmentDevelopmentsDifficultyNodeInfos>;

/**
 * roguelike_topic_table.json 中 CommonDevelopment 的运行时校验结构。
 */
export const CommonDevelopmentSchema = z
  .strictObject({
    developments: z.record(z.string(), Rogue3__Difficulty1Schema),
    developmentsTokens: z.record(z.string(), DevelopmentTokenSchema),
    developmentRawTextGroup: z.array(
      CommonDevelopmentDevelopmentRawTextGroupSchema,
    ),
    developmentsDifficultyNodeInfos:
      CommonDevelopmentDevelopmentsDifficultyNodeInfosSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 CommonDevelopment 的运行时校验结构。",
  ) satisfies z.ZodType<CommonDevelopment>;
