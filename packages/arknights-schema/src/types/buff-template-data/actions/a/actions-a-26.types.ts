/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTrainEnemyPastGridCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTrainEnemyPastGridCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTrainEnemyPastGridCntToBB, Assembly-CSharp";
  /** AssignTrainEnemyPastGridCntToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignUidToBlackBoard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignUidToBlackBoardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignUidToBlackBoard, Assembly-CSharp";
  /** AssignUidToBlackBoardAction 的 `assignAsInt` 配置字段；准确战斗语义待确认。 */
  "_assignAsInt": boolean;
  /** AssignUidToBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** AssignUidToBlackBoardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignUidToBuffBlackBoard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignUidToBuffBlackBoardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignUidToBuffBlackBoard, Assembly-CSharp";
  /** AssignUidToBuffBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** AssignUidToBuffBlackBoardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignUnionFindMemberCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignUnionFindMemberCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignUnionFindMemberCntToBB, Assembly-CSharp";
  /** AssignUnionFindMemberCntToBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** AssignUnionFindMemberCntToBBAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignValueToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignValueToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignValueToBB, Assembly-CSharp";
  /** AssignValueToBBAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
  "_assignString": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignValueToBBAction 的 `copyFromKey` 配置字段；准确战斗语义待确认。 */
  "_copyFromKey": null | string;
  /** AssignValueToBBAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignValueToBBWithWeight, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignValueToBBWithWeightAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignValueToBBWithWeight, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignValueToBBWithWeightAction 的 `maxWeight` 配置字段；准确战斗语义待确认。 */
  "_maxWeight": number;
  /** AssignValueToBBWithWeightAction 的 `useNum2` 配置字段；准确战斗语义待确认。 */
  "_useNum2": boolean;
  /** AssignValueToBBWithWeightAction 的 `weightNum` 配置字段；准确战斗语义待确认。 */
  "_weightNum": number;
  /** AssignValueToBBWithWeightAction 的 `weightNum2` 配置字段；准确战斗语义待确认。 */
  "_weightNum2": number;
  /** AssignValueToBBWithWeightAction 的 `weightNum2Key` 配置字段；准确战斗语义待确认。 */
  "_weightNum2Key": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignValueToTraitBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignValueToTraitBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignValueToTraitBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignValueToTraitBBAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AtkAdditionUpBeforeCalcDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AtkAdditionUpBeforeCalcDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AtkAdditionUpBeforeCalcDamage, Assembly-CSharp";
  /** AtkAdditionUpBeforeCalcDamageAction 的 `atkAdditionKey` 配置字段；准确战斗语义待确认。 */
  "_atkAdditionKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL";
  /** AtkAdditionUpBeforeCalcDamageAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": number;
  /** AtkAdditionUpBeforeCalcDamageAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AtkScaleUp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AtkScaleUpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AtkScaleUp, Assembly-CSharp";
  /** AtkScaleUpAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "ALL" | "MELEE" | "NONE" | "RANGED";
  /** AtkScaleUpAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。 */
  "_atkScaleKey": string;
  /** AtkScaleUpAction 的 `cancelIfAtkScaleZero` 配置字段；准确战斗语义待确认。 */
  "_cancelIfAtkScaleZero": boolean;
  /** AtkScaleUpAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": number;
  /** AtkScaleUpAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** AtkScaleUpAction 的 `filterNoneApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterNoneApplyWay": boolean;
  /** AtkScaleUpAction 的 `filterProjectileKey` 配置字段；准确战斗语义待确认。 */
  "_filterProjectileKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AtkToHpRecovery, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AtkToHpRecoveryAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AtkToHpRecovery, Assembly-CSharp";
  /** AtkToHpRecoveryAction 的 `getAtkFromTarget` 配置字段；准确战斗语义待确认。 */
  "_getAtkFromTarget": boolean;
  /** AtkToHpRecoveryAction 的 `getAtkTargetType` 配置字段；准确战斗语义待确认。 */
  "_getAtkTargetType": "BUFF_SOURCE" | "SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA26 = AssignTrainEnemyPastGridCntToBBAction | AssignUidToBlackBoardAction | AssignUidToBuffBlackBoardAction | AssignUnionFindMemberCntToBBAction | AssignValueToBBAction | AssignValueToBBWithWeightAction | AssignValueToTraitBBAction | AtkAdditionUpBeforeCalcDamageAction | AtkScaleUpAction | AtkToHpRecoveryAction;
