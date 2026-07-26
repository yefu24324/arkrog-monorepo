/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxMarkEntityNotReward, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxMarkEntityNotRewardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxMarkEntityNotReward, Assembly-CSharp";
  /** SandboxMarkEntityNotRewardAction 的 `detailType` 配置字段；准确战斗语义待确认。 */
  "_detailType": "CATCHED" | "CATCHED_SHINING" | "STOLEN";
  /** SandboxMarkEntityNotRewardAction 的 `isUniEnemy` 配置字段；准确战斗语义待确认。 */
  "_isUniEnemy": boolean;
  /** SandboxMarkEntityNotRewardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SandboxMarkEntityNotRewardAction 的 `uniDetailType` 配置字段；准确战斗语义待确认。 */
  "_uniDetailType": "CATCHED" | "CATCHED_SHINING";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyDead, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxMarkRushEnemyDeadAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyDead, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyReachExit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxMarkRushEnemyReachExitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyReachExit, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxMarkTraceReached, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxMarkTraceReachedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxMarkTraceReached, Assembly-CSharp";
  /** SandboxMarkTraceReachedAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxProcessSpecialEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxProcessSpecialEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxProcessSpecialEnemy, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRecordBossState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRecordBossStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRecordBossState, Assembly-CSharp";
  /** SandboxRecordBossStateAction 的 `considerReborn` 配置字段；准确战斗语义待确认。 */
  "_considerReborn": boolean;
  /** SandboxRecordBossStateAction 的 `forceModeKey` 配置字段；准确战斗语义待确认。 */
  "_forceModeKey": string;
  /** SandboxRecordBossStateAction 的 `ignoreModeKey` 配置字段；准确战斗语义待确认。 */
  "_ignoreModeKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRecordPlacedItemState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRecordPlacedItemStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRecordPlacedItemState, Assembly-CSharp";
  /** SandboxRecordPlacedItemStateAction 的 `additionHpRatioKey` 配置字段；准确战斗语义待确认。 */
  "_additionHpRatioKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRecordUniEnemyStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRecordUniEnemyStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRecordUniEnemyStatus, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRecordUnitState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRecordUnitStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRecordUnitState, Assembly-CSharp";
  /** SandboxRecordUnitStateAction 的 `additionHpRatioKey` 配置字段；准确战斗语义待确认。 */
  "_additionHpRatioKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxRecordUsingConstructItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxRecordUsingConstructItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxRecordUsingConstructItem, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS03 = SandboxMarkEntityNotRewardAction | SandboxMarkRushEnemyDeadAction | SandboxMarkRushEnemyReachExitAction | SandboxMarkTraceReachedAction | SandboxProcessSpecialEnemyAction | SandboxRecordBossStateAction | SandboxRecordPlacedItemStateAction | SandboxRecordUniEnemyStatusAction | SandboxRecordUnitStateAction | SandboxRecordUsingConstructItemAction;
