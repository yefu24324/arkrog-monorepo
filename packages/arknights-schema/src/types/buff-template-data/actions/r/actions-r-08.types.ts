/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeFilterCharacterInCandleHolder, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeFilterCharacterInCandleHolderAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeFilterCharacterInCandleHolder, Assembly-CSharp";
  /** RoguelikeFilterCharacterInCandleHolderAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeFilterFragmentCarryChar, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeFilterFragmentCarryCharAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeFilterFragmentCarryChar, Assembly-CSharp";
  /** RoguelikeFilterFragmentCarryCharAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeFilterHostrInCandleHolder, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeFilterHostrInCandleHolderAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeFilterHostrInCandleHolder, Assembly-CSharp";
  /** RoguelikeFilterHostrInCandleHolderAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeInheritEnemyHp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeInheritEnemyHpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeInheritEnemyHp, Assembly-CSharp";
  /** RoguelikeInheritEnemyHpAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeLogExp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeLogExpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeLogExp, Assembly-CSharp";
  /** RoguelikeLogExpAction 的 `expKey` 配置字段；准确战斗语义待确认。 */
  "_expKey": null | string;
  /** RoguelikeLogExpAction 的 `expType` 配置字段；准确战斗语义待确认。 */
  "_expType": "ENEMY_KILLED" | "TRAP_GAINED";
  /** RoguelikeLogExpAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeLogExpUseSerializedTrapID, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeLogExpUseSerializedTrapIDAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeLogExpUseSerializedTrapID, Assembly-CSharp";
  /** RoguelikeLogExpUseSerializedTrapIDAction 的 `expKey` 配置字段；准确战斗语义待确认。 */
  "_expKey": string;
  /** RoguelikeLogExpUseSerializedTrapIDAction 的 `trapID` 配置字段；准确战斗语义待确认。 */
  "_trapID": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeRecordUnitStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeRecordUnitStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeRecordUnitStatus, Assembly-CSharp";
  /** RoguelikeRecordUnitStatusAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeShowToastRL04, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeShowToastRL04Action {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeShowToastRL04, Assembly-CSharp";
  /** RoguelikeShowToastRL04Action 的 `lastTime` 配置字段；准确战斗语义待确认。 */
  "_lastTime": number;
  /** RoguelikeShowToastRL04Action 的 `toastTypeRL04` 配置字段；准确战斗语义待确认。 */
  "_toastTypeRL04": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeShowToastRL05, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeShowToastRL05Action {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeShowToastRL05, Assembly-CSharp";
  /** RoguelikeShowToastRL05Action 的 `lastTime` 配置字段；准确战斗语义待确认。 */
  "_lastTime": number;
  /** RoguelikeShowToastRL05Action 的 `toastTypeRL05` 配置字段；准确战斗语义待确认。 */
  "_toastTypeRL05": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoguelikeShowToastRL06, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoguelikeShowToastRL06Action {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoguelikeShowToastRL06, Assembly-CSharp";
  /** RoguelikeShowToastRL06Action 的 `lastTime` 配置字段；准确战斗语义待确认。 */
  "_lastTime": number;
  /** RoguelikeShowToastRL06Action 的 `toastTypeRL06` 配置字段；准确战斗语义待确认。 */
  "_toastTypeRL06": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR08 = RoguelikeFilterCharacterInCandleHolderAction | RoguelikeFilterFragmentCarryCharAction | RoguelikeFilterHostrInCandleHolderAction | RoguelikeInheritEnemyHpAction | RoguelikeLogExpAction | RoguelikeLogExpUseSerializedTrapIDAction | RoguelikeRecordUnitStatusAction | RoguelikeShowToastRL04Action | RoguelikeShowToastRL05Action | RoguelikeShowToastRL06Action;
