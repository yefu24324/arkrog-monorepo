/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RistarRecordDirectionAction, RO4DLC2EndBossSealTileSkillAction, RO4DLC2TriggerBossSealTileSkillAction, Rogue6StormDirectionCheckAction, RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction, RoguelikeCheckZoneTypeAction, RoguelikeDeifyModeCheckStageAction, RoguelikeDeifyModeRegisterChosenCharacterAction, RoguelikeDeifyModeRegisterDeifyTrapAction, RoguelikeDuelModeCheckStageAction, BattleActionR07 } from "../../../../types/buff-template-data/actions/r/actions-r-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RistarRecordDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const RistarRecordDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RistarRecordDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RistarRecordDirectionAction 的 `isAura` 配置字段；准确战斗语义待确认。 */
    "_isAura": z.boolean().describe("RistarRecordDirectionAction 的 `isAura` 配置字段；准确战斗语义待确认。"),
    /** RistarRecordDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_SOURCE","MODIFIER_SOURCE"]).describe("RistarRecordDirectionAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RistarRecordDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RistarRecordDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RO4DLC2EndBossSealTileSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const RO4DLC2EndBossSealTileSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RO4DLC2EndBossSealTileSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RO4DLC2EndBossSealTileSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
    "_evnSysKey": z.string().describe("RO4DLC2EndBossSealTileSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RO4DLC2EndBossSealTileSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RO4DLC2EndBossSealTileSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RO4DLC2TriggerBossSealTileSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const RO4DLC2TriggerBossSealTileSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RO4DLC2TriggerBossSealTileSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RO4DLC2TriggerBossSealTileSkillAction 的 `endColKey` 配置字段；准确战斗语义待确认。 */
    "_endColKey": z.string().describe("RO4DLC2TriggerBossSealTileSkillAction 的 `endColKey` 配置字段；准确战斗语义待确认。"),
    /** RO4DLC2TriggerBossSealTileSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
    "_evnSysKey": z.string().describe("RO4DLC2TriggerBossSealTileSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。"),
    /** RO4DLC2TriggerBossSealTileSkillAction 的 `intervalKey` 配置字段；准确战斗语义待确认。 */
    "_intervalKey": z.string().describe("RO4DLC2TriggerBossSealTileSkillAction 的 `intervalKey` 配置字段；准确战斗语义待确认。"),
    /** RO4DLC2TriggerBossSealTileSkillAction 的 `startColKey` 配置字段；准确战斗语义待确认。 */
    "_startColKey": z.string().describe("RO4DLC2TriggerBossSealTileSkillAction 的 `startColKey` 配置字段；准确战斗语义待确认。"),
    /** RO4DLC2TriggerBossSealTileSkillAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RO4DLC2TriggerBossSealTileSkillAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RO4DLC2TriggerBossSealTileSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RO4DLC2TriggerBossSealTileSkillAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Rogue6StormDirectionCheck, Assembly-CSharp 的严格 Action 数据。
 */
export const Rogue6StormDirectionCheckActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Rogue6StormDirectionCheck, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Rogue6StormDirectionCheckAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Rogue6StormDirectionCheckAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Rogue6StormDirectionCheck, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Rogue6StormDirectionCheckAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeAssignCharacterInCandleHolderCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeAssignCharacterInCandleHolderCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeAssignCharacterInCandleHolderCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction 的 `blackboardKey` 配置字段；准确战斗语义待确认。 */
    "blackboardKey": z.string().describe("RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction 的 `blackboardKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeAssignCharacterInCandleHolderCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeAssignCharacterInCandleHolderCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeCheckZoneType, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeCheckZoneTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeCheckZoneType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeCheckZoneTypeAction 的 `zoneType` 配置字段；准确战斗语义待确认。 */
    "_zoneType": z.literal("SP").describe("RoguelikeCheckZoneTypeAction 的 `zoneType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeCheckZoneType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeCheckZoneTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDeifyModeCheckStage, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeDeifyModeCheckStageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeDeifyModeCheckStage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeDeifyModeCheckStageAction 的 `gameStage` 配置字段；准确战斗语义待确认。 */
    "gameStage": z.string().describe("RoguelikeDeifyModeCheckStageAction 的 `gameStage` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDeifyModeCheckStage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeDeifyModeCheckStageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterChosenCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeDeifyModeRegisterChosenCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterChosenCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeDeifyModeRegisterChosenCharacterAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("RoguelikeDeifyModeRegisterChosenCharacterAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterChosenCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeDeifyModeRegisterChosenCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterDeifyTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeDeifyModeRegisterDeifyTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterDeifyTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeDeifyModeRegisterDeifyTrapAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RoguelikeDeifyModeRegisterDeifyTrapAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDeifyModeRegisterDeifyTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeDeifyModeRegisterDeifyTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDuelModeCheckStage, Assembly-CSharp 的严格 Action 数据。
 */
export const RoguelikeDuelModeCheckStageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RoguelikeDuelModeCheckStage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RoguelikeDuelModeCheckStageAction 的 `gameStage` 配置字段；准确战斗语义待确认。 */
    "gameStage": z.string().describe("RoguelikeDuelModeCheckStageAction 的 `gameStage` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RoguelikeDuelModeCheckStage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RoguelikeDuelModeCheckStageAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR07Schema = z
  .discriminatedUnion("$type", [RistarRecordDirectionActionSchema, RO4DLC2EndBossSealTileSkillActionSchema, RO4DLC2TriggerBossSealTileSkillActionSchema, Rogue6StormDirectionCheckActionSchema, RoguelikeAssignCharacterInCandleHolderCntToBlackboardActionSchema, RoguelikeCheckZoneTypeActionSchema, RoguelikeDeifyModeCheckStageActionSchema, RoguelikeDeifyModeRegisterChosenCharacterActionSchema, RoguelikeDeifyModeRegisterDeifyTrapActionSchema, RoguelikeDuelModeCheckStageActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR07>;
