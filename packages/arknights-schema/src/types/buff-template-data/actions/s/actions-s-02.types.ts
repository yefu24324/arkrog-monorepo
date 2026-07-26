/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxEnableTraceTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxEnableTraceTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxEnableTraceTarget, Assembly-CSharp";
  /** SandboxEnableTraceTargetAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
  "_enabled": boolean;
  /** SandboxEnableTraceTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
  /** SandboxEnableTraceTargetAction 的 `traceTileInstead` 配置字段；准确战斗语义待确认。 */
  "_traceTileInstead": boolean;
  /** SandboxEnableTraceTargetAction 的 `wholeTraceInstead` 配置字段；准确战斗语义待确认。 */
  "_wholeTraceInstead": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxEntityDropItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxEntityDropItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxEntityDropItem, Assembly-CSharp";
  /** SandboxEntityDropItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SandboxEntityDropItemAction 的 `type` 配置字段；准确战斗语义待确认。 */
  "_type": "ENEMY" | "TRAP";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxHunterDropItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxHunterDropItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxHunterDropItem, Assembly-CSharp";
  /** SandboxHunterDropItemAction 的 `detailType` 配置字段；准确战斗语义待确认。 */
  "_detailType": "STOLEN";
  /** SandboxHunterDropItemAction 的 `owner` 配置字段；准确战斗语义待确认。 */
  "_owner": "BUFF_OWNER";
  /** SandboxHunterDropItemAction 的 `type` 配置字段；准确战斗语义待确认。 */
  "_type": "ENEMY";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxHunterKillEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxHunterKillEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxHunterKillEnemy, Assembly-CSharp";
  /** SandboxHunterKillEnemyAction 的 `huntBuffKey` 配置字段；准确战斗语义待确认。 */
  "_huntBuffKey": string;
  /** SandboxHunterKillEnemyAction 的 `owner` 配置字段；准确战斗语义待确认。 */
  "_owner": "BUFF_OWNER";
  /** SandboxHunterKillEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxIsConstructItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxIsConstructItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxIsConstructItem, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxIsFactoryTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxIsFactoryTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxIsFactoryTrap, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxIsPlacedItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxIsPlacedItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxIsPlacedItem, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxIsRushEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxIsRushEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxIsRushEnemy, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxIsRushEnemyMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxIsRushEnemyModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxIsRushEnemyMode, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxLogEnemyEvent, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxLogEnemyEventAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxLogEnemyEvent, Assembly-CSharp";
  /** SandboxLogEnemyEventAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** SandboxLogEnemyEventAction 的 `eventId` 配置字段；准确战斗语义待确认。 */
  "_eventId": string;
  /** SandboxLogEnemyEventAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS02 = SandboxEnableTraceTargetAction | SandboxEntityDropItemAction | SandboxHunterDropItemAction | SandboxHunterKillEnemyAction | SandboxIsConstructItemAction | SandboxIsFactoryTrapAction | SandboxIsPlacedItemAction | SandboxIsRushEnemyAction | SandboxIsRushEnemyModeAction | SandboxLogEnemyEventAction;
