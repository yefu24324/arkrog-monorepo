/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignSpecificPositionAmongPositionListToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignSpecificPositionAmongPositionListToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignSpecificPositionAmongPositionListToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignSpecificPositionAmongPositionListToBlackboardAction 的 `checkReachable` 配置字段；准确战斗语义待确认。 */
  "_checkReachable": boolean;
  /** AssignSpecificPositionAmongPositionListToBlackboardAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
  "_filterType": "NEAREST_TO_TARGET";
  /** AssignSpecificPositionAmongPositionListToBlackboardAction 的 `positionListKey` 配置字段；准确战斗语义待确认。 */
  "_positionListKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignStealAttributeAbilityTotalValueToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignStealAttributeAbilityTotalValueToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignStealAttributeAbilityTotalValueToBB, Assembly-CSharp";
  /** AssignStealAttributeAbilityTotalValueToBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** AssignStealAttributeAbilityTotalValueToBBAction 的 `assignStealMaxValue` 配置字段；准确战斗语义待确认。 */
  "_assignStealMaxValue": boolean;
  /** AssignStealAttributeAbilityTotalValueToBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AssignStealAttributeAbilityTotalValueToBBAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
  "_useFirstActiveAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignSubSpineConfigIndexToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignSubSpineConfigIndexToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignSubSpineConfigIndexToBB, Assembly-CSharp";
  /** AssignSubSpineConfigIndexToBBAction 的 `indexKey` 配置字段；准确战斗语义待确认。 */
  "_indexKey": string;
  /** AssignSubSpineConfigIndexToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignSurroundBuildingCountToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignSurroundBuildingCountToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignSurroundBuildingCountToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignSurroundBuildingCountToBBAction 的 `filterTags` 配置字段；准确战斗语义待确认。 */
  "_filterTags": Array<string>;
  /** AssignSurroundBuildingCountToBBAction 的 `filterTagsRequireAll` 配置字段；准确战斗语义待确认。 */
  "_filterTagsRequireAll": boolean;
  /** AssignSurroundBuildingCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTargetsCountToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTargetsCountToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTargetsCountToBB, Assembly-CSharp";
  /** AssignTargetsCountToBBAction 的 `targetKey` 配置字段；准确战斗语义待确认。 */
  "_targetKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTileBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTileBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTileBlackboard, Assembly-CSharp";
  /** AssignTileBlackboardAction 的 `assignKey` 配置字段；准确战斗语义待确认。 */
  "_assignKey": string;
  /** AssignTileBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": number;
  /** AssignTileBlackboardAction 的 `getTileFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_getTileFromBlackboard": boolean;
  /** AssignTileBlackboardAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
  "_isRemove": boolean;
  /** AssignTileBlackboardAction 的 `isString` 配置字段；准确战斗语义待确认。 */
  "_isString": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignTileBlackboardAction 的 `tileKey` 配置字段；准确战斗语义待确认。 */
  "_tileKey": string;
  /** AssignTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetOldTile": boolean;
  /** AssignTileBlackboardAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRootTile": boolean;
  /** AssignTileBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTileToBBUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTileToBBUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTileToBBUseAbilitySelector, Assembly-CSharp";
  /** AssignTileToBBUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTokenCardCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTokenCardCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTokenCardCntToBB, Assembly-CSharp";
  /** AssignTokenCardCntToBBAction 的 `assignMaxCount` 配置字段；准确战斗语义待确认。 */
  "_assignMaxCount": boolean;
  /** AssignTokenCardCntToBBAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
  "_countKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTokenCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTokenCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTokenCntToBB, Assembly-CSharp";
  /** AssignTokenCntToBBAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
  "_actionTargetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignTokenCntToBBAction 的 `useTargetHost` 配置字段；准确战斗语义待确认。 */
  "_useTargetHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignTotalResCountToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignTotalResCountToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignTotalResCountToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignTotalResCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA25 = AssignSpecificPositionAmongPositionListToBlackboardAction | AssignStealAttributeAbilityTotalValueToBBAction | AssignSubSpineConfigIndexToBBAction | AssignSurroundBuildingCountToBBAction | AssignTargetsCountToBBAction | AssignTileBlackboardAction | AssignTileToBBUseAbilitySelectorAction | AssignTokenCardCntToBBAction | AssignTokenCntToBBAction | AssignTotalResCountToBBAction;
