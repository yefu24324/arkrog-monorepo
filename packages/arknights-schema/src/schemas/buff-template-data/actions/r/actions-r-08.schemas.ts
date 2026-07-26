/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RoguelikeFilterCharacterInCandleHolderAction, RoguelikeFilterFragmentCarryCharAction, RoguelikeFilterHostrInCandleHolderAction, RoguelikeInheritEnemyHpAction, RoguelikeLogExpAction, RoguelikeLogExpUseSerializedTrapIDAction, RoguelikeRecordUnitStatusAction, RoguelikeShowToastRL04Action, RoguelikeShowToastRL05Action, RoguelikeShowToastRL06Action, BattleActionR08 } from "../../../../types/buff-template-data/actions/r/actions-r-08.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeFilterCharacterInCandleHolder, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeFilterCharacterInCandleHolderActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeFilterCharacterInCandleHolder, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeFilterCharacterInCandleHolderAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("RoguelikeFilterCharacterInCandleHolderAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeFilterCharacterInCandleHolder, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeFilterCharacterInCandleHolderAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeFilterFragmentCarryChar, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeFilterFragmentCarryCharActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeFilterFragmentCarryChar, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeFilterFragmentCarryCharAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("RoguelikeFilterFragmentCarryCharAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeFilterFragmentCarryChar, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeFilterFragmentCarryCharAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeFilterHostrInCandleHolder, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeFilterHostrInCandleHolderActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeFilterHostrInCandleHolder, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeFilterHostrInCandleHolderAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RoguelikeFilterHostrInCandleHolderAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeFilterHostrInCandleHolder, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeFilterHostrInCandleHolderAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeInheritEnemyHp, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeInheritEnemyHpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeInheritEnemyHp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeInheritEnemyHpAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RoguelikeInheritEnemyHpAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeInheritEnemyHp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeInheritEnemyHpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeLogExp, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeLogExpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeLogExp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeLogExpAction 的 `expKey` 配置字段；准确战斗语义待确认。 */
    "_expKey": z.union([
                     z.null(),
                     z.string(),
                   ]).describe("RoguelikeLogExpAction 的 `expKey` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeLogExpAction 的 `expType` 配置字段；准确战斗语义待确认。 */
    "_expType": z.enum(["ENEMY_KILLED","TRAP_GAINED"]).describe("RoguelikeLogExpAction 的 `expType` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeLogExpAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("RoguelikeLogExpAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeLogExp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeLogExpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeLogExpUseSerializedTrapID, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeLogExpUseSerializedTrapIDActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeLogExpUseSerializedTrapID, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeLogExpUseSerializedTrapIDAction 的 `expKey` 配置字段；准确战斗语义待确认。 */
    "_expKey": z.string().describe("RoguelikeLogExpUseSerializedTrapIDAction 的 `expKey` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeLogExpUseSerializedTrapIDAction 的 `trapID` 配置字段；准确战斗语义待确认。 */
    "_trapID": z.string().describe("RoguelikeLogExpUseSerializedTrapIDAction 的 `trapID` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeLogExpUseSerializedTrapID, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeLogExpUseSerializedTrapIDAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeRecordUnitStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeRecordUnitStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeRecordUnitStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeRecordUnitStatusAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RoguelikeRecordUnitStatusAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeRecordUnitStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeRecordUnitStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeShowToastRL04, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeShowToastRL04ActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeShowToastRL04, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeShowToastRL04Action 的 `lastTime` 配置字段；准确战斗语义待确认。 */
    "_lastTime": z.number().describe("RoguelikeShowToastRL04Action 的 `lastTime` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeShowToastRL04Action 的 `toastTypeRL04` 配置字段；准确战斗语义待确认。 */
    "_toastTypeRL04": z.string().describe("RoguelikeShowToastRL04Action 的 `toastTypeRL04` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeShowToastRL04, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeShowToastRL04Action>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeShowToastRL05, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeShowToastRL05ActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeShowToastRL05, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeShowToastRL05Action 的 `lastTime` 配置字段；准确战斗语义待确认。 */
    "_lastTime": z.number().describe("RoguelikeShowToastRL05Action 的 `lastTime` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeShowToastRL05Action 的 `toastTypeRL05` 配置字段；准确战斗语义待确认。 */
    "_toastTypeRL05": z.string().describe("RoguelikeShowToastRL05Action 的 `toastTypeRL05` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeShowToastRL05, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeShowToastRL05Action>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeShowToastRL06, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeShowToastRL06ActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeShowToastRL06, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeShowToastRL06Action 的 `lastTime` 配置字段；准确战斗语义待确认。 */
    "_lastTime": z.number().describe("RoguelikeShowToastRL06Action 的 `lastTime` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeShowToastRL06Action 的 `toastTypeRL06` 配置字段；准确战斗语义待确认。 */
    "_toastTypeRL06": z.string().describe("RoguelikeShowToastRL06Action 的 `toastTypeRL06` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeShowToastRL06, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeShowToastRL06Action>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR08Schema = z
  .discriminatedUnion("$type", [RoguelikeFilterCharacterInCandleHolderActionSchema, RoguelikeFilterFragmentCarryCharActionSchema, RoguelikeFilterHostrInCandleHolderActionSchema, RoguelikeInheritEnemyHpActionSchema, RoguelikeLogExpActionSchema, RoguelikeLogExpUseSerializedTrapIDActionSchema, RoguelikeRecordUnitStatusActionSchema, RoguelikeShowToastRL04ActionSchema, RoguelikeShowToastRL05ActionSchema, RoguelikeShowToastRL06ActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR08>;
