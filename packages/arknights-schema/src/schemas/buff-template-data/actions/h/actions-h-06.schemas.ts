/**
 * buff_template_data 的 H 组 Action Zod Schema。
 */

import { z } from "zod";

import type { HoldFootballAction, HostKillSummonedApopsisEnemyAction, HpNoLessThanCertainPercentModifierAction, HpRatioToAttributeAddAction, HpRatioToAttributeMulAction, HpRatioTriggerAction, BattleActionH06 } from "../../../../types/buff-template-data/actions/h/actions-h-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HoldFootball, Assembly-CSharp 的严格 Action 数据。
 */
export const HoldFootballActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HoldFootball, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HoldFootball, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HoldFootballAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HostKillSummonedApopsisEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const HostKillSummonedApopsisEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HostKillSummonedApopsisEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HostKillSummonedApopsisEnemyAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("HostKillSummonedApopsisEnemyAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HostKillSummonedApopsisEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HostKillSummonedApopsisEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HpNoLessThanCertainPercentModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const HpNoLessThanCertainPercentModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HpNoLessThanCertainPercentModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HpNoLessThanCertainPercentModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HpNoLessThanCertainPercentModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HpRatioToAttributeAdd, Assembly-CSharp 的严格 Action 数据。
 */
export const HpRatioToAttributeAddActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HpRatioToAttributeAdd, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","ATTACK_SPEED","DEF","MAGIC_RESISTANCE","SP_RECOVERY_PER_SEC"]).describe("属性修改器指向的战斗属性。"),
    /** HpRatioToAttributeAddAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。 */
    "_hpRatioSource": z.enum(["BUFF_OWNER","SOURCE"]).describe("HpRatioToAttributeAddAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。"),
    /** HpRatioToAttributeAddAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。 */
    "_maxHpRatio": z.number().describe("HpRatioToAttributeAddAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。"),
    /** HpRatioToAttributeAddAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。 */
    "_minHpRatio": z.number().describe("HpRatioToAttributeAddAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。"),
    /** HpRatioToAttributeAddAction 的 `overrideSource` 配置字段；准确战斗语义待确认。 */
    "_overrideSource": z.boolean().describe("HpRatioToAttributeAddAction 的 `overrideSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HpRatioToAttributeAdd, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HpRatioToAttributeAddAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HpRatioToAttributeMul, Assembly-CSharp 的严格 Action 数据。
 */
export const HpRatioToAttributeMulActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HpRatioToAttributeMul, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","DEF"]).describe("属性修改器指向的战斗属性。"),
    /** HpRatioToAttributeMulAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。 */
    "_hpRatioSource": z.enum(["BUFF_OWNER","SOURCE"]).describe("HpRatioToAttributeMulAction 的 `hpRatioSource` 配置字段；准确战斗语义待确认。"),
    /** HpRatioToAttributeMulAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。 */
    "_maxHpRatio": z.number().describe("HpRatioToAttributeMulAction 的 `maxHpRatio` 配置字段；准确战斗语义待确认。"),
    /** HpRatioToAttributeMulAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。 */
    "_minHpRatio": z.number().describe("HpRatioToAttributeMulAction 的 `minHpRatio` 配置字段；准确战斗语义待确认。"),
    /** HpRatioToAttributeMulAction 的 `overrideSource` 配置字段；准确战斗语义待确认。 */
    "_overrideSource": z.boolean().describe("HpRatioToAttributeMulAction 的 `overrideSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HpRatioToAttributeMul, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HpRatioToAttributeMulAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HpRatioTrigger, Assembly-CSharp 的严格 Action 数据。
 */
export const HpRatioTriggerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HpRatioTrigger, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HpRatioTriggerAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","GT","LE"]).describe("HpRatioTriggerAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** HpRatioTriggerAction 的 `hpRatioEachTime` 配置字段；准确战斗语义待确认。 */
    "_hpRatioEachTime": z.number().describe("HpRatioTriggerAction 的 `hpRatioEachTime` 配置字段；准确战斗语义待确认。"),
    /** HpRatioTriggerAction 的 `minHpKey` 配置字段；准确战斗语义待确认。 */
    "_minHpKey": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("HpRatioTriggerAction 的 `minHpKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** HpRatioTriggerAction 的 `useMinHpRatio` 配置字段；准确战斗语义待确认。 */
    "_useMinHpRatio": z.boolean().describe("HpRatioTriggerAction 的 `useMinHpRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HpRatioTrigger, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HpRatioTriggerAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionH06Schema = z
  .discriminatedUnion("$type", [HoldFootballActionSchema, HostKillSummonedApopsisEnemyActionSchema, HpNoLessThanCertainPercentModifierActionSchema, HpRatioToAttributeAddActionSchema, HpRatioToAttributeMulActionSchema, HpRatioTriggerActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionH06>;
