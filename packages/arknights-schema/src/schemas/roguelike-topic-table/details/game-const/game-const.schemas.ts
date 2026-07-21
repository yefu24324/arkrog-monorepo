/**

 * JSON 逻辑模块 `details/game-const/game-const` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  GameConst,
  ItemDropTagDict,
} from "../../../../types/roguelike-topic-table/details/game-const/game-const.types.js";

import { BgmSignalSchema } from "../../shared/core.schemas.js";

/**
 * roguelike_topic_table.json 中 ItemDropTagDict 的运行时校验结构。
 */
export const ItemDropTagDictSchema = z
  .strictObject({
    TREASURE: z.string(),
    TOTEM: z.string().optional(),
    EXPLORE_TOOL: z.string().optional(),
    COPPER: z.string().optional(),
    EVIL_TEMPLE: z.string().optional(),
    TREASURE_MAP: z.string().optional(),
    LOOP_CHIP: z.string().optional(),
    STEP: z.string().optional(),
    GREED: z.string().optional(),
    GOLDEN_AGE: z.string().optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 ItemDropTagDict 的运行时校验结构。",
  ) satisfies z.ZodType<ItemDropTagDict>;

/**
 * roguelike_topic_table.json 中 GameConst 的运行时校验结构。
 */
export const GameConstSchema = z
  .strictObject({
    initSceneName: z.string(),
    failSceneName: z.string(),
    hpItemId: z.string(),
    goldItemId: z.string(),
    populationItemId: z.string(),
    squadCapacityItemId: z.string(),
    expItemId: z.string(),
    initialBandShowGradeFlag: z.boolean(),
    bankMaxGold: z.number(),
    bankCostId: z.union([z.null(), z.string()]),
    bankDrawCount: z.number(),
    bankDrawLimit: z.number(),
    bankRewardCountType: z.string(),
    spZoneShopBgmSignal: z.union([BgmSignalSchema, z.null()]),
    mimicEnemyIds: z.array(z.string()),
    bossIds: z.array(z.string()),
    goldChestTrapId: z.string(),
    normBoxTrapId: z.union([z.null(), z.string()]),
    rareBoxTrapId: z.union([z.null(), z.string()]),
    badBoxTrapId: z.union([z.null(), z.string()]),
    toolBoxTrapId: z.union([z.null(), z.string()]),
    maxHpItemId: z.union([z.null(), z.string()]),
    shieldItemId: z.union([z.null(), z.string()]),
    keyItemId: z.union([z.null(), z.string()]),
    divinationKitItemId: z.union([z.null(), z.string()]),
    chestKeyCnt: z.number(),
    chestKeyItemId: z.union([z.null(), z.string()]),
    keyColorId: z.union([z.null(), z.string()]),
    onceNodeTypeList: z.array(z.string()),
    vertNodeCostDialogUseItemIconType: z.boolean(),
    gpScoreRatio: z.number(),
    overflowUsageSquadBuff: z.union([z.null(), z.string()]),
    specialTrapId: z.union([z.null(), z.string()]),
    trapRewardRelicId: z.union([z.null(), z.string()]),
    unlockRouteItemId: z.union([z.null(), z.string()]),
    unlockRouteItemCount: z.number(),
    hideBattleNodeName: z.union([z.null(), z.string()]),
    hideBattleNodeDescription: z.union([z.null(), z.string()]),
    hideNonBattleNodeName: z.union([z.null(), z.string()]),
    hideNonBattleNodeDescription: z.union([z.null(), z.string()]),
    charSelectExpeditionConflictToast: z.union([z.null(), z.string()]),
    charSelectNoUpgradeConflictToast: z.union([z.null(), z.string()]),
    itemDropTagDict: ItemDropTagDictSchema,
    shopRefreshCostId: z.union([z.null(), z.string()]),
    expeditionLeaveToastFormat: z.union([z.null(), z.string()]),
    expeditionReturnDescCureUpgrade: z.union([z.null(), z.string()]),
    expeditionReturnDescUpgrade: z.union([z.null(), z.string()]),
    expeditionReturnDescCure: z.union([z.null(), z.string()]),
    expeditionReturnDesc: z.union([z.null(), z.string()]),
    expeditionSelectDescFormat: z.union([z.null(), z.string()]),
    expeditionReturnDescItem: z.union([z.null(), z.string()]),
    expedEndingRelic: z.union([z.null(), z.string()]),
    expedEndingRelicDesc: z.union([z.null(), z.string()]),
    expeditionReturnRewardBlackList: z.array(z.string()),
    travelLeaveToastFormat: z.union([z.null(), z.string()]),
    charSelectTravelConflictToast: z.union([z.null(), z.string()]),
    travelReturnDescUpgrade: z.union([z.null(), z.string()]),
    travelReturnDesc: z.union([z.null(), z.string()]),
    travelReturnDescItem: z.union([z.null(), z.string()]),
    traderReturnTitle: z.union([z.null(), z.string()]),
    traderReturnDesc: z.union([z.null(), z.string()]),
    candleReturnDescCandleUpgrade: z.union([z.null(), z.string()]),
    candleReturnDescCandle: z.union([z.null(), z.string()]),
    charSelectCandleConflictToast: z.union([z.null(), z.string()]),
    charSelectGuidedConflictToast: z.union([z.null(), z.string()]),
    charSelectNonGuidedConflictToast: z.union([z.null(), z.string()]),
    gainBuffDiffGrade: z.number(),
    dsPredictTips: z.union([z.null(), z.string()]),
    dsBuffActiveTips: z.union([z.null(), z.string()]),
    totemDesc: z.union([z.null(), z.string()]),
    copperGildDesc: z.union([z.null(), z.string()]),
    relicDesc: z.union([z.null(), z.string()]),
    buffDesc: z.union([z.null(), z.string()]),
    refreshNodeItemId: z.union([z.null(), z.string()]),
    storingRecruitDesc: z.union([z.null(), z.string()]),
    storingRecruitSucceedToast: z.union([z.null(), z.string()]),
    specialRecruitReductionDesc: z.union([z.null(), z.string()]),
    specialRecruitFuncDesc: z.union([z.null(), z.string()]),
    specialRecruitDetailDesc: z.union([z.null(), z.string()]),
    portalZones: z.array(z.string()),
    treasureBuffs: z.union([z.array(z.string()), z.null()]),
    diffDisplayZoneId: z.union([z.null(), z.string()]),
    exploreExpOnKill: z.union([z.null(), z.string()]),
    fusionName: z.union([z.null(), z.string()]),
    fusionNotifyToast: z.union([z.null(), z.string()]),
    haveCustomZone: z.boolean(),
    gotCharCandleBuffToast: z.union([z.null(), z.string()]),
    gotCharsCandleBuffToast: z.union([z.null(), z.string()]),
    stashedRecruitNodeDescription: z.union([z.null(), z.string()]),
    stashedRecruitEmptyNodeDescription: z.union([z.null(), z.string()]),
    recruitStashMaxNum: z.number(),
    recruitStashMinNum: z.number(),
    hasTopicCharSelectMenuButton: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 GameConst 的运行时校验结构。",
  ) satisfies z.ZodType<GameConst>;
