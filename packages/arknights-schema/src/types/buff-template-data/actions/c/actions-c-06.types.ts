/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCharSkillUsedUp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCharSkillUsedUpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCharSkillUsedUp, Assembly-CSharp";
  /** CheckCharSkillUsedUpAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckConatinsMapTags, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckConatinsMapTagsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckConatinsMapTags, Assembly-CSharp";
  /** CheckConatinsMapTagsAction 的 `mapTags` 配置字段；准确战斗语义待确认。 */
  "_mapTags": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsBuff, Assembly-CSharp";
  /** CheckContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** CheckContainsBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE";
  /** CheckContainsBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** CheckContainsBuffAction 的 `checkSourceHost` 配置字段；准确战斗语义待确认。 */
  "_checkSourceHost": boolean;
  /** CheckContainsBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "ABILITY_OWNER" | "BUFF_OWNER" | "BUFF_SOURCE" | "MAINBUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "PROJECTILE_SOURCE" | "SOURCE" | "TARGET";
  /** CheckContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。 */
  "isAND": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsBuffWithBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsBuffWithBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsBuffWithBlackboard, Assembly-CSharp";
  /** CheckContainsBuffWithBlackboardAction 的 `blackboardSettings` 配置字段；准确战斗语义待确认。 */
  "_blackboardSettings": Array<{
                              /** 黑板参数键或当前配置项的稳定键。 */
                              "key": string;
                              /** CheckContainsBuffWithBlackboardAction 的 `val` 配置字段；准确战斗语义待确认。 */
                              "val": number;
                              /** CheckContainsBuffWithBlackboardAction 的 `valStr` 配置字段；准确战斗语义待确认。 */
                              "valStr": null;
                            }>;
  /** CheckContainsBuffWithBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsCardBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsCardBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsCardBuff, Assembly-CSharp";
  /** CheckContainsCardBuffAction 的 `checkSourceUid` 配置字段；准确战斗语义待确认。 */
  "_checkSourceUid": boolean;
  /** CheckContainsCardBuffAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** CheckContainsCardBuffAction 的 `readBuffKeyFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_readBuffKeyFromBlackboard": boolean;
  /** CheckContainsCardBuffAction 的 `selectTargetHostOrToken` 配置字段；准确战斗语义待确认。 */
  "_selectTargetHostOrToken": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** CheckContainsCardBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsDeckBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsDeckBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsDeckBuff, Assembly-CSharp";
  /** CheckContainsDeckBuffAction 的 `cardUidBBKey` 配置字段；准确战斗语义待确认。 */
  "_cardUidBBKey": null;
  /** CheckContainsDeckBuffAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** CheckContainsDeckBuffAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** CheckContainsDeckBuffAction 的 `useSpecifiedCardUid` 配置字段；准确战斗语义待确认。 */
  "_useSpecifiedCardUid": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsDerviedBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsDerviedBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsDerviedBuff, Assembly-CSharp";
  /** CheckContainsDerviedBuffAction 的 `derviedBuffKey` 配置字段；准确战斗语义待确认。 */
  "_derviedBuffKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsEnvSystem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsEnvSystemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsEnvSystem, Assembly-CSharp";
  /** CheckContainsEnvSystemAction 的 `envSysKey` 配置字段；准确战斗语义待确认。 */
  "_envSysKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsResistableAbnormalFlagsBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsResistableAbnormalFlagsBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsResistableAbnormalFlagsBuff, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckContainsStatusResistableBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckContainsStatusResistableBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckContainsStatusResistableBuff, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC06 = CheckCharSkillUsedUpAction | CheckConatinsMapTagsAction | CheckContainsBuffAction | CheckContainsBuffWithBlackboardAction | CheckContainsCardBuffAction | CheckContainsDeckBuffAction | CheckContainsDerviedBuffAction | CheckContainsEnvSystemAction | CheckContainsResistableAbnormalFlagsBuffAction | CheckContainsStatusResistableBuffAction;
