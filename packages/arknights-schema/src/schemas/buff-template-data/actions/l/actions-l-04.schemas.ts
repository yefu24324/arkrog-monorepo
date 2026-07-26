/**
 * buff_template_data 的 L 组 Action Zod Schema。
 */

import { z } from "zod";

import type { LegionModeOnlyGainTrapAction, LegionModeOnlyGetGoldViaProfessionBuffCountAction, LegionModeOnlyGlobalDamageFromCardAction, LegionModeOnlyHasProfessionBuffAction, LegionModeOnlyMarkCardReturnToHandAction, LegionModeOnlyMarkCardUseOnceAction, LegionModeOnlyModifyCharacterOverlapStateAction, LegionModeOnlyModifyCharLevelDefaultAddCntAction, LegionModeOnlyModifyDangerUpgradeTimeScaleAction, LegionModeOnlyModifyMaxProfessionBuffCntAction, BattleActionL04 } from "../../../../types/buff-template-data/actions/l/actions-l-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGainTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyGainTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyGainTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyGainTrapAction 的 `extraCheckOnlyUseOnceList` 配置字段；准确战斗语义待确认。 */
    "_extraCheckOnlyUseOnceList": z.boolean().describe("LegionModeOnlyGainTrapAction 的 `extraCheckOnlyUseOnceList` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainTrapAction 的 `gainToCardType` 配置字段；准确战斗语义待确认。 */
    "_gainToCardType": z.enum(["PENDING","USING"]).describe("LegionModeOnlyGainTrapAction 的 `gainToCardType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainTrapAction 的 `onlyUseOnce` 配置字段；准确战斗语义待确认。 */
    "_onlyUseOnce": z.boolean().describe("LegionModeOnlyGainTrapAction 的 `onlyUseOnce` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainTrapAction 的 `releaseDiscardBeforeFind` 配置字段；准确战斗语义待确认。 */
    "_releaseDiscardBeforeFind": z.boolean().describe("LegionModeOnlyGainTrapAction 的 `releaseDiscardBeforeFind` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainTrapAction 的 `tokenKey` 配置字段；准确战斗语义待确认。 */
    "_tokenKey": z.string().describe("LegionModeOnlyGainTrapAction 的 `tokenKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGainTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyGainTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGetGoldViaProfessionBuffCount, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyGetGoldViaProfessionBuffCountActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyGetGoldViaProfessionBuffCount, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `goldPerBuff` 配置字段；准确战斗语义待确认。 */
    "_goldPerBuff": z.number().describe("LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `goldPerBuff` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `goldPerBuffKey` 配置字段；准确战斗语义待确认。 */
    "_goldPerBuffKey": z.string().describe("LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `goldPerBuffKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGetGoldViaProfessionBuffCount, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyGetGoldViaProfessionBuffCountAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGlobalDamageFromCard, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyGlobalDamageFromCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyGlobalDamageFromCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyGlobalDamageFromCardAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("NORMAL").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGlobalDamageFromCardAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** LegionModeOnlyGlobalDamageFromCardAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** LegionModeOnlyGlobalDamageFromCardAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGlobalDamageFromCardAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PURE").describe("本次伤害使用的伤害类型。"),
    /** LegionModeOnlyGlobalDamageFromCardAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("LegionModeOnlyGlobalDamageFromCardAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyGlobalDamageFromCardAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("LegionModeOnlyGlobalDamageFromCardAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("LegionModeOnlyGlobalDamageFromCardAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGlobalDamageFromCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyGlobalDamageFromCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyHasProfessionBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyHasProfessionBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyHasProfessionBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyHasProfessionBuffAction 的 `checkIsMaxLevel` 配置字段；准确战斗语义待确认。 */
    "_checkIsMaxLevel": z.boolean().describe("LegionModeOnlyHasProfessionBuffAction 的 `checkIsMaxLevel` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyHasProfessionBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyHasProfessionBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardReturnToHand, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyMarkCardReturnToHandActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardReturnToHand, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyMarkCardReturnToHandAction 的 `needKeepStatus` 配置字段；准确战斗语义待确认。 */
    "_needKeepStatus": z.boolean().describe("LegionModeOnlyMarkCardReturnToHandAction 的 `needKeepStatus` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardReturnToHand, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyMarkCardReturnToHandAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardUseOnce, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyMarkCardUseOnceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardUseOnce, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardUseOnce, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyMarkCardUseOnceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharacterOverlapState, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyModifyCharacterOverlapStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharacterOverlapState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyModifyCharacterOverlapStateAction 的 `noOverlap` 配置字段；准确战斗语义待确认。 */
    "_noOverlap": z.boolean().describe("LegionModeOnlyModifyCharacterOverlapStateAction 的 `noOverlap` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharacterOverlapState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyModifyCharacterOverlapStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharLevelDefaultAddCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyModifyCharLevelDefaultAddCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharLevelDefaultAddCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `addKey` 配置字段；准确战斗语义待确认。 */
    "_addKey": z.string().describe("LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `addKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `addValue` 配置字段；准确战斗语义待确认。 */
    "_addValue": z.number().describe("LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `addValue` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
    "_resetToDefault": z.boolean().describe("LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharLevelDefaultAddCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyModifyCharLevelDefaultAddCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyDangerUpgradeTimeScale, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyModifyDangerUpgradeTimeScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyModifyDangerUpgradeTimeScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `useBb` 配置字段；准确战斗语义待确认。 */
    "_useBb": z.boolean().describe("LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `useBb` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyDangerUpgradeTimeScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyModifyDangerUpgradeTimeScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyMaxProfessionBuffCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyModifyMaxProfessionBuffCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyModifyMaxProfessionBuffCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyModifyMaxProfessionBuffCntAction 的 `addValue` 配置字段；准确战斗语义待确认。 */
    "_addValue": z.number().describe("LegionModeOnlyModifyMaxProfessionBuffCntAction 的 `addValue` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyModifyMaxProfessionBuffCntAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
    "_resetToDefault": z.boolean().describe("LegionModeOnlyModifyMaxProfessionBuffCntAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyModifyMaxProfessionBuffCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyModifyMaxProfessionBuffCntAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionL04Schema = z
  .discriminatedUnion("$type", [LegionModeOnlyGainTrapActionSchema, LegionModeOnlyGetGoldViaProfessionBuffCountActionSchema, LegionModeOnlyGlobalDamageFromCardActionSchema, LegionModeOnlyHasProfessionBuffActionSchema, LegionModeOnlyMarkCardReturnToHandActionSchema, LegionModeOnlyMarkCardUseOnceActionSchema, LegionModeOnlyModifyCharacterOverlapStateActionSchema, LegionModeOnlyModifyCharLevelDefaultAddCntActionSchema, LegionModeOnlyModifyDangerUpgradeTimeScaleActionSchema, LegionModeOnlyModifyMaxProfessionBuffCntActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionL04>;
