/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SetIgnoreCancelReasonMaskAction, SetIgnoreMissFlagAction, SetMagicCircuitLikeObstacleInRangeAction, SetMaxMinusHpRatioAction, SetMultiAppearSkillPendingToCastAction, SetRuntimeMapTagAction, SetSharedFlagAction, SetSkillCastWithNoSpAction, SetSpineSkinAction, SetStackCountViaBlockNumAction, BattleActionS10 } from "../../../../types/buff-template-data/actions/s/actions-s-10.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetIgnoreCancelReasonMask, Assembly-CSharp 的严格 Action 数据。
 */
export const SetIgnoreCancelReasonMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetIgnoreCancelReasonMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetIgnoreCancelReasonMaskAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreCancelReasonMask": z.literal("MISS").describe("SetIgnoreCancelReasonMaskAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetIgnoreCancelReasonMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetIgnoreCancelReasonMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetIgnoreMissFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const SetIgnoreMissFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetIgnoreMissFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetIgnoreMissFlagAction 的 `ignoreMissFlag` 配置字段；准确战斗语义待确认。 */
    "_ignoreMissFlag": z.literal("PHYSICAL").describe("SetIgnoreMissFlagAction 的 `ignoreMissFlag` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetIgnoreMissFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetIgnoreMissFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetMagicCircuitLikeObstacleInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const SetMagicCircuitLikeObstacleInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetMagicCircuitLikeObstacleInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetMagicCircuitLikeObstacleInRangeAction 的 `isLikeObstacle` 配置字段；准确战斗语义待确认。 */
    "_isLikeObstacle": z.boolean().describe("SetMagicCircuitLikeObstacleInRangeAction 的 `isLikeObstacle` 配置字段；准确战斗语义待确认。"),
    /** SetMagicCircuitLikeObstacleInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("SetMagicCircuitLikeObstacleInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetMagicCircuitLikeObstacleInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetMagicCircuitLikeObstacleInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetMaxMinusHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const SetMaxMinusHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetMaxMinusHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SetMaxMinusHpRatioAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("SetMaxMinusHpRatioAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetMaxMinusHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetMaxMinusHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetMultiAppearSkillPendingToCast, Assembly-CSharp 的严格 Action 数据。
 */
export const SetMultiAppearSkillPendingToCastActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetMultiAppearSkillPendingToCast, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetMultiAppearSkillPendingToCast, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetMultiAppearSkillPendingToCastAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetRuntimeMapTag, Assembly-CSharp 的严格 Action 数据。
 */
export const SetRuntimeMapTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetRuntimeMapTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetRuntimeMapTagAction 的 `isSet` 配置字段；准确战斗语义待确认。 */
    "_isSet": z.boolean().describe("SetRuntimeMapTagAction 的 `isSet` 配置字段；准确战斗语义待确认。"),
    /** SetRuntimeMapTagAction 的 `tag` 配置字段；准确战斗语义待确认。 */
    "_tag": z.string().describe("SetRuntimeMapTagAction 的 `tag` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetRuntimeMapTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetRuntimeMapTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetSharedFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const SetSharedFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetSharedFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetSharedFlagAction 的 `sharedFlagIndex` 配置字段；准确战斗语义待确认。 */
    "_sharedFlagIndex": z.string().describe("SetSharedFlagAction 的 `sharedFlagIndex` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetSharedFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetSharedFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetSkillCastWithNoSp, Assembly-CSharp 的严格 Action 数据。
 */
export const SetSkillCastWithNoSpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetSkillCastWithNoSp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetSkillCastWithNoSpAction 的 `noSp` 配置字段；准确战斗语义待确认。 */
    "_noSp": z.boolean().describe("SetSkillCastWithNoSpAction 的 `noSp` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetSkillCastWithNoSp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetSkillCastWithNoSpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetSpineSkin, Assembly-CSharp 的严格 Action 数据。
 */
export const SetSpineSkinActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetSpineSkin, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetSpineSkinAction 的 `skinKey` 配置字段；准确战斗语义待确认。 */
    "_skinKey": z.string().describe("SetSpineSkinAction 的 `skinKey` 配置字段；准确战斗语义待确认。"),
    /** SetSpineSkinAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SetSpineSkinAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetSpineSkin, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetSpineSkinAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetStackCountViaBlockNum, Assembly-CSharp 的严格 Action 数据。
 */
export const SetStackCountViaBlockNumActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetStackCountViaBlockNum, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetStackCountViaBlockNum, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetStackCountViaBlockNumAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS10Schema = z
  .discriminatedUnion("$type", [SetIgnoreCancelReasonMaskActionSchema, SetIgnoreMissFlagActionSchema, SetMagicCircuitLikeObstacleInRangeActionSchema, SetMaxMinusHpRatioActionSchema, SetMultiAppearSkillPendingToCastActionSchema, SetRuntimeMapTagActionSchema, SetSharedFlagActionSchema, SetSkillCastWithNoSpActionSchema, SetSpineSkinActionSchema, SetStackCountViaBlockNumActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS10>;
