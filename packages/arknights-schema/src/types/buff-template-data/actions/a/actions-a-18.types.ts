/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffExistingTimeIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffExistingTimeIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffExistingTimeIntoBlackboard, Assembly-CSharp";
  /** AssignBuffExistingTimeIntoBlackboardAction 的 `extraDurationKey` 配置字段；准确战斗语义待确认。 */
  "_extraDurationKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffLifeTimeToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffLifeTimeToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffLifeTimeToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignBuffLifeTimeToBBAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
  "_buffType": "MAIN_BUFF";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffRemainingTimeIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffRemainingTimeIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffRemainingTimeIntoBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignBuffRemainingTimeIntoBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffStackCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffStackCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffStackCntToBlackboard, Assembly-CSharp";
  /** AssignBuffStackCntToBlackboardAction 的 `assignToSnapshot` 配置字段；准确战斗语义待确认。 */
  "_assignToSnapshot": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignBuffStackCntToBlackboardAction 的 `buffCntSource` 配置字段；准确战斗语义待确认。 */
  "_buffCntSource": "BUFF_SOURCE";
  /** AssignBuffStackCntToBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER";
  /** AssignBuffStackCntToBlackboardAction 的 `buffToAssignKey` 配置字段；准确战斗语义待确认。 */
  "_buffToAssignKey": string;
  /** AssignBuffStackCntToBlackboardAction 的 `checkBuffCntSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffCntSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffValueAccumulateByKeyFromAllBuffs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffValueAccumulateByKeyFromAllBuffsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffValueAccumulateByKeyFromAllBuffs, Assembly-CSharp";
  /** AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `buffBbKey` 配置字段；准确战斗语义待确认。 */
  "_buffBbKey": string;
  /** AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
  /** AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `writeKey` 配置字段；准确战斗语义待确认。 */
  "_writeKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCardRemainingCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCardRemainingCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCardRemainingCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignCardRemainingCntToBlackboardAction 的 `cardKey` 配置字段；准确战斗语义待确认。 */
  "_cardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCardUIDToBlackBoard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCardUIDToBlackBoardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCardUIDToBlackBoard, Assembly-CSharp";
  /** AssignCardUIDToBlackBoardAction 的 `assignAsKey` 配置字段；准确战斗语义待确认。 */
  "_assignAsKey": boolean;
  /** AssignCardUIDToBlackBoardAction 的 `assignAsString` 配置字段；准确战斗语义待确认。 */
  "_assignAsString": boolean;
  /** AssignCardUIDToBlackBoardAction 的 `assignHostOrToken` 配置字段；准确战斗语义待确认。 */
  "_assignHostOrToken": boolean;
  /** AssignCardUIDToBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAINBUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCertainSideContainsBuffUnitsCntToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCertainSideContainsBuffUnitsCntToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCertainSideContainsBuffUnitsCntToBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `filterProfessionMask` 配置字段；准确战斗语义待确认。 */
  "_filterProfessionMask": boolean;
  /** AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
  "_sideMask": "ALLY";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCharacterCostIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCharacterCostIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCharacterCostIntoBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignCharacterMaxEsIntoBlackBoard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignCharacterMaxEsIntoBlackBoardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignCharacterMaxEsIntoBlackBoard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA18 = AssignBuffExistingTimeIntoBlackboardAction | AssignBuffLifeTimeToBBAction | AssignBuffRemainingTimeIntoBlackboardAction | AssignBuffStackCntToBlackboardAction | AssignBuffValueAccumulateByKeyFromAllBuffsAction | AssignCardRemainingCntToBlackboardAction | AssignCardUIDToBlackBoardAction | AssignCertainSideContainsBuffUnitsCntToBlackboardAction | AssignCharacterCostIntoBlackboardAction | AssignCharacterMaxEsIntoBlackBoardAction;
