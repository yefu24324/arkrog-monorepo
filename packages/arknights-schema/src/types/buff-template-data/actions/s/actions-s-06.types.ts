/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3IsRoomDangerous, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3IsRoomDangerousAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3IsRoomDangerous, Assembly-CSharp";
  /** SandboxV3IsRoomDangerousAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。 */
  "_roomOffsetX": number;
  /** SandboxV3IsRoomDangerousAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。 */
  "_roomOffsetY": number;
  /** SandboxV3IsRoomDangerousAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ManualFinishGame, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ManualFinishGameAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ManualFinishGame, Assembly-CSharp";
  /** SandboxV3ManualFinishGameAction 的 `reason` 配置字段；准确战斗语义待确认。 */
  "_reason": "BASE_BREAK";
  /** SandboxV3ManualFinishGameAction 的 `result` 配置字段；准确战斗语义待确认。 */
  "_result": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ManuallyAddItems, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ManuallyAddItemsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ManuallyAddItems, Assembly-CSharp";
  /** SandboxV3ManuallyAddItemsAction 的 `allowEmpty` 配置字段；准确战斗语义待确认。 */
  "_allowEmpty": boolean;
  /** SandboxV3ManuallyAddItemsAction 的 `itemCntBbKey` 配置字段；准确战斗语义待确认。 */
  "_itemCntBbKey": string;
  /** SandboxV3ManuallyAddItemsAction 的 `itemIdsBbKey` 配置字段；准确战斗语义待确认。 */
  "_itemIdsBbKey": string;
  /** SandboxV3ManuallyAddItemsAction 的 `reason` 配置字段；准确战斗语义待确认。 */
  "_reason": "ANIMAL_PRODUCE" | "PRODUCE_OUTPUT" | "SPECIAL_TRIGGER";
  /** SandboxV3ManuallyAddItemsAction 的 `singleItem` 配置字段；准确战斗语义待确认。 */
  "_singleItem": boolean;
  /** SandboxV3ManuallyAddItemsAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ManuallyRemoveItems, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ManuallyRemoveItemsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ManuallyRemoveItems, Assembly-CSharp";
  /** SandboxV3ManuallyRemoveItemsAction 的 `allowEmpty` 配置字段；准确战斗语义待确认。 */
  "_allowEmpty": boolean;
  /** SandboxV3ManuallyRemoveItemsAction 的 `itemCntBbKey` 配置字段；准确战斗语义待确认。 */
  "_itemCntBbKey": string;
  /** SandboxV3ManuallyRemoveItemsAction 的 `itemIdsBbKey` 配置字段；准确战斗语义待确认。 */
  "_itemIdsBbKey": string;
  /** SandboxV3ManuallyRemoveItemsAction 的 `reason` 配置字段；准确战斗语义待确认。 */
  "_reason": "ANIMAL_PRODUCE_COST";
  /** SandboxV3ManuallyRemoveItemsAction 的 `singleItem` 配置字段；准确战斗语义待确认。 */
  "_singleItem": boolean;
  /** SandboxV3ManuallyRemoveItemsAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ModifyBuffStat, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ModifyBuffStatAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ModifyBuffStat, Assembly-CSharp";
  /** SandboxV3ModifyBuffStatAction 的 `formula` 配置字段；准确战斗语义待确认。 */
  "_formula": "ADDITION" | "FINAL_SCALER" | "MULTIPLIER";
  /** SandboxV3ModifyBuffStatAction 的 `statType` 配置字段；准确战斗语义待确认。 */
  "_statType": "AESTHETICS" | "PROSPERITY";
  /** SandboxV3ModifyBuffStatAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** SandboxV3ModifyBuffStatAction 的 `valueBbKey` 配置字段；准确战斗语义待确认。 */
  "_valueBbKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ProcessorInherit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ProcessorInheritAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ProcessorInherit, Assembly-CSharp";
  /** SandboxV3ProcessorInheritAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3RecoverSpForOtherCharactersWithSameFood, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3RecoverSpForOtherCharactersWithSameFoodAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3RecoverSpForOtherCharactersWithSameFood, Assembly-CSharp";
  /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `dontShowSpUI` 配置字段；准确战斗语义待确认。 */
  "_dontShowSpUI": boolean;
  /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `runeKey` 配置字段；准确战斗语义待确认。 */
  "_runeKey": string;
  /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `spValue` 配置字段；准确战斗语义待确认。 */
  "_spValue": number;
  /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `spValueBbKey` 配置字段；准确战斗语义待确认。 */
  "_spValueBbKey": string;
  /** SandboxV3RecoverSpForOtherCharactersWithSameFoodAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3RemoveBuffStat, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3RemoveBuffStatAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3RemoveBuffStat, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3SaveEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3SaveEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3SaveEnemy, Assembly-CSharp";
  /** SandboxV3SaveEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SandboxV3ServiceInherit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SandboxV3ServiceInheritAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SandboxV3ServiceInherit, Assembly-CSharp";
  /** SandboxV3ServiceInheritAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS06 = SandboxV3IsRoomDangerousAction | SandboxV3ManualFinishGameAction | SandboxV3ManuallyAddItemsAction | SandboxV3ManuallyRemoveItemsAction | SandboxV3ModifyBuffStatAction | SandboxV3ProcessorInheritAction | SandboxV3RecoverSpForOtherCharactersWithSameFoodAction | SandboxV3RemoveBuffStatAction | SandboxV3SaveEnemyAction | SandboxV3ServiceInheritAction;
