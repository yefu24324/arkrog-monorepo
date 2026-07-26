/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act46SideBanAreaSkillAction, Act46SideCreateAreaGridFxAction, Act46SideOnBlockChangedAction, Act46SideOnEnemyInteractWithAvalancheAreaAction, Act46SideRebuildNpcRouteAction, Act46SideSwitchAreaAnimatorStateAction, Act46SideTriggerAvalancheAction, Act47SideAddForceToBalloonAction, Act47SideCheckCharacterDeathByMoveAction, Act47SideCheckTileIsFloatingAction, BattleActionA06 } from "../../../../types/buff-template-data/actions/a/actions-a-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideBanAreaSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideBanAreaSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideBanAreaSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act46SideBanAreaSkillAction 的 `isBan` 配置字段；准确战斗语义待确认。 */
    "_isBan": z.boolean().describe("Act46SideBanAreaSkillAction 的 `isBan` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideBanAreaSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideBanAreaSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideCreateAreaGridFx, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideCreateAreaGridFxActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideCreateAreaGridFx, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act46SideCreateAreaGridFxAction 的 `active` 配置字段；准确战斗语义待确认。 */
    "_active": z.boolean().describe("Act46SideCreateAreaGridFxAction 的 `active` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideCreateAreaGridFx, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideCreateAreaGridFxAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideOnBlockChanged, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideOnBlockChangedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideOnBlockChanged, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act46SideOnBlockChangedAction 的 `isActivate` 配置字段；准确战斗语义待确认。 */
    "_isActivate": z.boolean().describe("Act46SideOnBlockChangedAction 的 `isActivate` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideOnBlockChanged, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideOnBlockChangedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideOnEnemyInteractWithAvalancheArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideOnEnemyInteractWithAvalancheAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideOnEnemyInteractWithAvalancheArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act46SideOnEnemyInteractWithAvalancheAreaAction 的 `areaIndexKey` 配置字段；准确战斗语义待确认。 */
    "_areaIndexKey": z.string().describe("Act46SideOnEnemyInteractWithAvalancheAreaAction 的 `areaIndexKey` 配置字段；准确战斗语义待确认。"),
    /** Act46SideOnEnemyInteractWithAvalancheAreaAction 的 `isEnter` 配置字段；准确战斗语义待确认。 */
    "_isEnter": z.boolean().describe("Act46SideOnEnemyInteractWithAvalancheAreaAction 的 `isEnter` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideOnEnemyInteractWithAvalancheArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideOnEnemyInteractWithAvalancheAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideRebuildNpcRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideRebuildNpcRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideRebuildNpcRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideRebuildNpcRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideRebuildNpcRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideSwitchAreaAnimatorState, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideSwitchAreaAnimatorStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideSwitchAreaAnimatorState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act46SideSwitchAreaAnimatorStateAction 的 `state` 配置字段；准确战斗语义待确认。 */
    "_state": z.boolean().describe("Act46SideSwitchAreaAnimatorStateAction 的 `state` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideSwitchAreaAnimatorState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideSwitchAreaAnimatorStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideTriggerAvalanche, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideTriggerAvalancheActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideTriggerAvalanche, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideTriggerAvalanche, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideTriggerAvalancheAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act47SideAddForceToBalloon, Assembly-CSharp 的严格 Action 数据。
 */
export const Act47SideAddForceToBalloonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act47SideAddForceToBalloon, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act47SideAddForceToBalloonAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.number().describe("Act47SideAddForceToBalloonAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** Act47SideAddForceToBalloonAction 的 `forceKey` 配置字段；准确战斗语义待确认。 */
    "_forceKey": z.string().describe("Act47SideAddForceToBalloonAction 的 `forceKey` 配置字段；准确战斗语义待确认。"),
    /** Act47SideAddForceToBalloonAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
    "_isMinus": z.boolean().describe("Act47SideAddForceToBalloonAction 的 `isMinus` 配置字段；准确战斗语义待确认。"),
    /** Act47SideAddForceToBalloonAction 的 `isUpForce` 配置字段；准确战斗语义待确认。 */
    "_isUpForce": z.boolean().describe("Act47SideAddForceToBalloonAction 的 `isUpForce` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act47SideAddForceToBalloonAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。 */
    "_tileKeyCol": z.string().describe("Act47SideAddForceToBalloonAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。"),
    /** Act47SideAddForceToBalloonAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。 */
    "_tileKeyRow": z.string().describe("Act47SideAddForceToBalloonAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。"),
    /** Act47SideAddForceToBalloonAction 的 `updateOldTileVal` 配置字段；准确战斗语义待确认。 */
    "_updateOldTileVal": z.boolean().describe("Act47SideAddForceToBalloonAction 的 `updateOldTileVal` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act47SideAddForceToBalloon, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act47SideAddForceToBalloonAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act47SideCheckCharacterDeathByMove, Assembly-CSharp 的严格 Action 数据。
 */
export const Act47SideCheckCharacterDeathByMoveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act47SideCheckCharacterDeathByMove, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act47SideCheckCharacterDeathByMove, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act47SideCheckCharacterDeathByMoveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act47SideCheckTileIsFloating, Assembly-CSharp 的严格 Action 数据。
 */
export const Act47SideCheckTileIsFloatingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act47SideCheckTileIsFloating, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act47SideCheckTileIsFloatingAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。 */
    "_tileKeyCol": z.string().describe("Act47SideCheckTileIsFloatingAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。"),
    /** Act47SideCheckTileIsFloatingAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。 */
    "_tileKeyRow": z.string().describe("Act47SideCheckTileIsFloatingAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act47SideCheckTileIsFloating, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act47SideCheckTileIsFloatingAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA06Schema = z
  .discriminatedUnion("$type", [Act46SideBanAreaSkillActionSchema, Act46SideCreateAreaGridFxActionSchema, Act46SideOnBlockChangedActionSchema, Act46SideOnEnemyInteractWithAvalancheAreaActionSchema, Act46SideRebuildNpcRouteActionSchema, Act46SideSwitchAreaAnimatorStateActionSchema, Act46SideTriggerAvalancheActionSchema, Act47SideAddForceToBalloonActionSchema, Act47SideCheckCharacterDeathByMoveActionSchema, Act47SideCheckTileIsFloatingActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA06>;
