/**
 * buff_template_data 的 E 组 Action Zod Schema。
 */

import { z } from "zod";

import type { EnemyChangeRouteToTargetAction, EnemyChangeRouteToTargetUseSelectorAction, EnemyDuelReportCombatAction, EnemyDuelSummonEnemiesAction, EnemyDurcarChangeDirectionAction, EnemyDurcarCheckOverlapWithHighlandAction, EnemyFallDownAction, EnemyForceTracePositionAction, EnemyHasValidTokenAction, EnemyKillTokenAction, BattleActionE02 } from "../../../../types/buff-template-data/actions/e/actions-e-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyChangeRouteToTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyChangeRouteToTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyChangeRouteToTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyChangeRouteToTargetAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
    "_enemy": z.string().describe("EnemyChangeRouteToTargetAction 的 `enemy` 配置字段；准确战斗语义待确认。"),
    /** EnemyChangeRouteToTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_SOURCE").describe("EnemyChangeRouteToTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyChangeRouteToTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyChangeRouteToTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyChangeRouteToTargetUseSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyChangeRouteToTargetUseSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyChangeRouteToTargetUseSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyChangeRouteToTargetUseSelectorAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
    "_enemy": z.string().describe("EnemyChangeRouteToTargetUseSelectorAction 的 `enemy` 配置字段；准确战斗语义待确认。"),
    /** EnemyChangeRouteToTargetUseSelectorAction 的 `tileSelectorAbilityName` 配置字段；准确战斗语义待确认。 */
    "_tileSelectorAbilityName": z.string().describe("EnemyChangeRouteToTargetUseSelectorAction 的 `tileSelectorAbilityName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyChangeRouteToTargetUseSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyChangeRouteToTargetUseSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyDuelReportCombat, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyDuelReportCombatActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyDuelReportCombat, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyDuelReportCombat, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyDuelReportCombatAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyDuelSummonEnemies, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyDuelSummonEnemiesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyDuelSummonEnemies, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyDuelSummonEnemiesAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_addBuffToEnemy": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** EnemyDuelSummonEnemiesAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** EnemyDuelSummonEnemiesAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.null().describe("EnemyDuelSummonEnemiesAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** EnemyDuelSummonEnemiesAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.null().describe("EnemyDuelSummonEnemiesAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** EnemyDuelSummonEnemiesAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.null().describe("EnemyDuelSummonEnemiesAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** EnemyDuelSummonEnemiesAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.null().describe("EnemyDuelSummonEnemiesAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** EnemyDuelSummonEnemiesAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.null().describe("EnemyDuelSummonEnemiesAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** EnemyDuelSummonEnemiesAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.null().describe("EnemyDuelSummonEnemiesAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("EnemyDuelSummonEnemiesAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("EnemyDuelSummonEnemiesAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("EnemyDuelSummonEnemiesAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.null().describe("EnemyDuelSummonEnemiesAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("EnemyDuelSummonEnemiesAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("EnemyDuelSummonEnemiesAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("EnemyDuelSummonEnemiesAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.literal("LIMITED").describe("EnemyDuelSummonEnemiesAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("EnemyDuelSummonEnemiesAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("EnemyDuelSummonEnemiesAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** EnemyDuelSummonEnemiesAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.null().describe("EnemyDuelSummonEnemiesAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("EnemyDuelSummonEnemiesAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("EnemyDuelSummonEnemiesAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("EnemyDuelSummonEnemiesAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("EnemyDuelSummonEnemiesAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("EnemyDuelSummonEnemiesAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** EnemyDuelSummonEnemiesAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("EnemyDuelSummonEnemiesAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("EnemyDuelSummonEnemiesAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("EnemyDuelSummonEnemiesAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** EnemyDuelSummonEnemiesAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("EnemyDuelSummonEnemiesAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
    "_checkMotionMode": z.literal("ALL").describe("EnemyDuelSummonEnemiesAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
    "_delayTime": z.number().describe("EnemyDuelSummonEnemiesAction 的 `delayTime` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。 */
    "_dontBlockWave": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.null().describe("EnemyDuelSummonEnemiesAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetBound": z.number().describe("EnemyDuelSummonEnemiesAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。 */
    "_skipCheckPoint": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** EnemyDuelSummonEnemiesAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。 */
    "_stopSummonIfHostDead": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** EnemyDuelSummonEnemiesAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。 */
    "_useLocalUnharmfulFlag": z.boolean().describe("EnemyDuelSummonEnemiesAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyDuelSummonEnemies, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyDuelSummonEnemiesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyDurcarChangeDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyDurcarChangeDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyDurcarChangeDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyDurcarChangeDirectionAction 的 `character` 配置字段；准确战斗语义待确认。 */
    "_character": z.string().describe("EnemyDurcarChangeDirectionAction 的 `character` 配置字段；准确战斗语义待确认。"),
    /** EnemyDurcarChangeDirectionAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
    "_endPosOffsetAlongDirection": z.number().describe("EnemyDurcarChangeDirectionAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。"),
    /** EnemyDurcarChangeDirectionAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
    "_enemy": z.string().describe("EnemyDurcarChangeDirectionAction 的 `enemy` 配置字段；准确战斗语义待确认。"),
    /** EnemyDurcarChangeDirectionAction 的 `setDirectByBB` 配置字段；准确战斗语义待确认。 */
    "_setDirectByBB": z.boolean().describe("EnemyDurcarChangeDirectionAction 的 `setDirectByBB` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyDurcarChangeDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyDurcarChangeDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyDurcarCheckOverlapWithHighland, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyDurcarCheckOverlapWithHighlandActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyDurcarCheckOverlapWithHighland, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyDurcarCheckOverlapWithHighlandAction 的 `ignoreCheckSomeTiles` 配置字段；准确战斗语义待确认。 */
    "_ignoreCheckSomeTiles": z.boolean().describe("EnemyDurcarCheckOverlapWithHighlandAction 的 `ignoreCheckSomeTiles` 配置字段；准确战斗语义待确认。"),
    /** EnemyDurcarCheckOverlapWithHighlandAction 的 `ignoredAdvancedBuildMask` 配置字段；准确战斗语义待确认。 */
    "_ignoredAdvancedBuildMask": z.enum(["DEFAULT","WOODRD_HOLE"]).describe("EnemyDurcarCheckOverlapWithHighlandAction 的 `ignoredAdvancedBuildMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyDurcarCheckOverlapWithHighland, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyDurcarCheckOverlapWithHighlandAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyFallDown, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyFallDownActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyFallDown, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyFallDownAction 的 `exceptDisappearedEnemy` 配置字段；准确战斗语义待确认。 */
    "_exceptDisappearedEnemy": z.boolean().describe("EnemyFallDownAction 的 `exceptDisappearedEnemy` 配置字段；准确战斗语义待确认。"),
    /** EnemyFallDownAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("EnemyFallDownAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyFallDown, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyFallDownAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyForceTracePosition, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyForceTracePositionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyForceTracePosition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyForceTracePositionAction 的 `buffToTraceTarget` 配置字段；准确战斗语义待确认。 */
    "_buffToTraceTarget": z.strictObject({
                                /** EnemyForceTracePositionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                "attributes": z.strictObject({
                                                      /** EnemyForceTracePositionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                      "abnormalAntis": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.never()),
                                                                               ]).describe("EnemyForceTracePositionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                      /** EnemyForceTracePositionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                      "abnormalComboImmunes": z.union([
                                                                                        z.null(),
                                                                                        z.array(z.never()),
                                                                                      ]).describe("EnemyForceTracePositionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                      /** EnemyForceTracePositionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                      "abnormalCombos": z.union([
                                                                                  z.null(),
                                                                                  z.array(z.never()),
                                                                                ]).describe("EnemyForceTracePositionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                      /** EnemyForceTracePositionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                      "abnormalFlags": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.never()),
                                                                               ]).describe("EnemyForceTracePositionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                      /** EnemyForceTracePositionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                      "abnormalImmunes": z.union([
                                                                                   z.null(),
                                                                                   z.array(z.never()),
                                                                                 ]).describe("EnemyForceTracePositionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                      /** EnemyForceTracePositionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                      "attributeModifiers": z.union([
                                                                                      z.null(),
                                                                                      z.array(z.never()),
                                                                                    ]).describe("EnemyForceTracePositionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                    }).describe("EnemyForceTracePositionAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                "audioSignal": z.null().describe("EnemyForceTracePositionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                "blackboard": z.union([
                                                      z.null(),
                                                      z.array(z.never()),
                                                    ]).describe("EnemyForceTracePositionAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                "buffKey": z.union([
                                                   z.null(),
                                                   z.string(),
                                                 ]).describe("EnemyForceTracePositionAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                "clearAllStackCntWhenTimeUp": z.boolean().describe("EnemyForceTracePositionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                "disableOverride": z.boolean().describe("EnemyForceTracePositionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                "durationKey": z.null().describe("EnemyForceTracePositionAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                "enableInitDirectionFromSource": z.boolean().describe("EnemyForceTracePositionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                "firstTriggerInterval": z.number().describe("EnemyForceTracePositionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                "independentCharacterSource": z.boolean().describe("EnemyForceTracePositionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                "isDamageMissable": z.boolean().describe("EnemyForceTracePositionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                "isDurableBuff": z.boolean().describe("EnemyForceTracePositionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                "isFreezable": z.boolean().describe("EnemyForceTracePositionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                "isLevitatable": z.boolean().describe("EnemyForceTracePositionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                "isSilenceable": z.boolean().describe("EnemyForceTracePositionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                "isStunnable": z.boolean().describe("EnemyForceTracePositionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                "lifeTime": z.number().describe("EnemyForceTracePositionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("EnemyForceTracePositionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                "loadFromDB": z.boolean().describe("EnemyForceTracePositionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                "maxStackCnt": z.number().describe("EnemyForceTracePositionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                "maxValidStackCnt": z.number().describe("EnemyForceTracePositionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                /** 模板处理战斗事件时使用的优先级。 */
                                "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                /** EnemyForceTracePositionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                "overrideEffectKey": z.union([
                                                             z.null(),
                                                             z.string(),
                                                           ]).describe("EnemyForceTracePositionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                "overrideKey": z.null().describe("EnemyForceTracePositionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                "overrideOnEventPriority": z.boolean().describe("EnemyForceTracePositionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                "overrideType": z.literal("DEFAULT").describe("EnemyForceTracePositionAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                "priority": z.number().describe("EnemyForceTracePositionAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                "priorityBBKeys": z.union([
                                                          z.null(),
                                                          z.array(z.never()),
                                                        ]).describe("EnemyForceTracePositionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                "refreshRemainingTimeWhenStackMax": z.boolean().describe("EnemyForceTracePositionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                "statusResistable": z.literal("AUTOMATIC").describe("EnemyForceTracePositionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                "stripBlackboardParamsWithBuffKey": z.boolean().describe("EnemyForceTracePositionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                "takeSnapshotWhenExtend": z.boolean().describe("EnemyForceTracePositionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                /** EnemyForceTracePositionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                "triggerCnt": z.number().describe("EnemyForceTracePositionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                "triggerInterval": z.number().describe("EnemyForceTracePositionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                "triggerLifeType": z.literal("IMMEDIATELY").describe("EnemyForceTracePositionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                /** EnemyForceTracePositionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                "waitFirstTriggerInterval": z.boolean().describe("EnemyForceTracePositionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                              }).describe("EnemyForceTracePositionAction 的 `buffToTraceTarget` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `createBuffToTraceTarget` 配置字段；准确战斗语义待确认。 */
    "_createBuffToTraceTarget": z.boolean().describe("EnemyForceTracePositionAction 的 `createBuffToTraceTarget` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
    "_endPosOffsetAlongDirection": z.number().describe("EnemyForceTracePositionAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `loadPosFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadPosFromBlackboard": z.boolean().describe("EnemyForceTracePositionAction 的 `loadPosFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `maxTraceDist` 配置字段；准确战斗语义待确认。 */
    "_maxTraceDist": z.number().describe("EnemyForceTracePositionAction 的 `maxTraceDist` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `randomOffset` 配置字段；准确战斗语义待确认。 */
    "_randomOffset": z.boolean().describe("EnemyForceTracePositionAction 的 `randomOffset` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `reachOffset` 配置字段；准确战斗语义待确认。 */
    "_reachOffset": z.strictObject({
                          /** EnemyForceTracePositionAction 的 `x` 配置字段；准确战斗语义待确认。 */
                          "x": z.number().describe("EnemyForceTracePositionAction 的 `x` 配置字段；准确战斗语义待确认。"),
                          /** EnemyForceTracePositionAction 的 `y` 配置字段；准确战斗语义待确认。 */
                          "y": z.number().describe("EnemyForceTracePositionAction 的 `y` 配置字段；准确战斗语义待确认。"),
                        }).describe("EnemyForceTracePositionAction 的 `reachOffset` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("EnemyForceTracePositionAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `stopTraceWhenNoTarget` 配置字段；准确战斗语义待确认。 */
    "_stopTraceWhenNoTarget": z.boolean().describe("EnemyForceTracePositionAction 的 `stopTraceWhenNoTarget` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("EnemyForceTracePositionAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `traceFarthestTile` 配置字段；准确战斗语义待确认。 */
    "_traceFarthestTile": z.boolean().describe("EnemyForceTracePositionAction 的 `traceFarthestTile` 配置字段；准确战斗语义待确认。"),
    /** EnemyForceTracePositionAction 的 `useSelectorPosition` 配置字段；准确战斗语义待确认。 */
    "_useSelectorPosition": z.boolean().describe("EnemyForceTracePositionAction 的 `useSelectorPosition` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyForceTracePosition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyForceTracePositionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyHasValidToken, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyHasValidTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyHasValidToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyHasValidTokenAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("EnemyHasValidTokenAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyHasValidToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyHasValidTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyKillToken, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyKillTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyKillToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyKillTokenAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("EnemyKillTokenAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyKillToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyKillTokenAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionE02Schema = z
  .discriminatedUnion("$type", [EnemyChangeRouteToTargetActionSchema, EnemyChangeRouteToTargetUseSelectorActionSchema, EnemyDuelReportCombatActionSchema, EnemyDuelSummonEnemiesActionSchema, EnemyDurcarChangeDirectionActionSchema, EnemyDurcarCheckOverlapWithHighlandActionSchema, EnemyFallDownActionSchema, EnemyForceTracePositionActionSchema, EnemyHasValidTokenActionSchema, EnemyKillTokenActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionE02>;
