/**
 * buff_template_data 的 C 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetEnemyId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetEnemyIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetEnemyId, Assembly-CSharp";
  /** CheckTargetEnemyIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
  "_isUnset": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetEpIsFull, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetEpIsFullAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetEpIsFull, Assembly-CSharp";
  /** CheckTargetEpIsFullAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
  "_elementType": "NONE" | "WATER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetGridPositionRowOrColWithBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetGridPositionRowOrColWithBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetGridPositionRowOrColWithBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** CheckTargetGridPositionRowOrColWithBBAction 的 `checkRow` 配置字段；准确战斗语义待确认。 */
  "_checkRow": boolean;
  /** CheckTargetGridPositionRowOrColWithBBAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
  "_compareType": "GE" | "GT" | "LE" | "LT";
  /** CheckTargetGridPositionRowOrColWithBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "MODIFIER_SOURCE" | "MODIFIER_TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetInRange, Assembly-CSharp";
  /** CheckTargetInRangeAction 的 `autoRange` 配置字段；准确战斗语义待确认。 */
  "_autoRange": boolean;
  /** CheckTargetInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
  "_checkRadius": boolean;
  /** CheckTargetInRangeAction 的 `customDirection` 配置字段；准确战斗语义待确认。 */
  "_customDirection": boolean;
  /** CheckTargetInRangeAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": number;
  /** CheckTargetInRangeAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
  "_directionKey": string;
  /** CheckTargetInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** CheckTargetInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** CheckTargetInRangeAction 的 `soureceType` 配置字段；准确战斗语义待确认。 */
  "_soureceType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetProfession, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetProfessionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetProfession, Assembly-CSharp";
  /** CheckTargetProfessionAction 的 `checkSubProfession` 配置字段；准确战斗语义待确认。 */
  "_checkSubProfession": boolean;
  /** CheckTargetProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
  "_profession": Array<"CASTER" | "MEDIC" | "PIONEER" | "SNIPER" | "SPECIAL" | "SUPPORT" | "TANK" | "TOKEN" | "TOKEN, TRAP" | "TRAP" | "WARRIOR" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, PIONEER" | "WARRIOR, SNIPER, TANK, MEDIC, SUPPORT, CASTER, SPECIAL, TOKEN, PIONEER">;
  /** CheckTargetProfessionAction 的 `readProfessionFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_readProfessionFromBlackboard": boolean;
  /** CheckTargetProfessionAction 的 `subProfessions` 配置字段；准确战斗语义待确认。 */
  "_subProfessions": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetRootTile, Assembly-CSharp";
  /** CheckTargetRootTileAction 的 `characterKeys` 配置字段；准确战斗语义待确认。 */
  "_characterKeys": null | Array<string>;
  /** CheckTargetRootTileAction 的 `checkTargetTopBuiltInTile` 配置字段；准确战斗语义待确认。 */
  "_checkTargetTopBuiltInTile": boolean;
  /** CheckTargetRootTileAction 的 `checkTileKey` 配置字段；准确战斗语义待确认。 */
  "_checkTileKey": boolean;
  /** CheckTargetRootTileAction 的 `enemyKeys` 配置字段；准确战斗语义待确认。 */
  "_enemyKeys": null | Array<string>;
  /** CheckTargetRootTileAction 的 `hasCertainEnemy` 配置字段；准确战斗语义待确认。 */
  "_hasCertainEnemy": boolean;
  /** CheckTargetRootTileAction 的 `hasCharacter` 配置字段；准确战斗语义待确认。 */
  "_hasCharacter": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
  /** CheckTargetRootTileAction 的 `tileKeys` 配置字段；准确战斗语义待确认。 */
  "_tileKeys": null | Array<string>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetRootTileBuildableByUid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetRootTileBuildableByUidAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetRootTileBuildableByUid, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetRootTileInfoMask, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetRootTileInfoMaskAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetRootTileInfoMask, Assembly-CSharp";
  /** CheckTargetRootTileInfoMaskAction 的 `infoMask` 配置字段；准确战斗语义待确认。 */
  "_infoMask": "KEEP_REVEALED";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetRootTileMatchAnyBBValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetRootTileMatchAnyBBValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetRootTileMatchAnyBBValue, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+CheckTargetSkillDurationType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface CheckTargetSkillDurationTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+CheckTargetSkillDurationType, Assembly-CSharp";
  /** CheckTargetSkillDurationTypeAction 的 `checkTypes` 配置字段；准确战斗语义待确认。 */
  "_checkTypes": null | Array<string>;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionC16 = CheckTargetEnemyIdAction | CheckTargetEpIsFullAction | CheckTargetGridPositionRowOrColWithBBAction | CheckTargetInRangeAction | CheckTargetProfessionAction | CheckTargetRootTileAction | CheckTargetRootTileBuildableByUidAction | CheckTargetRootTileInfoMaskAction | CheckTargetRootTileMatchAnyBBValueAction | CheckTargetSkillDurationTypeAction;
