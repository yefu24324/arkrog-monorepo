/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FilterDamageModiferAction, FilterDeathReasonAction, FilterDistanceToRootTileAction, FilterElementDamageModiferAction, FilterEnemyKeyAction, FilterEPBreakRecoveryTypeAction, FilterIdAction, FilterInSourceSkillRangeIdAction, FilterIsDummyAction, FilterLifePointAction, BattleActionF05 } from "../../../../types/buff-template-data/actions/f/actions-f-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterDamageModifer, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterDamageModiferActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterDamageModifer, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterDamageModiferAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.literal("NONE").describe("FilterDamageModiferAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `attackTypeFilter` 配置字段；准确战斗语义待确认。 */
    "_attackTypeFilter": z.string().describe("FilterDamageModiferAction 的 `attackTypeFilter` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `checkHasScource` 配置字段；准确战斗语义待确认。 */
    "_checkHasScource": z.boolean().describe("FilterDamageModiferAction 的 `checkHasScource` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.enum(["ANY_ATTACK","ANY_ATTACK_EXCEPT_ELEMENT","ELEMENT","MAGICAL","NONE","PHYSICAL","PHYSICAL_AND_MAGICAL","PURE"]).describe("FilterDamageModiferAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("FilterDamageModiferAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterAttackType` 配置字段；准确战斗语义待确认。 */
    "_filterAttackType": z.boolean().describe("FilterDamageModiferAction 的 `filterAttackType` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterBySourceId` 配置字段；准确战斗语义待确认。 */
    "_filterBySourceId": z.boolean().describe("FilterDamageModiferAction 的 `filterBySourceId` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("FilterDamageModiferAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
    "_filterModifierCancelled": z.boolean().describe("FilterDamageModiferAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterModifierSource` 配置字段；准确战斗语义待确认。 */
    "_filterModifierSource": z.boolean().describe("FilterDamageModiferAction 的 `filterModifierSource` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `filterSharedMask` 配置字段；准确战斗语义待确认。 */
    "_filterSharedMask": z.boolean().describe("FilterDamageModiferAction 的 `filterSharedMask` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `isNoSource` 配置字段；准确战斗语义待确认。 */
    "_isNoSource": z.boolean().describe("FilterDamageModiferAction 的 `isNoSource` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `sharedFlag` 配置字段；准确战斗语义待确认。 */
    "_sharedFlag": z.enum(["IS_CONTINUOUS","IS_ENVIRONMENT_DAMAGE"]).describe("FilterDamageModiferAction 的 `sharedFlag` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("FilterDamageModiferAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** FilterDamageModiferAction 的 `sourceId` 配置字段；准确战斗语义待确认。 */
    "_sourceId": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("FilterDamageModiferAction 的 `sourceId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterDamageModifer, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterDamageModiferAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterDeathReason, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterDeathReasonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterDeathReason, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterDeathReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。 */
    "_finishReason": z.enum(["FALLDOWN","HP_ZERO","HP_ZERO_WITH_NO_SOURCE","MOVE_LIKE_RESPAWN_SELF","NONE","OTHER","REACH_EXIT","REPLACED","RESPAWN_SELF","SILENT_WITHDRAW","WITHDRAW"]).describe("FilterDeathReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。"),
    /** FilterDeathReasonAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","MAIN_TARGET","TARGET"]).describe("FilterDeathReasonAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterDeathReason, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterDeathReasonAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterDistanceToRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterDistanceToRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterDistanceToRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterDistanceToRootTileAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("LT").describe("FilterDistanceToRootTileAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterDistanceToRootTileAction 的 `distance` 配置字段；准确战斗语义待确认。 */
    "_distance": z.number().describe("FilterDistanceToRootTileAction 的 `distance` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterDistanceToRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterDistanceToRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterElementDamageModifer, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterElementDamageModiferActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterElementDamageModifer, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterElementDamageModiferAction 的 `epType` 配置字段；准确战斗语义待确认。 */
    "_epType": z.enum(["DARK","NONE","SANITY","WATER"]).describe("FilterElementDamageModiferAction 的 `epType` 配置字段；准确战斗语义待确认。"),
    /** FilterElementDamageModiferAction 的 `filterEPType` 配置字段；准确战斗语义待确认。 */
    "_filterEPType": z.boolean().describe("FilterElementDamageModiferAction 的 `filterEPType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterElementDamageModifer, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterElementDamageModiferAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterEnemyKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterEnemyKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterEnemyKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterEnemyKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("FilterEnemyKeyAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterEnemyKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterEnemyKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterEPBreakRecoveryType, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterEPBreakRecoveryTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterEPBreakRecoveryType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterEPBreakRecoveryTypeAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.union([
                    z.null(),
                    z.string(),
                  ]).describe("FilterEPBreakRecoveryTypeAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** FilterEPBreakRecoveryTypeAction 的 `readTypeFromBb` 配置字段；准确战斗语义待确认。 */
    "_readTypeFromBb": z.boolean().describe("FilterEPBreakRecoveryTypeAction 的 `readTypeFromBb` 配置字段；准确战斗语义待确认。"),
    /** FilterEPBreakRecoveryTypeAction 的 `recoveryType` 配置字段；准确战斗语义待确认。 */
    "_recoveryType": z.enum(["ANGER","DARK","FIRE","NONE","SANITY","WATER"]).describe("FilterEPBreakRecoveryTypeAction 的 `recoveryType` 配置字段；准确战斗语义待确认。"),
    /** FilterEPBreakRecoveryTypeAction 的 `skipInEPBreakRecoveryCheck` 配置字段；准确战斗语义待确认。 */
    "_skipInEPBreakRecoveryCheck": z.boolean().describe("FilterEPBreakRecoveryTypeAction 的 `skipInEPBreakRecoveryCheck` 配置字段；准确战斗语义待确认。"),
    /** FilterEPBreakRecoveryTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("FilterEPBreakRecoveryTypeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterEPBreakRecoveryType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterEPBreakRecoveryTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterId, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterIdAction 的 `filterId` 配置字段；准确战斗语义待确认。 */
    "_filterId": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("FilterIdAction 的 `filterId` 配置字段；准确战斗语义待确认。"),
    /** FilterIdAction 的 `filterIdKey` 配置字段；准确战斗语义待确认。 */
    "_filterIdKey": z.string().describe("FilterIdAction 的 `filterIdKey` 配置字段；准确战斗语义待确认。"),
    /** FilterIdAction 的 `filterIds` 配置字段；准确战斗语义待确认。 */
    "_filterIds": z.union([
                        z.null(),
                        z.array(z.string()),
                      ]).describe("FilterIdAction 的 `filterIds` 配置字段；准确战斗语义待确认。"),
    /** FilterIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("FilterIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MAIN_TARGET","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterInSourceSkillRangeId, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterInSourceSkillRangeIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterInSourceSkillRangeId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterInSourceSkillRangeIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("FilterInSourceSkillRangeIdAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** FilterInSourceSkillRangeIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("FilterInSourceSkillRangeIdAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterInSourceSkillRangeId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterInSourceSkillRangeIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterIsDummy, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterIsDummyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterIsDummy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterIsDummyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("FilterIsDummyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterIsDummy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterIsDummyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterLifePoint, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterLifePointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterLifePoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterLifePointAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.literal("EQUALS").describe("FilterLifePointAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** FilterLifePointAction 的 `lifePoint` 配置字段；准确战斗语义待确认。 */
    "_lifePoint": z.number().describe("FilterLifePointAction 的 `lifePoint` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterLifePoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterLifePointAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF05Schema = z
  .discriminatedUnion("$type", [FilterDamageModiferActionSchema, FilterDeathReasonActionSchema, FilterDistanceToRootTileActionSchema, FilterElementDamageModiferActionSchema, FilterEnemyKeyActionSchema, FilterEPBreakRecoveryTypeActionSchema, FilterIdActionSchema, FilterInSourceSkillRangeIdActionSchema, FilterIsDummyActionSchema, FilterLifePointActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF05>;
