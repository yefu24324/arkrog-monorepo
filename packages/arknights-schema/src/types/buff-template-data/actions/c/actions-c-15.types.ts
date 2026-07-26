/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckOtherCharacterInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckOtherCharacterInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckOtherCharacterInRange, Assembly-CSharp";
  /** CheckOtherCharacterInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CheckOtherCharacterInRangeAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckRemainTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckRemainTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckRemainTime, Assembly-CSharp";
  /** CheckRemainTimeAction 的 `checkRemainTime` 配置字段；准确战斗语义待确认。 */
  "_checkRemainTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckRootTileAdvBuildableMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckRootTileAdvBuildableMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckRootTileAdvBuildableMask, Assembly-CSharp";
  /** CheckRootTileAdvBuildableMaskAction 的 `buildableMask` 配置字段；准确战斗语义待确认。 */
  "_buildableMask": "DEEP_SEA" | "DEFAULT" | "NIGHT";
  /** CheckRootTileAdvBuildableMaskAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckRouteMotionMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckRouteMotionModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckRouteMotionMode, Assembly-CSharp";
  /** CheckRouteMotionModeAction 的 `mode` 配置字段；准确战斗语义待确认。 */
  "_mode": "FLY" | "WALK";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckSanity, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckSanityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckSanity, Assembly-CSharp";
  /** CheckSanityAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "GE";
  /** CheckSanityAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** CheckSanityAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckSkillIndex, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckSkillIndexAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckSkillIndex, Assembly-CSharp";
  /** CheckSkillIndexAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。 */
  "_checkTargetHost": boolean;
  /** CheckSkillIndexAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** CheckSkillIndexAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
  "_skillIndex": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckSkillRemainingProgress, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckSkillRemainingProgressAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckSkillRemainingProgress, Assembly-CSharp";
  /** CheckSkillRemainingProgressAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
  "_compareValue": number;
  /** CheckSkillRemainingProgressAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LE";
  /** CheckSkillRemainingProgressAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckSourceInHitRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckSourceInHitRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckSourceInHitRange, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckSpecificEnemyCount, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckSpecificEnemyCountAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckSpecificEnemyCount, Assembly-CSharp";
  /** CheckSpecificEnemyCountAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LE" | "LT";
  /** CheckSpecificEnemyCountAction 的 `enemyId` 配置字段；准确战斗语义待确认。 */
  "_enemyId": string;
  /** CheckSpecificEnemyCountAction 的 `limitAmount` 配置字段；准确战斗语义待确认。 */
  "_limitAmount": number;
  /** CheckSpecificEnemyCountAction 的 `limitAmountKey` 配置字段；准确战斗语义待确认。 */
  "_limitAmountKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetCategory, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetCategoryAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetCategory, Assembly-CSharp";
  /** CheckTargetCategoryAction 的 `category` 配置字段；准确战斗语义待确认。 */
  "_category": "DEFAULT";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC15 = CheckOtherCharacterInRangeAction | CheckRemainTimeAction | CheckRootTileAdvBuildableMaskAction | CheckRouteMotionModeAction | CheckSanityAction | CheckSkillIndexAction | CheckSkillRemainingProgressAction | CheckSourceInHitRangeAction | CheckSpecificEnemyCountAction | CheckTargetCategoryAction;
