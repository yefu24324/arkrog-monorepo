/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckOtherCharacterInRangeAction, CheckRemainTimeAction, CheckRootTileAdvBuildableMaskAction, CheckRouteMotionModeAction, CheckSanityAction, CheckSkillIndexAction, CheckSkillRemainingProgressAction, CheckSourceInHitRangeAction, CheckSpecificEnemyCountAction, CheckTargetCategoryAction, BattleActionC15 } from "../../../../types/buff-template-data/actions/c/actions-c-15.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckOtherCharacterInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckOtherCharacterInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckOtherCharacterInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckOtherCharacterInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckOtherCharacterInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckOtherCharacterInRangeAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("CheckOtherCharacterInRangeAction 的 `source` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckOtherCharacterInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckOtherCharacterInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckRemainTime, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckRemainTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckRemainTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckRemainTimeAction 的 `checkRemainTime` 配置字段；准确战斗语义待确认。 */
    "_checkRemainTime": z.number().describe("CheckRemainTimeAction 的 `checkRemainTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckRemainTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckRemainTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckRootTileAdvBuildableMask, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckRootTileAdvBuildableMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckRootTileAdvBuildableMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckRootTileAdvBuildableMaskAction 的 `buildableMask` 配置字段；准确战斗语义待确认。 */
    "_buildableMask": z.enum(["DEEP_SEA","DEFAULT","NIGHT"]).describe("CheckRootTileAdvBuildableMaskAction 的 `buildableMask` 配置字段；准确战斗语义待确认。"),
    /** CheckRootTileAdvBuildableMaskAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckRootTileAdvBuildableMaskAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckRootTileAdvBuildableMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckRootTileAdvBuildableMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckRouteMotionMode, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckRouteMotionModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckRouteMotionMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckRouteMotionModeAction 的 `mode` 配置字段；准确战斗语义待确认。 */
    "_mode": z.enum(["FLY","WALK"]).describe("CheckRouteMotionModeAction 的 `mode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckRouteMotionMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckRouteMotionModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckSanity, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckSanityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckSanity, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckSanityAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.literal("GE").describe("CheckSanityAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** CheckSanityAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("CheckSanityAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** CheckSanityAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("CheckSanityAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckSanity, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckSanityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckSkillIndex, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckSkillIndexActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckSkillIndex, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckSkillIndexAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。 */
    "_checkTargetHost": z.boolean().describe("CheckSkillIndexAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。"),
    /** CheckSkillIndexAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("CheckSkillIndexAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** CheckSkillIndexAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
    "_skillIndex": z.number().describe("CheckSkillIndexAction 的 `skillIndex` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckSkillIndex, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckSkillIndexAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckSkillRemainingProgress, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckSkillRemainingProgressActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckSkillRemainingProgress, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckSkillRemainingProgressAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
    "_compareValue": z.number().describe("CheckSkillRemainingProgressAction 的 `compareValue` 配置字段；准确战斗语义待确认。"),
    /** CheckSkillRemainingProgressAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("LE").describe("CheckSkillRemainingProgressAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckSkillRemainingProgressAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckSkillRemainingProgressAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckSkillRemainingProgress, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckSkillRemainingProgressAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckSourceInHitRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckSourceInHitRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckSourceInHitRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("MODIFIER_TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckSourceInHitRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckSourceInHitRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckSpecificEnemyCount, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckSpecificEnemyCountActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckSpecificEnemyCount, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckSpecificEnemyCountAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LE","LT"]).describe("CheckSpecificEnemyCountAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckSpecificEnemyCountAction 的 `enemyId` 配置字段；准确战斗语义待确认。 */
    "_enemyId": z.string().describe("CheckSpecificEnemyCountAction 的 `enemyId` 配置字段；准确战斗语义待确认。"),
    /** CheckSpecificEnemyCountAction 的 `limitAmount` 配置字段；准确战斗语义待确认。 */
    "_limitAmount": z.number().describe("CheckSpecificEnemyCountAction 的 `limitAmount` 配置字段；准确战斗语义待确认。"),
    /** CheckSpecificEnemyCountAction 的 `limitAmountKey` 配置字段；准确战斗语义待确认。 */
    "_limitAmountKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("CheckSpecificEnemyCountAction 的 `limitAmountKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckSpecificEnemyCount, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckSpecificEnemyCountAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetCategory, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTargetCategoryActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTargetCategory, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTargetCategoryAction 的 `category` 配置字段；准确战斗语义待确认。 */
    "_category": z.literal("DEFAULT").describe("CheckTargetCategoryAction 的 `category` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTargetCategory, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTargetCategoryAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC15Schema = z
  .discriminatedUnion("$type", [CheckOtherCharacterInRangeActionSchema, CheckRemainTimeActionSchema, CheckRootTileAdvBuildableMaskActionSchema, CheckRouteMotionModeActionSchema, CheckSanityActionSchema, CheckSkillIndexActionSchema, CheckSkillRemainingProgressActionSchema, CheckSourceInHitRangeActionSchema, CheckSpecificEnemyCountActionSchema, CheckTargetCategoryActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC15>;
