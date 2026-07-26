/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxV3ChangeWeatherAction, SandboxV3CharacterEscapeAction, SandboxV3CheckIsAnimalEnemyAction, SandboxV3CheckRoomCanShowAction, SandboxV3CheckTrapTypeAction, SandboxV3EmitBaseTakeDamageEvtAction, SandboxV3EntityDropItemAction, SandboxV3ForceUnitDirtyAction, SandboxV3ImportantEnemyInheritStatusAction, SandboxV3IsCatchedAnimalAction, BattleActionS05 } from "../../../../types/buff-template-data/actions/s/actions-s-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ChangeWeather, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ChangeWeatherActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ChangeWeather, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ChangeWeatherAction 的 `enable` 配置字段；准确战斗语义待确认。 */
    "_enable": z.boolean().describe("SandboxV3ChangeWeatherAction 的 `enable` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ChangeWeatherAction 的 `weatherKey` 配置字段；准确战斗语义待确认。 */
    "_weatherKey": z.string().describe("SandboxV3ChangeWeatherAction 的 `weatherKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ChangeWeather, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ChangeWeatherAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CharacterEscape, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3CharacterEscapeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3CharacterEscape, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3CharacterEscapeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3CharacterEscapeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CharacterEscape, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3CharacterEscapeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CheckIsAnimalEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3CheckIsAnimalEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3CheckIsAnimalEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3CheckIsAnimalEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("MODIFIER_TARGET").describe("SandboxV3CheckIsAnimalEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CheckIsAnimalEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3CheckIsAnimalEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CheckRoomCanShow, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3CheckRoomCanShowActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3CheckRoomCanShow, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3CheckRoomCanShowAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。 */
    "_roomOffsetX": z.number().describe("SandboxV3CheckRoomCanShowAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3CheckRoomCanShowAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。 */
    "_roomOffsetY": z.number().describe("SandboxV3CheckRoomCanShowAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3CheckRoomCanShowAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("SandboxV3CheckRoomCanShowAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CheckRoomCanShow, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3CheckRoomCanShowAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CheckTrapType, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3CheckTrapTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3CheckTrapType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3CheckTrapTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3CheckTrapTypeAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3CheckTrapTypeAction 的 `trapType` 配置字段；准确战斗语义待确认。 */
    "_trapType": z.enum(["AESTHETICS","PROCESSOR"]).describe("SandboxV3CheckTrapTypeAction 的 `trapType` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3CheckTrapTypeAction 的 `trapTypeKey` 配置字段；准确战斗语义待确认。 */
    "_trapTypeKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("SandboxV3CheckTrapTypeAction 的 `trapTypeKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3CheckTrapType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3CheckTrapTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3EmitBaseTakeDamageEvt, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3EmitBaseTakeDamageEvtActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3EmitBaseTakeDamageEvt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3EmitBaseTakeDamageEvt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3EmitBaseTakeDamageEvtAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3EntityDropItem, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3EntityDropItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3EntityDropItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3EntityDropItemAction 的 `amount` 配置字段；准确战斗语义待确认。 */
    "_amount": z.number().describe("SandboxV3EntityDropItemAction 的 `amount` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3EntityDropItemAction 的 `amountKey` 配置字段；准确战斗语义待确认。 */
    "_amountKey": z.string().describe("SandboxV3EntityDropItemAction 的 `amountKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3EntityDropItemAction 的 `itemIdKey` 配置字段；准确战斗语义待确认。 */
    "_itemIdKey": z.string().describe("SandboxV3EntityDropItemAction 的 `itemIdKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("ENEMY").describe("Action 读取的来源实体类型。"),
    /** SandboxV3EntityDropItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3EntityDropItemAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3EntityDropItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3EntityDropItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ForceUnitDirty, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ForceUnitDirtyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ForceUnitDirty, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ForceUnitDirtyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3ForceUnitDirtyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ForceUnitDirty, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ForceUnitDirtyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ImportantEnemyInheritStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ImportantEnemyInheritStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ImportantEnemyInheritStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ImportantEnemyInheritStatusAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3ImportantEnemyInheritStatusAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ImportantEnemyInheritStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ImportantEnemyInheritStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3IsCatchedAnimal, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3IsCatchedAnimalActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3IsCatchedAnimal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3IsCatchedAnimalAction 的 `checkIsLegend` 配置字段；准确战斗语义待确认。 */
    "_checkIsLegend": z.boolean().describe("SandboxV3IsCatchedAnimalAction 的 `checkIsLegend` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3IsCatchedAnimalAction 的 `isLegend` 配置字段；准确战斗语义待确认。 */
    "_isLegend": z.boolean().describe("SandboxV3IsCatchedAnimalAction 的 `isLegend` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3IsCatchedAnimalAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3IsCatchedAnimalAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3IsCatchedAnimal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3IsCatchedAnimalAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS05Schema = z
  .discriminatedUnion("$type", [SandboxV3ChangeWeatherActionSchema, SandboxV3CharacterEscapeActionSchema, SandboxV3CheckIsAnimalEnemyActionSchema, SandboxV3CheckRoomCanShowActionSchema, SandboxV3CheckTrapTypeActionSchema, SandboxV3EmitBaseTakeDamageEvtActionSchema, SandboxV3EntityDropItemActionSchema, SandboxV3ForceUnitDirtyActionSchema, SandboxV3ImportantEnemyInheritStatusActionSchema, SandboxV3IsCatchedAnimalActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS05>;
