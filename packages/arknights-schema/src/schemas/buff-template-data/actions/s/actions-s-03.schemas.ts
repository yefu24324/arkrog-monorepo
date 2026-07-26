/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxMarkEntityNotRewardAction, SandboxMarkRushEnemyDeadAction, SandboxMarkRushEnemyReachExitAction, SandboxMarkTraceReachedAction, SandboxProcessSpecialEnemyAction, SandboxRecordBossStateAction, SandboxRecordPlacedItemStateAction, SandboxRecordUniEnemyStatusAction, SandboxRecordUnitStateAction, SandboxRecordUsingConstructItemAction, BattleActionS03 } from "../../../../types/buff-template-data/actions/s/actions-s-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkEntityNotReward, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxMarkEntityNotRewardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxMarkEntityNotReward, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxMarkEntityNotRewardAction 的 `detailType` 配置字段；准确战斗语义待确认。 */
    "_detailType": z.enum(["CATCHED","CATCHED_SHINING","STOLEN"]).describe("SandboxMarkEntityNotRewardAction 的 `detailType` 配置字段；准确战斗语义待确认。"),
    /** SandboxMarkEntityNotRewardAction 的 `isUniEnemy` 配置字段；准确战斗语义待确认。 */
    "_isUniEnemy": z.boolean().describe("SandboxMarkEntityNotRewardAction 的 `isUniEnemy` 配置字段；准确战斗语义待确认。"),
    /** SandboxMarkEntityNotRewardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxMarkEntityNotRewardAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SandboxMarkEntityNotRewardAction 的 `uniDetailType` 配置字段；准确战斗语义待确认。 */
    "_uniDetailType": z.enum(["CATCHED","CATCHED_SHINING"]).describe("SandboxMarkEntityNotRewardAction 的 `uniDetailType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkEntityNotReward, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxMarkEntityNotRewardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyDead, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxMarkRushEnemyDeadActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyDead, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyDead, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxMarkRushEnemyDeadAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyReachExit, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxMarkRushEnemyReachExitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyReachExit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkRushEnemyReachExit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxMarkRushEnemyReachExitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkTraceReached, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxMarkTraceReachedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxMarkTraceReached, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxMarkTraceReachedAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("SandboxMarkTraceReachedAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxMarkTraceReached, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxMarkTraceReachedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxProcessSpecialEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxProcessSpecialEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxProcessSpecialEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxProcessSpecialEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxProcessSpecialEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordBossState, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRecordBossStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRecordBossState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxRecordBossStateAction 的 `considerReborn` 配置字段；准确战斗语义待确认。 */
    "_considerReborn": z.boolean().describe("SandboxRecordBossStateAction 的 `considerReborn` 配置字段；准确战斗语义待确认。"),
    /** SandboxRecordBossStateAction 的 `forceModeKey` 配置字段；准确战斗语义待确认。 */
    "_forceModeKey": z.string().describe("SandboxRecordBossStateAction 的 `forceModeKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxRecordBossStateAction 的 `ignoreModeKey` 配置字段；准确战斗语义待确认。 */
    "_ignoreModeKey": z.string().describe("SandboxRecordBossStateAction 的 `ignoreModeKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordBossState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRecordBossStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordPlacedItemState, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRecordPlacedItemStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRecordPlacedItemState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxRecordPlacedItemStateAction 的 `additionHpRatioKey` 配置字段；准确战斗语义待确认。 */
    "_additionHpRatioKey": z.string().describe("SandboxRecordPlacedItemStateAction 的 `additionHpRatioKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordPlacedItemState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRecordPlacedItemStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordUniEnemyStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRecordUniEnemyStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRecordUniEnemyStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordUniEnemyStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRecordUniEnemyStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordUnitState, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRecordUnitStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRecordUnitState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxRecordUnitStateAction 的 `additionHpRatioKey` 配置字段；准确战斗语义待确认。 */
    "_additionHpRatioKey": z.string().describe("SandboxRecordUnitStateAction 的 `additionHpRatioKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordUnitState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRecordUnitStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordUsingConstructItem, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRecordUsingConstructItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRecordUsingConstructItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRecordUsingConstructItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRecordUsingConstructItemAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS03Schema = z
  .discriminatedUnion("$type", [SandboxMarkEntityNotRewardActionSchema, SandboxMarkRushEnemyDeadActionSchema, SandboxMarkRushEnemyReachExitActionSchema, SandboxMarkTraceReachedActionSchema, SandboxProcessSpecialEnemyActionSchema, SandboxRecordBossStateActionSchema, SandboxRecordPlacedItemStateActionSchema, SandboxRecordUniEnemyStatusActionSchema, SandboxRecordUnitStateActionSchema, SandboxRecordUsingConstructItemActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS03>;
