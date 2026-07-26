/**
 * buff_template_data 的 D 组 Action Zod Schema。
 */

import { z } from "zod";

import type { DurBusAbilityCheckPassengersAction, DurBusAbilityReleasePassengerAction, DynamicChangeUnitShadowAction, DywqgsCheckChessSiegeAction, DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction, BattleActionD04 } from "../../../../types/buff-template-data/actions/d/actions-d-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DurBusAbilityCheckPassengers, Assembly-CSharp 的严格 Action 数据。
 */
export const DurBusAbilityCheckPassengersActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DurBusAbilityCheckPassengers, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DurBusAbilityCheckPassengersAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("DurBusAbilityCheckPassengersAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityCheckPassengersAction 的 `markCurrentPassengers` 配置字段；准确战斗语义待确认。 */
    "_markCurrentPassengers": z.boolean().describe("DurBusAbilityCheckPassengersAction 的 `markCurrentPassengers` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityCheckPassengersAction 的 `searchPassengersStatus` 配置字段；准确战斗语义待确认。 */
    "_searchPassengersStatus": z.boolean().describe("DurBusAbilityCheckPassengersAction 的 `searchPassengersStatus` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityCheckPassengersAction 的 `setSearchPassengersStatus` 配置字段；准确战斗语义待确认。 */
    "_setSearchPassengersStatus": z.boolean().describe("DurBusAbilityCheckPassengersAction 的 `setSearchPassengersStatus` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DurBusAbilityCheckPassengers, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DurBusAbilityCheckPassengersAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DurBusAbilityReleasePassenger, Assembly-CSharp 的严格 Action 数据。
 */
export const DurBusAbilityReleasePassengerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DurBusAbilityReleasePassenger, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DurBusAbilityReleasePassengerAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("DurBusAbilityReleasePassengerAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityReleasePassengerAction 的 `releaseLastOnly` 配置字段；准确战斗语义待确认。 */
    "_releaseLastOnly": z.boolean().describe("DurBusAbilityReleasePassengerAction 的 `releaseLastOnly` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityReleasePassengerAction 的 `releaseMarkedOnly` 配置字段；准确战斗语义待确认。 */
    "_releaseMarkedOnly": z.boolean().describe("DurBusAbilityReleasePassengerAction 的 `releaseMarkedOnly` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityReleasePassengerAction 的 `releaseOnProjectileCurrentPos` 配置字段；准确战斗语义待确认。 */
    "_releaseOnProjectileCurrentPos": z.boolean().describe("DurBusAbilityReleasePassengerAction 的 `releaseOnProjectileCurrentPos` 配置字段；准确战斗语义待确认。"),
    /** DurBusAbilityReleasePassengerAction 的 `releaseOnProjectileTracePos` 配置字段；准确战斗语义待确认。 */
    "_releaseOnProjectileTracePos": z.boolean().describe("DurBusAbilityReleasePassengerAction 的 `releaseOnProjectileTracePos` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DurBusAbilityReleasePassenger, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DurBusAbilityReleasePassengerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DynamicChangeUnitShadow, Assembly-CSharp 的严格 Action 数据。
 */
export const DynamicChangeUnitShadowActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DynamicChangeUnitShadow, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DynamicChangeUnitShadowAction 的 `enableShadow` 配置字段；准确战斗语义待确认。 */
    "_enableShadow": z.boolean().describe("DynamicChangeUnitShadowAction 的 `enableShadow` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DynamicChangeUnitShadow, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DynamicChangeUnitShadowAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DywqgsCheckChessSiege, Assembly-CSharp 的严格 Action 数据。
 */
export const DywqgsCheckChessSiegeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DywqgsCheckChessSiege, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DywqgsCheckChessSiegeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** DywqgsCheckChessSiegeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** DywqgsCheckChessSiegeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** DywqgsCheckChessSiegeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** DywqgsCheckChessSiegeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** DywqgsCheckChessSiegeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.array(z.string()).describe("DywqgsCheckChessSiegeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** DywqgsCheckChessSiegeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** DywqgsCheckChessSiegeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("DywqgsCheckChessSiegeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("DywqgsCheckChessSiegeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("DywqgsCheckChessSiegeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("DywqgsCheckChessSiegeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("DywqgsCheckChessSiegeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("DywqgsCheckChessSiegeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.literal("LIMITED").describe("DywqgsCheckChessSiegeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("DywqgsCheckChessSiegeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("DywqgsCheckChessSiegeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** DywqgsCheckChessSiegeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.string().describe("DywqgsCheckChessSiegeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("DywqgsCheckChessSiegeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("EXTEND").describe("DywqgsCheckChessSiegeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("DywqgsCheckChessSiegeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("DywqgsCheckChessSiegeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** DywqgsCheckChessSiegeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("DywqgsCheckChessSiegeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("DywqgsCheckChessSiegeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("DywqgsCheckChessSiegeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** DywqgsCheckChessSiegeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("DywqgsCheckChessSiegeAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** DywqgsCheckChessSiegeAction 的 `flagBuff` 配置字段；准确战斗语义待确认。 */
    "_flagBuff": z.strictObject({
                       /** DywqgsCheckChessSiegeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** DywqgsCheckChessSiegeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** DywqgsCheckChessSiegeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** DywqgsCheckChessSiegeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** DywqgsCheckChessSiegeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.array(z.string()).describe("DywqgsCheckChessSiegeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** DywqgsCheckChessSiegeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** DywqgsCheckChessSiegeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("DywqgsCheckChessSiegeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("DywqgsCheckChessSiegeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("DywqgsCheckChessSiegeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.string().describe("DywqgsCheckChessSiegeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("DywqgsCheckChessSiegeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("DywqgsCheckChessSiegeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.literal("LIMITED").describe("DywqgsCheckChessSiegeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("DywqgsCheckChessSiegeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("DywqgsCheckChessSiegeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** DywqgsCheckChessSiegeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.string().describe("DywqgsCheckChessSiegeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("DywqgsCheckChessSiegeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.literal("EXTEND").describe("DywqgsCheckChessSiegeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("DywqgsCheckChessSiegeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("DywqgsCheckChessSiegeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("DywqgsCheckChessSiegeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** DywqgsCheckChessSiegeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("DywqgsCheckChessSiegeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("DywqgsCheckChessSiegeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.literal("IMMEDIATELY").describe("DywqgsCheckChessSiegeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** DywqgsCheckChessSiegeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     }).describe("DywqgsCheckChessSiegeAction 的 `flagBuff` 配置字段；准确战斗语义待确认。"),
    /** DywqgsCheckChessSiegeAction 的 `options` 配置字段；准确战斗语义待确认。 */
    "_options": z.strictObject({
                      /** DywqgsCheckChessSiegeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMask": z.literal("NONE").describe("DywqgsCheckChessSiegeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMaskExcept": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "allowAllAdvancedBuildableMask": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                      "allowNoneBuildableType": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                      "allowNonePassableMask": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "allowedTileBlackboardKey": z.null().describe("DywqgsCheckChessSiegeAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                      "buildableType": z.literal("ALL").describe("DywqgsCheckChessSiegeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                      "checkBuildableOrPassable": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                      "checkExtraBuildableCheckers": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                      "checkHeightType": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                      "checkTileHidden": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                      "checkTileMode": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                      "checkTileMoveCost": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                      "checkTileTypes": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                      "exceptTileTypes": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "excludeTileBlackboardKey": z.null().describe("DywqgsCheckChessSiegeAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                      "heightType": z.literal("LOWLAND").describe("DywqgsCheckChessSiegeAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                      "modeIndex": z.number().describe("DywqgsCheckChessSiegeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                      "moveCostCompareType": z.literal("LT").describe("DywqgsCheckChessSiegeAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                      "moveCostThreshold": z.number().describe("DywqgsCheckChessSiegeAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                      "passableMask": z.literal("ALL").describe("DywqgsCheckChessSiegeAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsCheckChessSiegeAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                      "tileTypesMask": z.literal("NONE").describe("DywqgsCheckChessSiegeAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。"),
                    }).describe("DywqgsCheckChessSiegeAction 的 `options` 配置字段；准确战斗语义待确认。"),
    /** DywqgsCheckChessSiegeAction 的 `siegedAudioSignal` 配置字段；准确战斗语义待确认。 */
    "_siegedAudioSignal": z.string().describe("DywqgsCheckChessSiegeAction 的 `siegedAudioSignal` 配置字段；准确战斗语义待确认。"),
    /** DywqgsCheckChessSiegeAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("DywqgsCheckChessSiegeAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** DywqgsCheckChessSiegeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** DywqgsCheckChessSiegeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("DywqgsCheckChessSiegeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("CAMOUFLAGE").describe("DywqgsCheckChessSiegeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("DywqgsCheckChessSiegeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("DywqgsCheckChessSiegeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("DywqgsCheckChessSiegeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER").describe("DywqgsCheckChessSiegeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("DywqgsCheckChessSiegeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT, TRAP_OR_ITEM").describe("DywqgsCheckChessSiegeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("DywqgsCheckChessSiegeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("DywqgsCheckChessSiegeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** DywqgsCheckChessSiegeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("DywqgsCheckChessSiegeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("DywqgsCheckChessSiegeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DywqgsCheckChessSiege, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DywqgsCheckChessSiegeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DywqgsSpawnTokenOnExceptCharacterSurroundedTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const DywqgsSpawnTokenOnExceptCharacterSurroundedTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DywqgsSpawnTokenOnExceptCharacterSurroundedTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `options` 配置字段；准确战斗语义待确认。 */
    "_options": z.strictObject({
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMask": z.literal("NONE").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMaskExcept": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "allowAllAdvancedBuildableMask": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                      "allowNoneBuildableType": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                      "allowNonePassableMask": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "allowedTileBlackboardKey": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                      "buildableType": z.literal("ALL").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                      "checkBuildableOrPassable": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                      "checkExtraBuildableCheckers": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                      "checkHeightType": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                      "checkTileHidden": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                      "checkTileMode": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                      "checkTileMoveCost": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                      "checkTileTypes": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                      "exceptTileTypes": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "excludeTileBlackboardKey": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                      "heightType": z.literal("LOWLAND").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                      "modeIndex": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                      "moveCostCompareType": z.literal("LT").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                      "moveCostThreshold": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                      "passableMask": z.literal("NONE").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
                      /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                      "tileTypesMask": z.literal("NONE").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。"),
                    }).describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `options` 配置字段；准确战斗语义待确认。"),
    /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `spawnCnt` 配置字段；准确战斗语义待确认。 */
    "_spawnCnt": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `spawnCnt` 配置字段；准确战斗语义待确认。"),
    /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `spawnOnRandomTiles` 配置字段；准确战斗语义待确认。 */
    "_spawnOnRandomTiles": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `spawnOnRandomTiles` 配置字段；准确战斗语义待确认。"),
    /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.string().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.array(z.never()).describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DywqgsSpawnTokenOnExceptCharacterSurroundedTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionD04Schema = z
  .discriminatedUnion("$type", [DurBusAbilityCheckPassengersActionSchema, DurBusAbilityReleasePassengerActionSchema, DynamicChangeUnitShadowActionSchema, DywqgsCheckChessSiegeActionSchema, DywqgsSpawnTokenOnExceptCharacterSurroundedTilesActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionD04>;
