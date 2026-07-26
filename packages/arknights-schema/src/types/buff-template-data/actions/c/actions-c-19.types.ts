/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitInMoveState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitInMoveStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitInMoveState, Assembly-CSharp";
  /** CheckUnitInMoveStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitInRebornState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitInRebornStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitInRebornState, Assembly-CSharp";
  /** CheckUnitInRebornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitRootTileInTargetAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitRootTileInTargetAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitRootTileInTargetAttackRange, Assembly-CSharp";
  /** CheckUnitRootTileInTargetAttackRangeAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitSideOfMap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitSideOfMapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitSideOfMap, Assembly-CSharp";
  /** CheckUnitSideOfMapAction 的 `checkLeft` 配置字段；准确战斗语义待确认。 */
  "_checkLeft": boolean;
  /** CheckUnitSideOfMapAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearAllBuffs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearAllBuffsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearAllBuffs, Assembly-CSharp";
  /** ClearAllBuffsAction 的 `alsoRemoveDurableBuff` 配置字段；准确战斗语义待确认。 */
  "_alsoRemoveDurableBuff": boolean;
  /** ClearAllBuffsAction 的 `retainedBuffsWhenClear` 配置字段；准确战斗语义待确认。 */
  "_retainedBuffsWhenClear": Array<string>;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearCharacterOnTileIfExists, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearCharacterOnTileIfExistsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearCharacterOnTileIfExists, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearCharacterSp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearCharacterSpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearCharacterSp, Assembly-CSharp";
  /** ClearCharacterSpAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
  "_charFrom": string;
  /** ClearCharacterSpAction 的 `forceFlag` 配置字段；准确战斗语义待确认。 */
  "_forceFlag": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearCheckpointInRuntimeRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearCheckpointInRuntimeRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearCheckpointInRuntimeRoute, Assembly-CSharp";
  /** ClearCheckpointInRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearEnemySp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearEnemySpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearEnemySp, Assembly-CSharp";
  /** ClearEnemySpAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
  "_enemy": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearFirstBuffBlackboardByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearFirstBuffBlackboardByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearFirstBuffBlackboardByKey, Assembly-CSharp";
  /** ClearFirstBuffBlackboardByKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC19 = CheckUnitInMoveStateAction | CheckUnitInRebornStateAction | CheckUnitRootTileInTargetAttackRangeAction | CheckUnitSideOfMapAction | ClearAllBuffsAction | ClearCharacterOnTileIfExistsAction | ClearCharacterSpAction | ClearCheckpointInRuntimeRouteAction | ClearEnemySpAction | ClearFirstBuffBlackboardByKeyAction;
