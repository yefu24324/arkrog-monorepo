/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act31SideCheckTileInWaterAreaAction, Act31SideDeathPolluteTileAction, Act31SidePumpFlowIntoOtherAreaAction, Act31SidePurifyAreaPolluteAction, Act31SideTriggerRebuildAreasAction, Act33SideBurnCharactersWithRopeAction, Act33SideCollectCharactersWithRopeAction, Act33SideCutRopeBySourceAction, Act33SideDamageGreaterThanRecordedMaxAction, Act33SideEmitManagedProjectileAction, BattleActionA02 } from "../../../../types/buff-template-data/actions/a/actions-a-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideCheckTileInWaterArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideCheckTileInWaterAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideCheckTileInWaterArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SideCheckTileInWaterAreaAction 的 `checkSourceBehindTile` 配置字段；准确战斗语义待确认。 */
    "_checkSourceBehindTile": z.boolean().describe("Act31SideCheckTileInWaterAreaAction 的 `checkSourceBehindTile` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideCheckTileInWaterArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideCheckTileInWaterAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideDeathPolluteTile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideDeathPolluteTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideDeathPolluteTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SideDeathPolluteTileAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("Act31SideDeathPolluteTileAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideDeathPolluteTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideDeathPolluteTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SidePumpFlowIntoOtherArea, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SidePumpFlowIntoOtherAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SidePumpFlowIntoOtherArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SidePumpFlowIntoOtherAreaAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("Act31SidePumpFlowIntoOtherAreaAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SidePumpFlowIntoOtherArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SidePumpFlowIntoOtherAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SidePurifyAreaPollute, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SidePurifyAreaPolluteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SidePurifyAreaPollute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act31SidePurifyAreaPolluteAction 的 `addPolluteV` 配置字段；准确战斗语义待确认。 */
    "_addPolluteV": z.number().describe("Act31SidePurifyAreaPolluteAction 的 `addPolluteV` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SidePurifyAreaPollute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SidePurifyAreaPolluteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act31SideTriggerRebuildAreas, Assembly-CSharp 的严格 Action 数据。
 */
export const Act31SideTriggerRebuildAreasActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act31SideTriggerRebuildAreas, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act31SideTriggerRebuildAreas, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act31SideTriggerRebuildAreasAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideBurnCharactersWithRope, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideBurnCharactersWithRopeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideBurnCharactersWithRope, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act33SideBurnCharactersWithRopeAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("Act33SideBurnCharactersWithRopeAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","NONE"]).describe("本次伤害使用的伤害类型。"),
    /** Act33SideBurnCharactersWithRopeAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
    "_elementDamageType": z.enum(["FIRE","NONE"]).describe("Act33SideBurnCharactersWithRopeAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。"),
    /** Act33SideBurnCharactersWithRopeAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。 */
    "_fixedEpDamageKey": z.union([
                               z.null(),
                               z.string(),
                             ]).describe("Act33SideBurnCharactersWithRopeAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。"),
    /** Act33SideBurnCharactersWithRopeAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。 */
    "_isFixedEpDamage": z.boolean().describe("Act33SideBurnCharactersWithRopeAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideBurnCharactersWithRope, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideBurnCharactersWithRopeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideCollectCharactersWithRope, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideCollectCharactersWithRopeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideCollectCharactersWithRope, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideCollectCharactersWithRope, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideCollectCharactersWithRopeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideCutRopeBySource, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideCutRopeBySourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideCutRopeBySource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("PROJECTILE_SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideCutRopeBySource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideCutRopeBySourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideDamageGreaterThanRecordedMax, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideDamageGreaterThanRecordedMaxActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideDamageGreaterThanRecordedMax, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act33SideDamageGreaterThanRecordedMaxAction 的 `eps` 配置字段；准确战斗语义待确认。 */
    "_eps": z.number().describe("Act33SideDamageGreaterThanRecordedMaxAction 的 `eps` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideDamageGreaterThanRecordedMax, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideDamageGreaterThanRecordedMaxAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act33SideEmitManagedProjectile, Assembly-CSharp 的严格 Action 数据。
 */
export const Act33SideEmitManagedProjectileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act33SideEmitManagedProjectile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.null().describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** Act33SideEmitManagedProjectileAction 的 `ev` 配置字段；准确战斗语义待确认。 */
    "_ev": z.string().describe("Act33SideEmitManagedProjectileAction 的 `ev` 配置字段；准确战斗语义待确认。"),
    /** Act33SideEmitManagedProjectileAction 的 `mountPoint` 配置字段；准确战斗语义待确认。 */
    "_mountPoint": z.string().describe("Act33SideEmitManagedProjectileAction 的 `mountPoint` 配置字段；准确战斗语义待确认。"),
    /** Act33SideEmitManagedProjectileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
    "_overwriteActions": z.boolean().describe("Act33SideEmitManagedProjectileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。"),
    /** Act33SideEmitManagedProjectileAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.string().describe("Act33SideEmitManagedProjectileAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act33SideEmitManagedProjectile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act33SideEmitManagedProjectileAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA02Schema = z
  .discriminatedUnion("$type", [Act31SideCheckTileInWaterAreaActionSchema, Act31SideDeathPolluteTileActionSchema, Act31SidePumpFlowIntoOtherAreaActionSchema, Act31SidePurifyAreaPolluteActionSchema, Act31SideTriggerRebuildAreasActionSchema, Act33SideBurnCharactersWithRopeActionSchema, Act33SideCollectCharactersWithRopeActionSchema, Act33SideCutRopeBySourceActionSchema, Act33SideDamageGreaterThanRecordedMaxActionSchema, Act33SideEmitManagedProjectileActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA02>;
