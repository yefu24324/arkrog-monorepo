/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FinishCardBuffByCardAction, FinishCardBuffByKeyInAbilityBlackboardAction, FinishCardBuffsByKeyAction, FinishCurrentWaveAction, FinishDeckBuffByCardUIDAndKeyAction, FinishDeckBuffByKeyAction, FinishDerivedBuffAction, FinishDerivedBuffByIdAction, FinishGameAction, FinishHostBuffsByIdAction, BattleActionF08 } from "../../../../types/buff-template-data/actions/f/actions-f-08.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuffByCard, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishCardBuffByCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishCardBuffByCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishCardBuffByCardAction 的 `exceptOwner` 配置字段；准确战斗语义待确认。 */
    "_exceptOwner": z.boolean().describe("FinishCardBuffByCardAction 的 `exceptOwner` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuffByCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishCardBuffByCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuffByKeyInAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishCardBuffByKeyInAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishCardBuffByKeyInAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishCardBuffByKeyInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("FinishCardBuffByKeyInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** FinishCardBuffByKeyInAbilityBlackboardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("FinishCardBuffByKeyInAbilityBlackboardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishCardBuffByKeyInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
    "_infoType": z.literal("UNIQUE_ID").describe("FinishCardBuffByKeyInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuffByKeyInAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishCardBuffByKeyInAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuffsByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishCardBuffsByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishCardBuffsByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishCardBuffsByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("FinishCardBuffsByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishCardBuffsByKeyAction 的 `findAllCard` 配置字段；准确战斗语义待确认。 */
    "_findAllCard": z.boolean().describe("FinishCardBuffsByKeyAction 的 `findAllCard` 配置字段；准确战斗语义待确认。"),
    /** FinishCardBuffsByKeyAction 的 `ignoreOwner` 配置字段；准确战斗语义待确认。 */
    "_ignoreOwner": z.boolean().describe("FinishCardBuffsByKeyAction 的 `ignoreOwner` 配置字段；准确战斗语义待确认。"),
    /** FinishCardBuffsByKeyAction 的 `onlyOwner` 配置字段；准确战斗语义待确认。 */
    "_onlyOwner": z.boolean().describe("FinishCardBuffsByKeyAction 的 `onlyOwner` 配置字段；准确战斗语义待确认。"),
    /** FinishCardBuffsByKeyAction 的 `useUid` 配置字段；准确战斗语义待确认。 */
    "_useUid": z.boolean().describe("FinishCardBuffsByKeyAction 的 `useUid` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuffsByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishCardBuffsByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishCurrentWave, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishCurrentWaveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishCurrentWave, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishCurrentWaveAction 的 `finishAndSkip` 配置字段；准确战斗语义待确认。 */
    "_finishAndSkip": z.boolean().describe("FinishCurrentWaveAction 的 `finishAndSkip` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** FinishCurrentWaveAction 的 `trackAllManagedEnemiesAtNextWave` 配置字段；准确战斗语义待确认。 */
    "_trackAllManagedEnemiesAtNextWave": z.boolean().describe("FinishCurrentWaveAction 的 `trackAllManagedEnemiesAtNextWave` 配置字段；准确战斗语义待确认。"),
    /** FinishCurrentWaveAction 的 `trackSourceAtNextWave` 配置字段；准确战斗语义待确认。 */
    "_trackSourceAtNextWave": z.boolean().describe("FinishCurrentWaveAction 的 `trackSourceAtNextWave` 配置字段；准确战斗语义待确认。"),
    /** FinishCurrentWaveAction 的 `trackSourceAtWaveDelta` 配置字段；准确战斗语义待确认。 */
    "_trackSourceAtWaveDelta": z.number().describe("FinishCurrentWaveAction 的 `trackSourceAtWaveDelta` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishCurrentWave, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishCurrentWaveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishDeckBuffByCardUIDAndKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishDeckBuffByCardUIDAndKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishDeckBuffByCardUIDAndKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishDeckBuffByCardUIDAndKeyAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** FinishDeckBuffByCardUIDAndKeyAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.union([
                                       z.null(),
                                       z.strictObject({
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                                 "attributes": z.strictObject({
                                                                           /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                                           "abnormalAntis": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                                           /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                                           "abnormalComboImmunes": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                                           /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                                           "abnormalCombos": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                                           /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                                           "abnormalFlags": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                                           /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                                           "abnormalImmunes": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                                           /** FinishDeckBuffByCardUIDAndKeyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                                           "attributeModifiers": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                                         }).describe("FinishDeckBuffByCardUIDAndKeyAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                                 "audioSignal": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                                 "blackboard": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("FinishDeckBuffByCardUIDAndKeyAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                                 "buffKey": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                                 "clearAllStackCntWhenTimeUp": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                                 "disableOverride": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                                 "durationKey": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                                 "enableInitDirectionFromSource": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                                 "firstTriggerInterval": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                                 "independentCharacterSource": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                                 "isDamageMissable": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                                 "isDurableBuff": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                                 "isFreezable": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                                 "isLevitatable": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                                 "isSilenceable": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                                 "isStunnable": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                                 "lifeTime": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                                 "lifeTimeType": z.literal("LIMITED").describe("FinishDeckBuffByCardUIDAndKeyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                                 "loadFromDB": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                                 "maxStackCnt": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                                 "maxValidStackCnt": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                                 /** 模板处理战斗事件时使用的优先级。 */
                                                 "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                                 "overrideEffectKey": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                                 "overrideKey": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                                 "overrideOnEventPriority": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                                 "overrideType": z.literal("DEFAULT").describe("FinishDeckBuffByCardUIDAndKeyAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                                 "priority": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                                 "priorityBBKeys": z.union([
                                                                               z.null(),
                                                                               z.array(z.never()),
                                                                             ]).describe("FinishDeckBuffByCardUIDAndKeyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                                 "refreshRemainingTimeWhenStackMax": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                                 "statusResistable": z.literal("AUTOMATIC").describe("FinishDeckBuffByCardUIDAndKeyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                                 "stripBlackboardParamsWithBuffKey": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                                 "takeSnapshotWhenExtend": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                                 "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                                 "triggerCnt": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                                 "triggerInterval": z.number().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                                 "triggerLifeType": z.literal("IMMEDIATELY").describe("FinishDeckBuffByCardUIDAndKeyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                                 /** FinishDeckBuffByCardUIDAndKeyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                                 "waitFirstTriggerInterval": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                               }),
                                     ]).describe("FinishDeckBuffByCardUIDAndKeyAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.null().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("NONE").describe("FinishDeckBuffByCardUIDAndKeyAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.literal("ALL_THE_TIME").describe("FinishDeckBuffByCardUIDAndKeyAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** FinishDeckBuffByCardUIDAndKeyAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("FinishDeckBuffByCardUIDAndKeyAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** FinishDeckBuffByCardUIDAndKeyAction 的 `deckBuffKey` 配置字段；准确战斗语义待确认。 */
    "_deckBuffKey": z.string().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `deckBuffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishDeckBuffByCardUIDAndKeyAction 的 `readUIDFromInt` 配置字段；准确战斗语义待确认。 */
    "_readUIDFromInt": z.boolean().describe("FinishDeckBuffByCardUIDAndKeyAction 的 `readUIDFromInt` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishDeckBuffByCardUIDAndKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishDeckBuffByCardUIDAndKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishDeckBuffByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishDeckBuffByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishDeckBuffByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishDeckBuffByKeyAction 的 `deckBuffKey` 配置字段；准确战斗语义待确认。 */
    "_deckBuffKey": z.string().describe("FinishDeckBuffByKeyAction 的 `deckBuffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishDeckBuffByKeyAction 的 `removeFromAllCard` 配置字段；准确战斗语义待确认。 */
    "_removeFromAllCard": z.boolean().describe("FinishDeckBuffByKeyAction 的 `removeFromAllCard` 配置字段；准确战斗语义待确认。"),
    /** FinishDeckBuffByKeyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("FinishDeckBuffByKeyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishDeckBuffByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishDeckBuffByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishDerivedBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishDerivedBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishDerivedBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishDerivedBuffAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishDerivedBuffAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishDerivedBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishDerivedBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishDerivedBuffById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishDerivedBuffByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishDerivedBuffById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishDerivedBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishDerivedBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishDerivedBuffByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishDerivedBuffByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishDerivedBuffByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishDerivedBuffByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishDerivedBuffById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishDerivedBuffByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishGame, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishGameActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishGame, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishGameAction 的 `gameResult` 配置字段；准确战斗语义待确认。 */
    "_gameResult": z.string().describe("FinishGameAction 的 `gameResult` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishGame, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishGameAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishHostBuffsById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishHostBuffsByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishHostBuffsById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishHostBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishHostBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishHostBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishHostBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishHostBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishHostBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FinishHostBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishHostBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishHostBuffsById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishHostBuffsByIdAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF08Schema = z
  .discriminatedUnion("$type", [FinishCardBuffByCardActionSchema, FinishCardBuffByKeyInAbilityBlackboardActionSchema, FinishCardBuffsByKeyActionSchema, FinishCurrentWaveActionSchema, FinishDeckBuffByCardUIDAndKeyActionSchema, FinishDeckBuffByKeyActionSchema, FinishDerivedBuffActionSchema, FinishDerivedBuffByIdActionSchema, FinishGameActionSchema, FinishHostBuffsByIdActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF08>;
