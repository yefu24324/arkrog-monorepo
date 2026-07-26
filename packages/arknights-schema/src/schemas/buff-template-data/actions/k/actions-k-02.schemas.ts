/**
 * buff_template_data 的 K 组 Action Zod Schema。
 */

import { z } from "zod";

import type { KnockBackWithDirectionAction, BattleActionK02 } from "../../../../types/buff-template-data/actions/k/actions-k-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+KnockBackWithDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const KnockBackWithDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+KnockBackWithDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** KnockBackWithDirectionAction 的 `defaultForceLevel` 配置字段；准确战斗语义待确认。 */
    "_defaultForceLevel": z.number().describe("KnockBackWithDirectionAction 的 `defaultForceLevel` 配置字段；准确战斗语义待确认。"),
    /** KnockBackWithDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("KnockBackWithDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** KnockBackWithDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
    "_useSourceDirection": z.boolean().describe("KnockBackWithDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+KnockBackWithDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<KnockBackWithDirectionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionK02Schema = z
  .discriminatedUnion("$type", [KnockBackWithDirectionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionK02>;
