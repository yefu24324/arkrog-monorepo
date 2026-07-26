/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckHeightTypeOfRootTileAction, CheckHostContainsBuffAction, CheckIdInBlackboardFunLiveModeOnlyAction, CheckIfAtMinusHpStateAction, CheckIfDamageHasSharedFlagsAction, CheckIfDurationBuffAction, CheckIfSourceGridPosFaceTargetGridPosAction, CheckInProjectileRangeAction, CheckInWaitingForWaveStartAction, CheckIsAllyRoundInPenaltyAction, BattleActionC13 } from "../../../../types/buff-template-data/actions/c/actions-c-13.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHeightTypeOfRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHeightTypeOfRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHeightTypeOfRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHeightTypeOfRootTileAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
    "_heightType": z.enum(["HIGHLAND","LOWLAND"]).describe("CheckHeightTypeOfRootTileAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHeightTypeOfRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHeightTypeOfRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHostContainsBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHostContainsBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHostContainsBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHostContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("CheckHostContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** CheckHostContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。 */
    "isAND": z.boolean().describe("CheckHostContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHostContainsBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHostContainsBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIdInBlackboardFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIdInBlackboardFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIdInBlackboardFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIdInBlackboardFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIdInBlackboardFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIfAtMinusHpState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIfAtMinusHpStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIfAtMinusHpState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIfAtMinusHpState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIfAtMinusHpStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIfDamageHasSharedFlags, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIfDamageHasSharedFlagsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIfDamageHasSharedFlags, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckIfDamageHasSharedFlagsAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckIfDamageHasSharedFlagsAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** CheckIfDamageHasSharedFlagsAction 的 `sharedFlags` 配置字段；准确战斗语义待确认。 */
    "_sharedFlags": z.string().describe("CheckIfDamageHasSharedFlagsAction 的 `sharedFlags` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIfDamageHasSharedFlags, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIfDamageHasSharedFlagsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIfDurationBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIfDurationBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIfDurationBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckIfDurationBuffAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
    "_buffType": z.literal("MAIN_BUFF").describe("CheckIfDurationBuffAction 的 `buffType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIfDurationBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIfDurationBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIfSourceGridPosFaceTargetGridPos, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIfSourceGridPosFaceTargetGridPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIfSourceGridPosFaceTargetGridPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `faceIfSameCol` 配置字段；准确战斗语义待确认。 */
    "_faceIfSameCol": z.string().describe("CheckIfSourceGridPosFaceTargetGridPosAction 的 `faceIfSameCol` 配置字段；准确战斗语义待确认。"),
    /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `faceType` 配置字段；准确战斗语义待确认。 */
    "_faceType": z.enum(["BACK","FRONT"]).describe("CheckIfSourceGridPosFaceTargetGridPosAction 的 `faceType` 配置字段；准确战斗语义待确认。"),
    /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET"]).describe("CheckIfSourceGridPosFaceTargetGridPosAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE"]).describe("CheckIfSourceGridPosFaceTargetGridPosAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CheckIfSourceGridPosFaceTargetGridPosAction 的 `targetColOffset` 配置字段；准确战斗语义待确认。 */
    "_targetColOffset": z.number().describe("CheckIfSourceGridPosFaceTargetGridPosAction 的 `targetColOffset` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIfSourceGridPosFaceTargetGridPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIfSourceGridPosFaceTargetGridPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckInProjectileRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckInProjectileRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckInProjectileRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckInProjectileRangeAction 的 `dirKey` 配置字段；准确战斗语义待确认。 */
    "_dirKey": z.string().describe("CheckInProjectileRangeAction 的 `dirKey` 配置字段；准确战斗语义待确认。"),
    /** CheckInProjectileRangeAction 的 `rangeKey` 配置字段；准确战斗语义待确认。 */
    "_rangeKey": z.string().describe("CheckInProjectileRangeAction 的 `rangeKey` 配置字段；准确战斗语义待确认。"),
    /** CheckInProjectileRangeAction 的 `tagKey` 配置字段；准确战斗语义待确认。 */
    "_tagKey": z.string().describe("CheckInProjectileRangeAction 的 `tagKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckInProjectileRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckInProjectileRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckInWaitingForWaveStart, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckInWaitingForWaveStartActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckInWaitingForWaveStart, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckInWaitingForWaveStart, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckInWaitingForWaveStartAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckIsAllyRoundInPenalty, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckIsAllyRoundInPenaltyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckIsAllyRoundInPenalty, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckIsAllyRoundInPenalty, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckIsAllyRoundInPenaltyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC13Schema = z
  .discriminatedUnion("$type", [CheckHeightTypeOfRootTileActionSchema, CheckHostContainsBuffActionSchema, CheckIdInBlackboardFunLiveModeOnlyActionSchema, CheckIfAtMinusHpStateActionSchema, CheckIfDamageHasSharedFlagsActionSchema, CheckIfDurationBuffActionSchema, CheckIfSourceGridPosFaceTargetGridPosActionSchema, CheckInProjectileRangeActionSchema, CheckInWaitingForWaveStartActionSchema, CheckIsAllyRoundInPenaltyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC13>;
