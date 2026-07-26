/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ActivePredifinedInstAction, AddAbilityBlackboardAction, AddAttackRangeAsFearTargetTilesAction, AddAttractToTargetNearestTileUseAbilitySelectorAction, AddAttractToTargetRootTileAction, AddBuffBlackboardAction, AddBuffToRandomCharacterWithSpecificBuffAction, AddCharacterSharedBlackboardAction, AddCostTimerModifierAction, AddEnemyBlockVolumeAction, BattleActionA12 } from "../../../../types/buff-template-data/actions/a/actions-a-12.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ActivePredifinedInst, Assembly-CSharp 的严格 Action 数据。
 */
export const ActivePredifinedInstActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ActivePredifinedInst, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ActivePredifinedInstAction 的 `hiddenCardKey` 配置字段；准确战斗语义待确认。 */
    "_hiddenCardKey": z.string().describe("ActivePredifinedInstAction 的 `hiddenCardKey` 配置字段；准确战斗语义待确认。"),
    /** ActivePredifinedInstAction 的 `instAlias` 配置字段；准确战斗语义待确认。 */
    "_instAlias": z.string().describe("ActivePredifinedInstAction 的 `instAlias` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ActivePredifinedInst, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ActivePredifinedInstAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AddAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AddAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `abilityOwnerType` 配置字段；准确战斗语义待确认。 */
    "_abilityOwnerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("AddAbilityBlackboardAction 的 `abilityOwnerType` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `addBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_addBlackboardKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("AddAbilityBlackboardAction 的 `addBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeys": z.string().describe("AddAbilityBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `fromOwnerBlackBoard` 配置字段；准确战斗语义待确认。 */
    "_fromOwnerBlackBoard": z.boolean().describe("AddAbilityBlackboardAction 的 `fromOwnerBlackBoard` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `isLimitValue` 配置字段；准确战斗语义待确认。 */
    "_isLimitValue": z.boolean().describe("AddAbilityBlackboardAction 的 `isLimitValue` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
    "_isMinus": z.boolean().describe("AddAbilityBlackboardAction 的 `isMinus` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `isUpdateSelector` 配置字段；准确战斗语义待确认。 */
    "_isUpdateSelector": z.boolean().describe("AddAbilityBlackboardAction 的 `isUpdateSelector` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `limitValue` 配置字段；准确战斗语义待确认。 */
    "_limitValue": z.number().describe("AddAbilityBlackboardAction 的 `limitValue` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `limitValueKey` 配置字段；准确战斗语义待确认。 */
    "_limitValueKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("AddAbilityBlackboardAction 的 `limitValueKey` 配置字段；准确战斗语义待确认。"),
    /** AddAbilityBlackboardAction 的 `overwrite` 配置字段；准确战斗语义待确认。 */
    "_overwrite": z.boolean().describe("AddAbilityBlackboardAction 的 `overwrite` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddAttackRangeAsFearTargetTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const AddAttackRangeAsFearTargetTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddAttackRangeAsFearTargetTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddAttackRangeAsFearTargetTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddAttackRangeAsFearTargetTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddAttractToTargetNearestTileUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const AddAttractToTargetNearestTileUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddAttractToTargetNearestTileUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddAttractToTargetNearestTileUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AddAttractToTargetNearestTileUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddAttractToTargetNearestTileUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddAttractToTargetNearestTileUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddAttractToTargetRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const AddAttractToTargetRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddAttractToTargetRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddAttractToTargetRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddAttractToTargetRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddBuffBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AddBuffBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddBuffBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddBuffBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。 */
    "_addition": z.number().describe("AddBuffBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。"),
    /** AddBuffBlackboardAction 的 `additionKey` 配置字段；准确战斗语义待确认。 */
    "_additionKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("AddBuffBlackboardAction 的 `additionKey` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AddBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AddBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AddBuffBlackboardAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("AddBuffBlackboardAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** AddBuffBlackboardAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
    "_isMinus": z.boolean().describe("AddBuffBlackboardAction 的 `isMinus` 配置字段；准确战斗语义待确认。"),
    /** AddBuffBlackboardAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。 */
    "_maxValueKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("AddBuffBlackboardAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AddBuffBlackboardAction 的 `useCurBuffBBWhenCheckMaxValue` 配置字段；准确战斗语义待确认。 */
    "_useCurBuffBBWhenCheckMaxValue": z.boolean().describe("AddBuffBlackboardAction 的 `useCurBuffBBWhenCheckMaxValue` 配置字段；准确战斗语义待确认。"),
    /** AddBuffBlackboardAction 的 `useCurBuffBBWhenDoAddition` 配置字段；准确战斗语义待确认。 */
    "_useCurBuffBBWhenDoAddition": z.boolean().describe("AddBuffBlackboardAction 的 `useCurBuffBBWhenDoAddition` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddBuffBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddBuffBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddBuffToRandomCharacterWithSpecificBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const AddBuffToRandomCharacterWithSpecificBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddBuffToRandomCharacterWithSpecificBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.union([
                                                                           z.null(),
                                                                           z.array(z.never()),
                                                                         ]).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.union([
                                                                     z.null(),
                                                                     z.array(z.never()),
                                                                   ]).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.union([
                                                                    z.null(),
                                                                    z.array(z.never()),
                                                                  ]).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.union([
                                                                      z.null(),
                                                                      z.array(z.never()),
                                                                    ]).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.union([
                                                                         z.null(),
                                                                         z.array(z.never()),
                                                                       ]).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("IMMEDIATELY").describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("DEFAULT").describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeSpecificTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeSpecificTarget": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeSpecificTarget` 配置字段；准确战斗语义待确认。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.literal("BUFF_OWNER").describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeToken` 配置字段；准确战斗语义待确认。 */
    "_excludeToken": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeToken` 配置字段；准确战斗语义待确认。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeTrap` 配置字段；准确战斗语义待确认。 */
    "_excludeTrap": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeTrap` 配置字段；准确战斗语义待确认。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
    "_finishDerivedBuffIfParentFinish": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。"),
    /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_isDerivedBuff": z.boolean().describe("AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddBuffToRandomCharacterWithSpecificBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddBuffToRandomCharacterWithSpecificBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AddCharacterSharedBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddCharacterSharedBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AddCharacterSharedBlackboardAction 的 `isOverwrite` 配置字段；准确战斗语义待确认。 */
    "_isOverwrite": z.boolean().describe("AddCharacterSharedBlackboardAction 的 `isOverwrite` 配置字段；准确战斗语义待确认。"),
    /** AddCharacterSharedBlackboardAction 的 `isStringBB` 配置字段；准确战斗语义待确认。 */
    "_isStringBB": z.boolean().describe("AddCharacterSharedBlackboardAction 的 `isStringBB` 配置字段；准确战斗语义待确认。"),
    /** AddCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("AddCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** AddCharacterSharedBlackboardAction 的 `useValueKey` 配置字段；准确战斗语义待确认。 */
    "_useValueKey": z.boolean().describe("AddCharacterSharedBlackboardAction 的 `useValueKey` 配置字段；准确战斗语义待确认。"),
    /** AddCharacterSharedBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("AddCharacterSharedBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** AddCharacterSharedBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("AddCharacterSharedBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
    /** AddCharacterSharedBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。 */
    "_valueStr": z.string().describe("AddCharacterSharedBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddCharacterSharedBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddCostTimerModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const AddCostTimerModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddCostTimerModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AddCostTimerModifierAction 的 `costAddLocked` 配置字段；准确战斗语义待确认。 */
    "_costAddLocked": z.boolean().describe("AddCostTimerModifierAction 的 `costAddLocked` 配置字段；准确战斗语义待确认。"),
    /** AddCostTimerModifierAction 的 `costAddLockedBB` 配置字段；准确战斗语义待确认。 */
    "_costAddLockedBB": z.null().describe("AddCostTimerModifierAction 的 `costAddLockedBB` 配置字段；准确战斗语义待确认。"),
    /** AddCostTimerModifierAction 的 `priority` 配置字段；准确战斗语义待确认。 */
    "_priority": z.number().describe("AddCostTimerModifierAction 的 `priority` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** AddCostTimerModifierAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("AddCostTimerModifierAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddCostTimerModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddCostTimerModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddEnemyBlockVolume, Assembly-CSharp 的严格 Action 数据。
 */
export const AddEnemyBlockVolumeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddEnemyBlockVolume, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddEnemyBlockVolumeAction 的 `additionVolume` 配置字段；准确战斗语义待确认。 */
    "_additionVolume": z.number().describe("AddEnemyBlockVolumeAction 的 `additionVolume` 配置字段；准确战斗语义待确认。"),
    /** AddEnemyBlockVolumeAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
    "_isMinus": z.boolean().describe("AddEnemyBlockVolumeAction 的 `isMinus` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddEnemyBlockVolume, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddEnemyBlockVolumeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA12Schema = z
  .discriminatedUnion("$type", [ActivePredifinedInstActionSchema, AddAbilityBlackboardActionSchema, AddAttackRangeAsFearTargetTilesActionSchema, AddAttractToTargetNearestTileUseAbilitySelectorActionSchema, AddAttractToTargetRootTileActionSchema, AddBuffBlackboardActionSchema, AddBuffToRandomCharacterWithSpecificBuffActionSchema, AddCharacterSharedBlackboardActionSchema, AddCostTimerModifierActionSchema, AddEnemyBlockVolumeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA12>;
