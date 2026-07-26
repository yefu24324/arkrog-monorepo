/**
 * buff_template_data 的 T 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerTokenSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerTokenSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerTokenSkill, Assembly-CSharp";
  /** TriggerTokenSkillAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
  "_hostType": "BUFF_OWNER";
  /** TriggerTokenSkillAction 的 `isAutoSkill` 配置字段；准确战斗语义待确认。 */
  "_isAutoSkill": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerTokenSkillWithinManhattanDistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerTokenSkillWithinManhattanDistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerTokenSkillWithinManhattanDistance, Assembly-CSharp";
  /** TriggerTokenSkillWithinManhattanDistanceAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
  "_hostType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TryActiveFeverIfFull, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TryActiveFeverIfFullAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TryActiveFeverIfFull, Assembly-CSharp";
  /** TryActiveFeverIfFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
  "_feverKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TryBlink, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TryBlinkAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TryBlink, Assembly-CSharp";
  /** TryBlinkAction 的 `onlyBlinkWhenFtbStop` 配置字段；准确战斗语义待确认。 */
  "_onlyBlinkWhenFtbStop": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TryRemoveRuntimeRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TryRemoveRuntimeRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TryRemoveRuntimeRoute, Assembly-CSharp";
  /** TryRemoveRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TryResetCharacterFaceIdleDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TryResetCharacterFaceIdleDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TryResetCharacterFaceIdleDirection, Assembly-CSharp";
  /** TryResetCharacterFaceIdleDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionT03 = TriggerTokenSkillAction | TriggerTokenSkillWithinManhattanDistanceAction | TryActiveFeverIfFullAction | TryBlinkAction | TryRemoveRuntimeRouteAction | TryResetCharacterFaceIdleDirectionAction;
