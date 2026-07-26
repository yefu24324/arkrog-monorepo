/**
 * buff_template_data 的 H 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleFindNearestCharacterMapPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleFindNearestCharacterMapPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleFindNearestCharacterMapPos, Assembly-CSharp";
  /** HalfIdleFindNearestCharacterMapPosAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** HalfIdleFindNearestCharacterMapPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** HalfIdleFindNearestCharacterMapPosAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** HalfIdleFindNearestCharacterMapPosAction 的 `sourcePosType` 配置字段；准确战斗语义待确认。 */
  "_sourcePosType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleGainExp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleGainExpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleGainExp, Assembly-CSharp";
  /** HalfIdleGainExpAction 的 `gainExpTargetOptions` 配置字段；准确战斗语义待确认。 */
  "_gainExpTargetOptions": {
                                /** HalfIdleGainExpAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                                "abnormalCombo": string;
                                /** HalfIdleGainExpAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                                "abnormalFlag": "STUNNED";
                                /** HalfIdleGainExpAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                                "checkUnitType": boolean;
                                /** HalfIdleGainExpAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                                "containAbnormalFlag": "STUNNED";
                                /** HalfIdleGainExpAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                                "containSomeAbnormalFlags": boolean;
                                /** HalfIdleGainExpAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                                "enableAdvancedOptions": boolean;
                                /** HalfIdleGainExpAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                                "excludeAbnormalFlag": "STUNNED";
                                /** HalfIdleGainExpAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                                "excludeSomeAbnormalFlags": boolean;
                                /** HalfIdleGainExpAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                                "ignoreAllyTargetFree": boolean;
                                /** HalfIdleGainExpAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                                "ignoreHealFree": boolean;
                                /** HalfIdleGainExpAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                                "ignoreTargetFree": boolean;
                                /** HalfIdleGainExpAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                                "ignoreTargetSide": boolean;
                                /** HalfIdleGainExpAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                                "onlyIgnoreSomeOfTargetFreeCase": boolean;
                                /** HalfIdleGainExpAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                                "professionMask": "NONE";
                                /** HalfIdleGainExpAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                                "purposeMask": "NONE";
                                /** HalfIdleGainExpAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                                "targetCategory": "DEFAULT, TRAP_OR_ITEM";
                                /** HalfIdleGainExpAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                                "targetMotion": "ALL";
                                /** HalfIdleGainExpAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                                "targetSide": "ALL";
                                /** HalfIdleGainExpAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                                "unitTypeMask": "NONE";
                              };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** HalfIdleGainExpAction 的 `upgradedBuff` 配置字段；准确战斗语义待确认。 */
  "_upgradedBuff": {
                        /** HalfIdleGainExpAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                        "attributes": {
                                             /** HalfIdleGainExpAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": null;
                                             /** HalfIdleGainExpAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": null;
                                             /** HalfIdleGainExpAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": null;
                                             /** HalfIdleGainExpAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": null;
                                             /** HalfIdleGainExpAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": null;
                                             /** HalfIdleGainExpAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": null;
                                           };
                        /** HalfIdleGainExpAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                        "audioSignal": string;
                        /** HalfIdleGainExpAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                        "blackboard": never[];
                        /** HalfIdleGainExpAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                        "buffKey": string;
                        /** HalfIdleGainExpAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                        "clearAllStackCntWhenTimeUp": boolean;
                        /** HalfIdleGainExpAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                        "disableOverride": boolean;
                        /** HalfIdleGainExpAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                        "durationKey": string;
                        /** HalfIdleGainExpAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                        "enableInitDirectionFromSource": boolean;
                        /** HalfIdleGainExpAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "firstTriggerInterval": number;
                        /** HalfIdleGainExpAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                        "independentCharacterSource": boolean;
                        /** HalfIdleGainExpAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                        "isDamageMissable": boolean;
                        /** HalfIdleGainExpAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                        "isDurableBuff": boolean;
                        /** HalfIdleGainExpAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                        "isFreezable": boolean;
                        /** HalfIdleGainExpAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                        "isLevitatable": boolean;
                        /** HalfIdleGainExpAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                        "isSilenceable": boolean;
                        /** HalfIdleGainExpAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                        "isStunnable": boolean;
                        /** HalfIdleGainExpAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                        "lifeTime": number;
                        /** HalfIdleGainExpAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                        "lifeTimeType": "LIMITED";
                        /** HalfIdleGainExpAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                        "loadFromDB": boolean;
                        /** HalfIdleGainExpAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxStackCnt": number;
                        /** HalfIdleGainExpAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxValidStackCnt": number;
                        /** 模板处理战斗事件时使用的优先级。 */
                        "onEventPriority": "DEFAULT";
                        /** HalfIdleGainExpAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                        "overrideEffectKey": string;
                        /** HalfIdleGainExpAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                        "overrideKey": null;
                        /** HalfIdleGainExpAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                        "overrideOnEventPriority": boolean;
                        /** HalfIdleGainExpAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                        "overrideType": "DEFAULT";
                        /** HalfIdleGainExpAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                        "priority": number;
                        /** HalfIdleGainExpAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                        "priorityBBKeys": never[];
                        /** HalfIdleGainExpAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                        "refreshRemainingTimeWhenStackMax": boolean;
                        /** HalfIdleGainExpAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                        "statusResistable": "AUTOMATIC";
                        /** HalfIdleGainExpAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                        "stripBlackboardParamsWithBuffKey": boolean;
                        /** HalfIdleGainExpAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                        "takeSnapshotWhenExtend": boolean;
                        /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                        "templateKey": string;
                        /** HalfIdleGainExpAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                        "triggerCnt": number;
                        /** HalfIdleGainExpAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                        "triggerInterval": number;
                        /** HalfIdleGainExpAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                        "triggerLifeType": "IMMEDIATELY";
                        /** HalfIdleGainExpAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "waitFirstTriggerInterval": boolean;
                      };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleGiantTrapCheckShouldAdjustHeight, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleGiantTrapCheckShouldAdjustHeightAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleGiantTrapCheckShouldAdjustHeight, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** HalfIdleGiantTrapCheckShouldAdjustHeightAction 的 `targetBuildableType` 配置字段；准确战斗语义待确认。 */
  "_targetBuildableType": "RANGED";
  /** HalfIdleGiantTrapCheckShouldAdjustHeightAction 的 `targetHeightType` 配置字段；准确战斗语义待确认。 */
  "_targetHeightType": "HIGHLAND";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapAdjustWaterColor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleLhkawaTrapAdjustWaterColorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapAdjustWaterColor, Assembly-CSharp";
  /** HalfIdleLhkawaTrapAdjustWaterColorAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** HalfIdleLhkawaTrapAdjustWaterColorAction 的 `isPolluted` 配置字段；准确战斗语义待确认。 */
  "_isPolluted": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapNoticeBorn, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleLhkawaTrapNoticeBornAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleLhkawaTrapNoticeBorn, Assembly-CSharp";
  /** HalfIdleLhkawaTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** HalfIdleLhkawaTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleLhportCheckAbleToSummonShip, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleLhportCheckAbleToSummonShipAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleLhportCheckAbleToSummonShip, Assembly-CSharp";
  /** HalfIdleLhportCheckAbleToSummonShipAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleLhtownTrapNoticeBorn, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleLhtownTrapNoticeBornAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleLhtownTrapNoticeBorn, Assembly-CSharp";
  /** HalfIdleLhtownTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** HalfIdleLhtownTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacity, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleModifyLevelCapacityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacity, Assembly-CSharp";
  /** HalfIdleModifyLevelCapacityAction 的 `isAdd` 配置字段；准确战斗语义待确认。 */
  "_isAdd": boolean;
  /** HalfIdleModifyLevelCapacityAction 的 `levelCapacityKey` 配置字段；准确战斗语义待确认。 */
  "_levelCapacityKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacityWhiteList, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdleModifyLevelCapacityWhiteListAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdleModifyLevelCapacityWhiteList, Assembly-CSharp";
  /** HalfIdleModifyLevelCapacityWhiteListAction 的 `isAdd` 配置字段；准确战斗语义待确认。 */
  "_isAdd": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeBorn, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HalfIdlePolluteTrapNoticeBornAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HalfIdlePolluteTrapNoticeBorn, Assembly-CSharp";
  /** HalfIdlePolluteTrapNoticeBornAction 的 `envSystemKey` 配置字段；准确战斗语义待确认。 */
  "_envSystemKey": string;
  /** HalfIdlePolluteTrapNoticeBornAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionH02 = HalfIdleFindNearestCharacterMapPosAction | HalfIdleGainExpAction | HalfIdleGiantTrapCheckShouldAdjustHeightAction | HalfIdleLhkawaTrapAdjustWaterColorAction | HalfIdleLhkawaTrapNoticeBornAction | HalfIdleLhportCheckAbleToSummonShipAction | HalfIdleLhtownTrapNoticeBornAction | HalfIdleModifyLevelCapacityAction | HalfIdleModifyLevelCapacityWhiteListAction | HalfIdlePolluteTrapNoticeBornAction;
