/**
 * buff_template_data 的 B 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+BuildCharacterInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface BuildCharacterInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+BuildCharacterInRange, Assembly-CSharp";
  /** BuildCharacterInRangeAction 的 `buffs` 配置字段；准确战斗语义待确认。 */
  "_buffs": Array<{
                 /** BuildCharacterInRangeAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                 "attributes": {
                                      /** BuildCharacterInRangeAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                      "abnormalAntis": never[];
                                      /** BuildCharacterInRangeAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalComboImmunes": never[];
                                      /** BuildCharacterInRangeAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                      "abnormalCombos": never[];
                                      /** BuildCharacterInRangeAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                      "abnormalFlags": never[];
                                      /** BuildCharacterInRangeAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                      "abnormalImmunes": never[];
                                      /** BuildCharacterInRangeAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                      "attributeModifiers": Array<{
                                                                     /** 属性修改器指向的战斗属性。 */
                                                                     "attributeType": "ATK";
                                                                     /** BuildCharacterInRangeAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                     "fetchBaseValueFromSourceEntity": boolean;
                                                                     /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                     "formulaItem": string;
                                                                     /** BuildCharacterInRangeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                     "loadFromBlackboard": boolean;
                                                                     /** 黑板参数的数值槽。 */
                                                                     "value": number;
                                                                   }>;
                                    };
                 /** BuildCharacterInRangeAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                 "audioSignal": null;
                 /** BuildCharacterInRangeAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                 "blackboard": never[];
                 /** BuildCharacterInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                 "buffKey": string;
                 /** BuildCharacterInRangeAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                 "clearAllStackCntWhenTimeUp": boolean;
                 /** BuildCharacterInRangeAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                 "disableOverride": boolean;
                 /** BuildCharacterInRangeAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                 "durationKey": string;
                 /** BuildCharacterInRangeAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                 "enableInitDirectionFromSource": boolean;
                 /** BuildCharacterInRangeAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "firstTriggerInterval": number;
                 /** BuildCharacterInRangeAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                 "independentCharacterSource": boolean;
                 /** BuildCharacterInRangeAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                 "isDamageMissable": boolean;
                 /** BuildCharacterInRangeAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                 "isDurableBuff": boolean;
                 /** BuildCharacterInRangeAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                 "isFreezable": boolean;
                 /** BuildCharacterInRangeAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                 "isLevitatable": boolean;
                 /** BuildCharacterInRangeAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                 "isSilenceable": boolean;
                 /** BuildCharacterInRangeAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                 "isStunnable": boolean;
                 /** BuildCharacterInRangeAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                 "lifeTime": number;
                 /** BuildCharacterInRangeAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                 "lifeTimeType": "LIMITED";
                 /** BuildCharacterInRangeAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                 "loadFromDB": boolean;
                 /** BuildCharacterInRangeAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxStackCnt": number;
                 /** BuildCharacterInRangeAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                 "maxValidStackCnt": number;
                 /** 模板处理战斗事件时使用的优先级。 */
                 "onEventPriority": "DEFAULT";
                 /** BuildCharacterInRangeAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                 "overrideEffectKey": null;
                 /** BuildCharacterInRangeAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                 "overrideKey": null;
                 /** BuildCharacterInRangeAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                 "overrideOnEventPriority": boolean;
                 /** BuildCharacterInRangeAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                 "overrideType": "DEFAULT";
                 /** BuildCharacterInRangeAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                 "priority": number;
                 /** BuildCharacterInRangeAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                 "priorityBBKeys": never[];
                 /** BuildCharacterInRangeAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                 "refreshRemainingTimeWhenStackMax": boolean;
                 /** BuildCharacterInRangeAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                 "statusResistable": "AUTOMATIC";
                 /** BuildCharacterInRangeAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                 "stripBlackboardParamsWithBuffKey": boolean;
                 /** BuildCharacterInRangeAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                 "takeSnapshotWhenExtend": boolean;
                 /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                 "templateKey": string;
                 /** BuildCharacterInRangeAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                 "triggerCnt": number;
                 /** BuildCharacterInRangeAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                 "triggerInterval": number;
                 /** BuildCharacterInRangeAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                 "triggerLifeType": "IMMEDIATELY";
                 /** BuildCharacterInRangeAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                 "waitFirstTriggerInterval": boolean;
               }>;
  /** BuildCharacterInRangeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "MELEE";
  /** BuildCharacterInRangeAction 的 `grids` 配置字段；准确战斗语义待确认。 */
  "_grids": Array<{
                 /** BuildCharacterInRangeAction 的 `col` 配置字段；准确战斗语义待确认。 */
                 "col": number;
                 /** BuildCharacterInRangeAction 的 `row` 配置字段；准确战斗语义待确认。 */
                 "row": number;
               }>;
  /** BuildCharacterInRangeAction 的 `ignoreDeckBuffKey` 配置字段；准确战斗语义待确认。 */
  "_ignoreDeckBuffKey": string;
  /** BuildCharacterInRangeAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
  "_professionMask": "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionB02 = BuildCharacterInRangeAction;
