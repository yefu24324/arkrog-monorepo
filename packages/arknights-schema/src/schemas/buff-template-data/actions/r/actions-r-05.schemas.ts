/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ReplaceAbilityDamageTypeAction, ResetAbilityAtkScaleAction, ResetAllBuffsTriggerTimerAction, ResetBornStateAction, ResetBuffAbilityAtkScaleWithBuffCntAction, ResetCardRespawnTimeAction, ResetDataFunLiveModeOnlyAction, ResetTokenRespawnTimeAction, RespawnCharacterAction, RespawnCharacterByCardUidAction, BattleActionR05 } from "../../../../types/buff-template-data/actions/r/actions-r-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ReplaceAbilityDamageType, Assembly-CSharp 的严格 Action 数据。
 */
export const ReplaceAbilityDamageTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ReplaceAbilityDamageType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL"]).describe("本次伤害使用的伤害类型。"),
    /** ReplaceAbilityDamageTypeAction 的 `modes` 配置字段；准确战斗语义待确认。 */
    "_modes": z.array(z.number()).describe("ReplaceAbilityDamageTypeAction 的 `modes` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ReplaceAbilityDamageType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ReplaceAbilityDamageTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetAbilityAtkScale, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetAbilityAtkScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetAbilityAtkScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ResetAbilityAtkScaleAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ResetAbilityAtkScaleAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ResetAbilityAtkScaleAction 的 `atkScale` 配置字段；准确战斗语义待确认。 */
    "_atkScale": z.string().describe("ResetAbilityAtkScaleAction 的 `atkScale` 配置字段；准确战斗语义待确认。"),
    /** ResetAbilityAtkScaleAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。 */
    "_defaultAtkScale": z.number().describe("ResetAbilityAtkScaleAction 的 `defaultAtkScale` 配置字段；准确战斗语义待确认。"),
    /** ResetAbilityAtkScaleAction 的 `overwriteAtkScale` 配置字段；准确战斗语义待确认。 */
    "_overwriteAtkScale": z.boolean().describe("ResetAbilityAtkScaleAction 的 `overwriteAtkScale` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** ResetAbilityAtkScaleAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。 */
    "_useBuffAbility": z.boolean().describe("ResetAbilityAtkScaleAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetAbilityAtkScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetAbilityAtkScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetAllBuffsTriggerTimer, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetAllBuffsTriggerTimerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetAllBuffsTriggerTimer, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetAllBuffsTriggerTimer, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetAllBuffsTriggerTimerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetBornState, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetBornStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetBornState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ResetBornStateAction 的 `animKey` 配置字段；准确战斗语义待确认。 */
    "_animKey": z.string().describe("ResetBornStateAction 的 `animKey` 配置字段；准确战斗语义待确认。"),
    /** ResetBornStateAction 的 `effect` 配置字段；准确战斗语义待确认。 */
    "_effect": z.string().describe("ResetBornStateAction 的 `effect` 配置字段；准确战斗语义待确认。"),
    /** ResetBornStateAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ResetBornStateAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetBornState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetBornStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetBuffAbilityAtkScaleWithBuffCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetBuffAbilityAtkScaleWithBuffCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetBuffAbilityAtkScaleWithBuffCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("ResetBuffAbilityAtkScaleWithBuffCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.literal("BUFF_SOURCE").describe("ResetBuffAbilityAtkScaleWithBuffCntAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("ResetBuffAbilityAtkScaleWithBuffCntAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.string().describe("ResetBuffAbilityAtkScaleWithBuffCntAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `factorValue` 配置字段；准确战斗语义待确认。 */
    "_factorValue": z.string().describe("ResetBuffAbilityAtkScaleWithBuffCntAction 的 `factorValue` 配置字段；准确战斗语义待确认。"),
    /** ResetBuffAbilityAtkScaleWithBuffCntAction 的 `overwriteAtkScale` 配置字段；准确战斗语义待确认。 */
    "_overwriteAtkScale": z.boolean().describe("ResetBuffAbilityAtkScaleWithBuffCntAction 的 `overwriteAtkScale` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetBuffAbilityAtkScaleWithBuffCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetBuffAbilityAtkScaleWithBuffCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetCardRespawnTime, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetCardRespawnTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetCardRespawnTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ResetCardRespawnTimeAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("ResetCardRespawnTimeAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** ResetCardRespawnTimeAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
    "_waitFirstPeriod": z.boolean().describe("ResetCardRespawnTimeAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetCardRespawnTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetCardRespawnTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetDataFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetDataFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetDataFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetDataFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetDataFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ResetTokenRespawnTime, Assembly-CSharp 的严格 Action 数据。
 */
export const ResetTokenRespawnTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ResetTokenRespawnTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ResetTokenRespawnTimeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ResetTokenRespawnTimeAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** ResetTokenRespawnTimeAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
    "_waitFirstPeriod": z.boolean().describe("ResetTokenRespawnTimeAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ResetTokenRespawnTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ResetTokenRespawnTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RespawnCharacter, Assembly-CSharp 的严格 Action 数据。
 */
export const RespawnCharacterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RespawnCharacter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RespawnCharacterAction 的 `addSharedBlackboardValueIfExists` 配置字段；准确战斗语义待确认。 */
    "_addSharedBlackboardValueIfExists": z.boolean().describe("RespawnCharacterAction 的 `addSharedBlackboardValueIfExists` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `assignSkillProgress` 配置字段；准确战斗语义待确认。 */
    "_assignSkillProgress": z.boolean().describe("RespawnCharacterAction 的 `assignSkillProgress` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `buildCheckParam` 配置字段；准确战斗语义待确认。 */
    "_buildCheckParam": z.strictObject({
                              /** RespawnCharacterAction 的 `ignoreBuildableType` 配置字段；准确战斗语义待确认。 */
                              "ignoreBuildableType": z.boolean().describe("RespawnCharacterAction 的 `ignoreBuildableType` 配置字段；准确战斗语义待确认。"),
                            }).describe("RespawnCharacterAction 的 `buildCheckParam` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `canRespawnInPlace` 配置字段；准确战斗语义待确认。 */
    "_canRespawnInPlace": z.boolean().describe("RespawnCharacterAction 的 `canRespawnInPlace` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("RespawnCharacterAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `forceRespawnInPlace` 配置字段；准确战斗语义待确认。 */
    "_forceRespawnInPlace": z.boolean().describe("RespawnCharacterAction 的 `forceRespawnInPlace` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
    "_forceSpawn": z.boolean().describe("RespawnCharacterAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreAdvancedBuildableMask": z.boolean().describe("RespawnCharacterAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `loadDirectionFromBB` 配置字段；准确战斗语义待确认。 */
    "_loadDirectionFromBB": z.boolean().describe("RespawnCharacterAction 的 `loadDirectionFromBB` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `loadPosFromSharedBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadPosFromSharedBlackboard": z.boolean().describe("RespawnCharacterAction 的 `loadPosFromSharedBlackboard` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `recordRespawnToSharedData` 配置字段；准确战斗语义待确认。 */
    "_recordRespawnToSharedData": z.boolean().describe("RespawnCharacterAction 的 `recordRespawnToSharedData` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `respawnBBKey` 配置字段；准确战斗语义待确认。 */
    "_respawnBBKey": z.string().describe("RespawnCharacterAction 的 `respawnBBKey` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `respawnBlackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_respawnBlackboardKeys": z.array(z.string()).describe("RespawnCharacterAction 的 `respawnBlackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `respawnInPlaceBBKey` 配置字段；准确战斗语义待确认。 */
    "_respawnInPlaceBBKey": z.string().describe("RespawnCharacterAction 的 `respawnInPlaceBBKey` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `respawnInSameTile` 配置字段；准确战斗语义待确认。 */
    "_respawnInSameTile": z.boolean().describe("RespawnCharacterAction 的 `respawnInSameTile` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("RespawnCharacterAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** RespawnCharacterAction 的 `skillProgressBBKey` 配置字段；准确战斗语义待确认。 */
    "_skillProgressBBKey": z.string().describe("RespawnCharacterAction 的 `skillProgressBBKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** RespawnCharacterAction 的 `useExternalRespawn` 配置字段；准确战斗语义待确认。 */
    "_useExternalRespawn": z.boolean().describe("RespawnCharacterAction 的 `useExternalRespawn` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RespawnCharacter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RespawnCharacterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RespawnCharacterByCardUid, Assembly-CSharp 的严格 Action 数据。
 */
export const RespawnCharacterByCardUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RespawnCharacterByCardUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RespawnCharacterByCardUidAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
    "_ignoreAdvancedBuildableMask": z.boolean().describe("RespawnCharacterByCardUidAction 的 `ignoreAdvancedBuildableMask` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
    /** RespawnCharacterByCardUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。 */
    "_uidKey": z.string().describe("RespawnCharacterByCardUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RespawnCharacterByCardUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RespawnCharacterByCardUidAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR05Schema = z
  .discriminatedUnion("$type", [ReplaceAbilityDamageTypeActionSchema, ResetAbilityAtkScaleActionSchema, ResetAllBuffsTriggerTimerActionSchema, ResetBornStateActionSchema, ResetBuffAbilityAtkScaleWithBuffCntActionSchema, ResetCardRespawnTimeActionSchema, ResetDataFunLiveModeOnlyActionSchema, ResetTokenRespawnTimeActionSchema, RespawnCharacterActionSchema, RespawnCharacterByCardUidActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR05>;
