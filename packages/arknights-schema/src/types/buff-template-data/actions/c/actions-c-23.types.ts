/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToBlockee, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToBlockeeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToBlockee, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToBlockeeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToBlockeeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffToBlockeeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffToBlockeeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffToBlockeeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffToBlockeeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffToBlockeeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ATTACK_SPEED";
                                                                    /** CreateBuffToBlockeeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffToBlockeeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffToBlockeeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToBlockeeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToBlockeeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToBlockeeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToBlockeeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToBlockeeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** CreateBuffToBlockeeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToBlockeeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToBlockeeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToBlockeeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToBlockeeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToBlockeeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToBlockeeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToBlockeeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToBlockeeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToBlockeeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToBlockeeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffToBlockeeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToBlockeeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToBlockeeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToBlockeeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffToBlockeeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null | string;
                /** CreateBuffToBlockeeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToBlockeeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "STACK" | "UNIQUE";
                /** CreateBuffToBlockeeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToBlockeeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToBlockeeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToBlockeeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToBlockeeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToBlockeeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToBlockeeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToBlockeeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToBlockeeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                /** CreateBuffToBlockeeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** CreateBuffToBlockeeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToBlockeeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCardUidCharacter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCardUidCharacterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCardUidCharacter, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToCardUidCharacterAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToCardUidCharacterAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null;
                                     /** CreateBuffToCardUidCharacterAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null;
                                     /** CreateBuffToCardUidCharacterAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null;
                                     /** CreateBuffToCardUidCharacterAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null;
                                     /** CreateBuffToCardUidCharacterAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null;
                                     /** CreateBuffToCardUidCharacterAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null;
                                   };
                /** CreateBuffToCardUidCharacterAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null | string;
                /** CreateBuffToCardUidCharacterAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToCardUidCharacterAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToCardUidCharacterAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffToCardUidCharacterAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToCardUidCharacterAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToCardUidCharacterAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY" | "LIMITED";
                /** CreateBuffToCardUidCharacterAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToCardUidCharacterAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToCardUidCharacterAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffToCardUidCharacterAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToCardUidCharacterAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToCardUidCharacterAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToCardUidCharacterAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToCardUidCharacterAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToCardUidCharacterAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToCardUidCharacterAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToCardUidCharacterAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToCardUidCharacterAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToCardUidCharacterAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                /** CreateBuffToCardUidCharacterAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToCardUidCharacterAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_SOURCE";
  /** CreateBuffToCardUidCharacterAction 的 `cardUidKey` 配置字段；准确战斗语义待确认。 */
  "_cardUidKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCastedTargets, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCastedTargetsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCastedTargets, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToCastedTargetsAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToCastedTargetsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** CreateBuffToCastedTargetsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** CreateBuffToCastedTargetsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** CreateBuffToCastedTargetsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": never[];
                                     /** CreateBuffToCastedTargetsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** CreateBuffToCastedTargetsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": never[];
                                   };
                /** CreateBuffToCastedTargetsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToCastedTargetsAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToCastedTargetsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToCastedTargetsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToCastedTargetsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToCastedTargetsAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffToCastedTargetsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToCastedTargetsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToCastedTargetsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToCastedTargetsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToCastedTargetsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToCastedTargetsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToCastedTargetsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToCastedTargetsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToCastedTargetsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToCastedTargetsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToCastedTargetsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY";
                /** CreateBuffToCastedTargetsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToCastedTargetsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToCastedTargetsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToCastedTargetsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": string;
                /** CreateBuffToCastedTargetsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToCastedTargetsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToCastedTargetsAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToCastedTargetsAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToCastedTargetsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToCastedTargetsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToCastedTargetsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToCastedTargetsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToCastedTargetsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToCastedTargetsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToCastedTargetsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToCastedTargetsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffToCastedTargetsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToCastedTargetsAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_OWNER";
  /** CreateBuffToCastedTargetsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToCastedTargetsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCertainGroupId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCertainGroupIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCertainGroupId, Assembly-CSharp";
  /** CreateBuffToCertainGroupIdAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffToCertainGroupIdAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffToCertainGroupIdAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": never[];
                                         /** CreateBuffToCertainGroupIdAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": never[];
                                         /** CreateBuffToCertainGroupIdAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": never[];
                                         /** CreateBuffToCertainGroupIdAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": never[];
                                         /** CreateBuffToCertainGroupIdAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": never[];
                                         /** CreateBuffToCertainGroupIdAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": Array<{
                                                                        /** 属性修改器指向的战斗属性。 */
                                                                        "attributeType": "ATK";
                                                                        /** CreateBuffToCertainGroupIdAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                        "formulaItem": string;
                                                                        /** CreateBuffToCertainGroupIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                        "loadFromBlackboard": boolean;
                                                                        /** 黑板参数的数值槽。 */
                                                                        "value": number;
                                                                      }>;
                                       };
                    /** CreateBuffToCertainGroupIdAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** CreateBuffToCertainGroupIdAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** CreateBuffToCertainGroupIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffToCertainGroupIdAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": string;
                    /** CreateBuffToCertainGroupIdAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffToCertainGroupIdAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffToCertainGroupIdAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "LIMITED";
                    /** CreateBuffToCertainGroupIdAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffToCertainGroupIdAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffToCertainGroupIdAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null;
                    /** CreateBuffToCertainGroupIdAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** CreateBuffToCertainGroupIdAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT";
                    /** CreateBuffToCertainGroupIdAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffToCertainGroupIdAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** CreateBuffToCertainGroupIdAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffToCertainGroupIdAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffToCertainGroupIdAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffToCertainGroupIdAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffToCertainGroupIdAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffToCertainGroupIdAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY";
                    /** CreateBuffToCertainGroupIdAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffToCertainGroupIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToCertainGroupIdAction 的 `groupId` 配置字段；准确战斗语义待确认。 */
  "_groupId": string;
  /** CreateBuffToCertainGroupIdAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCertainProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCertainProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCertainProfession, Assembly-CSharp";
  /** CreateBuffToCertainProfessionAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffToCertainProfessionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffToCertainProfessionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": null | never[];
                                         /** CreateBuffToCertainProfessionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": null | never[];
                                         /** CreateBuffToCertainProfessionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": null | never[];
                                         /** CreateBuffToCertainProfessionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": null | never[];
                                         /** CreateBuffToCertainProfessionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": null | never[];
                                         /** CreateBuffToCertainProfessionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": null | Array<{
                                                                        /** 属性修改器指向的战斗属性。 */
                                                                        "attributeType": "ATK";
                                                                        /** CreateBuffToCertainProfessionAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                        "formulaItem": string;
                                                                        /** CreateBuffToCertainProfessionAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                        "loadFromBlackboard": boolean;
                                                                        /** 黑板参数的数值槽。 */
                                                                        "value": number;
                                                                      }>;
                                       };
                    /** CreateBuffToCertainProfessionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** CreateBuffToCertainProfessionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** CreateBuffToCertainProfessionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffToCertainProfessionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null | string;
                    /** CreateBuffToCertainProfessionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffToCertainProfessionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffToCertainProfessionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                    /** CreateBuffToCertainProfessionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffToCertainProfessionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffToCertainProfessionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null | string;
                    /** CreateBuffToCertainProfessionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** CreateBuffToCertainProfessionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT" | "STACK";
                    /** CreateBuffToCertainProfessionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffToCertainProfessionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": Array<string>;
                    /** CreateBuffToCertainProfessionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffToCertainProfessionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffToCertainProfessionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffToCertainProfessionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffToCertainProfessionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffToCertainProfessionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                    /** CreateBuffToCertainProfessionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffToCertainProfessionAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToCertainProfessionAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffToCertainProfessionAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
  "_professionMask": "TANK, SUPPORT" | "TRAP" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER" | "WARRIOR, TANK";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCertainSideUnits, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCertainSideUnitsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCertainSideUnits, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToCertainSideUnitsAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToCertainSideUnitsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffToCertainSideUnitsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffToCertainSideUnitsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffToCertainSideUnitsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffToCertainSideUnitsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffToCertainSideUnitsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ATK" | "ATTACK_SPEED" | "DEF" | "MAX_HP" | "MOVE_SPEED";
                                                                    /** CreateBuffToCertainSideUnitsAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffToCertainSideUnitsAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffToCertainSideUnitsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToCertainSideUnitsAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": null | Array<{
                                     /** 黑板参数键或当前配置项的稳定键。 */
                                     "key": string;
                                     /** 黑板参数的数值槽。 */
                                     "value": number;
                                     /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                     "valueStr": string;
                                   }>;
                /** CreateBuffToCertainSideUnitsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToCertainSideUnitsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** CreateBuffToCertainSideUnitsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToCertainSideUnitsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToCertainSideUnitsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffToCertainSideUnitsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToCertainSideUnitsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToCertainSideUnitsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffToCertainSideUnitsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null | string;
                /** CreateBuffToCertainSideUnitsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "EXTEND_TIME" | "STACK" | "UNIQUE";
                /** CreateBuffToCertainSideUnitsAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToCertainSideUnitsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": null | never[];
                /** CreateBuffToCertainSideUnitsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToCertainSideUnitsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToCertainSideUnitsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToCertainSideUnitsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToCertainSideUnitsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToCertainSideUnitsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffToCertainSideUnitsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToCertainSideUnitsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToCertainSideUnitsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffToCertainSideUnitsAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
  "_noSource": boolean;
  /** CreateBuffToCertainSideUnitsAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
  "_sideMask": "ALLY" | "ENEMY";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCharacterInSpecifiedArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCharacterInSpecifiedAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCharacterInSpecifiedArea, Assembly-CSharp";
  /** CreateBuffToCharacterInSpecifiedAreaAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": never[];
                                         /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": never[];
                                         /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": never[];
                                         /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": never[];
                                         /** CreateBuffToCharacterInSpecifiedAreaAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": never[];
                                         /** CreateBuffToCharacterInSpecifiedAreaAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": Array<{
                                                                        /** 属性修改器指向的战斗属性。 */
                                                                        "attributeType": "ATK";
                                                                        /** CreateBuffToCharacterInSpecifiedAreaAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                        "formulaItem": string;
                                                                        /** CreateBuffToCharacterInSpecifiedAreaAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                        "loadFromBlackboard": boolean;
                                                                        /** 黑板参数的数值槽。 */
                                                                        "value": number;
                                                                      }>;
                                       };
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null | string;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "IMMEDIATELY" | "INFINITY";
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT" | "STACK";
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY";
                    /** CreateBuffToCharacterInSpecifiedAreaAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffToCharacterInSpecifiedAreaAction 的 `ignoreToken` 配置字段；准确战斗语义待确认。 */
  "_ignoreToken": boolean;
  /** CreateBuffToCharacterInSpecifiedAreaAction 的 `ignoreTrap` 配置字段；准确战斗语义待确认。 */
  "_ignoreTrap": boolean;
  /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffToCharacterInSpecifiedAreaAction 的 `isExclude` 配置字段；准确战斗语义待确认。 */
  "_isExclude": boolean;
  /** CreateBuffToCharacterInSpecifiedAreaAction 的 `specifyByGridColumn` 配置字段；准确战斗语义待确认。 */
  "_specifyByGridColumn": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnCertainTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCharacterOnCertainTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnCertainTile, Assembly-CSharp";
  /** CreateBuffToCharacterOnCertainTileAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** CreateBuffToCharacterOnCertainTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** CreateBuffToCharacterOnCertainTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** CreateBuffToCharacterOnCertainTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** CreateBuffToCharacterOnCertainTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** CreateBuffToCharacterOnCertainTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY";
                 /** CreateBuffToCharacterOnCertainTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** CreateBuffToCharacterOnCertainTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** CreateBuffToCharacterOnCertainTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** CreateBuffToCharacterOnCertainTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** CreateBuffToCharacterOnCertainTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** CreateBuffToCharacterOnCertainTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** CreateBuffToCharacterOnCertainTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** CreateBuffToCharacterOnCertainTileAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_OWNER" | "SOURCE";
  /** CreateBuffToCharacterOnCertainTileAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
  "_hasSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnTargetRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCharacterOnTargetRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCharacterOnTargetRootTile, Assembly-CSharp";
  /** CreateBuffToCharacterOnTargetRootTileAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | Array<string>;
                                      /** CreateBuffToCharacterOnTargetRootTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** CreateBuffToCharacterOnTargetRootTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null | string;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null | string;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                 /** CreateBuffToCharacterOnTargetRootTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** CreateBuffToCharacterOnTargetRootTileAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToCharacterOnTargetRootTileAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffToCharacterOnTargetRootTileAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateBuffToCharacterOnTargetRootTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToCurTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToCurTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToCurTarget, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToCurTargetAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToCurTargetAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null;
                                     /** CreateBuffToCurTargetAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null;
                                     /** CreateBuffToCurTargetAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null;
                                     /** CreateBuffToCurTargetAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null;
                                     /** CreateBuffToCurTargetAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null;
                                     /** CreateBuffToCurTargetAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null;
                                   };
                /** CreateBuffToCurTargetAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToCurTargetAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToCurTargetAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToCurTargetAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToCurTargetAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToCurTargetAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffToCurTargetAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToCurTargetAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToCurTargetAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToCurTargetAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToCurTargetAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToCurTargetAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToCurTargetAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToCurTargetAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToCurTargetAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToCurTargetAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToCurTargetAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY";
                /** CreateBuffToCurTargetAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToCurTargetAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToCurTargetAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToCurTargetAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** CreateBuffToCurTargetAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToCurTargetAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToCurTargetAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToCurTargetAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToCurTargetAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToCurTargetAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToCurTargetAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToCurTargetAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToCurTargetAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToCurTargetAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToCurTargetAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToCurTargetAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffToCurTargetAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToCurTargetAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_OWNER";
  /** CreateBuffToCurTargetAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToCurTargetAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC23 = CreateBuffToBlockeeAction | CreateBuffToCardUidCharacterAction | CreateBuffToCastedTargetsAction | CreateBuffToCertainGroupIdAction | CreateBuffToCertainProfessionAction | CreateBuffToCertainSideUnitsAction | CreateBuffToCharacterInSpecifiedAreaAction | CreateBuffToCharacterOnCertainTileAction | CreateBuffToCharacterOnTargetRootTileAction | CreateBuffToCurTargetAction;
