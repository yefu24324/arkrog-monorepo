/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyRealReachableToTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyRealReachableToTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyRealReachableToTile, Assembly-CSharp";
  /** CheckEnemyRealReachableToTileAction 的 `avoidObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_avoidObstacleLike": boolean;
  /** CheckEnemyRealReachableToTileAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** CheckEnemyRealReachableToTileAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** CheckEnemyRealReachableToTileAction 的 `targetEnemyType` 配置字段；准确战斗语义待确认。 */
  "_targetEnemyType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyRouteCheckpoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyRouteCheckpointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyRouteCheckpoint, Assembly-CSharp";
  /** CheckEnemyRouteCheckpointAction 的 `routeCheckpointMask` 配置字段；准确战斗语义待确认。 */
  "_routeCheckpointMask": number | "MOVE";
  /** CheckEnemyRouteCheckpointAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemySkillAffecting, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemySkillAffectingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemySkillAffecting, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemySkillReady, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemySkillReadyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemySkillReady, Assembly-CSharp";
  /** CheckEnemySkillReadyAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
  "_checkSkillActive": boolean;
  /** CheckEnemySkillReadyAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** CheckEnemySkillReadyAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
  "_skillName": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemySkillSelectorHasTargets, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemySkillSelectorHasTargetsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemySkillSelectorHasTargets, Assembly-CSharp";
  /** CheckEnemySkillSelectorHasTargetsAction 的 `assignTargetCountKey` 配置字段；准确战斗语义待确认。 */
  "_assignTargetCountKey": null;
  /** CheckEnemySkillSelectorHasTargetsAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
  "_checkSkillActive": boolean;
  /** CheckEnemySkillSelectorHasTargetsAction 的 `checkSkillReady` 配置字段；准确战斗语义待确认。 */
  "_checkSkillReady": boolean;
  /** CheckEnemySkillSelectorHasTargetsAction 的 `minTargetCount` 配置字段；准确战斗语义待确认。 */
  "_minTargetCount": number;
  /** CheckEnemySkillSelectorHasTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** CheckEnemySkillSelectorHasTargetsAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
  "_skillName": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemySummoned, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemySummonedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemySummoned, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyTalentContainsKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyTalentContainsKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyTalentContainsKey, Assembly-CSharp";
  /** CheckEnemyTalentContainsKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** CheckEnemyTalentContainsKeyAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyUnbalanced, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyUnbalancedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyUnbalanced, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyWhetherReachedSomeCheckPoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyWhetherReachedSomeCheckPointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyWhetherReachedSomeCheckPoint, Assembly-CSharp";
  /** CheckEnemyWhetherReachedSomeCheckPointAction 的 `backToFront` 配置字段；准确战斗语义待确认。 */
  "_backToFront": boolean;
  /** CheckEnemyWhetherReachedSomeCheckPointAction 的 `checkPointIndex` 配置字段；准确战斗语义待确认。 */
  "_checkPointIndex": number;
  /** CheckEnemyWhetherReachedSomeCheckPointAction 的 `indexBbKey` 配置字段；准确战斗语义待确认。 */
  "_indexBbKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEntityDisappeared, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEntityDisappearedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEntityDisappeared, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC10 = CheckEnemyRealReachableToTileAction | CheckEnemyRouteCheckpointAction | CheckEnemySkillAffectingAction | CheckEnemySkillReadyAction | CheckEnemySkillSelectorHasTargetsAction | CheckEnemySummonedAction | CheckEnemyTalentContainsKeyAction | CheckEnemyUnbalancedAction | CheckEnemyWhetherReachedSomeCheckPointAction | CheckEntityDisappearedAction;
