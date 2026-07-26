/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RestartAuraAbilityBySideTypeAction, RestartCastSkillAction, RestoreCharacterSkillStatesAction, ReturnDeployCostAction, RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction, RewriteDynamicBuffTileOptionsOneLineAction, RewriteTileOptionsAction, RewriteTileOptionsInRangeAction, RistarInVerticalMovementAction, RistarMoveAction, BattleActionR06 } from "../../../../types/buff-template-data/actions/r/actions-r-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RestartAuraAbilityBySideType, Assembly-CSharp 的严格 Action 数据。
 */
export const RestartAuraAbilityBySideTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RestartAuraAbilityBySideType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RestartAuraAbilityBySideTypeAction 的 `dealWithAuraAbility` 配置字段；准确战斗语义待确认。 */
    "_dealWithAuraAbility": z.boolean().describe("RestartAuraAbilityBySideTypeAction 的 `dealWithAuraAbility` 配置字段；准确战斗语义待确认。"),
    /** RestartAuraAbilityBySideTypeAction 的 `dealWithGlobalAuraAbility` 配置字段；准确战斗语义待确认。 */
    "_dealWithGlobalAuraAbility": z.boolean().describe("RestartAuraAbilityBySideTypeAction 的 `dealWithGlobalAuraAbility` 配置字段；准确战斗语义待确认。"),
    /** RestartAuraAbilityBySideTypeAction 的 `dealWithNonPhysicsAuraAbility` 配置字段；准确战斗语义待确认。 */
    "_dealWithNonPhysicsAuraAbility": z.boolean().describe("RestartAuraAbilityBySideTypeAction 的 `dealWithNonPhysicsAuraAbility` 配置字段；准确战斗语义待确认。"),
    /** RestartAuraAbilityBySideTypeAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
    "_sideType": z.literal("ENEMY").describe("RestartAuraAbilityBySideTypeAction 的 `sideType` 配置字段；准确战斗语义待确认。"),
    /** RestartAuraAbilityBySideTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RestartAuraAbilityBySideTypeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RestartAuraAbilityBySideType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RestartAuraAbilityBySideTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RestartCastSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const RestartCastSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RestartCastSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** RestartCastSkillAction 的 `forceRechargeSP` 配置字段；准确战斗语义待确认。 */
    "forceRechargeSP": z.boolean().describe("RestartCastSkillAction 的 `forceRechargeSP` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RestartCastSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RestartCastSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RestoreCharacterSkillStates, Assembly-CSharp 的严格 Action 数据。
 */
export const RestoreCharacterSkillStatesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RestoreCharacterSkillStates, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RestoreCharacterSkillStates, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RestoreCharacterSkillStatesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ReturnDeployCost, Assembly-CSharp 的严格 Action 数据。
 */
export const ReturnDeployCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ReturnDeployCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ReturnDeployCostAction 的 `forceToDisplayNegativeNumber` 配置字段；准确战斗语义待确认。 */
    "_forceToDisplayNegativeNumber": z.boolean().describe("ReturnDeployCostAction 的 `forceToDisplayNegativeNumber` 配置字段；准确战斗语义待确认。"),
    /** ReturnDeployCostAction 的 `forceToDisplayNumber` 配置字段；准确战斗语义待确认。 */
    "_forceToDisplayNumber": z.boolean().describe("ReturnDeployCostAction 的 `forceToDisplayNumber` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ReturnDeployCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ReturnDeployCostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsInRangeWhenSpecialMode, Assembly-CSharp 的严格 Action 数据。
 */
export const RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsInRangeWhenSpecialMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_advancedBuildableMask": z.literal("WOODRD_HOLE").describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("MELEE").describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `exclude` 配置字段；准确战斗语义待确认。 */
    "_exclude": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `exclude` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_isObstacleLike": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentAdvancedBuildableMask": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentBuildableType` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentBuildableType": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentBuildableType` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentObstacleLike": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentPassableMask` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentPassableMask": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentPassableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `killLocatedIfNotBuildable` 配置字段；准确战斗语义待确认。 */
    "_killLocatedIfNotBuildable": z.boolean().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `killLocatedIfNotBuildable` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `modes` 配置字段；准确战斗语义待确认。 */
    "_modes": z.array(z.number()).describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `modes` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
    "_passableMask": z.literal("FLY_ONLY").describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsInRangeWhenSpecialMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsOneLine, Assembly-CSharp 的严格 Action 数据。
 */
export const RewriteDynamicBuffTileOptionsOneLineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsOneLine, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。 */
    "_exceptCurrentTile": z.boolean().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_isObstacleLike": z.boolean().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentObstacleLike": z.boolean().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。 */
    "_useCurrentTileDirection": z.boolean().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。"),
    /** RewriteDynamicBuffTileOptionsOneLineAction 的 `useLocationFromBBAsCurrentTile` 配置字段；准确战斗语义待确认。 */
    "_useLocationFromBBAsCurrentTile": z.boolean().describe("RewriteDynamicBuffTileOptionsOneLineAction 的 `useLocationFromBBAsCurrentTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsOneLine, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RewriteDynamicBuffTileOptionsOneLineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RewriteTileOptions, Assembly-CSharp 的严格 Action 数据。
 */
export const RewriteTileOptionsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RewriteTileOptions, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RewriteTileOptionsAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_advancedBuildableMask": z.enum(["DEEP_SEA","DEFAULT","ENEMY_FTPRG","NONE","RIDGE_FIELD","WOODRD_HOLE"]).describe("RewriteTileOptionsAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.enum(["MELEE","NONE","RANGED"]).describe("RewriteTileOptionsAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
    "_heightType": z.enum(["HIGHLAND","LOWLAND"]).describe("RewriteTileOptionsAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_isObstacleLike": z.boolean().describe("RewriteTileOptionsAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `keepCurrentAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentAdvancedBuildableMask": z.boolean().describe("RewriteTileOptionsAction 的 `keepCurrentAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `keepCurrentBuildableType` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentBuildableType": z.boolean().describe("RewriteTileOptionsAction 的 `keepCurrentBuildableType` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `keepCurrentHeightType` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentHeightType": z.boolean().describe("RewriteTileOptionsAction 的 `keepCurrentHeightType` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentObstacleLike": z.boolean().describe("RewriteTileOptionsAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `keepCurrentOverlapHeight` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentOverlapHeight": z.boolean().describe("RewriteTileOptionsAction 的 `keepCurrentOverlapHeight` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `keepCurrentPassableMask` 配置字段；准确战斗语义待确认。 */
    "_keepCurrentPassableMask": z.boolean().describe("RewriteTileOptionsAction 的 `keepCurrentPassableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `killLocatedIfNotBuildable` 配置字段；准确战斗语义待确认。 */
    "_killLocatedIfNotBuildable": z.boolean().describe("RewriteTileOptionsAction 的 `killLocatedIfNotBuildable` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `overlapHeight` 配置字段；准确战斗语义待确认。 */
    "_overlapHeight": z.number().describe("RewriteTileOptionsAction 的 `overlapHeight` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
    "_passableMask": z.enum(["FLY_ONLY","NONE"]).describe("RewriteTileOptionsAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `restoreTileOptions` 配置字段；准确战斗语义待确认。 */
    "_restoreTileOptions": z.boolean().describe("RewriteTileOptionsAction 的 `restoreTileOptions` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `useOwnerRootTile` 配置字段；准确战斗语义待确认。 */
    "_useOwnerRootTile": z.boolean().describe("RewriteTileOptionsAction 的 `useOwnerRootTile` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetOldTile": z.boolean().describe("RewriteTileOptionsAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RewriteTileOptions, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RewriteTileOptionsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RewriteTileOptionsInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const RewriteTileOptionsInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RewriteTileOptionsInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RewriteTileOptionsInRangeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_advancedBuildableMask": z.enum(["DEFAULT","NIGHT"]).describe("RewriteTileOptionsInRangeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsInRangeAction 的 `buildableChange` 配置字段；准确战斗语义待确认。 */
    "_buildableChange": z.boolean().describe("RewriteTileOptionsInRangeAction 的 `buildableChange` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("NONE").describe("RewriteTileOptionsInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsInRangeAction 的 `nightMode` 配置字段；准确战斗语义待确认。 */
    "_nightMode": z.boolean().describe("RewriteTileOptionsInRangeAction 的 `nightMode` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("RewriteTileOptionsInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** RewriteTileOptionsInRangeAction 的 `restoreTileOptions` 配置字段；准确战斗语义待确认。 */
    "_restoreTileOptions": z.boolean().describe("RewriteTileOptionsInRangeAction 的 `restoreTileOptions` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RewriteTileOptionsInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RewriteTileOptionsInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RistarInVerticalMovement, Assembly-CSharp 的严格 Action 数据。
 */
export const RistarInVerticalMovementActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RistarInVerticalMovement, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RistarInVerticalMovementAction 的 `ignoredOffset` 配置字段；准确战斗语义待确认。 */
    "_ignoredOffset": z.number().describe("RistarInVerticalMovementAction 的 `ignoredOffset` 配置字段；准确战斗语义待确认。"),
    /** RistarInVerticalMovementAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("RistarInVerticalMovementAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RistarInVerticalMovement, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RistarInVerticalMovementAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RistarMove, Assembly-CSharp 的严格 Action 数据。
 */
export const RistarMoveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RistarMove, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RistarMoveAction 的 `isAllyTrigger` 配置字段；准确战斗语义待确认。 */
    "_isAllyTrigger": z.boolean().describe("RistarMoveAction 的 `isAllyTrigger` 配置字段；准确战斗语义待确认。"),
    /** RistarMoveAction 的 `tileKeyList` 配置字段；准确战斗语义待确认。 */
    "_tileKeyList": z.array(z.string()).describe("RistarMoveAction 的 `tileKeyList` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RistarMove, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RistarMoveAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR06Schema = z
  .discriminatedUnion("$type", [RestartAuraAbilityBySideTypeActionSchema, RestartCastSkillActionSchema, RestoreCharacterSkillStatesActionSchema, ReturnDeployCostActionSchema, RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeActionSchema, RewriteDynamicBuffTileOptionsOneLineActionSchema, RewriteTileOptionsActionSchema, RewriteTileOptionsInRangeActionSchema, RistarInVerticalMovementActionSchema, RistarMoveActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR06>;
