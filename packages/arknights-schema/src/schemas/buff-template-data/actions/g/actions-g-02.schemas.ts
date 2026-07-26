/**
 * buff_template_data 的 G 组 Action Zod Schema。
 */

import { z } from "zod";

import type { GetTargetDirectionForSourceAction, GetTargetEnemyIdAction, GetTileFromBaseTraceTargetAbilityAction, BattleActionG02 } from "../../../../types/buff-template-data/actions/g/actions-g-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GetTargetDirectionForSource, Assembly-CSharp 的严格 Action 数据。
 */
export const GetTargetDirectionForSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GetTargetDirectionForSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GetTargetDirectionForSourceAction 的 `soureceType` 配置字段；准确战斗语义待确认。 */
    "_soureceType": z.literal("BUFF_OWNER").describe("GetTargetDirectionForSourceAction 的 `soureceType` 配置字段；准确战斗语义待确认。"),
    /** GetTargetDirectionForSourceAction 的 `targetDirKey` 配置字段；准确战斗语义待确认。 */
    "_targetDirKey": z.string().describe("GetTargetDirectionForSourceAction 的 `targetDirKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GetTargetDirectionForSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GetTargetDirectionForSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GetTargetEnemyId, Assembly-CSharp 的严格 Action 数据。
 */
export const GetTargetEnemyIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GetTargetEnemyId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GetTargetEnemyId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GetTargetEnemyIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GetTileFromBaseTraceTargetAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const GetTileFromBaseTraceTargetAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GetTileFromBaseTraceTargetAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GetTileFromBaseTraceTargetAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("GetTileFromBaseTraceTargetAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** GetTileFromBaseTraceTargetAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("GetTileFromBaseTraceTargetAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** GetTileFromBaseTraceTargetAbilityAction 的 `tileKey` 配置字段；准确战斗语义待确认。 */
    "_tileKey": z.string().describe("GetTileFromBaseTraceTargetAbilityAction 的 `tileKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GetTileFromBaseTraceTargetAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GetTileFromBaseTraceTargetAbilityAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionG02Schema = z
  .discriminatedUnion("$type", [GetTargetDirectionForSourceActionSchema, GetTargetEnemyIdActionSchema, GetTileFromBaseTraceTargetAbilityActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionG02>;
