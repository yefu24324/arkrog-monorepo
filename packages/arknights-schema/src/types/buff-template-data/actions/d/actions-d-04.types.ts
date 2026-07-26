/**
 * buff_template_data 的 D 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DurBusAbilityCheckPassengers, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DurBusAbilityCheckPassengersAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DurBusAbilityCheckPassengers, Assembly-CSharp";
  /** DurBusAbilityCheckPassengersAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** DurBusAbilityCheckPassengersAction 的 `markCurrentPassengers` 配置字段；准确战斗语义待确认。 */
  "_markCurrentPassengers": boolean;
  /** DurBusAbilityCheckPassengersAction 的 `searchPassengersStatus` 配置字段；准确战斗语义待确认。 */
  "_searchPassengersStatus": boolean;
  /** DurBusAbilityCheckPassengersAction 的 `setSearchPassengersStatus` 配置字段；准确战斗语义待确认。 */
  "_setSearchPassengersStatus": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DurBusAbilityReleasePassenger, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DurBusAbilityReleasePassengerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DurBusAbilityReleasePassenger, Assembly-CSharp";
  /** DurBusAbilityReleasePassengerAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** DurBusAbilityReleasePassengerAction 的 `releaseLastOnly` 配置字段；准确战斗语义待确认。 */
  "_releaseLastOnly": boolean;
  /** DurBusAbilityReleasePassengerAction 的 `releaseMarkedOnly` 配置字段；准确战斗语义待确认。 */
  "_releaseMarkedOnly": boolean;
  /** DurBusAbilityReleasePassengerAction 的 `releaseOnProjectileCurrentPos` 配置字段；准确战斗语义待确认。 */
  "_releaseOnProjectileCurrentPos": boolean;
  /** DurBusAbilityReleasePassengerAction 的 `releaseOnProjectileTracePos` 配置字段；准确战斗语义待确认。 */
  "_releaseOnProjectileTracePos": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DynamicChangeUnitShadow, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DynamicChangeUnitShadowAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DynamicChangeUnitShadow, Assembly-CSharp";
  /** DynamicChangeUnitShadowAction 的 `enableShadow` 配置字段；准确战斗语义待确认。 */
  "_enableShadow": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DywqgsCheckChessSiege, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DywqgsCheckChessSiegeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DywqgsCheckChessSiege, Assembly-CSharp";
  /** DywqgsCheckChessSiegeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** DywqgsCheckChessSiegeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** DywqgsCheckChessSiegeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": never[];
                                      /** DywqgsCheckChessSiegeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": never[];
                                      /** DywqgsCheckChessSiegeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": never[];
                                      /** DywqgsCheckChessSiegeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": Array<string>;
                                      /** DywqgsCheckChessSiegeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": never[];
                                      /** DywqgsCheckChessSiegeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": never[];
                                    };
                 /** DywqgsCheckChessSiegeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** DywqgsCheckChessSiegeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** DywqgsCheckChessSiegeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** DywqgsCheckChessSiegeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null;
                 /** DywqgsCheckChessSiegeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** DywqgsCheckChessSiegeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** DywqgsCheckChessSiegeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "LIMITED";
                 /** DywqgsCheckChessSiegeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** DywqgsCheckChessSiegeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** DywqgsCheckChessSiegeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": string;
                 /** DywqgsCheckChessSiegeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** DywqgsCheckChessSiegeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "EXTEND";
                 /** DywqgsCheckChessSiegeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** DywqgsCheckChessSiegeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** DywqgsCheckChessSiegeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** DywqgsCheckChessSiegeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** DywqgsCheckChessSiegeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** DywqgsCheckChessSiegeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** DywqgsCheckChessSiegeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** DywqgsCheckChessSiegeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** DywqgsCheckChessSiegeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** DywqgsCheckChessSiegeAction 的 `flagBuff` 配置字段；准确战斗语义待确认。 */
  "_flagBuff": {
                    /** DywqgsCheckChessSiegeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** DywqgsCheckChessSiegeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": never[];
                                         /** DywqgsCheckChessSiegeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": never[];
                                         /** DywqgsCheckChessSiegeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": never[];
                                         /** DywqgsCheckChessSiegeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": Array<string>;
                                         /** DywqgsCheckChessSiegeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": never[];
                                         /** DywqgsCheckChessSiegeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": never[];
                                       };
                    /** DywqgsCheckChessSiegeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** DywqgsCheckChessSiegeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** DywqgsCheckChessSiegeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** DywqgsCheckChessSiegeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": string;
                    /** DywqgsCheckChessSiegeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** DywqgsCheckChessSiegeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** DywqgsCheckChessSiegeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "LIMITED";
                    /** DywqgsCheckChessSiegeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** DywqgsCheckChessSiegeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** DywqgsCheckChessSiegeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": string;
                    /** DywqgsCheckChessSiegeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** DywqgsCheckChessSiegeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "EXTEND";
                    /** DywqgsCheckChessSiegeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** DywqgsCheckChessSiegeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** DywqgsCheckChessSiegeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** DywqgsCheckChessSiegeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** DywqgsCheckChessSiegeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** DywqgsCheckChessSiegeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** DywqgsCheckChessSiegeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** DywqgsCheckChessSiegeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY";
                    /** DywqgsCheckChessSiegeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** DywqgsCheckChessSiegeAction 的 `options` 配置字段；准确战斗语义待确认。 */
  "_options": {
                   /** DywqgsCheckChessSiegeAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMask": "NONE";
                   /** DywqgsCheckChessSiegeAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMaskExcept": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "allowAllAdvancedBuildableMask": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                   "allowNoneBuildableType": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                   "allowNonePassableMask": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "allowedTileBlackboardKey": null;
                   /** DywqgsCheckChessSiegeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                   "buildableType": "ALL";
                   /** DywqgsCheckChessSiegeAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                   "checkBuildableOrPassable": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                   "checkExtraBuildableCheckers": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                   "checkHeightType": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                   "checkTileHidden": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                   "checkTileMode": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                   "checkTileMoveCost": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                   "checkTileTypes": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                   "exceptTileTypes": boolean;
                   /** DywqgsCheckChessSiegeAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "excludeTileBlackboardKey": null;
                   /** DywqgsCheckChessSiegeAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                   "heightType": "LOWLAND";
                   /** DywqgsCheckChessSiegeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                   "modeIndex": number;
                   /** DywqgsCheckChessSiegeAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                   "moveCostCompareType": "LT";
                   /** DywqgsCheckChessSiegeAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                   "moveCostThreshold": number;
                   /** DywqgsCheckChessSiegeAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                   "passableMask": "ALL";
                   /** DywqgsCheckChessSiegeAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                   "tileTypesMask": "NONE";
                 };
  /** DywqgsCheckChessSiegeAction 的 `siegedAudioSignal` 配置字段；准确战斗语义待确认。 */
  "_siegedAudioSignal": string;
  /** DywqgsCheckChessSiegeAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** DywqgsCheckChessSiegeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** DywqgsCheckChessSiegeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** DywqgsCheckChessSiegeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "CAMOUFLAGE";
                         /** DywqgsCheckChessSiegeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** DywqgsCheckChessSiegeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** DywqgsCheckChessSiegeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** DywqgsCheckChessSiegeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER";
                         /** DywqgsCheckChessSiegeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** DywqgsCheckChessSiegeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT, TRAP_OR_ITEM";
                         /** DywqgsCheckChessSiegeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** DywqgsCheckChessSiegeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** DywqgsCheckChessSiegeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+DywqgsSpawnTokenOnExceptCharacterSurroundedTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+DywqgsSpawnTokenOnExceptCharacterSurroundedTiles, Assembly-CSharp";
  /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `options` 配置字段；准确战斗语义待确认。 */
  "_options": {
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `advancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMask": "NONE";
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `advancedBuildableMaskExcept` 配置字段；准确战斗语义待确认。 */
                   "advancedBuildableMaskExcept": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowAllAdvancedBuildableMask` 配置字段；准确战斗语义待确认。 */
                   "allowAllAdvancedBuildableMask": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowNoneBuildableType` 配置字段；准确战斗语义待确认。 */
                   "allowNoneBuildableType": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowNonePassableMask` 配置字段；准确战斗语义待确认。 */
                   "allowNonePassableMask": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `allowedTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "allowedTileBlackboardKey": null;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
                   "buildableType": "ALL";
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkBuildableOrPassable` 配置字段；准确战斗语义待确认。 */
                   "checkBuildableOrPassable": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkExtraBuildableCheckers` 配置字段；准确战斗语义待确认。 */
                   "checkExtraBuildableCheckers": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkHeightType` 配置字段；准确战斗语义待确认。 */
                   "checkHeightType": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileHidden` 配置字段；准确战斗语义待确认。 */
                   "checkTileHidden": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileMode` 配置字段；准确战斗语义待确认。 */
                   "checkTileMode": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileMoveCost` 配置字段；准确战斗语义待确认。 */
                   "checkTileMoveCost": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `checkTileTypes` 配置字段；准确战斗语义待确认。 */
                   "checkTileTypes": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `exceptTileTypes` 配置字段；准确战斗语义待确认。 */
                   "exceptTileTypes": boolean;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `excludeTileBlackboardKey` 配置字段；准确战斗语义待确认。 */
                   "excludeTileBlackboardKey": null;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
                   "heightType": "LOWLAND";
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
                   "modeIndex": number;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `moveCostCompareType` 配置字段；准确战斗语义待确认。 */
                   "moveCostCompareType": "LT";
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `moveCostThreshold` 配置字段；准确战斗语义待确认。 */
                   "moveCostThreshold": number;
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `passableMask` 配置字段；准确战斗语义待确认。 */
                   "passableMask": "NONE";
                   /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tileTypesMask` 配置字段；准确战斗语义待确认。 */
                   "tileTypesMask": "NONE";
                 };
  /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `spawnCnt` 配置字段；准确战斗语义待确认。 */
  "_spawnCnt": number;
  /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `spawnOnRandomTiles` 配置字段；准确战斗语义待确认。 */
  "_spawnOnRandomTiles": boolean;
  /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tokenToSpawn` 配置字段；准确战斗语义待确认。 */
  "_tokenToSpawn": {
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `inst` 配置字段；准确战斗语义待确认。 */
                        "inst": {
                                       /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `characterKey` 配置字段；准确战斗语义待确认。 */
                                       "characterKey": string;
                                       /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `favorPoint` 配置字段；准确战斗语义待确认。 */
                                       "favorPoint": number;
                                       /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `level` 配置字段；准确战斗语义待确认。 */
                                       "level": number;
                                       /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `phase` 配置字段；准确战斗语义待确认。 */
                                       "phase": "PHASE_0";
                                       /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `potentialRank` 配置字段；准确战斗语义待确认。 */
                                       "potentialRank": number;
                                     };
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `mainSkillLvl` 配置字段；准确战斗语义待确认。 */
                        "mainSkillLvl": number;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `masterInfos` 配置字段；准确战斗语义待确认。 */
                        "masterInfos": null;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `overrideSkillBlackboard` 配置字段；准确战斗语义待确认。 */
                        "overrideSkillBlackboard": null;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `overrideTalents` 配置字段；准确战斗语义待确认。 */
                        "overrideTalents": null;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `showSpIllust` 配置字段；准确战斗语义待确认。 */
                        "showSpIllust": boolean;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `skillIndex` 配置字段；准确战斗语义待确认。 */
                        "skillIndex": number;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `skinId` 配置字段；准确战斗语义待确认。 */
                        "skinId": null;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `tmplId` 配置字段；准确战斗语义待确认。 */
                        "tmplId": null;
                        /** DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction 的 `uniEquipIds` 配置字段；准确战斗语义待确认。 */
                        "uniEquipIds": never[];
                      };
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionD04 = DurBusAbilityCheckPassengersAction | DurBusAbilityReleasePassengerAction | DynamicChangeUnitShadowAction | DywqgsCheckChessSiegeAction | DywqgsSpawnTokenOnExceptCharacterSurroundedTilesAction;
