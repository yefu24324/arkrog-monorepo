/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckEnemyInBornStateAction, CheckEnemyInMagicCircuitAction, CheckEnemyIsHangingAction, CheckEnemyIsStayStillAction, CheckEnemyIsTracingTargetAction, CheckEnemyLevelMaskAction, CheckEnemyLevelMaskInRangeAction, CheckEnemyLevelTypeAction, CheckEnemyMultiChargeAbilityIsChargeAction, CheckEnemyReachRouteEndPositionAction, BattleActionC09 } from "../../../../types/buff-template-data/actions/c/actions-c-09.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyInBornState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyInBornStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyInBornState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyInBornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckEnemyInBornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyInBornState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyInBornStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyInMagicCircuit, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyInMagicCircuitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyInMagicCircuit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyInMagicCircuit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyInMagicCircuitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyIsHanging, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyIsHangingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyIsHanging, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyIsHangingAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckEnemyIsHangingAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyIsHanging, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyIsHangingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyIsStayStill, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyIsStayStillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyIsStayStill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyIsStayStillAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("CheckEnemyIsStayStillAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyIsStayStill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyIsStayStillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyIsTracingTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyIsTracingTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyIsTracingTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyIsTracingTargetAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckEnemyIsTracingTargetAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyIsTracingTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyIsTracingTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyLevelMask, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyLevelMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyLevelMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyLevelMaskAction 的 `targetLevelMask` 配置字段；准确战斗语义待确认。 */
    "_targetLevelMask": z.enum(["BOSS","ELITE_AND_BOSS","ELITE_AND_NORMAL"]).describe("CheckEnemyLevelMaskAction 的 `targetLevelMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyLevelMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyLevelMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyLevelMaskInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyLevelMaskInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyLevelMaskInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CheckEnemyLevelMaskInRangeAction 的 `targetLevelMask` 配置字段；准确战斗语义待确认。 */
    "_targetLevelMask": z.literal("ELITE_AND_BOSS").describe("CheckEnemyLevelMaskInRangeAction 的 `targetLevelMask` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyLevelMaskInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CheckEnemyLevelMaskInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CheckEnemyLevelMaskInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("CheckEnemyLevelMaskInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CheckEnemyLevelMaskInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("CheckEnemyLevelMaskInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CheckEnemyLevelMaskInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("CheckEnemyLevelMaskInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("CheckEnemyLevelMaskInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("CheckEnemyLevelMaskInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("CheckEnemyLevelMaskInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("CheckEnemyLevelMaskInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CheckEnemyLevelMaskInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CheckEnemyLevelMaskInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CheckEnemyLevelMaskInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyLevelMaskInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyLevelMaskInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyLevelType, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyLevelTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyLevelType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyLevelTypeAction 的 `targetLevelType` 配置字段；准确战斗语义待确认。 */
    "_targetLevelType": z.enum(["BOSS","ELITE","NORMAL"]).describe("CheckEnemyLevelTypeAction 的 `targetLevelType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyLevelType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyLevelTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyMultiChargeAbilityIsCharge, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyMultiChargeAbilityIsChargeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyMultiChargeAbilityIsCharge, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyMultiChargeAbilityIsChargeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckEnemyMultiChargeAbilityIsChargeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyMultiChargeAbilityIsCharge, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyMultiChargeAbilityIsChargeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyReachRouteEndPosition, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyReachRouteEndPositionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyReachRouteEndPosition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyReachRouteEndPosition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyReachRouteEndPositionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC09Schema = z
  .discriminatedUnion("$type", [CheckEnemyInBornStateActionSchema, CheckEnemyInMagicCircuitActionSchema, CheckEnemyIsHangingActionSchema, CheckEnemyIsStayStillActionSchema, CheckEnemyIsTracingTargetActionSchema, CheckEnemyLevelMaskActionSchema, CheckEnemyLevelMaskInRangeActionSchema, CheckEnemyLevelTypeActionSchema, CheckEnemyMultiChargeAbilityIsChargeActionSchema, CheckEnemyReachRouteEndPositionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC09>;
