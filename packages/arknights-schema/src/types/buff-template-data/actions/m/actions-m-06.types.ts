/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyEnemySkillMaxTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyEnemySkillMaxTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyEnemySkillMaxTarget, Assembly-CSharp";
  /** ModifyEnemySkillMaxTargetAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
  "_checkSkillActive": boolean;
  /** ModifyEnemySkillMaxTargetAction 的 `maxTarget` 配置字段；准确战斗语义待确认。 */
  "_maxTarget": number;
  /** ModifyEnemySkillMaxTargetAction 的 `skillKey` 配置字段；准确战斗语义待确认。 */
  "_skillKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyEnemySpUIFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyEnemySpUIFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyEnemySpUIFlag, Assembly-CSharp";
  /** ModifyEnemySpUIFlagAction 的 `isShow` 配置字段；准确战斗语义待确认。 */
  "_isShow": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyFootballKickValue, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyFootballKickValueAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyFootballKickValue, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyFunnelMaxAtkScaleMultiplier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyFunnelMaxAtkScaleMultiplierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyFunnelMaxAtkScaleMultiplier, Assembly-CSharp";
  /** ModifyFunnelMaxAtkScaleMultiplierAction 的 `resetToOne` 配置字段；准确战斗语义待确认。 */
  "_resetToOne": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyGlobalBuffBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyGlobalBuffBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyGlobalBuffBlackboard, Assembly-CSharp";
  /** ModifyGlobalBuffBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。 */
  "_addition": number;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ModifyGlobalBuffBlackboardAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
  "_globalBuffKey": string;
  /** ModifyGlobalBuffBlackboardAction 的 `maxValKey` 配置字段；准确战斗语义待确认。 */
  "_maxValKey": string;
  /** ModifyGlobalBuffBlackboardAction 的 `tryAddBuffIfModified` 配置字段；准确战斗语义待确认。 */
  "_tryAddBuffIfModified": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyGraphicHolderHeight, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyGraphicHolderHeightAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyGraphicHolderHeight, Assembly-CSharp";
  /** ModifyGraphicHolderHeightAction 的 `audioSignalOnStop` 配置字段；准确战斗语义待确认。 */
  "_audioSignalOnStop": string;
  /** ModifyGraphicHolderHeightAction 的 `duration` 配置字段；准确战斗语义待确认。 */
  "_duration": number;
  /** ModifyGraphicHolderHeightAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
  "_durationKey": string;
  /** ModifyGraphicHolderHeightAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": number;
  /** ModifyGraphicHolderHeightAction 的 `OffsetKey` 配置字段；准确战斗语义待确认。 */
  "_OffsetKey": string;
  /** ModifyGraphicHolderHeightAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** ModifyGraphicHolderHeightAction 的 `useGlobalPos` 配置字段；准确战斗语义待确认。 */
  "_useGlobalPos": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyLifePoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyLifePointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyLifePoint, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ModifyLifePointAction 的 `isReachExit` 配置字段；准确战斗语义待确认。 */
  "_isReachExit": boolean;
  /** ModifyLifePointAction 的 `isSub` 配置字段；准确战斗语义待确认。 */
  "_isSub": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyMaxCost, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyMaxCostAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyMaxCost, Assembly-CSharp";
  /** ModifyMaxCostAction 的 `ensureCurCostNotExceedMax` 配置字段；准确战斗语义待确认。 */
  "_ensureCurCostNotExceedMax": boolean;
  /** ModifyMaxCostAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
  "_isMinus": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyOverlapExcludeSourceId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyOverlapExcludeSourceIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyOverlapExcludeSourceId, Assembly-CSharp";
  /** ModifyOverlapExcludeSourceIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
  "_isRemove": boolean;
  /** ModifyOverlapExcludeSourceIdAction 的 `sourceIds` 配置字段；准确战斗语义待确认。 */
  "_sourceIds": Array<string>;
  /** ModifyOverlapExcludeSourceIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyOverlapSourceId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyOverlapSourceIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyOverlapSourceId, Assembly-CSharp";
  /** ModifyOverlapSourceIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
  "_isRemove": boolean;
  /** ModifyOverlapSourceIdAction 的 `sourceId` 配置字段；准确战斗语义待确认。 */
  "_sourceId": string;
  /** ModifyOverlapSourceIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
  /** ModifyOverlapSourceIdAction 的 `useBlackboardId` 配置字段；准确战斗语义待确认。 */
  "_useBlackboardId": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM06 = ModifyEnemySkillMaxTargetAction | ModifyEnemySpUIFlagAction | ModifyFootballKickValueAction | ModifyFunnelMaxAtkScaleMultiplierAction | ModifyGlobalBuffBlackboardAction | ModifyGraphicHolderHeightAction | ModifyLifePointAction | ModifyMaxCostAction | ModifyOverlapExcludeSourceIdAction | ModifyOverlapSourceIdAction;
