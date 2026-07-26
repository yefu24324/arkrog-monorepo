/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterDamageModifer, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterDamageModiferAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterDamageModifer, Assembly-CSharp";
  /** FilterDamageModiferAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "NONE";
  /** FilterDamageModiferAction 的 `attackTypeFilter` 配置字段；准确战斗语义待确认。 */
  "_attackTypeFilter": string;
  /** FilterDamageModiferAction 的 `checkHasScource` 配置字段；准确战斗语义待确认。 */
  "_checkHasScource": boolean;
  /** FilterDamageModiferAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "ANY_ATTACK" | "ANY_ATTACK_EXCEPT_ELEMENT" | "ELEMENT" | "MAGICAL" | "NONE" | "PHYSICAL" | "PHYSICAL_AND_MAGICAL" | "PURE";
  /** FilterDamageModiferAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** FilterDamageModiferAction 的 `filterAttackType` 配置字段；准确战斗语义待确认。 */
  "_filterAttackType": boolean;
  /** FilterDamageModiferAction 的 `filterBySourceId` 配置字段；准确战斗语义待确认。 */
  "_filterBySourceId": boolean;
  /** FilterDamageModiferAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** FilterDamageModiferAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
  "_filterModifierCancelled": boolean;
  /** FilterDamageModiferAction 的 `filterModifierSource` 配置字段；准确战斗语义待确认。 */
  "_filterModifierSource": boolean;
  /** FilterDamageModiferAction 的 `filterSharedMask` 配置字段；准确战斗语义待确认。 */
  "_filterSharedMask": boolean;
  /** FilterDamageModiferAction 的 `isNoSource` 配置字段；准确战斗语义待确认。 */
  "_isNoSource": boolean;
  /** FilterDamageModiferAction 的 `sharedFlag` 配置字段；准确战斗语义待确认。 */
  "_sharedFlag": "IS_CONTINUOUS" | "IS_ENVIRONMENT_DAMAGE";
  /** FilterDamageModiferAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** FilterDamageModiferAction 的 `sourceId` 配置字段；准确战斗语义待确认。 */
  "_sourceId": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterDeathReason, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterDeathReasonAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterDeathReason, Assembly-CSharp";
  /** FilterDeathReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。 */
  "_finishReason": "FALLDOWN" | "HP_ZERO" | "HP_ZERO_WITH_NO_SOURCE" | "MOVE_LIKE_RESPAWN_SELF" | "NONE" | "OTHER" | "REACH_EXIT" | "REPLACED" | "RESPAWN_SELF" | "SILENT_WITHDRAW" | "WITHDRAW";
  /** FilterDeathReasonAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "MAIN_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterDistanceToRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterDistanceToRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterDistanceToRootTile, Assembly-CSharp";
  /** FilterDistanceToRootTileAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LT";
  /** FilterDistanceToRootTileAction 的 `distance` 配置字段；准确战斗语义待确认。 */
  "_distance": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterElementDamageModifer, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterElementDamageModiferAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterElementDamageModifer, Assembly-CSharp";
  /** FilterElementDamageModiferAction 的 `epType` 配置字段；准确战斗语义待确认。 */
  "_epType": "DARK" | "NONE" | "SANITY" | "WATER";
  /** FilterElementDamageModiferAction 的 `filterEPType` 配置字段；准确战斗语义待确认。 */
  "_filterEPType": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterEnemyKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterEnemyKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterEnemyKey, Assembly-CSharp";
  /** FilterEnemyKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterEPBreakRecoveryType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterEPBreakRecoveryTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterEPBreakRecoveryType, Assembly-CSharp";
  /** FilterEPBreakRecoveryTypeAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": null | string;
  /** FilterEPBreakRecoveryTypeAction 的 `readTypeFromBb` 配置字段；准确战斗语义待确认。 */
  "_readTypeFromBb": boolean;
  /** FilterEPBreakRecoveryTypeAction 的 `recoveryType` 配置字段；准确战斗语义待确认。 */
  "_recoveryType": "ANGER" | "DARK" | "FIRE" | "NONE" | "SANITY" | "WATER";
  /** FilterEPBreakRecoveryTypeAction 的 `skipInEPBreakRecoveryCheck` 配置字段；准确战斗语义待确认。 */
  "_skipInEPBreakRecoveryCheck": boolean;
  /** FilterEPBreakRecoveryTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterId, Assembly-CSharp";
  /** FilterIdAction 的 `filterId` 配置字段；准确战斗语义待确认。 */
  "_filterId": null | string;
  /** FilterIdAction 的 `filterIdKey` 配置字段；准确战斗语义待确认。 */
  "_filterIdKey": string;
  /** FilterIdAction 的 `filterIds` 配置字段；准确战斗语义待确认。 */
  "_filterIds": null | Array<string>;
  /** FilterIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MAIN_TARGET" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterInSourceSkillRangeId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterInSourceSkillRangeIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterInSourceSkillRangeId, Assembly-CSharp";
  /** FilterInSourceSkillRangeIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** FilterInSourceSkillRangeIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterIsDummy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterIsDummyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterIsDummy, Assembly-CSharp";
  /** FilterIsDummyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterLifePoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterLifePointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterLifePoint, Assembly-CSharp";
  /** FilterLifePointAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "EQUALS";
  /** FilterLifePointAction 的 `lifePoint` 配置字段；准确战斗语义待确认。 */
  "_lifePoint": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF05 = FilterDamageModiferAction | FilterDeathReasonAction | FilterDistanceToRootTileAction | FilterElementDamageModiferAction | FilterEnemyKeyAction | FilterEPBreakRecoveryTypeAction | FilterIdAction | FilterInSourceSkillRangeIdAction | FilterIsDummyAction | FilterLifePointAction;
