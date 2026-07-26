/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AOEDamageAction, AOEElementDamageAction, AOEHealAction, ApplyCacheAtkDamageByBuffBlackBoardCntAction, ApplyCacheAtkDamageFromBuffAction, ApplyDeployCostPostDeltaAction, ApplyElectricAmplifyAction, ApplyElementDamageAction, ApplyElementDamageBasedOnDamageValueAction, ApplyElementHealAction, BattleActionA15 } from "../../../../types/buff-template-data/actions/a/actions-a-15.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AOEDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const AOEDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AOEDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AOEDamageAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("AOEDamageAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["ADDITION","BUFF","NORMAL","SPLASH"]).describe("AOEDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.union([
                    z.null(),
                    z.array(z.strictObject({
                            /** AOEDamageAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                            "attributes": z.strictObject({
                                                    /** AOEDamageAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalAntis": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.never()),
                                                                               ]).describe("AOEDamageAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                    /** AOEDamageAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalComboImmunes": z.union([
                                                                                        z.null(),
                                                                                        z.array(z.never()),
                                                                                      ]).describe("AOEDamageAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                    /** AOEDamageAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalCombos": z.union([
                                                                                  z.null(),
                                                                                  z.array(z.never()),
                                                                                ]).describe("AOEDamageAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                    /** AOEDamageAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalFlags": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.never()),
                                                                               ]).describe("AOEDamageAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                    /** AOEDamageAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalImmunes": z.union([
                                                                                   z.null(),
                                                                                   z.array(z.never()),
                                                                                 ]).describe("AOEDamageAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                    /** AOEDamageAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                    "attributeModifiers": z.union([
                                                                                      z.null(),
                                                                                      z.array(z.strictObject({
                                                                                                    /** 属性修改器指向的战斗属性。 */
                                                                                                    "attributeType": z.literal("MOVE_SPEED").describe("属性修改器指向的战斗属性。"),
                                                                                                    /** AOEDamageAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                    "fetchBaseValueFromSourceEntity": z.boolean().describe("AOEDamageAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                    "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                    /** AOEDamageAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                    "loadFromBlackboard": z.boolean().describe("AOEDamageAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                    /** 黑板参数的数值槽。 */
                                                                                                    "value": z.number().describe("黑板参数的数值槽。"),
                                                                                                  })),
                                                                                    ]).describe("AOEDamageAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                  }).describe("AOEDamageAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                            "audioSignal": z.union([
                                                     z.null(),
                                                     z.string(),
                                                   ]).describe("AOEDamageAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                            "blackboard": z.array(z.never()).describe("AOEDamageAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                            "buffKey": z.string().describe("AOEDamageAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                            "clearAllStackCntWhenTimeUp": z.boolean().describe("AOEDamageAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                            "disableOverride": z.boolean().describe("AOEDamageAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                            "durationKey": z.union([
                                                     z.null(),
                                                     z.string(),
                                                   ]).describe("AOEDamageAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                            "enableInitDirectionFromSource": z.boolean().describe("AOEDamageAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                            "firstTriggerInterval": z.number().describe("AOEDamageAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                            "independentCharacterSource": z.boolean().describe("AOEDamageAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                            "isDamageMissable": z.boolean().describe("AOEDamageAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                            "isDurableBuff": z.boolean().describe("AOEDamageAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                            "isFreezable": z.boolean().describe("AOEDamageAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                            "isLevitatable": z.boolean().describe("AOEDamageAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                            "isSilenceable": z.boolean().describe("AOEDamageAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                            "isStunnable": z.boolean().describe("AOEDamageAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                            "lifeTime": z.number().describe("AOEDamageAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                            "lifeTimeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("AOEDamageAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                            "loadFromDB": z.boolean().describe("AOEDamageAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                            "maxStackCnt": z.number().describe("AOEDamageAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                            "maxValidStackCnt": z.number().describe("AOEDamageAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                            /** 模板处理战斗事件时使用的优先级。 */
                            "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                            /** AOEDamageAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                            "overrideEffectKey": z.union([
                                                           z.null(),
                                                           z.string(),
                                                         ]).describe("AOEDamageAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                            "overrideKey": z.null().describe("AOEDamageAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                            "overrideOnEventPriority": z.boolean().describe("AOEDamageAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                            "overrideType": z.literal("DEFAULT").describe("AOEDamageAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                            "priority": z.number().describe("AOEDamageAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                            "priorityBBKeys": z.array(z.never()).describe("AOEDamageAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                            "refreshRemainingTimeWhenStackMax": z.boolean().describe("AOEDamageAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                            "statusResistable": z.literal("AUTOMATIC").describe("AOEDamageAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                            "stripBlackboardParamsWithBuffKey": z.boolean().describe("AOEDamageAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                            "takeSnapshotWhenExtend": z.boolean().describe("AOEDamageAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                            /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                            "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                            /** AOEDamageAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                            "triggerCnt": z.number().describe("AOEDamageAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                            "triggerInterval": z.number().describe("AOEDamageAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                            "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("AOEDamageAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                            "waitFirstTriggerInterval": z.boolean().describe("AOEDamageAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          })),
                  ]).describe("AOEDamageAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `checkTargetAlive` 配置字段；准确战斗语义待确认。 */
    "_checkTargetAlive": z.boolean().describe("AOEDamageAction 的 `checkTargetAlive` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
    "_createEffect": z.boolean().describe("AOEDamageAction 的 `createEffect` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("AOEDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `damageScale` 配置字段；准确战斗语义待确认。 */
    "_damageScale": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("AOEDamageAction 的 `damageScale` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** AOEDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("AOEDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
    "_filterType": z.enum(["ALL","HATRED_DES"]).describe("AOEDamageAction 的 `filterType` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `hitEffectKey` 配置字段；准确战斗语义待确认。 */
    "_hitEffectKey": z.union([
                           z.null(),
                           z.string(),
                         ]).describe("AOEDamageAction 的 `hitEffectKey` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `hitEffectUseSourceFaceTo` 配置字段；准确战斗语义待确认。 */
    "_hitEffectUseSourceFaceTo": z.boolean().describe("AOEDamageAction 的 `hitEffectUseSourceFaceTo` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `isNoSourceDamage` 配置字段；准确战斗语义待确认。 */
    "_isNoSourceDamage": z.boolean().describe("AOEDamageAction 的 `isNoSourceDamage` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `maxTargetCountKey` 配置字段；准确战斗语义待确认。 */
    "_maxTargetCountKey": z.string().describe("AOEDamageAction 的 `maxTargetCountKey` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("AOEDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `radius` 配置字段；准确战斗语义待确认。 */
    "_radius": z.number().describe("AOEDamageAction 的 `radius` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("AOEDamageAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `sourceApplyWay` 配置字段；准确战斗语义待确认。 */
    "_sourceApplyWay": z.enum(["ALL","MELEE","NONE","RANGED"]).describe("AOEDamageAction 的 `sourceApplyWay` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** AOEDamageAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** AOEDamageAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("AOEDamageAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.enum(["E_NUM","INVISIBLE","STUNNED"]).describe("AOEDamageAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("AOEDamageAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("AOEDamageAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("AOEDamageAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("AOEDamageAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.enum(["CAMOUFLAGE","STUNNED"]).describe("AOEDamageAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("AOEDamageAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("AOEDamageAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("AOEDamageAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("AOEDamageAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("AOEDamageAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("AOEDamageAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER"]).describe("AOEDamageAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.enum(["DAMAGE","NONE"]).describe("AOEDamageAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","DEFAULT, TRAP_OR_ITEM","NONE"]).describe("AOEDamageAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","FLY_ONLY","NONE","WALK_ONLY"]).describe("AOEDamageAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","BOTH_ALLY_AND_ENEMY","ENEMY","NONE"]).describe("AOEDamageAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** AOEDamageAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("AOEDamageAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("AOEDamageAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AOEDamageAction 的 `useAbilitySelector` 配置字段；准确战斗语义待确认。 */
    "_useAbilitySelector": z.boolean().describe("AOEDamageAction 的 `useAbilitySelector` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `useAbilitySourceSide` 配置字段；准确战斗语义待确认。 */
    "_useAbilitySourceSide": z.boolean().describe("AOEDamageAction 的 `useAbilitySourceSide` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `useDamageFromBB` 配置字段；准确战斗语义待确认。 */
    "_useDamageFromBB": z.boolean().describe("AOEDamageAction 的 `useDamageFromBB` 配置字段；准确战斗语义待确认。"),
    /** AOEDamageAction 的 `useRadius` 配置字段；准确战斗语义待确认。 */
    "_useRadius": z.boolean().describe("AOEDamageAction 的 `useRadius` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AOEDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AOEDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AOEElementDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const AOEElementDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AOEElementDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AOEElementDamageAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
    "_elementDamageType": z.enum(["DARK","FIRE"]).describe("AOEElementDamageAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。"),
    /** AOEElementDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("AOEElementDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** AOEElementDamageAction 的 `fixedEpDamage` 配置字段；准确战斗语义待确认。 */
    "_fixedEpDamage": z.number().describe("AOEElementDamageAction 的 `fixedEpDamage` 配置字段；准确战斗语义待确认。"),
    /** AOEElementDamageAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。 */
    "_fixedEpDamageKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("AOEElementDamageAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。"),
    /** AOEElementDamageAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。 */
    "_isFixedEpDamage": z.boolean().describe("AOEElementDamageAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。"),
    /** AOEElementDamageAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("AOEElementDamageAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** AOEElementDamageAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** AOEElementDamageAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("AOEElementDamageAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("AOEElementDamageAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("AOEElementDamageAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("AOEElementDamageAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("AOEElementDamageAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("AOEElementDamageAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("AOEElementDamageAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("AOEElementDamageAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("AOEElementDamageAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("AOEElementDamageAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("AOEElementDamageAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("AOEElementDamageAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("AOEElementDamageAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER"]).describe("AOEElementDamageAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.enum(["EP_DAMAGE","NONE"]).describe("AOEElementDamageAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("AOEElementDamageAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("AOEElementDamageAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("AOEElementDamageAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** AOEElementDamageAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("AOEElementDamageAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("AOEElementDamageAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AOEElementDamageAction 的 `useRadius` 配置字段；准确战斗语义待确认。 */
    "_useRadius": z.boolean().describe("AOEElementDamageAction 的 `useRadius` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AOEElementDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AOEElementDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AOEHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const AOEHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AOEHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AOEHealAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
    "_createEffect": z.boolean().describe("AOEHealAction 的 `createEffect` 配置字段；准确战斗语义待确认。"),
    /** AOEHealAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("AOEHealAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** AOEHealAction 的 `healEffectKey` 配置字段；准确战斗语义待确认。 */
    "_healEffectKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("AOEHealAction 的 `healEffectKey` 配置字段；准确战斗语义待确认。"),
    /** AOEHealAction 的 `healScale` 配置字段；准确战斗语义待确认。 */
    "_healScale": z.string().describe("AOEHealAction 的 `healScale` 配置字段；准确战斗语义待确认。"),
    /** AOEHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("AOEHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** AOEHealAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("AOEHealAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** AOEHealAction 的 `sourceSideType` 配置字段；准确战斗语义待确认。 */
    "_sourceSideType": z.enum(["ALLY","ENEMY"]).describe("AOEHealAction 的 `sourceSideType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** AOEHealAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** AOEHealAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("AOEHealAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("AOEHealAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("AOEHealAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("AOEHealAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("AOEHealAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("AOEHealAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("AOEHealAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("AOEHealAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("AOEHealAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("AOEHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("AOEHealAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("AOEHealAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("AOEHealAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER"]).describe("AOEHealAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.enum(["HEAL","NONE"]).describe("AOEHealAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("AOEHealAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("AOEHealAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ALLY").describe("AOEHealAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** AOEHealAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("AOEHealAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("AOEHealAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AOEHealAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
    "_useAttackRange": z.boolean().describe("AOEHealAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AOEHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AOEHealAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageByBuffBlackBoardCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyCacheAtkDamageByBuffBlackBoardCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageByBuffBlackBoardCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.literal("NONE").describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("BUFF").describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `buffCnt` 配置字段；准确战斗语义待确认。 */
    "_buffCnt": z.string().describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `buffCnt` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `buffMaxCnt` 配置字段；准确战斗语义待确认。 */
    "_buffMaxCnt": z.string().describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `buffMaxCnt` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。 */
    "_damageScaleKey": z.string().describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("MAGICAL").describe("本次伤害使用的伤害类型。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `forceDisplayDamageNum` 配置字段；准确战斗语义待确认。 */
    "_forceDisplayDamageNum": z.boolean().describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `forceDisplayDamageNum` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `useDynamicAttackType` 配置字段；准确战斗语义待确认。 */
    "_useDynamicAttackType": z.boolean().describe("ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `useDynamicAttackType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageByBuffBlackBoardCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyCacheAtkDamageByBuffBlackBoardCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageFromBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyCacheAtkDamageFromBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageFromBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyCacheAtkDamageFromBuffAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.enum(["MELEE","NONE","RANGED"]).describe("ApplyCacheAtkDamageFromBuffAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageFromBuffAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("BUFF").describe("ApplyCacheAtkDamageFromBuffAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageFromBuffAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。 */
    "_damageScaleKey": z.string().describe("ApplyCacheAtkDamageFromBuffAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL"]).describe("本次伤害使用的伤害类型。"),
    /** ApplyCacheAtkDamageFromBuffAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("ApplyCacheAtkDamageFromBuffAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyCacheAtkDamageFromBuffAction 的 `useDynamicAttackType` 配置字段；准确战斗语义待确认。 */
    "_useDynamicAttackType": z.boolean().describe("ApplyCacheAtkDamageFromBuffAction 的 `useDynamicAttackType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageFromBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyCacheAtkDamageFromBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyDeployCostPostDelta, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyDeployCostPostDeltaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyDeployCostPostDelta, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyDeployCostPostDeltaAction 的 `costSourceType` 配置字段；准确战斗语义待确认。 */
    "_costSourceType": z.literal("BUFF_OWNER").describe("ApplyDeployCostPostDeltaAction 的 `costSourceType` 配置字段；准确战斗语义待确认。"),
    /** ApplyDeployCostPostDeltaAction 的 `preCalcCardCost` 配置字段；准确战斗语义待确认。 */
    "_preCalcCardCost": z.boolean().describe("ApplyDeployCostPostDeltaAction 的 `preCalcCardCost` 配置字段；准确战斗语义待确认。"),
    /** ApplyDeployCostPostDeltaAction 的 `willNotDecreaseIfCurrentLe0` 配置字段；准确战斗语义待确认。 */
    "_willNotDecreaseIfCurrentLe0": z.boolean().describe("ApplyDeployCostPostDeltaAction 的 `willNotDecreaseIfCurrentLe0` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyDeployCostPostDelta, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyDeployCostPostDeltaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyElectricAmplify, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyElectricAmplifyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyElectricAmplify, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyElectricAmplifyAction 的 `add` 配置字段；准确战斗语义待确认。 */
    "_add": z.boolean().describe("ApplyElectricAmplifyAction 的 `add` 配置字段；准确战斗语义待确认。"),
    /** ApplyElectricAmplifyAction 的 `amplitude` 配置字段；准确战斗语义待确认。 */
    "_amplitude": z.strictObject({
                        /** ApplyElectricAmplifyAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                        "_serializedValue": z.number().describe("ApplyElectricAmplifyAction 的 `serializedValue` 配置字段；准确战斗语义待确认。"),
                      }).describe("ApplyElectricAmplifyAction 的 `amplitude` 配置字段；准确战斗语义待确认。"),
    /** ApplyElectricAmplifyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ApplyElectricAmplifyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyElectricAmplify, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyElectricAmplifyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyElementDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyElementDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyElementDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyElementDamageAction 的 `baseOnEnemyHostAtk` 配置字段；准确战斗语义待确认。 */
    "_baseOnEnemyHostAtk": z.boolean().describe("ApplyElementDamageAction 的 `baseOnEnemyHostAtk` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `baseOnHostAtk` 配置字段；准确战斗语义待确认。 */
    "_baseOnHostAtk": z.boolean().describe("ApplyElementDamageAction 的 `baseOnHostAtk` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("ApplyElementDamageAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("ApplyElementDamageAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
    "_elementDamageType": z.enum(["DARK","FIRE","NONE","SANITY","WATER"]).describe("ApplyElementDamageAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `epDamageScale` 配置字段；准确战斗语义待确认。 */
    "_epDamageScale": z.string().describe("ApplyElementDamageAction 的 `epDamageScale` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `fixedEpDamage` 配置字段；准确战斗语义待确认。 */
    "_fixedEpDamage": z.number().describe("ApplyElementDamageAction 的 `fixedEpDamage` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。 */
    "_fixedEpDamageKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("ApplyElementDamageAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `fixedEpDamageScale` 配置字段；准确战斗语义待确认。 */
    "_fixedEpDamageScale": z.string().describe("ApplyElementDamageAction 的 `fixedEpDamageScale` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `forceUseProjectileCachedAtk` 配置字段；准确战斗语义待确认。 */
    "_forceUseProjectileCachedAtk": z.boolean().describe("ApplyElementDamageAction 的 `forceUseProjectileCachedAtk` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `isEnvElementDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvElementDamage": z.boolean().describe("ApplyElementDamageAction 的 `isEnvElementDamage` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。 */
    "_isFixedEpDamage": z.boolean().describe("ApplyElementDamageAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `loadElementTypeFromBb` 配置字段；准确战斗语义待确认。 */
    "_loadElementTypeFromBb": z.boolean().describe("ApplyElementDamageAction 的 `loadElementTypeFromBb` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `multiplyWithBuffValidStackCnt` 配置字段；准确战斗语义待确认。 */
    "_multiplyWithBuffValidStackCnt": z.boolean().describe("ApplyElementDamageAction 的 `multiplyWithBuffValidStackCnt` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("ApplyElementDamageAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyElementDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyElementDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyElementDamageBasedOnDamageValue, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyElementDamageBasedOnDamageValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyElementDamageBasedOnDamageValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyElementDamageBasedOnDamageValueAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.enum(["ELEMENT","MAGICAL","NONE"]).describe("ApplyElementDamageBasedOnDamageValueAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageBasedOnDamageValueAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
    "_elementType": z.enum(["DARK","FIRE","SANITY"]).describe("ApplyElementDamageBasedOnDamageValueAction 的 `elementType` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementDamageBasedOnDamageValueAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("ApplyElementDamageBasedOnDamageValueAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["MAIN_TARGET","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyElementDamageBasedOnDamageValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyElementDamageBasedOnDamageValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ApplyElementHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const ApplyElementHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ApplyElementHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ApplyElementHealAction 的 `healTarget` 配置字段；准确战斗语义待确认。 */
    "_healTarget": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("ApplyElementHealAction 的 `healTarget` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementHealAction 的 `isCont` 配置字段；准确战斗语义待确认。 */
    "_isCont": z.boolean().describe("ApplyElementHealAction 的 `isCont` 配置字段；准确战斗语义待确认。"),
    /** ApplyElementHealAction 的 `maxEpHeal` 配置字段；准确战斗语义待确认。 */
    "_maxEpHeal": z.boolean().describe("ApplyElementHealAction 的 `maxEpHeal` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ApplyElementHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ApplyElementHealAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA15Schema = z
  .discriminatedUnion("$type", [AOEDamageActionSchema, AOEElementDamageActionSchema, AOEHealActionSchema, ApplyCacheAtkDamageByBuffBlackBoardCntActionSchema, ApplyCacheAtkDamageFromBuffActionSchema, ApplyDeployCostPostDeltaActionSchema, ApplyElectricAmplifyActionSchema, ApplyElementDamageActionSchema, ApplyElementDamageBasedOnDamageValueActionSchema, ApplyElementHealActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA15>;
