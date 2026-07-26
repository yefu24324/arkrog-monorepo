/**
 * buff_template_data 的 L 组 Action Zod Schema。
 */

import { z } from "zod";

import type { LogExtraBattleInfoForBuffAction, LogExtraBattleInfoForCurrentPlayTimeAction, LogExtraBattleInfoForModifierRealDeltaAction, LogExtraBattleInfoForTotalEnemyCntAction, LogExtraBattleInfoInstIdAction, LogExtraBattleInfoUnsafeAction, LogExtraBattleInfoUseFrameCntAsKeyAction, LogExtraBattleInfoWithNoTargetAction, LoopAction, BattleActionL06 } from "../../../../types/buff-template-data/actions/l/actions-l-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoForBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoForBuffAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
    "_infoType": z.literal("EXISTING_TIME").describe("LogExtraBattleInfoForBuffAction 的 `infoType` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForBuffAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoForBuffAction 的 `key` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoForBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForCurrentPlayTime, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoForCurrentPlayTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoForCurrentPlayTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoForCurrentPlayTimeAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoForCurrentPlayTimeAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForCurrentPlayTimeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("LogExtraBattleInfoForCurrentPlayTimeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForCurrentPlayTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoForCurrentPlayTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForModifierRealDelta, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoForModifierRealDeltaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoForModifierRealDelta, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoForModifierRealDeltaAction 的 `cacheLogKey` 配置字段；准确战斗语义待确认。 */
    "_cacheLogKey": z.boolean().describe("LogExtraBattleInfoForModifierRealDeltaAction 的 `cacheLogKey` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForModifierRealDeltaAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoForModifierRealDeltaAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForModifierRealDeltaAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("LogExtraBattleInfoForModifierRealDeltaAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForModifierRealDelta, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoForModifierRealDeltaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForTotalEnemyCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoForTotalEnemyCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoForTotalEnemyCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoForTotalEnemyCntAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoForTotalEnemyCntAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForTotalEnemyCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("LogExtraBattleInfoForTotalEnemyCntAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForTotalEnemyCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoForTotalEnemyCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoInstId, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoInstIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoInstId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoInstIdAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoInstIdAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoInstIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("LogExtraBattleInfoInstIdAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoInstId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoInstIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoUnsafe, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoUnsafeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoUnsafe, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoUnsafeAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoUnsafeAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoUnsafeAction 的 `logType` 配置字段；准确战斗语义待确认。 */
    "_logType": z.literal("SIMPLE").describe("LogExtraBattleInfoUnsafeAction 的 `logType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoUnsafe, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoUnsafeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoUseFrameCntAsKey, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoUseFrameCntAsKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoUseFrameCntAsKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoUseFrameCntAsKeyAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoUseFrameCntAsKeyAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoUseFrameCntAsKeyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("LogExtraBattleInfoUseFrameCntAsKeyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoUseFrameCntAsKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoUseFrameCntAsKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoWithNoTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoWithNoTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoWithNoTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoWithNoTargetAction 的 `additionValue` 配置字段；准确战斗语义待确认。 */
    "_additionValue": z.number().describe("LogExtraBattleInfoWithNoTargetAction 的 `additionValue` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoWithNoTargetAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("LogExtraBattleInfoWithNoTargetAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoWithNoTargetAction 的 `loadKeyFromBlackBoard` 配置字段；准确战斗语义待确认。 */
    "_loadKeyFromBlackBoard": z.boolean().describe("LogExtraBattleInfoWithNoTargetAction 的 `loadKeyFromBlackBoard` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoWithNoTargetAction 的 `logType` 配置字段；准确战斗语义待确认。 */
    "_logType": z.literal("SIMPLE").describe("LogExtraBattleInfoWithNoTargetAction 的 `logType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoWithNoTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoWithNoTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Loop, Assembly-CSharp 的严格 Action 数据。
 */
export const LoopActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Loop, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LoopAction 的 `keyMappingList` 配置字段；准确战斗语义待确认。 */
    "_keyMappingList": z.union([
                             z.null(),
                             z.array(z.strictObject({
                                     /** LoopAction 的 `mapping` 配置字段；准确战斗语义待确认。 */
                                     "mapping": z.array(z.strictObject({
                                                          /** LoopAction 的 `source` 配置字段；准确战斗语义待确认。 */
                                                          "source": z.enum(["cost_group_2","cost_group_3","cost_value_1","cost_value_2","cost_value_3","k0","k1","k2","k3","k4","k5","l0","l1","l2","l3","l4","l5","mv1","mv10","mv11","mv2","mv3","mv4","mv5","mv6","mv7","mv8","mv9","spine1","spine10","spine11","spine2","spine3","spine4","spine5","spine6","spine7","spine8","spine9","token_cnt_1","token_cnt_2","token_cnt_3","token_cnt_4","token_cnt_5","token_cnt_6","token_cnt_7","token_cnt_8","token_group_1","token_group_2","token_group_3","token_group_4","token_group_5","token_group_6","token_group_7","token_group_8"]).describe("LoopAction 的 `source` 配置字段；准确战斗语义待确认。"),
                                                          /** LoopAction 的 `target` 配置字段；准确战斗语义待确认。 */
                                                          "target": z.enum(["cost","index","location","move_speed","prob","token_key"]).describe("LoopAction 的 `target` 配置字段；准确战斗语义待确认。"),
                                                        })).describe("LoopAction 的 `mapping` 配置字段；准确战斗语义待确认。"),
                                   })),
                           ]).describe("LoopAction 的 `keyMappingList` 配置字段；准确战斗语义待确认。"),
    /** LoopAction 的 `loopBody` 配置字段；准确战斗语义待确认。 */
    "_loopBody": z.array(BattleActionReferenceSchema).describe("LoopAction 的 `loopBody` 配置字段；准确战斗语义待确认。"),
    /** LoopAction 的 `loopCnt` 配置字段；准确战斗语义待确认。 */
    "_loopCnt": z.number().describe("LoopAction 的 `loopCnt` 配置字段；准确战斗语义待确认。"),
    /** LoopAction 的 `loopCntKey` 配置字段；准确战斗语义待确认。 */
    "_loopCntKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("LoopAction 的 `loopCntKey` 配置字段；准确战斗语义待确认。"),
    /** LoopAction 的 `stopWhenPreviousSucceed` 配置字段；准确战斗语义待确认。 */
    "_stopWhenPreviousSucceed": z.boolean().describe("LoopAction 的 `stopWhenPreviousSucceed` 配置字段；准确战斗语义待确认。"),
    /** LoopAction 的 `useMappingList` 配置字段；准确战斗语义待确认。 */
    "_useMappingList": z.boolean().describe("LoopAction 的 `useMappingList` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Loop, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LoopAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionL06Schema = z
  .discriminatedUnion("$type", [LogExtraBattleInfoForBuffActionSchema, LogExtraBattleInfoForCurrentPlayTimeActionSchema, LogExtraBattleInfoForModifierRealDeltaActionSchema, LogExtraBattleInfoForTotalEnemyCntActionSchema, LogExtraBattleInfoInstIdActionSchema, LogExtraBattleInfoUnsafeActionSchema, LogExtraBattleInfoUseFrameCntAsKeyActionSchema, LogExtraBattleInfoWithNoTargetActionSchema, LoopActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionL06>;
