/**
 * buff_template_data 的 V 组 Action Zod Schema。
 */

import { z } from "zod";

import type { VerifyTargetWithCertainSourceAction, VertifyTargetAction, BattleActionV01 } from "../../../../types/buff-template-data/actions/v/actions-v-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+VerifyTargetWithCertainSource, Assembly-CSharp 的严格 Action 数据。
 */
export const VerifyTargetWithCertainSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+VerifyTargetWithCertainSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["ALLY","ENEMY"]).describe("Action 读取的来源实体类型。"),
    /** VerifyTargetWithCertainSourceAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("VerifyTargetWithCertainSourceAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** VerifyTargetWithCertainSourceAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** VerifyTargetWithCertainSourceAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("VerifyTargetWithCertainSourceAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.enum(["E_NUM","STUNNED"]).describe("VerifyTargetWithCertainSourceAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("VerifyTargetWithCertainSourceAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.enum(["MOTION_TARGET_FREE","STUNNED"]).describe("VerifyTargetWithCertainSourceAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("VerifyTargetWithCertainSourceAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER"]).describe("VerifyTargetWithCertainSourceAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("VerifyTargetWithCertainSourceAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","DEFAULT, TRAP_OR_ITEM, OBSTACLE"]).describe("VerifyTargetWithCertainSourceAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("VerifyTargetWithCertainSourceAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","ENEMY"]).describe("VerifyTargetWithCertainSourceAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** VerifyTargetWithCertainSourceAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("VerifyTargetWithCertainSourceAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("VerifyTargetWithCertainSourceAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+VerifyTargetWithCertainSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<VerifyTargetWithCertainSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+VertifyTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const VertifyTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+VertifyTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** VertifyTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","TARGET"]).describe("VertifyTargetAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** VertifyTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MAINBUFF_SOURCE","MODIFIER_SOURCE","TARGET"]).describe("VertifyTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** VertifyTargetAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** VertifyTargetAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("VertifyTargetAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.enum(["INVISIBLE","STUNNED"]).describe("VertifyTargetAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("VertifyTargetAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("VertifyTargetAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("VertifyTargetAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("VertifyTargetAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("VertifyTargetAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("VertifyTargetAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("VertifyTargetAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("VertifyTargetAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("VertifyTargetAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("VertifyTargetAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("VertifyTargetAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER"]).describe("VertifyTargetAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("VertifyTargetAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("VertifyTargetAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","WALK_ONLY"]).describe("VertifyTargetAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","BOTH_ALLY_AND_ENEMY","ENEMY"]).describe("VertifyTargetAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** VertifyTargetAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.enum(["ENEMY","NONE"]).describe("VertifyTargetAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("VertifyTargetAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+VertifyTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<VertifyTargetAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionV01Schema = z
  .discriminatedUnion("$type", [VerifyTargetWithCertainSourceActionSchema, VertifyTargetActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionV01>;
