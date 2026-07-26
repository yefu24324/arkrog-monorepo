/**
 * buff_template_data 的 I 组 Action Zod Schema。
 */

import { z } from "zod";

import type { IsPropLikeEnemyAction, IsPropLikeStaticBlockTokenAction, IsRallyPointAction, IsRogueLikeBossAction, IsSourceBlackboardEqualWithUnitUidAction, IsStationReadyForSpawnTrainAction, IsSummonerAliveAction, IsTargetGiantBossAction, IsTargetInDialogAction, IsTargetInEPBreakRecoveryAction, BattleActionI06 } from "../../../../types/buff-template-data/actions/i/actions-i-06.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsPropLikeEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const IsPropLikeEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsPropLikeEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsPropLikeEnemyAction 的 `CheckIsInPropLikeState` 配置字段；准确战斗语义待确认。 */
    "_CheckIsInPropLikeState": z.boolean().describe("IsPropLikeEnemyAction 的 `CheckIsInPropLikeState` 配置字段；准确战斗语义待确认。"),
    /** IsPropLikeEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("MODIFIER_TARGET").describe("IsPropLikeEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsPropLikeEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsPropLikeEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsPropLikeStaticBlockToken, Assembly-CSharp 的严格 Action 数据。
 */
export const IsPropLikeStaticBlockTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsPropLikeStaticBlockToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsPropLikeStaticBlockToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsPropLikeStaticBlockTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsRallyPoint, Assembly-CSharp 的严格 Action 数据。
 */
export const IsRallyPointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsRallyPoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsRallyPointAction 的 `checkIsInRallyPointMode` 配置字段；准确战斗语义待确认。 */
    "_checkIsInRallyPointMode": z.boolean().describe("IsRallyPointAction 的 `checkIsInRallyPointMode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsRallyPoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsRallyPointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsRogueLikeBoss, Assembly-CSharp 的严格 Action 数据。
 */
export const IsRogueLikeBossActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsRogueLikeBoss, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsRogueLikeBoss, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsRogueLikeBossAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsSourceBlackboardEqualWithUnitUid, Assembly-CSharp 的严格 Action 数据。
 */
export const IsSourceBlackboardEqualWithUnitUidActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsSourceBlackboardEqualWithUnitUid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** IsSourceBlackboardEqualWithUnitUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("IsSourceBlackboardEqualWithUnitUidAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsSourceBlackboardEqualWithUnitUid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsSourceBlackboardEqualWithUnitUidAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsStationReadyForSpawnTrain, Assembly-CSharp 的严格 Action 数据。
 */
export const IsStationReadyForSpawnTrainActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsStationReadyForSpawnTrain, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsStationReadyForSpawnTrain, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsStationReadyForSpawnTrainAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsSummonerAlive, Assembly-CSharp 的严格 Action 数据。
 */
export const IsSummonerAliveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsSummonerAlive, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsSummonerAliveAction 的 `token` 配置字段；准确战斗语义待确认。 */
    "_token": z.string().describe("IsSummonerAliveAction 的 `token` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsSummonerAlive, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsSummonerAliveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsTargetGiantBoss, Assembly-CSharp 的严格 Action 数据。
 */
export const IsTargetGiantBossActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsTargetGiantBoss, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsTargetGiantBossAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("IsTargetGiantBossAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsTargetGiantBoss, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsTargetGiantBossAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsTargetInDialog, Assembly-CSharp 的严格 Action 数据。
 */
export const IsTargetInDialogActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsTargetInDialog, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsTargetInDialogAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("IsTargetInDialogAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsTargetInDialog, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsTargetInDialogAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+IsTargetInEPBreakRecovery, Assembly-CSharp 的严格 Action 数据。
 */
export const IsTargetInEPBreakRecoveryActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+IsTargetInEPBreakRecovery, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** IsTargetInEPBreakRecoveryAction 的 `checkRecoveryType` 配置字段；准确战斗语义待确认。 */
    "_checkRecoveryType": z.boolean().describe("IsTargetInEPBreakRecoveryAction 的 `checkRecoveryType` 配置字段；准确战斗语义待确认。"),
    /** IsTargetInEPBreakRecoveryAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
    "_elementType": z.enum(["DARK","FIRE","NONE","SANITY"]).describe("IsTargetInEPBreakRecoveryAction 的 `elementType` 配置字段；准确战斗语义待确认。"),
    /** IsTargetInEPBreakRecoveryAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET","TARGET"]).describe("IsTargetInEPBreakRecoveryAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+IsTargetInEPBreakRecovery, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<IsTargetInEPBreakRecoveryAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionI06Schema = z
  .discriminatedUnion("$type", [IsPropLikeEnemyActionSchema, IsPropLikeStaticBlockTokenActionSchema, IsRallyPointActionSchema, IsRogueLikeBossActionSchema, IsSourceBlackboardEqualWithUnitUidActionSchema, IsStationReadyForSpawnTrainActionSchema, IsSummonerAliveActionSchema, IsTargetGiantBossActionSchema, IsTargetInDialogActionSchema, IsTargetInEPBreakRecoveryActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionI06>;
