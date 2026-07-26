/**
 * buff_template_data 的 H 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeDeath, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdlePolluteTrapNoticeDeathAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeDeath, Assembly-CSharp";
  /** HalfIdlePolluteTrapNoticeDeathAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdlePortTrySummonShip, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdlePortTrySummonShipAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdlePortTrySummonShip, Assembly-CSharp";
  /** HalfIdlePortTrySummonShipAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleSummonEnemyAtTargetMapPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleSummonEnemyAtTargetMapPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleSummonEnemyAtTargetMapPos, Assembly-CSharp";
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": null | string;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": never[];
                                            /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": never[];
                                            /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": never[];
                                            /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": never[];
                                            /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": never[];
                                            /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": never[];
                                          };
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null | string;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null | string;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "INFINITY" | "LIMITED";
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": string;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `buffToEnemySourceType` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemySourceType": "BUFF_OWNER";
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `enemyId` 配置字段；准确战斗语义待确认。 */
  "_enemyId": null | string;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `hasBuffToEnemySource` 配置字段；准确战斗语义待确认。 */
  "_hasBuffToEnemySource": boolean;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** HalfIdleSummonEnemyAtTargetMapPosAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleSummonRandomEnemyAtTargetMapPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleSummonRandomEnemyAtTargetMapPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleSummonRandomEnemyAtTargetMapPos, Assembly-CSharp";
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": null;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null;
                                            /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null;
                                            /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null;
                                            /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null;
                                            /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null;
                                            /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null;
                                          };
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": string;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": string;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "INFINITY";
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": string;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `buffToEnemySourceType` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemySourceType": "BUFF_OWNER";
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `enemyIds` 配置字段；准确战斗语义待确认。 */
  "_enemyIds": null;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `hasBuffToEnemySource` 配置字段；准确战斗语义待确认。 */
  "_hasBuffToEnemySource": boolean;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `probs` 配置字段；准确战斗语义待确认。 */
  "_probs": null;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** HalfIdleSummonRandomEnemyAtTargetMapPosAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleTrapSwitchModeWithFourDirRule, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleTrapSwitchModeWithFourDirRuleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleTrapSwitchModeWithFourDirRule, Assembly-CSharp";
  /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `modeIndices` 配置字段；准确战斗语义待确认。 */
  "_modeIndices": Array<number>;
  /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
  "_sourcePosType": "BUFF_OWNER";
  /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
  "_targetPosType": "BUFF_OWNER";
  /** HalfIdleTrapSwitchModeWithFourDirRuleAction 的 `upgradeTags` 配置字段；准确战斗语义待确认。 */
  "_upgradeTags": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleTriggerIrrigate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleTriggerIrrigateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleTriggerIrrigate, Assembly-CSharp";
  /** HalfIdleTriggerIrrigateAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** HalfIdleTriggerIrrigateAction 的 `firstIrrigate` 配置字段；准确战斗语义待确认。 */
  "_firstIrrigate": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleTriggerTrapUpgradeCheck, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleTriggerTrapUpgradeCheckAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleTriggerTrapUpgradeCheck, Assembly-CSharp";
  /** HalfIdleTriggerTrapUpgradeCheckAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
  "_sourcePosType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleUpgradeEquip, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleUpgradeEquipAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleUpgradeEquip, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleUpgradeTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrap, Assembly-CSharp";
  /** HalfIdleUpgradeTrapAction 的 `forceSpawn` 配置字段；准确战斗语义待确认。 */
  "_forceSpawn": boolean;
  /** HalfIdleUpgradeTrapAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
  "_sourcePosType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** HalfIdleUpgradeTrapAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
  "_targetPosType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** HalfIdleUpgradeTrapAction 的 `upgradeTrapId` 配置字段；准确战斗语义待确认。 */
  "_upgradeTrapId": string;
  /** HalfIdleUpgradeTrapAction 的 `upgradeTrapKey` 配置字段；准确战斗语义待确认。 */
  "_upgradeTrapKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithFourDirRule, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleUpgradeTrapWithFourDirRuleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleUpgradeTrapWithFourDirRule, Assembly-CSharp";
  /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
  "_sourcePosType": "BUFF_OWNER";
  /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `targetPosType` 配置字段；准确战斗语义待确认。 */
  "_targetPosType": "BUFF_OWNER";
  /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `upgradeMaps` 配置字段；准确战斗语义待确认。 */
  "_upgradeMaps": Array<{
                       /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `direvedTrapID` 配置字段；准确战斗语义待确认。 */
                       "direvedTrapID": string;
                       /** HalfIdleUpgradeTrapWithFourDirRuleAction 的 `trapTag` 配置字段；准确战斗语义待确认。 */
                       "trapTag": string;
                     }>;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionH03 = HalfIdlePolluteTrapNoticeDeathAction | HalfIdlePortTrySummonShipAction | HalfIdleSummonEnemyAtTargetMapPosAction | HalfIdleSummonRandomEnemyAtTargetMapPosAction | HalfIdleTrapSwitchModeWithFourDirRuleAction | HalfIdleTriggerIrrigateAction | HalfIdleTriggerTrapUpgradeCheckAction | HalfIdleUpgradeEquipAction | HalfIdleUpgradeTrapAction | HalfIdleUpgradeTrapWithFourDirRuleAction;
