/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateTileBindingGlobalBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateTileBindingGlobalBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateTileBindingGlobalBuff, Assembly-CSharp";
  /** CreateTileBindingGlobalBuffAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** CreateTileBindingGlobalBuffAction 的 `abilitySource` 配置字段；准确战斗语义待确认。 */
  "_abilitySource": "SOURCE";
  /** CreateTileBindingGlobalBuffAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffKey": string;
  /** CreateTileBindingGlobalBuffAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffPrefabKey": string;
  /** CreateTileBindingGlobalBuffAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。 */
  "_selectorTarget": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateTileEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateTileEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateTileEffect, Assembly-CSharp";
  /** CreateTileEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateTileEffectAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
  "_hasSource": boolean;
  /** CreateTileEffectAction 的 `holdIt` 配置字段；准确战斗语义待确认。 */
  "_holdIt": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CreateTileEffectAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。 */
  "_tileKeyCol": string;
  /** CreateTileEffectAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。 */
  "_tileKeyRow": string;
  /** CreateTileEffectAction 的 `verifyBeforeCreate` 配置字段；准确战斗语义待确认。 */
  "_verifyBeforeCreate": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateTileEffectInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateTileEffectInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateTileEffectInRange, Assembly-CSharp";
  /** CreateTileEffectInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "RANGED";
  /** CreateTileEffectInRangeAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateTileEffectInRangeAction 的 `holdIt` 配置字段；准确战斗语义待确认。 */
  "_holdIt": boolean;
  /** CreateTileEffectInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CreateTileEffectInRangeAction 的 `specifyBuildType` 配置字段；准确战斗语义待确认。 */
  "_specifyBuildType": boolean;
  /** CreateTileEffectInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
  "_useAttackRange": boolean;
  /** CreateTileEffectInRangeAction 的 `verifyBeforeCreate` 配置字段；准确战斗语义待确认。 */
  "_verifyBeforeCreate": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC29 = CreateTileBindingGlobalBuffAction | CreateTileEffectAction | CreateTileEffectInRangeAction;
