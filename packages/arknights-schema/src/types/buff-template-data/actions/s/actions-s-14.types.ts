/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesAverageOnTilesToTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesAverageOnTilesToTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesAverageOnTilesToTarget, Assembly-CSharp";
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `avoidObstacleLike` 配置字段；准确战斗语义待确认。 */
  "_avoidObstacleLike": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `checkTileReachable` 配置字段；准确战斗语义待确认。 */
  "_checkTileReachable": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null | string;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetBound": number;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `randomStart` 配置字段；准确战斗语义待确认。 */
  "_randomStart": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `spawnOnTarget` 配置字段；准确战斗语义待确认。 */
  "_spawnOnTarget": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `summonCnt` 配置字段；准确战斗语义待确认。 */
  "_summonCnt": number;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET";
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesAverageOnTilesToTargetAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesFollowBranchRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRoute, Assembly-CSharp";
  /** SummonEnemiesFollowBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesFollowBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** SummonEnemiesFollowBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SummonEnemiesFollowBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null | never[];
                                            /** SummonEnemiesFollowBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null | never[];
                                            /** SummonEnemiesFollowBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null | never[];
                                            /** SummonEnemiesFollowBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null | never[];
                                            /** SummonEnemiesFollowBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null | never[];
                                            /** SummonEnemiesFollowBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null | Array<{
                                                                           /** 属性修改器指向的战斗属性。 */
                                                                           "attributeType": "ATK";
                                                                           /** SummonEnemiesFollowBranchRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                           "formulaItem": string;
                                                                           /** SummonEnemiesFollowBranchRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                           "loadFromBlackboard": boolean;
                                                                           /** 黑板参数的数值槽。 */
                                                                           "value": number;
                                                                         }>;
                                          };
                       /** SummonEnemiesFollowBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SummonEnemiesFollowBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": null | never[];
                       /** SummonEnemiesFollowBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null | string;
                       /** SummonEnemiesFollowBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null | string;
                       /** SummonEnemiesFollowBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SummonEnemiesFollowBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SummonEnemiesFollowBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                       /** SummonEnemiesFollowBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SummonEnemiesFollowBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SummonEnemiesFollowBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null | string;
                       /** SummonEnemiesFollowBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SummonEnemiesFollowBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SummonEnemiesFollowBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SummonEnemiesFollowBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": null | never[];
                       /** SummonEnemiesFollowBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SummonEnemiesFollowBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SummonEnemiesFollowBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SummonEnemiesFollowBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SummonEnemiesFollowBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SummonEnemiesFollowBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                       /** SummonEnemiesFollowBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SummonEnemiesFollowBranchRouteAction 的 `defaultBranchId` 配置字段；准确战斗语义待确认。 */
  "_defaultBranchId": string;
  /** SummonEnemiesFollowBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** SummonEnemiesFollowBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesFollowBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
  "_overrideEnemyKey": string;
  /** SummonEnemiesFollowBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。 */
  "_setHostUid": boolean;
  /** SummonEnemiesFollowBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。 */
  "_summonAllRoute": boolean;
  /** SummonEnemiesFollowBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithRowExpansion, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesFollowBranchRouteWithRowExpansionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithRowExpansion, Assembly-CSharp";
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": string;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": never[];
                                            /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": never[];
                                            /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": never[];
                                            /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": never[];
                                            /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": never[];
                                            /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": never[];
                                          };
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null | string;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "LIMITED";
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                       /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
  "_overrideEnemyKey": string;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `rowVariation` 配置字段；准确战斗语义待确认。 */
  "_rowVariation": number;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `rowVariationKeys` 配置字段；准确战斗语义待确认。 */
  "_rowVariationKeys": string;
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** SummonEnemiesFollowBranchRouteWithRowExpansionAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithTileBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesFollowBranchRouteWithTileBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesFollowBranchRouteWithTileBlackboard, Assembly-CSharp";
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `actionIndex` 配置字段；准确战斗语义待确认。 */
  "_actionIndex": number;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `actionIndexKey` 配置字段；准确战斗语义待确认。 */
  "_actionIndexKey": string;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": never[];
                                            /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": never[];
                                            /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": never[];
                                            /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": Array<string>;
                                            /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": never[];
                                            /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": never[];
                                          };
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null | string;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "LIMITED";
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
  "_overrideEnemyKey": string;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `summonNums` 配置字段；准确战斗语义待确认。 */
  "_summonNums": number;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `summonNumsKeys` 配置字段；准确战斗语义待确认。 */
  "_summonNumsKeys": string;
  /** SummonEnemiesFollowBranchRouteWithTileBlackboardAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesFollowMyRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRoute, Assembly-CSharp";
  /** SummonEnemiesFollowMyRouteAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_addBuffToEnemy": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": null | {
                       /** SummonEnemiesFollowMyRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SummonEnemiesFollowMyRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null | never[];
                                            /** SummonEnemiesFollowMyRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null | never[];
                                            /** SummonEnemiesFollowMyRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null | never[];
                                            /** SummonEnemiesFollowMyRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null | never[];
                                            /** SummonEnemiesFollowMyRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null | never[];
                                            /** SummonEnemiesFollowMyRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null | Array<{
                                                                           /** 属性修改器指向的战斗属性。 */
                                                                           "attributeType": "MOVE_SPEED";
                                                                           /** SummonEnemiesFollowMyRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                           "formulaItem": string;
                                                                           /** SummonEnemiesFollowMyRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                           "loadFromBlackboard": boolean;
                                                                           /** 黑板参数的数值槽。 */
                                                                           "value": number;
                                                                         }>;
                                          };
                       /** SummonEnemiesFollowMyRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SummonEnemiesFollowMyRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": null | Array<{
                                            /** 黑板参数键或当前配置项的稳定键。 */
                                            "key": string;
                                            /** 黑板参数的数值槽。 */
                                            "value": number;
                                            /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                            "valueStr": string;
                                          }>;
                       /** SummonEnemiesFollowMyRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null | string;
                       /** SummonEnemiesFollowMyRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null | string;
                       /** SummonEnemiesFollowMyRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SummonEnemiesFollowMyRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SummonEnemiesFollowMyRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                       /** SummonEnemiesFollowMyRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SummonEnemiesFollowMyRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SummonEnemiesFollowMyRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null | string;
                       /** SummonEnemiesFollowMyRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null | string;
                       /** SummonEnemiesFollowMyRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SummonEnemiesFollowMyRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SummonEnemiesFollowMyRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": null | never[];
                       /** SummonEnemiesFollowMyRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SummonEnemiesFollowMyRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SummonEnemiesFollowMyRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SummonEnemiesFollowMyRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SummonEnemiesFollowMyRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SummonEnemiesFollowMyRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SummonEnemiesFollowMyRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SummonEnemiesFollowMyRouteAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
  "_checkMotionMode": "ALL" | "FLY_ONLY" | "WALK_ONLY";
  /** SummonEnemiesFollowMyRouteAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
  "_delayTime": number;
  /** SummonEnemiesFollowMyRouteAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。 */
  "_dontBlockWave": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null | string;
  /** SummonEnemiesFollowMyRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": {
                  /** SummonEnemiesFollowMyRouteAction 的 `x` 配置字段；准确战斗语义待确认。 */
                  "x": number;
                  /** SummonEnemiesFollowMyRouteAction 的 `y` 配置字段；准确战斗语义待确认。 */
                  "y": number;
                };
  /** SummonEnemiesFollowMyRouteAction 的 `offsetXKey` 配置字段；准确战斗语义待确认。 */
  "_offsetXKey": null | string;
  /** SummonEnemiesFollowMyRouteAction 的 `offsetYKey` 配置字段；准确战斗语义待确认。 */
  "_offsetYKey": null | string;
  /** SummonEnemiesFollowMyRouteAction 的 `onlySummonOneInTheSamePlace` 配置字段；准确战斗语义待确认。 */
  "_onlySummonOneInTheSamePlace": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
  "_passableMask": "FLY_ONLY" | "NONE" | "WALK_ONLY";
  /** SummonEnemiesFollowMyRouteAction 的 `randomDelayRange` 配置字段；准确战斗语义待确认。 */
  "_randomDelayRange": number;
  /** SummonEnemiesFollowMyRouteAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetBound": number;
  /** SummonEnemiesFollowMyRouteAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。 */
  "_skipCheckPoint": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** SummonEnemiesFollowMyRouteAction 的 `spawnOnHostRootTile` 配置字段；准确战斗语义待确认。 */
  "_spawnOnHostRootTile": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。 */
  "_stopSummonIfHostDead": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** SummonEnemiesFollowMyRouteAction 的 `trySummonOutsideWhenInObstacle` 配置字段；准确战斗语义待确认。 */
  "_trySummonOutsideWhenInObstacle": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。 */
  "_useLocalUnharmfulFlag": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `useMapPosition` 配置字段；准确战斗语义待确认。 */
  "_useMapPosition": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `useOffsetForEach` 配置字段；准确战斗语义待确认。 */
  "_useOffsetForEach": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `useOffsetInBB` 配置字段；准确战斗语义待确认。 */
  "_useOffsetInBB": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `useRandomDelay` 配置字段；准确战斗语义待确认。 */
  "_useRandomDelay": boolean;
  /** SummonEnemiesFollowMyRouteAction 的 `useTargetPosition` 配置字段；准确战斗语义待确认。 */
  "_useTargetPosition": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRouteWithBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesFollowMyRouteWithBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesFollowMyRouteWithBuff, Assembly-CSharp";
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `additionalBuff` 配置字段；准确战斗语义待确认。 */
  "_additionalBuff": Array<{
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                          "attributes": {
                                               /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                               "abnormalAntis": null;
                                               /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                               "abnormalComboImmunes": null;
                                               /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                               "abnormalCombos": null;
                                               /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                               "abnormalFlags": null;
                                               /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                               "abnormalImmunes": null;
                                               /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                               "attributeModifiers": null;
                                             };
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                          "audioSignal": null;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                          "blackboard": never[];
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                          "buffKey": string;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                          "clearAllStackCntWhenTimeUp": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                          "disableOverride": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                          "durationKey": null;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                          "enableInitDirectionFromSource": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "firstTriggerInterval": number;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                          "independentCharacterSource": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                          "isDamageMissable": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                          "isDurableBuff": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                          "isFreezable": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                          "isLevitatable": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                          "isSilenceable": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                          "isStunnable": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                          "lifeTime": number;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                          "lifeTimeType": "IMMEDIATELY" | "INFINITY";
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                          "loadFromDB": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxStackCnt": number;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                          "maxValidStackCnt": number;
                          /** 模板处理战斗事件时使用的优先级。 */
                          "onEventPriority": "DEFAULT";
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                          "overrideEffectKey": null | string;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                          "overrideKey": null;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                          "overrideOnEventPriority": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                          "overrideType": "DEFAULT";
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                          "priority": number;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                          "priorityBBKeys": never[];
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                          "refreshRemainingTimeWhenStackMax": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                          "statusResistable": "AUTOMATIC";
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                          "stripBlackboardParamsWithBuffKey": boolean;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                          "takeSnapshotWhenExtend": boolean;
                          /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                          "templateKey": string;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                          "triggerCnt": number;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                          "triggerInterval": number;
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                          "triggerLifeType": "IMMEDIATELY";
                          /** SummonEnemiesFollowMyRouteWithBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                          "waitFirstTriggerInterval": boolean;
                        }>;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `addNoSourceBuffImmediately` 配置字段；准确战斗语义待确认。 */
  "_addNoSourceBuffImmediately": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
  "_buffSource": "BUFF_OWNER" | "BUFF_SOURCE";
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
  "_checkMotionMode": "ALL";
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
  "_delayTime": number;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。 */
  "_dontBlockWave": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null | string;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `ignoreOffset` 配置字段；准确战斗语义待确认。 */
  "_ignoreOffset": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `noSourceBuff` 配置字段；准确战斗语义待确认。 */
  "_noSourceBuff": {
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                        "attributes": {
                                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": null | never[];
                                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": null | never[];
                                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": null | never[];
                                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": null | never[];
                                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": null | never[];
                                             /** SummonEnemiesFollowMyRouteWithBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": null | never[];
                                           };
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                        "audioSignal": null;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                        "blackboard": never[];
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                        "buffKey": null | string;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                        "clearAllStackCntWhenTimeUp": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                        "disableOverride": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                        "durationKey": null | string;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                        "enableInitDirectionFromSource": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "firstTriggerInterval": number;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                        "independentCharacterSource": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                        "isDamageMissable": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                        "isDurableBuff": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                        "isFreezable": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                        "isLevitatable": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                        "isSilenceable": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                        "isStunnable": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                        "lifeTime": number;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                        "lifeTimeType": "INFINITY" | "LIMITED";
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                        "loadFromDB": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxStackCnt": number;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxValidStackCnt": number;
                        /** 模板处理战斗事件时使用的优先级。 */
                        "onEventPriority": "DEFAULT";
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                        "overrideEffectKey": null;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                        "overrideKey": null;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                        "overrideOnEventPriority": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                        "overrideType": "DEFAULT";
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                        "priority": number;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                        "priorityBBKeys": never[];
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                        "refreshRemainingTimeWhenStackMax": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                        "statusResistable": "AUTOMATIC";
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                        "stripBlackboardParamsWithBuffKey": boolean;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                        "takeSnapshotWhenExtend": boolean;
                        /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                        "templateKey": string;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                        "triggerCnt": number;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                        "triggerInterval": number;
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                        "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                        /** SummonEnemiesFollowMyRouteWithBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "waitFirstTriggerInterval": boolean;
                      };
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": {
                  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `x` 配置字段；准确战斗语义待确认。 */
                  "x": number;
                  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `y` 配置字段；准确战斗语义待确认。 */
                  "y": number;
                };
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `offsetXKey` 配置字段；准确战斗语义待确认。 */
  "_offsetXKey": null | string;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `offsetYKey` 配置字段；准确战斗语义待确认。 */
  "_offsetYKey": null | string;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `onlySummonOneInTheSamePlace` 配置字段；准确战斗语义待确认。 */
  "_onlySummonOneInTheSamePlace": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
  "_passableMask": "NONE" | "WALK_ONLY";
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `randomDelayRange` 配置字段；准确战斗语义待确认。 */
  "_randomDelayRange": number;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetBound": number;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。 */
  "_skipCheckPoint": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `spawnOnHostRootTile` 配置字段；准确战斗语义待确认。 */
  "_spawnOnHostRootTile": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。 */
  "_stopSummonIfHostDead": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `trySummonOutsideWhenInObstacle` 配置字段；准确战斗语义待确认。 */
  "_trySummonOutsideWhenInObstacle": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。 */
  "_useLocalUnharmfulFlag": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useMapPosition` 配置字段；准确战斗语义待确认。 */
  "_useMapPosition": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useOffsetForEach` 配置字段；准确战斗语义待确认。 */
  "_useOffsetForEach": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useOffsetInBB` 配置字段；准确战斗语义待确认。 */
  "_useOffsetInBB": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useRandomDelay` 配置字段；准确战斗语义待确认。 */
  "_useRandomDelay": boolean;
  /** SummonEnemiesFollowMyRouteWithBuffAction 的 `useTargetPosition` 配置字段；准确战斗语义待确认。 */
  "_useTargetPosition": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesOnAttackRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesOnAttackRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesOnAttackRange, Assembly-CSharp";
  /** SummonEnemiesOnAttackRangeAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": null | string;
  /** SummonEnemiesOnAttackRangeAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** SummonEnemiesOnAttackRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SummonEnemiesOnAttackRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** SummonEnemiesOnAttackRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** SummonEnemiesOnAttackRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** SummonEnemiesOnAttackRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | Array<string>;
                                      /** SummonEnemiesOnAttackRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** SummonEnemiesOnAttackRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** SummonEnemiesOnAttackRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SummonEnemiesOnAttackRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** SummonEnemiesOnAttackRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SummonEnemiesOnAttackRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** SummonEnemiesOnAttackRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SummonEnemiesOnAttackRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SummonEnemiesOnAttackRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY";
                 /** SummonEnemiesOnAttackRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SummonEnemiesOnAttackRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SummonEnemiesOnAttackRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null | string;
                 /** SummonEnemiesOnAttackRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SummonEnemiesOnAttackRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SummonEnemiesOnAttackRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SummonEnemiesOnAttackRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** SummonEnemiesOnAttackRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SummonEnemiesOnAttackRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SummonEnemiesOnAttackRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SummonEnemiesOnAttackRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SummonEnemiesOnAttackRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SummonEnemiesOnAttackRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                 /** SummonEnemiesOnAttackRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SummonEnemiesOnAttackRangeAction 的 `buffsUseTargetAsSource` 配置字段；准确战斗语义待确认。 */
  "_buffsUseTargetAsSource": null | Array<{
                                  /** SummonEnemiesOnAttackRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": {
                                                       /** SummonEnemiesOnAttackRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalAntis": null;
                                                       /** SummonEnemiesOnAttackRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalComboImmunes": null;
                                                       /** SummonEnemiesOnAttackRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalCombos": null;
                                                       /** SummonEnemiesOnAttackRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalFlags": null;
                                                       /** SummonEnemiesOnAttackRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                       "abnormalImmunes": null;
                                                       /** SummonEnemiesOnAttackRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                       "attributeModifiers": null;
                                                     };
                                  /** SummonEnemiesOnAttackRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": null;
                                  /** SummonEnemiesOnAttackRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": never[];
                                  /** SummonEnemiesOnAttackRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": string;
                                  /** SummonEnemiesOnAttackRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": null;
                                  /** SummonEnemiesOnAttackRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": number;
                                  /** SummonEnemiesOnAttackRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": number;
                                  /** SummonEnemiesOnAttackRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": "INFINITY";
                                  /** SummonEnemiesOnAttackRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": number;
                                  /** SummonEnemiesOnAttackRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": number;
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": "DEFAULT";
                                  /** SummonEnemiesOnAttackRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": string;
                                  /** SummonEnemiesOnAttackRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": null;
                                  /** SummonEnemiesOnAttackRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": "DEFAULT";
                                  /** SummonEnemiesOnAttackRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": number;
                                  /** SummonEnemiesOnAttackRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": never[];
                                  /** SummonEnemiesOnAttackRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": "AUTOMATIC";
                                  /** SummonEnemiesOnAttackRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": boolean;
                                  /** SummonEnemiesOnAttackRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": boolean;
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": string;
                                  /** SummonEnemiesOnAttackRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": number;
                                  /** SummonEnemiesOnAttackRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": number;
                                  /** SummonEnemiesOnAttackRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": "IMMEDIATELY";
                                  /** SummonEnemiesOnAttackRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": boolean;
                                }>;
  /** SummonEnemiesOnAttackRangeAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": string;
  /** SummonEnemiesOnAttackRangeAction 的 `meanwhileNearestTileToTarget` 配置字段；准确战斗语义待确认。 */
  "_meanwhileNearestTileToTarget": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY" | "WALK";
  /** SummonEnemiesOnAttackRangeAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。 */
  "_noEndPosition": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `selectTheNearestTileToSource` 配置字段；准确战斗语义待确认。 */
  "_selectTheNearestTileToSource": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonEnemiesOnAttackRangeAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
  "_spawnOffset": number;
  /** SummonEnemiesOnAttackRangeAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** SummonEnemiesOnAttackRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "SOURCE";
  /** SummonEnemiesOnAttackRangeAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `useAttackRangeTilesDirectly` 配置字段；准确战斗语义待确认。 */
  "_useAttackRangeTilesDirectly": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `useTargetAbilitySelector` 配置字段；准确战斗语义待确认。 */
  "_useTargetAbilitySelector": boolean;
  /** SummonEnemiesOnAttackRangeAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesOnTargetTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesOnTargetTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesOnTargetTile, Assembly-CSharp";
  /** SummonEnemiesOnTargetTileAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_addBuffToEnemy": boolean;
  /** SummonEnemiesOnTargetTileAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": null | {
                       /** SummonEnemiesOnTargetTileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SummonEnemiesOnTargetTileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null;
                                            /** SummonEnemiesOnTargetTileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null;
                                            /** SummonEnemiesOnTargetTileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null;
                                            /** SummonEnemiesOnTargetTileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null;
                                            /** SummonEnemiesOnTargetTileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null;
                                            /** SummonEnemiesOnTargetTileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null;
                                          };
                       /** SummonEnemiesOnTargetTileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SummonEnemiesOnTargetTileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": null | never[];
                       /** SummonEnemiesOnTargetTileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null;
                       /** SummonEnemiesOnTargetTileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SummonEnemiesOnTargetTileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SummonEnemiesOnTargetTileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SummonEnemiesOnTargetTileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "LIMITED";
                       /** SummonEnemiesOnTargetTileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SummonEnemiesOnTargetTileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SummonEnemiesOnTargetTileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SummonEnemiesOnTargetTileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SummonEnemiesOnTargetTileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SummonEnemiesOnTargetTileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SummonEnemiesOnTargetTileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": null | never[];
                       /** SummonEnemiesOnTargetTileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SummonEnemiesOnTargetTileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SummonEnemiesOnTargetTileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SummonEnemiesOnTargetTileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SummonEnemiesOnTargetTileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SummonEnemiesOnTargetTileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SummonEnemiesOnTargetTileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SummonEnemiesOnTargetTileAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
  "_checkMotionMode": "ALL";
  /** SummonEnemiesOnTargetTileAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
  "_delayTime": number;
  /** SummonEnemiesOnTargetTileAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null;
  /** SummonEnemiesOnTargetTileAction 的 `excludeRootTile` 配置字段；准确战斗语义待确认。 */
  "_excludeRootTile": boolean;
  /** SummonEnemiesOnTargetTileAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesOnTargetTileAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetBound": {
                             /** SummonEnemiesOnTargetTileAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                             "_serializedValue": number;
                           };
  /** SummonEnemiesOnTargetTileAction 的 `selectTileInSnapshot` 配置字段；准确战斗语义待确认。 */
  "_selectTileInSnapshot": boolean;
  /** SummonEnemiesOnTargetTileAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** SummonEnemiesOnTargetTileAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** SummonEnemiesOnTargetTileAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesOnTargetTileAction 的 `useProjectileTraceTargetMapPos` 配置字段；准确战斗语义待确认。 */
  "_useProjectileTraceTargetMapPos": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRoute, Assembly-CSharp";
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": never[];
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": string;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY";
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetBound": number;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `surroundTilesOptions` 配置字段；准确战斗语义待确认。 */
  "_surroundTilesOptions": {
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                                "advancedBuildableMask": "NONE";
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                                "advancedBuildableMaskExcept": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                                "allowAllAdvancedBuildableMask": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                                "allowNoneBuildableType": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                                "allowNonePassableMask": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                                "allowedTileBlackboardKey": null;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                                "buildableType": "ALL";
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                                "checkBuildableOrPassable": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                                "checkExtraBuildableCheckers": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                                "checkHeightType": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                                "checkTileHidden": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                                "checkTileMode": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                                "checkTileMoveCost": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                                "checkTileTypes": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                                "exceptTileTypes": boolean;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                                "excludeTileBlackboardKey": null;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                                "heightType": "LOWLAND";
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                                "modeIndex": number;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                                "moveCostCompareType": "LT";
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                                "moveCostThreshold": number;
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                                "passableMask": "NONE";
                                /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                                "tileTypesMask": "NONE";
                              };
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `trapKey` 配置字段；准确战斗语义待确认。 */
  "_trapKey": string;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemiesWithRuntimeNearestEndPointRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemiesWithRuntimeNearestEndPointRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemiesWithRuntimeNearestEndPointRoute, Assembly-CSharp";
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null | string;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `ignoreMissEndPoint` 配置字段；准确战斗语义待确认。 */
  "_ignoreMissEndPoint": boolean;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY" | "WALK";
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "TARGET";
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
  "_spawnOffset": number;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `summonOnNearestPassableTile` 配置字段；准确战斗语义待确认。 */
  "_summonOnNearestPassableTile": boolean;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemiesWithRuntimeNearestEndPointRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS14 = SummonEnemiesAverageOnTilesToTargetAction | SummonEnemiesFollowBranchRouteAction | SummonEnemiesFollowBranchRouteWithRowExpansionAction | SummonEnemiesFollowBranchRouteWithTileBlackboardAction | SummonEnemiesFollowMyRouteAction | SummonEnemiesFollowMyRouteWithBuffAction | SummonEnemiesOnAttackRangeAction | SummonEnemiesOnTargetTileAction | SummonEnemiesOnTileSurroundedByTrapsWithRuntimeNearestEndPointRouteAction | SummonEnemiesWithRuntimeNearestEndPointRouteAction;
