/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffToMyToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffToMyTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffToMyToken, Assembly-CSharp";
  /** CreateCardBuffToMyTokenAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null | string;
  /** CreateCardBuffToMyTokenAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffToMyTokenAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffToMyTokenAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffToMyTokenAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "HOLD_BY_BUFF" | "IMMEDIATELY" | "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffToMyTokenAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffWithDeckSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffWithDeckSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffWithDeckSelector, Assembly-CSharp";
  /** CreateCardBuffWithDeckSelectorAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** CreateCardBuffWithDeckSelectorAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
  "_deckSelector": {
                        /** CreateCardBuffWithDeckSelectorAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                        "categoryMask": "TANK, SUPPORT";
                        /** CreateCardBuffWithDeckSelectorAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                        "enableOverride": boolean;
                        /** CreateCardBuffWithDeckSelectorAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                        "excludeHiddenByCardState": boolean;
                        /** CreateCardBuffWithDeckSelectorAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                        "excludeMe": boolean;
                        /** CreateCardBuffWithDeckSelectorAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                        "excludeNotInHand": boolean;
                        /** CreateCardBuffWithDeckSelectorAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                        "excludeNotShowInCardList": boolean;
                        /** CreateCardBuffWithDeckSelectorAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                        "filterTag": null;
                        /** CreateCardBuffWithDeckSelectorAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                        "mapTags": never[];
                        /** CreateCardBuffWithDeckSelectorAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                        "onlySelectMe": boolean;
                        /** CreateCardBuffWithDeckSelectorAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                        "subprofessionTag": null;
                      };
  /** CreateCardBuffWithDeckSelectorAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffWithDeckSelectorAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffWithDeckSelectorAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffWithDeckSelectorAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffWithDeckSelectorAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** CreateCardBuffWithDeckSelectorAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardFilterByProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardFilterByProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardFilterByProfession, Assembly-CSharp";
  /** CreateCardFilterByProfessionAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardFilterByProfessionAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardFilterByProfessionAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardFilterByProfessionAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardFilterByProfessionAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "HOLD_BY_BUFF" | "IMMEDIATELY" | "UNTIL_NEXT_SPAWN" | "UNTIL_NEXT_SPAWN_SYNC_WITH_BUFF";
  /** CreateCardFilterByProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
  "_profession": "SNIPER" | "WARRIOR" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, TRAP, PIONEER";
  /** CreateCardFilterByProfessionAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateDeckBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateDeckBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateDeckBuff, Assembly-CSharp";
  /** CreateDeckBuffAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** CreateDeckBuffAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** CreateDeckBuffAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** CreateDeckBuffAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** CreateDeckBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** CreateDeckBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": null | never[];
                                                          /** CreateDeckBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": null | never[];
                                                          /** CreateDeckBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": null | never[];
                                                          /** CreateDeckBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": null | never[];
                                                          /** CreateDeckBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": null | never[];
                                                          /** CreateDeckBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": null | Array<{
                                                                                           /** 属性修改器指向的战斗属性。 */
                                                                                           "attributeType": "MAX_DEPLOY_COUNT";
                                                                                           /** CreateDeckBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                           "formulaItem": string;
                                                                                           /** CreateDeckBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                           "loadFromBlackboard": boolean;
                                                                                           /** 黑板参数的数值槽。 */
                                                                                           "value": number;
                                                                                         }>;
                                                        };
                                   /** CreateDeckBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** CreateDeckBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": null | never[];
                                   /** CreateDeckBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": null | string;
                                   /** CreateDeckBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** CreateDeckBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** CreateDeckBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** CreateDeckBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** CreateDeckBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** CreateDeckBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** CreateDeckBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** CreateDeckBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** CreateDeckBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** CreateDeckBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** CreateDeckBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** CreateDeckBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** CreateDeckBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** CreateDeckBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                                   /** CreateDeckBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** CreateDeckBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** CreateDeckBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** CreateDeckBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": null;
                                   /** CreateDeckBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** CreateDeckBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** CreateDeckBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "DEFAULT";
                                   /** CreateDeckBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** CreateDeckBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": null | never[];
                                   /** CreateDeckBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** CreateDeckBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** CreateDeckBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** CreateDeckBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** CreateDeckBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** CreateDeckBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** CreateDeckBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** CreateDeckBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** CreateDeckBuffAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": null;
                    /** CreateDeckBuffAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "DEVOURED" | "KALTS2_S3" | "NONE" | "TAUNT" | "UNDEPLOYABLE" | "WTRMAN_DISTURB";
                    /** CreateDeckBuffAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** CreateDeckBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "ALL_THE_TIME" | "UNTIL_NEXT_SPAWN";
                    /** CreateDeckBuffAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** CreateDeckBuffAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** CreateDeckBuffAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
  "_exceptTokenAndTrap": boolean;
  /** CreateDeckBuffAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CreateDeckBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateDeckBuffAction 的 `onlyTokenAndTrap` 配置字段；准确战斗语义待确认。 */
  "_onlyTokenAndTrap": boolean;
  /** CreateDeckBuffAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。 */
  "_onlyToTarget": boolean;
  /** CreateDeckBuffAction 的 `randomOneDeckCard` 配置字段；准确战斗语义待确认。 */
  "_randomOneDeckCard": boolean;
  /** CreateDeckBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateDeckBuffByCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateDeckBuffByCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateDeckBuffByCnt, Assembly-CSharp";
  /** CreateDeckBuffByCntAction 的 `cnt` 配置字段；准确战斗语义待确认。 */
  "_cnt": number;
  /** CreateDeckBuffByCntAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** CreateDeckBuffByCntAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** CreateDeckBuffByCntAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** CreateDeckBuffByCntAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** CreateDeckBuffByCntAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** CreateDeckBuffByCntAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": never[];
                                                          /** CreateDeckBuffByCntAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": never[];
                                                          /** CreateDeckBuffByCntAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": never[];
                                                          /** CreateDeckBuffByCntAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": never[];
                                                          /** CreateDeckBuffByCntAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": never[];
                                                          /** CreateDeckBuffByCntAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": Array<{
                                                                                           /** 属性修改器指向的战斗属性。 */
                                                                                           "attributeType": "ATK" | "ATTACK_SPEED" | "BLOCK_CNT" | "DEF" | "MAX_HP";
                                                                                           /** CreateDeckBuffByCntAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                           "formulaItem": string;
                                                                                           /** CreateDeckBuffByCntAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                           "loadFromBlackboard": boolean;
                                                                                           /** 黑板参数的数值槽。 */
                                                                                           "value": number;
                                                                                         }>;
                                                        };
                                   /** CreateDeckBuffByCntAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** CreateDeckBuffByCntAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": never[];
                                   /** CreateDeckBuffByCntAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** CreateDeckBuffByCntAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** CreateDeckBuffByCntAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** CreateDeckBuffByCntAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** CreateDeckBuffByCntAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** CreateDeckBuffByCntAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** CreateDeckBuffByCntAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** CreateDeckBuffByCntAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** CreateDeckBuffByCntAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** CreateDeckBuffByCntAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** CreateDeckBuffByCntAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** CreateDeckBuffByCntAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** CreateDeckBuffByCntAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** CreateDeckBuffByCntAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** CreateDeckBuffByCntAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "INFINITY";
                                   /** CreateDeckBuffByCntAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** CreateDeckBuffByCntAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** CreateDeckBuffByCntAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** CreateDeckBuffByCntAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": null;
                                   /** CreateDeckBuffByCntAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** CreateDeckBuffByCntAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** CreateDeckBuffByCntAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "UNIQUE";
                                   /** CreateDeckBuffByCntAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** CreateDeckBuffByCntAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": never[];
                                   /** CreateDeckBuffByCntAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** CreateDeckBuffByCntAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** CreateDeckBuffByCntAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** CreateDeckBuffByCntAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** CreateDeckBuffByCntAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** CreateDeckBuffByCntAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** CreateDeckBuffByCntAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** CreateDeckBuffByCntAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** CreateDeckBuffByCntAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": null;
                    /** CreateDeckBuffByCntAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "RL5_RELIC_CARDG";
                    /** CreateDeckBuffByCntAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** CreateDeckBuffByCntAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "ALL_THE_TIME" | "UNTIL_NEXT_SPAWN";
                    /** CreateDeckBuffByCntAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** CreateDeckBuffByCntAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** CreateDeckBuffByCntAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
  "_exceptTokenAndTrap": boolean;
  /** CreateDeckBuffByCntAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CreateDeckBuffByCntAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateDeckBuffByCntAction 的 `onlyTokenAndTrap` 配置字段；准确战斗语义待确认。 */
  "_onlyTokenAndTrap": boolean;
  /** CreateDeckBuffByCntAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。 */
  "_onlyToTarget": boolean;
  /** CreateDeckBuffByCntAction 的 `reverseOrdert` 配置字段；准确战斗语义待确认。 */
  "_reverseOrdert": boolean;
  /** CreateDeckBuffByCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateDeckBuffWithDeckSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateDeckBuffWithDeckSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateDeckBuffWithDeckSelector, Assembly-CSharp";
  /** CreateDeckBuffWithDeckSelectorAction 的 `actionSource` 配置字段；准确战斗语义待确认。 */
  "_actionSource": "BUFF_OWNER";
  /** CreateDeckBuffWithDeckSelectorAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** CreateDeckBuffWithDeckSelectorAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** CreateDeckBuffWithDeckSelectorAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** CreateDeckBuffWithDeckSelectorAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": never[];
                                                          /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": never[];
                                                          /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": never[];
                                                          /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": never[];
                                                          /** CreateDeckBuffWithDeckSelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": never[];
                                                          /** CreateDeckBuffWithDeckSelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": Array<{
                                                                                           /** 属性修改器指向的战斗属性。 */
                                                                                           "attributeType": "ATK" | "MAX_HP";
                                                                                           /** CreateDeckBuffWithDeckSelectorAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                           "formulaItem": string;
                                                                                           /** CreateDeckBuffWithDeckSelectorAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                           "loadFromBlackboard": boolean;
                                                                                           /** 黑板参数的数值槽。 */
                                                                                           "value": number;
                                                                                         }>;
                                                        };
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": never[];
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "INFINITY";
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": string;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "DEFAULT" | "STACK";
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": Array<string>;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** CreateDeckBuffWithDeckSelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** CreateDeckBuffWithDeckSelectorAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": string;
                    /** CreateDeckBuffWithDeckSelectorAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "NONE";
                    /** CreateDeckBuffWithDeckSelectorAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** CreateDeckBuffWithDeckSelectorAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "ALL_THE_TIME" | "UNTIL_NEXT_SPAWN";
                    /** CreateDeckBuffWithDeckSelectorAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** CreateDeckBuffWithDeckSelectorAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** CreateDeckBuffWithDeckSelectorAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
  "_deckSelector": {
                        /** CreateDeckBuffWithDeckSelectorAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                        "categoryMask": "TANK, SUPPORT";
                        /** CreateDeckBuffWithDeckSelectorAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                        "enableOverride": boolean;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                        "excludeHiddenByCardState": boolean;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                        "excludeMe": boolean;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                        "excludeNotInHand": boolean;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                        "excludeNotShowInCardList": boolean;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                        "filterTag": null;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                        "mapTags": never[];
                        /** CreateDeckBuffWithDeckSelectorAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                        "onlySelectMe": boolean;
                        /** CreateDeckBuffWithDeckSelectorAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                        "subprofessionTag": null;
                      };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateDeckBuffWithSelectOrder, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateDeckBuffWithSelectOrderAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateDeckBuffWithSelectOrder, Assembly-CSharp";
  /** CreateDeckBuffWithSelectOrderAction 的 `actionSource` 配置字段；准确战斗语义待确认。 */
  "_actionSource": "BUFF_OWNER";
  /** CreateDeckBuffWithSelectOrderAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** CreateDeckBuffWithSelectOrderAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** CreateDeckBuffWithSelectOrderAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** CreateDeckBuffWithSelectOrderAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** CreateDeckBuffWithSelectOrderAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** CreateDeckBuffWithSelectOrderAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": null;
                                                          /** CreateDeckBuffWithSelectOrderAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": null;
                                                          /** CreateDeckBuffWithSelectOrderAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": null;
                                                          /** CreateDeckBuffWithSelectOrderAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": null;
                                                          /** CreateDeckBuffWithSelectOrderAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": null;
                                                          /** CreateDeckBuffWithSelectOrderAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": null;
                                                        };
                                   /** CreateDeckBuffWithSelectOrderAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": never[];
                                   /** CreateDeckBuffWithSelectOrderAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "INFINITY";
                                   /** CreateDeckBuffWithSelectOrderAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** CreateDeckBuffWithSelectOrderAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": string;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": string;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "STACK";
                                   /** CreateDeckBuffWithSelectOrderAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": never[];
                                   /** CreateDeckBuffWithSelectOrderAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** CreateDeckBuffWithSelectOrderAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** CreateDeckBuffWithSelectOrderAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "INFINITY";
                                   /** CreateDeckBuffWithSelectOrderAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** CreateDeckBuffWithSelectOrderAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": string;
                    /** CreateDeckBuffWithSelectOrderAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "NONE";
                    /** CreateDeckBuffWithSelectOrderAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** CreateDeckBuffWithSelectOrderAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "UNTIL_NEXT_SPAWN";
                    /** CreateDeckBuffWithSelectOrderAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** CreateDeckBuffWithSelectOrderAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** CreateDeckBuffWithSelectOrderAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
  "_deckSelector": {
                        /** CreateDeckBuffWithSelectOrderAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                        "categoryMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                        /** CreateDeckBuffWithSelectOrderAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                        "enableOverride": boolean;
                        /** CreateDeckBuffWithSelectOrderAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                        "excludeHiddenByCardState": boolean;
                        /** CreateDeckBuffWithSelectOrderAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                        "excludeMe": boolean;
                        /** CreateDeckBuffWithSelectOrderAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                        "excludeNotInHand": boolean;
                        /** CreateDeckBuffWithSelectOrderAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                        "excludeNotShowInCardList": boolean;
                        /** CreateDeckBuffWithSelectOrderAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                        "filterTag": null;
                        /** CreateDeckBuffWithSelectOrderAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                        "mapTags": never[];
                        /** CreateDeckBuffWithSelectOrderAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                        "onlySelectMe": boolean;
                        /** CreateDeckBuffWithSelectOrderAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                        "subprofessionTag": null;
                      };
  /** CreateDeckBuffWithSelectOrderAction 的 `selectOrder` 配置字段；准确战斗语义待确认。 */
  "_selectOrder": string;
  /** CreateDeckBuffWithSelectOrderAction 的 `useTokenAsSouurceCard` 配置字段；准确战斗语义待确认。 */
  "_useTokenAsSouurceCard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateDeckCardBuffsWithSelectOrderList, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateDeckCardBuffsWithSelectOrderListAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateDeckCardBuffsWithSelectOrderList, Assembly-CSharp";
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `actionSource` 配置字段；准确战斗语义待确认。 */
  "_actionSource": "SOURCE";
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `createCardBuff` 配置字段；准确战斗语义待确认。 */
  "_createCardBuff": boolean;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `createDeckBuff` 配置字段；准确战斗语义待确认。 */
  "_createDeckBuff": boolean;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `deckBuff` 配置字段；准确战斗语义待确认。 */
  "_deckBuff": {
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `affectInHand` 配置字段；准确战斗语义待确认。 */
                    "affectInHand": boolean;
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `affectOutOfHand` 配置字段；准确战斗语义待确认。 */
                    "affectOutOfHand": boolean;
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": null;
                                                          /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": null;
                                                          /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": null;
                                                          /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": null;
                                                          /** CreateDeckCardBuffsWithSelectOrderListAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": null;
                                                          /** CreateDeckCardBuffsWithSelectOrderListAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": null;
                                                        };
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": string;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": never[];
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "INFINITY";
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": string;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "UNIQUE";
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": never[];
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** CreateDeckCardBuffsWithSelectOrderListAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `cardAnimWhenDeckbuffAdd` 配置字段；准确战斗语义待确认。 */
                    "cardAnimWhenDeckbuffAdd": null;
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `cardEffectType` 配置字段；准确战斗语义待确认。 */
                    "cardEffectType": "NONE";
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `ignoreSpecialBuild` 配置字段；准确战斗语义待确认。 */
                    "ignoreSpecialBuild": boolean;
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
                    "lifeType": "UNTIL_NEXT_SPAWN";
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `showToastWhenAffect` 配置字段；准确战斗语义待确认。 */
                    "showToastWhenAffect": boolean;
                    /** CreateDeckCardBuffsWithSelectOrderListAction 的 `wontSpawnWhenRallyPointSwitch` 配置字段；准确战斗语义待确认。 */
                    "wontSpawnWhenRallyPointSwitch": boolean;
                  };
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN";
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `selectors` 配置字段；准确战斗语义待确认。 */
  "_selectors": Array<{
                     /** CreateDeckCardBuffsWithSelectOrderListAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
                     "deckSelector": {
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                                            "categoryMask": "WARRIOR, SNIPER, CASTER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                                            "enableOverride": boolean;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                                            "excludeHiddenByCardState": boolean;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                                            "excludeMe": boolean;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                                            "excludeNotInHand": boolean;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                                            "excludeNotShowInCardList": boolean;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                                            "filterTag": null;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                                            "mapTags": never[];
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                                            "onlySelectMe": boolean;
                                            /** CreateDeckCardBuffsWithSelectOrderListAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                                            "subprofessionTag": null;
                                          };
                     /** CreateDeckCardBuffsWithSelectOrderListAction 的 `selectOrder` 配置字段；准确战斗语义待确认。 */
                     "selectOrder": string;
                   }>;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
  /** CreateDeckCardBuffsWithSelectOrderListAction 的 `useTokenAsSouurceCard` 配置字段；准确战斗语义待确认。 */
  "_useTokenAsSouurceCard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateEffect, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CreateEffectAction 的 `constDirection` 配置字段；准确战斗语义待确认。 */
  "_constDirection": string;
  /** CreateEffectAction 的 `createEffectHoldBySource` 配置字段；准确战斗语义待确认。 */
  "_createEffectHoldBySource": boolean;
  /** CreateEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateEffectAction 的 `manualSetPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
  "_manualSetPlaybackSpeed": boolean;
  /** CreateEffectAction 的 `playbackSpeed` 配置字段；准确战斗语义待确认。 */
  "_playbackSpeed": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** CreateEffectAction 的 `useAttackPlaybackSpeed` 配置字段；准确战斗语义待确认。 */
  "_useAttackPlaybackSpeed": boolean;
  /** CreateEffectAction 的 `useConstDirection` 配置字段；准确战斗语义待确认。 */
  "_useConstDirection": boolean;
  /** CreateEffectAction 的 `useSourceFaceVactor` 配置字段；准确战斗语义待确认。 */
  "_useSourceFaceVactor": boolean;
  /** CreateEffectAction 的 `useSourceToTargetDirection` 配置字段；准确战斗语义待确认。 */
  "_useSourceToTargetDirection": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateEffectAtScreenPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateEffectAtScreenPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateEffectAtScreenPos, Assembly-CSharp";
  /** CreateEffectAtScreenPosAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateEffectAtScreenPosAction 的 `screenheightRatio` 配置字段；准确战斗语义待确认。 */
  "_screenheightRatio": number;
  /** CreateEffectAtScreenPosAction 的 `screenWidthRatio` 配置字段；准确战斗语义待确认。 */
  "_screenWidthRatio": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC27 = CreateCardBuffToMyTokenAction | CreateCardBuffWithDeckSelectorAction | CreateCardFilterByProfessionAction | CreateDeckBuffAction | CreateDeckBuffByCntAction | CreateDeckBuffWithDeckSelectorAction | CreateDeckBuffWithSelectOrderAction | CreateDeckCardBuffsWithSelectOrderListAction | CreateEffectAction | CreateEffectAtScreenPosAction;
