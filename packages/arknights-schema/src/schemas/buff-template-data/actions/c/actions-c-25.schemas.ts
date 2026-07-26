/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateBuffUseOverrideBuffKeyAction, CreateBuffUseTargetAsSourceAction, CreateBuffWithOverrideEffectAction, CreateCameraEffectAction, CreateCardBuffAction, CreateCardBuffByCardUidAction, CreateCardBuffByCurRespawningTimeAction, CreateCardBuffByDeckSequenceOrderAction, CreateCardBuffBySourceCardAction, CreateCardBuffFilterByBuildableTypeAction, BattleActionC25 } from "../../../../types/buff-template-data/actions/c/actions-c-25.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseOverrideBuffKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffUseOverrideBuffKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffUseOverrideBuffKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffUseOverrideBuffKeyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("CreateBuffUseOverrideBuffKeyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffUseOverrideBuffKeyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("CreateBuffUseOverrideBuffKeyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.never()).describe("CreateBuffUseOverrideBuffKeyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("CreateBuffUseOverrideBuffKeyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseOverrideBuffKeyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.strictObject({
                                                                         /** 属性修改器指向的战斗属性。 */
                                                                         "attributeType": z.enum(["ATTACK_SPEED","MOVE_SPEED","SLOW_DOWN"]).describe("属性修改器指向的战斗属性。"),
                                                                         /** CreateBuffUseOverrideBuffKeyAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                         "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                         /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                         "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                         /** CreateBuffUseOverrideBuffKeyAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                         "loadFromBlackboard": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                         /** 黑板参数的数值槽。 */
                                                                         "value": z.number().describe("黑板参数的数值槽。"),
                                                                       })).describe("CreateBuffUseOverrideBuffKeyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffUseOverrideBuffKeyAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffUseOverrideBuffKeyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffUseOverrideBuffKeyAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.null().describe("CreateBuffUseOverrideBuffKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.string().describe("CreateBuffUseOverrideBuffKeyAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("LIMITED").describe("CreateBuffUseOverrideBuffKeyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.string().describe("CreateBuffUseOverrideBuffKeyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.string().describe("CreateBuffUseOverrideBuffKeyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffUseOverrideBuffKeyAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.string()).describe("CreateBuffUseOverrideBuffKeyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffUseOverrideBuffKeyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffUseOverrideBuffKeyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffUseOverrideBuffKeyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseOverrideBuffKeyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.literal("BUFF_OWNER").describe("Buff 的接收实体类型。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `hookEffectKeyFromSourceProjectile` 配置字段；准确战斗语义待确认。 */
    "_hookEffectKeyFromSourceProjectile": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `hookEffectKeyFromSourceProjectile` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `inherateSourceProjectileFromParentBuff` 配置字段；准确战斗语义待确认。 */
    "_inherateSourceProjectileFromParentBuff": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `inherateSourceProjectileFromParentBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `overrideBuffKeyFormat` 配置字段；准确战斗语义待确认。 */
    "_overrideBuffKeyFormat": z.string().describe("CreateBuffUseOverrideBuffKeyAction 的 `overrideBuffKeyFormat` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `specialBuffSource` 配置字段；准确战斗语义待确认。 */
    "_specialBuffSource": z.literal("BUFF_SOURCE").describe("CreateBuffUseOverrideBuffKeyAction 的 `specialBuffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseOverrideBuffKeyAction 的 `useSpecialBuffSource` 配置字段；准确战斗语义待确认。 */
    "_useSpecialBuffSource": z.boolean().describe("CreateBuffUseOverrideBuffKeyAction 的 `useSpecialBuffSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseOverrideBuffKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffUseOverrideBuffKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseTargetAsSource, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffUseTargetAsSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffUseTargetAsSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffUseTargetAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffUseTargetAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffUseTargetAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseTargetAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffUseTargetAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseTargetAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffUseTargetAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseTargetAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffUseTargetAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseTargetAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffUseTargetAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffUseTargetAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.literal("MOVE_SPEED").describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffUseTargetAsSourceAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffUseTargetAsSourceAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffUseTargetAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffUseTargetAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffUseTargetAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.strictObject({
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                         /** 黑板参数的数值槽。 */
                                         "value": z.number().describe("黑板参数的数值槽。"),
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                       })).describe("CreateBuffUseTargetAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffUseTargetAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffUseTargetAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffUseTargetAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffUseTargetAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffUseTargetAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","STACK","UNIQUE"]).describe("CreateBuffUseTargetAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.string()).describe("CreateBuffUseTargetAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffUseTargetAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffUseTargetAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffUseTargetAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffUseTargetAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","SOURCE"]).describe("Buff 的接收实体类型。"),
    /** CreateBuffUseTargetAsSourceAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseTargetAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffUseTargetAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffUseTargetAsSourceAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("CreateBuffUseTargetAsSourceAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffUseTargetAsSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffUseTargetAsSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffWithOverrideEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffWithOverrideEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffWithOverrideEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffWithOverrideEffectAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffWithOverrideEffectAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffWithOverrideEffectAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffWithOverrideEffectAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffWithOverrideEffectAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffWithOverrideEffectAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffWithOverrideEffectAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffWithOverrideEffectAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffWithOverrideEffectAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffWithOverrideEffectAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffWithOverrideEffectAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffWithOverrideEffectAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffWithOverrideEffectAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffWithOverrideEffectAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffWithOverrideEffectAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffWithOverrideEffectAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffWithOverrideEffectAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffWithOverrideEffectAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffWithOverrideEffectAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffWithOverrideEffectAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffWithOverrideEffectAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffWithOverrideEffectAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("CreateBuffWithOverrideEffectAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffWithOverrideEffectAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffWithOverrideEffectAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffWithOverrideEffectAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffWithOverrideEffectAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffWithOverrideEffectAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffWithOverrideEffectAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffWithOverrideEffectAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffWithOverrideEffectAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffWithOverrideEffectAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffWithOverrideEffectAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffWithOverrideEffectAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffWithOverrideEffectAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffWithOverrideEffectAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffWithOverrideEffectAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","SOURCE"]).describe("Buff 的接收实体类型。"),
    /** CreateBuffWithOverrideEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateBuffWithOverrideEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffWithOverrideEffectAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffWithOverrideEffectAction 的 `hookEffectBySkinId` 配置字段；准确战斗语义待确认。 */
    "_hookEffectBySkinId": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `hookEffectBySkinId` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffWithOverrideEffectAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffWithOverrideEffectAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffWithOverrideEffectAction 的 `skinIdBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_skinIdBlackboardKey": z.string().describe("CreateBuffWithOverrideEffectAction 的 `skinIdBlackboardKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffWithOverrideEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffWithOverrideEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCameraEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCameraEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCameraEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCameraEffectAction 的 `collectedToController` 配置字段；准确战斗语义待确认。 */
    "_collectedToController": z.boolean().describe("CreateCameraEffectAction 的 `collectedToController` 配置字段；准确战斗语义待确认。"),
    /** CreateCameraEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateCameraEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCameraEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCameraEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CreateCardBuffAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `donotInheritBlackboard` 配置字段；准确战斗语义待确认。 */
    "_donotInheritBlackboard": z.boolean().describe("CreateCardBuffAction 的 `donotInheritBlackboard` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","HOLD_BY_BUFF","IMMEDIATELY","UNTIL_NEXT_SPAWN"]).describe("CreateCardBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("CreateCardBuffAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffByCardUid, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffByCardUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffByCardUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffByCardUidAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("CreateCardBuffByCardUidAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCardUidAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffByCardUidAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCardUidAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffByCardUidAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCardUidAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffByCardUidAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCardUidAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateCardBuffByCardUidAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CreateCardBuffByCardUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。 */
    "_uidKey": z.string().describe("CreateCardBuffByCardUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCardUidAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffByCardUidAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffByCardUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffByCardUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffByCurRespawningTime, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffByCurRespawningTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffByCurRespawningTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffByCurRespawningTimeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffByCurRespawningTimeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffByCurRespawningTimeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `isMin` 配置字段；准确战斗语义待确认。 */
    "_isMin": z.boolean().describe("CreateCardBuffByCurRespawningTimeAction 的 `isMin` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffByCurRespawningTimeAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("IMMEDIATELY").describe("CreateCardBuffByCurRespawningTimeAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `profession` 配置字段；准确战斗语义待确认。 */
    "_profession": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER").describe("CreateCardBuffByCurRespawningTimeAction 的 `profession` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CreateCardBuffByCurRespawningTimeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffByCurRespawningTimeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffByCurRespawningTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffByCurRespawningTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffByDeckSequenceOrder, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffByDeckSequenceOrderActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffByDeckSequenceOrder, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffByDeckSequenceOrderAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("CreateCardBuffByDeckSequenceOrderAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
    "_deckSelector": z.strictObject({
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                           "categoryMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER").describe("CreateCardBuffByDeckSequenceOrderAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                           "enableOverride": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                           "excludeHiddenByCardState": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                           "excludeMe": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                           "excludeNotInHand": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                           "excludeNotShowInCardList": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                           "filterTag": z.null().describe("CreateCardBuffByDeckSequenceOrderAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                           "mapTags": z.array(z.never()).describe("CreateCardBuffByDeckSequenceOrderAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                           "onlySelectMe": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffByDeckSequenceOrderAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                           "subprofessionTag": z.null().describe("CreateCardBuffByDeckSequenceOrderAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                         }).describe("CreateCardBuffByDeckSequenceOrderAction 的 `deckSelector` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateCardBuffByDeckSequenceOrderAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `selectOrder` 配置字段；准确战斗语义待确认。 */
    "_selectOrder": z.string().describe("CreateCardBuffByDeckSequenceOrderAction 的 `selectOrder` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffByDeckSequenceOrderAction 的 `useTokenAsSourceCard` 配置字段；准确战斗语义待确认。 */
    "_useTokenAsSourceCard": z.boolean().describe("CreateCardBuffByDeckSequenceOrderAction 的 `useTokenAsSourceCard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffByDeckSequenceOrder, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffByDeckSequenceOrderAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffBySourceCard, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffBySourceCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffBySourceCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffBySourceCardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CreateCardBuffBySourceCardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffBySourceCardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffBySourceCardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffBySourceCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffBySourceCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffBySourceCardAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffBySourceCardAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffBySourceCardAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","UNTIL_NEXT_SPAWN"]).describe("CreateCardBuffBySourceCardAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CreateCardBuffBySourceCardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffBySourceCardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffBySourceCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffBySourceCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByBuildableType, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffFilterByBuildableTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffFilterByBuildableType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("MELEE").describe("CreateCardBuffFilterByBuildableTypeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffFilterByBuildableTypeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffFilterByBuildableTypeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `expectToken` 配置字段；准确战斗语义待确认。 */
    "_expectToken": z.boolean().describe("CreateCardBuffFilterByBuildableTypeAction 的 `expectToken` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffFilterByBuildableTypeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffFilterByBuildableTypeAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN_SYNC_WITH_BUFF").describe("CreateCardBuffFilterByBuildableTypeAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByBuildableTypeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffFilterByBuildableTypeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByBuildableType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffFilterByBuildableTypeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC25Schema = z
  .discriminatedUnion("$type", [CreateBuffUseOverrideBuffKeyActionSchema, CreateBuffUseTargetAsSourceActionSchema, CreateBuffWithOverrideEffectActionSchema, CreateCameraEffectActionSchema, CreateCardBuffActionSchema, CreateCardBuffByCardUidActionSchema, CreateCardBuffByCurRespawningTimeActionSchema, CreateCardBuffByDeckSequenceOrderActionSchema, CreateCardBuffBySourceCardActionSchema, CreateCardBuffFilterByBuildableTypeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC25>;
