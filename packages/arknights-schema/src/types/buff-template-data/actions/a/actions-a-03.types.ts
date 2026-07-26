/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideFilterByTargetRopeCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideFilterByTargetRopeCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideFilterByTargetRopeCnt, Assembly-CSharp";
  /** Act33SideFilterByTargetRopeCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** Act33SideFilterByTargetRopeCntAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideFinishManagedProjectiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideFinishManagedProjectilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideFinishManagedProjectiles, Assembly-CSharp";
  /** Act33SideFinishManagedProjectilesAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
  "_projectileKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideAssignGemsCountToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideAssignGemsCountToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideAssignGemsCountToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Act35SideAssignGemsCountToBlackboardAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act35SideAssignGemsCountToBlackboardAction 的 `excludeLinkGems` 配置字段；准确战斗语义待确认。 */
  "_excludeLinkGems": boolean;
  /** Act35SideAssignGemsCountToBlackboardAction 的 `maxCount` 配置字段；准确战斗语义待确认。 */
  "_maxCount": number;
  /** Act35SideAssignGemsCountToBlackboardAction 的 `maxCountKey` 配置字段；准确战斗语义待确认。 */
  "_maxCountKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideCheckIfOnGemsTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideCheckIfOnGemsTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideCheckIfOnGemsTile, Assembly-CSharp";
  /** Act35SideCheckIfOnGemsTileAction 的 `checkNotOn` 配置字段；准确战斗语义待确认。 */
  "_checkNotOn": boolean;
  /** Act35SideCheckIfOnGemsTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act35SideCheckIfOnGemsTileAction 的 `excludeLinkGems` 配置字段；准确战斗语义待确认。 */
  "_excludeLinkGems": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideCheckNotOnExcludedTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideCheckNotOnExcludedTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideCheckNotOnExcludedTile, Assembly-CSharp";
  /** Act35SideCheckNotOnExcludedTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideEliminateGems, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideEliminateGemsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideEliminateGems, Assembly-CSharp";
  /** Act35SideEliminateGemsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideSummonGems, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideSummonGemsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideSummonGems, Assembly-CSharp";
  /** Act35SideSummonGemsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act35SideSummonGemsAction 的 `gemsType` 配置字段；准确战斗语义待确认。 */
  "_gemsType": "Polluted";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideSummonGemsInFourDirections, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideSummonGemsInFourDirectionsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideSummonGemsInFourDirections, Assembly-CSharp";
  /** Act35SideSummonGemsInFourDirectionsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act35SideSummonGemsInFourDirectionsAction 的 `gemsType` 配置字段；准确战斗语义待确认。 */
  "_gemsType": "Polluted";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideSummonGemsInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideSummonGemsInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideSummonGemsInRange, Assembly-CSharp";
  /** Act35SideSummonGemsInRangeAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act35SideSummonGemsInRangeAction 的 `gemsType` 配置字段；准确战斗语义待确认。 */
  "_gemsType": "Polluted";
  /** Act35SideSummonGemsInRangeAction 的 `isCircleRange` 配置字段；准确战斗语义待确认。 */
  "_isCircleRange": boolean;
  /** Act35SideSummonGemsInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Act35SideSummonGemsInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "PROJECTILE_TRACETARGET";
  /** Act35SideSummonGemsInRangeAction 的 `useInProjectile` 配置字段；准确战斗语义待确认。 */
  "_useInProjectile": boolean;
  /** Act35SideSummonGemsInRangeAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "direction": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act35SideSummonLinkGem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act35SideSummonLinkGemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act35SideSummonLinkGem, Assembly-CSharp";
  /** Act35SideSummonLinkGemAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA03 = Act33SideFilterByTargetRopeCntAction | Act33SideFinishManagedProjectilesAction | Act35SideAssignGemsCountToBlackboardAction | Act35SideCheckIfOnGemsTileAction | Act35SideCheckNotOnExcludedTileAction | Act35SideEliminateGemsAction | Act35SideSummonGemsAction | Act35SideSummonGemsInFourDirectionsAction | Act35SideSummonGemsInRangeAction | Act35SideSummonLinkGemAction;
