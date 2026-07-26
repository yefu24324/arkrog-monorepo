/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignRelativeDirectionToBBAction, AssignResCountToBBAction, AssignRespawnCntToBlackboardAction, AssignRootTileBlackBoardValueToBBAction, AssignRootTileToBBAction, AssignRuneCountToBlackboardAction, AssignScrapInventoryToBlackboardAction, AssignSkillTriggerdCntToBlackboardAction, AssignSkinIdToBlackboardAction, AssignSpCostToBBAction, BattleActionA24 } from "../../../../types/buff-template-data/actions/a/actions-a-24.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignRelativeDirectionToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignRelativeDirectionToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignRelativeDirectionToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignRelativeDirectionToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignRelativeDirectionToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignResCountToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignResCountToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignResCountToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignResCountToBBAction 的 `resourceTypeKey` 配置字段；准确战斗语义待确认。 */
    "_resourceTypeKey": z.string().describe("AssignResCountToBBAction 的 `resourceTypeKey` 配置字段；准确战斗语义待确认。"),
    /** AssignResCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("AssignResCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignResCountToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignResCountToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignRespawnCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignRespawnCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignRespawnCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignRespawnCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignRespawnCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignRootTileBlackBoardValueToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignRootTileBlackBoardValueToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignRootTileBlackBoardValueToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignRootTileBlackBoardValueToBBAction 的 `isStringKey` 配置字段；准确战斗语义待确认。 */
    "_isStringKey": z.boolean().describe("AssignRootTileBlackBoardValueToBBAction 的 `isStringKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignRootTileBlackBoardValueToBBAction 的 `tileBBKey` 配置字段；准确战斗语义待确认。 */
    "_tileBBKey": z.string().describe("AssignRootTileBlackBoardValueToBBAction 的 `tileBBKey` 配置字段；准确战斗语义待确认。"),
    /** AssignRootTileBlackBoardValueToBBAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("AssignRootTileBlackBoardValueToBBAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignRootTileBlackBoardValueToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignRootTileBlackBoardValueToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignRootTileToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignRootTileToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignRootTileToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignRootTileToBBAction 的 `assignAsString` 配置字段；准确战斗语义待确认。 */
    "_assignAsString": z.boolean().describe("AssignRootTileToBBAction 的 `assignAsString` 配置字段；准确战斗语义待确认。"),
    /** AssignRootTileToBBAction 的 `assignTargetTokenOrHost` 配置字段；准确战斗语义待确认。 */
    "_assignTargetTokenOrHost": z.boolean().describe("AssignRootTileToBBAction 的 `assignTargetTokenOrHost` 配置字段；准确战斗语义待确认。"),
    /** AssignRootTileToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.union([
                    z.null(),
                    z.string(),
                  ]).describe("AssignRootTileToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** AssignRootTileToBBAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.union([
                     z.null(),
                     z.string(),
                   ]).describe("AssignRootTileToBBAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** AssignRootTileToBBAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.union([
                     z.null(),
                     z.string(),
                   ]).describe("AssignRootTileToBBAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignRootTileToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignRootTileToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignRuneCountToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignRuneCountToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignRuneCountToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignRuneCountToBlackboardAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("AssignRuneCountToBlackboardAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** AssignRuneCountToBlackboardAction 的 `runeKey` 配置字段；准确战斗语义待确认。 */
    "_runeKey": z.string().describe("AssignRuneCountToBlackboardAction 的 `runeKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignRuneCountToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignRuneCountToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignScrapInventoryToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignScrapInventoryToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignScrapInventoryToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignScrapInventoryToBlackboardAction 的 `countBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_countBlackboardKey": z.string().describe("AssignScrapInventoryToBlackboardAction 的 `countBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignScrapInventoryToBlackboardAction 的 `limitBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_limitBlackboardKey": z.null().describe("AssignScrapInventoryToBlackboardAction 的 `limitBlackboardKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignScrapInventoryToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignScrapInventoryToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignSkillTriggerdCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignSkillTriggerdCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignSkillTriggerdCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignSkillTriggerdCntToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignSkillTriggerdCntToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignSkillTriggerdCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignSkillTriggerdCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignSkinIdToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignSkinIdToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignSkinIdToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignSkinIdToBlackboardAction 的 `skinIdBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_skinIdBlackboardKey": z.string().describe("AssignSkinIdToBlackboardAction 的 `skinIdBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignSkinIdToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignSkinIdToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignSpCostToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignSpCostToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignSpCostToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignSpCostToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.string().describe("AssignSpCostToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** AssignSpCostToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignSpCostToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignSpCostToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignSpCostToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA24Schema = z
  .discriminatedUnion("$type", [AssignRelativeDirectionToBBActionSchema, AssignResCountToBBActionSchema, AssignRespawnCntToBlackboardActionSchema, AssignRootTileBlackBoardValueToBBActionSchema, AssignRootTileToBBActionSchema, AssignRuneCountToBlackboardActionSchema, AssignScrapInventoryToBlackboardActionSchema, AssignSkillTriggerdCntToBlackboardActionSchema, AssignSkinIdToBlackboardActionSchema, AssignSpCostToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA24>;
