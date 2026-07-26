/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckCharacterGroupTagAction, CheckCharacterInBornStateAction, CheckCharacterInMagicCircuitAction, CheckCharacterIsFreelySpawnedFromDeckAction, CheckCharacterIsMannuallySpawnedAction, CheckCharacterNextAttackOrCombatSkillAction, CheckCharacterOnTileAction, CheckCharacterSkillTypeAction, CheckCharSkillAffectingAction, CheckCharSkillAvailableAction, BattleActionC05 } from "../../../../types/buff-template-data/actions/c/actions-c-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterGroupTag, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterGroupTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterGroupTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterGroupTagAction 的 `groupTag` 配置字段；准确战斗语义待确认。 */
    "_groupTag": z.string().describe("CheckCharacterGroupTagAction 的 `groupTag` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterGroupTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterGroupTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterInBornState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterInBornStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterInBornState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterInBornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckCharacterInBornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterInBornState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterInBornStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterInMagicCircuit, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterInMagicCircuitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterInMagicCircuit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterInMagicCircuit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterInMagicCircuitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterIsFreelySpawnedFromDeck, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterIsFreelySpawnedFromDeckActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterIsFreelySpawnedFromDeck, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterIsFreelySpawnedFromDeckAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckCharacterIsFreelySpawnedFromDeckAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterIsFreelySpawnedFromDeck, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterIsFreelySpawnedFromDeckAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterIsMannuallySpawned, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterIsMannuallySpawnedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterIsMannuallySpawned, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterIsMannuallySpawnedAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckCharacterIsMannuallySpawnedAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterIsMannuallySpawned, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterIsMannuallySpawnedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterNextAttackOrCombatSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterNextAttackOrCombatSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterNextAttackOrCombatSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterNextAttackOrCombatSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterNextAttackOrCombatSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterOnTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterOnTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterOnTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterOnTileAction 的 `checkProfessionCategories` 配置字段；准确战斗语义待确认。 */
    "_checkProfessionCategories": z.boolean().describe("CheckCharacterOnTileAction 的 `checkProfessionCategories` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterOnTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterOnTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterSkillType, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterSkillTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterSkillType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterSkillTypeAction 的 `skillType` 配置字段；准确战斗语义待确认。 */
    "_skillType": z.enum(["AUTO","MANUAL"]).describe("CheckCharacterSkillTypeAction 的 `skillType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterSkillType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterSkillTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharSkillAffecting, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharSkillAffectingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharSkillAffecting, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharSkillAffectingAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。 */
    "_checkTargetHost": z.boolean().describe("CheckCharSkillAffectingAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharSkillAffecting, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharSkillAffectingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharSkillAvailable, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharSkillAvailableActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharSkillAvailable, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharSkillAvailable, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharSkillAvailableAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC05Schema = z
  .discriminatedUnion("$type", [CheckCharacterGroupTagActionSchema, CheckCharacterInBornStateActionSchema, CheckCharacterInMagicCircuitActionSchema, CheckCharacterIsFreelySpawnedFromDeckActionSchema, CheckCharacterIsMannuallySpawnedActionSchema, CheckCharacterNextAttackOrCombatSkillActionSchema, CheckCharacterOnTileActionSchema, CheckCharacterSkillTypeActionSchema, CheckCharSkillAffectingActionSchema, CheckCharSkillAvailableActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC05>;
