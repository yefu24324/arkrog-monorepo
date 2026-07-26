/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { MarkEnemyKilledAndUnharmfulAction, MarkFogTickTimeAction, MarkFogViewAction, MarkFogViewByAbilitySelectorAction, ModifierScaleUpAction, ModifyAbilityAttackTimeAction, ModifyAbilityBlackboardAction, ModifyAbilityBlackboardAndCastAction, ModifyAnimatorHookerReplacePairAction, ModifyAttackBlackboardAction, BattleActionM03 } from "../../../../types/buff-template-data/actions/m/actions-m-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkEnemyKilledAndUnharmful, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkEnemyKilledAndUnharmfulActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkEnemyKilledAndUnharmful, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkEnemyKilledAndUnharmful, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkEnemyKilledAndUnharmfulAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkFogTickTime, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkFogTickTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkFogTickTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MarkFogTickTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("MarkFogTickTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** MarkFogTickTimeAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("MarkFogTickTimeAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** MarkFogTickTimeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("MarkFogTickTimeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** MarkFogTickTimeAction 的 `useProjectileRootTile` 配置字段；准确战斗语义待确认。 */
    "_useProjectileRootTile": z.boolean().describe("MarkFogTickTimeAction 的 `useProjectileRootTile` 配置字段；准确战斗语义待确认。"),
    /** MarkFogTickTimeAction 的 `useRangeId` 配置字段；准确战斗语义待确认。 */
    "_useRangeId": z.boolean().describe("MarkFogTickTimeAction 的 `useRangeId` 配置字段；准确战斗语义待确认。"),
    /** MarkFogTickTimeAction 的 `useSourceRootTile` 配置字段；准确战斗语义待确认。 */
    "_useSourceRootTile": z.boolean().describe("MarkFogTickTimeAction 的 `useSourceRootTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkFogTickTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkFogTickTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkFogView, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkFogViewActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkFogView, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MarkFogViewAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("MarkFogViewAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** MarkFogViewAction 的 `globalRange` 配置字段；准确战斗语义待确认。 */
    "_globalRange": z.boolean().describe("MarkFogViewAction 的 `globalRange` 配置字段；准确战斗语义待确认。"),
    /** MarkFogViewAction 的 `markInView` 配置字段；准确战斗语义待确认。 */
    "_markInView": z.boolean().describe("MarkFogViewAction 的 `markInView` 配置字段；准确战斗语义待确认。"),
    /** MarkFogViewAction 的 `markOldTilePos` 配置字段；准确战斗语义待确认。 */
    "_markOldTilePos": z.boolean().describe("MarkFogViewAction 的 `markOldTilePos` 配置字段；准确战斗语义待确认。"),
    /** MarkFogViewAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("MarkFogViewAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkFogView, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkFogViewAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkFogViewByAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkFogViewByAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkFogViewByAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MarkFogViewByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("MarkFogViewByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** MarkFogViewByAbilitySelectorAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("MarkFogViewByAbilitySelectorAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** MarkFogViewByAbilitySelectorAction 的 `markInView` 配置字段；准确战斗语义待确认。 */
    "_markInView": z.boolean().describe("MarkFogViewByAbilitySelectorAction 的 `markInView` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkFogViewByAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkFogViewByAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifierScaleUp, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifierScaleUpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifierScaleUp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifierScaleUpAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
    "_scaleKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("ModifierScaleUpAction 的 `scaleKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifierScaleUp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifierScaleUpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAbilityAttackTime, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAbilityAttackTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAbilityAttackTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAbilityAttackTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ModifyAbilityAttackTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityAttackTimeAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.union([
                    z.null(),
                    z.string(),
                  ]).describe("ModifyAbilityAttackTimeAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityAttackTimeAction 的 `useOtherAbility` 配置字段；准确战斗语义待确认。 */
    "_useOtherAbility": z.boolean().describe("ModifyAbilityAttackTimeAction 的 `useOtherAbility` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityAttackTimeAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("ModifyAbilityAttackTimeAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAbilityAttackTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAbilityAttackTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ModifyAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `abilityOwnerType` 配置字段；准确战斗语义待确认。 */
    "_abilityOwnerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("ModifyAbilityBlackboardAction 的 `abilityOwnerType` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
    "_assignString": z.boolean().describe("ModifyAbilityBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeys": z.string().describe("ModifyAbilityBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("ModifyAbilityBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_fromBlackboardKeys": z.union([
                                 z.null(),
                                 z.string(),
                               ]).describe("ModifyAbilityBlackboardAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `fromBuffBlackboard` 配置字段；准确战斗语义待确认。 */
    "_fromBuffBlackboard": z.boolean().describe("ModifyAbilityBlackboardAction 的 `fromBuffBlackboard` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `isUpdateSelector` 配置字段；准确战斗语义待确认。 */
    "_isUpdateSelector": z.boolean().describe("ModifyAbilityBlackboardAction 的 `isUpdateSelector` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `stringValue` 配置字段；准确战斗语义待确认。 */
    "_stringValue": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("ModifyAbilityBlackboardAction 的 `stringValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `useOtherAbility` 配置字段；准确战斗语义待确认。 */
    "_useOtherAbility": z.boolean().describe("ModifyAbilityBlackboardAction 的 `useOtherAbility` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `useSnapshotAbility` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotAbility": z.boolean().describe("ModifyAbilityBlackboardAction 的 `useSnapshotAbility` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("ModifyAbilityBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAction 的 `fromAbilityBlackBoard` 配置字段；准确战斗语义待确认。 */
    "fromAbilityBlackBoard": z.boolean().describe("ModifyAbilityBlackboardAction 的 `fromAbilityBlackBoard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAbilityBlackboardAndCast, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAbilityBlackboardAndCastActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAbilityBlackboardAndCast, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAbilityBlackboardAndCastAction 的 `ability` 配置字段；准确战斗语义待确认。 */
    "_ability": z.string().describe("ModifyAbilityBlackboardAndCastAction 的 `ability` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAndCastAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeys": z.string().describe("ModifyAbilityBlackboardAndCastAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAndCastAction 的 `logStackCountToDynamicVar` 配置字段；准确战斗语义待确认。 */
    "_logStackCountToDynamicVar": z.boolean().describe("ModifyAbilityBlackboardAndCastAction 的 `logStackCountToDynamicVar` 配置字段；准确战斗语义待确认。"),
    /** ModifyAbilityBlackboardAndCastAction 的 `scaledByBuffGroupStackCount` 配置字段；准确战斗语义待确认。 */
    "_scaledByBuffGroupStackCount": z.boolean().describe("ModifyAbilityBlackboardAndCastAction 的 `scaledByBuffGroupStackCount` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAbilityBlackboardAndCast, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAbilityBlackboardAndCastAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAnimatorHookerReplacePair, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAnimatorHookerReplacePairActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAnimatorHookerReplacePair, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAnimatorHookerReplacePairAction 的 `isOverwrite` 配置字段；准确战斗语义待确认。 */
    "_isOverwrite": z.boolean().describe("ModifyAnimatorHookerReplacePairAction 的 `isOverwrite` 配置字段；准确战斗语义待确认。"),
    /** ModifyAnimatorHookerReplacePairAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("ModifyAnimatorHookerReplacePairAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** ModifyAnimatorHookerReplacePairAction 的 `modifyCurrentMode` 配置字段；准确战斗语义待确认。 */
    "_modifyCurrentMode": z.boolean().describe("ModifyAnimatorHookerReplacePairAction 的 `modifyCurrentMode` 配置字段；准确战斗语义待确认。"),
    /** ModifyAnimatorHookerReplacePairAction 的 `replaceAnimPairs` 配置字段；准确战斗语义待确认。 */
    "_replaceAnimPairs": z.array(z.strictObject({
                               /** ModifyAnimatorHookerReplacePairAction 的 `fromAnimKey` 配置字段；准确战斗语义待确认。 */
                               "fromAnimKey": z.string().describe("ModifyAnimatorHookerReplacePairAction 的 `fromAnimKey` 配置字段；准确战斗语义待确认。"),
                               /** ModifyAnimatorHookerReplacePairAction 的 `toAnimKey` 配置字段；准确战斗语义待确认。 */
                               "toAnimKey": z.string().describe("ModifyAnimatorHookerReplacePairAction 的 `toAnimKey` 配置字段；准确战斗语义待确认。"),
                             })).describe("ModifyAnimatorHookerReplacePairAction 的 `replaceAnimPairs` 配置字段；准确战斗语义待确认。"),
    /** ModifyAnimatorHookerReplacePairAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ModifyAnimatorHookerReplacePairAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAnimatorHookerReplacePair, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAnimatorHookerReplacePairAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttackBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAttackBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAttackBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAttackBlackboardAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("ModifyAttackBlackboardAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttackBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAttackBlackboardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM03Schema = z
  .discriminatedUnion("$type", [MarkEnemyKilledAndUnharmfulActionSchema, MarkFogTickTimeActionSchema, MarkFogViewActionSchema, MarkFogViewByAbilitySelectorActionSchema, ModifierScaleUpActionSchema, ModifyAbilityAttackTimeActionSchema, ModifyAbilityBlackboardActionSchema, ModifyAbilityBlackboardAndCastActionSchema, ModifyAnimatorHookerReplacePairActionSchema, ModifyAttackBlackboardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM03>;
