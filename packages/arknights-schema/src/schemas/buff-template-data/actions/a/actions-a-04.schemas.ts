/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act38SideCheckFunLevelLostAction, Act38SideFilterFireworkConditionAction, Act38SideLogKilledAction, Act38SideTryGetRouteAndCacheOriginAction, Act42SideShownMapHiddenAreaAction, Act43SideCheckIsCharacterShootingAction, Act43SideFaceToLOrRViaShootingAreaAction, Act43SideIsInShootingAreaAction, Act43SideOnBlockChangedAction, Act43SideOnEnemyInteractWithShootingAreaAction, BattleActionA04 } from "../../../../types/buff-template-data/actions/a/actions-a-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act38SideCheckFunLevelLost, Assembly-CSharp 的严格 Action 数据。
 */
export const Act38SideCheckFunLevelLostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act38SideCheckFunLevelLost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act38SideCheckFunLevelLostAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act38SideCheckFunLevelLostAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act38SideCheckFunLevelLost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act38SideCheckFunLevelLostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act38SideFilterFireworkCondition, Assembly-CSharp 的严格 Action 数据。
 */
export const Act38SideFilterFireworkConditionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act38SideFilterFireworkCondition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act38SideFilterFireworkConditionAction 的 `checkLevel` 配置字段；准确战斗语义待确认。 */
    "_checkLevel": z.boolean().describe("Act38SideFilterFireworkConditionAction 的 `checkLevel` 配置字段；准确战斗语义待确认。"),
    /** Act38SideFilterFireworkConditionAction 的 `checkType` 配置字段；准确战斗语义待确认。 */
    "_checkType": z.boolean().describe("Act38SideFilterFireworkConditionAction 的 `checkType` 配置字段；准确战斗语义待确认。"),
    /** Act38SideFilterFireworkConditionAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act38SideFilterFireworkConditionAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act38SideFilterFireworkConditionAction 的 `fireworkLevel` 配置字段；准确战斗语义待确认。 */
    "_fireworkLevel": z.number().describe("Act38SideFilterFireworkConditionAction 的 `fireworkLevel` 配置字段；准确战斗语义待确认。"),
    /** Act38SideFilterFireworkConditionAction 的 `fireworkType` 配置字段；准确战斗语义待确认。 */
    "_fireworkType": z.enum(["BLUE","GREEN","RED","YELLOW"]).describe("Act38SideFilterFireworkConditionAction 的 `fireworkType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act38SideFilterFireworkCondition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act38SideFilterFireworkConditionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act38SideLogKilled, Assembly-CSharp 的严格 Action 数据。
 */
export const Act38SideLogKilledActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act38SideLogKilled, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act38SideLogKilledAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act38SideLogKilledAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act38SideLogKilledAction 的 `isKilledByBoss` 配置字段；准确战斗语义待确认。 */
    "_isKilledByBoss": z.boolean().describe("Act38SideLogKilledAction 的 `isKilledByBoss` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act38SideLogKilled, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act38SideLogKilledAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act38SideTryGetRouteAndCacheOrigin, Assembly-CSharp 的严格 Action 数据。
 */
export const Act38SideTryGetRouteAndCacheOriginActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act38SideTryGetRouteAndCacheOrigin, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act38SideTryGetRouteAndCacheOriginAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act38SideTryGetRouteAndCacheOriginAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act38SideTryGetRouteAndCacheOriginAction 的 `restoreCache` 配置字段；准确战斗语义待确认。 */
    "_restoreCache": z.boolean().describe("Act38SideTryGetRouteAndCacheOriginAction 的 `restoreCache` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act38SideTryGetRouteAndCacheOrigin, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act38SideTryGetRouteAndCacheOriginAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act42SideShownMapHiddenArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act42SideShownMapHiddenAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act42SideShownMapHiddenArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act42SideShownMapHiddenAreaAction 的 `areaIndexKey` 配置字段；准确战斗语义待确认。 */
    "_areaIndexKey": z.string().describe("Act42SideShownMapHiddenAreaAction 的 `areaIndexKey` 配置字段；准确战斗语义待确认。"),
    /** Act42SideShownMapHiddenAreaAction 的 `areaPreStrKey` 配置字段；准确战斗语义待确认。 */
    "_areaPreStrKey": z.string().describe("Act42SideShownMapHiddenAreaAction 的 `areaPreStrKey` 配置字段；准确战斗语义待确认。"),
    /** Act42SideShownMapHiddenAreaAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
    "_envSysKey": z.string().describe("Act42SideShownMapHiddenAreaAction 的 `envSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act42SideShownMapHiddenArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act42SideShownMapHiddenAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act43SideCheckIsCharacterShooting, Assembly-CSharp 的严格 Action 数据。
 */
export const Act43SideCheckIsCharacterShootingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act43SideCheckIsCharacterShooting, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act43SideCheckIsCharacterShooting, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act43SideCheckIsCharacterShootingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act43SideFaceToLOrRViaShootingArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act43SideFaceToLOrRViaShootingAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act43SideFaceToLOrRViaShootingArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act43SideFaceToLOrRViaShootingAreaAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("Act43SideFaceToLOrRViaShootingAreaAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act43SideFaceToLOrRViaShootingArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act43SideFaceToLOrRViaShootingAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act43SideIsInShootingArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act43SideIsInShootingAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act43SideIsInShootingArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act43SideIsInShootingArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act43SideIsInShootingAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act43SideOnBlockChanged, Assembly-CSharp 的严格 Action 数据。
 */
export const Act43SideOnBlockChangedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act43SideOnBlockChanged, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act43SideOnBlockChangedAction 的 `isActivate` 配置字段；准确战斗语义待确认。 */
    "_isActivate": z.boolean().describe("Act43SideOnBlockChangedAction 的 `isActivate` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act43SideOnBlockChanged, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act43SideOnBlockChangedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act43SideOnEnemyInteractWithShootingArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act43SideOnEnemyInteractWithShootingAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act43SideOnEnemyInteractWithShootingArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act43SideOnEnemyInteractWithShootingAreaAction 的 `isEnter` 配置字段；准确战斗语义待确认。 */
    "_isEnter": z.boolean().describe("Act43SideOnEnemyInteractWithShootingAreaAction 的 `isEnter` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act43SideOnEnemyInteractWithShootingArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act43SideOnEnemyInteractWithShootingAreaAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA04Schema = z
  .discriminatedUnion("$type", [Act38SideCheckFunLevelLostActionSchema, Act38SideFilterFireworkConditionActionSchema, Act38SideLogKilledActionSchema, Act38SideTryGetRouteAndCacheOriginActionSchema, Act42SideShownMapHiddenAreaActionSchema, Act43SideCheckIsCharacterShootingActionSchema, Act43SideFaceToLOrRViaShootingAreaActionSchema, Act43SideIsInShootingAreaActionSchema, Act43SideOnBlockChangedActionSchema, Act43SideOnEnemyInteractWithShootingAreaActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA04>;
