/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToFootball, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToFootballAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToFootball, Assembly-CSharp";
  /** CreateBuffToFootballAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffToFootballAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffToFootballAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": never[];
                                         /** CreateBuffToFootballAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": never[];
                                         /** CreateBuffToFootballAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": never[];
                                         /** CreateBuffToFootballAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": never[];
                                         /** CreateBuffToFootballAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": never[];
                                         /** CreateBuffToFootballAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": never[];
                                       };
                    /** CreateBuffToFootballAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** CreateBuffToFootballAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** CreateBuffToFootballAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffToFootballAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffToFootballAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffToFootballAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": string;
                    /** CreateBuffToFootballAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffToFootballAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffToFootballAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffToFootballAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffToFootballAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffToFootballAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffToFootballAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffToFootballAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffToFootballAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffToFootballAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffToFootballAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "LIMITED";
                    /** CreateBuffToFootballAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffToFootballAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffToFootballAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffToFootballAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null;
                    /** CreateBuffToFootballAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** CreateBuffToFootballAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffToFootballAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT";
                    /** CreateBuffToFootballAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffToFootballAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** CreateBuffToFootballAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffToFootballAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffToFootballAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffToFootballAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffToFootballAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffToFootballAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffToFootballAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "LIMITED";
                    /** CreateBuffToFootballAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffToFootballAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToFootballAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToHost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToHostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToHost, Assembly-CSharp";
  /** CreateBuffToHostAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffToHostAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffToHostAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": null | never[];
                                         /** CreateBuffToHostAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": null | never[];
                                         /** CreateBuffToHostAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": null | never[];
                                         /** CreateBuffToHostAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": null | never[];
                                         /** CreateBuffToHostAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": null | never[];
                                         /** CreateBuffToHostAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": null | Array<{
                                                                        /** 属性修改器指向的战斗属性。 */
                                                                        "attributeType": "ATK" | "DEF";
                                                                        /** CreateBuffToHostAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                        "formulaItem": string;
                                                                        /** CreateBuffToHostAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                        "loadFromBlackboard": boolean;
                                                                        /** 黑板参数的数值槽。 */
                                                                        "value": number;
                                                                      }>;
                                       };
                    /** CreateBuffToHostAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** CreateBuffToHostAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** CreateBuffToHostAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffToHostAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffToHostAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffToHostAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null | string;
                    /** CreateBuffToHostAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffToHostAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffToHostAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffToHostAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffToHostAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffToHostAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffToHostAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffToHostAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffToHostAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffToHostAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffToHostAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                    /** CreateBuffToHostAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffToHostAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffToHostAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffToHostAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null;
                    /** CreateBuffToHostAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null | string;
                    /** CreateBuffToHostAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffToHostAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT" | "STACK" | "UNIQUE";
                    /** CreateBuffToHostAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffToHostAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": Array<string>;
                    /** CreateBuffToHostAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffToHostAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffToHostAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffToHostAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffToHostAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffToHostAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffToHostAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                    /** CreateBuffToHostAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffToHostAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToHostAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToTeammate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToTeammateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToTeammate, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToTeammateAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToTeammateAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** CreateBuffToTeammateAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** CreateBuffToTeammateAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** CreateBuffToTeammateAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": Array<string>;
                                     /** CreateBuffToTeammateAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** CreateBuffToTeammateAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": never[];
                                   };
                /** CreateBuffToTeammateAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToTeammateAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToTeammateAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToTeammateAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToTeammateAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToTeammateAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": string;
                /** CreateBuffToTeammateAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToTeammateAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToTeammateAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToTeammateAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToTeammateAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToTeammateAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToTeammateAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToTeammateAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToTeammateAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToTeammateAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToTeammateAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "LIMITED";
                /** CreateBuffToTeammateAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToTeammateAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToTeammateAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToTeammateAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** CreateBuffToTeammateAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToTeammateAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToTeammateAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToTeammateAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToTeammateAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToTeammateAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToTeammateAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToTeammateAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToTeammateAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToTeammateAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToTeammateAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToTeammateAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                /** CreateBuffToTeammateAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToTeammateAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_OWNER";
  /** CreateBuffToTeammateAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToTeammateAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToToken, Assembly-CSharp";
  /** CreateBuffToTokenAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffToTokenAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffToTokenAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": null | never[];
                                         /** CreateBuffToTokenAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": null | never[];
                                         /** CreateBuffToTokenAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": null | never[];
                                         /** CreateBuffToTokenAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": null | never[];
                                         /** CreateBuffToTokenAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": null | never[];
                                         /** CreateBuffToTokenAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": null | Array<{
                                                                        /** 属性修改器指向的战斗属性。 */
                                                                        "attributeType": "ATK" | "HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO";
                                                                        /** CreateBuffToTokenAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                        "formulaItem": string;
                                                                        /** CreateBuffToTokenAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                        "loadFromBlackboard": boolean;
                                                                        /** 黑板参数的数值槽。 */
                                                                        "value": number;
                                                                      }>;
                                       };
                    /** CreateBuffToTokenAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null | string;
                    /** CreateBuffToTokenAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": Array<{
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": string;
                                         /** 黑板参数的数值槽。 */
                                         "value": number;
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": string;
                                       }>;
                    /** CreateBuffToTokenAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffToTokenAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffToTokenAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffToTokenAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null;
                    /** CreateBuffToTokenAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffToTokenAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffToTokenAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffToTokenAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffToTokenAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffToTokenAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffToTokenAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffToTokenAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffToTokenAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffToTokenAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffToTokenAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                    /** CreateBuffToTokenAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffToTokenAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffToTokenAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffToTokenAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null | string;
                    /** CreateBuffToTokenAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null | string;
                    /** CreateBuffToTokenAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffToTokenAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT";
                    /** CreateBuffToTokenAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffToTokenAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** CreateBuffToTokenAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffToTokenAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffToTokenAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffToTokenAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffToTokenAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffToTokenAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffToTokenAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                    /** CreateBuffToTokenAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffToTokenAction 的 `excludeBuffKey` 配置字段；准确战斗语义待确认。 */
  "_excludeBuffKey": null | string;
  /** CreateBuffToTokenAction 的 `excludeByBuffKey` 配置字段；准确战斗语义待确认。 */
  "_excludeByBuffKey": boolean;
  /** CreateBuffToTokenAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CreateBuffToTokenAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToTokenAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffToTokenAction 的 `onlyToFirstTarget` 配置字段；准确战斗语义待确认。 */
  "_onlyToFirstTarget": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToUid, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToUidAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToUidAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffToUidAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffToUidAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffToUidAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffToUidAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffToUidAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | never[];
                                   };
                /** CreateBuffToUidAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToUidAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": Array<{
                                     /** 黑板参数键或当前配置项的稳定键。 */
                                     "key": string;
                                     /** 黑板参数的数值槽。 */
                                     "value": number;
                                     /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                     "valueStr": string;
                                   }>;
                /** CreateBuffToUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToUidAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToUidAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToUidAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffToUidAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToUidAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToUidAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToUidAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToUidAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToUidAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToUidAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToUidAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToUidAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToUidAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToUidAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY";
                /** CreateBuffToUidAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToUidAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToUidAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToUidAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** CreateBuffToUidAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null | string;
                /** CreateBuffToUidAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToUidAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToUidAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToUidAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToUidAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToUidAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToUidAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToUidAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToUidAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToUidAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToUidAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffToUidAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToUidAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateBuffToUidAction 的 `getFromEnemy` 配置字段；准确战斗语义待确认。 */
  "_getFromEnemy": boolean;
  /** CreateBuffToUidAction 的 `getStrInsteadOfInt` 配置字段；准确战斗语义待确认。 */
  "_getStrInsteadOfInt": boolean;
  /** CreateBuffToUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。 */
  "_uidKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToUnitId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToUnitIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToUnitId, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToUnitIdAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToUnitIdAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffToUnitIdAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffToUnitIdAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffToUnitIdAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | never[];
                                     /** CreateBuffToUnitIdAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffToUnitIdAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | never[];
                                   };
                /** CreateBuffToUnitIdAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToUnitIdAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToUnitIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToUnitIdAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToUnitIdAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToUnitIdAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffToUnitIdAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToUnitIdAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToUnitIdAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToUnitIdAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToUnitIdAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToUnitIdAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToUnitIdAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToUnitIdAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToUnitIdAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToUnitIdAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToUnitIdAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY";
                /** CreateBuffToUnitIdAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToUnitIdAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToUnitIdAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToUnitIdAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** CreateBuffToUnitIdAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToUnitIdAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToUnitIdAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToUnitIdAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToUnitIdAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToUnitIdAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToUnitIdAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToUnitIdAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToUnitIdAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToUnitIdAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToUnitIdAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToUnitIdAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffToUnitIdAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToUnitIdAction 的 `recordCountKey` 配置字段；准确战斗语义待确认。 */
  "_recordCountKey": null | string;
  /** CreateBuffToUnitIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "SOURCE" | "TARGET";
  /** CreateBuffToUnitIdAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CreateBuffToUnitIdAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CreateBuffToUnitIdAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** CreateBuffToUnitIdAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CreateBuffToUnitIdAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CreateBuffToUnitIdAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CreateBuffToUnitIdAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CreateBuffToUnitIdAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** CreateBuffToUnitIdAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CreateBuffToUnitIdAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CreateBuffToUnitIdAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CreateBuffToUnitIdAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CreateBuffToUnitIdAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CreateBuffToUnitIdAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CreateBuffToUnitIdAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** CreateBuffToUnitIdAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** CreateBuffToUnitIdAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT" | "NONE";
                         /** CreateBuffToUnitIdAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL" | "NONE" | "WALK_ONLY";
                         /** CreateBuffToUnitIdAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY" | "ENEMY" | "NONE";
                         /** CreateBuffToUnitIdAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** CreateBuffToUnitIdAction 的 `unitId` 配置字段；准确战斗语义待确认。 */
  "_unitId": string;
  /** CreateBuffToUnitIdAction 的 `useTargetOptions` 配置字段；准确战斗语义待确认。 */
  "_useTargetOptions": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToUnitInCurrentMapLayer, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToUnitInCurrentMapLayerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToUnitInCurrentMapLayer, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | never[];
                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffToUnitInCurrentMapLayerAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ATTACK_SPEED" | "SP_RECOVERY_PER_SEC";
                                                                    /** CreateBuffToUnitInCurrentMapLayerAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffToUnitInCurrentMapLayerAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "LIMITED";
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffToUnitInCurrentMapLayerAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToUnitInCurrentMapLayerAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "TARGET";
  /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT" | "TRAP_OR_ITEM";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL" | "WALK_ONLY";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALL" | "ALLY" | "ENEMY";
                         /** CreateBuffToUnitInCurrentMapLayerAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffUseAbilitySelector, Assembly-CSharp";
  /** CreateBuffUseAbilitySelectorAction 的 `abilityFromTargetType` 配置字段；准确战斗语义待确认。 */
  "_abilityFromTargetType": "SOURCE";
  /** CreateBuffUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** CreateBuffUseAbilitySelectorAction 的 `actionFailedIfNoTarget` 配置字段；准确战斗语义待确认。 */
  "_actionFailedIfNoTarget": boolean;
  /** CreateBuffUseAbilitySelectorAction 的 `assignTargetCntToBB` 配置字段；准确战斗语义待确认。 */
  "_assignTargetCntToBB": boolean;
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | Array<string>;
                                     /** CreateBuffUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ATK" | "DEF" | "MAGIC_RESISTANCE" | "MAX_HP" | "SP_RECOVER_RATIO" | "TAUNT_LEVEL";
                                                                    /** CreateBuffUseAbilitySelectorAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffUseAbilitySelectorAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null | string;
                /** CreateBuffUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": Array<{
                                     /** 黑板参数键或当前配置项的稳定键。 */
                                     "key": string;
                                     /** 黑板参数的数值槽。 */
                                     "value": number;
                                     /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                     "valueStr": string;
                                   }>;
                /** CreateBuffUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** CreateBuffUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "STACK" | "UNIQUE";
                /** CreateBuffUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC" | "YES";
                /** CreateBuffUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffUseAbilitySelectorAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "SOURCE";
  /** CreateBuffUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CreateBuffUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** CreateBuffUseAbilitySelectorAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffUseAbilitySelectorAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffUseAbilitySelectorAction 的 `overrideBuffSourceType` 配置字段；准确战斗语义待确认。 */
  "_overrideBuffSourceType": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "TARGET";
  /** CreateBuffUseAbilitySelectorAction 的 `useAbilityFromTarget` 配置字段；准确战斗语义待确认。 */
  "_useAbilityFromTarget": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffUseCardUidAsSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffUseCardUidAsSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffUseCardUidAsSource, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffUseCardUidAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffUseCardUidAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null;
                                     /** CreateBuffUseCardUidAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null;
                                     /** CreateBuffUseCardUidAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null;
                                     /** CreateBuffUseCardUidAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null;
                                     /** CreateBuffUseCardUidAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null;
                                     /** CreateBuffUseCardUidAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null;
                                   };
                /** CreateBuffUseCardUidAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffUseCardUidAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffUseCardUidAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffUseCardUidAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffUseCardUidAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffUseCardUidAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffUseCardUidAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY";
                /** CreateBuffUseCardUidAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffUseCardUidAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffUseCardUidAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** CreateBuffUseCardUidAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffUseCardUidAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffUseCardUidAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffUseCardUidAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffUseCardUidAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffUseCardUidAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffUseCardUidAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffUseCardUidAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffUseCardUidAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffUseCardUidAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffUseCardUidAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER";
  /** CreateBuffUseCardUidAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffUseCardUidAsSourceAction 的 `useStringUid` 配置字段；准确战斗语义待确认。 */
  "_useStringUid": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffUseHostAsSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffUseHostAsSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffUseHostAsSource, Assembly-CSharp";
  /** CreateBuffUseHostAsSourceAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": {
                    /** CreateBuffUseHostAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** CreateBuffUseHostAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": null | never[];
                                         /** CreateBuffUseHostAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": null | never[];
                                         /** CreateBuffUseHostAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": null | never[];
                                         /** CreateBuffUseHostAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": null | never[];
                                         /** CreateBuffUseHostAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": null | never[];
                                         /** CreateBuffUseHostAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": null | Array<{
                                                                        /** 属性修改器指向的战斗属性。 */
                                                                        "attributeType": "ATK";
                                                                        /** CreateBuffUseHostAsSourceAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                        "formulaItem": string;
                                                                        /** CreateBuffUseHostAsSourceAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                        "loadFromBlackboard": boolean;
                                                                        /** 黑板参数的数值槽。 */
                                                                        "value": number;
                                                                      }>;
                                       };
                    /** CreateBuffUseHostAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** CreateBuffUseHostAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": Array<{
                                         /** 黑板参数键或当前配置项的稳定键。 */
                                         "key": string;
                                         /** 黑板参数的数值槽。 */
                                         "value": number;
                                         /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                         "valueStr": string;
                                       }>;
                    /** CreateBuffUseHostAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** CreateBuffUseHostAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null | string;
                    /** CreateBuffUseHostAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** CreateBuffUseHostAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** CreateBuffUseHostAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "INFINITY" | "LIMITED";
                    /** CreateBuffUseHostAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** CreateBuffUseHostAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** CreateBuffUseHostAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null | string;
                    /** CreateBuffUseHostAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** CreateBuffUseHostAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT" | "STACK" | "UNIQUE";
                    /** CreateBuffUseHostAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** CreateBuffUseHostAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** CreateBuffUseHostAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** CreateBuffUseHostAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** CreateBuffUseHostAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** CreateBuffUseHostAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** CreateBuffUseHostAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** CreateBuffUseHostAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                    /** CreateBuffUseHostAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** CreateBuffUseHostAsSourceAction 的 `createOnTargetHost` 配置字段；准确战斗语义待确认。 */
  "_createOnTargetHost": boolean;
  /** CreateBuffUseHostAsSourceAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffUseHostAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC24 = CreateBuffToFootballAction | CreateBuffToHostAction | CreateBuffToTeammateAction | CreateBuffToTokenAction | CreateBuffToUidAction | CreateBuffToUnitIdAction | CreateBuffToUnitInCurrentMapLayerAction | CreateBuffUseAbilitySelectorAction | CreateBuffUseCardUidAsSourceAction | CreateBuffUseHostAsSourceAction;
