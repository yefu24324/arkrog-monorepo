/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Main15FilterPrtsLastSubActionAction, Main15ForceSetBattleSpeedLevelAction, Main15InsertPrtsActionAction, Main15SkipPrtsActionAction, Main15TryNextPrtsActionAction, Main16ChangeTileShadowViaRangeAction, Main16CheckTargetInShadowStateTileAction, Mainline14InformLrdeadDeathAction, Mainline14TriggerSkillAction, Mainline17CreateBossClickCounterButtonAction, BattleActionM01 } from "../../../../types/buff-template-data/actions/m/actions-m-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main15FilterPrtsLastSubAction, Assembly-CSharp 的严格 Action 数据。
 */
export const Main15FilterPrtsLastSubActionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main15FilterPrtsLastSubAction, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main15FilterPrtsLastSubActionAction 的 `actionType` 配置字段；准确战斗语义待确认。 */
    "_actionType": z.enum(["DRAG","FOLLOW_BOSS","MOVE_TO_CREATE_BUFF","MOVE_TO_DRAG","MOVE_TO_ORIGIN"]).describe("Main15FilterPrtsLastSubActionAction 的 `actionType` 配置字段；准确战斗语义待确认。"),
    /** Main15FilterPrtsLastSubActionAction 的 `filterActionInstead` 配置字段；准确战斗语义待确认。 */
    "_filterActionInstead": z.boolean().describe("Main15FilterPrtsLastSubActionAction 的 `filterActionInstead` 配置字段；准确战斗语义待确认。"),
    /** Main15FilterPrtsLastSubActionAction 的 `mainActionType` 配置字段；准确战斗语义待确认。 */
    "_mainActionType": z.literal("MOVE_AND_SPAWNENEMY").describe("Main15FilterPrtsLastSubActionAction 的 `mainActionType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main15FilterPrtsLastSubAction, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main15FilterPrtsLastSubActionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main15ForceSetBattleSpeedLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const Main15ForceSetBattleSpeedLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main15ForceSetBattleSpeedLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main15ForceSetBattleSpeedLevelAction 的 `enable` 配置字段；准确战斗语义待确认。 */
    "_enable": z.boolean().describe("Main15ForceSetBattleSpeedLevelAction 的 `enable` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main15ForceSetBattleSpeedLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main15ForceSetBattleSpeedLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main15InsertPrtsAction, Assembly-CSharp 的严格 Action 数据。
 */
export const Main15InsertPrtsActionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main15InsertPrtsAction, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main15InsertPrtsActionAction 的 `actionType` 配置字段；准确战斗语义待确认。 */
    "_actionType": z.enum(["MOVE_AND_CREATEBUFF","MOVE_AND_DRAG_SOURCE","MOVE_AND_SPAWNENEMY"]).describe("Main15InsertPrtsActionAction 的 `actionType` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
    "_buffData": z.union([
                       z.null(),
                       z.strictObject({
                               /** Main15InsertPrtsActionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                               "attributes": z.strictObject({
                                                       /** Main15InsertPrtsActionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalAntis": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                       /** Main15InsertPrtsActionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalComboImmunes": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                       /** Main15InsertPrtsActionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalCombos": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                       /** Main15InsertPrtsActionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalFlags": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                       /** Main15InsertPrtsActionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalImmunes": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                       /** Main15InsertPrtsActionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                       "attributeModifiers": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                     }).describe("Main15InsertPrtsActionAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                               "audioSignal": z.null().describe("Main15InsertPrtsActionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                               "blackboard": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                               "buffKey": z.string().describe("Main15InsertPrtsActionAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                               "clearAllStackCntWhenTimeUp": z.boolean().describe("Main15InsertPrtsActionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                               "disableOverride": z.boolean().describe("Main15InsertPrtsActionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                               "durationKey": z.union([
                                                        z.null(),
                                                        z.string(),
                                                      ]).describe("Main15InsertPrtsActionAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                               "enableInitDirectionFromSource": z.boolean().describe("Main15InsertPrtsActionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                               "firstTriggerInterval": z.number().describe("Main15InsertPrtsActionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                               "independentCharacterSource": z.boolean().describe("Main15InsertPrtsActionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                               "isDamageMissable": z.boolean().describe("Main15InsertPrtsActionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                               "isDurableBuff": z.boolean().describe("Main15InsertPrtsActionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                               "isFreezable": z.boolean().describe("Main15InsertPrtsActionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                               "isLevitatable": z.boolean().describe("Main15InsertPrtsActionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                               "isSilenceable": z.boolean().describe("Main15InsertPrtsActionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                               "isStunnable": z.boolean().describe("Main15InsertPrtsActionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                               "lifeTime": z.number().describe("Main15InsertPrtsActionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                               "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("Main15InsertPrtsActionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                               "loadFromDB": z.boolean().describe("Main15InsertPrtsActionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                               "maxStackCnt": z.number().describe("Main15InsertPrtsActionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                               "maxValidStackCnt": z.number().describe("Main15InsertPrtsActionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                               /** 模板处理战斗事件时使用的优先级。 */
                               "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                               /** Main15InsertPrtsActionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                               "overrideEffectKey": z.null().describe("Main15InsertPrtsActionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                               "overrideKey": z.null().describe("Main15InsertPrtsActionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                               "overrideOnEventPriority": z.boolean().describe("Main15InsertPrtsActionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                               "overrideType": z.literal("DEFAULT").describe("Main15InsertPrtsActionAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                               "priority": z.number().describe("Main15InsertPrtsActionAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                               "priorityBBKeys": z.array(z.never()).describe("Main15InsertPrtsActionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                               "refreshRemainingTimeWhenStackMax": z.boolean().describe("Main15InsertPrtsActionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                               "statusResistable": z.literal("AUTOMATIC").describe("Main15InsertPrtsActionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                               "stripBlackboardParamsWithBuffKey": z.boolean().describe("Main15InsertPrtsActionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                               "takeSnapshotWhenExtend": z.boolean().describe("Main15InsertPrtsActionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                               /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                               "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                               /** Main15InsertPrtsActionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                               "triggerCnt": z.number().describe("Main15InsertPrtsActionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                               "triggerInterval": z.number().describe("Main15InsertPrtsActionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                               "triggerLifeType": z.literal("IMMEDIATELY").describe("Main15InsertPrtsActionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                               /** Main15InsertPrtsActionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                               "waitFirstTriggerInterval": z.boolean().describe("Main15InsertPrtsActionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                             }),
                     ]).describe("Main15InsertPrtsActionAction 的 `buffData` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `chooseMostCharSurroud` 配置字段；准确战斗语义待确认。 */
    "_chooseMostCharSurroud": z.boolean().describe("Main15InsertPrtsActionAction 的 `chooseMostCharSurroud` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `chooseMostEnemySurroud` 配置字段；准确战斗语义待确认。 */
    "_chooseMostEnemySurroud": z.boolean().describe("Main15InsertPrtsActionAction 的 `chooseMostEnemySurroud` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `chooseSource` 配置字段；准确战斗语义待确认。 */
    "_chooseSource": z.boolean().describe("Main15InsertPrtsActionAction 的 `chooseSource` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `enemyKeyFly` 配置字段；准确战斗语义待确认。 */
    "_enemyKeyFly": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("Main15InsertPrtsActionAction 的 `enemyKeyFly` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `enemyKeyHL` 配置字段；准确战斗语义待确认。 */
    "_enemyKeyHL": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("Main15InsertPrtsActionAction 的 `enemyKeyHL` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `enemyKeyLL` 配置字段；准确战斗语义待确认。 */
    "_enemyKeyLL": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("Main15InsertPrtsActionAction 的 `enemyKeyLL` 配置字段；准确战斗语义待确认。"),
    /** Main15InsertPrtsActionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
    "_priority": z.number().describe("Main15InsertPrtsActionAction 的 `priority` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main15InsertPrtsAction, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main15InsertPrtsActionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main15SkipPrtsAction, Assembly-CSharp 的严格 Action 数据。
 */
export const Main15SkipPrtsActionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main15SkipPrtsAction, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main15SkipPrtsActionAction 的 `actionType` 配置字段；准确战斗语义待确认。 */
    "_actionType": z.literal("MOVE_AND_DRAG_SOURCE").describe("Main15SkipPrtsActionAction 的 `actionType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main15SkipPrtsAction, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main15SkipPrtsActionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main15TryNextPrtsAction, Assembly-CSharp 的严格 Action 数据。
 */
export const Main15TryNextPrtsActionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main15TryNextPrtsAction, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main15TryNextPrtsActionAction 的 `doNextWhenSuccess` 配置字段；准确战斗语义待确认。 */
    "_doNextWhenSuccess": z.boolean().describe("Main15TryNextPrtsActionAction 的 `doNextWhenSuccess` 配置字段；准确战斗语义待确认。"),
    /** Main15TryNextPrtsActionAction 的 `forceNext` 配置字段；准确战斗语义待确认。 */
    "_forceNext": z.boolean().describe("Main15TryNextPrtsActionAction 的 `forceNext` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main15TryNextPrtsAction, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main15TryNextPrtsActionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main16ChangeTileShadowViaRange, Assembly-CSharp 的严格 Action 数据。
 */
export const Main16ChangeTileShadowViaRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main16ChangeTileShadowViaRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `beginPosition` 配置字段；准确战斗语义待确认。 */
    "_beginPosition": z.strictObject({
                            /** Main16ChangeTileShadowViaRangeAction 的 `col` 配置字段；准确战斗语义待确认。 */
                            "col": z.number().describe("Main16ChangeTileShadowViaRangeAction 的 `col` 配置字段；准确战斗语义待确认。"),
                            /** Main16ChangeTileShadowViaRangeAction 的 `row` 配置字段；准确战斗语义待确认。 */
                            "row": z.number().describe("Main16ChangeTileShadowViaRangeAction 的 `row` 配置字段；准确战斗语义待确认。"),
                          }).describe("Main16ChangeTileShadowViaRangeAction 的 `beginPosition` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `centerPosKey` 配置字段；准确战斗语义待确认。 */
    "_centerPosKey": z.string().describe("Main16ChangeTileShadowViaRangeAction 的 `centerPosKey` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `changeTileShadowState` 配置字段；准确战斗语义待确认。 */
    "_changeTileShadowState": z.boolean().describe("Main16ChangeTileShadowViaRangeAction 的 `changeTileShadowState` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `endPosition` 配置字段；准确战斗语义待确认。 */
    "_endPosition": z.strictObject({
                          /** Main16ChangeTileShadowViaRangeAction 的 `col` 配置字段；准确战斗语义待确认。 */
                          "col": z.number().describe("Main16ChangeTileShadowViaRangeAction 的 `col` 配置字段；准确战斗语义待确认。"),
                          /** Main16ChangeTileShadowViaRangeAction 的 `row` 配置字段；准确战斗语义待确认。 */
                          "row": z.number().describe("Main16ChangeTileShadowViaRangeAction 的 `row` 配置字段；准确战斗语义待确认。"),
                        }).describe("Main16ChangeTileShadowViaRangeAction 的 `endPosition` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("Main16ChangeTileShadowViaRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Main16ChangeTileShadowViaRangeAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `temporaryEscapeShadowState` 配置字段；准确战斗语义待确认。 */
    "_temporaryEscapeShadowState": z.boolean().describe("Main16ChangeTileShadowViaRangeAction 的 `temporaryEscapeShadowState` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `toShadow` 配置字段；准确战斗语义待确认。 */
    "_toShadow": z.boolean().describe("Main16ChangeTileShadowViaRangeAction 的 `toShadow` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `useArea` 配置字段；准确战斗语义待确认。 */
    "_useArea": z.boolean().describe("Main16ChangeTileShadowViaRangeAction 的 `useArea` 配置字段；准确战斗语义待确认。"),
    /** Main16ChangeTileShadowViaRangeAction 的 `useBbPosAsCenterPos` 配置字段；准确战斗语义待确认。 */
    "_useBbPosAsCenterPos": z.boolean().describe("Main16ChangeTileShadowViaRangeAction 的 `useBbPosAsCenterPos` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main16ChangeTileShadowViaRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main16ChangeTileShadowViaRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Main16CheckTargetInShadowStateTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Main16CheckTargetInShadowStateTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Main16CheckTargetInShadowStateTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Main16CheckTargetInShadowStateTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Main16CheckTargetInShadowStateTileAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Main16CheckTargetInShadowStateTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Main16CheckTargetInShadowStateTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Mainline14InformLrdeadDeath, Assembly-CSharp 的严格 Action 数据。
 */
export const Mainline14InformLrdeadDeathActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Mainline14InformLrdeadDeath, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Mainline14InformLrdeadDeathAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
    "_evnSysKey": z.string().describe("Mainline14InformLrdeadDeathAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Mainline14InformLrdeadDeath, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Mainline14InformLrdeadDeathAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Mainline14TriggerSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const Mainline14TriggerSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Mainline14TriggerSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Mainline14TriggerSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
    "_evnSysKey": z.string().describe("Mainline14TriggerSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。"),
    /** Mainline14TriggerSkillAction 的 `isTriggeredByBoss` 配置字段；准确战斗语义待确认。 */
    "_isTriggeredByBoss": z.boolean().describe("Mainline14TriggerSkillAction 的 `isTriggeredByBoss` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Mainline14TriggerSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Mainline14TriggerSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Mainline17CreateBossClickCounterButton, Assembly-CSharp 的严格 Action 数据。
 */
export const Mainline17CreateBossClickCounterButtonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Mainline17CreateBossClickCounterButton, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `bossType` 配置字段；准确战斗语义待确认。 */
    "_bossType": z.literal("BUFF_OWNER").describe("Mainline17CreateBossClickCounterButtonAction 的 `bossType` 配置字段；准确战斗语义待确认。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `duration` 配置字段；准确战斗语义待确认。 */
    "_duration": z.number().describe("Mainline17CreateBossClickCounterButtonAction 的 `duration` 配置字段；准确战斗语义待确认。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `failedBuffKey` 配置字段；准确战斗语义待确认。 */
    "_failedBuffKey": z.string().describe("Mainline17CreateBossClickCounterButtonAction 的 `failedBuffKey` 配置字段；准确战斗语义待确认。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `mountPointType` 配置字段；准确战斗语义待确认。 */
    "_mountPointType": z.literal("HEAD").describe("Mainline17CreateBossClickCounterButtonAction 的 `mountPointType` 配置字段；准确战斗语义待确认。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `playEffect` 配置字段；准确战斗语义待确认。 */
    "_playEffect": z.boolean().describe("Mainline17CreateBossClickCounterButtonAction 的 `playEffect` 配置字段；准确战斗语义待确认。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `requiredClickCount` 配置字段；准确战斗语义待确认。 */
    "_requiredClickCount": z.number().describe("Mainline17CreateBossClickCounterButtonAction 的 `requiredClickCount` 配置字段；准确战斗语义待确认。"),
    /** Mainline17CreateBossClickCounterButtonAction 的 `successBuffKey` 配置字段；准确战斗语义待确认。 */
    "_successBuffKey": z.string().describe("Mainline17CreateBossClickCounterButtonAction 的 `successBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Mainline17CreateBossClickCounterButton, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Mainline17CreateBossClickCounterButtonAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM01Schema = z
  .discriminatedUnion("$type", [Main15FilterPrtsLastSubActionActionSchema, Main15ForceSetBattleSpeedLevelActionSchema, Main15InsertPrtsActionActionSchema, Main15SkipPrtsActionActionSchema, Main15TryNextPrtsActionActionSchema, Main16ChangeTileShadowViaRangeActionSchema, Main16CheckTargetInShadowStateTileActionSchema, Mainline14InformLrdeadDeathActionSchema, Mainline14TriggerSkillActionSchema, Mainline17CreateBossClickCounterButtonActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM01>;
