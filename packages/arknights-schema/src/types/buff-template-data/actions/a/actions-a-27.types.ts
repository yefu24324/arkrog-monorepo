/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AttachAsDerivedBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AttachAsDerivedBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AttachAsDerivedBuff, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** AttachAsDerivedBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** AttachAsDerivedBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** AttachAsDerivedBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** AttachAsDerivedBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** AttachAsDerivedBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | never[];
                                     /** AttachAsDerivedBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** AttachAsDerivedBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "MASS_LEVEL";
                                                                    /** AttachAsDerivedBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** AttachAsDerivedBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** AttachAsDerivedBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** AttachAsDerivedBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** AttachAsDerivedBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** AttachAsDerivedBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** AttachAsDerivedBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** AttachAsDerivedBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** AttachAsDerivedBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** AttachAsDerivedBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** AttachAsDerivedBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** AttachAsDerivedBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** AttachAsDerivedBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** AttachAsDerivedBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** AttachAsDerivedBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** AttachAsDerivedBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** AttachAsDerivedBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** AttachAsDerivedBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** AttachAsDerivedBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY" | "LIMITED";
                /** AttachAsDerivedBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** AttachAsDerivedBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** AttachAsDerivedBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** AttachAsDerivedBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** AttachAsDerivedBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** AttachAsDerivedBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** AttachAsDerivedBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "UNIQUE";
                /** AttachAsDerivedBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** AttachAsDerivedBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** AttachAsDerivedBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** AttachAsDerivedBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** AttachAsDerivedBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** AttachAsDerivedBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** AttachAsDerivedBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** AttachAsDerivedBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** AttachAsDerivedBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** AttachAsDerivedBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** AttachAsDerivedBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AttachAsDerivedBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_SOURCE";
  /** AttachAsDerivedBuffAction 的 `filterBuffBySource` 配置字段；准确战斗语义待确认。 */
  "_filterBuffBySource": boolean;
  /** AttachAsDerivedBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** AttachAsDerivedBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AttachAsDerivedBuffAction 的 `useSnapshotSource` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AttachAsDerivedBuffById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AttachAsDerivedBuffByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AttachAsDerivedBuffById, Assembly-CSharp";
  /** AttachAsDerivedBuffByIdAction 的 `attachToSourceHost` 配置字段；准确战斗语义待确认。 */
  "_attachToSourceHost": boolean;
  /** AttachAsDerivedBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AttachAsDerivedBuffByIdAction 的 `finishDerivedBuffIfNoParent` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfNoParent": boolean;
  /** AttachAsDerivedBuffByIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** AttachAsDerivedBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AttachAsDerivedBuffToMainBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AttachAsDerivedBuffToMainBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AttachAsDerivedBuffToMainBuff, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** AttachAsDerivedBuffToMainBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | never[];
                                     /** AttachAsDerivedBuffToMainBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** AttachAsDerivedBuffToMainBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | never[];
                                   };
                /** AttachAsDerivedBuffToMainBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** AttachAsDerivedBuffToMainBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** AttachAsDerivedBuffToMainBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** AttachAsDerivedBuffToMainBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** AttachAsDerivedBuffToMainBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** AttachAsDerivedBuffToMainBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** AttachAsDerivedBuffToMainBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY";
                /** AttachAsDerivedBuffToMainBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** AttachAsDerivedBuffToMainBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** AttachAsDerivedBuffToMainBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** AttachAsDerivedBuffToMainBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** AttachAsDerivedBuffToMainBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** AttachAsDerivedBuffToMainBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** AttachAsDerivedBuffToMainBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** AttachAsDerivedBuffToMainBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** AttachAsDerivedBuffToMainBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** AttachAsDerivedBuffToMainBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** AttachAsDerivedBuffToMainBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** AttachAsDerivedBuffToMainBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** AttachAsDerivedBuffToMainBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "LIMITED";
                /** AttachAsDerivedBuffToMainBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** AttachAsDerivedBuffToMainBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** AttachAsDerivedBuffToMainBuffAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AttachAsDerivedBuffToMainBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AttributeModifierWithBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AttributeModifierWithBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AttributeModifierWithBB, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ABILITY_RANGE_FORWARD_EXTEND" | "ATK" | "ATTACK_SPEED" | "BLOCK_CNT" | "DEF" | "DEF_PENETRATE" | "DEF_PENETRATE_FIXED" | "EP_RECOVERY_PER_SEC" | "HP_RECOVERY_PER_SEC" | "HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO" | "MAGIC_RESIST_PENETRATE" | "MAX_HP" | "MOVE_SPEED" | "SLOW_DOWN" | "SP_RECOVERY_PER_SEC" | "TAUNT_LEVEL";
  /** AttributeModifierWithBBAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
  "_formulaType": "ADDITION" | "FINAL_ADDITION" | "FINAL_SCALER" | "MULTIPLIER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AttributeModifierWithBBAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AttributeModifierWithCertainBuffCount, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AttributeModifierWithCertainBuffCountAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AttributeModifierWithCertainBuffCount, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "DEF" | "MAGIC_RESISTANCE";
  /** AttributeModifierWithCertainBuffCountAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AttributeModifierWithCertainBuffCountAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
  "_formulaType": "ADDITION" | "MULTIPLIER";
  /** AttributeModifierWithCertainBuffCountAction 的 `maxCnt` 配置字段；准确战斗语义待确认。 */
  "_maxCnt": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AttributeModifierWithCertainBuffCountAction 的 `useOneAsMinCnt` 配置字段；准确战斗语义待确认。 */
  "_useOneAsMinCnt": boolean;
  /** AttributeModifierWithCertainBuffCountAction 的 `writeModifyValueToBB` 配置字段；准确战斗语义待确认。 */
  "_writeModifyValueToBB": boolean;
  /** AttributeModifierWithCertainBuffCountAction 的 `writeToBBKey` 配置字段；准确战斗语义待确认。 */
  "_writeToBBKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AttributeModifierWithLevelProgress, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AttributeModifierWithLevelProgressAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AttributeModifierWithLevelProgress, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "DEF" | "MAX_HP";
  /** AttributeModifierWithLevelProgressAction 的 `guaranteedPercentageString` 配置字段；准确战斗语义待确认。 */
  "_guaranteedPercentageString": string;
  /** AttributeModifierWithLevelProgressAction 的 `isFinalScale` 配置字段；准确战斗语义待确认。 */
  "_isFinalScale": boolean;
  /** AttributeModifierWithLevelProgressAction 的 `maxPercentageString` 配置字段；准确战斗语义待确认。 */
  "_maxPercentageString": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutoChessAssignBondStackCntToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutoChessAssignBondStackCntToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutoChessAssignBondStackCntToBB, Assembly-CSharp";
  /** AutoChessAssignBondStackCntToBBAction 的 `assignAllPlayerIndex` 配置字段；准确战斗语义待确认。 */
  "_assignAllPlayerIndex": boolean;
  /** AutoChessAssignBondStackCntToBBAction 的 `assignCurrentMaxBond` 配置字段；准确战斗语义待确认。 */
  "_assignCurrentMaxBond": boolean;
  /** AutoChessAssignBondStackCntToBBAction 的 `bondBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_bondBlackboardKey": null;
  /** AutoChessAssignBondStackCntToBBAction 的 `bondId` 配置字段；准确战斗语义待确认。 */
  "_bondId": null;
  /** AutoChessAssignBondStackCntToBBAction 的 `byPosition` 配置字段；准确战斗语义待确认。 */
  "_byPosition": boolean;
  /** AutoChessAssignBondStackCntToBBAction 的 `checkDiffWithOldStoreCnt` 配置字段；准确战斗语义待确认。 */
  "_checkDiffWithOldStoreCnt": boolean;
  /** AutoChessAssignBondStackCntToBBAction 的 `keyToStoreCnt` 配置字段；准确战斗语义待确认。 */
  "_keyToStoreCnt": string;
  /** AutoChessAssignBondStackCntToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutoChessAssignGatheredAttributeToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutoChessAssignGatheredAttributeToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutoChessAssignGatheredAttributeToBlackboard, Assembly-CSharp";
  /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `actionTargetType` 配置字段；准确战斗语义待确认。 */
  "_actionTargetType": "BUFF_OWNER";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "MAX_HP";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `filterByBondIds` 配置字段；准确战斗语义待确认。 */
  "_filterByBondIds": Array<string>;
  /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `scale` 配置字段；准确战斗语义待确认。 */
  "_scale": number;
  /** AutoChessAssignGatheredAttributeToBlackboardAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
  "_scaleKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutoChessCheckDifficulty, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutoChessCheckDifficultyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutoChessCheckDifficulty, Assembly-CSharp";
  /** AutoChessCheckDifficultyAction 的 `difficultyMode` 配置字段；准确战斗语义待确认。 */
  "_difficultyMode": "FUNNY";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AutochessFilterByBuffStackCountWithEffectInstId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AutochessFilterByBuffStackCountWithEffectInstIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AutochessFilterByBuffStackCountWithEffectInstId, Assembly-CSharp";
  /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS";
  /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCount` 配置字段；准确战斗语义待确认。 */
  "_stackCount": number;
  /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCountKey` 配置字段；准确战斗语义待确认。 */
  "_stackCountKey": null;
  /** AutochessFilterByBuffStackCountWithEffectInstIdAction 的 `stackCountPeeling` 配置字段；准确战斗语义待确认。 */
  "_stackCountPeeling": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA27 = AttachAsDerivedBuffAction | AttachAsDerivedBuffByIdAction | AttachAsDerivedBuffToMainBuffAction | AttributeModifierWithBBAction | AttributeModifierWithCertainBuffCountAction | AttributeModifierWithLevelProgressAction | AutoChessAssignBondStackCntToBBAction | AutoChessAssignGatheredAttributeToBlackboardAction | AutoChessCheckDifficultyAction | AutochessFilterByBuffStackCountWithEffectInstIdAction;
