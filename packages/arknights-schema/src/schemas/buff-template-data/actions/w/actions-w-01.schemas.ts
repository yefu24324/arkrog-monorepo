/**
 * buff_template_data 的 W 组 Action Zod Schema。
 */

import { z } from "zod";

import type { WeakDamageAction, Whitw2Skill3EmitFunnelProjectileAction, WinGameAction, WithdrawAction, WithdrawAlltheSameExcludeSourceAction, WithdrawTokensAction, WriteBossrushWaveCntToBlackboardAction, BattleActionW01 } from "../../../../types/buff-template-data/actions/w/actions-w-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+WeakDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const WeakDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+WeakDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+WeakDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<WeakDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Whitw2Skill3EmitFunnelProjectile, Assembly-CSharp 的严格 Action 数据。
 */
export const Whitw2Skill3EmitFunnelProjectileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Whitw2Skill3EmitFunnelProjectile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Whitw2Skill3EmitFunnelProjectileAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("Whitw2Skill3EmitFunnelProjectileAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Whitw2Skill3EmitFunnelProjectile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Whitw2Skill3EmitFunnelProjectileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+WinGame, Assembly-CSharp 的严格 Action 数据。
 */
export const WinGameActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+WinGame, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+WinGame, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<WinGameAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Withdraw, Assembly-CSharp 的严格 Action 数据。
 */
export const WithdrawActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Withdraw, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** WithdrawAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("WithdrawAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** WithdrawAction 的 `needLog` 配置字段；准确战斗语义待确认。 */
    "_needLog": z.boolean().describe("WithdrawAction 的 `needLog` 配置字段；准确战斗语义待确认。"),
    /** WithdrawAction 的 `switchToDeadState` 配置字段；准确战斗语义待确认。 */
    "_switchToDeadState": z.boolean().describe("WithdrawAction 的 `switchToDeadState` 配置字段；准确战斗语义待确认。"),
    /** WithdrawAction 的 `withdrawSource` 配置字段；准确战斗语义待确认。 */
    "_withdrawSource": z.boolean().describe("WithdrawAction 的 `withdrawSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Withdraw, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<WithdrawAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+WithdrawAlltheSameExcludeSource, Assembly-CSharp 的严格 Action 数据。
 */
export const WithdrawAlltheSameExcludeSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+WithdrawAlltheSameExcludeSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** WithdrawAlltheSameExcludeSourceAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
    "_skipReborn": z.boolean().describe("WithdrawAlltheSameExcludeSourceAction 的 `skipReborn` 配置字段；准确战斗语义待确认。"),
    /** WithdrawAlltheSameExcludeSourceAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("WithdrawAlltheSameExcludeSourceAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+WithdrawAlltheSameExcludeSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<WithdrawAlltheSameExcludeSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+WithdrawTokens, Assembly-CSharp 的严格 Action 数据。
 */
export const WithdrawTokensActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+WithdrawTokens, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** WithdrawTokensAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("WithdrawTokensAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** WithdrawTokensAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。 */
    "_checkContainsBuff": z.boolean().describe("WithdrawTokensAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。"),
    /** WithdrawTokensAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("WithdrawTokensAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** WithdrawTokensAction 的 `needLog` 配置字段；准确战斗语义待确认。 */
    "_needLog": z.boolean().describe("WithdrawTokensAction 的 `needLog` 配置字段；准确战斗语义待确认。"),
    /** WithdrawTokensAction 的 `switchToDeadState` 配置字段；准确战斗语义待确认。 */
    "_switchToDeadState": z.boolean().describe("WithdrawTokensAction 的 `switchToDeadState` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+WithdrawTokens, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<WithdrawTokensAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+WriteBossrushWaveCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const WriteBossrushWaveCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+WriteBossrushWaveCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+WriteBossrushWaveCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<WriteBossrushWaveCntToBlackboardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionW01Schema = z
  .discriminatedUnion("$type", [WeakDamageActionSchema, Whitw2Skill3EmitFunnelProjectileActionSchema, WinGameActionSchema, WithdrawActionSchema, WithdrawAlltheSameExcludeSourceActionSchema, WithdrawTokensActionSchema, WriteBossrushWaveCntToBlackboardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionW01>;
