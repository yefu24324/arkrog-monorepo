/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SortDeckAction, SpawnCharacterByUidAction, SpawnMultiTokenBySkillAction, SpawnTokenByIdUseAbilitySelectorAction, SpawnTokenInCharacterRangeByIdAction, SpawnTokenOnRangeTileAction, SpawnTokenOnTargetTileAction, SpawnTokenOnTargetTileWithConditionAction, SpawnTokenOnTileByBlackboardAction, SpawnTokenUseAbilitySelectorAction, BattleActionS12 } from "../../../../types/buff-template-data/actions/s/actions-s-12.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SortDeck, Assembly-CSharp 的严格 Action 数据。
 */
export const SortDeckActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SortDeck, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SortDeckAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("SortDeckAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SortDeck, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SortDeckAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnCharacterByUid, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnCharacterByUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnCharacterByUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnCharacterByUidAction 的 `addBuffToTarget` 配置字段；准确战斗语义待确认。 */
    "_addBuffToTarget": z.boolean().describe("SpawnCharacterByUidAction 的 `addBuffToTarget` 配置字段；准确战斗语义待确认。"),
    /** SpawnCharacterByUidAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** SpawnCharacterByUidAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** SpawnCharacterByUidAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.null().describe("SpawnCharacterByUidAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnCharacterByUidAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.null().describe("SpawnCharacterByUidAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnCharacterByUidAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.null().describe("SpawnCharacterByUidAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnCharacterByUidAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.null().describe("SpawnCharacterByUidAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnCharacterByUidAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.null().describe("SpawnCharacterByUidAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnCharacterByUidAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.null().describe("SpawnCharacterByUidAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("SpawnCharacterByUidAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("SpawnCharacterByUidAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("SpawnCharacterByUidAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("SpawnCharacterByUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("SpawnCharacterByUidAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("SpawnCharacterByUidAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("SpawnCharacterByUidAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("SpawnCharacterByUidAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("SpawnCharacterByUidAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("SpawnCharacterByUidAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("SpawnCharacterByUidAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("SpawnCharacterByUidAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("SpawnCharacterByUidAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("SpawnCharacterByUidAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("SpawnCharacterByUidAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("SpawnCharacterByUidAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("SpawnCharacterByUidAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SpawnCharacterByUidAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("SpawnCharacterByUidAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("SpawnCharacterByUidAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("SpawnCharacterByUidAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** SpawnCharacterByUidAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("SpawnCharacterByUidAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("SpawnCharacterByUidAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("SpawnCharacterByUidAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("SpawnCharacterByUidAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("SpawnCharacterByUidAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("SpawnCharacterByUidAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("SpawnCharacterByUidAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("SpawnCharacterByUidAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("SpawnCharacterByUidAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("SpawnCharacterByUidAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** SpawnCharacterByUidAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("SpawnCharacterByUidAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("SpawnCharacterByUidAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("SpawnCharacterByUidAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** SpawnCharacterByUidAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("SpawnCharacterByUidAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("SpawnCharacterByUidAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SpawnCharacterByUidAction 的 `freely` 配置字段；准确战斗语义待确认。 */
    "_freely": z.boolean().describe("SpawnCharacterByUidAction 的 `freely` 配置字段；准确战斗语义待确认。"),
    /** SpawnCharacterByUidAction 的 `getPosViaBB` 配置字段；准确战斗语义待确认。 */
    "_getPosViaBB": z.boolean().describe("SpawnCharacterByUidAction 的 `getPosViaBB` 配置字段；准确战斗语义待确认。"),
    /** SpawnCharacterByUidAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SpawnCharacterByUidAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnCharacterByUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnCharacterByUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnMultiTokenBySkill, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnMultiTokenBySkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnMultiTokenBySkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnMultiTokenBySkillAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.null().describe("SpawnMultiTokenBySkillAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** SpawnMultiTokenBySkillAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** SpawnMultiTokenBySkillAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnMultiTokenBySkillAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnMultiTokenBySkillAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnMultiTokenBySkillAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnMultiTokenBySkillAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** SpawnMultiTokenBySkillAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("SpawnMultiTokenBySkillAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("SpawnMultiTokenBySkillAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("SpawnMultiTokenBySkillAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.null().describe("SpawnMultiTokenBySkillAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("SpawnMultiTokenBySkillAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("SpawnMultiTokenBySkillAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.literal("IMMEDIATELY").describe("SpawnMultiTokenBySkillAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("SpawnMultiTokenBySkillAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("SpawnMultiTokenBySkillAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** SpawnMultiTokenBySkillAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("SpawnMultiTokenBySkillAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("SpawnMultiTokenBySkillAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("SpawnMultiTokenBySkillAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("SpawnMultiTokenBySkillAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("SpawnMultiTokenBySkillAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** SpawnMultiTokenBySkillAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("SpawnMultiTokenBySkillAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("SpawnMultiTokenBySkillAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("SpawnMultiTokenBySkillAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** SpawnMultiTokenBySkillAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("SpawnMultiTokenBySkillAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("SpawnMultiTokenBySkillAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `createEffectOnTokenTile` 配置字段；准确战斗语义待确认。 */
    "_createEffectOnTokenTile": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `createEffectOnTokenTile` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
    "_forceSpawn": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreAdvancedBuildableMask": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `ignoreSourceType` 配置字段；准确战斗语义待确认。 */
    "_ignoreSourceType": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `ignoreSourceType` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `ignoreTargetType` 配置字段；准确战斗语义待确认。 */
    "_ignoreTargetType": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `ignoreTargetType` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `playerSide` 配置字段；准确战斗语义待确认。 */
    "_playerSide": z.literal("DEFAULT").describe("SpawnMultiTokenBySkillAction 的 `playerSide` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `readDataFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_readDataFromBlackboard": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `readDataFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `refreshTokenCardCooldown` 配置字段；准确战斗语义待确认。 */
    "_refreshTokenCardCooldown": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `refreshTokenCardCooldown` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `respawnSameToken` 配置字段；准确战斗语义待确认。 */
    "_respawnSameToken": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `respawnSameToken` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("SpawnMultiTokenBySkillAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** SpawnMultiTokenBySkillAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。 */
    "_spawnedTokenSideType": z.literal("NONE").describe("SpawnMultiTokenBySkillAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `spawnTokenFromCards` 配置字段；准确战斗语义待确认。 */
    "_spawnTokenFromCards": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `spawnTokenFromCards` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `spawnTokenKey` 配置字段；准确战斗语义待确认。 */
    "_spawnTokenKey": z.null().describe("SpawnMultiTokenBySkillAction 的 `spawnTokenKey` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `specifierPlayerSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierPlayerSideType": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `specifierPlayerSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `specifierRelativeSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierRelativeSideType": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `specifierRelativeSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierSideType": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SpawnMultiTokenBySkillAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
    "_tileEffect": z.null().describe("SpawnMultiTokenBySkillAction 的 `tileEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** SpawnMultiTokenBySkillAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** SpawnMultiTokenBySkillAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.string().describe("SpawnMultiTokenBySkillAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnMultiTokenBySkillAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("SpawnMultiTokenBySkillAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnMultiTokenBySkillAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("SpawnMultiTokenBySkillAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnMultiTokenBySkillAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("SpawnMultiTokenBySkillAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnMultiTokenBySkillAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("SpawnMultiTokenBySkillAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("SpawnMultiTokenBySkillAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("SpawnMultiTokenBySkillAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("SpawnMultiTokenBySkillAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("SpawnMultiTokenBySkillAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("SpawnMultiTokenBySkillAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("SpawnMultiTokenBySkillAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("SpawnMultiTokenBySkillAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnMultiTokenBySkillAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.array(z.never()).describe("SpawnMultiTokenBySkillAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("SpawnMultiTokenBySkillAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `usePosByBB` 配置字段；准确战斗语义待确认。 */
    "_usePosByBB": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `usePosByBB` 配置字段；准确战斗语义待确认。"),
    /** SpawnMultiTokenBySkillAction 的 `useTokenKeyDirectly` 配置字段；准确战斗语义待确认。 */
    "_useTokenKeyDirectly": z.boolean().describe("SpawnMultiTokenBySkillAction 的 `useTokenKeyDirectly` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnMultiTokenBySkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnMultiTokenBySkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenByIdUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenByIdUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenByIdUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `addBuff` 配置字段；准确战斗语义待确认。 */
    "_addBuff": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `addBuff` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `buffToToken` 配置字段；准确战斗语义待确认。 */
    "_buffToToken": z.strictObject({
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": z.strictObject({
                                                /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                "abnormalAntis": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalComboImmunes": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                "abnormalCombos": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                "abnormalFlags": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                /** SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                "abnormalImmunes": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                /** SpawnTokenByIdUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                "attributeModifiers": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                              }).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": z.null().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": z.array(z.strictObject({
                                                /** 黑板参数键或当前配置项的稳定键。 */
                                                "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                                /** 黑板参数的数值槽。 */
                                                "value": z.number().describe("黑板参数的数值槽。"),
                                                /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                                "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                              })).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": z.string().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": z.null().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": z.literal("IMMEDIATELY").describe("SpawnTokenByIdUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": z.null().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": z.null().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": z.literal("DEFAULT").describe("SpawnTokenByIdUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": z.array(z.never()).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": z.literal("AUTOMATIC").describe("SpawnTokenByIdUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": z.number().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": z.literal("IMMEDIATELY").describe("SpawnTokenByIdUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                          /** SpawnTokenByIdUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        }).describe("SpawnTokenByIdUseAbilitySelectorAction 的 `buffToToken` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `checkTokenMaxDeployCnt` 配置字段；准确战斗语义待确认。 */
    "_checkTokenMaxDeployCnt": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `checkTokenMaxDeployCnt` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `dontUpdateCardRespawnState` 配置字段；准确战斗语义待确认。 */
    "_dontUpdateCardRespawnState": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `dontUpdateCardRespawnState` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `exceptSourceRootTile` 配置字段；准确战斗语义待确认。 */
    "_exceptSourceRootTile": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `exceptSourceRootTile` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `returnIfCreateToken` 配置字段；准确战斗语义待确认。 */
    "_returnIfCreateToken": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `returnIfCreateToken` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `spawnOnOverlapBuildableTrap` 配置字段；准确战斗语义待确认。 */
    "_spawnOnOverlapBuildableTrap": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `spawnOnOverlapBuildableTrap` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `tokenId` 配置字段；准确战斗语义待确认。 */
    "_tokenId": z.string().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `tokenId` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `useHostAsSpawnTokenHost` 配置字段；准确战斗语义待确认。 */
    "_useHostAsSpawnTokenHost": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `useHostAsSpawnTokenHost` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenByIdUseAbilitySelectorAction 的 `useSourceAbility` 配置字段；准确战斗语义待确认。 */
    "_useSourceAbility": z.boolean().describe("SpawnTokenByIdUseAbilitySelectorAction 的 `useSourceAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenByIdUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenByIdUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenInCharacterRangeById, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenInCharacterRangeByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenInCharacterRangeById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
    "_checkExtraBuildableCheckers": z.boolean().describe("SpawnTokenInCharacterRangeByIdAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `checkTokenMaxDeployCnt` 配置字段；准确战斗语义待确认。 */
    "_checkTokenMaxDeployCnt": z.boolean().describe("SpawnTokenInCharacterRangeByIdAction 的 `checkTokenMaxDeployCnt` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
    "_hostType": z.literal("BUFF_SOURCE").describe("SpawnTokenInCharacterRangeByIdAction 的 `hostType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `maxTileCnt` 配置字段；准确战斗语义待确认。 */
    "_maxTileCnt": z.number().describe("SpawnTokenInCharacterRangeByIdAction 的 `maxTileCnt` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
    "_targetCategory": z.literal("DEFAULT").describe("SpawnTokenInCharacterRangeByIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
    "_targetMotion": z.literal("WALK_ONLY").describe("SpawnTokenInCharacterRangeByIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
    "_targetSide": z.literal("ENEMY").describe("SpawnTokenInCharacterRangeByIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SpawnTokenInCharacterRangeByIdAction 的 `tokenId` 配置字段；准确战斗语义待确认。 */
    "_tokenId": z.string().describe("SpawnTokenInCharacterRangeByIdAction 的 `tokenId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenInCharacterRangeById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenInCharacterRangeByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnRangeTile, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenOnRangeTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenOnRangeTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenOnRangeTileAction 的 `buffToToken` 配置字段；准确战斗语义待确认。 */
    "_buffToToken": z.union([
                          z.null(),
                          z.array(z.strictObject({
                                  /** SpawnTokenOnRangeTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": z.strictObject({
                                                          /** SpawnTokenOnRangeTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": z.null().describe("SpawnTokenOnRangeTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                          /** SpawnTokenOnRangeTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": z.null().describe("SpawnTokenOnRangeTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** SpawnTokenOnRangeTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": z.null().describe("SpawnTokenOnRangeTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                          /** SpawnTokenOnRangeTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": z.null().describe("SpawnTokenOnRangeTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                          /** SpawnTokenOnRangeTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": z.null().describe("SpawnTokenOnRangeTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** SpawnTokenOnRangeTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": z.null().describe("SpawnTokenOnRangeTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                        }).describe("SpawnTokenOnRangeTileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": z.null().describe("SpawnTokenOnRangeTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": z.array(z.never()).describe("SpawnTokenOnRangeTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": z.string().describe("SpawnTokenOnRangeTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": z.null().describe("SpawnTokenOnRangeTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": z.number().describe("SpawnTokenOnRangeTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": z.number().describe("SpawnTokenOnRangeTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": z.literal("IMMEDIATELY").describe("SpawnTokenOnRangeTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": z.number().describe("SpawnTokenOnRangeTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": z.number().describe("SpawnTokenOnRangeTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                  /** SpawnTokenOnRangeTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": z.null().describe("SpawnTokenOnRangeTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": z.null().describe("SpawnTokenOnRangeTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": z.literal("DEFAULT").describe("SpawnTokenOnRangeTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": z.number().describe("SpawnTokenOnRangeTileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": z.array(z.never()).describe("SpawnTokenOnRangeTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": z.literal("AUTOMATIC").describe("SpawnTokenOnRangeTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                  /** SpawnTokenOnRangeTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": z.number().describe("SpawnTokenOnRangeTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": z.number().describe("SpawnTokenOnRangeTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": z.literal("IMMEDIATELY").describe("SpawnTokenOnRangeTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                  /** SpawnTokenOnRangeTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                })),
                        ]).describe("SpawnTokenOnRangeTileAction 的 `buffToToken` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `checkPassableMask` 配置字段；准确战斗语义待确认。 */
    "_checkPassableMask": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `checkPassableMask` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
    "_passableMask": z.literal("WALK_ONLY").describe("SpawnTokenOnRangeTileAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("SpawnTokenOnRangeTileAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** SpawnTokenOnRangeTileAction 的 `spawnCnt` 配置字段；准确战斗语义待确认。 */
    "_spawnCnt": z.number().describe("SpawnTokenOnRangeTileAction 的 `spawnCnt` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `spawnOnRandomTiles` 配置字段；准确战斗语义待确认。 */
    "_spawnOnRandomTiles": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `spawnOnRandomTiles` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** SpawnTokenOnRangeTileAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
    "_tileEffect": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("SpawnTokenOnRangeTileAction 的 `tileEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `tileHoldEffect` 配置字段；准确战斗语义待确认。 */
    "_tileHoldEffect": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `tileHoldEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnRangeTileAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** SpawnTokenOnRangeTileAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** SpawnTokenOnRangeTileAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.string().describe("SpawnTokenOnRangeTileAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnRangeTileAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("SpawnTokenOnRangeTileAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnRangeTileAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("SpawnTokenOnRangeTileAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnRangeTileAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("SpawnTokenOnRangeTileAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnRangeTileAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("SpawnTokenOnRangeTileAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("SpawnTokenOnRangeTileAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("SpawnTokenOnRangeTileAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.union([
                                                  z.null(),
                                                  z.array(z.never()),
                                                ]).describe("SpawnTokenOnRangeTileAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("SpawnTokenOnRangeTileAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("SpawnTokenOnRangeTileAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("SpawnTokenOnRangeTileAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("SpawnTokenOnRangeTileAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("SpawnTokenOnRangeTileAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("SpawnTokenOnRangeTileAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnRangeTileAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.array(z.never()).describe("SpawnTokenOnRangeTileAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("SpawnTokenOnRangeTileAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnRangeTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenOnRangeTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTile, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenOnTargetTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenOnTargetTileAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.union([
                    z.null(),
                    z.array(z.strictObject({
                            /** SpawnTokenOnTargetTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                            "attributes": z.strictObject({
                                                    /** SpawnTokenOnTargetTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalAntis": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.never()),
                                                                               ]).describe("SpawnTokenOnTargetTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                    /** SpawnTokenOnTargetTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalComboImmunes": z.union([
                                                                                        z.null(),
                                                                                        z.array(z.never()),
                                                                                      ]).describe("SpawnTokenOnTargetTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                    /** SpawnTokenOnTargetTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalCombos": z.union([
                                                                                  z.null(),
                                                                                  z.array(z.never()),
                                                                                ]).describe("SpawnTokenOnTargetTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                    /** SpawnTokenOnTargetTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalFlags": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.string()),
                                                                               ]).describe("SpawnTokenOnTargetTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                    /** SpawnTokenOnTargetTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalImmunes": z.union([
                                                                                   z.null(),
                                                                                   z.array(z.never()),
                                                                                 ]).describe("SpawnTokenOnTargetTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                    /** SpawnTokenOnTargetTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                    "attributeModifiers": z.union([
                                                                                      z.null(),
                                                                                      z.array(z.never()),
                                                                                    ]).describe("SpawnTokenOnTargetTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                  }).describe("SpawnTokenOnTargetTileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                            "audioSignal": z.null().describe("SpawnTokenOnTargetTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                            "blackboard": z.union([
                                                    z.null(),
                                                    z.array(z.never()),
                                                  ]).describe("SpawnTokenOnTargetTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                            "buffKey": z.string().describe("SpawnTokenOnTargetTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                            "clearAllStackCntWhenTimeUp": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                            "disableOverride": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                            "durationKey": z.null().describe("SpawnTokenOnTargetTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                            "enableInitDirectionFromSource": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                            "firstTriggerInterval": z.number().describe("SpawnTokenOnTargetTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                            "independentCharacterSource": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                            "isDamageMissable": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                            "isDurableBuff": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                            "isFreezable": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                            "isLevitatable": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                            "isSilenceable": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                            "isStunnable": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                            "lifeTime": z.number().describe("SpawnTokenOnTargetTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                            "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("SpawnTokenOnTargetTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                            "loadFromDB": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                            "maxStackCnt": z.number().describe("SpawnTokenOnTargetTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                            "maxValidStackCnt": z.number().describe("SpawnTokenOnTargetTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                            /** 模板处理战斗事件时使用的优先级。 */
                            "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                            /** SpawnTokenOnTargetTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                            "overrideEffectKey": z.null().describe("SpawnTokenOnTargetTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                            "overrideKey": z.null().describe("SpawnTokenOnTargetTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                            "overrideOnEventPriority": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                            "overrideType": z.literal("DEFAULT").describe("SpawnTokenOnTargetTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                            "priority": z.number().describe("SpawnTokenOnTargetTileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                            "priorityBBKeys": z.union([
                                                        z.null(),
                                                        z.array(z.never()),
                                                      ]).describe("SpawnTokenOnTargetTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                            "refreshRemainingTimeWhenStackMax": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                            "statusResistable": z.literal("AUTOMATIC").describe("SpawnTokenOnTargetTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                            "stripBlackboardParamsWithBuffKey": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                            "takeSnapshotWhenExtend": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                            /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                            "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                            /** SpawnTokenOnTargetTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                            "triggerCnt": z.number().describe("SpawnTokenOnTargetTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                            "triggerInterval": z.number().describe("SpawnTokenOnTargetTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                            "triggerLifeType": z.literal("IMMEDIATELY").describe("SpawnTokenOnTargetTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                            /** SpawnTokenOnTargetTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                            "waitFirstTriggerInterval": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                          })),
                  ]).describe("SpawnTokenOnTargetTileAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `createEffectOnTokenTile` 配置字段；准确战斗语义待确认。 */
    "_createEffectOnTokenTile": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `createEffectOnTokenTile` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `doRuneProcess` 配置字段；准确战斗语义待确认。 */
    "_doRuneProcess": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `doRuneProcess` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
    "_forceSpawn": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreAdvancedBuildableMask": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `ignoreSourceType` 配置字段；准确战斗语义待确认。 */
    "_ignoreSourceType": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `ignoreSourceType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `ignoreTargetType` 配置字段；准确战斗语义待确认。 */
    "_ignoreTargetType": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `ignoreTargetType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `loadTileFromCharacterSharedData` 配置字段；准确战斗语义待确认。 */
    "_loadTileFromCharacterSharedData": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `loadTileFromCharacterSharedData` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `locatedColBBKey` 配置字段；准确战斗语义待确认。 */
    "_locatedColBBKey": z.string().describe("SpawnTokenOnTargetTileAction 的 `locatedColBBKey` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `locatedRowBBKey` 配置字段；准确战斗语义待确认。 */
    "_locatedRowBBKey": z.string().describe("SpawnTokenOnTargetTileAction 的 `locatedRowBBKey` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `playerSide` 配置字段；准确战斗语义待确认。 */
    "_playerSide": z.literal("DEFAULT").describe("SpawnTokenOnTargetTileAction 的 `playerSide` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `readDataFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_readDataFromBlackboard": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `readDataFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `refreshTokenCardCooldown` 配置字段；准确战斗语义待确认。 */
    "_refreshTokenCardCooldown": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `refreshTokenCardCooldown` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `respawnSameToken` 配置字段；准确战斗语义待确认。 */
    "_respawnSameToken": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `respawnSameToken` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `returnIfSpawnFailed` 配置字段；准确战斗语义待确认。 */
    "_returnIfSpawnFailed": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `returnIfSpawnFailed` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** SpawnTokenOnTargetTileAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。 */
    "_spawnedTokenSideType": z.enum(["ENEMY","NONE"]).describe("SpawnTokenOnTargetTileAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `spawnTokenFromCards` 配置字段；准确战斗语义待确认。 */
    "_spawnTokenFromCards": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `spawnTokenFromCards` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `spawnTokenKey` 配置字段；准确战斗语义待确认。 */
    "_spawnTokenKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("SpawnTokenOnTargetTileAction 的 `spawnTokenKey` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `specifierPlayerSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierPlayerSideType": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `specifierPlayerSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `specifierRelativeSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierRelativeSideType": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `specifierRelativeSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierSideType": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MAIN_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** SpawnTokenOnTargetTileAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
    "_tileEffect": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("SpawnTokenOnTargetTileAction 的 `tileEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `tileFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_tileFromBlackboard": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `tileFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `tileFromBlackboardFixed` 配置字段；准确战斗语义待确认。 */
    "_tileFromBlackboardFixed": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `tileFromBlackboardFixed` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `tileFromSnapshot` 配置字段；准确战斗语义待确认。 */
    "_tileFromSnapshot": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `tileFromSnapshot` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** SpawnTokenOnTargetTileAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** SpawnTokenOnTargetTileAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.union([
                                                                     z.null(),
                                                                     z.string(),
                                                                   ]).describe("SpawnTokenOnTargetTileAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("SpawnTokenOnTargetTileAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("SpawnTokenOnTargetTileAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("SpawnTokenOnTargetTileAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("SpawnTokenOnTargetTileAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("SpawnTokenOnTargetTileAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("SpawnTokenOnTargetTileAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.union([
                                                  z.null(),
                                                  z.array(z.never()),
                                                ]).describe("SpawnTokenOnTargetTileAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("SpawnTokenOnTargetTileAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("SpawnTokenOnTargetTileAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("SpawnTokenOnTargetTileAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("SpawnTokenOnTargetTileAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("SpawnTokenOnTargetTileAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.union([
                                                  z.null(),
                                                  z.array(z.never()),
                                                ]).describe("SpawnTokenOnTargetTileAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("SpawnTokenOnTargetTileAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `useDirectionFromSharedData` 配置字段；准确战斗语义待确认。 */
    "_useDirectionFromSharedData": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `useDirectionFromSharedData` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileAction 的 `useTokenKeyDirectly` 配置字段；准确战斗语义待确认。 */
    "_useTokenKeyDirectly": z.boolean().describe("SpawnTokenOnTargetTileAction 的 `useTokenKeyDirectly` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenOnTargetTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTileWithCondition, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenOnTargetTileWithConditionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTileWithCondition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.never()).describe("SpawnTokenOnTargetTileWithConditionAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `options` 配置字段；准确战斗语义待确认。 */
    "_options": z.strictObject({
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMask": z.literal("NONE").describe("SpawnTokenOnTargetTileWithConditionAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMaskExcept": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "allowAllAdvancedBuildableMask": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                      "allowNoneBuildableType": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                      "allowNonePassableMask": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "allowedTileBlackboardKey": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                      "buildableType": z.literal("MELEE").describe("SpawnTokenOnTargetTileWithConditionAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                      "checkBuildableOrPassable": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                      "checkExtraBuildableCheckers": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                      "checkHeightType": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                      "checkTileHidden": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                      "checkTileMode": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                      "checkTileMoveCost": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                      "checkTileTypes": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                      "exceptTileTypes": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "excludeTileBlackboardKey": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                      "heightType": z.literal("LOWLAND").describe("SpawnTokenOnTargetTileWithConditionAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                      "modeIndex": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                      "moveCostCompareType": z.literal("EQUALS").describe("SpawnTokenOnTargetTileWithConditionAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                      "moveCostThreshold": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                      "passableMask": z.literal("ALL").describe("SpawnTokenOnTargetTileWithConditionAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
                      /** SpawnTokenOnTargetTileWithConditionAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                      "tileTypesMask": z.literal("NONE").describe("SpawnTokenOnTargetTileWithConditionAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。"),
                    }).describe("SpawnTokenOnTargetTileWithConditionAction 的 `options` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。 */
    "_spawnedTokenSideType": z.enum(["ALLY","ENEMY"]).describe("SpawnTokenOnTargetTileWithConditionAction 的 `spawnedTokenSideType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。 */
    "_specifierSideType": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `specifierSideType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `tileBlackList` 配置字段；准确战斗语义待确认。 */
    "_tileBlackList": z.string().describe("SpawnTokenOnTargetTileWithConditionAction 的 `tileBlackList` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `tileBlackListKey` 配置字段；准确战斗语义待确认。 */
    "_tileBlackListKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("SpawnTokenOnTargetTileWithConditionAction 的 `tileBlackListKey` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
    "_tileEffect": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `tileEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `tileFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_tileFromBlackboard": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `tileFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTargetTileWithConditionAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** SpawnTokenOnTargetTileWithConditionAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.string().describe("SpawnTokenOnTargetTileWithConditionAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileWithConditionAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileWithConditionAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileWithConditionAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("SpawnTokenOnTargetTileWithConditionAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTargetTileWithConditionAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("SpawnTokenOnTargetTileWithConditionAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("SpawnTokenOnTargetTileWithConditionAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("SpawnTokenOnTargetTileWithConditionAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("SpawnTokenOnTargetTileWithConditionAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTargetTileWithConditionAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.array(z.never()).describe("SpawnTokenOnTargetTileWithConditionAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("SpawnTokenOnTargetTileWithConditionAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnTargetTileWithCondition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenOnTargetTileWithConditionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnTileByBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenOnTileByBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenOnTileByBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
    "_checkBuildableType": z.boolean().describe("SpawnTokenOnTileByBlackboardAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `dirBlackboard` 配置字段；准确战斗语义待确认。 */
    "_dirBlackboard": z.string().describe("SpawnTokenOnTileByBlackboardAction 的 `dirBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `excludeTileInBlackboard` 配置字段；准确战斗语义待确认。 */
    "_excludeTileInBlackboard": z.boolean().describe("SpawnTokenOnTileByBlackboardAction 的 `excludeTileInBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `onlySpawnOnNoCharacterTile` 配置字段；准确战斗语义待确认。 */
    "_onlySpawnOnNoCharacterTile": z.boolean().describe("SpawnTokenOnTileByBlackboardAction 的 `onlySpawnOnNoCharacterTile` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("SpawnTokenOnTileByBlackboardAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** SpawnTokenOnTileByBlackboardAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** SpawnTokenOnTileByBlackboardAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.string().describe("SpawnTokenOnTileByBlackboardAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTileByBlackboardAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("SpawnTokenOnTileByBlackboardAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTileByBlackboardAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("SpawnTokenOnTileByBlackboardAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTileByBlackboardAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("SpawnTokenOnTileByBlackboardAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenOnTileByBlackboardAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("SpawnTokenOnTileByBlackboardAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("SpawnTokenOnTileByBlackboardAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("SpawnTokenOnTileByBlackboardAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.array(z.never()).describe("SpawnTokenOnTileByBlackboardAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("SpawnTokenOnTileByBlackboardAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("SpawnTokenOnTileByBlackboardAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("SpawnTokenOnTileByBlackboardAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("SpawnTokenOnTileByBlackboardAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("SpawnTokenOnTileByBlackboardAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("SpawnTokenOnTileByBlackboardAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenOnTileByBlackboardAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.array(z.never()).describe("SpawnTokenOnTileByBlackboardAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("SpawnTokenOnTileByBlackboardAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenOnTileByBlackboardAction 的 `validTileBlackboard` 配置字段；准确战斗语义待确认。 */
    "_validTileBlackboard": z.null().describe("SpawnTokenOnTileByBlackboardAction 的 `validTileBlackboard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenOnTileByBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenOnTileByBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const SpawnTokenUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SpawnTokenUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SpawnTokenUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SpawnTokenUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenUseAbilitySelectorAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SpawnTokenUseAbilitySelectorAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
    /** SpawnTokenUseAbilitySelectorAction 的 `tileEffect` 配置字段；准确战斗语义待确认。 */
    "_tileEffect": z.null().describe("SpawnTokenUseAbilitySelectorAction 的 `tileEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenUseAbilitySelectorAction 的 `tileHoldEffect` 配置字段；准确战斗语义待确认。 */
    "_tileHoldEffect": z.boolean().describe("SpawnTokenUseAbilitySelectorAction 的 `tileHoldEffect` 配置字段；准确战斗语义待确认。"),
    /** SpawnTokenUseAbilitySelectorAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
    "_tokenToSpawn": z.strictObject({
                           /** SpawnTokenUseAbilitySelectorAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                           "inst": z.strictObject({
                                           /** SpawnTokenUseAbilitySelectorAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                           "characterKey": z.string().describe("SpawnTokenUseAbilitySelectorAction 的 `characterKey` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenUseAbilitySelectorAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                           "favorPoint": z.number().describe("SpawnTokenUseAbilitySelectorAction 的 `favorPoint` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenUseAbilitySelectorAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                           "level": z.number().describe("SpawnTokenUseAbilitySelectorAction 的 `level` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenUseAbilitySelectorAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                           "phase": z.literal("PHASE_0").describe("SpawnTokenUseAbilitySelectorAction 的 `phase` 配置字段；准确战斗语义待确认。"),
                                           /** SpawnTokenUseAbilitySelectorAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                           "potentialRank": z.number().describe("SpawnTokenUseAbilitySelectorAction 的 `potentialRank` 配置字段；准确战斗语义待确认。"),
                                         }).describe("SpawnTokenUseAbilitySelectorAction 的 `inst` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                           "mainSkillLvl": z.number().describe("SpawnTokenUseAbilitySelectorAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                           "masterInfos": z.array(z.never()).describe("SpawnTokenUseAbilitySelectorAction 的 `masterInfos` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                           "overrideSkillBlackboard": z.null().describe("SpawnTokenUseAbilitySelectorAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                           "overrideTalents": z.null().describe("SpawnTokenUseAbilitySelectorAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                           "showSpIllust": z.boolean().describe("SpawnTokenUseAbilitySelectorAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                           "skillIndex": z.number().describe("SpawnTokenUseAbilitySelectorAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                           "skinId": z.null().describe("SpawnTokenUseAbilitySelectorAction 的 `skinId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                           "tmplId": z.null().describe("SpawnTokenUseAbilitySelectorAction 的 `tmplId` 配置字段；准确战斗语义待确认。"),
                           /** SpawnTokenUseAbilitySelectorAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                           "uniEquipIds": z.array(z.never()).describe("SpawnTokenUseAbilitySelectorAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。"),
                         }).describe("SpawnTokenUseAbilitySelectorAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SpawnTokenUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SpawnTokenUseAbilitySelectorAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS12Schema = z
  .discriminatedUnion("$type", [SortDeckActionSchema, SpawnCharacterByUidActionSchema, SpawnMultiTokenBySkillActionSchema, SpawnTokenByIdUseAbilitySelectorActionSchema, SpawnTokenInCharacterRangeByIdActionSchema, SpawnTokenOnRangeTileActionSchema, SpawnTokenOnTargetTileActionSchema, SpawnTokenOnTargetTileWithConditionActionSchema, SpawnTokenOnTileByBlackboardActionSchema, SpawnTokenUseAbilitySelectorActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS12>;
