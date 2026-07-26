/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyInBornState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyInBornStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyInBornState, Assembly-CSharp";
  /** CheckEnemyInBornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyInMagicCircuit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyInMagicCircuitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyInMagicCircuit, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyIsHanging, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyIsHangingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyIsHanging, Assembly-CSharp";
  /** CheckEnemyIsHangingAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyIsStayStill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyIsStayStillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyIsStayStill, Assembly-CSharp";
  /** CheckEnemyIsStayStillAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyIsTracingTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyIsTracingTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyIsTracingTarget, Assembly-CSharp";
  /** CheckEnemyIsTracingTargetAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyLevelMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyLevelMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyLevelMask, Assembly-CSharp";
  /** CheckEnemyLevelMaskAction 的 `targetLevelMask` 配置字段；准确战斗语义待确认。 */
  "_targetLevelMask": "BOSS" | "ELITE_AND_BOSS" | "ELITE_AND_NORMAL";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyLevelMaskInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyLevelMaskInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyLevelMaskInRange, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CheckEnemyLevelMaskInRangeAction 的 `targetLevelMask` 配置字段；准确战斗语义待确认。 */
  "_targetLevelMask": "ELITE_AND_BOSS";
  /** CheckEnemyLevelMaskInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CheckEnemyLevelMaskInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CheckEnemyLevelMaskInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** CheckEnemyLevelMaskInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CheckEnemyLevelMaskInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** CheckEnemyLevelMaskInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CheckEnemyLevelMaskInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** CheckEnemyLevelMaskInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** CheckEnemyLevelMaskInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** CheckEnemyLevelMaskInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** CheckEnemyLevelMaskInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** CheckEnemyLevelMaskInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyLevelType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyLevelTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyLevelType, Assembly-CSharp";
  /** CheckEnemyLevelTypeAction 的 `targetLevelType` 配置字段；准确战斗语义待确认。 */
  "_targetLevelType": "BOSS" | "ELITE" | "NORMAL";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyMultiChargeAbilityIsCharge, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyMultiChargeAbilityIsChargeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyMultiChargeAbilityIsCharge, Assembly-CSharp";
  /** CheckEnemyMultiChargeAbilityIsChargeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyReachRouteEndPosition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyReachRouteEndPositionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyReachRouteEndPosition, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC09 = CheckEnemyInBornStateAction | CheckEnemyInMagicCircuitAction | CheckEnemyIsHangingAction | CheckEnemyIsStayStillAction | CheckEnemyIsTracingTargetAction | CheckEnemyLevelMaskAction | CheckEnemyLevelMaskInRangeAction | CheckEnemyLevelTypeAction | CheckEnemyMultiChargeAbilityIsChargeAction | CheckEnemyReachRouteEndPositionAction;
