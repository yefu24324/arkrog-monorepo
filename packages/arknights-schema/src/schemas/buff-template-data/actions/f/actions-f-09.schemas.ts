/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FinishHostCardBuffByKeyAction, FinishManagedProjectilesAction, FinishOneBuffByIdAction, FinishSeveralBuffsByIdAction, FinishSpecifiedTileHoldingEffectAction, FinishTargetRootTileHoldingEffectAction, FinishTokenBuffsByIdAction, FinishTokenCardBuffByKeyAction, FixedValueDamageAction, FixedValueElementHealAction, BattleActionF09 } from "../../../../types/buff-template-data/actions/f/actions-f-09.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishHostCardBuffByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishHostCardBuffByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishHostCardBuffByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishHostCardBuffByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("FinishHostCardBuffByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishHostCardBuffByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishHostCardBuffByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishManagedProjectiles, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishManagedProjectilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishManagedProjectiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishManagedProjectiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishManagedProjectilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishOneBuffById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishOneBuffByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishOneBuffById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishOneBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishOneBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishOneBuffByIdAction 的 `checkBuffFinished` 配置字段；准确战斗语义待确认。 */
    "_checkBuffFinished": z.boolean().describe("FinishOneBuffByIdAction 的 `checkBuffFinished` 配置字段；准确战斗语义待确认。"),
    /** FinishOneBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishOneBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishOneBuffById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishOneBuffByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishSeveralBuffsById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishSeveralBuffsByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishSeveralBuffsById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishSeveralBuffsByIdAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("FinishSeveralBuffsByIdAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** FinishSeveralBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishSeveralBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** FinishSeveralBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishSeveralBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishSeveralBuffsById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishSeveralBuffsByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishSpecifiedTileHoldingEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishSpecifiedTileHoldingEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishSpecifiedTileHoldingEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishSpecifiedTileHoldingEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("FinishSpecifiedTileHoldingEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FinishSpecifiedTileHoldingEffectAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。 */
    "_tileKeyCol": z.string().describe("FinishSpecifiedTileHoldingEffectAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。"),
    /** FinishSpecifiedTileHoldingEffectAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。 */
    "_tileKeyRow": z.string().describe("FinishSpecifiedTileHoldingEffectAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishSpecifiedTileHoldingEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishSpecifiedTileHoldingEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishTargetRootTileHoldingEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishTargetRootTileHoldingEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishTargetRootTileHoldingEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishTargetRootTileHoldingEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishTargetRootTileHoldingEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishTokenBuffsById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishTokenBuffsByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishTokenBuffsById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishTokenBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishTokenBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishTokenBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishTokenBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishTokenBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishTokenBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** FinishTokenBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishTokenBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishTokenBuffsById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishTokenBuffsByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishTokenCardBuffByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishTokenCardBuffByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishTokenCardBuffByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishTokenCardBuffByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("FinishTokenCardBuffByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishTokenCardBuffByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishTokenCardBuffByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FixedValueDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const FixedValueDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FixedValueDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FixedValueDamageAction 的 `assignFinalDamageToBB` 配置字段；准确战斗语义待确认。 */
    "_assignFinalDamageToBB": z.boolean().describe("FixedValueDamageAction 的 `assignFinalDamageToBB` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `assignRealDamageToBB` 配置字段；准确战斗语义待确认。 */
    "_assignRealDamageToBB": z.boolean().describe("FixedValueDamageAction 的 `assignRealDamageToBB` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_atkScaleKey": z.string().describe("FixedValueDamageAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["ADDITION","BUFF","NONE","NORMAL","SPLASH"]).describe("FixedValueDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `considerUnhurtable` 配置字段；准确战斗语义待确认。 */
    "_considerUnhurtable": z.boolean().describe("FixedValueDamageAction 的 `considerUnhurtable` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("FixedValueDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `damageSourceType` 配置字段；准确战斗语义待确认。 */
    "_damageSourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("FixedValueDamageAction 的 `damageSourceType` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `damageTargetType` 配置字段；准确战斗语义待确认。 */
    "_damageTargetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("FixedValueDamageAction 的 `damageTargetType` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["ELEMENT","MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** FixedValueDamageAction 的 `devideDamageFromAbilityCnt` 配置字段；准确战斗语义待确认。 */
    "_devideDamageFromAbilityCnt": z.boolean().describe("FixedValueDamageAction 的 `devideDamageFromAbilityCnt` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `forceDisplayDamageNum` 配置字段；准确战斗语义待确认。 */
    "_forceDisplayDamageNum": z.boolean().describe("FixedValueDamageAction 的 `forceDisplayDamageNum` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreCancelReasonMask": z.enum(["NONE","UNHURTABLE"]).describe("FixedValueDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("FixedValueDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvDamage": z.boolean().describe("FixedValueDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("FixedValueDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierByKey": z.boolean().describe("FixedValueDamageAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierKey": z.string().describe("FixedValueDamageAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
    "_noSourceDamage": z.boolean().describe("FixedValueDamageAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("FixedValueDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** FixedValueDamageAction 的 `triggerOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
    "_triggerOnCalculateDamage": z.boolean().describe("FixedValueDamageAction 的 `triggerOnCalculateDamage` 配置字段；准确战斗语义待确认。"),
    /** FixedValueDamageAction 的 `undeadable` 配置字段；准确战斗语义待确认。 */
    "_undeadable": z.boolean().describe("FixedValueDamageAction 的 `undeadable` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FixedValueDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FixedValueDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FixedValueElementHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const FixedValueElementHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FixedValueElementHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FixedValueElementHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("FixedValueElementHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** FixedValueElementHealAction 的 `isCont` 配置字段；准确战斗语义待确认。 */
    "_isCont": z.boolean().describe("FixedValueElementHealAction 的 `isCont` 配置字段；准确战斗语义待确认。"),
    /** FixedValueElementHealAction 的 `scaleUpKeys` 配置字段；准确战斗语义待确认。 */
    "_scaleUpKeys": z.array(z.string()).describe("FixedValueElementHealAction 的 `scaleUpKeys` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FixedValueElementHealAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("FixedValueElementHealAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FixedValueElementHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FixedValueElementHealAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF09Schema = z
  .discriminatedUnion("$type", [FinishHostCardBuffByKeyActionSchema, FinishManagedProjectilesActionSchema, FinishOneBuffByIdActionSchema, FinishSeveralBuffsByIdActionSchema, FinishSpecifiedTileHoldingEffectActionSchema, FinishTargetRootTileHoldingEffectActionSchema, FinishTokenBuffsByIdActionSchema, FinishTokenCardBuffByKeyActionSchema, FixedValueDamageActionSchema, FixedValueElementHealActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF09>;
