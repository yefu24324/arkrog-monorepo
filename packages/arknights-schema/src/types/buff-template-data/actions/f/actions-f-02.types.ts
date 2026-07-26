/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterAbilityValidCastTargetCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterAbilityValidCastTargetCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterAbilityValidCastTargetCnt, Assembly-CSharp";
  /** FilterAbilityValidCastTargetCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterBuffKeyInSnapshot, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterBuffKeyInSnapshotAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterBuffKeyInSnapshot, Assembly-CSharp";
  /** FilterBuffKeyInSnapshotAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** FilterBuffKeyInSnapshotAction 的 `mainBuff` 配置字段；准确战斗语义待确认。 */
  "_mainBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByAbilityFinishReason, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByAbilityFinishReasonAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByAbilityFinishReason, Assembly-CSharp";
  /** FilterByAbilityFinishReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。 */
  "_finishReason": "INTERRUPTED" | "NORMAL_EXIT" | "OWNER_DEAD" | "PALSY" | "TARGET_DEAD";
  /** FilterByAbilityFinishReasonAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。 */
  "_useBuffAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByAbilityIgnorePalsyInterrupt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByAbilityIgnorePalsyInterruptAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByAbilityIgnorePalsyInterrupt, Assembly-CSharp";
  /** FilterByAbilityIgnorePalsyInterruptAction 的 `skipUnitCheck` 配置字段；准确战斗语义待确认。 */
  "_skipUnitCheck": boolean;
  /** FilterByAbilityIgnorePalsyInterruptAction 的 `unset` 配置字段；准确战斗语义待确认。 */
  "_unset": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByBlackboardStrIsValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByBlackboardStrIsValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByBlackboardStrIsValue, Assembly-CSharp";
  /** FilterByBlackboardStrIsValueAction 的 `checkIsEqual` 配置字段；准确战斗语义待确认。 */
  "_checkIsEqual": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FilterByBlackboardStrIsValueAction 的 `useOrdinalIgnoreCase` 配置字段；准确战斗语义待确认。 */
  "_useOrdinalIgnoreCase": boolean;
  /** FilterByBlackboardStrIsValueAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
  /** FilterByBlackboardStrIsValueAction 的 `valueKeyToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueKeyToCompare": "build_uid" | "cur_uid" | "new_uid" | "part_name_fx";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByBlackboardValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByBlackboardValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByBlackboardValue, Assembly-CSharp";
  /** FilterByBlackboardValueAction 的 `anotherBuff` 配置字段；准确战斗语义待确认。 */
  "_anotherBuff": boolean;
  /** FilterByBlackboardValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
  "_anotherKeyToCompare": null | string;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FilterByBlackboardValueAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** FilterByBlackboardValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** FilterByBlackboardValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByBuffStackCount, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByBuffStackCountAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByBuffStackCount, Assembly-CSharp";
  /** FilterByBuffStackCountAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FilterByBuffStackCountAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** FilterByBuffStackCountAction 的 `checkFromUnoverridableBuffCount` 配置字段；准确战斗语义待确认。 */
  "_checkFromUnoverridableBuffCount": boolean;
  /** FilterByBuffStackCountAction 的 `checkSnapshotBuff` 配置字段；准确战斗语义待确认。 */
  "_checkSnapshotBuff": boolean;
  /** FilterByBuffStackCountAction 的 `checkTargetHost` 配置字段；准确战斗语义待确认。 */
  "_checkTargetHost": boolean;
  /** FilterByBuffStackCountAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** FilterByBuffStackCountAction 的 `stackCount` 配置字段；准确战斗语义待确认。 */
  "_stackCount": number;
  /** FilterByBuffStackCountAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。 */
  "_stackCountKey": null | string;
  /** FilterByBuffStackCountAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。 */
  "_stackCountPeeling": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByCardUidInBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByCardUidInBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByCardUidInBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByCharacterSharedBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByCharacterSharedBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByCharacterSharedBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FilterByCharacterSharedBlackboardAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GT" | "LE";
  /** FilterByCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** FilterByCharacterSharedBlackboardAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
  /** FilterByCharacterSharedBlackboardAction 的 `valueToCompareKey` 配置字段；准确战斗语义待确认。 */
  "_valueToCompareKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByExecuteBlackboardValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByExecuteBlackboardValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByExecuteBlackboardValue, Assembly-CSharp";
  /** FilterByExecuteBlackboardValueAction 的 `anotherKeyToCompare` 配置字段；准确战斗语义待确认。 */
  "_anotherKeyToCompare": null | "attribute_buff_cnt" | "dynamic_2" | "first_add_danger_grade" | "max_block_damage_cnt" | "max_drop_count" | "max_fly_count" | "max_hit_count" | "min_target_cnt" | "second_add_danger_grade";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FilterByExecuteBlackboardValueAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** FilterByExecuteBlackboardValueAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF02 = FilterAbilityValidCastTargetCntAction | FilterBuffKeyInSnapshotAction | FilterByAbilityFinishReasonAction | FilterByAbilityIgnorePalsyInterruptAction | FilterByBlackboardStrIsValueAction | FilterByBlackboardValueAction | FilterByBuffStackCountAction | FilterByCardUidInBlackboardAction | FilterByCharacterSharedBlackboardAction | FilterByExecuteBlackboardValueAction;
