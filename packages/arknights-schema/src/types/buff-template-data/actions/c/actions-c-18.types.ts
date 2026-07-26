/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileTypesMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileTypesMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileTypesMask, Assembly-CSharp";
  /** CheckTileTypesMaskAction 的 `checkOldTile` 配置字段；准确战斗语义待确认。 */
  "_checkOldTile": boolean;
  /** CheckTileTypesMaskAction 的 `checkRootTile` 配置字段；准确战斗语义待确认。 */
  "_checkRootTile": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CheckTileTypesMaskAction 的 `TileTypesMask` 配置字段；准确战斗语义待确认。 */
  "_TileTypesMask": "END";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTokenHostGroupTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTokenHostGroupTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTokenHostGroupTag, Assembly-CSharp";
  /** CheckTokenHostGroupTagAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
  "_filterTag": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTraitAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTraitAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTraitAbilityBlackboard, Assembly-CSharp";
  /** CheckTraitAbilityBlackboardAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** CheckTraitAbilityBlackboardAction 的 `leftBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_leftBlackboardKey": string;
  /** CheckTraitAbilityBlackboardAction 的 `rightBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_rightBlackboardKey": null | string;
  /** CheckTraitAbilityBlackboardAction 的 `rightValue` 配置字段；准确战斗语义待确认。 */
  "_rightValue": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTriggerable, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTriggerableAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTriggerable, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTriggerableBuffsByKeys, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTriggerableBuffsByKeysAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTriggerableBuffsByKeys, Assembly-CSharp";
  /** CheckTriggerableBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** CheckTriggerableBuffsByKeysAction 的 `excludeThisBuff` 配置字段；准确战斗语义待确认。 */
  "_excludeThisBuff": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitAlive, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitAliveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitAlive, Assembly-CSharp";
  /** CheckUnitAliveAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitCurrentMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitCurrentModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitCurrentMode, Assembly-CSharp";
  /** CheckUnitCurrentModeAction 的 `checkCurModeIndex` 配置字段；准确战斗语义待确认。 */
  "_checkCurModeIndex": number;
  /** CheckUnitCurrentModeAction 的 `loadCurModeBbKey` 配置字段；准确战斗语义待确认。 */
  "_loadCurModeBbKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitInAttackState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitInAttackStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitInAttackState, Assembly-CSharp";
  /** CheckUnitInAttackStateAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** CheckUnitInAttackStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitInCombatState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitInCombatStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitInCombatState, Assembly-CSharp";
  /** CheckUnitInCombatStateAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** CheckUnitInCombatStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckUnitInDisappearState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckUnitInDisappearStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckUnitInDisappearState, Assembly-CSharp";
  /** CheckUnitInDisappearStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC18 = CheckTileTypesMaskAction | CheckTokenHostGroupTagAction | CheckTraitAbilityBlackboardAction | CheckTriggerableAction | CheckTriggerableBuffsByKeysAction | CheckUnitAliveAction | CheckUnitCurrentModeAction | CheckUnitInAttackStateAction | CheckUnitInCombatStateAction | CheckUnitInDisappearStateAction;
