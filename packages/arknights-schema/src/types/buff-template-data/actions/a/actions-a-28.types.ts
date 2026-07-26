/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutoChessFreezeStore, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutoChessFreezeStoreAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutoChessFreezeStore, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutoChessRefreshStore, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutoChessRefreshStoreAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutoChessRefreshStore, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutoChessUpgradeStore, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutoChessUpgradeStoreAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutoChessUpgradeStore, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AverageHealViaHpUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AverageHealViaHpUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AverageHealViaHpUseAbilitySelector, Assembly-CSharp";
  /** AverageHealViaHpUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** AverageHealViaHpUseAbilitySelectorAction 的 `alsoEpHeal` 配置字段；准确战斗语义待确认。 */
  "_alsoEpHeal": boolean;
  /** AverageHealViaHpUseAbilitySelectorAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** AverageHealViaHpUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** AverageHealViaHpUseAbilitySelectorAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。 */
  "_getMaxHpFromTarget": boolean;
  /** AverageHealViaHpUseAbilitySelectorAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** AverageHealViaHpUseAbilitySelectorAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AverageHealViaHpUseAbilitySelectorAction 的 `useCurHp` 配置字段；准确战斗语义待确认。 */
  "_useCurHp": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA28 = AutoChessFreezeStoreAction | AutoChessRefreshStoreAction | AutoChessUpgradeStoreAction | AverageHealViaHpUseAbilitySelectorAction;
