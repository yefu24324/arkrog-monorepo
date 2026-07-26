/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SetBossCountDownAction, SetBuffLifeTimeAndRemainingTimeAction, SetBuildableHighLightUpdaterDirtyAction, SetBuildCntToBlackboardAction, SetCameraMoveDirectlyDisableStateAction, SetCastSkillCostAction, SetCharacterDontOccupyDeployCntFlagAction, SetCharacterInfoToAbilityBlackboardAsKeyAction, SetCharacterMaxEsAction, SetCostIncreaseTimeAction, BattleActionS08 } from "../../../../types/buff-template-data/actions/s/actions-s-08.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetBossCountDown, Assembly-CSharp 的严格 Action 数据。
 */
export const SetBossCountDownActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetBossCountDown, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetBossCountDownAction 的 `cdBBKey` 配置字段；准确战斗语义待确认。 */
    "_cdBBKey": z.string().describe("SetBossCountDownAction 的 `cdBBKey` 配置字段；准确战斗语义待确认。"),
    /** SetBossCountDownAction 的 `cdValue` 配置字段；准确战斗语义待确认。 */
    "_cdValue": z.number().describe("SetBossCountDownAction 的 `cdValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetBossCountDown, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetBossCountDownAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetBuffLifeTimeAndRemainingTime, Assembly-CSharp 的严格 Action 数据。
 */
export const SetBuffLifeTimeAndRemainingTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetBuffLifeTimeAndRemainingTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetBuffLifeTimeAndRemainingTimeAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
    "_buffType": z.enum(["BUFF","MAIN_BUFF"]).describe("SetBuffLifeTimeAndRemainingTimeAction 的 `buffType` 配置字段；准确战斗语义待确认。"),
    /** SetBuffLifeTimeAndRemainingTimeAction 的 `lifeTimeKey` 配置字段；准确战斗语义待确认。 */
    "_lifeTimeKey": z.string().describe("SetBuffLifeTimeAndRemainingTimeAction 的 `lifeTimeKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetBuffLifeTimeAndRemainingTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetBuffLifeTimeAndRemainingTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetBuildableHighLightUpdaterDirty, Assembly-CSharp 的严格 Action 数据。
 */
export const SetBuildableHighLightUpdaterDirtyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetBuildableHighLightUpdaterDirty, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetBuildableHighLightUpdaterDirty, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetBuildableHighLightUpdaterDirtyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetBuildCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const SetBuildCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetBuildCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** SetBuildCntToBlackboardAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SetBuildCntToBlackboardAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetBuildCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetBuildCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetCameraMoveDirectlyDisableState, Assembly-CSharp 的严格 Action 数据。
 */
export const SetCameraMoveDirectlyDisableStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetCameraMoveDirectlyDisableState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetCameraMoveDirectlyDisableStateAction 的 `disableCameraMoveDirectly` 配置字段；准确战斗语义待确认。 */
    "disableCameraMoveDirectly": z.boolean().describe("SetCameraMoveDirectlyDisableStateAction 的 `disableCameraMoveDirectly` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetCameraMoveDirectlyDisableState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetCameraMoveDirectlyDisableStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetCastSkillCost, Assembly-CSharp 的严格 Action 数据。
 */
export const SetCastSkillCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetCastSkillCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetCastSkillCostAction 的 `assignOldValueKey` 配置字段；准确战斗语义待确认。 */
    "_assignOldValueKey": z.union([
                                z.null(),
                                z.string(),
                              ]).describe("SetCastSkillCostAction 的 `assignOldValueKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SetCastSkillCostAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("SetCastSkillCostAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** SetCastSkillCostAction 的 `valueBbKey` 配置字段；准确战斗语义待确认。 */
    "_valueBbKey": z.string().describe("SetCastSkillCostAction 的 `valueBbKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetCastSkillCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetCastSkillCostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetCharacterDontOccupyDeployCntFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const SetCharacterDontOccupyDeployCntFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetCharacterDontOccupyDeployCntFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetCharacterDontOccupyDeployCntFlagAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("SetCharacterDontOccupyDeployCntFlagAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetCharacterDontOccupyDeployCntFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetCharacterDontOccupyDeployCntFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetCharacterInfoToAbilityBlackboardAsKey, Assembly-CSharp 的严格 Action 数据。
 */
export const SetCharacterInfoToAbilityBlackboardAsKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetCharacterInfoToAbilityBlackboardAsKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
    "_infoType": z.literal("UNIQUE_ID").describe("SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `infoType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("SetCharacterInfoToAbilityBlackboardAsKeyAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetCharacterInfoToAbilityBlackboardAsKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetCharacterInfoToAbilityBlackboardAsKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetCharacterMaxEs, Assembly-CSharp 的严格 Action 数据。
 */
export const SetCharacterMaxEsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetCharacterMaxEs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("读取或写入战斗黑板的参数键。"),
    /** SetCharacterMaxEsAction 的 `maxEsRatio` 配置字段；准确战斗语义待确认。 */
    "_maxEsRatio": z.number().describe("SetCharacterMaxEsAction 的 `maxEsRatio` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetCharacterMaxEs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetCharacterMaxEsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetCostIncreaseTime, Assembly-CSharp 的严格 Action 数据。
 */
export const SetCostIncreaseTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetCostIncreaseTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** SetCostIncreaseTimeAction 的 `costIncreaseTime` 配置字段；准确战斗语义待确认。 */
    "_costIncreaseTime": z.number().describe("SetCostIncreaseTimeAction 的 `costIncreaseTime` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetCostIncreaseTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetCostIncreaseTimeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS08Schema = z
  .discriminatedUnion("$type", [SetBossCountDownActionSchema, SetBuffLifeTimeAndRemainingTimeActionSchema, SetBuildableHighLightUpdaterDirtyActionSchema, SetBuildCntToBlackboardActionSchema, SetCameraMoveDirectlyDisableStateActionSchema, SetCastSkillCostActionSchema, SetCharacterDontOccupyDeployCntFlagActionSchema, SetCharacterInfoToAbilityBlackboardAsKeyActionSchema, SetCharacterMaxEsActionSchema, SetCostIncreaseTimeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS08>;
