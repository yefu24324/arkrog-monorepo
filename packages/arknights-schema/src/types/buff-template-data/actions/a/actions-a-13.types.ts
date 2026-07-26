/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddEnemyIdToCharacterSharedBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddEnemyIdToCharacterSharedBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddEnemyIdToCharacterSharedBlackboard, Assembly-CSharp";
  /** AddEnemyIdToCharacterSharedBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "BUFF_SOURCE";
  /** AddEnemyIdToCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddExcludeCharacterToDynamicBuffTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddExcludeCharacterToDynamicBuffTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddExcludeCharacterToDynamicBuffTile, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddFearTargetTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddFearTargetTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddFearTargetTiles, Assembly-CSharp";
  /** AddFearTargetTilesAction 的 `maxDegree` 配置字段；准确战斗语义待确认。 */
  "_maxDegree": number;
  /** AddFearTargetTilesAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
  "_rangeRadius": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddFeverBySourceIfNotFull, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddFeverBySourceIfNotFullAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddFeverBySourceIfNotFull, Assembly-CSharp";
  /** AddFeverBySourceIfNotFullAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
  "_feverKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddFunnelAbilityActiveCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddFunnelAbilityActiveCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddFunnelAbilityActiveCnt, Assembly-CSharp";
  /** AddFunnelAbilityActiveCntAction 的 `abilityNames` 配置字段；准确战斗语义待确认。 */
  "_abilityNames": Array<string>;
  /** AddFunnelAbilityActiveCntAction 的 `addCnt` 配置字段；准确战斗语义待确认。 */
  "_addCnt": number;
  /** AddFunnelAbilityActiveCntAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddGameFinishBlockerByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddGameFinishBlockerByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddGameFinishBlockerByKey, Assembly-CSharp";
  /** AddGameFinishBlockerByKeyAction 的 `blockerKey` 配置字段；准确战斗语义待确认。 */
  "_blockerKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddGlobalBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddGlobalBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddGlobalBlackboard, Assembly-CSharp";
  /** AddGlobalBlackboardAction 的 `addString` 配置字段；准确战斗语义待确认。 */
  "_addString": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AddGlobalBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。 */
  "_channel": "CHARACTER" | "ENEMY" | "LEVEL" | "ROGUELIKE";
  /** AddGlobalBlackboardAction 的 `overwrite` 配置字段；准确战斗语义待确认。 */
  "_overwrite": boolean;
  /** AddGlobalBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** AddGlobalBlackboardAction 的 `valueBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_valueBlackboardKey": string;
  /** AddGlobalBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。 */
  "_valueStr": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddHeightOffsetToSpine, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddHeightOffsetToSpineAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddHeightOffsetToSpine, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AddHeightOffsetToSpineAction 的 `instant` 配置字段；准确战斗语义待确认。 */
  "_instant": boolean;
  /** AddHeightOffsetToSpineAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": number;
  /** AddHeightOffsetToSpineAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
  /** AddHeightOffsetToSpineAction 的 `isSet` 配置字段；准确战斗语义待确认。 */
  "isSet": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddOrRemoveRuntimeUIPlugin, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddOrRemoveRuntimeUIPluginAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddOrRemoveRuntimeUIPlugin, Assembly-CSharp";
  /** AddOrRemoveRuntimeUIPluginAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
  "_isRemove": boolean;
  /** AddOrRemoveRuntimeUIPluginAction 的 `name` 配置字段；准确战斗语义待确认。 */
  "_name": string;
  /** AddOrRemoveRuntimeUIPluginAction 的 `playAudio` 配置字段；准确战斗语义待确认。 */
  "_playAudio": null;
  /** AddOrRemoveRuntimeUIPluginAction 的 `position` 配置字段；准确战斗语义待确认。 */
  "_position": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddTempLifePoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddTempLifePointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddTempLifePoint, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA13 = AddEnemyIdToCharacterSharedBlackboardAction | AddExcludeCharacterToDynamicBuffTileAction | AddFearTargetTilesAction | AddFeverBySourceIfNotFullAction | AddFunnelAbilityActiveCntAction | AddGameFinishBlockerByKeyAction | AddGlobalBlackboardAction | AddHeightOffsetToSpineAction | AddOrRemoveRuntimeUIPluginAction | AddTempLifePointAction;
