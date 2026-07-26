/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SpawnTrainEnemyAtTargetPosAction, SplashDamageAction, SplitDamageToNearbyOperatorsAction, SpShowBuffAction, StackByBuffStartAction, StartTimelineAction, StopBallAction, StopEnemyForceTracePositionAction, StopUnitAnimatorAction, SumAtkInRangeChainAction, BattleActionS13 } from "../../../../types/buff-template-data/actions/s/actions-s-13.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTrainEnemyAtTargetPos, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTrainEnemyAtTargetPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTrainEnemyAtTargetPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTrainEnemyAtTargetPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTrainEnemyAtTargetPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SplashDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const SplashDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SplashDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SplashDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("NORMAL").describe("SplashDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** SplashDamageAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
    "_createEffect": z.boolean().describe("SplashDamageAction 的 `createEffect` 配置字段；准确战斗语义待确认。"),
    /** SplashDamageAction 的 `damageScale` 配置字段；准确战斗语义待确认。 */
    "_damageScale": z.string().describe("SplashDamageAction 的 `damageScale` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PHYSICAL").describe("本次伤害使用的伤害类型。"),
    /** SplashDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("SplashDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** SplashDamageAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.literal("TARGET").describe("SplashDamageAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** SplashDamageAction 的 `sourceApplyWay` 配置字段；准确战斗语义待确认。 */
    "_sourceApplyWay": z.literal("MELEE").describe("SplashDamageAction 的 `sourceApplyWay` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SplashDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SplashDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SplitDamageToNearbyOperators, Assembly-CSharp 的严格 Action 数据。
 */
export const SplitDamageToNearbyOperatorsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SplitDamageToNearbyOperators, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SplitDamageToNearbyOperatorsAction 的 `allowedBuildableType` 配置字段；准确战斗语义待确认。 */
    "_allowedBuildableType": z.literal("MELEE").describe("SplitDamageToNearbyOperatorsAction 的 `allowedBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `atkScaleVar` 配置字段；准确战斗语义待确认。 */
    "_atkScaleVar": z.string().describe("SplitDamageToNearbyOperatorsAction 的 `atkScaleVar` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。 */
    "_defaultAtkScale": z.number().describe("SplitDamageToNearbyOperatorsAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreCancelReasonMask": z.literal("NONE").describe("SplitDamageToNearbyOperatorsAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.null().describe("SplitDamageToNearbyOperatorsAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("SplitDamageToNearbyOperatorsAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("MODIFIER_SOURCE").describe("Action 读取的来源实体类型。"),
    /** SplitDamageToNearbyOperatorsAction 的 `splitScale` 配置字段；准确战斗语义待确认。 */
    "_splitScale": z.number().describe("SplitDamageToNearbyOperatorsAction 的 `splitScale` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `splitScaleKey` 配置字段；准确战斗语义待确认。 */
    "_splitScaleKey": z.string().describe("SplitDamageToNearbyOperatorsAction 的 `splitScaleKey` 配置字段；准确战斗语义待确认。"),
    /** SplitDamageToNearbyOperatorsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** SplitDamageToNearbyOperatorsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("SplitDamageToNearbyOperatorsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("SplitDamageToNearbyOperatorsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("SplitDamageToNearbyOperatorsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("SplitDamageToNearbyOperatorsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("SplitDamageToNearbyOperatorsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("SplitDamageToNearbyOperatorsAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("SplitDamageToNearbyOperatorsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("SplitDamageToNearbyOperatorsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("SplitDamageToNearbyOperatorsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("SplitDamageToNearbyOperatorsAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** SplitDamageToNearbyOperatorsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("SplitDamageToNearbyOperatorsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("SplitDamageToNearbyOperatorsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SplitDamageToNearbyOperators, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SplitDamageToNearbyOperatorsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpShowBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const SpShowBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpShowBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpShowBuffAction 的 `advancedShowType` 配置字段；准确战斗语义待确认。 */
    "_advancedShowType": z.enum(["NONE","USE_BLACKBOARD_DELTA_AS_ADDTION","USE_BLACKBOARD_DELTA_AS_RATIO"]).describe("SpShowBuffAction 的 `advancedShowType` 配置字段；准确战斗语义待确认。"),
    /** SpShowBuffAction 的 `isSelf` 配置字段；准确战斗语义待确认。 */
    "_isSelf": z.boolean().describe("SpShowBuffAction 的 `isSelf` 配置字段；准确战斗语义待确认。"),
    /** SpShowBuffAction 的 `isSkillCountDown` 配置字段；准确战斗语义待确认。 */
    "_isSkillCountDown": z.boolean().describe("SpShowBuffAction 的 `isSkillCountDown` 配置字段；准确战斗语义待确认。"),
    /** SpShowBuffAction 的 `spShowBuffKey` 配置字段；准确战斗语义待确认。 */
    "_spShowBuffKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("SpShowBuffAction 的 `spShowBuffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpShowBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpShowBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+StackByBuffStart, Assembly-CSharp 的严格 Action 数据。
 */
export const StackByBuffStartActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+StackByBuffStart, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** StackByBuffStartAction 的 `curStackKey` 配置字段；准确战斗语义待确认。 */
    "_curStackKey": z.string().describe("StackByBuffStartAction 的 `curStackKey` 配置字段；准确战斗语义待确认。"),
    /** StackByBuffStartAction 的 `maxStackKey` 配置字段；准确战斗语义待确认。 */
    "_maxStackKey": z.string().describe("StackByBuffStartAction 的 `maxStackKey` 配置字段；准确战斗语义待确认。"),
    /** StackByBuffStartAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("StackByBuffStartAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+StackByBuffStart, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<StackByBuffStartAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+StartTimeline, Assembly-CSharp 的严格 Action 数据。
 */
export const StartTimelineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+StartTimeline, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** StartTimelineAction 的 `timelineKey` 配置字段；准确战斗语义待确认。 */
    "_timelineKey": z.string().describe("StartTimelineAction 的 `timelineKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+StartTimeline, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<StartTimelineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+StopBall, Assembly-CSharp 的严格 Action 数据。
 */
export const StopBallActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+StopBall, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** StopBallAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("StopBallAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** StopBallAction 的 `ignoreUnstoppable` 配置字段；准确战斗语义待确认。 */
    "_ignoreUnstoppable": z.boolean().describe("StopBallAction 的 `ignoreUnstoppable` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** StopBallAction 的 `stopBySource` 配置字段；准确战斗语义待确认。 */
    "_stopBySource": z.boolean().describe("StopBallAction 的 `stopBySource` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+StopBall, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<StopBallAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+StopEnemyForceTracePosition, Assembly-CSharp 的严格 Action 数据。
 */
export const StopEnemyForceTracePositionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+StopEnemyForceTracePosition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** StopEnemyForceTracePositionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("StopEnemyForceTracePositionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+StopEnemyForceTracePosition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<StopEnemyForceTracePositionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+StopUnitAnimator, Assembly-CSharp 的严格 Action 数据。
 */
export const StopUnitAnimatorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+StopUnitAnimator, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** StopUnitAnimatorAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("StopUnitAnimatorAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+StopUnitAnimator, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<StopUnitAnimatorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SumAtkInRangeChain, Assembly-CSharp 的严格 Action 数据。
 */
export const SumAtkInRangeChainActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SumAtkInRangeChain, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SumAtkInRangeChainAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SumAtkInRangeChainAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SumAtkInRangeChainAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
    "_outputKey": z.string().describe("SumAtkInRangeChainAction 的 `outputKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
    /** SumAtkInRangeChainAction 的 `trackBuffKey` 配置字段；准确战斗语义待确认。 */
    "_trackBuffKey": z.string().describe("SumAtkInRangeChainAction 的 `trackBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SumAtkInRangeChain, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SumAtkInRangeChainAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS13Schema = z
  .discriminatedUnion("$type", [SpawnTrainEnemyAtTargetPosActionSchema, SplashDamageActionSchema, SplitDamageToNearbyOperatorsActionSchema, SpShowBuffActionSchema, StackByBuffStartActionSchema, StartTimelineActionSchema, StopBallActionSchema, StopEnemyForceTracePositionActionSchema, StopUnitAnimatorActionSchema, SumAtkInRangeChainActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS13>;
