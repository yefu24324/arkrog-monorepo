/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AddTileBlackboardAction, AdjustEnemyHeightToRootTileAction, AdjustFootballHeightBySpeedAction, AdjustVisualObjectHeightAction, AdvancedApplyDamageAction, AdvancedApplyHealAction, AdvancedHealViaDamageAction, AlwaysExecuteNodeListAction, AlwaysNextAction, AmmoSkillCountModifierAction, BattleActionA14 } from "../../../../types/buff-template-data/actions/a/actions-a-14.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AddTileBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AddTileBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AddTileBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AddTileBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。 */
    "_addition": z.number().describe("AddTileBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。"),
    /** AddTileBlackboardAction 的 `additionKey` 配置字段；准确战斗语义待确认。 */
    "_additionKey": z.null().describe("AddTileBlackboardAction 的 `additionKey` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AddTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetOldTile": z.boolean().describe("AddTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。"),
    /** AddTileBlackboardAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRootTile": z.boolean().describe("AddTileBlackboardAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AddTileBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AddTileBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AdjustEnemyHeightToRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const AdjustEnemyHeightToRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AdjustEnemyHeightToRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AdjustEnemyHeightToRootTileAction 的 `instant` 配置字段；准确战斗语义待确认。 */
    "_instant": z.boolean().describe("AdjustEnemyHeightToRootTileAction 的 `instant` 配置字段；准确战斗语义待确认。"),
    /** AdjustEnemyHeightToRootTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AdjustEnemyHeightToRootTileAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AdjustEnemyHeightToRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AdjustEnemyHeightToRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AdjustFootballHeightBySpeed, Assembly-CSharp 的严格 Action 数据。
 */
export const AdjustFootballHeightBySpeedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AdjustFootballHeightBySpeed, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AdjustFootballHeightBySpeedAction 的 `assignHeightToBB` 配置字段；准确战斗语义待确认。 */
    "_assignHeightToBB": z.string().describe("AdjustFootballHeightBySpeedAction 的 `assignHeightToBB` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `duration` 配置字段；准确战斗语义待确认。 */
    "_duration": z.number().describe("AdjustFootballHeightBySpeedAction 的 `duration` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
    "_durationKey": z.string().describe("AdjustFootballHeightBySpeedAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `maxHeight` 配置字段；准确战斗语义待确认。 */
    "_maxHeight": z.number().describe("AdjustFootballHeightBySpeedAction 的 `maxHeight` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `maxHeightKey` 配置字段；准确战斗语义待确认。 */
    "_maxHeightKey": z.string().describe("AdjustFootballHeightBySpeedAction 的 `maxHeightKey` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `maxSpeed` 配置字段；准确战斗语义待确认。 */
    "_maxSpeed": z.number().describe("AdjustFootballHeightBySpeedAction 的 `maxSpeed` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `maxSpeedKey` 配置字段；准确战斗语义待确认。 */
    "_maxSpeedKey": z.string().describe("AdjustFootballHeightBySpeedAction 的 `maxSpeedKey` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `minSpeed` 配置字段；准确战斗语义待确认。 */
    "_minSpeed": z.number().describe("AdjustFootballHeightBySpeedAction 的 `minSpeed` 配置字段；准确战斗语义待确认。"),
    /** AdjustFootballHeightBySpeedAction 的 `minSpeedKey` 配置字段；准确战斗语义待确认。 */
    "_minSpeedKey": z.string().describe("AdjustFootballHeightBySpeedAction 的 `minSpeedKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AdjustFootballHeightBySpeed, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AdjustFootballHeightBySpeedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AdjustVisualObjectHeight, Assembly-CSharp 的严格 Action 数据。
 */
export const AdjustVisualObjectHeightActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AdjustVisualObjectHeight, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AdjustVisualObjectHeightAction 的 `isDelta` 配置字段；准确战斗语义待确认。 */
    "_isDelta": z.boolean().describe("AdjustVisualObjectHeightAction 的 `isDelta` 配置字段；准确战斗语义待确认。"),
    /** AdjustVisualObjectHeightAction 的 `newHeight` 配置字段；准确战斗语义待确认。 */
    "_newHeight": z.number().describe("AdjustVisualObjectHeightAction 的 `newHeight` 配置字段；准确战斗语义待确认。"),
    /** AdjustVisualObjectHeightAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("AdjustVisualObjectHeightAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AdjustVisualObjectHeight, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AdjustVisualObjectHeightAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AdvancedApplyDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const AdvancedApplyDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AdvancedApplyDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AdvancedApplyDamageAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.enum(["ALL","MELEE","NONE","RANGED"]).describe("AdvancedApplyDamageAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `assignFinalDamageToBB` 配置字段；准确战斗语义待确认。 */
    "_assignFinalDamageToBB": z.boolean().describe("AdvancedApplyDamageAction 的 `assignFinalDamageToBB` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `assignRealDamageToBB` 配置字段；准确战斗语义待确认。 */
    "_assignRealDamageToBB": z.boolean().describe("AdvancedApplyDamageAction 的 `assignRealDamageToBB` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `atkScaleVar` 配置字段；准确战斗语义待确认。 */
    "_atkScaleVar": z.string().describe("AdvancedApplyDamageAction 的 `atkScaleVar` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["ADDITION","BUFF","NORMAL","SPLASH"]).describe("AdvancedApplyDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `baseOnHostAtk` 配置字段；准确战斗语义待确认。 */
    "_baseOnHostAtk": z.boolean().describe("AdvancedApplyDamageAction 的 `baseOnHostAtk` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `cachedAtkKey` 配置字段；准确战斗语义待确认。 */
    "_cachedAtkKey": z.string().describe("AdvancedApplyDamageAction 的 `cachedAtkKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["ELEMENT","MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** AdvancedApplyDamageAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。 */
    "_defaultAtkScale": z.number().describe("AdvancedApplyDamageAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `emitSourceOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
    "_emitSourceOnCalculateDamage": z.boolean().describe("AdvancedApplyDamageAction 的 `emitSourceOnCalculateDamage` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `forceUseProjectileCachedAtk` 配置字段；准确战斗语义待确认。 */
    "_forceUseProjectileCachedAtk": z.boolean().describe("AdvancedApplyDamageAction 的 `forceUseProjectileCachedAtk` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `getCachedAtkFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_getCachedAtkFromBlackboard": z.boolean().describe("AdvancedApplyDamageAction 的 `getCachedAtkFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreCancelReasonMask": z.literal("NONE").describe("AdvancedApplyDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("AdvancedApplyDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `ignoreMissFlag` 配置字段；准确战斗语义待确认。 */
    "_ignoreMissFlag": z.literal("NONE").describe("AdvancedApplyDamageAction 的 `ignoreMissFlag` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
    "_modifierKey": z.string().describe("AdvancedApplyDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("AdvancedApplyDamageAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `onlyUseSourceOnCalculateDamage` 配置字段；准确战斗语义待确认。 */
    "_onlyUseSourceOnCalculateDamage": z.boolean().describe("AdvancedApplyDamageAction 的 `onlyUseSourceOnCalculateDamage` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `setSharedFlag` 配置字段；准确战斗语义待确认。 */
    "_setSharedFlag": z.boolean().describe("AdvancedApplyDamageAction 的 `setSharedFlag` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `sharedFlagIndex` 配置字段；准确战斗语义待确认。 */
    "_sharedFlagIndex": z.string().describe("AdvancedApplyDamageAction 的 `sharedFlagIndex` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("AdvancedApplyDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AdvancedApplyDamageAction 的 `useSourceWhenUseCachedAtk` 配置字段；准确战斗语义待确认。 */
    "_useSourceWhenUseCachedAtk": z.boolean().describe("AdvancedApplyDamageAction 的 `useSourceWhenUseCachedAtk` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AdvancedApplyDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AdvancedApplyDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AdvancedApplyHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const AdvancedApplyHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AdvancedApplyHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AdvancedApplyHealAction 的 `customModifierKey` 配置字段；准确战斗语义待确认。 */
    "_customModifierKey": z.string().describe("AdvancedApplyHealAction 的 `customModifierKey` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyHealAction 的 `healScaleKey` 配置字段；准确战斗语义待确认。 */
    "_healScaleKey": z.string().describe("AdvancedApplyHealAction 的 `healScaleKey` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("AdvancedApplyHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyHealAction 的 `scaleUpByBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_scaleUpByBlackboardKey": z.union([
                                     z.null(),
                                     z.string(),
                                   ]).describe("AdvancedApplyHealAction 的 `scaleUpByBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyHealAction 的 `scaleUpIfUnderHpRatio` 配置字段；准确战斗语义待确认。 */
    "_scaleUpIfUnderHpRatio": z.boolean().describe("AdvancedApplyHealAction 的 `scaleUpIfUnderHpRatio` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AdvancedApplyHealAction 的 `useDynamicVar` 配置字段；准确战斗语义待确认。 */
    "_useDynamicVar": z.boolean().describe("AdvancedApplyHealAction 的 `useDynamicVar` 配置字段；准确战斗语义待确认。"),
    /** AdvancedApplyHealAction 的 `useInputTargetAsHealTarget` 配置字段；准确战斗语义待确认。 */
    "_useInputTargetAsHealTarget": z.boolean().describe("AdvancedApplyHealAction 的 `useInputTargetAsHealTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AdvancedApplyHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AdvancedApplyHealAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AdvancedHealViaDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const AdvancedHealViaDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AdvancedHealViaDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AdvancedHealViaDamageAction 的 `healAbilityName` 配置字段；准确战斗语义待确认。 */
    "_healAbilityName": z.string().describe("AdvancedHealViaDamageAction 的 `healAbilityName` 配置字段；准确战斗语义待确认。"),
    /** AdvancedHealViaDamageAction 的 `owner` 配置字段；准确战斗语义待确认。 */
    "_owner": z.literal("BUFF_OWNER").describe("AdvancedHealViaDamageAction 的 `owner` 配置字段；准确战斗语义待确认。"),
    /** AdvancedHealViaDamageAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
    "_scaleKey": z.string().describe("AdvancedHealViaDamageAction 的 `scaleKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AdvancedHealViaDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AdvancedHealViaDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AlwaysExecuteNodeList, Assembly-CSharp 的严格 Action 数据。
 */
export const AlwaysExecuteNodeListActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AlwaysExecuteNodeList, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AlwaysExecuteNodeListAction 的 `failWhenOneFail` 配置字段；准确战斗语义待确认。 */
    "_failWhenOneFail": z.boolean().describe("AlwaysExecuteNodeListAction 的 `failWhenOneFail` 配置字段；准确战斗语义待确认。"),
    /** AlwaysExecuteNodeListAction 的 `nodes` 配置字段；准确战斗语义待确认。 */
    "_nodes": z.array(z.array(BattleActionReferenceSchema)).describe("AlwaysExecuteNodeListAction 的 `nodes` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AlwaysExecuteNodeList, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AlwaysExecuteNodeListAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AlwaysNext, Assembly-CSharp 的严格 Action 数据。
 */
export const AlwaysNextActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AlwaysNext, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AlwaysNext, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AlwaysNextAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AmmoSkillCountModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const AmmoSkillCountModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AmmoSkillCountModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AmmoSkillCountModifierAction 的 `addCount` 配置字段；准确战斗语义待确认。 */
    "_addCount": z.number().describe("AmmoSkillCountModifierAction 的 `addCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `addCountBBKey` 配置字段；准确战斗语义待确认。 */
    "_addCountBBKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("AmmoSkillCountModifierAction 的 `addCountBBKey` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `addCountUsePercent` 配置字段；准确战斗语义待确认。 */
    "_addCountUsePercent": z.boolean().describe("AmmoSkillCountModifierAction 的 `addCountUsePercent` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `consumeCount` 配置字段；准确战斗语义待确认。 */
    "_consumeCount": z.number().describe("AmmoSkillCountModifierAction 的 `consumeCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `consumeCountBBKey` 配置字段；准确战斗语义待确认。 */
    "_consumeCountBBKey": z.union([
                                z.null(),
                                z.string(),
                              ]).describe("AmmoSkillCountModifierAction 的 `consumeCountBBKey` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `consumeEventCount` 配置字段；准确战斗语义待确认。 */
    "_consumeEventCount": z.boolean().describe("AmmoSkillCountModifierAction 的 `consumeEventCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `discardRemainingCount` 配置字段；准确战斗语义待确认。 */
    "_discardRemainingCount": z.boolean().describe("AmmoSkillCountModifierAction 的 `discardRemainingCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `discardSoft` 配置字段；准确战斗语义待确认。 */
    "_discardSoft": z.boolean().describe("AmmoSkillCountModifierAction 的 `discardSoft` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `modifyMaxCount` 配置字段；准确战斗语义待确认。 */
    "_modifyMaxCount": z.boolean().describe("AmmoSkillCountModifierAction 的 `modifyMaxCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `recoverCount` 配置字段；准确战斗语义待确认。 */
    "_recoverCount": z.number().describe("AmmoSkillCountModifierAction 的 `recoverCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `recoverCountBBKey` 配置字段；准确战斗语义待确认。 */
    "_recoverCountBBKey": z.union([
                                z.null(),
                                z.string(),
                              ]).describe("AmmoSkillCountModifierAction 的 `recoverCountBBKey` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `recoverCountUsePercent` 配置字段；准确战斗语义待确认。 */
    "_recoverCountUsePercent": z.boolean().describe("AmmoSkillCountModifierAction 的 `recoverCountUsePercent` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `recoverEventCount` 配置字段；准确战斗语义待确认。 */
    "_recoverEventCount": z.boolean().describe("AmmoSkillCountModifierAction 的 `recoverEventCount` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `recoverSkipLimitCheck` 配置字段；准确战斗语义待确认。 */
    "_recoverSkipLimitCheck": z.boolean().describe("AmmoSkillCountModifierAction 的 `recoverSkipLimitCheck` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `restoreMaxCount` 配置字段；准确战斗语义待确认。 */
    "_restoreMaxCount": z.boolean().describe("AmmoSkillCountModifierAction 的 `restoreMaxCount` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** AmmoSkillCountModifierAction 的 `triggerConsumeEvent` 配置字段；准确战斗语义待确认。 */
    "_triggerConsumeEvent": z.boolean().describe("AmmoSkillCountModifierAction 的 `triggerConsumeEvent` 配置字段；准确战斗语义待确认。"),
    /** AmmoSkillCountModifierAction 的 `useEvtRetAsReturnValue` 配置字段；准确战斗语义待确认。 */
    "_useEvtRetAsReturnValue": z.boolean().describe("AmmoSkillCountModifierAction 的 `useEvtRetAsReturnValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AmmoSkillCountModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AmmoSkillCountModifierAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA14Schema = z
  .discriminatedUnion("$type", [AddTileBlackboardActionSchema, AdjustEnemyHeightToRootTileActionSchema, AdjustFootballHeightBySpeedActionSchema, AdjustVisualObjectHeightActionSchema, AdvancedApplyDamageActionSchema, AdvancedApplyHealActionSchema, AdvancedHealViaDamageActionSchema, AlwaysExecuteNodeListActionSchema, AlwaysNextActionSchema, AmmoSkillCountModifierActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA14>;
