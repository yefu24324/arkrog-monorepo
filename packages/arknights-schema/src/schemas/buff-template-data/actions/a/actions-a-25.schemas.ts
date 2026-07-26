/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignSpecificPositionAmongPositionListToBlackboardAction, AssignStealAttributeAbilityTotalValueToBBAction, AssignSubSpineConfigIndexToBBAction, AssignSurroundBuildingCountToBBAction, AssignTargetsCountToBBAction, AssignTileBlackboardAction, AssignTileToBBUseAbilitySelectorAction, AssignTokenCardCntToBBAction, AssignTokenCntToBBAction, AssignTotalResCountToBBAction, BattleActionA25 } from "../../../../types/buff-template-data/actions/a/actions-a-25.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignSpecificPositionAmongPositionListToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignSpecificPositionAmongPositionListToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignSpecificPositionAmongPositionListToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignSpecificPositionAmongPositionListToBlackboardAction 的 `checkReachable` 配置字段；准确战斗语义待确认。 */
    "_checkReachable": z.boolean().describe("AssignSpecificPositionAmongPositionListToBlackboardAction 的 `checkReachable` 配置字段；准确战斗语义待确认。"),
    /** AssignSpecificPositionAmongPositionListToBlackboardAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
    "_filterType": z.literal("NEAREST_TO_TARGET").describe("AssignSpecificPositionAmongPositionListToBlackboardAction 的 `filterType` 配置字段；准确战斗语义待确认。"),
    /** AssignSpecificPositionAmongPositionListToBlackboardAction 的 `positionListKey` 配置字段；准确战斗语义待确认。 */
    "_positionListKey": z.string().describe("AssignSpecificPositionAmongPositionListToBlackboardAction 的 `positionListKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignSpecificPositionAmongPositionListToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignSpecificPositionAmongPositionListToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignStealAttributeAbilityTotalValueToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignStealAttributeAbilityTotalValueToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignStealAttributeAbilityTotalValueToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignStealAttributeAbilityTotalValueToBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AssignStealAttributeAbilityTotalValueToBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** AssignStealAttributeAbilityTotalValueToBBAction 的 `assignStealMaxValue` 配置字段；准确战斗语义待确认。 */
    "_assignStealMaxValue": z.boolean().describe("AssignStealAttributeAbilityTotalValueToBBAction 的 `assignStealMaxValue` 配置字段；准确战斗语义待确认。"),
    /** AssignStealAttributeAbilityTotalValueToBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("AssignStealAttributeAbilityTotalValueToBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** AssignStealAttributeAbilityTotalValueToBBAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
    "_useFirstActiveAbility": z.boolean().describe("AssignStealAttributeAbilityTotalValueToBBAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignStealAttributeAbilityTotalValueToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignStealAttributeAbilityTotalValueToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignSubSpineConfigIndexToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignSubSpineConfigIndexToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignSubSpineConfigIndexToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignSubSpineConfigIndexToBBAction 的 `indexKey` 配置字段；准确战斗语义待确认。 */
    "_indexKey": z.string().describe("AssignSubSpineConfigIndexToBBAction 的 `indexKey` 配置字段；准确战斗语义待确认。"),
    /** AssignSubSpineConfigIndexToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignSubSpineConfigIndexToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignSubSpineConfigIndexToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignSubSpineConfigIndexToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignSurroundBuildingCountToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignSurroundBuildingCountToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignSurroundBuildingCountToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignSurroundBuildingCountToBBAction 的 `filterTags` 配置字段；准确战斗语义待确认。 */
    "_filterTags": z.array(z.string()).describe("AssignSurroundBuildingCountToBBAction 的 `filterTags` 配置字段；准确战斗语义待确认。"),
    /** AssignSurroundBuildingCountToBBAction 的 `filterTagsRequireAll` 配置字段；准确战斗语义待确认。 */
    "_filterTagsRequireAll": z.boolean().describe("AssignSurroundBuildingCountToBBAction 的 `filterTagsRequireAll` 配置字段；准确战斗语义待确认。"),
    /** AssignSurroundBuildingCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("AssignSurroundBuildingCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignSurroundBuildingCountToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignSurroundBuildingCountToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTargetsCountToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTargetsCountToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTargetsCountToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignTargetsCountToBBAction 的 `targetKey` 配置字段；准确战斗语义待确认。 */
    "_targetKey": z.string().describe("AssignTargetsCountToBBAction 的 `targetKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTargetsCountToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTargetsCountToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTileBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTileBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTileBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignTileBlackboardAction 的 `assignKey` 配置字段；准确战斗语义待确认。 */
    "_assignKey": z.string().describe("AssignTileBlackboardAction 的 `assignKey` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.number().describe("AssignTileBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `getTileFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_getTileFromBlackboard": z.boolean().describe("AssignTileBlackboardAction 的 `getTileFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
    "_isRemove": z.boolean().describe("AssignTileBlackboardAction 的 `isRemove` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `isString` 配置字段；准确战斗语义待确认。 */
    "_isString": z.boolean().describe("AssignTileBlackboardAction 的 `isString` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignTileBlackboardAction 的 `tileKey` 配置字段；准确战斗语义待确认。 */
    "_tileKey": z.string().describe("AssignTileBlackboardAction 的 `tileKey` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetOldTile": z.boolean().describe("AssignTileBlackboardAction 的 `useTargetOldTile` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRootTile": z.boolean().describe("AssignTileBlackboardAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。"),
    /** AssignTileBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.null().describe("AssignTileBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTileBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTileBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTileToBBUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTileToBBUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTileToBBUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignTileToBBUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AssignTileToBBUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTileToBBUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTileToBBUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTokenCardCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTokenCardCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTokenCardCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignTokenCardCntToBBAction 的 `assignMaxCount` 配置字段；准确战斗语义待确认。 */
    "_assignMaxCount": z.boolean().describe("AssignTokenCardCntToBBAction 的 `assignMaxCount` 配置字段；准确战斗语义待确认。"),
    /** AssignTokenCardCntToBBAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
    "_countKey": z.string().describe("AssignTokenCardCntToBBAction 的 `countKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTokenCardCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTokenCardCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTokenCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTokenCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTokenCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignTokenCntToBBAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
    "_actionTargetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("AssignTokenCntToBBAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignTokenCntToBBAction 的 `useTargetHost` 配置字段；准确战斗语义待确认。 */
    "_useTargetHost": z.boolean().describe("AssignTokenCntToBBAction 的 `useTargetHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTokenCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTokenCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTotalResCountToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTotalResCountToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTotalResCountToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignTotalResCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("AssignTotalResCountToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTotalResCountToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTotalResCountToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA25Schema = z
  .discriminatedUnion("$type", [AssignSpecificPositionAmongPositionListToBlackboardActionSchema, AssignStealAttributeAbilityTotalValueToBBActionSchema, AssignSubSpineConfigIndexToBBActionSchema, AssignSurroundBuildingCountToBBActionSchema, AssignTargetsCountToBBActionSchema, AssignTileBlackboardActionSchema, AssignTileToBBUseAbilitySelectorActionSchema, AssignTokenCardCntToBBActionSchema, AssignTokenCntToBBActionSchema, AssignTotalResCountToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA25>;
