/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignHostBlackboardToBuffBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignHostBlackboardToBuffBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignHostBlackboardToBuffBlackboard, Assembly-CSharp";
  /** AssignHostBlackboardToBuffBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": number;
  /** AssignHostBlackboardToBuffBlackboardAction 的 `fromBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_fromBlackboardKey": string;
  /** AssignHostBlackboardToBuffBlackboardAction 的 `hostBuffKey` 配置字段；准确战斗语义待确认。 */
  "_hostBuffKey": string;
  /** AssignHostBlackboardToBuffBlackboardAction 的 `hostTargetType` 配置字段；准确战斗语义待确认。 */
  "_hostTargetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AssignHostBlackboardToBuffBlackboardAction 的 `toBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_toBlackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignHpRatioToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignHpRatioToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignHpRatioToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignIDToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignIDToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignIDToBlackboard, Assembly-CSharp";
  /** AssignIDToBlackboardAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignLocationPosToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignLocationPosToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignLocationPosToBlackboard, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignManhattanDistanceToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignManhattanDistanceToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignManhattanDistanceToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignMapPositionToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignMapPositionToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignMapPositionToBlackboard, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignMapPositionToBlackboardAction 的 `XKey` 配置字段；准确战斗语义待确认。 */
  "_XKey": string;
  /** AssignMapPositionToBlackboardAction 的 `YKey` 配置字段；准确战斗语义待确认。 */
  "_YKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignMaxSpToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignMaxSpToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignMaxSpToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignMcgrafTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignMcgrafTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignMcgrafTile, Assembly-CSharp";
  /** AssignMcgrafTileAction 的 `options` 配置字段；准确战斗语义待确认。 */
  "_options": {
                   /** AssignMcgrafTileAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMask": "DEFAULT";
                   /** AssignMcgrafTileAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMaskExcept": boolean;
                   /** AssignMcgrafTileAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "allowAllAdvancedBuildableMask": boolean;
                   /** AssignMcgrafTileAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                   "allowNoneBuildableType": boolean;
                   /** AssignMcgrafTileAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                   "allowNonePassableMask": boolean;
                   /** AssignMcgrafTileAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "allowedTileBlackboardKey": null;
                   /** AssignMcgrafTileAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                   "buildableType": "MELEE";
                   /** AssignMcgrafTileAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                   "checkBuildableOrPassable": boolean;
                   /** AssignMcgrafTileAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                   "checkExtraBuildableCheckers": boolean;
                   /** AssignMcgrafTileAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                   "checkHeightType": boolean;
                   /** AssignMcgrafTileAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                   "checkTileHidden": boolean;
                   /** AssignMcgrafTileAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                   "checkTileMode": boolean;
                   /** AssignMcgrafTileAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                   "checkTileMoveCost": boolean;
                   /** AssignMcgrafTileAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                   "checkTileTypes": boolean;
                   /** AssignMcgrafTileAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                   "exceptTileTypes": boolean;
                   /** AssignMcgrafTileAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "excludeTileBlackboardKey": null;
                   /** AssignMcgrafTileAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                   "heightType": "LOWLAND";
                   /** AssignMcgrafTileAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                   "modeIndex": number;
                   /** AssignMcgrafTileAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                   "moveCostCompareType": "LT";
                   /** AssignMcgrafTileAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                   "moveCostThreshold": number;
                   /** AssignMcgrafTileAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                   "passableMask": "WALK_ONLY";
                   /** AssignMcgrafTileAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                   "tileTypesMask": "DEFAULT";
                 };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignModifierOriginAtkToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignModifierOriginAtkToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignModifierOriginAtkToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignModifierRealDeltaToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignModifierRealDeltaToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignModifierRealDeltaToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignModifierRealDeltaToBBAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。 */
  "_modifierTargetType": "HP" | "LIFE_POINT";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA22 = AssignHostBlackboardToBuffBlackboardAction | AssignHpRatioToBBAction | AssignIDToBlackboardAction | AssignLocationPosToBlackboardAction | AssignManhattanDistanceToBBAction | AssignMapPositionToBlackboardAction | AssignMaxSpToBlackboardAction | AssignMcgrafTileAction | AssignModifierOriginAtkToBBAction | AssignModifierRealDeltaToBBAction;
