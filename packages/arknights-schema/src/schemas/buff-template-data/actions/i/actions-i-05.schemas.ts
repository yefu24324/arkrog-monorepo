/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { IsFeverFullAction, IsHealAction, IsHostML12Action, IsIgnoreForSpAction, IsInFeverAction, IsMimicEnemyAction, IsOnDestinationStationTileAction, IsOnRailwayTrackOrStationTileAction, IsOnTransferStationTileAction, IsProducerLifeOverAction, BattleActionI05 } from "../../../../types/buff-template-data/actions/i/actions-i-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsFeverFull, Assembly-CSharp 的严格 Action 数据。
 */
export const IsFeverFullActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsFeverFull, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsFeverFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
    "_feverKey": z.string().describe("IsFeverFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsFeverFull, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsFeverFullAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const IsHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsHealAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsHostML12, Assembly-CSharp 的严格 Action 数据。
 */
export const IsHostML12ActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsHostML12, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsHostML12Action 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("IsHostML12Action 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsHostML12, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsHostML12Action>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsIgnoreForSp, Assembly-CSharp 的严格 Action 数据。
 */
export const IsIgnoreForSpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsIgnoreForSp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsIgnoreForSp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsIgnoreForSpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsInFever, Assembly-CSharp 的严格 Action 数据。
 */
export const IsInFeverActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsInFever, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsInFeverAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
    "_feverKey": z.string().describe("IsInFeverAction 的 `feverKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsInFever, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsInFeverAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsMimicEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const IsMimicEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsMimicEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsMimicEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsMimicEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsOnDestinationStationTile, Assembly-CSharp 的严格 Action 数据。
 */
export const IsOnDestinationStationTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsOnDestinationStationTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsOnDestinationStationTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsOnDestinationStationTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsOnRailwayTrackOrStationTile, Assembly-CSharp 的严格 Action 数据。
 */
export const IsOnRailwayTrackOrStationTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsOnRailwayTrackOrStationTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsOnRailwayTrackOrStationTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsOnRailwayTrackOrStationTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsOnTransferStationTile, Assembly-CSharp 的严格 Action 数据。
 */
export const IsOnTransferStationTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsOnTransferStationTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsOnTransferStationTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsOnTransferStationTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsProducerLifeOver, Assembly-CSharp 的严格 Action 数据。
 */
export const IsProducerLifeOverActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsProducerLifeOver, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsProducerLifeOverAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("IsProducerLifeOverAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsProducerLifeOver, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsProducerLifeOverAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI05Schema = z
  .discriminatedUnion("$type", [IsFeverFullActionSchema, IsHealActionSchema, IsHostML12ActionSchema, IsIgnoreForSpActionSchema, IsInFeverActionSchema, IsMimicEnemyActionSchema, IsOnDestinationStationTileActionSchema, IsOnRailwayTrackOrStationTileActionSchema, IsOnTransferStationTileActionSchema, IsProducerLifeOverActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI05>;
