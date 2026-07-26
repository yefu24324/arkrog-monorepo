/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEntityEquals, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEntityEqualsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEntityEquals, Assembly-CSharp";
  /** CheckEntityEqualsAction 的 `lhsType` 配置字段；准确战斗语义待确认。 */
  "_lhsType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** CheckEntityEqualsAction 的 `rhsType` 配置字段；准确战斗语义待确认。 */
  "_rhsType": "BUFF_SOURCE" | "MODIFIER_SOURCE" | "PROJECTILE_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEntityInAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEntityInAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEntityInAttackRange, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CheckEntityInAttackRangeAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。 */
  "_useSourceHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEntitySuicide, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEntitySuicideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEntitySuicide, Assembly-CSharp";
  /** CheckEntitySuicideAction 的 `entity` 配置字段；准确战斗语义待确认。 */
  "_entity": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckFaceDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckFaceDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckFaceDirection, Assembly-CSharp";
  /** CheckFaceDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** CheckFaceDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckFaceLOrR, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckFaceLOrRAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckFaceLOrR, Assembly-CSharp";
  /** CheckFaceLOrRAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** CheckFaceLOrRAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckFilterTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckFilterTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckFilterTag, Assembly-CSharp";
  /** CheckFilterTagAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": string;
  /** CheckFilterTagAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
  "_filterTag": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "ABILITY_OWNER" | "BUFF_OWNER" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "PROJECTILE_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckFirewallDamageSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckFirewallDamageSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckFirewallDamageSource, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckFirstRallyPointMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckFirstRallyPointModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckFirstRallyPointMode, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckGamePlayedTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckGamePlayedTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckGamePlayedTime, Assembly-CSharp";
  /** CheckGamePlayedTimeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "GT" | "LT";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckGlobalBuffExistByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckGlobalBuffExistByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckGlobalBuffExistByKey, Assembly-CSharp";
  /** CheckGlobalBuffExistByKeyAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC11 = CheckEntityEqualsAction | CheckEntityInAttackRangeAction | CheckEntitySuicideAction | CheckFaceDirectionAction | CheckFaceLOrRAction | CheckFilterTagAction | CheckFirewallDamageSourceAction | CheckFirstRallyPointModeAction | CheckGamePlayedTimeAction | CheckGlobalBuffExistByKeyAction;
