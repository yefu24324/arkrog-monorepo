/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ModifyEnemySkillMaxTargetAction, ModifyEnemySpUIFlagAction, ModifyFootballKickValueAction, ModifyFunnelMaxAtkScaleMultiplierAction, ModifyGlobalBuffBlackboardAction, ModifyGraphicHolderHeightAction, ModifyLifePointAction, ModifyMaxCostAction, ModifyOverlapExcludeSourceIdAction, ModifyOverlapSourceIdAction, BattleActionM06 } from "../../../../types/buff-template-data/actions/m/actions-m-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyEnemySkillMaxTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyEnemySkillMaxTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyEnemySkillMaxTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyEnemySkillMaxTargetAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
    "_checkSkillActive": z.boolean().describe("ModifyEnemySkillMaxTargetAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。"),
    /** ModifyEnemySkillMaxTargetAction 的 `maxTarget` 配置字段；准确战斗语义待确认。 */
    "_maxTarget": z.number().describe("ModifyEnemySkillMaxTargetAction 的 `maxTarget` 配置字段；准确战斗语义待确认。"),
    /** ModifyEnemySkillMaxTargetAction 的 `skillKey` 配置字段；准确战斗语义待确认。 */
    "_skillKey": z.string().describe("ModifyEnemySkillMaxTargetAction 的 `skillKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyEnemySkillMaxTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyEnemySkillMaxTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyEnemySpUIFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyEnemySpUIFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyEnemySpUIFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyEnemySpUIFlagAction 的 `isShow` 配置字段；准确战斗语义待确认。 */
    "_isShow": z.boolean().describe("ModifyEnemySpUIFlagAction 的 `isShow` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyEnemySpUIFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyEnemySpUIFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyFootballKickValue, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyFootballKickValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyFootballKickValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyFootballKickValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyFootballKickValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyFunnelMaxAtkScaleMultiplier, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyFunnelMaxAtkScaleMultiplierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyFunnelMaxAtkScaleMultiplier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyFunnelMaxAtkScaleMultiplierAction 的 `resetToOne` 配置字段；准确战斗语义待确认。 */
    "_resetToOne": z.boolean().describe("ModifyFunnelMaxAtkScaleMultiplierAction 的 `resetToOne` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyFunnelMaxAtkScaleMultiplier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyFunnelMaxAtkScaleMultiplierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyGlobalBuffBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyGlobalBuffBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyGlobalBuffBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyGlobalBuffBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。 */
    "_addition": z.number().describe("ModifyGlobalBuffBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ModifyGlobalBuffBlackboardAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffKey": z.string().describe("ModifyGlobalBuffBlackboardAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyGlobalBuffBlackboardAction 的 `maxValKey` 配置字段；准确战斗语义待确认。 */
    "_maxValKey": z.string().describe("ModifyGlobalBuffBlackboardAction 的 `maxValKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyGlobalBuffBlackboardAction 的 `tryAddBuffIfModified` 配置字段；准确战斗语义待确认。 */
    "_tryAddBuffIfModified": z.boolean().describe("ModifyGlobalBuffBlackboardAction 的 `tryAddBuffIfModified` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyGlobalBuffBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyGlobalBuffBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyGraphicHolderHeight, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyGraphicHolderHeightActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyGraphicHolderHeight, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyGraphicHolderHeightAction 的 `audioSignalOnStop` 配置字段；准确战斗语义待确认。 */
    "_audioSignalOnStop": z.string().describe("ModifyGraphicHolderHeightAction 的 `audioSignalOnStop` 配置字段；准确战斗语义待确认。"),
    /** ModifyGraphicHolderHeightAction 的 `duration` 配置字段；准确战斗语义待确认。 */
    "_duration": z.number().describe("ModifyGraphicHolderHeightAction 的 `duration` 配置字段；准确战斗语义待确认。"),
    /** ModifyGraphicHolderHeightAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
    "_durationKey": z.string().describe("ModifyGraphicHolderHeightAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyGraphicHolderHeightAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.number().describe("ModifyGraphicHolderHeightAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** ModifyGraphicHolderHeightAction 的 `OffsetKey` 配置字段；准确战斗语义待确认。 */
    "_OffsetKey": z.string().describe("ModifyGraphicHolderHeightAction 的 `OffsetKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyGraphicHolderHeightAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ModifyGraphicHolderHeightAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** ModifyGraphicHolderHeightAction 的 `useGlobalPos` 配置字段；准确战斗语义待确认。 */
    "_useGlobalPos": z.boolean().describe("ModifyGraphicHolderHeightAction 的 `useGlobalPos` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyGraphicHolderHeight, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyGraphicHolderHeightAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyLifePoint, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyLifePointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyLifePoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ModifyLifePointAction 的 `isReachExit` 配置字段；准确战斗语义待确认。 */
    "_isReachExit": z.boolean().describe("ModifyLifePointAction 的 `isReachExit` 配置字段；准确战斗语义待确认。"),
    /** ModifyLifePointAction 的 `isSub` 配置字段；准确战斗语义待确认。 */
    "_isSub": z.boolean().describe("ModifyLifePointAction 的 `isSub` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyLifePoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyLifePointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyMaxCost, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyMaxCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyMaxCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyMaxCostAction 的 `ensureCurCostNotExceedMax` 配置字段；准确战斗语义待确认。 */
    "_ensureCurCostNotExceedMax": z.boolean().describe("ModifyMaxCostAction 的 `ensureCurCostNotExceedMax` 配置字段；准确战斗语义待确认。"),
    /** ModifyMaxCostAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
    "_isMinus": z.boolean().describe("ModifyMaxCostAction 的 `isMinus` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyMaxCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyMaxCostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapExcludeSourceId, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyOverlapExcludeSourceIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyOverlapExcludeSourceId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyOverlapExcludeSourceIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
    "_isRemove": z.boolean().describe("ModifyOverlapExcludeSourceIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapExcludeSourceIdAction 的 `sourceIds` 配置字段；准确战斗语义待确认。 */
    "_sourceIds": z.array(z.string()).describe("ModifyOverlapExcludeSourceIdAction 的 `sourceIds` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapExcludeSourceIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ModifyOverlapExcludeSourceIdAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapExcludeSourceId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyOverlapExcludeSourceIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapSourceId, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyOverlapSourceIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyOverlapSourceId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyOverlapSourceIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
    "_isRemove": z.boolean().describe("ModifyOverlapSourceIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapSourceIdAction 的 `sourceId` 配置字段；准确战斗语义待确认。 */
    "_sourceId": z.string().describe("ModifyOverlapSourceIdAction 的 `sourceId` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapSourceIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ModifyOverlapSourceIdAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapSourceIdAction 的 `useBlackboardId` 配置字段；准确战斗语义待确认。 */
    "_useBlackboardId": z.boolean().describe("ModifyOverlapSourceIdAction 的 `useBlackboardId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapSourceId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyOverlapSourceIdAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM06Schema = z
  .discriminatedUnion("$type", [ModifyEnemySkillMaxTargetActionSchema, ModifyEnemySpUIFlagActionSchema, ModifyFootballKickValueActionSchema, ModifyFunnelMaxAtkScaleMultiplierActionSchema, ModifyGlobalBuffBlackboardActionSchema, ModifyGraphicHolderHeightActionSchema, ModifyLifePointActionSchema, ModifyMaxCostActionSchema, ModifyOverlapExcludeSourceIdActionSchema, ModifyOverlapSourceIdActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM06>;
