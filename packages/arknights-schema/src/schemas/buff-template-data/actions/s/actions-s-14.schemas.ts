/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SummonEnemiesAverageOnTilesToTargetAction, SummonEnemiesFollowBranchRouteAction, SummonEnemiesFollowBranchRouteWithRowExpansionAction, SummonEnemiesFollowBranchRouteWithTileBlackboardAction, SummonEnemiesFollowMyRouteAction, SummonEnemiesFollowMyRouteWithBuffAction, SummonEnemiesOnAttackRangeAction, SummonEnemiesOnTargetTileAction, SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction, SummonEnemiesWithRuntimeNearestEndPointRouteAction, BattleActionS14 } from "../../../../types/buff-template-data/actions/s/actions-s-14.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesAverageOnTilesToTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesAverageOnTilesToTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesAverageOnTilesToTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `avoidObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_avoidObstacleLike": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `avoidObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `checkTileReachable` 配置字段；准确战斗语义待确认。 */
    "_checkTileReachable": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `checkTileReachable` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("SummonEnemiesAverageOnTilesToTargetAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("SummonEnemiesAverageOnTilesToTargetAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetBound": z.number().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `randomStart` 配置字段；准确战斗语义待确认。 */
    "_randomStart": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `randomStart` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonEnemiesAverageOnTilesToTargetAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `spawnOnTarget` 配置字段；准确战斗语义待确认。 */
    "_spawnOnTarget": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `spawnOnTarget` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `summonCnt` 配置字段；准确战斗语义待确认。 */
    "_summonCnt": z.number().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `summonCnt` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("SummonEnemiesAverageOnTilesToTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesAverageOnTilesToTargetAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonEnemiesAverageOnTilesToTargetAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesAverageOnTilesToTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesAverageOnTilesToTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesFollowBranchRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** SummonEnemiesFollowBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** SummonEnemiesFollowBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("SummonEnemiesFollowBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.union([
                                                                                  z.null(),
                                                                                  z.array(z.never()),
                                                                                ]).describe("SummonEnemiesFollowBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemiesFollowBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("SummonEnemiesFollowBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.union([
                                                                             z.null(),
                                                                             z.array(z.never()),
                                                                           ]).describe("SummonEnemiesFollowBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.union([
                                                                                z.null(),
                                                                                z.array(z.strictObject({
                                                                                            /** 属性修改器指向的战斗属性。 */
                                                                                            "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                                            /** SummonEnemiesFollowBranchRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                            "fetchBaseValueFromSourceEntity": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                            /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                            "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                            /** SummonEnemiesFollowBranchRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                            "loadFromBlackboard": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                            /** 黑板参数的数值槽。 */
                                                                                            "value": z.number().describe("黑板参数的数值槽。"),
                                                                                          })),
                                                                              ]).describe("SummonEnemiesFollowBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("SummonEnemiesFollowBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("SummonEnemiesFollowBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.union([
                                                z.null(),
                                                z.array(z.never()),
                                              ]).describe("SummonEnemiesFollowBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.union([
                                             z.null(),
                                             z.string(),
                                           ]).describe("SummonEnemiesFollowBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("SummonEnemiesFollowBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SummonEnemiesFollowBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.union([
                                                       z.null(),
                                                       z.string(),
                                                     ]).describe("SummonEnemiesFollowBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("SummonEnemiesFollowBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("SummonEnemiesFollowBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.union([
                                                    z.null(),
                                                    z.array(z.never()),
                                                  ]).describe("SummonEnemiesFollowBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesFollowBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("SummonEnemiesFollowBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("SummonEnemiesFollowBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("SummonEnemiesFollowBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `defaultBranchId` 配置字段；准确战斗语义待确认。 */
    "_defaultBranchId": z.string().describe("SummonEnemiesFollowBranchRouteAction 的 `defaultBranchId` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
    "_overrideEnemyKey": z.string().describe("SummonEnemiesFollowBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。 */
    "_setHostUid": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。 */
    "_summonAllRoute": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesFollowBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesFollowBranchRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithRowExpansion, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesFollowBranchRouteWithRowExpansionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithRowExpansion, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.string().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.union([
                                             z.null(),
                                             z.string(),
                                           ]).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.literal("LIMITED").describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.null().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
    "_overrideEnemyKey": z.string().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `rowVariation` 配置字段；准确战斗语义待确认。 */
    "_rowVariation": z.number().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `rowVariation` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `rowVariationKeys` 配置字段；准确战斗语义待确认。 */
    "_rowVariationKeys": z.string().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `rowVariationKeys` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithRowExpansion, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesFollowBranchRouteWithRowExpansionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithTileBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesFollowBranchRouteWithTileBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithTileBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `actionIndex` 配置字段；准确战斗语义待确认。 */
    "_actionIndex": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `actionIndex` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `actionIndexKey` 配置字段；准确战斗语义待确认。 */
    "_actionIndexKey": z.string().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `actionIndexKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.array(z.string()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.union([
                                             z.null(),
                                             z.string(),
                                           ]).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.literal("LIMITED").describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.null().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
    "_overrideEnemyKey": z.string().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `summonNums` 配置字段；准确战斗语义待确认。 */
    "_summonNums": z.number().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `summonNums` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `summonNumsKeys` 配置字段；准确战斗语义待确认。 */
    "_summonNumsKeys": z.string().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `summonNumsKeys` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithTileBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesFollowBranchRouteWithTileBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesFollowMyRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesFollowMyRouteAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_addBuffToEnemy": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.union([
                          z.null(),
                          z.strictObject({
                                  /** SummonEnemiesFollowMyRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": z.strictObject({
                                                          /** SummonEnemiesFollowMyRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": z.union([
                                                                                       z.null(),
                                                                                       z.array(z.never()),
                                                                                     ]).describe("SummonEnemiesFollowMyRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesFollowMyRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": z.union([
                                                                                              z.null(),
                                                                                              z.array(z.never()),
                                                                                            ]).describe("SummonEnemiesFollowMyRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesFollowMyRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": z.union([
                                                                                        z.null(),
                                                                                        z.array(z.never()),
                                                                                      ]).describe("SummonEnemiesFollowMyRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesFollowMyRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": z.union([
                                                                                       z.null(),
                                                                                       z.array(z.never()),
                                                                                     ]).describe("SummonEnemiesFollowMyRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesFollowMyRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": z.union([
                                                                                         z.null(),
                                                                                         z.array(z.never()),
                                                                                       ]).describe("SummonEnemiesFollowMyRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesFollowMyRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": z.union([
                                                                                            z.null(),
                                                                                            z.array(z.strictObject({
                                                                                                          /** 属性修改器指向的战斗属性。 */
                                                                                                          "attributeType": z.literal("MOVE_SPEED").describe("属性修改器指向的战斗属性。"),
                                                                                                          /** SummonEnemiesFollowMyRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                          "fetchBaseValueFromSourceEntity": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                          /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                          "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                          /** SummonEnemiesFollowMyRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                          "loadFromBlackboard": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                          /** 黑板参数的数值槽。 */
                                                                                                          "value": z.number().describe("黑板参数的数值槽。"),
                                                                                                        })),
                                                                                          ]).describe("SummonEnemiesFollowMyRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                        }).describe("SummonEnemiesFollowMyRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": z.null().describe("SummonEnemiesFollowMyRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": z.union([
                                                          z.null(),
                                                          z.array(z.strictObject({
                                                                      /** 黑板参数键或当前配置项的稳定键。 */
                                                                      "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                                                      /** 黑板参数的数值槽。 */
                                                                      "value": z.number().describe("黑板参数的数值槽。"),
                                                                      /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                                                      "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                                                    })),
                                                        ]).describe("SummonEnemiesFollowMyRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": z.union([
                                                       z.null(),
                                                       z.string(),
                                                     ]).describe("SummonEnemiesFollowMyRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": z.union([
                                                           z.null(),
                                                           z.string(),
                                                         ]).describe("SummonEnemiesFollowMyRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SummonEnemiesFollowMyRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": z.union([
                                                                 z.null(),
                                                                 z.string(),
                                                               ]).describe("SummonEnemiesFollowMyRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": z.union([
                                                           z.null(),
                                                           z.string(),
                                                         ]).describe("SummonEnemiesFollowMyRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": z.literal("DEFAULT").describe("SummonEnemiesFollowMyRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": z.union([
                                                              z.null(),
                                                              z.array(z.never()),
                                                            ]).describe("SummonEnemiesFollowMyRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesFollowMyRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemiesFollowMyRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesFollowMyRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                }),
                        ]).describe("SummonEnemiesFollowMyRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
    "_checkMotionMode": z.enum(["ALL","FLY_ONLY","WALK_ONLY"]).describe("SummonEnemiesFollowMyRouteAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
    "_delayTime": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `delayTime` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。 */
    "_dontBlockWave": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("SummonEnemiesFollowMyRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.strictObject({
                     /** SummonEnemiesFollowMyRouteAction 的 `x` 配置字段；准确战斗语义待确认。 */
                     "x": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `x` 配置字段；准确战斗语义待确认。"),
                     /** SummonEnemiesFollowMyRouteAction 的 `y` 配置字段；准确战斗语义待确认。 */
                     "y": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `y` 配置字段；准确战斗语义待确认。"),
                   }).describe("SummonEnemiesFollowMyRouteAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `offsetXKey` 配置字段；准确战斗语义待确认。 */
    "_offsetXKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("SummonEnemiesFollowMyRouteAction 的 `offsetXKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `offsetYKey` 配置字段；准确战斗语义待确认。 */
    "_offsetYKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("SummonEnemiesFollowMyRouteAction 的 `offsetYKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `onlySummonOneInTheSamePlace` 配置字段；准确战斗语义待确认。 */
    "_onlySummonOneInTheSamePlace": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `onlySummonOneInTheSamePlace` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
    "_passableMask": z.enum(["FLY_ONLY","NONE","WALK_ONLY"]).describe("SummonEnemiesFollowMyRouteAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `randomDelayRange` 配置字段；准确战斗语义待确认。 */
    "_randomDelayRange": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `randomDelayRange` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetBound": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。 */
    "_skipCheckPoint": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("SummonEnemiesFollowMyRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `spawnOnHostRootTile` 配置字段；准确战斗语义待确认。 */
    "_spawnOnHostRootTile": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `spawnOnHostRootTile` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。 */
    "_stopSummonIfHostDead": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemiesFollowMyRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** SummonEnemiesFollowMyRouteAction 的 `trySummonOutsideWhenInObstacle` 配置字段；准确战斗语义待确认。 */
    "_trySummonOutsideWhenInObstacle": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `trySummonOutsideWhenInObstacle` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。 */
    "_useLocalUnharmfulFlag": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `useMapPosition` 配置字段；准确战斗语义待确认。 */
    "_useMapPosition": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `useMapPosition` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `useOffsetForEach` 配置字段；准确战斗语义待确认。 */
    "_useOffsetForEach": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `useOffsetForEach` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `useOffsetInBB` 配置字段；准确战斗语义待确认。 */
    "_useOffsetInBB": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `useOffsetInBB` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `useRandomDelay` 配置字段；准确战斗语义待确认。 */
    "_useRandomDelay": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `useRandomDelay` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteAction 的 `useTargetPosition` 配置字段；准确战斗语义待确认。 */
    "_useTargetPosition": z.boolean().describe("SummonEnemiesFollowMyRouteAction 的 `useTargetPosition` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesFollowMyRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRouteWithBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesFollowMyRouteWithBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRouteWithBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `additionalBuff` 配置字段；准确战斗语义待确认。 */
    "_additionalBuff": z.array(z.strictObject({
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                             "attributes": z.strictObject({
                                                   /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalAntis": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                   /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalComboImmunes": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                   /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalCombos": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                   /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalFlags": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                   /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                   "abnormalImmunes": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                   /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                   "attributeModifiers": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                 }).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                             "audioSignal": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                             "blackboard": z.array(z.never()).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                             "buffKey": z.string().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                             "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                             "disableOverride": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                             "durationKey": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                             "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                             "firstTriggerInterval": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                             "independentCharacterSource": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                             "isDamageMissable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                             "isDurableBuff": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                             "isFreezable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                             "isLevitatable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                             "isSilenceable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                             "isStunnable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                             "lifeTime": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                             "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                             "loadFromDB": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                             "maxStackCnt": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                             "maxValidStackCnt": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                             /** 模板处理战斗事件时使用的优先级。 */
                             "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                             "overrideEffectKey": z.union([
                                                          z.null(),
                                                          z.string(),
                                                        ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                             "overrideKey": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                             "overrideOnEventPriority": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                             "overrideType": z.literal("DEFAULT").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                             "priority": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                             "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                             "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                             "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                             "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                             "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                             /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                             "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                             "triggerCnt": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                             "triggerInterval": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                             "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                             "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           })).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `additionalBuff` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `addNoSourceBuffImmediately` 配置字段；准确战斗语义待确认。 */
    "_addNoSourceBuffImmediately": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `addNoSourceBuffImmediately` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
    "_checkMotionMode": z.literal("ALL").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
    "_delayTime": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `delayTime` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。 */
    "_dontBlockWave": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `ignoreOffset` 配置字段；准确战斗语义待确认。 */
    "_ignoreOffset": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `ignoreOffset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `noSourceBuff` 配置字段；准确战斗语义待确认。 */
    "_noSourceBuff": z.strictObject({
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                           "attributes": z.strictObject({
                                                 /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalAntis": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                 /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalComboImmunes": z.union([
                                                                                   z.null(),
                                                                                   z.array(z.never()),
                                                                                 ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalCombos": z.union([
                                                                             z.null(),
                                                                             z.array(z.never()),
                                                                           ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                 /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalFlags": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                 /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalImmunes": z.union([
                                                                              z.null(),
                                                                              z.array(z.never()),
                                                                            ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                 "attributeModifiers": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.never()),
                                                                               ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                               }).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                           "audioSignal": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                           "blackboard": z.array(z.never()).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                           "buffKey": z.union([
                                              z.null(),
                                              z.string(),
                                            ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                           "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                           "disableOverride": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                           "durationKey": z.union([
                                                  z.null(),
                                                  z.string(),
                                                ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                           "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "firstTriggerInterval": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                           "independentCharacterSource": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                           "isDamageMissable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                           "isDurableBuff": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                           "isFreezable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                           "isLevitatable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                           "isSilenceable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                           "isStunnable": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                           "lifeTime": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                           "lifeTimeType": z.enum(["INFINITY","LIMITED"]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                           "loadFromDB": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxStackCnt": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxValidStackCnt": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** 模板处理战斗事件时使用的优先级。 */
                           "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                           "overrideEffectKey": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                           "overrideKey": z.null().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                           "overrideOnEventPriority": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                           "overrideType": z.literal("DEFAULT").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                           "priority": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                           "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                           "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                           "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                           "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                           "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                           /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                           "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                           "triggerCnt": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                           "triggerInterval": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                           "triggerLifeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                           /** SummonEnemiesFollowMyRouteWithBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                         }).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `noSourceBuff` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.strictObject({
                     /** SummonEnemiesFollowMyRouteWithBuffAction 的 `x` 配置字段；准确战斗语义待确认。 */
                     "x": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `x` 配置字段；准确战斗语义待确认。"),
                     /** SummonEnemiesFollowMyRouteWithBuffAction 的 `y` 配置字段；准确战斗语义待确认。 */
                     "y": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `y` 配置字段；准确战斗语义待确认。"),
                   }).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `offsetXKey` 配置字段；准确战斗语义待确认。 */
    "_offsetXKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `offsetXKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `offsetYKey` 配置字段；准确战斗语义待确认。 */
    "_offsetYKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `offsetYKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `onlySummonOneInTheSamePlace` 配置字段；准确战斗语义待确认。 */
    "_onlySummonOneInTheSamePlace": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `onlySummonOneInTheSamePlace` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
    "_passableMask": z.enum(["NONE","WALK_ONLY"]).describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `randomDelayRange` 配置字段；准确战斗语义待确认。 */
    "_randomDelayRange": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `randomDelayRange` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetBound": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。 */
    "_skipCheckPoint": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `spawnOnHostRootTile` 配置字段；准确战斗语义待确认。 */
    "_spawnOnHostRootTile": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `spawnOnHostRootTile` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。 */
    "_stopSummonIfHostDead": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `trySummonOutsideWhenInObstacle` 配置字段；准确战斗语义待确认。 */
    "_trySummonOutsideWhenInObstacle": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `trySummonOutsideWhenInObstacle` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。 */
    "_useLocalUnharmfulFlag": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useMapPosition` 配置字段；准确战斗语义待确认。 */
    "_useMapPosition": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `useMapPosition` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useOffsetForEach` 配置字段；准确战斗语义待确认。 */
    "_useOffsetForEach": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `useOffsetForEach` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useOffsetInBB` 配置字段；准确战斗语义待确认。 */
    "_useOffsetInBB": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `useOffsetInBB` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useRandomDelay` 配置字段；准确战斗语义待确认。 */
    "_useRandomDelay": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `useRandomDelay` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useTargetPosition` 配置字段；准确战斗语义待确认。 */
    "_useTargetPosition": z.boolean().describe("SummonEnemiesFollowMyRouteWithBuffAction 的 `useTargetPosition` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRouteWithBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesFollowMyRouteWithBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesOnAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesOnAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesOnAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesOnAttackRangeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("SummonEnemiesOnAttackRangeAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** SummonEnemiesOnAttackRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** SummonEnemiesOnAttackRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemiesOnAttackRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesOnAttackRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemiesOnAttackRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesOnAttackRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("SummonEnemiesOnAttackRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesOnAttackRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.string()),
                                                                   ]).describe("SummonEnemiesOnAttackRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesOnAttackRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("SummonEnemiesOnAttackRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesOnAttackRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("SummonEnemiesOnAttackRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("SummonEnemiesOnAttackRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("SummonEnemiesOnAttackRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("SummonEnemiesOnAttackRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("SummonEnemiesOnAttackRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("SummonEnemiesOnAttackRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("SummonEnemiesOnAttackRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesOnAttackRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesOnAttackRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("SummonEnemiesOnAttackRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesOnAttackRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("SummonEnemiesOnAttackRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `buffsUseTargetAsSource` 配置字段；准确战斗语义待确认。 */
    "_buffsUseTargetAsSource": z.union([
                                     z.null(),
                                     z.array(z.strictObject({
                                             /** SummonEnemiesOnAttackRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                             "attributes": z.strictObject({
                                                                     /** SummonEnemiesOnAttackRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                                     "abnormalAntis": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                                     /** SummonEnemiesOnAttackRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                                     "abnormalComboImmunes": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                                     /** SummonEnemiesOnAttackRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                                     "abnormalCombos": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                                     /** SummonEnemiesOnAttackRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                                     "abnormalFlags": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                                     /** SummonEnemiesOnAttackRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                                     "abnormalImmunes": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                                     /** SummonEnemiesOnAttackRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                                     "attributeModifiers": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                                   }).describe("SummonEnemiesOnAttackRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                             "audioSignal": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                             "blackboard": z.array(z.never()).describe("SummonEnemiesOnAttackRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                             "buffKey": z.string().describe("SummonEnemiesOnAttackRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                             "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                             "disableOverride": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                             "durationKey": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                             "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                             "firstTriggerInterval": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                             "independentCharacterSource": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                             "isDamageMissable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                             "isDurableBuff": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                             "isFreezable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                             "isLevitatable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                             "isSilenceable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                             "isStunnable": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                             "lifeTime": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                             "lifeTimeType": z.literal("INFINITY").describe("SummonEnemiesOnAttackRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                             "loadFromDB": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                             "maxStackCnt": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                             "maxValidStackCnt": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                             /** 模板处理战斗事件时使用的优先级。 */
                                             "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                             "overrideEffectKey": z.string().describe("SummonEnemiesOnAttackRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                             "overrideKey": z.null().describe("SummonEnemiesOnAttackRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                             "overrideOnEventPriority": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                             "overrideType": z.literal("DEFAULT").describe("SummonEnemiesOnAttackRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                             "priority": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                             "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesOnAttackRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                             "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                             "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesOnAttackRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                             "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                             "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                             /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                             "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                             "triggerCnt": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                             "triggerInterval": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                             "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemiesOnAttackRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                             /** SummonEnemiesOnAttackRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                             "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                           })),
                                   ]).describe("SummonEnemiesOnAttackRangeAction 的 `buffsUseTargetAsSource` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.string().describe("SummonEnemiesOnAttackRangeAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `meanwhileNearestTileToTarget` 配置字段；准确战斗语义待确认。 */
    "_meanwhileNearestTileToTarget": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `meanwhileNearestTileToTarget` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.enum(["FLY","WALK"]).describe("SummonEnemiesOnAttackRangeAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。 */
    "_noEndPosition": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `selectTheNearestTileToSource` 配置字段；准确战斗语义待确认。 */
    "_selectTheNearestTileToSource": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `selectTheNearestTileToSource` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonEnemiesOnAttackRangeAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
    "_spawnOffset": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","SOURCE"]).describe("SummonEnemiesOnAttackRangeAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `useAttackRangeTilesDirectly` 配置字段；准确战斗语义待确认。 */
    "_useAttackRangeTilesDirectly": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `useAttackRangeTilesDirectly` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `useTargetAbilitySelector` 配置字段；准确战斗语义待确认。 */
    "_useTargetAbilitySelector": z.boolean().describe("SummonEnemiesOnAttackRangeAction 的 `useTargetAbilitySelector` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnAttackRangeAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonEnemiesOnAttackRangeAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesOnAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesOnAttackRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesOnTargetTile, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesOnTargetTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesOnTargetTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesOnTargetTileAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_addBuffToEnemy": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.union([
                          z.null(),
                          z.strictObject({
                                  /** SummonEnemiesOnTargetTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": z.strictObject({
                                                          /** SummonEnemiesOnTargetTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": z.null().describe("SummonEnemiesOnTargetTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesOnTargetTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": z.null().describe("SummonEnemiesOnTargetTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesOnTargetTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": z.null().describe("SummonEnemiesOnTargetTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesOnTargetTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": z.null().describe("SummonEnemiesOnTargetTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesOnTargetTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": z.null().describe("SummonEnemiesOnTargetTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** SummonEnemiesOnTargetTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": z.null().describe("SummonEnemiesOnTargetTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                        }).describe("SummonEnemiesOnTargetTileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": z.null().describe("SummonEnemiesOnTargetTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": z.union([
                                                          z.null(),
                                                          z.array(z.never()),
                                                        ]).describe("SummonEnemiesOnTargetTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": z.null().describe("SummonEnemiesOnTargetTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": z.null().describe("SummonEnemiesOnTargetTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": z.number().describe("SummonEnemiesOnTargetTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": z.number().describe("SummonEnemiesOnTargetTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": z.literal("LIMITED").describe("SummonEnemiesOnTargetTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": z.number().describe("SummonEnemiesOnTargetTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": z.number().describe("SummonEnemiesOnTargetTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": z.null().describe("SummonEnemiesOnTargetTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": z.null().describe("SummonEnemiesOnTargetTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": z.literal("DEFAULT").describe("SummonEnemiesOnTargetTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": z.number().describe("SummonEnemiesOnTargetTileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": z.union([
                                                              z.null(),
                                                              z.array(z.never()),
                                                            ]).describe("SummonEnemiesOnTargetTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesOnTargetTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": z.number().describe("SummonEnemiesOnTargetTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": z.number().describe("SummonEnemiesOnTargetTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemiesOnTargetTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                  /** SummonEnemiesOnTargetTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                }),
                        ]).describe("SummonEnemiesOnTargetTileAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
    "_checkMotionMode": z.literal("ALL").describe("SummonEnemiesOnTargetTileAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
    "_delayTime": z.number().describe("SummonEnemiesOnTargetTileAction 的 `delayTime` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.null().describe("SummonEnemiesOnTargetTileAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `excludeRootTile` 配置字段；准确战斗语义待确认。 */
    "_excludeRootTile": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `excludeRootTile` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetBound": z.strictObject({
                                /** SummonEnemiesOnTargetTileAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                                "_serializedValue": z.number().describe("SummonEnemiesOnTargetTileAction 的 `serializedValue` 配置字段；准确战斗语义待确认。"),
                              }).describe("SummonEnemiesOnTargetTileAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `selectTileInSnapshot` 配置字段；准确战斗语义待确认。 */
    "_selectTileInSnapshot": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `selectTileInSnapshot` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_SOURCE","SOURCE","TARGET"]).describe("SummonEnemiesOnTargetTileAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemiesOnTargetTileAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTargetTileAction 的 `useProjectileTraceTargetMapPos` 配置字段；准确战斗语义待确认。 */
    "_useProjectileTraceTargetMapPos": z.boolean().describe("SummonEnemiesOnTargetTileAction 的 `useProjectileTraceTargetMapPos` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesOnTargetTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesOnTargetTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.never()).describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.string().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("FLY").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetBound": z.number().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `surroundTilesOptions` 配置字段；准确战斗语义待确认。 */
    "_surroundTilesOptions": z.strictObject({
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                                   "advancedBuildableMask": z.literal("NONE").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                                   "advancedBuildableMaskExcept": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                                   "allowAllAdvancedBuildableMask": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                                   "allowNoneBuildableType": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                                   "allowNonePassableMask": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                                   "allowedTileBlackboardKey": z.null().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                                   "buildableType": z.literal("ALL").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                                   "checkBuildableOrPassable": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                                   "checkExtraBuildableCheckers": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                                   "checkHeightType": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                                   "checkTileHidden": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                                   "checkTileMode": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                                   "checkTileMoveCost": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                                   "checkTileTypes": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                                   "exceptTileTypes": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                                   "excludeTileBlackboardKey": z.null().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                                   "heightType": z.literal("LOWLAND").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                                   "modeIndex": z.number().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                                   "moveCostCompareType": z.literal("LT").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                                   "moveCostThreshold": z.number().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                                   "passableMask": z.literal("NONE").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
                                   /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                                   "tileTypesMask": z.literal("NONE").describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。"),
                                 }).describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `surroundTilesOptions` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `trapKey` 配置字段；准确战斗语义待确认。 */
    "_trapKey": z.string().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `trapKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesWithRuntimeNearestEndPointRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemiesWithRuntimeNearestEndPointRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemiesWithRuntimeNearestEndPointRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `ignoreMissEndPoint` 配置字段；准确战斗语义待确认。 */
    "_ignoreMissEndPoint": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `ignoreMissEndPoint` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.enum(["FLY","WALK"]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","TARGET"]).describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
    "_spawnOffset": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `summonOnNearestPassableTile` 配置字段；准确战斗语义待确认。 */
    "_summonOnNearestPassableTile": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `summonOnNearestPassableTile` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemiesWithRuntimeNearestEndPointRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemiesWithRuntimeNearestEndPointRouteAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS14Schema = z
  .discriminatedUnion("$type", [SummonEnemiesAverageOnTilesToTargetActionSchema, SummonEnemiesFollowBranchRouteActionSchema, SummonEnemiesFollowBranchRouteWithRowExpansionActionSchema, SummonEnemiesFollowBranchRouteWithTileBlackboardActionSchema, SummonEnemiesFollowMyRouteActionSchema, SummonEnemiesFollowMyRouteWithBuffActionSchema, SummonEnemiesOnAttackRangeActionSchema, SummonEnemiesOnTargetTileActionSchema, SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteActionSchema, SummonEnemiesWithRuntimeNearestEndPointRouteActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS14>;
