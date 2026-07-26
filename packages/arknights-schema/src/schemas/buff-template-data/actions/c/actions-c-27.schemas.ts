/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateCardBuffToMyTokenAction, CreateCardBuffWithDeckSelectorAction, CreateCardFilterByProfessionAction, CreateDeckBuffAction, CreateDeckBuffByCntAction, CreateDeckBuffWithDeckSelectorAction, CreateDeckBuffWithSelectOrderAction, CreateDeckCardBuffsWithSelectOrderListAction, CreateEffectAction, CreateEffectAtScreenPosAction, BattleActionC27 } from "../../../../types/buff-template-data/actions/c/actions-c-27.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToMyToken, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffToMyTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffToMyToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffToMyTokenAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CreateCardBuffToMyTokenAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyTokenAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffToMyTokenAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyTokenAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffToMyTokenAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyTokenAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffToMyTokenAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyTokenAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","HOLD_BY_BUFF","IMMEDIATELY","UNTIL_NEXT_SPAWN"]).describe("CreateCardBuffToMyTokenAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyTokenAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffToMyTokenAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToMyToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffToMyTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffWithDeckSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffWithDeckSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffWithDeckSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("CreateCardBuffWithDeckSelectorAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
    "_deckSelector": z.strictObject({
                           /** CreateCardBuffWithDeckSelectorAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                           "categoryMask": z.literal("TANK, SUPPORT").describe("CreateCardBuffWithDeckSelectorAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                           "enableOverride": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                           "excludeHiddenByCardState": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                           "excludeMe": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                           "excludeNotInHand": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                           "excludeNotShowInCardList": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                           "filterTag": z.null().describe("CreateCardBuffWithDeckSelectorAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                           "mapTags": z.array(z.never()).describe("CreateCardBuffWithDeckSelectorAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                           "onlySelectMe": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateCardBuffWithDeckSelectorAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                           "subprofessionTag": z.null().describe("CreateCardBuffWithDeckSelectorAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                         }).describe("CreateCardBuffWithDeckSelectorAction 的 `deckSelector` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateCardBuffWithDeckSelectorAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("CreateCardBuffWithDeckSelectorAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffWithDeckSelectorAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffWithDeckSelectorAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffWithDeckSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffWithDeckSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardFilterByProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardFilterByProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardFilterByProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardFilterByProfessionAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardFilterByProfessionAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardFilterByProfessionAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardFilterByProfessionAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardFilterByProfessionAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardFilterByProfessionAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardFilterByProfessionAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardFilterByProfessionAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardFilterByProfessionAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["HOLD_BY_BUFF","IMMEDIATELY","UNTIL_NEXT_SPAWN","UNTIL_NEXT_SPAWN_SYNC_WITH_BUFF"]).describe("CreateCardFilterByProfessionAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardFilterByProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
    "_profession": z.enum(["SNIPER","WARRIOR","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, TRAP, PIONEER"]).describe("CreateCardFilterByProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。"),
    /** CreateCardFilterByProfessionAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardFilterByProfessionAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardFilterByProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardFilterByProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateDeckBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateDeckBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateDeckBuffAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** CreateDeckBuffAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("CreateDeckBuffAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("CreateDeckBuffAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** CreateDeckBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** CreateDeckBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.union([
                                                                                            z.null(),
                                                                                            z.array(z.never()),
                                                                                          ]).describe("CreateDeckBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.union([
                                                                                                   z.null(),
                                                                                                   z.array(z.never()),
                                                                                                 ]).describe("CreateDeckBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.union([
                                                                                             z.null(),
                                                                                             z.array(z.never()),
                                                                                           ]).describe("CreateDeckBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.union([
                                                                                            z.null(),
                                                                                            z.array(z.never()),
                                                                                          ]).describe("CreateDeckBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.union([
                                                                                              z.null(),
                                                                                              z.array(z.never()),
                                                                                            ]).describe("CreateDeckBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.union([
                                                                                                 z.null(),
                                                                                                 z.array(z.strictObject({
                                                                                                               /** 属性修改器指向的战斗属性。 */
                                                                                                               "attributeType": z.literal("MAX_DEPLOY_COUNT").describe("属性修改器指向的战斗属性。"),
                                                                                                               /** CreateDeckBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                               "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateDeckBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                               /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                               "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                               /** CreateDeckBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                               "loadFromBlackboard": z.boolean().describe("CreateDeckBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                               /** 黑板参数的数值槽。 */
                                                                                                               "value": z.number().describe("黑板参数的数值槽。"),
                                                                                                             })),
                                                                                               ]).describe("CreateDeckBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("CreateDeckBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("CreateDeckBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.union([
                                                               z.null(),
                                                               z.array(z.never()),
                                                             ]).describe("CreateDeckBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.union([
                                                            z.null(),
                                                            z.string(),
                                                          ]).describe("CreateDeckBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateDeckBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("CreateDeckBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("CreateDeckBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("CreateDeckBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("CreateDeckBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("CreateDeckBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("CreateDeckBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("CreateDeckBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("CreateDeckBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("CreateDeckBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("CreateDeckBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("CreateDeckBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("CreateDeckBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateDeckBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("CreateDeckBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("CreateDeckBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("CreateDeckBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** CreateDeckBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.null().describe("CreateDeckBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.null().describe("CreateDeckBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("CreateDeckBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.literal("DEFAULT").describe("CreateDeckBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("CreateDeckBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.union([
                                                                   z.null(),
                                                                   z.array(z.never()),
                                                                 ]).describe("CreateDeckBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateDeckBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("CreateDeckBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateDeckBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("CreateDeckBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** CreateDeckBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("CreateDeckBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("CreateDeckBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateDeckBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("CreateDeckBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("CreateDeckBuffAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.null().describe("CreateDeckBuffAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.enum(["DEVOURED","KALTS2_S3","NONE","TAUNT","UNDEPLOYABLE","WTRMAN_DISTURB"]).describe("CreateDeckBuffAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("CreateDeckBuffAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.enum(["ALL_THE_TIME","UNTIL_NEXT_SPAWN"]).describe("CreateDeckBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("CreateDeckBuffAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("CreateDeckBuffAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateDeckBuffAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
    "_exceptTokenAndTrap": z.boolean().describe("CreateDeckBuffAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CreateDeckBuffAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateDeckBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `onlyTokenAndTrap` 配置字段；准确战斗语义待确认。 */
    "_onlyTokenAndTrap": z.boolean().describe("CreateDeckBuffAction 的 `onlyTokenAndTrap` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。 */
    "_onlyToTarget": z.boolean().describe("CreateDeckBuffAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `randomOneDeckCard` 配置字段；准确战斗语义待确认。 */
    "_randomOneDeckCard": z.boolean().describe("CreateDeckBuffAction 的 `randomOneDeckCard` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","SOURCE","TARGET"]).describe("CreateDeckBuffAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateDeckBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuffByCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateDeckBuffByCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateDeckBuffByCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateDeckBuffByCntAction 的 `cnt` 配置字段；准确战斗语义待确认。 */
    "_cnt": z.number().describe("CreateDeckBuffByCntAction 的 `cnt` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** CreateDeckBuffByCntAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("CreateDeckBuffByCntAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("CreateDeckBuffByCntAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** CreateDeckBuffByCntAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** CreateDeckBuffByCntAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffByCntAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffByCntAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffByCntAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffByCntAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffByCntAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.array(z.strictObject({
                                                                                                 /** 属性修改器指向的战斗属性。 */
                                                                                                 "attributeType": z.enum(["ATK","ATTACK_SPEED","BLOCK_CNT","DEF","MAX_HP"]).describe("属性修改器指向的战斗属性。"),
                                                                                                 /** CreateDeckBuffByCntAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                 "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateDeckBuffByCntAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                 /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                 "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                 /** CreateDeckBuffByCntAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                 "loadFromBlackboard": z.boolean().describe("CreateDeckBuffByCntAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                 /** 黑板参数的数值槽。 */
                                                                                                 "value": z.number().describe("黑板参数的数值槽。"),
                                                                                               })).describe("CreateDeckBuffByCntAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("CreateDeckBuffByCntAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("CreateDeckBuffByCntAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("CreateDeckBuffByCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateDeckBuffByCntAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("CreateDeckBuffByCntAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("CreateDeckBuffByCntAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("CreateDeckBuffByCntAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("CreateDeckBuffByCntAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("CreateDeckBuffByCntAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("CreateDeckBuffByCntAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("CreateDeckBuffByCntAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("CreateDeckBuffByCntAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("CreateDeckBuffByCntAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("CreateDeckBuffByCntAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("CreateDeckBuffByCntAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("CreateDeckBuffByCntAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.literal("INFINITY").describe("CreateDeckBuffByCntAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("CreateDeckBuffByCntAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("CreateDeckBuffByCntAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("CreateDeckBuffByCntAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** CreateDeckBuffByCntAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.null().describe("CreateDeckBuffByCntAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.null().describe("CreateDeckBuffByCntAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("CreateDeckBuffByCntAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.literal("UNIQUE").describe("CreateDeckBuffByCntAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("CreateDeckBuffByCntAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.never()).describe("CreateDeckBuffByCntAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateDeckBuffByCntAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("CreateDeckBuffByCntAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateDeckBuffByCntAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("CreateDeckBuffByCntAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** CreateDeckBuffByCntAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("CreateDeckBuffByCntAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("CreateDeckBuffByCntAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateDeckBuffByCntAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffByCntAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("CreateDeckBuffByCntAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("CreateDeckBuffByCntAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.null().describe("CreateDeckBuffByCntAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("RL5_RELIC_CARDG").describe("CreateDeckBuffByCntAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("CreateDeckBuffByCntAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.enum(["ALL_THE_TIME","UNTIL_NEXT_SPAWN"]).describe("CreateDeckBuffByCntAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("CreateDeckBuffByCntAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffByCntAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("CreateDeckBuffByCntAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateDeckBuffByCntAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
    "_exceptTokenAndTrap": z.boolean().describe("CreateDeckBuffByCntAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CreateDeckBuffByCntAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateDeckBuffByCntAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `onlyTokenAndTrap` 配置字段；准确战斗语义待确认。 */
    "_onlyTokenAndTrap": z.boolean().describe("CreateDeckBuffByCntAction 的 `onlyTokenAndTrap` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。 */
    "_onlyToTarget": z.boolean().describe("CreateDeckBuffByCntAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `reverseOrdert` 配置字段；准确战斗语义待确认。 */
    "_reverseOrdert": z.boolean().describe("CreateDeckBuffByCntAction 的 `reverseOrdert` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffByCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("CreateDeckBuffByCntAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuffByCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateDeckBuffByCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuffWithDeckSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateDeckBuffWithDeckSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateDeckBuffWithDeckSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateDeckBuffWithDeckSelectorAction 的 `actionSource` 配置字段；准确战斗语义待确认。 */
    "_actionSource": z.literal("BUFF_OWNER").describe("CreateDeckBuffWithDeckSelectorAction 的 `actionSource` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffWithDeckSelectorAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** CreateDeckBuffWithDeckSelectorAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithDeckSelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.array(z.strictObject({
                                                                                                 /** 属性修改器指向的战斗属性。 */
                                                                                                 "attributeType": z.enum(["ATK","MAX_HP"]).describe("属性修改器指向的战斗属性。"),
                                                                                                 /** CreateDeckBuffWithDeckSelectorAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                 "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                 /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                 "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                 /** CreateDeckBuffWithDeckSelectorAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                 "loadFromBlackboard": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                 /** 黑板参数的数值槽。 */
                                                                                                 "value": z.number().describe("黑板参数的数值槽。"),
                                                                                               })).describe("CreateDeckBuffWithDeckSelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("CreateDeckBuffWithDeckSelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("CreateDeckBuffWithDeckSelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("CreateDeckBuffWithDeckSelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("CreateDeckBuffWithDeckSelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.literal("INFINITY").describe("CreateDeckBuffWithDeckSelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.string().describe("CreateDeckBuffWithDeckSelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.null().describe("CreateDeckBuffWithDeckSelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.enum(["DEFAULT","STACK"]).describe("CreateDeckBuffWithDeckSelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.string()).describe("CreateDeckBuffWithDeckSelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("CreateDeckBuffWithDeckSelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("CreateDeckBuffWithDeckSelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateDeckBuffWithDeckSelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithDeckSelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("CreateDeckBuffWithDeckSelectorAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.string().describe("CreateDeckBuffWithDeckSelectorAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("NONE").describe("CreateDeckBuffWithDeckSelectorAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.enum(["ALL_THE_TIME","UNTIL_NEXT_SPAWN"]).describe("CreateDeckBuffWithDeckSelectorAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithDeckSelectorAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateDeckBuffWithDeckSelectorAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffWithDeckSelectorAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
    "_deckSelector": z.strictObject({
                           /** CreateDeckBuffWithDeckSelectorAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                           "categoryMask": z.literal("TANK, SUPPORT").describe("CreateDeckBuffWithDeckSelectorAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                           "enableOverride": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                           "excludeHiddenByCardState": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                           "excludeMe": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                           "excludeNotInHand": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                           "excludeNotShowInCardList": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                           "filterTag": z.null().describe("CreateDeckBuffWithDeckSelectorAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                           "mapTags": z.array(z.never()).describe("CreateDeckBuffWithDeckSelectorAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                           "onlySelectMe": z.boolean().describe("CreateDeckBuffWithDeckSelectorAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithDeckSelectorAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                           "subprofessionTag": z.null().describe("CreateDeckBuffWithDeckSelectorAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                         }).describe("CreateDeckBuffWithDeckSelectorAction 的 `deckSelector` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuffWithDeckSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateDeckBuffWithDeckSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuffWithSelectOrder, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateDeckBuffWithSelectOrderActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateDeckBuffWithSelectOrder, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateDeckBuffWithSelectOrderAction 的 `actionSource` 配置字段；准确战斗语义待确认。 */
    "_actionSource": z.literal("BUFF_OWNER").describe("CreateDeckBuffWithSelectOrderAction 的 `actionSource` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffWithSelectOrderAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** CreateDeckBuffWithSelectOrderAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** CreateDeckBuffWithSelectOrderAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** CreateDeckBuffWithSelectOrderAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithSelectOrderAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithSelectOrderAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithSelectOrderAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithSelectOrderAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckBuffWithSelectOrderAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("CreateDeckBuffWithSelectOrderAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.never()).describe("CreateDeckBuffWithSelectOrderAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("CreateDeckBuffWithSelectOrderAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.literal("INFINITY").describe("CreateDeckBuffWithSelectOrderAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.string().describe("CreateDeckBuffWithSelectOrderAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.string().describe("CreateDeckBuffWithSelectOrderAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.literal("STACK").describe("CreateDeckBuffWithSelectOrderAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.never()).describe("CreateDeckBuffWithSelectOrderAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("CreateDeckBuffWithSelectOrderAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("CreateDeckBuffWithSelectOrderAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("INFINITY").describe("CreateDeckBuffWithSelectOrderAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckBuffWithSelectOrderAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("CreateDeckBuffWithSelectOrderAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.string().describe("CreateDeckBuffWithSelectOrderAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("NONE").describe("CreateDeckBuffWithSelectOrderAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateDeckBuffWithSelectOrderAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckBuffWithSelectOrderAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateDeckBuffWithSelectOrderAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffWithSelectOrderAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
    "_deckSelector": z.strictObject({
                           /** CreateDeckBuffWithSelectOrderAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                           "categoryMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER").describe("CreateDeckBuffWithSelectOrderAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                           "enableOverride": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                           "excludeHiddenByCardState": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                           "excludeMe": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                           "excludeNotInHand": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                           "excludeNotShowInCardList": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                           "filterTag": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                           "mapTags": z.array(z.never()).describe("CreateDeckBuffWithSelectOrderAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                           "onlySelectMe": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                           /** CreateDeckBuffWithSelectOrderAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                           "subprofessionTag": z.null().describe("CreateDeckBuffWithSelectOrderAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                         }).describe("CreateDeckBuffWithSelectOrderAction 的 `deckSelector` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffWithSelectOrderAction 的 `selectOrder` 配置字段；准确战斗语义待确认。 */
    "_selectOrder": z.string().describe("CreateDeckBuffWithSelectOrderAction 的 `selectOrder` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckBuffWithSelectOrderAction 的 `useTokenAsSouurceCard` 配置字段；准确战斗语义待确认。 */
    "_useTokenAsSouurceCard": z.boolean().describe("CreateDeckBuffWithSelectOrderAction 的 `useTokenAsSouurceCard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckBuffWithSelectOrder, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateDeckBuffWithSelectOrderAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckCardBuffsWithSelectOrderList, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateDeckCardBuffsWithSelectOrderListActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateDeckCardBuffsWithSelectOrderList, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `actionSource` 配置字段；准确战斗语义待确认。 */
    "_actionSource": z.literal("SOURCE").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `actionSource` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `createCardBuff` 配置字段；准确战斗语义待确认。 */
    "_createCardBuff": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `createCardBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `createDeckBuff` 配置字段；准确战斗语义待确认。 */
    "_createDeckBuff": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `createDeckBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateDeckCardBuffsWithSelectOrderListAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.string().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.never()).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.literal("INFINITY").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.string().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.literal("UNIQUE").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.never()).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("NONE").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** CreateDeckCardBuffsWithSelectOrderListAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `selectors` 配置字段；准确战斗语义待确认。 */
    "_selectors": z.array(z.strictObject({
                        /** CreateDeckCardBuffsWithSelectOrderListAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
                        "deckSelector": z.strictObject({
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                                                "categoryMask": z.enum(["WARRIOR, SNIPER, CASTER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER"]).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                                                "enableOverride": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                                                "excludeHiddenByCardState": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                                                "excludeMe": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                                                "excludeNotInHand": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                                                "excludeNotShowInCardList": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                                                "filterTag": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                                                "mapTags": z.array(z.never()).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                                                "onlySelectMe": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                                                /** CreateDeckCardBuffsWithSelectOrderListAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                                                "subprofessionTag": z.null().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                                              }).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `deckSelector` 配置字段；准确战斗语义待确认。"),
                        /** CreateDeckCardBuffsWithSelectOrderListAction 的 `selectOrder` 配置字段；准确战斗语义待确认。 */
                        "selectOrder": z.string().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `selectOrder` 配置字段；准确战斗语义待确认。"),
                      })).describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `selectors` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `useTokenAsSouurceCard` 配置字段；准确战斗语义待确认。 */
    "_useTokenAsSouurceCard": z.boolean().describe("CreateDeckCardBuffsWithSelectOrderListAction 的 `useTokenAsSouurceCard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateDeckCardBuffsWithSelectOrderList, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateDeckCardBuffsWithSelectOrderListAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CreateEffectAction 的 `constDirection` 配置字段；准确战斗语义待确认。 */
    "_constDirection": z.string().describe("CreateEffectAction 的 `constDirection` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `createEffectHoldBySource` 配置字段；准确战斗语义待确认。 */
    "_createEffectHoldBySource": z.boolean().describe("CreateEffectAction 的 `createEffectHoldBySource` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `manualSetPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
    "_manualSetPlaybackSpeed": z.boolean().describe("CreateEffectAction 的 `manualSetPlaybackSpeed` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `playbackSpeed` 配置字段；准确战斗语义待确认。 */
    "_playbackSpeed": z.number().describe("CreateEffectAction 的 `playbackSpeed` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CreateEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
    "_useAttackPlaybackSpeed": z.boolean().describe("CreateEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `useConstDirection` 配置字段；准确战斗语义待确认。 */
    "_useConstDirection": z.boolean().describe("CreateEffectAction 的 `useConstDirection` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。 */
    "_useSourceFaceVactor": z.boolean().describe("CreateEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAction 的 `useSourceToTargetDirection` 配置字段；准确战斗语义待确认。 */
    "_useSourceToTargetDirection": z.boolean().describe("CreateEffectAction 的 `useSourceToTargetDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectAtScreenPos, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateEffectAtScreenPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateEffectAtScreenPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateEffectAtScreenPosAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateEffectAtScreenPosAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAtScreenPosAction 的 `screenheightRatio` 配置字段；准确战斗语义待确认。 */
    "_screenheightRatio": z.number().describe("CreateEffectAtScreenPosAction 的 `screenheightRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateEffectAtScreenPosAction 的 `screenWidthRatio` 配置字段；准确战斗语义待确认。 */
    "_screenWidthRatio": z.number().describe("CreateEffectAtScreenPosAction 的 `screenWidthRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateEffectAtScreenPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateEffectAtScreenPosAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC27Schema = z
  .discriminatedUnion("$type", [CreateCardBuffToMyTokenActionSchema, CreateCardBuffWithDeckSelectorActionSchema, CreateCardFilterByProfessionActionSchema, CreateDeckBuffActionSchema, CreateDeckBuffByCntActionSchema, CreateDeckBuffWithDeckSelectorActionSchema, CreateDeckBuffWithSelectOrderActionSchema, CreateDeckCardBuffsWithSelectOrderListActionSchema, CreateEffectActionSchema, CreateEffectAtScreenPosActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC27>;
