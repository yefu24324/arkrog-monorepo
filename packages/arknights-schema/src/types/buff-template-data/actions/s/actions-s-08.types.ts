/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetBossCountDown, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetBossCountDownAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetBossCountDown, Assembly-CSharp";
  /** SetBossCountDownAction 的 `cdBBKey` 配置字段；准确战斗语义待确认。 */
  "_cdBBKey": string;
  /** SetBossCountDownAction 的 `cdValue` 配置字段；准确战斗语义待确认。 */
  "_cdValue": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetBuffLifeTimeAndRemainingTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetBuffLifeTimeAndRemainingTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetBuffLifeTimeAndRemainingTime, Assembly-CSharp";
  /** SetBuffLifeTimeAndRemainingTimeAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
  "_buffType": "BUFF" | "MAIN_BUFF";
  /** SetBuffLifeTimeAndRemainingTimeAction 的 `lifeTimeKey` 配置字段；准确战斗语义待确认。 */
  "_lifeTimeKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetBuildableHighLightUpdaterDirty, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetBuildableHighLightUpdaterDirtyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetBuildableHighLightUpdaterDirty, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetBuildCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetBuildCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetBuildCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** SetBuildCntToBlackboardAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetCameraMoveDirectlyDisableState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetCameraMoveDirectlyDisableStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetCameraMoveDirectlyDisableState, Assembly-CSharp";
  /** SetCameraMoveDirectlyDisableStateAction 的 `disableCameraMoveDirectly` 配置字段；准确战斗语义待确认。 */
  "disableCameraMoveDirectly": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetCastSkillCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetCastSkillCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetCastSkillCost, Assembly-CSharp";
  /** SetCastSkillCostAction 的 `assignOldValueKey` 配置字段；准确战斗语义待确认。 */
  "_assignOldValueKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SetCastSkillCostAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** SetCastSkillCostAction 的 `valueBbKey` 配置字段；准确战斗语义待确认。 */
  "_valueBbKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetCharacterDontOccupyDeployCntFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetCharacterDontOccupyDeployCntFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetCharacterDontOccupyDeployCntFlag, Assembly-CSharp";
  /** SetCharacterDontOccupyDeployCntFlagAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetCharacterInfoToAbilityBlackboardAsKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetCharacterInfoToAbilityBlackboardAsKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetCharacterInfoToAbilityBlackboardAsKey, Assembly-CSharp";
  /** SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
  "_infoType": "UNIQUE_ID";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetCharacterMaxEs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetCharacterMaxEsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetCharacterMaxEs, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": null | string;
  /** SetCharacterMaxEsAction 的 `maxEsRatio` 配置字段；准确战斗语义待确认。 */
  "_maxEsRatio": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetCostIncreaseTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetCostIncreaseTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetCostIncreaseTime, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** SetCostIncreaseTimeAction 的 `costIncreaseTime` 配置字段；准确战斗语义待确认。 */
  "_costIncreaseTime": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS08 = SetBossCountDownAction | SetBuffLifeTimeAndRemainingTimeAction | SetBuildableHighLightUpdaterDirtyAction | SetBuildCntToBlackboardAction | SetCameraMoveDirectlyDisableStateAction | SetCastSkillCostAction | SetCharacterDontOccupyDeployCntFlagAction | SetCharacterInfoToAbilityBlackboardAsKeyAction | SetCharacterMaxEsAction | SetCostIncreaseTimeAction;
