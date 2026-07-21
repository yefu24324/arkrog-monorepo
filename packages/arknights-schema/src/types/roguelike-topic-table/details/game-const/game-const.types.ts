/**

 * JSON 逻辑模块 `details/game-const/game-const` 的显式类型。

 */

import type { BgmSignal } from "../../shared/core.types.js";

/**
 * roguelike_topic_table.json 中 GameConst 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface GameConst {
  /** 原始数据字段 `initSceneName`。 */
  initSceneName: string;
  /** 原始数据字段 `failSceneName`。 */
  failSceneName: string;
  /** 原始数据字段 `hpItemId`。 */
  hpItemId: string;
  /** 原始数据字段 `goldItemId`。 */
  goldItemId: string;
  /** 原始数据字段 `populationItemId`。 */
  populationItemId: string;
  /** 原始数据字段 `squadCapacityItemId`。 */
  squadCapacityItemId: string;
  /** 原始数据字段 `expItemId`。 */
  expItemId: string;
  /** 原始数据字段 `initialBandShowGradeFlag`。 */
  initialBandShowGradeFlag: boolean;
  /** 原始数据字段 `bankMaxGold`。 */
  bankMaxGold: number;
  /** 原始数据字段 `bankCostId`。 */
  bankCostId: null | string;
  /** 原始数据字段 `bankDrawCount`。 */
  bankDrawCount: number;
  /** 原始数据字段 `bankDrawLimit`。 */
  bankDrawLimit: number;
  /** 原始数据字段 `bankRewardCountType`。 */
  bankRewardCountType: string;
  /** 原始数据字段 `spZoneShopBgmSignal`。 */
  spZoneShopBgmSignal: BgmSignal | null;
  /** 原始数据字段 `mimicEnemyIds`。 */
  mimicEnemyIds: string[];
  /** 原始数据字段 `bossIds`。 */
  bossIds: string[];
  /** 原始数据字段 `goldChestTrapId`。 */
  goldChestTrapId: string;
  /** 原始数据字段 `normBoxTrapId`。 */
  normBoxTrapId: null | string;
  /** 原始数据字段 `rareBoxTrapId`。 */
  rareBoxTrapId: null | string;
  /** 原始数据字段 `badBoxTrapId`。 */
  badBoxTrapId: null | string;
  /** 原始数据字段 `toolBoxTrapId`。 */
  toolBoxTrapId: null | string;
  /** 原始数据字段 `maxHpItemId`。 */
  maxHpItemId: null | string;
  /** 原始数据字段 `shieldItemId`。 */
  shieldItemId: null | string;
  /** 原始数据字段 `keyItemId`。 */
  keyItemId: null | string;
  /** 原始数据字段 `divinationKitItemId`。 */
  divinationKitItemId: null | string;
  /** 原始数据字段 `chestKeyCnt`。 */
  chestKeyCnt: number;
  /** 原始数据字段 `chestKeyItemId`。 */
  chestKeyItemId: null | string;
  /** 原始数据字段 `keyColorId`。 */
  keyColorId: null | string;
  /** 原始数据字段 `onceNodeTypeList`。 */
  onceNodeTypeList: string[];
  /** 原始数据字段 `vertNodeCostDialogUseItemIconType`。 */
  vertNodeCostDialogUseItemIconType: boolean;
  /** 原始数据字段 `gpScoreRatio`。 */
  gpScoreRatio: number;
  /** 原始数据字段 `overflowUsageSquadBuff`。 */
  overflowUsageSquadBuff: null | string;
  /** 原始数据字段 `specialTrapId`。 */
  specialTrapId: null | string;
  /** 原始数据字段 `trapRewardRelicId`。 */
  trapRewardRelicId: null | string;
  /** 原始数据字段 `unlockRouteItemId`。 */
  unlockRouteItemId: null | string;
  /** 原始数据字段 `unlockRouteItemCount`。 */
  unlockRouteItemCount: number;
  /** 原始数据字段 `hideBattleNodeName`。 */
  hideBattleNodeName: null | string;
  /** 原始数据字段 `hideBattleNodeDescription`。 */
  hideBattleNodeDescription: null | string;
  /** 原始数据字段 `hideNonBattleNodeName`。 */
  hideNonBattleNodeName: null | string;
  /** 原始数据字段 `hideNonBattleNodeDescription`。 */
  hideNonBattleNodeDescription: null | string;
  /** 原始数据字段 `charSelectExpeditionConflictToast`。 */
  charSelectExpeditionConflictToast: null | string;
  /** 原始数据字段 `charSelectNoUpgradeConflictToast`。 */
  charSelectNoUpgradeConflictToast: null | string;
  /** 原始数据字段 `itemDropTagDict`。 */
  itemDropTagDict: ItemDropTagDict;
  /** 原始数据字段 `shopRefreshCostId`。 */
  shopRefreshCostId: null | string;
  /** 原始数据字段 `expeditionLeaveToastFormat`。 */
  expeditionLeaveToastFormat: null | string;
  /** 原始数据字段 `expeditionReturnDescCureUpgrade`。 */
  expeditionReturnDescCureUpgrade: null | string;
  /** 原始数据字段 `expeditionReturnDescUpgrade`。 */
  expeditionReturnDescUpgrade: null | string;
  /** 原始数据字段 `expeditionReturnDescCure`。 */
  expeditionReturnDescCure: null | string;
  /** 原始数据字段 `expeditionReturnDesc`。 */
  expeditionReturnDesc: null | string;
  /** 原始数据字段 `expeditionSelectDescFormat`。 */
  expeditionSelectDescFormat: null | string;
  /** 原始数据字段 `expeditionReturnDescItem`。 */
  expeditionReturnDescItem: null | string;
  /** 原始数据字段 `expedEndingRelic`。 */
  expedEndingRelic: null | string;
  /** 原始数据字段 `expedEndingRelicDesc`。 */
  expedEndingRelicDesc: null | string;
  /** 原始数据字段 `expeditionReturnRewardBlackList`。 */
  expeditionReturnRewardBlackList: string[];
  /** 原始数据字段 `travelLeaveToastFormat`。 */
  travelLeaveToastFormat: null | string;
  /** 原始数据字段 `charSelectTravelConflictToast`。 */
  charSelectTravelConflictToast: null | string;
  /** 原始数据字段 `travelReturnDescUpgrade`。 */
  travelReturnDescUpgrade: null | string;
  /** 原始数据字段 `travelReturnDesc`。 */
  travelReturnDesc: null | string;
  /** 原始数据字段 `travelReturnDescItem`。 */
  travelReturnDescItem: null | string;
  /** 原始数据字段 `traderReturnTitle`。 */
  traderReturnTitle: null | string;
  /** 原始数据字段 `traderReturnDesc`。 */
  traderReturnDesc: null | string;
  /** 原始数据字段 `candleReturnDescCandleUpgrade`。 */
  candleReturnDescCandleUpgrade: null | string;
  /** 原始数据字段 `candleReturnDescCandle`。 */
  candleReturnDescCandle: null | string;
  /** 原始数据字段 `charSelectCandleConflictToast`。 */
  charSelectCandleConflictToast: null | string;
  /** 原始数据字段 `charSelectGuidedConflictToast`。 */
  charSelectGuidedConflictToast: null | string;
  /** 原始数据字段 `charSelectNonGuidedConflictToast`。 */
  charSelectNonGuidedConflictToast: null | string;
  /** 原始数据字段 `gainBuffDiffGrade`。 */
  gainBuffDiffGrade: number;
  /** 原始数据字段 `dsPredictTips`。 */
  dsPredictTips: null | string;
  /** 原始数据字段 `dsBuffActiveTips`。 */
  dsBuffActiveTips: null | string;
  /** 原始数据字段 `totemDesc`。 */
  totemDesc: null | string;
  /** 原始数据字段 `copperGildDesc`。 */
  copperGildDesc: null | string;
  /** 原始数据字段 `relicDesc`。 */
  relicDesc: null | string;
  /** 原始数据字段 `buffDesc`。 */
  buffDesc: null | string;
  /** 原始数据字段 `refreshNodeItemId`。 */
  refreshNodeItemId: null | string;
  /** 原始数据字段 `storingRecruitDesc`。 */
  storingRecruitDesc: null | string;
  /** 原始数据字段 `storingRecruitSucceedToast`。 */
  storingRecruitSucceedToast: null | string;
  /** 原始数据字段 `specialRecruitReductionDesc`。 */
  specialRecruitReductionDesc: null | string;
  /** 原始数据字段 `specialRecruitFuncDesc`。 */
  specialRecruitFuncDesc: null | string;
  /** 原始数据字段 `specialRecruitDetailDesc`。 */
  specialRecruitDetailDesc: null | string;
  /** 原始数据字段 `portalZones`。 */
  portalZones: string[];
  /** 原始数据字段 `treasureBuffs`。 */
  treasureBuffs: string[] | null;
  /** 原始数据字段 `diffDisplayZoneId`。 */
  diffDisplayZoneId: null | string;
  /** 原始数据字段 `exploreExpOnKill`。 */
  exploreExpOnKill: null | string;
  /** 原始数据字段 `fusionName`。 */
  fusionName: null | string;
  /** 原始数据字段 `fusionNotifyToast`。 */
  fusionNotifyToast: null | string;
  /** 原始数据字段 `haveCustomZone`。 */
  haveCustomZone: boolean;
  /** 原始数据字段 `gotCharCandleBuffToast`。 */
  gotCharCandleBuffToast: null | string;
  /** 原始数据字段 `gotCharsCandleBuffToast`。 */
  gotCharsCandleBuffToast: null | string;
  /** 原始数据字段 `stashedRecruitNodeDescription`。 */
  stashedRecruitNodeDescription: null | string;
  /** 原始数据字段 `stashedRecruitEmptyNodeDescription`。 */
  stashedRecruitEmptyNodeDescription: null | string;
  /** 原始数据字段 `recruitStashMaxNum`。 */
  recruitStashMaxNum: number;
  /** 原始数据字段 `recruitStashMinNum`。 */
  recruitStashMinNum: number;
  /** 原始数据字段 `hasTopicCharSelectMenuButton`。 */
  hasTopicCharSelectMenuButton: boolean;
}

/**
 * roguelike_topic_table.json 中 ItemDropTagDict 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ItemDropTagDict {
  /** 原始数据字段 `TREASURE`。 */
  TREASURE: string;
  /** 原始数据字段 `TOTEM`。 */
  TOTEM?: string;
  /** 原始数据字段 `EXPLORE_TOOL`。 */
  EXPLORE_TOOL?: string;
  /** 原始数据字段 `COPPER`。 */
  COPPER?: string;
  /** 原始数据字段 `EVIL_TEMPLE`。 */
  EVIL_TEMPLE?: string;
  /** 原始数据字段 `TREASURE_MAP`。 */
  TREASURE_MAP?: string;
  /** 原始数据字段 `LOOP_CHIP`。 */
  LOOP_CHIP?: string;
  /** 原始数据字段 `STEP`。 */
  STEP?: string;
  /** 原始数据字段 `GREED`。 */
  GREED?: string;
  /** 原始数据字段 `GOLDEN_AGE`。 */
  GOLDEN_AGE?: string;
}
