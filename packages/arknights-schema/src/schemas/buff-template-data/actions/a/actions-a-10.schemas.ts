/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act49sideKillCharacterOnTileExceptAction, Act49sideKillTrapOnTileIfExistsAction, Act49SideSetEntityAnimatorColorAction, Act49sideSetPrintingChargableAction, Act49sideSsttzDetectNearestTargetTileAction, Act49sideSsttzSacrificeEnemyAction, Act49sideSsttzTriggerPartialPrintAction, Act49sideSunmaoTrapSkillTriggeredAction, Act49SideWriteCharacterAction, Act49sideWriteCharacterBasedOnAnchorPosAction, BattleActionA10 } from "../../../../types/buff-template-data/actions/a/actions-a-10.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideKillCharacterOnTileExcept, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideKillCharacterOnTileExceptActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideKillCharacterOnTileExcept, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideKillCharacterOnTileExceptAction 的 `buffToKillCharacter` 配置字段；准确战斗语义待确认。 */
    "_buffToKillCharacter": z.strictObject({
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": z.strictObject({
                                                        /** Act49sideKillCharacterOnTileExceptAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalAntis": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                        /** Act49sideKillCharacterOnTileExceptAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalComboImmunes": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                        /** Act49sideKillCharacterOnTileExceptAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalCombos": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                        /** Act49sideKillCharacterOnTileExceptAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalFlags": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                        /** Act49sideKillCharacterOnTileExceptAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                        "abnormalImmunes": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                        /** Act49sideKillCharacterOnTileExceptAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                        "attributeModifiers": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                      }).describe("Act49sideKillCharacterOnTileExceptAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": z.array(z.never()).describe("Act49sideKillCharacterOnTileExceptAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": z.string().describe("Act49sideKillCharacterOnTileExceptAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": z.string().describe("Act49sideKillCharacterOnTileExceptAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": z.literal("LIMITED").describe("Act49sideKillCharacterOnTileExceptAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": z.null().describe("Act49sideKillCharacterOnTileExceptAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": z.literal("DEFAULT").describe("Act49sideKillCharacterOnTileExceptAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": z.array(z.never()).describe("Act49sideKillCharacterOnTileExceptAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": z.literal("AUTOMATIC").describe("Act49sideKillCharacterOnTileExceptAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": z.number().describe("Act49sideKillCharacterOnTileExceptAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": z.literal("IMMEDIATELY").describe("Act49sideKillCharacterOnTileExceptAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                  /** Act49sideKillCharacterOnTileExceptAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": z.boolean().describe("Act49sideKillCharacterOnTileExceptAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                }).describe("Act49sideKillCharacterOnTileExceptAction 的 `buffToKillCharacter` 配置字段；准确战斗语义待确认。"),
    /** Act49sideKillCharacterOnTileExceptAction 的 `exceptCharId` 配置字段；准确战斗语义待确认。 */
    "_exceptCharId": z.string().describe("Act49sideKillCharacterOnTileExceptAction 的 `exceptCharId` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideKillCharacterOnTileExcept, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideKillCharacterOnTileExceptAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideKillTrapOnTileIfExists, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideKillTrapOnTileIfExistsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideKillTrapOnTileIfExists, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideKillTrapOnTileIfExistsAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("Act49sideKillTrapOnTileIfExistsAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** Act49sideKillTrapOnTileIfExistsAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
    "_skipReborn": z.boolean().describe("Act49sideKillTrapOnTileIfExistsAction 的 `skipReborn` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49sideKillTrapOnTileIfExistsAction 的 `trapId` 配置字段；准确战斗语义待确认。 */
    "_trapId": z.string().describe("Act49sideKillTrapOnTileIfExistsAction 的 `trapId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideKillTrapOnTileIfExists, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideKillTrapOnTileIfExistsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideSetEntityAnimatorColor, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideSetEntityAnimatorColorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideSetEntityAnimatorColor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49SideSetEntityAnimatorColorAction 的 `color` 配置字段；准确战斗语义待确认。 */
    "color": z.strictObject({
                   /** Act49SideSetEntityAnimatorColorAction 的 `a` 配置字段；准确战斗语义待确认。 */
                   "a": z.number().describe("Act49SideSetEntityAnimatorColorAction 的 `a` 配置字段；准确战斗语义待确认。"),
                   /** Act49SideSetEntityAnimatorColorAction 的 `b` 配置字段；准确战斗语义待确认。 */
                   "b": z.number().describe("Act49SideSetEntityAnimatorColorAction 的 `b` 配置字段；准确战斗语义待确认。"),
                   /** Act49SideSetEntityAnimatorColorAction 的 `g` 配置字段；准确战斗语义待确认。 */
                   "g": z.number().describe("Act49SideSetEntityAnimatorColorAction 的 `g` 配置字段；准确战斗语义待确认。"),
                   /** Act49SideSetEntityAnimatorColorAction 的 `r` 配置字段；准确战斗语义待确认。 */
                   "r": z.number().describe("Act49SideSetEntityAnimatorColorAction 的 `r` 配置字段；准确战斗语义待确认。"),
                 }).describe("Act49SideSetEntityAnimatorColorAction 的 `color` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideSetEntityAnimatorColor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideSetEntityAnimatorColorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSetPrintingChargable, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideSetPrintingChargableActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideSetPrintingChargable, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideSetPrintingChargableAction 的 `setActive` 配置字段；准确战斗语义待确认。 */
    "_setActive": z.boolean().describe("Act49sideSetPrintingChargableAction 的 `setActive` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSetPrintingChargable, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideSetPrintingChargableAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSsttzDetectNearestTargetTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideSsttzDetectNearestTargetTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideSsttzDetectNearestTargetTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideSsttzDetectNearestTargetTileAction 的 `posBlackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_posBlackBoardKey": z.string().describe("Act49sideSsttzDetectNearestTargetTileAction 的 `posBlackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49sideSsttzDetectNearestTargetTileAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
    "_tileType": z.literal("Camp").describe("Act49sideSsttzDetectNearestTargetTileAction 的 `tileType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSsttzDetectNearestTargetTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideSsttzDetectNearestTargetTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSsttzSacrificeEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideSsttzSacrificeEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideSsttzSacrificeEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSsttzSacrificeEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideSsttzSacrificeEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSsttzTriggerPartialPrint, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideSsttzTriggerPartialPrintActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideSsttzTriggerPartialPrint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideSsttzTriggerPartialPrintAction 的 `posBlackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_posBlackBoardKey": z.string().describe("Act49sideSsttzTriggerPartialPrintAction 的 `posBlackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSsttzTriggerPartialPrint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideSsttzTriggerPartialPrintAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSunmaoTrapSkillTriggered, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideSunmaoTrapSkillTriggeredActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideSunmaoTrapSkillTriggered, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideSunmaoTrapSkillTriggeredAction 的 `skillMarkKey` 配置字段；准确战斗语义待确认。 */
    "_skillMarkKey": z.string().describe("Act49sideSunmaoTrapSkillTriggeredAction 的 `skillMarkKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideSunmaoTrapSkillTriggered, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideSunmaoTrapSkillTriggeredAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideWriteCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideWriteCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideWriteCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49SideWriteCharacterAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
    "_tileType": z.enum(["Anchor","Camp","Carp","Empty","Food","Fortune","Highland","Pure","Trigger"]).describe("Act49SideWriteCharacterAction 的 `tileType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideWriteCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideWriteCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideWriteCharacterBasedOnAnchorPos, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideWriteCharacterBasedOnAnchorPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideWriteCharacterBasedOnAnchorPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49sideWriteCharacterBasedOnAnchorPosAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
    "_tileType": z.literal("Anchor").describe("Act49sideWriteCharacterBasedOnAnchorPosAction 的 `tileType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideWriteCharacterBasedOnAnchorPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideWriteCharacterBasedOnAnchorPosAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA10Schema = z
  .discriminatedUnion("$type", [Act49sideKillCharacterOnTileExceptActionSchema, Act49sideKillTrapOnTileIfExistsActionSchema, Act49SideSetEntityAnimatorColorActionSchema, Act49sideSetPrintingChargableActionSchema, Act49sideSsttzDetectNearestTargetTileActionSchema, Act49sideSsttzSacrificeEnemyActionSchema, Act49sideSsttzTriggerPartialPrintActionSchema, Act49sideSunmaoTrapSkillTriggeredActionSchema, Act49SideWriteCharacterActionSchema, Act49sideWriteCharacterBasedOnAnchorPosActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA10>;
