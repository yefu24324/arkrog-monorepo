/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckAbnormalFlagAction, CheckAbnormalFlagsAction, CheckAbnormalImmuneAction, CheckAndBlockBuffByAbnormalFlagsAction, CheckBlockedAction, CheckBlockedPlayersideInCooperateAction, CheckBlockerContainsBuffAction, CheckBlockerGroupTagAction, CheckBlockModeAction, CheckBoatCollideAction, BattleActionC03 } from "../../../../types/buff-template-data/actions/c/actions-c-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAbnormalFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAbnormalFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckAbnormalFlagAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlag": z.enum(["CAMOUFLAGE","COLD","DISARMED","DISARMED_COMBAT","DOZE","ELEMENT_FREE_ALL","FEARED","FROZEN","HEAL_FREE","INVINCIBLE","INVISIBLE","LEVITATE","PALSY","PALSYING","SILENCED","SKILL_NOT_ACTIVATABLE","SP_RECOVER_STOPPED","STUNNED","UNDEADABLE","UNMOVABLE"]).describe("CheckAbnormalFlagAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
    /** CheckAbnormalFlagAction 的 `abnormalFlagKey` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlagKey": z.string().describe("CheckAbnormalFlagAction 的 `abnormalFlagKey` 配置字段；准确战斗语义待确认。"),
    /** CheckAbnormalFlagAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckAbnormalFlagAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","PROJECTILE_TRACETARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAbnormalFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalFlags, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAbnormalFlagsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAbnormalFlags, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlags": z.array(z.string()).describe("CheckAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalFlags, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAbnormalFlagsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalImmune, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAbnormalImmuneActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAbnormalImmune, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckAbnormalImmuneAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlag": z.enum(["DISARMED_COMBAT","FROZEN","INVISIBLE","LEVITATE","PALSY","STUNNED","UNMOVABLE"]).describe("CheckAbnormalImmuneAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
    /** CheckAbnormalImmuneAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckAbnormalImmuneAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalImmune, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAbnormalImmuneAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAndBlockBuffByAbnormalFlags, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAndBlockBuffByAbnormalFlagsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAndBlockBuffByAbnormalFlags, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckAndBlockBuffByAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlags": z.array(z.string()).describe("CheckAndBlockBuffByAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAndBlockBuffByAbnormalFlags, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAndBlockBuffByAbnormalFlagsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBlocked, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBlockedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBlocked, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBlockedAction 的 `checkBlockedBySource` 配置字段；准确战斗语义待确认。 */
    "_checkBlockedBySource": z.boolean().describe("CheckBlockedAction 的 `checkBlockedBySource` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockedAction 的 `checkBlockedBySourceToken` 配置字段；准确战斗语义待确认。 */
    "_checkBlockedBySourceToken": z.boolean().describe("CheckBlockedAction 的 `checkBlockedBySourceToken` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockedAction 的 `checkBlockedCount` 配置字段；准确战斗语义待确认。 */
    "_checkBlockedCount": z.boolean().describe("CheckBlockedAction 的 `checkBlockedCount` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBlocked, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBlockedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockedPlayersideInCooperate, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBlockedPlayersideInCooperateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBlockedPlayersideInCooperate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBlockedPlayersideInCooperateAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("CheckBlockedPlayersideInCooperateAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockedPlayersideInCooperateAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("CheckBlockedPlayersideInCooperateAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockedPlayersideInCooperate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBlockedPlayersideInCooperateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockerContainsBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBlockerContainsBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBlockerContainsBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBlockerContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("CheckBlockerContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockerContainsBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckBlockerContainsBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockerContainsBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("CheckBlockerContainsBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockerContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。 */
    "_isAND": z.boolean().describe("CheckBlockerContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。"),
    /** CheckBlockerContainsBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("CheckBlockerContainsBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockerContainsBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBlockerContainsBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockerGroupTag, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBlockerGroupTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBlockerGroupTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBlockerGroupTagAction 的 `tag` 配置字段；准确战斗语义待确认。 */
    "_tag": z.string().describe("CheckBlockerGroupTagAction 的 `tag` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockerGroupTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBlockerGroupTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockMode, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBlockModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBlockMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBlockModeAction 的 `blockMode` 配置字段；准确战斗语义待确认。 */
    "_blockMode": z.enum(["FLY","WALK"]).describe("CheckBlockModeAction 的 `blockMode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBlockMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBlockModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBoatCollide, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBoatCollideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBoatCollide, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBoatCollideAction 的 `calculateCollidePosToBB` 配置字段；准确战斗语义待确认。 */
    "_calculateCollidePosToBB": z.boolean().describe("CheckBoatCollideAction 的 `calculateCollidePosToBB` 配置字段；准确战斗语义待确认。"),
    /** CheckBoatCollideAction 的 `radius` 配置字段；准确战斗语义待确认。 */
    "_radius": z.number().describe("CheckBoatCollideAction 的 `radius` 配置字段；准确战斗语义待确认。"),
    /** CheckBoatCollideAction 的 `setCollideTileToBB` 配置字段；准确战斗语义待确认。 */
    "_setCollideTileToBB": z.boolean().describe("CheckBoatCollideAction 的 `setCollideTileToBB` 配置字段；准确战斗语义待确认。"),
    /** CheckBoatCollideAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckBoatCollideAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBoatCollide, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBoatCollideAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC03Schema = z
  .discriminatedUnion("$type", [CheckAbnormalFlagActionSchema, CheckAbnormalFlagsActionSchema, CheckAbnormalImmuneActionSchema, CheckAndBlockBuffByAbnormalFlagsActionSchema, CheckBlockedActionSchema, CheckBlockedPlayersideInCooperateActionSchema, CheckBlockerContainsBuffActionSchema, CheckBlockerGroupTagActionSchema, CheckBlockModeActionSchema, CheckBoatCollideActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC03>;
