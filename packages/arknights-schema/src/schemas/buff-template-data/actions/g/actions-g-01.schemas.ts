/**
 * buff_template_data 的 G 组 Action Zod Schema。
 */

import { z } from "zod";

import type { GainTokenAction, GameCityCheckEnemyInExitAction, GameCityIsRestingAction, GameCityTriggerEnvSystemAction, GameCityUpdateScoreAction, GatherDropItemAction, GatherModifyMaxResourceCntAction, GatherRegisterListenerAction, GatherRemoveListenerAction, GetSandboxV3IgnoreFixedPlayTimeStatisticsAction, BattleActionG01 } from "../../../../types/buff-template-data/actions/g/actions-g-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GainToken, Assembly-CSharp 的严格 Action 数据。
 */
export const GainTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GainToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GainTokenAction 的 `effectKeys` 配置字段；准确战斗语义待确认。 */
    "_effectKeys": z.union([
                         z.null(),
                         z.array(z.string()),
                       ]).describe("GainTokenAction 的 `effectKeys` 配置字段；准确战斗语义待确认。"),
    /** GainTokenAction 的 `extraAudioKey` 配置字段；准确战斗语义待确认。 */
    "_extraAudioKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("GainTokenAction 的 `extraAudioKey` 配置字段；准确战斗语义待确认。"),
    /** GainTokenAction 的 `extraLogKey` 配置字段；准确战斗语义待确认。 */
    "_extraLogKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("GainTokenAction 的 `extraLogKey` 配置字段；准确战斗语义待确认。"),
    /** GainTokenAction 的 `getPlayerSideFromActionTargetType` 配置字段；准确战斗语义待确认。 */
    "_getPlayerSideFromActionTargetType": z.boolean().describe("GainTokenAction 的 `getPlayerSideFromActionTargetType` 配置字段；准确战斗语义待确认。"),
    /** GainTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
    "_rechargeTiming": z.literal("NORMAL").describe("GainTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。"),
    /** GainTokenAction 的 `spiltTokenKey` 配置字段；准确战斗语义待确认。 */
    "_spiltTokenKey": z.boolean().describe("GainTokenAction 的 `spiltTokenKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GainToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GainTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GameCityCheckEnemyInExit, Assembly-CSharp 的严格 Action 数据。
 */
export const GameCityCheckEnemyInExitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GameCityCheckEnemyInExit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GameCityCheckEnemyInExit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GameCityCheckEnemyInExitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GameCityIsResting, Assembly-CSharp 的严格 Action 数据。
 */
export const GameCityIsRestingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GameCityIsResting, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GameCityIsResting, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GameCityIsRestingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GameCityTriggerEnvSystem, Assembly-CSharp 的严格 Action 数据。
 */
export const GameCityTriggerEnvSystemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GameCityTriggerEnvSystem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GameCityTriggerEnvSystemAction 的 `envKey` 配置字段；准确战斗语义待确认。 */
    "_envKey": z.string().describe("GameCityTriggerEnvSystemAction 的 `envKey` 配置字段；准确战斗语义待确认。"),
    /** GameCityTriggerEnvSystemAction 的 `uiType` 配置字段；准确战斗语义待确认。 */
    "_uiType": z.enum(["NORMAL","STEAL"]).describe("GameCityTriggerEnvSystemAction 的 `uiType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GameCityTriggerEnvSystem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GameCityTriggerEnvSystemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GameCityUpdateScore, Assembly-CSharp 的严格 Action 数据。
 */
export const GameCityUpdateScoreActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GameCityUpdateScore, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GameCityUpdateScore, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GameCityUpdateScoreAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GatherDropItem, Assembly-CSharp 的严格 Action 数据。
 */
export const GatherDropItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GatherDropItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GatherDropItemAction 的 `dropCountKey` 配置字段；准确战斗语义待确认。 */
    "_dropCountKey": z.string().describe("GatherDropItemAction 的 `dropCountKey` 配置字段；准确战斗语义待确认。"),
    /** GatherDropItemAction 的 `resourceTypeKey` 配置字段；准确战斗语义待确认。 */
    "_resourceTypeKey": z.string().describe("GatherDropItemAction 的 `resourceTypeKey` 配置字段；准确战斗语义待确认。"),
    /** GatherDropItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("GatherDropItemAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GatherDropItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GatherDropItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GatherModifyMaxResourceCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const GatherModifyMaxResourceCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GatherModifyMaxResourceCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GatherModifyMaxResourceCntAction 的 `maxResCnt` 配置字段；准确战斗语义待确认。 */
    "_maxResCnt": z.number().describe("GatherModifyMaxResourceCntAction 的 `maxResCnt` 配置字段；准确战斗语义待确认。"),
    /** GatherModifyMaxResourceCntAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("GatherModifyMaxResourceCntAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GatherModifyMaxResourceCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GatherModifyMaxResourceCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GatherRegisterListener, Assembly-CSharp 的严格 Action 数据。
 */
export const GatherRegisterListenerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GatherRegisterListener, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GatherRegisterListenerAction 的 `dropType` 配置字段；准确战斗语义待确认。 */
    "_dropType": z.literal("DEFAULT").describe("GatherRegisterListenerAction 的 `dropType` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `higherMask` 配置字段；准确战斗语义待确认。 */
    "_higherMask": z.union([
                         z.number(),
                         z.enum(["NORMAL_UPPER_MASK","TRANSFER"]),
                       ]).describe("GatherRegisterListenerAction 的 `higherMask` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `interactionRadius` 配置字段；准确战斗语义待确认。 */
    "_interactionRadius": z.number().describe("GatherRegisterListenerAction 的 `interactionRadius` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `listenerType` 配置字段；准确战斗语义待确认。 */
    "_listenerType": z.enum(["BASE","ENEMY","PRODUCER","TRANSFER"]).describe("GatherRegisterListenerAction 的 `listenerType` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `maxResCnt` 配置字段；准确战斗语义待确认。 */
    "_maxResCnt": z.number().describe("GatherRegisterListenerAction 的 `maxResCnt` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("GatherRegisterListenerAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `spatialMode` 配置字段；准确战斗语义待确认。 */
    "_spatialMode": z.enum(["Grid","Radial"]).describe("GatherRegisterListenerAction 的 `spatialMode` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("GatherRegisterListenerAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** GatherRegisterListenerAction 的 `transferPriority` 配置字段；准确战斗语义待确认。 */
    "_transferPriority": z.number().describe("GatherRegisterListenerAction 的 `transferPriority` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GatherRegisterListener, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GatherRegisterListenerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GatherRemoveListener, Assembly-CSharp 的严格 Action 数据。
 */
export const GatherRemoveListenerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GatherRemoveListener, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** GatherRemoveListenerAction 的 `convertWhenRemove` 配置字段；准确战斗语义待确认。 */
    "_convertWhenRemove": z.boolean().describe("GatherRemoveListenerAction 的 `convertWhenRemove` 配置字段；准确战斗语义待确认。"),
    /** GatherRemoveListenerAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("GatherRemoveListenerAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GatherRemoveListener, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GatherRemoveListenerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+GetSandboxV3IgnoreFixedPlayTimeStatistics, Assembly-CSharp 的严格 Action 数据。
 */
export const GetSandboxV3IgnoreFixedPlayTimeStatisticsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+GetSandboxV3IgnoreFixedPlayTimeStatistics, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+GetSandboxV3IgnoreFixedPlayTimeStatistics, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<GetSandboxV3IgnoreFixedPlayTimeStatisticsAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionG01Schema = z
  .discriminatedUnion("$type", [GainTokenActionSchema, GameCityCheckEnemyInExitActionSchema, GameCityIsRestingActionSchema, GameCityTriggerEnvSystemActionSchema, GameCityUpdateScoreActionSchema, GatherDropItemActionSchema, GatherModifyMaxResourceCntActionSchema, GatherRegisterListenerActionSchema, GatherRemoveListenerActionSchema, GetSandboxV3IgnoreFixedPlayTimeStatisticsActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionG01>;
