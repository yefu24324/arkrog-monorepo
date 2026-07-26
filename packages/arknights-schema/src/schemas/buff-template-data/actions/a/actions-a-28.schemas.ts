/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AutoChessFreezeStoreAction, AutoChessRefreshStoreAction, AutoChessUpgradeStoreAction, AverageHealViaHpUseAbilitySelectorAction, BattleActionA28 } from "../../../../types/buff-template-data/actions/a/actions-a-28.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutoChessFreezeStore, Assembly-CSharp 的严格 Action 数据。
 */
export const AutoChessFreezeStoreActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutoChessFreezeStore, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutoChessFreezeStore, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutoChessFreezeStoreAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutoChessRefreshStore, Assembly-CSharp 的严格 Action 数据。
 */
export const AutoChessRefreshStoreActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutoChessRefreshStore, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutoChessRefreshStore, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutoChessRefreshStoreAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutoChessUpgradeStore, Assembly-CSharp 的严格 Action 数据。
 */
export const AutoChessUpgradeStoreActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutoChessUpgradeStore, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutoChessUpgradeStore, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutoChessUpgradeStoreAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AverageHealViaHpUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const AverageHealViaHpUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AverageHealViaHpUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AverageHealViaHpUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `alsoEpHeal` 配置字段；准确战斗语义待确认。 */
    "_alsoEpHeal": z.boolean().describe("AverageHealViaHpUseAbilitySelectorAction 的 `alsoEpHeal` 配置字段；准确战斗语义待确认。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("AverageHealViaHpUseAbilitySelectorAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("AverageHealViaHpUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。 */
    "_getMaxHpFromTarget": z.boolean().describe("AverageHealViaHpUseAbilitySelectorAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("AverageHealViaHpUseAbilitySelectorAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("AverageHealViaHpUseAbilitySelectorAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AverageHealViaHpUseAbilitySelectorAction 的 `useCurHp` 配置字段；准确战斗语义待确认。 */
    "_useCurHp": z.boolean().describe("AverageHealViaHpUseAbilitySelectorAction 的 `useCurHp` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AverageHealViaHpUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AverageHealViaHpUseAbilitySelectorAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA28Schema = z
  .discriminatedUnion("$type", [AutoChessFreezeStoreActionSchema, AutoChessRefreshStoreActionSchema, AutoChessUpgradeStoreActionSchema, AverageHealViaHpUseAbilitySelectorActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA28>;
