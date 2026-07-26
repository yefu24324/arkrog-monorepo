/**
 * buff_template_data 的 B 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BattleEventCenterEmitPluginEvt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BattleEventCenterEmitPluginEvtAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BattleEventCenterEmitPluginEvt, Assembly-CSharp";
  /** BattleEventCenterEmitPluginEvtAction 的 `eventId` 配置字段；准确战斗语义待确认。 */
  "_eventId": number;
  /** BattleEventCenterEmitPluginEvtAction 的 `floatVal` 配置字段；准确战斗语义待确认。 */
  "_floatVal": number;
  /** BattleEventCenterEmitPluginEvtAction 的 `intVal` 配置字段；准确战斗语义待确认。 */
  "_intVal": number;
  /** BattleEventCenterEmitPluginEvtAction 的 `strVal` 配置字段；准确战斗语义待确认。 */
  "_strVal": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BlackboardAdd, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BlackboardAddAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BlackboardAdd, Assembly-CSharp";
  /** BlackboardAddAction 的 `addition` 配置字段；准确战斗语义待确认。 */
  "_addition": number;
  /** BlackboardAddAction 的 `additionKey` 配置字段；准确战斗语义待确认。 */
  "_additionKey": null | string;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** BlackboardAddAction 的 `isFloat` 配置字段；准确战斗语义待确认。 */
  "_isFloat": boolean;
  /** BlackboardAddAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
  "_outputKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BlackboardModInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BlackboardModInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BlackboardModInRange, Assembly-CSharp";
  /** BlackboardModInRangeAction 的 `inputKey` 配置字段；准确战斗语义待确认。 */
  "_inputKey": string;
  /** BlackboardModInRangeAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
  "_outputKey": string;
  /** BlackboardModInRangeAction 的 `range` 配置字段；准确战斗语义待确认。 */
  "_range": number;
  /** BlackboardModInRangeAction 的 `rangeKey` 配置字段；准确战斗语义待确认。 */
  "_rangeKey": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BleedingDamageIncreasingReset, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BleedingDamageIncreasingResetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BleedingDamageIncreasingReset, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BleedingDamagePerSec, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BleedingDamagePerSecAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BleedingDamagePerSec, Assembly-CSharp";
  /** BleedingDamagePerSecAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
  "_attackType": "BUFF" | "NORMAL";
  /** BleedingDamagePerSecAction 的 `baseDamageKey` 配置字段；准确战斗语义待确认。 */
  "_baseDamageKey": null | string;
  /** BleedingDamagePerSecAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
  "_damageKey": string;
  /** 本次伤害使用的伤害类型。 */
  "_damageType": "MAGICAL" | "PHYSICAL" | "PURE";
  /** BleedingDamagePerSecAction 的 `durationToIncreaseKey` 配置字段；准确战斗语义待确认。 */
  "_durationToIncreaseKey": string;
  /** BleedingDamagePerSecAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
  "_elementDamageType": "FIRE" | "NONE";
  /** BleedingDamagePerSecAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
  "_ignoreForSp": boolean;
  /** BleedingDamagePerSecAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvDamage": boolean;
  /** BleedingDamagePerSecAction 的 `isIncreasingToCap` 配置字段；准确战斗语义待确认。 */
  "_isIncreasingToCap": boolean;
  /** BleedingDamagePerSecAction 的 `isRatioToMaxHp` 配置字段；准确战斗语义待确认。 */
  "_isRatioToMaxHp": boolean;
  /** BleedingDamagePerSecAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BlinkNode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BlinkNodeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BlinkNode, Assembly-CSharp";
  /** BlinkNodeAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": null | string;
  /** BlinkNodeAction 的 `distanceCustomKey` 配置字段；准确战斗语义待确认。 */
  "_distanceCustomKey": null;
  /** BlinkNodeAction 的 `failIfTargetGridIsRoot` 配置字段；准确战斗语义待确认。 */
  "_failIfTargetGridIsRoot": boolean;
  /** BlinkNodeAction 的 `forceSetDisappear` 配置字段；准确战斗语义待确认。 */
  "_forceSetDisappear": boolean;
  /** BlinkNodeAction 的 `forceToMapPosition` 配置字段；准确战斗语义待确认。 */
  "_forceToMapPosition": boolean;
  /** BlinkNodeAction 的 `newRouteStartPointAsTargetPosition` 配置字段；准确战斗语义待确认。 */
  "_newRouteStartPointAsTargetPosition": boolean;
  /** BlinkNodeAction 的 `skipDisappearCheckpoint` 配置字段；准确战斗语义待确认。 */
  "_skipDisappearCheckpoint": boolean;
  /** BlinkNodeAction 的 `switchState` 配置字段；准确战斗语义待确认。 */
  "_switchState": boolean;
  /** BlinkNodeAction 的 `toEndIfNoCheckpoint` 配置字段；准确战斗语义待确认。 */
  "_toEndIfNoCheckpoint": boolean;
  /** BlinkNodeAction 的 `toMapPosition` 配置字段；准确战斗语义待确认。 */
  "_toMapPosition": boolean;
  /** BlinkNodeAction 的 `toNextCheckpoint` 配置字段；准确战斗语义待确认。 */
  "_toNextCheckpoint": boolean;
  /** BlinkNodeAction 的 `useAnimSpeed` 配置字段；准确战斗语义待确认。 */
  "_useAnimSpeed": boolean;
  /** BlinkNodeAction 的 `useNewRouteBeforeBlink` 配置字段；准确战斗语义待确认。 */
  "_useNewRouteBeforeBlink": boolean;
  /** BlinkNodeAction 的 `useRowAndColAsWorldPosition` 配置字段；准确战斗语义待确认。 */
  "_useRowAndColAsWorldPosition": boolean;
  /** BlinkNodeAction 的 `useRowAndColOnBlackboard` 配置字段；准确战斗语义待确认。 */
  "_useRowAndColOnBlackboard": boolean;
  /** BlinkNodeAction 的 `withoutSwitchToBlinkState` 配置字段；准确战斗语义待确认。 */
  "_withoutSwitchToBlinkState": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BlockDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BlockDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BlockDamage, Assembly-CSharp";
  /** BlockDamageAction 的 `allowNegativeDynamicVar` 配置字段；准确战斗语义待确认。 */
  "_allowNegativeDynamicVar": boolean;
  /** BlockDamageAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** BlockDamageAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "ANY_ATTACK" | "ANY_ATTACK_EXCEPT_ELEMENT" | "MAGICAL" | "NONE" | "PHYSICAL" | "PHYSICAL_AND_MAGICAL";
  /** BlockDamageAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** BlockDamageAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
  "_filterDamageType": boolean;
  /** BlockDamageAction 的 `showDamageNumber` 配置字段；准确战斗语义待确认。 */
  "_showDamageNumber": boolean;
  /** BlockDamageAction 的 `showShieldUI` 配置字段；准确战斗语义待确认。 */
  "_showShieldUI": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** BlockDamageAction 的 `specifyBlockEffect` 配置字段；准确战斗语义待确认。 */
  "_specifyBlockEffect": null | string;
  /** BlockDamageAction 的 `useDynamicVar` 配置字段；准确战斗语义待确认。 */
  "_useDynamicVar": boolean;
  /** BlockDamageAction 的 `useFixedValue` 配置字段；准确战斗语义待确认。 */
  "_useFixedValue": boolean;
  /** BlockDamageAction 的 `useSource` 配置字段；准确战斗语义待确认。 */
  "_useSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BlockElementDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BlockElementDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BlockElementDamage, Assembly-CSharp";
  /** BlockElementDamageAction 的 `shieldBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_shieldBlackboardKey": string;
  /** BlockElementDamageAction 的 `shieldByAnotherSource` 配置字段；准确战斗语义待确认。 */
  "_shieldByAnotherSource": boolean;
  /** BlockElementDamageAction 的 `shieldSource` 配置字段；准确战斗语义待确认。 */
  "_shieldSource": "BUFF_SOURCE" | "TARGET";
  /** BlockElementDamageAction 的 `sourceBuffKey` 配置字段；准确战斗语义待确认。 */
  "_sourceBuffKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BossRushMoveCamera, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BossRushMoveCameraAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BossRushMoveCamera, Assembly-CSharp";
  /** BossRushMoveCameraAction 的 `useAnotherColEnd` 配置字段；准确战斗语义待确认。 */
  "_useAnotherColEnd": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BuffAoeTargetForPepeEquipSandbox, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BuffAoeTargetForPepeEquipSandboxAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BuffAoeTargetForPepeEquipSandbox, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": never[];
                                     /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** BuffAoeTargetForPepeEquipSandboxAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": never[];
                                   };
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "LIMITED";
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "UNIQUE";
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** BuffAoeTargetForPepeEquipSandboxAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** BuffAoeTargetForPepeEquipSandboxAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
  "_filterTag": string;
  /** BuffAoeTargetForPepeEquipSandboxAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
  "_filterType": "DIST_TO_SOURCE_ASC";
  /** BuffAoeTargetForPepeEquipSandboxAction 的 `intervalKey` 配置字段；准确战斗语义待确认。 */
  "_intervalKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ENEMY";
                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionB01 = BattleEventCenterEmitPluginEvtAction | BlackboardAddAction | BlackboardModInRangeAction | BleedingDamageIncreasingResetAction | BleedingDamagePerSecAction | BlinkNodeAction | BlockDamageAction | BlockElementDamageAction | BossRushMoveCameraAction | BuffAoeTargetForPepeEquipSandboxAction;
