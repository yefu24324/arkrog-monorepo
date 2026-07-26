/**
 * buff_template_data 的 H 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleAddNumericFactor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleAddNumericFactorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleAddNumericFactor, Assembly-CSharp";
  /** HalfIdleAddNumericFactorAction 的 `affectType` 配置字段；准确战斗语义待确认。 */
  "_affectType": "Exp" | "ExpBook";
  /** HalfIdleAddNumericFactorAction 的 `calcType` 配置字段；准确战斗语义待确认。 */
  "_calcType": "MUL";
  /** HalfIdleAddNumericFactorAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** HalfIdleAddNumericFactorAction 的 `validSource` 配置字段；准确战斗语义待确认。 */
  "_validSource": "ALL" | "ENEMY";
  /** HalfIdleAddNumericFactorAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleCancleNumericFactor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleCancleNumericFactorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleCancleNumericFactor, Assembly-CSharp";
  /** HalfIdleCancleNumericFactorAction 的 `affectType` 配置字段；准确战斗语义待确认。 */
  "_affectType": "Exp";
  /** HalfIdleCancleNumericFactorAction 的 `calcType` 配置字段；准确战斗语义待确认。 */
  "_calcType": "MUL";
  /** HalfIdleCancleNumericFactorAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** HalfIdleCancleNumericFactorAction 的 `validSource` 配置字段；准确战斗语义待确认。 */
  "_validSource": "ALL";
  /** HalfIdleCancleNumericFactorAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleCheckHasCertainTargetUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleCheckHasCertainTargetUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleCheckHasCertainTargetUseAbilitySelector, Assembly-CSharp";
  /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "BUFF_OWNER";
  /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `floorTargetCnt` 配置字段；准确战斗语义待确认。 */
  "_floorTargetCnt": number;
  /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `floorTargetCntKey` 配置字段；准确战斗语义待确认。 */
  "_floorTargetCntKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleCheckLhblodSPRecoverNum, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleCheckLhblodSPRecoverNumAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleCheckLhblodSPRecoverNum, Assembly-CSharp";
  /** HalfIdleCheckLhblodSPRecoverNumAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** HalfIdleCheckLhblodSPRecoverNumAction 的 `resultKey` 配置字段；准确战斗语义待确认。 */
  "_resultKey": string;
  /** HalfIdleCheckLhblodSPRecoverNumAction 的 `stride` 配置字段；准确战斗语义待确认。 */
  "_stride": number;
  /** HalfIdleCheckLhblodSPRecoverNumAction 的 `strideKey` 配置字段；准确战斗语义待确认。 */
  "_strideKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleCheckNearbyRoad, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleCheckNearbyRoadAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleCheckNearbyRoad, Assembly-CSharp";
  /** HalfIdleCheckNearbyRoadAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleCheckOnIrrigatedTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleCheckOnIrrigatedTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleCheckOnIrrigatedTile, Assembly-CSharp";
  /** HalfIdleCheckOnIrrigatedTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleCheckSpecificUnitCount, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleCheckSpecificUnitCountAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleCheckSpecificUnitCount, Assembly-CSharp";
  /** HalfIdleCheckSpecificUnitCountAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LT";
  /** HalfIdleCheckSpecificUnitCountAction 的 `limitAmount` 配置字段；准确战斗语义待确认。 */
  "_limitAmount": number;
  /** HalfIdleCheckSpecificUnitCountAction 的 `limitAmountKey` 配置字段；准确战斗语义待确认。 */
  "_limitAmountKey": null | string;
  /** HalfIdleCheckSpecificUnitCountAction 的 `unitId` 配置字段；准确战斗语义待确认。 */
  "_unitId": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleDropBattleItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleDropBattleItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleDropBattleItem, Assembly-CSharp";
  /** HalfIdleDropBattleItemAction 的 `countBB` 配置字段；准确战斗语义待确认。 */
  "_countBB": string;
  /** HalfIdleDropBattleItemAction 的 `poolKeyBB` 配置字段；准确战斗语义待确认。 */
  "_poolKeyBB": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleDropResource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleDropResourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleDropResource, Assembly-CSharp";
  /** HalfIdleDropResourceAction 的 `countBB` 配置字段；准确战斗语义待确认。 */
  "_countBB": string;
  /** HalfIdleDropResourceAction 的 `poolKeyBB` 配置字段；准确战斗语义待确认。 */
  "_poolKeyBB": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleEnemyDropItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleEnemyDropItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleEnemyDropItem, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionH01 = HalfIdleAddNumericFactorAction | HalfIdleCancleNumericFactorAction | HalfIdleCheckHasCertainTargetUseAbilitySelectorAction | HalfIdleCheckLhblodSPRecoverNumAction | HalfIdleCheckNearbyRoadAction | HalfIdleCheckOnIrrigatedTileAction | HalfIdleCheckSpecificUnitCountAction | HalfIdleDropBattleItemAction | HalfIdleDropResourceAction | HalfIdleEnemyDropItemAction;
