/**
 * buff_template_data 的 E 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ExcludeDeckCardFromBattleAction, ExtendAbilityCooldownAction, BattleActionE04 } from "../../../../types/buff-template-data/actions/e/actions-e-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ExcludeDeckCardFromBattle, Assembly-CSharp 的严格 Action 数据。
 */
export const ExcludeDeckCardFromBattleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ExcludeDeckCardFromBattle, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ExcludeDeckCardFromBattleAction 的 `cardId` 配置字段；准确战斗语义待确认。 */
    "_cardId": z.string().describe("ExcludeDeckCardFromBattleAction 的 `cardId` 配置字段；准确战斗语义待确认。"),
    /** ExcludeDeckCardFromBattleAction 的 `excludeFromBattle` 配置字段；准确战斗语义待确认。 */
    "_excludeFromBattle": z.boolean().describe("ExcludeDeckCardFromBattleAction 的 `excludeFromBattle` 配置字段；准确战斗语义待确认。"),
    /** ExcludeDeckCardFromBattleAction 的 `playerSide` 配置字段；准确战斗语义待确认。 */
    "_playerSide": z.literal("DEFAULT").describe("ExcludeDeckCardFromBattleAction 的 `playerSide` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ExcludeDeckCardFromBattle, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ExcludeDeckCardFromBattleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ExtendAbilityCooldown, Assembly-CSharp 的严格 Action 数据。
 */
export const ExtendAbilityCooldownActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ExtendAbilityCooldown, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ExtendAbilityCooldownAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ExtendAbilityCooldownAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ExtendAbilityCooldownAction 的 `extendTimeKey` 配置字段；准确战斗语义待确认。 */
    "_extendTimeKey": z.string().describe("ExtendAbilityCooldownAction 的 `extendTimeKey` 配置字段；准确战斗语义待确认。"),
    /** ExtendAbilityCooldownAction 的 `keepPassedTime` 配置字段；准确战斗语义待确认。 */
    "_keepPassedTime": z.boolean().describe("ExtendAbilityCooldownAction 的 `keepPassedTime` 配置字段；准确战斗语义待确认。"),
    /** ExtendAbilityCooldownAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("ExtendAbilityCooldownAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ExtendAbilityCooldownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
    "_waitFirstPeriod": z.boolean().describe("ExtendAbilityCooldownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ExtendAbilityCooldown, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ExtendAbilityCooldownAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionE04Schema = z
  .discriminatedUnion("$type", [ExcludeDeckCardFromBattleActionSchema, ExtendAbilityCooldownActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionE04>;
