/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignRelativeDirectionToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignRelativeDirectionToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignRelativeDirectionToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignResCountToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignResCountToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignResCountToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignResCountToBBAction 的 `resourceTypeKey` 配置字段；准确战斗语义待确认。 */
  "_resourceTypeKey": string;
  /** AssignResCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignRespawnCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignRespawnCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignRespawnCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignRootTileBlackBoardValueToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignRootTileBlackBoardValueToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignRootTileBlackBoardValueToBB, Assembly-CSharp";
  /** AssignRootTileBlackBoardValueToBBAction 的 `isStringKey` 配置字段；准确战斗语义待确认。 */
  "_isStringKey": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignRootTileBlackBoardValueToBBAction 的 `tileBBKey` 配置字段；准确战斗语义待确认。 */
  "_tileBBKey": string;
  /** AssignRootTileBlackBoardValueToBBAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignRootTileToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignRootTileToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignRootTileToBB, Assembly-CSharp";
  /** AssignRootTileToBBAction 的 `assignAsString` 配置字段；准确战斗语义待确认。 */
  "_assignAsString": boolean;
  /** AssignRootTileToBBAction 的 `assignTargetTokenOrHost` 配置字段；准确战斗语义待确认。 */
  "_assignTargetTokenOrHost": boolean;
  /** AssignRootTileToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": null | string;
  /** AssignRootTileToBBAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": null | string;
  /** AssignRootTileToBBAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignRuneCountToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignRuneCountToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignRuneCountToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignRuneCountToBlackboardAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** AssignRuneCountToBlackboardAction 的 `runeKey` 配置字段；准确战斗语义待确认。 */
  "_runeKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignScrapInventoryToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignScrapInventoryToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignScrapInventoryToBlackboard, Assembly-CSharp";
  /** AssignScrapInventoryToBlackboardAction 的 `countBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_countBlackboardKey": string;
  /** AssignScrapInventoryToBlackboardAction 的 `limitBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_limitBlackboardKey": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignSkillTriggerdCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignSkillTriggerdCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignSkillTriggerdCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignSkillTriggerdCntToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignSkinIdToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignSkinIdToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignSkinIdToBlackboard, Assembly-CSharp";
  /** AssignSkinIdToBlackboardAction 的 `skinIdBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_skinIdBlackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignSpCostToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignSpCostToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignSpCostToBB, Assembly-CSharp";
  /** AssignSpCostToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": string;
  /** AssignSpCostToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA24 = AssignRelativeDirectionToBBAction | AssignResCountToBBAction | AssignRespawnCntToBlackboardAction | AssignRootTileBlackBoardValueToBBAction | AssignRootTileToBBAction | AssignRuneCountToBlackboardAction | AssignScrapInventoryToBlackboardAction | AssignSkillTriggerdCntToBlackboardAction | AssignSkinIdToBlackboardAction | AssignSpCostToBBAction;
