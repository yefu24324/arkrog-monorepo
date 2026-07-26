/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishHostCardBuffByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishHostCardBuffByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishHostCardBuffByKey, Assembly-CSharp";
  /** FinishHostCardBuffByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishManagedProjectiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishManagedProjectilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishManagedProjectiles, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishOneBuffById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishOneBuffByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishOneBuffById, Assembly-CSharp";
  /** FinishOneBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishOneBuffByIdAction 的 `checkBuffFinished` 配置字段；准确战斗语义待确认。 */
  "_checkBuffFinished": boolean;
  /** FinishOneBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishSeveralBuffsById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishSeveralBuffsByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishSeveralBuffsById, Assembly-CSharp";
  /** FinishSeveralBuffsByIdAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** FinishSeveralBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** FinishSeveralBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishSpecifiedTileHoldingEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishSpecifiedTileHoldingEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishSpecifiedTileHoldingEffect, Assembly-CSharp";
  /** FinishSpecifiedTileHoldingEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FinishSpecifiedTileHoldingEffectAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。 */
  "_tileKeyCol": string;
  /** FinishSpecifiedTileHoldingEffectAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。 */
  "_tileKeyRow": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishTargetRootTileHoldingEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishTargetRootTileHoldingEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishTargetRootTileHoldingEffect, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishTokenBuffsById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishTokenBuffsByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishTokenBuffsById, Assembly-CSharp";
  /** FinishTokenBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishTokenBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishTokenBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** FinishTokenBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishTokenCardBuffByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishTokenCardBuffByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishTokenCardBuffByKey, Assembly-CSharp";
  /** FinishTokenCardBuffByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FixedValueDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FixedValueDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FixedValueDamage, Assembly-CSharp";
  /** FixedValueDamageAction 的 `assignFinalDamageToBB` 配置字段；准确战斗语义待确认。 */
  "_assignFinalDamageToBB": boolean;
  /** FixedValueDamageAction 的 `assignRealDamageToBB` 配置字段；准确战斗语义待确认。 */
  "_assignRealDamageToBB": boolean;
  /** FixedValueDamageAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。 */
  "_atkScaleKey": string;
  /** FixedValueDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "ADDITION" | "BUFF" | "NONE" | "NORMAL" | "SPLASH";
  /** FixedValueDamageAction 的 `considerUnhurtable` 配置字段；准确战斗语义待确认。 */
  "_considerUnhurtable": boolean;
  /** FixedValueDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** FixedValueDamageAction 的 `damageSourceType` 配置字段；准确战斗语义待确认。 */
  "_damageSourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** FixedValueDamageAction 的 `damageTargetType` 配置字段；准确战斗语义待确认。 */
  "_damageTargetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "ELEMENT" | "MAGICAL" | "PHYSICAL" | "PURE";
  /** FixedValueDamageAction 的 `devideDamageFromAbilityCnt` 配置字段；准确战斗语义待确认。 */
  "_devideDamageFromAbilityCnt": boolean;
  /** FixedValueDamageAction 的 `forceDisplayDamageNum` 配置字段；准确战斗语义待确认。 */
  "_forceDisplayDamageNum": boolean;
  /** FixedValueDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreCancelReasonMask": "NONE" | "UNHURTABLE";
  /** FixedValueDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** FixedValueDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvDamage": boolean;
  /** FixedValueDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** FixedValueDamageAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierByKey": boolean;
  /** FixedValueDamageAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierKey": string;
  /** FixedValueDamageAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
  "_noSourceDamage": boolean;
  /** FixedValueDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
  /** FixedValueDamageAction 的 `triggerOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
  "_triggerOnCalculateDamage": boolean;
  /** FixedValueDamageAction 的 `undeadable` 配置字段；准确战斗语义待确认。 */
  "_undeadable": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FixedValueElementHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FixedValueElementHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FixedValueElementHeal, Assembly-CSharp";
  /** FixedValueElementHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** FixedValueElementHealAction 的 `isCont` 配置字段；准确战斗语义待确认。 */
  "_isCont": boolean;
  /** FixedValueElementHealAction 的 `scaleUpKeys` 配置字段；准确战斗语义待确认。 */
  "_scaleUpKeys": Array<string>;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FixedValueElementHealAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": null | string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF09 = FinishHostCardBuffByKeyAction | FinishManagedProjectilesAction | FinishOneBuffByIdAction | FinishSeveralBuffsByIdAction | FinishSpecifiedTileHoldingEffectAction | FinishTargetRootTileHoldingEffectAction | FinishTokenBuffsByIdAction | FinishTokenCardBuffByKeyAction | FixedValueDamageAction | FixedValueElementHealAction;
