/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopApplyForceByTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopApplyForceByTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopApplyForceByTarget, Assembly-CSharp";
  /** CoopApplyForceByTargetAction 的 `directByInputTarget` 配置字段；准确战斗语义待确认。 */
  "_directByInputTarget": boolean;
  /** CoopApplyForceByTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** CoopApplyForceByTargetAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。 */
  "_useBuffAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopApplyRecordDamageToMoveCtrl, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopApplyRecordDamageToMoveCtrlAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopApplyRecordDamageToMoveCtrl, Assembly-CSharp";
  /** CoopApplyRecordDamageToMoveCtrlAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
  "_recordKey": string;
  /** CoopApplyRecordDamageToMoveCtrlAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** CoopApplyRecordDamageToMoveCtrlAction 的 `useTargetDirect` 配置字段；准确战斗语义待确认。 */
  "_useTargetDirect": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopBoatGainScore, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopBoatGainScoreAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopBoatGainScore, Assembly-CSharp";
  /** CoopBoatGainScoreAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** CoopBoatGainScoreAction 的 `score` 配置字段；准确战斗语义待确认。 */
  "_score": number;
  /** CoopBoatGainScoreAction 的 `scoreKey` 配置字段；准确战斗语义待确认。 */
  "_scoreKey": string;
  /** CoopBoatGainScoreAction 的 `isMin` 配置字段；准确战斗语义待确认。 */
  "isMin": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopChangeVelocityByDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopChangeVelocityByDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopChangeVelocityByDirection, Assembly-CSharp";
  /** CoopChangeVelocityByDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** CoopChangeVelocityByDirectionAction 的 `velocity` 配置字段；准确战斗语义待确认。 */
  "_velocity": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopCheckInLastWave, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopCheckInLastWaveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopCheckInLastWave, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopCheckInResting, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopCheckInRestingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopCheckInResting, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopRecordDamageToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopRecordDamageToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopRecordDamageToBB, Assembly-CSharp";
  /** CoopRecordDamageToBBAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
  "_filterModifierCancelled": boolean;
  /** CoopRecordDamageToBBAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
  "_recordKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopRecordDefenceBossStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopRecordDefenceBossStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopRecordDefenceBossStatus, Assembly-CSharp";
  /** CoopRecordDefenceBossStatusAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopReplaceActionKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopReplaceActionKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopReplaceActionKey, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CoopReplaceActionKeyAction 的 `defaultKey` 配置字段；准确战斗语义待确认。 */
  "_defaultKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CopyCharacterSharedBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CopyCharacterSharedBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CopyCharacterSharedBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CopyCharacterSharedBlackboardAction 的 `copyToSharedBlackboard` 配置字段；准确战斗语义待确认。 */
  "_copyToSharedBlackboard": boolean;
  /** CopyCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC21 = CoopApplyForceByTargetAction | CoopApplyRecordDamageToMoveCtrlAction | CoopBoatGainScoreAction | CoopChangeVelocityByDirectionAction | CoopCheckInLastWaveAction | CoopCheckInRestingAction | CoopRecordDamageToBBAction | CoopRecordDefenceBossStatusAction | CoopReplaceActionKeyAction | CopyCharacterSharedBlackboardAction;
