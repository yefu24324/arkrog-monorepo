/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEntityEsIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEntityEsIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEntityEsIntoBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignEPBreakRecoveryToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignEPBreakRecoveryToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignEPBreakRecoveryToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignEPBreakRecoveryToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignFinishedBossWaveIntoBlackBoard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignFinishedBossWaveIntoBlackBoardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignFinishedBossWaveIntoBlackBoard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignGiantBossColRangeToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignGiantBossColRangeToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignGiantBossColRangeToBB, Assembly-CSharp";
  /** AssignGiantBossColRangeToBBAction 的 `maxColKey` 配置字段；准确战斗语义待确认。 */
  "_maxColKey": string;
  /** AssignGiantBossColRangeToBBAction 的 `minColKey` 配置字段；准确战斗语义待确认。 */
  "_minColKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignGlobalBlackboardToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignGlobalBlackboardToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignGlobalBlackboardToBlackboard, Assembly-CSharp";
  /** AssignGlobalBlackboardToBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
  "_assignString": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignGlobalBlackboardToBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。 */
  "_channel": "CHARACTER" | "ENEMY" | "LEVEL" | "ROGUELIKE";
  /** AssignGlobalBlackboardToBlackboardAction 的 `globalblackboardKey` 配置字段；准确战斗语义待确认。 */
  "_globalblackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignGlobalBuffBlackboardToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignGlobalBuffBlackboardToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignGlobalBuffBlackboardToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignGlobalBuffBlackboardToBBAction 的 `globalBuffBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffBlackboardKey": string;
  /** AssignGlobalBuffBlackboardToBBAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignGoldToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignGoldToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignGoldToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignGridPositionToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignGridPositionToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignGridPositionToBlackboard, Assembly-CSharp";
  /** AssignGridPositionToBlackboardAction 的 `gridColKey` 配置字段；准确战斗语义待确认。 */
  "_gridColKey": null | string;
  /** AssignGridPositionToBlackboardAction 的 `gridRowKey` 配置字段；准确战斗语义待确认。 */
  "_gridRowKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** AssignGridPositionToBlackboardAction 的 `useConstLocationKey` 配置字段；准确战斗语义待确认。 */
  "_useConstLocationKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignHighestBlackboardValueFromBuffs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignHighestBlackboardValueFromBuffsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignHighestBlackboardValueFromBuffs, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": Array<string>;
  /** AssignHighestBlackboardValueFromBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AssignHighestBlackboardValueFromBuffsAction 的 `getMax` 配置字段；准确战斗语义待确认。 */
  "_getMax": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignHostAttributeToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignHostAttributeToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignHostAttributeToBB, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "DEF" | "MAGIC_RESISTANCE" | "MAX_HP";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignHostAttributeToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。 */
  "_scaleVar": string;
  /** AssignHostAttributeToBBAction 的 `setCurrentHp` 配置字段；准确战斗语义待确认。 */
  "_setCurrentHp": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA21 = AssignEntityEsIntoBlackboardAction | AssignEPBreakRecoveryToBBAction | AssignFinishedBossWaveIntoBlackBoardAction | AssignGiantBossColRangeToBBAction | AssignGlobalBlackboardToBlackboardAction | AssignGlobalBuffBlackboardToBBAction | AssignGoldToBlackboardAction | AssignGridPositionToBlackboardAction | AssignHighestBlackboardValueFromBuffsAction | AssignHostAttributeToBBAction;
