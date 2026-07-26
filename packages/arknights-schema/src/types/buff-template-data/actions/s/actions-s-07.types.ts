/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ShowHiddenRoom, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ShowHiddenRoomAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ShowHiddenRoom, Assembly-CSharp";
  /** SandboxV3ShowHiddenRoomAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。 */
  "_roomOffsetX": number;
  /** SandboxV3ShowHiddenRoomAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。 */
  "_roomOffsetY": number;
  /** SandboxV3ShowHiddenRoomAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3SkipEnemyDropItems, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3SkipEnemyDropItemsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3SkipEnemyDropItems, Assembly-CSharp";
  /** SandboxV3SkipEnemyDropItemsAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3TriggerSkillForReadyOtherCharactersWithSameFood, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3TriggerSkillForReadyOtherCharactersWithSameFood, Assembly-CSharp";
  /** SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction 的 `runeKey` 配置字段；准确战斗语义待确认。 */
  "_runeKey": string;
  /** SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3TryMaintainService, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3TryMaintainServiceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3TryMaintainService, Assembly-CSharp";
  /** SandboxV3TryMaintainServiceAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3TryProcess, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3TryProcessAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3TryProcess, Assembly-CSharp";
  /** SandboxV3TryProcessAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SaveHpToDynamicVar, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SaveHpToDynamicVarAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SaveHpToDynamicVar, Assembly-CSharp";
  /** SaveHpToDynamicVarAction 的 `alwaysAssign` 配置字段；准确战斗语义待确认。 */
  "_alwaysAssign": boolean;
  /** SaveHpToDynamicVarAction 的 `buffNameOfBlackboard` 配置字段；准确战斗语义待确认。 */
  "_buffNameOfBlackboard": null | string;
  /** SaveHpToDynamicVarAction 的 `saveType` 配置字段；准确战斗语义待确认。 */
  "_saveType": "HP" | "LOST_HP";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ScoreAGoal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ScoreAGoalAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ScoreAGoal, Assembly-CSharp";
  /** ScoreAGoalAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
  "_sideType": "ALLY" | "ENEMY";
  /** 黑板参数的数值槽。 */
  "value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetAtkScaleZero, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetAtkScaleZeroAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetAtkScaleZero, Assembly-CSharp";
  /** SetAtkScaleZeroAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "NONE";
  /** SetAtkScaleZeroAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetBodyDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetBodyDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetBodyDirection, Assembly-CSharp";
  /** SetBodyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** SetBodyDirectionAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
  "_directionKey": string;
  /** SetBodyDirectionAction 的 `directionSourceType` 配置字段；准确战斗语义待确认。 */
  "_directionSourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** SetBodyDirectionAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** SetBodyDirectionAction 的 `includeFace` 配置字段；准确战斗语义待确认。 */
  "_includeFace": boolean;
  /** SetBodyDirectionAction 的 `onlyChangeFace` 配置字段；准确战斗语义待确认。 */
  "_onlyChangeFace": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** SetBodyDirectionAction 的 `useDirectionFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_useDirectionFromBlackboard": boolean;
  /** SetBodyDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
  "_useSourceDirection": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetBodyDirectionByBuffTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetBodyDirectionByBuffTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetBodyDirectionByBuffTime, Assembly-CSharp";
  /** SetBodyDirectionByBuffTimeAction 的 `changeType` 配置字段；准确战斗语义待确认。 */
  "_changeType": "Face";
  /** SetBodyDirectionByBuffTimeAction 的 `endDirKey` 配置字段；准确战斗语义待确认。 */
  "_endDirKey": string;
  /** SetBodyDirectionByBuffTimeAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** SetBodyDirectionByBuffTimeAction 的 `startDirKey` 配置字段；准确战斗语义待确认。 */
  "_startDirKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS07 = SandboxV3ShowHiddenRoomAction | SandboxV3SkipEnemyDropItemsAction | SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction | SandboxV3TryMaintainServiceAction | SandboxV3TryProcessAction | SaveHpToDynamicVarAction | ScoreAGoalAction | SetAtkScaleZeroAction | SetBodyDirectionAction | SetBodyDirectionByBuffTimeAction;
