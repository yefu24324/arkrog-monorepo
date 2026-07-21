/**

 * JSON 逻辑模块 `modules/dice/dice` 的显式类型。

 */

import type { Mode, ResultType } from "../../shared/common-enums.types.js";

/**
 * roguelike_topic_table.json 中 BattleDiceId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type BattleDiceId =
  "rogue_2_dice_battle1" | "rogue_2_dice_battle2" | "rogue_2_dice_battle3";

/**
 * roguelike_topic_table.json 中 Dice 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Dice {
  /** 原始数据字段 `dice`。 */
  dice: { [key: string]: Die };
  /** 原始数据字段 `diceEvents`。 */
  diceEvents: { [key: string]: DiceEvent };
  /** 原始数据字段 `diceChoices`。 */
  diceChoices: DiceChoices;
  /** 原始数据字段 `diceRuleGroups`。 */
  diceRuleGroups: { [key: string]: DiceRuleGroup };
  /** 原始数据字段 `dicePredefines`。 */
  dicePredefines: DicePredefine[];
}

/**
 * roguelike_topic_table.json 中 DiceChoices 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DiceChoices {
  /** 原始数据字段 `choice_ro2_wish_1`。 */
  choice_ro2_wish_1: string;
  /** 原始数据字段 `choice_ro2_wish_2`。 */
  choice_ro2_wish_2: string;
  /** 原始数据字段 `choice_ro2_wish_3`。 */
  choice_ro2_wish_3: string;
  /** 原始数据字段 `choice_ro2_wish_4`。 */
  choice_ro2_wish_4: string;
  /** 原始数据字段 `choice_ro2_wish_5`。 */
  choice_ro2_wish_5: string;
  /** 原始数据字段 `choice_ro2_wish_6`。 */
  choice_ro2_wish_6: string;
  /** 原始数据字段 `choice_ro2_wish_7`。 */
  choice_ro2_wish_7: string;
  /** 原始数据字段 `choice_ro2_recruit1_3`。 */
  choice_ro2_recruit1_3: string;
  /** 原始数据字段 `choice_ro2_9_1`。 */
  choice_ro2_9_1: string;
  /** 原始数据字段 `choice_ro2_9_3`。 */
  choice_ro2_9_3: string;
  /** 原始数据字段 `choice_ro2_9_4`。 */
  choice_ro2_9_4: string;
  /** 原始数据字段 `choice_ro2_9_5`。 */
  choice_ro2_9_5: string;
  /** 原始数据字段 `choice_ro2_9_6`。 */
  choice_ro2_9_6: string;
  /** 原始数据字段 `choice_ro2_9_7`。 */
  choice_ro2_9_7: string;
  /** 原始数据字段 `choice_ro2_9_8`。 */
  choice_ro2_9_8: string;
  /** 原始数据字段 `choice_ro2_9_9`。 */
  choice_ro2_9_9: string;
  /** 原始数据字段 `choice_ro2_9_10`。 */
  choice_ro2_9_10: string;
  /** 原始数据字段 `choice_ro2_9_11`。 */
  choice_ro2_9_11: string;
  /** 原始数据字段 `choice_ro2_9_12`。 */
  choice_ro2_9_12: string;
  /** 原始数据字段 `choice_ro2_king_1`。 */
  choice_ro2_king_1: string;
  /** 原始数据字段 `choice_ro2_king_3`。 */
  choice_ro2_king_3: string;
  /** 原始数据字段 `choice_ro2_liar1_1`。 */
  choice_ro2_liar1_1: string;
  /** 原始数据字段 `choice_ro2_bossa1_2`。 */
  choice_ro2_bossa1_2: string;
}

/**
 * roguelike_topic_table.json 中 DiceEvent 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DiceEvent {
  /** 原始数据字段 `dicePointMax`。 */
  dicePointMax: number;
  /** 原始数据字段 `diceResultClass`。 */
  diceResultClass: ResultType;
  /** 原始数据字段 `diceGroupId`。 */
  diceGroupId: string;
  /** 原始数据字段 `diceEventId`。 */
  diceEventId: string;
  /** 原始数据字段 `resultDesc`。 */
  resultDesc: string;
  /** 原始数据字段 `showType`。 */
  showType: DiceEventShowType;
  /** 原始数据字段 `canReroll`。 */
  canReroll: boolean;
  /** 原始数据字段 `diceEndingScene`。 */
  diceEndingScene: string;
  /** 原始数据字段 `diceEndingDesc`。 */
  diceEndingDesc: string;
  /** 原始数据字段 `sound`。 */
  sound: DiceEventSound;
}

/**
 * roguelike_topic_table.json 中 DiceEventShowType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DiceEventShowType = "VIRTUE" | "RAW_TEXT" | "MUTATION";

/**
 * roguelike_topic_table.json 中 DiceEventSound 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DiceEventSound =
  "ON_ROGUELIKE_DICEGREAT" | "ON_ROGUELIKE_DICENORMAL" | "ON_ROGUELIKE_DICEBAD";

/**
 * roguelike_topic_table.json 中 DicePredefine 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DicePredefine {
  /** 原始数据字段 `modeId`。 */
  modeId: Mode;
  /** 原始数据字段 `modeGrade`。 */
  modeGrade: number;
  /** 原始数据字段 `predefinedId`。 */
  predefinedId: null | string;
  /** 原始数据字段 `initialDiceCount`。 */
  initialDiceCount: number;
}

/**
 * roguelike_topic_table.json 中 DiceRuleGroup 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DiceRuleGroup {
  /** 原始数据字段 `ruleGroupId`。 */
  ruleGroupId: string;
  /** 原始数据字段 `minGoodNum`。 */
  minGoodNum: number;
}

/**
 * roguelike_topic_table.json 中 Die 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Die {
  /** 原始数据字段 `diceId`。 */
  diceId: string;
  /** 原始数据字段 `description`。 */
  description: DieDescription;
  /** 原始数据字段 `isUpgradeDice`。 */
  isUpgradeDice: number;
  /** 原始数据字段 `upgradeDiceId`。 */
  upgradeDiceId: null | string;
  /** 原始数据字段 `diceFaceCount`。 */
  diceFaceCount: number;
  /** 原始数据字段 `battleDiceId`。 */
  battleDiceId: BattleDiceId;
}

/**
 * roguelike_topic_table.json 中 DieDescription 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DieDescription =
  | "随处可见的六面骰子。投下后似乎能决定什么。"
  | "并不常有的八面骰子。投下后似乎能决定什么。"
  | "极为少见的十二面骰子。投下后似乎能决定什么。";
