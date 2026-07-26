/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CopyHealth, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CopyHealthAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CopyHealth, Assembly-CSharp";
  /** CopyHealthAction 的 `copyByRatio` 配置字段；准确战斗语义待确认。 */
  "_copyByRatio": boolean;
  /** CopyHealthAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuff, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | Array<string>;
                                     /** CreateBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | Array<string>;
                                     /** CreateBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | Array<string>;
                                     /** CreateBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | Array<string>;
                                     /** CreateBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ABILITY_RANGE_FORWARD_EXTEND" | "ATK" | "ATTACK_SPEED" | "BASE_ATTACK_TIME" | "BLOCK_CNT" | "DAMAGE_HITRATE_MAGICAL" | "DAMAGE_HITRATE_PHYSICAL" | "DEF" | "DEF_PENETRATE" | "DEF_PENETRATE_FIXED" | "EP_BREAK_RECOVER_SPEED" | "HP_RECOVERY_PER_SEC" | "HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO" | "MAGIC_RESISTANCE" | "MAGIC_RESIST_PENETRATE" | "MAGIC_RESIST_PENETRATE_FIXED" | "MASS_LEVEL" | "MAX_HP" | "MOVE_SPEED" | "ONE_MINUS_STATUS_RESISTANCE" | "SP_RECOVERY_PER_SEC" | "SP_RECOVER_RATIO" | "TAUNT_LEVEL";
                                                                    /** CreateBuffAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null | string;
                /** CreateBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": Array<{
                                     /** 黑板参数键或当前配置项的稳定键。 */
                                     "key": string;
                                     /** 黑板参数的数值槽。 */
                                     "value": number;
                                     /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                     "valueStr": null | string;
                                   }>;
                /** CreateBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null | string;
                /** CreateBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT" | "HIGHER_PRIORITY" | "HIGH_PRIORITY" | "LOWEST_PRIORITY" | "LOW_PRIORITY";
                /** CreateBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null | string;
                /** CreateBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "EXTEND" | "EXTEND_TIME" | "STACK" | "UNIQUE";
                /** CreateBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": null | Array<string>;
                /** CreateBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC" | "NO" | "YES";
                /** CreateBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "BUFF_SOURCE" | "MAINBUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "PROJECTILE_TRACETARGET" | "SOURCE" | "TARGET";
  /** CreateBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffAction 的 `hookEffectKeyFromSourceProjectile` 配置字段；准确战斗语义待确认。 */
  "_hookEffectKeyFromSourceProjectile": boolean;
  /** CreateBuffAction 的 `inherateSourceProjectileFromParentBuff` 配置字段；准确战斗语义待确认。 */
  "_inherateSourceProjectileFromParentBuff": boolean;
  /** CreateBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffAction 的 `specialBuffSource` 配置字段；准确战斗语义待确认。 */
  "_specialBuffSource": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET";
  /** CreateBuffAction 的 `useSpecialBuffSource` 配置字段；准确战斗语义待确认。 */
  "_useSpecialBuffSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffById, Assembly-CSharp";
  /** CreateBuffByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
  /** CreateBuffByIdAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffByIdAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffInCircleRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffInCircleRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffInCircleRange, Assembly-CSharp";
  /** CreateBuffInCircleRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** CreateBuffInCircleRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** CreateBuffInCircleRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** CreateBuffInCircleRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** CreateBuffInCircleRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** CreateBuffInCircleRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** CreateBuffInCircleRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** CreateBuffInCircleRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | Array<{
                                                                     /** 属性修改器指向的战斗属性。 */
                                                                     "attributeType": "MOVE_SPEED";
                                                                     /** CreateBuffInCircleRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                     "fetchBaseValueFromSourceEntity": boolean;
                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                     "formulaItem": string;
                                                                     /** CreateBuffInCircleRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                     "loadFromBlackboard": boolean;
                                                                     /** 黑板参数的数值槽。 */
                                                                     "value": number;
                                                                   }>;
                                    };
                 /** CreateBuffInCircleRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null | string;
                 /** CreateBuffInCircleRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": Array<{
                                      /** 黑板参数键或当前配置项的稳定键。 */
                                      "key": string;
                                      /** 黑板参数的数值槽。 */
                                      "value": number;
                                      /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                      "valueStr": string;
                                    }>;
                 /** CreateBuffInCircleRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** CreateBuffInCircleRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** CreateBuffInCircleRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** CreateBuffInCircleRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null | string;
                 /** CreateBuffInCircleRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** CreateBuffInCircleRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** CreateBuffInCircleRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** CreateBuffInCircleRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** CreateBuffInCircleRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** CreateBuffInCircleRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** CreateBuffInCircleRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** CreateBuffInCircleRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** CreateBuffInCircleRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** CreateBuffInCircleRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** CreateBuffInCircleRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** CreateBuffInCircleRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** CreateBuffInCircleRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** CreateBuffInCircleRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** CreateBuffInCircleRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null | string;
                 /** CreateBuffInCircleRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** CreateBuffInCircleRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** CreateBuffInCircleRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT" | "EXTEND" | "STACK" | "UNIQUE";
                 /** CreateBuffInCircleRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** CreateBuffInCircleRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** CreateBuffInCircleRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** CreateBuffInCircleRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** CreateBuffInCircleRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** CreateBuffInCircleRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** CreateBuffInCircleRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** CreateBuffInCircleRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** CreateBuffInCircleRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** CreateBuffInCircleRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** CreateBuffInCircleRangeAction 的 `checkInArcCircle` 配置字段；准确战斗语义待确认。 */
  "_checkInArcCircle": boolean;
  /** CreateBuffInCircleRangeAction 的 `count` 配置字段；准确战斗语义待确认。 */
  "_count": number;
  /** CreateBuffInCircleRangeAction 的 `degreeRanges` 配置字段；准确战斗语义待确认。 */
  "_degreeRanges": null | Array<{
                        /** CreateBuffInCircleRangeAction 的 `x` 配置字段；准确战斗语义待确认。 */
                        "x": number;
                        /** CreateBuffInCircleRangeAction 的 `y` 配置字段；准确战斗语义待确认。 */
                        "y": number;
                      }>;
  /** CreateBuffInCircleRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CreateBuffInCircleRangeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffInCircleRangeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffInCircleRangeAction 的 `limitCount` 配置字段；准确战斗语义待确认。 */
  "_limitCount": boolean;
  /** CreateBuffInCircleRangeAction 的 `postFilter` 配置字段；准确战斗语义待确认。 */
  "_postFilter": string;
  /** CreateBuffInCircleRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateBuffInCircleRangeAction 的 `specifyBuffSource` 配置字段；准确战斗语义待确认。 */
  "_specifyBuffSource": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateBuffInCircleRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CreateBuffInCircleRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CreateBuffInCircleRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "FROZEN" | "MOTION_TARGET_FREE" | "STUNNED";
                         /** CreateBuffInCircleRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CreateBuffInCircleRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CreateBuffInCircleRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CreateBuffInCircleRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CreateBuffInCircleRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "FROZEN" | "STUNNED";
                         /** CreateBuffInCircleRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CreateBuffInCircleRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CreateBuffInCircleRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CreateBuffInCircleRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CreateBuffInCircleRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CreateBuffInCircleRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CreateBuffInCircleRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** CreateBuffInCircleRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** CreateBuffInCircleRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT" | "NONE";
                         /** CreateBuffInCircleRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL" | "WALK_ONLY";
                         /** CreateBuffInCircleRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY" | "BOTH_ALLY_AND_ENEMY" | "ENEMY";
                         /** CreateBuffInCircleRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
  /** CreateBuffInCircleRangeAction 的 `useSpecifyBuffSource` 配置字段；准确战斗语义待确认。 */
  "_useSpecifyBuffSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffInRange, Assembly-CSharp";
  /** CreateBuffInRangeAction 的 `allowedBuildableType` 配置字段；准确战斗语义待确认。 */
  "_allowedBuildableType": "ALL" | "MELEE" | "NONE" | "RANGED";
  /** CreateBuffInRangeAction 的 `allowFilterTags` 配置字段；准确战斗语义待确认。 */
  "_allowFilterTags": null | Array<string>;
  /** CreateBuffInRangeAction 的 `alwaysIncludeSourceBlocker` 配置字段；准确战斗语义待确认。 */
  "_alwaysIncludeSourceBlocker": boolean;
  /** CreateBuffInRangeAction 的 `alwaysIncudeCurAtkTarget` 配置字段；准确战斗语义待确认。 */
  "_alwaysIncudeCurAtkTarget": boolean;
  /** CreateBuffInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** CreateBuffInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** CreateBuffInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** CreateBuffInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** CreateBuffInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | Array<string>;
                                      /** CreateBuffInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | Array<string>;
                                      /** CreateBuffInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** CreateBuffInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | Array<{
                                                                     /** 属性修改器指向的战斗属性。 */
                                                                     "attributeType": "ATK" | "ATTACK_SPEED" | "BLOCK_CNT" | "DEF" | "DEF_PENETRATE" | "MAGIC_RESIST_PENETRATE_FIXED" | "MAX_HP" | "TAUNT_LEVEL";
                                                                     /** CreateBuffInRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                     "fetchBaseValueFromSourceEntity": boolean;
                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                     "formulaItem": string;
                                                                     /** CreateBuffInRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                     "loadFromBlackboard": boolean;
                                                                     /** 黑板参数的数值槽。 */
                                                                     "value": number;
                                                                   }>;
                                    };
                 /** CreateBuffInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null | string;
                 /** CreateBuffInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": Array<{
                                      /** 黑板参数键或当前配置项的稳定键。 */
                                      "key": string;
                                      /** 黑板参数的数值槽。 */
                                      "value": number;
                                      /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                      "valueStr": string;
                                    }>;
                 /** CreateBuffInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** CreateBuffInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** CreateBuffInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** CreateBuffInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null | string;
                 /** CreateBuffInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** CreateBuffInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** CreateBuffInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** CreateBuffInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** CreateBuffInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** CreateBuffInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** CreateBuffInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** CreateBuffInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** CreateBuffInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** CreateBuffInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** CreateBuffInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** CreateBuffInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** CreateBuffInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** CreateBuffInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT" | "HIGHER_PRIORITY";
                 /** CreateBuffInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null | string;
                 /** CreateBuffInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null | string;
                 /** CreateBuffInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** CreateBuffInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT" | "EXTEND" | "UNIQUE";
                 /** CreateBuffInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** CreateBuffInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": Array<string>;
                 /** CreateBuffInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** CreateBuffInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** CreateBuffInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** CreateBuffInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** CreateBuffInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** CreateBuffInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** CreateBuffInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                 /** CreateBuffInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** CreateBuffInRangeAction 的 `checkGiantTrapAllLocateTiles` 配置字段；准确战斗语义待确认。 */
  "_checkGiantTrapAllLocateTiles": boolean;
  /** CreateBuffInRangeAction 的 `excludeCurAtkTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeCurAtkTarget": boolean;
  /** CreateBuffInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** CreateBuffInRangeAction 的 `filterByBuildableType` 配置字段；准确战斗语义待确认。 */
  "_filterByBuildableType": boolean;
  /** CreateBuffInRangeAction 的 `filterByTags` 配置字段；准确战斗语义待确认。 */
  "_filterByTags": boolean;
  /** CreateBuffInRangeAction 的 `filterTargets` 配置字段；准确战斗语义待确认。 */
  "_filterTargets": boolean;
  /** CreateBuffInRangeAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
  "_filterType": "ALL" | "HATRED_DES";
  /** CreateBuffInRangeAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffInRangeAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffInRangeAction 的 `limitMaxTarget` 配置字段；准确战斗语义待确认。 */
  "_limitMaxTarget": boolean;
  /** CreateBuffInRangeAction 的 `maxTargetKey` 配置字段；准确战斗语义待确认。 */
  "_maxTargetKey": string;
  /** CreateBuffInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。 */
  "_radius": number;
  /** CreateBuffInRangeAction 的 `randomTarget` 配置字段；准确战斗语义待确认。 */
  "_randomTarget": boolean;
  /** CreateBuffInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** CreateBuffInRangeAction 的 `rangeModeIndex` 配置字段；准确战斗语义待确认。 */
  "_rangeModeIndex": number;
  /** CreateBuffInRangeAction 的 `rangeTargetSideType` 配置字段；准确战斗语义待确认。 */
  "_rangeTargetSideType": "ALLY" | "ENEMY";
  /** CreateBuffInRangeAction 的 `removeExcludeTargetBeforeShrink` 配置字段；准确战斗语义待确认。 */
  "_removeExcludeTargetBeforeShrink": boolean;
  /** CreateBuffInRangeAction 的 `side` 配置字段；准确战斗语义待确认。 */
  "_side": "ENEMY" | "NONE";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateBuffInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CreateBuffInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CreateBuffInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "CAMOUFLAGE" | "E_NUM" | "INVISIBLE" | "STUNNED";
                         /** CreateBuffInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CreateBuffInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CreateBuffInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CreateBuffInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CreateBuffInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "CAMOUFLAGE" | "STUNNED";
                         /** CreateBuffInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CreateBuffInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CreateBuffInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CreateBuffInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CreateBuffInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CreateBuffInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CreateBuffInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE" | "TOKEN" | "TRAP" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, TRAP, PIONEER";
                         /** CreateBuffInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "HEAL" | "NONE";
                         /** CreateBuffInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT" | "DEFAULT, TRAP_OR_ITEM";
                         /** CreateBuffInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL" | "WALK_ONLY";
                         /** CreateBuffInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY" | "BOTH_ALLY_AND_ENEMY" | "ENEMY";
                         /** CreateBuffInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** CreateBuffInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
  "_useAttackRange": boolean;
  /** CreateBuffInRangeAction 的 `useCentainSide` 配置字段；准确战斗语义待确认。 */
  "_useCentainSide": boolean;
  /** CreateBuffInRangeAction 的 `useCurrentModeRange` 配置字段；准确战斗语义待确认。 */
  "_useCurrentModeRange": boolean;
  /** CreateBuffInRangeAction 的 `useGlobalRange` 配置字段；准确战斗语义待确认。 */
  "_useGlobalRange": boolean;
  /** CreateBuffInRangeAction 的 `useHostAsSource` 配置字段；准确战斗语义待确认。 */
  "_useHostAsSource": boolean;
  /** CreateBuffInRangeAction 的 `useRadius` 配置字段；准确战斗语义待确认。 */
  "_useRadius": boolean;
  /** CreateBuffInRangeAction 的 `useRangeToShow` 配置字段；准确战斗语义待确认。 */
  "_useRangeToShow": boolean;
  /** CreateBuffInRangeAction 的 `useTargetRangeInsteadOfSource` 配置字段；准确战斗语义待确认。 */
  "_useTargetRangeInsteadOfSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffItemProcessor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffItemProcessorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffItemProcessor, Assembly-CSharp";
  /** CreateBuffItemProcessorAction 的 `dice` 配置字段；准确战斗语义待确认。 */
  "_dice": boolean;
  /** CreateBuffItemProcessorAction 的 `diceProb` 配置字段；准确战斗语义待确认。 */
  "_diceProb": number;
  /** CreateBuffItemProcessorAction 的 `notFilterTarget` 配置字段；准确战斗语义待确认。 */
  "_notFilterTarget": boolean;
  /** CreateBuffItemProcessorAction 的 `reason` 配置字段；准确战斗语义待确认。 */
  "_reason": "ENEMY_SPECIFIC" | "GATHER" | "PROCESS_OUTPUT";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffOnTileInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffOnTileInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffOnTileInRange, Assembly-CSharp";
  /** CreateBuffOnTileInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** CreateBuffOnTileInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** CreateBuffOnTileInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": null | never[];
                                      /** CreateBuffOnTileInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": null | never[];
                                      /** CreateBuffOnTileInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": null | never[];
                                      /** CreateBuffOnTileInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": null | never[];
                                      /** CreateBuffOnTileInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": null | never[];
                                      /** CreateBuffOnTileInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": null | never[];
                                    };
                 /** CreateBuffOnTileInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** CreateBuffOnTileInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** CreateBuffOnTileInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** CreateBuffOnTileInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": null | string;
                 /** CreateBuffOnTileInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** CreateBuffOnTileInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** CreateBuffOnTileInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "IMMEDIATELY" | "LIMITED";
                 /** CreateBuffOnTileInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** CreateBuffOnTileInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** CreateBuffOnTileInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** CreateBuffOnTileInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** CreateBuffOnTileInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** CreateBuffOnTileInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** CreateBuffOnTileInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** CreateBuffOnTileInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** CreateBuffOnTileInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** CreateBuffOnTileInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** CreateBuffOnTileInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** CreateBuffOnTileInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** CreateBuffOnTileInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** CreateBuffOnTileInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** CreateBuffOnTileInRangeAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CreateBuffOnTileInRangeAction 的 `hasSource` 配置字段；准确战斗语义待确认。 */
  "_hasSource": boolean;
  /** CreateBuffOnTileInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CreateBuffOnTileInRangeAction 的 `side` 配置字段；准确战斗语义待确认。 */
  "_side": "ALLY" | "ENEMY";
  /** CreateBuffOnTileInRangeAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
  "_targetOptions": {
                         /** CreateBuffOnTileInRangeAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                         "abnormalCombo": string;
                         /** CreateBuffOnTileInRangeAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "abnormalFlag": "STUNNED";
                         /** CreateBuffOnTileInRangeAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                         "checkUnitType": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "containAbnormalFlag": "STUNNED";
                         /** CreateBuffOnTileInRangeAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "containSomeAbnormalFlags": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                         "enableAdvancedOptions": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                         "excludeAbnormalFlag": "STUNNED";
                         /** CreateBuffOnTileInRangeAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                         "excludeSomeAbnormalFlags": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreAllyTargetFree": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreHealFree": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetFree": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                         "ignoreTargetSide": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                         "onlyIgnoreSomeOfTargetFreeCase": boolean;
                         /** CreateBuffOnTileInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                         "professionMask": "NONE";
                         /** CreateBuffOnTileInRangeAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                         "purposeMask": "NONE";
                         /** CreateBuffOnTileInRangeAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                         "targetCategory": "DEFAULT" | "TRAP_OR_ITEM";
                         /** CreateBuffOnTileInRangeAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                         "targetMotion": "ALL" | "FLY_ONLY";
                         /** CreateBuffOnTileInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                         "targetSide": "ALLY" | "ENEMY";
                         /** CreateBuffOnTileInRangeAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                         "unitTypeMask": "NONE";
                       };
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffs, Assembly-CSharp";
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER";
  /** CreateBuffsAction 的 `buffPair` 配置字段；准确战斗语义待确认。 */
  "_buffPair": {
                    /** CreateBuffsAction 的 `buff` 配置字段；准确战斗语义待确认。 */
                    "buff": {
                                   /** CreateBuffsAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                   "attributes": {
                                                          /** CreateBuffsAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": null | never[];
                                                          /** CreateBuffsAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": null | never[];
                                                          /** CreateBuffsAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": null | never[];
                                                          /** CreateBuffsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": null | never[];
                                                          /** CreateBuffsAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": null | never[];
                                                          /** CreateBuffsAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": null | Array<{
                                                                                           /** 属性修改器指向的战斗属性。 */
                                                                                           "attributeType": "ATK";
                                                                                           /** CreateBuffsAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                           "fetchBaseValueFromSourceEntity": boolean;
                                                                                           /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                           "formulaItem": string;
                                                                                           /** CreateBuffsAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                           "loadFromBlackboard": boolean;
                                                                                           /** 黑板参数的数值槽。 */
                                                                                           "value": number;
                                                                                         }>;
                                                        };
                                   /** CreateBuffsAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                   "audioSignal": null;
                                   /** CreateBuffsAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                   "blackboard": Array<{
                                                          /** 黑板参数键或当前配置项的稳定键。 */
                                                          "key": string;
                                                          /** 黑板参数的数值槽。 */
                                                          "value": number;
                                                          /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                                          "valueStr": null | string;
                                                        }>;
                                   /** CreateBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                   "buffKey": string;
                                   /** CreateBuffsAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                   "clearAllStackCntWhenTimeUp": boolean;
                                   /** CreateBuffsAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                   "disableOverride": boolean;
                                   /** CreateBuffsAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                   "durationKey": null;
                                   /** CreateBuffsAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                   "enableInitDirectionFromSource": boolean;
                                   /** CreateBuffsAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "firstTriggerInterval": number;
                                   /** CreateBuffsAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                   "independentCharacterSource": boolean;
                                   /** CreateBuffsAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                   "isDamageMissable": boolean;
                                   /** CreateBuffsAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                   "isDurableBuff": boolean;
                                   /** CreateBuffsAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                   "isFreezable": boolean;
                                   /** CreateBuffsAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                   "isLevitatable": boolean;
                                   /** CreateBuffsAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                   "isSilenceable": boolean;
                                   /** CreateBuffsAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                   "isStunnable": boolean;
                                   /** CreateBuffsAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                   "lifeTime": number;
                                   /** CreateBuffsAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                   "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                                   /** CreateBuffsAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                   "loadFromDB": boolean;
                                   /** CreateBuffsAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxStackCnt": number;
                                   /** CreateBuffsAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                   "maxValidStackCnt": number;
                                   /** 模板处理战斗事件时使用的优先级。 */
                                   "onEventPriority": "DEFAULT";
                                   /** CreateBuffsAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideEffectKey": null | string;
                                   /** CreateBuffsAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                   "overrideKey": null | string;
                                   /** CreateBuffsAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                   "overrideOnEventPriority": boolean;
                                   /** CreateBuffsAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                   "overrideType": "DEFAULT" | "STACK";
                                   /** CreateBuffsAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                   "priority": number;
                                   /** CreateBuffsAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                   "priorityBBKeys": never[];
                                   /** CreateBuffsAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                   "refreshRemainingTimeWhenStackMax": boolean;
                                   /** CreateBuffsAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                   "statusResistable": "AUTOMATIC";
                                   /** CreateBuffsAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                   "stripBlackboardParamsWithBuffKey": boolean;
                                   /** CreateBuffsAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                   "takeSnapshotWhenExtend": boolean;
                                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                   "templateKey": string;
                                   /** CreateBuffsAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                   "triggerCnt": number;
                                   /** CreateBuffsAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "triggerInterval": number;
                                   /** CreateBuffsAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                   "triggerLifeType": "IMMEDIATELY";
                                   /** CreateBuffsAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                   "waitFirstTriggerInterval": boolean;
                                 };
                    /** CreateBuffsAction 的 `count` 配置字段；准确战斗语义待确认。 */
                    "count": number;
                    /** CreateBuffsAction 的 `peeling` 配置字段；准确战斗语义待确认。 */
                    "peeling": number;
                    /** CreateBuffsAction 的 `useBlackboard` 配置字段；准确战斗语义待确认。 */
                    "useBlackboard": boolean;
                  };
  /** CreateBuffsAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffsAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffStacked, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffStackedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffStacked, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffStackedAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffStackedAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** CreateBuffStackedAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** CreateBuffStackedAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** CreateBuffStackedAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | Array<string>;
                                     /** CreateBuffStackedAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** CreateBuffStackedAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | Array<{
                                                                    /** 属性修改器指向的战斗属性。 */
                                                                    "attributeType": "ABILITY_RANGE_FORWARD_EXTEND" | "ATK" | "ATTACK_SPEED" | "BLOCK_CNT" | "DEF" | "HP_RECOVERY_PER_SEC_BY_MAX_HP_RATIO" | "MAGIC_RESISTANCE" | "MAX_HP" | "MOVE_SPEED" | "SP_RECOVERY_PER_SEC";
                                                                    /** CreateBuffStackedAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                    "fetchBaseValueFromSourceEntity": boolean;
                                                                    /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                    "formulaItem": string;
                                                                    /** CreateBuffStackedAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                    "loadFromBlackboard": boolean;
                                                                    /** 黑板参数的数值槽。 */
                                                                    "value": number;
                                                                  }>;
                                   };
                /** CreateBuffStackedAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffStackedAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": Array<{
                                     /** 黑板参数键或当前配置项的稳定键。 */
                                     "key": string;
                                     /** 黑板参数的数值槽。 */
                                     "value": number;
                                     /** 黑板参数的字符串槽；`null` 表示该参数使用数值槽。 */
                                     "valueStr": string;
                                   }>;
                /** CreateBuffStackedAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffStackedAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffStackedAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffStackedAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffStackedAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffStackedAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffStackedAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffStackedAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffStackedAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffStackedAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffStackedAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffStackedAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffStackedAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffStackedAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffStackedAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                /** CreateBuffStackedAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffStackedAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffStackedAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffStackedAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null | string;
                /** CreateBuffStackedAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null | string;
                /** CreateBuffStackedAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffStackedAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT" | "STACK";
                /** CreateBuffStackedAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffStackedAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffStackedAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffStackedAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffStackedAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffStackedAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffStackedAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffStackedAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffStackedAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                /** CreateBuffStackedAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** Buff 的接收实体类型。 */
  "_buffOwner": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** CreateBuffStackedAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffStackedAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffStackedAction 的 `isDisableOverrideBuff` 配置字段；准确战斗语义待确认。 */
  "_isDisableOverrideBuff": boolean;
  /** CreateBuffStackedAction 的 `stackCnt` 配置字段；准确战斗语义待确认。 */
  "_stackCnt": number;
  /** CreateBuffStackedAction 的 `stackCntKey` 配置字段；准确战斗语义待确认。 */
  "_stackCntKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CreateBuffToBindingTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CreateBuffToBindingTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CreateBuffToBindingTiles, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** CreateBuffToBindingTilesAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** CreateBuffToBindingTilesAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": never[];
                                     /** CreateBuffToBindingTilesAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": never[];
                                     /** CreateBuffToBindingTilesAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": never[];
                                     /** CreateBuffToBindingTilesAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": never[];
                                     /** CreateBuffToBindingTilesAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": never[];
                                     /** CreateBuffToBindingTilesAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": never[];
                                   };
                /** CreateBuffToBindingTilesAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** CreateBuffToBindingTilesAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** CreateBuffToBindingTilesAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** CreateBuffToBindingTilesAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** CreateBuffToBindingTilesAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** CreateBuffToBindingTilesAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** CreateBuffToBindingTilesAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** CreateBuffToBindingTilesAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** CreateBuffToBindingTilesAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** CreateBuffToBindingTilesAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** CreateBuffToBindingTilesAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** CreateBuffToBindingTilesAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** CreateBuffToBindingTilesAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** CreateBuffToBindingTilesAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** CreateBuffToBindingTilesAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** CreateBuffToBindingTilesAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** CreateBuffToBindingTilesAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "INFINITY";
                /** CreateBuffToBindingTilesAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** CreateBuffToBindingTilesAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** CreateBuffToBindingTilesAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** CreateBuffToBindingTilesAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": string;
                /** CreateBuffToBindingTilesAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** CreateBuffToBindingTilesAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** CreateBuffToBindingTilesAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** CreateBuffToBindingTilesAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** CreateBuffToBindingTilesAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** CreateBuffToBindingTilesAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** CreateBuffToBindingTilesAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** CreateBuffToBindingTilesAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** CreateBuffToBindingTilesAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** CreateBuffToBindingTilesAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** CreateBuffToBindingTilesAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** CreateBuffToBindingTilesAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** CreateBuffToBindingTilesAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** CreateBuffToBindingTilesAction 的 `excludeRootTile` 配置字段；准确战斗语义待确认。 */
  "_excludeRootTile": boolean;
  /** CreateBuffToBindingTilesAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** CreateBuffToBindingTilesAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
  /** CreateBuffToBindingTilesAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC22 = CopyHealthAction | CreateBuffAction | CreateBuffByIdAction | CreateBuffInCircleRangeAction | CreateBuffInRangeAction | CreateBuffItemProcessorAction | CreateBuffOnTileInRangeAction | CreateBuffsAction | CreateBuffStackedAction | CreateBuffToBindingTilesAction;
