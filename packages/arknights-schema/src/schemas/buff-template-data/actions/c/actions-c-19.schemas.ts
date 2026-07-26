/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckUnitInMoveStateAction, CheckUnitInRebornStateAction, CheckUnitRootTileInTargetAttackRangeAction, CheckUnitSideOfMapAction, ClearAllBuffsAction, ClearCharacterOnTileIfExistsAction, ClearCharacterSpAction, ClearCheckpointInRuntimeRouteAction, ClearEnemySpAction, ClearFirstBuffBlackboardByKeyAction, BattleActionC19 } from "../../../../types/buff-template-data/actions/c/actions-c-19.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInMoveState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitInMoveStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitInMoveState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitInMoveStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckUnitInMoveStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInMoveState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitInMoveStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInRebornState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitInRebornStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitInRebornState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitInRebornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckUnitInRebornStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInRebornState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitInRebornStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitRootTileInTargetAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitRootTileInTargetAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitRootTileInTargetAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitRootTileInTargetAttackRangeAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE"]).describe("CheckUnitRootTileInTargetAttackRangeAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitRootTileInTargetAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitRootTileInTargetAttackRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitSideOfMap, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitSideOfMapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitSideOfMap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitSideOfMapAction 的 `checkLeft` 配置字段；准确战斗语义待确认。 */
    "_checkLeft": z.boolean().describe("CheckUnitSideOfMapAction 的 `checkLeft` 配置字段；准确战斗语义待确认。"),
    /** CheckUnitSideOfMapAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("CheckUnitSideOfMapAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitSideOfMap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitSideOfMapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearAllBuffs, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearAllBuffsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearAllBuffs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ClearAllBuffsAction 的 `alsoRemoveDurableBuff` 配置字段；准确战斗语义待确认。 */
    "_alsoRemoveDurableBuff": z.boolean().describe("ClearAllBuffsAction 的 `alsoRemoveDurableBuff` 配置字段；准确战斗语义待确认。"),
    /** ClearAllBuffsAction 的 `retainedBuffsWhenClear` 配置字段；准确战斗语义待确认。 */
    "_retainedBuffsWhenClear": z.array(z.string()).describe("ClearAllBuffsAction 的 `retainedBuffsWhenClear` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearAllBuffs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearAllBuffsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearCharacterOnTileIfExists, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearCharacterOnTileIfExistsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearCharacterOnTileIfExists, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearCharacterOnTileIfExists, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearCharacterOnTileIfExistsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearCharacterSp, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearCharacterSpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearCharacterSp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ClearCharacterSpAction 的 `charFrom` 配置字段；准确战斗语义待确认。 */
    "_charFrom": z.string().describe("ClearCharacterSpAction 的 `charFrom` 配置字段；准确战斗语义待确认。"),
    /** ClearCharacterSpAction 的 `forceFlag` 配置字段；准确战斗语义待确认。 */
    "_forceFlag": z.boolean().describe("ClearCharacterSpAction 的 `forceFlag` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearCharacterSp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearCharacterSpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearCheckpointInRuntimeRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearCheckpointInRuntimeRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearCheckpointInRuntimeRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ClearCheckpointInRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ClearCheckpointInRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearCheckpointInRuntimeRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearCheckpointInRuntimeRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearEnemySp, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearEnemySpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearEnemySp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ClearEnemySpAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
    "_enemy": z.string().describe("ClearEnemySpAction 的 `enemy` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearEnemySp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearEnemySpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearFirstBuffBlackboardByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearFirstBuffBlackboardByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearFirstBuffBlackboardByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ClearFirstBuffBlackboardByKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("ClearFirstBuffBlackboardByKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearFirstBuffBlackboardByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearFirstBuffBlackboardByKeyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC19Schema = z
  .discriminatedUnion("$type", [CheckUnitInMoveStateActionSchema, CheckUnitInRebornStateActionSchema, CheckUnitRootTileInTargetAttackRangeActionSchema, CheckUnitSideOfMapActionSchema, ClearAllBuffsActionSchema, ClearCharacterOnTileIfExistsActionSchema, ClearCharacterSpActionSchema, ClearCheckpointInRuntimeRouteActionSchema, ClearEnemySpActionSchema, ClearFirstBuffBlackboardByKeyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC19>;
