/**
 * buff_template_data 的 P 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PalsyBuffAdd, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PalsyBuffAddAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PalsyBuffAdd, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PalsyBuffMaxCntUpdate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PalsyBuffMaxCntUpdateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PalsyBuffMaxCntUpdate, Assembly-CSharp";
  /** PalsyBuffMaxCntUpdateAction 的 `isLimitAppend` 配置字段；准确战斗语义待确认。 */
  "_isLimitAppend": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PauseAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PauseAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PauseAbility, Assembly-CSharp";
  /** PauseAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** PauseAbilityAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
  "_actionTargetType": "BUFF_OWNER";
  /** PauseAbilityAction 的 `recoverFromPauseState` 配置字段；准确战斗语义待确认。 */
  "_recoverFromPauseState": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PickRandomBranchPhase, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PickRandomBranchPhaseAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PickRandomBranchPhase, Assembly-CSharp";
  /** PickRandomBranchPhaseAction 的 `blockGameFinish` 配置字段；准确战斗语义待确认。 */
  "_blockGameFinish": boolean;
  /** PickRandomBranchPhaseAction 的 `notRepeatInOneLoop` 配置字段；准确战斗语义待确认。 */
  "_notRepeatInOneLoop": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PlayAudio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PlayAudioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PlayAudio, Assembly-CSharp";
  /** PlayAudioAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
  "_audioSignal": string;
  /** PlayAudioAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PlayBGM, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PlayBGMAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PlayBGM, Assembly-CSharp";
  /** PlayBGMAction 的 `needSourceStateRunning` 配置字段；准确战斗语义待确认。 */
  "_needSourceStateRunning": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PlayMeshAnimation, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PlayMeshAnimationAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PlayMeshAnimation, Assembly-CSharp";
  /** PlayMeshAnimationAction 的 `animation` 配置字段；准确战斗语义待确认。 */
  "_animation": string;
  /** PlayMeshAnimationAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PlayProjectileAudio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PlayProjectileAudioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PlayProjectileAudio, Assembly-CSharp";
  /** PlayProjectileAudioAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
  "_audioSignal": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+PlayUnitAnimation, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface PlayUnitAnimationAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+PlayUnitAnimation, Assembly-CSharp";
  /** PlayUnitAnimationAction 的 `animation` 配置字段；准确战斗语义待确认。 */
  "_animation": string;
  /** PlayUnitAnimationAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ProcessAllInfoFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ProcessAllInfoFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ProcessAllInfoFunLiveModeOnly, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionP01 = PalsyBuffAddAction | PalsyBuffMaxCntUpdateAction | PauseAbilityAction | PickRandomBranchPhaseAction | PlayAudioAction | PlayBGMAction | PlayMeshAnimationAction | PlayProjectileAudioAction | PlayUnitAnimationAction | ProcessAllInfoFunLiveModeOnlyAction;
