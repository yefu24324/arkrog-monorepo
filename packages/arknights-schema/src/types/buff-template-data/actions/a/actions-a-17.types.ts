/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAttributeDefaultValueToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAttributeDefaultValueToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAttributeDefaultValueToBlackboard, Assembly-CSharp";
  /** AssignAttributeDefaultValueToBlackboardAction 的 `atkValue` 配置字段；准确战斗语义待确认。 */
  "_atkValue": number;
  /** AssignAttributeDefaultValueToBlackboardAction 的 `attackSpeedValue` 配置字段；准确战斗语义待确认。 */
  "_attackSpeedValue": number;
  /** AssignAttributeDefaultValueToBlackboardAction 的 `blockCnt` 配置字段；准确战斗语义待确认。 */
  "_blockCnt": number;
  /** AssignAttributeDefaultValueToBlackboardAction 的 `defValue` 配置字段；准确战斗语义待确认。 */
  "_defValue": number;
  /** AssignAttributeDefaultValueToBlackboardAction 的 `magicResistanceValue` 配置字段；准确战斗语义待确认。 */
  "_magicResistanceValue": number;
  /** AssignAttributeDefaultValueToBlackboardAction 的 `maxHpValue` 配置字段；准确战斗语义待确认。 */
  "_maxHpValue": number;
  /** AssignAttributeDefaultValueToBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAttributeRawDataIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAttributeRawDataIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAttributeRawDataIntoBlackboard, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATTACK_SPEED" | "MASS_LEVEL" | "MAX_HP" | "MOVE_SPEED";
  /** AssignAttributeRawDataIntoBlackboardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAttributeSumInRangeToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAttributeSumInRangeToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAttributeSumInRangeToBlackboard, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "BLOCK_CNT";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignAttributeSumInRangeToBlackboardAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** AssignAttributeSumInRangeToBlackboardAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** AssignAttributeSumInRangeToBlackboardAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** AssignAttributeSumInRangeToBlackboardAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignAttributeSumInRangeToBlackboardAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
  "_useAttackRange": boolean;
  /** AssignAttributeSumInRangeToBlackboardAction 的 `useCurrentModeRange` 配置字段；准确战斗语义待确认。 */
  "_useCurrentModeRange": boolean;
  /** AssignAttributeSumInRangeToBlackboardAction 的 `useGlobalRange` 配置字段；准确战斗语义待确认。 */
  "_useGlobalRange": boolean;
  /** AssignAttributeSumInRangeToBlackboardAction 的 `useTargetRangeInsteadOfSource` 配置字段；准确战斗语义待确认。 */
  "_useTargetRangeInsteadOfSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAttributeToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAttributeToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAttributeToBB, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ABILITY_RANGE_FORWARD_EXTEND" | "ATK" | "ATTACK_SPEED" | "BLOCK_CNT" | "COST" | "DEF" | "MAGIC_RESISTANCE" | "MASS_LEVEL" | "MAX_HP" | "MOVE_SPEED";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignAttributeToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。 */
  "_scaleVar": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBackwardTileToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBackwardTileToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBackwardTileToBB, Assembly-CSharp";
  /** AssignBackwardTileToBBAction 的 `checkPassable` 配置字段；准确战斗语义待确认。 */
  "_checkPassable": boolean;
  /** AssignBackwardTileToBBAction 的 `dist` 配置字段；准确战斗语义待确认。 */
  "_dist": number;
  /** AssignBackwardTileToBBAction 的 `distanceCustomKey` 配置字段；准确战斗语义待确认。 */
  "_distanceCustomKey": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBranchStartLocationToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBranchStartLocationToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBranchStartLocationToBlackboard, Assembly-CSharp";
  /** AssignBranchStartLocationToBlackboardAction 的 `actionIndex` 配置字段；准确战斗语义待确认。 */
  "_actionIndex": number;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignBranchStartLocationToBlackboardAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffBlackboard, Assembly-CSharp";
  /** AssignBuffBlackboardAction 的 `assignFirstBuff` 配置字段；准确战斗语义待确认。 */
  "_assignFirstBuff": boolean;
  /** AssignBuffBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
  "_assignString": boolean;
  /** AssignBuffBlackboardAction 的 `assignToBuffSourceType` 配置字段；准确战斗语义待确认。 */
  "_assignToBuffSourceType": "BUFF_SOURCE" | "TARGET";
  /** AssignBuffBlackboardAction 的 `assignToMainBuff` 配置字段；准确战斗语义待确认。 */
  "_assignToMainBuff": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AssignBuffBlackboardAction 的 `buffKeyAssignFrom` 配置字段；准确战斗语义待确认。 */
  "_buffKeyAssignFrom": null | string;
  /** AssignBuffBlackboardAction 的 `checkAssignToBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkAssignToBuffSource": boolean;
  /** AssignBuffBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** AssignBuffBlackboardAction 的 `useCurBuffBB` 配置字段；准确战斗语义待确认。 */
  "_useCurBuffBB": boolean;
  /** AssignBuffBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffBlackboardFromAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromAbility, Assembly-CSharp";
  /** AssignBuffBlackboardFromAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** AssignBuffBlackboardFromAbilityAction 的 `assignedBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_assignedBlackboardKey": string;
  /** AssignBuffBlackboardFromAbilityAction 的 `blackboardKeyInAbility` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeyInAbility": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** AssignBuffBlackboardFromAbilityAction 的 `useTargetHost` 配置字段；准确战斗语义待确认。 */
  "_useTargetHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromOthers, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffBlackboardFromOthersAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffBlackboardFromOthers, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": null | string;
  /** AssignBuffBlackboardFromOthersAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** AssignBuffBlackboardFromOthersAction 的 `filterBuffSource` 配置字段；准确战斗语义待确认。 */
  "_filterBuffSource": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE" | "TARGET";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** AssignBuffBlackboardFromOthersAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignBuffCountIntoBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignBuffCountIntoBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignBuffCountIntoBlackboard, Assembly-CSharp";
  /** AssignBuffCountIntoBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AssignBuffCountIntoBlackboardAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** AssignBuffCountIntoBlackboardAction 的 `getStackCountFromFirstBuff` 配置字段；准确战斗语义待确认。 */
  "_getStackCountFromFirstBuff": boolean;
  /** AssignBuffCountIntoBlackboardAction 的 `showOverrideWarning` 配置字段；准确战斗语义待确认。 */
  "_showOverrideWarning": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AssignBuffCountIntoBlackboardAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。 */
  "_stackCountKey": string;
  /** AssignBuffCountIntoBlackboardAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。 */
  "_stackCountPeeling": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AssignBuffCountIntoBlackboardAction 的 `useValidStackCount` 配置字段；准确战斗语义待确认。 */
  "_useValidStackCount": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA17 = AssignAttributeDefaultValueToBlackboardAction | AssignAttributeRawDataIntoBlackboardAction | AssignAttributeSumInRangeToBlackboardAction | AssignAttributeToBBAction | AssignBackwardTileToBBAction | AssignBranchStartLocationToBlackboardAction | AssignBuffBlackboardAction | AssignBuffBlackboardFromAbilityAction | AssignBuffBlackboardFromOthersAction | AssignBuffCountIntoBlackboardAction;
