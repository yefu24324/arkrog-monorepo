/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act49SideCheckCharacterTileTypeAction, Act49SideCheckWordTileBuildableAction, Act49SideDestroyCarpTileAction, Act49sideEnemySheartCheckTriggerSkillAction, Act49sideEnemySsttzFinishSkillLockEffectAction, Act49sideEnemySsttzShowSkillLockEffectAction, Act49SideEnemyTjglyLockSelfWithTileAction, Act49SideEnemyTjglyTryFindNextTileAction, Act49SideExtractCharacterAction, Act49sideHeadBossSetParamsAction, BattleActionA09 } from "../../../../types/buff-template-data/actions/a/actions-a-09.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideCheckCharacterTileType, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideCheckCharacterTileTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideCheckCharacterTileType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49SideCheckCharacterTileTypeAction 的 `checkAnyTile` 配置字段；准确战斗语义待确认。 */
    "_checkAnyTile": z.boolean().describe("Act49SideCheckCharacterTileTypeAction 的 `checkAnyTile` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49SideCheckCharacterTileTypeAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
    "_tileType": z.enum(["Carp","Empty","None","Pure"]).describe("Act49SideCheckCharacterTileTypeAction 的 `tileType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideCheckCharacterTileType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideCheckCharacterTileTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideCheckWordTileBuildable, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideCheckWordTileBuildableActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideCheckWordTileBuildable, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideCheckWordTileBuildable, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideCheckWordTileBuildableAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideDestroyCarpTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideDestroyCarpTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideDestroyCarpTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49SideDestroyCarpTileAction 的 `targetTileType` 配置字段；准确战斗语义待确认。 */
    "_targetTileType": z.literal("Empty").describe("Act49SideDestroyCarpTileAction 的 `targetTileType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act49SideDestroyCarpTileAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
    "_tileType": z.literal("Carp").describe("Act49SideDestroyCarpTileAction 的 `tileType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideDestroyCarpTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideDestroyCarpTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideEnemySheartCheckTriggerSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideEnemySheartCheckTriggerSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideEnemySheartCheckTriggerSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideEnemySheartCheckTriggerSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideEnemySheartCheckTriggerSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideEnemySsttzFinishSkillLockEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideEnemySsttzFinishSkillLockEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideEnemySsttzFinishSkillLockEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideEnemySsttzFinishSkillLockEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideEnemySsttzFinishSkillLockEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideEnemySsttzShowSkillLockEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideEnemySsttzShowSkillLockEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideEnemySsttzShowSkillLockEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideEnemySsttzShowSkillLockEffectAction 的 `posKey` 配置字段；准确战斗语义待确认。 */
    "_posKey": z.string().describe("Act49sideEnemySsttzShowSkillLockEffectAction 的 `posKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideEnemySsttzShowSkillLockEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideEnemySsttzShowSkillLockEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideEnemyTjglyLockSelfWithTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideEnemyTjglyLockSelfWithTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideEnemyTjglyLockSelfWithTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideEnemyTjglyLockSelfWithTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideEnemyTjglyLockSelfWithTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideEnemyTjglyTryFindNextTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideEnemyTjglyTryFindNextTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideEnemyTjglyTryFindNextTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideEnemyTjglyTryFindNextTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideEnemyTjglyTryFindNextTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49SideExtractCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49SideExtractCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49SideExtractCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49SideExtractCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49SideExtractCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideHeadBossSetParams, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideHeadBossSetParamsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideHeadBossSetParams, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideHeadBossSetParamsAction 的 `doomCountDownKey` 配置字段；准确战斗语义待确认。 */
    "_doomCountDownKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `doomCountDownKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideHeadBossSetParamsAction 的 `dotAttackAtkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_dotAttackAtkScaleKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `dotAttackAtkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideHeadBossSetParamsAction 的 `dotAttackDurationKey` 配置字段；准确战斗语义待确认。 */
    "_dotAttackDurationKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `dotAttackDurationKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideHeadBossSetParamsAction 的 `dotAttackEleAtkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_dotAttackEleAtkScaleKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `dotAttackEleAtkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideHeadBossSetParamsAction 的 `dotAttackTriggerIntervalKey` 配置字段；准确战斗语义待确认。 */
    "_dotAttackTriggerIntervalKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `dotAttackTriggerIntervalKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideHeadBossSetParamsAction 的 `mainAttackAtkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_mainAttackAtkScaleKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `mainAttackAtkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideHeadBossSetParamsAction 的 `mainAttackEleAtkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_mainAttackEleAtkScaleKey": z.string().describe("Act49sideHeadBossSetParamsAction 的 `mainAttackEleAtkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideHeadBossSetParams, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideHeadBossSetParamsAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA09Schema = z
  .discriminatedUnion("$type", [Act49SideCheckCharacterTileTypeActionSchema, Act49SideCheckWordTileBuildableActionSchema, Act49SideDestroyCarpTileActionSchema, Act49sideEnemySheartCheckTriggerSkillActionSchema, Act49sideEnemySsttzFinishSkillLockEffectActionSchema, Act49sideEnemySsttzShowSkillLockEffectActionSchema, Act49SideEnemyTjglyLockSelfWithTileActionSchema, Act49SideEnemyTjglyTryFindNextTileActionSchema, Act49SideExtractCharacterActionSchema, Act49sideHeadBossSetParamsActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA09>;
