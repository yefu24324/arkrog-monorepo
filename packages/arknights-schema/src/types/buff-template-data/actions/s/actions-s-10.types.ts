/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetIgnoreCancelReasonMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetIgnoreCancelReasonMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetIgnoreCancelReasonMask, Assembly-CSharp";
  /** SetIgnoreCancelReasonMaskAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreCancelReasonMask": "MISS";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetIgnoreMissFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetIgnoreMissFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetIgnoreMissFlag, Assembly-CSharp";
  /** SetIgnoreMissFlagAction 的 `ignoreMissFlag` 配置字段；准确战斗语义待确认。 */
  "_ignoreMissFlag": "PHYSICAL";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetMagicCircuitLikeObstacleInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetMagicCircuitLikeObstacleInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetMagicCircuitLikeObstacleInRange, Assembly-CSharp";
  /** SetMagicCircuitLikeObstacleInRangeAction 的 `isLikeObstacle` 配置字段；准确战斗语义待确认。 */
  "_isLikeObstacle": boolean;
  /** SetMagicCircuitLikeObstacleInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetMaxMinusHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetMaxMinusHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetMaxMinusHpRatio, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** SetMaxMinusHpRatioAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetMultiAppearSkillPendingToCast, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetMultiAppearSkillPendingToCastAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetMultiAppearSkillPendingToCast, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetRuntimeMapTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetRuntimeMapTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetRuntimeMapTag, Assembly-CSharp";
  /** SetRuntimeMapTagAction 的 `isSet` 配置字段；准确战斗语义待确认。 */
  "_isSet": boolean;
  /** SetRuntimeMapTagAction 的 `tag` 配置字段；准确战斗语义待确认。 */
  "_tag": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetSharedFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetSharedFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetSharedFlag, Assembly-CSharp";
  /** SetSharedFlagAction 的 `sharedFlagIndex` 配置字段；准确战斗语义待确认。 */
  "_sharedFlagIndex": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetSkillCastWithNoSp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetSkillCastWithNoSpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetSkillCastWithNoSp, Assembly-CSharp";
  /** SetSkillCastWithNoSpAction 的 `noSp` 配置字段；准确战斗语义待确认。 */
  "_noSp": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetSpineSkin, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetSpineSkinAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetSpineSkin, Assembly-CSharp";
  /** SetSpineSkinAction 的 `skinKey` 配置字段；准确战斗语义待确认。 */
  "_skinKey": string;
  /** SetSpineSkinAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetStackCountViaBlockNum, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetStackCountViaBlockNumAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetStackCountViaBlockNum, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS10 = SetIgnoreCancelReasonMaskAction | SetIgnoreMissFlagAction | SetMagicCircuitLikeObstacleInRangeAction | SetMaxMinusHpRatioAction | SetMultiAppearSkillPendingToCastAction | SetRuntimeMapTagAction | SetSharedFlagAction | SetSkillCastWithNoSpAction | SetSpineSkinAction | SetStackCountViaBlockNumAction;
