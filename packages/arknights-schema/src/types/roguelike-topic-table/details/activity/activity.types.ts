/**

 * JSON 逻辑模块 `details/activity/activity` 的显式类型。

 */

import type { ValidModeEnum } from "../../shared/common-enums.types.js";

/**
 * roguelike_topic_table.json 中 Activity 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Activity {
  /** 原始数据字段 `basicDatas`。 */
  basicDatas: BasicDatas;
  /** 原始数据字段 `activityTable`。 */
  activityTable: ActivityTable;
}

/**
 * roguelike_topic_table.json 中 ActivityTable 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ActivityTable {
  /** 原始数据字段 `SEED_MODE`。 */
  SEED_MODE: SeedMode;
}

/**
 * roguelike_topic_table.json 中 BasicDatas 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface BasicDatas {
  /** 原始数据字段 `rogue_4_seedmode_1`。 */
  rogue_4_seedmode_1?: BasicDatasRogue4_Seedmode1;
  /** 原始数据字段 `rogue_5_seedmode_1`。 */
  rogue_5_seedmode_1?: BasicDatasRogue4_Seedmode1;
}

/**
 * roguelike_topic_table.json 中 BasicDatasRogue4_Seedmode1 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface BasicDatasRogue4_Seedmode1 {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `type`。 */
  type: string;
  /** 原始数据字段 `startTime`。 */
  startTime: number;
  /** 原始数据字段 `endTime`。 */
  endTime: number;
  /** 原始数据字段 `isPresentSeedMode`。 */
  isPresentSeedMode: boolean;
  /** 原始数据字段 `isUnlockBadge`。 */
  isUnlockBadge: boolean;
  /** 原始数据字段 `validMode`。 */
  validMode: ValidModeEnum;
}

/**
 * roguelike_topic_table.json 中 ConstData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ConstData {
  /** 原始数据字段 `seedModeIntro`。 */
  seedModeIntro: string;
  /** 原始数据字段 `emptyTextHint`。 */
  emptyTextHint: string;
  /** 原始数据字段 `errorTextHint`。 */
  errorTextHint: string;
  /** 原始数据字段 `legitimateTextHint`。 */
  legitimateTextHint: string;
  /** 原始数据字段 `seedModeConfirmReplacement`。 */
  seedModeConfirmReplacement: string;
  /** 原始数据字段 `difficultyLevelTextHint`。 */
  difficultyLevelTextHint: string;
  /** 原始数据字段 `lockedDifficultyLevelTextHint`。 */
  lockedDifficultyLevelTextHint: string;
  /** 原始数据字段 `setDifficultyLevelTextHint`。 */
  setDifficultyLevelTextHint: string;
  /** 原始数据字段 `notEnabledTextHint`。 */
  notEnabledTextHint: string;
  /** 原始数据字段 `enabledTextHint`。 */
  enabledTextHint: string;
  /** 原始数据字段 `useSucceededTextHint`。 */
  useSucceededTextHint: string;
  /** 原始数据字段 `officialUseSucceededTextHint`。 */
  officialUseSucceededTextHint: string;
  /** 原始数据字段 `seedModeLockedTextHint`。 */
  seedModeLockedTextHint: string;
}

/**
 * roguelike_topic_table.json 中 OfficialSeedDataList 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface OfficialSeedDataList {
  /** 原始数据字段 `seed`。 */
  seed: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `desc`。 */
  desc: string;
}

/**
 * roguelike_topic_table.json 中 SeedMode 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SeedMode {
  /** 原始数据字段 `rogue_4_seedmode_1`。 */
  rogue_4_seedmode_1?: SeedModeRogue4_Seedmode1;
  /** 原始数据字段 `rogue_5_seedmode_1`。 */
  rogue_5_seedmode_1?: SeedModeRogue4_Seedmode1;
}

/**
 * roguelike_topic_table.json 中 SeedModeRogue4_Seedmode1 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SeedModeRogue4_Seedmode1 {
  /** 原始数据字段 `officialSeedDataList`。 */
  officialSeedDataList: OfficialSeedDataList[];
  /** 原始数据字段 `constData`。 */
  constData: ConstData;
}
