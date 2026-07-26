/**
 * buff_template_data 的 T 组 Action Zod Schema。
 */

import { z } from "zod";

import type { TriggerTokenSkillAction, TriggerTokenSkillWithinManhattanDistanceAction, TryActiveFeverIfFullAction, TryBlinkAction, TryRemoveRuntimeRouteAction, TryResetCharacterFaceIdleDirectionAction, BattleActionT03 } from "../../../../types/buff-template-data/actions/t/actions-t-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerTokenSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerTokenSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerTokenSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerTokenSkillAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
    "_hostType": z.literal("BUFF_OWNER").describe("TriggerTokenSkillAction 的 `hostType` 配置字段；准确战斗语义待确认。"),
    /** TriggerTokenSkillAction 的 `isAutoSkill` 配置字段；准确战斗语义待确认。 */
    "_isAutoSkill": z.boolean().describe("TriggerTokenSkillAction 的 `isAutoSkill` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerTokenSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerTokenSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerTokenSkillWithinManhattanDistance, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerTokenSkillWithinManhattanDistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerTokenSkillWithinManhattanDistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerTokenSkillWithinManhattanDistanceAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
    "_hostType": z.literal("BUFF_OWNER").describe("TriggerTokenSkillWithinManhattanDistanceAction 的 `hostType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerTokenSkillWithinManhattanDistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerTokenSkillWithinManhattanDistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TryActiveFeverIfFull, Assembly-CSharp 的严格 Action 数据。
 */
export const TryActiveFeverIfFullActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TryActiveFeverIfFull, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TryActiveFeverIfFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
    "_feverKey": z.string().describe("TryActiveFeverIfFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TryActiveFeverIfFull, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TryActiveFeverIfFullAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TryBlink, Assembly-CSharp 的严格 Action 数据。
 */
export const TryBlinkActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TryBlink, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TryBlinkAction 的 `onlyBlinkWhenFtbStop` 配置字段；准确战斗语义待确认。 */
    "_onlyBlinkWhenFtbStop": z.boolean().describe("TryBlinkAction 的 `onlyBlinkWhenFtbStop` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TryBlink, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TryBlinkAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TryRemoveRuntimeRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const TryRemoveRuntimeRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TryRemoveRuntimeRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TryRemoveRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("TryRemoveRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TryRemoveRuntimeRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TryRemoveRuntimeRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TryResetCharacterFaceIdleDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const TryResetCharacterFaceIdleDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TryResetCharacterFaceIdleDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TryResetCharacterFaceIdleDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("TryResetCharacterFaceIdleDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TryResetCharacterFaceIdleDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TryResetCharacterFaceIdleDirectionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionT03Schema = z
  .discriminatedUnion("$type", [TriggerTokenSkillActionSchema, TriggerTokenSkillWithinManhattanDistanceActionSchema, TryActiveFeverIfFullActionSchema, TryBlinkActionSchema, TryRemoveRuntimeRouteActionSchema, TryResetCharacterFaceIdleDirectionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionT03>;
