/**
 * buff_template_data 的 L 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnDying, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCharacterOnDyingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnDying, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnRebornlike, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCharacterOnRebornlikeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCharacterOnRebornlike, Assembly-CSharp";
  /** LegionModeOnlyCharacterOnRebornlikeAction 的 `inheritProfessionBuff` 配置字段；准确战斗语义待确认。 */
  "_inheritProfessionBuff": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardInHand, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCheckCardInHandAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardInHand, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardLastDrawTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCheckCardLastDrawTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCheckCardLastDrawTag, Assembly-CSharp";
  /** LegionModeOnlyCheckCardLastDrawTagAction 的 `targetGroupId` 配置字段；准确战斗语义待确认。 */
  "_targetGroupId": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCheckHandCardNotFull, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCheckHandCardNotFullAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCheckHandCardNotFull, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastCardDrawProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCheckLastCardDrawProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastCardDrawProfession, Assembly-CSharp";
  /** LegionModeOnlyCheckLastCardDrawProfessionAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
  "_professionCategory": "SPECIAL";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastSelectCardsContainsProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCheckLastSelectCardsContainsProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCheckLastSelectCardsContainsProfession, Assembly-CSharp";
  /** LegionModeOnlyCheckLastSelectCardsContainsProfessionAction 的 `professionCategory` 配置字段；准确战斗语义待确认。 */
  "_professionCategory": "SNIPER";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyClearProfessionLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyClearProfessionLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyClearProfessionLevel, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCreateBuffToDyingInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCreateBuffToDyingInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCreateBuffToDyingInRange, Assembly-CSharp";
  /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": null | never[];
                                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": null | never[];
                                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": null | never[];
                                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": null | never[];
                                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": null | never[];
                                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": null | never[];
                                       };
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": Array<{
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": string;
                                         /** 黑板参数的数值槽。 */
                                         "value": number;
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": string;
                                       }>;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null | string;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "INFINITY";
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": string;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT";
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                    /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `maxNum` 配置字段；准确战斗语义待确认。 */
  "_maxNum": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY";
                         /** LegionModeOnlyCreateBuffToDyingInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LegionModeOnlyCreateCardBuffToOneCardByCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LegionModeOnlyCreateCardBuffToOneCardByCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LegionModeOnlyCreateCardBuffToOneCardByCost, Assembly-CSharp";
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardLibraryType` 配置字段；准确战斗语义待确认。 */
  "_cardLibraryType": "USING";
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `createDeckBuff` 配置字段；准确战斗语义待确认。 */
  "_createDeckBuff": boolean;
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": never[];
                                                          /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": never[];
                                                          /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": never[];
                                                          /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": never[];
                                                          /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": never[];
                                                          /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": Array<{
                                                                                           /** 属性修改器指向的战斗属性。 */
                                                                                           "attributeType": "ATK";
                                                                                           /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                           "formulaItem": string;
                                                                                           /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                           "loadFromBlackboard": boolean;
                                                                                           /** 黑板参数的数值槽。 */
                                                                                           "value": number;
                                                                                         }>;
                                                        };
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": never[];
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "INFINITY";
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": null | string;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "DEFAULT" | "STACK";
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": never[];
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": null;
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "CHOSEN_ONE";
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "UNTIL_NEXT_SPAWN";
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `filterMinCost` 配置字段；准确战斗语义待确认。 */
  "_filterMinCost": boolean;
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN";
  /** LegionModeOnlyCreateCardBuffToOneCardByCostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionL02 = LegionModeOnlyCharacterOnDyingAction | LegionModeOnlyCharacterOnRebornlikeAction | LegionModeOnlyCheckCardInHandAction | LegionModeOnlyCheckCardLastDrawTagAction | LegionModeOnlyCheckHandCardNotFullAction | LegionModeOnlyCheckLastCardDrawProfessionAction | LegionModeOnlyCheckLastSelectCardsContainsProfessionAction | LegionModeOnlyClearProfessionLevelAction | LegionModeOnlyCreateBuffToDyingInRangeAction | LegionModeOnlyCreateCardBuffToOneCardByCostAction;
