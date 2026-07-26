/**
 * buff_template_data 的 U 组 Action Zod Schema。
 */

import { z } from "zod";

import type { UpdateEnemyCurrentTileAction, UpdateFrictionFactorAction, UpdateNormalAndRareEventCntFunLiveModeOnlyAction, UpdateObjectScaleViaRemainingRatioAction, UpdateScoreManuallyAction, UpdateStackBuffMaxStackCntAction, BattleActionU02 } from "../../../../types/buff-template-data/actions/u/actions-u-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateEnemyCurrentTile, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateEnemyCurrentTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateEnemyCurrentTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateEnemyCurrentTileAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("UpdateEnemyCurrentTileAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** UpdateEnemyCurrentTileAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("UpdateEnemyCurrentTileAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateEnemyCurrentTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateEnemyCurrentTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateFrictionFactor, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateFrictionFactorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateFrictionFactor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateFrictionFactorAction 的 `frictionFactor` 配置字段；准确战斗语义待确认。 */
    "_frictionFactor": z.number().describe("UpdateFrictionFactorAction 的 `frictionFactor` 配置字段；准确战斗语义待确认。"),
    /** UpdateFrictionFactorAction 的 `restoreFrictionFactor` 配置字段；准确战斗语义待确认。 */
    "_restoreFrictionFactor": z.boolean().describe("UpdateFrictionFactorAction 的 `restoreFrictionFactor` 配置字段；准确战斗语义待确认。"),
    /** UpdateFrictionFactorAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("UpdateFrictionFactorAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateFrictionFactor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateFrictionFactorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateNormalAndRareEventCntFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateNormalAndRareEventCntFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateNormalAndRareEventCntFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateNormalAndRareEventCntFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateNormalAndRareEventCntFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateObjectScaleViaRemainingRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateObjectScaleViaRemainingRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateObjectScaleViaRemainingRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateObjectScaleViaRemainingRatioAction 的 `maxScale` 配置字段；准确战斗语义待确认。 */
    "_maxScale": z.number().describe("UpdateObjectScaleViaRemainingRatioAction 的 `maxScale` 配置字段；准确战斗语义待确认。"),
    /** UpdateObjectScaleViaRemainingRatioAction 的 `minScale` 配置字段；准确战斗语义待确认。 */
    "_minScale": z.number().describe("UpdateObjectScaleViaRemainingRatioAction 的 `minScale` 配置字段；准确战斗语义待确认。"),
    /** UpdateObjectScaleViaRemainingRatioAction 的 `mountPointType` 配置字段；准确战斗语义待确认。 */
    "_mountPointType": z.literal("UI").describe("UpdateObjectScaleViaRemainingRatioAction 的 `mountPointType` 配置字段；准确战斗语义待确认。"),
    /** UpdateObjectScaleViaRemainingRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("UpdateObjectScaleViaRemainingRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateObjectScaleViaRemainingRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateObjectScaleViaRemainingRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateScoreManually, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateScoreManuallyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateScoreManually, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateScoreManuallyAction 的 `score` 配置字段；准确战斗语义待确认。 */
    "_score": z.string().describe("UpdateScoreManuallyAction 的 `score` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateScoreManually, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateScoreManuallyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateStackBuffMaxStackCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateStackBuffMaxStackCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateStackBuffMaxStackCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.literal("BUFF_OWNER").describe("Buff 的接收实体类型。"),
    /** UpdateStackBuffMaxStackCntAction 的 `defaultMaxStackCnt` 配置字段；准确战斗语义待确认。 */
    "_defaultMaxStackCnt": z.number().describe("UpdateStackBuffMaxStackCntAction 的 `defaultMaxStackCnt` 配置字段；准确战斗语义待确认。"),
    /** UpdateStackBuffMaxStackCntAction 的 `maxStackCntKey` 配置字段；准确战斗语义待确认。 */
    "_maxStackCntKey": z.string().describe("UpdateStackBuffMaxStackCntAction 的 `maxStackCntKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateStackBuffMaxStackCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateStackBuffMaxStackCntAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionU02Schema = z
  .discriminatedUnion("$type", [UpdateEnemyCurrentTileActionSchema, UpdateFrictionFactorActionSchema, UpdateNormalAndRareEventCntFunLiveModeOnlyActionSchema, UpdateObjectScaleViaRemainingRatioActionSchema, UpdateScoreManuallyActionSchema, UpdateStackBuffMaxStackCntActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionU02>;
