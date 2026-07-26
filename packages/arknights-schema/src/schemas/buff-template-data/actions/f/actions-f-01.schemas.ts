/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FaceLOrRToTargetAction, FaceToDirectionViaMoreTargetsAction, FaceToLOrRViaMoreTargetsAction, FaceToTargetAction, FetchEnemyHpToHostAction, FetchHpToBlackboardAction, FilterAbilityApplyWayAction, FilterAbilityFamilyAction, FilterAbilityNameAction, FilterAbilitySpellCntAction, BattleActionF01 } from "../../../../types/buff-template-data/actions/f/actions-f-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FaceLOrRToTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const FaceLOrRToTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FaceLOrRToTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FaceLOrRToTargetAction 的 `checkType` 配置字段；准确战斗语义待确认。 */
    "_checkType": z.literal("MAP_POSITION").describe("FaceLOrRToTargetAction 的 `checkType` 配置字段；准确战斗语义待确认。"),
    /** FaceLOrRToTargetAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("FaceLOrRToTargetAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FaceLOrRToTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FaceLOrRToTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FaceToDirectionViaMoreTargets, Assembly-CSharp 的严格 Action 数据。
 */
export const FaceToDirectionViaMoreTargetsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FaceToDirectionViaMoreTargets, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FaceToDirectionViaMoreTargetsAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("ALL").describe("FaceToDirectionViaMoreTargetsAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** FaceToDirectionViaMoreTargetsAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** FaceToDirectionViaMoreTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("FaceToDirectionViaMoreTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** FaceToDirectionViaMoreTargetsAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("FaceToDirectionViaMoreTargetsAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** FaceToDirectionViaMoreTargetsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** FaceToDirectionViaMoreTargetsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("FaceToDirectionViaMoreTargetsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("FaceToDirectionViaMoreTargetsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("FaceToDirectionViaMoreTargetsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("FaceToDirectionViaMoreTargetsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("FaceToDirectionViaMoreTargetsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("FaceToDirectionViaMoreTargetsAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("FaceToDirectionViaMoreTargetsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("FaceToDirectionViaMoreTargetsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("WALK_ONLY").describe("FaceToDirectionViaMoreTargetsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("FaceToDirectionViaMoreTargetsAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** FaceToDirectionViaMoreTargetsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("FaceToDirectionViaMoreTargetsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("FaceToDirectionViaMoreTargetsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FaceToDirectionViaMoreTargets, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FaceToDirectionViaMoreTargetsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FaceToLOrRViaMoreTargets, Assembly-CSharp 的严格 Action 数据。
 */
export const FaceToLOrRViaMoreTargetsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FaceToLOrRViaMoreTargets, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FaceToLOrRViaMoreTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("FaceToLOrRViaMoreTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** FaceToLOrRViaMoreTargetsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** FaceToLOrRViaMoreTargetsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("FaceToLOrRViaMoreTargetsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("FaceToLOrRViaMoreTargetsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("FaceToLOrRViaMoreTargetsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("FaceToLOrRViaMoreTargetsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("FaceToLOrRViaMoreTargetsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER").describe("FaceToLOrRViaMoreTargetsAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("FaceToLOrRViaMoreTargetsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("FaceToLOrRViaMoreTargetsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("FaceToLOrRViaMoreTargetsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("FaceToLOrRViaMoreTargetsAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** FaceToLOrRViaMoreTargetsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("FaceToLOrRViaMoreTargetsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("FaceToLOrRViaMoreTargetsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FaceToLOrRViaMoreTargets, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FaceToLOrRViaMoreTargetsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FaceToTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const FaceToTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FaceToTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FaceToTargetAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("FaceToTargetAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** FaceToTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("FaceToTargetAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** FaceToTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("FaceToTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FaceToTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FaceToTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FetchEnemyHpToHost, Assembly-CSharp 的严格 Action 数据。
 */
export const FetchEnemyHpToHostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FetchEnemyHpToHost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PURE").describe("本次伤害使用的伤害类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FetchEnemyHpToHost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FetchEnemyHpToHostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FetchHpToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FetchHpToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FetchHpToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FetchHpToBlackboardAction 的 `blackboardStr` 配置字段；准确战斗语义待确认。 */
    "_blackboardStr": z.string().describe("FetchHpToBlackboardAction 的 `blackboardStr` 配置字段；准确战斗语义待确认。"),
    /** FetchHpToBlackboardAction 的 `buffNameOfBlackboard` 配置字段；准确战斗语义待确认。 */
    "_buffNameOfBlackboard": z.union([
                                   z.null(),
                                   z.string(),
                                 ]).describe("FetchHpToBlackboardAction 的 `buffNameOfBlackboard` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PURE").describe("本次伤害使用的伤害类型。"),
    /** FetchHpToBlackboardAction 的 `isHpRatio` 配置字段；准确战斗语义待确认。 */
    "_isHpRatio": z.boolean().describe("FetchHpToBlackboardAction 的 `isHpRatio` 配置字段；准确战斗语义待确认。"),
    /** FetchHpToBlackboardAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("FetchHpToBlackboardAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FetchHpToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FetchHpToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityApplyWay, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterAbilityApplyWayActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterAbilityApplyWay, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterAbilityApplyWayAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("FilterAbilityApplyWayAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityApplyWay, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterAbilityApplyWayAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityFamily, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterAbilityFamilyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterAbilityFamily, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterAbilityFamilyAction 的 `familyGroupMask` 配置字段；准确战斗语义待确认。 */
    "_familyGroupMask": z.enum(["ATTACK","ATTACK_OR_COMBAT","ATTACK_OR_SKILL","COMBAT","SKILL"]).describe("FilterAbilityFamilyAction 的 `familyGroupMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityFamily, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterAbilityFamilyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityName, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterAbilityNameActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterAbilityName, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterAbilityNameAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("FilterAbilityNameAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** FilterAbilityNameAction 的 `useSearchName` 配置字段；准确战斗语义待确认。 */
    "_useSearchName": z.boolean().describe("FilterAbilityNameAction 的 `useSearchName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityName, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterAbilityNameAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilitySpellCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterAbilitySpellCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterAbilitySpellCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterAbilitySpellCntAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
    "_compareValue": z.number().describe("FilterAbilitySpellCntAction 的 `compareValue` 配置字段；准确战斗语义待确认。"),
    /** FilterAbilitySpellCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GT").describe("FilterAbilitySpellCntAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterAbilitySpellCntAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("FilterAbilitySpellCntAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilitySpellCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterAbilitySpellCntAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF01Schema = z
  .discriminatedUnion("$type", [FaceLOrRToTargetActionSchema, FaceToDirectionViaMoreTargetsActionSchema, FaceToLOrRViaMoreTargetsActionSchema, FaceToTargetActionSchema, FetchEnemyHpToHostActionSchema, FetchHpToBlackboardActionSchema, FilterAbilityApplyWayActionSchema, FilterAbilityFamilyActionSchema, FilterAbilityNameActionSchema, FilterAbilitySpellCntActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF01>;
