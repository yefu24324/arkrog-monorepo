/**

 * JSON 逻辑模块 `details/choices/choices` 的显式类型。

 */

import type { Rogue6_ScrapM01_Enum } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 Choice 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Choice {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `title`。 */
  title: string;
  /** 原始数据字段 `description`。 */
  description: null | string;
  /** 原始数据字段 `lockedCoverDesc`。 */
  lockedCoverDesc: null | string;
  /** 原始数据字段 `type`。 */
  type: Rogue6_ScrapM01_Enum;
  /** 原始数据字段 `leftDecoType`。 */
  leftDecoType: LeftDecoType;
  /** 原始数据字段 `nextSceneId`。 */
  nextSceneId: null | string;
  /** 原始数据字段 `icon`。 */
  icon: IconEnum | null;
  /** 原始数据字段 `displayData`。 */
  displayData: DisplayData;
  /** 原始数据字段 `forceShowWhenOnlyLeave`。 */
  forceShowWhenOnlyLeave: boolean;
  /** 原始数据字段 `isHiddenChoice`。 */
  isHiddenChoice: boolean;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
}

/**
 * roguelike_topic_table.json 中 DisplayData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DisplayData {
  /** 原始数据字段 `type`。 */
  type: DisplayDataType;
  /** 原始数据字段 `costHintType`。 */
  costHintType: THintType;
  /** 原始数据字段 `effectHintType`。 */
  effectHintType: THintType;
  /** 原始数据字段 `funcIconId`。 */
  funcIconId: IconEnum | null;
  /** 原始数据字段 `itemId`。 */
  itemId: null | string;
  /** 原始数据字段 `difficultyUpgradeRelicGroupId`。 */
  difficultyUpgradeRelicGroupId: null;
  /** 原始数据字段 `taskId`。 */
  taskId: null;
  /** 原始数据字段 `instId`。 */
  instId: null;
}

/**
 * roguelike_topic_table.json 中 DisplayDataType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DisplayDataType = "NORMAL" | "ITEM";

/**
 * roguelike_topic_table.json 中 IconEnum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type IconEnum =
  | "leave"
  | "initial_reward_hp"
  | "initial_reward_population"
  | "initial_reward_gold"
  | "initial_reward_unknown"
  | "relic"
  | "hp"
  | "population"
  | "member"
  | "unknown"
  | "gold"
  | "recruit"
  | "battle"
  | "initial_reward_shield"
  | "key"
  | "initial_reward_dice"
  | "hpmax"
  | "dice"
  | "san"
  | "shield"
  | "sacrifice"
  | "teleport"
  | "adventure"
  | "totem"
  | "sacrifice_totem"
  | "vision"
  | "chaos_purify"
  | "fragment"
  | "disaster"
  | "duel"
  | "weight"
  | "stashed_recruit"
  | "candle_duel"
  | "copper_drop"
  | "copper"
  | "sp_zone_ap"
  | "sacrifice_copper"
  | "sacrifice_scrap"
  | "scrap_drop"
  | "zone_end"
  | "ap_drop"
  | "weather_change"
  | "initial_reward_relic"
  | "initial_reward_max_weight"
  | "initial_reward_unknown_pay_hp"
  | "initial_reward_scrap_move"
  | "initial_reward_unknown_pay_weight"
  | "";

/**
 * roguelike_topic_table.json 中 LeftDecoType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type LeftDecoType = "NONE" | "DICE" | "TASK" | "TASK_REWARD" | "VISION";

/**
 * roguelike_topic_table.json 中 THintType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type THintType =
  | "NONE"
  | "CHAOS"
  | "VISION"
  | "SEED_COST"
  | "ITEM"
  | "SACRIFICE"
  | "EXPEDITION"
  | "SACRIFICE_TOTEM"
  | "FRAGMENT"
  | "STASHED_RECRUIT"
  | "CANDLE"
  | "GUIDED"
  | "COPPER_LUCK"
  | "GUIDED_CHAR"
  | "SACRIFICE_SCRAP"
  | "AP_LEFT";
