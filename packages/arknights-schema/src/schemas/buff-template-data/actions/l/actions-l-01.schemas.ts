/**
 * buff_template_data 的 L 组 Action Zod Schema。
 */

import { z } from "zod";

import type { LandFootballAction, LegionModeOnlyAddLastProfessionLevelAction, LegionModeOnlyAddProfessionLevelAction, LegionModeOnlyAddProfessionLevelFromLastSelectCardsAction, LegionModeOnlyAssignCardCntToBBAction, LegionModeOnlyAssignCardPriceToBBAction, LegionModeOnlyAssignDangerLevelToBBAction, LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction, LegionModeOnlyAssignStatusProfessionCntToBBAction, LegionModeOnlyAssignStatusStackCntToBBAction, BattleActionL01 } from "../../../../types/buff-template-data/actions/l/actions-l-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LandFootball, Assembly-CSharp 的严格 Action 数据。
 */
export const LandFootballActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LandFootball, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LandFootball, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LandFootballAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAddLastProfessionLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAddLastProfessionLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAddLastProfessionLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyAddLastProfessionLevelAction 的 `levelCnt` 配置字段；准确战斗语义待确认。 */
    "_levelCnt": z.number().describe("LegionModeOnlyAddLastProfessionLevelAction 的 `levelCnt` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAddLastProfessionLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAddLastProfessionLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAddProfessionLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyAddProfessionLevelAction 的 `levelCnt` 配置字段；准确战斗语义待确认。 */
    "_levelCnt": z.number().describe("LegionModeOnlyAddProfessionLevelAction 的 `levelCnt` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyAddProfessionLevelAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
    "_professionCategory": z.enum(["NONE","SNIPER"]).describe("LegionModeOnlyAddProfessionLevelAction 的 `professionCategory` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_SOURCE","MAIN_TARGET"]).describe("Action 读取的来源实体类型。"),
    /** LegionModeOnlyAddProfessionLevelAction 的 `specifyProfessionCategory` 配置字段；准确战斗语义待确认。 */
    "_specifyProfessionCategory": z.boolean().describe("LegionModeOnlyAddProfessionLevelAction 的 `specifyProfessionCategory` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAddProfessionLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevelFromLastSelectCards, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAddProfessionLevelFromLastSelectCardsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevelFromLastSelectCards, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAddProfessionLevelFromLastSelectCards, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAddProfessionLevelFromLastSelectCardsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAssignCardCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyAssignCardCntToBBAction 的 `cardId` 配置字段；准确战斗语义待确认。 */
    "_cardId": z.string().describe("LegionModeOnlyAssignCardCntToBBAction 的 `cardId` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyAssignCardCntToBBAction 的 `cardKey` 配置字段；准确战斗语义待确认。 */
    "_cardKey": z.string().describe("LegionModeOnlyAssignCardCntToBBAction 的 `cardKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyAssignCardCntToBBAction 的 `cardLibraryType` 配置字段；准确战斗语义待确认。 */
    "_cardLibraryType": z.literal("USING").describe("LegionModeOnlyAssignCardCntToBBAction 的 `cardLibraryType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyAssignCardCntToBBAction 的 `onlyInHand` 配置字段；准确战斗语义待确认。 */
    "_onlyInHand": z.boolean().describe("LegionModeOnlyAssignCardCntToBBAction 的 `onlyInHand` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAssignCardCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardPriceToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAssignCardPriceToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardPriceToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignCardPriceToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAssignCardPriceToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignDangerLevelToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAssignDangerLevelToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAssignDangerLevelToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyAssignDangerLevelToBBAction 的 `dangerLevelKey` 配置字段；准确战斗语义待确认。 */
    "_dangerLevelKey": z.string().describe("LegionModeOnlyAssignDangerLevelToBBAction 的 `dangerLevelKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignDangerLevelToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAssignDangerLevelToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignSpecifiedProfessionStackCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAssignSpecifiedProfessionStackCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAssignSpecifiedProfessionStackCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction 的 `assignBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_assignBlackboardKey": z.string().describe("LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction 的 `assignBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction 的 `queryProfessionCategory` 配置字段；准确战斗语义待确认。 */
    "_queryProfessionCategory": z.enum(["SNIPER","TANK"]).describe("LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction 的 `queryProfessionCategory` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignSpecifiedProfessionStackCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAssignSpecifiedProfessionStackCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusProfessionCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAssignStatusProfessionCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusProfessionCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyAssignStatusProfessionCntToBBAction 的 `professionCntKey` 配置字段；准确战斗语义待确认。 */
    "_professionCntKey": z.string().describe("LegionModeOnlyAssignStatusProfessionCntToBBAction 的 `professionCntKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusProfessionCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAssignStatusProfessionCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusStackCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyAssignStatusStackCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusStackCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyAssignStatusStackCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyAssignStatusStackCntToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionL01Schema = z
  .discriminatedUnion("$type", [LandFootballActionSchema, LegionModeOnlyAddLastProfessionLevelActionSchema, LegionModeOnlyAddProfessionLevelActionSchema, LegionModeOnlyAddProfessionLevelFromLastSelectCardsActionSchema, LegionModeOnlyAssignCardCntToBBActionSchema, LegionModeOnlyAssignCardPriceToBBActionSchema, LegionModeOnlyAssignDangerLevelToBBActionSchema, LegionModeOnlyAssignSpecifiedProfessionStackCntToBBActionSchema, LegionModeOnlyAssignStatusProfessionCntToBBActionSchema, LegionModeOnlyAssignStatusStackCntToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionL01>;
