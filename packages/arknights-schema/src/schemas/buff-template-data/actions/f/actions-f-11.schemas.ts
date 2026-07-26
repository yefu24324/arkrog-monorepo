/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ForceUpdateRangeAction, ForSurrounded4TileAction, FortressAddTileBlackboardAction, BattleActionF11 } from "../../../../types/buff-template-data/actions/f/actions-f-11.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceUpdateRange, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceUpdateRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceUpdateRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceUpdateRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceUpdateRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForSurrounded4Tile, Assembly-CSharp 的严格 Action 数据。
 */
export const ForSurrounded4TileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForSurrounded4Tile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForSurrounded4TileAction 的 `anchorType` 配置字段；准确战斗语义待确认。 */
    "_anchorType": z.literal("BUFF_OWNER").describe("ForSurrounded4TileAction 的 `anchorType` 配置字段；准确战斗语义待确认。"),
    /** ForSurrounded4TileAction 的 `filterSide` 配置字段；准确战斗语义待确认。 */
    "_filterSide": z.literal("ALLY").describe("ForSurrounded4TileAction 的 `filterSide` 配置字段；准确战斗语义待确认。"),
    /** ForSurrounded4TileAction 的 `perCharacterNodes` 配置字段；准确战斗语义待确认。 */
    "_perCharacterNodes": z.array(BattleActionReferenceSchema).describe("ForSurrounded4TileAction 的 `perCharacterNodes` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForSurrounded4Tile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForSurrounded4TileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FortressAddTileBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FortressAddTileBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FortressAddTileBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FortressAddTileBlackboardAction 的 `clearBlackboard` 配置字段；准确战斗语义待确认。 */
    "_clearBlackboard": z.boolean().describe("FortressAddTileBlackboardAction 的 `clearBlackboard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FortressAddTileBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FortressAddTileBlackboardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF11Schema = z
  .discriminatedUnion("$type", [ForceUpdateRangeActionSchema, ForSurrounded4TileActionSchema, FortressAddTileBlackboardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF11>;
