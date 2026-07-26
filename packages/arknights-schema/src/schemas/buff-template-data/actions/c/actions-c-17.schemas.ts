/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckTargetTokenOrHostAction, CheckTheLeftSameDeployedTokenAction, CheckTileBlackboardHasKeyAction, CheckTileByAdvancedBuildableMaskAction, CheckTileCntInAttackRangeAction, CheckTileInRangeAction, CheckTileOptionsAction, CheckTileOverlappedAction, CheckTilePassableAction, CheckTileTypeCntInAttackRangeAction, BattleActionC17 } from "../../../../types/buff-template-data/actions/c/actions-c-17.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetTokenOrHost, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetTokenOrHostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetTokenOrHost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetTokenOrHostAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
    "_hostType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckTargetTokenOrHostAction 的 `hostType` 配置字段；准确战斗语义待确认。"),
    /** CheckTargetTokenOrHostAction 的 `tokenType` 配置字段；准确战斗语义待确认。 */
    "_tokenType": z.enum(["BUFF_SOURCE","TARGET"]).describe("CheckTargetTokenOrHostAction 的 `tokenType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetTokenOrHost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetTokenOrHostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTheLeftSameDeployedToken, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTheLeftSameDeployedTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTheLeftSameDeployedToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTheLeftSameDeployedTokenAction 的 `minCnt` 配置字段；准确战斗语义待确认。 */
    "_minCnt": z.number().describe("CheckTheLeftSameDeployedTokenAction 的 `minCnt` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTheLeftSameDeployedToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTheLeftSameDeployedTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileBlackboardHasKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileBlackboardHasKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileBlackboardHasKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CheckTileBlackboardHasKeyAction 的 `isNumeric` 配置字段；准确战斗语义待确认。 */
    "_isNumeric": z.boolean().describe("CheckTileBlackboardHasKeyAction 的 `isNumeric` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CheckTileBlackboardHasKeyAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRoottile": z.boolean().describe("CheckTileBlackboardHasKeyAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileBlackboardHasKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileBlackboardHasKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileByAdvancedBuildableMask, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileByAdvancedBuildableMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileByAdvancedBuildableMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileByAdvancedBuildableMaskAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_advancedBuildableMask": z.array(z.literal("ACT47SIDE_BANNED")).describe("CheckTileByAdvancedBuildableMaskAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileByAdvancedBuildableMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileByAdvancedBuildableMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileCntInAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileCntInAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileCntInAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileCntInAttackRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("EQUALS").describe("CheckTileCntInAttackRangeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckTileCntInAttackRangeAction 的 `ignoreContainsCharacter` 配置字段；准确战斗语义待确认。 */
    "_ignoreContainsCharacter": z.boolean().describe("CheckTileCntInAttackRangeAction 的 `ignoreContainsCharacter` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileCntInAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileCntInAttackRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。 */
    "_radius": z.number().describe("CheckTileInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。"),
    /** CheckTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CheckTileInRangeAction 的 `tileKeys` 配置字段；准确战斗语义待确认。 */
    "_tileKeys": z.array(z.string()).describe("CheckTileInRangeAction 的 `tileKeys` 配置字段；准确战斗语义待确认。"),
    /** CheckTileInRangeAction 的 `useCircle` 配置字段；准确战斗语义待确认。 */
    "_useCircle": z.boolean().describe("CheckTileInRangeAction 的 `useCircle` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileOptions, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileOptionsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileOptions, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileOptionsAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_advancedBuildableMask": z.literal("DEFAULT").describe("CheckTileOptionsAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** CheckTileOptionsAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreAdvancedBuildableMask": z.boolean().describe("CheckTileOptionsAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileOptions, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileOptionsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileOverlapped, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileOverlappedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileOverlapped, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileOverlappedAction 的 `checkOverlapped` 配置字段；准确战斗语义待确认。 */
    "_checkOverlapped": z.boolean().describe("CheckTileOverlappedAction 的 `checkOverlapped` 配置字段；准确战斗语义待确认。"),
    /** CheckTileOverlappedAction 的 `checkOverlappedTwice` 配置字段；准确战斗语义待确认。 */
    "_checkOverlappedTwice": z.boolean().describe("CheckTileOverlappedAction 的 `checkOverlappedTwice` 配置字段；准确战斗语义待确认。"),
    /** CheckTileOverlappedAction 的 `checkSourceRootTile` 配置字段；准确战斗语义待确认。 */
    "_checkSourceRootTile": z.boolean().describe("CheckTileOverlappedAction 的 `checkSourceRootTile` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileOverlapped, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileOverlappedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTilePassable, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTilePassableActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTilePassable, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTilePassable, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTilePassableAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileTypeCntInAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileTypeCntInAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileTypeCntInAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileTypeCntInAttackRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GT").describe("CheckTileTypeCntInAttackRangeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckTileTypeCntInAttackRangeAction 的 `targetTileType` 配置字段；准确战斗语义待确认。 */
    "_targetTileType": z.literal("LOWLAND").describe("CheckTileTypeCntInAttackRangeAction 的 `targetTileType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileTypeCntInAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileTypeCntInAttackRangeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC17Schema = z
  .discriminatedUnion("$type", [CheckTargetTokenOrHostActionSchema, CheckTheLeftSameDeployedTokenActionSchema, CheckTileBlackboardHasKeyActionSchema, CheckTileByAdvancedBuildableMaskActionSchema, CheckTileCntInAttackRangeActionSchema, CheckTileInRangeActionSchema, CheckTileOptionsActionSchema, CheckTileOverlappedActionSchema, CheckTilePassableActionSchema, CheckTileTypeCntInAttackRangeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC17>;
