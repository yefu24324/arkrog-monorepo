/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { InstantKillAction, InterruptAbilityAction, InterruptCharacterAbilityAction, InterruptCharacterAttackAction, InterruptCharacterSkillAction, InterruptEnemyAbilityAction, InterruptEnemyCombatAction, InterruptTokenSkillAction, InverseDamageAction, IsAtkScaleZeroAction, BattleActionI03 } from "../../../../types/buff-template-data/actions/i/actions-i-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InstantKill, Assembly-CSharp 的严格 Action 数据。
 */
export const InstantKillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InstantKill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InstantKillAction 的 `killSource` 配置字段；准确战斗语义待确认。 */
    "_killSource": z.boolean().describe("InstantKillAction 的 `killSource` 配置字段；准确战斗语义待确认。"),
    /** InstantKillAction 的 `markReachExit` 配置字段；准确战斗语义待确认。 */
    "_markReachExit": z.boolean().describe("InstantKillAction 的 `markReachExit` 配置字段；准确战斗语义待确认。"),
    /** InstantKillAction 的 `noReason` 配置字段；准确战斗语义待确认。 */
    "_noReason": z.boolean().describe("InstantKillAction 的 `noReason` 配置字段；准确战斗语义待确认。"),
    /** InstantKillAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("InstantKillAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** InstantKillAction 的 `resultIfInRallyPointMode` 配置字段；准确战斗语义待确认。 */
    "_resultIfInRallyPointMode": z.boolean().describe("InstantKillAction 的 `resultIfInRallyPointMode` 配置字段；准确战斗语义待确认。"),
    /** InstantKillAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
    "_skipReborn": z.boolean().describe("InstantKillAction 的 `skipReborn` 配置字段；准确战斗语义待确认。"),
    /** InstantKillAction 的 `switchState` 配置字段；准确战斗语义待确认。 */
    "_switchState": z.boolean().describe("InstantKillAction 的 `switchState` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** InstantKillAction 的 `withdrawIfRallyPoint` 配置字段；准确战斗语义待确认。 */
    "_withdrawIfRallyPoint": z.boolean().describe("InstantKillAction 的 `withdrawIfRallyPoint` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InstantKill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InstantKillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("InterruptAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** InterruptAbilityAction 的 `emitAttackFinishOnly` 配置字段；准确战斗语义待确认。 */
    "_emitAttackFinishOnly": z.boolean().describe("InterruptAbilityAction 的 `emitAttackFinishOnly` 配置字段；准确战斗语义待确认。"),
    /** InterruptAbilityAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("InterruptAbilityAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** InterruptAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("InterruptAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** InterruptAbilityAction 的 `stopAffect` 配置字段；准确战斗语义待确认。 */
    "_stopAffect": z.boolean().describe("InterruptAbilityAction 的 `stopAffect` 配置字段；准确战斗语义待确认。"),
    /** InterruptAbilityAction 的 `useBlackboardCardUidAsOwner` 配置字段；准确战斗语义待确认。 */
    "_useBlackboardCardUidAsOwner": z.boolean().describe("InterruptAbilityAction 的 `useBlackboardCardUidAsOwner` 配置字段；准确战斗语义待确认。"),
    /** InterruptAbilityAction 的 `useCurrentAbility` 配置字段；准确战斗语义待确认。 */
    "_useCurrentAbility": z.boolean().describe("InterruptAbilityAction 的 `useCurrentAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptCharacterAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptCharacterAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptCharacterAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptCharacterAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("InterruptCharacterAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterAbilityAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
    "_charFrom": z.string().describe("InterruptCharacterAbilityAction 的 `charFrom` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterAbilityAction 的 `needStopAffect` 配置字段；准确战斗语义待确认。 */
    "_needStopAffect": z.boolean().describe("InterruptCharacterAbilityAction 的 `needStopAffect` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptCharacterAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptCharacterAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptCharacterAttack, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptCharacterAttackActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptCharacterAttack, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptCharacterAttackAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
    "_charFrom": z.string().describe("InterruptCharacterAttackAction 的 `charFrom` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterAttackAction 的 `forceUseCharacterAttack` 配置字段；准确战斗语义待确认。 */
    "_forceUseCharacterAttack": z.boolean().describe("InterruptCharacterAttackAction 的 `forceUseCharacterAttack` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterAttackAction 的 `resetAndClearCD` 配置字段；准确战斗语义待确认。 */
    "_resetAndClearCD": z.boolean().describe("InterruptCharacterAttackAction 的 `resetAndClearCD` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterAttackAction 的 `resetCD` 配置字段；准确战斗语义待确认。 */
    "_resetCD": z.boolean().describe("InterruptCharacterAttackAction 的 `resetCD` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptCharacterAttack, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptCharacterAttackAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptCharacterSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptCharacterSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptCharacterSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptCharacterSkillAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
    "_charFrom": z.string().describe("InterruptCharacterSkillAction 的 `charFrom` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterSkillAction 的 `interruptSkillSelf` 配置字段；准确战斗语义待确认。 */
    "_interruptSkillSelf": z.boolean().describe("InterruptCharacterSkillAction 的 `interruptSkillSelf` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterSkillAction 的 `resetAbilityCooldown` 配置字段；准确战斗语义待确认。 */
    "_resetAbilityCooldown": z.boolean().describe("InterruptCharacterSkillAction 的 `resetAbilityCooldown` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterSkillAction 的 `resetAbilityCooldownIgnoreAffecting` 配置字段；准确战斗语义待确认。 */
    "_resetAbilityCooldownIgnoreAffecting": z.boolean().describe("InterruptCharacterSkillAction 的 `resetAbilityCooldownIgnoreAffecting` 配置字段；准确战斗语义待确认。"),
    /** InterruptCharacterSkillAction 的 `switchOutFromSkillState` 配置字段；准确战斗语义待确认。 */
    "_switchOutFromSkillState": z.boolean().describe("InterruptCharacterSkillAction 的 `switchOutFromSkillState` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptCharacterSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptCharacterSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptEnemyAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptEnemyAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptEnemyAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptEnemyAbilityAction 的 `checkBuffAbility` 配置字段；准确战斗语义待确认。 */
    "_checkBuffAbility": z.boolean().describe("InterruptEnemyAbilityAction 的 `checkBuffAbility` 配置字段；准确战斗语义待确认。"),
    /** InterruptEnemyAbilityAction 的 `enemyFrom` 配置字段；准确战斗语义待确认。 */
    "_enemyFrom": z.string().describe("InterruptEnemyAbilityAction 的 `enemyFrom` 配置字段；准确战斗语义待确认。"),
    /** InterruptEnemyAbilityAction 的 `resetCooldown` 配置字段；准确战斗语义待确认。 */
    "_resetCooldown": z.boolean().describe("InterruptEnemyAbilityAction 的 `resetCooldown` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptEnemyAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptEnemyAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptEnemyCombat, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptEnemyCombatActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptEnemyCombat, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptEnemyCombatAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("InterruptEnemyCombatAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptEnemyCombat, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptEnemyCombatAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InterruptTokenSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const InterruptTokenSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InterruptTokenSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InterruptTokenSkillAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
    "_hostType": z.literal("BUFF_SOURCE").describe("InterruptTokenSkillAction 的 `hostType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InterruptTokenSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InterruptTokenSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InverseDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const InverseDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InverseDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InverseDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("NORMAL").describe("InverseDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** InverseDamageAction 的 `damageTypeKey` 配置字段；准确战斗语义待确认。 */
    "_damageTypeKey": z.string().describe("InverseDamageAction 的 `damageTypeKey` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `damageValueKey` 配置字段；准确战斗语义待确认。 */
    "_damageValueKey": z.string().describe("InverseDamageAction 的 `damageValueKey` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
    "_filterModifierCancelled": z.boolean().describe("InverseDamageAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `fixValue` 配置字段；准确战斗语义待确认。 */
    "_fixValue": z.boolean().describe("InverseDamageAction 的 `fixValue` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
    "_hasSource": z.boolean().describe("InverseDamageAction 的 `hasSource` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
    "_sideMask": z.enum(["ALLY","BOTH_ALLY_AND_ENEMY","ENEMY"]).describe("InverseDamageAction 的 `sideMask` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("InverseDamageAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** InverseDamageAction 的 `skipSourceEvent` 配置字段；准确战斗语义待确认。 */
    "_skipSourceEvent": z.boolean().describe("InverseDamageAction 的 `skipSourceEvent` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InverseDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InverseDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsAtkScaleZero, Assembly-CSharp 的严格 Action 数据。
 */
export const IsAtkScaleZeroActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsAtkScaleZero, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsAtkScaleZero, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsAtkScaleZeroAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI03Schema = z
  .discriminatedUnion("$type", [InstantKillActionSchema, InterruptAbilityActionSchema, InterruptCharacterAbilityActionSchema, InterruptCharacterAttackActionSchema, InterruptCharacterSkillActionSchema, InterruptEnemyAbilityActionSchema, InterruptEnemyCombatActionSchema, InterruptTokenSkillActionSchema, InverseDamageActionSchema, IsAtkScaleZeroActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI03>;
