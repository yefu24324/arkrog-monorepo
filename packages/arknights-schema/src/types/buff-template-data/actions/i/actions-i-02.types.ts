/**
 * buff_template_data 的 I 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfTarget, Assembly-CSharp";
  /** IfTargetAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "ALL" | "NONE" | "RANGED";
  /** IfTargetAction 的 `checkApplyWay` 配置字段；准确战斗语义待确认。 */
  "_checkApplyWay": boolean;
  /** IfTargetAction 的 `checkTargetAlive` 配置字段；准确战斗语义待确认。 */
  "_checkTargetAlive": boolean;
  /** IfTargetAction 的 `checkTargetFree` 配置字段；准确战斗语义待确认。 */
  "_checkTargetFree": boolean;
  /** IfTargetAction 的 `checkTargetUnitType` 配置字段；准确战斗语义待确认。 */
  "_checkTargetUnitType": boolean;
  /** IfTargetAction 的 `motionMask` 配置字段；准确战斗语义待确认。 */
  "_motionMask": "ALL" | "FLY_ONLY" | "NONE" | "WALK_ONLY";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "PROJECTILE_TRACETARGET" | "SOURCE" | "TARGET";
  /** IfTargetAction 的 `unitType` 配置字段；准确战斗语义待确认。 */
  "_unitType": "CHARACTER" | "ENEMY";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfTargetEqual, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfTargetEqualAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfTargetEqual, Assembly-CSharp";
  /** IfTargetEqualAction 的 `equalIfBothNull` 配置字段；准确战斗语义待确认。 */
  "_equalIfBothNull": boolean;
  /** IfTargetEqualAction 的 `target1` 配置字段；准确战斗语义待确认。 */
  "_target1": string;
  /** IfTargetEqualAction 的 `target2` 配置字段；准确战斗语义待确认。 */
  "_target2": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfTargetFromDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfTargetFromDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfTargetFromDirection, Assembly-CSharp";
  /** IfTargetFromDirectionAction 的 `checkTargetIsFromDirection` 配置字段；准确战斗语义待确认。 */
  "_checkTargetIsFromDirection": boolean;
  /** IfTargetFromDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "MODIFIER_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfTargetSide, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfTargetSideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfTargetSide, Assembly-CSharp";
  /** IfTargetSideAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
  "_sideMask": "ALLY" | "ENEMY" | "NEUTRAL";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "PROJECTILE_TRACETARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IgnoreAllButMoveCp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IgnoreAllButMoveCpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IgnoreAllButMoveCp, Assembly-CSharp";
  /** IgnoreAllButMoveCpAction 的 `ignore` 配置字段；准确战斗语义待确认。 */
  "_ignore": boolean;
  /** IgnoreAllButMoveCpAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InitBossRushController, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InitBossRushControllerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InitBossRushController, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InitBossRushRecodr, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InitBossRushRecodrAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InitBossRushRecodr, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InitFootball, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InitFootballAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InitFootball, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InitForces, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InitForcesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InitForces, Assembly-CSharp";
  /** InitForcesAction 的 `clearanceForceKey` 配置字段；准确战斗语义待确认。 */
  "_clearanceForceKey": string;
  /** InitForcesAction 的 `passBallForceKey` 配置字段；准确战斗语义待确认。 */
  "_passBallForceKey": string;
  /** InitForcesAction 的 `slapShotForceKey` 配置字段；准确战斗语义待确认。 */
  "_slapShotForceKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InsertCheckPointInRuntimeRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InsertCheckPointInRuntimeRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InsertCheckPointInRuntimeRoute, Assembly-CSharp";
  /** InsertCheckPointInRuntimeRouteAction 的 `addIntoRuntimeRoute` 配置字段；准确战斗语义待确认。 */
  "_addIntoRuntimeRoute": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `checkReachable` 配置字段；准确战斗语义待确认。 */
  "_checkReachable": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `clearRouteBeforeInsert` 配置字段；准确战斗语义待确认。 */
  "_clearRouteBeforeInsert": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `insertIndex` 配置字段；准确战斗语义待确认。 */
  "_insertIndex": number;
  /** InsertCheckPointInRuntimeRouteAction 的 `manuallySpecifyInsertIndex` 配置字段；准确战斗语义待确认。 */
  "_manuallySpecifyInsertIndex": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `manuallySpecifyReassignIndex` 配置字段；准确战斗语义待确认。 */
  "_manuallySpecifyReassignIndex": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `randomizeReachOffset` 配置字段；准确战斗语义待确认。 */
  "_randomizeReachOffset": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `reachOffset` 配置字段；准确战斗语义待确认。 */
  "_reachOffset": {
                       /** InsertCheckPointInRuntimeRouteAction 的 `x` 配置字段；准确战斗语义待确认。 */
                       "x": number;
                       /** InsertCheckPointInRuntimeRouteAction 的 `y` 配置字段；准确战斗语义待确认。 */
                       "y": number;
                     };
  /** InsertCheckPointInRuntimeRouteAction 的 `reassignIndex` 配置字段；准确战斗语义待确认。 */
  "_reassignIndex": number;
  /** InsertCheckPointInRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** InsertCheckPointInRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** InsertCheckPointInRuntimeRouteAction 的 `time` 配置字段；准确战斗语义待确认。 */
  "_time": number;
  /** InsertCheckPointInRuntimeRouteAction 的 `toMapPosition` 配置字段；准确战斗语义待确认。 */
  "_toMapPosition": boolean;
  /** InsertCheckPointInRuntimeRouteAction 的 `type` 配置字段；准确战斗语义待确认。 */
  "_type": "MOVE" | "WAIT_FOR_SECONDS";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionI02 = IfTargetAction | IfTargetEqualAction | IfTargetFromDirectionAction | IfTargetSideAction | IgnoreAllButMoveCpAction | InitBossRushControllerAction | InitBossRushRecodrAction | InitFootballAction | InitForcesAction | InsertCheckPointInRuntimeRouteAction;
