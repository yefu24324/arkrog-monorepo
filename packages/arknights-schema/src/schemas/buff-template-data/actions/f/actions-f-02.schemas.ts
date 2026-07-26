/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FilterAbilityValidCastTargetCntAction, FilterBuffKeyInSnapshotAction, FilterByAbilityFinishReasonAction, FilterByAbilityIgnorePalsyInterruptAction, FilterByBlackboardStrIsValueAction, FilterByBlackboardValueAction, FilterByBuffStackCountAction, FilterByCardUidInBlackboardAction, FilterByCharacterSharedBlackboardAction, FilterByExecuteBlackboardValueAction, BattleActionF02 } from "../../../../types/buff-template-data/actions/f/actions-f-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityValidCastTargetCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterAbilityValidCastTargetCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterAbilityValidCastTargetCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterAbilityValidCastTargetCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("EQUALS").describe("FilterAbilityValidCastTargetCntAction 的 `condType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterAbilityValidCastTargetCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterAbilityValidCastTargetCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterBuffKeyInSnapshot, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterBuffKeyInSnapshotActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterBuffKeyInSnapshot, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterBuffKeyInSnapshotAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("FilterBuffKeyInSnapshotAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** FilterBuffKeyInSnapshotAction 的 `mainBuff` 配置字段；准确战斗语义待确认。 */
    "_mainBuff": z.boolean().describe("FilterBuffKeyInSnapshotAction 的 `mainBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterBuffKeyInSnapshot, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterBuffKeyInSnapshotAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByAbilityFinishReason, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByAbilityFinishReasonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByAbilityFinishReason, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByAbilityFinishReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。 */
    "_finishReason": z.enum(["INTERRUPTED","NORMAL_EXIT","OWNER_DEAD","PALSY","TARGET_DEAD"]).describe("FilterByAbilityFinishReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。"),
    /** FilterByAbilityFinishReasonAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。 */
    "_useBuffAbility": z.boolean().describe("FilterByAbilityFinishReasonAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByAbilityFinishReason, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByAbilityFinishReasonAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByAbilityIgnorePalsyInterrupt, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByAbilityIgnorePalsyInterruptActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByAbilityIgnorePalsyInterrupt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByAbilityIgnorePalsyInterruptAction 的 `skipUnitCheck` 配置字段；准确战斗语义待确认。 */
    "_skipUnitCheck": z.boolean().describe("FilterByAbilityIgnorePalsyInterruptAction 的 `skipUnitCheck` 配置字段；准确战斗语义待确认。"),
    /** FilterByAbilityIgnorePalsyInterruptAction 的 `unset` 配置字段；准确战斗语义待确认。 */
    "_unset": z.boolean().describe("FilterByAbilityIgnorePalsyInterruptAction 的 `unset` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByAbilityIgnorePalsyInterrupt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByAbilityIgnorePalsyInterruptAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByBlackboardStrIsValue, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByBlackboardStrIsValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByBlackboardStrIsValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByBlackboardStrIsValueAction 的 `checkIsEqual` 配置字段；准确战斗语义待确认。 */
    "_checkIsEqual": z.boolean().describe("FilterByBlackboardStrIsValueAction 的 `checkIsEqual` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FilterByBlackboardStrIsValueAction 的 `useOrdinalIgnoreCase` 配置字段；准确战斗语义待确认。 */
    "_useOrdinalIgnoreCase": z.boolean().describe("FilterByBlackboardStrIsValueAction 的 `useOrdinalIgnoreCase` 配置字段；准确战斗语义待确认。"),
    /** FilterByBlackboardStrIsValueAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("FilterByBlackboardStrIsValueAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByBlackboardStrIsValueAction 的 `valueKeyToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueKeyToCompare": z.enum(["build_uid","cur_uid","new_uid","part_name_fx"]).describe("FilterByBlackboardStrIsValueAction 的 `valueKeyToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByBlackboardStrIsValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByBlackboardStrIsValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByBlackboardValue, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByBlackboardValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByBlackboardValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByBlackboardValueAction 的 `anotherBuff` 配置字段；准确战斗语义待确认。 */
    "_anotherBuff": z.boolean().describe("FilterByBlackboardValueAction 的 `anotherBuff` 配置字段；准确战斗语义待确认。"),
    /** FilterByBlackboardValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
    "_anotherKeyToCompare": z.union([
                                  z.null(),
                                  z.string(),
                                ]).describe("FilterByBlackboardValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FilterByBlackboardValueAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("FilterByBlackboardValueAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByBlackboardValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("FilterByBlackboardValueAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** FilterByBlackboardValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterByBlackboardValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByBlackboardValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByBlackboardValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByBuffStackCount, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByBuffStackCountActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByBuffStackCount, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByBuffStackCountAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FilterByBuffStackCountAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("FilterByBuffStackCountAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `checkFromUnoverridableBuffCount` 配置字段；准确战斗语义待确认。 */
    "_checkFromUnoverridableBuffCount": z.boolean().describe("FilterByBuffStackCountAction 的 `checkFromUnoverridableBuffCount` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `checkSnapshotBuff` 配置字段；准确战斗语义待确认。 */
    "_checkSnapshotBuff": z.boolean().describe("FilterByBuffStackCountAction 的 `checkSnapshotBuff` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。 */
    "_checkTargetHost": z.boolean().describe("FilterByBuffStackCountAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("FilterByBuffStackCountAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** FilterByBuffStackCountAction 的 `stackCount` 配置字段；准确战斗语义待确认。 */
    "_stackCount": z.number().describe("FilterByBuffStackCountAction 的 `stackCount` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。 */
    "_stackCountKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("FilterByBuffStackCountAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。"),
    /** FilterByBuffStackCountAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。 */
    "_stackCountPeeling": z.number().describe("FilterByBuffStackCountAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByBuffStackCount, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByBuffStackCountAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByCardUidInBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByCardUidInBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByCardUidInBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByCardUidInBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByCardUidInBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByCharacterSharedBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByCharacterSharedBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FilterByCharacterSharedBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GT","LE"]).describe("FilterByCharacterSharedBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("FilterByCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** FilterByCharacterSharedBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterByCharacterSharedBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
    /** FilterByCharacterSharedBlackboardAction 的 `valueToCompareKey` 配置字段；准确战斗语义待确认。 */
    "_valueToCompareKey": z.string().describe("FilterByCharacterSharedBlackboardAction 的 `valueToCompareKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByCharacterSharedBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByExecuteBlackboardValue, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByExecuteBlackboardValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByExecuteBlackboardValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByExecuteBlackboardValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
    "_anotherKeyToCompare": z.union([
                                  z.null(),
                                  z.enum(["attribute_buff_cnt","dynamic_2","first_add_danger_grade","max_block_damage_cnt","max_drop_count","max_fly_count","max_hit_count","min_target_cnt","second_add_danger_grade"]),
                                ]).describe("FilterByExecuteBlackboardValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FilterByExecuteBlackboardValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("FilterByExecuteBlackboardValueAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByExecuteBlackboardValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("FilterByExecuteBlackboardValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByExecuteBlackboardValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByExecuteBlackboardValueAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF02Schema = z
  .discriminatedUnion("$type", [FilterAbilityValidCastTargetCntActionSchema, FilterBuffKeyInSnapshotActionSchema, FilterByAbilityFinishReasonActionSchema, FilterByAbilityIgnorePalsyInterruptActionSchema, FilterByBlackboardStrIsValueActionSchema, FilterByBlackboardValueActionSchema, FilterByBuffStackCountActionSchema, FilterByCardUidInBlackboardActionSchema, FilterByCharacterSharedBlackboardActionSchema, FilterByExecuteBlackboardValueActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF02>;
