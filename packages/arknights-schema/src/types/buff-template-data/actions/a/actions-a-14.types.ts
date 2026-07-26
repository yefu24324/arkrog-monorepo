/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddTileBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddTileBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddTileBlackboard, Assembly-CSharp";
  /** AddTileBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。 */
  "_addition": number;
  /** AddTileBlackboardAction 的 `additionKey` 配置字段；准确战斗语义待确认。 */
  "_additionKey": null;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AddTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetOldTile": boolean;
  /** AddTileBlackboardAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRootTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AdjustEnemyHeightToRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AdjustEnemyHeightToRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AdjustEnemyHeightToRootTile, Assembly-CSharp";
  /** AdjustEnemyHeightToRootTileAction 的 `instant` 配置字段；准确战斗语义待确认。 */
  "_instant": boolean;
  /** AdjustEnemyHeightToRootTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AdjustFootballHeightBySpeed, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AdjustFootballHeightBySpeedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AdjustFootballHeightBySpeed, Assembly-CSharp";
  /** AdjustFootballHeightBySpeedAction 的 `assignHeightToBB` 配置字段；准确战斗语义待确认。 */
  "_assignHeightToBB": string;
  /** AdjustFootballHeightBySpeedAction 的 `duration` 配置字段；准确战斗语义待确认。 */
  "_duration": number;
  /** AdjustFootballHeightBySpeedAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
  "_durationKey": string;
  /** AdjustFootballHeightBySpeedAction 的 `maxHeight` 配置字段；准确战斗语义待确认。 */
  "_maxHeight": number;
  /** AdjustFootballHeightBySpeedAction 的 `maxHeightKey` 配置字段；准确战斗语义待确认。 */
  "_maxHeightKey": string;
  /** AdjustFootballHeightBySpeedAction 的 `maxSpeed` 配置字段；准确战斗语义待确认。 */
  "_maxSpeed": number;
  /** AdjustFootballHeightBySpeedAction 的 `maxSpeedKey` 配置字段；准确战斗语义待确认。 */
  "_maxSpeedKey": string;
  /** AdjustFootballHeightBySpeedAction 的 `minSpeed` 配置字段；准确战斗语义待确认。 */
  "_minSpeed": number;
  /** AdjustFootballHeightBySpeedAction 的 `minSpeedKey` 配置字段；准确战斗语义待确认。 */
  "_minSpeedKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AdjustVisualObjectHeight, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AdjustVisualObjectHeightAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AdjustVisualObjectHeight, Assembly-CSharp";
  /** AdjustVisualObjectHeightAction 的 `isDelta` 配置字段；准确战斗语义待确认。 */
  "_isDelta": boolean;
  /** AdjustVisualObjectHeightAction 的 `newHeight` 配置字段；准确战斗语义待确认。 */
  "_newHeight": number;
  /** AdjustVisualObjectHeightAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AdvancedApplyDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AdvancedApplyDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AdvancedApplyDamage, Assembly-CSharp";
  /** AdvancedApplyDamageAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "ALL" | "MELEE" | "NONE" | "RANGED";
  /** AdvancedApplyDamageAction 的 `assignFinalDamageToBB` 配置字段；准确战斗语义待确认。 */
  "_assignFinalDamageToBB": boolean;
  /** AdvancedApplyDamageAction 的 `assignRealDamageToBB` 配置字段；准确战斗语义待确认。 */
  "_assignRealDamageToBB": boolean;
  /** AdvancedApplyDamageAction 的 `atkScaleVar` 配置字段；准确战斗语义待确认。 */
  "_atkScaleVar": string;
  /** AdvancedApplyDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "ADDITION" | "BUFF" | "NORMAL" | "SPLASH";
  /** AdvancedApplyDamageAction 的 `baseOnHostAtk` 配置字段；准确战斗语义待确认。 */
  "_baseOnHostAtk": boolean;
  /** AdvancedApplyDamageAction 的 `cachedAtkKey` 配置字段；准确战斗语义待确认。 */
  "_cachedAtkKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "ELEMENT" | "MAGICAL" | "PHYSICAL" | "PURE";
  /** AdvancedApplyDamageAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。 */
  "_defaultAtkScale": number;
  /** AdvancedApplyDamageAction 的 `emitSourceOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
  "_emitSourceOnCalculateDamage": boolean;
  /** AdvancedApplyDamageAction 的 `forceUseProjectileCachedAtk` 配置字段；准确战斗语义待确认。 */
  "_forceUseProjectileCachedAtk": boolean;
  /** AdvancedApplyDamageAction 的 `getCachedAtkFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_getCachedAtkFromBlackboard": boolean;
  /** AdvancedApplyDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreCancelReasonMask": "NONE";
  /** AdvancedApplyDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** AdvancedApplyDamageAction 的 `ignoreMissFlag` 配置字段；准确战斗语义待确认。 */
  "_ignoreMissFlag": "NONE";
  /** AdvancedApplyDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** AdvancedApplyDamageAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
  "_noSource": boolean;
  /** AdvancedApplyDamageAction 的 `onlyUseSourceOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
  "_onlyUseSourceOnCalculateDamage": boolean;
  /** AdvancedApplyDamageAction 的 `setSharedFlag` 配置字段；准确战斗语义待确认。 */
  "_setSharedFlag": boolean;
  /** AdvancedApplyDamageAction 的 `sharedFlagIndex` 配置字段；准确战斗语义待确认。 */
  "_sharedFlagIndex": string;
  /** AdvancedApplyDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
  /** AdvancedApplyDamageAction 的 `useSourceWhenUseCachedAtk` 配置字段；准确战斗语义待确认。 */
  "_useSourceWhenUseCachedAtk": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AdvancedApplyHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AdvancedApplyHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AdvancedApplyHeal, Assembly-CSharp";
  /** AdvancedApplyHealAction 的 `customModifierKey` 配置字段；准确战斗语义待确认。 */
  "_customModifierKey": string;
  /** AdvancedApplyHealAction 的 `healScaleKey` 配置字段；准确战斗语义待确认。 */
  "_healScaleKey": string;
  /** AdvancedApplyHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** AdvancedApplyHealAction 的 `scaleUpByBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_scaleUpByBlackboardKey": null | string;
  /** AdvancedApplyHealAction 的 `scaleUpIfUnderHpRatio` 配置字段；准确战斗语义待确认。 */
  "_scaleUpIfUnderHpRatio": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** AdvancedApplyHealAction 的 `useDynamicVar` 配置字段；准确战斗语义待确认。 */
  "_useDynamicVar": boolean;
  /** AdvancedApplyHealAction 的 `useInputTargetAsHealTarget` 配置字段；准确战斗语义待确认。 */
  "_useInputTargetAsHealTarget": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AdvancedHealViaDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AdvancedHealViaDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AdvancedHealViaDamage, Assembly-CSharp";
  /** AdvancedHealViaDamageAction 的 `healAbilityName` 配置字段；准确战斗语义待确认。 */
  "_healAbilityName": string;
  /** AdvancedHealViaDamageAction 的 `owner` 配置字段；准确战斗语义待确认。 */
  "_owner": "BUFF_OWNER";
  /** AdvancedHealViaDamageAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
  "_scaleKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AlwaysExecuteNodeList, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AlwaysExecuteNodeListAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AlwaysExecuteNodeList, Assembly-CSharp";
  /** AlwaysExecuteNodeListAction 的 `failWhenOneFail` 配置字段；准确战斗语义待确认。 */
  "_failWhenOneFail": boolean;
  /** AlwaysExecuteNodeListAction 的 `nodes` 配置字段；准确战斗语义待确认。 */
  "_nodes": Array<Array<BattleAction>>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AlwaysNext, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AlwaysNextAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AlwaysNext, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AmmoSkillCountModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AmmoSkillCountModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AmmoSkillCountModifier, Assembly-CSharp";
  /** AmmoSkillCountModifierAction 的 `addCount` 配置字段；准确战斗语义待确认。 */
  "_addCount": number;
  /** AmmoSkillCountModifierAction 的 `addCountBBKey` 配置字段；准确战斗语义待确认。 */
  "_addCountBBKey": null | string;
  /** AmmoSkillCountModifierAction 的 `addCountUsePercent` 配置字段；准确战斗语义待确认。 */
  "_addCountUsePercent": boolean;
  /** AmmoSkillCountModifierAction 的 `consumeCount` 配置字段；准确战斗语义待确认。 */
  "_consumeCount": number;
  /** AmmoSkillCountModifierAction 的 `consumeCountBBKey` 配置字段；准确战斗语义待确认。 */
  "_consumeCountBBKey": null | string;
  /** AmmoSkillCountModifierAction 的 `consumeEventCount` 配置字段；准确战斗语义待确认。 */
  "_consumeEventCount": boolean;
  /** AmmoSkillCountModifierAction 的 `discardRemainingCount` 配置字段；准确战斗语义待确认。 */
  "_discardRemainingCount": boolean;
  /** AmmoSkillCountModifierAction 的 `discardSoft` 配置字段；准确战斗语义待确认。 */
  "_discardSoft": boolean;
  /** AmmoSkillCountModifierAction 的 `modifyMaxCount` 配置字段；准确战斗语义待确认。 */
  "_modifyMaxCount": boolean;
  /** AmmoSkillCountModifierAction 的 `recoverCount` 配置字段；准确战斗语义待确认。 */
  "_recoverCount": number;
  /** AmmoSkillCountModifierAction 的 `recoverCountBBKey` 配置字段；准确战斗语义待确认。 */
  "_recoverCountBBKey": null | string;
  /** AmmoSkillCountModifierAction 的 `recoverCountUsePercent` 配置字段；准确战斗语义待确认。 */
  "_recoverCountUsePercent": boolean;
  /** AmmoSkillCountModifierAction 的 `recoverEventCount` 配置字段；准确战斗语义待确认。 */
  "_recoverEventCount": boolean;
  /** AmmoSkillCountModifierAction 的 `recoverSkipLimitCheck` 配置字段；准确战斗语义待确认。 */
  "_recoverSkipLimitCheck": boolean;
  /** AmmoSkillCountModifierAction 的 `restoreMaxCount` 配置字段；准确战斗语义待确认。 */
  "_restoreMaxCount": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AmmoSkillCountModifierAction 的 `triggerConsumeEvent` 配置字段；准确战斗语义待确认。 */
  "_triggerConsumeEvent": boolean;
  /** AmmoSkillCountModifierAction 的 `useEvtRetAsReturnValue` 配置字段；准确战斗语义待确认。 */
  "_useEvtRetAsReturnValue": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA14 = AddTileBlackboardAction | AdjustEnemyHeightToRootTileAction | AdjustFootballHeightBySpeedAction | AdjustVisualObjectHeightAction | AdvancedApplyDamageAction | AdvancedApplyHealAction | AdvancedHealViaDamageAction | AlwaysExecuteNodeListAction | AlwaysNextAction | AmmoSkillCountModifierAction;
