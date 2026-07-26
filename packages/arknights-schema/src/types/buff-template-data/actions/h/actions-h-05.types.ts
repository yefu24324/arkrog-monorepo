/**
 * buff_template_data 的 H 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HealViaDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HealViaDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HealViaDamage, Assembly-CSharp";
  /** HealViaDamageAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
  "_filterModifierCancelled": boolean;
  /** HealViaDamageAction 的 `healType` 配置字段；准确战斗语义待确认。 */
  "_healType": "DAMAGE_SCALE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HealViaMaxHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HealViaMaxHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HealViaMaxHpRatio, Assembly-CSharp";
  /** HealViaMaxHpRatioAction 的 `getMaxHpFromTarget` 配置字段；准确战斗语义待确认。 */
  "_getMaxHpFromTarget": boolean;
  /** HealViaMaxHpRatioAction 的 `healTarget` 配置字段；准确战斗语义待确认。 */
  "_healTarget": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** HealViaMaxHpRatioAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** HealViaMaxHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideCard, Assembly-CSharp";
  /** HideCardAction 的 `cardKey` 配置字段；准确战斗语义待确认。 */
  "_cardKey": string;
  /** HideCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideCardById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideCardByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideCardById, Assembly-CSharp";
  /** HideCardByIdAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** HideCardByIdAction 的 `hiddenReason` 配置字段；准确战斗语义待确认。 */
  "_hiddenReason": "sandbox_v3_evaluate";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideCardByTokenOrHostUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideCardByTokenOrHostUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideCardByTokenOrHostUid, Assembly-CSharp";
  /** HideCardByTokenOrHostUidAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** HideCardByTokenOrHostUidAction 的 `hiddenReason` 配置字段；准确战斗语义待确认。 */
  "_hiddenReason": "deck_default_hidden";
  /** HideCardByTokenOrHostUidAction 的 `isShow` 配置字段；准确战斗语义待确认。 */
  "_isShow": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideCharacterOrTokenNotInAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideCharacterOrTokenNotInAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideCharacterOrTokenNotInAbilityBlackboard, Assembly-CSharp";
  /** HideCharacterOrTokenNotInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** HideCharacterOrTokenNotInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
  "_infoType": "UNIQUE_ID";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideEntityGraphicOrNot, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideEntityGraphicOrNotAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideEntityGraphicOrNot, Assembly-CSharp";
  /** HideEntityGraphicOrNotAction 的 `hide` 配置字段；准确战斗语义待确认。 */
  "_hide": boolean;
  /** HideEntityGraphicOrNotAction 的 `hideEnemyUI` 配置字段；准确战斗语义待确认。 */
  "_hideEnemyUI": boolean;
  /** HideEntityGraphicOrNotAction 的 `hideFixed` 配置字段；准确战斗语义待确认。 */
  "_hideFixed": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideEntityInFogAndManageBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideEntityInFogAndManageBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideEntityInFogAndManageBuff, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": Array<string>;
                                     /** HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": never[];
                                   };
                /** HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY";
                /** HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": string;
                /** HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": string;
                /** HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "UNIQUE";
                /** HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** HideEntityInFogAndManageBuffAction 的 `buffToNPC` 配置字段；准确战斗语义待确认。 */
  "_buffToNPC": {
                     /** HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                     "attributes": {
                                          /** HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                          "abnormalAntis": never[];
                                          /** HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalComboImmunes": never[];
                                          /** HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                          "abnormalCombos": never[];
                                          /** HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                          "abnormalFlags": never[];
                                          /** HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                          "abnormalImmunes": never[];
                                          /** HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                          "attributeModifiers": never[];
                                        };
                     /** HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                     "audioSignal": null;
                     /** HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                     "blackboard": never[];
                     /** HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                     "buffKey": string;
                     /** HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                     "clearAllStackCntWhenTimeUp": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                     "disableOverride": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                     "durationKey": null;
                     /** HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                     "enableInitDirectionFromSource": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                     "firstTriggerInterval": number;
                     /** HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                     "independentCharacterSource": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                     "isDamageMissable": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                     "isDurableBuff": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                     "isFreezable": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                     "isLevitatable": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                     "isSilenceable": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                     "isStunnable": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                     "lifeTime": number;
                     /** HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                     "lifeTimeType": "INFINITY";
                     /** HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                     "loadFromDB": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                     "maxStackCnt": number;
                     /** HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                     "maxValidStackCnt": number;
                     /** 模板处理战斗事件时使用的优先级。 */
                     "onEventPriority": "DEFAULT";
                     /** HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                     "overrideEffectKey": string;
                     /** HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                     "overrideKey": null;
                     /** HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                     "overrideOnEventPriority": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                     "overrideType": "DEFAULT";
                     /** HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                     "priority": number;
                     /** HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                     "priorityBBKeys": never[];
                     /** HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                     "refreshRemainingTimeWhenStackMax": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                     "statusResistable": "AUTOMATIC";
                     /** HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                     "stripBlackboardParamsWithBuffKey": boolean;
                     /** HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                     "takeSnapshotWhenExtend": boolean;
                     /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                     "templateKey": string;
                     /** HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                     "triggerCnt": number;
                     /** HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                     "triggerInterval": number;
                     /** HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                     "triggerLifeType": "IMMEDIATELY";
                     /** HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                     "waitFirstTriggerInterval": boolean;
                   };
  /** HideEntityInFogAndManageBuffAction 的 `buffToTrap` 配置字段；准确战斗语义待确认。 */
  "_buffToTrap": {
                      /** HideEntityInFogAndManageBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                      "attributes": {
                                           /** HideEntityInFogAndManageBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                           "abnormalAntis": never[];
                                           /** HideEntityInFogAndManageBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                           "abnormalComboImmunes": never[];
                                           /** HideEntityInFogAndManageBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                           "abnormalCombos": never[];
                                           /** HideEntityInFogAndManageBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                           "abnormalFlags": Array<string>;
                                           /** HideEntityInFogAndManageBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                           "abnormalImmunes": never[];
                                           /** HideEntityInFogAndManageBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                           "attributeModifiers": never[];
                                         };
                      /** HideEntityInFogAndManageBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                      "audioSignal": null;
                      /** HideEntityInFogAndManageBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                      "blackboard": never[];
                      /** HideEntityInFogAndManageBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                      "buffKey": string;
                      /** HideEntityInFogAndManageBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                      "clearAllStackCntWhenTimeUp": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                      "disableOverride": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                      "durationKey": null;
                      /** HideEntityInFogAndManageBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                      "enableInitDirectionFromSource": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                      "firstTriggerInterval": number;
                      /** HideEntityInFogAndManageBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                      "independentCharacterSource": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                      "isDamageMissable": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                      "isDurableBuff": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                      "isFreezable": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                      "isLevitatable": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                      "isSilenceable": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                      "isStunnable": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                      "lifeTime": number;
                      /** HideEntityInFogAndManageBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                      "lifeTimeType": "INFINITY";
                      /** HideEntityInFogAndManageBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                      "loadFromDB": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                      "maxStackCnt": number;
                      /** HideEntityInFogAndManageBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                      "maxValidStackCnt": number;
                      /** 模板处理战斗事件时使用的优先级。 */
                      "onEventPriority": "DEFAULT";
                      /** HideEntityInFogAndManageBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                      "overrideEffectKey": string;
                      /** HideEntityInFogAndManageBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                      "overrideKey": null;
                      /** HideEntityInFogAndManageBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                      "overrideOnEventPriority": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                      "overrideType": "UNIQUE";
                      /** HideEntityInFogAndManageBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                      "priority": number;
                      /** HideEntityInFogAndManageBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                      "priorityBBKeys": never[];
                      /** HideEntityInFogAndManageBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                      "refreshRemainingTimeWhenStackMax": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                      "statusResistable": "AUTOMATIC";
                      /** HideEntityInFogAndManageBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                      "stripBlackboardParamsWithBuffKey": boolean;
                      /** HideEntityInFogAndManageBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                      "takeSnapshotWhenExtend": boolean;
                      /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                      "templateKey": string;
                      /** HideEntityInFogAndManageBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                      "triggerCnt": number;
                      /** HideEntityInFogAndManageBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                      "triggerInterval": number;
                      /** HideEntityInFogAndManageBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                      "triggerLifeType": "IMMEDIATELY";
                      /** HideEntityInFogAndManageBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                      "waitFirstTriggerInterval": boolean;
                    };
  /** HideEntityInFogAndManageBuffAction 的 `enemyNotShowBuff` 配置字段；准确战斗语义待确认。 */
  "_enemyNotShowBuff": string;
  /** HideEntityInFogAndManageBuffAction 的 `enemyShowInDialogState` 配置字段；准确战斗语义待确认。 */
  "_enemyShowInDialogState": boolean;
  /** HideEntityInFogAndManageBuffAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
  "_filterTag": string;
  /** HideEntityInFogAndManageBuffAction 的 `hideTrapFilterTag` 配置字段；准确战斗语义待确认。 */
  "_hideTrapFilterTag": string;
  /** HideEntityInFogAndManageBuffAction 的 `npcFilterTag` 配置字段；准确战斗语义待确认。 */
  "_npcFilterTag": string;
  /** HideEntityInFogAndManageBuffAction 的 `trapNotHideBuff` 配置字段；准确战斗语义待确认。 */
  "_trapNotHideBuff": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideGiantBossUI, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideGiantBossUIAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideGiantBossUI, Assembly-CSharp";
  /** HideGiantBossUIAction 的 `hide` 配置字段；准确战斗语义待确认。 */
  "_hide": boolean;
  /** HideGiantBossUIAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+HideUnitGraphicOrNot, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface HideUnitGraphicOrNotAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+HideUnitGraphicOrNot, Assembly-CSharp";
  /** HideUnitGraphicOrNotAction 的 `hide` 配置字段；准确战斗语义待确认。 */
  "_hide": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionH05 = HealViaDamageAction | HealViaMaxHpRatioAction | HideCardAction | HideCardByIdAction | HideCardByTokenOrHostUidAction | HideCharacterOrTokenNotInAbilityBlackboardAction | HideEntityGraphicOrNotAction | HideEntityInFogAndManageBuffAction | HideGiantBossUIAction | HideUnitGraphicOrNotAction;
