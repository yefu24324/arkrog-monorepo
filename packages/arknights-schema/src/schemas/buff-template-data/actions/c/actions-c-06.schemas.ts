/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckCharSkillUsedUpAction, CheckConatinsMapTagsAction, CheckContainsBuffAction, CheckContainsBuffWithBlackboardAction, CheckContainsCardBuffAction, CheckContainsDeckBuffAction, CheckContainsDerviedBuffAction, CheckContainsEnvSystemAction, CheckContainsResistableAbnormalFlagsBuffAction, CheckContainsStatusResistableBuffAction, BattleActionC06 } from "../../../../types/buff-template-data/actions/c/actions-c-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharSkillUsedUp, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharSkillUsedUpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharSkillUsedUp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharSkillUsedUpAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckCharSkillUsedUpAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharSkillUsedUp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharSkillUsedUpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckConatinsMapTags, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckConatinsMapTagsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckConatinsMapTags, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckConatinsMapTagsAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
    "_mapTags": z.array(z.string()).describe("CheckConatinsMapTagsAction 的 `mapTags` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckConatinsMapTags, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckConatinsMapTagsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("CheckContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
    "_buffSourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE"]).describe("CheckContainsBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("CheckContainsBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsBuffAction 的 `checkSourceHost` 配置字段；准确战斗语义待确认。 */
    "_checkSourceHost": z.boolean().describe("CheckContainsBuffAction 的 `checkSourceHost` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("CheckContainsBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["ABILITY_OWNER","BUFF_OWNER","BUFF_SOURCE","MAINBUFF_SOURCE","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","PROJECTILE_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CheckContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。 */
    "isAND": z.boolean().describe("CheckContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsBuffWithBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsBuffWithBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsBuffWithBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsBuffWithBlackboardAction 的 `blackboardSettings` 配置字段；准确战斗语义待确认。 */
    "_blackboardSettings": z.array(z.strictObject({
                                 /** 黑板参数键或当前配置项的稳定键。 */
                                 "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                                 /** CheckContainsBuffWithBlackboardAction 的 `val` 配置字段；准确战斗语义待确认。 */
                                 "val": z.number().describe("CheckContainsBuffWithBlackboardAction 的 `val` 配置字段；准确战斗语义待确认。"),
                                 /** CheckContainsBuffWithBlackboardAction 的 `valStr` 配置字段；准确战斗语义待确认。 */
                                 "valStr": z.null().describe("CheckContainsBuffWithBlackboardAction 的 `valStr` 配置字段；准确战斗语义待确认。"),
                               })).describe("CheckContainsBuffWithBlackboardAction 的 `blackboardSettings` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsBuffWithBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("CheckContainsBuffWithBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsBuffWithBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsBuffWithBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsCardBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsCardBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsCardBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsCardBuffAction 的 `checkSourceUid` 配置字段；准确战斗语义待确认。 */
    "_checkSourceUid": z.boolean().describe("CheckContainsCardBuffAction 的 `checkSourceUid` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsCardBuffAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("CheckContainsCardBuffAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsCardBuffAction 的 `readBuffKeyFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_readBuffKeyFromBlackboard": z.boolean().describe("CheckContainsCardBuffAction 的 `readBuffKeyFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsCardBuffAction 的 `selectTargetHostOrToken` 配置字段；准确战斗语义待确认。 */
    "_selectTargetHostOrToken": z.boolean().describe("CheckContainsCardBuffAction 的 `selectTargetHostOrToken` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** CheckContainsCardBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("CheckContainsCardBuffAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsCardBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsCardBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsDeckBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsDeckBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsDeckBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsDeckBuffAction 的 `cardUidBBKey` 配置字段；准确战斗语义待确认。 */
    "_cardUidBBKey": z.null().describe("CheckContainsDeckBuffAction 的 `cardUidBBKey` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsDeckBuffAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("CheckContainsDeckBuffAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsDeckBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckContainsDeckBuffAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CheckContainsDeckBuffAction 的 `useSpecifiedCardUid` 配置字段；准确战斗语义待确认。 */
    "_useSpecifiedCardUid": z.boolean().describe("CheckContainsDeckBuffAction 的 `useSpecifiedCardUid` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsDeckBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsDeckBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsDerviedBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsDerviedBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsDerviedBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsDerviedBuffAction 的 `derviedBuffKey` 配置字段；准确战斗语义待确认。 */
    "_derviedBuffKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("CheckContainsDerviedBuffAction 的 `derviedBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsDerviedBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsDerviedBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsEnvSystem, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsEnvSystemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsEnvSystem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckContainsEnvSystemAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
    "_envSysKey": z.string().describe("CheckContainsEnvSystemAction 的 `envSysKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsEnvSystem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsEnvSystemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsResistableAbnormalFlagsBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsResistableAbnormalFlagsBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsResistableAbnormalFlagsBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsResistableAbnormalFlagsBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsResistableAbnormalFlagsBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsStatusResistableBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckContainsStatusResistableBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckContainsStatusResistableBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckContainsStatusResistableBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckContainsStatusResistableBuffAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC06Schema = z
  .discriminatedUnion("$type", [CheckCharSkillUsedUpActionSchema, CheckConatinsMapTagsActionSchema, CheckContainsBuffActionSchema, CheckContainsBuffWithBlackboardActionSchema, CheckContainsCardBuffActionSchema, CheckContainsDeckBuffActionSchema, CheckContainsDerviedBuffActionSchema, CheckContainsEnvSystemActionSchema, CheckContainsResistableAbnormalFlagsBuffActionSchema, CheckContainsStatusResistableBuffActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC06>;
