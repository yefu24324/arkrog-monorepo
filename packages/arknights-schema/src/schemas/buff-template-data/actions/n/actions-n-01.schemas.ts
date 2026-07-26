/**
 * buff_template_data 的 N 组 Action Zod Schema。
 */

import { z } from "zod";

import type { NecromancerAssignTargetTileToSelectorAction, NoSourceDamageAction, NoSourceDamageNewAction, NoSourceGlobalDamageScaleByBuffCntAction, BattleActionN01 } from "../../../../types/buff-template-data/actions/n/actions-n-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+NecromancerAssignTargetTileToSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const NecromancerAssignTargetTileToSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+NecromancerAssignTargetTileToSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** NecromancerAssignTargetTileToSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("NecromancerAssignTargetTileToSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** NecromancerAssignTargetTileToSelectorAction 的 `selectorOwnerType` 配置字段；准确战斗语义待确认。 */
    "_selectorOwnerType": z.literal("BUFF_SOURCE").describe("NecromancerAssignTargetTileToSelectorAction 的 `selectorOwnerType` 配置字段；准确战斗语义待确认。"),
    /** NecromancerAssignTargetTileToSelectorAction 的 `tileTargetType` 配置字段；准确战斗语义待确认。 */
    "_tileTargetType": z.literal("BUFF_OWNER").describe("NecromancerAssignTargetTileToSelectorAction 的 `tileTargetType` 配置字段；准确战斗语义待确认。"),
    /** NecromancerAssignTargetTileToSelectorAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
    "_useFirstActiveAbility": z.boolean().describe("NecromancerAssignTargetTileToSelectorAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+NecromancerAssignTargetTileToSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<NecromancerAssignTargetTileToSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+NoSourceDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const NoSourceDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+NoSourceDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** NoSourceDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["BUFF","NONE","NORMAL","SPLASH"]).describe("NoSourceDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("NoSourceDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["ELEMENT","MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** NoSourceDamageAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。 */
    "_damageWithoutModify": z.boolean().describe("NoSourceDamageAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreCancelReasonMask": z.enum(["MISS, BLOCKED, BLOCKED_WITH_DAMAGE_NUMBER","MISS, BLOCKED, BLOCKED_WITH_DAMAGE_NUMBER, HIT_FAILED","NONE"]).describe("NoSourceDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("NoSourceDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `instantKillLikeDamage` 配置字段；准确战斗语义待确认。 */
    "_instantKillLikeDamage": z.boolean().describe("NoSourceDamageAction 的 `instantKillLikeDamage` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvDamage": z.boolean().describe("NoSourceDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `isNotChangeableValue` 配置字段；准确战斗语义待确认。 */
    "_isNotChangeableValue": z.boolean().describe("NoSourceDamageAction 的 `isNotChangeableValue` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("NoSourceDamageAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("NoSourceDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierByKey": z.boolean().describe("NoSourceDamageAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierKey": z.string().describe("NoSourceDamageAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+NoSourceDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<NoSourceDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+NoSourceDamageNew, Assembly-CSharp 的严格 Action 数据。
 */
export const NoSourceDamageNewActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+NoSourceDamageNew, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** NoSourceDamageNewAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["NONE","NORMAL"]).describe("NoSourceDamageNewAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("NoSourceDamageNewAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** NoSourceDamageNewAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。 */
    "_damageWithoutModify": z.boolean().describe("NoSourceDamageNewAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreCancelReasonMask": z.literal("NONE").describe("NoSourceDamageNewAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("NoSourceDamageNewAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `instantKillLikeDamage` 配置字段；准确战斗语义待确认。 */
    "_instantKillLikeDamage": z.boolean().describe("NoSourceDamageNewAction 的 `instantKillLikeDamage` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvDamage": z.boolean().describe("NoSourceDamageNewAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("NoSourceDamageNewAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierByKey": z.boolean().describe("NoSourceDamageNewAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。"),
    /** NoSourceDamageNewAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
    "_multiplierKey": z.string().describe("NoSourceDamageNewAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+NoSourceDamageNew, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<NoSourceDamageNewAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+NoSourceGlobalDamageScaleByBuffCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const NoSourceGlobalDamageScaleByBuffCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+NoSourceGlobalDamageScaleByBuffCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("BUFF").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PURE").describe("本次伤害使用的伤害类型。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。 */
    "_damageWithoutModify": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvDamage": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
    "_noSourceDamage": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** NoSourceGlobalDamageScaleByBuffCntAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("NoSourceGlobalDamageScaleByBuffCntAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+NoSourceGlobalDamageScaleByBuffCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<NoSourceGlobalDamageScaleByBuffCntAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionN01Schema = z
  .discriminatedUnion("$type", [NecromancerAssignTargetTileToSelectorActionSchema, NoSourceDamageActionSchema, NoSourceDamageNewActionSchema, NoSourceGlobalDamageScaleByBuffCntActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionN01>;
