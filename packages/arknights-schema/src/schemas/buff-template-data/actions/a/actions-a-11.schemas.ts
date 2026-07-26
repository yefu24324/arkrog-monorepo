/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act50SideAddRidingValueAction, Act50SideFinishRidingAction, Act50SideSetRidingCumulatingValidAction, Act50SideTriggerRidingAction, Act51SideSetTileFireByAbilitySelectorAction, Act51SideSetTowerAction, Act6FunCollectCoinAction, Act7FunCollectTrapAction, ActiveCameraEffectAction, ActiveElectricPlantAction, BattleActionA11 } from "../../../../types/buff-template-data/actions/a/actions-a-11.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act50SideAddRidingValue, Assembly-CSharp 的严格 Action 数据。
 */
export const Act50SideAddRidingValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act50SideAddRidingValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act50SideAddRidingValueAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act50SideAddRidingValueAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act50SideAddRidingValueAction 的 `ridingFactor` 配置字段；准确战斗语义待确认。 */
    "_ridingFactor": z.strictObject({
                           /** Act50SideAddRidingValueAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                           "_serializedValue": z.number().describe("Act50SideAddRidingValueAction 的 `serializedValue` 配置字段；准确战斗语义待确认。"),
                         }).describe("Act50SideAddRidingValueAction 的 `ridingFactor` 配置字段；准确战斗语义待确认。"),
    /** Act50SideAddRidingValueAction 的 `ridingFactorBBKey` 配置字段；准确战斗语义待确认。 */
    "_ridingFactorBBKey": z.string().describe("Act50SideAddRidingValueAction 的 `ridingFactorBBKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** Act50SideAddRidingValueAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.strictObject({
                    /** Act50SideAddRidingValueAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                    "_serializedValue": z.number().describe("Act50SideAddRidingValueAction 的 `serializedValue` 配置字段；准确战斗语义待确认。"),
                  }).describe("Act50SideAddRidingValueAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** Act50SideAddRidingValueAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("Act50SideAddRidingValueAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act50SideAddRidingValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act50SideAddRidingValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act50SideFinishRiding, Assembly-CSharp 的严格 Action 数据。
 */
export const Act50SideFinishRidingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act50SideFinishRiding, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act50SideFinishRidingAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act50SideFinishRidingAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act50SideFinishRiding, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act50SideFinishRidingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act50SideSetRidingCumulatingValid, Assembly-CSharp 的严格 Action 数据。
 */
export const Act50SideSetRidingCumulatingValidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act50SideSetRidingCumulatingValid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act50SideSetRidingCumulatingValidAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act50SideSetRidingCumulatingValidAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Act50SideSetRidingCumulatingValidAction 的 `isValid` 配置字段；准确战斗语义待确认。 */
    "_isValid": z.boolean().describe("Act50SideSetRidingCumulatingValidAction 的 `isValid` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act50SideSetRidingCumulatingValid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act50SideSetRidingCumulatingValidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act50SideTriggerRiding, Assembly-CSharp 的严格 Action 数据。
 */
export const Act50SideTriggerRidingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act50SideTriggerRiding, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act50SideTriggerRidingAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
    "_envSystemKey": z.string().describe("Act50SideTriggerRidingAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act50SideTriggerRiding, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act50SideTriggerRidingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act51SideSetTileFireByAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const Act51SideSetTileFireByAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act51SideSetTileFireByAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act51SideSetTileFireByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("Act51SideSetTileFireByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Act51SideSetTileFireByAbilitySelectorAction 的 `isFire` 配置字段；准确战斗语义待确认。 */
    "_isFire": z.boolean().describe("Act51SideSetTileFireByAbilitySelectorAction 的 `isFire` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act51SideSetTileFireByAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act51SideSetTileFireByAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act51SideSetTower, Assembly-CSharp 的严格 Action 数据。
 */
export const Act51SideSetTowerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act51SideSetTower, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act51SideSetTowerAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
    "_isRemove": z.boolean().describe("Act51SideSetTowerAction 的 `isRemove` 配置字段；准确战斗语义待确认。"),
    /** Act51SideSetTowerAction 的 `stateKey` 配置字段；准确战斗语义待确认。 */
    "_stateKey": z.string().describe("Act51SideSetTowerAction 的 `stateKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act51SideSetTower, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act51SideSetTowerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act6FunCollectCoin, Assembly-CSharp 的严格 Action 数据。
 */
export const Act6FunCollectCoinActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act6FunCollectCoin, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act6FunCollectCoin, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act6FunCollectCoinAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act7FunCollectTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const Act7FunCollectTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act7FunCollectTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act7FunCollectTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act7FunCollectTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ActiveCameraEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const ActiveCameraEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ActiveCameraEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ActiveCameraEffectAction 的 `active` 配置字段；准确战斗语义待确认。 */
    "_active": z.boolean().describe("ActiveCameraEffectAction 的 `active` 配置字段；准确战斗语义待确认。"),
    /** ActiveCameraEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("ActiveCameraEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ActiveCameraEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ActiveCameraEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ActiveElectricPlant, Assembly-CSharp 的严格 Action 数据。
 */
export const ActiveElectricPlantActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ActiveElectricPlant, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ActiveElectricPlantAction 的 `active` 配置字段；准确战斗语义待确认。 */
    "_active": z.boolean().describe("ActiveElectricPlantAction 的 `active` 配置字段；准确战斗语义待确认。"),
    /** ActiveElectricPlantAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ActiveElectricPlantAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ActiveElectricPlant, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ActiveElectricPlantAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA11Schema = z
  .discriminatedUnion("$type", [Act50SideAddRidingValueActionSchema, Act50SideFinishRidingActionSchema, Act50SideSetRidingCumulatingValidActionSchema, Act50SideTriggerRidingActionSchema, Act51SideSetTileFireByAbilitySelectorActionSchema, Act51SideSetTowerActionSchema, Act6FunCollectCoinActionSchema, Act7FunCollectTrapActionSchema, ActiveCameraEffectActionSchema, ActiveElectricPlantActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA11>;
