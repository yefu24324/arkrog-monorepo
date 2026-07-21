/**

 * JSON 逻辑模块 `details/detail-const/detail-const` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  CharUpgradeTable,
  DetailConst,
  EvolvePhase,
  PlayerLevelTable,
  PredefinedLevelTable,
} from "../../../../types/roguelike-topic-table/details/detail-const/detail-const.types.js";

import { HistoricalRecordsModeSchema } from "../../shared/common-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 EvolvePhase 的运行时校验结构。
 */
export const EvolvePhaseSchema = z
  .enum(["PHASE_1", "PHASE_2"])
  .describe(
    "roguelike_topic_table.json 中 EvolvePhase 的运行时校验结构。",
  ) satisfies z.ZodType<EvolvePhase>;

/**
 * roguelike_topic_table.json 中 PlayerLevelTable 的运行时校验结构。
 */
export const PlayerLevelTableSchema = z
  .strictObject({
    exp: z.number(),
    populationUp: z.number(),
    squadCapacityUp: z.number(),
    battleCharLimitUp: z.number(),
    maxHpUp: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 PlayerLevelTable 的运行时校验结构。",
  ) satisfies z.ZodType<PlayerLevelTable>;

/**
 * roguelike_topic_table.json 中 CharUpgradeTable 的运行时校验结构。
 */
export const CharUpgradeTableSchema = z
  .strictObject({
    evolvePhase: EvolvePhaseSchema,
    skillLevel: z.number(),
    skillSpecializeLevel: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 CharUpgradeTable 的运行时校验结构。",
  ) satisfies z.ZodType<CharUpgradeTable>;

/**
 * roguelike_topic_table.json 中 PredefinedLevelTable 的运行时校验结构。
 */
export const PredefinedLevelTableSchema = z
  .strictObject({
    levels: z.record(z.string(), PlayerLevelTableSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 PredefinedLevelTable 的运行时校验结构。",
  ) satisfies z.ZodType<PredefinedLevelTable>;

/**
 * roguelike_topic_table.json 中 DetailConst 的运行时校验结构。
 */
export const DetailConstSchema = z
  .strictObject({
    playerLevelTable: z.record(z.string(), PlayerLevelTableSchema),
    charUpgradeTable: z.record(z.string(), CharUpgradeTableSchema),
    difficultyUpgradeRelicDescTable: z.record(z.string(), z.string()),
    predefinedLevelTable: z.record(z.string(), PredefinedLevelTableSchema),
    tokenBpId: z.string(),
    tokenOuterBuffId: z.string(),
    spOperatorLockedMessage: z.union([z.null(), z.string()]),
    previewedRewardsAccordingUpdateId: z.string(),
    tipButtonName: z.string(),
    collectButtonName: z.string(),
    bpSystemName: z.string(),
    autoSetKV: z.string(),
    bpPurchaseActiveEnroll: z.union([z.null(), z.string()]),
    defaultExpeditionSelectDesc: z.union([z.null(), z.string()]),
    gotCharMutationBuffToast: z.union([z.null(), z.string()]),
    gotCharEvolutionBuffToast: z.union([z.null(), z.string()]),
    gotSquadBuffToast: z.union([z.null(), z.string()]),
    loseCharBuffToast: z.union([z.null(), z.string()]),
    monthTeamSystemName: z.string(),
    battlePassUpdateName: z.string(),
    monthCharCardTagName: z.string(),
    monthTeamDescTagName: z.string(),
    outerBuffCompleteText: z.string(),
    outerProgressTextColor: z.string(),
    challengeTaskTargetName: z.string(),
    challengeTaskConditionName: z.string(),
    challengeTaskRewardName: z.string(),
    challengeTaskModeName: z.string(),
    challengeTaskName: z.string(),
    outerBuffTokenSum: z.number(),
    needAllFrontNode: z.boolean(),
    showBlurBack: z.boolean(),
    endingIconBorderDifficulty: z.number(),
    endingIconBorderCount: z.number(),
    copySeedModeInfo: z.union([z.null(), z.string()]),
    copySucceededTextHint: z.union([z.null(), z.string()]),
    historicalRecordsCount: z.number(),
    historicalRecordsStartTime: z.number(),
    historicalRecordsMode: HistoricalRecordsModeSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 DetailConst 的运行时校验结构。",
  ) satisfies z.ZodType<DetailConst>;
