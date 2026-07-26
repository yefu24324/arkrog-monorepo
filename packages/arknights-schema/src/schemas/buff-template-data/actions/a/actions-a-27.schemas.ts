/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AttachAsDerivedBuffAction, AttachAsDerivedBuffByIdAction, AttachAsDerivedBuffToMainBuffAction, AttributeModifierWithBBAction, AttributeModifierWithCertainBuffCountAction, AttributeModifierWithLevelProgressAction, AutoChessAssignBondStackCntToBBAction, AutoChessAssignGatheredAttributeToBlackboardAction, AutoChessCheckDifficultyAction, AutochessFilterByBuffStackCountWithEffectInstIdAction, BattleActionA27 } from "../../../../types/buff-template-data/actions/a/actions-a-27.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AttachAsDerivedBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const AttachAsDerivedBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AttachAsDerivedBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** AttachAsDerivedBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** AttachAsDerivedBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("AttachAsDerivedBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("AttachAsDerivedBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("AttachAsDerivedBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("AttachAsDerivedBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("AttachAsDerivedBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.literal("MASS_LEVEL").describe("属性修改器指向的战斗属性。"),
                                                                                     /** AttachAsDerivedBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("AttachAsDerivedBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** AttachAsDerivedBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("AttachAsDerivedBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("AttachAsDerivedBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("AttachAsDerivedBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("AttachAsDerivedBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("AttachAsDerivedBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("AttachAsDerivedBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("AttachAsDerivedBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("AttachAsDerivedBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("AttachAsDerivedBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("AttachAsDerivedBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("AttachAsDerivedBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("AttachAsDerivedBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("AttachAsDerivedBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("AttachAsDerivedBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("AttachAsDerivedBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("AttachAsDerivedBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("AttachAsDerivedBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("AttachAsDerivedBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("AttachAsDerivedBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("AttachAsDerivedBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("AttachAsDerivedBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("AttachAsDerivedBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("AttachAsDerivedBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** AttachAsDerivedBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("AttachAsDerivedBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("AttachAsDerivedBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("AttachAsDerivedBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","UNIQUE"]).describe("AttachAsDerivedBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("AttachAsDerivedBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("AttachAsDerivedBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("AttachAsDerivedBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("AttachAsDerivedBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("AttachAsDerivedBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("AttachAsDerivedBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** AttachAsDerivedBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("AttachAsDerivedBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("AttachAsDerivedBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("AttachAsDerivedBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("AttachAsDerivedBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** AttachAsDerivedBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AttachAsDerivedBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.literal("BUFF_SOURCE").describe("AttachAsDerivedBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffAction 的 `filterBuffBySource` 配置字段；准确战斗语义待确认。 */
    "_filterBuffBySource": z.boolean().describe("AttachAsDerivedBuffAction 的 `filterBuffBySource` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("AttachAsDerivedBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("AttachAsDerivedBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** AttachAsDerivedBuffAction 的 `useSnapshotSource` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotSource": z.boolean().describe("AttachAsDerivedBuffAction 的 `useSnapshotSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AttachAsDerivedBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AttachAsDerivedBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AttachAsDerivedBuffById, Assembly-CSharp 的严格 Action 数据。
 */
export const AttachAsDerivedBuffByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AttachAsDerivedBuffById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AttachAsDerivedBuffByIdAction 的 `attachToSourceHost` 配置字段；准确战斗语义待确认。 */
    "_attachToSourceHost": z.boolean().describe("AttachAsDerivedBuffByIdAction 的 `attachToSourceHost` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AttachAsDerivedBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffByIdAction 的 `finishDerivedBuffIfNoParent` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfNoParent": z.boolean().describe("AttachAsDerivedBuffByIdAction 的 `finishDerivedBuffIfNoParent` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffByIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("AttachAsDerivedBuffByIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("AttachAsDerivedBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AttachAsDerivedBuffById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AttachAsDerivedBuffByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AttachAsDerivedBuffToMainBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const AttachAsDerivedBuffToMainBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AttachAsDerivedBuffToMainBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** AttachAsDerivedBuffToMainBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("AttachAsDerivedBuffToMainBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("AttachAsDerivedBuffToMainBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("AttachAsDerivedBuffToMainBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("AttachAsDerivedBuffToMainBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("AttachAsDerivedBuffToMainBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** AttachAsDerivedBuffToMainBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("AttachAsDerivedBuffToMainBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("AttachAsDerivedBuffToMainBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("AttachAsDerivedBuffToMainBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("AttachAsDerivedBuffToMainBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("AttachAsDerivedBuffToMainBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("AttachAsDerivedBuffToMainBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("INFINITY").describe("AttachAsDerivedBuffToMainBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("AttachAsDerivedBuffToMainBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("AttachAsDerivedBuffToMainBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("AttachAsDerivedBuffToMainBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("AttachAsDerivedBuffToMainBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("AttachAsDerivedBuffToMainBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("AttachAsDerivedBuffToMainBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("AttachAsDerivedBuffToMainBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** AttachAsDerivedBuffToMainBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** AttachAsDerivedBuffToMainBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("AttachAsDerivedBuffToMainBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffToMainBuffAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("AttachAsDerivedBuffToMainBuffAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** AttachAsDerivedBuffToMainBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AttachAsDerivedBuffToMainBuffAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AttachAsDerivedBuffToMainBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AttachAsDerivedBuffToMainBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AttributeModifierWithBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AttributeModifierWithBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AttributeModifierWithBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ABILITY_RANGE_FORWARD_EXTEND","ATK","ATTACK_SPEED","BLOCK_CNT","DEF","DEF_PENETRATE","DEF_PENETRATE_FIXED","EP_RECOVERY_PER_SEC","HP_RECOVERY_PER_SEC","HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO","MAGIC_RESIST_PENETRATE","MAX_HP","MOVE_SPEED","SLOW_DOWN","SP_RECOVERY_PER_SEC","TAUNT_LEVEL"]).describe("属性修改器指向的战斗属性。"),
    /** AttributeModifierWithBBAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
    "_formulaType": z.enum(["ADDITION","FINAL_ADDITION","FINAL_SCALER","MULTIPLIER"]).describe("AttributeModifierWithBBAction 的 `formulaType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AttributeModifierWithBBAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("AttributeModifierWithBBAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AttributeModifierWithBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AttributeModifierWithBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AttributeModifierWithCertainBuffCount, Assembly-CSharp 的严格 Action 数据。
 */
export const AttributeModifierWithCertainBuffCountActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AttributeModifierWithCertainBuffCount, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","DEF","MAGIC_RESISTANCE"]).describe("属性修改器指向的战斗属性。"),
    /** AttributeModifierWithCertainBuffCountAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AttributeModifierWithCertainBuffCountAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AttributeModifierWithCertainBuffCountAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
    "_formulaType": z.enum(["ADDITION","MULTIPLIER"]).describe("AttributeModifierWithCertainBuffCountAction 的 `formulaType` 配置字段；准确战斗语义待确认。"),
    /** AttributeModifierWithCertainBuffCountAction 的 `maxCnt` 配置字段；准确战斗语义待确认。 */
    "_maxCnt": z.number().describe("AttributeModifierWithCertainBuffCountAction 的 `maxCnt` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AttributeModifierWithCertainBuffCountAction 的 `useOneAsMinCnt` 配置字段；准确战斗语义待确认。 */
    "_useOneAsMinCnt": z.boolean().describe("AttributeModifierWithCertainBuffCountAction 的 `useOneAsMinCnt` 配置字段；准确战斗语义待确认。"),
    /** AttributeModifierWithCertainBuffCountAction 的 `writeModifyValueToBB` 配置字段；准确战斗语义待确认。 */
    "_writeModifyValueToBB": z.boolean().describe("AttributeModifierWithCertainBuffCountAction 的 `writeModifyValueToBB` 配置字段；准确战斗语义待确认。"),
    /** AttributeModifierWithCertainBuffCountAction 的 `writeToBBKey` 配置字段；准确战斗语义待确认。 */
    "_writeToBBKey": z.union([
                           z.null(),
                           z.string(),
                         ]).describe("AttributeModifierWithCertainBuffCountAction 的 `writeToBBKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AttributeModifierWithCertainBuffCount, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AttributeModifierWithCertainBuffCountAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AttributeModifierWithLevelProgress, Assembly-CSharp 的严格 Action 数据。
 */
export const AttributeModifierWithLevelProgressActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AttributeModifierWithLevelProgress, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","DEF","MAX_HP"]).describe("属性修改器指向的战斗属性。"),
    /** AttributeModifierWithLevelProgressAction 的 `guaranteedPercentageString` 配置字段；准确战斗语义待确认。 */
    "_guaranteedPercentageString": z.string().describe("AttributeModifierWithLevelProgressAction 的 `guaranteedPercentageString` 配置字段；准确战斗语义待确认。"),
    /** AttributeModifierWithLevelProgressAction 的 `isFinalScale` 配置字段；准确战斗语义待确认。 */
    "_isFinalScale": z.boolean().describe("AttributeModifierWithLevelProgressAction 的 `isFinalScale` 配置字段；准确战斗语义待确认。"),
    /** AttributeModifierWithLevelProgressAction 的 `maxPercentageString` 配置字段；准确战斗语义待确认。 */
    "_maxPercentageString": z.string().describe("AttributeModifierWithLevelProgressAction 的 `maxPercentageString` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AttributeModifierWithLevelProgress, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AttributeModifierWithLevelProgressAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutoChessAssignBondStackCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AutoChessAssignBondStackCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutoChessAssignBondStackCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `assignAllPlayerIndex` 配置字段；准确战斗语义待确认。 */
    "_assignAllPlayerIndex": z.boolean().describe("AutoChessAssignBondStackCntToBBAction 的 `assignAllPlayerIndex` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `assignCurrentMaxBond` 配置字段；准确战斗语义待确认。 */
    "_assignCurrentMaxBond": z.boolean().describe("AutoChessAssignBondStackCntToBBAction 的 `assignCurrentMaxBond` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `bondBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_bondBlackboardKey": z.null().describe("AutoChessAssignBondStackCntToBBAction 的 `bondBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `bondId` 配置字段；准确战斗语义待确认。 */
    "_bondId": z.null().describe("AutoChessAssignBondStackCntToBBAction 的 `bondId` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `byPosition` 配置字段；准确战斗语义待确认。 */
    "_byPosition": z.boolean().describe("AutoChessAssignBondStackCntToBBAction 的 `byPosition` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `checkDiffWithOldStoreCnt` 配置字段；准确战斗语义待确认。 */
    "_checkDiffWithOldStoreCnt": z.boolean().describe("AutoChessAssignBondStackCntToBBAction 的 `checkDiffWithOldStoreCnt` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `keyToStoreCnt` 配置字段；准确战斗语义待确认。 */
    "_keyToStoreCnt": z.string().describe("AutoChessAssignBondStackCntToBBAction 的 `keyToStoreCnt` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignBondStackCntToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AutoChessAssignBondStackCntToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutoChessAssignBondStackCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutoChessAssignBondStackCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutoChessAssignGatheredAttributeToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AutoChessAssignGatheredAttributeToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutoChessAssignGatheredAttributeToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
    "_actionTargetType": z.literal("BUFF_OWNER").describe("AutoChessAssignGatheredAttributeToBlackboardAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","MAX_HP"]).describe("属性修改器指向的战斗属性。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `filterByBondIds` 配置字段；准确战斗语义待确认。 */
    "_filterByBondIds": z.array(z.string()).describe("AutoChessAssignGatheredAttributeToBlackboardAction 的 `filterByBondIds` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `scale` 配置字段；准确战斗语义待确认。 */
    "_scale": z.number().describe("AutoChessAssignGatheredAttributeToBlackboardAction 的 `scale` 配置字段；准确战斗语义待确认。"),
    /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
    "_scaleKey": z.string().describe("AutoChessAssignGatheredAttributeToBlackboardAction 的 `scaleKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutoChessAssignGatheredAttributeToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutoChessAssignGatheredAttributeToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutoChessCheckDifficulty, Assembly-CSharp 的严格 Action 数据。
 */
export const AutoChessCheckDifficultyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutoChessCheckDifficulty, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AutoChessCheckDifficultyAction 的 `difficultyMode` 配置字段；准确战斗语义待确认。 */
    "_difficultyMode": z.literal("FUNNY").describe("AutoChessCheckDifficultyAction 的 `difficultyMode` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutoChessCheckDifficulty, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutoChessCheckDifficultyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AutochessFilterByBuffStackCountWithEffectInstId, Assembly-CSharp 的严格 Action 数据。
 */
export const AutochessFilterByBuffStackCountWithEffectInstIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AutochessFilterByBuffStackCountWithEffectInstId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("EQUALS").describe("AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCount` 配置字段；准确战斗语义待确认。 */
    "_stackCount": z.number().describe("AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCount` 配置字段；准确战斗语义待确认。"),
    /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。 */
    "_stackCountKey": z.null().describe("AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。"),
    /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。 */
    "_stackCountPeeling": z.number().describe("AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AutochessFilterByBuffStackCountWithEffectInstId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AutochessFilterByBuffStackCountWithEffectInstIdAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA27Schema = z
  .discriminatedUnion("$type", [AttachAsDerivedBuffActionSchema, AttachAsDerivedBuffByIdActionSchema, AttachAsDerivedBuffToMainBuffActionSchema, AttributeModifierWithBBActionSchema, AttributeModifierWithCertainBuffCountActionSchema, AttributeModifierWithLevelProgressActionSchema, AutoChessAssignBondStackCntToBBActionSchema, AutoChessAssignGatheredAttributeToBlackboardActionSchema, AutoChessCheckDifficultyActionSchema, AutochessFilterByBuffStackCountWithEffectInstIdActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA27>;
