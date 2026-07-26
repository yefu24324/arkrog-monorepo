/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByGlobalBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByGlobalBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByGlobalBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FilterByGlobalBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。 */
  "_channel": "CHARACTER" | "ENEMY" | "E_NUM" | "LEVEL" | "ROGUELIKE";
  /** FilterByGlobalBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** FilterByGlobalBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByGridManhattanDistance, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByGridManhattanDistanceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByGridManhattanDistance, Assembly-CSharp";
  /** FilterByGridManhattanDistanceAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
  "_compareValue": number;
  /** FilterByGridManhattanDistanceAction 的 `compareValueKey` 配置字段；准确战斗语义待确认。 */
  "_compareValueKey": null;
  /** FilterByGridManhattanDistanceAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE";
  /** FilterByGridManhattanDistanceAction 的 `firstGridColKey` 配置字段；准确战斗语义待确认。 */
  "_firstGridColKey": string;
  /** FilterByGridManhattanDistanceAction 的 `firstGridRowKey` 配置字段；准确战斗语义待确认。 */
  "_firstGridRowKey": string;
  /** FilterByGridManhattanDistanceAction 的 `secondGridColKey` 配置字段；准确战斗语义待确认。 */
  "_secondGridColKey": string;
  /** FilterByGridManhattanDistanceAction 的 `secondGridRowKey` 配置字段；准确战斗语义待确认。 */
  "_secondGridRowKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByOccupiedRemainingCharacterCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByOccupiedRemainingCharacterCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByOccupiedRemainingCharacterCnt, Assembly-CSharp";
  /** FilterByOccupiedRemainingCharacterCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByShieldValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByShieldValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByShieldValue, Assembly-CSharp";
  /** FilterByShieldValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LE";
  /** FilterByShieldValueAction 的 `enableFilterSource` 配置字段；准确战斗语义待确认。 */
  "_enableFilterSource": boolean;
  /** FilterByShieldValueAction 的 `filterHostOrToken` 配置字段；准确战斗语义待确认。 */
  "_filterHostOrToken": boolean;
  /** FilterByShieldValueAction 的 `filterSource` 配置字段；准确战斗语义待确认。 */
  "_filterSource": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** FilterByShieldValueAction 的 `passIfNoSource` 配置字段；准确战斗语义待确认。 */
  "_passIfNoSource": boolean;
  /** FilterByShieldValueAction 的 `shieldKey` 配置字段；准确战斗语义待确认。 */
  "_shieldKey": string;
  /** FilterByShieldValueAction 的 `shieldValue` 配置字段；准确战斗语义待确认。 */
  "_shieldValue": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByStormDirectionValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByStormDirectionValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByStormDirectionValue, Assembly-CSharp";
  /** FilterByStormDirectionValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
  "_anotherKeyToCompare": null;
  /** FilterByStormDirectionValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS";
  /** FilterByStormDirectionValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetAttribute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetAttributeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetAttribute, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "BLOCK_CNT" | "MASS_LEVEL" | "MAX_HP" | "MOVE_SPEED";
  /** FilterByTargetAttributeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "GT" | "LE" | "LT";
  /** FilterByTargetAttributeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
  /** FilterByTargetAttributeAction 的 `useFloat` 配置字段；准确战斗语义待确认。 */
  "_useFloat": boolean;
  /** FilterByTargetAttributeAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** FilterByTargetAttributeAction 的 `valueFP` 配置字段；准确战斗语义待确认。 */
  "_valueFP": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetDataLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetDataLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetDataLevel, Assembly-CSharp";
  /** FilterByTargetDataLevelAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "LE";
  /** FilterByTargetDataLevelAction 的 `level` 配置字段；准确战斗语义待确认。 */
  "_level": number;
  /** FilterByTargetDataLevelAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetEpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetEpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetEpRatio, Assembly-CSharp";
  /** FilterByTargetEpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LT";
  /** FilterByTargetEpRatioAction 的 `epRatio` 配置字段；准确战斗语义待确认。 */
  "_epRatio": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetHp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetHpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetHp, Assembly-CSharp";
  /** FilterByTargetHpAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GT" | "LE" | "LT";
  /** FilterByTargetHpAction 的 `hpValue` 配置字段；准确战斗语义待确认。 */
  "_hpValue": {
                   /** FilterByTargetHpAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                   "_serializedValue": number;
                 };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetHpRatio, Assembly-CSharp";
  /** FilterByTargetHpRatioAction 的 `blackboardPrefix` 配置字段；准确战斗语义待确认。 */
  "_blackboardPrefix": null | string;
  /** FilterByTargetHpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** FilterByTargetHpRatioAction 的 `useSourceHpRatio` 配置字段；准确战斗语义待确认。 */
  "_useSourceHpRatio": boolean;
  /** FilterByTargetHpRatioAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF03 = FilterByGlobalBlackboardAction | FilterByGridManhattanDistanceAction | FilterByOccupiedRemainingCharacterCntAction | FilterByShieldValueAction | FilterByStormDirectionValueAction | FilterByTargetAttributeAction | FilterByTargetDataLevelAction | FilterByTargetEpRatioAction | FilterByTargetHpAction | FilterByTargetHpRatioAction;
