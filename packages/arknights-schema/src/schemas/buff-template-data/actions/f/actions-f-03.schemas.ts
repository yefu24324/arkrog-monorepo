/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FilterByGlobalBlackboardAction, FilterByGridManhattanDistanceAction, FilterByOccupiedRemainingCharacterCntAction, FilterByShieldValueAction, FilterByStormDirectionValueAction, FilterByTargetAttributeAction, FilterByTargetDataLevelAction, FilterByTargetEpRatioAction, FilterByTargetHpAction, FilterByTargetHpRatioAction, BattleActionF03 } from "../../../../types/buff-template-data/actions/f/actions-f-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByGlobalBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByGlobalBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByGlobalBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FilterByGlobalBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。 */
    "_channel": z.enum(["CHARACTER","ENEMY","E_NUM","LEVEL","ROGUELIKE"]).describe("FilterByGlobalBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。"),
    /** FilterByGlobalBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("FilterByGlobalBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByGlobalBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterByGlobalBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByGlobalBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByGlobalBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByGridManhattanDistance, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByGridManhattanDistanceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByGridManhattanDistance, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByGridManhattanDistanceAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
    "_compareValue": z.number().describe("FilterByGridManhattanDistanceAction 的 `compareValue` 配置字段；准确战斗语义待确认。"),
    /** FilterByGridManhattanDistanceAction 的 `compareValueKey` 配置字段；准确战斗语义待确认。 */
    "_compareValueKey": z.null().describe("FilterByGridManhattanDistanceAction 的 `compareValueKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByGridManhattanDistanceAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GE").describe("FilterByGridManhattanDistanceAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByGridManhattanDistanceAction 的 `firstGridColKey` 配置字段；准确战斗语义待确认。 */
    "_firstGridColKey": z.string().describe("FilterByGridManhattanDistanceAction 的 `firstGridColKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByGridManhattanDistanceAction 的 `firstGridRowKey` 配置字段；准确战斗语义待确认。 */
    "_firstGridRowKey": z.string().describe("FilterByGridManhattanDistanceAction 的 `firstGridRowKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByGridManhattanDistanceAction 的 `secondGridColKey` 配置字段；准确战斗语义待确认。 */
    "_secondGridColKey": z.string().describe("FilterByGridManhattanDistanceAction 的 `secondGridColKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByGridManhattanDistanceAction 的 `secondGridRowKey` 配置字段；准确战斗语义待确认。 */
    "_secondGridRowKey": z.string().describe("FilterByGridManhattanDistanceAction 的 `secondGridRowKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByGridManhattanDistance, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByGridManhattanDistanceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByOccupiedRemainingCharacterCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByOccupiedRemainingCharacterCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByOccupiedRemainingCharacterCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByOccupiedRemainingCharacterCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("FilterByOccupiedRemainingCharacterCntAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByOccupiedRemainingCharacterCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByOccupiedRemainingCharacterCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByShieldValue, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByShieldValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByShieldValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByShieldValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LE"]).describe("FilterByShieldValueAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByShieldValueAction 的 `enableFilterSource` 配置字段；准确战斗语义待确认。 */
    "_enableFilterSource": z.boolean().describe("FilterByShieldValueAction 的 `enableFilterSource` 配置字段；准确战斗语义待确认。"),
    /** FilterByShieldValueAction 的 `filterHostOrToken` 配置字段；准确战斗语义待确认。 */
    "_filterHostOrToken": z.boolean().describe("FilterByShieldValueAction 的 `filterHostOrToken` 配置字段；准确战斗语义待确认。"),
    /** FilterByShieldValueAction 的 `filterSource` 配置字段；准确战斗语义待确认。 */
    "_filterSource": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("FilterByShieldValueAction 的 `filterSource` 配置字段；准确战斗语义待确认。"),
    /** FilterByShieldValueAction 的 `passIfNoSource` 配置字段；准确战斗语义待确认。 */
    "_passIfNoSource": z.boolean().describe("FilterByShieldValueAction 的 `passIfNoSource` 配置字段；准确战斗语义待确认。"),
    /** FilterByShieldValueAction 的 `shieldKey` 配置字段；准确战斗语义待确认。 */
    "_shieldKey": z.string().describe("FilterByShieldValueAction 的 `shieldKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByShieldValueAction 的 `shieldValue` 配置字段；准确战斗语义待确认。 */
    "_shieldValue": z.number().describe("FilterByShieldValueAction 的 `shieldValue` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByShieldValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByShieldValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByStormDirectionValue, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByStormDirectionValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByStormDirectionValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByStormDirectionValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
    "_anotherKeyToCompare": z.null().describe("FilterByStormDirectionValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。"),
    /** FilterByStormDirectionValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("EQUALS").describe("FilterByStormDirectionValueAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByStormDirectionValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterByStormDirectionValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByStormDirectionValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByStormDirectionValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetAttribute, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetAttributeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetAttribute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["BLOCK_CNT","MASS_LEVEL","MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** FilterByTargetAttributeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","GT","LE","LT"]).describe("FilterByTargetAttributeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetAttributeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("FilterByTargetAttributeAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetAttributeAction 的 `useFloat` 配置字段；准确战斗语义待确认。 */
    "_useFloat": z.boolean().describe("FilterByTargetAttributeAction 的 `useFloat` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetAttributeAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("FilterByTargetAttributeAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetAttributeAction 的 `valueFP` 配置字段；准确战斗语义待确认。 */
    "_valueFP": z.number().describe("FilterByTargetAttributeAction 的 `valueFP` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetAttribute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetAttributeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetDataLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetDataLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetDataLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetDataLevelAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","LE"]).describe("FilterByTargetDataLevelAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetDataLevelAction 的 `level` 配置字段；准确战斗语义待确认。 */
    "_level": z.number().describe("FilterByTargetDataLevelAction 的 `level` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetDataLevelAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("FilterByTargetDataLevelAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetDataLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetDataLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetEpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetEpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetEpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetEpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("LT").describe("FilterByTargetEpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetEpRatioAction 的 `epRatio` 配置字段；准确战斗语义待确认。 */
    "_epRatio": z.number().describe("FilterByTargetEpRatioAction 的 `epRatio` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetEpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetEpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetHp, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetHpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetHp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetHpAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GT","LE","LT"]).describe("FilterByTargetHpAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetHpAction 的 `hpValue` 配置字段；准确战斗语义待确认。 */
    "_hpValue": z.strictObject({
                      /** FilterByTargetHpAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                      "_serializedValue": z.number().describe("FilterByTargetHpAction 的 `serializedValue` 配置字段；准确战斗语义待确认。"),
                    }).describe("FilterByTargetHpAction 的 `hpValue` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetHp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetHpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetHpRatioAction 的 `blackboardPrefix` 配置字段；准确战斗语义待确认。 */
    "_blackboardPrefix": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("FilterByTargetHpRatioAction 的 `blackboardPrefix` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetHpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("FilterByTargetHpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** FilterByTargetHpRatioAction 的 `useSourceHpRatio` 配置字段；准确战斗语义待确认。 */
    "_useSourceHpRatio": z.boolean().describe("FilterByTargetHpRatioAction 的 `useSourceHpRatio` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetHpRatioAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("FilterByTargetHpRatioAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetHpRatioAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF03Schema = z
  .discriminatedUnion("$type", [FilterByGlobalBlackboardActionSchema, FilterByGridManhattanDistanceActionSchema, FilterByOccupiedRemainingCharacterCntActionSchema, FilterByShieldValueActionSchema, FilterByStormDirectionValueActionSchema, FilterByTargetAttributeActionSchema, FilterByTargetDataLevelActionSchema, FilterByTargetEpRatioActionSchema, FilterByTargetHpActionSchema, FilterByTargetHpRatioActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF03>;
