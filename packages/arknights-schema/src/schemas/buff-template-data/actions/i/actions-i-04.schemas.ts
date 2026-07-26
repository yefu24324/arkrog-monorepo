/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { IsBlackboardEqualWithFloatAction, IsBlackboardEqualWithStringAction, IsBlackboardZeroAction, IsCharacterAction, IsCharacterOrTokenOrTrapAction, IsCloseToFootballAction, IsConsumerOfTrySetHpZeroModifierAction, IsDamageAction, IsElementDamageAction, IsElementHealAction, BattleActionI04 } from "../../../../types/buff-template-data/actions/i/actions-i-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsBlackboardEqualWithFloat, Assembly-CSharp 的严格 Action 数据。
 */
export const IsBlackboardEqualWithFloatActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsBlackboardEqualWithFloat, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsBlackboardEqualWithFloatAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
    "_compareValue": z.number().describe("IsBlackboardEqualWithFloatAction 的 `compareValue` 配置字段；准确战斗语义待确认。"),
    /** IsBlackboardEqualWithFloatAction 的 `var` 配置字段；准确战斗语义待确认。 */
    "_var": z.string().describe("IsBlackboardEqualWithFloatAction 的 `var` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsBlackboardEqualWithFloat, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsBlackboardEqualWithFloatAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsBlackboardEqualWithString, Assembly-CSharp 的严格 Action 数据。
 */
export const IsBlackboardEqualWithStringActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsBlackboardEqualWithString, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsBlackboardEqualWithStringAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("IsBlackboardEqualWithStringAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** IsBlackboardEqualWithStringAction 的 `compareBBKey` 配置字段；准确战斗语义待确认。 */
    "_compareBBKey": z.union([
                           z.null(),
                           z.string(),
                         ]).describe("IsBlackboardEqualWithStringAction 的 `compareBBKey` 配置字段；准确战斗语义待确认。"),
    /** IsBlackboardEqualWithStringAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
    "_compareValue": z.union([
                           z.null(),
                           z.string(),
                         ]).describe("IsBlackboardEqualWithStringAction 的 `compareValue` 配置字段；准确战斗语义待确认。"),
    /** IsBlackboardEqualWithStringAction 的 `useBuffBlackboard` 配置字段；准确战斗语义待确认。 */
    "_useBuffBlackboard": z.boolean().describe("IsBlackboardEqualWithStringAction 的 `useBuffBlackboard` 配置字段；准确战斗语义待确认。"),
    /** IsBlackboardEqualWithStringAction 的 `var` 配置字段；准确战斗语义待确认。 */
    "_var": z.string().describe("IsBlackboardEqualWithStringAction 的 `var` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsBlackboardEqualWithString, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsBlackboardEqualWithStringAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsBlackboardZero, Assembly-CSharp 的严格 Action 数据。
 */
export const IsBlackboardZeroActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsBlackboardZero, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsBlackboardZeroAction 的 `noVarShowWarning` 配置字段；准确战斗语义待确认。 */
    "_noVarShowWarning": z.boolean().describe("IsBlackboardZeroAction 的 `noVarShowWarning` 配置字段；准确战斗语义待确认。"),
    /** IsBlackboardZeroAction 的 `var` 配置字段；准确战斗语义待确认。 */
    "_var": z.string().describe("IsBlackboardZeroAction 的 `var` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsBlackboardZero, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsBlackboardZeroAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const IsCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsCharacterOrTokenOrTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const IsCharacterOrTokenOrTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsCharacterOrTokenOrTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsCharacterOrTokenOrTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsCharacterOrTokenOrTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsCloseToFootball, Assembly-CSharp 的严格 Action 数据。
 */
export const IsCloseToFootballActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsCloseToFootball, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsCloseToFootballAction 的 `ignoreIsSelected` 配置字段；准确战斗语义待确认。 */
    "_ignoreIsSelected": z.boolean().describe("IsCloseToFootballAction 的 `ignoreIsSelected` 配置字段；准确战斗语义待确认。"),
    /** IsCloseToFootballAction 的 `justCloseNotStop` 配置字段；准确战斗语义待确认。 */
    "_justCloseNotStop": z.boolean().describe("IsCloseToFootballAction 的 `justCloseNotStop` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsCloseToFootball, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsCloseToFootballAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsConsumerOfTrySetHpZeroModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const IsConsumerOfTrySetHpZeroModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsConsumerOfTrySetHpZeroModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsConsumerOfTrySetHpZeroModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsConsumerOfTrySetHpZeroModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const IsDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsElementDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const IsElementDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsElementDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsElementDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsElementDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsElementHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const IsElementHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsElementHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsElementHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsElementHealAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI04Schema = z
  .discriminatedUnion("$type", [IsBlackboardEqualWithFloatActionSchema, IsBlackboardEqualWithStringActionSchema, IsBlackboardZeroActionSchema, IsCharacterActionSchema, IsCharacterOrTokenOrTrapActionSchema, IsCloseToFootballActionSchema, IsConsumerOfTrySetHpZeroModifierActionSchema, IsDamageActionSchema, IsElementDamageActionSchema, IsElementHealActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI04>;
