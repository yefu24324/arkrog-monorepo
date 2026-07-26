/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ModifyCharacterAbilityRangeAction, ModifyCharacterAttackTriggerRangeIdAction, ModifyCharacterLimitAction, ModifyCharacterSkillAbilityBlackboardAction, ModifyCharacterSpineColorAction, ModifyCostAction, ModifyCostIncreaseTimeAction, ModifyDamageValueWithFixedValueAction, ModifyDynamicVarAction, ModifyEnemyGraphicScaleAction, BattleActionM05 } from "../../../../types/buff-template-data/actions/m/actions-m-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterAbilityRange, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCharacterAbilityRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCharacterAbilityRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyCharacterAbilityRangeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ModifyCharacterAbilityRangeAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAbilityRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.null().describe("ModifyCharacterAbilityRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAbilityRangeAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("ModifyCharacterAbilityRangeAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAbilityRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ModifyCharacterAbilityRangeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterAbilityRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCharacterAbilityRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterAttackTriggerRangeId, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCharacterAttackTriggerRangeIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCharacterAttackTriggerRangeId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyCharacterAttackTriggerRangeIdAction 的 `modes` 配置字段；准确战斗语义待确认。 */
    "_modes": z.array(z.number()).describe("ModifyCharacterAttackTriggerRangeIdAction 的 `modes` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAttackTriggerRangeIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_SOURCE","TARGET"]).describe("ModifyCharacterAttackTriggerRangeIdAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAttackTriggerRangeIdAction 的 `sourceMode` 配置字段；准确战斗语义待确认。 */
    "_sourceMode": z.number().describe("ModifyCharacterAttackTriggerRangeIdAction 的 `sourceMode` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAttackTriggerRangeIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ModifyCharacterAttackTriggerRangeIdAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAttackTriggerRangeIdAction 的 `useCurrentModeRangeId` 配置字段；准确战斗语义待确认。 */
    "_useCurrentModeRangeId": z.boolean().describe("ModifyCharacterAttackTriggerRangeIdAction 的 `useCurrentModeRangeId` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterAttackTriggerRangeIdAction 的 `useSpecifiedModeRangeId` 配置字段；准确战斗语义待确认。 */
    "_useSpecifiedModeRangeId": z.boolean().describe("ModifyCharacterAttackTriggerRangeIdAction 的 `useSpecifiedModeRangeId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterAttackTriggerRangeId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCharacterAttackTriggerRangeIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterLimit, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCharacterLimitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCharacterLimit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ModifyCharacterLimitAction 的 `getPlayerSideSource` 配置字段；准确战斗语义待确认。 */
    "_getPlayerSideSource": z.boolean().describe("ModifyCharacterLimitAction 的 `getPlayerSideSource` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterLimitAction 的 `isMins` 配置字段；准确战斗语义待确认。 */
    "_isMins": z.boolean().describe("ModifyCharacterLimitAction 的 `isMins` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterLimit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCharacterLimitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterSkillAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCharacterSkillAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCharacterSkillAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** ModifyCharacterSkillAbilityBlackboardAction 的 `updateSkillAbilitySelector` 配置字段；准确战斗语义待确认。 */
    "_updateSkillAbilitySelector": z.boolean().describe("ModifyCharacterSkillAbilityBlackboardAction 的 `updateSkillAbilitySelector` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterSkillAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCharacterSkillAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterSpineColor, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCharacterSpineColorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCharacterSpineColor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyCharacterSpineColorAction 的 `color` 配置字段；准确战斗语义待确认。 */
    "_color": z.string().describe("ModifyCharacterSpineColorAction 的 `color` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterSpineColorAction 的 `lockColor` 配置字段；准确战斗语义待确认。 */
    "_lockColor": z.boolean().describe("ModifyCharacterSpineColorAction 的 `lockColor` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterSpineColorAction 的 `newColor` 配置字段；准确战斗语义待确认。 */
    "_newColor": z.strictObject({
                       /** ModifyCharacterSpineColorAction 的 `a` 配置字段；准确战斗语义待确认。 */
                       "a": z.number().describe("ModifyCharacterSpineColorAction 的 `a` 配置字段；准确战斗语义待确认。"),
                       /** ModifyCharacterSpineColorAction 的 `b` 配置字段；准确战斗语义待确认。 */
                       "b": z.number().describe("ModifyCharacterSpineColorAction 的 `b` 配置字段；准确战斗语义待确认。"),
                       /** ModifyCharacterSpineColorAction 的 `g` 配置字段；准确战斗语义待确认。 */
                       "g": z.number().describe("ModifyCharacterSpineColorAction 的 `g` 配置字段；准确战斗语义待确认。"),
                       /** ModifyCharacterSpineColorAction 的 `r` 配置字段；准确战斗语义待确认。 */
                       "r": z.number().describe("ModifyCharacterSpineColorAction 的 `r` 配置字段；准确战斗语义待确认。"),
                     }).describe("ModifyCharacterSpineColorAction 的 `newColor` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterSpineColorAction 的 `setColorDirectly` 配置字段；准确战斗语义待确认。 */
    "_setColorDirectly": z.boolean().describe("ModifyCharacterSpineColorAction 的 `setColorDirectly` 配置字段；准确战斗语义待确认。"),
    /** ModifyCharacterSpineColorAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ModifyCharacterSpineColorAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCharacterSpineColor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCharacterSpineColorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCost, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ModifyCostAction 的 `forceToDisplayNegativeNumber` 配置字段；准确战斗语义待确认。 */
    "_forceToDisplayNegativeNumber": z.boolean().describe("ModifyCostAction 的 `forceToDisplayNegativeNumber` 配置字段；准确战斗语义待确认。"),
    /** ModifyCostAction 的 `forceToDisplayNumber` 配置字段；准确战斗语义待确认。 */
    "_forceToDisplayNumber": z.boolean().describe("ModifyCostAction 的 `forceToDisplayNumber` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","MODIFIER_TARGET","PROJECTILE_TRACETARGET","SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyCostIncreaseTime, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyCostIncreaseTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyCostIncreaseTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ModifyCostIncreaseTimeAction 的 `deltaCostIncreaseTime` 配置字段；准确战斗语义待确认。 */
    "_deltaCostIncreaseTime": z.number().describe("ModifyCostIncreaseTimeAction 的 `deltaCostIncreaseTime` 配置字段；准确战斗语义待确认。"),
    /** ModifyCostIncreaseTimeAction 的 `isMulOtherwiseDiv` 配置字段；准确战斗语义待确认。 */
    "_isMulOtherwiseDiv": z.boolean().describe("ModifyCostIncreaseTimeAction 的 `isMulOtherwiseDiv` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyCostIncreaseTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyCostIncreaseTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyDamageValueWithFixedValue, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyDamageValueWithFixedValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyDamageValueWithFixedValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyDamageValueWithFixedValueAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("ModifyDamageValueWithFixedValueAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** ModifyDamageValueWithFixedValueAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.literal("NONE").describe("ModifyDamageValueWithFixedValueAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** ModifyDamageValueWithFixedValueAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("ModifyDamageValueWithFixedValueAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** ModifyDamageValueWithFixedValueAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("ModifyDamageValueWithFixedValueAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyDamageValueWithFixedValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyDamageValueWithFixedValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyDynamicVar, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyDynamicVarActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyDynamicVar, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyDynamicVar, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyDynamicVarAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyEnemyGraphicScale, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyEnemyGraphicScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyEnemyGraphicScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyEnemyGraphicScaleAction 的 `isAdd` 配置字段；准确战斗语义待确认。 */
    "_isAdd": z.boolean().describe("ModifyEnemyGraphicScaleAction 的 `isAdd` 配置字段；准确战斗语义待确认。"),
    /** ModifyEnemyGraphicScaleAction 的 `maxValue` 配置字段；准确战斗语义待确认。 */
    "_maxValue": z.number().describe("ModifyEnemyGraphicScaleAction 的 `maxValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyEnemyGraphicScaleAction 的 `needMax` 配置字段；准确战斗语义待确认。 */
    "_needMax": z.boolean().describe("ModifyEnemyGraphicScaleAction 的 `needMax` 配置字段；准确战斗语义待确认。"),
    /** ModifyEnemyGraphicScaleAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("ModifyEnemyGraphicScaleAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ModifyEnemyGraphicScaleAction 的 `scaleValue` 配置字段；准确战斗语义待确认。 */
    "_scaleValue": z.number().describe("ModifyEnemyGraphicScaleAction 的 `scaleValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyEnemyGraphicScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyEnemyGraphicScaleAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM05Schema = z
  .discriminatedUnion("$type", [ModifyCharacterAbilityRangeActionSchema, ModifyCharacterAttackTriggerRangeIdActionSchema, ModifyCharacterLimitActionSchema, ModifyCharacterSkillAbilityBlackboardActionSchema, ModifyCharacterSpineColorActionSchema, ModifyCostActionSchema, ModifyCostIncreaseTimeActionSchema, ModifyDamageValueWithFixedValueActionSchema, ModifyDynamicVarActionSchema, ModifyEnemyGraphicScaleActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM05>;
