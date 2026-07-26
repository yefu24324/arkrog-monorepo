/**
 * buff_template_data 的 L 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyResetDangerUpgradeTimeScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyResetDangerUpgradeTimeScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyResetDangerUpgradeTimeScale, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlySelectCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlySelectCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlySelectCard, Assembly-CSharp";
  /** LegionModeOnlySelectCardAction 的 `canSelectNumKey` 配置字段；准确战斗语义待确认。 */
  "_canSelectNumKey": string;
  /** LegionModeOnlySelectCardAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
  "_cardType": "NULL" | "PENDING";
  /** LegionModeOnlySelectCardAction 的 `discardUnselected` 配置字段；准确战斗语义待确认。 */
  "_discardUnselected": boolean;
  /** LegionModeOnlySelectCardAction 的 `goldNumWhenSellCard` 配置字段；准确战斗语义待确认。 */
  "_goldNumWhenSellCard": string;
  /** LegionModeOnlySelectCardAction 的 `profession` 配置字段；准确战斗语义待确认。 */
  "_profession": null | never[];
  /** LegionModeOnlySelectCardAction 的 `putInPendingIfHandFull` 配置字段；准确战斗语义待确认。 */
  "_putInPendingIfHandFull": boolean;
  /** LegionModeOnlySelectCardAction 的 `rangeNumKey` 配置字段；准确战斗语义待确认。 */
  "_rangeNumKey": string;
  /** LegionModeOnlySelectCardAction 的 `selectCardType` 配置字段；准确战斗语义待确认。 */
  "_selectCardType": "DISCARD" | "NULL" | "SELL";
  /** LegionModeOnlySelectCardAction 的 `specificCardKeys` 配置字段；准确战斗语义待确认。 */
  "_specificCardKeys": never[];
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyShowStatusMessage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyShowStatusMessageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyShowStatusMessage, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyTakeCardBackToHand, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyTakeCardBackToHandAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyTakeCardBackToHand, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyTemporaryAddEachProfessionStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyTemporaryAddEachProfessionStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyTemporaryAddEachProfessionStatus, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Leizi2Talent1CastToAttackRangeTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Leizi2Talent1CastToAttackRangeTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Leizi2Talent1CastToAttackRangeTiles, Assembly-CSharp";
  /** Leizi2Talent1CastToAttackRangeTilesAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** Leizi2Talent1CastToAttackRangeTilesAction 的 `castTimes` 配置字段；准确战斗语义待确认。 */
  "_castTimes": number;
  /** Leizi2Talent1CastToAttackRangeTilesAction 的 `castTimesKey` 配置字段；准确战斗语义待确认。 */
  "_castTimesKey": string;
  /** Leizi2Talent1CastToAttackRangeTilesAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** Leizi2Talent1CastToAttackRangeTilesAction 的 `specialRangeCastDelay` 配置字段；准确战斗语义待确认。 */
  "_specialRangeCastDelay": number;
  /** Leizi2Talent1CastToAttackRangeTilesAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
  "_useFirstActiveAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LockCharacterSkillProgress, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LockCharacterSkillProgressAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LockCharacterSkillProgress, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogEventFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogEventFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogEventFunLiveModeOnly, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfo, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfo, Assembly-CSharp";
  /** LogExtraBattleInfoAction 的 `additionValue` 配置字段；准确战斗语义待确认。 */
  "_additionValue": number;
  /** LogExtraBattleInfoAction 的 `additionValueKey` 配置字段；准确战斗语义待确认。 */
  "_additionValueKey": string;
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "HP_RATIO" | "NONE" | "SP";
  /** LogExtraBattleInfoAction 的 `countInHostIfToken` 配置字段；准确战斗语义待确认。 */
  "_countInHostIfToken": boolean;
  /** LogExtraBattleInfoAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": null | string;
  /** LogExtraBattleInfoAction 的 `loadKeyFromBlackBoard` 配置字段；准确战斗语义待确认。 */
  "_loadKeyFromBlackBoard": boolean;
  /** LogExtraBattleInfoAction 的 `logType` 配置字段；准确战斗语义待确认。 */
  "_logType": "ATTRIBUTE" | "CHARACTER_SKILL" | "DETAILED" | "HIDDEN_WAVE_END" | "HIDDEN_WAVE_START" | "NONE" | "SIMPLE";
  /** LogExtraBattleInfoAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBossRush, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoForBossRushAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBossRush, Assembly-CSharp";
  /** LogExtraBattleInfoForBossRushAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
  "_infoType": "CURRENT_BOSS_WAVE" | "CURRENT_WAVE_CHAR_USE" | "MAX_BOSS_WAVE";
  /** LogExtraBattleInfoForBossRushAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": null | string;
  /** LogExtraBattleInfoForBossRushAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionL05 = LegionModeOnlyResetDangerUpgradeTimeScaleAction | LegionModeOnlySelectCardAction | LegionModeOnlyShowStatusMessageAction | LegionModeOnlyTakeCardBackToHandAction | LegionModeOnlyTemporaryAddEachProfessionStatusAction | Leizi2Talent1CastToAttackRangeTilesAction | LockCharacterSkillProgressAction | LogEventFunLiveModeOnlyAction | LogExtraBattleInfoAction | LogExtraBattleInfoForBossRushAction;
