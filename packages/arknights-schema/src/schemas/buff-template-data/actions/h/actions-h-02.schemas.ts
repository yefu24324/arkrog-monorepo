/**
 * buff_template_data 的 H 组 Action Zod Schema。
 */

import { z } from "zod";

import type { HalfIdleFindNearestCharacterMapPosAction, HalfIdleGainExpAction, HalfIdleGiantTrapCheckShouldAdjustHeightAction, HalfIdleLhkawaTrapAdjustWaterColorAction, HalfIdleLhkawaTrapNoticeBornAction, HalfIdleLhportCheckAbleToSummonShipAction, HalfIdleLhtownTrapNoticeBornAction, HalfIdleModifyLevelCapacityAction, HalfIdleModifyLevelCapacityWhiteListAction, HalfIdlePolluteTrapNoticeBornAction, BattleActionH02 } from "../../../../types/buff-template-data/actions/h/actions-h-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleFindNearestCharacterMapPos, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleFindNearestCharacterMapPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleFindNearestCharacterMapPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleFindNearestCharacterMapPosAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("HalfIdleFindNearestCharacterMapPosAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleFindNearestCharacterMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("HalfIdleFindNearestCharacterMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleFindNearestCharacterMapPosAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("HalfIdleFindNearestCharacterMapPosAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleFindNearestCharacterMapPosAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
    "_sourcePosType": z.literal("BUFF_OWNER").describe("HalfIdleFindNearestCharacterMapPosAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleFindNearestCharacterMapPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleFindNearestCharacterMapPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleGainExp, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleGainExpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleGainExp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleGainExpAction 的 `gainExpTargetOptions` 配置字段；准确战斗语义待确认。 */
    "_gainExpTargetOptions": z.strictObject({
                                   /** HalfIdleGainExpAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                                   "abnormalCombo": z.string().describe("HalfIdleGainExpAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                                   "abnormalFlag": z.literal("STUNNED").describe("HalfIdleGainExpAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                                   "checkUnitType": z.boolean().describe("HalfIdleGainExpAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                                   "containAbnormalFlag": z.literal("STUNNED").describe("HalfIdleGainExpAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                                   "containSomeAbnormalFlags": z.boolean().describe("HalfIdleGainExpAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                                   "enableAdvancedOptions": z.boolean().describe("HalfIdleGainExpAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                                   "excludeAbnormalFlag": z.literal("STUNNED").describe("HalfIdleGainExpAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                                   "excludeSomeAbnormalFlags": z.boolean().describe("HalfIdleGainExpAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                                   "ignoreAllyTargetFree": z.boolean().describe("HalfIdleGainExpAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                                   "ignoreHealFree": z.boolean().describe("HalfIdleGainExpAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                                   "ignoreTargetFree": z.boolean().describe("HalfIdleGainExpAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                                   "ignoreTargetSide": z.boolean().describe("HalfIdleGainExpAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                                   "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("HalfIdleGainExpAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                                   "professionMask": z.literal("NONE").describe("HalfIdleGainExpAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                                   "purposeMask": z.literal("NONE").describe("HalfIdleGainExpAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                                   "targetCategory": z.literal("DEFAULT, TRAP_OR_ITEM").describe("HalfIdleGainExpAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                                   "targetMotion": z.literal("ALL").describe("HalfIdleGainExpAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                                   "targetSide": z.literal("ALL").describe("HalfIdleGainExpAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                                   /** HalfIdleGainExpAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                                   "unitTypeMask": z.literal("NONE").describe("HalfIdleGainExpAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                                 }).describe("HalfIdleGainExpAction 的 `gainExpTargetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** HalfIdleGainExpAction 的 `upgradedBuff` 配置字段；准确战斗语义待确认。 */
    "_upgradedBuff": z.strictObject({
                           /** HalfIdleGainExpAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                           "attributes": z.strictObject({
                                                 /** HalfIdleGainExpAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalAntis": z.null().describe("HalfIdleGainExpAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                 /** HalfIdleGainExpAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalComboImmunes": z.null().describe("HalfIdleGainExpAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** HalfIdleGainExpAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalCombos": z.null().describe("HalfIdleGainExpAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                 /** HalfIdleGainExpAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalFlags": z.null().describe("HalfIdleGainExpAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                 /** HalfIdleGainExpAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalImmunes": z.null().describe("HalfIdleGainExpAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** HalfIdleGainExpAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                 "attributeModifiers": z.null().describe("HalfIdleGainExpAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                               }).describe("HalfIdleGainExpAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                           "audioSignal": z.string().describe("HalfIdleGainExpAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                           "blackboard": z.array(z.never()).describe("HalfIdleGainExpAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                           "buffKey": z.string().describe("HalfIdleGainExpAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                           "clearAllStackCntWhenTimeUp": z.boolean().describe("HalfIdleGainExpAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                           "disableOverride": z.boolean().describe("HalfIdleGainExpAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                           "durationKey": z.string().describe("HalfIdleGainExpAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                           "enableInitDirectionFromSource": z.boolean().describe("HalfIdleGainExpAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "firstTriggerInterval": z.number().describe("HalfIdleGainExpAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                           "independentCharacterSource": z.boolean().describe("HalfIdleGainExpAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                           "isDamageMissable": z.boolean().describe("HalfIdleGainExpAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                           "isDurableBuff": z.boolean().describe("HalfIdleGainExpAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                           "isFreezable": z.boolean().describe("HalfIdleGainExpAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                           "isLevitatable": z.boolean().describe("HalfIdleGainExpAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                           "isSilenceable": z.boolean().describe("HalfIdleGainExpAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                           "isStunnable": z.boolean().describe("HalfIdleGainExpAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                           "lifeTime": z.number().describe("HalfIdleGainExpAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                           "lifeTimeType": z.literal("LIMITED").describe("HalfIdleGainExpAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                           "loadFromDB": z.boolean().describe("HalfIdleGainExpAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxStackCnt": z.number().describe("HalfIdleGainExpAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxValidStackCnt": z.number().describe("HalfIdleGainExpAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** 模板处理战斗事件时使用的优先级。 */
                           "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                           /** HalfIdleGainExpAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                           "overrideEffectKey": z.string().describe("HalfIdleGainExpAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                           "overrideKey": z.null().describe("HalfIdleGainExpAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                           "overrideOnEventPriority": z.boolean().describe("HalfIdleGainExpAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                           "overrideType": z.literal("DEFAULT").describe("HalfIdleGainExpAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                           "priority": z.number().describe("HalfIdleGainExpAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                           "priorityBBKeys": z.array(z.never()).describe("HalfIdleGainExpAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                           "refreshRemainingTimeWhenStackMax": z.boolean().describe("HalfIdleGainExpAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                           "statusResistable": z.literal("AUTOMATIC").describe("HalfIdleGainExpAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                           "stripBlackboardParamsWithBuffKey": z.boolean().describe("HalfIdleGainExpAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                           "takeSnapshotWhenExtend": z.boolean().describe("HalfIdleGainExpAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                           /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                           "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                           /** HalfIdleGainExpAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                           "triggerCnt": z.number().describe("HalfIdleGainExpAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                           "triggerInterval": z.number().describe("HalfIdleGainExpAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                           "triggerLifeType": z.literal("IMMEDIATELY").describe("HalfIdleGainExpAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                           /** HalfIdleGainExpAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "waitFirstTriggerInterval": z.boolean().describe("HalfIdleGainExpAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                         }).describe("HalfIdleGainExpAction 的 `upgradedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleGainExp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleGainExpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleGiantTrapCheckShouldAdjustHeight, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleGiantTrapCheckShouldAdjustHeightActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleGiantTrapCheckShouldAdjustHeight, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** HalfIdleGiantTrapCheckShouldAdjustHeightAction 的 `targetBuildableType` 配置字段；准确战斗语义待确认。 */
    "_targetBuildableType": z.literal("RANGED").describe("HalfIdleGiantTrapCheckShouldAdjustHeightAction 的 `targetBuildableType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleGiantTrapCheckShouldAdjustHeightAction 的 `targetHeightType` 配置字段；准确战斗语义待确认。 */
    "_targetHeightType": z.literal("HIGHLAND").describe("HalfIdleGiantTrapCheckShouldAdjustHeightAction 的 `targetHeightType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleGiantTrapCheckShouldAdjustHeight, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleGiantTrapCheckShouldAdjustHeightAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapAdjustWaterColor, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleLhkawaTrapAdjustWaterColorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapAdjustWaterColor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleLhkawaTrapAdjustWaterColorAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdleLhkawaTrapAdjustWaterColorAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleLhkawaTrapAdjustWaterColorAction 的 `isPolluted` 配置字段；准确战斗语义待确认。 */
    "_isPolluted": z.boolean().describe("HalfIdleLhkawaTrapAdjustWaterColorAction 的 `isPolluted` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapAdjustWaterColor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleLhkawaTrapAdjustWaterColorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapNoticeBorn, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleLhkawaTrapNoticeBornActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapNoticeBorn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleLhkawaTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdleLhkawaTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleLhkawaTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("HalfIdleLhkawaTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapNoticeBorn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleLhkawaTrapNoticeBornAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhportCheckAbleToSummonShip, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleLhportCheckAbleToSummonShipActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleLhportCheckAbleToSummonShip, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleLhportCheckAbleToSummonShipAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdleLhportCheckAbleToSummonShipAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhportCheckAbleToSummonShip, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleLhportCheckAbleToSummonShipAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhtownTrapNoticeBorn, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleLhtownTrapNoticeBornActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleLhtownTrapNoticeBorn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleLhtownTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdleLhtownTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleLhtownTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("HalfIdleLhtownTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleLhtownTrapNoticeBorn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleLhtownTrapNoticeBornAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacity, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleModifyLevelCapacityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacity, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleModifyLevelCapacityAction 的 `isAdd` 配置字段；准确战斗语义待确认。 */
    "_isAdd": z.boolean().describe("HalfIdleModifyLevelCapacityAction 的 `isAdd` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleModifyLevelCapacityAction 的 `levelCapacityKey` 配置字段；准确战斗语义待确认。 */
    "_levelCapacityKey": z.string().describe("HalfIdleModifyLevelCapacityAction 的 `levelCapacityKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacity, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleModifyLevelCapacityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacityWhiteList, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleModifyLevelCapacityWhiteListActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacityWhiteList, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleModifyLevelCapacityWhiteListAction 的 `isAdd` 配置字段；准确战斗语义待确认。 */
    "_isAdd": z.boolean().describe("HalfIdleModifyLevelCapacityWhiteListAction 的 `isAdd` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacityWhiteList, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleModifyLevelCapacityWhiteListAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeBorn, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdlePolluteTrapNoticeBornActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeBorn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdlePolluteTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdlePolluteTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdlePolluteTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("HalfIdlePolluteTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeBorn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdlePolluteTrapNoticeBornAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionH02Schema = z
  .discriminatedUnion("$type", [HalfIdleFindNearestCharacterMapPosActionSchema, HalfIdleGainExpActionSchema, HalfIdleGiantTrapCheckShouldAdjustHeightActionSchema, HalfIdleLhkawaTrapAdjustWaterColorActionSchema, HalfIdleLhkawaTrapNoticeBornActionSchema, HalfIdleLhportCheckAbleToSummonShipActionSchema, HalfIdleLhtownTrapNoticeBornActionSchema, HalfIdleModifyLevelCapacityActionSchema, HalfIdleModifyLevelCapacityWhiteListActionSchema, HalfIdlePolluteTrapNoticeBornActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionH02>;
