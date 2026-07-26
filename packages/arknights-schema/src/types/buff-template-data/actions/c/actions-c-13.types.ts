/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHeightTypeOfRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHeightTypeOfRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHeightTypeOfRootTile, Assembly-CSharp";
  /** CheckHeightTypeOfRootTileAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
  "_heightType": "HIGHLAND" | "LOWLAND";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHostContainsBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHostContainsBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHostContainsBuff, Assembly-CSharp";
  /** CheckHostContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CheckHostContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。 */
  "isAND": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIdInBlackboardFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIdInBlackboardFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIdInBlackboardFunLiveModeOnly, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIfAtMinusHpState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIfAtMinusHpStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIfAtMinusHpState, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIfDamageHasSharedFlags, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIfDamageHasSharedFlagsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIfDamageHasSharedFlags, Assembly-CSharp";
  /** CheckIfDamageHasSharedFlagsAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** CheckIfDamageHasSharedFlagsAction 的 `sharedFlags` 配置字段；准确战斗语义待确认。 */
  "_sharedFlags": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIfDurationBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIfDurationBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIfDurationBuff, Assembly-CSharp";
  /** CheckIfDurationBuffAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
  "_buffType": "MAIN_BUFF";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIfSourceGridPosFaceTargetGridPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIfSourceGridPosFaceTargetGridPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIfSourceGridPosFaceTargetGridPos, Assembly-CSharp";
  /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `faceIfSameCol` 配置字段；准确战斗语义待确认。 */
  "_faceIfSameCol": string;
  /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `faceType` 配置字段；准确战斗语义待确认。 */
  "_faceType": "BACK" | "FRONT";
  /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET";
  /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE";
  /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `targetColOffset` 配置字段；准确战斗语义待确认。 */
  "_targetColOffset": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckInProjectileRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckInProjectileRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckInProjectileRange, Assembly-CSharp";
  /** CheckInProjectileRangeAction 的 `dirKey` 配置字段；准确战斗语义待确认。 */
  "_dirKey": string;
  /** CheckInProjectileRangeAction 的 `rangeKey` 配置字段；准确战斗语义待确认。 */
  "_rangeKey": string;
  /** CheckInProjectileRangeAction 的 `tagKey` 配置字段；准确战斗语义待确认。 */
  "_tagKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckInWaitingForWaveStart, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckInWaitingForWaveStartAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckInWaitingForWaveStart, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIsAllyRoundInPenalty, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIsAllyRoundInPenaltyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIsAllyRoundInPenalty, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC13 = CheckHeightTypeOfRootTileAction | CheckHostContainsBuffAction | CheckIdInBlackboardFunLiveModeOnlyAction | CheckIfAtMinusHpStateAction | CheckIfDamageHasSharedFlagsAction | CheckIfDurationBuffAction | CheckIfSourceGridPosFaceTargetGridPosAction | CheckInProjectileRangeAction | CheckInWaitingForWaveStartAction | CheckIsAllyRoundInPenaltyAction;
