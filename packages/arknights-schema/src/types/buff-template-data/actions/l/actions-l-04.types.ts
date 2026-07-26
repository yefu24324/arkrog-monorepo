/**
 * buff_template_data 的 L 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyGainTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyGainTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyGainTrap, Assembly-CSharp";
  /** LegionModeOnlyGainTrapAction 的 `extraCheckOnlyUseOnceList` 配置字段；准确战斗语义待确认。 */
  "_extraCheckOnlyUseOnceList": boolean;
  /** LegionModeOnlyGainTrapAction 的 `gainToCardType` 配置字段；准确战斗语义待确认。 */
  "_gainToCardType": "PENDING" | "USING";
  /** LegionModeOnlyGainTrapAction 的 `onlyUseOnce` 配置字段；准确战斗语义待确认。 */
  "_onlyUseOnce": boolean;
  /** LegionModeOnlyGainTrapAction 的 `releaseDiscardBeforeFind` 配置字段；准确战斗语义待确认。 */
  "_releaseDiscardBeforeFind": boolean;
  /** LegionModeOnlyGainTrapAction 的 `tokenKey` 配置字段；准确战斗语义待确认。 */
  "_tokenKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyGetGoldViaProfessionBuffCount, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyGetGoldViaProfessionBuffCountAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyGetGoldViaProfessionBuffCount, Assembly-CSharp";
  /** LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `goldPerBuff` 配置字段；准确战斗语义待确认。 */
  "_goldPerBuff": number;
  /** LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `goldPerBuffKey` 配置字段；准确战斗语义待确认。 */
  "_goldPerBuffKey": string;
  /** LegionModeOnlyGetGoldViaProfessionBuffCountAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyGlobalDamageFromCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyGlobalDamageFromCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyGlobalDamageFromCard, Assembly-CSharp";
  /** LegionModeOnlyGlobalDamageFromCardAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "NORMAL";
  /** LegionModeOnlyGlobalDamageFromCardAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** LegionModeOnlyGlobalDamageFromCardAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "LIMITED";
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** LegionModeOnlyGlobalDamageFromCardAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** LegionModeOnlyGlobalDamageFromCardAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "PURE";
  /** LegionModeOnlyGlobalDamageFromCardAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** LegionModeOnlyGlobalDamageFromCardAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyHasProfessionBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyHasProfessionBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyHasProfessionBuff, Assembly-CSharp";
  /** LegionModeOnlyHasProfessionBuffAction 的 `checkIsMaxLevel` 配置字段；准确战斗语义待确认。 */
  "_checkIsMaxLevel": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardReturnToHand, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyMarkCardReturnToHandAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardReturnToHand, Assembly-CSharp";
  /** LegionModeOnlyMarkCardReturnToHandAction 的 `needKeepStatus` 配置字段；准确战斗语义待确认。 */
  "_needKeepStatus": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardUseOnce, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyMarkCardUseOnceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyMarkCardUseOnce, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharacterOverlapState, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyModifyCharacterOverlapStateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharacterOverlapState, Assembly-CSharp";
  /** LegionModeOnlyModifyCharacterOverlapStateAction 的 `noOverlap` 配置字段；准确战斗语义待确认。 */
  "_noOverlap": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharLevelDefaultAddCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyModifyCharLevelDefaultAddCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyModifyCharLevelDefaultAddCnt, Assembly-CSharp";
  /** LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `addKey` 配置字段；准确战斗语义待确认。 */
  "_addKey": string;
  /** LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `addValue` 配置字段；准确战斗语义待确认。 */
  "_addValue": number;
  /** LegionModeOnlyModifyCharLevelDefaultAddCntAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
  "_resetToDefault": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyModifyDangerUpgradeTimeScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyModifyDangerUpgradeTimeScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyModifyDangerUpgradeTimeScale, Assembly-CSharp";
  /** LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `useBb` 配置字段；准确战斗语义待确认。 */
  "_useBb": boolean;
  /** LegionModeOnlyModifyDangerUpgradeTimeScaleAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyModifyMaxProfessionBuffCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyModifyMaxProfessionBuffCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyModifyMaxProfessionBuffCnt, Assembly-CSharp";
  /** LegionModeOnlyModifyMaxProfessionBuffCntAction 的 `addValue` 配置字段；准确战斗语义待确认。 */
  "_addValue": number;
  /** LegionModeOnlyModifyMaxProfessionBuffCntAction 的 `resetToDefault` 配置字段；准确战斗语义待确认。 */
  "_resetToDefault": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionL04 = LegionModeOnlyGainTrapAction | LegionModeOnlyGetGoldViaProfessionBuffCountAction | LegionModeOnlyGlobalDamageFromCardAction | LegionModeOnlyHasProfessionBuffAction | LegionModeOnlyMarkCardReturnToHandAction | LegionModeOnlyMarkCardUseOnceAction | LegionModeOnlyModifyCharacterOverlapStateAction | LegionModeOnlyModifyCharLevelDefaultAddCntAction | LegionModeOnlyModifyDangerUpgradeTimeScaleAction | LegionModeOnlyModifyMaxProfessionBuffCntAction;
