/**
 * buff_template_data 的 L 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LandFootball, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LandFootballAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LandFootball, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAddLastProfessionLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAddLastProfessionLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAddLastProfessionLevel, Assembly-CSharp";
  /** LegionModeOnlyAddLastProfessionLevelAction 的 `levelCnt` 配置字段；准确战斗语义待确认。 */
  "_levelCnt": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAddProfessionLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevel, Assembly-CSharp";
  /** LegionModeOnlyAddProfessionLevelAction 的 `levelCnt` 配置字段；准确战斗语义待确认。 */
  "_levelCnt": number;
  /** LegionModeOnlyAddProfessionLevelAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
  "_professionCategory": "NONE" | "SNIPER";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE" | "MAIN_TARGET";
  /** LegionModeOnlyAddProfessionLevelAction 的 `specifyProfessionCategory` 配置字段；准确战斗语义待确认。 */
  "_specifyProfessionCategory": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevelFromLastSelectCards, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAddProfessionLevelFromLastSelectCardsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevelFromLastSelectCards, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAssignCardCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardCntToBB, Assembly-CSharp";
  /** LegionModeOnlyAssignCardCntToBBAction 的 `cardId` 配置字段；准确战斗语义待确认。 */
  "_cardId": string;
  /** LegionModeOnlyAssignCardCntToBBAction 的 `cardKey` 配置字段；准确战斗语义待确认。 */
  "_cardKey": string;
  /** LegionModeOnlyAssignCardCntToBBAction 的 `cardLibraryType` 配置字段；准确战斗语义待确认。 */
  "_cardLibraryType": "USING";
  /** LegionModeOnlyAssignCardCntToBBAction 的 `onlyInHand` 配置字段；准确战斗语义待确认。 */
  "_onlyInHand": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardPriceToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAssignCardPriceToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardPriceToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAssignDangerLevelToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAssignDangerLevelToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAssignDangerLevelToBB, Assembly-CSharp";
  /** LegionModeOnlyAssignDangerLevelToBBAction 的 `dangerLevelKey` 配置字段；准确战斗语义待确认。 */
  "_dangerLevelKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAssignSpecifiedProfessionStackCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAssignSpecifiedProfessionStackCntToBB, Assembly-CSharp";
  /** LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction 的 `assignBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_assignBlackboardKey": string;
  /** LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction 的 `queryProfessionCategory` 配置字段；准确战斗语义待确认。 */
  "_queryProfessionCategory": "SNIPER" | "TANK";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusProfessionCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAssignStatusProfessionCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusProfessionCntToBB, Assembly-CSharp";
  /** LegionModeOnlyAssignStatusProfessionCntToBBAction 的 `professionCntKey` 配置字段；准确战斗语义待确认。 */
  "_professionCntKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusStackCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyAssignStatusStackCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusStackCntToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionL01 = LandFootballAction | LegionModeOnlyAddLastProfessionLevelAction | LegionModeOnlyAddProfessionLevelAction | LegionModeOnlyAddProfessionLevelFromLastSelectCardsAction | LegionModeOnlyAssignCardCntToBBAction | LegionModeOnlyAssignCardPriceToBBAction | LegionModeOnlyAssignDangerLevelToBBAction | LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction | LegionModeOnlyAssignStatusProfessionCntToBBAction | LegionModeOnlyAssignStatusStackCntToBBAction;
