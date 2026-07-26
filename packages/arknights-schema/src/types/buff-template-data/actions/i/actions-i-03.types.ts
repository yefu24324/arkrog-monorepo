/**
 * buff_template_data 的 I 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InstantKill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InstantKillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InstantKill, Assembly-CSharp";
  /** InstantKillAction 的 `killSource` 配置字段；准确战斗语义待确认。 */
  "_killSource": boolean;
  /** InstantKillAction 的 `markReachExit` 配置字段；准确战斗语义待确认。 */
  "_markReachExit": boolean;
  /** InstantKillAction 的 `noReason` 配置字段；准确战斗语义待确认。 */
  "_noReason": boolean;
  /** InstantKillAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
  "_noSource": boolean;
  /** InstantKillAction 的 `resultIfInRallyPointMode` 配置字段；准确战斗语义待确认。 */
  "_resultIfInRallyPointMode": boolean;
  /** InstantKillAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
  "_skipReborn": boolean;
  /** InstantKillAction 的 `switchState` 配置字段；准确战斗语义待确认。 */
  "_switchState": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** InstantKillAction 的 `withdrawIfRallyPoint` 配置字段；准确战斗语义待确认。 */
  "_withdrawIfRallyPoint": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptAbility, Assembly-CSharp";
  /** InterruptAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** InterruptAbilityAction 的 `emitAttackFinishOnly` 配置字段；准确战斗语义待确认。 */
  "_emitAttackFinishOnly": boolean;
  /** InterruptAbilityAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** InterruptAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** InterruptAbilityAction 的 `stopAffect` 配置字段；准确战斗语义待确认。 */
  "_stopAffect": boolean;
  /** InterruptAbilityAction 的 `useBlackboardCardUidAsOwner` 配置字段；准确战斗语义待确认。 */
  "_useBlackboardCardUidAsOwner": boolean;
  /** InterruptAbilityAction 的 `useCurrentAbility` 配置字段；准确战斗语义待确认。 */
  "_useCurrentAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptCharacterAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptCharacterAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptCharacterAbility, Assembly-CSharp";
  /** InterruptCharacterAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** InterruptCharacterAbilityAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
  "_charFrom": string;
  /** InterruptCharacterAbilityAction 的 `needStopAffect` 配置字段；准确战斗语义待确认。 */
  "_needStopAffect": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptCharacterAttack, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptCharacterAttackAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptCharacterAttack, Assembly-CSharp";
  /** InterruptCharacterAttackAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
  "_charFrom": string;
  /** InterruptCharacterAttackAction 的 `forceUseCharacterAttack` 配置字段；准确战斗语义待确认。 */
  "_forceUseCharacterAttack": boolean;
  /** InterruptCharacterAttackAction 的 `resetAndClearCD` 配置字段；准确战斗语义待确认。 */
  "_resetAndClearCD": boolean;
  /** InterruptCharacterAttackAction 的 `resetCD` 配置字段；准确战斗语义待确认。 */
  "_resetCD": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptCharacterSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptCharacterSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptCharacterSkill, Assembly-CSharp";
  /** InterruptCharacterSkillAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
  "_charFrom": string;
  /** InterruptCharacterSkillAction 的 `interruptSkillSelf` 配置字段；准确战斗语义待确认。 */
  "_interruptSkillSelf": boolean;
  /** InterruptCharacterSkillAction 的 `resetAbilityCooldown` 配置字段；准确战斗语义待确认。 */
  "_resetAbilityCooldown": boolean;
  /** InterruptCharacterSkillAction 的 `resetAbilityCooldownIgnoreAffecting` 配置字段；准确战斗语义待确认。 */
  "_resetAbilityCooldownIgnoreAffecting": boolean;
  /** InterruptCharacterSkillAction 的 `switchOutFromSkillState` 配置字段；准确战斗语义待确认。 */
  "_switchOutFromSkillState": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptEnemyAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptEnemyAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptEnemyAbility, Assembly-CSharp";
  /** InterruptEnemyAbilityAction 的 `checkBuffAbility` 配置字段；准确战斗语义待确认。 */
  "_checkBuffAbility": boolean;
  /** InterruptEnemyAbilityAction 的 `enemyFrom` 配置字段；准确战斗语义待确认。 */
  "_enemyFrom": string;
  /** InterruptEnemyAbilityAction 的 `resetCooldown` 配置字段；准确战斗语义待确认。 */
  "_resetCooldown": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptEnemyCombat, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptEnemyCombatAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptEnemyCombat, Assembly-CSharp";
  /** InterruptEnemyCombatAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InterruptTokenSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InterruptTokenSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InterruptTokenSkill, Assembly-CSharp";
  /** InterruptTokenSkillAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
  "_hostType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+InverseDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface InverseDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+InverseDamage, Assembly-CSharp";
  /** InverseDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NORMAL";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL" | "PURE";
  /** InverseDamageAction 的 `damageTypeKey` 配置字段；准确战斗语义待确认。 */
  "_damageTypeKey": string;
  /** InverseDamageAction 的 `damageValueKey` 配置字段；准确战斗语义待确认。 */
  "_damageValueKey": string;
  /** InverseDamageAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
  "_filterModifierCancelled": boolean;
  /** InverseDamageAction 的 `fixValue` 配置字段；准确战斗语义待确认。 */
  "_fixValue": boolean;
  /** InverseDamageAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
  "_hasSource": boolean;
  /** InverseDamageAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
  "_sideMask": "ALLY" | "BOTH_ALLY_AND_ENEMY" | "ENEMY";
  /** InverseDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** InverseDamageAction 的 `skipSourceEvent` 配置字段；准确战斗语义待确认。 */
  "_skipSourceEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsAtkScaleZero, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsAtkScaleZeroAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsAtkScaleZero, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionI03 = InstantKillAction | InterruptAbilityAction | InterruptCharacterAbilityAction | InterruptCharacterAttackAction | InterruptCharacterSkillAction | InterruptEnemyAbilityAction | InterruptEnemyCombatAction | InterruptTokenSkillAction | InverseDamageAction | IsAtkScaleZeroAction;
