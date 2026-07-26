/**
 * buff_template_data 的 G 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GetTargetDirectionForSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GetTargetDirectionForSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GetTargetDirectionForSource, Assembly-CSharp";
  /** GetTargetDirectionForSourceAction 的 `soureceType` 配置字段；准确战斗语义待确认。 */
  "_soureceType": "BUFF_OWNER";
  /** GetTargetDirectionForSourceAction 的 `targetDirKey` 配置字段；准确战斗语义待确认。 */
  "_targetDirKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GetTargetEnemyId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GetTargetEnemyIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GetTargetEnemyId, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GetTileFromBaseTraceTargetAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GetTileFromBaseTraceTargetAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GetTileFromBaseTraceTargetAbility, Assembly-CSharp";
  /** GetTileFromBaseTraceTargetAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** GetTileFromBaseTraceTargetAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** GetTileFromBaseTraceTargetAbilityAction 的 `tileKey` 配置字段；准确战斗语义待确认。 */
  "_tileKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionG02 = GetTargetDirectionForSourceAction | GetTargetEnemyIdAction | GetTileFromBaseTraceTargetAbilityAction;
