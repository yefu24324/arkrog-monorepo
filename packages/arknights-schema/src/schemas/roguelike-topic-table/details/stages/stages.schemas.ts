/**

 * JSON 逻辑模块 `details/stages/stages` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CapsulePool,
  Code,
  DifficultyEnum,
  LoadingPicId,
  RedCapsulePool,
  Stage,
} from "../../../../types/roguelike-topic-table/details/stages/stages.types.js";

/**
 * roguelike_topic_table.json 中 CapsulePool 的运行时校验结构。
 */
export const CapsulePoolSchema = z
  .literal("pool_capsule_default")
  .describe(
    "roguelike_topic_table.json 中 CapsulePool 的运行时校验结构。",
  ) satisfies z.ZodType<CapsulePool>;

/**
 * roguelike_topic_table.json 中 Code 的运行时校验结构。
 */
export const CodeSchema = z
  .enum(["ISW-NO", "ISW-DF", "ISW-DU", "ISW-SP", " "])
  .describe(
    "roguelike_topic_table.json 中 Code 的运行时校验结构。",
  ) satisfies z.ZodType<Code>;

/**
 * roguelike_topic_table.json 中 DifficultyEnum 的运行时校验结构。
 */
export const DifficultyEnumSchema = z
  .enum(["NORMAL", "FOUR_STAR"])
  .describe(
    "roguelike_topic_table.json 中 DifficultyEnum 的运行时校验结构。",
  ) satisfies z.ZodType<DifficultyEnum>;

/**
 * roguelike_topic_table.json 中 LoadingPicId 的运行时校验结构。
 */
export const LoadingPicIdSchema = z
  .enum([
    "loading_PCS",
    "loading_SY",
    "loading_SM_RL",
    "loading_SKZ_RL",
    "loading_SUI_RL",
    "loading_HLSH_RL",
  ])
  .describe(
    "roguelike_topic_table.json 中 LoadingPicId 的运行时校验结构。",
  ) satisfies z.ZodType<LoadingPicId>;

/**
 * roguelike_topic_table.json 中 RedCapsulePool 的运行时校验结构。
 */
export const RedCapsulePoolSchema = z
  .literal("pool_capsule_red")
  .describe(
    "roguelike_topic_table.json 中 RedCapsulePool 的运行时校验结构。",
  ) satisfies z.ZodType<RedCapsulePool>;

/**
 * roguelike_topic_table.json 中 Stage 的运行时校验结构。
 */
export const StageSchema = z
  .strictObject({
    id: z.string(),
    linkedStageId: z.string(),
    levelId: z.string(),
    levelReplaceIds: z.array(z.string()),
    code: CodeSchema,
    name: z.string(),
    loadingPicId: LoadingPicIdSchema,
    description: z.string(),
    eliteDesc: z.union([z.null(), z.string()]),
    isBoss: z.number(),
    isElite: z.number(),
    difficulty: DifficultyEnumSchema,
    capsulePool: z.union([CapsulePoolSchema, z.null()]),
    capsuleProb: z.number(),
    vutresProb: z.array(z.number()),
    boxProb: z.array(z.number()),
    specialNodeId: z.union([z.null(), z.string()]),
    redCapsulePool: z.union([RedCapsulePoolSchema, z.null()]),
    redCapsuleProb: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Stage 的运行时校验结构。",
  ) satisfies z.ZodType<Stage>;
