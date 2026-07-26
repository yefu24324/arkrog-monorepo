/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAbnormalFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAbnormalFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAbnormalFlag, Assembly-CSharp";
  /** CheckAbnormalFlagAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlag": "CAMOUFLAGE" | "COLD" | "DISARMED" | "DISARMED_COMBAT" | "DOZE" | "ELEMENT_FREE_ALL" | "FEARED" | "FROZEN" | "HEAL_FREE" | "INVINCIBLE" | "INVISIBLE" | "LEVITATE" | "PALSY" | "PALSYING" | "SILENCED" | "SKILL_NOT_ACTIVATABLE" | "SP_RECOVER_STOPPED" | "STUNNED" | "UNDEADABLE" | "UNMOVABLE";
  /** CheckAbnormalFlagAction 的 `abnormalFlagKey` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlagKey": string;
  /** CheckAbnormalFlagAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "PROJECTILE_TRACETARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAbnormalFlags, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAbnormalFlagsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAbnormalFlags, Assembly-CSharp";
  /** CheckAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlags": Array<string>;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAbnormalImmune, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAbnormalImmuneAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAbnormalImmune, Assembly-CSharp";
  /** CheckAbnormalImmuneAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlag": "DISARMED_COMBAT" | "FROZEN" | "INVISIBLE" | "LEVITATE" | "PALSY" | "STUNNED" | "UNMOVABLE";
  /** CheckAbnormalImmuneAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckAndBlockBuffByAbnormalFlags, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckAndBlockBuffByAbnormalFlagsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckAndBlockBuffByAbnormalFlags, Assembly-CSharp";
  /** CheckAndBlockBuffByAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlags": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBlocked, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBlockedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBlocked, Assembly-CSharp";
  /** CheckBlockedAction 的 `checkBlockedBySource` 配置字段；准确战斗语义待确认。 */
  "_checkBlockedBySource": boolean;
  /** CheckBlockedAction 的 `checkBlockedBySourceToken` 配置字段；准确战斗语义待确认。 */
  "_checkBlockedBySourceToken": boolean;
  /** CheckBlockedAction 的 `checkBlockedCount` 配置字段；准确战斗语义待确认。 */
  "_checkBlockedCount": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBlockedPlayersideInCooperate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBlockedPlayersideInCooperateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBlockedPlayersideInCooperate, Assembly-CSharp";
  /** CheckBlockedPlayersideInCooperateAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** CheckBlockedPlayersideInCooperateAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBlockerContainsBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBlockerContainsBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBlockerContainsBuff, Assembly-CSharp";
  /** CheckBlockerContainsBuffAction 的 `buffKeys` 配置字段；准确战斗语义待确认。 */
  "_buffKeys": Array<string>;
  /** CheckBlockerContainsBuffAction 的 `buffSourceType` 配置字段；准确战斗语义待确认。 */
  "_buffSourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** CheckBlockerContainsBuffAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** CheckBlockerContainsBuffAction 的 `isAND` 配置字段；准确战斗语义待确认。 */
  "_isAND": boolean;
  /** CheckBlockerContainsBuffAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBlockerGroupTag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBlockerGroupTagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBlockerGroupTag, Assembly-CSharp";
  /** CheckBlockerGroupTagAction 的 `tag` 配置字段；准确战斗语义待确认。 */
  "_tag": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBlockMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBlockModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBlockMode, Assembly-CSharp";
  /** CheckBlockModeAction 的 `blockMode` 配置字段；准确战斗语义待确认。 */
  "_blockMode": "FLY" | "WALK";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBoatCollide, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBoatCollideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBoatCollide, Assembly-CSharp";
  /** CheckBoatCollideAction 的 `calculateCollidePosToBB` 配置字段；准确战斗语义待确认。 */
  "_calculateCollidePosToBB": boolean;
  /** CheckBoatCollideAction 的 `radius` 配置字段；准确战斗语义待确认。 */
  "_radius": number;
  /** CheckBoatCollideAction 的 `setCollideTileToBB` 配置字段；准确战斗语义待确认。 */
  "_setCollideTileToBB": boolean;
  /** CheckBoatCollideAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC03 = CheckAbnormalFlagAction | CheckAbnormalFlagsAction | CheckAbnormalImmuneAction | CheckAndBlockBuffByAbnormalFlagsAction | CheckBlockedAction | CheckBlockedPlayersideInCooperateAction | CheckBlockerContainsBuffAction | CheckBlockerGroupTagAction | CheckBlockModeAction | CheckBoatCollideAction;
