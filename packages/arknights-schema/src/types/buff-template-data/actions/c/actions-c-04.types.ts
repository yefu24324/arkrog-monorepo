/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBuffAbnormalFlags, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBuffAbnormalFlagsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBuffAbnormalFlags, Assembly-CSharp";
  /** CheckBuffAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlags": Array<string>;
  /** CheckBuffAbnormalFlagsAction 的 `allMustMatch` 配置字段；准确战斗语义待确认。 */
  "_allMustMatch": boolean;
  /** CheckBuffAbnormalFlagsAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
  "_buffType": "MAIN_BUFF";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBuffAttributeModifierChanged, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBuffAttributeModifierChangedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBuffAttributeModifierChanged, Assembly-CSharp";
  /** CheckBuffAttributeModifierChangedAction 的 `buffAttributeType` 配置字段；准确战斗语义待确认。 */
  "_buffAttributeType": "ATK" | "DEF" | "MAX_HP";
  /** CheckBuffAttributeModifierChangedAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
  "_formulaType": "FINAL_ADDITION";
  /** CheckBuffAttributeModifierChangedAction 的 `sourceAttributeType` 配置字段；准确战斗语义待确认。 */
  "_sourceAttributeType": "ATK" | "DEF" | "MAX_HP";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** CheckBuffAttributeModifierChangedAction 的 `useFirstDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_useFirstDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBuffRemainingTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBuffRemainingTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBuffRemainingTime, Assembly-CSharp";
  /** CheckBuffRemainingTimeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** CheckBuffRemainingTimeAction 的 `checkTime` 配置字段；准确战斗语义待确认。 */
  "_checkTime": number;
  /** CheckBuffRemainingTimeAction 的 `checkTimeKey` 配置字段；准确战斗语义待确认。 */
  "_checkTimeKey": string;
  /** CheckBuffRemainingTimeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GT" | "LE";
  /** CheckBuffRemainingTimeAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** CheckBuffRemainingTimeAction 的 `useSnapshotBuff` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBuildableType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBuildableTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBuildableType, Assembly-CSharp";
  /** CheckBuildableTypeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "ALL" | "MELEE" | "RANGED";
  /** CheckBuildableTypeAction 的 `checkOriginCondition` 配置字段；准确战斗语义待确认。 */
  "_checkOriginCondition": boolean;
  /** CheckBuildableTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBuildableTypeOfCharacterRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBuildableTypeOfCharacterRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBuildableTypeOfCharacterRootTile, Assembly-CSharp";
  /** CheckBuildableTypeOfCharacterRootTileAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
  "_buildableType": "ALL" | "MELEE" | "NONE" | "RANGED";
  /** CheckBuildableTypeOfCharacterRootTileAction 的 `filterAllUnit` 配置字段；准确战斗语义待确认。 */
  "_filterAllUnit": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckBuildCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckBuildCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckBuildCnt, Assembly-CSharp";
  /** CheckBuildCntAction 的 `checkBuildCnt` 配置字段；准确战斗语义待确认。 */
  "_checkBuildCnt": number;
  /** CheckBuildCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "EQUALS" | "GT" | "LE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCanTriggerLikeAttack, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCanTriggerLikeAttackAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCanTriggerLikeAttack, Assembly-CSharp";
  /** CheckCanTriggerLikeAttackAction 的 `attackTimeBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_attackTimeBlackboardKey": string;
  /** CheckCanTriggerLikeAttackAction 的 `attackTriggerNodes` 配置字段；准确战斗语义待确认。 */
  "_attackTriggerNodes": Array<BattleAction>;
  /** CheckCanTriggerLikeAttackAction 的 `intervalCacheKey` 配置字段；准确战斗语义待确认。 */
  "_intervalCacheKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCanUseAtkOrCbt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCanUseAtkOrCbtAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCanUseAtkOrCbt, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCharacterData, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCharacterDataAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCharacterData, Assembly-CSharp";
  /** CheckCharacterDataAction 的 `filterAlias` 配置字段；准确战斗语义待确认。 */
  "_filterAlias": boolean;
  /** CheckCharacterDataAction 的 `filterAliasFixed` 配置字段；准确战斗语义待确认。 */
  "_filterAliasFixed": boolean;
  /** CheckCharacterDataAction 的 `filterPredefine` 配置字段；准确战斗语义待确认。 */
  "_filterPredefine": boolean;
  /** CheckCharacterDataAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckCharacterDefaultDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckCharacterDefaultDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckCharacterDefaultDirection, Assembly-CSharp";
  /** CheckCharacterDefaultDirectionAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": string;
  /** CheckCharacterDefaultDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** CheckCharacterDefaultDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "SOURCE" | "TARGET";
  /** CheckCharacterDefaultDirectionAction 的 `useBB` 配置字段；准确战斗语义待确认。 */
  "_useBB": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC04 = CheckBuffAbnormalFlagsAction | CheckBuffAttributeModifierChangedAction | CheckBuffRemainingTimeAction | CheckBuildableTypeAction | CheckBuildableTypeOfCharacterRootTileAction | CheckBuildCntAction | CheckCanTriggerLikeAttackAction | CheckCanUseAtkOrCbtAction | CheckCharacterDataAction | CheckCharacterDefaultDirectionAction;
