/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemyByAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemyByAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemyByAbilitySelector, Assembly-CSharp";
  /** SummonEnemyByAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SummonEnemyByAbilitySelectorAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemyByAbilitySelectorAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** SummonEnemyByAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SummonEnemyByAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** SummonEnemyByAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** SummonEnemyByAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** SummonEnemyByAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** SummonEnemyByAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** SummonEnemyByAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** SummonEnemyByAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SummonEnemyByAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** SummonEnemyByAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SummonEnemyByAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** SummonEnemyByAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SummonEnemyByAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SummonEnemyByAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY";
                 /** SummonEnemyByAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SummonEnemyByAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SummonEnemyByAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** SummonEnemyByAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SummonEnemyByAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SummonEnemyByAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SummonEnemyByAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** SummonEnemyByAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SummonEnemyByAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SummonEnemyByAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SummonEnemyByAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SummonEnemyByAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SummonEnemyByAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** SummonEnemyByAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SummonEnemyByAbilitySelectorAction 的 `buffsUseTargetAsSource` 配置字段；准确战斗语义待确认。 */
  "_buffsUseTargetAsSource": never[];
  /** SummonEnemyByAbilitySelectorAction 的 `enemyKeys` 配置字段；准确战斗语义待确认。 */
  "_enemyKeys": Array<string>;
  /** SummonEnemyByAbilitySelectorAction 的 `getEnemyKeysFromBB` 配置字段；准确战斗语义待确认。 */
  "_getEnemyKeysFromBB": null | string;
  /** SummonEnemyByAbilitySelectorAction 的 `listAccessMode` 配置字段；准确战斗语义待确认。 */
  "_listAccessMode": "Loop";
  /** SummonEnemyByAbilitySelectorAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** SummonEnemyByAbilitySelectorAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。 */
  "_noEndPosition": boolean;
  /** SummonEnemyByAbilitySelectorAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonEnemyByAbilitySelectorAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
  "_spawnOffset": number;
  /** SummonEnemyByAbilitySelectorAction 的 `summonCount` 配置字段；准确战斗语义待确认。 */
  "_summonCount": number;
  /** SummonEnemyByAbilitySelectorAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SummonEnemyByAbilitySelectorAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemyByAbilitySelectorAction 的 `useTargetAbilitySelector` 配置字段；准确战斗语义待确认。 */
  "_useTargetAbilitySelector": boolean;
  /** SummonEnemyByAbilitySelectorAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemyToTilesByMainline17, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemyToTilesByMainline17Action {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemyToTilesByMainline17, Assembly-CSharp";
  /** SummonEnemyToTilesByMainline17Action 的 `loadTileCntFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadTileCntFromBlackboard": boolean;
  /** SummonEnemyToTilesByMainline17Action 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** SummonEnemyToTilesByMainline17Action 的 `tileCnt` 配置字段；准确战斗语义待确认。 */
  "_tileCnt": number;
  /** SummonEnemyToTilesByMainline17Action 的 `tileCntKey` 配置字段；准确战斗语义待确认。 */
  "_tileCntKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonEnemyWithRuntimeRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonEnemyWithRuntimeRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonEnemyWithRuntimeRoute, Assembly-CSharp";
  /** SummonEnemyWithRuntimeRouteAction 的 `addBuffsSource` 配置字段；准确战斗语义待确认。 */
  "_addBuffsSource": "BUFF_OWNER" | "SOURCE";
  /** SummonEnemyWithRuntimeRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `avoidHighland` 配置字段；准确战斗语义待确认。 */
  "_avoidHighland": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** SummonEnemyWithRuntimeRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** SummonEnemyWithRuntimeRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** SummonEnemyWithRuntimeRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** SummonEnemyWithRuntimeRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** SummonEnemyWithRuntimeRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** SummonEnemyWithRuntimeRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** SummonEnemyWithRuntimeRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | Array<{
                                                                     /** 属性修改器指向的战斗属性。 */
                                                                     "attributeType": "MOVE_SPEED";
                                                                     /** SummonEnemyWithRuntimeRouteAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                     "fetchBaseValueFromSourceEntity": boolean;
                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                     "formulaItem": string;
                                                                     /** SummonEnemyWithRuntimeRouteAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                     "loadFromBlackboard": boolean;
                                                                     /** 黑板参数的数值槽。 */
                                                                     "value": number;
                                                                   }>;
                                    };
                 /** SummonEnemyWithRuntimeRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** SummonEnemyWithRuntimeRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** SummonEnemyWithRuntimeRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** SummonEnemyWithRuntimeRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null | string;
                 /** SummonEnemyWithRuntimeRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** SummonEnemyWithRuntimeRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** SummonEnemyWithRuntimeRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** SummonEnemyWithRuntimeRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** SummonEnemyWithRuntimeRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** SummonEnemyWithRuntimeRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** SummonEnemyWithRuntimeRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** SummonEnemyWithRuntimeRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** SummonEnemyWithRuntimeRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** SummonEnemyWithRuntimeRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** SummonEnemyWithRuntimeRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** SummonEnemyWithRuntimeRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** SummonEnemyWithRuntimeRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** SummonEnemyWithRuntimeRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** SummonEnemyWithRuntimeRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** SummonEnemyWithRuntimeRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                 /** SummonEnemyWithRuntimeRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** SummonEnemyWithRuntimeRouteAction 的 `changeSpawnCertainPos` 配置字段；准确战斗语义待确认。 */
  "_changeSpawnCertainPos": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": null | string;
  /** SummonEnemyWithRuntimeRouteAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `host` 配置字段；准确战斗语义待确认。 */
  "_host": string;
  /** SummonEnemyWithRuntimeRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY" | "WALK";
  /** SummonEnemyWithRuntimeRouteAction 的 `noEndPosition` 配置字段；准确战斗语义待确认。 */
  "_noEndPosition": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `selectTileInSnapshot` 配置字段；准确战斗语义待确认。 */
  "_selectTileInSnapshot": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "SOURCE" | "TARGET";
  /** SummonEnemyWithRuntimeRouteAction 的 `spawnCertainOffsetX` 配置字段；准确战斗语义待确认。 */
  "_spawnCertainOffsetX": number;
  /** SummonEnemyWithRuntimeRouteAction 的 `spawnCertainOffsetY` 配置字段；准确战斗语义待确认。 */
  "_spawnCertainOffsetY": number;
  /** SummonEnemyWithRuntimeRouteAction 的 `spawnOffset` 配置字段；准确战斗语义待确认。 */
  "_spawnOffset": number;
  /** SummonEnemyWithRuntimeRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MAIN_TARGET" | "SOURCE" | "TARGET";
  /** SummonEnemyWithRuntimeRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `useRandomEnemy` 配置字段；准确战斗语义待确认。 */
  "_useRandomEnemy": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `useSourceEndPosition` 配置字段；准确战斗语义待确认。 */
  "_useSourceEndPosition": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `useSpecialHost` 配置字段；准确战斗语义待确认。 */
  "_useSpecialHost": boolean;
  /** SummonEnemyWithRuntimeRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SummonRandomEnemyWithRuntimeRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SummonRandomEnemyWithRuntimeRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SummonRandomEnemyWithRuntimeRoute, Assembly-CSharp";
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY";
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
  "_noSource": boolean;
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": number;
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `randomEnemys` 配置字段；准确战斗语义待确认。 */
  "_randomEnemys": Array<string>;
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** SummonRandomEnemyWithRuntimeRouteAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesFollowBranchRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SurvivalSummonEnemiesFollowBranchRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesFollowBranchRoute, Assembly-CSharp";
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null | never[];
                                            /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null | never[];
                                            /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null | never[];
                                            /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null | never[];
                                            /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null | never[];
                                            /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null | never[];
                                          };
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": null | string;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null | string;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
  "_overrideEnemyKey": string;
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。 */
  "_setHostUid": boolean;
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。 */
  "_summonAllRoute": boolean;
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SurvivalSummonEnemiesFollowBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesPickRandomBranchRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SurvivalSummonEnemiesPickRandomBranchRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SurvivalSummonEnemiesPickRandomBranchRoute, Assembly-CSharp";
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": {
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": null;
                                            /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": null;
                                            /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": null;
                                            /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": null;
                                            /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": null;
                                            /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": null;
                                          };
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": string;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": null;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "INFINITY";
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `disableBornTweenColor` 配置字段；准确战斗语义待确认。 */
  "_disableBornTweenColor": boolean;
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `managedByScheduler` 配置字段；准确战斗语义待确认。 */
  "_managedByScheduler": boolean;
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `overrideEnemyKey` 配置字段；准确战斗语义待确认。 */
  "_overrideEnemyKey": string;
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `setHostUid` 配置字段；准确战斗语义待确认。 */
  "_setHostUid": boolean;
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `summonAllRoute` 配置字段；准确战斗语义待确认。 */
  "_summonAllRoute": boolean;
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** SurvivalSummonEnemiesPickRandomBranchRouteAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Svash2EmitProjectileFixedDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Svash2EmitProjectileFixedDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Svash2EmitProjectileFixedDirection, Assembly-CSharp";
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": Array<BattleAction>;
  /** Svash2EmitProjectileFixedDirectionAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": Array<{
                    /** Svash2EmitProjectileFixedDirectionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": null;
                                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": null;
                                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": null;
                                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": null;
                                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": null;
                                         /** Svash2EmitProjectileFixedDirectionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": null;
                                       };
                    /** Svash2EmitProjectileFixedDirectionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** Svash2EmitProjectileFixedDirectionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "LIMITED";
                    /** Svash2EmitProjectileFixedDirectionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** Svash2EmitProjectileFixedDirectionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT";
                    /** Svash2EmitProjectileFixedDirectionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** Svash2EmitProjectileFixedDirectionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** Svash2EmitProjectileFixedDirectionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** Svash2EmitProjectileFixedDirectionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY";
                    /** Svash2EmitProjectileFixedDirectionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  }>;
  /** Svash2EmitProjectileFixedDirectionAction 的 `ev` 配置字段；准确战斗语义待确认。 */
  "_ev": string;
  /** Svash2EmitProjectileFixedDirectionAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
  "_filterType": "ALL";
  /** Svash2EmitProjectileFixedDirectionAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
  "_overwriteActions": boolean;
  /** Svash2EmitProjectileFixedDirectionAction 的 `rangeIdProjectileSize` 配置字段；准确战斗语义待确认。 */
  "_rangeIdProjectileSize": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Svash2EmitProjectileFixedDirectionAction 的 `startPositionType` 配置字段；准确战斗语义待确认。 */
  "_startPositionType": "BUFF_OWNER";
  /** Svash2EmitProjectileFixedDirectionAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** Svash2EmitProjectileFixedDirectionAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** Svash2EmitProjectileFixedDirectionAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Svash2LRCardPositionSwap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Svash2LRCardPositionSwapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Svash2LRCardPositionSwap, Assembly-CSharp";
  /** Svash2LRCardPositionSwapAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
  "_countKey": string;
  /** Svash2LRCardPositionSwapAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** Svash2LRCardPositionSwapAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** Svash2LRCardPositionSwapAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** Svash2LRCardPositionSwapAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": null;
                                                          /** Svash2LRCardPositionSwapAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": null;
                                                          /** Svash2LRCardPositionSwapAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": null;
                                                          /** Svash2LRCardPositionSwapAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": null;
                                                          /** Svash2LRCardPositionSwapAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": null;
                                                          /** Svash2LRCardPositionSwapAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": null;
                                                        };
                                   /** Svash2LRCardPositionSwapAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** Svash2LRCardPositionSwapAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": never[];
                                   /** Svash2LRCardPositionSwapAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** Svash2LRCardPositionSwapAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** Svash2LRCardPositionSwapAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** Svash2LRCardPositionSwapAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** Svash2LRCardPositionSwapAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "INFINITY";
                                   /** Svash2LRCardPositionSwapAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** Svash2LRCardPositionSwapAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** Svash2LRCardPositionSwapAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": null;
                                   /** Svash2LRCardPositionSwapAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** Svash2LRCardPositionSwapAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "DEFAULT";
                                   /** Svash2LRCardPositionSwapAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** Svash2LRCardPositionSwapAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": never[];
                                   /** Svash2LRCardPositionSwapAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** Svash2LRCardPositionSwapAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** Svash2LRCardPositionSwapAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** Svash2LRCardPositionSwapAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** Svash2LRCardPositionSwapAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** Svash2LRCardPositionSwapAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** Svash2LRCardPositionSwapAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** Svash2LRCardPositionSwapAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": string;
                    /** Svash2LRCardPositionSwapAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "NONE";
                    /** Svash2LRCardPositionSwapAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "UNTIL_NEXT_SPAWN";
                    /** Svash2LRCardPositionSwapAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** Svash2LRCardPositionSwapAction 的 `emitPredefinedLocationReached` 配置字段；准确战斗语义待确认。 */
  "_emitPredefinedLocationReached": boolean;
  /** Svash2LRCardPositionSwapAction 的 `minCostReduceKey` 配置字段；准确战斗语义待确认。 */
  "_minCostReduceKey": string;
  /** Svash2LRCardPositionSwapAction 的 `rightSelector` 配置字段；准确战斗语义待确认。 */
  "_rightSelector": {
                         /** Svash2LRCardPositionSwapAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                         "categoryMask": "WARRIOR, SNIPER, CASTER";
                         /** Svash2LRCardPositionSwapAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                         "enableOverride": boolean;
                         /** Svash2LRCardPositionSwapAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                         "excludeHiddenByCardState": boolean;
                         /** Svash2LRCardPositionSwapAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                         "excludeMe": boolean;
                         /** Svash2LRCardPositionSwapAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                         "excludeNotInHand": boolean;
                         /** Svash2LRCardPositionSwapAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                         "excludeNotShowInCardList": boolean;
                         /** Svash2LRCardPositionSwapAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                         "filterTag": null;
                         /** Svash2LRCardPositionSwapAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                         "mapTags": never[];
                         /** Svash2LRCardPositionSwapAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                         "onlySelectMe": boolean;
                         /** Svash2LRCardPositionSwapAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                         "subprofessionTag": null;
                       };
  /** Svash2LRCardPositionSwapAction 的 `selector` 配置字段；准确战斗语义待确认。 */
  "_selector": {
                    /** Svash2LRCardPositionSwapAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                    "categoryMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                    /** Svash2LRCardPositionSwapAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                    "enableOverride": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                    "excludeHiddenByCardState": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                    "excludeMe": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                    "excludeNotInHand": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                    "excludeNotShowInCardList": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                    "filterTag": null;
                    /** Svash2LRCardPositionSwapAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                    "mapTags": never[];
                    /** Svash2LRCardPositionSwapAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                    "onlySelectMe": boolean;
                    /** Svash2LRCardPositionSwapAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                    "subprofessionTag": null;
                  };
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Svash2RemoveCardOverrideByCardUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Svash2RemoveCardOverrideByCardUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Svash2RemoveCardOverrideByCardUid, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchDirection, Assembly-CSharp";
  /** SwitchDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** SwitchDirectionAction 的 `downNodes` 配置字段；准确战斗语义待确认。 */
  "_downNodes": Array<BattleAction>;
  /** SwitchDirectionAction 的 `leftNodes` 配置字段；准确战斗语义待确认。 */
  "_leftNodes": Array<BattleAction>;
  /** SwitchDirectionAction 的 `rightNodes` 配置字段；准确战斗语义待确认。 */
  "_rightNodes": Array<BattleAction>;
  /** SwitchDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE";
  /** SwitchDirectionAction 的 `upNodes` 配置字段；准确战斗语义待确认。 */
  "_upNodes": Array<BattleAction>;
  /** SwitchDirectionAction 的 `useCustomDirection` 配置字段；准确战斗语义待确认。 */
  "_useCustomDirection": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS15 = SummonEnemyByAbilitySelectorAction | SummonEnemyToTilesByMainline17Action | SummonEnemyWithRuntimeRouteAction | SummonRandomEnemyWithRuntimeRouteAction | SurvivalSummonEnemiesFollowBranchRouteAction | SurvivalSummonEnemiesPickRandomBranchRouteAction | Svash2EmitProjectileFixedDirectionAction | Svash2LRCardPositionSwapAction | Svash2RemoveCardOverrideByCardUidAction | SwitchDirectionAction;
