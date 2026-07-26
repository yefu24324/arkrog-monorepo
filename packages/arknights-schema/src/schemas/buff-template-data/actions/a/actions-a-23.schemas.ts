/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignModifierValueIntoBlackboardAction, AssignNearestReachableTileToBBAction, AssignNearestReachableTileWithoutCharOnPathAction, AssignNodeCountToBbAction, AssignOverflowDamageToBlackboardAction, AssignPlayerSideCostIntoBlackboardAction, AssignPlayTimeToBBAction, AssignProfessionCntToBlackboardAction, AssignProjectileGridPosToBBAction, AssignRandomBBKeyToBBAction, BattleActionA23 } from "../../../../types/buff-template-data/actions/a/actions-a-23.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignModifierValueIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignModifierValueIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignModifierValueIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignModifierValueIntoBlackboardAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
    "_filterModifierCancelled": z.boolean().describe("AssignModifierValueIntoBlackboardAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignModifierValueIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignModifierValueIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignNearestReachableTileToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignNearestReachableTileToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignNearestReachableTileToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignNearestReachableTileToBBAction 的 `checkOnSameTile` 配置字段；准确战斗语义待确认。 */
    "_checkOnSameTile": z.boolean().describe("AssignNearestReachableTileToBBAction 的 `checkOnSameTile` 配置字段；准确战斗语义待确认。"),
    /** AssignNearestReachableTileToBBAction 的 `excludedTileKey` 配置字段；准确战斗语义待确认。 */
    "_excludedTileKey": z.string().describe("AssignNearestReachableTileToBBAction 的 `excludedTileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignNearestReachableTileToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignNearestReachableTileToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignNearestReachableTileWithoutCharOnPath, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignNearestReachableTileWithoutCharOnPathActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignNearestReachableTileWithoutCharOnPath, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignNearestReachableTileWithoutCharOnPathAction 的 `buildableMask` 配置字段；准确战斗语义待确认。 */
    "_buildableMask": z.literal("NIGHT").describe("AssignNearestReachableTileWithoutCharOnPathAction 的 `buildableMask` 配置字段；准确战斗语义待确认。"),
    /** AssignNearestReachableTileWithoutCharOnPathAction 的 `filterBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_filterBuildableMask": z.boolean().describe("AssignNearestReachableTileWithoutCharOnPathAction 的 `filterBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignNearestReachableTileWithoutCharOnPath, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignNearestReachableTileWithoutCharOnPathAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignNodeCountToBb, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignNodeCountToBbActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignNodeCountToBb, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignNodeCountToBbAction 的 `assignKey` 配置字段；准确战斗语义待确认。 */
    "_assignKey": z.string().describe("AssignNodeCountToBbAction 的 `assignKey` 配置字段；准确战斗语义待确认。"),
    /** AssignNodeCountToBbAction 的 `isMainMap` 配置字段；准确战斗语义待确认。 */
    "_isMainMap": z.boolean().describe("AssignNodeCountToBbAction 的 `isMainMap` 配置字段；准确战斗语义待确认。"),
    /** AssignNodeCountToBbAction 的 `isNotChoosedState` 配置字段；准确战斗语义待确认。 */
    "_isNotChoosedState": z.boolean().describe("AssignNodeCountToBbAction 的 `isNotChoosedState` 配置字段；准确战斗语义待确认。"),
    /** AssignNodeCountToBbAction 的 `state` 配置字段；准确战斗语义待确认。 */
    "_state": z.string().describe("AssignNodeCountToBbAction 的 `state` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignNodeCountToBb, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignNodeCountToBbAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignOverflowDamageToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignOverflowDamageToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignOverflowDamageToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignOverflowDamageToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignOverflowDamageToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignOverflowDamageToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignOverflowDamageToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignPlayerSideCostIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignPlayerSideCostIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignPlayerSideCostIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignPlayerSideCostIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignPlayerSideCostIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignPlayTimeToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignPlayTimeToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignPlayTimeToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignPlayTimeToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignPlayTimeToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignProfessionCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignProfessionCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignProfessionCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignProfessionCntToBlackboardAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
    "_professionCategory": z.enum(["CASTER","MEDIC","TANK"]).describe("AssignProfessionCntToBlackboardAction 的 `professionCategory` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignProfessionCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignProfessionCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignProjectileGridPosToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignProjectileGridPosToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignProjectileGridPosToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignProjectileGridPosToBBAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("AssignProjectileGridPosToBBAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** AssignProjectileGridPosToBBAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("AssignProjectileGridPosToBBAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignProjectileGridPosToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignProjectileGridPosToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignRandomBBKeyToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignRandomBBKeyToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignRandomBBKeyToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignRandomBBKeyToBBAction 的 `maxValue` 配置字段；准确战斗语义待确认。 */
    "_maxValue": z.number().describe("AssignRandomBBKeyToBBAction 的 `maxValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignRandomBBKeyToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignRandomBBKeyToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA23Schema = z
  .discriminatedUnion("$type", [AssignModifierValueIntoBlackboardActionSchema, AssignNearestReachableTileToBBActionSchema, AssignNearestReachableTileWithoutCharOnPathActionSchema, AssignNodeCountToBbActionSchema, AssignOverflowDamageToBlackboardActionSchema, AssignPlayerSideCostIntoBlackboardActionSchema, AssignPlayTimeToBBActionSchema, AssignProfessionCntToBlackboardActionSchema, AssignProjectileGridPosToBBActionSchema, AssignRandomBBKeyToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA23>;
