/**
 * buff_template_data 的 E 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyLrtsiaCheckDamageBlocked, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyLrtsiaCheckDamageBlockedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyLrtsiaCheckDamageBlocked, Assembly-CSharp";
  /** EnemyLrtsiaCheckDamageBlockedAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** EnemyLrtsiaCheckDamageBlockedAction 的 `angleKey` 配置字段；准确战斗语义待确认。 */
  "_angleKey": string;
  /** EnemyLrtsiaCheckDamageBlockedAction 的 `blockAngle` 配置字段；准确战斗语义待确认。 */
  "_blockAngle": number;
  /** EnemyLrtsiaCheckDamageBlockedAction 的 `clockWise` 配置字段；准确战斗语义待确认。 */
  "_clockWise": boolean;
  /** EnemyLrtsiaCheckDamageBlockedAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** EnemyLrtsiaCheckDamageBlockedAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "MODIFIER_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyLrtsiaSummonEnemyOnSurroundTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyLrtsiaSummonEnemyOnSurroundTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyLrtsiaSummonEnemyOnSurroundTiles, Assembly-CSharp";
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `assignTileBBAfterSummon` 配置字段；准确战斗语义待确认。 */
  "_assignTileBBAfterSummon": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `checkCharIdBeforeSummon` 配置字段；准确战斗语义待确认。 */
  "_checkCharIdBeforeSummon": boolean;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `checkTileBBBeforeSummon` 配置字段；准确战斗语义待确认。 */
  "_checkTileBBBeforeSummon": boolean;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `condType` 配置字段；准确战斗语义待确认。 */
  "_condType": "LE";
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": string;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `forbiddenIds` 配置字段；准确战斗语义待确认。 */
  "_forbiddenIds": Array<string>;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `host` 配置字段；准确战斗语义待确认。 */
  "_host": string;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `useSpecialHost` 配置字段；准确战斗语义待确认。 */
  "_useSpecialHost": boolean;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `valueToAssign` 配置字段；准确战斗语义待确认。 */
  "_valueToAssign": number;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
  "_valueToCompare": number;
  /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
  "_waitTime": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyReconstructRouteToBlackboardGrid, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyReconstructRouteToBlackboardGridAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyReconstructRouteToBlackboardGrid, Assembly-CSharp";
  /** EnemyReconstructRouteToBlackboardGridAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** EnemyReconstructRouteToBlackboardGridAction 的 `randomReachOffset` 配置字段；准确战斗语义待确认。 */
  "_randomReachOffset": number;
  /** EnemyReconstructRouteToBlackboardGridAction 的 `randomReachOffsetKey` 配置字段；准确战斗语义待确认。 */
  "_randomReachOffsetKey": string;
  /** EnemyReconstructRouteToBlackboardGridAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** EnemyReconstructRouteToBlackboardGridAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemySkipWaitCheckPoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemySkipWaitCheckPointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemySkipWaitCheckPoint, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** EnemySkipWaitCheckPointAction 的 `useSkipInsteadOfSetToZero` 配置字段；准确战斗语义待确认。 */
  "_useSkipInsteadOfSetToZero": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnsureBlackboardDefaultValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnsureBlackboardDefaultValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnsureBlackboardDefaultValue, Assembly-CSharp";
  /** EnsureBlackboardDefaultValueAction 的 `defaultSettings` 配置字段；准确战斗语义待确认。 */
  "_defaultSettings": Array<{
                           /** 黑板参数键或当前配置项的稳定键。 */
                           "key": string;
                           /** EnsureBlackboardDefaultValueAction 的 `overrideIfExists` 配置字段；准确战斗语义待确认。 */
                           "overrideIfExists": boolean;
                           /** EnsureBlackboardDefaultValueAction 的 `val` 配置字段；准确战斗语义待确认。 */
                           "val": number;
                           /** EnsureBlackboardDefaultValueAction 的 `valStr` 配置字段；准确战斗语义待确认。 */
                           "valStr": null | string;
                         }>;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnsureDmgOrHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnsureDmgOrHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnsureDmgOrHeal, Assembly-CSharp";
  /** EnsureDmgOrHealAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnsureFeverSystem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnsureFeverSystemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnsureFeverSystem, Assembly-CSharp";
  /** EnsureFeverSystemAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
  "_feverKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EpDamageScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EpDamageScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EpDamageScale, Assembly-CSharp";
  /** EpDamageScaleAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** EpDamageScaleAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
  "_elementType": "DARK" | "FIRE" | "NONE" | "SANITY";
  /** EpDamageScaleAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
  "_filterApplyWay": boolean;
  /** EpDamageScaleAction 的 `filterElementType` 配置字段；准确战斗语义待确认。 */
  "_filterElementType": boolean;
  /** EpDamageScaleAction 的 `isOneMinus` 配置字段；准确战斗语义待确认。 */
  "_isOneMinus": boolean;
  /** EpDamageScaleAction 的 `isStackable` 配置字段；准确战斗语义待确认。 */
  "_isStackable": boolean;
  /** EpDamageScaleAction 的 `isValidStackCnt` 配置字段；准确战斗语义待确认。 */
  "_isValidStackCnt": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EqualizeTargetHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EqualizeTargetHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EqualizeTargetHpRatio, Assembly-CSharp";
  /** EqualizeTargetHpRatioAction 的 `hpRatio` 配置字段；准确战斗语义待确认。 */
  "_hpRatio": number;
  /** EqualizeTargetHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
  "_skipModifierEvent": boolean;
  /** EqualizeTargetHpRatioAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** EqualizeTargetHpRatioAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
  /** EqualizeTargetHpRatioAction 的 `useSourceHpRatio` 配置字段；准确战斗语义待确认。 */
  "_useSourceHpRatio": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Evade, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EvadeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Evade, Assembly-CSharp";
  /** EvadeAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
  "_applyWayFilter": string;
  /** EvadeAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
  "_damageMask": "ANY_ATTACK" | "ANY_ATTACK_EXCEPT_ELEMENT" | "MAGICAL" | "PHYSICAL" | "PHYSICAL_AND_MAGICAL";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionE03 = EnemyLrtsiaCheckDamageBlockedAction | EnemyLrtsiaSummonEnemyOnSurroundTilesAction | EnemyReconstructRouteToBlackboardGridAction | EnemySkipWaitCheckPointAction | EnsureBlackboardDefaultValueAction | EnsureDmgOrHealAction | EnsureFeverSystemAction | EpDamageScaleAction | EqualizeTargetHpRatioAction | EvadeAction;
