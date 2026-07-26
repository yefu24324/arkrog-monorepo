/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RallyPointReborn, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RallyPointRebornAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RallyPointReborn, Assembly-CSharp";
  /** RallyPointRebornAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RandomAction, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RandomActionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RandomAction, Assembly-CSharp";
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": Array<BattleAction>;
  /** RandomActionAction 的 `otherwiseActions` 配置字段；准确战斗语义待确认。 */
  "_otherwiseActions": null | Array<BattleAction>;
  /** RandomActionAction 的 `probKey` 配置字段；准确战斗语义待确认。 */
  "_probKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RandomCreateBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RandomCreateBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RandomCreateBuff, Assembly-CSharp";
  /** RandomCreateBuffAction 的 `buffWithWeight` 配置字段；准确战斗语义待确认。 */
  "_buffWithWeight": boolean;
  /** RandomCreateBuffAction 的 `datas` 配置字段；准确战斗语义待确认。 */
  "_datas": Array<{
                 /** RandomCreateBuffAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                 "buff": {
                                /** RandomCreateBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                "attributes": {
                                                       /** RandomCreateBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalAntis": null | never[];
                                                       /** RandomCreateBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalComboImmunes": null | never[];
                                                       /** RandomCreateBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalCombos": null | never[];
                                                       /** RandomCreateBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalFlags": null | never[];
                                                       /** RandomCreateBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalImmunes": null | never[];
                                                       /** RandomCreateBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                       "attributeModifiers": null | Array<{
                                                                                        /** 属性修改器指向的战斗属性。 */
                                                                                        "attributeType": "DEF_PENETRATE";
                                                                                        /** RandomCreateBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                        "fetchBaseValueFromSourceEntity": boolean;
                                                                                        /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                        "formulaItem": string;
                                                                                        /** RandomCreateBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                        "loadFromBlackboard": boolean;
                                                                                        /** 黑板参数的数值槽。 */
                                                                                        "value": number;
                                                                                      }>;
                                                     };
                                /** RandomCreateBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                "audioSignal": null;
                                /** RandomCreateBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                "blackboard": never[];
                                /** RandomCreateBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                "buffKey": string;
                                /** RandomCreateBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                "clearAllStackCntWhenTimeUp": boolean;
                                /** RandomCreateBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                "disableOverride": boolean;
                                /** RandomCreateBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                "durationKey": null | string;
                                /** RandomCreateBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                "enableInitDirectionFromSource": boolean;
                                /** RandomCreateBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                "firstTriggerInterval": number;
                                /** RandomCreateBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                "independentCharacterSource": boolean;
                                /** RandomCreateBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                "isDamageMissable": boolean;
                                /** RandomCreateBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                "isDurableBuff": boolean;
                                /** RandomCreateBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                "isFreezable": boolean;
                                /** RandomCreateBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                "isLevitatable": boolean;
                                /** RandomCreateBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                "isSilenceable": boolean;
                                /** RandomCreateBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                "isStunnable": boolean;
                                /** RandomCreateBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                "lifeTime": number;
                                /** RandomCreateBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                                /** RandomCreateBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                "loadFromDB": boolean;
                                /** RandomCreateBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                "maxStackCnt": number;
                                /** RandomCreateBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                "maxValidStackCnt": number;
                                /** 模板处理战斗事件时使用的优先级。 */
                                "onEventPriority": "DEFAULT";
                                /** RandomCreateBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                "overrideEffectKey": null;
                                /** RandomCreateBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                "overrideKey": null;
                                /** RandomCreateBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                "overrideOnEventPriority": boolean;
                                /** RandomCreateBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                "overrideType": "DEFAULT" | "UNIQUE";
                                /** RandomCreateBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                "priority": number;
                                /** RandomCreateBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                "priorityBBKeys": never[];
                                /** RandomCreateBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                "refreshRemainingTimeWhenStackMax": boolean;
                                /** RandomCreateBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                "statusResistable": "AUTOMATIC";
                                /** RandomCreateBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                "stripBlackboardParamsWithBuffKey": boolean;
                                /** RandomCreateBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                "takeSnapshotWhenExtend": boolean;
                                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                "templateKey": string;
                                /** RandomCreateBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                "triggerCnt": number;
                                /** RandomCreateBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                "triggerInterval": number;
                                /** RandomCreateBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                "triggerLifeType": "IMMEDIATELY";
                                /** RandomCreateBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                "waitFirstTriggerInterval": boolean;
                              };
                 /** RandomCreateBuffAction 的 `buffOwner` 配置字段；准确战斗语义待确认。 */
                 "buffOwner": "BUFF_OWNER" | "BUFF_SOURCE";
                 /** RandomCreateBuffAction 的 `weight` 配置字段；准确战斗语义待确认。 */
                 "weight": number;
                 /** RandomCreateBuffAction 的 `weightKey` 配置字段；准确战斗语义待确认。 */
                 "weightKey": null | string;
               }>;
  /** RandomCreateBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** RandomCreateBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RandomSetter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RandomSetterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RandomSetter, Assembly-CSharp";
  /** RandomSetterAction 的 `convertToInt` 配置字段；准确战斗语义待确认。 */
  "_convertToInt": boolean;
  /** RandomSetterAction 的 `targetKey` 配置字段；准确战斗语义待确认。 */
  "_targetKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RebuildCharacterOnRandomTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RebuildCharacterOnRandomTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RebuildCharacterOnRandomTile, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** RebuildCharacterOnRandomTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** RebuildCharacterOnRandomTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** RebuildCharacterOnRandomTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** RebuildCharacterOnRandomTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** RebuildCharacterOnRandomTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": never[];
                                     /** RebuildCharacterOnRandomTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** RebuildCharacterOnRandomTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": never[];
                                   };
                /** RebuildCharacterOnRandomTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** RebuildCharacterOnRandomTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** RebuildCharacterOnRandomTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** RebuildCharacterOnRandomTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** RebuildCharacterOnRandomTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** RebuildCharacterOnRandomTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** RebuildCharacterOnRandomTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY";
                /** RebuildCharacterOnRandomTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** RebuildCharacterOnRandomTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** RebuildCharacterOnRandomTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": string;
                /** RebuildCharacterOnRandomTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** RebuildCharacterOnRandomTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "UNIQUE";
                /** RebuildCharacterOnRandomTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** RebuildCharacterOnRandomTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** RebuildCharacterOnRandomTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** RebuildCharacterOnRandomTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** RebuildCharacterOnRandomTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** RebuildCharacterOnRandomTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** RebuildCharacterOnRandomTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** RebuildCharacterOnRandomTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "INFINITY";
                /** RebuildCharacterOnRandomTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** RebuildCharacterOnRandomTileAction 的 `createBuff` 配置字段；准确战斗语义待确认。 */
  "_createBuff": boolean;
  /** RebuildCharacterOnRandomTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RebuildCharacterOnTileInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RebuildCharacterOnTileInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RebuildCharacterOnTileInRange, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": null | {
                /** RebuildCharacterOnTileInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** RebuildCharacterOnTileInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null;
                                     /** RebuildCharacterOnTileInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null;
                                     /** RebuildCharacterOnTileInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null;
                                     /** RebuildCharacterOnTileInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null;
                                     /** RebuildCharacterOnTileInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null;
                                     /** RebuildCharacterOnTileInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null;
                                   };
                /** RebuildCharacterOnTileInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** RebuildCharacterOnTileInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** RebuildCharacterOnTileInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": null | string;
                /** RebuildCharacterOnTileInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** RebuildCharacterOnTileInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** RebuildCharacterOnTileInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** RebuildCharacterOnTileInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY" | "LIMITED";
                /** RebuildCharacterOnTileInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** RebuildCharacterOnTileInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** RebuildCharacterOnTileInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** RebuildCharacterOnTileInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** RebuildCharacterOnTileInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** RebuildCharacterOnTileInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** RebuildCharacterOnTileInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** RebuildCharacterOnTileInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** RebuildCharacterOnTileInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** RebuildCharacterOnTileInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** RebuildCharacterOnTileInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** RebuildCharacterOnTileInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** RebuildCharacterOnTileInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** RebuildCharacterOnTileInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** RebuildCharacterOnTileInRangeAction 的 `createBuff` 配置字段；准确战斗语义待确认。 */
  "_createBuff": boolean;
  /** RebuildCharacterOnTileInRangeAction 的 `owner` 配置字段；准确战斗语义待确认。 */
  "_owner": "BUFF_OWNER" | "BUFF_SOURCE";
  /** RebuildCharacterOnTileInRangeAction 的 `randomDirection` 配置字段；准确战斗语义待确认。 */
  "_randomDirection": boolean;
  /** RebuildCharacterOnTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** RebuildCharacterOnTileInRangeAction 的 `rotateBuildDirection` 配置字段；准确战斗语义待确认。 */
  "_rotateBuildDirection": boolean;
  /** RebuildCharacterOnTileInRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RecalculateDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RecalculateDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RecalculateDamage, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RechargeToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RechargeTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RechargeToken, Assembly-CSharp";
  /** RechargeTokenAction 的 `cntKey` 配置字段；准确战斗语义待确认。 */
  "_cntKey": string;
  /** RechargeTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
  "_rechargeTiming": "NORMAL" | "ON_FINISH";
  /** RechargeTokenAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。 */
  "_refreshRemainingCnt": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RechargeTokenByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RechargeTokenByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RechargeTokenByKey, Assembly-CSharp";
  /** RechargeTokenByKeyAction 的 `cntKey` 配置字段；准确战斗语义待确认。 */
  "_cntKey": string;
  /** RechargeTokenByKeyAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
  "_rechargeTiming": "NORMAL";
  /** RechargeTokenByKeyAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。 */
  "_refreshRemainingCnt": boolean;
  /** RechargeTokenByKeyAction 的 `tokenKey` 配置字段；准确战斗语义待确认。 */
  "_tokenKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RecordAbilityRemainingTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RecordAbilityRemainingTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RecordAbilityRemainingTime, Assembly-CSharp";
  /** RecordAbilityRemainingTimeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** RecordAbilityRemainingTimeAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** RecordAbilityRemainingTimeAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
  "_recordKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR02 = RallyPointRebornAction | RandomActionAction | RandomCreateBuffAction | RandomSetterAction | RebuildCharacterOnRandomTileAction | RebuildCharacterOnTileInRangeAction | RecalculateDamageAction | RechargeTokenAction | RechargeTokenByKeyAction | RecordAbilityRemainingTimeAction;
