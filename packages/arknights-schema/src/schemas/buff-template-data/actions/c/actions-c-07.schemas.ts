/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckContainsTargetsInRangeIdAction, CheckCostAction, CheckCurrentBuffAction, CheckCurrentLevelProgressRatioAction, CheckCurrentTileEnemyRouteSpecificPointAction, CheckCurrentTileKeyAction, CheckDirectionAction, CheckDirectionWithBBAction, CheckDistanceAction, CheckDistanceToProjectileCenterAction, BattleActionC07 } from "../../../../types/buff-template-data/actions/c/actions-c-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsTargetsInRangeId, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsTargetsInRangeIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsTargetsInRangeId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsTargetsInRangeIdAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。 */
    "_rangeIdKey": z.string().describe("CheckContainsTargetsInRangeIdAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CheckContainsTargetsInRangeIdAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CheckContainsTargetsInRangeIdAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CheckContainsTargetsInRangeIdAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("CheckContainsTargetsInRangeIdAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CheckContainsTargetsInRangeIdAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("CheckContainsTargetsInRangeIdAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CheckContainsTargetsInRangeIdAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("CheckContainsTargetsInRangeIdAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("CheckContainsTargetsInRangeIdAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("CheckContainsTargetsInRangeIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("CheckContainsTargetsInRangeIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("CheckContainsTargetsInRangeIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CheckContainsTargetsInRangeIdAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CheckContainsTargetsInRangeIdAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CheckContainsTargetsInRangeIdAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsTargetsInRangeId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsTargetsInRangeIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCost, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CheckCostAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.literal("GE").describe("CheckCostAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** CheckCostAction 的 `considerNegativeCost` 配置字段；准确战斗语义待确认。 */
    "_considerNegativeCost": z.boolean().describe("CheckCostAction 的 `considerNegativeCost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCurrentBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCurrentBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCurrentBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("CheckCurrentBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** CheckCurrentBuffAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.literal("BUFF_SOURCE").describe("CheckCurrentBuffAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** CheckCurrentBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("CheckCurrentBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCurrentBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentLevelProgressRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCurrentLevelProgressRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCurrentLevelProgressRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCurrentLevelProgressRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GE").describe("CheckCurrentLevelProgressRatioAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckCurrentLevelProgressRatioAction 的 `levelProgressKey` 配置字段；准确战斗语义待确认。 */
    "_levelProgressKey": z.string().describe("CheckCurrentLevelProgressRatioAction 的 `levelProgressKey` 配置字段；准确战斗语义待确认。"),
    /** CheckCurrentLevelProgressRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckCurrentLevelProgressRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentLevelProgressRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCurrentLevelProgressRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentTileEnemyRouteSpecificPoint, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCurrentTileEnemyRouteSpecificPointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCurrentTileEnemyRouteSpecificPoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCurrentTileEnemyRouteSpecificPointAction 的 `isCheckEndPoint` 配置字段；准确战斗语义待确认。 */
    "_isCheckEndPoint": z.boolean().describe("CheckCurrentTileEnemyRouteSpecificPointAction 的 `isCheckEndPoint` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentTileEnemyRouteSpecificPoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCurrentTileEnemyRouteSpecificPointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentTileKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCurrentTileKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCurrentTileKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCurrentTileKeyAction 的 `isExclude` 配置字段；准确战斗语义待确认。 */
    "_isExclude": z.boolean().describe("CheckCurrentTileKeyAction 的 `isExclude` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CheckCurrentTileKeyAction 的 `tileKey` 配置字段；准确战斗语义待确认。 */
    "_tileKey": z.array(z.string()).describe("CheckCurrentTileKeyAction 的 `tileKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCurrentTileKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCurrentTileKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckDirectionAction 的 `judgeType` 配置字段；准确战斗语义待确认。 */
    "_judgeType": z.enum(["EQUAL","FACE_TARGET","OPPOSITE","VERTICAL"]).describe("CheckDirectionAction 的 `judgeType` 配置字段；准确战斗语义待确认。"),
    /** CheckDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("CheckDirectionAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","SOURCE","TARGET"]).describe("CheckDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDirectionWithBB, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDirectionWithBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDirectionWithBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CheckDirectionWithBBAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("CheckDirectionWithBBAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckDirectionWithBBAction 的 `judgeType` 配置字段；准确战斗语义待确认。 */
    "_judgeType": z.enum(["EQUAL","OPPOSITE"]).describe("CheckDirectionWithBBAction 的 `judgeType` 配置字段；准确战斗语义待确认。"),
    /** CheckDirectionWithBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckDirectionWithBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDirectionWithBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDirectionWithBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDistance, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckDistanceAction 的 `checkCertainPosition` 配置字段；准确战斗语义待确认。 */
    "_checkCertainPosition": z.boolean().describe("CheckDistanceAction 的 `checkCertainPosition` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("CheckDistanceAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceAction 的 `radius` 配置字段；准确战斗语义待确认。 */
    "_radius": z.number().describe("CheckDistanceAction 的 `radius` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceAction 的 `radiusBbKey` 配置字段；准确战斗语义待确认。 */
    "_radiusBbKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CheckDistanceAction 的 `radiusBbKey` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("CheckDistanceAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE"]).describe("CheckDistanceAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("CheckDistanceAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDistanceToProjectileCenter, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDistanceToProjectileCenterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDistanceToProjectileCenter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckDistanceToProjectileCenterAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("LE").describe("CheckDistanceToProjectileCenterAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceToProjectileCenterAction 的 `distBbKey` 配置字段；准确战斗语义待确认。 */
    "_distBbKey": z.string().describe("CheckDistanceToProjectileCenterAction 的 `distBbKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
    /** CheckDistanceToProjectileCenterAction 的 `useBuffProjectile` 配置字段；准确战斗语义待确认。 */
    "_useBuffProjectile": z.boolean().describe("CheckDistanceToProjectileCenterAction 的 `useBuffProjectile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDistanceToProjectileCenter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDistanceToProjectileCenterAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC07Schema = z
  .discriminatedUnion("$type", [CheckContainsTargetsInRangeIdActionSchema, CheckCostActionSchema, CheckCurrentBuffActionSchema, CheckCurrentLevelProgressRatioActionSchema, CheckCurrentTileEnemyRouteSpecificPointActionSchema, CheckCurrentTileKeyActionSchema, CheckDirectionActionSchema, CheckDirectionWithBBActionSchema, CheckDistanceActionSchema, CheckDistanceToProjectileCenterActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC07>;
