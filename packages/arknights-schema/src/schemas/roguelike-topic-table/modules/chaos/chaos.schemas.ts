/**

 * JSON 逻辑模块 `modules/chaos/chaos` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ChaosData,
  ChaosDataSound,
  ChaosModuleConsts,
  ChaosRange,
  LevelInfoDict,
  ModuleChaos,
  Rule,
} from "../../../../types/roguelike-topic-table/modules/chaos/chaos.types.js";

/**
 * roguelike_topic_table.json 中 ChaosDataSound 的运行时校验结构。
 */
export const ChaosDataSoundSchema = z
  .enum(["ON_ROGUELIKE_VARIATION1", "ON_ROGUELIKE_VARIATION2"])
  .describe(
    "roguelike_topic_table.json 中 ChaosDataSound 的运行时校验结构。",
  ) satisfies z.ZodType<ChaosDataSound>;

/**
 * roguelike_topic_table.json 中 ChaosModuleConsts 的运行时校验结构。
 */
export const ChaosModuleConstsSchema = z
  .strictObject({
    maxChaosLevel: z.number(),
    maxChaosSlot: z.number(),
    chaosNotMaxDescription: z.string(),
    chaosMaxDescription: z.string(),
    chaosPredictDescription: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ChaosModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<ChaosModuleConsts>;

/**
 * roguelike_topic_table.json 中 ChaosRange 的运行时校验结构。
 */
export const ChaosRangeSchema = z
  .strictObject({
    chaosMax: z.number(),
    chaosDungeonEffect: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ChaosRange 的运行时校验结构。",
  ) satisfies z.ZodType<ChaosRange>;

/**
 * roguelike_topic_table.json 中 Rule 的运行时校验结构。
 */
export const RuleSchema = z
  .strictObject({
    chaosLevelBeginNum: z.number(),
    chaosLevelEndNum: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Rule 的运行时校验结构。",
  ) satisfies z.ZodType<Rule>;

/**
 * roguelike_topic_table.json 中 ChaosData 的运行时校验结构。
 */
export const ChaosDataSchema = z
  .strictObject({
    chaosId: z.string(),
    level: z.number(),
    nextChaosId: z.union([z.null(), z.string()]),
    prevChaosId: z.union([z.null(), z.string()]),
    iconId: z.string(),
    name: z.string(),
    functionDesc: z.string(),
    desc: z.string(),
    sound: ChaosDataSoundSchema,
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 ChaosData 的运行时校验结构。",
  ) satisfies z.ZodType<ChaosData>;

/**
 * roguelike_topic_table.json 中 LevelInfoDict 的运行时校验结构。
 */
export const LevelInfoDictSchema = z
  .strictObject({
    rule_1: z.record(z.string(), RuleSchema),
    rule_2: z.record(z.string(), RuleSchema),
    rule_3: z.record(z.string(), RuleSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 LevelInfoDict 的运行时校验结构。",
  ) satisfies z.ZodType<LevelInfoDict>;

/**
 * roguelike_topic_table.json 中 ModuleChaos 的运行时校验结构。
 */
export const ModuleChaosSchema = z
  .strictObject({
    chaosDatas: z.record(z.string(), ChaosDataSchema),
    chaosRanges: z.array(ChaosRangeSchema),
    levelInfoDict: LevelInfoDictSchema,
    moduleConsts: ChaosModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleChaos 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleChaos>;
