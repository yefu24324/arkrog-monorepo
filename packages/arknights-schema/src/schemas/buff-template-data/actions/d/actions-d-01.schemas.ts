/**
 * buff_template_data 的 D 组 Action Zod Schema。
 */

import { z } from "zod";

import type { DamageByDistanceAction, DamageFixedValueResistanceAction, DamageScaleAccordingToHpRatioAction, DamageScaleAction, DamageScaleBaseOnDistanceAction, DamageSplitAction, DamageSplitToBuffKeySourcesAction, DamageViaAttrAction, DamageViaCurHpRatioAction, DamageViaEsAction, BattleActionD01 } from "../../../../types/buff-template-data/actions/d/actions-d-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageByDistance, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageByDistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageByDistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageByDistanceAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("BUFF").describe("DamageByDistanceAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** DamageByDistanceAction 的 `isInit` 配置字段；准确战斗语义待确认。 */
    "_isInit": z.boolean().describe("DamageByDistanceAction 的 `isInit` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageByDistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageByDistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageFixedValueResistance, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageFixedValueResistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageFixedValueResistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageFixedValueResistanceAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.enum(["ELEMENT","MAGICAL","PHYSICAL","PURE"]).describe("DamageFixedValueResistanceAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** DamageFixedValueResistanceAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("DamageFixedValueResistanceAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** DamageFixedValueResistanceAction 的 `fixedValue` 配置字段；准确战斗语义待确认。 */
    "_fixedValue": z.number().describe("DamageFixedValueResistanceAction 的 `fixedValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageFixedValueResistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageFixedValueResistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageScaleAccordingToHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageScaleAccordingToHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageScaleAccordingToHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageScaleAccordingToHpRatioAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("DamageScaleAccordingToHpRatioAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.literal("NONE").describe("DamageScaleAccordingToHpRatioAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("DamageScaleAccordingToHpRatioAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("DamageScaleAccordingToHpRatioAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。 */
    "_hpRatioSource": z.literal("MODIFIER_TARGET").describe("DamageScaleAccordingToHpRatioAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `maxAddOnScaleKey` 配置字段；准确战斗语义待确认。 */
    "_maxAddOnScaleKey": z.string().describe("DamageScaleAccordingToHpRatioAction 的 `maxAddOnScaleKey` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。 */
    "_maxHpRatio": z.number().describe("DamageScaleAccordingToHpRatioAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `minAddOnScaleKey` 配置字段；准确战斗语义待确认。 */
    "_minAddOnScaleKey": z.string().describe("DamageScaleAccordingToHpRatioAction 的 `minAddOnScaleKey` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAccordingToHpRatioAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。 */
    "_minHpRatio": z.number().describe("DamageScaleAccordingToHpRatioAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageScaleAccordingToHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageScaleAccordingToHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageScale, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageScaleAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("DamageScaleAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `cachedDeltaValueToBBKey` 配置字段；准确战斗语义待确认。 */
    "_cachedDeltaValueToBBKey": z.string().describe("DamageScaleAction 的 `cachedDeltaValueToBBKey` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `customKey` 配置字段；准确战斗语义待确认。 */
    "_customKey": z.string().describe("DamageScaleAction 的 `customKey` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.enum(["ANY_ATTACK","ANY_ATTACK_EXCEPT_ELEMENT","ELEMENT","MAGICAL","NONE","PHYSICAL","PHYSICAL_AND_MAGICAL","PURE"]).describe("DamageScaleAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("DamageScaleAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("DamageScaleAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `filterModifierKey` 配置字段；准确战斗语义待确认。 */
    "_filterModifierKey": z.boolean().describe("DamageScaleAction 的 `filterModifierKey` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `isOneMinus` 配置字段；准确战斗语义待确认。 */
    "_isOneMinus": z.boolean().describe("DamageScaleAction 的 `isOneMinus` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `isStackable` 配置字段；准确战斗语义待确认。 */
    "_isStackable": z.boolean().describe("DamageScaleAction 的 `isStackable` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `isValidStackCnt` 配置字段；准确战斗语义待确认。 */
    "_isValidStackCnt": z.boolean().describe("DamageScaleAction 的 `isValidStackCnt` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("DamageScaleAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageScaleBaseOnDistance, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageScaleBaseOnDistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageScaleBaseOnDistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageScaleBaseOnDistanceAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("DamageScaleBaseOnDistanceAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleBaseOnDistanceAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.literal("NONE").describe("DamageScaleBaseOnDistanceAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleBaseOnDistanceAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("DamageScaleBaseOnDistanceAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleBaseOnDistanceAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("DamageScaleBaseOnDistanceAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleBaseOnDistanceAction 的 `maxScale` 配置字段；准确战斗语义待确认。 */
    "_maxScale": z.number().describe("DamageScaleBaseOnDistanceAction 的 `maxScale` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleBaseOnDistanceAction 的 `minTriggerDistance` 配置字段；准确战斗语义待确认。 */
    "_minTriggerDistance": z.number().describe("DamageScaleBaseOnDistanceAction 的 `minTriggerDistance` 配置字段；准确战斗语义待确认。"),
    /** DamageScaleBaseOnDistanceAction 的 `reverseDistance` 配置字段；准确战斗语义待确认。 */
    "_reverseDistance": z.boolean().describe("DamageScaleBaseOnDistanceAction 的 `reverseDistance` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("MODIFIER_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("MODIFIER_TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageScaleBaseOnDistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageScaleBaseOnDistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageSplit, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageSplitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageSplit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageSplitAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("NORMAL").describe("DamageSplitAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageSplit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageSplitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageSplitToBuffKeySources, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageSplitToBuffKeySourcesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageSplitToBuffKeySources, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageSplitToBuffKeySourcesAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("NORMAL").describe("DamageSplitToBuffKeySourcesAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** DamageSplitToBuffKeySourcesAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("DamageSplitToBuffKeySourcesAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** DamageSplitToBuffKeySourcesAction 的 `hitEffectKey` 配置字段；准确战斗语义待确认。 */
    "_hitEffectKey": z.string().describe("DamageSplitToBuffKeySourcesAction 的 `hitEffectKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageSplitToBuffKeySources, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageSplitToBuffKeySourcesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageViaAttr, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageViaAttrActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageViaAttr, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageViaAttrAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.enum(["MELEE","NONE","RANGED"]).describe("DamageViaAttrAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageViaAttrAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["ADDITION","BUFF","NORMAL","SPLASH"]).describe("DamageViaAttrAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","DEF","MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** DamageViaAttrAction 的 `getAttrFromTarget` 配置字段；准确战斗语义待确认。 */
    "_getAttrFromTarget": z.boolean().describe("DamageViaAttrAction 的 `getAttrFromTarget` 配置字段；准确战斗语义待确认。"),
    /** DamageViaAttrAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("DamageViaAttrAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** DamageViaAttrAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("DamageViaAttrAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** DamageViaAttrAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierByKey": z.boolean().describe("DamageViaAttrAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。"),
    /** DamageViaAttrAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierKey": z.string().describe("DamageViaAttrAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。"),
    /** DamageViaAttrAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("DamageViaAttrAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageViaAttr, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageViaAttrAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageViaCurHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageViaCurHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageViaCurHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageViaCurHpRatioAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.literal("NONE").describe("DamageViaCurHpRatioAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_atkScaleKey": z.string().describe("DamageViaCurHpRatioAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["BUFF","NORMAL"]).describe("DamageViaCurHpRatioAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `ceilingDamageToInt` 配置字段；准确战斗语义待确认。 */
    "_ceilingDamageToInt": z.boolean().describe("DamageViaCurHpRatioAction 的 `ceilingDamageToInt` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `damageNoLessThanValueBasedOnSourceAtk` 配置字段；准确战斗语义待确认。 */
    "_damageNoLessThanValueBasedOnSourceAtk": z.boolean().describe("DamageViaCurHpRatioAction 的 `damageNoLessThanValueBasedOnSourceAtk` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** DamageViaCurHpRatioAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("DamageViaCurHpRatioAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("DamageViaCurHpRatioAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("DamageViaCurHpRatioAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** DamageViaCurHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("DamageViaCurHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** DamageViaCurHpRatioAction 的 `triggerOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
    "_triggerOnCalculateDamage": z.boolean().describe("DamageViaCurHpRatioAction 的 `triggerOnCalculateDamage` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageViaCurHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageViaCurHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DamageViaEs, Assembly-CSharp 的严格 Action 数据。
 */
export const DamageViaEsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DamageViaEs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DamageViaEsAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.literal("NONE").describe("DamageViaEsAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** DamageViaEsAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["NORMAL","SPLASH"]).describe("DamageViaEsAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** DamageViaEsAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("DamageViaEsAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** DamageViaEsAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("DamageViaEsAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** DamageViaEsAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
    "_noSourceDamage": z.boolean().describe("DamageViaEsAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。"),
    /** DamageViaEsAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("DamageViaEsAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DamageViaEs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DamageViaEsAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionD01Schema = z
  .discriminatedUnion("$type", [DamageByDistanceActionSchema, DamageFixedValueResistanceActionSchema, DamageScaleAccordingToHpRatioActionSchema, DamageScaleActionSchema, DamageScaleBaseOnDistanceActionSchema, DamageSplitActionSchema, DamageSplitToBuffKeySourcesActionSchema, DamageViaAttrActionSchema, DamageViaCurHpRatioActionSchema, DamageViaEsActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionD01>;
