/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RallyPointRebornAction, RandomActionAction, RandomCreateBuffAction, RandomSetterAction, RebuildCharacterOnRandomTileAction, RebuildCharacterOnTileInRangeAction, RecalculateDamageAction, RechargeTokenAction, RechargeTokenByKeyAction, RecordAbilityRemainingTimeAction, BattleActionR02 } from "../../../../types/buff-template-data/actions/r/actions-r-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RallyPointReborn, Assembly-CSharp 的严格 Action 数据。
 */
export const RallyPointRebornActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RallyPointReborn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RallyPointRebornAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RallyPointRebornAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RallyPointReborn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RallyPointRebornAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RandomAction, Assembly-CSharp 的严格 Action 数据。
 */
export const RandomActionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RandomAction, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.array(BattleActionReferenceSchema).describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** RandomActionAction 的 `otherwiseActions` 配置字段；准确战斗语义待确认。 */
    "_otherwiseActions": z.union([
                               z.null(),
                               z.array(BattleActionReferenceSchema),
                             ]).describe("RandomActionAction 的 `otherwiseActions` 配置字段；准确战斗语义待确认。"),
    /** RandomActionAction 的 `probKey` 配置字段；准确战斗语义待确认。 */
    "_probKey": z.string().describe("RandomActionAction 的 `probKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RandomAction, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RandomActionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RandomCreateBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const RandomCreateBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RandomCreateBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RandomCreateBuffAction 的 `buffWithWeight` 配置字段；准确战斗语义待确认。 */
    "_buffWithWeight": z.boolean().describe("RandomCreateBuffAction 的 `buffWithWeight` 配置字段；准确战斗语义待确认。"),
    /** RandomCreateBuffAction 的 `datas` 配置字段；准确战斗语义待确认。 */
    "_datas": z.array(z.strictObject({
                    /** RandomCreateBuffAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": z.strictObject({
                                    /** RandomCreateBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                    "attributes": z.strictObject({
                                                            /** RandomCreateBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                            "abnormalAntis": z.union([
                                                                                         z.null(),
                                                                                         z.array(z.never()),
                                                                                       ]).describe("RandomCreateBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                            /** RandomCreateBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                            "abnormalComboImmunes": z.union([
                                                                                                z.null(),
                                                                                                z.array(z.never()),
                                                                                              ]).describe("RandomCreateBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                            /** RandomCreateBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                            "abnormalCombos": z.union([
                                                                                          z.null(),
                                                                                          z.array(z.never()),
                                                                                        ]).describe("RandomCreateBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                            /** RandomCreateBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                            "abnormalFlags": z.union([
                                                                                         z.null(),
                                                                                         z.array(z.never()),
                                                                                       ]).describe("RandomCreateBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                            /** RandomCreateBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                            "abnormalImmunes": z.union([
                                                                                           z.null(),
                                                                                           z.array(z.never()),
                                                                                         ]).describe("RandomCreateBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                            /** RandomCreateBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                            "attributeModifiers": z.union([
                                                                                              z.null(),
                                                                                              z.array(z.strictObject({
                                                                                                            /** 属性修改器指向的战斗属性。 */
                                                                                                            "attributeType": z.literal("DEF_PENETRATE").describe("属性修改器指向的战斗属性。"),
                                                                                                            /** RandomCreateBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                            "fetchBaseValueFromSourceEntity": z.boolean().describe("RandomCreateBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                            /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                            "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                            /** RandomCreateBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                            "loadFromBlackboard": z.boolean().describe("RandomCreateBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                            /** 黑板参数的数值槽。 */
                                                                                                            "value": z.number().describe("黑板参数的数值槽。"),
                                                                                                          })),
                                                                                            ]).describe("RandomCreateBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                          }).describe("RandomCreateBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                    "audioSignal": z.null().describe("RandomCreateBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                    "blackboard": z.array(z.never()).describe("RandomCreateBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                    "buffKey": z.string().describe("RandomCreateBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                    "clearAllStackCntWhenTimeUp": z.boolean().describe("RandomCreateBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                    "disableOverride": z.boolean().describe("RandomCreateBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                    "durationKey": z.union([
                                                             z.null(),
                                                             z.string(),
                                                           ]).describe("RandomCreateBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                    "enableInitDirectionFromSource": z.boolean().describe("RandomCreateBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                    "firstTriggerInterval": z.number().describe("RandomCreateBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                    "independentCharacterSource": z.boolean().describe("RandomCreateBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                    "isDamageMissable": z.boolean().describe("RandomCreateBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                    "isDurableBuff": z.boolean().describe("RandomCreateBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                    "isFreezable": z.boolean().describe("RandomCreateBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                    "isLevitatable": z.boolean().describe("RandomCreateBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                    "isSilenceable": z.boolean().describe("RandomCreateBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                    "isStunnable": z.boolean().describe("RandomCreateBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                    "lifeTime": z.number().describe("RandomCreateBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("RandomCreateBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                    "loadFromDB": z.boolean().describe("RandomCreateBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                    "maxStackCnt": z.number().describe("RandomCreateBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                    "maxValidStackCnt": z.number().describe("RandomCreateBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                    /** 模板处理战斗事件时使用的优先级。 */
                                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                    /** RandomCreateBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                    "overrideEffectKey": z.null().describe("RandomCreateBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                    "overrideKey": z.null().describe("RandomCreateBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                    "overrideOnEventPriority": z.boolean().describe("RandomCreateBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                    "overrideType": z.enum(["DEFAULT","UNIQUE"]).describe("RandomCreateBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                    "priority": z.number().describe("RandomCreateBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                    "priorityBBKeys": z.array(z.never()).describe("RandomCreateBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("RandomCreateBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                    "statusResistable": z.literal("AUTOMATIC").describe("RandomCreateBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("RandomCreateBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                    "takeSnapshotWhenExtend": z.boolean().describe("RandomCreateBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                    /** RandomCreateBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                    "triggerCnt": z.number().describe("RandomCreateBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                    "triggerInterval": z.number().describe("RandomCreateBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                    "triggerLifeType": z.literal("IMMEDIATELY").describe("RandomCreateBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                    /** RandomCreateBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                    "waitFirstTriggerInterval": z.boolean().describe("RandomCreateBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  }).describe("RandomCreateBuffAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                    /** RandomCreateBuffAction 的 `buffOwner` 配置字段；准确战斗语义待确认。 */
                    "buffOwner": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("RandomCreateBuffAction 的 `buffOwner` 配置字段；准确战斗语义待确认。"),
                    /** RandomCreateBuffAction 的 `weight` 配置字段；准确战斗语义待确认。 */
                    "weight": z.number().describe("RandomCreateBuffAction 的 `weight` 配置字段；准确战斗语义待确认。"),
                    /** RandomCreateBuffAction 的 `weightKey` 配置字段；准确战斗语义待确认。 */
                    "weightKey": z.union([
                                         z.null(),
                                         z.string(),
                                       ]).describe("RandomCreateBuffAction 的 `weightKey` 配置字段；准确战斗语义待确认。"),
                  })).describe("RandomCreateBuffAction 的 `datas` 配置字段；准确战斗语义待确认。"),
    /** RandomCreateBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("RandomCreateBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** RandomCreateBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("RandomCreateBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RandomCreateBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RandomCreateBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RandomSetter, Assembly-CSharp 的严格 Action 数据。
 */
export const RandomSetterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RandomSetter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RandomSetterAction 的 `convertToInt` 配置字段；准确战斗语义待确认。 */
    "_convertToInt": z.boolean().describe("RandomSetterAction 的 `convertToInt` 配置字段；准确战斗语义待确认。"),
    /** RandomSetterAction 的 `targetKey` 配置字段；准确战斗语义待确认。 */
    "_targetKey": z.string().describe("RandomSetterAction 的 `targetKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RandomSetter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RandomSetterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RebuildCharacterOnRandomTile, Assembly-CSharp 的严格 Action 数据。
 */
export const RebuildCharacterOnRandomTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RebuildCharacterOnRandomTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** RebuildCharacterOnRandomTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** RebuildCharacterOnRandomTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** RebuildCharacterOnRandomTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** RebuildCharacterOnRandomTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** RebuildCharacterOnRandomTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** RebuildCharacterOnRandomTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** RebuildCharacterOnRandomTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("RebuildCharacterOnRandomTileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("RebuildCharacterOnRandomTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("RebuildCharacterOnRandomTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("RebuildCharacterOnRandomTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("RebuildCharacterOnRandomTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("RebuildCharacterOnRandomTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("INFINITY").describe("RebuildCharacterOnRandomTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("RebuildCharacterOnRandomTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("RebuildCharacterOnRandomTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** RebuildCharacterOnRandomTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.string().describe("RebuildCharacterOnRandomTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("RebuildCharacterOnRandomTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("UNIQUE").describe("RebuildCharacterOnRandomTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("RebuildCharacterOnRandomTileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("RebuildCharacterOnRandomTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("RebuildCharacterOnRandomTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** RebuildCharacterOnRandomTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("RebuildCharacterOnRandomTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("RebuildCharacterOnRandomTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("INFINITY").describe("RebuildCharacterOnRandomTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** RebuildCharacterOnRandomTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** RebuildCharacterOnRandomTileAction 的 `createBuff` 配置字段；准确战斗语义待确认。 */
    "_createBuff": z.boolean().describe("RebuildCharacterOnRandomTileAction 的 `createBuff` 配置字段；准确战斗语义待确认。"),
    /** RebuildCharacterOnRandomTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("RebuildCharacterOnRandomTileAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RebuildCharacterOnRandomTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RebuildCharacterOnRandomTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RebuildCharacterOnTileInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const RebuildCharacterOnTileInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RebuildCharacterOnTileInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.union([
                   z.null(),
                   z.strictObject({
                           /** RebuildCharacterOnTileInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                           "attributes": z.strictObject({
                                                   /** RebuildCharacterOnTileInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalAntis": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                   /** RebuildCharacterOnTileInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalComboImmunes": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                   /** RebuildCharacterOnTileInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalCombos": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                   /** RebuildCharacterOnTileInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalFlags": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                   /** RebuildCharacterOnTileInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalImmunes": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                   /** RebuildCharacterOnTileInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                   "attributeModifiers": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                 }).describe("RebuildCharacterOnTileInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                           "audioSignal": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                           "blackboard": z.array(z.never()).describe("RebuildCharacterOnTileInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                           "buffKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("RebuildCharacterOnTileInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                           "clearAllStackCntWhenTimeUp": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                           "disableOverride": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                           "durationKey": z.union([
                                                    z.null(),
                                                    z.string(),
                                                  ]).describe("RebuildCharacterOnTileInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                           "enableInitDirectionFromSource": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "firstTriggerInterval": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                           "independentCharacterSource": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                           "isDamageMissable": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                           "isDurableBuff": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                           "isFreezable": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                           "isLevitatable": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                           "isSilenceable": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                           "isStunnable": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                           "lifeTime": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                           "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("RebuildCharacterOnTileInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                           "loadFromDB": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxStackCnt": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxValidStackCnt": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** 模板处理战斗事件时使用的优先级。 */
                           "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                           "overrideEffectKey": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                           "overrideKey": z.null().describe("RebuildCharacterOnTileInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                           "overrideOnEventPriority": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                           "overrideType": z.literal("DEFAULT").describe("RebuildCharacterOnTileInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                           "priority": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                           "priorityBBKeys": z.array(z.never()).describe("RebuildCharacterOnTileInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                           "refreshRemainingTimeWhenStackMax": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                           "statusResistable": z.literal("AUTOMATIC").describe("RebuildCharacterOnTileInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                           "stripBlackboardParamsWithBuffKey": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                           "takeSnapshotWhenExtend": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                           /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                           "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                           "triggerCnt": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                           "triggerInterval": z.number().describe("RebuildCharacterOnTileInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                           "triggerLifeType": z.literal("IMMEDIATELY").describe("RebuildCharacterOnTileInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                           /** RebuildCharacterOnTileInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "waitFirstTriggerInterval": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                         }),
                 ]).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** RebuildCharacterOnTileInRangeAction 的 `createBuff` 配置字段；准确战斗语义待确认。 */
    "_createBuff": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `createBuff` 配置字段；准确战斗语义待确认。"),
    /** RebuildCharacterOnTileInRangeAction 的 `owner` 配置字段；准确战斗语义待确认。 */
    "_owner": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("RebuildCharacterOnTileInRangeAction 的 `owner` 配置字段；准确战斗语义待确认。"),
    /** RebuildCharacterOnTileInRangeAction 的 `randomDirection` 配置字段；准确战斗语义待确认。 */
    "_randomDirection": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `randomDirection` 配置字段；准确战斗语义待确认。"),
    /** RebuildCharacterOnTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("RebuildCharacterOnTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** RebuildCharacterOnTileInRangeAction 的 `rotateBuildDirection` 配置字段；准确战斗语义待确认。 */
    "_rotateBuildDirection": z.boolean().describe("RebuildCharacterOnTileInRangeAction 的 `rotateBuildDirection` 配置字段；准确战斗语义待确认。"),
    /** RebuildCharacterOnTileInRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RebuildCharacterOnTileInRangeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RebuildCharacterOnTileInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RebuildCharacterOnTileInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RecalculateDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const RecalculateDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RecalculateDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RecalculateDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RecalculateDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RechargeToken, Assembly-CSharp 的严格 Action 数据。
 */
export const RechargeTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RechargeToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RechargeTokenAction 的 `cntKey` 配置字段；准确战斗语义待确认。 */
    "_cntKey": z.string().describe("RechargeTokenAction 的 `cntKey` 配置字段；准确战斗语义待确认。"),
    /** RechargeTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
    "_rechargeTiming": z.enum(["NORMAL","ON_FINISH"]).describe("RechargeTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。"),
    /** RechargeTokenAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。 */
    "_refreshRemainingCnt": z.boolean().describe("RechargeTokenAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RechargeToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RechargeTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RechargeTokenByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const RechargeTokenByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RechargeTokenByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RechargeTokenByKeyAction 的 `cntKey` 配置字段；准确战斗语义待确认。 */
    "_cntKey": z.string().describe("RechargeTokenByKeyAction 的 `cntKey` 配置字段；准确战斗语义待确认。"),
    /** RechargeTokenByKeyAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
    "_rechargeTiming": z.literal("NORMAL").describe("RechargeTokenByKeyAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。"),
    /** RechargeTokenByKeyAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。 */
    "_refreshRemainingCnt": z.boolean().describe("RechargeTokenByKeyAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。"),
    /** RechargeTokenByKeyAction 的 `tokenKey` 配置字段；准确战斗语义待确认。 */
    "_tokenKey": z.string().describe("RechargeTokenByKeyAction 的 `tokenKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RechargeTokenByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RechargeTokenByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RecordAbilityRemainingTime, Assembly-CSharp 的严格 Action 数据。
 */
export const RecordAbilityRemainingTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RecordAbilityRemainingTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RecordAbilityRemainingTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("RecordAbilityRemainingTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** RecordAbilityRemainingTimeAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("RecordAbilityRemainingTimeAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** RecordAbilityRemainingTimeAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
    "_recordKey": z.string().describe("RecordAbilityRemainingTimeAction 的 `recordKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RecordAbilityRemainingTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RecordAbilityRemainingTimeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR02Schema = z
  .discriminatedUnion("$type", [RallyPointRebornActionSchema, RandomActionActionSchema, RandomCreateBuffActionSchema, RandomSetterActionSchema, RebuildCharacterOnRandomTileActionSchema, RebuildCharacterOnTileInRangeActionSchema, RecalculateDamageActionSchema, RechargeTokenActionSchema, RechargeTokenByKeyActionSchema, RecordAbilityRemainingTimeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR02>;
