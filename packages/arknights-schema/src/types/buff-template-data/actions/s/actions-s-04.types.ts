/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRefreshBossState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRefreshBossStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRefreshBossState, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRefreshPlacedItemState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRefreshPlacedItemStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRefreshPlacedItemState, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRefreshUnitState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRefreshUnitStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRefreshUnitState, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxSetEnemyTraceTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxSetEnemyTraceTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxSetEnemyTraceTarget, Assembly-CSharp";
  /** SandboxSetEnemyTraceTargetAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "MODIFIER_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxSetUniEnemyStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxSetUniEnemyStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxSetUniEnemyStatus, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxShowToast, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxShowToastAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxShowToast, Assembly-CSharp";
  /** SandboxShowToastAction 的 `lastTime` 配置字段；准确战斗语义待确认。 */
  "_lastTime": number;
  /** SandboxShowToastAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SandboxShowToastAction 的 `toastKey` 配置字段；准确战斗语义待确认。 */
  "_toastKey": string;
  /** SandboxShowToastAction 的 `useNameAsParmInMap` 配置字段；准确战斗语义待确认。 */
  "_useNameAsParmInMap": boolean;
  /** SandboxShowToastAction 的 `useStringTableKey` 配置字段；准确战斗语义待确认。 */
  "_useStringTableKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxTransferRes, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxTransferResAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxTransferRes, Assembly-CSharp";
  /** SandboxTransferResAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** SandboxTransferResAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxUniEnemyCheckTraceTargetInAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxUniEnemyCheckTraceTargetInAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxUniEnemyCheckTraceTargetInAttackRange, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3AssignRecipeInfoToBb, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3AssignRecipeInfoToBbAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3AssignRecipeInfoToBb, Assembly-CSharp";
  /** SandboxV3AssignRecipeInfoToBbAction 的 `prosperityKey` 配置字段；准确战斗语义待确认。 */
  "_prosperityKey": string;
  /** SandboxV3AssignRecipeInfoToBbAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3CatchAnimalEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3CatchAnimalEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3CatchAnimalEnemy, Assembly-CSharp";
  /** SandboxV3CatchAnimalEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS04 = SandboxRefreshBossStateAction | SandboxRefreshPlacedItemStateAction | SandboxRefreshUnitStateAction | SandboxSetEnemyTraceTargetAction | SandboxSetUniEnemyStatusAction | SandboxShowToastAction | SandboxTransferResAction | SandboxUniEnemyCheckTraceTargetInAttackRangeAction | SandboxV3AssignRecipeInfoToBbAction | SandboxV3CatchAnimalEnemyAction;
