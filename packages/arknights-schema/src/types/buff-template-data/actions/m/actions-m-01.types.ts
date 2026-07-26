/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main15FilterPrtsLastSubAction, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main15FilterPrtsLastSubActionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main15FilterPrtsLastSubAction, Assembly-CSharp";
  /** Main15FilterPrtsLastSubActionAction 的 `actionType` 配置字段；准确战斗语义待确认。 */
  "_actionType": "DRAG" | "FOLLOW_BOSS" | "MOVE_TO_CREATE_BUFF" | "MOVE_TO_DRAG" | "MOVE_TO_ORIGIN";
  /** Main15FilterPrtsLastSubActionAction 的 `filterActionInstead` 配置字段；准确战斗语义待确认。 */
  "_filterActionInstead": boolean;
  /** Main15FilterPrtsLastSubActionAction 的 `mainActionType` 配置字段；准确战斗语义待确认。 */
  "_mainActionType": "MOVE_AND_SPAWNENEMY";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main15ForceSetBattleSpeedLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main15ForceSetBattleSpeedLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main15ForceSetBattleSpeedLevel, Assembly-CSharp";
  /** Main15ForceSetBattleSpeedLevelAction 的 `enable` 配置字段；准确战斗语义待确认。 */
  "_enable": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main15InsertPrtsAction, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main15InsertPrtsActionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main15InsertPrtsAction, Assembly-CSharp";
  /** Main15InsertPrtsActionAction 的 `actionType` 配置字段；准确战斗语义待确认。 */
  "_actionType": "MOVE_AND_CREATEBUFF" | "MOVE_AND_DRAG_SOURCE" | "MOVE_AND_SPAWNENEMY";
  /** Main15InsertPrtsActionAction 的 `buffData` 配置字段；准确战斗语义待确认。 */
  "_buffData": null | {
                    /** Main15InsertPrtsActionAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                    "attributes": {
                                         /** Main15InsertPrtsActionAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": never[];
                                         /** Main15InsertPrtsActionAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": never[];
                                         /** Main15InsertPrtsActionAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": never[];
                                         /** Main15InsertPrtsActionAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": never[];
                                         /** Main15InsertPrtsActionAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": never[];
                                         /** Main15InsertPrtsActionAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": never[];
                                       };
                    /** Main15InsertPrtsActionAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                    "audioSignal": null;
                    /** Main15InsertPrtsActionAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                    "blackboard": never[];
                    /** Main15InsertPrtsActionAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                    "buffKey": string;
                    /** Main15InsertPrtsActionAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                    "clearAllStackCntWhenTimeUp": boolean;
                    /** Main15InsertPrtsActionAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                    "disableOverride": boolean;
                    /** Main15InsertPrtsActionAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                    "durationKey": null | string;
                    /** Main15InsertPrtsActionAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                    "enableInitDirectionFromSource": boolean;
                    /** Main15InsertPrtsActionAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "firstTriggerInterval": number;
                    /** Main15InsertPrtsActionAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                    "independentCharacterSource": boolean;
                    /** Main15InsertPrtsActionAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                    "isDamageMissable": boolean;
                    /** Main15InsertPrtsActionAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                    "isDurableBuff": boolean;
                    /** Main15InsertPrtsActionAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                    "isFreezable": boolean;
                    /** Main15InsertPrtsActionAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                    "isLevitatable": boolean;
                    /** Main15InsertPrtsActionAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                    "isSilenceable": boolean;
                    /** Main15InsertPrtsActionAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                    "isStunnable": boolean;
                    /** Main15InsertPrtsActionAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                    "lifeTime": number;
                    /** Main15InsertPrtsActionAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                    "lifeTimeType": "IMMEDIATELY" | "INFINITY";
                    /** Main15InsertPrtsActionAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                    "loadFromDB": boolean;
                    /** Main15InsertPrtsActionAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxStackCnt": number;
                    /** Main15InsertPrtsActionAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                    "maxValidStackCnt": number;
                    /** 模板处理战斗事件时使用的优先级。 */
                    "onEventPriority": "DEFAULT";
                    /** Main15InsertPrtsActionAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                    "overrideEffectKey": null;
                    /** Main15InsertPrtsActionAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                    "overrideKey": null;
                    /** Main15InsertPrtsActionAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                    "overrideOnEventPriority": boolean;
                    /** Main15InsertPrtsActionAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                    "overrideType": "DEFAULT";
                    /** Main15InsertPrtsActionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                    "priority": number;
                    /** Main15InsertPrtsActionAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                    "priorityBBKeys": never[];
                    /** Main15InsertPrtsActionAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                    "refreshRemainingTimeWhenStackMax": boolean;
                    /** Main15InsertPrtsActionAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                    "statusResistable": "AUTOMATIC";
                    /** Main15InsertPrtsActionAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                    "stripBlackboardParamsWithBuffKey": boolean;
                    /** Main15InsertPrtsActionAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                    "takeSnapshotWhenExtend": boolean;
                    /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                    "templateKey": string;
                    /** Main15InsertPrtsActionAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                    "triggerCnt": number;
                    /** Main15InsertPrtsActionAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                    "triggerInterval": number;
                    /** Main15InsertPrtsActionAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                    "triggerLifeType": "IMMEDIATELY";
                    /** Main15InsertPrtsActionAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                    "waitFirstTriggerInterval": boolean;
                  };
  /** Main15InsertPrtsActionAction 的 `chooseMostCharSurroud` 配置字段；准确战斗语义待确认。 */
  "_chooseMostCharSurroud": boolean;
  /** Main15InsertPrtsActionAction 的 `chooseMostEnemySurroud` 配置字段；准确战斗语义待确认。 */
  "_chooseMostEnemySurroud": boolean;
  /** Main15InsertPrtsActionAction 的 `chooseSource` 配置字段；准确战斗语义待确认。 */
  "_chooseSource": boolean;
  /** Main15InsertPrtsActionAction 的 `enemyKeyFly` 配置字段；准确战斗语义待确认。 */
  "_enemyKeyFly": null | string;
  /** Main15InsertPrtsActionAction 的 `enemyKeyHL` 配置字段；准确战斗语义待确认。 */
  "_enemyKeyHL": null | string;
  /** Main15InsertPrtsActionAction 的 `enemyKeyLL` 配置字段；准确战斗语义待确认。 */
  "_enemyKeyLL": null | string;
  /** Main15InsertPrtsActionAction 的 `priority` 配置字段；准确战斗语义待确认。 */
  "_priority": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main15SkipPrtsAction, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main15SkipPrtsActionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main15SkipPrtsAction, Assembly-CSharp";
  /** Main15SkipPrtsActionAction 的 `actionType` 配置字段；准确战斗语义待确认。 */
  "_actionType": "MOVE_AND_DRAG_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main15TryNextPrtsAction, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main15TryNextPrtsActionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main15TryNextPrtsAction, Assembly-CSharp";
  /** Main15TryNextPrtsActionAction 的 `doNextWhenSuccess` 配置字段；准确战斗语义待确认。 */
  "_doNextWhenSuccess": boolean;
  /** Main15TryNextPrtsActionAction 的 `forceNext` 配置字段；准确战斗语义待确认。 */
  "_forceNext": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main16ChangeTileShadowViaRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main16ChangeTileShadowViaRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main16ChangeTileShadowViaRange, Assembly-CSharp";
  /** Main16ChangeTileShadowViaRangeAction 的 `beginPosition` 配置字段；准确战斗语义待确认。 */
  "_beginPosition": {
                         /** Main16ChangeTileShadowViaRangeAction 的 `col` 配置字段；准确战斗语义待确认。 */
                         "col": number;
                         /** Main16ChangeTileShadowViaRangeAction 的 `row` 配置字段；准确战斗语义待确认。 */
                         "row": number;
                       };
  /** Main16ChangeTileShadowViaRangeAction 的 `centerPosKey` 配置字段；准确战斗语义待确认。 */
  "_centerPosKey": string;
  /** Main16ChangeTileShadowViaRangeAction 的 `changeTileShadowState` 配置字段；准确战斗语义待确认。 */
  "_changeTileShadowState": boolean;
  /** Main16ChangeTileShadowViaRangeAction 的 `endPosition` 配置字段；准确战斗语义待确认。 */
  "_endPosition": {
                       /** Main16ChangeTileShadowViaRangeAction 的 `col` 配置字段；准确战斗语义待确认。 */
                       "col": number;
                       /** Main16ChangeTileShadowViaRangeAction 的 `row` 配置字段；准确战斗语义待确认。 */
                       "row": number;
                     };
  /** Main16ChangeTileShadowViaRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** Main16ChangeTileShadowViaRangeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** Main16ChangeTileShadowViaRangeAction 的 `temporaryEscapeShadowState` 配置字段；准确战斗语义待确认。 */
  "_temporaryEscapeShadowState": boolean;
  /** Main16ChangeTileShadowViaRangeAction 的 `toShadow` 配置字段；准确战斗语义待确认。 */
  "_toShadow": boolean;
  /** Main16ChangeTileShadowViaRangeAction 的 `useArea` 配置字段；准确战斗语义待确认。 */
  "_useArea": boolean;
  /** Main16ChangeTileShadowViaRangeAction 的 `useBbPosAsCenterPos` 配置字段；准确战斗语义待确认。 */
  "_useBbPosAsCenterPos": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Main16CheckTargetInShadowStateTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Main16CheckTargetInShadowStateTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Main16CheckTargetInShadowStateTile, Assembly-CSharp";
  /** Main16CheckTargetInShadowStateTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Mainline14InformLrdeadDeath, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Mainline14InformLrdeadDeathAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Mainline14InformLrdeadDeath, Assembly-CSharp";
  /** Mainline14InformLrdeadDeathAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
  "_evnSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Mainline14TriggerSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Mainline14TriggerSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Mainline14TriggerSkill, Assembly-CSharp";
  /** Mainline14TriggerSkillAction 的 `evnSysKey` 配置字段；准确战斗语义待确认。 */
  "_evnSysKey": string;
  /** Mainline14TriggerSkillAction 的 `isTriggeredByBoss` 配置字段；准确战斗语义待确认。 */
  "_isTriggeredByBoss": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Mainline17CreateBossClickCounterButton, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Mainline17CreateBossClickCounterButtonAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Mainline17CreateBossClickCounterButton, Assembly-CSharp";
  /** Mainline17CreateBossClickCounterButtonAction 的 `bossType` 配置字段；准确战斗语义待确认。 */
  "_bossType": "BUFF_OWNER";
  /** Mainline17CreateBossClickCounterButtonAction 的 `duration` 配置字段；准确战斗语义待确认。 */
  "_duration": number;
  /** Mainline17CreateBossClickCounterButtonAction 的 `failedBuffKey` 配置字段；准确战斗语义待确认。 */
  "_failedBuffKey": string;
  /** Mainline17CreateBossClickCounterButtonAction 的 `mountPointType` 配置字段；准确战斗语义待确认。 */
  "_mountPointType": "HEAD";
  /** Mainline17CreateBossClickCounterButtonAction 的 `playEffect` 配置字段；准确战斗语义待确认。 */
  "_playEffect": boolean;
  /** Mainline17CreateBossClickCounterButtonAction 的 `requiredClickCount` 配置字段；准确战斗语义待确认。 */
  "_requiredClickCount": number;
  /** Mainline17CreateBossClickCounterButtonAction 的 `successBuffKey` 配置字段；准确战斗语义待确认。 */
  "_successBuffKey": string;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM01 = Main15FilterPrtsLastSubActionAction | Main15ForceSetBattleSpeedLevelAction | Main15InsertPrtsActionAction | Main15SkipPrtsActionAction | Main15TryNextPrtsActionAction | Main16ChangeTileShadowViaRangeAction | Main16CheckTargetInShadowStateTileAction | Mainline14InformLrdeadDeathAction | Mainline14TriggerSkillAction | Mainline17CreateBossClickCounterButtonAction;
