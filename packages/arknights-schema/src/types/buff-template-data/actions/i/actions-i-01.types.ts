/**
 * buff_template_data 的 I 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfBossRushBattleArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfBossRushBattleAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfBossRushBattleArea, Assembly-CSharp";
  /** IfBossRushBattleAreaAction 的 `isFirstOnTheLeft` 配置字段；准确战斗语义待确认。 */
  "_isFirstOnTheLeft": boolean;
  /** IfBossRushBattleAreaAction 的 `isFirstOnTheRight` 配置字段；准确战斗语义待确认。 */
  "_isFirstOnTheRight": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfConditions, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfConditionsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfConditions, Assembly-CSharp";
  /** IfConditionsAction 的 `conditionsNode` 配置字段；准确战斗语义待确认。 */
  "_conditionsNode": Array<BattleAction>;
  /** 条件不成立时依次执行的 Action 节点。 */
  "_failNodes": null | Array<BattleAction>;
  /** IfConditionsAction 的 `isAnd` 配置字段；准确战斗语义待确认。 */
  "_isAnd": boolean;
  /** 条件成立时依次执行的 Action 节点。 */
  "_succeedNodes": null | Array<BattleAction>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfContainsTargetsInAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfContainsTargetsInAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfContainsTargetsInAttackRange, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** IfContainsTargetsInAttackRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** IfContainsTargetsInAttackRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** IfContainsTargetsInAttackRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "INVISIBLE";
                         /** IfContainsTargetsInAttackRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** IfContainsTargetsInAttackRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** IfContainsTargetsInAttackRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** IfContainsTargetsInAttackRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** IfContainsTargetsInAttackRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** IfContainsTargetsInAttackRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** IfContainsTargetsInAttackRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** IfContainsTargetsInAttackRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** IfContainsTargetsInAttackRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfDamageTargetSide, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfDamageTargetSideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfDamageTargetSide, Assembly-CSharp";
  /** IfDamageTargetSideAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
  "_sideMask": "ALLY" | "ENEMY";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfElse, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfElseAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfElse, Assembly-CSharp";
  /** 决定分支是否成立的条件 Action 节点。 */
  "_conditionNode": BattleAction;
  /** 条件不成立时依次执行的 Action 节点。 */
  "_failNodes": null | Array<BattleAction>;
  /** 条件成立时依次执行的 Action 节点。 */
  "_succeedNodes": null | Array<BattleAction>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfEnemyIsMoving, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfEnemyIsMovingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfEnemyIsMoving, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfEnemyIsMovingBySelf, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfEnemyIsMovingBySelfAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfEnemyIsMovingBySelf, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfModifierTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfModifierTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfModifierTarget, Assembly-CSharp";
  /** IfModifierTargetAction 的 `motionMask` 配置字段；准确战斗语义待确认。 */
  "_motionMask": "ALL";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfNot, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfNotAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfNot, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IfSourceFromEnemyDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IfSourceFromEnemyDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IfSourceFromEnemyDirection, Assembly-CSharp";
  /** IfSourceFromEnemyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "MODIFIER_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "MODIFIER_TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionI01 = IfBossRushBattleAreaAction | IfConditionsAction | IfContainsTargetsInAttackRangeAction | IfDamageTargetSideAction | IfElseAction | IfEnemyIsMovingAction | IfEnemyIsMovingBySelfAction | IfModifierTargetAction | IfNotAction | IfSourceFromEnemyDirectionAction;
