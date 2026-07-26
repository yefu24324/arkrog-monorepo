/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AOEDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AOEDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AOEDamage, Assembly-CSharp";
  /** AOEDamageAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": null | string;
  /** AOEDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "ADDITION" | "BUFF" | "NORMAL" | "SPLASH";
  /** AOEDamageAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": null | Array<{
                 /** AOEDamageAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** AOEDamageAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** AOEDamageAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** AOEDamageAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** AOEDamageAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** AOEDamageAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** AOEDamageAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | Array<{
                                                                     /** 属性修改器指向的战斗属性。 */
                                                                     "attributeType": "MOVE_SPEED";
                                                                     /** AOEDamageAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                     "fetchBaseValueFromSourceEntity": boolean;
                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                     "formulaItem": string;
                                                                     /** AOEDamageAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                     "loadFromBlackboard": boolean;
                                                                     /** 黑板参数的数值槽。 */
                                                                     "value": number;
                                                                   }>;
                                    };
                 /** AOEDamageAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null | string;
                 /** AOEDamageAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** AOEDamageAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** AOEDamageAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** AOEDamageAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** AOEDamageAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null | string;
                 /** AOEDamageAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** AOEDamageAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** AOEDamageAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** AOEDamageAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** AOEDamageAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** AOEDamageAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** AOEDamageAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** AOEDamageAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** AOEDamageAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** AOEDamageAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** AOEDamageAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "LIMITED";
                 /** AOEDamageAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** AOEDamageAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** AOEDamageAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** AOEDamageAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null | string;
                 /** AOEDamageAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** AOEDamageAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** AOEDamageAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** AOEDamageAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** AOEDamageAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** AOEDamageAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** AOEDamageAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** AOEDamageAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** AOEDamageAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** AOEDamageAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** AOEDamageAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** AOEDamageAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                 /** AOEDamageAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** AOEDamageAction 的 `checkTargetAlive` 配置字段；准确战斗语义待确认。 */
  "_checkTargetAlive": boolean;
  /** AOEDamageAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
  "_createEffect": boolean;
  /** AOEDamageAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** AOEDamageAction 的 `damageScale` 配置字段；准确战斗语义待确认。 */
  "_damageScale": null | string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL" | "PURE";
  /** AOEDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** AOEDamageAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
  "_filterType": "ALL" | "HATRED_DES";
  /** AOEDamageAction 的 `hitEffectKey` 配置字段；准确战斗语义待确认。 */
  "_hitEffectKey": null | string;
  /** AOEDamageAction 的 `hitEffectUseSourceFaceTo` 配置字段；准确战斗语义待确认。 */
  "_hitEffectUseSourceFaceTo": boolean;
  /** AOEDamageAction 的 `isNoSourceDamage` 配置字段；准确战斗语义待确认。 */
  "_isNoSourceDamage": boolean;
  /** AOEDamageAction 的 `maxTargetCountKey` 配置字段；准确战斗语义待确认。 */
  "_maxTargetCountKey": string;
  /** AOEDamageAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** AOEDamageAction 的 `radius` 配置字段；准确战斗语义待确认。 */
  "_radius": number;
  /** AOEDamageAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** AOEDamageAction 的 `sourceApplyWay` 配置字段；准确战斗语义待确认。 */
  "_sourceApplyWay": "ALL" | "MELEE" | "NONE" | "RANGED";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AOEDamageAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** AOEDamageAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** AOEDamageAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "E_NUM" | "INVISIBLE" | "STUNNED";
                         /** AOEDamageAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** AOEDamageAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** AOEDamageAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** AOEDamageAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** AOEDamageAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "CAMOUFLAGE" | "STUNNED";
                         /** AOEDamageAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** AOEDamageAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** AOEDamageAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** AOEDamageAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** AOEDamageAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** AOEDamageAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** AOEDamageAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER";
                         /** AOEDamageAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "DAMAGE" | "NONE";
                         /** AOEDamageAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT" | "DEFAULT, TRAP_OR_ITEM" | "NONE";
                         /** AOEDamageAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL" | "FLY_ONLY" | "NONE" | "WALK_ONLY";
                         /** AOEDamageAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY" | "BOTH_ALLY_AND_ENEMY" | "ENEMY" | "NONE";
                         /** AOEDamageAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET";
  /** AOEDamageAction 的 `useAbilitySelector` 配置字段；准确战斗语义待确认。 */
  "_useAbilitySelector": boolean;
  /** AOEDamageAction 的 `useAbilitySourceSide` 配置字段；准确战斗语义待确认。 */
  "_useAbilitySourceSide": boolean;
  /** AOEDamageAction 的 `useDamageFromBB` 配置字段；准确战斗语义待确认。 */
  "_useDamageFromBB": boolean;
  /** AOEDamageAction 的 `useRadius` 配置字段；准确战斗语义待确认。 */
  "_useRadius": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AOEElementDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AOEElementDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AOEElementDamage, Assembly-CSharp";
  /** AOEElementDamageAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
  "_elementDamageType": "DARK" | "FIRE";
  /** AOEElementDamageAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** AOEElementDamageAction 的 `fixedEpDamage` 配置字段；准确战斗语义待确认。 */
  "_fixedEpDamage": number;
  /** AOEElementDamageAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。 */
  "_fixedEpDamageKey": null | string;
  /** AOEElementDamageAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。 */
  "_isFixedEpDamage": boolean;
  /** AOEElementDamageAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** AOEElementDamageAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** AOEElementDamageAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** AOEElementDamageAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** AOEElementDamageAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** AOEElementDamageAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** AOEElementDamageAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** AOEElementDamageAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** AOEElementDamageAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** AOEElementDamageAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** AOEElementDamageAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** AOEElementDamageAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** AOEElementDamageAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** AOEElementDamageAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** AOEElementDamageAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** AOEElementDamageAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER";
                         /** AOEElementDamageAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "EP_DAMAGE" | "NONE";
                         /** AOEElementDamageAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** AOEElementDamageAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** AOEElementDamageAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** AOEElementDamageAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** AOEElementDamageAction 的 `useRadius` 配置字段；准确战斗语义待确认。 */
  "_useRadius": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AOEHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AOEHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AOEHeal, Assembly-CSharp";
  /** AOEHealAction 的 `createEffect` 配置字段；准确战斗语义待确认。 */
  "_createEffect": boolean;
  /** AOEHealAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** AOEHealAction 的 `healEffectKey` 配置字段；准确战斗语义待确认。 */
  "_healEffectKey": null | string;
  /** AOEHealAction 的 `healScale` 配置字段；准确战斗语义待确认。 */
  "_healScale": string;
  /** AOEHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** AOEHealAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** AOEHealAction 的 `sourceSideType` 配置字段；准确战斗语义待确认。 */
  "_sourceSideType": "ALLY" | "ENEMY";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AOEHealAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** AOEHealAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** AOEHealAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** AOEHealAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** AOEHealAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** AOEHealAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** AOEHealAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** AOEHealAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** AOEHealAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** AOEHealAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** AOEHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** AOEHealAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** AOEHealAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** AOEHealAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** AOEHealAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                         /** AOEHealAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "HEAL" | "NONE";
                         /** AOEHealAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** AOEHealAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** AOEHealAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY";
                         /** AOEHealAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AOEHealAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
  "_useAttackRange": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageByBuffBlackBoardCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyCacheAtkDamageByBuffBlackBoardCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageByBuffBlackBoardCnt, Assembly-CSharp";
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "NONE";
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF";
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `buffCnt` 配置字段；准确战斗语义待确认。 */
  "_buffCnt": string;
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `buffMaxCnt` 配置字段；准确战斗语义待确认。 */
  "_buffMaxCnt": string;
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。 */
  "_damageScaleKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL";
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `forceDisplayDamageNum` 配置字段；准确战斗语义待确认。 */
  "_forceDisplayDamageNum": boolean;
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** ApplyCacheAtkDamageByBuffBlackBoardCntAction 的 `useDynamicAttackType` 配置字段；准确战斗语义待确认。 */
  "_useDynamicAttackType": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageFromBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyCacheAtkDamageFromBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyCacheAtkDamageFromBuff, Assembly-CSharp";
  /** ApplyCacheAtkDamageFromBuffAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
  "_applyWay": "MELEE" | "NONE" | "RANGED";
  /** ApplyCacheAtkDamageFromBuffAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF";
  /** ApplyCacheAtkDamageFromBuffAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。 */
  "_damageScaleKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL";
  /** ApplyCacheAtkDamageFromBuffAction 的 `modifierKey` 配置字段；准确战斗语义待确认。 */
  "_modifierKey": string;
  /** ApplyCacheAtkDamageFromBuffAction 的 `useDynamicAttackType` 配置字段；准确战斗语义待确认。 */
  "_useDynamicAttackType": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyDeployCostPostDelta, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyDeployCostPostDeltaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyDeployCostPostDelta, Assembly-CSharp";
  /** ApplyDeployCostPostDeltaAction 的 `costSourceType` 配置字段；准确战斗语义待确认。 */
  "_costSourceType": "BUFF_OWNER";
  /** ApplyDeployCostPostDeltaAction 的 `preCalcCardCost` 配置字段；准确战斗语义待确认。 */
  "_preCalcCardCost": boolean;
  /** ApplyDeployCostPostDeltaAction 的 `willNotDecreaseIfCurrentLe0` 配置字段；准确战斗语义待确认。 */
  "_willNotDecreaseIfCurrentLe0": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyElectricAmplify, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyElectricAmplifyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyElectricAmplify, Assembly-CSharp";
  /** ApplyElectricAmplifyAction 的 `add` 配置字段；准确战斗语义待确认。 */
  "_add": boolean;
  /** ApplyElectricAmplifyAction 的 `amplitude` 配置字段；准确战斗语义待确认。 */
  "_amplitude": {
                     /** ApplyElectricAmplifyAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                     "_serializedValue": number;
                   };
  /** ApplyElectricAmplifyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyElementDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyElementDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyElementDamage, Assembly-CSharp";
  /** ApplyElementDamageAction 的 `baseOnEnemyHostAtk` 配置字段；准确战斗语义待确认。 */
  "_baseOnEnemyHostAtk": boolean;
  /** ApplyElementDamageAction 的 `baseOnHostAtk` 配置字段；准确战斗语义待确认。 */
  "_baseOnHostAtk": boolean;
  /** ApplyElementDamageAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** ApplyElementDamageAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** ApplyElementDamageAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
  "_elementDamageType": "DARK" | "FIRE" | "NONE" | "SANITY" | "WATER";
  /** ApplyElementDamageAction 的 `epDamageScale` 配置字段；准确战斗语义待确认。 */
  "_epDamageScale": string;
  /** ApplyElementDamageAction 的 `fixedEpDamage` 配置字段；准确战斗语义待确认。 */
  "_fixedEpDamage": number;
  /** ApplyElementDamageAction 的 `fixedEpDamageKey` 配置字段；准确战斗语义待确认。 */
  "_fixedEpDamageKey": null | string;
  /** ApplyElementDamageAction 的 `fixedEpDamageScale` 配置字段；准确战斗语义待确认。 */
  "_fixedEpDamageScale": string;
  /** ApplyElementDamageAction 的 `forceUseProjectileCachedAtk` 配置字段；准确战斗语义待确认。 */
  "_forceUseProjectileCachedAtk": boolean;
  /** ApplyElementDamageAction 的 `isEnvElementDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvElementDamage": boolean;
  /** ApplyElementDamageAction 的 `isFixedEpDamage` 配置字段；准确战斗语义待确认。 */
  "_isFixedEpDamage": boolean;
  /** ApplyElementDamageAction 的 `loadElementTypeFromBb` 配置字段；准确战斗语义待确认。 */
  "_loadElementTypeFromBb": boolean;
  /** ApplyElementDamageAction 的 `multiplyWithBuffValidStackCnt` 配置字段；准确战斗语义待确认。 */
  "_multiplyWithBuffValidStackCnt": boolean;
  /** ApplyElementDamageAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
  "_noSource": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyElementDamageBasedOnDamageValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyElementDamageBasedOnDamageValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyElementDamageBasedOnDamageValue, Assembly-CSharp";
  /** ApplyElementDamageBasedOnDamageValueAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "ELEMENT" | "MAGICAL" | "NONE";
  /** ApplyElementDamageBasedOnDamageValueAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
  "_elementType": "DARK" | "FIRE" | "SANITY";
  /** ApplyElementDamageBasedOnDamageValueAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "SOURCE" | "TARGET";
  /** Action 作用的目标实体类型。 */
  "_targetType": "MAIN_TARGET" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyElementHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyElementHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyElementHeal, Assembly-CSharp";
  /** ApplyElementHealAction 的 `healTarget` 配置字段；准确战斗语义待确认。 */
  "_healTarget": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
  /** ApplyElementHealAction 的 `isCont` 配置字段；准确战斗语义待确认。 */
  "_isCont": boolean;
  /** ApplyElementHealAction 的 `maxEpHeal` 配置字段；准确战斗语义待确认。 */
  "_maxEpHeal": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA15 = AOEDamageAction | AOEElementDamageAction | AOEHealAction | ApplyCacheAtkDamageByBuffBlackBoardCntAction | ApplyCacheAtkDamageFromBuffAction | ApplyDeployCostPostDeltaAction | ApplyElectricAmplifyAction | ApplyElementDamageAction | ApplyElementDamageBasedOnDamageValueAction | ApplyElementHealAction;
