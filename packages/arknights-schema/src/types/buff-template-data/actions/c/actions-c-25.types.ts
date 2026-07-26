/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffUseOverrideBuffKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffUseOverrideBuffKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffUseOverrideBuffKey, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffUseOverrideBuffKeyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": never[];
                                     /** CreateBuffUseOverrideBuffKeyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** CreateBuffUseOverrideBuffKeyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ATTACK_SPEED" | "MOVE_SPEED" | "SLOW_DOWN";
                                                                    /** CreateBuffUseOverrideBuffKeyAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffUseOverrideBuffKeyAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffUseOverrideBuffKeyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffUseOverrideBuffKeyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffUseOverrideBuffKeyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": null;
                /** CreateBuffUseOverrideBuffKeyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": string;
                /** CreateBuffUseOverrideBuffKeyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffUseOverrideBuffKeyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffUseOverrideBuffKeyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "LIMITED";
                /** CreateBuffUseOverrideBuffKeyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffUseOverrideBuffKeyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffUseOverrideBuffKeyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": string;
                /** CreateBuffUseOverrideBuffKeyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": string;
                /** CreateBuffUseOverrideBuffKeyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffUseOverrideBuffKeyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffUseOverrideBuffKeyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": Array<string>;
                /** CreateBuffUseOverrideBuffKeyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffUseOverrideBuffKeyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffUseOverrideBuffKeyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffUseOverrideBuffKeyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffUseOverrideBuffKeyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffUseOverrideBuffKeyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffUseOverrideBuffKeyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER";
  /** CreateBuffUseOverrideBuffKeyAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffUseOverrideBuffKeyAction 的 `hookEffectKeyFromSourceProjectile` 配置字段；准确战斗语义待确认。 */
  "_hookEffectKeyFromSourceProjectile": boolean;
  /** CreateBuffUseOverrideBuffKeyAction 的 `inherateSourceProjectileFromParentBuff` 配置字段；准确战斗语义待确认。 */
  "_inherateSourceProjectileFromParentBuff": boolean;
  /** CreateBuffUseOverrideBuffKeyAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffUseOverrideBuffKeyAction 的 `overrideBuffKeyFormat` 配置字段；准确战斗语义待确认。 */
  "_overrideBuffKeyFormat": string;
  /** CreateBuffUseOverrideBuffKeyAction 的 `specialBuffSource` 配置字段；准确战斗语义待确认。 */
  "_specialBuffSource": "BUFF_SOURCE";
  /** CreateBuffUseOverrideBuffKeyAction 的 `useSpecialBuffSource` 配置字段；准确战斗语义待确认。 */
  "_useSpecialBuffSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffUseTargetAsSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffUseTargetAsSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffUseTargetAsSource, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffUseTargetAsSourceAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffUseTargetAsSourceAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffUseTargetAsSourceAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffUseTargetAsSourceAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffUseTargetAsSourceAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffUseTargetAsSourceAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffUseTargetAsSourceAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "MOVE_SPEED";
                                                                    /** CreateBuffUseTargetAsSourceAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffUseTargetAsSourceAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffUseTargetAsSourceAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null | string;
                /** CreateBuffUseTargetAsSourceAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": Array<{
                                     /** 黑板参数键或当前配置项的稳定键。 */
                                     "key": string;
                                     /** 黑板参数的数值槽。 */
                                     "value": number;
                                     /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                     "valueStr": string;
                                   }>;
                /** CreateBuffUseTargetAsSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffUseTargetAsSourceAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** CreateBuffUseTargetAsSourceAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffUseTargetAsSourceAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffUseTargetAsSourceAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffUseTargetAsSourceAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffUseTargetAsSourceAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffUseTargetAsSourceAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffUseTargetAsSourceAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null | string;
                /** CreateBuffUseTargetAsSourceAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "STACK" | "UNIQUE";
                /** CreateBuffUseTargetAsSourceAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffUseTargetAsSourceAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": Array<string>;
                /** CreateBuffUseTargetAsSourceAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffUseTargetAsSourceAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffUseTargetAsSourceAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffUseTargetAsSourceAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffUseTargetAsSourceAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffUseTargetAsSourceAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                /** CreateBuffUseTargetAsSourceAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "SOURCE";
  /** CreateBuffUseTargetAsSourceAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffUseTargetAsSourceAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffUseTargetAsSourceAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffWithOverrideEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffWithOverrideEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffWithOverrideEffect, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffWithOverrideEffectAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffWithOverrideEffectAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffWithOverrideEffectAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffWithOverrideEffectAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffWithOverrideEffectAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | never[];
                                     /** CreateBuffWithOverrideEffectAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffWithOverrideEffectAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ATK";
                                                                    /** CreateBuffWithOverrideEffectAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffWithOverrideEffectAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffWithOverrideEffectAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null | string;
                /** CreateBuffWithOverrideEffectAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffWithOverrideEffectAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffWithOverrideEffectAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffWithOverrideEffectAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffWithOverrideEffectAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffWithOverrideEffectAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY" | "LIMITED";
                /** CreateBuffWithOverrideEffectAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffWithOverrideEffectAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffWithOverrideEffectAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffWithOverrideEffectAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffWithOverrideEffectAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffWithOverrideEffectAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffWithOverrideEffectAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffWithOverrideEffectAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffWithOverrideEffectAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffWithOverrideEffectAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffWithOverrideEffectAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffWithOverrideEffectAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffWithOverrideEffectAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffWithOverrideEffectAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "SOURCE";
  /** CreateBuffWithOverrideEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** CreateBuffWithOverrideEffectAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffWithOverrideEffectAction 的 `hookEffectBySkinId` 配置字段；准确战斗语义待确认。 */
  "_hookEffectBySkinId": boolean;
  /** CreateBuffWithOverrideEffectAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffWithOverrideEffectAction 的 `skinIdBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_skinIdBlackboardKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCameraEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCameraEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCameraEffect, Assembly-CSharp";
  /** CreateCameraEffectAction 的 `collectedToController` 配置字段；准确战斗语义待确认。 */
  "_collectedToController": boolean;
  /** CreateCameraEffectAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuff, Assembly-CSharp";
  /** CreateCardBuffAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null | string;
  /** CreateCardBuffAction 的 `donotInheritBlackboard` 配置字段；准确战斗语义待确认。 */
  "_donotInheritBlackboard": boolean;
  /** CreateCardBuffAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "HOLD_BY_BUFF" | "IMMEDIATELY" | "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** CreateCardBuffAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffByCardUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffByCardUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffByCardUid, Assembly-CSharp";
  /** CreateCardBuffByCardUidAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": string;
  /** CreateCardBuffByCardUidAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffByCardUidAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffByCardUidAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffByCardUidAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CreateCardBuffByCardUidAction 的 `uidKey` 配置字段；准确战斗语义待确认。 */
  "_uidKey": string;
  /** CreateCardBuffByCardUidAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffByCurRespawningTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffByCurRespawningTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffByCurRespawningTime, Assembly-CSharp";
  /** CreateCardBuffByCurRespawningTimeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffByCurRespawningTimeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffByCurRespawningTimeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffByCurRespawningTimeAction 的 `isMin` 配置字段；准确战斗语义待确认。 */
  "_isMin": boolean;
  /** CreateCardBuffByCurRespawningTimeAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffByCurRespawningTimeAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "IMMEDIATELY";
  /** CreateCardBuffByCurRespawningTimeAction 的 `profession` 配置字段；准确战斗语义待确认。 */
  "_profession": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CreateCardBuffByCurRespawningTimeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffByDeckSequenceOrder, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffByDeckSequenceOrderAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffByDeckSequenceOrder, Assembly-CSharp";
  /** CreateCardBuffByDeckSequenceOrderAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `deckSelector` 配置字段；准确战斗语义待确认。 */
  "_deckSelector": {
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `categoryMask` 配置字段；准确战斗语义待确认。 */
                        "categoryMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `enableOverride` 配置字段；准确战斗语义待确认。 */
                        "enableOverride": boolean;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeHiddenByCardState` 配置字段；准确战斗语义待确认。 */
                        "excludeHiddenByCardState": boolean;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeMe` 配置字段；准确战斗语义待确认。 */
                        "excludeMe": boolean;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeNotInHand` 配置字段；准确战斗语义待确认。 */
                        "excludeNotInHand": boolean;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `excludeNotShowInCardList` 配置字段；准确战斗语义待确认。 */
                        "excludeNotShowInCardList": boolean;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
                        "filterTag": null;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
                        "mapTags": never[];
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `onlySelectMe` 配置字段；准确战斗语义待确认。 */
                        "onlySelectMe": boolean;
                        /** CreateCardBuffByDeckSequenceOrderAction 的 `subprofessionTag` 配置字段；准确战斗语义待确认。 */
                        "subprofessionTag": null;
                      };
  /** CreateCardBuffByDeckSequenceOrderAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN";
  /** CreateCardBuffByDeckSequenceOrderAction 的 `selectOrder` 配置字段；准确战斗语义待确认。 */
  "_selectOrder": string;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
  /** CreateCardBuffByDeckSequenceOrderAction 的 `useTokenAsSourceCard` 配置字段；准确战斗语义待确认。 */
  "_useTokenAsSourceCard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffBySourceCard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffBySourceCardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffBySourceCard, Assembly-CSharp";
  /** CreateCardBuffBySourceCardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null | string;
  /** CreateCardBuffBySourceCardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffBySourceCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffBySourceCardAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffBySourceCardAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "ALL_THE_TIME" | "UNTIL_NEXT_SPAWN";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** CreateCardBuffBySourceCardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateCardBuffFilterByBuildableType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateCardBuffFilterByBuildableTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateCardBuffFilterByBuildableType, Assembly-CSharp";
  /** CreateCardBuffFilterByBuildableTypeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "MELEE";
  /** CreateCardBuffFilterByBuildableTypeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_cardBuffKey": null;
  /** CreateCardBuffFilterByBuildableTypeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
  "_enableMaxStackCount": boolean;
  /** CreateCardBuffFilterByBuildableTypeAction 的 `expectToken` 配置字段；准确战斗语义待确认。 */
  "_expectToken": boolean;
  /** CreateCardBuffFilterByBuildableTypeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
  "_filterIsInHand": boolean;
  /** CreateCardBuffFilterByBuildableTypeAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
  "_isRatio": boolean;
  /** CreateCardBuffFilterByBuildableTypeAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
  "_lifeType": "UNTIL_NEXT_SPAWN_SYNC_WITH_BUFF";
  /** CreateCardBuffFilterByBuildableTypeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
  "_useCardBuffKey": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC25 = CreateBuffUseOverrideBuffKeyAction | CreateBuffUseTargetAsSourceAction | CreateBuffWithOverrideEffectAction | CreateCameraEffectAction | CreateCardBuffAction | CreateCardBuffByCardUidAction | CreateCardBuffByCurRespawningTimeAction | CreateCardBuffByDeckSequenceOrderAction | CreateCardBuffBySourceCardAction | CreateCardBuffFilterByBuildableTypeAction;
