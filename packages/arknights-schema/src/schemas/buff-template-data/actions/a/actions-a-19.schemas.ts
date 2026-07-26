/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignCharacterSharedBBToBlackboardAction, AssignCharacterSkillBlackboardToBBAction, AssignCharacterSkillRangeToBlackboardAction, AssignCharacterSkillSpCostToBBAction, AssignCheckPointIndexToBBAction, AssignCurrentBlockNumToBBAction, AssignCurrentBlockVolumnToBBAction, AssignCurrentModeToBlackboardAction, AssignCurSpToBBAction, AssignDamageValueToBlackboardAction, BattleActionA19 } from "../../../../types/buff-template-data/actions/a/actions-a-19.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSharedBBToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCharacterSharedBBToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCharacterSharedBBToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignCharacterSharedBBToBlackboardAction 的 `character` 配置字段；准确战斗语义待确认。 */
    "_character": z.string().describe("AssignCharacterSharedBBToBlackboardAction 的 `character` 配置字段；准确战斗语义待确认。"),
    /** AssignCharacterSharedBBToBlackboardAction 的 `sourceBBKey` 配置字段；准确战斗语义待确认。 */
    "_sourceBBKey": z.string().describe("AssignCharacterSharedBBToBlackboardAction 的 `sourceBBKey` 配置字段；准确战斗语义待确认。"),
    /** AssignCharacterSharedBBToBlackboardAction 的 `targetBBKey` 配置字段；准确战斗语义待确认。 */
    "_targetBBKey": z.string().describe("AssignCharacterSharedBBToBlackboardAction 的 `targetBBKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSharedBBToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCharacterSharedBBToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSkillBlackboardToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCharacterSkillBlackboardToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCharacterSkillBlackboardToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignCharacterSkillBlackboardToBBAction 的 `sourceBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_sourceBlackboardKey": z.string().describe("AssignCharacterSkillBlackboardToBBAction 的 `sourceBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignCharacterSkillBlackboardToBBAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_targetBlackboardKey": z.string().describe("AssignCharacterSkillBlackboardToBBAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSkillBlackboardToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCharacterSkillBlackboardToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSkillRangeToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCharacterSkillRangeToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCharacterSkillRangeToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSkillRangeToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCharacterSkillRangeToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSkillSpCostToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCharacterSkillSpCostToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCharacterSkillSpCostToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterSkillSpCostToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCharacterSkillSpCostToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCheckPointIndexToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCheckPointIndexToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCheckPointIndexToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignCheckPointIndexToBBAction 的 `indexBbKey` 配置字段；准确战斗语义待确认。 */
    "_indexBbKey": z.string().describe("AssignCheckPointIndexToBBAction 的 `indexBbKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCheckPointIndexToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCheckPointIndexToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCurrentBlockNumToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCurrentBlockNumToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCurrentBlockNumToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCurrentBlockNumToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCurrentBlockNumToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCurrentBlockVolumnToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCurrentBlockVolumnToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCurrentBlockVolumnToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCurrentBlockVolumnToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCurrentBlockVolumnToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCurrentModeToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCurrentModeToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCurrentModeToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignCurrentModeToBlackboardAction 的 `blackbaordKey` 配置字段；准确战斗语义待确认。 */
    "_blackbaordKey": z.string().describe("AssignCurrentModeToBlackboardAction 的 `blackbaordKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCurrentModeToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCurrentModeToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCurSpToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCurSpToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCurSpToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignCurSpToBBAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("AssignCurSpToBBAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AssignCurSpToBBAction 的 `useProgressLayer` 配置字段；准确战斗语义待确认。 */
    "_useProgressLayer": z.boolean().describe("AssignCurSpToBBAction 的 `useProgressLayer` 配置字段；准确战斗语义待确认。"),
    /** AssignCurSpToBBAction 的 `useProgressToFull` 配置字段；准确战斗语义待确认。 */
    "_useProgressToFull": z.boolean().describe("AssignCurSpToBBAction 的 `useProgressToFull` 配置字段；准确战斗语义待确认。"),
    /** AssignCurSpToBBAction 的 `useProgressToReady` 配置字段；准确战斗语义待确认。 */
    "_useProgressToReady": z.boolean().describe("AssignCurSpToBBAction 的 `useProgressToReady` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCurSpToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCurSpToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignDamageValueToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignDamageValueToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignDamageValueToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignDamageValueToBlackboardAction 的 `assignRealDelta` 配置字段；准确战斗语义待确认。 */
    "_assignRealDelta": z.boolean().describe("AssignDamageValueToBlackboardAction 的 `assignRealDelta` 配置字段；准确战斗语义待确认。"),
    /** AssignDamageValueToBlackboardAction 的 `assignValueWithoutCalculate` 配置字段；准确战斗语义待确认。 */
    "_assignValueWithoutCalculate": z.boolean().describe("AssignDamageValueToBlackboardAction 的 `assignValueWithoutCalculate` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["HEAL","MAGICAL","NONE","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** AssignDamageValueToBlackboardAction 的 `owner` 配置字段；准确战斗语义待确认。 */
    "_owner": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET"]).describe("AssignDamageValueToBlackboardAction 的 `owner` 配置字段；准确战斗语义待确认。"),
    /** AssignDamageValueToBlackboardAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
    "_scaleKey": z.string().describe("AssignDamageValueToBlackboardAction 的 `scaleKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignDamageValueToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignDamageValueToBlackboardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA19Schema = z
  .discriminatedUnion("$type", [AssignCharacterSharedBBToBlackboardActionSchema, AssignCharacterSkillBlackboardToBBActionSchema, AssignCharacterSkillRangeToBlackboardActionSchema, AssignCharacterSkillSpCostToBBActionSchema, AssignCheckPointIndexToBBActionSchema, AssignCurrentBlockNumToBBActionSchema, AssignCurrentBlockVolumnToBBActionSchema, AssignCurrentModeToBlackboardActionSchema, AssignCurSpToBBActionSchema, AssignDamageValueToBlackboardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA19>;
