/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpawnTrainEnemyAtTargetPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpawnTrainEnemyAtTargetPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpawnTrainEnemyAtTargetPos, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SplashDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SplashDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SplashDamage, Assembly-CSharp";
  /** SplashDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NORMAL";
  /** SplashDamageAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
  "_createEffect": boolean;
  /** SplashDamageAction 的 `damageScale` 配置字段；准确战斗语义待确认。 */
  "_damageScale": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "PHYSICAL";
  /** SplashDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** SplashDamageAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "TARGET";
  /** SplashDamageAction 的 `sourceApplyWay` 配置字段；准确战斗语义待确认。 */
  "_sourceApplyWay": "MELEE";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SplitDamageToNearbyOperators, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SplitDamageToNearbyOperatorsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SplitDamageToNearbyOperators, Assembly-CSharp";
  /** SplitDamageToNearbyOperatorsAction 的 `allowedBuildableType` 配置字段；准确战斗语义待确认。 */
  "_allowedBuildableType": "MELEE";
  /** SplitDamageToNearbyOperatorsAction 的 `atkScaleVar` 配置字段；准确战斗语义待确认。 */
  "_atkScaleVar": string;
  /** SplitDamageToNearbyOperatorsAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** SplitDamageToNearbyOperatorsAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。 */
  "_defaultAtkScale": number;
  /** SplitDamageToNearbyOperatorsAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** SplitDamageToNearbyOperatorsAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreCancelReasonMask": "NONE";
  /** SplitDamageToNearbyOperatorsAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** SplitDamageToNearbyOperatorsAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": null;
  /** SplitDamageToNearbyOperatorsAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** SplitDamageToNearbyOperatorsAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "MODIFIER_SOURCE";
  /** SplitDamageToNearbyOperatorsAction 的 `splitScale` 配置字段；准确战斗语义待确认。 */
  "_splitScale": number;
  /** SplitDamageToNearbyOperatorsAction 的 `splitScaleKey` 配置字段；准确战斗语义待确认。 */
  "_splitScaleKey": string;
  /** SplitDamageToNearbyOperatorsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** SplitDamageToNearbyOperatorsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** SplitDamageToNearbyOperatorsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** SplitDamageToNearbyOperatorsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** SplitDamageToNearbyOperatorsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** SplitDamageToNearbyOperatorsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** SplitDamageToNearbyOperatorsAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** SplitDamageToNearbyOperatorsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** SplitDamageToNearbyOperatorsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** SplitDamageToNearbyOperatorsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** SplitDamageToNearbyOperatorsAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** SplitDamageToNearbyOperatorsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SpShowBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SpShowBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SpShowBuff, Assembly-CSharp";
  /** SpShowBuffAction 的 `advancedShowType` 配置字段；准确战斗语义待确认。 */
  "_advancedShowType": "NONE" | "USE_BLACKBOARD_DELTA_AS_ADDTION" | "USE_BLACKBOARD_DELTA_AS_RATIO";
  /** SpShowBuffAction 的 `isSelf` 配置字段；准确战斗语义待确认。 */
  "_isSelf": boolean;
  /** SpShowBuffAction 的 `isSkillCountDown` 配置字段；准确战斗语义待确认。 */
  "_isSkillCountDown": boolean;
  /** SpShowBuffAction 的 `spShowBuffKey` 配置字段；准确战斗语义待确认。 */
  "_spShowBuffKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+StackByBuffStart, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface StackByBuffStartAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+StackByBuffStart, Assembly-CSharp";
  /** StackByBuffStartAction 的 `curStackKey` 配置字段；准确战斗语义待确认。 */
  "_curStackKey": string;
  /** StackByBuffStartAction 的 `maxStackKey` 配置字段；准确战斗语义待确认。 */
  "_maxStackKey": string;
  /** StackByBuffStartAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+StartTimeline, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface StartTimelineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+StartTimeline, Assembly-CSharp";
  /** StartTimelineAction 的 `timelineKey` 配置字段；准确战斗语义待确认。 */
  "_timelineKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+StopBall, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface StopBallAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+StopBall, Assembly-CSharp";
  /** StopBallAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** StopBallAction 的 `ignoreUnstoppable` 配置字段；准确战斗语义待确认。 */
  "_ignoreUnstoppable": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** StopBallAction 的 `stopBySource` 配置字段；准确战斗语义待确认。 */
  "_stopBySource": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+StopEnemyForceTracePosition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface StopEnemyForceTracePositionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+StopEnemyForceTracePosition, Assembly-CSharp";
  /** StopEnemyForceTracePositionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+StopUnitAnimator, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface StopUnitAnimatorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+StopUnitAnimator, Assembly-CSharp";
  /** StopUnitAnimatorAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SumAtkInRangeChain, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SumAtkInRangeChainAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SumAtkInRangeChain, Assembly-CSharp";
  /** SumAtkInRangeChainAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SumAtkInRangeChainAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
  "_outputKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
  /** SumAtkInRangeChainAction 的 `trackBuffKey` 配置字段；准确战斗语义待确认。 */
  "_trackBuffKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS13 = SpawnTrainEnemyAtTargetPosAction | SplashDamageAction | SplitDamageToNearbyOperatorsAction | SpShowBuffAction | StackByBuffStartAction | StartTimelineAction | StopBallAction | StopEnemyForceTracePositionAction | StopUnitAnimatorAction | SumAtkInRangeChainAction;
