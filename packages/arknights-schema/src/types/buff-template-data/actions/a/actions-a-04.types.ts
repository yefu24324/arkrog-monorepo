/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act38SideCheckFunLevelLost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act38SideCheckFunLevelLostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act38SideCheckFunLevelLost, Assembly-CSharp";
  /** Act38SideCheckFunLevelLostAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act38SideFilterFireworkCondition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act38SideFilterFireworkConditionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act38SideFilterFireworkCondition, Assembly-CSharp";
  /** Act38SideFilterFireworkConditionAction 的 `checkLevel` 配置字段；准确战斗语义待确认。 */
  "_checkLevel": boolean;
  /** Act38SideFilterFireworkConditionAction 的 `checkType` 配置字段；准确战斗语义待确认。 */
  "_checkType": boolean;
  /** Act38SideFilterFireworkConditionAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act38SideFilterFireworkConditionAction 的 `fireworkLevel` 配置字段；准确战斗语义待确认。 */
  "_fireworkLevel": number;
  /** Act38SideFilterFireworkConditionAction 的 `fireworkType` 配置字段；准确战斗语义待确认。 */
  "_fireworkType": "BLUE" | "GREEN" | "RED" | "YELLOW";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act38SideLogKilled, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act38SideLogKilledAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act38SideLogKilled, Assembly-CSharp";
  /** Act38SideLogKilledAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act38SideLogKilledAction 的 `isKilledByBoss` 配置字段；准确战斗语义待确认。 */
  "_isKilledByBoss": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act38SideTryGetRouteAndCacheOrigin, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act38SideTryGetRouteAndCacheOriginAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act38SideTryGetRouteAndCacheOrigin, Assembly-CSharp";
  /** Act38SideTryGetRouteAndCacheOriginAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act38SideTryGetRouteAndCacheOriginAction 的 `restoreCache` 配置字段；准确战斗语义待确认。 */
  "_restoreCache": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act42SideShownMapHiddenArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act42SideShownMapHiddenAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act42SideShownMapHiddenArea, Assembly-CSharp";
  /** Act42SideShownMapHiddenAreaAction 的 `areaIndexKey` 配置字段；准确战斗语义待确认。 */
  "_areaIndexKey": string;
  /** Act42SideShownMapHiddenAreaAction 的 `areaPreStrKey` 配置字段；准确战斗语义待确认。 */
  "_areaPreStrKey": string;
  /** Act42SideShownMapHiddenAreaAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
  "_envSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act43SideCheckIsCharacterShooting, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act43SideCheckIsCharacterShootingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act43SideCheckIsCharacterShooting, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act43SideFaceToLOrRViaShootingArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act43SideFaceToLOrRViaShootingAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act43SideFaceToLOrRViaShootingArea, Assembly-CSharp";
  /** Act43SideFaceToLOrRViaShootingAreaAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act43SideIsInShootingArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act43SideIsInShootingAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act43SideIsInShootingArea, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act43SideOnBlockChanged, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act43SideOnBlockChangedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act43SideOnBlockChanged, Assembly-CSharp";
  /** Act43SideOnBlockChangedAction 的 `isActivate` 配置字段；准确战斗语义待确认。 */
  "_isActivate": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act43SideOnEnemyInteractWithShootingArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act43SideOnEnemyInteractWithShootingAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act43SideOnEnemyInteractWithShootingArea, Assembly-CSharp";
  /** Act43SideOnEnemyInteractWithShootingAreaAction 的 `isEnter` 配置字段；准确战斗语义待确认。 */
  "_isEnter": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA04 = Act38SideCheckFunLevelLostAction | Act38SideFilterFireworkConditionAction | Act38SideLogKilledAction | Act38SideTryGetRouteAndCacheOriginAction | Act42SideShownMapHiddenAreaAction | Act43SideCheckIsCharacterShootingAction | Act43SideFaceToLOrRViaShootingAreaAction | Act43SideIsInShootingAreaAction | Act43SideOnBlockChangedAction | Act43SideOnEnemyInteractWithShootingAreaAction;
