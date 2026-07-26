/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ChangeWeather, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ChangeWeatherAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ChangeWeather, Assembly-CSharp";
  /** SandboxV3ChangeWeatherAction 的 `enable` 配置字段；准确战斗语义待确认。 */
  "_enable": boolean;
  /** SandboxV3ChangeWeatherAction 的 `weatherKey` 配置字段；准确战斗语义待确认。 */
  "_weatherKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3CharacterEscape, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3CharacterEscapeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3CharacterEscape, Assembly-CSharp";
  /** SandboxV3CharacterEscapeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3CheckIsAnimalEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3CheckIsAnimalEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3CheckIsAnimalEnemy, Assembly-CSharp";
  /** SandboxV3CheckIsAnimalEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3CheckRoomCanShow, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3CheckRoomCanShowAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3CheckRoomCanShow, Assembly-CSharp";
  /** SandboxV3CheckRoomCanShowAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。 */
  "_roomOffsetX": number;
  /** SandboxV3CheckRoomCanShowAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。 */
  "_roomOffsetY": number;
  /** SandboxV3CheckRoomCanShowAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3CheckTrapType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3CheckTrapTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3CheckTrapType, Assembly-CSharp";
  /** SandboxV3CheckTrapTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SandboxV3CheckTrapTypeAction 的 `trapType` 配置字段；准确战斗语义待确认。 */
  "_trapType": "AESTHETICS" | "PROCESSOR";
  /** SandboxV3CheckTrapTypeAction 的 `trapTypeKey` 配置字段；准确战斗语义待确认。 */
  "_trapTypeKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3EmitBaseTakeDamageEvt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3EmitBaseTakeDamageEvtAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3EmitBaseTakeDamageEvt, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3EntityDropItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3EntityDropItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3EntityDropItem, Assembly-CSharp";
  /** SandboxV3EntityDropItemAction 的 `amount` 配置字段；准确战斗语义待确认。 */
  "_amount": number;
  /** SandboxV3EntityDropItemAction 的 `amountKey` 配置字段；准确战斗语义待确认。 */
  "_amountKey": string;
  /** SandboxV3EntityDropItemAction 的 `itemIdKey` 配置字段；准确战斗语义待确认。 */
  "_itemIdKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "ENEMY";
  /** SandboxV3EntityDropItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ForceUnitDirty, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ForceUnitDirtyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ForceUnitDirty, Assembly-CSharp";
  /** SandboxV3ForceUnitDirtyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ImportantEnemyInheritStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ImportantEnemyInheritStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ImportantEnemyInheritStatus, Assembly-CSharp";
  /** SandboxV3ImportantEnemyInheritStatusAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3IsCatchedAnimal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3IsCatchedAnimalAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3IsCatchedAnimal, Assembly-CSharp";
  /** SandboxV3IsCatchedAnimalAction 的 `checkIsLegend` 配置字段；准确战斗语义待确认。 */
  "_checkIsLegend": boolean;
  /** SandboxV3IsCatchedAnimalAction 的 `isLegend` 配置字段；准确战斗语义待确认。 */
  "_isLegend": boolean;
  /** SandboxV3IsCatchedAnimalAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS05 = SandboxV3ChangeWeatherAction | SandboxV3CharacterEscapeAction | SandboxV3CheckIsAnimalEnemyAction | SandboxV3CheckRoomCanShowAction | SandboxV3CheckTrapTypeAction | SandboxV3EmitBaseTakeDamageEvtAction | SandboxV3EntityDropItemAction | SandboxV3ForceUnitDirtyAction | SandboxV3ImportantEnemyInheritStatusAction | SandboxV3IsCatchedAnimalAction;
