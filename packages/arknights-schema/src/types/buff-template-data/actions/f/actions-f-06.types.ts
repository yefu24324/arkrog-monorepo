/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterModifierByRealDelta, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterModifierByRealDeltaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterModifierByRealDelta, Assembly-CSharp";
  /** FilterModifierByRealDeltaAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LT";
  /** FilterModifierByRealDeltaAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。 */
  "_modifierTargetType": "COST" | "EP" | "HP" | "LIFE_POINT" | "SP";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterModifierCancelReason, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterModifierCancelReasonAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterModifierCancelReason, Assembly-CSharp";
  /** FilterModifierCancelReasonAction 的 `reason` 配置字段；准确战斗语义待确认。 */
  "_reason": "BLOCKED" | "BLOCKED_WITH_DAMAGE_NUMBER" | "HIT_FAILED" | "INTERRUPT" | "MISS" | "UNHURTABLE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterModifierTargetType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterModifierTargetTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterModifierTargetType, Assembly-CSharp";
  /** FilterModifierTargetTypeAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。 */
  "_modifierTargetType": "COST" | "EP" | "HP" | "SP";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterRootTileMotionModePassable, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterRootTileMotionModePassableAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterRootTileMotionModePassable, Assembly-CSharp";
  /** FilterRootTileMotionModePassableAction 的 `motionModeToCheck` 配置字段；准确战斗语义待确认。 */
  "_motionModeToCheck": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterRootTileOffset, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterRootTileOffsetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterRootTileOffset, Assembly-CSharp";
  /** FilterRootTileOffsetAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
  "_anotherKeyToCompare": "max_distance";
  /** FilterRootTileOffsetAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** FilterRootTileOffsetAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE";
  /** FilterRootTileOffsetAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FilterRootTileOffsetAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterSkillTriggerdCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterSkillTriggerdCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterSkillTriggerdCnt, Assembly-CSharp";
  /** FilterSkillTriggerdCntAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "GE";
  /** FilterSkillTriggerdCntAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** FilterSkillTriggerdCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** FilterSkillTriggerdCntAction 的 `useCurTriggerCnt` 配置字段；准确战斗语义待确认。 */
  "_useCurTriggerCnt": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterSubProfessionAttackType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterSubProfessionAttackTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterSubProfessionAttackType, Assembly-CSharp";
  /** FilterSubProfessionAttackTypeAction 的 `targetAttackType` 配置字段；准确战斗语义待确认。 */
  "_targetAttackType": "PHYSICAL";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterTargetWithPlayerSide, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterTargetWithPlayerSideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterTargetWithPlayerSide, Assembly-CSharp";
  /** FilterTargetWithPlayerSideAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE";
  /** FilterTargetWithPlayerSideAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
  /** FilterTargetWithPlayerSideAction 的 `filterMapLayer` 配置字段；准确战斗语义待确认。 */
  "filterMapLayer": boolean;
  /** FilterTargetWithPlayerSideAction 的 `filterSourcePlayerSide` 配置字段；准确战斗语义待确认。 */
  "filterSourcePlayerSide": boolean;
  /** FilterTargetWithPlayerSideAction 的 `filterTargetPlayerSide` 配置字段；准确战斗语义待确认。 */
  "filterTargetPlayerSide": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterTileBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterTileBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterTileBlackboard, Assembly-CSharp";
  /** FilterTileBlackboardAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
  "_anotherKeyToCompare": null | "land_cnt_max";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FilterTileBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LE" | "LT";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MAIN_TARGET";
  /** FilterTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetOldTile": boolean;
  /** FilterTileBlackboardAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRoottile": boolean;
  /** FilterTileBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FindNearestBuildableTileToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FindNearestBuildableTileToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FindNearestBuildableTileToBB, Assembly-CSharp";
  /** FindNearestBuildableTileToBBAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_advancedBuildableMask": "DEEP_SEA";
  /** FindNearestBuildableTileToBBAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "MELEE";
  /** FindNearestBuildableTileToBBAction 的 `checkBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableMask": boolean;
  /** FindNearestBuildableTileToBBAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF06 = FilterModifierByRealDeltaAction | FilterModifierCancelReasonAction | FilterModifierTargetTypeAction | FilterRootTileMotionModePassableAction | FilterRootTileOffsetAction | FilterSkillTriggerdCntAction | FilterSubProfessionAttackTypeAction | FilterTargetWithPlayerSideAction | FilterTileBlackboardAction | FindNearestBuildableTileToBBAction;
