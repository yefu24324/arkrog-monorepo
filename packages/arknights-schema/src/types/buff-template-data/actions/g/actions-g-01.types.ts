/**
 * buff_template_data 的 G 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GainToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GainTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GainToken, Assembly-CSharp";
  /** GainTokenAction 的 `effectKeys` 配置字段；准确战斗语义待确认。 */
  "_effectKeys": null | Array<string>;
  /** GainTokenAction 的 `extraAudioKey` 配置字段；准确战斗语义待确认。 */
  "_extraAudioKey": null | string;
  /** GainTokenAction 的 `extraLogKey` 配置字段；准确战斗语义待确认。 */
  "_extraLogKey": null | string;
  /** GainTokenAction 的 `getPlayerSideFromActionTargetType` 配置字段；准确战斗语义待确认。 */
  "_getPlayerSideFromActionTargetType": boolean;
  /** GainTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
  "_rechargeTiming": "NORMAL";
  /** GainTokenAction 的 `spiltTokenKey` 配置字段；准确战斗语义待确认。 */
  "_spiltTokenKey": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GameCityCheckEnemyInExit, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GameCityCheckEnemyInExitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GameCityCheckEnemyInExit, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GameCityIsResting, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GameCityIsRestingAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GameCityIsResting, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GameCityTriggerEnvSystem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GameCityTriggerEnvSystemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GameCityTriggerEnvSystem, Assembly-CSharp";
  /** GameCityTriggerEnvSystemAction 的 `envKey` 配置字段；准确战斗语义待确认。 */
  "_envKey": string;
  /** GameCityTriggerEnvSystemAction 的 `uiType` 配置字段；准确战斗语义待确认。 */
  "_uiType": "NORMAL" | "STEAL";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GameCityUpdateScore, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GameCityUpdateScoreAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GameCityUpdateScore, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GatherDropItem, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GatherDropItemAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GatherDropItem, Assembly-CSharp";
  /** GatherDropItemAction 的 `dropCountKey` 配置字段；准确战斗语义待确认。 */
  "_dropCountKey": string;
  /** GatherDropItemAction 的 `resourceTypeKey` 配置字段；准确战斗语义待确认。 */
  "_resourceTypeKey": string;
  /** GatherDropItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GatherModifyMaxResourceCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GatherModifyMaxResourceCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GatherModifyMaxResourceCnt, Assembly-CSharp";
  /** GatherModifyMaxResourceCntAction 的 `maxResCnt` 配置字段；准确战斗语义待确认。 */
  "_maxResCnt": number;
  /** GatherModifyMaxResourceCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GatherRegisterListener, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GatherRegisterListenerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GatherRegisterListener, Assembly-CSharp";
  /** GatherRegisterListenerAction 的 `dropType` 配置字段；准确战斗语义待确认。 */
  "_dropType": "DEFAULT";
  /** GatherRegisterListenerAction 的 `higherMask` 配置字段；准确战斗语义待确认。 */
  "_higherMask": number | "NORMAL_UPPER_MASK" | "TRANSFER";
  /** GatherRegisterListenerAction 的 `interactionRadius` 配置字段；准确战斗语义待确认。 */
  "_interactionRadius": number;
  /** GatherRegisterListenerAction 的 `listenerType` 配置字段；准确战斗语义待确认。 */
  "_listenerType": "BASE" | "ENEMY" | "PRODUCER" | "TRANSFER";
  /** GatherRegisterListenerAction 的 `maxResCnt` 配置字段；准确战斗语义待确认。 */
  "_maxResCnt": number;
  /** GatherRegisterListenerAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": null | string;
  /** GatherRegisterListenerAction 的 `spatialMode` 配置字段；准确战斗语义待确认。 */
  "_spatialMode": "Grid" | "Radial";
  /** GatherRegisterListenerAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** GatherRegisterListenerAction 的 `transferPriority` 配置字段；准确战斗语义待确认。 */
  "_transferPriority": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GatherRemoveListener, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GatherRemoveListenerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GatherRemoveListener, Assembly-CSharp";
  /** GatherRemoveListenerAction 的 `convertWhenRemove` 配置字段；准确战斗语义待确认。 */
  "_convertWhenRemove": boolean;
  /** GatherRemoveListenerAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+GetSandboxV3IgnoreFixedPlayTimeStatistics, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface GetSandboxV3IgnoreFixedPlayTimeStatisticsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+GetSandboxV3IgnoreFixedPlayTimeStatistics, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionG01 = GainTokenAction | GameCityCheckEnemyInExitAction | GameCityIsRestingAction | GameCityTriggerEnvSystemAction | GameCityUpdateScoreAction | GatherDropItemAction | GatherModifyMaxResourceCntAction | GatherRegisterListenerAction | GatherRemoveListenerAction | GetSandboxV3IgnoreFixedPlayTimeStatisticsAction;
