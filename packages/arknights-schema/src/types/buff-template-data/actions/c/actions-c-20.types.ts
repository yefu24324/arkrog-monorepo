/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearOverlappedCharacterIfExist, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearOverlappedCharacterIfExistAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearOverlappedCharacterIfExist, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ClearTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ClearTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ClearTrap, Assembly-CSharp";
  /** ClearTrapAction 的 `charKey` 配置字段；准确战斗语义待确认。 */
  "_charKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CollectTargetInfoFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CollectTargetInfoFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CollectTargetInfoFunLiveModeOnly, Assembly-CSharp";
  /** CollectTargetInfoFunLiveModeOnlyAction 的 `collectRareTargetInfo` 配置字段；准确战斗语义待确认。 */
  "_collectRareTargetInfo": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CompareCharSkillAvailableCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CompareCharSkillAvailableCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CompareCharSkillAvailableCnt, Assembly-CSharp";
  /** CompareCharSkillAvailableCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "LE" | "LT";
  /** CompareCharSkillAvailableCntAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** CompareCharSkillAvailableCntAction 的 `dontShowWarnning` 配置字段；准确战斗语义待确认。 */
  "_dontShowWarnning": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CompareModifierValueWithTargetType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CompareModifierValueWithTargetTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CompareModifierValueWithTargetType, Assembly-CSharp";
  /** CompareModifierValueWithTargetTypeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "LE" | "LT";
  /** CompareModifierValueWithTargetTypeAction 的 `ignoreEs` 配置字段；准确战斗语义待确认。 */
  "_ignoreEs": boolean;
  /** CompareModifierValueWithTargetTypeAction 的 `modifierTarget` 配置字段；准确战斗语义待确认。 */
  "_modifierTarget": "BUFF_OWNER";
  /** CompareModifierValueWithTargetTypeAction 的 `ratio` 配置字段；准确战斗语义待确认。 */
  "_ratio": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "HP";
  /** CompareModifierValueWithTargetTypeAction 的 `useMaxRatio` 配置字段；准确战斗语义待确认。 */
  "_useMaxRatio": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CompareRogueDiceNumber, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CompareRogueDiceNumberAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CompareRogueDiceNumber, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CompareRogueDiceNumberAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LE";
  /** CompareRogueDiceNumberAction 的 `threshold` 配置字段；准确战斗语义待确认。 */
  "_threshold": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ConsumeTimeline, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ConsumeTimelineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ConsumeTimeline, Assembly-CSharp";
  /** ConsumeTimelineAction 的 `timelineKey` 配置字段；准确战斗语义待确认。 */
  "_timelineKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ConsumeTrySetHpZeroModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ConsumeTrySetHpZeroModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ConsumeTrySetHpZeroModifier, Assembly-CSharp";
  /** ConsumeTrySetHpZeroModifierAction 的 `blockThisHpSet` 配置字段；准确战斗语义待确认。 */
  "_blockThisHpSet": boolean;
  /** ConsumeTrySetHpZeroModifierAction 的 `dontConsumeWhenUndeadable` 配置字段；准确战斗语义待确认。 */
  "_dontConsumeWhenUndeadable": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ConvertResourceToItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ConvertResourceToItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ConvertResourceToItem, Assembly-CSharp";
  /** ConvertResourceToItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CoopAddEnemyKeyToSideSharedEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CoopAddEnemyKeyToSideSharedEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CoopAddEnemyKeyToSideSharedEnemy, Assembly-CSharp";
  /** CoopAddEnemyKeyToSideSharedEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC20 = ClearOverlappedCharacterIfExistAction | ClearTrapAction | CollectTargetInfoFunLiveModeOnlyAction | CompareCharSkillAvailableCntAction | CompareModifierValueWithTargetTypeAction | CompareRogueDiceNumberAction | ConsumeTimelineAction | ConsumeTrySetHpZeroModifierAction | ConvertResourceToItemAction | CoopAddEnemyKeyToSideSharedEnemyAction;
