/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckEntityEqualsAction, CheckEntityInAttackRangeAction, CheckEntitySuicideAction, CheckFaceDirectionAction, CheckFaceLOrRAction, CheckFilterTagAction, CheckFirewallDamageSourceAction, CheckFirstRallyPointModeAction, CheckGamePlayedTimeAction, CheckGlobalBuffExistByKeyAction, BattleActionC11 } from "../../../../types/buff-template-data/actions/c/actions-c-11.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEntityEquals, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEntityEqualsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEntityEquals, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEntityEqualsAction 的 `lhsType` 配置字段；准确战斗语义待确认。 */
    "_lhsType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("CheckEntityEqualsAction 的 `lhsType` 配置字段；准确战斗语义待确认。"),
    /** CheckEntityEqualsAction 的 `rhsType` 配置字段；准确战斗语义待确认。 */
    "_rhsType": z.enum(["BUFF_SOURCE","MODIFIER_SOURCE","PROJECTILE_SOURCE","SOURCE","TARGET"]).describe("CheckEntityEqualsAction 的 `rhsType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEntityEquals, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEntityEqualsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEntityInAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEntityInAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEntityInAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CheckEntityInAttackRangeAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。 */
    "_useSourceHost": z.boolean().describe("CheckEntityInAttackRangeAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEntityInAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEntityInAttackRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEntitySuicide, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEntitySuicideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEntitySuicide, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEntitySuicideAction 的 `entity` 配置字段；准确战斗语义待确认。 */
    "_entity": z.string().describe("CheckEntitySuicideAction 的 `entity` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEntitySuicide, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEntitySuicideAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckFaceDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckFaceDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckFaceDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckFaceDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("CheckFaceDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckFaceDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("CheckFaceDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckFaceDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckFaceDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckFaceLOrR, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckFaceLOrRActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckFaceLOrR, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckFaceLOrRAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("CheckFaceLOrRAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckFaceLOrRAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckFaceLOrRAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckFaceLOrR, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckFaceLOrRAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckFilterTag, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckFilterTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckFilterTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckFilterTagAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.string().describe("CheckFilterTagAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** CheckFilterTagAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
    "_filterTag": z.union([
                        z.null(),
                        z.string(),
                      ]).describe("CheckFilterTagAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["ABILITY_OWNER","BUFF_OWNER","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","PROJECTILE_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckFilterTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckFilterTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckFirewallDamageSource, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckFirewallDamageSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckFirewallDamageSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckFirewallDamageSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckFirewallDamageSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckFirstRallyPointMode, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckFirstRallyPointModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckFirstRallyPointMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckFirstRallyPointMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckFirstRallyPointModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckGamePlayedTime, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckGamePlayedTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckGamePlayedTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckGamePlayedTimeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","GT","LT"]).describe("CheckGamePlayedTimeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckGamePlayedTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckGamePlayedTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckGlobalBuffExistByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckGlobalBuffExistByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckGlobalBuffExistByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckGlobalBuffExistByKeyAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffKey": z.string().describe("CheckGlobalBuffExistByKeyAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckGlobalBuffExistByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckGlobalBuffExistByKeyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC11Schema = z
  .discriminatedUnion("$type", [CheckEntityEqualsActionSchema, CheckEntityInAttackRangeActionSchema, CheckEntitySuicideActionSchema, CheckFaceDirectionActionSchema, CheckFaceLOrRActionSchema, CheckFilterTagActionSchema, CheckFirewallDamageSourceActionSchema, CheckFirstRallyPointModeActionSchema, CheckGamePlayedTimeActionSchema, CheckGlobalBuffExistByKeyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC11>;
