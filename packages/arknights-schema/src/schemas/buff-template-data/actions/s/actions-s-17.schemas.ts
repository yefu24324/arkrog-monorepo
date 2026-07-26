/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SwitchSourceDirectionAction, SwitchSubSpineConfigAction, SwitchTokenCategoryAction, SwitchToRebornStateAction, BattleActionS17 } from "../../../../types/buff-template-data/actions/s/actions-s-17.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchSourceDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchSourceDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchSourceDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchSourceDirectionAction 的 `downNodes` 配置字段；准确战斗语义待确认。 */
    "_downNodes": z.array(BattleActionReferenceSchema).describe("SwitchSourceDirectionAction 的 `downNodes` 配置字段；准确战斗语义待确认。"),
    /** SwitchSourceDirectionAction 的 `leftNodes` 配置字段；准确战斗语义待确认。 */
    "_leftNodes": z.array(BattleActionReferenceSchema).describe("SwitchSourceDirectionAction 的 `leftNodes` 配置字段；准确战斗语义待确认。"),
    /** SwitchSourceDirectionAction 的 `rightNodes` 配置字段；准确战斗语义待确认。 */
    "_rightNodes": z.array(BattleActionReferenceSchema).describe("SwitchSourceDirectionAction 的 `rightNodes` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SwitchSourceDirectionAction 的 `upNodes` 配置字段；准确战斗语义待确认。 */
    "_upNodes": z.array(BattleActionReferenceSchema).describe("SwitchSourceDirectionAction 的 `upNodes` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchSourceDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchSourceDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchSubSpineConfig, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchSubSpineConfigActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchSubSpineConfig, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchSubSpineConfigAction 的 `defaultToRandom` 配置字段；准确战斗语义待确认。 */
    "_defaultToRandom": z.boolean().describe("SwitchSubSpineConfigAction 的 `defaultToRandom` 配置字段；准确战斗语义待确认。"),
    /** SwitchSubSpineConfigAction 的 `index` 配置字段；准确战斗语义待确认。 */
    "_index": z.number().describe("SwitchSubSpineConfigAction 的 `index` 配置字段；准确战斗语义待确认。"),
    /** SwitchSubSpineConfigAction 的 `indexKey` 配置字段；准确战斗语义待确认。 */
    "_indexKey": z.string().describe("SwitchSubSpineConfigAction 的 `indexKey` 配置字段；准确战斗语义待确认。"),
    /** SwitchSubSpineConfigAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SwitchSubSpineConfigAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchSubSpineConfig, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchSubSpineConfigAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchTokenCategory, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchTokenCategoryActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchTokenCategory, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchTokenCategoryAction 的 `category` 配置字段；准确战斗语义待确认。 */
    "_category": z.enum(["DEFAULT","TRAP_OR_ITEM"]).describe("SwitchTokenCategoryAction 的 `category` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchTokenCategory, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchTokenCategoryAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchToRebornState, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchToRebornStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchToRebornState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchToRebornStateAction 的 `isForce` 配置字段；准确战斗语义待确认。 */
    "_isForce": z.boolean().describe("SwitchToRebornStateAction 的 `isForce` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchToRebornState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchToRebornStateAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS17Schema = z
  .discriminatedUnion("$type", [SwitchSourceDirectionActionSchema, SwitchSubSpineConfigActionSchema, SwitchTokenCategoryActionSchema, SwitchToRebornStateActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS17>;
