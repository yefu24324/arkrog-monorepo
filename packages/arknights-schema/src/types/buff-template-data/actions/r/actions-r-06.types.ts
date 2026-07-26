/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RestartAuraAbilityBySideType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RestartAuraAbilityBySideTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RestartAuraAbilityBySideType, Assembly-CSharp";
  /** RestartAuraAbilityBySideTypeAction 的 `dealWithAuraAbility` 配置字段；准确战斗语义待确认。 */
  "_dealWithAuraAbility": boolean;
  /** RestartAuraAbilityBySideTypeAction 的 `dealWithGlobalAuraAbility` 配置字段；准确战斗语义待确认。 */
  "_dealWithGlobalAuraAbility": boolean;
  /** RestartAuraAbilityBySideTypeAction 的 `dealWithNonPhysicsAuraAbility` 配置字段；准确战斗语义待确认。 */
  "_dealWithNonPhysicsAuraAbility": boolean;
  /** RestartAuraAbilityBySideTypeAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
  "_sideType": "ENEMY";
  /** RestartAuraAbilityBySideTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RestartCastSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RestartCastSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RestartCastSkill, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** RestartCastSkillAction 的 `forceRechargeSP` 配置字段；准确战斗语义待确认。 */
  "forceRechargeSP": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RestoreCharacterSkillStates, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RestoreCharacterSkillStatesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RestoreCharacterSkillStates, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ReturnDeployCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ReturnDeployCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ReturnDeployCost, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ReturnDeployCostAction 的 `forceToDisplayNegativeNumber` 配置字段；准确战斗语义待确认。 */
  "_forceToDisplayNegativeNumber": boolean;
  /** ReturnDeployCostAction 的 `forceToDisplayNumber` 配置字段；准确战斗语义待确认。 */
  "_forceToDisplayNumber": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsInRangeWhenSpecialMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsInRangeWhenSpecialMode, Assembly-CSharp";
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_advancedBuildableMask": "WOODRD_HOLE";
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "MELEE";
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `exclude` 配置字段；准确战斗语义待确认。 */
  "_exclude": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_isObstacleLike": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentAdvancedBuildableMask": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentBuildableType` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentBuildableType": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentObstacleLike": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `keepCurrentPassableMask` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentPassableMask": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `killLocatedIfNotBuildable` 配置字段；准确战斗语义待确认。 */
  "_killLocatedIfNotBuildable": boolean;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `modes` 配置字段；准确战斗语义待确认。 */
  "_modes": Array<number>;
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
  "_passableMask": "FLY_ONLY";
  /** RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsOneLine, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RewriteDynamicBuffTileOptionsOneLineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RewriteDynamicBuffTileOptionsOneLine, Assembly-CSharp";
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。 */
  "_exceptCurrentTile": boolean;
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_isObstacleLike": boolean;
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentObstacleLike": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。 */
  "_useCurrentTileDirection": boolean;
  /** RewriteDynamicBuffTileOptionsOneLineAction 的 `useLocationFromBBAsCurrentTile` 配置字段；准确战斗语义待确认。 */
  "_useLocationFromBBAsCurrentTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RewriteTileOptions, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RewriteTileOptionsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RewriteTileOptions, Assembly-CSharp";
  /** RewriteTileOptionsAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_advancedBuildableMask": "DEEP_SEA" | "DEFAULT" | "ENEMY_FTPRG" | "NONE" | "RIDGE_FIELD" | "WOODRD_HOLE";
  /** RewriteTileOptionsAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "MELEE" | "NONE" | "RANGED";
  /** RewriteTileOptionsAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
  "_heightType": "HIGHLAND" | "LOWLAND";
  /** RewriteTileOptionsAction 的 `isObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_isObstacleLike": boolean;
  /** RewriteTileOptionsAction 的 `keepCurrentAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentAdvancedBuildableMask": boolean;
  /** RewriteTileOptionsAction 的 `keepCurrentBuildableType` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentBuildableType": boolean;
  /** RewriteTileOptionsAction 的 `keepCurrentHeightType` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentHeightType": boolean;
  /** RewriteTileOptionsAction 的 `keepCurrentObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentObstacleLike": boolean;
  /** RewriteTileOptionsAction 的 `keepCurrentOverlapHeight` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentOverlapHeight": boolean;
  /** RewriteTileOptionsAction 的 `keepCurrentPassableMask` 配置字段；准确战斗语义待确认。 */
  "_keepCurrentPassableMask": boolean;
  /** RewriteTileOptionsAction 的 `killLocatedIfNotBuildable` 配置字段；准确战斗语义待确认。 */
  "_killLocatedIfNotBuildable": boolean;
  /** RewriteTileOptionsAction 的 `overlapHeight` 配置字段；准确战斗语义待确认。 */
  "_overlapHeight": number;
  /** RewriteTileOptionsAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
  "_passableMask": "FLY_ONLY" | "NONE";
  /** RewriteTileOptionsAction 的 `restoreTileOptions` 配置字段；准确战斗语义待确认。 */
  "_restoreTileOptions": boolean;
  /** RewriteTileOptionsAction 的 `useOwnerRootTile` 配置字段；准确战斗语义待确认。 */
  "_useOwnerRootTile": boolean;
  /** RewriteTileOptionsAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetOldTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RewriteTileOptionsInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RewriteTileOptionsInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RewriteTileOptionsInRange, Assembly-CSharp";
  /** RewriteTileOptionsInRangeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
  "_advancedBuildableMask": "DEFAULT" | "NIGHT";
  /** RewriteTileOptionsInRangeAction 的 `buildableChange` 配置字段；准确战斗语义待确认。 */
  "_buildableChange": boolean;
  /** RewriteTileOptionsInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "NONE";
  /** RewriteTileOptionsInRangeAction 的 `nightMode` 配置字段；准确战斗语义待确认。 */
  "_nightMode": boolean;
  /** RewriteTileOptionsInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** RewriteTileOptionsInRangeAction 的 `restoreTileOptions` 配置字段；准确战斗语义待确认。 */
  "_restoreTileOptions": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RistarInVerticalMovement, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RistarInVerticalMovementAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RistarInVerticalMovement, Assembly-CSharp";
  /** RistarInVerticalMovementAction 的 `ignoredOffset` 配置字段；准确战斗语义待确认。 */
  "_ignoredOffset": number;
  /** RistarInVerticalMovementAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RistarMove, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RistarMoveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RistarMove, Assembly-CSharp";
  /** RistarMoveAction 的 `isAllyTrigger` 配置字段；准确战斗语义待确认。 */
  "_isAllyTrigger": boolean;
  /** RistarMoveAction 的 `tileKeyList` 配置字段；准确战斗语义待确认。 */
  "_tileKeyList": Array<string>;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR06 = RestartAuraAbilityBySideTypeAction | RestartCastSkillAction | RestoreCharacterSkillStatesAction | ReturnDeployCostAction | RewriteDynamicBuffTileOptionsInRangeWhenSpecialModeAction | RewriteDynamicBuffTileOptionsOneLineAction | RewriteTileOptionsAction | RewriteTileOptionsInRangeAction | RistarInVerticalMovementAction | RistarMoveAction;
