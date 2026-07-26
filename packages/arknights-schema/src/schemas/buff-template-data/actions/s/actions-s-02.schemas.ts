/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxEnableTraceTargetAction, SandboxEntityDropItemAction, SandboxHunterDropItemAction, SandboxHunterKillEnemyAction, SandboxIsConstructItemAction, SandboxIsFactoryTrapAction, SandboxIsPlacedItemAction, SandboxIsRushEnemyAction, SandboxIsRushEnemyModeAction, SandboxLogEnemyEventAction, BattleActionS02 } from "../../../../types/buff-template-data/actions/s/actions-s-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxEnableTraceTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxEnableTraceTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxEnableTraceTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxEnableTraceTargetAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
    "_enabled": z.boolean().describe("SandboxEnableTraceTargetAction 的 `enabled` 配置字段；准确战斗语义待确认。"),
    /** SandboxEnableTraceTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("SandboxEnableTraceTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SandboxEnableTraceTargetAction 的 `traceTileInstead` 配置字段；准确战斗语义待确认。 */
    "_traceTileInstead": z.boolean().describe("SandboxEnableTraceTargetAction 的 `traceTileInstead` 配置字段；准确战斗语义待确认。"),
    /** SandboxEnableTraceTargetAction 的 `wholeTraceInstead` 配置字段；准确战斗语义待确认。 */
    "_wholeTraceInstead": z.boolean().describe("SandboxEnableTraceTargetAction 的 `wholeTraceInstead` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxEnableTraceTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxEnableTraceTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxEntityDropItem, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxEntityDropItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxEntityDropItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxEntityDropItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxEntityDropItemAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SandboxEntityDropItemAction 的 `type` 配置字段；准确战斗语义待确认。 */
    "_type": z.enum(["ENEMY","TRAP"]).describe("SandboxEntityDropItemAction 的 `type` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxEntityDropItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxEntityDropItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxHunterDropItem, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxHunterDropItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxHunterDropItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxHunterDropItemAction 的 `detailType` 配置字段；准确战斗语义待确认。 */
    "_detailType": z.literal("STOLEN").describe("SandboxHunterDropItemAction 的 `detailType` 配置字段；准确战斗语义待确认。"),
    /** SandboxHunterDropItemAction 的 `owner` 配置字段；准确战斗语义待确认。 */
    "_owner": z.literal("BUFF_OWNER").describe("SandboxHunterDropItemAction 的 `owner` 配置字段；准确战斗语义待确认。"),
    /** SandboxHunterDropItemAction 的 `type` 配置字段；准确战斗语义待确认。 */
    "_type": z.literal("ENEMY").describe("SandboxHunterDropItemAction 的 `type` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxHunterDropItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxHunterDropItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxHunterKillEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxHunterKillEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxHunterKillEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxHunterKillEnemyAction 的 `huntBuffKey` 配置字段；准确战斗语义待确认。 */
    "_huntBuffKey": z.string().describe("SandboxHunterKillEnemyAction 的 `huntBuffKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxHunterKillEnemyAction 的 `owner` 配置字段；准确战斗语义待确认。 */
    "_owner": z.literal("BUFF_OWNER").describe("SandboxHunterKillEnemyAction 的 `owner` 配置字段；准确战斗语义待确认。"),
    /** SandboxHunterKillEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("SandboxHunterKillEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxHunterKillEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxHunterKillEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsConstructItem, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxIsConstructItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxIsConstructItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsConstructItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxIsConstructItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsFactoryTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxIsFactoryTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxIsFactoryTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsFactoryTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxIsFactoryTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsPlacedItem, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxIsPlacedItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxIsPlacedItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsPlacedItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxIsPlacedItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsRushEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxIsRushEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxIsRushEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsRushEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxIsRushEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsRushEnemyMode, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxIsRushEnemyModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxIsRushEnemyMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxIsRushEnemyMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxIsRushEnemyModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxLogEnemyEvent, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxLogEnemyEventActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxLogEnemyEvent, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxLogEnemyEventAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("SandboxLogEnemyEventAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** SandboxLogEnemyEventAction 的 `eventId` 配置字段；准确战斗语义待确认。 */
    "_eventId": z.string().describe("SandboxLogEnemyEventAction 的 `eventId` 配置字段；准确战斗语义待确认。"),
    /** SandboxLogEnemyEventAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxLogEnemyEventAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxLogEnemyEvent, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxLogEnemyEventAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS02Schema = z
  .discriminatedUnion("$type", [SandboxEnableTraceTargetActionSchema, SandboxEntityDropItemActionSchema, SandboxHunterDropItemActionSchema, SandboxHunterKillEnemyActionSchema, SandboxIsConstructItemActionSchema, SandboxIsFactoryTrapActionSchema, SandboxIsPlacedItemActionSchema, SandboxIsRushEnemyActionSchema, SandboxIsRushEnemyModeActionSchema, SandboxLogEnemyEventActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS02>;
