/**
 * buff_template_data 的 R 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingCameraZoomIn, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingCameraZoomInAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingCameraZoomIn, Assembly-CSharp";
  /** RacingCameraZoomInAction 的 `cameraFollowSpeedFactor` 配置字段；准确战斗语义待确认。 */
  "_cameraFollowSpeedFactor": number;
  /** RacingCameraZoomInAction 的 `zoomDuration` 配置字段；准确战斗语义待确认。 */
  "_zoomDuration": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyAddAttribute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyAddAttributeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyAddAttribute, Assembly-CSharp";
  /** RacingEnemyAddAttributeAction 的 `isFinish` 配置字段；准确战斗语义待确认。 */
  "_isFinish": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyBleeding, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyBleedingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyBleeding, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyFilterByMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyFilterByModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyFilterByMode, Assembly-CSharp";
  /** RacingEnemyFilterByModeAction 的 `racingMode` 配置字段；准确战斗语义待确认。 */
  "_racingMode": "Racing" | "Recover";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyFilterByMoveSpeed, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyFilterByMoveSpeedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyFilterByMoveSpeed, Assembly-CSharp";
  /** RacingEnemyFilterByMoveSpeedAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "LT";
  /** RacingEnemyFilterByMoveSpeedAction 的 `isRealSpeed` 配置字段；准确战斗语义待确认。 */
  "_isRealSpeed": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyFilterByRanking, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyFilterByRankingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyFilterByRanking, Assembly-CSharp";
  /** RacingEnemyFilterByRankingAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "EQUALS" | "LT";
  /** RacingEnemyFilterByRankingAction 的 `isReverseRanking` 配置字段；准确战斗语义待确认。 */
  "_isReverseRanking": boolean;
  /** RacingEnemyFilterByRankingAction 的 `ranking` 配置字段；准确战斗语义待确认。 */
  "_ranking": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyIsMine, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyIsMineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyIsMine, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyLockMagnet, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyLockMagnetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyLockMagnet, Assembly-CSharp";
  /** RacingEnemyLockMagnetAction 的 `magnetSpeed` 配置字段；准确战斗语义待确认。 */
  "_magnetSpeed": number;
  /** RacingEnemyLockMagnetAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** RacingEnemyLockMagnetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** RacingEnemyLockMagnetAction 的 `unlock` 配置字段；准确战斗语义待确认。 */
  "_unlock": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RacingEnemyRecover, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RacingEnemyRecoverAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RacingEnemyRecover, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+RaiseDialogue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface RaiseDialogueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+RaiseDialogue, Assembly-CSharp";
  /** RaiseDialogueAction 的 `doNotCheckSource` 配置字段；准确战斗语义待确认。 */
  "_doNotCheckSource": boolean;
  /** RaiseDialogueAction 的 `isAppearDialog` 配置字段；准确战斗语义待确认。 */
  "_isAppearDialog": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionR01 = RacingCameraZoomInAction | RacingEnemyAddAttributeAction | RacingEnemyBleedingAction | RacingEnemyFilterByModeAction | RacingEnemyFilterByMoveSpeedAction | RacingEnemyFilterByRankingAction | RacingEnemyIsMineAction | RacingEnemyLockMagnetAction | RacingEnemyRecoverAction | RaiseDialogueAction;
