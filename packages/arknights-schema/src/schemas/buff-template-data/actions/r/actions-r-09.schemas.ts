/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RollRogueDiceAction, RoundBuffBlackboardAction, RunActionsToWdslmAbilityTargetAction, BattleActionR09 } from "../../../../types/buff-template-data/actions/r/actions-r-09.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RollRogueDice, Assembly-CSharp 的严格 Action 数据。
 */
export const RollRogueDiceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RollRogueDice, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RollRogueDiceAction 的 `maxVal` 配置字段；准确战斗语义待确认。 */
    "_maxVal": z.number().describe("RollRogueDiceAction 的 `maxVal` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RollRogueDice, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RollRogueDiceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoundBuffBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const RoundBuffBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoundBuffBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** RoundBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("RoundBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** RoundBuffBlackboardAction 的 `roundType` 配置字段；准确战斗语义待确认。 */
    "_roundType": z.enum(["Ceil","Floor","Round"]).describe("RoundBuffBlackboardAction 的 `roundType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoundBuffBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoundBuffBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RunActionsToWdslmAbilityTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const RunActionsToWdslmAbilityTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RunActionsToWdslmAbilityTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RunActionsToWdslmAbilityTargetAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("RunActionsToWdslmAbilityTargetAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** RunActionsToWdslmAbilityTargetAction 的 `actionsToTarget` 配置字段；准确战斗语义待确认。 */
    "_actionsToTarget": z.union([
                              z.null(),
                              z.array(BattleActionReferenceSchema),
                            ]).describe("RunActionsToWdslmAbilityTargetAction 的 `actionsToTarget` 配置字段；准确战斗语义待确认。"),
    /** RunActionsToWdslmAbilityTargetAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
    "_actionTargetType": z.enum(["HOST","SELF_WITH_HOST_AS_SOURCE","STANDS","STANDS_EXCEPT_SELF"]).describe("RunActionsToWdslmAbilityTargetAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RunActionsToWdslmAbilityTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RunActionsToWdslmAbilityTargetAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR09Schema = z
  .discriminatedUnion("$type", [RollRogueDiceActionSchema, RoundBuffBlackboardActionSchema, RunActionsToWdslmAbilityTargetActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR09>;
