/**
 * buff_template_data 的 B 组 Action Zod Schema。
 */

import { z } from "zod";

import type { BuildCharacterInRangeAction, BattleActionB02 } from "../../../../types/buff-template-data/actions/b/actions-b-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BuildCharacterInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const BuildCharacterInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BuildCharacterInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BuildCharacterInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
    "_buffs": z.array(z.strictObject({
                    /** BuildCharacterInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": z.strictObject({
                                          /** BuildCharacterInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                          /** BuildCharacterInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** BuildCharacterInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                          /** BuildCharacterInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                          /** BuildCharacterInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                          /** BuildCharacterInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": z.array(z.strictObject({
                                                                          /** 属性修改器指向的战斗属性。 */
                                                                          "attributeType": z.literal("ATK").describe("属性修改器指向的战斗属性。"),
                                                                          /** BuildCharacterInRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                          "fetchBaseValueFromSourceEntity": z.boolean().describe("BuildCharacterInRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                          /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                          "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                          /** BuildCharacterInRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                          "loadFromBlackboard": z.boolean().describe("BuildCharacterInRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                          /** 黑板参数的数值槽。 */
                                                                          "value": z.number().describe("黑板参数的数值槽。"),
                                                                        })).describe("BuildCharacterInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                        }).describe("BuildCharacterInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": z.null().describe("BuildCharacterInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": z.string().describe("BuildCharacterInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": z.boolean().describe("BuildCharacterInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": z.boolean().describe("BuildCharacterInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": z.string().describe("BuildCharacterInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": z.boolean().describe("BuildCharacterInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": z.number().describe("BuildCharacterInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": z.boolean().describe("BuildCharacterInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": z.boolean().describe("BuildCharacterInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": z.boolean().describe("BuildCharacterInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": z.boolean().describe("BuildCharacterInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": z.boolean().describe("BuildCharacterInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": z.boolean().describe("BuildCharacterInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": z.boolean().describe("BuildCharacterInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": z.number().describe("BuildCharacterInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": z.literal("LIMITED").describe("BuildCharacterInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": z.boolean().describe("BuildCharacterInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": z.number().describe("BuildCharacterInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": z.number().describe("BuildCharacterInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                    /** BuildCharacterInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": z.null().describe("BuildCharacterInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": z.null().describe("BuildCharacterInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": z.boolean().describe("BuildCharacterInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": z.literal("DEFAULT").describe("BuildCharacterInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": z.number().describe("BuildCharacterInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": z.array(z.never()).describe("BuildCharacterInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": z.boolean().describe("BuildCharacterInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": z.literal("AUTOMATIC").describe("BuildCharacterInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": z.boolean().describe("BuildCharacterInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": z.boolean().describe("BuildCharacterInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                    /** BuildCharacterInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": z.number().describe("BuildCharacterInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": z.number().describe("BuildCharacterInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": z.literal("IMMEDIATELY").describe("BuildCharacterInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": z.boolean().describe("BuildCharacterInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                  })).describe("BuildCharacterInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。"),
    /** BuildCharacterInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("MELEE").describe("BuildCharacterInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** BuildCharacterInRangeAction 的 `grids` 配置字段；准确战斗语义待确认。 */
    "_grids": z.array(z.strictObject({
                    /** BuildCharacterInRangeAction 的 `col` 配置字段；准确战斗语义待确认。 */
                    "col": z.number().describe("BuildCharacterInRangeAction 的 `col` 配置字段；准确战斗语义待确认。"),
                    /** BuildCharacterInRangeAction 的 `row` 配置字段；准确战斗语义待确认。 */
                    "row": z.number().describe("BuildCharacterInRangeAction 的 `row` 配置字段；准确战斗语义待确认。"),
                  })).describe("BuildCharacterInRangeAction 的 `grids` 配置字段；准确战斗语义待确认。"),
    /** BuildCharacterInRangeAction 的 `ignoreDeckBuffKey` 配置字段；准确战斗语义待确认。 */
    "_ignoreDeckBuffKey": z.string().describe("BuildCharacterInRangeAction 的 `ignoreDeckBuffKey` 配置字段；准确战斗语义待确认。"),
    /** BuildCharacterInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
    "_professionMask": z.literal("WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER").describe("BuildCharacterInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BuildCharacterInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BuildCharacterInRangeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionB02Schema = z
  .discriminatedUnion("$type", [BuildCharacterInRangeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionB02>;
