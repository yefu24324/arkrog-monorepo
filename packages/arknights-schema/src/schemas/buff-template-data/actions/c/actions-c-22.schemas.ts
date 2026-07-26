/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CopyHealthAction, CreateBuffAction, CreateBuffByIdAction, CreateBuffInCircleRangeAction, CreateBuffInRangeAction, CreateBuffItemProcessorAction, CreateBuffOnTileInRangeAction, CreateBuffsAction, CreateBuffStackedAction, CreateBuffToBindingTilesAction, BattleActionC22 } from "../../../../types/buff-template-data/actions/c/actions-c-22.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CopyHealth, Assembly-CSharp 的严格 Action 数据。
 */
export const CopyHealthActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CopyHealth, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CopyHealthAction 的 `copyByRatio` 配置字段；准确战斗语义待确认。 */
    "_copyByRatio": z.boolean().describe("CopyHealthAction 的 `copyByRatio` 配置字段；准确战斗语义待确认。"),
    /** CopyHealthAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("CopyHealthAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CopyHealth, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CopyHealthAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.string()),
                                                                         ]).describe("CreateBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.string()),
                                                                   ]).describe("CreateBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.string()),
                                                                    ]).describe("CreateBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.enum(["ABILITY_RANGE_FORWARD_EXTEND","ATK","ATTACK_SPEED","BASE_ATTACK_TIME","BLOCK_CNT","DAMAGE_HITRATE_MAGICAL","DAMAGE_HITRATE_PHYSICAL","DEF","DEF_PENETRATE","DEF_PENETRATE_FIXED","EP_BREAK_RECOVER_SPEED","HP_RECOVERY_PER_SEC","HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO","MAGIC_RESISTANCE","MAGIC_RESIST_PENETRATE","MAGIC_RESIST_PENETRATE_FIXED","MASS_LEVEL","MAX_HP","MOVE_SPEED","ONE_MINUS_STATUS_RESISTANCE","SP_RECOVERY_PER_SEC","SP_RECOVER_RATIO","TAUNT_LEVEL"]).describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.strictObject({
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                         /** 黑板参数的数值槽。 */
                                         "value": z.number().describe("黑板参数的数值槽。"),
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": z.union([
                                                               z.null(),
                                                               z.string(),
                                                             ]).describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                       })).describe("CreateBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.enum(["DEFAULT","HIGHER_PRIORITY","HIGH_PRIORITY","LOWEST_PRIORITY","LOW_PRIORITY"]).describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","EXTEND","EXTEND_TIME","STACK","UNIQUE"]).describe("CreateBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.union([
                                             z.null(),
                                             z.array(z.string()),
                                           ]).describe("CreateBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.enum(["AUTOMATIC","NO","YES"]).describe("CreateBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAINBUFF_SOURCE","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","PROJECTILE_TRACETARGET","SOURCE","TARGET"]).describe("Buff 的接收实体类型。"),
    /** CreateBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffAction 的 `hookEffectKeyFromSourceProjectile` 配置字段；准确战斗语义待确认。 */
    "_hookEffectKeyFromSourceProjectile": z.boolean().describe("CreateBuffAction 的 `hookEffectKeyFromSourceProjectile` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffAction 的 `inherateSourceProjectileFromParentBuff` 配置字段；准确战斗语义待确认。 */
    "_inherateSourceProjectileFromParentBuff": z.boolean().describe("CreateBuffAction 的 `inherateSourceProjectileFromParentBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffAction 的 `specialBuffSource` 配置字段；准确战斗语义待确认。 */
    "_specialBuffSource": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("CreateBuffAction 的 `specialBuffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffAction 的 `useSpecialBuffSource` 配置字段；准确战斗语义待确认。 */
    "_useSpecialBuffSource": z.boolean().describe("CreateBuffAction 的 `useSpecialBuffSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffById, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("CreateBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Buff 的接收实体类型。"),
    /** CreateBuffByIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffByIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffByIdAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffByIdAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("CreateBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffInCircleRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffInCircleRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffInCircleRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffInCircleRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** CreateBuffInCircleRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** CreateBuffInCircleRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffInCircleRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInCircleRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("CreateBuffInCircleRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInCircleRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffInCircleRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInCircleRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffInCircleRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInCircleRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("CreateBuffInCircleRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInCircleRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.strictObject({
                                                                                      /** 属性修改器指向的战斗属性。 */
                                                                                      "attributeType": z.literal("MOVE_SPEED").describe("属性修改器指向的战斗属性。"),
                                                                                      /** CreateBuffInCircleRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                      "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffInCircleRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                      /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                      "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                      /** CreateBuffInCircleRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                      "loadFromBlackboard": z.boolean().describe("CreateBuffInCircleRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                      /** 黑板参数的数值槽。 */
                                                                                      "value": z.number().describe("黑板参数的数值槽。"),
                                                                                    })),
                                                                        ]).describe("CreateBuffInCircleRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("CreateBuffInCircleRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffInCircleRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.strictObject({
                                          /** 黑板参数键或当前配置项的稳定键。 */
                                          "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                          /** 黑板参数的数值槽。 */
                                          "value": z.number().describe("黑板参数的数值槽。"),
                                          /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                          "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                        })).describe("CreateBuffInCircleRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("CreateBuffInCircleRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffInCircleRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("CreateBuffInCircleRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffInCircleRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("CreateBuffInCircleRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("CreateBuffInCircleRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("CreateBuffInCircleRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("CreateBuffInCircleRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffInCircleRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("CreateBuffInCircleRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("CreateBuffInCircleRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("CreateBuffInCircleRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** CreateBuffInCircleRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("CreateBuffInCircleRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("CreateBuffInCircleRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("CreateBuffInCircleRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.enum(["DEFAULT","EXTEND","STACK","UNIQUE"]).describe("CreateBuffInCircleRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("CreateBuffInCircleRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("CreateBuffInCircleRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffInCircleRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffInCircleRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffInCircleRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffInCircleRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** CreateBuffInCircleRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("CreateBuffInCircleRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("CreateBuffInCircleRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffInCircleRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInCircleRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("CreateBuffInCircleRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("CreateBuffInCircleRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `checkInArcCircle` 配置字段；准确战斗语义待确认。 */
    "_checkInArcCircle": z.boolean().describe("CreateBuffInCircleRangeAction 的 `checkInArcCircle` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("CreateBuffInCircleRangeAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `degreeRanges` 配置字段；准确战斗语义待确认。 */
    "_degreeRanges": z.union([
                           z.null(),
                           z.array(z.strictObject({
                                   /** CreateBuffInCircleRangeAction 的 `x` 配置字段；准确战斗语义待确认。 */
                                   "x": z.number().describe("CreateBuffInCircleRangeAction 的 `x` 配置字段；准确战斗语义待确认。"),
                                   /** CreateBuffInCircleRangeAction 的 `y` 配置字段；准确战斗语义待确认。 */
                                   "y": z.number().describe("CreateBuffInCircleRangeAction 的 `y` 配置字段；准确战斗语义待确认。"),
                                 })),
                         ]).describe("CreateBuffInCircleRangeAction 的 `degreeRanges` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CreateBuffInCircleRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffInCircleRangeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffInCircleRangeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `limitCount` 配置字段；准确战斗语义待确认。 */
    "_limitCount": z.boolean().describe("CreateBuffInCircleRangeAction 的 `limitCount` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `postFilter` 配置字段；准确战斗语义待确认。 */
    "_postFilter": z.string().describe("CreateBuffInCircleRangeAction 的 `postFilter` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("CreateBuffInCircleRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** CreateBuffInCircleRangeAction 的 `specifyBuffSource` 配置字段；准确战斗语义待确认。 */
    "_specifyBuffSource": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CreateBuffInCircleRangeAction 的 `specifyBuffSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInCircleRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CreateBuffInCircleRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CreateBuffInCircleRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.enum(["FROZEN","MOTION_TARGET_FREE","STUNNED"]).describe("CreateBuffInCircleRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CreateBuffInCircleRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CreateBuffInCircleRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CreateBuffInCircleRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CreateBuffInCircleRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.enum(["FROZEN","STUNNED"]).describe("CreateBuffInCircleRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CreateBuffInCircleRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CreateBuffInCircleRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CreateBuffInCircleRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CreateBuffInCircleRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CreateBuffInCircleRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CreateBuffInCircleRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("CreateBuffInCircleRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("CreateBuffInCircleRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","NONE"]).describe("CreateBuffInCircleRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","WALK_ONLY"]).describe("CreateBuffInCircleRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","BOTH_ALLY_AND_ENEMY","ENEMY"]).describe("CreateBuffInCircleRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInCircleRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CreateBuffInCircleRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CreateBuffInCircleRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CreateBuffInCircleRangeAction 的 `useSpecifyBuffSource` 配置字段；准确战斗语义待确认。 */
    "_useSpecifyBuffSource": z.boolean().describe("CreateBuffInCircleRangeAction 的 `useSpecifyBuffSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffInCircleRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffInCircleRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffInRangeAction 的 `allowedBuildableType` 配置字段；准确战斗语义待确认。 */
    "_allowedBuildableType": z.enum(["ALL","MELEE","NONE","RANGED"]).describe("CreateBuffInRangeAction 的 `allowedBuildableType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `allowFilterTags` 配置字段；准确战斗语义待确认。 */
    "_allowFilterTags": z.union([
                              z.null(),
                              z.array(z.string()),
                            ]).describe("CreateBuffInRangeAction 的 `allowFilterTags` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `alwaysIncludeSourceBlocker` 配置字段；准确战斗语义待确认。 */
    "_alwaysIncludeSourceBlocker": z.boolean().describe("CreateBuffInRangeAction 的 `alwaysIncludeSourceBlocker` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `alwaysIncudeCurAtkTarget` 配置字段；准确战斗语义待确认。 */
    "_alwaysIncudeCurAtkTarget": z.boolean().describe("CreateBuffInRangeAction 的 `alwaysIncudeCurAtkTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** CreateBuffInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** CreateBuffInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("CreateBuffInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.string()),
                                                                    ]).describe("CreateBuffInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.string()),
                                                                   ]).describe("CreateBuffInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("CreateBuffInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.strictObject({
                                                                                      /** 属性修改器指向的战斗属性。 */
                                                                                      "attributeType": z.enum(["ATK","ATTACK_SPEED","BLOCK_CNT","DEF","DEF_PENETRATE","MAGIC_RESIST_PENETRATE_FIXED","MAX_HP","TAUNT_LEVEL"]).describe("属性修改器指向的战斗属性。"),
                                                                                      /** CreateBuffInRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                      "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffInRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                      /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                      "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                      /** CreateBuffInRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                      "loadFromBlackboard": z.boolean().describe("CreateBuffInRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                      /** 黑板参数的数值槽。 */
                                                                                      "value": z.number().describe("黑板参数的数值槽。"),
                                                                                    })),
                                                                        ]).describe("CreateBuffInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("CreateBuffInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.strictObject({
                                          /** 黑板参数键或当前配置项的稳定键。 */
                                          "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                          /** 黑板参数的数值槽。 */
                                          "value": z.number().describe("黑板参数的数值槽。"),
                                          /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                          "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                        })).describe("CreateBuffInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("CreateBuffInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("CreateBuffInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("CreateBuffInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("CreateBuffInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("CreateBuffInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("CreateBuffInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("CreateBuffInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("CreateBuffInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("CreateBuffInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("CreateBuffInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("CreateBuffInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("CreateBuffInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("CreateBuffInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("CreateBuffInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("CreateBuffInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.enum(["DEFAULT","HIGHER_PRIORITY"]).describe("模板处理战斗事件时使用的优先级。"),
                    /** CreateBuffInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.union([
                                                 z.null(),
                                                 z.string(),
                                               ]).describe("CreateBuffInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("CreateBuffInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.enum(["DEFAULT","EXTEND","UNIQUE"]).describe("CreateBuffInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("CreateBuffInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.string()).describe("CreateBuffInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** CreateBuffInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("CreateBuffInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("CreateBuffInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("CreateBuffInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("CreateBuffInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `checkGiantTrapAllLocateTiles` 配置字段；准确战斗语义待确认。 */
    "_checkGiantTrapAllLocateTiles": z.boolean().describe("CreateBuffInRangeAction 的 `checkGiantTrapAllLocateTiles` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `excludeCurAtkTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeCurAtkTarget": z.boolean().describe("CreateBuffInRangeAction 的 `excludeCurAtkTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CreateBuffInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `filterByBuildableType` 配置字段；准确战斗语义待确认。 */
    "_filterByBuildableType": z.boolean().describe("CreateBuffInRangeAction 的 `filterByBuildableType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `filterByTags` 配置字段；准确战斗语义待确认。 */
    "_filterByTags": z.boolean().describe("CreateBuffInRangeAction 的 `filterByTags` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `filterTargets` 配置字段；准确战斗语义待确认。 */
    "_filterTargets": z.boolean().describe("CreateBuffInRangeAction 的 `filterTargets` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
    "_filterType": z.enum(["ALL","HATRED_DES"]).describe("CreateBuffInRangeAction 的 `filterType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffInRangeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffInRangeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `limitMaxTarget` 配置字段；准确战斗语义待确认。 */
    "_limitMaxTarget": z.boolean().describe("CreateBuffInRangeAction 的 `limitMaxTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `maxTargetKey` 配置字段；准确战斗语义待确认。 */
    "_maxTargetKey": z.string().describe("CreateBuffInRangeAction 的 `maxTargetKey` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。 */
    "_radius": z.number().describe("CreateBuffInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `randomTarget` 配置字段；准确战斗语义待确认。 */
    "_randomTarget": z.boolean().describe("CreateBuffInRangeAction 的 `randomTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("CreateBuffInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `rangeModeIndex` 配置字段；准确战斗语义待确认。 */
    "_rangeModeIndex": z.number().describe("CreateBuffInRangeAction 的 `rangeModeIndex` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `rangeTargetSideType` 配置字段；准确战斗语义待确认。 */
    "_rangeTargetSideType": z.enum(["ALLY","ENEMY"]).describe("CreateBuffInRangeAction 的 `rangeTargetSideType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `removeExcludeTargetBeforeShrink` 配置字段；准确战斗语义待确认。 */
    "_removeExcludeTargetBeforeShrink": z.boolean().describe("CreateBuffInRangeAction 的 `removeExcludeTargetBeforeShrink` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `side` 配置字段；准确战斗语义待确认。 */
    "_side": z.enum(["ENEMY","NONE"]).describe("CreateBuffInRangeAction 的 `side` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** CreateBuffInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CreateBuffInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CreateBuffInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.enum(["CAMOUFLAGE","E_NUM","INVISIBLE","STUNNED"]).describe("CreateBuffInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CreateBuffInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CreateBuffInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CreateBuffInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CreateBuffInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.enum(["CAMOUFLAGE","STUNNED"]).describe("CreateBuffInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CreateBuffInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CreateBuffInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CreateBuffInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CreateBuffInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CreateBuffInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CreateBuffInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.enum(["NONE","TOKEN","TRAP","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, TRAP, PIONEER"]).describe("CreateBuffInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.enum(["HEAL","NONE"]).describe("CreateBuffInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","DEFAULT, TRAP_OR_ITEM"]).describe("CreateBuffInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","WALK_ONLY"]).describe("CreateBuffInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","BOTH_ALLY_AND_ENEMY","ENEMY"]).describe("CreateBuffInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CreateBuffInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CreateBuffInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CreateBuffInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
    "_useAttackRange": z.boolean().describe("CreateBuffInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useCentainSide` 配置字段；准确战斗语义待确认。 */
    "_useCentainSide": z.boolean().describe("CreateBuffInRangeAction 的 `useCentainSide` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useCurrentModeRange` 配置字段；准确战斗语义待确认。 */
    "_useCurrentModeRange": z.boolean().describe("CreateBuffInRangeAction 的 `useCurrentModeRange` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useGlobalRange` 配置字段；准确战斗语义待确认。 */
    "_useGlobalRange": z.boolean().describe("CreateBuffInRangeAction 的 `useGlobalRange` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useHostAsSource` 配置字段；准确战斗语义待确认。 */
    "_useHostAsSource": z.boolean().describe("CreateBuffInRangeAction 的 `useHostAsSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useRadius` 配置字段；准确战斗语义待确认。 */
    "_useRadius": z.boolean().describe("CreateBuffInRangeAction 的 `useRadius` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useRangeToShow` 配置字段；准确战斗语义待确认。 */
    "_useRangeToShow": z.boolean().describe("CreateBuffInRangeAction 的 `useRangeToShow` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffInRangeAction 的 `useTargetRangeInsteadOfSource` 配置字段；准确战斗语义待确认。 */
    "_useTargetRangeInsteadOfSource": z.boolean().describe("CreateBuffInRangeAction 的 `useTargetRangeInsteadOfSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffItemProcessor, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffItemProcessorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffItemProcessor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffItemProcessorAction 的 `dice` 配置字段；准确战斗语义待确认。 */
    "_dice": z.boolean().describe("CreateBuffItemProcessorAction 的 `dice` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffItemProcessorAction 的 `diceProb` 配置字段；准确战斗语义待确认。 */
    "_diceProb": z.number().describe("CreateBuffItemProcessorAction 的 `diceProb` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffItemProcessorAction 的 `notFilterTarget` 配置字段；准确战斗语义待确认。 */
    "_notFilterTarget": z.boolean().describe("CreateBuffItemProcessorAction 的 `notFilterTarget` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffItemProcessorAction 的 `reason` 配置字段；准确战斗语义待确认。 */
    "_reason": z.enum(["ENEMY_SPECIFIC","GATHER","PROCESS_OUTPUT"]).describe("CreateBuffItemProcessorAction 的 `reason` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffItemProcessor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffItemProcessorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffOnTileInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffOnTileInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffOnTileInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateBuffOnTileInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** CreateBuffOnTileInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** CreateBuffOnTileInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffOnTileInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffOnTileInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("CreateBuffOnTileInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffOnTileInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffOnTileInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffOnTileInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffOnTileInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffOnTileInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.union([
                                                                       z.null(),
                                                                       z.array(z.never()),
                                                                     ]).describe("CreateBuffOnTileInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** CreateBuffOnTileInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.union([
                                                                          z.null(),
                                                                          z.array(z.never()),
                                                                        ]).describe("CreateBuffOnTileInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("CreateBuffOnTileInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("CreateBuffOnTileInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("CreateBuffOnTileInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("CreateBuffOnTileInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.union([
                                           z.null(),
                                           z.string(),
                                         ]).describe("CreateBuffOnTileInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("CreateBuffOnTileInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("CreateBuffOnTileInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("CreateBuffOnTileInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("CreateBuffOnTileInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("CreateBuffOnTileInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** CreateBuffOnTileInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("CreateBuffOnTileInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("CreateBuffOnTileInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("CreateBuffOnTileInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("CreateBuffOnTileInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("CreateBuffOnTileInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffOnTileInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** CreateBuffOnTileInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("CreateBuffOnTileInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("CreateBuffOnTileInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffOnTileInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** CreateBuffOnTileInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("CreateBuffOnTileInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffOnTileInRangeAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CreateBuffOnTileInRangeAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffOnTileInRangeAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
    "_hasSource": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `hasSource` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffOnTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CreateBuffOnTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffOnTileInRangeAction 的 `side` 配置字段；准确战斗语义待确认。 */
    "_side": z.enum(["ALLY","ENEMY"]).describe("CreateBuffOnTileInRangeAction 的 `side` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffOnTileInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** CreateBuffOnTileInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("CreateBuffOnTileInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("CreateBuffOnTileInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("CreateBuffOnTileInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("CreateBuffOnTileInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("CreateBuffOnTileInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("CreateBuffOnTileInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("CreateBuffOnTileInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.enum(["DEFAULT","TRAP_OR_ITEM"]).describe("CreateBuffOnTileInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.enum(["ALL","FLY_ONLY"]).describe("CreateBuffOnTileInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.enum(["ALLY","ENEMY"]).describe("CreateBuffOnTileInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** CreateBuffOnTileInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("CreateBuffOnTileInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("CreateBuffOnTileInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffOnTileInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffOnTileInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffs, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.literal("BUFF_OWNER").describe("Buff 的接收实体类型。"),
    /** CreateBuffsAction 的 `buffPair` 配置字段；准确战斗语义待确认。 */
    "_buffPair": z.strictObject({
                       /** CreateBuffsAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                       "buff": z.strictObject({
                                       /** CreateBuffsAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                       "attributes": z.strictObject({
                                                               /** CreateBuffsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalAntis": z.union([
                                                                                            z.null(),
                                                                                            z.array(z.never()),
                                                                                          ]).describe("CreateBuffsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateBuffsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalComboImmunes": z.union([
                                                                                                   z.null(),
                                                                                                   z.array(z.never()),
                                                                                                 ]).describe("CreateBuffsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateBuffsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalCombos": z.union([
                                                                                             z.null(),
                                                                                             z.array(z.never()),
                                                                                           ]).describe("CreateBuffsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateBuffsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalFlags": z.union([
                                                                                            z.null(),
                                                                                            z.array(z.never()),
                                                                                          ]).describe("CreateBuffsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateBuffsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                               "abnormalImmunes": z.union([
                                                                                              z.null(),
                                                                                              z.array(z.never()),
                                                                                            ]).describe("CreateBuffsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                               /** CreateBuffsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                               "attributeModifiers": z.union([
                                                                                                 z.null(),
                                                                                                 z.array(z.strictObject({
                                                                                                               /** 属性修改器指向的战斗属性。 */
                                                                                                               "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                                                               /** CreateBuffsAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                                               "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffsAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                                               /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                                               "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                                               /** CreateBuffsAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                                               "loadFromBlackboard": z.boolean().describe("CreateBuffsAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                                               /** 黑板参数的数值槽。 */
                                                                                                               "value": z.number().describe("黑板参数的数值槽。"),
                                                                                                             })),
                                                                                               ]).describe("CreateBuffsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                             }).describe("CreateBuffsAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                       "audioSignal": z.null().describe("CreateBuffsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                       "blackboard": z.array(z.strictObject({
                                                               /** 黑板参数键或当前配置项的稳定键。 */
                                                               "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                                               /** 黑板参数的数值槽。 */
                                                               "value": z.number().describe("黑板参数的数值槽。"),
                                                               /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                                               "valueStr": z.union([
                                                                                       z.null(),
                                                                                       z.string(),
                                                                                     ]).describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                                             })).describe("CreateBuffsAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                       "buffKey": z.string().describe("CreateBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                       "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                       "disableOverride": z.boolean().describe("CreateBuffsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                       "durationKey": z.null().describe("CreateBuffsAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                       "enableInitDirectionFromSource": z.boolean().describe("CreateBuffsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "firstTriggerInterval": z.number().describe("CreateBuffsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                       "independentCharacterSource": z.boolean().describe("CreateBuffsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                       "isDamageMissable": z.boolean().describe("CreateBuffsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                       "isDurableBuff": z.boolean().describe("CreateBuffsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                       "isFreezable": z.boolean().describe("CreateBuffsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                       "isLevitatable": z.boolean().describe("CreateBuffsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                       "isSilenceable": z.boolean().describe("CreateBuffsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                       "isStunnable": z.boolean().describe("CreateBuffsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                       "lifeTime": z.number().describe("CreateBuffsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                       "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                       "loadFromDB": z.boolean().describe("CreateBuffsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxStackCnt": z.number().describe("CreateBuffsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                       "maxValidStackCnt": z.number().describe("CreateBuffsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                       /** 模板处理战斗事件时使用的优先级。 */
                                       "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                       /** CreateBuffsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideEffectKey": z.union([
                                                                      z.null(),
                                                                      z.string(),
                                                                    ]).describe("CreateBuffsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                       "overrideKey": z.union([
                                                                z.null(),
                                                                z.string(),
                                                              ]).describe("CreateBuffsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                       "overrideOnEventPriority": z.boolean().describe("CreateBuffsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                       "overrideType": z.enum(["DEFAULT","STACK"]).describe("CreateBuffsAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                       "priority": z.number().describe("CreateBuffsAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                       "priorityBBKeys": z.array(z.never()).describe("CreateBuffsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                       "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                       "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                       "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                       "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                       "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                       /** CreateBuffsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                       "triggerCnt": z.number().describe("CreateBuffsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "triggerInterval": z.number().describe("CreateBuffsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                       "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                       /** CreateBuffsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                       "waitFirstTriggerInterval": z.boolean().describe("CreateBuffsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                     }).describe("CreateBuffsAction 的 `buff` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffsAction 的 `count` 配置字段；准确战斗语义待确认。 */
                       "count": z.number().describe("CreateBuffsAction 的 `count` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffsAction 的 `peeling` 配置字段；准确战斗语义待确认。 */
                       "peeling": z.number().describe("CreateBuffsAction 的 `peeling` 配置字段；准确战斗语义待确认。"),
                       /** CreateBuffsAction 的 `useBlackboard` 配置字段；准确战斗语义待确认。 */
                       "useBlackboard": z.boolean().describe("CreateBuffsAction 的 `useBlackboard` 配置字段；准确战斗语义待确认。"),
                     }).describe("CreateBuffsAction 的 `buffPair` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffStacked, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffStackedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffStacked, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffStackedAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffStackedAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("CreateBuffStackedAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffStackedAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("CreateBuffStackedAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffStackedAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("CreateBuffStackedAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffStackedAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.string()),
                                                                  ]).describe("CreateBuffStackedAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffStackedAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("CreateBuffStackedAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffStackedAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.strictObject({
                                                                                     /** 属性修改器指向的战斗属性。 */
                                                                                     "attributeType": z.enum(["ABILITY_RANGE_FORWARD_EXTEND","ATK","ATTACK_SPEED","BLOCK_CNT","DEF","HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO","MAGIC_RESISTANCE","MAX_HP","MOVE_SPEED","SP_RECOVERY_PER_SEC"]).describe("属性修改器指向的战斗属性。"),
                                                                                     /** CreateBuffStackedAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                     "fetchBaseValueFromSourceEntity": z.boolean().describe("CreateBuffStackedAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                     "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                     /** CreateBuffStackedAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                     "loadFromBlackboard": z.boolean().describe("CreateBuffStackedAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                     /** 黑板参数的数值槽。 */
                                                                                     "value": z.number().describe("黑板参数的数值槽。"),
                                                                                   })),
                                                                       ]).describe("CreateBuffStackedAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffStackedAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffStackedAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.strictObject({
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                         /** 黑板参数的数值槽。 */
                                         "value": z.number().describe("黑板参数的数值槽。"),
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": z.string().describe("黑板参数的字符串槽；`null` 表示该参数使用数值槽。"),
                                       })).describe("CreateBuffStackedAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffStackedAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffStackedAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffStackedAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffStackedAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffStackedAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffStackedAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffStackedAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffStackedAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffStackedAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffStackedAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffStackedAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffStackedAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffStackedAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffStackedAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("CreateBuffStackedAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffStackedAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffStackedAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffStackedAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffStackedAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("CreateBuffStackedAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.union([
                                          z.null(),
                                          z.string(),
                                        ]).describe("CreateBuffStackedAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffStackedAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.enum(["DEFAULT","STACK"]).describe("CreateBuffStackedAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffStackedAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffStackedAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffStackedAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffStackedAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffStackedAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffStackedAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffStackedAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffStackedAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffStackedAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("CreateBuffStackedAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffStackedAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffStackedAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Buff 的接收实体类型。"),
    /** CreateBuffStackedAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffStackedAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffStackedAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffStackedAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffStackedAction 的 `isDisableOverrideBuff` 配置字段；准确战斗语义待确认。 */
    "_isDisableOverrideBuff": z.boolean().describe("CreateBuffStackedAction 的 `isDisableOverrideBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffStackedAction 的 `stackCnt` 配置字段；准确战斗语义待确认。 */
    "_stackCnt": z.number().describe("CreateBuffStackedAction 的 `stackCnt` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffStackedAction 的 `stackCntKey` 配置字段；准确战斗语义待确认。 */
    "_stackCntKey": z.string().describe("CreateBuffStackedAction 的 `stackCntKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffStacked, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffStackedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToBindingTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateBuffToBindingTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateBuffToBindingTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** CreateBuffToBindingTilesAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** CreateBuffToBindingTilesAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBindingTilesAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBindingTilesAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBindingTilesAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBindingTilesAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** CreateBuffToBindingTilesAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("CreateBuffToBindingTilesAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("CreateBuffToBindingTilesAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("CreateBuffToBindingTilesAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("CreateBuffToBindingTilesAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("CreateBuffToBindingTilesAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("CreateBuffToBindingTilesAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("CreateBuffToBindingTilesAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("CreateBuffToBindingTilesAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("CreateBuffToBindingTilesAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("CreateBuffToBindingTilesAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("INFINITY").describe("CreateBuffToBindingTilesAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("CreateBuffToBindingTilesAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("CreateBuffToBindingTilesAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("CreateBuffToBindingTilesAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** CreateBuffToBindingTilesAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.string().describe("CreateBuffToBindingTilesAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("CreateBuffToBindingTilesAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("CreateBuffToBindingTilesAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("CreateBuffToBindingTilesAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("CreateBuffToBindingTilesAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("CreateBuffToBindingTilesAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("CreateBuffToBindingTilesAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("CreateBuffToBindingTilesAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("CreateBuffToBindingTilesAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("CreateBuffToBindingTilesAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** CreateBuffToBindingTilesAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("CreateBuffToBindingTilesAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("CreateBuffToBindingTilesAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("CreateBuffToBindingTilesAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** CreateBuffToBindingTilesAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("CreateBuffToBindingTilesAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** CreateBuffToBindingTilesAction 的 `excludeRootTile` 配置字段；准确战斗语义待确认。 */
    "_excludeRootTile": z.boolean().describe("CreateBuffToBindingTilesAction 的 `excludeRootTile` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToBindingTilesAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("CreateBuffToBindingTilesAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToBindingTilesAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("CreateBuffToBindingTilesAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
    /** CreateBuffToBindingTilesAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("CreateBuffToBindingTilesAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateBuffToBindingTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateBuffToBindingTilesAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC22Schema = z
  .discriminatedUnion("$type", [CopyHealthActionSchema, CreateBuffActionSchema, CreateBuffByIdActionSchema, CreateBuffInCircleRangeActionSchema, CreateBuffInRangeActionSchema, CreateBuffItemProcessorActionSchema, CreateBuffOnTileInRangeActionSchema, CreateBuffsActionSchema, CreateBuffStackedActionSchema, CreateBuffToBindingTilesActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC22>;
