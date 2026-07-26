/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RollRogueDice, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RollRogueDiceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RollRogueDice, Assembly-CSharp";
  /** RollRogueDiceAction 的 `maxVal` 配置字段；准确战斗语义待确认。 */
  "_maxVal": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RoundBuffBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RoundBuffBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RoundBuffBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** RoundBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** RoundBuffBlackboardAction 的 `roundType` 配置字段；准确战斗语义待确认。 */
  "_roundType": "Ceil" | "Floor" | "Round";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RunActionsToWdslmAbilityTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RunActionsToWdslmAbilityTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RunActionsToWdslmAbilityTarget, Assembly-CSharp";
  /** RunActionsToWdslmAbilityTargetAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** RunActionsToWdslmAbilityTargetAction 的 `actionsToTarget` 配置字段；准确战斗语义待确认。 */
  "_actionsToTarget": null | Array<BattleAction>;
  /** RunActionsToWdslmAbilityTargetAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
  "_actionTargetType": "HOST" | "SELF_WITH_HOST_AS_SOURCE" | "STANDS" | "STANDS_EXCEPT_SELF";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR09 = RollRogueDiceAction | RoundBuffBlackboardAction | RunActionsToWdslmAbilityTargetAction;
