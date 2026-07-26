/**
 * buff_template_data 的 H 组 Action Zod Schema。
 */

import { z } from "zod";

import type { HalfIdlePolluteTrapNoticeDeathAction, HalfIdlePortTrySummonShipAction, HalfIdleSummonEnemyAtTargetMapPosAction, HalfIdleSummonRandomEnemyAtTargetMapPosAction, HalfIdleTrapSwitchModeWithFourDirRuleAction, HalfIdleTriggerIrrigateAction, HalfIdleTriggerTrapUpgradeCheckAction, HalfIdleUpgradeEquipAction, HalfIdleUpgradeTrapAction, HalfIdleUpgradeTrapWithFourDirRuleAction, BattleActionH03 } from "../../../../types/buff-template-data/actions/h/actions-h-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeDeath, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdlePolluteTrapNoticeDeathActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeDeath, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdlePolluteTrapNoticeDeathAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdlePolluteTrapNoticeDeathAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeDeath, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdlePolluteTrapNoticeDeathAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdlePortTrySummonShip, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdlePortTrySummonShipActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdlePortTrySummonShip, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdlePortTrySummonShipAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdlePortTrySummonShipAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdlePortTrySummonShip, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdlePortTrySummonShipAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleSummonEnemyAtTargetMapPos, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleSummonEnemyAtTargetMapPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleSummonEnemyAtTargetMapPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.union([
                                             z.null(),
                                             z.string(),
                                           ]).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.string().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffToEnemySourceType` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemySourceType": z.literal("BUFF_OWNER").describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffToEnemySourceType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `enemyId` 配置字段；准确战斗语义待确认。 */
    "_enemyId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `enemyId` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `hasBuffToEnemySource` 配置字段；准确战斗语义待确认。 */
    "_hasBuffToEnemySource": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `hasBuffToEnemySource` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("HalfIdleSummonEnemyAtTargetMapPosAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleSummonEnemyAtTargetMapPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleSummonEnemyAtTargetMapPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleSummonRandomEnemyAtTargetMapPos, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleSummonRandomEnemyAtTargetMapPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleSummonRandomEnemyAtTargetMapPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.string().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.string().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.literal("INFINITY").describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.string().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffToEnemySourceType` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemySourceType": z.literal("BUFF_OWNER").describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffToEnemySourceType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `enemyIds` 配置字段；准确战斗语义待确认。 */
    "_enemyIds": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `enemyIds` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `hasBuffToEnemySource` 配置字段；准确战斗语义待确认。 */
    "_hasBuffToEnemySource": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `hasBuffToEnemySource` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `probs` 配置字段；准确战斗语义待确认。 */
    "_probs": z.null().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `probs` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleSummonRandomEnemyAtTargetMapPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleSummonRandomEnemyAtTargetMapPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleTrapSwitchModeWithFourDirRule, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleTrapSwitchModeWithFourDirRuleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleTrapSwitchModeWithFourDirRule, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `modeIndices` 配置字段；准确战斗语义待确认。 */
    "_modeIndices": z.array(z.number()).describe("HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `modeIndices` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
    "_sourcePosType": z.literal("BUFF_OWNER").describe("HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
    "_targetPosType": z.literal("BUFF_OWNER").describe("HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `targetPosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `upgradeTags` 配置字段；准确战斗语义待确认。 */
    "_upgradeTags": z.array(z.string()).describe("HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `upgradeTags` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleTrapSwitchModeWithFourDirRule, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleTrapSwitchModeWithFourDirRuleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleTriggerIrrigate, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleTriggerIrrigateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleTriggerIrrigate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleTriggerIrrigateAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdleTriggerIrrigateAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleTriggerIrrigateAction 的 `firstIrrigate` 配置字段；准确战斗语义待确认。 */
    "_firstIrrigate": z.boolean().describe("HalfIdleTriggerIrrigateAction 的 `firstIrrigate` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleTriggerIrrigate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleTriggerIrrigateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleTriggerTrapUpgradeCheck, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleTriggerTrapUpgradeCheckActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleTriggerTrapUpgradeCheck, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleTriggerTrapUpgradeCheckAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
    "_sourcePosType": z.literal("BUFF_OWNER").describe("HalfIdleTriggerTrapUpgradeCheckAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleTriggerTrapUpgradeCheck, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleTriggerTrapUpgradeCheckAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeEquip, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleUpgradeEquipActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleUpgradeEquip, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeEquip, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleUpgradeEquipAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleUpgradeTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleUpgradeTrapAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
    "_forceSpawn": z.boolean().describe("HalfIdleUpgradeTrapAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
    "_sourcePosType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("HalfIdleUpgradeTrapAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
    "_targetPosType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("HalfIdleUpgradeTrapAction 的 `targetPosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapAction 的 `upgradeTrapId` 配置字段；准确战斗语义待确认。 */
    "_upgradeTrapId": z.string().describe("HalfIdleUpgradeTrapAction 的 `upgradeTrapId` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapAction 的 `upgradeTrapKey` 配置字段；准确战斗语义待确认。 */
    "_upgradeTrapKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("HalfIdleUpgradeTrapAction 的 `upgradeTrapKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleUpgradeTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithFourDirRule, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleUpgradeTrapWithFourDirRuleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithFourDirRule, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
    "_sourcePosType": z.literal("BUFF_OWNER").describe("HalfIdleUpgradeTrapWithFourDirRuleAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
    "_targetPosType": z.literal("BUFF_OWNER").describe("HalfIdleUpgradeTrapWithFourDirRuleAction 的 `targetPosType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `upgradeMaps` 配置字段；准确战斗语义待确认。 */
    "_upgradeMaps": z.array(z.strictObject({
                          /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `direvedTrapID` 配置字段；准确战斗语义待确认。 */
                          "direvedTrapID": z.string().describe("HalfIdleUpgradeTrapWithFourDirRuleAction 的 `direvedTrapID` 配置字段；准确战斗语义待确认。"),
                          /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `trapTag` 配置字段；准确战斗语义待确认。 */
                          "trapTag": z.string().describe("HalfIdleUpgradeTrapWithFourDirRuleAction 的 `trapTag` 配置字段；准确战斗语义待确认。"),
                        })).describe("HalfIdleUpgradeTrapWithFourDirRuleAction 的 `upgradeMaps` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithFourDirRule, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleUpgradeTrapWithFourDirRuleAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionH03Schema = z
  .discriminatedUnion("$type", [HalfIdlePolluteTrapNoticeDeathActionSchema, HalfIdlePortTrySummonShipActionSchema, HalfIdleSummonEnemyAtTargetMapPosActionSchema, HalfIdleSummonRandomEnemyAtTargetMapPosActionSchema, HalfIdleTrapSwitchModeWithFourDirRuleActionSchema, HalfIdleTriggerIrrigateActionSchema, HalfIdleTriggerTrapUpgradeCheckActionSchema, HalfIdleUpgradeEquipActionSchema, HalfIdleUpgradeTrapActionSchema, HalfIdleUpgradeTrapWithFourDirRuleActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionH03>;
