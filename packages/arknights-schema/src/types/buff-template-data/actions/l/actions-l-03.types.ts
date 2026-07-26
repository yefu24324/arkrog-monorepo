/**
 * buff_template_data 的 L 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaID, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyDrawCardViaIDAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaID, Assembly-CSharp";
  /** LegionModeOnlyDrawCardViaIDAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
  "_cardType": "PENDING" | "USED";
  /** LegionModeOnlyDrawCardViaIDAction 的 `id` 配置字段；准确战斗语义待确认。 */
  "_id": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyDrawCardViaProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaProfession, Assembly-CSharp";
  /** LegionModeOnlyDrawCardViaProfessionAction 的 `addCardBuff` 配置字段；准确战斗语义待确认。 */
  "_addCardBuff": boolean;
  /** LegionModeOnlyDrawCardViaProfessionAction 的 `drawCardFromUsedAndPending` 配置字段；准确战斗语义待确认。 */
  "_drawCardFromUsedAndPending": boolean;
  /** LegionModeOnlyDrawCardViaProfessionAction 的 `professions` 配置字段；准确战斗语义待确认。 */
  "_professions": Array<string>;
  /** LegionModeOnlyDrawCardViaProfessionAction 的 `randomDrawCard` 配置字段；准确战斗语义待确认。 */
  "_randomDrawCard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyDrawCardViaTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaTag, Assembly-CSharp";
  /** LegionModeOnlyDrawCardViaTagAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
  "_cardType": "PENDING";
  /** LegionModeOnlyDrawCardViaTagAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** LegionModeOnlyDrawCardViaTagAction 的 `tags` 配置字段；准确战斗语义待确认。 */
  "_tags": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyDrawNextCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyDrawNextCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyDrawNextCard, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyEnemyDeathDrop, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyEnemyDeathDropAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyEnemyDeathDrop, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyFilterByProfessionBuffMaxCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyFilterByProfessionBuffMaxCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyFilterByProfessionBuffMaxCnt, Assembly-CSharp";
  /** LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "LT";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
  /** LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `valueToCompareKey` 配置字段；准确战斗语义待确认。 */
  "_valueToCompareKey": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyFinishTemporaryProfessionStatus, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyFinishTemporaryProfessionStatusAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyFinishTemporaryProfessionStatus, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyForceRecycleUsingCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyForceRecycleUsingCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyForceRecycleUsingCard, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyGainGold, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyGainGoldAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyGainGold, Assembly-CSharp";
  /** LegionModeOnlyGainGoldAction 的 `goldNum` 配置字段；准确战斗语义待确认。 */
  "_goldNum": number;
  /** LegionModeOnlyGainGoldAction 的 `goldNumKey` 配置字段；准确战斗语义待确认。 */
  "_goldNumKey": string;
  /** LegionModeOnlyGainGoldAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyGainGoldViaCardNum, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyGainGoldViaCardNumAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyGainGoldViaCardNum, Assembly-CSharp";
  /** LegionModeOnlyGainGoldViaCardNumAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
  "_cardType": "NULL";
  /** LegionModeOnlyGainGoldViaCardNumAction 的 `goldPerCount` 配置字段；准确战斗语义待确认。 */
  "_goldPerCount": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionL03 = LegionModeOnlyDrawCardViaIDAction | LegionModeOnlyDrawCardViaProfessionAction | LegionModeOnlyDrawCardViaTagAction | LegionModeOnlyDrawNextCardAction | LegionModeOnlyEnemyDeathDropAction | LegionModeOnlyFilterByProfessionBuffMaxCntAction | LegionModeOnlyFinishTemporaryProfessionStatusAction | LegionModeOnlyForceRecycleUsingCardAction | LegionModeOnlyGainGoldAction | LegionModeOnlyGainGoldViaCardNumAction;
