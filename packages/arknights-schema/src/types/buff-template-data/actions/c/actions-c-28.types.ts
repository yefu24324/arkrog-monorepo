/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateEffectForUnitsFunLiveModeOnly, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateEffectForUnitsFunLiveModeOnlyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateEffectForUnitsFunLiveModeOnly, Assembly-CSharp";
  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `dangerousEffectBuff` 配置字段；准确战斗语义待确认。 */
  "_dangerousEffectBuff": {
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                               "attributes": {
                                                    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalAntis": null;
                                                    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalComboImmunes": null;
                                                    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalCombos": null;
                                                    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalFlags": null;
                                                    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                    "abnormalImmunes": null;
                                                    /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                    "attributeModifiers": null;
                                                  };
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                               "audioSignal": null;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                               "blackboard": never[];
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                               "buffKey": string;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                               "clearAllStackCntWhenTimeUp": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                               "disableOverride": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                               "durationKey": null;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                               "enableInitDirectionFromSource": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                               "firstTriggerInterval": number;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                               "independentCharacterSource": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                               "isDamageMissable": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                               "isDurableBuff": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                               "isFreezable": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                               "isLevitatable": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                               "isSilenceable": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                               "isStunnable": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                               "lifeTime": number;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                               "lifeTimeType": "INFINITY";
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                               "loadFromDB": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                               "maxStackCnt": number;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                               "maxValidStackCnt": number;
                               /** 模板处理战斗事件时使用的优先级。 */
                               "onEventPriority": "DEFAULT";
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                               "overrideEffectKey": string;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                               "overrideKey": null;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                               "overrideOnEventPriority": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                               "overrideType": "DEFAULT";
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                               "priority": number;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                               "priorityBBKeys": never[];
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                               "refreshRemainingTimeWhenStackMax": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                               "statusResistable": "AUTOMATIC";
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                               "stripBlackboardParamsWithBuffKey": boolean;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                               "takeSnapshotWhenExtend": boolean;
                               /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                               "templateKey": string;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                               "triggerCnt": number;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                               "triggerInterval": number;
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                               "triggerLifeType": "IMMEDIATELY";
                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                               "waitFirstTriggerInterval": boolean;
                             };
  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `normalEffectBuff` 配置字段；准确战斗语义待确认。 */
  "_normalEffectBuff": {
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                            "attributes": {
                                                 /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalAntis": never[];
                                                 /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalComboImmunes": never[];
                                                 /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalCombos": never[];
                                                 /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalFlags": never[];
                                                 /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalImmunes": never[];
                                                 /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                 "attributeModifiers": never[];
                                               };
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                            "audioSignal": null;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                            "blackboard": never[];
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                            "buffKey": string;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                            "clearAllStackCntWhenTimeUp": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                            "disableOverride": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                            "durationKey": null;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                            "enableInitDirectionFromSource": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                            "firstTriggerInterval": number;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                            "independentCharacterSource": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                            "isDamageMissable": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                            "isDurableBuff": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                            "isFreezable": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                            "isLevitatable": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                            "isSilenceable": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                            "isStunnable": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                            "lifeTime": number;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                            "lifeTimeType": "INFINITY";
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                            "loadFromDB": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                            "maxStackCnt": number;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                            "maxValidStackCnt": number;
                            /** 模板处理战斗事件时使用的优先级。 */
                            "onEventPriority": "DEFAULT";
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                            "overrideEffectKey": string;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                            "overrideKey": null;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                            "overrideOnEventPriority": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                            "overrideType": "UNIQUE";
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                            "priority": number;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                            "priorityBBKeys": never[];
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                            "refreshRemainingTimeWhenStackMax": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                            "statusResistable": "AUTOMATIC";
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                            "stripBlackboardParamsWithBuffKey": boolean;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                            "takeSnapshotWhenExtend": boolean;
                            /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                            "templateKey": string;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                            "triggerCnt": number;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                            "triggerInterval": number;
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                            "triggerLifeType": "IMMEDIATELY";
                            /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                            "waitFirstTriggerInterval": boolean;
                          };
  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `onlyCreateDangerousEffect` 配置字段；准确战斗语义待确认。 */
  "_onlyCreateDangerousEffect": boolean;
  /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `rareEffectBuff` 配置字段；准确战斗语义待确认。 */
  "_rareEffectBuff": {
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": {
                                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                               "abnormalAntis": null;
                                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                               "abnormalComboImmunes": null;
                                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                               "abnormalCombos": null;
                                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                               "abnormalFlags": null;
                                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                               "abnormalImmunes": null;
                                               /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                               "attributeModifiers": null;
                                             };
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": null;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": never[];
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": string;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": null;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": number;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": number;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": "INFINITY";
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": number;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": number;
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": "DEFAULT";
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": string;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": null;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": "DEFAULT";
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": number;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": never[];
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": "AUTOMATIC";
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": boolean;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": boolean;
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": string;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": number;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": number;
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": "IMMEDIATELY";
                          /** CreateEffectForUnitsFunLiveModeOnlyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": boolean;
                        };
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateEffectHookProjectileEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateEffectHookProjectileEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateEffectHookProjectileEffect, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CreateEffectHookProjectileEffectAction 的 `constDirection` 配置字段；准确战斗语义待确认。 */
  "_constDirection": string;
  /** CreateEffectHookProjectileEffectAction 的 `createEffectHoldBySource` 配置字段；准确战斗语义待确认。 */
  "_createEffectHoldBySource": boolean;
  /** CreateEffectHookProjectileEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateEffectHookProjectileEffectAction 的 `manualSetPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
  "_manualSetPlaybackSpeed": boolean;
  /** CreateEffectHookProjectileEffectAction 的 `playbackSpeed` 配置字段；准确战斗语义待确认。 */
  "_playbackSpeed": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CreateEffectHookProjectileEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
  "_useAttackPlaybackSpeed": boolean;
  /** CreateEffectHookProjectileEffectAction 的 `useConstDirection` 配置字段；准确战斗语义待确认。 */
  "_useConstDirection": boolean;
  /** CreateEffectHookProjectileEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。 */
  "_useSourceFaceVactor": boolean;
  /** CreateEffectHookProjectileEffectAction 的 `useSourceToTargetDirection` 配置字段；准确战斗语义待确认。 */
  "_useSourceToTargetDirection": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateEffectScaled, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateEffectScaledAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateEffectScaled, Assembly-CSharp";
  /** CreateEffectScaledAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateEffectScaledAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
  "_scaleKey": string;
  /** CreateEffectScaledAction 的 `scaleValue` 配置字段；准确战斗语义待确认。 */
  "_scaleValue": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateEffectToSurroundingTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateEffectToSurroundingTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateEffectToSurroundingTiles, Assembly-CSharp";
  /** CreateEffectToSurroundingTilesAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateFirewallVulnerabilityButton, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateFirewallVulnerabilityButtonAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateFirewallVulnerabilityButton, Assembly-CSharp";
  /** CreateFirewallVulnerabilityButtonAction 的 `createForAllWalls` 配置字段；准确战斗语义待确认。 */
  "_createForAllWalls": boolean;
  /** CreateFirewallVulnerabilityButtonAction 的 `radiationSourceType` 配置字段；准确战斗语义待确认。 */
  "_radiationSourceType": "BUFF_SOURCE" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateGlobalBuffByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateGlobalBuffByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateGlobalBuffByKey, Assembly-CSharp";
  /** CreateGlobalBuffByKeyAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffKey": string;
  /** CreateGlobalBuffByKeyAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffPrefabKey": string;
  /** CreateGlobalBuffByKeyAction 的 `tryAddBuffImmediately` 配置字段；准确战斗语义待确认。 */
  "_tryAddBuffImmediately": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateLineEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateLineEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateLineEffect, Assembly-CSharp";
  /** CreateLineEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateLineEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
  "_useAttackPlaybackSpeed": boolean;
  /** CreateLineEffectAction 的 `useHostAsTarget` 配置字段；准确战斗语义待确认。 */
  "_useHostAsTarget": boolean;
  /** CreateLineEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。 */
  "_useSourceFaceVactor": boolean;
  /** CreateLineEffectAction 的 `useTargetAsEffectSource` 配置字段；准确战斗语义待确认。 */
  "_useTargetAsEffectSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateNoSourceBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateNoSourceBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateNoSourceBuff, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateNoSourceBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateNoSourceBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateNoSourceBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateNoSourceBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateNoSourceBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateNoSourceBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateNoSourceBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | never[];
                                   };
                /** CreateNoSourceBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateNoSourceBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateNoSourceBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateNoSourceBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateNoSourceBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateNoSourceBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateNoSourceBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateNoSourceBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateNoSourceBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateNoSourceBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateNoSourceBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateNoSourceBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateNoSourceBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateNoSourceBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateNoSourceBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateNoSourceBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateNoSourceBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY";
                /** CreateNoSourceBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateNoSourceBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateNoSourceBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateNoSourceBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateNoSourceBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateNoSourceBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateNoSourceBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "STACK";
                /** CreateNoSourceBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateNoSourceBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateNoSourceBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateNoSourceBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateNoSourceBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateNoSourceBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateNoSourceBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateNoSourceBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateNoSourceBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateNoSourceBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "TARGET";
  /** CreateNoSourceBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreatePreviewCursor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreatePreviewCursorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreatePreviewCursor, Assembly-CSharp";
  /** CreatePreviewCursorAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** CreatePreviewCursorAction 的 `targetAsStart` 配置字段；准确战斗语义待确认。 */
  "_targetAsStart": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateRandomEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateRandomEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateRandomEffect, Assembly-CSharp";
  /** CreateRandomEffectAction 的 `effectKeys` 配置字段；准确战斗语义待确认。 */
  "_effectKeys": Array<string>;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CreateRandomEffectAction 的 `useSourceFaceVector` 配置字段；准确战斗语义待确认。 */
  "_useSourceFaceVector": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC28 = CreateEffectForUnitsFunLiveModeOnlyAction | CreateEffectHookProjectileEffectAction | CreateEffectScaledAction | CreateEffectToSurroundingTilesAction | CreateFirewallVulnerabilityButtonAction | CreateGlobalBuffByKeyAction | CreateLineEffectAction | CreateNoSourceBuffAction | CreatePreviewCursorAction | CreateRandomEffectAction;
