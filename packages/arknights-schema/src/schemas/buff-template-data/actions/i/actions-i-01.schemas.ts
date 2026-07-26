/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { IfBossRushBattleAreaAction, IfConditionsAction, IfContainsTargetsInAttackRangeAction, IfDamageTargetSideAction, IfElseAction, IfEnemyIsMovingAction, IfEnemyIsMovingBySelfAction, IfModifierTargetAction, IfNotAction, IfSourceFromEnemyDirectionAction, BattleActionI01 } from "../../../../types/buff-template-data/actions/i/actions-i-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfBossRushBattleArea, Assembly-CSharp 的严格 Action 数据。
 */
export const IfBossRushBattleAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfBossRushBattleArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfBossRushBattleAreaAction 的 `isFirstOnTheLeft` 配置字段；准确战斗语义待确认。 */
    "_isFirstOnTheLeft": z.boolean().describe("IfBossRushBattleAreaAction 的 `isFirstOnTheLeft` 配置字段；准确战斗语义待确认。"),
    /** IfBossRushBattleAreaAction 的 `isFirstOnTheRight` 配置字段；准确战斗语义待确认。 */
    "_isFirstOnTheRight": z.boolean().describe("IfBossRushBattleAreaAction 的 `isFirstOnTheRight` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfBossRushBattleArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfBossRushBattleAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfConditions, Assembly-CSharp 的严格 Action 数据。
 */
export const IfConditionsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfConditions, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfConditionsAction 的 `conditionsNode` 配置字段；准确战斗语义待确认。 */
    "_conditionsNode": z.array(BattleActionReferenceSchema).describe("IfConditionsAction 的 `conditionsNode` 配置字段；准确战斗语义待确认。"),
    /** 条件不成立时依次执行的 Action 节点。 */
    "_failNodes": z.union([
                        z.null(),
                        z.array(BattleActionReferenceSchema),
                      ]).describe("条件不成立时依次执行的 Action 节点。"),
    /** IfConditionsAction 的 `isAnd` 配置字段；准确战斗语义待确认。 */
    "_isAnd": z.boolean().describe("IfConditionsAction 的 `isAnd` 配置字段；准确战斗语义待确认。"),
    /** 条件成立时依次执行的 Action 节点。 */
    "_succeedNodes": z.union([
                           z.null(),
                           z.array(BattleActionReferenceSchema),
                         ]).describe("条件成立时依次执行的 Action 节点。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfConditions, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfConditionsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfContainsTargetsInAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const IfContainsTargetsInAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfContainsTargetsInAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** IfContainsTargetsInAttackRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** IfContainsTargetsInAttackRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("IfContainsTargetsInAttackRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("INVISIBLE").describe("IfContainsTargetsInAttackRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("IfContainsTargetsInAttackRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("IfContainsTargetsInAttackRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("IfContainsTargetsInAttackRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("IfContainsTargetsInAttackRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("IfContainsTargetsInAttackRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("IfContainsTargetsInAttackRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("IfContainsTargetsInAttackRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("IfContainsTargetsInAttackRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** IfContainsTargetsInAttackRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("IfContainsTargetsInAttackRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("IfContainsTargetsInAttackRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfContainsTargetsInAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfContainsTargetsInAttackRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfDamageTargetSide, Assembly-CSharp 的严格 Action 数据。
 */
export const IfDamageTargetSideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfDamageTargetSide, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfDamageTargetSideAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
    "_sideMask": z.enum(["ALLY","ENEMY"]).describe("IfDamageTargetSideAction 的 `sideMask` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfDamageTargetSide, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfDamageTargetSideAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfElse, Assembly-CSharp 的严格 Action 数据。
 */
export const IfElseActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfElse, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 决定分支是否成立的条件 Action 节点。 */
    "_conditionNode": BattleActionReferenceSchema.describe("决定分支是否成立的条件 Action 节点。"),
    /** 条件不成立时依次执行的 Action 节点。 */
    "_failNodes": z.union([
                        z.null(),
                        z.array(BattleActionReferenceSchema),
                      ]).describe("条件不成立时依次执行的 Action 节点。"),
    /** 条件成立时依次执行的 Action 节点。 */
    "_succeedNodes": z.union([
                           z.null(),
                           z.array(BattleActionReferenceSchema),
                         ]).describe("条件成立时依次执行的 Action 节点。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfElse, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfElseAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfEnemyIsMoving, Assembly-CSharp 的严格 Action 数据。
 */
export const IfEnemyIsMovingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfEnemyIsMoving, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfEnemyIsMoving, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfEnemyIsMovingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfEnemyIsMovingBySelf, Assembly-CSharp 的严格 Action 数据。
 */
export const IfEnemyIsMovingBySelfActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfEnemyIsMovingBySelf, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfEnemyIsMovingBySelf, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfEnemyIsMovingBySelfAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfModifierTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const IfModifierTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfModifierTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfModifierTargetAction 的 `motionMask` 配置字段；准确战斗语义待确认。 */
    "_motionMask": z.literal("ALL").describe("IfModifierTargetAction 的 `motionMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfModifierTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfModifierTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfNot, Assembly-CSharp 的严格 Action 数据。
 */
export const IfNotActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfNot, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfNot, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfNotAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfSourceFromEnemyDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const IfSourceFromEnemyDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfSourceFromEnemyDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfSourceFromEnemyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("IfSourceFromEnemyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("MODIFIER_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("MODIFIER_TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfSourceFromEnemyDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfSourceFromEnemyDirectionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI01Schema = z
  .discriminatedUnion("$type", [IfBossRushBattleAreaActionSchema, IfConditionsActionSchema, IfContainsTargetsInAttackRangeActionSchema, IfDamageTargetSideActionSchema, IfElseActionSchema, IfEnemyIsMovingActionSchema, IfEnemyIsMovingBySelfActionSchema, IfModifierTargetActionSchema, IfNotActionSchema, IfSourceFromEnemyDirectionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI01>;
