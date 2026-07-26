/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FindSandboxV3BaseAndAssignTileToBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FindSandboxV3BaseAndAssignTileToBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FindSandboxV3BaseAndAssignTileToBlackboard, Assembly-CSharp";
  /** FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `gridColKey` 配置字段；准确战斗语义待确认。 */
  "_gridColKey": string;
  /** FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `gridRowKey` 配置字段；准确战斗语义待确认。 */
  "_gridRowKey": string;
  /** FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `useConstLocationKey` 配置字段；准确战斗语义待确认。 */
  "_useConstLocationKey": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishAllBuffsWithCertainAbnormalFlag, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishAllBuffsWithCertainAbnormalFlagAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishAllBuffsWithCertainAbnormalFlag, Assembly-CSharp";
  /** FinishAllBuffsWithCertainAbnormalFlagAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
  "_abnormalFlag": "LEVITATE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishAllStatusResistableBuffs, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishAllStatusResistableBuffsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishAllStatusResistableBuffs, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishBuff, Assembly-CSharp";
  /** FinishBuffAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishBuffAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishBuffsById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishBuffsByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishBuffsById, Assembly-CSharp";
  /** FinishBuffsByIdAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。 */
  "_alsoClearNullSource": boolean;
  /** FinishBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": null | string;
  /** FinishBuffsByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** FinishBuffsByIdAction 的 `decCnt` 配置字段；准确战斗语义待确认。 */
  "_decCnt": number;
  /** FinishBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishBuffsByIdAction 的 `decCntKey` 配置字段；准确战斗语义待确认。 */
  "_decCntKey": null | string;
  /** FinishBuffsByIdAction 的 `finishHostBuff` 配置字段；准确战斗语义待确认。 */
  "_finishHostBuff": boolean;
  /** FinishBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** FinishBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishBuffsByIdByBuffSource, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishBuffsByIdByBuffSourceAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishBuffsByIdByBuffSource, Assembly-CSharp";
  /** FinishBuffsByIdByBuffSourceAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。 */
  "_alsoClearNullSource": boolean;
  /** FinishBuffsByIdByBuffSourceAction 的 `alsoClearWhenSourceIsNull` 配置字段；准确战斗语义待确认。 */
  "_alsoClearWhenSourceIsNull": boolean;
  /** FinishBuffsByIdByBuffSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** FinishBuffsByIdByBuffSourceAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。 */
  "_useSourceHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishBuffsByIdFromBlockee, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishBuffsByIdFromBlockeeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishBuffsByIdFromBlockee, Assembly-CSharp";
  /** FinishBuffsByIdFromBlockeeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishBuffsByIdFromBlockeeAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishBuffsByIdFromBlockeeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** FinishBuffsByIdFromBlockeeAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishBuffsOfEveryCharacterById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishBuffsOfEveryCharacterByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishBuffsOfEveryCharacterById, Assembly-CSharp";
  /** FinishBuffsOfEveryCharacterByIdAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。 */
  "_alsoClearNullSource": boolean;
  /** FinishBuffsOfEveryCharacterByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishBuffsOfEveryCharacterByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** FinishBuffsOfEveryCharacterByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishBuffsOfEveryCharacterByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** FinishBuffsOfEveryCharacterByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishBuffsOfEveryEnemyById, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishBuffsOfEveryEnemyByIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishBuffsOfEveryEnemyById, Assembly-CSharp";
  /** FinishBuffsOfEveryEnemyByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** FinishBuffsOfEveryEnemyByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** FinishBuffsOfEveryEnemyByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
  "_decCntIfStack": boolean;
  /** FinishBuffsOfEveryEnemyByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** FinishBuffsOfEveryEnemyByIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER" | "SOURCE";
  /** FinishBuffsOfEveryEnemyByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
  "_updateOverrideMap": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FinishCardBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FinishCardBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FinishCardBuff, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF07 = FindSandboxV3BaseAndAssignTileToBlackboardAction | FinishAllBuffsWithCertainAbnormalFlagAction | FinishAllStatusResistableBuffsAction | FinishBuffAction | FinishBuffsByIdAction | FinishBuffsByIdByBuffSourceAction | FinishBuffsByIdFromBlockeeAction | FinishBuffsOfEveryCharacterByIdAction | FinishBuffsOfEveryEnemyByIdAction | FinishCardBuffAction;
