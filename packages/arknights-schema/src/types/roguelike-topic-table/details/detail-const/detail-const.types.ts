/**

 * JSON 逻辑模块 `details/detail-const/detail-const` 的显式类型。

 */

import type { HistoricalRecordsMode } from "../../shared/common-enums.types.js";

/**
 * roguelike_topic_table.json 中 CharUpgradeTable 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CharUpgradeTable {
  /** 原始数据字段 `evolvePhase`。 */
  evolvePhase: EvolvePhase;
  /** 原始数据字段 `skillLevel`。 */
  skillLevel: number;
  /** 原始数据字段 `skillSpecializeLevel`。 */
  skillSpecializeLevel: number;
}

/**
 * roguelike_topic_table.json 中 DetailConst 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DetailConst {
  /** 原始数据字段 `playerLevelTable`。 */
  playerLevelTable: { [key: string]: PlayerLevelTable };
  /** 原始数据字段 `charUpgradeTable`。 */
  charUpgradeTable: { [key: string]: CharUpgradeTable };
  /** 原始数据字段 `difficultyUpgradeRelicDescTable`。 */
  difficultyUpgradeRelicDescTable: { [key: string]: string };
  /** 原始数据字段 `predefinedLevelTable`。 */
  predefinedLevelTable: { [key: string]: PredefinedLevelTable };
  /** 原始数据字段 `tokenBpId`。 */
  tokenBpId: string;
  /** 原始数据字段 `tokenOuterBuffId`。 */
  tokenOuterBuffId: string;
  /** 原始数据字段 `spOperatorLockedMessage`。 */
  spOperatorLockedMessage: null | string;
  /** 原始数据字段 `previewedRewardsAccordingUpdateId`。 */
  previewedRewardsAccordingUpdateId: string;
  /** 原始数据字段 `tipButtonName`。 */
  tipButtonName: string;
  /** 原始数据字段 `collectButtonName`。 */
  collectButtonName: string;
  /** 原始数据字段 `bpSystemName`。 */
  bpSystemName: string;
  /** 原始数据字段 `autoSetKV`。 */
  autoSetKV: string;
  /** 原始数据字段 `bpPurchaseActiveEnroll`。 */
  bpPurchaseActiveEnroll: null | string;
  /** 原始数据字段 `defaultExpeditionSelectDesc`。 */
  defaultExpeditionSelectDesc: null | string;
  /** 原始数据字段 `gotCharMutationBuffToast`。 */
  gotCharMutationBuffToast: null | string;
  /** 原始数据字段 `gotCharEvolutionBuffToast`。 */
  gotCharEvolutionBuffToast: null | string;
  /** 原始数据字段 `gotSquadBuffToast`。 */
  gotSquadBuffToast: null | string;
  /** 原始数据字段 `loseCharBuffToast`。 */
  loseCharBuffToast: null | string;
  /** 原始数据字段 `monthTeamSystemName`。 */
  monthTeamSystemName: string;
  /** 原始数据字段 `battlePassUpdateName`。 */
  battlePassUpdateName: string;
  /** 原始数据字段 `monthCharCardTagName`。 */
  monthCharCardTagName: string;
  /** 原始数据字段 `monthTeamDescTagName`。 */
  monthTeamDescTagName: string;
  /** 原始数据字段 `outerBuffCompleteText`。 */
  outerBuffCompleteText: string;
  /** 原始数据字段 `outerProgressTextColor`。 */
  outerProgressTextColor: string;
  /** 原始数据字段 `challengeTaskTargetName`。 */
  challengeTaskTargetName: string;
  /** 原始数据字段 `challengeTaskConditionName`。 */
  challengeTaskConditionName: string;
  /** 原始数据字段 `challengeTaskRewardName`。 */
  challengeTaskRewardName: string;
  /** 原始数据字段 `challengeTaskModeName`。 */
  challengeTaskModeName: string;
  /** 原始数据字段 `challengeTaskName`。 */
  challengeTaskName: string;
  /** 原始数据字段 `outerBuffTokenSum`。 */
  outerBuffTokenSum: number;
  /** 原始数据字段 `needAllFrontNode`。 */
  needAllFrontNode: boolean;
  /** 原始数据字段 `showBlurBack`。 */
  showBlurBack: boolean;
  /** 原始数据字段 `endingIconBorderDifficulty`。 */
  endingIconBorderDifficulty: number;
  /** 原始数据字段 `endingIconBorderCount`。 */
  endingIconBorderCount: number;
  /** 原始数据字段 `copySeedModeInfo`。 */
  copySeedModeInfo: null | string;
  /** 原始数据字段 `copySucceededTextHint`。 */
  copySucceededTextHint: null | string;
  /** 原始数据字段 `historicalRecordsCount`。 */
  historicalRecordsCount: number;
  /** 原始数据字段 `historicalRecordsStartTime`。 */
  historicalRecordsStartTime: number;
  /** 原始数据字段 `historicalRecordsMode`。 */
  historicalRecordsMode: HistoricalRecordsMode;
}

/**
 * roguelike_topic_table.json 中 EvolvePhase 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type EvolvePhase = "PHASE_1" | "PHASE_2";

/**
 * roguelike_topic_table.json 中 PlayerLevelTable 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface PlayerLevelTable {
  /** 原始数据字段 `exp`。 */
  exp: number;
  /** 原始数据字段 `populationUp`。 */
  populationUp: number;
  /** 原始数据字段 `squadCapacityUp`。 */
  squadCapacityUp: number;
  /** 原始数据字段 `battleCharLimitUp`。 */
  battleCharLimitUp: number;
  /** 原始数据字段 `maxHpUp`。 */
  maxHpUp: number;
}

/**
 * roguelike_topic_table.json 中 PredefinedLevelTable 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface PredefinedLevelTable {
  /** 原始数据字段 `levels`。 */
  levels: { [key: string]: PlayerLevelTable };
}
