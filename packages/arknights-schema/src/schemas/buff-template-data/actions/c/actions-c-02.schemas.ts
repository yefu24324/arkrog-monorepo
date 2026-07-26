/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ChangeEnvSystemWithTilesAction, ChangeModifierSourceAction, ChangeMotionModeAction, CharacterHasValidTokenAction, CharSearchBlockeeImmediateAction, CharSkillManualTriggerCountEventAction, CharSkillNotCountTimesAction, CheckAbilityDamageDeadlyAction, CheckAbnormalComboAction, CheckAbnormalComboImmuneAction, BattleActionC02 } from "../../../../types/buff-template-data/actions/c/actions-c-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeEnvSystemWithTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeEnvSystemWithTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeEnvSystemWithTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeEnvSystemWithTilesAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ChangeEnvSystemWithTilesAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnvSystemWithTilesAction 的 `abilitySource` 配置字段；准确战斗语义待确认。 */
    "_abilitySource": z.literal("BUFF_OWNER").describe("ChangeEnvSystemWithTilesAction 的 `abilitySource` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnvSystemWithTilesAction 的 `envKey` 配置字段；准确战斗语义待确认。 */
    "_envKey": z.string().describe("ChangeEnvSystemWithTilesAction 的 `envKey` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnvSystemWithTilesAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。 */
    "_selectorTarget": z.literal("BUFF_OWNER").describe("ChangeEnvSystemWithTilesAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnvSystemWithTilesAction 的 `statusEvent` 配置字段；准确战斗语义待确认。 */
    "_statusEvent": z.string().describe("ChangeEnvSystemWithTilesAction 的 `statusEvent` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnvSystemWithTilesAction 的 `tryRuntimeLoad` 配置字段；准确战斗语义待确认。 */
    "_tryRuntimeLoad": z.boolean().describe("ChangeEnvSystemWithTilesAction 的 `tryRuntimeLoad` 配置字段；准确战斗语义待确认。"),
    /** ChangeEnvSystemWithTilesAction 的 `useBlackboardForEnvSystem` 配置字段；准确战斗语义待确认。 */
    "_useBlackboardForEnvSystem": z.boolean().describe("ChangeEnvSystemWithTilesAction 的 `useBlackboardForEnvSystem` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeEnvSystemWithTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeEnvSystemWithTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeModifierSource, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeModifierSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeModifierSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeModifierSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeModifierSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ChangeMotionMode, Assembly-CSharp 的严格 Action 数据。
 */
export const ChangeMotionModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ChangeMotionMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ChangeMotionModeAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.enum(["FLY","WALK"]).describe("ChangeMotionModeAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** ChangeMotionModeAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
    "_resetToDefault": z.boolean().describe("ChangeMotionModeAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。"),
    /** ChangeMotionModeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("ChangeMotionModeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ChangeMotionMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ChangeMotionModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CharacterHasValidToken, Assembly-CSharp 的严格 Action 数据。
 */
export const CharacterHasValidTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CharacterHasValidToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CharacterHasValidTokenAction 的 `hostType` 配置字段；准确战斗语义待确认。 */
    "_hostType": z.literal("BUFF_OWNER").describe("CharacterHasValidTokenAction 的 `hostType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CharacterHasValidToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CharacterHasValidTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CharSearchBlockeeImmediate, Assembly-CSharp 的严格 Action 数据。
 */
export const CharSearchBlockeeImmediateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CharSearchBlockeeImmediate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CharSearchBlockeeImmediate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CharSearchBlockeeImmediateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CharSkillManualTriggerCountEvent, Assembly-CSharp 的严格 Action 数据。
 */
export const CharSkillManualTriggerCountEventActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CharSkillManualTriggerCountEvent, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CharSkillManualTriggerCountEvent, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CharSkillManualTriggerCountEventAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CharSkillNotCountTimes, Assembly-CSharp 的严格 Action 数据。
 */
export const CharSkillNotCountTimesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CharSkillNotCountTimes, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CharSkillNotCountTimes, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CharSkillNotCountTimesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAbilityDamageDeadly, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAbilityDamageDeadlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAbilityDamageDeadly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PHYSICAL").describe("本次伤害使用的伤害类型。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAbilityDamageDeadly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAbilityDamageDeadlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalCombo, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAbnormalComboActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAbnormalCombo, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckAbnormalComboAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
    "_abnormalCombo": z.string().describe("CheckAbnormalComboAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
    /** CheckAbnormalComboAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckAbnormalComboAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalCombo, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAbnormalComboAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalComboImmune, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckAbnormalComboImmuneActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckAbnormalComboImmune, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckAbnormalComboImmuneAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
    "_abnormalCombo": z.string().describe("CheckAbnormalComboImmuneAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
    /** CheckAbnormalComboImmuneAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckAbnormalComboImmuneAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckAbnormalComboImmune, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckAbnormalComboImmuneAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC02Schema = z
  .discriminatedUnion("$type", [ChangeEnvSystemWithTilesActionSchema, ChangeModifierSourceActionSchema, ChangeMotionModeActionSchema, CharacterHasValidTokenActionSchema, CharSearchBlockeeImmediateActionSchema, CharSkillManualTriggerCountEventActionSchema, CharSkillNotCountTimesActionSchema, CheckAbilityDamageDeadlyActionSchema, CheckAbnormalComboActionSchema, CheckAbnormalComboImmuneActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC02>;
