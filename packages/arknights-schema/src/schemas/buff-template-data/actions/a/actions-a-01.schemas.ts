/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act20SideModeOnlyIncreaseScoreAction, Act27sideAddTilesToEnemySideBlackListAction, Act27sideModifyAllAllyTileCachedSideTypeAction, Act27sideModifyTileCachedSideTypeAction, Act29SideCheckCurrentAudioTypeAction, Act29SideSwitchCurretnAudioTypeAction, Act31SideAddAreaPolluteAction, Act31SideAssignAreaPolluteValueToBBAction, Act31SideCheckInPolluteAreaAction, Act31SideCheckRootTilePolluteValueAction, BattleActionA01 } from "../../../../types/buff-template-data/actions/a/actions-a-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act20SideModeOnlyIncreaseScore, Assembly-CSharp 的严格 Action 数据。
 */
export const Act20SideModeOnlyIncreaseScoreActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act20SideModeOnlyIncreaseScore, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act20SideModeOnlyIncreaseScoreAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("Act20SideModeOnlyIncreaseScoreAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act20SideModeOnlyIncreaseScore, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act20SideModeOnlyIncreaseScoreAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act27sideAddTilesToEnemySideBlackList, Assembly-CSharp 的严格 Action 数据。
 */
export const Act27sideAddTilesToEnemySideBlackListActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act27sideAddTilesToEnemySideBlackList, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act27sideAddTilesToEnemySideBlackList, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act27sideAddTilesToEnemySideBlackListAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act27sideModifyAllAllyTileCachedSideType, Assembly-CSharp 的严格 Action 数据。
 */
export const Act27sideModifyAllAllyTileCachedSideTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act27sideModifyAllAllyTileCachedSideType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act27sideModifyAllAllyTileCachedSideTypeAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("Act27sideModifyAllAllyTileCachedSideTypeAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act27sideModifyAllAllyTileCachedSideType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act27sideModifyAllAllyTileCachedSideTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act27sideModifyTileCachedSideType, Assembly-CSharp 的严格 Action 数据。
 */
export const Act27sideModifyTileCachedSideTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act27sideModifyTileCachedSideType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act27sideModifyTileCachedSideTypeAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
    "_sideType": z.enum(["ALLY","ENEMY"]).describe("Act27sideModifyTileCachedSideTypeAction 的 `sideType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","MAIN_TARGET","MODIFIER_TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Act27sideModifyTileCachedSideTypeAction 的 `useRangeId` 配置字段；准确战斗语义待确认。 */
    "_useRangeId": z.boolean().describe("Act27sideModifyTileCachedSideTypeAction 的 `useRangeId` 配置字段；准确战斗语义待确认。"),
    /** Act27sideModifyTileCachedSideTypeAction 的 `useTileInSnapShot` 配置字段；准确战斗语义待确认。 */
    "_useTileInSnapShot": z.boolean().describe("Act27sideModifyTileCachedSideTypeAction 的 `useTileInSnapShot` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act27sideModifyTileCachedSideType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act27sideModifyTileCachedSideTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act29SideCheckCurrentAudioType, Assembly-CSharp 的严格 Action 数据。
 */
export const Act29SideCheckCurrentAudioTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act29SideCheckCurrentAudioType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act29SideCheckCurrentAudioTypeAction 的 `audioType` 配置字段；准确战斗语义待确认。 */
    "_audioType": z.enum(["Depressed","Enthusiastic","None"]).describe("Act29SideCheckCurrentAudioTypeAction 的 `audioType` 配置字段；准确战斗语义待确认。"),
    /** Act29SideCheckCurrentAudioTypeAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
    "_evnSysKey": z.string().describe("Act29SideCheckCurrentAudioTypeAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act29SideCheckCurrentAudioType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act29SideCheckCurrentAudioTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act29SideSwitchCurretnAudioType, Assembly-CSharp 的严格 Action 数据。
 */
export const Act29SideSwitchCurretnAudioTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act29SideSwitchCurretnAudioType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act29SideSwitchCurretnAudioTypeAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
    "_evnSysKey": z.string().describe("Act29SideSwitchCurretnAudioTypeAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。"),
    /** Act29SideSwitchCurretnAudioTypeAction 的 `isFirstTime` 配置字段；准确战斗语义待确认。 */
    "_isFirstTime": z.boolean().describe("Act29SideSwitchCurretnAudioTypeAction 的 `isFirstTime` 配置字段；准确战斗语义待确认。"),
    /** Act29SideSwitchCurretnAudioTypeAction 的 `isTriggeredByBoss` 配置字段；准确战斗语义待确认。 */
    "_isTriggeredByBoss": z.boolean().describe("Act29SideSwitchCurretnAudioTypeAction 的 `isTriggeredByBoss` 配置字段；准确战斗语义待确认。"),
    /** Act29SideSwitchCurretnAudioTypeAction 的 `muteAudio` 配置字段；准确战斗语义待确认。 */
    "_muteAudio": z.boolean().describe("Act29SideSwitchCurretnAudioTypeAction 的 `muteAudio` 配置字段；准确战斗语义待确认。"),
    /** Act29SideSwitchCurretnAudioTypeAction 的 `switchToOposite` 配置字段；准确战斗语义待确认。 */
    "_switchToOposite": z.boolean().describe("Act29SideSwitchCurretnAudioTypeAction 的 `switchToOposite` 配置字段；准确战斗语义待确认。"),
    /** Act29SideSwitchCurretnAudioTypeAction 的 `typeKey` 配置字段；准确战斗语义待确认。 */
    "_typeKey": z.string().describe("Act29SideSwitchCurretnAudioTypeAction 的 `typeKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act29SideSwitchCurretnAudioType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act29SideSwitchCurretnAudioTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideAddAreaPollute, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideAddAreaPolluteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideAddAreaPollute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SideAddAreaPolluteAction 的 `addPolluteV` 配置字段；准确战斗语义待确认。 */
    "_addPolluteV": z.number().describe("Act31SideAddAreaPolluteAction 的 `addPolluteV` 配置字段；准确战斗语义待确认。"),
    /** Act31SideAddAreaPolluteAction 的 `needCheckTile` 配置字段；准确战斗语义待确认。 */
    "_needCheckTile": z.boolean().describe("Act31SideAddAreaPolluteAction 的 `needCheckTile` 配置字段；准确战斗语义待确认。"),
    /** Act31SideAddAreaPolluteAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("Act31SideAddAreaPolluteAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Act31SideAddAreaPolluteAction 的 `useSnapshotTile` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotTile": z.boolean().describe("Act31SideAddAreaPolluteAction 的 `useSnapshotTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideAddAreaPollute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideAddAreaPolluteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideAssignAreaPolluteValueToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideAssignAreaPolluteValueToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideAssignAreaPolluteValueToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SideAssignAreaPolluteValueToBBAction 的 `assignPVRatio` 配置字段；准确战斗语义待确认。 */
    "_assignPVRatio": z.boolean().describe("Act31SideAssignAreaPolluteValueToBBAction 的 `assignPVRatio` 配置字段；准确战斗语义待确认。"),
    /** Act31SideAssignAreaPolluteValueToBBAction 的 `assignTilePV` 配置字段；准确战斗语义待确认。 */
    "_assignTilePV": z.boolean().describe("Act31SideAssignAreaPolluteValueToBBAction 的 `assignTilePV` 配置字段；准确战斗语义待确认。"),
    /** Act31SideAssignAreaPolluteValueToBBAction 的 `polluteVKey` 配置字段；准确战斗语义待确认。 */
    "_polluteVKey": z.string().describe("Act31SideAssignAreaPolluteValueToBBAction 的 `polluteVKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideAssignAreaPolluteValueToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideAssignAreaPolluteValueToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideCheckInPolluteArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideCheckInPolluteAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideCheckInPolluteArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideCheckInPolluteArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideCheckInPolluteAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideCheckRootTilePolluteValue, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideCheckRootTilePolluteValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideCheckRootTilePolluteValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SideCheckRootTilePolluteValueAction 的 `checkSourceBehindTile` 配置字段；准确战斗语义待确认。 */
    "_checkSourceBehindTile": z.boolean().describe("Act31SideCheckRootTilePolluteValueAction 的 `checkSourceBehindTile` 配置字段；准确战斗语义待确认。"),
    /** Act31SideCheckRootTilePolluteValueAction 的 `checkValue` 配置字段；准确战斗语义待确认。 */
    "_checkValue": z.number().describe("Act31SideCheckRootTilePolluteValueAction 的 `checkValue` 配置字段；准确战斗语义待确认。"),
    /** Act31SideCheckRootTilePolluteValueAction 的 `checkValueKey` 配置字段；准确战斗语义待确认。 */
    "_checkValueKey": z.string().describe("Act31SideCheckRootTilePolluteValueAction 的 `checkValueKey` 配置字段；准确战斗语义待确认。"),
    /** Act31SideCheckRootTilePolluteValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","GT"]).describe("Act31SideCheckRootTilePolluteValueAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Act31SideCheckRootTilePolluteValueAction 的 `needAreaPV` 配置字段；准确战斗语义待确认。 */
    "_needAreaPV": z.boolean().describe("Act31SideCheckRootTilePolluteValueAction 的 `needAreaPV` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideCheckRootTilePolluteValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideCheckRootTilePolluteValueAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA01Schema = z
  .discriminatedUnion("$type", [Act20SideModeOnlyIncreaseScoreActionSchema, Act27sideAddTilesToEnemySideBlackListActionSchema, Act27sideModifyAllAllyTileCachedSideTypeActionSchema, Act27sideModifyTileCachedSideTypeActionSchema, Act29SideCheckCurrentAudioTypeActionSchema, Act29SideSwitchCurretnAudioTypeActionSchema, Act31SideAddAreaPolluteActionSchema, Act31SideAssignAreaPolluteValueToBBActionSchema, Act31SideCheckInPolluteAreaActionSchema, Act31SideCheckRootTilePolluteValueActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA01>;
