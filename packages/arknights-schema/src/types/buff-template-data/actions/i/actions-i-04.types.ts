/**
 * buff_template_data 的 I 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsBlackboardEqualWithFloat, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsBlackboardEqualWithFloatAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsBlackboardEqualWithFloat, Assembly-CSharp";
  /** IsBlackboardEqualWithFloatAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
  "_compareValue": number;
  /** IsBlackboardEqualWithFloatAction 的 `var` 配置字段；准确战斗语义待确认。 */
  "_var": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsBlackboardEqualWithString, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsBlackboardEqualWithStringAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsBlackboardEqualWithString, Assembly-CSharp";
  /** IsBlackboardEqualWithStringAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** IsBlackboardEqualWithStringAction 的 `compareBBKey` 配置字段；准确战斗语义待确认。 */
  "_compareBBKey": null | string;
  /** IsBlackboardEqualWithStringAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
  "_compareValue": null | string;
  /** IsBlackboardEqualWithStringAction 的 `useBuffBlackboard` 配置字段；准确战斗语义待确认。 */
  "_useBuffBlackboard": boolean;
  /** IsBlackboardEqualWithStringAction 的 `var` 配置字段；准确战斗语义待确认。 */
  "_var": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsBlackboardZero, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsBlackboardZeroAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsBlackboardZero, Assembly-CSharp";
  /** IsBlackboardZeroAction 的 `noVarShowWarning` 配置字段；准确战斗语义待确认。 */
  "_noVarShowWarning": boolean;
  /** IsBlackboardZeroAction 的 `var` 配置字段；准确战斗语义待确认。 */
  "_var": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsCharacter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsCharacterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsCharacter, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsCharacterOrTokenOrTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsCharacterOrTokenOrTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsCharacterOrTokenOrTrap, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsCloseToFootball, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsCloseToFootballAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsCloseToFootball, Assembly-CSharp";
  /** IsCloseToFootballAction 的 `ignoreIsSelected` 配置字段；准确战斗语义待确认。 */
  "_ignoreIsSelected": boolean;
  /** IsCloseToFootballAction 的 `justCloseNotStop` 配置字段；准确战斗语义待确认。 */
  "_justCloseNotStop": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsConsumerOfTrySetHpZeroModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsConsumerOfTrySetHpZeroModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsConsumerOfTrySetHpZeroModifier, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsDamage, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsElementDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsElementDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsElementDamage, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsElementHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsElementHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsElementHeal, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionI04 = IsBlackboardEqualWithFloatAction | IsBlackboardEqualWithStringAction | IsBlackboardZeroAction | IsCharacterAction | IsCharacterOrTokenOrTrapAction | IsCloseToFootballAction | IsConsumerOfTrySetHpZeroModifierAction | IsDamageAction | IsElementDamageAction | IsElementHealAction;
