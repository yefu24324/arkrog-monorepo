/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act50SideAddRidingValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act50SideAddRidingValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act50SideAddRidingValue, Assembly-CSharp";
  /** Act50SideAddRidingValueAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act50SideAddRidingValueAction 的 `ridingFactor` 配置字段；准确战斗语义待确认。 */
  "_ridingFactor": {
                        /** Act50SideAddRidingValueAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                        "_serializedValue": number;
                      };
  /** Act50SideAddRidingValueAction 的 `ridingFactorBBKey` 配置字段；准确战斗语义待确认。 */
  "_ridingFactorBBKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE";
  /** Act50SideAddRidingValueAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": {
                 /** Act50SideAddRidingValueAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                 "_serializedValue": number;
               };
  /** Act50SideAddRidingValueAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act50SideFinishRiding, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act50SideFinishRidingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act50SideFinishRiding, Assembly-CSharp";
  /** Act50SideFinishRidingAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act50SideSetRidingCumulatingValid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act50SideSetRidingCumulatingValidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act50SideSetRidingCumulatingValid, Assembly-CSharp";
  /** Act50SideSetRidingCumulatingValidAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Act50SideSetRidingCumulatingValidAction 的 `isValid` 配置字段；准确战斗语义待确认。 */
  "_isValid": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act50SideTriggerRiding, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act50SideTriggerRidingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act50SideTriggerRiding, Assembly-CSharp";
  /** Act50SideTriggerRidingAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act51SideSetTileFireByAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act51SideSetTileFireByAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act51SideSetTileFireByAbilitySelector, Assembly-CSharp";
  /** Act51SideSetTileFireByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** Act51SideSetTileFireByAbilitySelectorAction 的 `isFire` 配置字段；准确战斗语义待确认。 */
  "_isFire": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act51SideSetTower, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act51SideSetTowerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act51SideSetTower, Assembly-CSharp";
  /** Act51SideSetTowerAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
  "_isRemove": boolean;
  /** Act51SideSetTowerAction 的 `stateKey` 配置字段；准确战斗语义待确认。 */
  "_stateKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act6FunCollectCoin, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act6FunCollectCoinAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act6FunCollectCoin, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Act7FunCollectTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Act7FunCollectTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Act7FunCollectTrap, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ActiveCameraEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ActiveCameraEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ActiveCameraEffect, Assembly-CSharp";
  /** ActiveCameraEffectAction 的 `active` 配置字段；准确战斗语义待确认。 */
  "_active": boolean;
  /** ActiveCameraEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ActiveElectricPlant, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ActiveElectricPlantAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ActiveElectricPlant, Assembly-CSharp";
  /** ActiveElectricPlantAction 的 `active` 配置字段；准确战斗语义待确认。 */
  "_active": boolean;
  /** ActiveElectricPlantAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA11 = Act50SideAddRidingValueAction | Act50SideFinishRidingAction | Act50SideSetRidingCumulatingValidAction | Act50SideTriggerRidingAction | Act51SideSetTileFireByAbilitySelectorAction | Act51SideSetTowerAction | Act6FunCollectCoinAction | Act7FunCollectTrapAction | ActiveCameraEffectAction | ActiveElectricPlantAction;
