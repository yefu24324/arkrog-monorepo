/**

 * JSON 逻辑模块 `modules/dice/dice` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BattleDiceId,
  Dice,
  DiceChoices,
  DiceEvent,
  DiceEventShowType,
  DiceEventSound,
  DicePredefine,
  DiceRuleGroup,
  Die,
  DieDescription,
} from "../../../../types/roguelike-topic-table/modules/dice/dice.types.js";

import {
  ModeSchema,
  ResultTypeSchema,
} from "../../shared/common-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 BattleDiceId 的运行时校验结构。
 */
export const BattleDiceIdSchema = z
  .enum([
    "rogue_2_dice_battle1",
    "rogue_2_dice_battle2",
    "rogue_2_dice_battle3",
  ])
  .describe(
    "roguelike_topic_table.json 中 BattleDiceId 的运行时校验结构。",
  ) satisfies z.ZodType<BattleDiceId>;

/**
 * roguelike_topic_table.json 中 DiceChoices 的运行时校验结构。
 */
export const DiceChoicesSchema = z
  .strictObject({
    choice_ro2_wish_1: z.string(),
    choice_ro2_wish_2: z.string(),
    choice_ro2_wish_3: z.string(),
    choice_ro2_wish_4: z.string(),
    choice_ro2_wish_5: z.string(),
    choice_ro2_wish_6: z.string(),
    choice_ro2_wish_7: z.string(),
    choice_ro2_recruit1_3: z.string(),
    choice_ro2_9_1: z.string(),
    choice_ro2_9_3: z.string(),
    choice_ro2_9_4: z.string(),
    choice_ro2_9_5: z.string(),
    choice_ro2_9_6: z.string(),
    choice_ro2_9_7: z.string(),
    choice_ro2_9_8: z.string(),
    choice_ro2_9_9: z.string(),
    choice_ro2_9_10: z.string(),
    choice_ro2_9_11: z.string(),
    choice_ro2_9_12: z.string(),
    choice_ro2_king_1: z.string(),
    choice_ro2_king_3: z.string(),
    choice_ro2_liar1_1: z.string(),
    choice_ro2_bossa1_2: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 DiceChoices 的运行时校验结构。",
  ) satisfies z.ZodType<DiceChoices>;

/**
 * roguelike_topic_table.json 中 DiceEventShowType 的运行时校验结构。
 */
export const DiceEventShowTypeSchema = z
  .enum(["VIRTUE", "RAW_TEXT", "MUTATION"])
  .describe(
    "roguelike_topic_table.json 中 DiceEventShowType 的运行时校验结构。",
  ) satisfies z.ZodType<DiceEventShowType>;

/**
 * roguelike_topic_table.json 中 DiceEventSound 的运行时校验结构。
 */
export const DiceEventSoundSchema = z
  .enum([
    "ON_ROGUELIKE_DICEGREAT",
    "ON_ROGUELIKE_DICENORMAL",
    "ON_ROGUELIKE_DICEBAD",
  ])
  .describe(
    "roguelike_topic_table.json 中 DiceEventSound 的运行时校验结构。",
  ) satisfies z.ZodType<DiceEventSound>;

/**
 * roguelike_topic_table.json 中 DicePredefine 的运行时校验结构。
 */
export const DicePredefineSchema = z
  .strictObject({
    modeId: ModeSchema,
    modeGrade: z.number(),
    predefinedId: z.union([z.null(), z.string()]),
    initialDiceCount: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 DicePredefine 的运行时校验结构。",
  ) satisfies z.ZodType<DicePredefine>;

/**
 * roguelike_topic_table.json 中 DiceRuleGroup 的运行时校验结构。
 */
export const DiceRuleGroupSchema = z
  .strictObject({
    ruleGroupId: z.string(),
    minGoodNum: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 DiceRuleGroup 的运行时校验结构。",
  ) satisfies z.ZodType<DiceRuleGroup>;

/**
 * roguelike_topic_table.json 中 DieDescription 的运行时校验结构。
 */
export const DieDescriptionSchema = z
  .enum([
    "随处可见的六面骰子。投下后似乎能决定什么。",
    "并不常有的八面骰子。投下后似乎能决定什么。",
    "极为少见的十二面骰子。投下后似乎能决定什么。",
  ])
  .describe(
    "roguelike_topic_table.json 中 DieDescription 的运行时校验结构。",
  ) satisfies z.ZodType<DieDescription>;

/**
 * roguelike_topic_table.json 中 DiceEvent 的运行时校验结构。
 */
export const DiceEventSchema = z
  .strictObject({
    dicePointMax: z.number(),
    diceResultClass: ResultTypeSchema,
    diceGroupId: z.string(),
    diceEventId: z.string(),
    resultDesc: z.string(),
    showType: DiceEventShowTypeSchema,
    canReroll: z.boolean(),
    diceEndingScene: z.string(),
    diceEndingDesc: z.string(),
    sound: DiceEventSoundSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 DiceEvent 的运行时校验结构。",
  ) satisfies z.ZodType<DiceEvent>;

/**
 * roguelike_topic_table.json 中 Die 的运行时校验结构。
 */
export const DieSchema = z
  .strictObject({
    diceId: z.string(),
    description: DieDescriptionSchema,
    isUpgradeDice: z.number(),
    upgradeDiceId: z.union([z.null(), z.string()]),
    diceFaceCount: z.number(),
    battleDiceId: BattleDiceIdSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Die 的运行时校验结构。",
  ) satisfies z.ZodType<Die>;

/**
 * roguelike_topic_table.json 中 Dice 的运行时校验结构。
 */
export const DiceSchema = z
  .strictObject({
    dice: z.record(z.string(), DieSchema),
    diceEvents: z.record(z.string(), DiceEventSchema),
    diceChoices: DiceChoicesSchema,
    diceRuleGroups: z.record(z.string(), DiceRuleGroupSchema),
    dicePredefines: z.array(DicePredefineSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 Dice 的运行时校验结构。",
  ) satisfies z.ZodType<Dice>;
