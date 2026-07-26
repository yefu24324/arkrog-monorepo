/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateTileBindingGlobalBuffAction, CreateTileEffectAction, CreateTileEffectInRangeAction, BattleActionC29 } from "../../../../types/buff-template-data/actions/c/actions-c-29.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateTileBindingGlobalBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateTileBindingGlobalBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateTileBindingGlobalBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateTileBindingGlobalBuffAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("CreateTileBindingGlobalBuffAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** CreateTileBindingGlobalBuffAction 的 `abilitySource` 配置字段；准确战斗语义待确认。 */
    "_abilitySource": z.literal("SOURCE").describe("CreateTileBindingGlobalBuffAction 的 `abilitySource` 配置字段；准确战斗语义待确认。"),
    /** CreateTileBindingGlobalBuffAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffKey": z.string().describe("CreateTileBindingGlobalBuffAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateTileBindingGlobalBuffAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffPrefabKey": z.string().describe("CreateTileBindingGlobalBuffAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。"),
    /** CreateTileBindingGlobalBuffAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。 */
    "_selectorTarget": z.literal("TARGET").describe("CreateTileBindingGlobalBuffAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateTileBindingGlobalBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateTileBindingGlobalBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateTileEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateTileEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateTileEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateTileEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateTileEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
    "_hasSource": z.boolean().describe("CreateTileEffectAction 的 `hasSource` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectAction 的 `holdIt` 配置字段；准确战斗语义待确认。 */
    "_holdIt": z.boolean().describe("CreateTileEffectAction 的 `holdIt` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CreateTileEffectAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。 */
    "_tileKeyCol": z.string().describe("CreateTileEffectAction 的 `tileKeyCol` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。 */
    "_tileKeyRow": z.string().describe("CreateTileEffectAction 的 `tileKeyRow` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectAction 的 `verifyBeforeCreate` 配置字段；准确战斗语义待确认。 */
    "_verifyBeforeCreate": z.boolean().describe("CreateTileEffectAction 的 `verifyBeforeCreate` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateTileEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateTileEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateTileEffectInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateTileEffectInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateTileEffectInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateTileEffectInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.literal("RANGED").describe("CreateTileEffectInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectInRangeAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("CreateTileEffectInRangeAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectInRangeAction 的 `holdIt` 配置字段；准确战斗语义待确认。 */
    "_holdIt": z.boolean().describe("CreateTileEffectInRangeAction 的 `holdIt` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CreateTileEffectInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CreateTileEffectInRangeAction 的 `specifyBuildType` 配置字段；准确战斗语义待确认。 */
    "_specifyBuildType": z.boolean().describe("CreateTileEffectInRangeAction 的 `specifyBuildType` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
    "_useAttackRange": z.boolean().describe("CreateTileEffectInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。"),
    /** CreateTileEffectInRangeAction 的 `verifyBeforeCreate` 配置字段；准确战斗语义待确认。 */
    "_verifyBeforeCreate": z.boolean().describe("CreateTileEffectInRangeAction 的 `verifyBeforeCreate` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateTileEffectInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateTileEffectInRangeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC29Schema = z
  .discriminatedUnion("$type", [CreateTileBindingGlobalBuffActionSchema, CreateTileEffectActionSchema, CreateTileEffectInRangeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC29>;
