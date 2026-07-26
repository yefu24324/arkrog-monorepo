/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetTokenOrHost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetTokenOrHostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetTokenOrHost, Assembly-CSharp";
  /** CheckTargetTokenOrHostAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
  "_hostType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CheckTargetTokenOrHostAction 的 `tokenType` 配置字段；准确战斗语义待确认。 */
  "_tokenType": "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTheLeftSameDeployedToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTheLeftSameDeployedTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTheLeftSameDeployedToken, Assembly-CSharp";
  /** CheckTheLeftSameDeployedTokenAction 的 `minCnt` 配置字段；准确战斗语义待确认。 */
  "_minCnt": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileBlackboardHasKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileBlackboardHasKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileBlackboardHasKey, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CheckTileBlackboardHasKeyAction 的 `isNumeric` 配置字段；准确战斗语义待确认。 */
  "_isNumeric": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CheckTileBlackboardHasKeyAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRoottile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileByAdvancedBuildableMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileByAdvancedBuildableMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileByAdvancedBuildableMask, Assembly-CSharp";
  /** CheckTileByAdvancedBuildableMaskAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_advancedBuildableMask": Array<"ACT47SIDE_BANNED">;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileCntInAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileCntInAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileCntInAttackRange, Assembly-CSharp";
  /** CheckTileCntInAttackRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS";
  /** CheckTileCntInAttackRangeAction 的 `ignoreContainsCharacter` 配置字段；准确战斗语义待确认。 */
  "_ignoreContainsCharacter": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileInRange, Assembly-CSharp";
  /** CheckTileInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。 */
  "_radius": number;
  /** CheckTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CheckTileInRangeAction 的 `tileKeys` 配置字段；准确战斗语义待确认。 */
  "_tileKeys": Array<string>;
  /** CheckTileInRangeAction 的 `useCircle` 配置字段；准确战斗语义待确认。 */
  "_useCircle": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileOptions, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileOptionsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileOptions, Assembly-CSharp";
  /** CheckTileOptionsAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_advancedBuildableMask": "DEFAULT";
  /** CheckTileOptionsAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreAdvancedBuildableMask": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileOverlapped, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileOverlappedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileOverlapped, Assembly-CSharp";
  /** CheckTileOverlappedAction 的 `checkOverlapped` 配置字段；准确战斗语义待确认。 */
  "_checkOverlapped": boolean;
  /** CheckTileOverlappedAction 的 `checkOverlappedTwice` 配置字段；准确战斗语义待确认。 */
  "_checkOverlappedTwice": boolean;
  /** CheckTileOverlappedAction 的 `checkSourceRootTile` 配置字段；准确战斗语义待确认。 */
  "_checkSourceRootTile": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTilePassable, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTilePassableAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTilePassable, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTileTypeCntInAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTileTypeCntInAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTileTypeCntInAttackRange, Assembly-CSharp";
  /** CheckTileTypeCntInAttackRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT";
  /** CheckTileTypeCntInAttackRangeAction 的 `targetTileType` 配置字段；准确战斗语义待确认。 */
  "_targetTileType": "LOWLAND";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC17 = CheckTargetTokenOrHostAction | CheckTheLeftSameDeployedTokenAction | CheckTileBlackboardHasKeyAction | CheckTileByAdvancedBuildableMaskAction | CheckTileCntInAttackRangeAction | CheckTileInRangeAction | CheckTileOptionsAction | CheckTileOverlappedAction | CheckTilePassableAction | CheckTileTypeCntInAttackRangeAction;
