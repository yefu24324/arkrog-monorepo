/**
 * buff_template_data 的 L 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoForBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBuff, Assembly-CSharp";
  /** LogExtraBattleInfoForBuffAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
  "_infoType": "EXISTING_TIME";
  /** LogExtraBattleInfoForBuffAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoForCurrentPlayTime, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoForCurrentPlayTimeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoForCurrentPlayTime, Assembly-CSharp";
  /** LogExtraBattleInfoForCurrentPlayTimeAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoForCurrentPlayTimeAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoForModifierRealDelta, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoForModifierRealDeltaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoForModifierRealDelta, Assembly-CSharp";
  /** LogExtraBattleInfoForModifierRealDeltaAction 的 `cacheLogKey` 配置字段；准确战斗语义待确认。 */
  "_cacheLogKey": boolean;
  /** LogExtraBattleInfoForModifierRealDeltaAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoForModifierRealDeltaAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoForTotalEnemyCnt, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoForTotalEnemyCntAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoForTotalEnemyCnt, Assembly-CSharp";
  /** LogExtraBattleInfoForTotalEnemyCntAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoForTotalEnemyCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoInstId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoInstIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoInstId, Assembly-CSharp";
  /** LogExtraBattleInfoInstIdAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoInstIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoUnsafe, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoUnsafeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoUnsafe, Assembly-CSharp";
  /** LogExtraBattleInfoUnsafeAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoUnsafeAction 的 `logType` 配置字段；准确战斗语义待确认。 */
  "_logType": "SIMPLE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoUseFrameCntAsKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoUseFrameCntAsKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoUseFrameCntAsKey, Assembly-CSharp";
  /** LogExtraBattleInfoUseFrameCntAsKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoUseFrameCntAsKeyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+LogExtraBattleInfoWithNoTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LogExtraBattleInfoWithNoTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+LogExtraBattleInfoWithNoTarget, Assembly-CSharp";
  /** LogExtraBattleInfoWithNoTargetAction 的 `additionValue` 配置字段；准确战斗语义待确认。 */
  "_additionValue": number;
  /** LogExtraBattleInfoWithNoTargetAction 的 `key` 配置字段；准确战斗语义待确认。 */
  "_key": string;
  /** LogExtraBattleInfoWithNoTargetAction 的 `loadKeyFromBlackBoard` 配置字段；准确战斗语义待确认。 */
  "_loadKeyFromBlackBoard": boolean;
  /** LogExtraBattleInfoWithNoTargetAction 的 `logType` 配置字段；准确战斗语义待确认。 */
  "_logType": "SIMPLE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Loop, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface LoopAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Loop, Assembly-CSharp";
  /** LoopAction 的 `keyMappingList` 配置字段；准确战斗语义待确认。 */
  "_keyMappingList": null | Array<{
                          /** LoopAction 的 `mapping` 配置字段；准确战斗语义待确认。 */
                          "mapping": Array<{
                                            /** LoopAction 的 `source` 配置字段；准确战斗语义待确认。 */
                                            "source": "cost_group_2" | "cost_group_3" | "cost_value_1" | "cost_value_2" | "cost_value_3" | "k0" | "k1" | "k2" | "k3" | "k4" | "k5" | "l0" | "l1" | "l2" | "l3" | "l4" | "l5" | "mv1" | "mv10" | "mv11" | "mv2" | "mv3" | "mv4" | "mv5" | "mv6" | "mv7" | "mv8" | "mv9" | "spine1" | "spine10" | "spine11" | "spine2" | "spine3" | "spine4" | "spine5" | "spine6" | "spine7" | "spine8" | "spine9" | "token_cnt_1" | "token_cnt_2" | "token_cnt_3" | "token_cnt_4" | "token_cnt_5" | "token_cnt_6" | "token_cnt_7" | "token_cnt_8" | "token_group_1" | "token_group_2" | "token_group_3" | "token_group_4" | "token_group_5" | "token_group_6" | "token_group_7" | "token_group_8";
                                            /** LoopAction 的 `target` 配置字段；准确战斗语义待确认。 */
                                            "target": "cost" | "index" | "location" | "move_speed" | "prob" | "token_key";
                                          }>;
                        }>;
  /** LoopAction 的 `loopBody` 配置字段；准确战斗语义待确认。 */
  "_loopBody": Array<BattleAction>;
  /** LoopAction 的 `loopCnt` 配置字段；准确战斗语义待确认。 */
  "_loopCnt": number;
  /** LoopAction 的 `loopCntKey` 配置字段；准确战斗语义待确认。 */
  "_loopCntKey": null | string;
  /** LoopAction 的 `stopWhenPreviousSucceed` 配置字段；准确战斗语义待确认。 */
  "_stopWhenPreviousSucceed": boolean;
  /** LoopAction 的 `useMappingList` 配置字段；准确战斗语义待确认。 */
  "_useMappingList": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionL06 = LogExtraBattleInfoForBuffAction | LogExtraBattleInfoForCurrentPlayTimeAction | LogExtraBattleInfoForModifierRealDeltaAction | LogExtraBattleInfoForTotalEnemyCntAction | LogExtraBattleInfoInstIdAction | LogExtraBattleInfoUnsafeAction | LogExtraBattleInfoUseFrameCntAsKeyAction | LogExtraBattleInfoWithNoTargetAction | LoopAction;
