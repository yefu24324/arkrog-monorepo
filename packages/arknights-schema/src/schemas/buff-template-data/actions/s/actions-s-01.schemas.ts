/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxAssignCharacterCountWithFoodToBlackboardAction, SandboxAssignDayCountToBbAction, SandboxCatchInsectAction, SandboxCheckCurrentModeAction, SandboxCheckEnemyCanTraceTargetAction, SandboxCheckHasFoodBuffAction, SandboxCheckHasResourceAction, SandboxCheckSpecialUniEnemyAction, SandboxCollectPackedResAction, SandboxDisableClickCharacterInfoAction, BattleActionS01 } from "../../../../types/buff-template-data/actions/s/actions-s-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxAssignCharacterCountWithFoodToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxAssignCharacterCountWithFoodToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxAssignCharacterCountWithFoodToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxAssignCharacterCountWithFoodToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxAssignCharacterCountWithFoodToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxAssignDayCountToBb, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxAssignDayCountToBbActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxAssignDayCountToBb, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxAssignDayCountToBbAction 的 `assignKey` 配置字段；准确战斗语义待确认。 */
    "_assignKey": z.string().describe("SandboxAssignDayCountToBbAction 的 `assignKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxAssignDayCountToBbAction 的 `isMainMap` 配置字段；准确战斗语义待确认。 */
    "_isMainMap": z.boolean().describe("SandboxAssignDayCountToBbAction 的 `isMainMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxAssignDayCountToBb, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxAssignDayCountToBbAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCatchInsect, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCatchInsectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCatchInsect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxCatchInsectAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxCatchInsectAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCatchInsect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCatchInsectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckCurrentMode, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCheckCurrentModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCheckCurrentMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxCheckCurrentModeAction 的 `checkBuildMode` 配置字段；准确战斗语义待确认。 */
    "_checkBuildMode": z.boolean().describe("SandboxCheckCurrentModeAction 的 `checkBuildMode` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckCurrentModeAction 的 `checkNodeType` 配置字段；准确战斗语义待确认。 */
    "_checkNodeType": z.boolean().describe("SandboxCheckCurrentModeAction 的 `checkNodeType` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckCurrentModeAction 的 `checkSeasonType` 配置字段；准确战斗语义待确认。 */
    "_checkSeasonType": z.boolean().describe("SandboxCheckCurrentModeAction 的 `checkSeasonType` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckCurrentModeAction 的 `checkWeatherType` 配置字段；准确战斗语义待确认。 */
    "_checkWeatherType": z.boolean().describe("SandboxCheckCurrentModeAction 的 `checkWeatherType` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckCurrentModeAction 的 `sandboxNodeTypeV2` 配置字段；准确战斗语义待确认。 */
    "_sandboxNodeTypeV2": z.string().describe("SandboxCheckCurrentModeAction 的 `sandboxNodeTypeV2` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckCurrentModeAction 的 `sandboxSeasonTypeV2` 配置字段；准确战斗语义待确认。 */
    "_sandboxSeasonTypeV2": z.string().describe("SandboxCheckCurrentModeAction 的 `sandboxSeasonTypeV2` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckCurrentModeAction 的 `sandboxWeatherType` 配置字段；准确战斗语义待确认。 */
    "_sandboxWeatherType": z.union([
                                 z.null(),
                                 z.enum(["weather_big_sandstorm","weather_heat","weather_heat_wave","weather_sandstorm","weather_thunder","weather_thunder_storm"]),
                               ]).describe("SandboxCheckCurrentModeAction 的 `sandboxWeatherType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckCurrentMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCheckCurrentModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckEnemyCanTraceTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCheckEnemyCanTraceTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCheckEnemyCanTraceTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxCheckEnemyCanTraceTargetAction 的 `checkHasTraceTarget` 配置字段；准确战斗语义待确认。 */
    "_checkHasTraceTarget": z.boolean().describe("SandboxCheckEnemyCanTraceTargetAction 的 `checkHasTraceTarget` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckEnemyCanTraceTargetAction 的 `checkHasTraceTargetNow` 配置字段；准确战斗语义待确认。 */
    "_checkHasTraceTargetNow": z.boolean().describe("SandboxCheckEnemyCanTraceTargetAction 的 `checkHasTraceTargetNow` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckEnemyCanTraceTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCheckEnemyCanTraceTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckHasFoodBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCheckHasFoodBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCheckHasFoodBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxCheckHasFoodBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxCheckHasFoodBuffAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckHasFoodBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCheckHasFoodBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckHasResource, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCheckHasResourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCheckHasResource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxCheckHasResourceAction 的 `checkFull` 配置字段；准确战斗语义待确认。 */
    "_checkFull": z.boolean().describe("SandboxCheckHasResourceAction 的 `checkFull` 配置字段；准确战斗语义待确认。"),
    /** SandboxCheckHasResourceAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("SandboxCheckHasResourceAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckHasResource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCheckHasResourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckSpecialUniEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCheckSpecialUniEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCheckSpecialUniEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCheckSpecialUniEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCheckSpecialUniEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxCollectPackedRes, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxCollectPackedResActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxCollectPackedRes, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxCollectPackedResAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxCollectPackedResAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxCollectPackedRes, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxCollectPackedResAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxDisableClickCharacterInfo, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxDisableClickCharacterInfoActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxDisableClickCharacterInfo, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxDisableClickCharacterInfoAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
    "_enabled": z.boolean().describe("SandboxDisableClickCharacterInfoAction 的 `enabled` 配置字段；准确战斗语义待确认。"),
    /** SandboxDisableClickCharacterInfoAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("SandboxDisableClickCharacterInfoAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxDisableClickCharacterInfo, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxDisableClickCharacterInfoAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS01Schema = z
  .discriminatedUnion("$type", [SandboxAssignCharacterCountWithFoodToBlackboardActionSchema, SandboxAssignDayCountToBbActionSchema, SandboxCatchInsectActionSchema, SandboxCheckCurrentModeActionSchema, SandboxCheckEnemyCanTraceTargetActionSchema, SandboxCheckHasFoodBuffActionSchema, SandboxCheckHasResourceActionSchema, SandboxCheckSpecialUniEnemyActionSchema, SandboxCollectPackedResActionSchema, SandboxDisableClickCharacterInfoActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS01>;
