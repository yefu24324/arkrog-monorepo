/**
 * buff_template_data 的 I 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsPropLikeEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsPropLikeEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsPropLikeEnemy, Assembly-CSharp";
  /** IsPropLikeEnemyAction 的 `CheckIsInPropLikeState` 配置字段；准确战斗语义待确认。 */
  "_CheckIsInPropLikeState": boolean;
  /** IsPropLikeEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsPropLikeStaticBlockToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsPropLikeStaticBlockTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsPropLikeStaticBlockToken, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsRallyPoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsRallyPointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsRallyPoint, Assembly-CSharp";
  /** IsRallyPointAction 的 `checkIsInRallyPointMode` 配置字段；准确战斗语义待确认。 */
  "_checkIsInRallyPointMode": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsRogueLikeBoss, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsRogueLikeBossAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsRogueLikeBoss, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsSourceBlackboardEqualWithUnitUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsSourceBlackboardEqualWithUnitUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsSourceBlackboardEqualWithUnitUid, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** IsSourceBlackboardEqualWithUnitUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsStationReadyForSpawnTrain, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsStationReadyForSpawnTrainAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsStationReadyForSpawnTrain, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsSummonerAlive, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsSummonerAliveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsSummonerAlive, Assembly-CSharp";
  /** IsSummonerAliveAction 的 `token` 配置字段；准确战斗语义待确认。 */
  "_token": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsTargetGiantBoss, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsTargetGiantBossAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsTargetGiantBoss, Assembly-CSharp";
  /** IsTargetGiantBossAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsTargetInDialog, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsTargetInDialogAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsTargetInDialog, Assembly-CSharp";
  /** IsTargetInDialogAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+IsTargetInEPBreakRecovery, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface IsTargetInEPBreakRecoveryAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+IsTargetInEPBreakRecovery, Assembly-CSharp";
  /** IsTargetInEPBreakRecoveryAction 的 `checkRecoveryType` 配置字段；准确战斗语义待确认。 */
  "_checkRecoveryType": boolean;
  /** IsTargetInEPBreakRecoveryAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
  "_elementType": "DARK" | "FIRE" | "NONE" | "SANITY";
  /** IsTargetInEPBreakRecoveryAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "MODIFIER_TARGET" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionI06 = IsPropLikeEnemyAction | IsPropLikeStaticBlockTokenAction | IsRallyPointAction | IsRogueLikeBossAction | IsSourceBlackboardEqualWithUnitUidAction | IsStationReadyForSpawnTrainAction | IsSummonerAliveAction | IsTargetGiantBossAction | IsTargetInDialogAction | IsTargetInEPBreakRecoveryAction;
