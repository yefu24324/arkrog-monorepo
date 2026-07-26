/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateBuffToBlockeeAction, CreateBuffToCardUidCharacterAction, CreateBuffToCastedTargetsAction, CreateBuffToCertainGroupIdAction, CreateBuffToCertainProfessionAction, CreateBuffToCertainSideUnitsAction, CreateBuffToCharacterInSpecifiedAreaAction, CreateBuffToCharacterOnCertainTileAction, CreateBuffToCharacterOnTargetRootTileAction, CreateBuffToCurTargetAction, BattleActionC23 } from "../../../../types/buff-template-data/actions/c/actions-c-23.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToBlockee, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToBlockeeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToBlockee, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToBlockeeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToBlockeeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToBlockeeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBlockeeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffToBlockeeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBlockeeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToBlockeeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBlockeeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffToBlockeeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBlockeeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToBlockeeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBlockeeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.literal("ATTACK_SPEED").describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffToBlockeeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToBlockeeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffToBlockeeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffToBlockeeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffToBlockeeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToBlockeeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToBlockeeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToBlockeeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToBlockeeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToBlockeeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToBlockeeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToBlockeeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToBlockeeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToBlockeeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToBlockeeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToBlockeeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToBlockeeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToBlockeeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToBlockeeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToBlockeeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToBlockeeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToBlockeeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToBlockeeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToBlockeeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToBlockeeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToBlockeeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToBlockeeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffToBlockeeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToBlockeeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToBlockeeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","STACK","UNIQUE"]).describe("CreateBuffToBlockeeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToBlockeeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToBlockeeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToBlockeeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToBlockeeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToBlockeeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToBlockeeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToBlockeeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToBlockeeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToBlockeeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToBlockeeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBlockeeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToBlockeeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Buff 的接收实体类型。"),
    /** CreateBuffToBlockeeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToBlockeeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToBlockeeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToBlockeeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToBlockee, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToBlockeeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCardUidCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCardUidCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCardUidCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToCardUidCharacterAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToCardUidCharacterAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.null().describe("CreateBuffToCardUidCharacterAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCardUidCharacterAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.null().describe("CreateBuffToCardUidCharacterAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCardUidCharacterAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.null().describe("CreateBuffToCardUidCharacterAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCardUidCharacterAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.null().describe("CreateBuffToCardUidCharacterAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCardUidCharacterAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.null().describe("CreateBuffToCardUidCharacterAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCardUidCharacterAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.null().describe("CreateBuffToCardUidCharacterAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToCardUidCharacterAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToCardUidCharacterAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToCardUidCharacterAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToCardUidCharacterAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffToCardUidCharacterAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToCardUidCharacterAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToCardUidCharacterAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("CreateBuffToCardUidCharacterAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToCardUidCharacterAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToCardUidCharacterAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToCardUidCharacterAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffToCardUidCharacterAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToCardUidCharacterAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToCardUidCharacterAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToCardUidCharacterAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCardUidCharacterAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCardUidCharacterAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToCardUidCharacterAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToCardUidCharacterAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToCardUidCharacterAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToCardUidCharacterAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCardUidCharacterAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCardUidCharacterAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToCardUidCharacterAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.literal("BUFF_SOURCE").describe("CreateBuffToCardUidCharacterAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCardUidCharacterAction 的 `cardUidKey` 配置字段；准确战斗语义待确认。 */
    "_cardUidKey": z.string().describe("CreateBuffToCardUidCharacterAction 的 `cardUidKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCardUidCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCardUidCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCastedTargets, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCastedTargetsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCastedTargets, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToCastedTargetsAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToCastedTargetsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCastedTargetsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCastedTargetsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCastedTargetsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCastedTargetsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCastedTargetsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToCastedTargetsAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToCastedTargetsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToCastedTargetsAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffToCastedTargetsAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToCastedTargetsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToCastedTargetsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("INFINITY").describe("CreateBuffToCastedTargetsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToCastedTargetsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToCastedTargetsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToCastedTargetsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.string().describe("CreateBuffToCastedTargetsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToCastedTargetsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToCastedTargetsAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToCastedTargetsAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCastedTargetsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCastedTargetsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToCastedTargetsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToCastedTargetsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToCastedTargetsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToCastedTargetsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCastedTargetsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToCastedTargetsAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.literal("BUFF_OWNER").describe("CreateBuffToCastedTargetsAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCastedTargetsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCastedTargetsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCastedTargetsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCastedTargets, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCastedTargetsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCertainGroupId, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCertainGroupIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCertainGroupId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToCertainGroupIdAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffToCertainGroupIdAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffToCertainGroupIdAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainGroupIdAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainGroupIdAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainGroupIdAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainGroupIdAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainGroupIdAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.array(z.strictObject({
                                                                             /** 属性修改器指向的战斗属性。 */
                                                                             "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                             /** CreateBuffToCertainGroupIdAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                             "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                             /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                             "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                             /** CreateBuffToCertainGroupIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                             "loadFromBlackboard": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                             /** 黑板参数的数值槽。 */
                                                                             "value": z.number().describe("黑板参数的数值槽。"),
                                                                           })).describe("CreateBuffToCertainGroupIdAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffToCertainGroupIdAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("CreateBuffToCertainGroupIdAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffToCertainGroupIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.string().describe("CreateBuffToCertainGroupIdAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffToCertainGroupIdAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffToCertainGroupIdAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.literal("LIMITED").describe("CreateBuffToCertainGroupIdAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffToCertainGroupIdAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffToCertainGroupIdAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffToCertainGroupIdAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.null().describe("CreateBuffToCertainGroupIdAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("CreateBuffToCertainGroupIdAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.literal("DEFAULT").describe("CreateBuffToCertainGroupIdAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffToCertainGroupIdAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCertainGroupIdAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCertainGroupIdAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffToCertainGroupIdAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffToCertainGroupIdAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffToCertainGroupIdAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToCertainGroupIdAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainGroupIdAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffToCertainGroupIdAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainGroupIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainGroupIdAction 的 `groupId` 配置字段；准确战斗语义待确认。 */
    "_groupId": z.string().describe("CreateBuffToCertainGroupIdAction 的 `groupId` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainGroupIdAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCertainGroupIdAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCertainGroupId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCertainGroupIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCertainProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCertainProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCertainProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToCertainProfessionAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffToCertainProfessionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffToCertainProfessionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffToCertainProfessionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainProfessionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.union([
                                                                               z.null(),
                                                                               z.array(z.never()),
                                                                             ]).describe("CreateBuffToCertainProfessionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainProfessionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("CreateBuffToCertainProfessionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainProfessionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("CreateBuffToCertainProfessionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainProfessionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffToCertainProfessionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCertainProfessionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.union([
                                                                             z.null(),
                                                                             z.array(z.strictObject({
                                                                                         /** 属性修改器指向的战斗属性。 */
                                                                                         "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                                         /** CreateBuffToCertainProfessionAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                         "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                         "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                         /** CreateBuffToCertainProfessionAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                         "loadFromBlackboard": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                         /** 黑板参数的数值槽。 */
                                                                                         "value": z.number().describe("黑板参数的数值槽。"),
                                                                                       })),
                                                                           ]).describe("CreateBuffToCertainProfessionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffToCertainProfessionAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("CreateBuffToCertainProfessionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("CreateBuffToCertainProfessionAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffToCertainProfessionAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffToCertainProfessionAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffToCertainProfessionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffToCertainProfessionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToCertainProfessionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffToCertainProfessionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffToCertainProfessionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffToCertainProfessionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.union([
                                                    z.null(),
                                                    z.string(),
                                                  ]).describe("CreateBuffToCertainProfessionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("CreateBuffToCertainProfessionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.enum(["DEFAULT","STACK"]).describe("CreateBuffToCertainProfessionAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffToCertainProfessionAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.string()).describe("CreateBuffToCertainProfessionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCertainProfessionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffToCertainProfessionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffToCertainProfessionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffToCertainProfessionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToCertainProfessionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCertainProfessionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffToCertainProfessionAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainProfessionAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainProfessionAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCertainProfessionAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainProfessionAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
    "_professionMask": z.enum(["TANK, SUPPORT","TRAP","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER","WARRIOR, TANK"]).describe("CreateBuffToCertainProfessionAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCertainProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCertainProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCertainSideUnits, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCertainSideUnitsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCertainSideUnits, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToCertainSideUnitsAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToCertainSideUnitsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffToCertainSideUnitsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCertainSideUnitsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffToCertainSideUnitsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCertainSideUnitsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToCertainSideUnitsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCertainSideUnitsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffToCertainSideUnitsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCertainSideUnitsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToCertainSideUnitsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCertainSideUnitsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.enum(["ATK","ATTACK_SPEED","DEF","MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffToCertainSideUnitsAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffToCertainSideUnitsAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffToCertainSideUnitsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToCertainSideUnitsAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToCertainSideUnitsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.union([
                                         z.null(),
                                         z.array(z.strictObject({
                                                   /** 黑板参数键或当前配置项的稳定键。 */
                                                   "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                                   /** 黑板参数的数值槽。 */
                                                   "value": z.number().describe("黑板参数的数值槽。"),
                                                   /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                                   "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                                 })),
                                       ]).describe("CreateBuffToCertainSideUnitsAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToCertainSideUnitsAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToCertainSideUnitsAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToCertainSideUnitsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffToCertainSideUnitsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffToCertainSideUnitsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","EXTEND_TIME","STACK","UNIQUE"]).describe("CreateBuffToCertainSideUnitsAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.union([
                                             z.null(),
                                             z.array(z.never()),
                                           ]).describe("CreateBuffToCertainSideUnitsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCertainSideUnitsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToCertainSideUnitsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToCertainSideUnitsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCertainSideUnitsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToCertainSideUnitsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainSideUnitsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainSideUnitsAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("CreateBuffToCertainSideUnitsAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCertainSideUnitsAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
    "_sideMask": z.enum(["ALLY","ENEMY"]).describe("CreateBuffToCertainSideUnitsAction 的 `sideMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCertainSideUnits, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCertainSideUnitsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCharacterInSpecifiedArea, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCharacterInSpecifiedAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCharacterInSpecifiedArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.array(z.strictObject({
                                                                             /** 属性修改器指向的战斗属性。 */
                                                                             "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                             "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                             /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                             "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                             /** CreateBuffToCharacterInSpecifiedAreaAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                             "loadFromBlackboard": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                             /** 黑板参数的数值槽。 */
                                                                             "value": z.number().describe("黑板参数的数值槽。"),
                                                                           })).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.null().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.null().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.enum(["DEFAULT","STACK"]).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffToCharacterInSpecifiedAreaAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `ignoreToken` 配置字段；准确战斗语义待确认。 */
    "_ignoreToken": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `ignoreToken` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `ignoreTrap` 配置字段；准确战斗语义待确认。 */
    "_ignoreTrap": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `ignoreTrap` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isExclude` 配置字段；准确战斗语义待确认。 */
    "_isExclude": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `isExclude` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `specifyByGridColumn` 配置字段；准确战斗语义待确认。 */
    "_specifyByGridColumn": z.boolean().describe("CreateBuffToCharacterInSpecifiedAreaAction 的 `specifyByGridColumn` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCharacterInSpecifiedArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCharacterInSpecifiedAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnCertainTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCharacterOnCertainTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnCertainTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToCharacterOnCertainTileAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** CreateBuffToCharacterOnCertainTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToCharacterOnCertainTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("CreateBuffToCharacterOnCertainTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToCharacterOnCertainTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToCharacterOnCertainTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("CreateBuffToCharacterOnCertainTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnCertainTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffToCharacterOnCertainTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("CreateBuffToCharacterOnCertainTileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("CreateBuffToCharacterOnCertainTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("CreateBuffToCharacterOnCertainTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("CreateBuffToCharacterOnCertainTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("CreateBuffToCharacterOnCertainTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.literal("IMMEDIATELY").describe("CreateBuffToCharacterOnCertainTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("CreateBuffToCharacterOnCertainTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("CreateBuffToCharacterOnCertainTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("CreateBuffToCharacterOnCertainTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCharacterOnCertainTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCharacterOnCertainTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("CreateBuffToCharacterOnCertainTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToCharacterOnCertainTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnCertainTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("CreateBuffToCharacterOnCertainTileAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterOnCertainTileAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("CreateBuffToCharacterOnCertainTileAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterOnCertainTileAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
    "_hasSource": z.boolean().describe("CreateBuffToCharacterOnCertainTileAction 的 `hasSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnCertainTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCharacterOnCertainTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnTargetRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCharacterOnTargetRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnTargetRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffToCharacterOnTargetRootTileAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.string()),
                                                                   ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffToCharacterOnTargetRootTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("CreateBuffToCharacterOnTargetRootTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCharacterOnTargetRootTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffToCharacterOnTargetRootTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterOnTargetRootTileAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterOnTargetRootTileAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCharacterOnTargetRootTileAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterOnTargetRootTileAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CreateBuffToCharacterOnTargetRootTileAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCharacterOnTargetRootTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CreateBuffToCharacterOnTargetRootTileAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnTargetRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCharacterOnTargetRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCurTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToCurTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToCurTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToCurTargetAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToCurTargetAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.null().describe("CreateBuffToCurTargetAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCurTargetAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.null().describe("CreateBuffToCurTargetAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCurTargetAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.null().describe("CreateBuffToCurTargetAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCurTargetAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.null().describe("CreateBuffToCurTargetAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCurTargetAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.null().describe("CreateBuffToCurTargetAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToCurTargetAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.null().describe("CreateBuffToCurTargetAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToCurTargetAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToCurTargetAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToCurTargetAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToCurTargetAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToCurTargetAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToCurTargetAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffToCurTargetAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToCurTargetAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToCurTargetAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToCurTargetAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToCurTargetAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToCurTargetAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToCurTargetAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToCurTargetAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToCurTargetAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToCurTargetAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToCurTargetAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("IMMEDIATELY").describe("CreateBuffToCurTargetAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToCurTargetAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToCurTargetAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToCurTargetAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToCurTargetAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("CreateBuffToCurTargetAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToCurTargetAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToCurTargetAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToCurTargetAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToCurTargetAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToCurTargetAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToCurTargetAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToCurTargetAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToCurTargetAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToCurTargetAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToCurTargetAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToCurTargetAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToCurTargetAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToCurTargetAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToCurTargetAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToCurTargetAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToCurTargetAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.literal("BUFF_OWNER").describe("CreateBuffToCurTargetAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCurTargetAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToCurTargetAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToCurTargetAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToCurTargetAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToCurTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToCurTargetAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC23Schema = z
  .discriminatedUnion("$type", [CreateBuffToBlockeeActionSchema, CreateBuffToCardUidCharacterActionSchema, CreateBuffToCastedTargetsActionSchema, CreateBuffToCertainGroupIdActionSchema, CreateBuffToCertainProfessionActionSchema, CreateBuffToCertainSideUnitsActionSchema, CreateBuffToCharacterInSpecifiedAreaActionSchema, CreateBuffToCharacterOnCertainTileActionSchema, CreateBuffToCharacterOnTargetRootTileActionSchema, CreateBuffToCurTargetActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC23>;
