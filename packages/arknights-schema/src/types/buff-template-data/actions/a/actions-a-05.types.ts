/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act43SideUpdateShootingArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act43SideUpdateShootingAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act43SideUpdateShootingArea, Assembly-CSharp";
  /** Act43SideUpdateShootingAreaAction 的 `isShooting` 配置字段；准确战斗语义待确认。 */
  "_isShooting": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act44SideAssignRushTimeProgressToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act44SideAssignRushTimeProgressToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act44SideAssignRushTimeProgressToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Act44SideAssignRushTimeProgressToBlackboardAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
  "_envSysKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act44SideEndRushTimeByBoss, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act44SideEndRushTimeByBossAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act44SideEndRushTimeByBoss, Assembly-CSharp";
  /** Act44SideEndRushTimeByBossAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
  "_envSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act44SideGainGrade, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act44SideGainGradeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act44SideGainGrade, Assembly-CSharp";
  /** Act44SideGainGradeAction 的 `hitCountKey` 配置字段；准确战斗语义待确认。 */
  "_hitCountKey": string;
  /** Act44SideGainGradeAction 的 `isAllyGainGrade` 配置字段；准确战斗语义待确认。 */
  "_isAllyGainGrade": boolean;
  /** Act44SideGainGradeAction 的 `isCollideGainGrade` 配置字段；准确战斗语义待确认。 */
  "_isCollideGainGrade": boolean;
  /** Act44SideGainGradeAction 的 `isEnemyGainGrade` 配置字段；准确战斗语义待确认。 */
  "_isEnemyGainGrade": boolean;
  /** Act44SideGainGradeAction 的 `isFallDownGainGrade` 配置字段；准确战斗语义待确认。 */
  "_isFallDownGainGrade": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act44SideIsInRushTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act44SideIsInRushTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act44SideIsInRushTime, Assembly-CSharp";
  /** Act44SideIsInRushTimeAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
  "_envSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act45sideCheckUnitOnLight, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act45sideCheckUnitOnLightAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act45sideCheckUnitOnLight, Assembly-CSharp";
  /** Act45sideCheckUnitOnLightAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act46SideAddAreaSP, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act46SideAddAreaSPAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act46SideAddAreaSP, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** Act46SideAddAreaSPAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** Act46SideAddAreaSPAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act46SideAreaExpandOrReset, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act46SideAreaExpandOrResetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act46SideAreaExpandOrReset, Assembly-CSharp";
  /** Act46SideAreaExpandOrResetAction 的 `expand` 配置字段；准确战斗语义待确认。 */
  "_expand": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act46SideAssignAvalancheAreaIndexToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act46SideAssignAvalancheAreaIndexToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act46SideAssignAvalancheAreaIndexToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act46SideAvalancheForCharacterFromOutside, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act46SideAvalancheForCharacterFromOutsideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act46SideAvalancheForCharacterFromOutside, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA05 = Act43SideUpdateShootingAreaAction | Act44SideAssignRushTimeProgressToBlackboardAction | Act44SideEndRushTimeByBossAction | Act44SideGainGradeAction | Act44SideIsInRushTimeAction | Act45sideCheckUnitOnLightAction | Act46SideAddAreaSPAction | Act46SideAreaExpandOrResetAction | Act46SideAssignAvalancheAreaIndexToBBAction | Act46SideAvalancheForCharacterFromOutsideAction;
