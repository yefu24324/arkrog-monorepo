/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxV3IsRoomDangerousAction, SandboxV3ManualFinishGameAction, SandboxV3ManuallyAddItemsAction, SandboxV3ManuallyRemoveItemsAction, SandboxV3ModifyBuffStatAction, SandboxV3ProcessorInheritAction, SandboxV3RecoverSpForOtherCharactersWithSameFoodAction, SandboxV3RemoveBuffStatAction, SandboxV3SaveEnemyAction, SandboxV3ServiceInheritAction, BattleActionS06 } from "../../../../types/buff-template-data/actions/s/actions-s-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3IsRoomDangerous, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3IsRoomDangerousActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3IsRoomDangerous, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3IsRoomDangerousAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。 */
    "_roomOffsetX": z.number().describe("SandboxV3IsRoomDangerousAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3IsRoomDangerousAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。 */
    "_roomOffsetY": z.number().describe("SandboxV3IsRoomDangerousAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3IsRoomDangerousAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3IsRoomDangerousAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3IsRoomDangerous, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3IsRoomDangerousAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ManualFinishGame, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ManualFinishGameActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ManualFinishGame, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ManualFinishGameAction 的 `reason` 配置字段；准确战斗语义待确认。 */
    "_reason": z.literal("BASE_BREAK").describe("SandboxV3ManualFinishGameAction 的 `reason` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManualFinishGameAction 的 `result` 配置字段；准确战斗语义待确认。 */
    "_result": z.string().describe("SandboxV3ManualFinishGameAction 的 `result` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ManualFinishGame, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ManualFinishGameAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ManuallyAddItems, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ManuallyAddItemsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ManuallyAddItems, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ManuallyAddItemsAction 的 `allowEmpty` 配置字段；准确战斗语义待确认。 */
    "_allowEmpty": z.boolean().describe("SandboxV3ManuallyAddItemsAction 的 `allowEmpty` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyAddItemsAction 的 `itemCntBbKey` 配置字段；准确战斗语义待确认。 */
    "_itemCntBbKey": z.string().describe("SandboxV3ManuallyAddItemsAction 的 `itemCntBbKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyAddItemsAction 的 `itemIdsBbKey` 配置字段；准确战斗语义待确认。 */
    "_itemIdsBbKey": z.string().describe("SandboxV3ManuallyAddItemsAction 的 `itemIdsBbKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyAddItemsAction 的 `reason` 配置字段；准确战斗语义待确认。 */
    "_reason": z.enum(["ANIMAL_PRODUCE","PRODUCE_OUTPUT","SPECIAL_TRIGGER"]).describe("SandboxV3ManuallyAddItemsAction 的 `reason` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyAddItemsAction 的 `singleItem` 配置字段；准确战斗语义待确认。 */
    "_singleItem": z.boolean().describe("SandboxV3ManuallyAddItemsAction 的 `singleItem` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyAddItemsAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("SandboxV3ManuallyAddItemsAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ManuallyAddItems, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ManuallyAddItemsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ManuallyRemoveItems, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ManuallyRemoveItemsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ManuallyRemoveItems, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ManuallyRemoveItemsAction 的 `allowEmpty` 配置字段；准确战斗语义待确认。 */
    "_allowEmpty": z.boolean().describe("SandboxV3ManuallyRemoveItemsAction 的 `allowEmpty` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyRemoveItemsAction 的 `itemCntBbKey` 配置字段；准确战斗语义待确认。 */
    "_itemCntBbKey": z.string().describe("SandboxV3ManuallyRemoveItemsAction 的 `itemCntBbKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyRemoveItemsAction 的 `itemIdsBbKey` 配置字段；准确战斗语义待确认。 */
    "_itemIdsBbKey": z.string().describe("SandboxV3ManuallyRemoveItemsAction 的 `itemIdsBbKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyRemoveItemsAction 的 `reason` 配置字段；准确战斗语义待确认。 */
    "_reason": z.literal("ANIMAL_PRODUCE_COST").describe("SandboxV3ManuallyRemoveItemsAction 的 `reason` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyRemoveItemsAction 的 `singleItem` 配置字段；准确战斗语义待确认。 */
    "_singleItem": z.boolean().describe("SandboxV3ManuallyRemoveItemsAction 的 `singleItem` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ManuallyRemoveItemsAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("SandboxV3ManuallyRemoveItemsAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ManuallyRemoveItems, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ManuallyRemoveItemsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ModifyBuffStat, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ModifyBuffStatActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ModifyBuffStat, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ModifyBuffStatAction 的 `formula` 配置字段；准确战斗语义待确认。 */
    "_formula": z.enum(["ADDITION","FINAL_SCALER","MULTIPLIER"]).describe("SandboxV3ModifyBuffStatAction 的 `formula` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ModifyBuffStatAction 的 `statType` 配置字段；准确战斗语义待确认。 */
    "_statType": z.enum(["AESTHETICS","PROSPERITY"]).describe("SandboxV3ModifyBuffStatAction 的 `statType` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ModifyBuffStatAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("SandboxV3ModifyBuffStatAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ModifyBuffStatAction 的 `valueBbKey` 配置字段；准确战斗语义待确认。 */
    "_valueBbKey": z.string().describe("SandboxV3ModifyBuffStatAction 的 `valueBbKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ModifyBuffStat, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ModifyBuffStatAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ProcessorInherit, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ProcessorInheritActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ProcessorInherit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ProcessorInheritAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3ProcessorInheritAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ProcessorInherit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ProcessorInheritAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3RecoverSpForOtherCharactersWithSameFood, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3RecoverSpForOtherCharactersWithSameFoodActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3RecoverSpForOtherCharactersWithSameFood, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `dontShowSpUI` 配置字段；准确战斗语义待确认。 */
    "_dontShowSpUI": z.boolean().describe("SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `dontShowSpUI` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `runeKey` 配置字段；准确战斗语义待确认。 */
    "_runeKey": z.string().describe("SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `runeKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `spValue` 配置字段；准确战斗语义待确认。 */
    "_spValue": z.number().describe("SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `spValue` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `spValueBbKey` 配置字段；准确战斗语义待确认。 */
    "_spValueBbKey": z.string().describe("SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `spValueBbKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3RecoverSpForOtherCharactersWithSameFood, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3RecoverSpForOtherCharactersWithSameFoodAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3RemoveBuffStat, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3RemoveBuffStatActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3RemoveBuffStat, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3RemoveBuffStat, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3RemoveBuffStatAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3SaveEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3SaveEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3SaveEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3SaveEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3SaveEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3SaveEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3SaveEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ServiceInherit, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ServiceInheritActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ServiceInherit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ServiceInheritAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("SandboxV3ServiceInheritAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ServiceInherit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ServiceInheritAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS06Schema = z
  .discriminatedUnion("$type", [SandboxV3IsRoomDangerousActionSchema, SandboxV3ManualFinishGameActionSchema, SandboxV3ManuallyAddItemsActionSchema, SandboxV3ManuallyRemoveItemsActionSchema, SandboxV3ModifyBuffStatActionSchema, SandboxV3ProcessorInheritActionSchema, SandboxV3RecoverSpForOtherCharactersWithSameFoodActionSchema, SandboxV3RemoveBuffStatActionSchema, SandboxV3SaveEnemyActionSchema, SandboxV3ServiceInheritActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS06>;
