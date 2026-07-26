/**
 * buff_template_data 的 L 组 Action Zod Schema。
 */

import { z } from "zod";

import type { LegionModeOnlyCharacterOnDyingAction, LegionModeOnlyCharacterOnRebornlikeAction, LegionModeOnlyCheckCardInHandAction, LegionModeOnlyCheckCardLastDrawTagAction, LegionModeOnlyCheckHandCardNotFullAction, LegionModeOnlyCheckLastCardDrawProfessionAction, LegionModeOnlyCheckLastSelectCardsContainsProfessionAction, LegionModeOnlyClearProfessionLevelAction, LegionModeOnlyCreateBuffToDyingInRangeAction, LegionModeOnlyCreateCardBuffToOneCardByCostAction, BattleActionL02 } from "../../../../types/buff-template-data/actions/l/actions-l-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnDying, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCharacterOnDyingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnDying, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnDying, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCharacterOnDyingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnRebornlike, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCharacterOnRebornlikeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnRebornlike, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyCharacterOnRebornlikeAction 的 `inheritProfessionBuff` 配置字段；准确战斗语义待确认。 */
    "_inheritProfessionBuff": z.boolean().describe("LegionModeOnlyCharacterOnRebornlikeAction 的 `inheritProfessionBuff` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnRebornlike, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCharacterOnRebornlikeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardInHand, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCheckCardInHandActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardInHand, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardInHand, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCheckCardInHandAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardLastDrawTag, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCheckCardLastDrawTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardLastDrawTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyCheckCardLastDrawTagAction 的 `targetGroupId` 配置字段；准确战斗语义待确认。 */
    "_targetGroupId": z.string().describe("LegionModeOnlyCheckCardLastDrawTagAction 的 `targetGroupId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardLastDrawTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCheckCardLastDrawTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckHandCardNotFull, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCheckHandCardNotFullActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCheckHandCardNotFull, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckHandCardNotFull, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCheckHandCardNotFullAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastCardDrawProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCheckLastCardDrawProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastCardDrawProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyCheckLastCardDrawProfessionAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
    "_professionCategory": z.literal("SPECIAL").describe("LegionModeOnlyCheckLastCardDrawProfessionAction 的 `professionCategory` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastCardDrawProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCheckLastCardDrawProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastSelectCardsContainsProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCheckLastSelectCardsContainsProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastSelectCardsContainsProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyCheckLastSelectCardsContainsProfessionAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
    "_professionCategory": z.literal("SNIPER").describe("LegionModeOnlyCheckLastSelectCardsContainsProfessionAction 的 `professionCategory` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastSelectCardsContainsProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCheckLastSelectCardsContainsProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyClearProfessionLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyClearProfessionLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyClearProfessionLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyClearProfessionLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyClearProfessionLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCreateBuffToDyingInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCreateBuffToDyingInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCreateBuffToDyingInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.strictObject({
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.union([
                                                                               z.null(),
                                                                               z.array(z.never()),
                                                                             ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.union([
                                                                        z.null(),
                                                                        z.array(z.never()),
                                                                      ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.union([
                                                                             z.null(),
                                                                             z.array(z.never()),
                                                                           ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.strictObject({
                                             /** 黑板参数键或当前配置项的稳定键。 */
                                             "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                             /** 黑板参数的数值槽。 */
                                             "value": z.number().describe("黑板参数的数值槽。"),
                                             /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                             "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                           })).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.literal("INFINITY").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.string().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.literal("DEFAULT").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxNum` 配置字段；准确战斗语义待确认。 */
    "_maxNum": z.number().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxNum` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER"]).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ALLY").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCreateBuffToDyingInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCreateBuffToDyingInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCreateCardBuffToOneCardByCost, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyCreateCardBuffToOneCardByCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyCreateCardBuffToOneCardByCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardLibraryType` 配置字段；准确战斗语义待确认。 */
    "_cardLibraryType": z.literal("USING").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardLibraryType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `createDeckBuff` 配置字段；准确战斗语义待确认。 */
    "_createDeckBuff": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `createDeckBuff` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.array(z.strictObject({
                                                                                                 /** 属性修改器指向的战斗属性。 */
                                                                                                 "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                                                 /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                 "fetchBaseValueFromSourceEntity": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                 /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                 "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                 /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                 "loadFromBlackboard": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                 /** 黑板参数的数值槽。 */
                                                                                                 "value": z.number().describe("黑板参数的数值槽。"),
                                                                                               })).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.literal("INFINITY").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.union([
                                                                      z.null(),
                                                                      z.string(),
                                                                    ]).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.null().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.enum(["DEFAULT","STACK"]).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.never()).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.null().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("CHOSEN_ONE").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `filterMinCost` 配置字段；准确战斗语义待确认。 */
    "_filterMinCost": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `filterMinCost` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyCreateCardBuffToOneCardByCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyCreateCardBuffToOneCardByCostAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionL02Schema = z
  .discriminatedUnion("$type", [LegionModeOnlyCharacterOnDyingActionSchema, LegionModeOnlyCharacterOnRebornlikeActionSchema, LegionModeOnlyCheckCardInHandActionSchema, LegionModeOnlyCheckCardLastDrawTagActionSchema, LegionModeOnlyCheckHandCardNotFullActionSchema, LegionModeOnlyCheckLastCardDrawProfessionActionSchema, LegionModeOnlyCheckLastSelectCardsContainsProfessionActionSchema, LegionModeOnlyClearProfessionLevelActionSchema, LegionModeOnlyCreateBuffToDyingInRangeActionSchema, LegionModeOnlyCreateCardBuffToOneCardByCostActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionL02>;
