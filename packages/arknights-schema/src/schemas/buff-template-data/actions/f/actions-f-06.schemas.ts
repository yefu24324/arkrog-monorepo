/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FilterModifierByRealDeltaAction, FilterModifierCancelReasonAction, FilterModifierTargetTypeAction, FilterRootTileMotionModePassableAction, FilterRootTileOffsetAction, FilterSkillTriggerdCntAction, FilterSubProfessionAttackTypeAction, FilterTargetWithPlayerSideAction, FilterTileBlackboardAction, FindNearestBuildableTileToBBAction, BattleActionF06 } from "../../../../types/buff-template-data/actions/f/actions-f-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterModifierByRealDelta, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterModifierByRealDeltaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterModifierByRealDelta, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterModifierByRealDeltaAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LT"]).describe("FilterModifierByRealDeltaAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterModifierByRealDeltaAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。 */
    "_modifierTargetType": z.enum(["COST","EP","HP","LIFE_POINT","SP"]).describe("FilterModifierByRealDeltaAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterModifierByRealDelta, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterModifierByRealDeltaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterModifierCancelReason, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterModifierCancelReasonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterModifierCancelReason, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterModifierCancelReasonAction 的 `reason` 配置字段；准确战斗语义待确认。 */
    "_reason": z.enum(["BLOCKED","BLOCKED_WITH_DAMAGE_NUMBER","HIT_FAILED","INTERRUPT","MISS","UNHURTABLE"]).describe("FilterModifierCancelReasonAction 的 `reason` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterModifierCancelReason, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterModifierCancelReasonAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterModifierTargetType, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterModifierTargetTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterModifierTargetType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterModifierTargetTypeAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。 */
    "_modifierTargetType": z.enum(["COST","EP","HP","SP"]).describe("FilterModifierTargetTypeAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterModifierTargetType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterModifierTargetTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterRootTileMotionModePassable, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterRootTileMotionModePassableActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterRootTileMotionModePassable, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterRootTileMotionModePassableAction 的 `motionModeToCheck` 配置字段；准确战斗语义待确认。 */
    "_motionModeToCheck": z.string().describe("FilterRootTileMotionModePassableAction 的 `motionModeToCheck` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterRootTileMotionModePassable, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterRootTileMotionModePassableAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterRootTileOffset, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterRootTileOffsetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterRootTileOffset, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterRootTileOffsetAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
    "_anotherKeyToCompare": z.literal("max_distance").describe("FilterRootTileOffsetAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。"),
    /** FilterRootTileOffsetAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("FilterRootTileOffsetAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** FilterRootTileOffsetAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GE").describe("FilterRootTileOffsetAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterRootTileOffsetAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("FilterRootTileOffsetAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FilterRootTileOffsetAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterRootTileOffsetAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterRootTileOffset, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterRootTileOffsetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterSkillTriggerdCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterSkillTriggerdCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterSkillTriggerdCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterSkillTriggerdCntAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.literal("GE").describe("FilterSkillTriggerdCntAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** FilterSkillTriggerdCntAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("FilterSkillTriggerdCntAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** FilterSkillTriggerdCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("FilterSkillTriggerdCntAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** FilterSkillTriggerdCntAction 的 `useCurTriggerCnt` 配置字段；准确战斗语义待确认。 */
    "_useCurTriggerCnt": z.boolean().describe("FilterSkillTriggerdCntAction 的 `useCurTriggerCnt` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterSkillTriggerdCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterSkillTriggerdCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterSubProfessionAttackType, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterSubProfessionAttackTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterSubProfessionAttackType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterSubProfessionAttackTypeAction 的 `targetAttackType` 配置字段；准确战斗语义待确认。 */
    "_targetAttackType": z.literal("PHYSICAL").describe("FilterSubProfessionAttackTypeAction 的 `targetAttackType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterSubProfessionAttackType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterSubProfessionAttackTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterTargetWithPlayerSide, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterTargetWithPlayerSideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterTargetWithPlayerSide, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterTargetWithPlayerSideAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("FilterTargetWithPlayerSideAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** FilterTargetWithPlayerSideAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("FilterTargetWithPlayerSideAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** FilterTargetWithPlayerSideAction 的 `filterMapLayer` 配置字段；准确战斗语义待确认。 */
    "filterMapLayer": z.boolean().describe("FilterTargetWithPlayerSideAction 的 `filterMapLayer` 配置字段；准确战斗语义待确认。"),
    /** FilterTargetWithPlayerSideAction 的 `filterSourcePlayerSide` 配置字段；准确战斗语义待确认。 */
    "filterSourcePlayerSide": z.boolean().describe("FilterTargetWithPlayerSideAction 的 `filterSourcePlayerSide` 配置字段；准确战斗语义待确认。"),
    /** FilterTargetWithPlayerSideAction 的 `filterTargetPlayerSide` 配置字段；准确战斗语义待确认。 */
    "filterTargetPlayerSide": z.boolean().describe("FilterTargetWithPlayerSideAction 的 `filterTargetPlayerSide` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterTargetWithPlayerSide, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterTargetWithPlayerSideAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterTileBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterTileBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterTileBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterTileBlackboardAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
    "_anotherKeyToCompare": z.union([
                                  z.null(),
                                  z.literal("land_cnt_max"),
                                ]).describe("FilterTileBlackboardAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FilterTileBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LE","LT"]).describe("FilterTileBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MAIN_TARGET"]).describe("Action 作用的目标实体类型。"),
    /** FilterTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetOldTile": z.boolean().describe("FilterTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。"),
    /** FilterTileBlackboardAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRoottile": z.boolean().describe("FilterTileBlackboardAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。"),
    /** FilterTileBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterTileBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterTileBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterTileBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FindNearestBuildableTileToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const FindNearestBuildableTileToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FindNearestBuildableTileToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FindNearestBuildableTileToBBAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_advancedBuildableMask": z.literal("DEEP_SEA").describe("FindNearestBuildableTileToBBAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** FindNearestBuildableTileToBBAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("MELEE").describe("FindNearestBuildableTileToBBAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** FindNearestBuildableTileToBBAction 的 `checkBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableMask": z.boolean().describe("FindNearestBuildableTileToBBAction 的 `checkBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** FindNearestBuildableTileToBBAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("FindNearestBuildableTileToBBAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FindNearestBuildableTileToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FindNearestBuildableTileToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF06Schema = z
  .discriminatedUnion("$type", [FilterModifierByRealDeltaActionSchema, FilterModifierCancelReasonActionSchema, FilterModifierTargetTypeActionSchema, FilterRootTileMotionModePassableActionSchema, FilterRootTileOffsetActionSchema, FilterSkillTriggerdCntActionSchema, FilterSubProfessionAttackTypeActionSchema, FilterTargetWithPlayerSideActionSchema, FilterTileBlackboardActionSchema, FindNearestBuildableTileToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF06>;
