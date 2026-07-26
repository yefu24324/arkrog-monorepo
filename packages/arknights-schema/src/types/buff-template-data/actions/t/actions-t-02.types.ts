/**
 * buff_template_data 的 T 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerBuff, Assembly-CSharp";
  /** TriggerBuffAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** TriggerBuffAction 的 `triggerDerivedBuffs` 配置字段；准确战斗语义待确认。 */
  "_triggerDerivedBuffs": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerBuffsByKeys, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerBuffsByKeysAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerBuffsByKeys, Assembly-CSharp";
  /** TriggerBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** TriggerBuffsByKeysAction 的 `excludeInTriggerAll` 配置字段；准确战斗语义待确认。 */
  "_excludeInTriggerAll": boolean;
  /** TriggerBuffsByKeysAction 的 `excludeThisBuff` 配置字段；准确战斗语义待确认。 */
  "_excludeThisBuff": boolean;
  /** TriggerBuffsByKeysAction 的 `forceTrigger` 配置字段；准确战斗语义待确认。 */
  "_forceTrigger": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** TriggerBuffsByKeysAction 的 `triggerAllBuffs` 配置字段；准确战斗语义待确认。 */
  "_triggerAllBuffs": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerEnemySkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerEnemySkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerEnemySkill, Assembly-CSharp";
  /** TriggerEnemySkillAction 的 `assignCombatAbility` 配置字段；准确战斗语义待确认。 */
  "_assignCombatAbility": boolean;
  /** TriggerEnemySkillAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
  "_checkSkillActive": boolean;
  /** TriggerEnemySkillAction 的 `checkSkillReady` 配置字段；准确战斗语义待确认。 */
  "_checkSkillReady": boolean;
  /** TriggerEnemySkillAction 的 `clearPalsyingBuffBeforeTrigger` 配置字段；准确战斗语义待确认。 */
  "_clearPalsyingBuffBeforeTrigger": boolean;
  /** TriggerEnemySkillAction 的 `forceFindTargetBySkillSelector` 配置字段；准确战斗语义待确认。 */
  "_forceFindTargetBySkillSelector": boolean;
  /** TriggerEnemySkillAction 的 `interruptCurAbility` 配置字段；准确战斗语义待确认。 */
  "_interruptCurAbility": boolean;
  /** TriggerEnemySkillAction 的 `interruptCurAbilityUnlessItIsExpectedAbility` 配置字段；准确战斗语义待确认。 */
  "_interruptCurAbilityUnlessItIsExpectedAbility": boolean;
  /** TriggerEnemySkillAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** TriggerEnemySkillAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
  "_skillName": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "PROJECTILE_SOURCE" | "TARGET";
  /** TriggerEnemySkillAction 的 `tryCastDirectlyWhenNoTarget` 配置字段；准确战斗语义待确认。 */
  "_tryCastDirectlyWhenNoTarget": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerEnvSystem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerEnvSystemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerEnvSystem, Assembly-CSharp";
  /** TriggerEnvSystemAction 的 `envKey` 配置字段；准确战斗语义待确认。 */
  "_envKey": null | string;
  /** TriggerEnvSystemAction 的 `eventName` 配置字段；准确战斗语义待确认。 */
  "_eventName": null | string;
  /** TriggerEnvSystemAction 的 `readResultFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_readResultFromBlackboard": boolean;
  /** TriggerEnvSystemAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "SOURCE" | "TARGET";
  /** TriggerEnvSystemAction 的 `triggerWithBlackboard` 配置字段；准确战斗语义待确认。 */
  "_triggerWithBlackboard": boolean;
  /** TriggerEnvSystemAction 的 `triggerWithEvent` 配置字段；准确战斗语义待确认。 */
  "_triggerWithEvent": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerHostsBuffsByKeys, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerHostsBuffsByKeysAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerHostsBuffsByKeys, Assembly-CSharp";
  /** TriggerHostsBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** TriggerHostsBuffsByKeysAction 的 `isEnemy` 配置字段；准确战斗语义待确认。 */
  "_isEnemy": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerPalsy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerPalsyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerPalsy, Assembly-CSharp";
  /** TriggerPalsyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerSkill, Assembly-CSharp";
  /** TriggerSkillAction 的 `checkBeforeTrigger` 配置字段；准确战斗语义待确认。 */
  "_checkBeforeTrigger": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerSpecifiedAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerSpecifiedAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerSpecifiedAbility, Assembly-CSharp";
  /** TriggerSpecifiedAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerSpecifiedAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
  "_checkCanUseAblityFlag": boolean;
  /** TriggerSpecifiedAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** TriggerSpecifiedAbilityAction 的 `triggerEnergyBuffAbility` 配置字段；准确战斗语义待确认。 */
  "_triggerEnergyBuffAbility": boolean;
  /** TriggerSpecifiedAbilityAction 的 `triggerProjectileToTileOnceAbilityBySubSelector` 配置字段；准确战斗语义待确认。 */
  "_triggerProjectileToTileOnceAbilityBySubSelector": boolean;
  /** TriggerSpecifiedAbilityAction 的 `triggerStealAttrAbility` 配置字段；准确战斗语义待确认。 */
  "_triggerStealAttrAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerTileInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerTileInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerTileInRange, Assembly-CSharp";
  /** TriggerTileInRangeAction 的 `isTriggerSpecificTiles` 配置字段；准确战斗语义待确认。 */
  "_isTriggerSpecificTiles": boolean;
  /** TriggerTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** TriggerTileInRangeAction 的 `tileKeys` 配置字段；准确战斗语义待确认。 */
  "_tileKeys": null | Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerTokensAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerTokensAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerTokensAbility, Assembly-CSharp";
  /** TriggerTokensAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerTokensAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
  "_checkCanUseAblityFlag": boolean;
  /** TriggerTokensAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionT02 = TriggerBuffAction | TriggerBuffsByKeysAction | TriggerEnemySkillAction | TriggerEnvSystemAction | TriggerHostsBuffsByKeysAction | TriggerPalsyAction | TriggerSkillAction | TriggerSpecifiedAbilityAction | TriggerTileInRangeAction | TriggerTokensAbilityAction;
