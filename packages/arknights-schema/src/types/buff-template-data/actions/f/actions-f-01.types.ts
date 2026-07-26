/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FaceLOrRToTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FaceLOrRToTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FaceLOrRToTarget, Assembly-CSharp";
  /** FaceLOrRToTargetAction 的 `checkType` 配置字段；准确战斗语义待确认。 */
  "_checkType": "MAP_POSITION";
  /** FaceLOrRToTargetAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FaceToDirectionViaMoreTargets, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FaceToDirectionViaMoreTargetsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FaceToDirectionViaMoreTargets, Assembly-CSharp";
  /** FaceToDirectionViaMoreTargetsAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "ALL";
  /** FaceToDirectionViaMoreTargetsAction 的 `checkBuildableType` 配置字段；准确战斗语义待确认。 */
  "_checkBuildableType": boolean;
  /** FaceToDirectionViaMoreTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** FaceToDirectionViaMoreTargetsAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** FaceToDirectionViaMoreTargetsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** FaceToDirectionViaMoreTargetsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** FaceToDirectionViaMoreTargetsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** FaceToDirectionViaMoreTargetsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** FaceToDirectionViaMoreTargetsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** FaceToDirectionViaMoreTargetsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** FaceToDirectionViaMoreTargetsAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** FaceToDirectionViaMoreTargetsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** FaceToDirectionViaMoreTargetsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** FaceToDirectionViaMoreTargetsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "WALK_ONLY";
                         /** FaceToDirectionViaMoreTargetsAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** FaceToDirectionViaMoreTargetsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FaceToLOrRViaMoreTargets, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FaceToLOrRViaMoreTargetsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FaceToLOrRViaMoreTargets, Assembly-CSharp";
  /** FaceToLOrRViaMoreTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** FaceToLOrRViaMoreTargetsAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** FaceToLOrRViaMoreTargetsAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** FaceToLOrRViaMoreTargetsAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** FaceToLOrRViaMoreTargetsAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** FaceToLOrRViaMoreTargetsAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** FaceToLOrRViaMoreTargetsAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** FaceToLOrRViaMoreTargetsAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                         /** FaceToLOrRViaMoreTargetsAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** FaceToLOrRViaMoreTargetsAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** FaceToLOrRViaMoreTargetsAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** FaceToLOrRViaMoreTargetsAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** FaceToLOrRViaMoreTargetsAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FaceToTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FaceToTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FaceToTarget, Assembly-CSharp";
  /** FaceToTargetAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** FaceToTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE";
  /** FaceToTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FetchEnemyHpToHost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FetchEnemyHpToHostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FetchEnemyHpToHost, Assembly-CSharp";
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "PURE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FetchHpToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FetchHpToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FetchHpToBlackboard, Assembly-CSharp";
  /** FetchHpToBlackboardAction 的 `blackboardStr` 配置字段；准确战斗语义待确认。 */
  "_blackboardStr": string;
  /** FetchHpToBlackboardAction 的 `buffNameOfBlackboard` 配置字段；准确战斗语义待确认。 */
  "_buffNameOfBlackboard": null | string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "PURE";
  /** FetchHpToBlackboardAction 的 `isHpRatio` 配置字段；准确战斗语义待确认。 */
  "_isHpRatio": boolean;
  /** FetchHpToBlackboardAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterAbilityApplyWay, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterAbilityApplyWayAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterAbilityApplyWay, Assembly-CSharp";
  /** FilterAbilityApplyWayAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterAbilityFamily, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterAbilityFamilyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterAbilityFamily, Assembly-CSharp";
  /** FilterAbilityFamilyAction 的 `familyGroupMask` 配置字段；准确战斗语义待确认。 */
  "_familyGroupMask": "ATTACK" | "ATTACK_OR_COMBAT" | "ATTACK_OR_SKILL" | "COMBAT" | "SKILL";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterAbilityName, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterAbilityNameAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterAbilityName, Assembly-CSharp";
  /** FilterAbilityNameAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** FilterAbilityNameAction 的 `useSearchName` 配置字段；准确战斗语义待确认。 */
  "_useSearchName": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FilterAbilitySpellCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FilterAbilitySpellCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FilterAbilitySpellCnt, Assembly-CSharp";
  /** FilterAbilitySpellCntAction 的 `compareValue` 配置字段；准确战斗语义待确认。 */
  "_compareValue": number;
  /** FilterAbilitySpellCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT";
  /** FilterAbilitySpellCntAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF01 = FaceLOrRToTargetAction | FaceToDirectionViaMoreTargetsAction | FaceToLOrRViaMoreTargetsAction | FaceToTargetAction | FetchEnemyHpToHostAction | FetchHpToBlackboardAction | FilterAbilityApplyWayAction | FilterAbilityFamilyAction | FilterAbilityNameAction | FilterAbilitySpellCntAction;
