/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckTileTypesMaskAction, CheckTokenHostGroupTagAction, CheckTraitAbilityBlackboardAction, CheckTriggerableAction, CheckTriggerableBuffsByKeysAction, CheckUnitAliveAction, CheckUnitCurrentModeAction, CheckUnitInAttackStateAction, CheckUnitInCombatStateAction, CheckUnitInDisappearStateAction, BattleActionC18 } from "../../../../types/buff-template-data/actions/c/actions-c-18.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTileTypesMask, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTileTypesMaskActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTileTypesMask, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTileTypesMaskAction 的 `checkOldTile` 配置字段；准确战斗语义待确认。 */
    "_checkOldTile": z.boolean().describe("CheckTileTypesMaskAction 的 `checkOldTile` 配置字段；准确战斗语义待确认。"),
    /** CheckTileTypesMaskAction 的 `checkRootTile` 配置字段；准确战斗语义待确认。 */
    "_checkRootTile": z.boolean().describe("CheckTileTypesMaskAction 的 `checkRootTile` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** CheckTileTypesMaskAction 的 `TileTypesMask` 配置字段；准确战斗语义待确认。 */
    "_TileTypesMask": z.literal("END").describe("CheckTileTypesMaskAction 的 `TileTypesMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTileTypesMask, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTileTypesMaskAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTokenHostGroupTag, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTokenHostGroupTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTokenHostGroupTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTokenHostGroupTagAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
    "_filterTag": z.string().describe("CheckTokenHostGroupTagAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTokenHostGroupTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTokenHostGroupTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTraitAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTraitAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTraitAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTraitAbilityBlackboardAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("CheckTraitAbilityBlackboardAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** CheckTraitAbilityBlackboardAction 的 `leftBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_leftBlackboardKey": z.string().describe("CheckTraitAbilityBlackboardAction 的 `leftBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** CheckTraitAbilityBlackboardAction 的 `rightBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_rightBlackboardKey": z.union([
                                 z.null(),
                                 z.string(),
                               ]).describe("CheckTraitAbilityBlackboardAction 的 `rightBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** CheckTraitAbilityBlackboardAction 的 `rightValue` 配置字段；准确战斗语义待确认。 */
    "_rightValue": z.number().describe("CheckTraitAbilityBlackboardAction 的 `rightValue` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTraitAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTraitAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTriggerable, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTriggerableActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTriggerable, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTriggerable, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTriggerableAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckTriggerableBuffsByKeys, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckTriggerableBuffsByKeysActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckTriggerableBuffsByKeys, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckTriggerableBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
    "_buffKeys": z.array(z.string()).describe("CheckTriggerableBuffsByKeysAction 的 `buffKeys` 配置字段；准确战斗语义待确认。"),
    /** CheckTriggerableBuffsByKeysAction 的 `excludeThisBuff` 配置字段；准确战斗语义待确认。 */
    "_excludeThisBuff": z.boolean().describe("CheckTriggerableBuffsByKeysAction 的 `excludeThisBuff` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckTriggerableBuffsByKeys, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckTriggerableBuffsByKeysAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitAlive, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitAliveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitAlive, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitAliveAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("CheckUnitAliveAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitAlive, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitAliveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitCurrentMode, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitCurrentModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitCurrentMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitCurrentModeAction 的 `checkCurModeIndex` 配置字段；准确战斗语义待确认。 */
    "_checkCurModeIndex": z.number().describe("CheckUnitCurrentModeAction 的 `checkCurModeIndex` 配置字段；准确战斗语义待确认。"),
    /** CheckUnitCurrentModeAction 的 `loadCurModeBbKey` 配置字段；准确战斗语义待确认。 */
    "_loadCurModeBbKey": z.string().describe("CheckUnitCurrentModeAction 的 `loadCurModeBbKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitCurrentMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitCurrentModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInAttackState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitInAttackStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitInAttackState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitInAttackStateAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckUnitInAttackStateAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** CheckUnitInAttackStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckUnitInAttackStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInAttackState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitInAttackStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInCombatState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitInCombatStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitInCombatState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitInCombatStateAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckUnitInCombatStateAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** CheckUnitInCombatStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckUnitInCombatStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInCombatState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitInCombatStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInDisappearState, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckUnitInDisappearStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckUnitInDisappearState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckUnitInDisappearStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckUnitInDisappearStateAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckUnitInDisappearState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckUnitInDisappearStateAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC18Schema = z
  .discriminatedUnion("$type", [CheckTileTypesMaskActionSchema, CheckTokenHostGroupTagActionSchema, CheckTraitAbilityBlackboardActionSchema, CheckTriggerableActionSchema, CheckTriggerableBuffsByKeysActionSchema, CheckUnitAliveActionSchema, CheckUnitCurrentModeActionSchema, CheckUnitInAttackStateActionSchema, CheckUnitInCombatStateActionSchema, CheckUnitInDisappearStateActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC18>;
