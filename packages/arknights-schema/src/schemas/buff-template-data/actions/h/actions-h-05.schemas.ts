/**
 * buff_template_data 的 H 组 Action Zod Schema。
 */

import { z } from "zod";

import type { HealViaDamageAction, HealViaMaxHpRatioAction, HideCardAction, HideCardByIdAction, HideCardByTokenOrHostUidAction, HideCharacterOrTokenNotInAbilityBlackboardAction, HideEntityGraphicOrNotAction, HideEntityInFogAndManageBuffAction, HideGiantBossUIAction, HideUnitGraphicOrNotAction, BattleActionH05 } from "../../../../types/buff-template-data/actions/h/actions-h-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HealViaDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const HealViaDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HealViaDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HealViaDamageAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
    "_filterModifierCancelled": z.boolean().describe("HealViaDamageAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。"),
    /** HealViaDamageAction 的 `healType` 配置字段；准确战斗语义待确认。 */
    "_healType": z.literal("DAMAGE_SCALE").describe("HealViaDamageAction 的 `healType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HealViaDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HealViaDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HealViaMaxHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const HealViaMaxHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HealViaMaxHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HealViaMaxHpRatioAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。 */
    "_getMaxHpFromTarget": z.boolean().describe("HealViaMaxHpRatioAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。"),
    /** HealViaMaxHpRatioAction 的 `healTarget` 配置字段；准确战斗语义待确认。 */
    "_healTarget": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("HealViaMaxHpRatioAction 的 `healTarget` 配置字段；准确战斗语义待确认。"),
    /** HealViaMaxHpRatioAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("HealViaMaxHpRatioAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** HealViaMaxHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("HealViaMaxHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HealViaMaxHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HealViaMaxHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideCard, Assembly-CSharp 的严格 Action 数据。
 */
export const HideCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideCardAction 的 `cardKey` 配置字段；准确战斗语义待确认。 */
    "_cardKey": z.string().describe("HideCardAction 的 `cardKey` 配置字段；准确战斗语义待确认。"),
    /** HideCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("HideCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideCardById, Assembly-CSharp 的严格 Action 数据。
 */
export const HideCardByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideCardById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideCardByIdAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("HideCardByIdAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** HideCardByIdAction 的 `hiddenReason` 配置字段；准确战斗语义待确认。 */
    "_hiddenReason": z.literal("sandbox_v3_evaluate").describe("HideCardByIdAction 的 `hiddenReason` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideCardById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideCardByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideCardByTokenOrHostUid, Assembly-CSharp 的严格 Action 数据。
 */
export const HideCardByTokenOrHostUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideCardByTokenOrHostUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideCardByTokenOrHostUidAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("HideCardByTokenOrHostUidAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** HideCardByTokenOrHostUidAction 的 `hiddenReason` 配置字段；准确战斗语义待确认。 */
    "_hiddenReason": z.literal("deck_default_hidden").describe("HideCardByTokenOrHostUidAction 的 `hiddenReason` 配置字段；准确战斗语义待确认。"),
    /** HideCardByTokenOrHostUidAction 的 `isShow` 配置字段；准确战斗语义待确认。 */
    "_isShow": z.boolean().describe("HideCardByTokenOrHostUidAction 的 `isShow` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideCardByTokenOrHostUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideCardByTokenOrHostUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideCharacterOrTokenNotInAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const HideCharacterOrTokenNotInAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideCharacterOrTokenNotInAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideCharacterOrTokenNotInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("HideCharacterOrTokenNotInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** HideCharacterOrTokenNotInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
    "_infoType": z.literal("UNIQUE_ID").describe("HideCharacterOrTokenNotInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideCharacterOrTokenNotInAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideCharacterOrTokenNotInAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideEntityGraphicOrNot, Assembly-CSharp 的严格 Action 数据。
 */
export const HideEntityGraphicOrNotActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideEntityGraphicOrNot, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideEntityGraphicOrNotAction 的 `hide` 配置字段；准确战斗语义待确认。 */
    "_hide": z.boolean().describe("HideEntityGraphicOrNotAction 的 `hide` 配置字段；准确战斗语义待确认。"),
    /** HideEntityGraphicOrNotAction 的 `hideEnemyUI` 配置字段；准确战斗语义待确认。 */
    "_hideEnemyUI": z.boolean().describe("HideEntityGraphicOrNotAction 的 `hideEnemyUI` 配置字段；准确战斗语义待确认。"),
    /** HideEntityGraphicOrNotAction 的 `hideFixed` 配置字段；准确战斗语义待确认。 */
    "_hideFixed": z.boolean().describe("HideEntityGraphicOrNotAction 的 `hideFixed` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideEntityGraphicOrNot, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideEntityGraphicOrNotAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideEntityInFogAndManageBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const HideEntityInFogAndManageBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideEntityInFogAndManageBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.string()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("INFINITY").describe("HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("UNIQUE").describe("HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** HideEntityInFogAndManageBuffAction 的 `buffToNPC` 配置字段；准确战斗语义待确认。 */
    "_buffToNPC": z.strictObject({
                        /** HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                        "attributes": z.strictObject({
                                              /** HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                              "abnormalAntis": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                              /** HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                              "abnormalComboImmunes": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                              /** HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                              "abnormalCombos": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                              /** HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                              "abnormalFlags": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                              /** HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                              "abnormalImmunes": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                              /** HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                              "attributeModifiers": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                            }).describe("HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                        "audioSignal": z.null().describe("HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                        "blackboard": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                        "buffKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                        "clearAllStackCntWhenTimeUp": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                        "disableOverride": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                        "durationKey": z.null().describe("HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                        "enableInitDirectionFromSource": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "firstTriggerInterval": z.number().describe("HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                        "independentCharacterSource": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                        "isDamageMissable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                        "isDurableBuff": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                        "isFreezable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                        "isLevitatable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                        "isSilenceable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                        "isStunnable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                        "lifeTime": z.number().describe("HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                        "lifeTimeType": z.literal("INFINITY").describe("HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                        "loadFromDB": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxStackCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxValidStackCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                        /** 模板处理战斗事件时使用的优先级。 */
                        "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                        /** HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                        "overrideEffectKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                        "overrideKey": z.null().describe("HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                        "overrideOnEventPriority": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                        "overrideType": z.literal("DEFAULT").describe("HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                        "priority": z.number().describe("HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                        "priorityBBKeys": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                        "refreshRemainingTimeWhenStackMax": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                        "statusResistable": z.literal("AUTOMATIC").describe("HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                        "stripBlackboardParamsWithBuffKey": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                        "takeSnapshotWhenExtend": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                        /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                        "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                        /** HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                        "triggerCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                        "triggerInterval": z.number().describe("HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                        "triggerLifeType": z.literal("IMMEDIATELY").describe("HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                        /** HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "waitFirstTriggerInterval": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                      }).describe("HideEntityInFogAndManageBuffAction 的 `buffToNPC` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `buffToTrap` 配置字段；准确战斗语义待确认。 */
    "_buffToTrap": z.strictObject({
                         /** HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                         "attributes": z.strictObject({
                                               /** HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                               "abnormalAntis": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                               /** HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                               "abnormalComboImmunes": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                               /** HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                               "abnormalCombos": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                               /** HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                               "abnormalFlags": z.array(z.string()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                               /** HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                               "abnormalImmunes": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                               /** HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                               "attributeModifiers": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                             }).describe("HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                         "audioSignal": z.null().describe("HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                         "blackboard": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                         "buffKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                         "clearAllStackCntWhenTimeUp": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                         "disableOverride": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                         "durationKey": z.null().describe("HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                         "enableInitDirectionFromSource": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                         "firstTriggerInterval": z.number().describe("HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                         "independentCharacterSource": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                         "isDamageMissable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                         "isDurableBuff": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                         "isFreezable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                         "isLevitatable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                         "isSilenceable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                         "isStunnable": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                         "lifeTime": z.number().describe("HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                         "lifeTimeType": z.literal("INFINITY").describe("HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                         "loadFromDB": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                         "maxStackCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                         "maxValidStackCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                         /** 模板处理战斗事件时使用的优先级。 */
                         "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                         /** HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                         "overrideEffectKey": z.string().describe("HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                         "overrideKey": z.null().describe("HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                         "overrideOnEventPriority": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                         "overrideType": z.literal("UNIQUE").describe("HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                         "priority": z.number().describe("HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                         "priorityBBKeys": z.array(z.never()).describe("HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                         "refreshRemainingTimeWhenStackMax": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                         "statusResistable": z.literal("AUTOMATIC").describe("HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                         "stripBlackboardParamsWithBuffKey": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                         "takeSnapshotWhenExtend": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                         /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                         "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                         /** HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                         "triggerCnt": z.number().describe("HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                         "triggerInterval": z.number().describe("HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                         "triggerLifeType": z.literal("IMMEDIATELY").describe("HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                         /** HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                         "waitFirstTriggerInterval": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                       }).describe("HideEntityInFogAndManageBuffAction 的 `buffToTrap` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `enemyNotShowBuff` 配置字段；准确战斗语义待确认。 */
    "_enemyNotShowBuff": z.string().describe("HideEntityInFogAndManageBuffAction 的 `enemyNotShowBuff` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `enemyShowInDialogState` 配置字段；准确战斗语义待确认。 */
    "_enemyShowInDialogState": z.boolean().describe("HideEntityInFogAndManageBuffAction 的 `enemyShowInDialogState` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
    "_filterTag": z.string().describe("HideEntityInFogAndManageBuffAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `hideTrapFilterTag` 配置字段；准确战斗语义待确认。 */
    "_hideTrapFilterTag": z.string().describe("HideEntityInFogAndManageBuffAction 的 `hideTrapFilterTag` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `npcFilterTag` 配置字段；准确战斗语义待确认。 */
    "_npcFilterTag": z.string().describe("HideEntityInFogAndManageBuffAction 的 `npcFilterTag` 配置字段；准确战斗语义待确认。"),
    /** HideEntityInFogAndManageBuffAction 的 `trapNotHideBuff` 配置字段；准确战斗语义待确认。 */
    "_trapNotHideBuff": z.union([
                              z.null(),
                              z.string(),
                            ]).describe("HideEntityInFogAndManageBuffAction 的 `trapNotHideBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideEntityInFogAndManageBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideEntityInFogAndManageBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideGiantBossUI, Assembly-CSharp 的严格 Action 数据。
 */
export const HideGiantBossUIActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideGiantBossUI, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideGiantBossUIAction 的 `hide` 配置字段；准确战斗语义待确认。 */
    "_hide": z.boolean().describe("HideGiantBossUIAction 的 `hide` 配置字段；准确战斗语义待确认。"),
    /** HideGiantBossUIAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("HideGiantBossUIAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideGiantBossUI, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideGiantBossUIAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HideUnitGraphicOrNot, Assembly-CSharp 的严格 Action 数据。
 */
export const HideUnitGraphicOrNotActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HideUnitGraphicOrNot, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HideUnitGraphicOrNotAction 的 `hide` 配置字段；准确战斗语义待确认。 */
    "_hide": z.boolean().describe("HideUnitGraphicOrNotAction 的 `hide` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HideUnitGraphicOrNot, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HideUnitGraphicOrNotAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionH05Schema = z
  .discriminatedUnion("$type", [HealViaDamageActionSchema, HealViaMaxHpRatioActionSchema, HideCardActionSchema, HideCardByIdActionSchema, HideCardByTokenOrHostUidActionSchema, HideCharacterOrTokenNotInAbilityBlackboardActionSchema, HideEntityGraphicOrNotActionSchema, HideEntityInFogAndManageBuffActionSchema, HideGiantBossUIActionSchema, HideUnitGraphicOrNotActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionH05>;
