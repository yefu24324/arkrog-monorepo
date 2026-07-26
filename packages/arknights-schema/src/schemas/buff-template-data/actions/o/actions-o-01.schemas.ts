/**
 * buff_template_data 的 O 组 Action Zod Schema。
 */

import { z } from "zod";

import type { OnRallyPointLikeRebornAction, OverwriteEnemyRouteAction, BattleActionO01 } from "../../../../types/buff-template-data/actions/o/actions-o-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+OnRallyPointLikeReborn, Assembly-CSharp 的严格 Action 数据。
 */
export const OnRallyPointLikeRebornActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+OnRallyPointLikeReborn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+OnRallyPointLikeReborn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<OnRallyPointLikeRebornAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+OverwriteEnemyRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const OverwriteEnemyRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+OverwriteEnemyRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** OverwriteEnemyRouteAction 的 `host` 配置字段；准确战斗语义待确认。 */
    "_host": z.string().describe("OverwriteEnemyRouteAction 的 `host` 配置字段；准确战斗语义待确认。"),
    /** OverwriteEnemyRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("OverwriteEnemyRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+OverwriteEnemyRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<OverwriteEnemyRouteAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionO01Schema = z
  .discriminatedUnion("$type", [OnRallyPointLikeRebornActionSchema, OverwriteEnemyRouteActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionO01>;
