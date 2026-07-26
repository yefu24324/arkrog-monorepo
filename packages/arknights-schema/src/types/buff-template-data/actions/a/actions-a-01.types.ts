/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act20SideModeOnlyIncreaseScore, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act20SideModeOnlyIncreaseScoreAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act20SideModeOnlyIncreaseScore, Assembly-CSharp";
  /** Act20SideModeOnlyIncreaseScoreAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act27sideAddTilesToEnemySideBlackList, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act27sideAddTilesToEnemySideBlackListAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act27sideAddTilesToEnemySideBlackList, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act27sideModifyAllAllyTileCachedSideType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act27sideModifyAllAllyTileCachedSideTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act27sideModifyAllAllyTileCachedSideType, Assembly-CSharp";
  /** Act27sideModifyAllAllyTileCachedSideTypeAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act27sideModifyTileCachedSideType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act27sideModifyTileCachedSideTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act27sideModifyTileCachedSideType, Assembly-CSharp";
  /** Act27sideModifyTileCachedSideTypeAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
  "_sideType": "ALLY" | "ENEMY";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "MAIN_TARGET" | "MODIFIER_TARGET";
  /** Act27sideModifyTileCachedSideTypeAction 的 `useRangeId` 配置字段；准确战斗语义待确认。 */
  "_useRangeId": boolean;
  /** Act27sideModifyTileCachedSideTypeAction 的 `useTileInSnapShot` 配置字段；准确战斗语义待确认。 */
  "_useTileInSnapShot": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act29SideCheckCurrentAudioType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act29SideCheckCurrentAudioTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act29SideCheckCurrentAudioType, Assembly-CSharp";
  /** Act29SideCheckCurrentAudioTypeAction 的 `audioType` 配置字段；准确战斗语义待确认。 */
  "_audioType": "Depressed" | "Enthusiastic" | "None";
  /** Act29SideCheckCurrentAudioTypeAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
  "_evnSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act29SideSwitchCurretnAudioType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act29SideSwitchCurretnAudioTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act29SideSwitchCurretnAudioType, Assembly-CSharp";
  /** Act29SideSwitchCurretnAudioTypeAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
  "_evnSysKey": string;
  /** Act29SideSwitchCurretnAudioTypeAction 的 `isFirstTime` 配置字段；准确战斗语义待确认。 */
  "_isFirstTime": boolean;
  /** Act29SideSwitchCurretnAudioTypeAction 的 `isTriggeredByBoss` 配置字段；准确战斗语义待确认。 */
  "_isTriggeredByBoss": boolean;
  /** Act29SideSwitchCurretnAudioTypeAction 的 `muteAudio` 配置字段；准确战斗语义待确认。 */
  "_muteAudio": boolean;
  /** Act29SideSwitchCurretnAudioTypeAction 的 `switchToOposite` 配置字段；准确战斗语义待确认。 */
  "_switchToOposite": boolean;
  /** Act29SideSwitchCurretnAudioTypeAction 的 `typeKey` 配置字段；准确战斗语义待确认。 */
  "_typeKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideAddAreaPollute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideAddAreaPolluteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideAddAreaPollute, Assembly-CSharp";
  /** Act31SideAddAreaPolluteAction 的 `addPolluteV` 配置字段；准确战斗语义待确认。 */
  "_addPolluteV": number;
  /** Act31SideAddAreaPolluteAction 的 `needCheckTile` 配置字段；准确战斗语义待确认。 */
  "_needCheckTile": boolean;
  /** Act31SideAddAreaPolluteAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Act31SideAddAreaPolluteAction 的 `useSnapshotTile` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideAssignAreaPolluteValueToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideAssignAreaPolluteValueToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideAssignAreaPolluteValueToBB, Assembly-CSharp";
  /** Act31SideAssignAreaPolluteValueToBBAction 的 `assignPVRatio` 配置字段；准确战斗语义待确认。 */
  "_assignPVRatio": boolean;
  /** Act31SideAssignAreaPolluteValueToBBAction 的 `assignTilePV` 配置字段；准确战斗语义待确认。 */
  "_assignTilePV": boolean;
  /** Act31SideAssignAreaPolluteValueToBBAction 的 `polluteVKey` 配置字段；准确战斗语义待确认。 */
  "_polluteVKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideCheckInPolluteArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideCheckInPolluteAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideCheckInPolluteArea, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideCheckRootTilePolluteValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideCheckRootTilePolluteValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideCheckRootTilePolluteValue, Assembly-CSharp";
  /** Act31SideCheckRootTilePolluteValueAction 的 `checkSourceBehindTile` 配置字段；准确战斗语义待确认。 */
  "_checkSourceBehindTile": boolean;
  /** Act31SideCheckRootTilePolluteValueAction 的 `checkValue` 配置字段；准确战斗语义待确认。 */
  "_checkValue": number;
  /** Act31SideCheckRootTilePolluteValueAction 的 `checkValueKey` 配置字段；准确战斗语义待确认。 */
  "_checkValueKey": string;
  /** Act31SideCheckRootTilePolluteValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "GT";
  /** Act31SideCheckRootTilePolluteValueAction 的 `needAreaPV` 配置字段；准确战斗语义待确认。 */
  "_needAreaPV": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA01 = Act20SideModeOnlyIncreaseScoreAction | Act27sideAddTilesToEnemySideBlackListAction | Act27sideModifyAllAllyTileCachedSideTypeAction | Act27sideModifyTileCachedSideTypeAction | Act29SideCheckCurrentAudioTypeAction | Act29SideSwitchCurretnAudioTypeAction | Act31SideAddAreaPolluteAction | Act31SideAssignAreaPolluteValueToBBAction | Act31SideCheckInPolluteAreaAction | Act31SideCheckRootTilePolluteValueAction;
