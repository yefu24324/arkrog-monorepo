/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateBuffToFootballAction, CreateBuffToHostAction, CreateBuffToTeammateAction, CreateBuffToTokenAction, CreateBuffToUidAction, CreateBuffToUnitIdAction, CreateBuffToUnitInCurrentMapLayerAction, CreateBuffUseAbilitySelectorAction, CreateBuffUseCardUidAsSourceAction, CreateBuffUseHostAsSourceAction, BattleActionC24 } from "../../../../types/buff-template-data/actions/c/actions-c-24.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToFootball, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToFootballActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToFootball, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToFootballAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffToFootballAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffToFootballAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.array(z.never()).describe("CreateBuffToFootballAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToFootballAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffToFootballAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToFootballAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.array(z.never()).describe("CreateBuffToFootballAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToFootballAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.array(z.never()).describe("CreateBuffToFootballAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToFootballAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.array(z.never()).describe("CreateBuffToFootballAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToFootballAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.array(z.never()).describe("CreateBuffToFootballAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffToFootballAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("CreateBuffToFootballAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("CreateBuffToFootballAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffToFootballAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToFootballAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffToFootballAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.string().describe("CreateBuffToFootballAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToFootballAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffToFootballAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffToFootballAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffToFootballAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffToFootballAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffToFootballAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffToFootballAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffToFootballAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffToFootballAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffToFootballAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.literal("LIMITED").describe("CreateBuffToFootballAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffToFootballAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffToFootballAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffToFootballAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffToFootballAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.null().describe("CreateBuffToFootballAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("CreateBuffToFootballAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffToFootballAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.literal("DEFAULT").describe("CreateBuffToFootballAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffToFootballAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("CreateBuffToFootballAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToFootballAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToFootballAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToFootballAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToFootballAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffToFootballAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffToFootballAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffToFootballAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.literal("LIMITED").describe("CreateBuffToFootballAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToFootballAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToFootballAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffToFootballAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToFootballAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToFootballAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToFootballAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToFootballAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToFootball, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToFootballAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToHost, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToHostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToHost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToHostAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffToHostAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffToHostAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffToHostAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToHostAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.union([
                                                                               z.null(),
                                                                               z.array(z.never()),
                                                                             ]).describe("CreateBuffToHostAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToHostAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateBuffToHostAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToHostAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffToHostAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToHostAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffToHostAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToHostAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.union([
                                                                             z.null(),
                                                                             z.array(z.strictObject({
                                                                                         /** 属性修改器指向的战斗属性。 */
                                                                                         "attributeType": z.enum(["ATK","DEF"]).describe("属性修改器指向的战斗属性。"),
                                                                                         /** CreateBuffToHostAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                         "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToHostAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                         "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                         /** CreateBuffToHostAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                         "loadFromBlackboard": z.boolean().describe("CreateBuffToHostAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 黑板参数的数值槽。 */
                                                                                         "value": z.number().describe("黑板参数的数值槽。"),
                                                                                       })),
                                                                           ]).describe("CreateBuffToHostAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffToHostAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("CreateBuffToHostAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("CreateBuffToHostAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffToHostAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToHostAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffToHostAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffToHostAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToHostAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffToHostAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffToHostAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffToHostAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffToHostAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffToHostAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffToHostAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffToHostAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffToHostAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffToHostAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToHostAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffToHostAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffToHostAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffToHostAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffToHostAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.null().describe("CreateBuffToHostAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffToHostAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffToHostAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.enum(["DEFAULT","STACK","UNIQUE"]).describe("CreateBuffToHostAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffToHostAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.string()).describe("CreateBuffToHostAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToHostAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToHostAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToHostAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToHostAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffToHostAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffToHostAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffToHostAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToHostAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToHostAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToHostAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffToHostAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToHostAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToHostAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToHostAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToHostAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToHost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToHostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToTeammate, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToTeammateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToTeammate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToTeammateAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToTeammateAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToTeammateAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToTeammateAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToTeammateAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.string()).describe("CreateBuffToTeammateAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToTeammateAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToTeammateAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToTeammateAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToTeammateAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToTeammateAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToTeammateAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToTeammateAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.string().describe("CreateBuffToTeammateAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToTeammateAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToTeammateAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToTeammateAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToTeammateAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToTeammateAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToTeammateAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToTeammateAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToTeammateAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToTeammateAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToTeammateAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("LIMITED").describe("CreateBuffToTeammateAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToTeammateAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToTeammateAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToTeammateAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToTeammateAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("CreateBuffToTeammateAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToTeammateAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToTeammateAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToTeammateAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToTeammateAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToTeammateAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToTeammateAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToTeammateAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToTeammateAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToTeammateAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToTeammateAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToTeammateAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToTeammateAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToTeammateAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToTeammateAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToTeammateAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToTeammateAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.literal("BUFF_OWNER").describe("CreateBuffToTeammateAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTeammateAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToTeammateAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTeammateAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToTeammateAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToTeammate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToTeammateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToToken, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToTokenAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffToTokenAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffToTokenAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffToTokenAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToTokenAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.union([
                                                                               z.null(),
                                                                               z.array(z.never()),
                                                                             ]).describe("CreateBuffToTokenAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToTokenAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateBuffToTokenAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToTokenAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffToTokenAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToTokenAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffToTokenAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToTokenAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.union([
                                                                             z.null(),
                                                                             z.array(z.strictObject({
                                                                                         /** 属性修改器指向的战斗属性。 */
                                                                                         "attributeType": z.enum(["ATK","HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO"]).describe("属性修改器指向的战斗属性。"),
                                                                                         /** CreateBuffToTokenAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                         "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToTokenAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                         "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                         /** CreateBuffToTokenAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                         "loadFromBlackboard": z.boolean().describe("CreateBuffToTokenAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 黑板参数的数值槽。 */
                                                                                         "value": z.number().describe("黑板参数的数值槽。"),
                                                                                       })),
                                                                           ]).describe("CreateBuffToTokenAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffToTokenAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffToTokenAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.strictObject({
                                             /** 黑板参数键或当前配置项的稳定键。 */
                                             "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                             /** 黑板参数的数值槽。 */
                                             "value": z.number().describe("黑板参数的数值槽。"),
                                             /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                             "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                           })).describe("CreateBuffToTokenAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffToTokenAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToTokenAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffToTokenAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.null().describe("CreateBuffToTokenAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToTokenAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffToTokenAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffToTokenAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffToTokenAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffToTokenAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffToTokenAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffToTokenAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffToTokenAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffToTokenAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffToTokenAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToTokenAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffToTokenAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffToTokenAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffToTokenAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffToTokenAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.union([
                                                    z.null(),
                                                    z.string(),
                                                  ]).describe("CreateBuffToTokenAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffToTokenAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffToTokenAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.literal("DEFAULT").describe("CreateBuffToTokenAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffToTokenAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("CreateBuffToTokenAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToTokenAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToTokenAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToTokenAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToTokenAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffToTokenAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffToTokenAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffToTokenAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("CreateBuffToTokenAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToTokenAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToTokenAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffToTokenAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTokenAction 的 `excludeBuffKey` 配置字段；准确战斗语义待确认。 */
    "_excludeBuffKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("CreateBuffToTokenAction 的 `excludeBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTokenAction 的 `excludeByBuffKey` 配置字段；准确战斗语义待确认。 */
    "_excludeByBuffKey": z.boolean().describe("CreateBuffToTokenAction 的 `excludeByBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTokenAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CreateBuffToTokenAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTokenAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToTokenAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTokenAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToTokenAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToTokenAction 的 `onlyToFirstTarget` 配置字段；准确战斗语义待确认。 */
    "_onlyToFirstTarget": z.boolean().describe("CreateBuffToTokenAction 的 `onlyToFirstTarget` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToUid, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToUidAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToUidAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToUidAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUidAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffToUidAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUidAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToUidAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUidAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffToUidAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUidAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToUidAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUidAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateBuffToUidAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToUidAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToUidAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.strictObject({
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                         /** 黑板参数的数值槽。 */
                                         "value": z.number().describe("黑板参数的数值槽。"),
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                       })).describe("CreateBuffToUidAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToUidAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToUidAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffToUidAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToUidAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToUidAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToUidAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToUidAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToUidAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToUidAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToUidAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToUidAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToUidAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToUidAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToUidAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToUidAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToUidAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToUidAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToUidAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("CreateBuffToUidAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToUidAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToUidAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToUidAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToUidAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToUidAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToUidAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToUidAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToUidAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToUidAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToUidAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToUidAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToUidAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToUidAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUidAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToUidAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToUidAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CreateBuffToUidAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUidAction 的 `getFromEnemy` 配置字段；准确战斗语义待确认。 */
    "_getFromEnemy": z.boolean().describe("CreateBuffToUidAction 的 `getFromEnemy` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUidAction 的 `getStrInsteadOfInt` 配置字段；准确战斗语义待确认。 */
    "_getStrInsteadOfInt": z.boolean().describe("CreateBuffToUidAction 的 `getStrInsteadOfInt` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。 */
    "_uidKey": z.string().describe("CreateBuffToUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToUnitId, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToUnitIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToUnitId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToUnitIdAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToUnitIdAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToUnitIdAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitIdAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffToUnitIdAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitIdAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToUnitIdAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitIdAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToUnitIdAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitIdAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToUnitIdAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitIdAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateBuffToUnitIdAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToUnitIdAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToUnitIdAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToUnitIdAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToUnitIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToUnitIdAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToUnitIdAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffToUnitIdAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToUnitIdAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToUnitIdAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToUnitIdAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToUnitIdAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToUnitIdAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToUnitIdAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToUnitIdAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToUnitIdAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToUnitIdAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToUnitIdAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("IMMEDIATELY").describe("CreateBuffToUnitIdAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToUnitIdAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToUnitIdAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToUnitIdAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToUnitIdAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("CreateBuffToUnitIdAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToUnitIdAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToUnitIdAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToUnitIdAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToUnitIdAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToUnitIdAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToUnitIdAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToUnitIdAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToUnitIdAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToUnitIdAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToUnitIdAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToUnitIdAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToUnitIdAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToUnitIdAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitIdAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToUnitIdAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToUnitIdAction 的 `recordCountKey` 配置字段；准确战斗语义待确认。 */
    "_recordCountKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("CreateBuffToUnitIdAction 的 `recordCountKey` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUnitIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","SOURCE","TARGET"]).describe("CreateBuffToUnitIdAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUnitIdAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CreateBuffToUnitIdAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CreateBuffToUnitIdAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("CreateBuffToUnitIdAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CreateBuffToUnitIdAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CreateBuffToUnitIdAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CreateBuffToUnitIdAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CreateBuffToUnitIdAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("CreateBuffToUnitIdAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CreateBuffToUnitIdAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CreateBuffToUnitIdAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CreateBuffToUnitIdAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CreateBuffToUnitIdAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CreateBuffToUnitIdAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CreateBuffToUnitIdAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("CreateBuffToUnitIdAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("CreateBuffToUnitIdAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","NONE"]).describe("CreateBuffToUnitIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","NONE","WALK_ONLY"]).describe("CreateBuffToUnitIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","ENEMY","NONE"]).describe("CreateBuffToUnitIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitIdAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CreateBuffToUnitIdAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CreateBuffToUnitIdAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUnitIdAction 的 `unitId` 配置字段；准确战斗语义待确认。 */
    "_unitId": z.string().describe("CreateBuffToUnitIdAction 的 `unitId` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUnitIdAction 的 `useTargetOptions` 配置字段；准确战斗语义待确认。 */
    "_useTargetOptions": z.boolean().describe("CreateBuffToUnitIdAction 的 `useTargetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToUnitId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToUnitIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToUnitInCurrentMapLayer, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToUnitInCurrentMapLayerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToUnitInCurrentMapLayer, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.enum(["ATTACK_SPEED","SP_RECOVERY_PER_SEC"]).describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToUnitInCurrentMapLayerAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToUnitInCurrentMapLayerAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","TARGET"]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CreateBuffToUnitInCurrentMapLayerAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER"]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","TRAP_OR_ITEM"]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","WALK_ONLY"]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALL","ALLY","ENEMY"]).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffToUnitInCurrentMapLayerAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CreateBuffToUnitInCurrentMapLayerAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CreateBuffToUnitInCurrentMapLayerAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToUnitInCurrentMapLayer, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToUnitInCurrentMapLayerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffUseAbilitySelectorAction 的 `abilityFromTargetType` 配置字段；准确战斗语义待确认。 */
    "_abilityFromTargetType": z.literal("SOURCE").describe("CreateBuffUseAbilitySelectorAction 的 `abilityFromTargetType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("CreateBuffUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `actionFailedIfNoTarget` 配置字段；准确战斗语义待确认。 */
    "_actionFailedIfNoTarget": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `actionFailedIfNoTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `assignTargetCntToBB` 配置字段；准确战斗语义待确认。 */
    "_assignTargetCntToBB": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `assignTargetCntToBB` 配置字段；准确战斗语义待确认。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.string()),
                                                                    ]).describe("CreateBuffUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.enum(["ATK","DEF","MAGIC_RESISTANCE","MAX_HP","SP_RECOVER_RATIO","TAUNT_LEVEL"]).describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffUseAbilitySelectorAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffUseAbilitySelectorAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.strictObject({
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                         /** 黑板参数的数值槽。 */
                                         "value": z.number().describe("黑板参数的数值槽。"),
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                       })).describe("CreateBuffUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","STACK","UNIQUE"]).describe("CreateBuffUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.enum(["AUTOMATIC","YES"]).describe("CreateBuffUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffUseAbilitySelectorAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.literal("SOURCE").describe("CreateBuffUseAbilitySelectorAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("CreateBuffUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseAbilitySelectorAction 的 `overrideBuffSourceType` 配置字段；准确战斗语义待确认。 */
    "_overrideBuffSourceType": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `overrideBuffSourceType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CreateBuffUseAbilitySelectorAction 的 `useAbilityFromTarget` 配置字段；准确战斗语义待确认。 */
    "_useAbilityFromTarget": z.boolean().describe("CreateBuffUseAbilitySelectorAction 的 `useAbilityFromTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseCardUidAsSource, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffUseCardUidAsSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffUseCardUidAsSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffUseCardUidAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffUseCardUidAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseCardUidAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseCardUidAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseCardUidAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseCardUidAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseCardUidAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffUseCardUidAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffUseCardUidAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffUseCardUidAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("IMMEDIATELY").describe("CreateBuffUseCardUidAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffUseCardUidAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffUseCardUidAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffUseCardUidAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffUseCardUidAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffUseCardUidAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffUseCardUidAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseCardUidAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.literal("BUFF_OWNER").describe("Buff 的接收实体类型。"),
    /** CreateBuffUseCardUidAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseCardUidAsSourceAction 的 `useStringUid` 配置字段；准确战斗语义待确认。 */
    "_useStringUid": z.boolean().describe("CreateBuffUseCardUidAsSourceAction 的 `useStringUid` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseCardUidAsSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffUseCardUidAsSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseHostAsSource, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffUseHostAsSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffUseHostAsSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffUseHostAsSourceAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffUseHostAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffUseHostAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffUseHostAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffUseHostAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.union([
                                                                               z.null(),
                                                                               z.array(z.never()),
                                                                             ]).describe("CreateBuffUseHostAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffUseHostAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateBuffUseHostAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffUseHostAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffUseHostAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffUseHostAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffUseHostAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffUseHostAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.union([
                                                                             z.null(),
                                                                             z.array(z.strictObject({
                                                                                         /** 属性修改器指向的战斗属性。 */
                                                                                         "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                                         /** CreateBuffUseHostAsSourceAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                         "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                         "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                         /** CreateBuffUseHostAsSourceAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                         "loadFromBlackboard": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 黑板参数的数值槽。 */
                                                                                         "value": z.number().describe("黑板参数的数值槽。"),
                                                                                       })),
                                                                           ]).describe("CreateBuffUseHostAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffUseHostAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("CreateBuffUseHostAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.strictObject({
                                             /** 黑板参数键或当前配置项的稳定键。 */
                                             "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                             /** 黑板参数的数值槽。 */
                                             "value": z.number().describe("黑板参数的数值槽。"),
                                             /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                             "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                           })).describe("CreateBuffUseHostAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffUseHostAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffUseHostAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffUseHostAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffUseHostAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("CreateBuffUseHostAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffUseHostAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffUseHostAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffUseHostAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.union([
                                                    z.null(),
                                                    z.string(),
                                                  ]).describe("CreateBuffUseHostAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("CreateBuffUseHostAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.enum(["DEFAULT","STACK","UNIQUE"]).describe("CreateBuffUseHostAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffUseHostAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("CreateBuffUseHostAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffUseHostAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffUseHostAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffUseHostAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffUseHostAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffUseHostAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffUseHostAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffUseHostAsSourceAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseHostAsSourceAction 的 `createOnTargetHost` 配置字段；准确战斗语义待确认。 */
    "_createOnTargetHost": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `createOnTargetHost` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseHostAsSourceAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseHostAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffUseHostAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseHostAsSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffUseHostAsSourceAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC24Schema = z
  .discriminatedUnion("$type", [CreateBuffToFootballActionSchema, CreateBuffToHostActionSchema, CreateBuffToTeammateActionSchema, CreateBuffToTokenActionSchema, CreateBuffToUidActionSchema, CreateBuffToUnitIdActionSchema, CreateBuffToUnitInCurrentMapLayerActionSchema, CreateBuffUseAbilitySelectorActionSchema, CreateBuffUseCardUidAsSourceActionSchema, CreateBuffUseHostAsSourceActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC24>;
