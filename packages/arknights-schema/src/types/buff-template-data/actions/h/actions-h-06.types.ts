/**
 * buff_template_data 的 H 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HoldFootball, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HoldFootballAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HoldFootball, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HostKillSummonedApopsisEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HostKillSummonedApopsisEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HostKillSummonedApopsisEnemy, Assembly-CSharp";
  /** HostKillSummonedApopsisEnemyAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HpNoLessThanCertainPercentModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HpNoLessThanCertainPercentModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HpNoLessThanCertainPercentModifier, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HpRatioToAttributeAdd, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HpRatioToAttributeAddAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HpRatioToAttributeAdd, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "ATTACK_SPEED" | "DEF" | "MAGIC_RESISTANCE" | "SP_RECOVERY_PER_SEC";
  /** HpRatioToAttributeAddAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。 */
  "_hpRatioSource": "BUFF_OWNER" | "SOURCE";
  /** HpRatioToAttributeAddAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。 */
  "_maxHpRatio": number;
  /** HpRatioToAttributeAddAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。 */
  "_minHpRatio": number;
  /** HpRatioToAttributeAddAction 的 `overrideSource` 配置字段；准确战斗语义待确认。 */
  "_overrideSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HpRatioToAttributeMul, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HpRatioToAttributeMulAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HpRatioToAttributeMul, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "DEF";
  /** HpRatioToAttributeMulAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。 */
  "_hpRatioSource": "BUFF_OWNER" | "SOURCE";
  /** HpRatioToAttributeMulAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。 */
  "_maxHpRatio": number;
  /** HpRatioToAttributeMulAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。 */
  "_minHpRatio": number;
  /** HpRatioToAttributeMulAction 的 `overrideSource` 配置字段；准确战斗语义待确认。 */
  "_overrideSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HpRatioTrigger, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HpRatioTriggerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HpRatioTrigger, Assembly-CSharp";
  /** HpRatioTriggerAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "GT" | "LE";
  /** HpRatioTriggerAction 的 `hpRatioEachTime` 配置字段；准确战斗语义待确认。 */
  "_hpRatioEachTime": number;
  /** HpRatioTriggerAction 的 `minHpKey` 配置字段；准确战斗语义待确认。 */
  "_minHpKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** HpRatioTriggerAction 的 `useMinHpRatio` 配置字段；准确战斗语义待确认。 */
  "_useMinHpRatio": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionH06 = HoldFootballAction | HostKillSummonedApopsisEnemyAction | HpNoLessThanCertainPercentModifierAction | HpRatioToAttributeAddAction | HpRatioToAttributeMulAction | HpRatioTriggerAction;
