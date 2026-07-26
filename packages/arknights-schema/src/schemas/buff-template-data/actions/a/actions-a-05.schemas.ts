/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act43SideUpdateShootingAreaAction, Act44SideAssignRushTimeProgressToBlackboardAction, Act44SideEndRushTimeByBossAction, Act44SideGainGradeAction, Act44SideIsInRushTimeAction, Act45sideCheckUnitOnLightAction, Act46SideAddAreaSPAction, Act46SideAreaExpandOrResetAction, Act46SideAssignAvalancheAreaIndexToBBAction, Act46SideAvalancheForCharacterFromOutsideAction, BattleActionA05 } from "../../../../types/buff-template-data/actions/a/actions-a-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act43SideUpdateShootingArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act43SideUpdateShootingAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act43SideUpdateShootingArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act43SideUpdateShootingAreaAction 的 `isShooting` 配置字段；准确战斗语义待确认。 */
    "_isShooting": z.boolean().describe("Act43SideUpdateShootingAreaAction 的 `isShooting` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act43SideUpdateShootingArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act43SideUpdateShootingAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act44SideAssignRushTimeProgressToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const Act44SideAssignRushTimeProgressToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act44SideAssignRushTimeProgressToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Act44SideAssignRushTimeProgressToBlackboardAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
    "_envSysKey": z.string().describe("Act44SideAssignRushTimeProgressToBlackboardAction 的 `envSysKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act44SideAssignRushTimeProgressToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act44SideAssignRushTimeProgressToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act44SideEndRushTimeByBoss, Assembly-CSharp 的严格 Action 数据。
 */
export const Act44SideEndRushTimeByBossActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act44SideEndRushTimeByBoss, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act44SideEndRushTimeByBossAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
    "_envSysKey": z.string().describe("Act44SideEndRushTimeByBossAction 的 `envSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act44SideEndRushTimeByBoss, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act44SideEndRushTimeByBossAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act44SideGainGrade, Assembly-CSharp 的严格 Action 数据。
 */
export const Act44SideGainGradeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act44SideGainGrade, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act44SideGainGradeAction 的 `hitCountKey` 配置字段；准确战斗语义待确认。 */
    "_hitCountKey": z.string().describe("Act44SideGainGradeAction 的 `hitCountKey` 配置字段；准确战斗语义待确认。"),
    /** Act44SideGainGradeAction 的 `isAllyGainGrade` 配置字段；准确战斗语义待确认。 */
    "_isAllyGainGrade": z.boolean().describe("Act44SideGainGradeAction 的 `isAllyGainGrade` 配置字段；准确战斗语义待确认。"),
    /** Act44SideGainGradeAction 的 `isCollideGainGrade` 配置字段；准确战斗语义待确认。 */
    "_isCollideGainGrade": z.boolean().describe("Act44SideGainGradeAction 的 `isCollideGainGrade` 配置字段；准确战斗语义待确认。"),
    /** Act44SideGainGradeAction 的 `isEnemyGainGrade` 配置字段；准确战斗语义待确认。 */
    "_isEnemyGainGrade": z.boolean().describe("Act44SideGainGradeAction 的 `isEnemyGainGrade` 配置字段；准确战斗语义待确认。"),
    /** Act44SideGainGradeAction 的 `isFallDownGainGrade` 配置字段；准确战斗语义待确认。 */
    "_isFallDownGainGrade": z.boolean().describe("Act44SideGainGradeAction 的 `isFallDownGainGrade` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act44SideGainGrade, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act44SideGainGradeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act44SideIsInRushTime, Assembly-CSharp 的严格 Action 数据。
 */
export const Act44SideIsInRushTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act44SideIsInRushTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act44SideIsInRushTimeAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
    "_envSysKey": z.string().describe("Act44SideIsInRushTimeAction 的 `envSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act44SideIsInRushTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act44SideIsInRushTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act45sideCheckUnitOnLight, Assembly-CSharp 的严格 Action 数据。
 */
export const Act45sideCheckUnitOnLightActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act45sideCheckUnitOnLight, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act45sideCheckUnitOnLightAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Act45sideCheckUnitOnLightAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act45sideCheckUnitOnLight, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act45sideCheckUnitOnLightAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAddAreaSP, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideAddAreaSPActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideAddAreaSP, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act46SideAddAreaSPAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("Act46SideAddAreaSPAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** Act46SideAddAreaSPAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("Act46SideAddAreaSPAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAddAreaSP, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideAddAreaSPAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAreaExpandOrReset, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideAreaExpandOrResetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideAreaExpandOrReset, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act46SideAreaExpandOrResetAction 的 `expand` 配置字段；准确战斗语义待确认。 */
    "_expand": z.boolean().describe("Act46SideAreaExpandOrResetAction 的 `expand` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAreaExpandOrReset, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideAreaExpandOrResetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAssignAvalancheAreaIndexToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideAssignAvalancheAreaIndexToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideAssignAvalancheAreaIndexToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAssignAvalancheAreaIndexToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideAssignAvalancheAreaIndexToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAvalancheForCharacterFromOutside, Assembly-CSharp 的严格 Action 数据。
 */
export const Act46SideAvalancheForCharacterFromOutsideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act46SideAvalancheForCharacterFromOutside, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act46SideAvalancheForCharacterFromOutside, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act46SideAvalancheForCharacterFromOutsideAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA05Schema = z
  .discriminatedUnion("$type", [Act43SideUpdateShootingAreaActionSchema, Act44SideAssignRushTimeProgressToBlackboardActionSchema, Act44SideEndRushTimeByBossActionSchema, Act44SideGainGradeActionSchema, Act44SideIsInRushTimeActionSchema, Act45sideCheckUnitOnLightActionSchema, Act46SideAddAreaSPActionSchema, Act46SideAreaExpandOrResetActionSchema, Act46SideAssignAvalancheAreaIndexToBBActionSchema, Act46SideAvalancheForCharacterFromOutsideActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA05>;
