/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxRefreshBossStateAction, SandboxRefreshPlacedItemStateAction, SandboxRefreshUnitStateAction, SandboxSetEnemyTraceTargetAction, SandboxSetUniEnemyStatusAction, SandboxShowToastAction, SandboxTransferResAction, SandboxUniEnemyCheckTraceTargetInAttackRangeAction, SandboxV3AssignRecipeInfoToBbAction, SandboxV3CatchAnimalEnemyAction, BattleActionS04 } from "../../../../types/buff-template-data/actions/s/actions-s-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRefreshBossState, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRefreshBossStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRefreshBossState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRefreshBossState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRefreshBossStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRefreshPlacedItemState, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRefreshPlacedItemStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRefreshPlacedItemState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRefreshPlacedItemState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRefreshPlacedItemStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxRefreshUnitState, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxRefreshUnitStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxRefreshUnitState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxRefreshUnitState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxRefreshUnitStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxSetEnemyTraceTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxSetEnemyTraceTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxSetEnemyTraceTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxSetEnemyTraceTargetAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SandboxSetEnemyTraceTargetAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("MODIFIER_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxSetEnemyTraceTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxSetEnemyTraceTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxSetUniEnemyStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxSetUniEnemyStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxSetUniEnemyStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxSetUniEnemyStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxSetUniEnemyStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxShowToast, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxShowToastActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxShowToast, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxShowToastAction 的 `lastTime` 配置字段；准确战斗语义待确认。 */
    "_lastTime": z.number().describe("SandboxShowToastAction 的 `lastTime` 配置字段；准确战斗语义待确认。"),
    /** SandboxShowToastAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxShowToastAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SandboxShowToastAction 的 `toastKey` 配置字段；准确战斗语义待确认。 */
    "_toastKey": z.string().describe("SandboxShowToastAction 的 `toastKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxShowToastAction 的 `useNameAsParmInMap` 配置字段；准确战斗语义待确认。 */
    "_useNameAsParmInMap": z.boolean().describe("SandboxShowToastAction 的 `useNameAsParmInMap` 配置字段；准确战斗语义待确认。"),
    /** SandboxShowToastAction 的 `useStringTableKey` 配置字段；准确战斗语义待确认。 */
    "_useStringTableKey": z.boolean().describe("SandboxShowToastAction 的 `useStringTableKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxShowToast, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxShowToastAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxTransferRes, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxTransferResActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxTransferRes, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxTransferResAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("SandboxTransferResAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** SandboxTransferResAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxTransferResAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxTransferRes, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxTransferResAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxUniEnemyCheckTraceTargetInAttackRange, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxUniEnemyCheckTraceTargetInAttackRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxUniEnemyCheckTraceTargetInAttackRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxUniEnemyCheckTraceTargetInAttackRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxUniEnemyCheckTraceTargetInAttackRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3AssignRecipeInfoToBb, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3AssignRecipeInfoToBbActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3AssignRecipeInfoToBb, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3AssignRecipeInfoToBbAction 的 `prosperityKey` 配置字段；准确战斗语义待确认。 */
    "_prosperityKey": z.string().describe("SandboxV3AssignRecipeInfoToBbAction 的 `prosperityKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3AssignRecipeInfoToBbAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3AssignRecipeInfoToBbAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3AssignRecipeInfoToBb, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3AssignRecipeInfoToBbAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CatchAnimalEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3CatchAnimalEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3CatchAnimalEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3CatchAnimalEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("SandboxV3CatchAnimalEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CatchAnimalEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3CatchAnimalEnemyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS04Schema = z
  .discriminatedUnion("$type", [SandboxRefreshBossStateActionSchema, SandboxRefreshPlacedItemStateActionSchema, SandboxRefreshUnitStateActionSchema, SandboxSetEnemyTraceTargetActionSchema, SandboxSetUniEnemyStatusActionSchema, SandboxShowToastActionSchema, SandboxTransferResActionSchema, SandboxUniEnemyCheckTraceTargetInAttackRangeActionSchema, SandboxV3AssignRecipeInfoToBbActionSchema, SandboxV3CatchAnimalEnemyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS04>;
