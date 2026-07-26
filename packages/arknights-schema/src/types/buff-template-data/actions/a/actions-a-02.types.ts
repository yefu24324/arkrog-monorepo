/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideCheckTileInWaterArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideCheckTileInWaterAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideCheckTileInWaterArea, Assembly-CSharp";
  /** Act31SideCheckTileInWaterAreaAction 的 `checkSourceBehindTile` 配置字段；准确战斗语义待确认。 */
  "_checkSourceBehindTile": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideDeathPolluteTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideDeathPolluteTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideDeathPolluteTile, Assembly-CSharp";
  /** Act31SideDeathPolluteTileAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SidePumpFlowIntoOtherArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SidePumpFlowIntoOtherAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SidePumpFlowIntoOtherArea, Assembly-CSharp";
  /** Act31SidePumpFlowIntoOtherAreaAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SidePurifyAreaPollute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SidePurifyAreaPolluteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SidePurifyAreaPollute, Assembly-CSharp";
  /** Act31SidePurifyAreaPolluteAction 的 `addPolluteV` 配置字段；准确战斗语义待确认。 */
  "_addPolluteV": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act31SideTriggerRebuildAreas, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act31SideTriggerRebuildAreasAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act31SideTriggerRebuildAreas, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideBurnCharactersWithRope, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideBurnCharactersWithRopeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideBurnCharactersWithRope, Assembly-CSharp";
  /** Act33SideBurnCharactersWithRopeAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "NONE";
  /** Act33SideBurnCharactersWithRopeAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
  "_elementDamageType": "FIRE" | "NONE";
  /** Act33SideBurnCharactersWithRopeAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。 */
  "_fixedEpDamageKey": null | string;
  /** Act33SideBurnCharactersWithRopeAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。 */
  "_isFixedEpDamage": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideCollectCharactersWithRope, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideCollectCharactersWithRopeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideCollectCharactersWithRope, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideCutRopeBySource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideCutRopeBySourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideCutRopeBySource, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "PROJECTILE_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideDamageGreaterThanRecordedMax, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideDamageGreaterThanRecordedMaxAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideDamageGreaterThanRecordedMax, Assembly-CSharp";
  /** Act33SideDamageGreaterThanRecordedMaxAction 的 `eps` 配置字段；准确战斗语义待确认。 */
  "_eps": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act33SideEmitManagedProjectile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act33SideEmitManagedProjectileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act33SideEmitManagedProjectile, Assembly-CSharp";
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": null;
  /** Act33SideEmitManagedProjectileAction 的 `ev` 配置字段；准确战斗语义待确认。 */
  "_ev": string;
  /** Act33SideEmitManagedProjectileAction 的 `mountPoint` 配置字段；准确战斗语义待确认。 */
  "_mountPoint": string;
  /** Act33SideEmitManagedProjectileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
  "_overwriteActions": boolean;
  /** Act33SideEmitManagedProjectileAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
  "_projectileKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA02 = Act31SideCheckTileInWaterAreaAction | Act31SideDeathPolluteTileAction | Act31SidePumpFlowIntoOtherAreaAction | Act31SidePurifyAreaPolluteAction | Act31SideTriggerRebuildAreasAction | Act33SideBurnCharactersWithRopeAction | Act33SideCollectCharactersWithRopeAction | Act33SideCutRopeBySourceAction | Act33SideDamageGreaterThanRecordedMaxAction | Act33SideEmitManagedProjectileAction;
