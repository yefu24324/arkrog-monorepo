/**
 * buff_template_data 的 E 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ExcludeDeckCardFromBattle, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ExcludeDeckCardFromBattleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ExcludeDeckCardFromBattle, Assembly-CSharp";
  /** ExcludeDeckCardFromBattleAction 的 `cardId` 配置字段；准确战斗语义待确认。 */
  "_cardId": string;
  /** ExcludeDeckCardFromBattleAction 的 `excludeFromBattle` 配置字段；准确战斗语义待确认。 */
  "_excludeFromBattle": boolean;
  /** ExcludeDeckCardFromBattleAction 的 `playerSide` 配置字段；准确战斗语义待确认。 */
  "_playerSide": "DEFAULT";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ExtendAbilityCooldown, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ExtendAbilityCooldownAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ExtendAbilityCooldown, Assembly-CSharp";
  /** ExtendAbilityCooldownAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ExtendAbilityCooldownAction 的 `extendTimeKey` 配置字段；准确战斗语义待确认。 */
  "_extendTimeKey": string;
  /** ExtendAbilityCooldownAction 的 `keepPassedTime` 配置字段；准确战斗语义待确认。 */
  "_keepPassedTime": boolean;
  /** ExtendAbilityCooldownAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** ExtendAbilityCooldownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
  "_waitFirstPeriod": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionE04 = ExcludeDeckCardFromBattleAction | ExtendAbilityCooldownAction;
