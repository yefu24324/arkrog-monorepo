/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act33SideFilterByTargetRopeCntAction, Act33SideFinishManagedProjectilesAction, Act35SideAssignGemsCountToBlackboardAction, Act35SideCheckIfOnGemsTileAction, Act35SideCheckNotOnExcludedTileAction, Act35SideEliminateGemsAction, Act35SideSummonGemsAction, Act35SideSummonGemsInFourDirectionsAction, Act35SideSummonGemsInRangeAction, Act35SideSummonLinkGemAction, BattleActionA03 } from "../../../../types/buff-template-data/actions/a/actions-a-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideFilterByTargetRopeCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideFilterByTargetRopeCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideFilterByTargetRopeCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act33SideFilterByTargetRopeCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LE"]).describe("Act33SideFilterByTargetRopeCntAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** Act33SideFilterByTargetRopeCntAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("Act33SideFilterByTargetRopeCntAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideFilterByTargetRopeCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideFilterByTargetRopeCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideFinishManagedProjectiles, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideFinishManagedProjectilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideFinishManagedProjectiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act33SideFinishManagedProjectilesAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.string().describe("Act33SideFinishManagedProjectilesAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideFinishManagedProjectiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideFinishManagedProjectilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideAssignGemsCountToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideAssignGemsCountToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideAssignGemsCountToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Act35SideAssignGemsCountToBlackboardAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideAssignGemsCountToBlackboardAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act35SideAssignGemsCountToBlackboardAction 的 `excludeLinkGems` 配置字段；准确战斗语义待确认。 */
    "_excludeLinkGems": z.boolean().describe("Act35SideAssignGemsCountToBlackboardAction 的 `excludeLinkGems` 配置字段；准确战斗语义待确认。"),
    /** Act35SideAssignGemsCountToBlackboardAction 的 `maxCount` 配置字段；准确战斗语义待确认。 */
    "_maxCount": z.number().describe("Act35SideAssignGemsCountToBlackboardAction 的 `maxCount` 配置字段；准确战斗语义待确认。"),
    /** Act35SideAssignGemsCountToBlackboardAction 的 `maxCountKey` 配置字段；准确战斗语义待确认。 */
    "_maxCountKey": z.string().describe("Act35SideAssignGemsCountToBlackboardAction 的 `maxCountKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideAssignGemsCountToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideAssignGemsCountToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideCheckIfOnGemsTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideCheckIfOnGemsTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideCheckIfOnGemsTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideCheckIfOnGemsTileAction 的 `checkNotOn` 配置字段；准确战斗语义待确认。 */
    "_checkNotOn": z.boolean().describe("Act35SideCheckIfOnGemsTileAction 的 `checkNotOn` 配置字段；准确战斗语义待确认。"),
    /** Act35SideCheckIfOnGemsTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideCheckIfOnGemsTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act35SideCheckIfOnGemsTileAction 的 `excludeLinkGems` 配置字段；准确战斗语义待确认。 */
    "_excludeLinkGems": z.boolean().describe("Act35SideCheckIfOnGemsTileAction 的 `excludeLinkGems` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideCheckIfOnGemsTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideCheckIfOnGemsTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideCheckNotOnExcludedTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideCheckNotOnExcludedTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideCheckNotOnExcludedTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideCheckNotOnExcludedTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideCheckNotOnExcludedTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideCheckNotOnExcludedTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideCheckNotOnExcludedTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideEliminateGems, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideEliminateGemsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideEliminateGems, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideEliminateGemsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideEliminateGemsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideEliminateGems, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideEliminateGemsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonGems, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideSummonGemsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideSummonGems, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideSummonGemsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideSummonGemsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsAction 的 `gemsType` 配置字段；准确战斗语义待确认。 */
    "_gemsType": z.literal("Polluted").describe("Act35SideSummonGemsAction 的 `gemsType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonGems, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideSummonGemsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonGemsInFourDirections, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideSummonGemsInFourDirectionsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideSummonGemsInFourDirections, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideSummonGemsInFourDirectionsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideSummonGemsInFourDirectionsAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsInFourDirectionsAction 的 `gemsType` 配置字段；准确战斗语义待确认。 */
    "_gemsType": z.literal("Polluted").describe("Act35SideSummonGemsInFourDirectionsAction 的 `gemsType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonGemsInFourDirections, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideSummonGemsInFourDirectionsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonGemsInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideSummonGemsInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideSummonGemsInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideSummonGemsInRangeAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideSummonGemsInRangeAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsInRangeAction 的 `gemsType` 配置字段；准确战斗语义待确认。 */
    "_gemsType": z.literal("Polluted").describe("Act35SideSummonGemsInRangeAction 的 `gemsType` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsInRangeAction 的 `isCircleRange` 配置字段；准确战斗语义待确认。 */
    "_isCircleRange": z.boolean().describe("Act35SideSummonGemsInRangeAction 的 `isCircleRange` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("Act35SideSummonGemsInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("Act35SideSummonGemsInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","PROJECTILE_TRACETARGET"]).describe("Action 作用的目标实体类型。"),
    /** Act35SideSummonGemsInRangeAction 的 `useInProjectile` 配置字段；准确战斗语义待确认。 */
    "_useInProjectile": z.boolean().describe("Act35SideSummonGemsInRangeAction 的 `useInProjectile` 配置字段；准确战斗语义待确认。"),
    /** Act35SideSummonGemsInRangeAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "direction": z.string().describe("Act35SideSummonGemsInRangeAction 的 `direction` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonGemsInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideSummonGemsInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonLinkGem, Assembly-CSharp 的严格 Action 数据。
 */
export const Act35SideSummonLinkGemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act35SideSummonLinkGem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act35SideSummonLinkGemAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act35SideSummonLinkGemAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act35SideSummonLinkGem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act35SideSummonLinkGemAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA03Schema = z
  .discriminatedUnion("$type", [Act33SideFilterByTargetRopeCntActionSchema, Act33SideFinishManagedProjectilesActionSchema, Act35SideAssignGemsCountToBlackboardActionSchema, Act35SideCheckIfOnGemsTileActionSchema, Act35SideCheckNotOnExcludedTileActionSchema, Act35SideEliminateGemsActionSchema, Act35SideSummonGemsActionSchema, Act35SideSummonGemsInFourDirectionsActionSchema, Act35SideSummonGemsInRangeActionSchema, Act35SideSummonLinkGemActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA03>;
