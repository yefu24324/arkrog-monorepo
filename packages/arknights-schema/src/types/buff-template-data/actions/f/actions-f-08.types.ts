/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishCardBuffByCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishCardBuffByCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishCardBuffByCard, Assembly-CSharp";
  /** FinishCardBuffByCardAction 的 `exceptOwner` 配置字段；准确战斗语义待确认。 */
  "_exceptOwner": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishCardBuffByKeyInAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishCardBuffByKeyInAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishCardBuffByKeyInAbilityBlackboard, Assembly-CSharp";
  /** FinishCardBuffByKeyInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** FinishCardBuffByKeyInAbilityBlackboardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** FinishCardBuffByKeyInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
  "_infoType": "UNIQUE_ID";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishCardBuffsByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishCardBuffsByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishCardBuffsByKey, Assembly-CSharp";
  /** FinishCardBuffsByKeyAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** FinishCardBuffsByKeyAction 的 `findAllCard` 配置字段；准确战斗语义待确认。 */
  "_findAllCard": boolean;
  /** FinishCardBuffsByKeyAction 的 `ignoreOwner` 配置字段；准确战斗语义待确认。 */
  "_ignoreOwner": boolean;
  /** FinishCardBuffsByKeyAction 的 `onlyOwner` 配置字段；准确战斗语义待确认。 */
  "_onlyOwner": boolean;
  /** FinishCardBuffsByKeyAction 的 `useUid` 配置字段；准确战斗语义待确认。 */
  "_useUid": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishCurrentWave, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishCurrentWaveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishCurrentWave, Assembly-CSharp";
  /** FinishCurrentWaveAction 的 `finishAndSkip` 配置字段；准确战斗语义待确认。 */
  "_finishAndSkip": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** FinishCurrentWaveAction 的 `trackAllManagedEnemiesAtNextWave` 配置字段；准确战斗语义待确认。 */
  "_trackAllManagedEnemiesAtNextWave": boolean;
  /** FinishCurrentWaveAction 的 `trackSourceAtNextWave` 配置字段；准确战斗语义待确认。 */
  "_trackSourceAtNextWave": boolean;
  /** FinishCurrentWaveAction 的 `trackSourceAtWaveDelta` 配置字段；准确战斗语义待确认。 */
  "_trackSourceAtWaveDelta": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishDeckBuffByCardUIDAndKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishDeckBuffByCardUIDAndKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishDeckBuffByCardUIDAndKey, Assembly-CSharp";
  /** FinishDeckBuffByCardUIDAndKeyAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** FinishDeckBuffByCardUIDAndKeyAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": null | {
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": null;
                                                          /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": null;
                                                          /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": null;
                                                          /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": null;
                                                          /** FinishDeckBuffByCardUIDAndKeyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": null;
                                                          /** FinishDeckBuffByCardUIDAndKeyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": null;
                                                        };
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": null | never[];
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": null;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "LIMITED";
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": null;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "DEFAULT";
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": null | never[];
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** FinishDeckBuffByCardUIDAndKeyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": null;
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "NONE";
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "ALL_THE_TIME";
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** FinishDeckBuffByCardUIDAndKeyAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** FinishDeckBuffByCardUIDAndKeyAction 的 `deckBuffKey` 配置字段；准确战斗语义待确认。 */
  "_deckBuffKey": string;
  /** FinishDeckBuffByCardUIDAndKeyAction 的 `readUIDFromInt` 配置字段；准确战斗语义待确认。 */
  "_readUIDFromInt": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishDeckBuffByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishDeckBuffByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishDeckBuffByKey, Assembly-CSharp";
  /** FinishDeckBuffByKeyAction 的 `deckBuffKey` 配置字段；准确战斗语义待确认。 */
  "_deckBuffKey": string;
  /** FinishDeckBuffByKeyAction 的 `removeFromAllCard` 配置字段；准确战斗语义待确认。 */
  "_removeFromAllCard": boolean;
  /** FinishDeckBuffByKeyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishDerivedBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishDerivedBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishDerivedBuff, Assembly-CSharp";
  /** FinishDerivedBuffAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishDerivedBuffById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishDerivedBuffByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishDerivedBuffById, Assembly-CSharp";
  /** FinishDerivedBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishDerivedBuffByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishDerivedBuffByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishGame, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishGameAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishGame, Assembly-CSharp";
  /** FinishGameAction 的 `gameResult` 配置字段；准确战斗语义待确认。 */
  "_gameResult": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishHostBuffsById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishHostBuffsByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishHostBuffsById, Assembly-CSharp";
  /** FinishHostBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishHostBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishHostBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FinishHostBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF08 = FinishCardBuffByCardAction | FinishCardBuffByKeyInAbilityBlackboardAction | FinishCardBuffsByKeyAction | FinishCurrentWaveAction | FinishDeckBuffByCardUIDAndKeyAction | FinishDeckBuffByKeyAction | FinishDerivedBuffAction | FinishDerivedBuffByIdAction | FinishGameAction | FinishHostBuffsByIdAction;
