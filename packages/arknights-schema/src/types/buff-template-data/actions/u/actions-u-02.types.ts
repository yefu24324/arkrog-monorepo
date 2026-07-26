/**
 * buff_template_data 的 U 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateEnemyCurrentTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateEnemyCurrentTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateEnemyCurrentTile, Assembly-CSharp";
  /** UpdateEnemyCurrentTileAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** UpdateEnemyCurrentTileAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateFrictionFactor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateFrictionFactorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateFrictionFactor, Assembly-CSharp";
  /** UpdateFrictionFactorAction 的 `frictionFactor` 配置字段；准确战斗语义待确认。 */
  "_frictionFactor": number;
  /** UpdateFrictionFactorAction 的 `restoreFrictionFactor` 配置字段；准确战斗语义待确认。 */
  "_restoreFrictionFactor": boolean;
  /** UpdateFrictionFactorAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateNormalAndRareEventCntFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateNormalAndRareEventCntFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateNormalAndRareEventCntFunLiveModeOnly, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateObjectScaleViaRemainingRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateObjectScaleViaRemainingRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateObjectScaleViaRemainingRatio, Assembly-CSharp";
  /** UpdateObjectScaleViaRemainingRatioAction 的 `maxScale` 配置字段；准确战斗语义待确认。 */
  "_maxScale": number;
  /** UpdateObjectScaleViaRemainingRatioAction 的 `minScale` 配置字段；准确战斗语义待确认。 */
  "_minScale": number;
  /** UpdateObjectScaleViaRemainingRatioAction 的 `mountPointType` 配置字段；准确战斗语义待确认。 */
  "_mountPointType": "UI";
  /** UpdateObjectScaleViaRemainingRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateScoreManually, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateScoreManuallyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateScoreManually, Assembly-CSharp";
  /** UpdateScoreManuallyAction 的 `score` 配置字段；准确战斗语义待确认。 */
  "_score": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateStackBuffMaxStackCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateStackBuffMaxStackCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateStackBuffMaxStackCnt, Assembly-CSharp";
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER";
  /** UpdateStackBuffMaxStackCntAction 的 `defaultMaxStackCnt` 配置字段；准确战斗语义待确认。 */
  "_defaultMaxStackCnt": number;
  /** UpdateStackBuffMaxStackCntAction 的 `maxStackCntKey` 配置字段；准确战斗语义待确认。 */
  "_maxStackCntKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionU02 = UpdateEnemyCurrentTileAction | UpdateFrictionFactorAction | UpdateNormalAndRareEventCntFunLiveModeOnlyAction | UpdateObjectScaleViaRemainingRatioAction | UpdateScoreManuallyAction | UpdateStackBuffMaxStackCntAction;
