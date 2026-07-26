/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetMassLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetMassLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetMassLevel, Assembly-CSharp";
  /** FilterByTargetMassLevelAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE" | "LE";
  /** FilterByTargetMassLevelAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetSpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetSpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetSpRatio, Assembly-CSharp";
  /** FilterByTargetSpRatioAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GE" | "GT" | "LE" | "LT";
  /** FilterByTargetSpRatioAction 的 `spRatio` 配置字段；准确战斗语义待确认。 */
  "_spRatio": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterByTargetSPType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterByTargetSPTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterByTargetSPType, Assembly-CSharp";
  /** FilterByTargetSPTypeAction 的 `spType` 配置字段；准确战斗语义待确认。 */
  "_spType": "INCREASE_WHEN_ATTACK" | "INCREASE_WHEN_TAKEN_DAMAGE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterCardState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterCardStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterCardState, Assembly-CSharp";
  /** FilterCardStateAction 的 `cardState` 配置字段；准确战斗语义待确认。 */
  "_cardState": string;
  /** FilterCardStateAction 的 `filterTokenOrHostCard` 配置字段；准确战斗语义待确认。 */
  "_filterTokenOrHostCard": boolean;
  /** FilterCardStateAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterCharacterAdvancedBuildStateMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterCharacterAdvancedBuildStateMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterCharacterAdvancedBuildStateMask, Assembly-CSharp";
  /** FilterCharacterAdvancedBuildStateMaskAction 的 `mask` 配置字段；准确战斗语义待确认。 */
  "_mask": "IN_SPECIAL_BUILD";
  /** FilterCharacterAdvancedBuildStateMaskAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterCharacterCntByProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterCharacterCntByProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterCharacterCntByProfession, Assembly-CSharp";
  /** FilterCharacterCntByProfessionAction 的 `assignBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_assignBlackboardKey": string;
  /** FilterCharacterCntByProfessionAction 的 `assignToBB` 配置字段；准确战斗语义待确认。 */
  "_assignToBB": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FilterCharacterCntByProfessionAction 的 `compareCnt` 配置字段；准确战斗语义待确认。 */
  "_compareCnt": number;
  /** FilterCharacterCntByProfessionAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT";
  /** FilterCharacterCntByProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
  "_profession": Array<"CASTER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER">;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterCharacterEvolvePhase, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterCharacterEvolvePhaseAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterCharacterEvolvePhase, Assembly-CSharp";
  /** FilterCharacterEvolvePhaseAction 的 `phaseLevel` 配置字段；准确战斗语义待确认。 */
  "_phaseLevel": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterCharacterKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterCharacterKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterCharacterKey, Assembly-CSharp";
  /** FilterCharacterKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterCharacterLastDeathReason, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterCharacterLastDeathReasonAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterCharacterLastDeathReason, Assembly-CSharp";
  /** FilterCharacterLastDeathReasonAction 的 `characterType` 配置字段；准确战斗语义待确认。 */
  "_characterType": "BUFF_OWNER";
  /** FilterCharacterLastDeathReasonAction 的 `finishReason` 配置字段；准确战斗语义待确认。 */
  "_finishReason": "MOVE_LIKE_RESPAWN_EXTERNAL" | "MOVE_LIKE_RESPAWN_SELF";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterChargeTimes, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterChargeTimesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterChargeTimes, Assembly-CSharp";
  /** FilterChargeTimesAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "GT";
  /** FilterChargeTimesAction 的 `isExCharge` 配置字段；准确战斗语义待确认。 */
  "_isExCharge": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FilterChargeTimesAction 的 `times` 配置字段；准确战斗语义待确认。 */
  "_times": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF04 = FilterByTargetMassLevelAction | FilterByTargetSpRatioAction | FilterByTargetSPTypeAction | FilterCardStateAction | FilterCharacterAdvancedBuildStateMaskAction | FilterCharacterCntByProfessionAction | FilterCharacterEvolvePhaseAction | FilterCharacterKeyAction | FilterCharacterLastDeathReasonAction | FilterChargeTimesAction;
