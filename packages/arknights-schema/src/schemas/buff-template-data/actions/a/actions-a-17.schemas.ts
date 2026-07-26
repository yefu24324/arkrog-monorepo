/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignAttributeDefaultValueToBlackboardAction, AssignAttributeRawDataIntoBlackboardAction, AssignAttributeSumInRangeToBlackboardAction, AssignAttributeToBBAction, AssignBackwardTileToBBAction, AssignBranchStartLocationToBlackboardAction, AssignBuffBlackboardAction, AssignBuffBlackboardFromAbilityAction, AssignBuffBlackboardFromOthersAction, AssignBuffCountIntoBlackboardAction, BattleActionA17 } from "../../../../types/buff-template-data/actions/a/actions-a-17.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeDefaultValueToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAttributeDefaultValueToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAttributeDefaultValueToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `atkValue` 配置字段；准确战斗语义待确认。 */
    "_atkValue": z.number().describe("AssignAttributeDefaultValueToBlackboardAction 的 `atkValue` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `attackSpeedValue` 配置字段；准确战斗语义待确认。 */
    "_attackSpeedValue": z.number().describe("AssignAttributeDefaultValueToBlackboardAction 的 `attackSpeedValue` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `blockCnt` 配置字段；准确战斗语义待确认。 */
    "_blockCnt": z.number().describe("AssignAttributeDefaultValueToBlackboardAction 的 `blockCnt` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `defValue` 配置字段；准确战斗语义待确认。 */
    "_defValue": z.number().describe("AssignAttributeDefaultValueToBlackboardAction 的 `defValue` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `magicResistanceValue` 配置字段；准确战斗语义待确认。 */
    "_magicResistanceValue": z.number().describe("AssignAttributeDefaultValueToBlackboardAction 的 `magicResistanceValue` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `maxHpValue` 配置字段；准确战斗语义待确认。 */
    "_maxHpValue": z.number().describe("AssignAttributeDefaultValueToBlackboardAction 的 `maxHpValue` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeDefaultValueToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignAttributeDefaultValueToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeDefaultValueToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAttributeDefaultValueToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeRawDataIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAttributeRawDataIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAttributeRawDataIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATTACK_SPEED","MASS_LEVEL","MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** AssignAttributeRawDataIntoBlackboardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("AssignAttributeRawDataIntoBlackboardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeRawDataIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAttributeRawDataIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeSumInRangeToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAttributeSumInRangeToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAttributeSumInRangeToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.literal("BLOCK_CNT").describe("属性修改器指向的战斗属性。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("AssignAttributeSumInRangeToBlackboardAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("AssignAttributeSumInRangeToBlackboardAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("AssignAttributeSumInRangeToBlackboardAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("AssignAttributeSumInRangeToBlackboardAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("AssignAttributeSumInRangeToBlackboardAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER").describe("AssignAttributeSumInRangeToBlackboardAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("AssignAttributeSumInRangeToBlackboardAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("AssignAttributeSumInRangeToBlackboardAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("AssignAttributeSumInRangeToBlackboardAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("AssignAttributeSumInRangeToBlackboardAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** AssignAttributeSumInRangeToBlackboardAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("AssignAttributeSumInRangeToBlackboardAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("AssignAttributeSumInRangeToBlackboardAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
    "_useAttackRange": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `useCurrentModeRange` 配置字段；准确战斗语义待确认。 */
    "_useCurrentModeRange": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `useCurrentModeRange` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `useGlobalRange` 配置字段；准确战斗语义待确认。 */
    "_useGlobalRange": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `useGlobalRange` 配置字段；准确战斗语义待确认。"),
    /** AssignAttributeSumInRangeToBlackboardAction 的 `useTargetRangeInsteadOfSource` 配置字段；准确战斗语义待确认。 */
    "_useTargetRangeInsteadOfSource": z.boolean().describe("AssignAttributeSumInRangeToBlackboardAction 的 `useTargetRangeInsteadOfSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeSumInRangeToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAttributeSumInRangeToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignAttributeToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignAttributeToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ABILITY_RANGE_FORWARD_EXTEND","ATK","ATTACK_SPEED","BLOCK_CNT","COST","DEF","MAGIC_RESISTANCE","MASS_LEVEL","MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignAttributeToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。 */
    "_scaleVar": z.string().describe("AssignAttributeToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignAttributeToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignAttributeToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBackwardTileToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBackwardTileToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBackwardTileToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBackwardTileToBBAction 的 `checkPassable` 配置字段；准确战斗语义待确认。 */
    "_checkPassable": z.boolean().describe("AssignBackwardTileToBBAction 的 `checkPassable` 配置字段；准确战斗语义待确认。"),
    /** AssignBackwardTileToBBAction 的 `dist` 配置字段；准确战斗语义待确认。 */
    "_dist": z.number().describe("AssignBackwardTileToBBAction 的 `dist` 配置字段；准确战斗语义待确认。"),
    /** AssignBackwardTileToBBAction 的 `distanceCustomKey` 配置字段；准确战斗语义待确认。 */
    "_distanceCustomKey": z.null().describe("AssignBackwardTileToBBAction 的 `distanceCustomKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBackwardTileToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBackwardTileToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBranchStartLocationToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBranchStartLocationToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBranchStartLocationToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBranchStartLocationToBlackboardAction 的 `actionIndex` 配置字段；准确战斗语义待确认。 */
    "_actionIndex": z.number().describe("AssignBranchStartLocationToBlackboardAction 的 `actionIndex` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignBranchStartLocationToBlackboardAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.string().describe("AssignBranchStartLocationToBlackboardAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBranchStartLocationToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBranchStartLocationToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBuffBlackboardAction 的 `assignFirstBuff` 配置字段；准确战斗语义待确认。 */
    "_assignFirstBuff": z.boolean().describe("AssignBuffBlackboardAction 的 `assignFirstBuff` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
    "_assignString": z.boolean().describe("AssignBuffBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `assignToBuffSourceType` 配置字段；准确战斗语义待确认。 */
    "_assignToBuffSourceType": z.enum(["BUFF_SOURCE","TARGET"]).describe("AssignBuffBlackboardAction 的 `assignToBuffSourceType` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `assignToMainBuff` 配置字段；准确战斗语义待确认。 */
    "_assignToMainBuff": z.boolean().describe("AssignBuffBlackboardAction 的 `assignToMainBuff` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `buffKeyAssignFrom` 配置字段；准确战斗语义待确认。 */
    "_buffKeyAssignFrom": z.union([
                                z.null(),
                                z.string(),
                              ]).describe("AssignBuffBlackboardAction 的 `buffKeyAssignFrom` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `checkAssignToBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkAssignToBuffSource": z.boolean().describe("AssignBuffBlackboardAction 的 `checkAssignToBuffSource` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.number().describe("AssignBuffBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AssignBuffBlackboardAction 的 `useCurBuffBB` 配置字段；准确战斗语义待确认。 */
    "_useCurBuffBB": z.boolean().describe("AssignBuffBlackboardAction 的 `useCurBuffBB` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("AssignBuffBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffBlackboardFromAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBuffBlackboardFromAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AssignBuffBlackboardFromAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardFromAbilityAction 的 `assignedBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_assignedBlackboardKey": z.string().describe("AssignBuffBlackboardFromAbilityAction 的 `assignedBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardFromAbilityAction 的 `blackboardKeyInAbility` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeyInAbility": z.string().describe("AssignBuffBlackboardFromAbilityAction 的 `blackboardKeyInAbility` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AssignBuffBlackboardFromAbilityAction 的 `useTargetHost` 配置字段；准确战斗语义待确认。 */
    "_useTargetHost": z.boolean().describe("AssignBuffBlackboardFromAbilityAction 的 `useTargetHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffBlackboardFromAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromOthers, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffBlackboardFromOthersActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromOthers, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("读取或写入战斗黑板的参数键。"),
    /** AssignBuffBlackboardFromOthersAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("AssignBuffBlackboardFromOthersAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffBlackboardFromOthersAction 的 `filterBuffSource` 配置字段；准确战斗语义待确认。 */
    "_filterBuffSource": z.boolean().describe("AssignBuffBlackboardFromOthersAction 的 `filterBuffSource` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AssignBuffBlackboardFromOthersAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("AssignBuffBlackboardFromOthersAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromOthers, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffBlackboardFromOthersAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffCountIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffCountIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffCountIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBuffCountIntoBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignBuffCountIntoBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffCountIntoBlackboardAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("AssignBuffCountIntoBlackboardAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffCountIntoBlackboardAction 的 `getStackCountFromFirstBuff` 配置字段；准确战斗语义待确认。 */
    "_getStackCountFromFirstBuff": z.boolean().describe("AssignBuffCountIntoBlackboardAction 的 `getStackCountFromFirstBuff` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffCountIntoBlackboardAction 的 `showOverrideWarning` 配置字段；准确战斗语义待确认。 */
    "_showOverrideWarning": z.boolean().describe("AssignBuffCountIntoBlackboardAction 的 `showOverrideWarning` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** AssignBuffCountIntoBlackboardAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。 */
    "_stackCountKey": z.string().describe("AssignBuffCountIntoBlackboardAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffCountIntoBlackboardAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。 */
    "_stackCountPeeling": z.number().describe("AssignBuffCountIntoBlackboardAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** AssignBuffCountIntoBlackboardAction 的 `useValidStackCount` 配置字段；准确战斗语义待确认。 */
    "_useValidStackCount": z.boolean().describe("AssignBuffCountIntoBlackboardAction 的 `useValidStackCount` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffCountIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffCountIntoBlackboardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA17Schema = z
  .discriminatedUnion("$type", [AssignAttributeDefaultValueToBlackboardActionSchema, AssignAttributeRawDataIntoBlackboardActionSchema, AssignAttributeSumInRangeToBlackboardActionSchema, AssignAttributeToBBActionSchema, AssignBackwardTileToBBActionSchema, AssignBranchStartLocationToBlackboardActionSchema, AssignBuffBlackboardActionSchema, AssignBuffBlackboardFromAbilityActionSchema, AssignBuffBlackboardFromOthersActionSchema, AssignBuffCountIntoBlackboardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA17>;
