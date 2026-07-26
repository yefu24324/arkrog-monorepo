/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIsBuildSlotCharacter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIsBuildSlotCharacterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIsBuildSlotCharacter, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIsFootballEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIsFootballEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIsFootballEnemy, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIsInPenaltyShootout, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIsInPenaltyShootoutAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIsInPenaltyShootout, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckIsTrackTargetEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckIsTrackTargetEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckIsTrackTargetEnemy, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckMainBuffId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckMainBuffIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckMainBuffId, Assembly-CSharp";
  /** CheckMainBuffIdAction 的 `idToFilter` 配置字段；准确战斗语义待确认。 */
  "_idToFilter": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckManhattanDistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckManhattanDistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckManhattanDistance, Assembly-CSharp";
  /** CheckManhattanDistanceAction 的 `maxDist` 配置字段；准确战斗语义待确认。 */
  "_maxDist": number;
  /** CheckManhattanDistanceAction 的 `minDist` 配置字段；准确战斗语义待确认。 */
  "_minDist": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckModifierContainsKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckModifierContainsKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckModifierContainsKey, Assembly-CSharp";
  /** CheckModifierContainsKeyAction 的 `customKey` 配置字段；准确战斗语义待确认。 */
  "_customKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckModifierDirectionOffset, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckModifierDirectionOffsetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckModifierDirectionOffset, Assembly-CSharp";
  /** CheckModifierDirectionOffsetAction 的 `exceptThisOffset` 配置字段；准确战斗语义待确认。 */
  "_exceptThisOffset": boolean;
  /** CheckModifierDirectionOffsetAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": {
                  /** CheckModifierDirectionOffsetAction 的 `col` 配置字段；准确战斗语义待确认。 */
                  "col": number;
                  /** CheckModifierDirectionOffsetAction 的 `row` 配置字段；准确战斗语义待确认。 */
                  "row": number;
                };
  /** CheckModifierDirectionOffsetAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "SOURCE";
  /** CheckModifierDirectionOffsetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
  /** CheckModifierDirectionOffsetAction 的 `targetToSource` 配置字段；准确战斗语义待确认。 */
  "_targetToSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckModifierFace, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckModifierFaceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckModifierFace, Assembly-CSharp";
  /** CheckModifierFaceAction 的 `angle` 配置字段；准确战斗语义待确认。 */
  "_angle": number;
  /** CheckModifierFaceAction 的 `backward` 配置字段；准确战斗语义待确认。 */
  "_backward": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckMotionMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckMotionModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckMotionMode, Assembly-CSharp";
  /** CheckMotionModeAction 的 `mode` 配置字段；准确战斗语义待确认。 */
  "_mode": "FLY" | "WALK";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC14 = CheckIsBuildSlotCharacterAction | CheckIsFootballEnemyAction | CheckIsInPenaltyShootoutAction | CheckIsTrackTargetEnemyAction | CheckMainBuffIdAction | CheckManhattanDistanceAction | CheckModifierContainsKeyAction | CheckModifierDirectionOffsetAction | CheckModifierFaceAction | CheckMotionModeAction;
