/**

 * JSON 逻辑模块 `details/activity/activity` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  Activity,
  ActivityTable,
  BasicDatas,
  BasicDatasRogue4_Seedmode1,
  ConstData,
  OfficialSeedDataList,
  SeedMode,
  SeedModeRogue4_Seedmode1,
} from "../../../../types/roguelike-topic-table/details/activity/activity.types.js";

import { ValidModeEnumSchema } from "../../shared/common-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 BasicDatasRogue4_Seedmode1 的运行时校验结构。
 */
export const BasicDatasRogue4_Seedmode1Schema = z
  .strictObject({
    id: z.string(),
    type: z.string(),
    startTime: z.number(),
    endTime: z.number(),
    isPresentSeedMode: z.boolean(),
    isUnlockBadge: z.boolean(),
    validMode: ValidModeEnumSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BasicDatasRogue4_Seedmode1 的运行时校验结构。",
  ) satisfies z.ZodType<BasicDatasRogue4_Seedmode1>;

/**
 * roguelike_topic_table.json 中 ConstData 的运行时校验结构。
 */
export const ConstDataSchema = z
  .strictObject({
    seedModeIntro: z.string(),
    emptyTextHint: z.string(),
    errorTextHint: z.string(),
    legitimateTextHint: z.string(),
    seedModeConfirmReplacement: z.string(),
    difficultyLevelTextHint: z.string(),
    lockedDifficultyLevelTextHint: z.string(),
    setDifficultyLevelTextHint: z.string(),
    notEnabledTextHint: z.string(),
    enabledTextHint: z.string(),
    useSucceededTextHint: z.string(),
    officialUseSucceededTextHint: z.string(),
    seedModeLockedTextHint: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ConstData 的运行时校验结构。",
  ) satisfies z.ZodType<ConstData>;

/**
 * roguelike_topic_table.json 中 OfficialSeedDataList 的运行时校验结构。
 */
export const OfficialSeedDataListSchema = z
  .strictObject({
    seed: z.string(),
    sortId: z.number(),
    desc: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 OfficialSeedDataList 的运行时校验结构。",
  ) satisfies z.ZodType<OfficialSeedDataList>;

/**
 * roguelike_topic_table.json 中 BasicDatas 的运行时校验结构。
 */
export const BasicDatasSchema = z
  .strictObject({
    rogue_4_seedmode_1: BasicDatasRogue4_Seedmode1Schema.optional(),
    rogue_5_seedmode_1: BasicDatasRogue4_Seedmode1Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 BasicDatas 的运行时校验结构。",
  ) satisfies z.ZodType<BasicDatas>;

/**
 * roguelike_topic_table.json 中 SeedModeRogue4_Seedmode1 的运行时校验结构。
 */
export const SeedModeRogue4_Seedmode1Schema = z
  .strictObject({
    officialSeedDataList: z.array(OfficialSeedDataListSchema),
    constData: ConstDataSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 SeedModeRogue4_Seedmode1 的运行时校验结构。",
  ) satisfies z.ZodType<SeedModeRogue4_Seedmode1>;

/**
 * roguelike_topic_table.json 中 SeedMode 的运行时校验结构。
 */
export const SeedModeSchema = z
  .strictObject({
    rogue_4_seedmode_1: SeedModeRogue4_Seedmode1Schema.optional(),
    rogue_5_seedmode_1: SeedModeRogue4_Seedmode1Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 SeedMode 的运行时校验结构。",
  ) satisfies z.ZodType<SeedMode>;

/**
 * roguelike_topic_table.json 中 ActivityTable 的运行时校验结构。
 */
export const ActivityTableSchema = z
  .strictObject({
    SEED_MODE: SeedModeSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ActivityTable 的运行时校验结构。",
  ) satisfies z.ZodType<ActivityTable>;

/**
 * roguelike_topic_table.json 中 Activity 的运行时校验结构。
 */
export const ActivitySchema = z
  .strictObject({
    basicDatas: BasicDatasSchema,
    activityTable: ActivityTableSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Activity 的运行时校验结构。",
  ) satisfies z.ZodType<Activity>;
