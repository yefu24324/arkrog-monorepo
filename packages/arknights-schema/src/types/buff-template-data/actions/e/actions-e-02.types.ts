/**
 * buff_template_data 的 E 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyChangeRouteToTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyChangeRouteToTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyChangeRouteToTarget, Assembly-CSharp";
  /** EnemyChangeRouteToTargetAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
  "_enemy": string;
  /** EnemyChangeRouteToTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyChangeRouteToTargetUseSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyChangeRouteToTargetUseSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyChangeRouteToTargetUseSelector, Assembly-CSharp";
  /** EnemyChangeRouteToTargetUseSelectorAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
  "_enemy": string;
  /** EnemyChangeRouteToTargetUseSelectorAction 的 `tileSelectorAbilityName` 配置字段；准确战斗语义待确认。 */
  "_tileSelectorAbilityName": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyDuelReportCombat, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyDuelReportCombatAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyDuelReportCombat, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyDuelSummonEnemies, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyDuelSummonEnemiesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyDuelSummonEnemies, Assembly-CSharp";
  /** EnemyDuelSummonEnemiesAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_addBuffToEnemy": boolean;
  /** EnemyDuelSummonEnemiesAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** EnemyDuelSummonEnemiesAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** EnemyDuelSummonEnemiesAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null;
                                            /** EnemyDuelSummonEnemiesAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null;
                                            /** EnemyDuelSummonEnemiesAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null;
                                            /** EnemyDuelSummonEnemiesAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null;
                                            /** EnemyDuelSummonEnemiesAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null;
                                            /** EnemyDuelSummonEnemiesAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null;
                                          };
                       /** EnemyDuelSummonEnemiesAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** EnemyDuelSummonEnemiesAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** EnemyDuelSummonEnemiesAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null;
                       /** EnemyDuelSummonEnemiesAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** EnemyDuelSummonEnemiesAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** EnemyDuelSummonEnemiesAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** EnemyDuelSummonEnemiesAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "LIMITED";
                       /** EnemyDuelSummonEnemiesAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** EnemyDuelSummonEnemiesAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** EnemyDuelSummonEnemiesAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** EnemyDuelSummonEnemiesAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** EnemyDuelSummonEnemiesAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** EnemyDuelSummonEnemiesAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** EnemyDuelSummonEnemiesAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** EnemyDuelSummonEnemiesAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** EnemyDuelSummonEnemiesAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** EnemyDuelSummonEnemiesAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** EnemyDuelSummonEnemiesAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** EnemyDuelSummonEnemiesAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** EnemyDuelSummonEnemiesAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** EnemyDuelSummonEnemiesAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** EnemyDuelSummonEnemiesAction 的 `checkMotionMode` 配置字段；准确战斗语义待确认。 */
  "_checkMotionMode": "ALL";
  /** EnemyDuelSummonEnemiesAction 的 `delayTime` 配置字段；准确战斗语义待确认。 */
  "_delayTime": number;
  /** EnemyDuelSummonEnemiesAction 的 `dontBlockWave` 配置字段；准确战斗语义待确认。 */
  "_dontBlockWave": boolean;
  /** EnemyDuelSummonEnemiesAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null;
  /** EnemyDuelSummonEnemiesAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** EnemyDuelSummonEnemiesAction 的 `randomOffsetBound` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetBound": number;
  /** EnemyDuelSummonEnemiesAction 的 `skipCheckPoint` 配置字段；准确战斗语义待确认。 */
  "_skipCheckPoint": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** EnemyDuelSummonEnemiesAction 的 `stopSummonIfHostDead` 配置字段；准确战斗语义待确认。 */
  "_stopSummonIfHostDead": boolean;
  /** EnemyDuelSummonEnemiesAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** EnemyDuelSummonEnemiesAction 的 `useLocalUnharmfulFlag` 配置字段；准确战斗语义待确认。 */
  "_useLocalUnharmfulFlag": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyDurcarChangeDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyDurcarChangeDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyDurcarChangeDirection, Assembly-CSharp";
  /** EnemyDurcarChangeDirectionAction 的 `character` 配置字段；准确战斗语义待确认。 */
  "_character": string;
  /** EnemyDurcarChangeDirectionAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
  "_endPosOffsetAlongDirection": number;
  /** EnemyDurcarChangeDirectionAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
  "_enemy": string;
  /** EnemyDurcarChangeDirectionAction 的 `setDirectByBB` 配置字段；准确战斗语义待确认。 */
  "_setDirectByBB": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyDurcarCheckOverlapWithHighland, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyDurcarCheckOverlapWithHighlandAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyDurcarCheckOverlapWithHighland, Assembly-CSharp";
  /** EnemyDurcarCheckOverlapWithHighlandAction 的 `ignoreCheckSomeTiles` 配置字段；准确战斗语义待确认。 */
  "_ignoreCheckSomeTiles": boolean;
  /** EnemyDurcarCheckOverlapWithHighlandAction 的 `ignoredAdvancedBuildMask` 配置字段；准确战斗语义待确认。 */
  "_ignoredAdvancedBuildMask": "DEFAULT" | "WOODRD_HOLE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyFallDown, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyFallDownAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyFallDown, Assembly-CSharp";
  /** EnemyFallDownAction 的 `exceptDisappearedEnemy` 配置字段；准确战斗语义待确认。 */
  "_exceptDisappearedEnemy": boolean;
  /** EnemyFallDownAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyForceTracePosition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyForceTracePositionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyForceTracePosition, Assembly-CSharp";
  /** EnemyForceTracePositionAction 的 `buffToTraceTarget` 配置字段；准确战斗语义待确认。 */
  "_buffToTraceTarget": {
                             /** EnemyForceTracePositionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                             "attributes": {
                                                  /** EnemyForceTracePositionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                  "abnormalAntis": null | never[];
                                                  /** EnemyForceTracePositionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                  "abnormalComboImmunes": null | never[];
                                                  /** EnemyForceTracePositionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                  "abnormalCombos": null | never[];
                                                  /** EnemyForceTracePositionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                  "abnormalFlags": null | never[];
                                                  /** EnemyForceTracePositionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                  "abnormalImmunes": null | never[];
                                                  /** EnemyForceTracePositionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                  "attributeModifiers": null | never[];
                                                };
                             /** EnemyForceTracePositionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                             "audioSignal": null;
                             /** EnemyForceTracePositionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                             "blackboard": null | never[];
                             /** EnemyForceTracePositionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                             "buffKey": null | string;
                             /** EnemyForceTracePositionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                             "clearAllStackCntWhenTimeUp": boolean;
                             /** EnemyForceTracePositionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                             "disableOverride": boolean;
                             /** EnemyForceTracePositionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                             "durationKey": null;
                             /** EnemyForceTracePositionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                             "enableInitDirectionFromSource": boolean;
                             /** EnemyForceTracePositionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                             "firstTriggerInterval": number;
                             /** EnemyForceTracePositionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                             "independentCharacterSource": boolean;
                             /** EnemyForceTracePositionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                             "isDamageMissable": boolean;
                             /** EnemyForceTracePositionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                             "isDurableBuff": boolean;
                             /** EnemyForceTracePositionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                             "isFreezable": boolean;
                             /** EnemyForceTracePositionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                             "isLevitatable": boolean;
                             /** EnemyForceTracePositionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                             "isSilenceable": boolean;
                             /** EnemyForceTracePositionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                             "isStunnable": boolean;
                             /** EnemyForceTracePositionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                             "lifeTime": number;
                             /** EnemyForceTracePositionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                             "lifeTimeType": "INFINITY" | "LIMITED";
                             /** EnemyForceTracePositionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                             "loadFromDB": boolean;
                             /** EnemyForceTracePositionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                             "maxStackCnt": number;
                             /** EnemyForceTracePositionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                             "maxValidStackCnt": number;
                             /** 模板处理战斗事件时使用的优先级。 */
                             "onEventPriority": "DEFAULT";
                             /** EnemyForceTracePositionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                             "overrideEffectKey": null | string;
                             /** EnemyForceTracePositionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                             "overrideKey": null;
                             /** EnemyForceTracePositionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                             "overrideOnEventPriority": boolean;
                             /** EnemyForceTracePositionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                             "overrideType": "DEFAULT";
                             /** EnemyForceTracePositionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                             "priority": number;
                             /** EnemyForceTracePositionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                             "priorityBBKeys": null | never[];
                             /** EnemyForceTracePositionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                             "refreshRemainingTimeWhenStackMax": boolean;
                             /** EnemyForceTracePositionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                             "statusResistable": "AUTOMATIC";
                             /** EnemyForceTracePositionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                             "stripBlackboardParamsWithBuffKey": boolean;
                             /** EnemyForceTracePositionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                             "takeSnapshotWhenExtend": boolean;
                             /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                             "templateKey": string;
                             /** EnemyForceTracePositionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                             "triggerCnt": number;
                             /** EnemyForceTracePositionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                             "triggerInterval": number;
                             /** EnemyForceTracePositionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                             "triggerLifeType": "IMMEDIATELY";
                             /** EnemyForceTracePositionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                             "waitFirstTriggerInterval": boolean;
                           };
  /** EnemyForceTracePositionAction 的 `createBuffToTraceTarget` 配置字段；准确战斗语义待确认。 */
  "_createBuffToTraceTarget": boolean;
  /** EnemyForceTracePositionAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
  "_endPosOffsetAlongDirection": number;
  /** EnemyForceTracePositionAction 的 `loadPosFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadPosFromBlackboard": boolean;
  /** EnemyForceTracePositionAction 的 `maxTraceDist` 配置字段；准确战斗语义待确认。 */
  "_maxTraceDist": number;
  /** EnemyForceTracePositionAction 的 `randomOffset` 配置字段；准确战斗语义待确认。 */
  "_randomOffset": boolean;
  /** EnemyForceTracePositionAction 的 `reachOffset` 配置字段；准确战斗语义待确认。 */
  "_reachOffset": {
                       /** EnemyForceTracePositionAction 的 `x` 配置字段；准确战斗语义待确认。 */
                       "x": number;
                       /** EnemyForceTracePositionAction 的 `y` 配置字段；准确战斗语义待确认。 */
                       "y": number;
                     };
  /** EnemyForceTracePositionAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** EnemyForceTracePositionAction 的 `stopTraceWhenNoTarget` 配置字段；准确战斗语义待确认。 */
  "_stopTraceWhenNoTarget": boolean;
  /** EnemyForceTracePositionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** EnemyForceTracePositionAction 的 `traceFarthestTile` 配置字段；准确战斗语义待确认。 */
  "_traceFarthestTile": boolean;
  /** EnemyForceTracePositionAction 的 `useSelectorPosition` 配置字段；准确战斗语义待确认。 */
  "_useSelectorPosition": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyHasValidToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyHasValidTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyHasValidToken, Assembly-CSharp";
  /** EnemyHasValidTokenAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyKillToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyKillTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyKillToken, Assembly-CSharp";
  /** EnemyKillTokenAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionE02 = EnemyChangeRouteToTargetAction | EnemyChangeRouteToTargetUseSelectorAction | EnemyDuelReportCombatAction | EnemyDuelSummonEnemiesAction | EnemyDurcarChangeDirectionAction | EnemyDurcarCheckOverlapWithHighlandAction | EnemyFallDownAction | EnemyForceTracePositionAction | EnemyHasValidTokenAction | EnemyKillTokenAction;
