/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchDynamicBuffTileModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileMode, Assembly-CSharp";
  /** SwitchDynamicBuffTileModeAction 的 `decBbKey` 配置字段；准确战斗语义待确认。 */
  "_decBbKey": string;
  /** SwitchDynamicBuffTileModeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** SwitchDynamicBuffTileModeAction 的 `operation` 配置字段；准确战斗语义待确认。 */
  "_operation": string;
  /** SwitchDynamicBuffTileModeAction 的 `specifyTileType` 配置字段；准确战斗语义待确认。 */
  "_specifyTileType": boolean;
  /** SwitchDynamicBuffTileModeAction 的 `tileType` 配置字段；准确战斗语义待确认。 */
  "_tileType": "REED_TILE";
  /** SwitchDynamicBuffTileModeAction 的 `useOwnerRootTile` 配置字段；准确战斗语义待确认。 */
  "_useOwnerRootTile": boolean;
  /** SwitchDynamicBuffTileModeAction 的 `useSwitchResult` 配置字段；准确战斗语义待确认。 */
  "_useSwitchResult": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeInRange, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchDynamicBuffTileModeInRangeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeInRange, Assembly-CSharp";
  /** SwitchDynamicBuffTileModeInRangeAction 的 `assignChangedCountToBb` 配置字段；准确战斗语义待确认。 */
  "_assignChangedCountToBb": boolean;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `checkTileKeys` 配置字段；准确战斗语义待确认。 */
  "_checkTileKeys": null | Array<string>;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `countBbKey` 配置字段；准确战斗语义待确认。 */
  "_countBbKey": string;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `decBbKey` 配置字段；准确战斗语义待确认。 */
  "_decBbKey": string;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `effectKeyOnTile` 配置字段；准确战斗语义待确认。 */
  "_effectKeyOnTile": string;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `operation` 配置字段；准确战斗语义待确认。 */
  "_operation": string;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `rangeRadiusKey` 配置字段；准确战斗语义待确认。 */
  "_rangeRadiusKey": string;
  /** SwitchDynamicBuffTileModeInRangeAction 的 `requireCharacterNotOn` 配置字段；准确战斗语义待确认。 */
  "_requireCharacterNotOn": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
  /** SwitchDynamicBuffTileModeInRangeAction 的 `useRangeRadius` 配置字段；准确战斗语义待确认。 */
  "_useRangeRadius": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeOneLine, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchDynamicBuffTileModeOneLineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeOneLine, Assembly-CSharp";
  /** SwitchDynamicBuffTileModeOneLineAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": null | string;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。 */
  "_direction": string;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `dontSwitchModeOnlyAssignTileCntToAbilityBb` 配置字段；准确战斗语义待确认。 */
  "_dontSwitchModeOnlyAssignTileCntToAbilityBb": boolean;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。 */
  "_exceptCurrentTile": boolean;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `modeIndexDeltaWhenFinalTile` 配置字段；准确战斗语义待确认。 */
  "_modeIndexDeltaWhenFinalTile": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** SwitchDynamicBuffTileModeOneLineAction 的 `switchOneTileEachTime` 配置字段；准确战斗语义待确认。 */
  "_switchOneTileEachTime": boolean;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `tileIndexKey` 配置字段；准确战斗语义待确认。 */
  "_tileIndexKey": null | string;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `updateDirectionBeforeApply` 配置字段；准确战斗语义待确认。 */
  "_updateDirectionBeforeApply": boolean;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。 */
  "_useCurrentTileDirection": boolean;
  /** SwitchDynamicBuffTileModeOneLineAction 的 `useLocationFromBBAsCurrentTile` 配置字段；准确战斗语义待确认。 */
  "_useLocationFromBBAsCurrentTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchDynamicBuffTileModeUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchDynamicBuffTileModeUseAbilitySelector, Assembly-CSharp";
  /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
  "_audioSignal": string;
  /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** SwitchDynamicBuffTileModeUseAbilitySelectorAction 的 `operation` 配置字段；准确战斗语义待确认。 */
  "_operation": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchMode, Assembly-CSharp";
  /** SwitchModeAction 的 `loadModeFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadModeFromBlackboard": boolean;
  /** SwitchModeAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** SwitchModeAction 的 `restartFSM` 配置字段；准确战斗语义待确认。 */
  "_restartFSM": boolean;
  /** SwitchModeAction 的 `restoreDefault` 配置字段；准确战斗语义待确认。 */
  "_restoreDefault": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchRacingMode, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchRacingModeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchRacingMode, Assembly-CSharp";
  /** SwitchRacingModeAction 的 `racingMode` 配置字段；准确战斗语义待确认。 */
  "_racingMode": "Racing" | "Recover";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchRallyPointCategory, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchRallyPointCategoryAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchRallyPointCategory, Assembly-CSharp";
  /** SwitchRallyPointCategoryAction 的 `category` 配置字段；准确战斗语义待确认。 */
  "_category": "DEFAULT" | "TRAP_OR_ITEM";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchSide, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchSideAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchSide, Assembly-CSharp";
  /** SwitchSideAction 的 `alwaysShowEnemyHp` 配置字段；准确战斗语义待确认。 */
  "_alwaysShowEnemyHp": boolean;
  /** SwitchSideAction 的 `markEnemyKilled` 配置字段；准确战斗语义待确认。 */
  "_markEnemyKilled": boolean;
  /** SwitchSideAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
  "_sideType": "ALLY" | "ENEMY";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchSkillCharWordToPassiveType, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchSkillCharWordToPassiveTypeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchSkillCharWordToPassiveType, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SwitchSkillRangeIdModeIndex, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SwitchSkillRangeIdModeIndexAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SwitchSkillRangeIdModeIndex, Assembly-CSharp";
  /** SwitchSkillRangeIdModeIndexAction 的 `mode` 配置字段；准确战斗语义待确认。 */
  "_mode": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS16 = SwitchDynamicBuffTileModeAction | SwitchDynamicBuffTileModeInRangeAction | SwitchDynamicBuffTileModeOneLineAction | SwitchDynamicBuffTileModeUseAbilitySelectorAction | SwitchModeAction | SwitchRacingModeAction | SwitchRallyPointCategoryAction | SwitchSideAction | SwitchSkillCharWordToPassiveTypeAction | SwitchSkillRangeIdModeIndexAction;
