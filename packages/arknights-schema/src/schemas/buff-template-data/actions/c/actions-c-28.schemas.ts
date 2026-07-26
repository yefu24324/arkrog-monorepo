/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateEffectForUnitsFunLiveModeOnlyAction, CreateEffectHookProjectileEffectAction, CreateEffectScaledAction, CreateEffectToSurroundingTilesAction, CreateFirewallVulnerabilityButtonAction, CreateGlobalBuffByKeyAction, CreateLineEffectAction, CreateNoSourceBuffAction, CreatePreviewCursorAction, CreateRandomEffectAction, BattleActionC28 } from "../../../../types/buff-template-data/actions/c/actions-c-28.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectForUnitsFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateEffectForUnitsFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateEffectForUnitsFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `dangerousEffectBuff` 配置字段；准确战斗语义待确认。 */
    "_dangerousEffectBuff": z.strictObject({
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": z.strictObject({
                                                        /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalAntis": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                        /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalComboImmunes": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                        /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalCombos": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                        /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalFlags": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                        /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalImmunes": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                        /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                        "attributeModifiers": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                      }).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": z.string().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": z.literal("INFINITY").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": z.string().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": z.literal("DEFAULT").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": z.literal("AUTOMATIC").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                }).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `dangerousEffectBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `normalEffectBuff` 配置字段；准确战斗语义待确认。 */
    "_normalEffectBuff": z.strictObject({
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                               "attributes": z.strictObject({
                                                     /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                     "abnormalAntis": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                     /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                     "abnormalComboImmunes": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                     /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                     "abnormalCombos": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                     /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                     "abnormalFlags": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                     /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                     "abnormalImmunes": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                     /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                     "attributeModifiers": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                   }).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                               "audioSignal": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                               "blackboard": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                               "buffKey": z.string().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                               "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                               "disableOverride": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                               "durationKey": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                               "enableInitDirectionFromSource": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                               "firstTriggerInterval": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                               "independentCharacterSource": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                               "isDamageMissable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                               "isDurableBuff": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                               "isFreezable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                               "isLevitatable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                               "isSilenceable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                               "isStunnable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                               "lifeTime": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                               "lifeTimeType": z.literal("INFINITY").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                               "loadFromDB": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                               "maxStackCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                               "maxValidStackCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                               /** 模板处理战斗事件时使用的优先级。 */
                               "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                               "overrideEffectKey": z.string().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                               "overrideKey": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                               "overrideOnEventPriority": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                               "overrideType": z.literal("UNIQUE").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                               "priority": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                               "priorityBBKeys": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                               "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                               "statusResistable": z.literal("AUTOMATIC").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                               "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                               "takeSnapshotWhenExtend": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                               /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                               "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                               "triggerCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                               "triggerInterval": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                               "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                               "waitFirstTriggerInterval": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                             }).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `normalEffectBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `onlyCreateDangerousEffect` 配置字段；准确战斗语义待确认。 */
    "_onlyCreateDangerousEffect": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `onlyCreateDangerousEffect` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `rareEffectBuff` 配置字段；准确战斗语义待确认。 */
    "_rareEffectBuff": z.strictObject({
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                             "attributes": z.strictObject({
                                                   /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalAntis": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                   /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalComboImmunes": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                   /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalCombos": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                   /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalFlags": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                   /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalImmunes": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                   /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                   "attributeModifiers": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                 }).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                             "audioSignal": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                             "blackboard": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                             "buffKey": z.string().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                             "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                             "disableOverride": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                             "durationKey": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                             "enableInitDirectionFromSource": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                             "firstTriggerInterval": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                             "independentCharacterSource": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                             "isDamageMissable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                             "isDurableBuff": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                             "isFreezable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                             "isLevitatable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                             "isSilenceable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                             "isStunnable": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                             "lifeTime": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                             "lifeTimeType": z.literal("INFINITY").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                             "loadFromDB": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                             "maxStackCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                             "maxValidStackCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                             /** 模板处理战斗事件时使用的优先级。 */
                             "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                             "overrideEffectKey": z.string().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                             "overrideKey": z.null().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                             "overrideOnEventPriority": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                             "overrideType": z.literal("DEFAULT").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                             "priority": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                             "priorityBBKeys": z.array(z.never()).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                             "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                             "statusResistable": z.literal("AUTOMATIC").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                             "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                             "takeSnapshotWhenExtend": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                             /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                             "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                             "triggerCnt": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                             "triggerInterval": z.number().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                             "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                             /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                             "waitFirstTriggerInterval": z.boolean().describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           }).describe("CreateEffectForUnitsFunLiveModeOnlyAction 的 `rareEffectBuff` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectForUnitsFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateEffectForUnitsFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectHookProjectileEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateEffectHookProjectileEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateEffectHookProjectileEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CreateEffectHookProjectileEffectAction 的 `constDirection` 配置字段；准确战斗语义待确认。 */
    "_constDirection": z.string().describe("CreateEffectHookProjectileEffectAction 的 `constDirection` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `createEffectHoldBySource` 配置字段；准确战斗语义待确认。 */
    "_createEffectHoldBySource": z.boolean().describe("CreateEffectHookProjectileEffectAction 的 `createEffectHoldBySource` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateEffectHookProjectileEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `manualSetPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
    "_manualSetPlaybackSpeed": z.boolean().describe("CreateEffectHookProjectileEffectAction 的 `manualSetPlaybackSpeed` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `playbackSpeed` 配置字段；准确战斗语义待确认。 */
    "_playbackSpeed": z.number().describe("CreateEffectHookProjectileEffectAction 的 `playbackSpeed` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CreateEffectHookProjectileEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
    "_useAttackPlaybackSpeed": z.boolean().describe("CreateEffectHookProjectileEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `useConstDirection` 配置字段；准确战斗语义待确认。 */
    "_useConstDirection": z.boolean().describe("CreateEffectHookProjectileEffectAction 的 `useConstDirection` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。 */
    "_useSourceFaceVactor": z.boolean().describe("CreateEffectHookProjectileEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectHookProjectileEffectAction 的 `useSourceToTargetDirection` 配置字段；准确战斗语义待确认。 */
    "_useSourceToTargetDirection": z.boolean().describe("CreateEffectHookProjectileEffectAction 的 `useSourceToTargetDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectHookProjectileEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateEffectHookProjectileEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectScaled, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateEffectScaledActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateEffectScaled, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateEffectScaledAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateEffectScaledAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectScaledAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
    "_scaleKey": z.string().describe("CreateEffectScaledAction 的 `scaleKey` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectScaledAction 的 `scaleValue` 配置字段；准确战斗语义待确认。 */
    "_scaleValue": z.number().describe("CreateEffectScaledAction 的 `scaleValue` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectScaled, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateEffectScaledAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectToSurroundingTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateEffectToSurroundingTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateEffectToSurroundingTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateEffectToSurroundingTilesAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateEffectToSurroundingTilesAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectToSurroundingTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateEffectToSurroundingTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateFirewallVulnerabilityButton, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateFirewallVulnerabilityButtonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateFirewallVulnerabilityButton, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateFirewallVulnerabilityButtonAction 的 `createForAllWalls` 配置字段；准确战斗语义待确认。 */
    "_createForAllWalls": z.boolean().describe("CreateFirewallVulnerabilityButtonAction 的 `createForAllWalls` 配置字段；准确战斗语义待确认。"),
    /** CreateFirewallVulnerabilityButtonAction 的 `radiationSourceType` 配置字段；准确战斗语义待确认。 */
    "_radiationSourceType": z.enum(["BUFF_SOURCE","SOURCE"]).describe("CreateFirewallVulnerabilityButtonAction 的 `radiationSourceType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateFirewallVulnerabilityButton, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateFirewallVulnerabilityButtonAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateGlobalBuffByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateGlobalBuffByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateGlobalBuffByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateGlobalBuffByKeyAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffKey": z.string().describe("CreateGlobalBuffByKeyAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateGlobalBuffByKeyAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffPrefabKey": z.string().describe("CreateGlobalBuffByKeyAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。"),
    /** CreateGlobalBuffByKeyAction 的 `tryAddBuffImmediately` 配置字段；准确战斗语义待确认。 */
    "_tryAddBuffImmediately": z.boolean().describe("CreateGlobalBuffByKeyAction 的 `tryAddBuffImmediately` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateGlobalBuffByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateGlobalBuffByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateLineEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateLineEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateLineEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateLineEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateLineEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** CreateLineEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
    "_useAttackPlaybackSpeed": z.boolean().describe("CreateLineEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。"),
    /** CreateLineEffectAction 的 `useHostAsTarget` 配置字段；准确战斗语义待确认。 */
    "_useHostAsTarget": z.boolean().describe("CreateLineEffectAction 的 `useHostAsTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateLineEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。 */
    "_useSourceFaceVactor": z.boolean().describe("CreateLineEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。"),
    /** CreateLineEffectAction 的 `useTargetAsEffectSource` 配置字段；准确战斗语义待确认。 */
    "_useTargetAsEffectSource": z.boolean().describe("CreateLineEffectAction 的 `useTargetAsEffectSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateLineEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateLineEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateNoSourceBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateNoSourceBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateNoSourceBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateNoSourceBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateNoSourceBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateNoSourceBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateNoSourceBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateNoSourceBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateNoSourceBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateNoSourceBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateNoSourceBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateNoSourceBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateNoSourceBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateNoSourceBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateNoSourceBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateNoSourceBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateNoSourceBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateNoSourceBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateNoSourceBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateNoSourceBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateNoSourceBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateNoSourceBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateNoSourceBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateNoSourceBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateNoSourceBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateNoSourceBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateNoSourceBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateNoSourceBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateNoSourceBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateNoSourceBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateNoSourceBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateNoSourceBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateNoSourceBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateNoSourceBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateNoSourceBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateNoSourceBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateNoSourceBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateNoSourceBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateNoSourceBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateNoSourceBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateNoSourceBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","STACK"]).describe("CreateNoSourceBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateNoSourceBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateNoSourceBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateNoSourceBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateNoSourceBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateNoSourceBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateNoSourceBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateNoSourceBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateNoSourceBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateNoSourceBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateNoSourceBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateNoSourceBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateNoSourceBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","TARGET"]).describe("Buff 的接收实体类型。"),
    /** CreateNoSourceBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateNoSourceBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateNoSourceBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateNoSourceBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreatePreviewCursor, Assembly-CSharp 的严格 Action 数据。
 */
export const CreatePreviewCursorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreatePreviewCursor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreatePreviewCursorAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CreatePreviewCursorAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CreatePreviewCursorAction 的 `targetAsStart` 配置字段；准确战斗语义待确认。 */
    "_targetAsStart": z.boolean().describe("CreatePreviewCursorAction 的 `targetAsStart` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreatePreviewCursor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreatePreviewCursorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateRandomEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateRandomEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateRandomEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateRandomEffectAction 的 `effectKeys` 配置字段；准确战斗语义待确认。 */
    "_effectKeys": z.array(z.string()).describe("CreateRandomEffectAction 的 `effectKeys` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CreateRandomEffectAction 的 `useSourceFaceVector` 配置字段；准确战斗语义待确认。 */
    "_useSourceFaceVector": z.boolean().describe("CreateRandomEffectAction 的 `useSourceFaceVector` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateRandomEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateRandomEffectAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC28Schema = z
  .discriminatedUnion("$type", [CreateEffectForUnitsFunLiveModeOnlyActionSchema, CreateEffectHookProjectileEffectActionSchema, CreateEffectScaledActionSchema, CreateEffectToSurroundingTilesActionSchema, CreateFirewallVulnerabilityButtonActionSchema, CreateGlobalBuffByKeyActionSchema, CreateLineEffectActionSchema, CreateNoSourceBuffActionSchema, CreatePreviewCursorActionSchema, CreateRandomEffectActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC28>;
