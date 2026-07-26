/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckEnemyRealReachableToTileAction, CheckEnemyRouteCheckpointAction, CheckEnemySkillAffectingAction, CheckEnemySkillReadyAction, CheckEnemySkillSelectorHasTargetsAction, CheckEnemySummonedAction, CheckEnemyTalentContainsKeyAction, CheckEnemyUnbalancedAction, CheckEnemyWhetherReachedSomeCheckPointAction, CheckEntityDisappearedAction, BattleActionC10 } from "../../../../types/buff-template-data/actions/c/actions-c-10.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyRealReachableToTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyRealReachableToTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyRealReachableToTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyRealReachableToTileAction 的 `avoidObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_avoidObstacleLike": z.boolean().describe("CheckEnemyRealReachableToTileAction 的 `avoidObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyRealReachableToTileAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("CheckEnemyRealReachableToTileAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyRealReachableToTileAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("CheckEnemyRealReachableToTileAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyRealReachableToTileAction 的 `targetEnemyType` 配置字段；准确战斗语义待确认。 */
    "_targetEnemyType": z.literal("BUFF_OWNER").describe("CheckEnemyRealReachableToTileAction 的 `targetEnemyType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyRealReachableToTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyRealReachableToTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyRouteCheckpoint, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyRouteCheckpointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyRouteCheckpoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyRouteCheckpointAction 的 `routeCheckpointMask` 配置字段；准确战斗语义待确认。 */
    "_routeCheckpointMask": z.union([
                                  z.number(),
                                  z.literal("MOVE"),
                                ]).describe("CheckEnemyRouteCheckpointAction 的 `routeCheckpointMask` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyRouteCheckpointAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("CheckEnemyRouteCheckpointAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyRouteCheckpoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyRouteCheckpointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySkillAffecting, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemySkillAffectingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemySkillAffecting, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySkillAffecting, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemySkillAffectingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySkillReady, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemySkillReadyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemySkillReady, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemySkillReadyAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
    "_checkSkillActive": z.boolean().describe("CheckEnemySkillReadyAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillReadyAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckEnemySkillReadyAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillReadyAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
    "_skillName": z.string().describe("CheckEnemySkillReadyAction 的 `skillName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySkillReady, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemySkillReadyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySkillSelectorHasTargets, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemySkillSelectorHasTargetsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemySkillSelectorHasTargets, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemySkillSelectorHasTargetsAction 的 `assignTargetCountKey` 配置字段；准确战斗语义待确认。 */
    "_assignTargetCountKey": z.null().describe("CheckEnemySkillSelectorHasTargetsAction 的 `assignTargetCountKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillSelectorHasTargetsAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
    "_checkSkillActive": z.boolean().describe("CheckEnemySkillSelectorHasTargetsAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillSelectorHasTargetsAction 的 `checkSkillReady` 配置字段；准确战斗语义待确认。 */
    "_checkSkillReady": z.boolean().describe("CheckEnemySkillSelectorHasTargetsAction 的 `checkSkillReady` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillSelectorHasTargetsAction 的 `minTargetCount` 配置字段；准确战斗语义待确认。 */
    "_minTargetCount": z.number().describe("CheckEnemySkillSelectorHasTargetsAction 的 `minTargetCount` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillSelectorHasTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckEnemySkillSelectorHasTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemySkillSelectorHasTargetsAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
    "_skillName": z.string().describe("CheckEnemySkillSelectorHasTargetsAction 的 `skillName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySkillSelectorHasTargets, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemySkillSelectorHasTargetsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySummoned, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemySummonedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemySummoned, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemySummoned, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemySummonedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyTalentContainsKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyTalentContainsKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyTalentContainsKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyTalentContainsKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("CheckEnemyTalentContainsKeyAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyTalentContainsKeyAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("CheckEnemyTalentContainsKeyAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyTalentContainsKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyTalentContainsKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyUnbalanced, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyUnbalancedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyUnbalanced, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyUnbalanced, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyUnbalancedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyWhetherReachedSomeCheckPoint, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyWhetherReachedSomeCheckPointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyWhetherReachedSomeCheckPoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyWhetherReachedSomeCheckPointAction 的 `backToFront` 配置字段；准确战斗语义待确认。 */
    "_backToFront": z.boolean().describe("CheckEnemyWhetherReachedSomeCheckPointAction 的 `backToFront` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyWhetherReachedSomeCheckPointAction 的 `checkPointIndex` 配置字段；准确战斗语义待确认。 */
    "_checkPointIndex": z.number().describe("CheckEnemyWhetherReachedSomeCheckPointAction 的 `checkPointIndex` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyWhetherReachedSomeCheckPointAction 的 `indexBbKey` 配置字段；准确战斗语义待确认。 */
    "_indexBbKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("CheckEnemyWhetherReachedSomeCheckPointAction 的 `indexBbKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyWhetherReachedSomeCheckPoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyWhetherReachedSomeCheckPointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEntityDisappeared, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEntityDisappearedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEntityDisappeared, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEntityDisappeared, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEntityDisappearedAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC10Schema = z
  .discriminatedUnion("$type", [CheckEnemyRealReachableToTileActionSchema, CheckEnemyRouteCheckpointActionSchema, CheckEnemySkillAffectingActionSchema, CheckEnemySkillReadyActionSchema, CheckEnemySkillSelectorHasTargetsActionSchema, CheckEnemySummonedActionSchema, CheckEnemyTalentContainsKeyActionSchema, CheckEnemyUnbalancedActionSchema, CheckEnemyWhetherReachedSomeCheckPointActionSchema, CheckEntityDisappearedActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC10>;
