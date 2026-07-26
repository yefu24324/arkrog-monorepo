/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDistanceToTileCenter, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDistanceToTileCenterAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDistanceToTileCenter, Assembly-CSharp";
  /** CheckDistanceToTileCenterAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LE" | "LT";
  /** CheckDistanceToTileCenterAction 的 `distance` 配置字段；准确战斗语义待确认。 */
  "_distance": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeInEnum, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDynamicBuffTileModeInEnumAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeInEnum, Assembly-CSharp";
  /** CheckDynamicBuffTileModeInEnumAction 的 `exclude` 配置字段；准确战斗语义待确认。 */
  "_exclude": boolean;
  /** CheckDynamicBuffTileModeInEnumAction 的 `modes` 配置字段；准确战斗语义待确认。 */
  "_modes": Array<number>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeOneLine, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckDynamicBuffTileModeOneLineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeOneLine, Assembly-CSharp";
  /** CheckDynamicBuffTileModeOneLineAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
  "_blackBoardKey": string;
  /** CheckDynamicBuffTileModeOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** CheckDynamicBuffTileModeOneLineAction 的 `dontCheckButRecordDirectionToBb` 配置字段；准确战斗语义待确认。 */
  "_dontCheckButRecordDirectionToBb": boolean;
  /** CheckDynamicBuffTileModeOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。 */
  "_exceptCurrentTile": boolean;
  /** CheckDynamicBuffTileModeOneLineAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** CheckDynamicBuffTileModeOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。 */
  "_useCurrentTileDirection": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyAbilityName, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyAbilityNameAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyAbilityName, Assembly-CSharp";
  /** CheckEnemyAbilityNameAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** CheckEnemyAbilityNameAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyCountWhenAttackDoCast, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyCountWhenAttackDoCastAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyCountWhenAttackDoCast, Assembly-CSharp";
  /** CheckEnemyCountWhenAttackDoCastAction 的 `checkSkillAbility` 配置字段；准确战斗语义待确认。 */
  "_checkSkillAbility": boolean;
  /** CheckEnemyCountWhenAttackDoCastAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "GE";
  /** CheckEnemyCountWhenAttackDoCastAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
  "_countKey": string;
  /** CheckEnemyCountWhenAttackDoCastAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyCurrentCheckpoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyCurrentCheckpointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyCurrentCheckpoint, Assembly-CSharp";
  /** CheckEnemyCurrentCheckpointAction 的 `checkpointTypes` 配置字段；准确战斗语义待确认。 */
  "_checkpointTypes": Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyCursorTargetPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyCursorTargetPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyCursorTargetPos, Assembly-CSharp";
  /** CheckEnemyCursorTargetPosAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** CheckEnemyCursorTargetPosAction 的 `cursorIndexOffset` 配置字段；准确战斗语义待确认。 */
  "_cursorIndexOffset": number;
  /** CheckEnemyCursorTargetPosAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** CheckEnemyCursorTargetPosAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyDirection, Assembly-CSharp";
  /** CheckEnemyDirectionAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
  "_bbKey": string;
  /** CheckEnemyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** CheckEnemyDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** CheckEnemyDirectionAction 的 `useBB` 配置字段；准确战斗语义待确认。 */
  "_useBB": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyFaceAndMoveDir, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyFaceAndMoveDirAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyFaceAndMoveDir, Assembly-CSharp";
  /** CheckEnemyFaceAndMoveDirAction 的 `checkType` 配置字段；准确战斗语义待确认。 */
  "_checkType": "OPPOSITE" | "SAME";
  /** CheckEnemyFaceAndMoveDirAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckEnemyId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckEnemyIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckEnemyId, Assembly-CSharp";
  /** CheckEnemyIdAction 的 `filterIds` 配置字段；准确战斗语义待确认。 */
  "_filterIds": Array<string>;
  /** CheckEnemyIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** CheckEnemyIdAction 的 `loadIdFromBb` 配置字段；准确战斗语义待确认。 */
  "_loadIdFromBb": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC08 = CheckDistanceToTileCenterAction | CheckDynamicBuffTileModeInEnumAction | CheckDynamicBuffTileModeOneLineAction | CheckEnemyAbilityNameAction | CheckEnemyCountWhenAttackDoCastAction | CheckEnemyCurrentCheckpointAction | CheckEnemyCursorTargetPosAction | CheckEnemyDirectionAction | CheckEnemyFaceAndMoveDirAction | CheckEnemyIdAction;
