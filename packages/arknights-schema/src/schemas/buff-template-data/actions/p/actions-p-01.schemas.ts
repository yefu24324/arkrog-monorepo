/**
 * buff_template_data 的 P 组 Action Zod Schema。
 */

import { z } from "zod";

import type { PalsyBuffAddAction, PalsyBuffMaxCntUpdateAction, PauseAbilityAction, PickRandomBranchPhaseAction, PlayAudioAction, PlayBGMAction, PlayMeshAnimationAction, PlayProjectileAudioAction, PlayUnitAnimationAction, ProcessAllInfoFunLiveModeOnlyAction, BattleActionP01 } from "../../../../types/buff-template-data/actions/p/actions-p-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PalsyBuffAdd, Assembly-CSharp 的严格 Action 数据。
 */
export const PalsyBuffAddActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PalsyBuffAdd, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PalsyBuffAdd, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PalsyBuffAddAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PalsyBuffMaxCntUpdate, Assembly-CSharp 的严格 Action 数据。
 */
export const PalsyBuffMaxCntUpdateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PalsyBuffMaxCntUpdate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PalsyBuffMaxCntUpdateAction 的 `isLimitAppend` 配置字段；准确战斗语义待确认。 */
    "_isLimitAppend": z.boolean().describe("PalsyBuffMaxCntUpdateAction 的 `isLimitAppend` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PalsyBuffMaxCntUpdate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PalsyBuffMaxCntUpdateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PauseAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const PauseAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PauseAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PauseAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("PauseAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** PauseAbilityAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
    "_actionTargetType": z.literal("BUFF_OWNER").describe("PauseAbilityAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。"),
    /** PauseAbilityAction 的 `recoverFromPauseState` 配置字段；准确战斗语义待确认。 */
    "_recoverFromPauseState": z.boolean().describe("PauseAbilityAction 的 `recoverFromPauseState` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PauseAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PauseAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PickRandomBranchPhase, Assembly-CSharp 的严格 Action 数据。
 */
export const PickRandomBranchPhaseActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PickRandomBranchPhase, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PickRandomBranchPhaseAction 的 `blockGameFinish` 配置字段；准确战斗语义待确认。 */
    "_blockGameFinish": z.boolean().describe("PickRandomBranchPhaseAction 的 `blockGameFinish` 配置字段；准确战斗语义待确认。"),
    /** PickRandomBranchPhaseAction 的 `notRepeatInOneLoop` 配置字段；准确战斗语义待确认。 */
    "_notRepeatInOneLoop": z.boolean().describe("PickRandomBranchPhaseAction 的 `notRepeatInOneLoop` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PickRandomBranchPhase, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PickRandomBranchPhaseAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PlayAudio, Assembly-CSharp 的严格 Action 数据。
 */
export const PlayAudioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PlayAudio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PlayAudioAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
    "_audioSignal": z.string().describe("PlayAudioAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
    /** PlayAudioAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("PlayAudioAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PlayAudio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PlayAudioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PlayBGM, Assembly-CSharp 的严格 Action 数据。
 */
export const PlayBGMActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PlayBGM, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PlayBGMAction 的 `needSourceStateRunning` 配置字段；准确战斗语义待确认。 */
    "_needSourceStateRunning": z.boolean().describe("PlayBGMAction 的 `needSourceStateRunning` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PlayBGM, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PlayBGMAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PlayMeshAnimation, Assembly-CSharp 的严格 Action 数据。
 */
export const PlayMeshAnimationActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PlayMeshAnimation, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PlayMeshAnimationAction 的 `animation` 配置字段；准确战斗语义待确认。 */
    "_animation": z.string().describe("PlayMeshAnimationAction 的 `animation` 配置字段；准确战斗语义待确认。"),
    /** PlayMeshAnimationAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("PlayMeshAnimationAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PlayMeshAnimation, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PlayMeshAnimationAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PlayProjectileAudio, Assembly-CSharp 的严格 Action 数据。
 */
export const PlayProjectileAudioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PlayProjectileAudio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PlayProjectileAudioAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
    "_audioSignal": z.string().describe("PlayProjectileAudioAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PlayProjectileAudio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PlayProjectileAudioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+PlayUnitAnimation, Assembly-CSharp 的严格 Action 数据。
 */
export const PlayUnitAnimationActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+PlayUnitAnimation, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** PlayUnitAnimationAction 的 `animation` 配置字段；准确战斗语义待确认。 */
    "_animation": z.string().describe("PlayUnitAnimationAction 的 `animation` 配置字段；准确战斗语义待确认。"),
    /** PlayUnitAnimationAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("PlayUnitAnimationAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+PlayUnitAnimation, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<PlayUnitAnimationAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ProcessAllInfoFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const ProcessAllInfoFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ProcessAllInfoFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ProcessAllInfoFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ProcessAllInfoFunLiveModeOnlyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionP01Schema = z
  .discriminatedUnion("$type", [PalsyBuffAddActionSchema, PalsyBuffMaxCntUpdateActionSchema, PauseAbilityActionSchema, PickRandomBranchPhaseActionSchema, PlayAudioActionSchema, PlayBGMActionSchema, PlayMeshAnimationActionSchema, PlayProjectileAudioActionSchema, PlayUnitAnimationActionSchema, ProcessAllInfoFunLiveModeOnlyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionP01>;
