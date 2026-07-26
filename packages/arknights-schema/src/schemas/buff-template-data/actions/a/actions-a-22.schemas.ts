/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignHostBlackboardToBuffBlackboardAction, AssignHpRatioToBBAction, AssignIDToBlackboardAction, AssignLocationPosToBlackboardAction, AssignManhattanDistanceToBBAction, AssignMapPositionToBlackboardAction, AssignMaxSpToBlackboardAction, AssignMcgrafTileAction, AssignModifierOriginAtkToBBAction, AssignModifierRealDeltaToBBAction, BattleActionA22 } from "../../../../types/buff-template-data/actions/a/actions-a-22.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignHostBlackboardToBuffBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignHostBlackboardToBuffBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignHostBlackboardToBuffBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignHostBlackboardToBuffBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.number().describe("AssignHostBlackboardToBuffBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** AssignHostBlackboardToBuffBlackboardAction 的 `fromBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_fromBlackboardKey": z.string().describe("AssignHostBlackboardToBuffBlackboardAction 的 `fromBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignHostBlackboardToBuffBlackboardAction 的 `hostBuffKey` 配置字段；准确战斗语义待确认。 */
    "_hostBuffKey": z.string().describe("AssignHostBlackboardToBuffBlackboardAction 的 `hostBuffKey` 配置字段；准确战斗语义待确认。"),
    /** AssignHostBlackboardToBuffBlackboardAction 的 `hostTargetType` 配置字段；准确战斗语义待确认。 */
    "_hostTargetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("AssignHostBlackboardToBuffBlackboardAction 的 `hostTargetType` 配置字段；准确战斗语义待确认。"),
    /** AssignHostBlackboardToBuffBlackboardAction 的 `toBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_toBlackboardKey": z.string().describe("AssignHostBlackboardToBuffBlackboardAction 的 `toBlackboardKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignHostBlackboardToBuffBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignHostBlackboardToBuffBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignHpRatioToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignHpRatioToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignHpRatioToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignHpRatioToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignHpRatioToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignIDToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignIDToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignIDToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignIDToBlackboardAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.string().describe("AssignIDToBlackboardAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignIDToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignIDToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignLocationPosToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignLocationPosToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignLocationPosToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignLocationPosToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignLocationPosToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignManhattanDistanceToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignManhattanDistanceToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignManhattanDistanceToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignManhattanDistanceToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignManhattanDistanceToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignMapPositionToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignMapPositionToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignMapPositionToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignMapPositionToBlackboardAction 的 `XKey` 配置字段；准确战斗语义待确认。 */
    "_XKey": z.string().describe("AssignMapPositionToBlackboardAction 的 `XKey` 配置字段；准确战斗语义待确认。"),
    /** AssignMapPositionToBlackboardAction 的 `YKey` 配置字段；准确战斗语义待确认。 */
    "_YKey": z.string().describe("AssignMapPositionToBlackboardAction 的 `YKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignMapPositionToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignMapPositionToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignMaxSpToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignMaxSpToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignMaxSpToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignMaxSpToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignMaxSpToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignMcgrafTile, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignMcgrafTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignMcgrafTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignMcgrafTileAction 的 `options` 配置字段；准确战斗语义待确认。 */
    "_options": z.strictObject({
                      /** AssignMcgrafTileAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMask": z.literal("DEFAULT").describe("AssignMcgrafTileAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                      "advancedBuildableMaskExcept": z.boolean().describe("AssignMcgrafTileAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                      "allowAllAdvancedBuildableMask": z.boolean().describe("AssignMcgrafTileAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                      "allowNoneBuildableType": z.boolean().describe("AssignMcgrafTileAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                      "allowNonePassableMask": z.boolean().describe("AssignMcgrafTileAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "allowedTileBlackboardKey": z.null().describe("AssignMcgrafTileAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                      "buildableType": z.literal("MELEE").describe("AssignMcgrafTileAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                      "checkBuildableOrPassable": z.boolean().describe("AssignMcgrafTileAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                      "checkExtraBuildableCheckers": z.boolean().describe("AssignMcgrafTileAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                      "checkHeightType": z.boolean().describe("AssignMcgrafTileAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                      "checkTileHidden": z.boolean().describe("AssignMcgrafTileAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                      "checkTileMode": z.boolean().describe("AssignMcgrafTileAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                      "checkTileMoveCost": z.boolean().describe("AssignMcgrafTileAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                      "checkTileTypes": z.boolean().describe("AssignMcgrafTileAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                      "exceptTileTypes": z.boolean().describe("AssignMcgrafTileAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                      "excludeTileBlackboardKey": z.null().describe("AssignMcgrafTileAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                      "heightType": z.literal("LOWLAND").describe("AssignMcgrafTileAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                      "modeIndex": z.number().describe("AssignMcgrafTileAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                      "moveCostCompareType": z.literal("LT").describe("AssignMcgrafTileAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                      "moveCostThreshold": z.number().describe("AssignMcgrafTileAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                      "passableMask": z.literal("WALK_ONLY").describe("AssignMcgrafTileAction 的 `passableMask` 配置字段；准确战斗语义待确认。"),
                      /** AssignMcgrafTileAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                      "tileTypesMask": z.literal("DEFAULT").describe("AssignMcgrafTileAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。"),
                    }).describe("AssignMcgrafTileAction 的 `options` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignMcgrafTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignMcgrafTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignModifierOriginAtkToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignModifierOriginAtkToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignModifierOriginAtkToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignModifierOriginAtkToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignModifierOriginAtkToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignModifierRealDeltaToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignModifierRealDeltaToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignModifierRealDeltaToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignModifierRealDeltaToBBAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。 */
    "_modifierTargetType": z.enum(["HP","LIFE_POINT"]).describe("AssignModifierRealDeltaToBBAction 的 `modifierTargetType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignModifierRealDeltaToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignModifierRealDeltaToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA22Schema = z
  .discriminatedUnion("$type", [AssignHostBlackboardToBuffBlackboardActionSchema, AssignHpRatioToBBActionSchema, AssignIDToBlackboardActionSchema, AssignLocationPosToBlackboardActionSchema, AssignManhattanDistanceToBBActionSchema, AssignMapPositionToBlackboardActionSchema, AssignMaxSpToBlackboardActionSchema, AssignMcgrafTileActionSchema, AssignModifierOriginAtkToBBActionSchema, AssignModifierRealDeltaToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA22>;
