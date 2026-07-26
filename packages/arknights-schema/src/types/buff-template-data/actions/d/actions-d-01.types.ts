/**
 * buff_template_data 的 D 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageByDistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageByDistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageByDistance, Assembly-CSharp";
  /** DamageByDistanceAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PURE";
  /** DamageByDistanceAction 的 `isInit` 配置字段；准确战斗语义待确认。 */
  "_isInit": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageFixedValueResistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageFixedValueResistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageFixedValueResistance, Assembly-CSharp";
  /** DamageFixedValueResistanceAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "ELEMENT" | "MAGICAL" | "PHYSICAL" | "PURE";
  /** DamageFixedValueResistanceAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** DamageFixedValueResistanceAction 的 `fixedValue` 配置字段；准确战斗语义待确认。 */
  "_fixedValue": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageScaleAccordingToHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageScaleAccordingToHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageScaleAccordingToHpRatio, Assembly-CSharp";
  /** DamageScaleAccordingToHpRatioAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** DamageScaleAccordingToHpRatioAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "NONE";
  /** DamageScaleAccordingToHpRatioAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** DamageScaleAccordingToHpRatioAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** DamageScaleAccordingToHpRatioAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。 */
  "_hpRatioSource": "MODIFIER_TARGET";
  /** DamageScaleAccordingToHpRatioAction 的 `maxAddOnScaleKey` 配置字段；准确战斗语义待确认。 */
  "_maxAddOnScaleKey": string;
  /** DamageScaleAccordingToHpRatioAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。 */
  "_maxHpRatio": number;
  /** DamageScaleAccordingToHpRatioAction 的 `minAddOnScaleKey` 配置字段；准确战斗语义待确认。 */
  "_minAddOnScaleKey": string;
  /** DamageScaleAccordingToHpRatioAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。 */
  "_minHpRatio": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageScale, Assembly-CSharp";
  /** DamageScaleAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** DamageScaleAction 的 `cachedDeltaValueToBBKey` 配置字段；准确战斗语义待确认。 */
  "_cachedDeltaValueToBBKey": string;
  /** DamageScaleAction 的 `customKey` 配置字段；准确战斗语义待确认。 */
  "_customKey": string;
  /** DamageScaleAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "ANY_ATTACK" | "ANY_ATTACK_EXCEPT_ELEMENT" | "ELEMENT" | "MAGICAL" | "NONE" | "PHYSICAL" | "PHYSICAL_AND_MAGICAL" | "PURE";
  /** DamageScaleAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** DamageScaleAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** DamageScaleAction 的 `filterModifierKey` 配置字段；准确战斗语义待确认。 */
  "_filterModifierKey": boolean;
  /** DamageScaleAction 的 `isOneMinus` 配置字段；准确战斗语义待确认。 */
  "_isOneMinus": boolean;
  /** DamageScaleAction 的 `isStackable` 配置字段；准确战斗语义待确认。 */
  "_isStackable": boolean;
  /** DamageScaleAction 的 `isValidStackCnt` 配置字段；准确战斗语义待确认。 */
  "_isValidStackCnt": boolean;
  /** DamageScaleAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageScaleBaseOnDistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageScaleBaseOnDistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageScaleBaseOnDistance, Assembly-CSharp";
  /** DamageScaleBaseOnDistanceAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** DamageScaleBaseOnDistanceAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "NONE";
  /** DamageScaleBaseOnDistanceAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** DamageScaleBaseOnDistanceAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** DamageScaleBaseOnDistanceAction 的 `maxScale` 配置字段；准确战斗语义待确认。 */
  "_maxScale": number;
  /** DamageScaleBaseOnDistanceAction 的 `minTriggerDistance` 配置字段；准确战斗语义待确认。 */
  "_minTriggerDistance": number;
  /** DamageScaleBaseOnDistanceAction 的 `reverseDistance` 配置字段；准确战斗语义待确认。 */
  "_reverseDistance": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "MODIFIER_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageSplit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageSplitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageSplit, Assembly-CSharp";
  /** DamageSplitAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NORMAL";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageSplitToBuffKeySources, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageSplitToBuffKeySourcesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageSplitToBuffKeySources, Assembly-CSharp";
  /** DamageSplitToBuffKeySourcesAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NORMAL";
  /** DamageSplitToBuffKeySourcesAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** DamageSplitToBuffKeySourcesAction 的 `hitEffectKey` 配置字段；准确战斗语义待确认。 */
  "_hitEffectKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageViaAttr, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageViaAttrAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageViaAttr, Assembly-CSharp";
  /** DamageViaAttrAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "MELEE" | "NONE" | "RANGED";
  /** DamageViaAttrAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "ADDITION" | "BUFF" | "NORMAL" | "SPLASH";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "DEF" | "MAX_HP" | "MOVE_SPEED";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL" | "PURE";
  /** DamageViaAttrAction 的 `getAttrFromTarget` 配置字段；准确战斗语义待确认。 */
  "_getAttrFromTarget": boolean;
  /** DamageViaAttrAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** DamageViaAttrAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** DamageViaAttrAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierByKey": boolean;
  /** DamageViaAttrAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierKey": string;
  /** DamageViaAttrAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageViaCurHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageViaCurHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageViaCurHpRatio, Assembly-CSharp";
  /** DamageViaCurHpRatioAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "NONE";
  /** DamageViaCurHpRatioAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。 */
  "_atkScaleKey": string;
  /** DamageViaCurHpRatioAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF" | "NORMAL";
  /** DamageViaCurHpRatioAction 的 `ceilingDamageToInt` 配置字段；准确战斗语义待确认。 */
  "_ceilingDamageToInt": boolean;
  /** DamageViaCurHpRatioAction 的 `damageNoLessThanValueBasedOnSourceAtk` 配置字段；准确战斗语义待确认。 */
  "_damageNoLessThanValueBasedOnSourceAtk": boolean;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PURE";
  /** DamageViaCurHpRatioAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** DamageViaCurHpRatioAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** DamageViaCurHpRatioAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** DamageViaCurHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** DamageViaCurHpRatioAction 的 `triggerOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
  "_triggerOnCalculateDamage": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DamageViaEs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DamageViaEsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DamageViaEs, Assembly-CSharp";
  /** DamageViaEsAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "NONE";
  /** DamageViaEsAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NORMAL" | "SPLASH";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PURE";
  /** DamageViaEsAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** DamageViaEsAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** DamageViaEsAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
  "_noSourceDamage": boolean;
  /** DamageViaEsAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionD01 = DamageByDistanceAction | DamageFixedValueResistanceAction | DamageScaleAccordingToHpRatioAction | DamageScaleAction | DamageScaleBaseOnDistanceAction | DamageSplitAction | DamageSplitToBuffKeySourcesAction | DamageViaAttrAction | DamageViaCurHpRatioAction | DamageViaEsAction;
