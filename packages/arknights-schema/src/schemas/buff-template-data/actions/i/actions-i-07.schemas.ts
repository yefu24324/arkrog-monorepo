/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { IsUnharmfulEnemyAction, BattleActionI07 } from "../../../../types/buff-template-data/actions/i/actions-i-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsUnharmfulEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const IsUnharmfulEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsUnharmfulEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsUnharmfulEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsUnharmfulEnemyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI07Schema = z
  .discriminatedUnion("$type", [IsUnharmfulEnemyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI07>;
