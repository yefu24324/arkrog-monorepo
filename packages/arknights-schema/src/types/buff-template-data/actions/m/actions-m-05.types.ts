/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCharacterAbilityRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCharacterAbilityRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCharacterAbilityRange, Assembly-CSharp";
  /** ModifyCharacterAbilityRangeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ModifyCharacterAbilityRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null;
  /** ModifyCharacterAbilityRangeAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** ModifyCharacterAbilityRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCharacterAttackTriggerRangeId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCharacterAttackTriggerRangeIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCharacterAttackTriggerRangeId, Assembly-CSharp";
  /** ModifyCharacterAttackTriggerRangeIdAction 的 `modes` 配置字段；准确战斗语义待确认。 */
  "_modes": Array<number>;
  /** ModifyCharacterAttackTriggerRangeIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE" | "TARGET";
  /** ModifyCharacterAttackTriggerRangeIdAction 的 `sourceMode` 配置字段；准确战斗语义待确认。 */
  "_sourceMode": number;
  /** ModifyCharacterAttackTriggerRangeIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
  /** ModifyCharacterAttackTriggerRangeIdAction 的 `useCurrentModeRangeId` 配置字段；准确战斗语义待确认。 */
  "_useCurrentModeRangeId": boolean;
  /** ModifyCharacterAttackTriggerRangeIdAction 的 `useSpecifiedModeRangeId` 配置字段；准确战斗语义待确认。 */
  "_useSpecifiedModeRangeId": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCharacterLimit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCharacterLimitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCharacterLimit, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ModifyCharacterLimitAction 的 `getPlayerSideSource` 配置字段；准确战斗语义待确认。 */
  "_getPlayerSideSource": boolean;
  /** ModifyCharacterLimitAction 的 `isMins` 配置字段；准确战斗语义待确认。 */
  "_isMins": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCharacterSkillAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCharacterSkillAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCharacterSkillAbilityBlackboard, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** ModifyCharacterSkillAbilityBlackboardAction 的 `updateSkillAbilitySelector` 配置字段；准确战斗语义待确认。 */
  "_updateSkillAbilitySelector": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCharacterSpineColor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCharacterSpineColorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCharacterSpineColor, Assembly-CSharp";
  /** ModifyCharacterSpineColorAction 的 `color` 配置字段；准确战斗语义待确认。 */
  "_color": string;
  /** ModifyCharacterSpineColorAction 的 `lockColor` 配置字段；准确战斗语义待确认。 */
  "_lockColor": boolean;
  /** ModifyCharacterSpineColorAction 的 `newColor` 配置字段；准确战斗语义待确认。 */
  "_newColor": {
                    /** ModifyCharacterSpineColorAction 的 `a` 配置字段；准确战斗语义待确认。 */
                    "a": number;
                    /** ModifyCharacterSpineColorAction 的 `b` 配置字段；准确战斗语义待确认。 */
                    "b": number;
                    /** ModifyCharacterSpineColorAction 的 `g` 配置字段；准确战斗语义待确认。 */
                    "g": number;
                    /** ModifyCharacterSpineColorAction 的 `r` 配置字段；准确战斗语义待确认。 */
                    "r": number;
                  };
  /** ModifyCharacterSpineColorAction 的 `setColorDirectly` 配置字段；准确战斗语义待确认。 */
  "_setColorDirectly": boolean;
  /** ModifyCharacterSpineColorAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCost, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ModifyCostAction 的 `forceToDisplayNegativeNumber` 配置字段；准确战斗语义待确认。 */
  "_forceToDisplayNegativeNumber": boolean;
  /** ModifyCostAction 的 `forceToDisplayNumber` 配置字段；准确战斗语义待确认。 */
  "_forceToDisplayNumber": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_TARGET" | "PROJECTILE_TRACETARGET" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyCostIncreaseTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyCostIncreaseTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyCostIncreaseTime, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ModifyCostIncreaseTimeAction 的 `deltaCostIncreaseTime` 配置字段；准确战斗语义待确认。 */
  "_deltaCostIncreaseTime": number;
  /** ModifyCostIncreaseTimeAction 的 `isMulOtherwiseDiv` 配置字段；准确战斗语义待确认。 */
  "_isMulOtherwiseDiv": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyDamageValueWithFixedValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyDamageValueWithFixedValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyDamageValueWithFixedValue, Assembly-CSharp";
  /** ModifyDamageValueWithFixedValueAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** ModifyDamageValueWithFixedValueAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "NONE";
  /** ModifyDamageValueWithFixedValueAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** ModifyDamageValueWithFixedValueAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyDynamicVar, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyDynamicVarAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyDynamicVar, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyEnemyGraphicScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyEnemyGraphicScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyEnemyGraphicScale, Assembly-CSharp";
  /** ModifyEnemyGraphicScaleAction 的 `isAdd` 配置字段；准确战斗语义待确认。 */
  "_isAdd": boolean;
  /** ModifyEnemyGraphicScaleAction 的 `maxValue` 配置字段；准确战斗语义待确认。 */
  "_maxValue": number;
  /** ModifyEnemyGraphicScaleAction 的 `needMax` 配置字段；准确战斗语义待确认。 */
  "_needMax": boolean;
  /** ModifyEnemyGraphicScaleAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** ModifyEnemyGraphicScaleAction 的 `scaleValue` 配置字段；准确战斗语义待确认。 */
  "_scaleValue": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM05 = ModifyCharacterAbilityRangeAction | ModifyCharacterAttackTriggerRangeIdAction | ModifyCharacterLimitAction | ModifyCharacterSkillAbilityBlackboardAction | ModifyCharacterSpineColorAction | ModifyCostAction | ModifyCostIncreaseTimeAction | ModifyDamageValueWithFixedValueAction | ModifyDynamicVarAction | ModifyEnemyGraphicScaleAction;
