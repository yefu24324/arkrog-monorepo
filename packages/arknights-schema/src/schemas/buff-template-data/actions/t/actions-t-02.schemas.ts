/**
 * buff_template_data 的 T 组 Action Zod Schema。
 */

import { z } from "zod";

import type { TriggerBuffAction, TriggerBuffsByKeysAction, TriggerEnemySkillAction, TriggerEnvSystemAction, TriggerHostsBuffsByKeysAction, TriggerPalsyAction, TriggerSkillAction, TriggerSpecifiedAbilityAction, TriggerTileInRangeAction, TriggerTokensAbilityAction, BattleActionT02 } from "../../../../types/buff-template-data/actions/t/actions-t-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerBuffAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("TriggerBuffAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** TriggerBuffAction 的 `triggerDerivedBuffs` 配置字段；准确战斗语义待确认。 */
    "_triggerDerivedBuffs": z.boolean().describe("TriggerBuffAction 的 `triggerDerivedBuffs` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerBuffsByKeys, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerBuffsByKeysActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerBuffsByKeys, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("TriggerBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** TriggerBuffsByKeysAction 的 `excludeInTriggerAll` 配置字段；准确战斗语义待确认。 */
    "_excludeInTriggerAll": z.boolean().describe("TriggerBuffsByKeysAction 的 `excludeInTriggerAll` 配置字段；准确战斗语义待确认。"),
    /** TriggerBuffsByKeysAction 的 `excludeThisBuff` 配置字段；准确战斗语义待确认。 */
    "_excludeThisBuff": z.boolean().describe("TriggerBuffsByKeysAction 的 `excludeThisBuff` 配置字段；准确战斗语义待确认。"),
    /** TriggerBuffsByKeysAction 的 `forceTrigger` 配置字段；准确战斗语义待确认。 */
    "_forceTrigger": z.boolean().describe("TriggerBuffsByKeysAction 的 `forceTrigger` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** TriggerBuffsByKeysAction 的 `triggerAllBuffs` 配置字段；准确战斗语义待确认。 */
    "_triggerAllBuffs": z.boolean().describe("TriggerBuffsByKeysAction 的 `triggerAllBuffs` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerBuffsByKeys, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerBuffsByKeysAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerEnemySkill, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerEnemySkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerEnemySkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerEnemySkillAction 的 `assignCombatAbility` 配置字段；准确战斗语义待确认。 */
    "_assignCombatAbility": z.boolean().describe("TriggerEnemySkillAction 的 `assignCombatAbility` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
    "_checkSkillActive": z.boolean().describe("TriggerEnemySkillAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `checkSkillReady` 配置字段；准确战斗语义待确认。 */
    "_checkSkillReady": z.boolean().describe("TriggerEnemySkillAction 的 `checkSkillReady` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `clearPalsyingBuffBeforeTrigger` 配置字段；准确战斗语义待确认。 */
    "_clearPalsyingBuffBeforeTrigger": z.boolean().describe("TriggerEnemySkillAction 的 `clearPalsyingBuffBeforeTrigger` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `forceFindTargetBySkillSelector` 配置字段；准确战斗语义待确认。 */
    "_forceFindTargetBySkillSelector": z.boolean().describe("TriggerEnemySkillAction 的 `forceFindTargetBySkillSelector` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `interruptCurAbility` 配置字段；准确战斗语义待确认。 */
    "_interruptCurAbility": z.boolean().describe("TriggerEnemySkillAction 的 `interruptCurAbility` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `interruptCurAbilityUnlessItIsExpectedAbility` 配置字段；准确战斗语义待确认。 */
    "_interruptCurAbilityUnlessItIsExpectedAbility": z.boolean().describe("TriggerEnemySkillAction 的 `interruptCurAbilityUnlessItIsExpectedAbility` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("TriggerEnemySkillAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnemySkillAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
    "_skillName": z.union([
                        z.null(),
                        z.string(),
                      ]).describe("TriggerEnemySkillAction 的 `skillName` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","PROJECTILE_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** TriggerEnemySkillAction 的 `tryCastDirectlyWhenNoTarget` 配置字段；准确战斗语义待确认。 */
    "_tryCastDirectlyWhenNoTarget": z.boolean().describe("TriggerEnemySkillAction 的 `tryCastDirectlyWhenNoTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerEnemySkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerEnemySkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerEnvSystem, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerEnvSystemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerEnvSystem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerEnvSystemAction 的 `envKey` 配置字段；准确战斗语义待确认。 */
    "_envKey": z.union([
                     z.null(),
                     z.string(),
                   ]).describe("TriggerEnvSystemAction 的 `envKey` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnvSystemAction 的 `eventName` 配置字段；准确战斗语义待确认。 */
    "_eventName": z.union([
                        z.null(),
                        z.string(),
                      ]).describe("TriggerEnvSystemAction 的 `eventName` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnvSystemAction 的 `readResultFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_readResultFromBlackboard": z.boolean().describe("TriggerEnvSystemAction 的 `readResultFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnvSystemAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","SOURCE","TARGET"]).describe("TriggerEnvSystemAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnvSystemAction 的 `triggerWithBlackboard` 配置字段；准确战斗语义待确认。 */
    "_triggerWithBlackboard": z.boolean().describe("TriggerEnvSystemAction 的 `triggerWithBlackboard` 配置字段；准确战斗语义待确认。"),
    /** TriggerEnvSystemAction 的 `triggerWithEvent` 配置字段；准确战斗语义待确认。 */
    "_triggerWithEvent": z.boolean().describe("TriggerEnvSystemAction 的 `triggerWithEvent` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerEnvSystem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerEnvSystemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerHostsBuffsByKeys, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerHostsBuffsByKeysActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerHostsBuffsByKeys, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerHostsBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("TriggerHostsBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** TriggerHostsBuffsByKeysAction 的 `isEnemy` 配置字段；准确战斗语义待确认。 */
    "_isEnemy": z.boolean().describe("TriggerHostsBuffsByKeysAction 的 `isEnemy` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerHostsBuffsByKeys, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerHostsBuffsByKeysAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerPalsy, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerPalsyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerPalsy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerPalsyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("TriggerPalsyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerPalsy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerPalsyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerSkillAction 的 `checkBeforeTrigger` 配置字段；准确战斗语义待确认。 */
    "_checkBeforeTrigger": z.boolean().describe("TriggerSkillAction 的 `checkBeforeTrigger` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerSpecifiedAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerSpecifiedAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerSpecifiedAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerSpecifiedAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerSpecifiedAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerSpecifiedAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
    "_checkCanUseAblityFlag": z.boolean().describe("TriggerSpecifiedAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。"),
    /** TriggerSpecifiedAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("TriggerSpecifiedAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** TriggerSpecifiedAbilityAction 的 `triggerEnergyBuffAbility` 配置字段；准确战斗语义待确认。 */
    "_triggerEnergyBuffAbility": z.boolean().describe("TriggerSpecifiedAbilityAction 的 `triggerEnergyBuffAbility` 配置字段；准确战斗语义待确认。"),
    /** TriggerSpecifiedAbilityAction 的 `triggerProjectileToTileOnceAbilityBySubSelector` 配置字段；准确战斗语义待确认。 */
    "_triggerProjectileToTileOnceAbilityBySubSelector": z.boolean().describe("TriggerSpecifiedAbilityAction 的 `triggerProjectileToTileOnceAbilityBySubSelector` 配置字段；准确战斗语义待确认。"),
    /** TriggerSpecifiedAbilityAction 的 `triggerStealAttrAbility` 配置字段；准确战斗语义待确认。 */
    "_triggerStealAttrAbility": z.boolean().describe("TriggerSpecifiedAbilityAction 的 `triggerStealAttrAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerSpecifiedAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerSpecifiedAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerTileInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerTileInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerTileInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerTileInRangeAction 的 `isTriggerSpecificTiles` 配置字段；准确战斗语义待确认。 */
    "_isTriggerSpecificTiles": z.boolean().describe("TriggerTileInRangeAction 的 `isTriggerSpecificTiles` 配置字段；准确战斗语义待确认。"),
    /** TriggerTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("TriggerTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** TriggerTileInRangeAction 的 `tileKeys` 配置字段；准确战斗语义待确认。 */
    "_tileKeys": z.union([
                       z.null(),
                       z.array(z.string()),
                     ]).describe("TriggerTileInRangeAction 的 `tileKeys` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerTileInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerTileInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerTokensAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerTokensAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerTokensAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerTokensAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerTokensAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerTokensAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
    "_checkCanUseAblityFlag": z.boolean().describe("TriggerTokensAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。"),
    /** TriggerTokensAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("TriggerTokensAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerTokensAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerTokensAbilityAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionT02Schema = z
  .discriminatedUnion("$type", [TriggerBuffActionSchema, TriggerBuffsByKeysActionSchema, TriggerEnemySkillActionSchema, TriggerEnvSystemActionSchema, TriggerHostsBuffsByKeysActionSchema, TriggerPalsyActionSchema, TriggerSkillActionSchema, TriggerSpecifiedAbilityActionSchema, TriggerTileInRangeActionSchema, TriggerTokensAbilityActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionT02>;
