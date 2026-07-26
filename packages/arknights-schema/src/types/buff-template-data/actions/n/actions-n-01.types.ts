/**
 * buff_template_data 的 N 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+NecromancerAssignTargetTileToSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface NecromancerAssignTargetTileToSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+NecromancerAssignTargetTileToSelector, Assembly-CSharp";
  /** NecromancerAssignTargetTileToSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** NecromancerAssignTargetTileToSelectorAction 的 `selectorOwnerType` 配置字段；准确战斗语义待确认。 */
  "_selectorOwnerType": "BUFF_SOURCE";
  /** NecromancerAssignTargetTileToSelectorAction 的 `tileTargetType` 配置字段；准确战斗语义待确认。 */
  "_tileTargetType": "BUFF_OWNER";
  /** NecromancerAssignTargetTileToSelectorAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
  "_useFirstActiveAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+NoSourceDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface NoSourceDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+NoSourceDamage, Assembly-CSharp";
  /** NoSourceDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF" | "NONE" | "NORMAL" | "SPLASH";
  /** NoSourceDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "ELEMENT" | "MAGICAL" | "PHYSICAL" | "PURE";
  /** NoSourceDamageAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。 */
  "_damageWithoutModify": boolean;
  /** NoSourceDamageAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreCancelReasonMask": "MISS, BLOCKED, BLOCKED_WITH_DAMAGE_NUMBER" | "MISS, BLOCKED, BLOCKED_WITH_DAMAGE_NUMBER, HIT_FAILED" | "NONE";
  /** NoSourceDamageAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** NoSourceDamageAction 的 `instantKillLikeDamage` 配置字段；准确战斗语义待确认。 */
  "_instantKillLikeDamage": boolean;
  /** NoSourceDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvDamage": boolean;
  /** NoSourceDamageAction 的 `isNotChangeableValue` 配置字段；准确战斗语义待确认。 */
  "_isNotChangeableValue": boolean;
  /** NoSourceDamageAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** NoSourceDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** NoSourceDamageAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierByKey": boolean;
  /** NoSourceDamageAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+NoSourceDamageNew, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface NoSourceDamageNewAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+NoSourceDamageNew, Assembly-CSharp";
  /** NoSourceDamageNewAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NONE" | "NORMAL";
  /** NoSourceDamageNewAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL" | "PURE";
  /** NoSourceDamageNewAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。 */
  "_damageWithoutModify": boolean;
  /** NoSourceDamageNewAction 的 `ignoreCancelReasonMask` 配置字段；准确战斗语义待确认。 */
  "_ignoreCancelReasonMask": "NONE";
  /** NoSourceDamageNewAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** NoSourceDamageNewAction 的 `instantKillLikeDamage` 配置字段；准确战斗语义待确认。 */
  "_instantKillLikeDamage": boolean;
  /** NoSourceDamageNewAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvDamage": boolean;
  /** NoSourceDamageNewAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
  "_isUndeadable": boolean;
  /** NoSourceDamageNewAction 的 `multiplierByKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierByKey": boolean;
  /** NoSourceDamageNewAction 的 `multiplierKey` 配置字段；准确战斗语义待确认。 */
  "_multiplierKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+NoSourceGlobalDamageScaleByBuffCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface NoSourceGlobalDamageScaleByBuffCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+NoSourceGlobalDamageScaleByBuffCnt, Assembly-CSharp";
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF";
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "PURE";
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `damageWithoutModify` 配置字段；准确战斗语义待确认。 */
  "_damageWithoutModify": boolean;
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvDamage": boolean;
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `noSourceDamage` 配置字段；准确战斗语义待确认。 */
  "_noSourceDamage": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** NoSourceGlobalDamageScaleByBuffCntAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionN01 = NecromancerAssignTargetTileToSelectorAction | NoSourceDamageAction | NoSourceDamageNewAction | NoSourceGlobalDamageScaleByBuffCntAction;
