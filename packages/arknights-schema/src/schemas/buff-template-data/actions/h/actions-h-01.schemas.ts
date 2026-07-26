/**
 * buff_template_data 的 H 组 Action Zod Schema。
 */

import { z } from "zod";

import type { HalfIdleAddNumericFactorAction, HalfIdleCancleNumericFactorAction, HalfIdleCheckHasCertainTargetUseAbilitySelectorAction, HalfIdleCheckLhblodSPRecoverNumAction, HalfIdleCheckNearbyRoadAction, HalfIdleCheckOnIrrigatedTileAction, HalfIdleCheckSpecificUnitCountAction, HalfIdleDropBattleItemAction, HalfIdleDropResourceAction, HalfIdleEnemyDropItemAction, BattleActionH01 } from "../../../../types/buff-template-data/actions/h/actions-h-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleAddNumericFactor, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleAddNumericFactorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleAddNumericFactor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleAddNumericFactorAction 的 `affectType` 配置字段；准确战斗语义待确认。 */
    "_affectType": z.enum(["Exp","ExpBook"]).describe("HalfIdleAddNumericFactorAction 的 `affectType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleAddNumericFactorAction 的 `calcType` 配置字段；准确战斗语义待确认。 */
    "_calcType": z.literal("MUL").describe("HalfIdleAddNumericFactorAction 的 `calcType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleAddNumericFactorAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("HalfIdleAddNumericFactorAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleAddNumericFactorAction 的 `validSource` 配置字段；准确战斗语义待确认。 */
    "_validSource": z.enum(["ALL","ENEMY"]).describe("HalfIdleAddNumericFactorAction 的 `validSource` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleAddNumericFactorAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("HalfIdleAddNumericFactorAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleAddNumericFactor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleAddNumericFactorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCancleNumericFactor, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleCancleNumericFactorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleCancleNumericFactor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleCancleNumericFactorAction 的 `affectType` 配置字段；准确战斗语义待确认。 */
    "_affectType": z.literal("Exp").describe("HalfIdleCancleNumericFactorAction 的 `affectType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCancleNumericFactorAction 的 `calcType` 配置字段；准确战斗语义待确认。 */
    "_calcType": z.literal("MUL").describe("HalfIdleCancleNumericFactorAction 的 `calcType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCancleNumericFactorAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("HalfIdleCancleNumericFactorAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCancleNumericFactorAction 的 `validSource` 配置字段；准确战斗语义待确认。 */
    "_validSource": z.literal("ALL").describe("HalfIdleCancleNumericFactorAction 的 `validSource` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCancleNumericFactorAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("HalfIdleCancleNumericFactorAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCancleNumericFactor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleCancleNumericFactorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckHasCertainTargetUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleCheckHasCertainTargetUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleCheckHasCertainTargetUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.literal("BUFF_OWNER").describe("HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `floorTargetCnt` 配置字段；准确战斗语义待确认。 */
    "_floorTargetCnt": z.number().describe("HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `floorTargetCnt` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `floorTargetCntKey` 配置字段；准确战斗语义待确认。 */
    "_floorTargetCntKey": z.string().describe("HalfIdleCheckHasCertainTargetUseAbilitySelectorAction 的 `floorTargetCntKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckHasCertainTargetUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleCheckHasCertainTargetUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckLhblodSPRecoverNum, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleCheckLhblodSPRecoverNumActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleCheckLhblodSPRecoverNum, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleCheckLhblodSPRecoverNumAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("HalfIdleCheckLhblodSPRecoverNumAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckLhblodSPRecoverNumAction 的 `resultKey` 配置字段；准确战斗语义待确认。 */
    "_resultKey": z.string().describe("HalfIdleCheckLhblodSPRecoverNumAction 的 `resultKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckLhblodSPRecoverNumAction 的 `stride` 配置字段；准确战斗语义待确认。 */
    "_stride": z.number().describe("HalfIdleCheckLhblodSPRecoverNumAction 的 `stride` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckLhblodSPRecoverNumAction 的 `strideKey` 配置字段；准确战斗语义待确认。 */
    "_strideKey": z.string().describe("HalfIdleCheckLhblodSPRecoverNumAction 的 `strideKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckLhblodSPRecoverNum, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleCheckLhblodSPRecoverNumAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckNearbyRoad, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleCheckNearbyRoadActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleCheckNearbyRoad, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleCheckNearbyRoadAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("HalfIdleCheckNearbyRoadAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckNearbyRoad, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleCheckNearbyRoadAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckOnIrrigatedTile, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleCheckOnIrrigatedTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleCheckOnIrrigatedTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleCheckOnIrrigatedTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("HalfIdleCheckOnIrrigatedTileAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckOnIrrigatedTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleCheckOnIrrigatedTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckSpecificUnitCount, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleCheckSpecificUnitCountActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleCheckSpecificUnitCount, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleCheckSpecificUnitCountAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LT"]).describe("HalfIdleCheckSpecificUnitCountAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckSpecificUnitCountAction 的 `limitAmount` 配置字段；准确战斗语义待确认。 */
    "_limitAmount": z.number().describe("HalfIdleCheckSpecificUnitCountAction 的 `limitAmount` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckSpecificUnitCountAction 的 `limitAmountKey` 配置字段；准确战斗语义待确认。 */
    "_limitAmountKey": z.union([
                             z.null(),
                             z.string(),
                           ]).describe("HalfIdleCheckSpecificUnitCountAction 的 `limitAmountKey` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleCheckSpecificUnitCountAction 的 `unitId` 配置字段；准确战斗语义待确认。 */
    "_unitId": z.string().describe("HalfIdleCheckSpecificUnitCountAction 的 `unitId` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleCheckSpecificUnitCount, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleCheckSpecificUnitCountAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleDropBattleItem, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleDropBattleItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleDropBattleItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleDropBattleItemAction 的 `countBB` 配置字段；准确战斗语义待确认。 */
    "_countBB": z.string().describe("HalfIdleDropBattleItemAction 的 `countBB` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleDropBattleItemAction 的 `poolKeyBB` 配置字段；准确战斗语义待确认。 */
    "_poolKeyBB": z.string().describe("HalfIdleDropBattleItemAction 的 `poolKeyBB` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleDropBattleItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleDropBattleItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleDropResource, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleDropResourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleDropResource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** HalfIdleDropResourceAction 的 `countBB` 配置字段；准确战斗语义待确认。 */
    "_countBB": z.string().describe("HalfIdleDropResourceAction 的 `countBB` 配置字段；准确战斗语义待确认。"),
    /** HalfIdleDropResourceAction 的 `poolKeyBB` 配置字段；准确战斗语义待确认。 */
    "_poolKeyBB": z.string().describe("HalfIdleDropResourceAction 的 `poolKeyBB` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleDropResource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleDropResourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleEnemyDropItem, Assembly-CSharp 的严格 Action 数据。
 */
export const HalfIdleEnemyDropItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+HalfIdleEnemyDropItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+HalfIdleEnemyDropItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<HalfIdleEnemyDropItemAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionH01Schema = z
  .discriminatedUnion("$type", [HalfIdleAddNumericFactorActionSchema, HalfIdleCancleNumericFactorActionSchema, HalfIdleCheckHasCertainTargetUseAbilitySelectorActionSchema, HalfIdleCheckLhblodSPRecoverNumActionSchema, HalfIdleCheckNearbyRoadActionSchema, HalfIdleCheckOnIrrigatedTileActionSchema, HalfIdleCheckSpecificUnitCountActionSchema, HalfIdleDropBattleItemActionSchema, HalfIdleDropResourceActionSchema, HalfIdleEnemyDropItemActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionH01>;
