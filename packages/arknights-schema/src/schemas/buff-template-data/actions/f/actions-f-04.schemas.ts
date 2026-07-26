/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FilterByTargetMassLevelAction, FilterByTargetSpRatioAction, FilterByTargetSPTypeAction, FilterCardStateAction, FilterCharacterAdvancedBuildStateMaskAction, FilterCharacterCntByProfessionAction, FilterCharacterEvolvePhaseAction, FilterCharacterKeyAction, FilterCharacterLastDeathReasonAction, FilterChargeTimesAction, BattleActionF04 } from "../../../../types/buff-template-data/actions/f/actions-f-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetMassLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetMassLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetMassLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetMassLevelAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","LE"]).describe("FilterByTargetMassLevelAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetMassLevelAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("FilterByTargetMassLevelAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetMassLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetMassLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetSpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetSpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetSpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetSpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("FilterByTargetSpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterByTargetSpRatioAction 的 `spRatio` 配置字段；准确战斗语义待确认。 */
    "_spRatio": z.number().describe("FilterByTargetSpRatioAction 的 `spRatio` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetSpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetSpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetSPType, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterByTargetSPTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterByTargetSPType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterByTargetSPTypeAction 的 `spType` 配置字段；准确战斗语义待确认。 */
    "_spType": z.enum(["INCREASE_WHEN_ATTACK","INCREASE_WHEN_TAKEN_DAMAGE"]).describe("FilterByTargetSPTypeAction 的 `spType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterByTargetSPType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterByTargetSPTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterCardState, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterCardStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterCardState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterCardStateAction 的 `cardState` 配置字段；准确战斗语义待确认。 */
    "_cardState": z.string().describe("FilterCardStateAction 的 `cardState` 配置字段；准确战斗语义待确认。"),
    /** FilterCardStateAction 的 `filterTokenOrHostCard` 配置字段；准确战斗语义待确认。 */
    "_filterTokenOrHostCard": z.boolean().describe("FilterCardStateAction 的 `filterTokenOrHostCard` 配置字段；准确战斗语义待确认。"),
    /** FilterCardStateAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("FilterCardStateAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterCardState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterCardStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterAdvancedBuildStateMask, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterCharacterAdvancedBuildStateMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterCharacterAdvancedBuildStateMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterCharacterAdvancedBuildStateMaskAction 的 `mask` 配置字段；准确战斗语义待确认。 */
    "_mask": z.literal("IN_SPECIAL_BUILD").describe("FilterCharacterAdvancedBuildStateMaskAction 的 `mask` 配置字段；准确战斗语义待确认。"),
    /** FilterCharacterAdvancedBuildStateMaskAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("FilterCharacterAdvancedBuildStateMaskAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterAdvancedBuildStateMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterCharacterAdvancedBuildStateMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterCntByProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterCharacterCntByProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterCharacterCntByProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterCharacterCntByProfessionAction 的 `assignBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_assignBlackboardKey": z.string().describe("FilterCharacterCntByProfessionAction 的 `assignBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** FilterCharacterCntByProfessionAction 的 `assignToBB` 配置字段；准确战斗语义待确认。 */
    "_assignToBB": z.boolean().describe("FilterCharacterCntByProfessionAction 的 `assignToBB` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FilterCharacterCntByProfessionAction 的 `compareCnt` 配置字段；准确战斗语义待确认。 */
    "_compareCnt": z.number().describe("FilterCharacterCntByProfessionAction 的 `compareCnt` 配置字段；准确战斗语义待确认。"),
    /** FilterCharacterCntByProfessionAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GT").describe("FilterCharacterCntByProfessionAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** FilterCharacterCntByProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
    "_profession": z.array(z.enum(["CASTER","WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER"])).describe("FilterCharacterCntByProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterCntByProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterCharacterCntByProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterEvolvePhase, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterCharacterEvolvePhaseActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterCharacterEvolvePhase, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterCharacterEvolvePhaseAction 的 `phaseLevel` 配置字段；准确战斗语义待确认。 */
    "_phaseLevel": z.number().describe("FilterCharacterEvolvePhaseAction 的 `phaseLevel` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterEvolvePhase, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterCharacterEvolvePhaseAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterKey, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterCharacterKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterCharacterKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterCharacterKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("FilterCharacterKeyAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterCharacterKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterLastDeathReason, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterCharacterLastDeathReasonActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterCharacterLastDeathReason, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterCharacterLastDeathReasonAction 的 `characterType` 配置字段；准确战斗语义待确认。 */
    "_characterType": z.literal("BUFF_OWNER").describe("FilterCharacterLastDeathReasonAction 的 `characterType` 配置字段；准确战斗语义待确认。"),
    /** FilterCharacterLastDeathReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。 */
    "_finishReason": z.enum(["MOVE_LIKE_RESPAWN_EXTERNAL","MOVE_LIKE_RESPAWN_SELF"]).describe("FilterCharacterLastDeathReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterCharacterLastDeathReason, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterCharacterLastDeathReasonAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FilterChargeTimes, Assembly-CSharp 的严格 Action 数据。
 */
export const FilterChargeTimesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FilterChargeTimes, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FilterChargeTimesAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.literal("GT").describe("FilterChargeTimesAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** FilterChargeTimesAction 的 `isExCharge` 配置字段；准确战斗语义待确认。 */
    "_isExCharge": z.boolean().describe("FilterChargeTimesAction 的 `isExCharge` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FilterChargeTimesAction 的 `times` 配置字段；准确战斗语义待确认。 */
    "_times": z.number().describe("FilterChargeTimesAction 的 `times` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FilterChargeTimes, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FilterChargeTimesAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF04Schema = z
  .discriminatedUnion("$type", [FilterByTargetMassLevelActionSchema, FilterByTargetSpRatioActionSchema, FilterByTargetSPTypeActionSchema, FilterCardStateActionSchema, FilterCharacterAdvancedBuildStateMaskActionSchema, FilterCharacterCntByProfessionActionSchema, FilterCharacterEvolvePhaseActionSchema, FilterCharacterKeyActionSchema, FilterCharacterLastDeathReasonActionSchema, FilterChargeTimesActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF04>;
