/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCharacterSharedBBToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCharacterSharedBBToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCharacterSharedBBToBlackboard, Assembly-CSharp";
  /** AssignCharacterSharedBBToBlackboardAction 的 `character` 配置字段；准确战斗语义待确认。 */
  "_character": string;
  /** AssignCharacterSharedBBToBlackboardAction 的 `sourceBBKey` 配置字段；准确战斗语义待确认。 */
  "_sourceBBKey": string;
  /** AssignCharacterSharedBBToBlackboardAction 的 `targetBBKey` 配置字段；准确战斗语义待确认。 */
  "_targetBBKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCharacterSkillBlackboardToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCharacterSkillBlackboardToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCharacterSkillBlackboardToBB, Assembly-CSharp";
  /** AssignCharacterSkillBlackboardToBBAction 的 `sourceBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_sourceBlackboardKey": string;
  /** AssignCharacterSkillBlackboardToBBAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_targetBlackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCharacterSkillRangeToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCharacterSkillRangeToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCharacterSkillRangeToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCharacterSkillSpCostToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCharacterSkillSpCostToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCharacterSkillSpCostToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCheckPointIndexToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCheckPointIndexToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCheckPointIndexToBB, Assembly-CSharp";
  /** AssignCheckPointIndexToBBAction 的 `indexBbKey` 配置字段；准确战斗语义待确认。 */
  "_indexBbKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCurrentBlockNumToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCurrentBlockNumToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCurrentBlockNumToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCurrentBlockVolumnToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCurrentBlockVolumnToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCurrentBlockVolumnToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCurrentModeToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCurrentModeToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCurrentModeToBlackboard, Assembly-CSharp";
  /** AssignCurrentModeToBlackboardAction 的 `blackbaordKey` 配置字段；准确战斗语义待确认。 */
  "_blackbaordKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCurSpToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCurSpToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCurSpToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignCurSpToBBAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** AssignCurSpToBBAction 的 `useProgressLayer` 配置字段；准确战斗语义待确认。 */
  "_useProgressLayer": boolean;
  /** AssignCurSpToBBAction 的 `useProgressToFull` 配置字段；准确战斗语义待确认。 */
  "_useProgressToFull": boolean;
  /** AssignCurSpToBBAction 的 `useProgressToReady` 配置字段；准确战斗语义待确认。 */
  "_useProgressToReady": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignDamageValueToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignDamageValueToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignDamageValueToBlackboard, Assembly-CSharp";
  /** AssignDamageValueToBlackboardAction 的 `assignRealDelta` 配置字段；准确战斗语义待确认。 */
  "_assignRealDelta": boolean;
  /** AssignDamageValueToBlackboardAction 的 `assignValueWithoutCalculate` 配置字段；准确战斗语义待确认。 */
  "_assignValueWithoutCalculate": boolean;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "HEAL" | "MAGICAL" | "NONE" | "PHYSICAL" | "PURE";
  /** AssignDamageValueToBlackboardAction 的 `owner` 配置字段；准确战斗语义待确认。 */
  "_owner": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET";
  /** AssignDamageValueToBlackboardAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
  "_scaleKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA19 = AssignCharacterSharedBBToBlackboardAction | AssignCharacterSkillBlackboardToBBAction | AssignCharacterSkillRangeToBlackboardAction | AssignCharacterSkillSpCostToBBAction | AssignCheckPointIndexToBBAction | AssignCurrentBlockNumToBBAction | AssignCurrentBlockVolumnToBBAction | AssignCurrentModeToBlackboardAction | AssignCurSpToBBAction | AssignDamageValueToBlackboardAction;
