/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkEnemyKilledAndUnharmful, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkEnemyKilledAndUnharmfulAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkEnemyKilledAndUnharmful, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkFogTickTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkFogTickTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkFogTickTime, Assembly-CSharp";
  /** MarkFogTickTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** MarkFogTickTimeAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** MarkFogTickTimeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** MarkFogTickTimeAction 的 `useProjectileRootTile` 配置字段；准确战斗语义待确认。 */
  "_useProjectileRootTile": boolean;
  /** MarkFogTickTimeAction 的 `useRangeId` 配置字段；准确战斗语义待确认。 */
  "_useRangeId": boolean;
  /** MarkFogTickTimeAction 的 `useSourceRootTile` 配置字段；准确战斗语义待确认。 */
  "_useSourceRootTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkFogView, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkFogViewAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkFogView, Assembly-CSharp";
  /** MarkFogViewAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** MarkFogViewAction 的 `globalRange` 配置字段；准确战斗语义待确认。 */
  "_globalRange": boolean;
  /** MarkFogViewAction 的 `markInView` 配置字段；准确战斗语义待确认。 */
  "_markInView": boolean;
  /** MarkFogViewAction 的 `markOldTilePos` 配置字段；准确战斗语义待确认。 */
  "_markOldTilePos": boolean;
  /** MarkFogViewAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkFogViewByAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkFogViewByAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkFogViewByAbilitySelector, Assembly-CSharp";
  /** MarkFogViewByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** MarkFogViewByAbilitySelectorAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** MarkFogViewByAbilitySelectorAction 的 `markInView` 配置字段；准确战斗语义待确认。 */
  "_markInView": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifierScaleUp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifierScaleUpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifierScaleUp, Assembly-CSharp";
  /** ModifierScaleUpAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
  "_scaleKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAbilityAttackTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAbilityAttackTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAbilityAttackTime, Assembly-CSharp";
  /** ModifyAbilityAttackTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ModifyAbilityAttackTimeAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": null | string;
  /** ModifyAbilityAttackTimeAction 的 `useOtherAbility` 配置字段；准确战斗语义待确认。 */
  "_useOtherAbility": boolean;
  /** ModifyAbilityAttackTimeAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAbilityBlackboard, Assembly-CSharp";
  /** ModifyAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ModifyAbilityBlackboardAction 的 `abilityOwnerType` 配置字段；准确战斗语义待确认。 */
  "_abilityOwnerType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** ModifyAbilityBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
  "_assignString": boolean;
  /** ModifyAbilityBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeys": string;
  /** ModifyAbilityBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** ModifyAbilityBlackboardAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_fromBlackboardKeys": null | string;
  /** ModifyAbilityBlackboardAction 的 `fromBuffBlackboard` 配置字段；准确战斗语义待确认。 */
  "_fromBuffBlackboard": boolean;
  /** ModifyAbilityBlackboardAction 的 `isUpdateSelector` 配置字段；准确战斗语义待确认。 */
  "_isUpdateSelector": boolean;
  /** ModifyAbilityBlackboardAction 的 `stringValue` 配置字段；准确战斗语义待确认。 */
  "_stringValue": null | string;
  /** ModifyAbilityBlackboardAction 的 `useOtherAbility` 配置字段；准确战斗语义待确认。 */
  "_useOtherAbility": boolean;
  /** ModifyAbilityBlackboardAction 的 `useSnapshotAbility` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotAbility": boolean;
  /** ModifyAbilityBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** ModifyAbilityBlackboardAction 的 `fromAbilityBlackBoard` 配置字段；准确战斗语义待确认。 */
  "fromAbilityBlackBoard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAbilityBlackboardAndCast, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAbilityBlackboardAndCastAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAbilityBlackboardAndCast, Assembly-CSharp";
  /** ModifyAbilityBlackboardAndCastAction 的 `ability` 配置字段；准确战斗语义待确认。 */
  "_ability": string;
  /** ModifyAbilityBlackboardAndCastAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeys": string;
  /** ModifyAbilityBlackboardAndCastAction 的 `logStackCountToDynamicVar` 配置字段；准确战斗语义待确认。 */
  "_logStackCountToDynamicVar": boolean;
  /** ModifyAbilityBlackboardAndCastAction 的 `scaledByBuffGroupStackCount` 配置字段；准确战斗语义待确认。 */
  "_scaledByBuffGroupStackCount": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAnimatorHookerReplacePair, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAnimatorHookerReplacePairAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAnimatorHookerReplacePair, Assembly-CSharp";
  /** ModifyAnimatorHookerReplacePairAction 的 `isOverwrite` 配置字段；准确战斗语义待确认。 */
  "_isOverwrite": boolean;
  /** ModifyAnimatorHookerReplacePairAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** ModifyAnimatorHookerReplacePairAction 的 `modifyCurrentMode` 配置字段；准确战斗语义待确认。 */
  "_modifyCurrentMode": boolean;
  /** ModifyAnimatorHookerReplacePairAction 的 `replaceAnimPairs` 配置字段；准确战斗语义待确认。 */
  "_replaceAnimPairs": Array<{
                            /** ModifyAnimatorHookerReplacePairAction 的 `fromAnimKey` 配置字段；准确战斗语义待确认。 */
                            "fromAnimKey": string;
                            /** ModifyAnimatorHookerReplacePairAction 的 `toAnimKey` 配置字段；准确战斗语义待确认。 */
                            "toAnimKey": string;
                          }>;
  /** ModifyAnimatorHookerReplacePairAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyAttackBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyAttackBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyAttackBlackboard, Assembly-CSharp";
  /** ModifyAttackBlackboardAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM03 = MarkEnemyKilledAndUnharmfulAction | MarkFogTickTimeAction | MarkFogViewAction | MarkFogViewByAbilitySelectorAction | ModifierScaleUpAction | ModifyAbilityAttackTimeAction | ModifyAbilityBlackboardAction | ModifyAbilityBlackboardAndCastAction | ModifyAnimatorHookerReplacePairAction | ModifyAttackBlackboardAction;
