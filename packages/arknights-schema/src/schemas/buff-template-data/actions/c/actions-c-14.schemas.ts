/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckIsBuildSlotCharacterAction, CheckIsFootballEnemyAction, CheckIsInPenaltyShootoutAction, CheckIsTrackTargetEnemyAction, CheckMainBuffIdAction, CheckManhattanDistanceAction, CheckModifierContainsKeyAction, CheckModifierDirectionOffsetAction, CheckModifierFaceAction, CheckMotionModeAction, BattleActionC14 } from "../../../../types/buff-template-data/actions/c/actions-c-14.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIsBuildSlotCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIsBuildSlotCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIsBuildSlotCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIsBuildSlotCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIsBuildSlotCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIsFootballEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIsFootballEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIsFootballEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIsFootballEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIsFootballEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIsInPenaltyShootout, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIsInPenaltyShootoutActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIsInPenaltyShootout, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIsInPenaltyShootout, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIsInPenaltyShootoutAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIsTrackTargetEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIsTrackTargetEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIsTrackTargetEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIsTrackTargetEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIsTrackTargetEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckMainBuffId, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckMainBuffIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckMainBuffId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckMainBuffIdAction 的 `idToFilter` 配置字段；准确战斗语义待确认。 */
    "_idToFilter": z.string().describe("CheckMainBuffIdAction 的 `idToFilter` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckMainBuffId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckMainBuffIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckManhattanDistance, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckManhattanDistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckManhattanDistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckManhattanDistanceAction 的 `maxDist` 配置字段；准确战斗语义待确认。 */
    "_maxDist": z.number().describe("CheckManhattanDistanceAction 的 `maxDist` 配置字段；准确战斗语义待确认。"),
    /** CheckManhattanDistanceAction 的 `minDist` 配置字段；准确战斗语义待确认。 */
    "_minDist": z.number().describe("CheckManhattanDistanceAction 的 `minDist` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckManhattanDistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckManhattanDistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckModifierContainsKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckModifierContainsKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckModifierContainsKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckModifierContainsKeyAction 的 `customKey` 配置字段；准确战斗语义待确认。 */
    "_customKey": z.string().describe("CheckModifierContainsKeyAction 的 `customKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckModifierContainsKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckModifierContainsKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckModifierDirectionOffset, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckModifierDirectionOffsetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckModifierDirectionOffset, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckModifierDirectionOffsetAction 的 `exceptThisOffset` 配置字段；准确战斗语义待确认。 */
    "_exceptThisOffset": z.boolean().describe("CheckModifierDirectionOffsetAction 的 `exceptThisOffset` 配置字段；准确战斗语义待确认。"),
    /** CheckModifierDirectionOffsetAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.strictObject({
                     /** CheckModifierDirectionOffsetAction 的 `col` 配置字段；准确战斗语义待确认。 */
                     "col": z.number().describe("CheckModifierDirectionOffsetAction 的 `col` 配置字段；准确战斗语义待确认。"),
                     /** CheckModifierDirectionOffsetAction 的 `row` 配置字段；准确战斗语义待确认。 */
                     "row": z.number().describe("CheckModifierDirectionOffsetAction 的 `row` 配置字段；准确战斗语义待确认。"),
                   }).describe("CheckModifierDirectionOffsetAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** CheckModifierDirectionOffsetAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("SOURCE").describe("CheckModifierDirectionOffsetAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckModifierDirectionOffsetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("CheckModifierDirectionOffsetAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CheckModifierDirectionOffsetAction 的 `targetToSource` 配置字段；准确战斗语义待确认。 */
    "_targetToSource": z.boolean().describe("CheckModifierDirectionOffsetAction 的 `targetToSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckModifierDirectionOffset, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckModifierDirectionOffsetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckModifierFace, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckModifierFaceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckModifierFace, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckModifierFaceAction 的 `angle` 配置字段；准确战斗语义待确认。 */
    "_angle": z.number().describe("CheckModifierFaceAction 的 `angle` 配置字段；准确战斗语义待确认。"),
    /** CheckModifierFaceAction 的 `backward` 配置字段；准确战斗语义待确认。 */
    "_backward": z.boolean().describe("CheckModifierFaceAction 的 `backward` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckModifierFace, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckModifierFaceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckMotionMode, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckMotionModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckMotionMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckMotionModeAction 的 `mode` 配置字段；准确战斗语义待确认。 */
    "_mode": z.enum(["FLY","WALK"]).describe("CheckMotionModeAction 的 `mode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckMotionMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckMotionModeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC14Schema = z
  .discriminatedUnion("$type", [CheckIsBuildSlotCharacterActionSchema, CheckIsFootballEnemyActionSchema, CheckIsInPenaltyShootoutActionSchema, CheckIsTrackTargetEnemyActionSchema, CheckMainBuffIdActionSchema, CheckManhattanDistanceActionSchema, CheckModifierContainsKeyActionSchema, CheckModifierDirectionOffsetActionSchema, CheckModifierFaceActionSchema, CheckMotionModeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC14>;
