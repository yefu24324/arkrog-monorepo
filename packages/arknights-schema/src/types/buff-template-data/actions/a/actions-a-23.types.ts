/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignModifierValueIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignModifierValueIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignModifierValueIntoBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignModifierValueIntoBlackboardAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
  "_filterModifierCancelled": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignNearestReachableTileToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignNearestReachableTileToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignNearestReachableTileToBB, Assembly-CSharp";
  /** AssignNearestReachableTileToBBAction 的 `checkOnSameTile` 配置字段；准确战斗语义待确认。 */
  "_checkOnSameTile": boolean;
  /** AssignNearestReachableTileToBBAction 的 `excludedTileKey` 配置字段；准确战斗语义待确认。 */
  "_excludedTileKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignNearestReachableTileWithoutCharOnPath, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignNearestReachableTileWithoutCharOnPathAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignNearestReachableTileWithoutCharOnPath, Assembly-CSharp";
  /** AssignNearestReachableTileWithoutCharOnPathAction 的 `buildableMask` 配置字段；准确战斗语义待确认。 */
  "_buildableMask": "NIGHT";
  /** AssignNearestReachableTileWithoutCharOnPathAction 的 `filterBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_filterBuildableMask": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignNodeCountToBb, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignNodeCountToBbAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignNodeCountToBb, Assembly-CSharp";
  /** AssignNodeCountToBbAction 的 `assignKey` 配置字段；准确战斗语义待确认。 */
  "_assignKey": string;
  /** AssignNodeCountToBbAction 的 `isMainMap` 配置字段；准确战斗语义待确认。 */
  "_isMainMap": boolean;
  /** AssignNodeCountToBbAction 的 `isNotChoosedState` 配置字段；准确战斗语义待确认。 */
  "_isNotChoosedState": boolean;
  /** AssignNodeCountToBbAction 的 `state` 配置字段；准确战斗语义待确认。 */
  "_state": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignOverflowDamageToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignOverflowDamageToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignOverflowDamageToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignOverflowDamageToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignPlayerSideCostIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignPlayerSideCostIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignPlayerSideCostIntoBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignPlayTimeToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignPlayTimeToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignPlayTimeToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignProfessionCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignProfessionCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignProfessionCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignProfessionCntToBlackboardAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
  "_professionCategory": "CASTER" | "MEDIC" | "TANK";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignProjectileGridPosToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignProjectileGridPosToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignProjectileGridPosToBB, Assembly-CSharp";
  /** AssignProjectileGridPosToBBAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** AssignProjectileGridPosToBBAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignRandomBBKeyToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignRandomBBKeyToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignRandomBBKeyToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignRandomBBKeyToBBAction 的 `maxValue` 配置字段；准确战斗语义待确认。 */
  "_maxValue": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA23 = AssignModifierValueIntoBlackboardAction | AssignNearestReachableTileToBBAction | AssignNearestReachableTileWithoutCharOnPathAction | AssignNodeCountToBbAction | AssignOverflowDamageToBlackboardAction | AssignPlayerSideCostIntoBlackboardAction | AssignPlayTimeToBBAction | AssignProfessionCntToBlackboardAction | AssignProjectileGridPosToBBAction | AssignRandomBBKeyToBBAction;
