/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SummonEnemyByAbilitySelectorAction, SummonEnemyToTilesByMainline17Action, SummonEnemyWithRuntimeRouteAction, SummonRandomEnemyWithRuntimeRouteAction, SurvivalSummonEnemiesFollowBranchRouteAction, SurvivalSummonEnemiesPickRandomBranchRouteAction, Svash2EmitProjectileFixedDirectionAction, Svash2LRCardPositionSwapAction, Svash2RemoveCardOverrideByCardUidAction, SwitchDirectionAction, BattleActionS15 } from "../../../../types/buff-template-data/actions/s/actions-s-15.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemyByAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemyByAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemyByAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemyByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SummonEnemyByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** SummonEnemyByAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** SummonEnemyByAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemyByAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyByAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemyByAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyByAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("SummonEnemyByAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyByAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemyByAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyByAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("SummonEnemyByAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyByAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("SummonEnemyByAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("SummonEnemyByAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("SummonEnemyByAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("SummonEnemyByAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("SummonEnemyByAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("SummonEnemyByAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.literal("IMMEDIATELY").describe("SummonEnemyByAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("SummonEnemyByAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("SummonEnemyByAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("SummonEnemyByAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("SummonEnemyByAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemyByAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("SummonEnemyByAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyByAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("SummonEnemyByAbilitySelectorAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `buffsUseTargetAsSource` 配置字段；准确战斗语义待确认。 */
    "_buffsUseTargetAsSource": z.array(z.never()).describe("SummonEnemyByAbilitySelectorAction 的 `buffsUseTargetAsSource` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `enemyKeys` 配置字段；准确战斗语义待确认。 */
    "_enemyKeys": z.array(z.string()).describe("SummonEnemyByAbilitySelectorAction 的 `enemyKeys` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `getEnemyKeysFromBB` 配置字段；准确战斗语义待确认。 */
    "_getEnemyKeysFromBB": z.union([
                                 z.null(),
                                 z.string(),
                               ]).describe("SummonEnemyByAbilitySelectorAction 的 `getEnemyKeysFromBB` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `listAccessMode` 配置字段；准确战斗语义待确认。 */
    "_listAccessMode": z.literal("Loop").describe("SummonEnemyByAbilitySelectorAction 的 `listAccessMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("SummonEnemyByAbilitySelectorAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。 */
    "_noEndPosition": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonEnemyByAbilitySelectorAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
    "_spawnOffset": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
    "_summonCount": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `summonCount` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SummonEnemyByAbilitySelectorAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `useTargetAbilitySelector` 配置字段；准确战斗语义待确认。 */
    "_useTargetAbilitySelector": z.boolean().describe("SummonEnemyByAbilitySelectorAction 的 `useTargetAbilitySelector` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyByAbilitySelectorAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonEnemyByAbilitySelectorAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemyByAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemyByAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemyToTilesByMainline17, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemyToTilesByMainline17ActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemyToTilesByMainline17, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemyToTilesByMainline17Action 的 `loadTileCntFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadTileCntFromBlackboard": z.boolean().describe("SummonEnemyToTilesByMainline17Action 的 `loadTileCntFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyToTilesByMainline17Action 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("SummonEnemyToTilesByMainline17Action 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** SummonEnemyToTilesByMainline17Action 的 `tileCnt` 配置字段；准确战斗语义待确认。 */
    "_tileCnt": z.number().describe("SummonEnemyToTilesByMainline17Action 的 `tileCnt` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyToTilesByMainline17Action 的 `tileCntKey` 配置字段；准确战斗语义待确认。 */
    "_tileCntKey": z.string().describe("SummonEnemyToTilesByMainline17Action 的 `tileCntKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemyToTilesByMainline17, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemyToTilesByMainline17Action>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemyWithRuntimeRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonEnemyWithRuntimeRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonEnemyWithRuntimeRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `addBuffsSource` 配置字段；准确战斗语义待确认。 */
    "_addBuffsSource": z.enum(["BUFF_OWNER","SOURCE"]).describe("SummonEnemyWithRuntimeRouteAction 的 `addBuffsSource` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `avoidHighland` 配置字段；准确战斗语义待确认。 */
    "_avoidHighland": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `avoidHighland` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** SummonEnemyWithRuntimeRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** SummonEnemyWithRuntimeRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemyWithRuntimeRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyWithRuntimeRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SummonEnemyWithRuntimeRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyWithRuntimeRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("SummonEnemyWithRuntimeRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyWithRuntimeRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("SummonEnemyWithRuntimeRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyWithRuntimeRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("SummonEnemyWithRuntimeRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SummonEnemyWithRuntimeRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.strictObject({
                                                                                      /** 属性修改器指向的战斗属性。 */
                                                                                      "attributeType": z.literal("MOVE_SPEED").describe("属性修改器指向的战斗属性。"),
                                                                                      /** SummonEnemyWithRuntimeRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                      "fetchBaseValueFromSourceEntity": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                      /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                      "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                      /** SummonEnemyWithRuntimeRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                      "loadFromBlackboard": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                      /** 黑板参数的数值槽。 */
                                                                                      "value": z.number().describe("黑板参数的数值槽。"),
                                                                                    })),
                                                                        ]).describe("SummonEnemyWithRuntimeRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("SummonEnemyWithRuntimeRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("SummonEnemyWithRuntimeRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("SummonEnemyWithRuntimeRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("SummonEnemyWithRuntimeRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("SummonEnemyWithRuntimeRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SummonEnemyWithRuntimeRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("SummonEnemyWithRuntimeRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("SummonEnemyWithRuntimeRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("SummonEnemyWithRuntimeRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("SummonEnemyWithRuntimeRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("SummonEnemyWithRuntimeRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("SummonEnemyWithRuntimeRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** SummonEnemyWithRuntimeRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("SummonEnemyWithRuntimeRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `changeSpawnCertainPos` 配置字段；准确战斗语义待确认。 */
    "_changeSpawnCertainPos": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `changeSpawnCertainPos` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("SummonEnemyWithRuntimeRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `host` 配置字段；准确战斗语义待确认。 */
    "_host": z.string().describe("SummonEnemyWithRuntimeRouteAction 的 `host` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.enum(["FLY","WALK"]).describe("SummonEnemyWithRuntimeRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。 */
    "_noEndPosition": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `selectTileInSnapshot` 配置字段；准确战斗语义待确认。 */
    "_selectTileInSnapshot": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `selectTileInSnapshot` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","SOURCE","TARGET"]).describe("SummonEnemyWithRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `spawnCertainOffsetX` 配置字段；准确战斗语义待确认。 */
    "_spawnCertainOffsetX": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `spawnCertainOffsetX` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `spawnCertainOffsetY` 配置字段；准确战斗语义待确认。 */
    "_spawnCertainOffsetY": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `spawnCertainOffsetY` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
    "_spawnOffset": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MAIN_TARGET","SOURCE","TARGET"]).describe("SummonEnemyWithRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `useRandomEnemy` 配置字段；准确战斗语义待确认。 */
    "_useRandomEnemy": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `useRandomEnemy` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `useSourceEndPosition` 配置字段；准确战斗语义待确认。 */
    "_useSourceEndPosition": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `useSourceEndPosition` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `useSpecialHost` 配置字段；准确战斗语义待确认。 */
    "_useSpecialHost": z.boolean().describe("SummonEnemyWithRuntimeRouteAction 的 `useSpecialHost` 配置字段；准确战斗语义待确认。"),
    /** SummonEnemyWithRuntimeRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonEnemyWithRuntimeRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonEnemyWithRuntimeRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonEnemyWithRuntimeRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SummonRandomEnemyWithRuntimeRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SummonRandomEnemyWithRuntimeRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SummonRandomEnemyWithRuntimeRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SummonRandomEnemyWithRuntimeRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("FLY").describe("SummonRandomEnemyWithRuntimeRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("SummonRandomEnemyWithRuntimeRouteAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.number().describe("SummonRandomEnemyWithRuntimeRouteAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `randomEnemys` 配置字段；准确战斗语义待确认。 */
    "_randomEnemys": z.array(z.string()).describe("SummonRandomEnemyWithRuntimeRouteAction 的 `randomEnemys` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SummonRandomEnemyWithRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SummonRandomEnemyWithRuntimeRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** SummonRandomEnemyWithRuntimeRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("SummonRandomEnemyWithRuntimeRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SummonRandomEnemyWithRuntimeRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SummonRandomEnemyWithRuntimeRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesFollowBranchRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SurvivalSummonEnemiesFollowBranchRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesFollowBranchRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.union([
                                                                                  z.null(),
                                                                                  z.array(z.never()),
                                                                                ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.union([
                                                                             z.null(),
                                                                             z.array(z.never()),
                                                                           ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.union([
                                                                                z.null(),
                                                                                z.array(z.never()),
                                                                              ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.union([
                                             z.null(),
                                             z.string(),
                                           ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.null().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
    "_overrideEnemyKey": z.string().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。 */
    "_setHostUid": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。 */
    "_summonAllRoute": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SurvivalSummonEnemiesFollowBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesFollowBranchRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SurvivalSummonEnemiesFollowBranchRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesPickRandomBranchRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const SurvivalSummonEnemiesPickRandomBranchRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesPickRandomBranchRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.strictObject({
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.never()).describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.string().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.literal("INFINITY").describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
    "_disableBornTweenColor": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
    "_managedByScheduler": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
    "_overrideEnemyKey": z.string().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。 */
    "_setHostUid": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。 */
    "_summonAllRoute": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesPickRandomBranchRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SurvivalSummonEnemiesPickRandomBranchRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Svash2EmitProjectileFixedDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const Svash2EmitProjectileFixedDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Svash2EmitProjectileFixedDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.array(BattleActionReferenceSchema).describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.array(z.strictObject({
                       /** Svash2EmitProjectileFixedDirectionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": z.strictObject({
                                             /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                             /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                             /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                             /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                             /** Svash2EmitProjectileFixedDirectionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                           }).describe("Svash2EmitProjectileFixedDirectionAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": z.array(z.never()).describe("Svash2EmitProjectileFixedDirectionAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": z.string().describe("Svash2EmitProjectileFixedDirectionAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": z.literal("LIMITED").describe("Svash2EmitProjectileFixedDirectionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": z.null().describe("Svash2EmitProjectileFixedDirectionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": z.literal("DEFAULT").describe("Svash2EmitProjectileFixedDirectionAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": z.array(z.never()).describe("Svash2EmitProjectileFixedDirectionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": z.literal("AUTOMATIC").describe("Svash2EmitProjectileFixedDirectionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": z.number().describe("Svash2EmitProjectileFixedDirectionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": z.literal("IMMEDIATELY").describe("Svash2EmitProjectileFixedDirectionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                       /** Svash2EmitProjectileFixedDirectionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                     })).describe("Svash2EmitProjectileFixedDirectionAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `ev` 配置字段；准确战斗语义待确认。 */
    "_ev": z.string().describe("Svash2EmitProjectileFixedDirectionAction 的 `ev` 配置字段；准确战斗语义待确认。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
    "_filterType": z.literal("ALL").describe("Svash2EmitProjectileFixedDirectionAction 的 `filterType` 配置字段；准确战斗语义待确认。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
    "_overwriteActions": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `rangeIdProjectileSize` 配置字段；准确战斗语义待确认。 */
    "_rangeIdProjectileSize": z.string().describe("Svash2EmitProjectileFixedDirectionAction 的 `rangeIdProjectileSize` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `startPositionType` 配置字段；准确战斗语义待确认。 */
    "_startPositionType": z.literal("BUFF_OWNER").describe("Svash2EmitProjectileFixedDirectionAction 的 `startPositionType` 配置字段；准确战斗语义待确认。"),
    /** Svash2EmitProjectileFixedDirectionAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("Svash2EmitProjectileFixedDirectionAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("Svash2EmitProjectileFixedDirectionAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("Svash2EmitProjectileFixedDirectionAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("Svash2EmitProjectileFixedDirectionAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("Svash2EmitProjectileFixedDirectionAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("Svash2EmitProjectileFixedDirectionAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("Svash2EmitProjectileFixedDirectionAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("Svash2EmitProjectileFixedDirectionAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("Svash2EmitProjectileFixedDirectionAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** Svash2EmitProjectileFixedDirectionAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("Svash2EmitProjectileFixedDirectionAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("Svash2EmitProjectileFixedDirectionAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Svash2EmitProjectileFixedDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Svash2EmitProjectileFixedDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Svash2LRCardPositionSwap, Assembly-CSharp 的严格 Action 数据。
 */
export const Svash2LRCardPositionSwapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Svash2LRCardPositionSwap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Svash2LRCardPositionSwapAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
    "_countKey": z.string().describe("Svash2LRCardPositionSwapAction 的 `countKey` 配置字段；准确战斗语义待确认。"),
    /** Svash2LRCardPositionSwapAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
    "_deckBuff": z.strictObject({
                       /** Svash2LRCardPositionSwapAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                       "affectInHand": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `affectInHand` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                       "affectOutOfHand": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** Svash2LRCardPositionSwapAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** Svash2LRCardPositionSwapAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.null().describe("Svash2LRCardPositionSwapAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** Svash2LRCardPositionSwapAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.null().describe("Svash2LRCardPositionSwapAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** Svash2LRCardPositionSwapAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.null().describe("Svash2LRCardPositionSwapAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** Svash2LRCardPositionSwapAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.null().describe("Svash2LRCardPositionSwapAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** Svash2LRCardPositionSwapAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.null().describe("Svash2LRCardPositionSwapAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** Svash2LRCardPositionSwapAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.null().describe("Svash2LRCardPositionSwapAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("Svash2LRCardPositionSwapAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("Svash2LRCardPositionSwapAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.never()).describe("Svash2LRCardPositionSwapAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("Svash2LRCardPositionSwapAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("Svash2LRCardPositionSwapAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("Svash2LRCardPositionSwapAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("Svash2LRCardPositionSwapAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.literal("INFINITY").describe("Svash2LRCardPositionSwapAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("Svash2LRCardPositionSwapAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("Svash2LRCardPositionSwapAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** Svash2LRCardPositionSwapAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.null().describe("Svash2LRCardPositionSwapAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.null().describe("Svash2LRCardPositionSwapAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.literal("DEFAULT").describe("Svash2LRCardPositionSwapAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("Svash2LRCardPositionSwapAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.never()).describe("Svash2LRCardPositionSwapAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("Svash2LRCardPositionSwapAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** Svash2LRCardPositionSwapAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("Svash2LRCardPositionSwapAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("Svash2LRCardPositionSwapAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("Svash2LRCardPositionSwapAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** Svash2LRCardPositionSwapAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("Svash2LRCardPositionSwapAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                       "cardAnimWhenDeckbuffAdd": z.string().describe("Svash2LRCardPositionSwapAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                       "cardEffectType": z.literal("NONE").describe("Svash2LRCardPositionSwapAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                       "ignoreSpecialBuild": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                       "lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("Svash2LRCardPositionSwapAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                       "showToastWhenAffect": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                       "wontSpawnWhenRallyPointSwitch": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。"),
                     }).describe("Svash2LRCardPositionSwapAction 的 `deckBuff` 配置字段；准确战斗语义待确认。"),
    /** Svash2LRCardPositionSwapAction 的 `emitPredefinedLocationReached` 配置字段；准确战斗语义待确认。 */
    "_emitPredefinedLocationReached": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `emitPredefinedLocationReached` 配置字段；准确战斗语义待确认。"),
    /** Svash2LRCardPositionSwapAction 的 `minCostReduceKey` 配置字段；准确战斗语义待确认。 */
    "_minCostReduceKey": z.string().describe("Svash2LRCardPositionSwapAction 的 `minCostReduceKey` 配置字段；准确战斗语义待确认。"),
    /** Svash2LRCardPositionSwapAction 的 `rightSelector` 配置字段；准确战斗语义待确认。 */
    "_rightSelector": z.strictObject({
                            /** Svash2LRCardPositionSwapAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                            "categoryMask": z.literal("WARRIOR, SNIPER, CASTER").describe("Svash2LRCardPositionSwapAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                            "enableOverride": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                            "excludeHiddenByCardState": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                            "excludeMe": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                            "excludeNotInHand": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                            "excludeNotShowInCardList": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                            "filterTag": z.null().describe("Svash2LRCardPositionSwapAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                            "mapTags": z.array(z.never()).describe("Svash2LRCardPositionSwapAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                            "onlySelectMe": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                            /** Svash2LRCardPositionSwapAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                            "subprofessionTag": z.null().describe("Svash2LRCardPositionSwapAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                          }).describe("Svash2LRCardPositionSwapAction 的 `rightSelector` 配置字段；准确战斗语义待确认。"),
    /** Svash2LRCardPositionSwapAction 的 `selector` 配置字段；准确战斗语义待确认。 */
    "_selector": z.strictObject({
                       /** Svash2LRCardPositionSwapAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                       "categoryMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER").describe("Svash2LRCardPositionSwapAction 的 `categoryMask` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                       "enableOverride": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `enableOverride` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                       "excludeHiddenByCardState": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                       "excludeMe": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeMe` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                       "excludeNotInHand": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                       "excludeNotShowInCardList": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                       "filterTag": z.null().describe("Svash2LRCardPositionSwapAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                       "mapTags": z.array(z.never()).describe("Svash2LRCardPositionSwapAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                       "onlySelectMe": z.boolean().describe("Svash2LRCardPositionSwapAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。"),
                       /** Svash2LRCardPositionSwapAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                       "subprofessionTag": z.null().describe("Svash2LRCardPositionSwapAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。"),
                     }).describe("Svash2LRCardPositionSwapAction 的 `selector` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Svash2LRCardPositionSwap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Svash2LRCardPositionSwapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Svash2RemoveCardOverrideByCardUid, Assembly-CSharp 的严格 Action 数据。
 */
export const Svash2RemoveCardOverrideByCardUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Svash2RemoveCardOverrideByCardUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Svash2RemoveCardOverrideByCardUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Svash2RemoveCardOverrideByCardUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SwitchDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const SwitchDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SwitchDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SwitchDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("SwitchDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** SwitchDirectionAction 的 `downNodes` 配置字段；准确战斗语义待确认。 */
    "_downNodes": z.array(BattleActionReferenceSchema).describe("SwitchDirectionAction 的 `downNodes` 配置字段；准确战斗语义待确认。"),
    /** SwitchDirectionAction 的 `leftNodes` 配置字段；准确战斗语义待确认。 */
    "_leftNodes": z.array(BattleActionReferenceSchema).describe("SwitchDirectionAction 的 `leftNodes` 配置字段；准确战斗语义待确认。"),
    /** SwitchDirectionAction 的 `rightNodes` 配置字段；准确战斗语义待确认。 */
    "_rightNodes": z.array(BattleActionReferenceSchema).describe("SwitchDirectionAction 的 `rightNodes` 配置字段；准确战斗语义待确认。"),
    /** SwitchDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("SwitchDirectionAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SwitchDirectionAction 的 `upNodes` 配置字段；准确战斗语义待确认。 */
    "_upNodes": z.array(BattleActionReferenceSchema).describe("SwitchDirectionAction 的 `upNodes` 配置字段；准确战斗语义待确认。"),
    /** SwitchDirectionAction 的 `useCustomDirection` 配置字段；准确战斗语义待确认。 */
    "_useCustomDirection": z.boolean().describe("SwitchDirectionAction 的 `useCustomDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SwitchDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SwitchDirectionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS15Schema = z
  .discriminatedUnion("$type", [SummonEnemyByAbilitySelectorActionSchema, SummonEnemyToTilesByMainline17ActionSchema, SummonEnemyWithRuntimeRouteActionSchema, SummonRandomEnemyWithRuntimeRouteActionSchema, SurvivalSummonEnemiesFollowBranchRouteActionSchema, SurvivalSummonEnemiesPickRandomBranchRouteActionSchema, Svash2EmitProjectileFixedDirectionActionSchema, Svash2LRCardPositionSwapActionSchema, Svash2RemoveCardOverrideByCardUidActionSchema, SwitchDirectionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS15>;
