/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasCharacterInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasCharacterInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasCharacterInRange, Assembly-CSharp";
  /** CheckHasCharacterInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
  "_checkRadius": boolean;
  /** CheckHasCharacterInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CheckHasCharacterInRangeAction 的 `excludeTrapAndToken` 配置字段；准确战斗语义待确认。 */
  "_excludeTrapAndToken": boolean;
  /** CheckHasCharacterInRangeAction 的 `filterByGroupId` 配置字段；准确战斗语义待确认。 */
  "_filterByGroupId": boolean;
  /** CheckHasCharacterInRangeAction 的 `filterGroupId` 配置字段；准确战斗语义待确认。 */
  "_filterGroupId": null | string;
  /** CheckHasCharacterInRangeAction 的 `globalRange` 配置字段；准确战斗语义待确认。 */
  "_globalRange": boolean;
  /** CheckHasCharacterInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CheckHasCharacterInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasEnemyIdInBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasEnemyIdInBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasEnemyIdInBlackboard, Assembly-CSharp";
  /** CheckHasEnemyIdInBlackboardAction 的 `doNotCheckSourceType` 配置字段；准确战斗语义待确认。 */
  "_doNotCheckSourceType": boolean;
  /** CheckHasEnemyIdInBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** CheckHasEnemyIdInBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasEnemyIdInCharacterSharedBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasEnemyIdInCharacterSharedBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasEnemyIdInCharacterSharedBlackboard, Assembly-CSharp";
  /** CheckHasEnemyIdInCharacterSharedBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** CheckHasEnemyIdInCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasEnemyInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasEnemyInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasEnemyInRange, Assembly-CSharp";
  /** CheckHasEnemyInRangeAction 的 `assignBBKey` 配置字段；准确战斗语义待确认。 */
  "_assignBBKey": string;
  /** CheckHasEnemyInRangeAction 的 `assignToBB` 配置字段；准确战斗语义待确认。 */
  "_assignToBB": boolean;
  /** CheckHasEnemyInRangeAction 的 `checkId` 配置字段；准确战斗语义待确认。 */
  "_checkId": boolean;
  /** CheckHasEnemyInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
  "_checkRadius": boolean;
  /** CheckHasEnemyInRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE";
  /** CheckHasEnemyInRangeAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
  "_countKey": string;
  /** CheckHasEnemyInRangeAction 的 `excludedBuffIds` 配置字段；准确战斗语义待确认。 */
  "_excludedBuffIds": null | Array<string>;
  /** CheckHasEnemyInRangeAction 的 `excludeSource` 配置字段；准确战斗语义待确认。 */
  "_excludeSource": boolean;
  /** CheckHasEnemyInRangeAction 的 `includedBuffIds` 配置字段；准确战斗语义待确认。 */
  "_includedBuffIds": null | Array<string>;
  /** CheckHasEnemyInRangeAction 的 `needCheckCount` 配置字段；准确战斗语义待确认。 */
  "_needCheckCount": boolean;
  /** CheckHasEnemyInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CheckHasEnemyInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** CheckHasEnemyInRangeAction 的 `soureceType` 配置字段；准确战斗语义待确认。 */
  "_soureceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** CheckHasEnemyInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
  "_useAttackRange": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasSp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasSpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasSp, Assembly-CSharp";
  /** CheckHasSpAction 的 `checkHasSp` 配置字段；准确战斗语义待确认。 */
  "_checkHasSp": number;
  /** CheckHasSpAction 的 `checkKey` 配置字段；准确战斗语义待确认。 */
  "_checkKey": string;
  /** CheckHasSpAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** CheckHasSpAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasStands, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasStandsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasStands, Assembly-CSharp";
  /** CheckHasStandsAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHasUnitInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHasUnitInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHasUnitInRange, Assembly-CSharp";
  /** CheckHasUnitInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** CheckHasUnitInRangeAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。 */
  "_checkContainsBuff": boolean;
  /** CheckHasUnitInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
  "_checkRadius": boolean;
  /** CheckHasUnitInRangeAction 的 `checkRangeId` 配置字段；准确战斗语义待确认。 */
  "_checkRangeId": boolean;
  /** CheckHasUnitInRangeAction 的 `checkSideType` 配置字段；准确战斗语义待确认。 */
  "_checkSideType": boolean;
  /** CheckHasUnitInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CheckHasUnitInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。 */
  "_radius": {
                  /** CheckHasUnitInRangeAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                  "_serializedValue": number;
                };
  /** CheckHasUnitInRangeAction 的 `radiusKey` 配置字段；准确战斗语义待确认。 */
  "_radiusKey": string;
  /** CheckHasUnitInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CheckHasUnitInRangeAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。 */
  "_rangeIdKey": string;
  /** CheckHasUnitInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
  "_targetSide": "ALLY" | "NEUTRAL";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnly, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHeightTypeInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHeightTypeInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHeightTypeInRange, Assembly-CSharp";
  /** CheckHeightTypeInRangeAction 的 `checkCnt` 配置字段；准确战斗语义待确认。 */
  "_checkCnt": number;
  /** CheckHeightTypeInRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE";
  /** CheckHeightTypeInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CheckHeightTypeInRangeAction 的 `m_sourceType` 配置字段；准确战斗语义待确认。 */
  "m_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckHeightTypeOfCharacterRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckHeightTypeOfCharacterRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckHeightTypeOfCharacterRootTile, Assembly-CSharp";
  /** CheckHeightTypeOfCharacterRootTileAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
  "_heightType": "HIGHLAND" | "LOWLAND";
  /** CheckHeightTypeOfCharacterRootTileAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC12 = CheckHasCharacterInRangeAction | CheckHasEnemyIdInBlackboardAction | CheckHasEnemyIdInCharacterSharedBlackboardAction | CheckHasEnemyInRangeAction | CheckHasSpAction | CheckHasStandsAction | CheckHasUnitInRangeAction | CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnlyAction | CheckHeightTypeInRangeAction | CheckHeightTypeOfCharacterRootTileAction;
