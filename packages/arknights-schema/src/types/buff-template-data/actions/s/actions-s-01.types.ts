/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxAssignCharacterCountWithFoodToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxAssignCharacterCountWithFoodToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxAssignCharacterCountWithFoodToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxAssignDayCountToBb, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxAssignDayCountToBbAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxAssignDayCountToBb, Assembly-CSharp";
  /** SandboxAssignDayCountToBbAction 的 `assignKey` 配置字段；准确战斗语义待确认。 */
  "_assignKey": string;
  /** SandboxAssignDayCountToBbAction 的 `isMainMap` 配置字段；准确战斗语义待确认。 */
  "_isMainMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCatchInsect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCatchInsectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCatchInsect, Assembly-CSharp";
  /** SandboxCatchInsectAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCheckCurrentMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCheckCurrentModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCheckCurrentMode, Assembly-CSharp";
  /** SandboxCheckCurrentModeAction 的 `checkBuildMode` 配置字段；准确战斗语义待确认。 */
  "_checkBuildMode": boolean;
  /** SandboxCheckCurrentModeAction 的 `checkNodeType` 配置字段；准确战斗语义待确认。 */
  "_checkNodeType": boolean;
  /** SandboxCheckCurrentModeAction 的 `checkSeasonType` 配置字段；准确战斗语义待确认。 */
  "_checkSeasonType": boolean;
  /** SandboxCheckCurrentModeAction 的 `checkWeatherType` 配置字段；准确战斗语义待确认。 */
  "_checkWeatherType": boolean;
  /** SandboxCheckCurrentModeAction 的 `sandboxNodeTypeV2` 配置字段；准确战斗语义待确认。 */
  "_sandboxNodeTypeV2": string;
  /** SandboxCheckCurrentModeAction 的 `sandboxSeasonTypeV2` 配置字段；准确战斗语义待确认。 */
  "_sandboxSeasonTypeV2": string;
  /** SandboxCheckCurrentModeAction 的 `sandboxWeatherType` 配置字段；准确战斗语义待确认。 */
  "_sandboxWeatherType": null | "weather_big_sandstorm" | "weather_heat" | "weather_heat_wave" | "weather_sandstorm" | "weather_thunder" | "weather_thunder_storm";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCheckEnemyCanTraceTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCheckEnemyCanTraceTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCheckEnemyCanTraceTarget, Assembly-CSharp";
  /** SandboxCheckEnemyCanTraceTargetAction 的 `checkHasTraceTarget` 配置字段；准确战斗语义待确认。 */
  "_checkHasTraceTarget": boolean;
  /** SandboxCheckEnemyCanTraceTargetAction 的 `checkHasTraceTargetNow` 配置字段；准确战斗语义待确认。 */
  "_checkHasTraceTargetNow": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCheckHasFoodBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCheckHasFoodBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCheckHasFoodBuff, Assembly-CSharp";
  /** SandboxCheckHasFoodBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCheckHasResource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCheckHasResourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCheckHasResource, Assembly-CSharp";
  /** SandboxCheckHasResourceAction 的 `checkFull` 配置字段；准确战斗语义待确认。 */
  "_checkFull": boolean;
  /** SandboxCheckHasResourceAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCheckSpecialUniEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCheckSpecialUniEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCheckSpecialUniEnemy, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxCollectPackedRes, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxCollectPackedResAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxCollectPackedRes, Assembly-CSharp";
  /** SandboxCollectPackedResAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxDisableClickCharacterInfo, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxDisableClickCharacterInfoAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxDisableClickCharacterInfo, Assembly-CSharp";
  /** SandboxDisableClickCharacterInfoAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
  "_enabled": boolean;
  /** SandboxDisableClickCharacterInfoAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS01 = SandboxAssignCharacterCountWithFoodToBlackboardAction | SandboxAssignDayCountToBbAction | SandboxCatchInsectAction | SandboxCheckCurrentModeAction | SandboxCheckEnemyCanTraceTargetAction | SandboxCheckHasFoodBuffAction | SandboxCheckHasResourceAction | SandboxCheckSpecialUniEnemyAction | SandboxCollectPackedResAction | SandboxDisableClickCharacterInfoAction;
