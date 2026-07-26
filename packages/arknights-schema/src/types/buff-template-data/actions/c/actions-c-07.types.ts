/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsTargetsInRangeId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsTargetsInRangeIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsTargetsInRangeId, Assembly-CSharp";
  /** CheckContainsTargetsInRangeIdAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。 */
  "_rangeIdKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CheckContainsTargetsInRangeIdAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CheckContainsTargetsInRangeIdAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CheckContainsTargetsInRangeIdAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** CheckContainsTargetsInRangeIdAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CheckContainsTargetsInRangeIdAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** CheckContainsTargetsInRangeIdAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CheckContainsTargetsInRangeIdAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** CheckContainsTargetsInRangeIdAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** CheckContainsTargetsInRangeIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** CheckContainsTargetsInRangeIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** CheckContainsTargetsInRangeIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** CheckContainsTargetsInRangeIdAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCost, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CheckCostAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "GE";
  /** CheckCostAction 的 `considerNegativeCost` 配置字段；准确战斗语义待确认。 */
  "_considerNegativeCost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCurrentBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCurrentBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCurrentBuff, Assembly-CSharp";
  /** CheckCurrentBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** CheckCurrentBuffAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_SOURCE";
  /** CheckCurrentBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCurrentLevelProgressRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCurrentLevelProgressRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCurrentLevelProgressRatio, Assembly-CSharp";
  /** CheckCurrentLevelProgressRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE";
  /** CheckCurrentLevelProgressRatioAction 的 `levelProgressKey` 配置字段；准确战斗语义待确认。 */
  "_levelProgressKey": string;
  /** CheckCurrentLevelProgressRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCurrentTileEnemyRouteSpecificPoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCurrentTileEnemyRouteSpecificPointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCurrentTileEnemyRouteSpecificPoint, Assembly-CSharp";
  /** CheckCurrentTileEnemyRouteSpecificPointAction 的 `isCheckEndPoint` 配置字段；准确战斗语义待确认。 */
  "_isCheckEndPoint": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCurrentTileKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCurrentTileKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCurrentTileKey, Assembly-CSharp";
  /** CheckCurrentTileKeyAction 的 `isExclude` 配置字段；准确战斗语义待确认。 */
  "_isExclude": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CheckCurrentTileKeyAction 的 `tileKey` 配置字段；准确战斗语义待确认。 */
  "_tileKey": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDirection, Assembly-CSharp";
  /** CheckDirectionAction 的 `judgeType` 配置字段；准确战斗语义待确认。 */
  "_judgeType": "EQUAL" | "FACE_TARGET" | "OPPOSITE" | "VERTICAL";
  /** CheckDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** CheckDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDirectionWithBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDirectionWithBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDirectionWithBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CheckDirectionWithBBAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** CheckDirectionWithBBAction 的 `judgeType` 配置字段；准确战斗语义待确认。 */
  "_judgeType": "EQUAL" | "OPPOSITE";
  /** CheckDirectionWithBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDistance, Assembly-CSharp";
  /** CheckDistanceAction 的 `checkCertainPosition` 配置字段；准确战斗语义待确认。 */
  "_checkCertainPosition": boolean;
  /** CheckDistanceAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** CheckDistanceAction 的 `radius` 配置字段；准确战斗语义待确认。 */
  "_radius": number;
  /** CheckDistanceAction 的 `radiusBbKey` 配置字段；准确战斗语义待确认。 */
  "_radiusBbKey": null | string;
  /** CheckDistanceAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** CheckDistanceAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE";
  /** CheckDistanceAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDistanceToProjectileCenter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDistanceToProjectileCenterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDistanceToProjectileCenter, Assembly-CSharp";
  /** CheckDistanceToProjectileCenterAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LE";
  /** CheckDistanceToProjectileCenterAction 的 `distBbKey` 配置字段；准确战斗语义待确认。 */
  "_distBbKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
  /** CheckDistanceToProjectileCenterAction 的 `useBuffProjectile` 配置字段；准确战斗语义待确认。 */
  "_useBuffProjectile": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC07 = CheckContainsTargetsInRangeIdAction | CheckCostAction | CheckCurrentBuffAction | CheckCurrentLevelProgressRatioAction | CheckCurrentTileEnemyRouteSpecificPointAction | CheckCurrentTileKeyAction | CheckDirectionAction | CheckDirectionWithBBAction | CheckDistanceAction | CheckDistanceToProjectileCenterAction;
