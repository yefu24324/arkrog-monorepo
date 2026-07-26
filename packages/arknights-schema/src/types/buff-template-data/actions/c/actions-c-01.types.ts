/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CalculateBlackboardValueViaParams, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CalculateBlackboardValueViaParamsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CalculateBlackboardValueViaParams, Assembly-CSharp";
  /** CalculateBlackboardValueViaParamsAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** CalculateBlackboardValueViaParamsAction 的 `addParamKey` 配置字段；准确战斗语义待确认。 */
  "_addParamKey": null | string;
  /** CalculateBlackboardValueViaParamsAction 的 `dividedParamKey` 配置字段；准确战斗语义待确认。 */
  "_dividedParamKey": null | string;
  /** CalculateBlackboardValueViaParamsAction 的 `finalAbs` 配置字段；准确战斗语义待确认。 */
  "_finalAbs": boolean;
  /** CalculateBlackboardValueViaParamsAction 的 `finalCeil` 配置字段；准确战斗语义待确认。 */
  "_finalCeil": boolean;
  /** CalculateBlackboardValueViaParamsAction 的 `finalFloor` 配置字段；准确战斗语义待确认。 */
  "_finalFloor": boolean;
  /** CalculateBlackboardValueViaParamsAction 的 `finalRound` 配置字段；准确战斗语义待确认。 */
  "_finalRound": boolean;
  /** CalculateBlackboardValueViaParamsAction 的 `inputKey` 配置字段；准确战斗语义待确认。 */
  "_inputKey": string;
  /** CalculateBlackboardValueViaParamsAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。 */
  "_maxValueKey": null | string;
  /** CalculateBlackboardValueViaParamsAction 的 `minusParamKey` 配置字段；准确战斗语义待确认。 */
  "_minusParamKey": null | string;
  /** CalculateBlackboardValueViaParamsAction 的 `minValueKey` 配置字段；准确战斗语义待确认。 */
  "_minValueKey": null | string;
  /** CalculateBlackboardValueViaParamsAction 的 `multiplyParamKey` 配置字段；准确战斗语义待确认。 */
  "_multiplyParamKey": null | string;
  /** CalculateBlackboardValueViaParamsAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
  "_outputKey": string;
  /** CalculateBlackboardValueViaParamsAction 的 `useAbilityBlackboard` 配置字段；准确战斗语义待确认。 */
  "_useAbilityBlackboard": boolean;
  /** CalculateBlackboardValueViaParamsAction 的 `useRemainder` 配置字段；准确战斗语义待确认。 */
  "_useRemainder": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CalculateFeverSpShowBuffRemainingProgress, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CalculateFeverSpShowBuffRemainingProgressAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CalculateFeverSpShowBuffRemainingProgress, Assembly-CSharp";
  /** CalculateFeverSpShowBuffRemainingProgressAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
  "_feverKey": string;
  /** CalculateFeverSpShowBuffRemainingProgressAction 的 `passedTimeBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_passedTimeBlackboardKey": string;
  /** CalculateFeverSpShowBuffRemainingProgressAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_targetBlackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CalculateTraitAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CalculateTraitAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CalculateTraitAbilityBlackboard, Assembly-CSharp";
  /** CalculateTraitAbilityBlackboardAction 的 `addBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_addBlackboardKey": null | string;
  /** CalculateTraitAbilityBlackboardAction 的 `fromBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_fromBlackboardKey": null | string;
  /** CalculateTraitAbilityBlackboardAction 的 `isSub` 配置字段；准确战斗语义待确认。 */
  "_isSub": boolean;
  /** CalculateTraitAbilityBlackboardAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_targetBlackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CalculateTraitAbilityBlackboardAction 的 `useTraitBBToAdd` 配置字段；准确战斗语义待确认。 */
  "_useTraitBBToAdd": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CancelModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CancelModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CancelModifier, Assembly-CSharp";
  /** CancelModifierAction 的 `reason` 配置字段；准确战斗语义待确认。 */
  "_reason": "BLOCKED" | "INTERRUPT" | "NONE" | "UNHURTABLE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeAnimatorMeshBySandboxKilledBoss, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeAnimatorMeshBySandboxKilledBossAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeAnimatorMeshBySandboxKilledBoss, Assembly-CSharp";
  /** ChangeAnimatorMeshBySandboxKilledBossAction 的 `enable` 配置字段；准确战斗语义待确认。 */
  "_enable": boolean;
  /** ChangeAnimatorMeshBySandboxKilledBossAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRenderer, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeAnimatorMeshRendererAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRenderer, Assembly-CSharp";
  /** ChangeAnimatorMeshRendererAction 的 `enable` 配置字段；准确战斗语义待确认。 */
  "_enable": boolean;
  /** ChangeAnimatorMeshRendererAction 的 `exclusive` 配置字段；准确战斗语义待确认。 */
  "_exclusive": boolean;
  /** ChangeAnimatorMeshRendererAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** ChangeAnimatorMeshRendererAction 的 `rendererCurModeIndex` 配置字段；准确战斗语义待确认。 */
  "_rendererCurModeIndex": boolean;
  /** ChangeAnimatorMeshRendererAction 的 `rendererIndex` 配置字段；准确战斗语义待确认。 */
  "_rendererIndex": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRendererViaIndexList, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeAnimatorMeshRendererViaIndexListAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRendererViaIndexList, Assembly-CSharp";
  /** ChangeAnimatorMeshRendererViaIndexListAction 的 `enable` 配置字段；准确战斗语义待确认。 */
  "_enable": boolean;
  /** ChangeAnimatorMeshRendererViaIndexListAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** ChangeAnimatorMeshRendererViaIndexListAction 的 `rendererIndexList` 配置字段；准确战斗语义待确认。 */
  "_rendererIndexList": Array<number>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeCharBlockMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeCharBlockModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeCharBlockMode, Assembly-CSharp";
  /** ChangeCharBlockModeAction 的 `blockMode` 配置字段；准确战斗语义待确认。 */
  "_blockMode": "E_NUM" | "FLY" | "WALK";
  /** ChangeCharBlockModeAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
  "_resetToDefault": boolean;
  /** ChangeCharBlockModeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeEnemyLevitateHeightImmediately, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeEnemyLevitateHeightImmediatelyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeEnemyLevitateHeightImmediately, Assembly-CSharp";
  /** ChangeEnemyLevitateHeightImmediatelyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ChangeEnemyRouteMotionMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ChangeEnemyRouteMotionModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ChangeEnemyRouteMotionMode, Assembly-CSharp";
  /** ChangeEnemyRouteMotionModeAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY" | "WALK";
  /** ChangeEnemyRouteMotionModeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC01 = CalculateBlackboardValueViaParamsAction | CalculateFeverSpShowBuffRemainingProgressAction | CalculateTraitAbilityBlackboardAction | CancelModifierAction | ChangeAnimatorMeshBySandboxKilledBossAction | ChangeAnimatorMeshRendererAction | ChangeAnimatorMeshRendererViaIndexListAction | ChangeCharBlockModeAction | ChangeEnemyLevitateHeightImmediatelyAction | ChangeEnemyRouteMotionModeAction;
