/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeEnvSystemWithTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeEnvSystemWithTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeEnvSystemWithTiles, Assembly-CSharp";
  /** ChangeEnvSystemWithTilesAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ChangeEnvSystemWithTilesAction 的 `abilitySource` 配置字段；准确战斗语义待确认。 */
  "_abilitySource": "BUFF_OWNER";
  /** ChangeEnvSystemWithTilesAction 的 `envKey` 配置字段；准确战斗语义待确认。 */
  "_envKey": string;
  /** ChangeEnvSystemWithTilesAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。 */
  "_selectorTarget": "BUFF_OWNER";
  /** ChangeEnvSystemWithTilesAction 的 `statusEvent` 配置字段；准确战斗语义待确认。 */
  "_statusEvent": string;
  /** ChangeEnvSystemWithTilesAction 的 `tryRuntimeLoad` 配置字段；准确战斗语义待确认。 */
  "_tryRuntimeLoad": boolean;
  /** ChangeEnvSystemWithTilesAction 的 `useBlackboardForEnvSystem` 配置字段；准确战斗语义待确认。 */
  "_useBlackboardForEnvSystem": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeModifierSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeModifierSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeModifierSource, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeMotionMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeMotionModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeMotionMode, Assembly-CSharp";
  /** ChangeMotionModeAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY" | "WALK";
  /** ChangeMotionModeAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
  "_resetToDefault": boolean;
  /** ChangeMotionModeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CharacterHasValidToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CharacterHasValidTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CharacterHasValidToken, Assembly-CSharp";
  /** CharacterHasValidTokenAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
  "_hostType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CharSearchBlockeeImmediate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CharSearchBlockeeImmediateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CharSearchBlockeeImmediate, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CharSkillManualTriggerCountEvent, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CharSkillManualTriggerCountEventAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CharSkillManualTriggerCountEvent, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CharSkillNotCountTimes, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CharSkillNotCountTimesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CharSkillNotCountTimes, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAbilityDamageDeadly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAbilityDamageDeadlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAbilityDamageDeadly, Assembly-CSharp";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "PHYSICAL";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAbnormalCombo, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAbnormalComboAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAbnormalCombo, Assembly-CSharp";
  /** CheckAbnormalComboAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
  "_abnormalCombo": string;
  /** CheckAbnormalComboAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAbnormalComboImmune, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAbnormalComboImmuneAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAbnormalComboImmune, Assembly-CSharp";
  /** CheckAbnormalComboImmuneAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
  "_abnormalCombo": string;
  /** CheckAbnormalComboImmuneAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC02 = ChangeEnvSystemWithTilesAction | ChangeModifierSourceAction | ChangeMotionModeAction | CharacterHasValidTokenAction | CharSearchBlockeeImmediateAction | CharSkillManualTriggerCountEventAction | CharSkillNotCountTimesAction | CheckAbilityDamageDeadlyAction | CheckAbnormalComboAction | CheckAbnormalComboImmuneAction;
