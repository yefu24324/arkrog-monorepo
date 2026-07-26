/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CalculateBlackboardValueViaParamsAction, CalculateFeverSpShowBuffRemainingProgressAction, CalculateTraitAbilityBlackboardAction, CancelModifierAction, ChangeAnimatorMeshBySandboxKilledBossAction, ChangeAnimatorMeshRendererAction, ChangeAnimatorMeshRendererViaIndexListAction, ChangeCharBlockModeAction, ChangeEnemyLevitateHeightImmediatelyAction, ChangeEnemyRouteMotionModeAction, BattleActionC01 } from "../../../../types/buff-template-data/actions/c/actions-c-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CalculateBlackboardValueViaParams, Assembly-CSharp 的严格 Action 数据。
 */
export const CalculateBlackboardValueViaParamsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CalculateBlackboardValueViaParams, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CalculateBlackboardValueViaParamsAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("CalculateBlackboardValueViaParamsAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `addParamKey` 配置字段；准确战斗语义待确认。 */
    "_addParamKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CalculateBlackboardValueViaParamsAction 的 `addParamKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `dividedParamKey` 配置字段；准确战斗语义待确认。 */
    "_dividedParamKey": z.union([
                              z.null(),
                              z.string(),
                            ]).describe("CalculateBlackboardValueViaParamsAction 的 `dividedParamKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `finalAbs` 配置字段；准确战斗语义待确认。 */
    "_finalAbs": z.boolean().describe("CalculateBlackboardValueViaParamsAction 的 `finalAbs` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `finalCeil` 配置字段；准确战斗语义待确认。 */
    "_finalCeil": z.boolean().describe("CalculateBlackboardValueViaParamsAction 的 `finalCeil` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `finalFloor` 配置字段；准确战斗语义待确认。 */
    "_finalFloor": z.boolean().describe("CalculateBlackboardValueViaParamsAction 的 `finalFloor` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `finalRound` 配置字段；准确战斗语义待确认。 */
    "_finalRound": z.boolean().describe("CalculateBlackboardValueViaParamsAction 的 `finalRound` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `inputKey` 配置字段；准确战斗语义待确认。 */
    "_inputKey": z.string().describe("CalculateBlackboardValueViaParamsAction 的 `inputKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。 */
    "_maxValueKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CalculateBlackboardValueViaParamsAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `minusParamKey` 配置字段；准确战斗语义待确认。 */
    "_minusParamKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("CalculateBlackboardValueViaParamsAction 的 `minusParamKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `minValueKey` 配置字段；准确战斗语义待确认。 */
    "_minValueKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CalculateBlackboardValueViaParamsAction 的 `minValueKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `multiplyParamKey` 配置字段；准确战斗语义待确认。 */
    "_multiplyParamKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("CalculateBlackboardValueViaParamsAction 的 `multiplyParamKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
    "_outputKey": z.string().describe("CalculateBlackboardValueViaParamsAction 的 `outputKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `useAbilityBlackboard` 配置字段；准确战斗语义待确认。 */
    "_useAbilityBlackboard": z.boolean().describe("CalculateBlackboardValueViaParamsAction 的 `useAbilityBlackboard` 配置字段；准确战斗语义待确认。"),
    /** CalculateBlackboardValueViaParamsAction 的 `useRemainder` 配置字段；准确战斗语义待确认。 */
    "_useRemainder": z.boolean().describe("CalculateBlackboardValueViaParamsAction 的 `useRemainder` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CalculateBlackboardValueViaParams, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CalculateBlackboardValueViaParamsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CalculateFeverSpShowBuffRemainingProgress, Assembly-CSharp 的严格 Action 数据。
 */
export const CalculateFeverSpShowBuffRemainingProgressActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CalculateFeverSpShowBuffRemainingProgress, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CalculateFeverSpShowBuffRemainingProgressAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
    "_feverKey": z.string().describe("CalculateFeverSpShowBuffRemainingProgressAction 的 `feverKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateFeverSpShowBuffRemainingProgressAction 的 `passedTimeBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_passedTimeBlackboardKey": z.string().describe("CalculateFeverSpShowBuffRemainingProgressAction 的 `passedTimeBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateFeverSpShowBuffRemainingProgressAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_targetBlackboardKey": z.string().describe("CalculateFeverSpShowBuffRemainingProgressAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CalculateFeverSpShowBuffRemainingProgress, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CalculateFeverSpShowBuffRemainingProgressAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CalculateTraitAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CalculateTraitAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CalculateTraitAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CalculateTraitAbilityBlackboardAction 的 `addBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_addBlackboardKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("CalculateTraitAbilityBlackboardAction 的 `addBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateTraitAbilityBlackboardAction 的 `fromBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_fromBlackboardKey": z.union([
                                z.null(),
                                z.string(),
                              ]).describe("CalculateTraitAbilityBlackboardAction 的 `fromBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** CalculateTraitAbilityBlackboardAction 的 `isSub` 配置字段；准确战斗语义待确认。 */
    "_isSub": z.boolean().describe("CalculateTraitAbilityBlackboardAction 的 `isSub` 配置字段；准确战斗语义待确认。"),
    /** CalculateTraitAbilityBlackboardAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_targetBlackboardKey": z.string().describe("CalculateTraitAbilityBlackboardAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** CalculateTraitAbilityBlackboardAction 的 `useTraitBBToAdd` 配置字段；准确战斗语义待确认。 */
    "_useTraitBBToAdd": z.boolean().describe("CalculateTraitAbilityBlackboardAction 的 `useTraitBBToAdd` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CalculateTraitAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CalculateTraitAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CancelModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const CancelModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CancelModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CancelModifierAction 的 `reason` 配置字段；准确战斗语义待确认。 */
    "_reason": z.enum(["BLOCKED","INTERRUPT","NONE","UNHURTABLE"]).describe("CancelModifierAction 的 `reason` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CancelModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CancelModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeAnimatorMeshBySandboxKilledBoss, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeAnimatorMeshBySandboxKilledBossActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeAnimatorMeshBySandboxKilledBoss, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeAnimatorMeshBySandboxKilledBossAction 的 `enable` 配置字段；准确战斗语义待确认。 */
    "_enable": z.boolean().describe("ChangeAnimatorMeshBySandboxKilledBossAction 的 `enable` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshBySandboxKilledBossAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("ChangeAnimatorMeshBySandboxKilledBossAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeAnimatorMeshBySandboxKilledBoss, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeAnimatorMeshBySandboxKilledBossAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRenderer, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeAnimatorMeshRendererActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRenderer, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeAnimatorMeshRendererAction 的 `enable` 配置字段；准确战斗语义待确认。 */
    "_enable": z.boolean().describe("ChangeAnimatorMeshRendererAction 的 `enable` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshRendererAction 的 `exclusive` 配置字段；准确战斗语义待确认。 */
    "_exclusive": z.boolean().describe("ChangeAnimatorMeshRendererAction 的 `exclusive` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshRendererAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("ChangeAnimatorMeshRendererAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshRendererAction 的 `rendererCurModeIndex` 配置字段；准确战斗语义待确认。 */
    "_rendererCurModeIndex": z.boolean().describe("ChangeAnimatorMeshRendererAction 的 `rendererCurModeIndex` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshRendererAction 的 `rendererIndex` 配置字段；准确战斗语义待确认。 */
    "_rendererIndex": z.number().describe("ChangeAnimatorMeshRendererAction 的 `rendererIndex` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRenderer, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeAnimatorMeshRendererAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRendererViaIndexList, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeAnimatorMeshRendererViaIndexListActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRendererViaIndexList, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeAnimatorMeshRendererViaIndexListAction 的 `enable` 配置字段；准确战斗语义待确认。 */
    "_enable": z.boolean().describe("ChangeAnimatorMeshRendererViaIndexListAction 的 `enable` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshRendererViaIndexListAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("ChangeAnimatorMeshRendererViaIndexListAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ChangeAnimatorMeshRendererViaIndexListAction 的 `rendererIndexList` 配置字段；准确战斗语义待确认。 */
    "_rendererIndexList": z.array(z.number()).describe("ChangeAnimatorMeshRendererViaIndexListAction 的 `rendererIndexList` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeAnimatorMeshRendererViaIndexList, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeAnimatorMeshRendererViaIndexListAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeCharBlockMode, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeCharBlockModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeCharBlockMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeCharBlockModeAction 的 `blockMode` 配置字段；准确战斗语义待确认。 */
    "_blockMode": z.enum(["E_NUM","FLY","WALK"]).describe("ChangeCharBlockModeAction 的 `blockMode` 配置字段；准确战斗语义待确认。"),
    /** ChangeCharBlockModeAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
    "_resetToDefault": z.boolean().describe("ChangeCharBlockModeAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。"),
    /** ChangeCharBlockModeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ChangeCharBlockModeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeCharBlockMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeCharBlockModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeEnemyLevitateHeightImmediately, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeEnemyLevitateHeightImmediatelyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeEnemyLevitateHeightImmediately, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeEnemyLevitateHeightImmediatelyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ChangeEnemyLevitateHeightImmediatelyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeEnemyLevitateHeightImmediately, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeEnemyLevitateHeightImmediatelyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeEnemyRouteMotionMode, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeEnemyRouteMotionModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeEnemyRouteMotionMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeEnemyRouteMotionModeAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.enum(["FLY","WALK"]).describe("ChangeEnemyRouteMotionModeAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnemyRouteMotionModeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ChangeEnemyRouteMotionModeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeEnemyRouteMotionMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeEnemyRouteMotionModeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC01Schema = z
  .discriminatedUnion("$type", [CalculateBlackboardValueViaParamsActionSchema, CalculateFeverSpShowBuffRemainingProgressActionSchema, CalculateTraitAbilityBlackboardActionSchema, CancelModifierActionSchema, ChangeAnimatorMeshBySandboxKilledBossActionSchema, ChangeAnimatorMeshRendererActionSchema, ChangeAnimatorMeshRendererViaIndexListActionSchema, ChangeCharBlockModeActionSchema, ChangeEnemyLevitateHeightImmediatelyActionSchema, ChangeEnemyRouteMotionModeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC01>;
