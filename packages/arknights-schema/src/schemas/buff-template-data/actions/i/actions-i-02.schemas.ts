/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { IfTargetAction, IfTargetEqualAction, IfTargetFromDirectionAction, IfTargetSideAction, IgnoreAllButMoveCpAction, InitBossRushControllerAction, InitBossRushRecodrAction, InitFootballAction, InitForcesAction, InsertCheckPointInRuntimeRouteAction, BattleActionI02 } from "../../../../types/buff-template-data/actions/i/actions-i-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const IfTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfTargetAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.enum(["ALL","NONE","RANGED"]).describe("IfTargetAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** IfTargetAction 的 `checkApplyWay` 配置字段；准确战斗语义待确认。 */
    "_checkApplyWay": z.boolean().describe("IfTargetAction 的 `checkApplyWay` 配置字段；准确战斗语义待确认。"),
    /** IfTargetAction 的 `checkTargetAlive` 配置字段；准确战斗语义待确认。 */
    "_checkTargetAlive": z.boolean().describe("IfTargetAction 的 `checkTargetAlive` 配置字段；准确战斗语义待确认。"),
    /** IfTargetAction 的 `checkTargetFree` 配置字段；准确战斗语义待确认。 */
    "_checkTargetFree": z.boolean().describe("IfTargetAction 的 `checkTargetFree` 配置字段；准确战斗语义待确认。"),
    /** IfTargetAction 的 `checkTargetUnitType` 配置字段；准确战斗语义待确认。 */
    "_checkTargetUnitType": z.boolean().describe("IfTargetAction 的 `checkTargetUnitType` 配置字段；准确战斗语义待确认。"),
    /** IfTargetAction 的 `motionMask` 配置字段；准确战斗语义待确认。 */
    "_motionMask": z.enum(["ALL","FLY_ONLY","NONE","WALK_ONLY"]).describe("IfTargetAction 的 `motionMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","PROJECTILE_TRACETARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** IfTargetAction 的 `unitType` 配置字段；准确战斗语义待确认。 */
    "_unitType": z.enum(["CHARACTER","ENEMY"]).describe("IfTargetAction 的 `unitType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfTargetEqual, Assembly-CSharp 的严格 Action 数据。
 */
export const IfTargetEqualActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfTargetEqual, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfTargetEqualAction 的 `equalIfBothNull` 配置字段；准确战斗语义待确认。 */
    "_equalIfBothNull": z.boolean().describe("IfTargetEqualAction 的 `equalIfBothNull` 配置字段；准确战斗语义待确认。"),
    /** IfTargetEqualAction 的 `target1` 配置字段；准确战斗语义待确认。 */
    "_target1": z.string().describe("IfTargetEqualAction 的 `target1` 配置字段；准确战斗语义待确认。"),
    /** IfTargetEqualAction 的 `target2` 配置字段；准确战斗语义待确认。 */
    "_target2": z.string().describe("IfTargetEqualAction 的 `target2` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfTargetEqual, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfTargetEqualAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfTargetFromDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const IfTargetFromDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfTargetFromDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfTargetFromDirectionAction 的 `checkTargetIsFromDirection` 配置字段；准确战斗语义待确认。 */
    "_checkTargetIsFromDirection": z.boolean().describe("IfTargetFromDirectionAction 的 `checkTargetIsFromDirection` 配置字段；准确战斗语义待确认。"),
    /** IfTargetFromDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("IfTargetFromDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("MODIFIER_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("MODIFIER_TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfTargetFromDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfTargetFromDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IfTargetSide, Assembly-CSharp 的严格 Action 数据。
 */
export const IfTargetSideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IfTargetSide, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IfTargetSideAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
    "_sideMask": z.enum(["ALLY","ENEMY","NEUTRAL"]).describe("IfTargetSideAction 的 `sideMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","PROJECTILE_TRACETARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IfTargetSide, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IfTargetSideAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IgnoreAllButMoveCp, Assembly-CSharp 的严格 Action 数据。
 */
export const IgnoreAllButMoveCpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IgnoreAllButMoveCp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IgnoreAllButMoveCpAction 的 `ignore` 配置字段；准确战斗语义待确认。 */
    "_ignore": z.boolean().describe("IgnoreAllButMoveCpAction 的 `ignore` 配置字段；准确战斗语义待确认。"),
    /** IgnoreAllButMoveCpAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("IgnoreAllButMoveCpAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IgnoreAllButMoveCp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IgnoreAllButMoveCpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InitBossRushController, Assembly-CSharp 的严格 Action 数据。
 */
export const InitBossRushControllerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InitBossRushController, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InitBossRushController, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InitBossRushControllerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InitBossRushRecodr, Assembly-CSharp 的严格 Action 数据。
 */
export const InitBossRushRecodrActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InitBossRushRecodr, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InitBossRushRecodr, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InitBossRushRecodrAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InitFootball, Assembly-CSharp 的严格 Action 数据。
 */
export const InitFootballActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InitFootball, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InitFootball, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InitFootballAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InitForces, Assembly-CSharp 的严格 Action 数据。
 */
export const InitForcesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InitForces, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InitForcesAction 的 `clearanceForceKey` 配置字段；准确战斗语义待确认。 */
    "_clearanceForceKey": z.string().describe("InitForcesAction 的 `clearanceForceKey` 配置字段；准确战斗语义待确认。"),
    /** InitForcesAction 的 `passBallForceKey` 配置字段；准确战斗语义待确认。 */
    "_passBallForceKey": z.string().describe("InitForcesAction 的 `passBallForceKey` 配置字段；准确战斗语义待确认。"),
    /** InitForcesAction 的 `slapShotForceKey` 配置字段；准确战斗语义待确认。 */
    "_slapShotForceKey": z.string().describe("InitForcesAction 的 `slapShotForceKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InitForces, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InitForcesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+InsertCheckPointInRuntimeRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const InsertCheckPointInRuntimeRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+InsertCheckPointInRuntimeRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `addIntoRuntimeRoute` 配置字段；准确战斗语义待确认。 */
    "_addIntoRuntimeRoute": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `addIntoRuntimeRoute` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `checkReachable` 配置字段；准确战斗语义待确认。 */
    "_checkReachable": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `checkReachable` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `clearRouteBeforeInsert` 配置字段；准确战斗语义待确认。 */
    "_clearRouteBeforeInsert": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `clearRouteBeforeInsert` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `insertIndex` 配置字段；准确战斗语义待确认。 */
    "_insertIndex": z.number().describe("InsertCheckPointInRuntimeRouteAction 的 `insertIndex` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `manuallySpecifyInsertIndex` 配置字段；准确战斗语义待确认。 */
    "_manuallySpecifyInsertIndex": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `manuallySpecifyInsertIndex` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `manuallySpecifyReassignIndex` 配置字段；准确战斗语义待确认。 */
    "_manuallySpecifyReassignIndex": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `manuallySpecifyReassignIndex` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `randomizeReachOffset` 配置字段；准确战斗语义待确认。 */
    "_randomizeReachOffset": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `randomizeReachOffset` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `reachOffset` 配置字段；准确战斗语义待确认。 */
    "_reachOffset": z.strictObject({
                          /** InsertCheckPointInRuntimeRouteAction 的 `x` 配置字段；准确战斗语义待确认。 */
                          "x": z.number().describe("InsertCheckPointInRuntimeRouteAction 的 `x` 配置字段；准确战斗语义待确认。"),
                          /** InsertCheckPointInRuntimeRouteAction 的 `y` 配置字段；准确战斗语义待确认。 */
                          "y": z.number().describe("InsertCheckPointInRuntimeRouteAction 的 `y` 配置字段；准确战斗语义待确认。"),
                        }).describe("InsertCheckPointInRuntimeRouteAction 的 `reachOffset` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `reassignIndex` 配置字段；准确战斗语义待确认。 */
    "_reassignIndex": z.number().describe("InsertCheckPointInRuntimeRouteAction 的 `reassignIndex` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("InsertCheckPointInRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("InsertCheckPointInRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `time` 配置字段；准确战斗语义待确认。 */
    "_time": z.number().describe("InsertCheckPointInRuntimeRouteAction 的 `time` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `toMapPosition` 配置字段；准确战斗语义待确认。 */
    "_toMapPosition": z.boolean().describe("InsertCheckPointInRuntimeRouteAction 的 `toMapPosition` 配置字段；准确战斗语义待确认。"),
    /** InsertCheckPointInRuntimeRouteAction 的 `type` 配置字段；准确战斗语义待确认。 */
    "_type": z.enum(["MOVE","WAIT_FOR_SECONDS"]).describe("InsertCheckPointInRuntimeRouteAction 的 `type` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+InsertCheckPointInRuntimeRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<InsertCheckPointInRuntimeRouteAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI02Schema = z
  .discriminatedUnion("$type", [IfTargetActionSchema, IfTargetEqualActionSchema, IfTargetFromDirectionActionSchema, IfTargetSideActionSchema, IgnoreAllButMoveCpActionSchema, InitBossRushControllerActionSchema, InitBossRushRecodrActionSchema, InitFootballActionSchema, InitForcesActionSchema, InsertCheckPointInRuntimeRouteActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI02>;
