/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RacingCameraZoomInAction, RacingEnemyAddAttributeAction, RacingEnemyBleedingAction, RacingEnemyFilterByModeAction, RacingEnemyFilterByMoveSpeedAction, RacingEnemyFilterByRankingAction, RacingEnemyIsMineAction, RacingEnemyLockMagnetAction, RacingEnemyRecoverAction, RaiseDialogueAction, BattleActionR01 } from "../../../../types/buff-template-data/actions/r/actions-r-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingCameraZoomIn, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingCameraZoomInActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingCameraZoomIn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RacingCameraZoomInAction 的 `cameraFollowSpeedFactor` 配置字段；准确战斗语义待确认。 */
    "_cameraFollowSpeedFactor": z.number().describe("RacingCameraZoomInAction 的 `cameraFollowSpeedFactor` 配置字段；准确战斗语义待确认。"),
    /** RacingCameraZoomInAction 的 `zoomDuration` 配置字段；准确战斗语义待确认。 */
    "_zoomDuration": z.number().describe("RacingCameraZoomInAction 的 `zoomDuration` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingCameraZoomIn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingCameraZoomInAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyAddAttribute, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyAddAttributeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyAddAttribute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RacingEnemyAddAttributeAction 的 `isFinish` 配置字段；准确战斗语义待确认。 */
    "_isFinish": z.boolean().describe("RacingEnemyAddAttributeAction 的 `isFinish` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyAddAttribute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyAddAttributeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyBleeding, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyBleedingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyBleeding, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyBleeding, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyBleedingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyFilterByMode, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyFilterByModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyFilterByMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RacingEnemyFilterByModeAction 的 `racingMode` 配置字段；准确战斗语义待确认。 */
    "_racingMode": z.enum(["Racing","Recover"]).describe("RacingEnemyFilterByModeAction 的 `racingMode` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyFilterByMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyFilterByModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyFilterByMoveSpeed, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyFilterByMoveSpeedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyFilterByMoveSpeed, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RacingEnemyFilterByMoveSpeedAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.literal("LT").describe("RacingEnemyFilterByMoveSpeedAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** RacingEnemyFilterByMoveSpeedAction 的 `isRealSpeed` 配置字段；准确战斗语义待确认。 */
    "_isRealSpeed": z.boolean().describe("RacingEnemyFilterByMoveSpeedAction 的 `isRealSpeed` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyFilterByMoveSpeed, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyFilterByMoveSpeedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyFilterByRanking, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyFilterByRankingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyFilterByRanking, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RacingEnemyFilterByRankingAction 的 `compareType` 配置字段；准确战斗语义待确认。 */
    "_compareType": z.enum(["EQUALS","LT"]).describe("RacingEnemyFilterByRankingAction 的 `compareType` 配置字段；准确战斗语义待确认。"),
    /** RacingEnemyFilterByRankingAction 的 `isReverseRanking` 配置字段；准确战斗语义待确认。 */
    "_isReverseRanking": z.boolean().describe("RacingEnemyFilterByRankingAction 的 `isReverseRanking` 配置字段；准确战斗语义待确认。"),
    /** RacingEnemyFilterByRankingAction 的 `ranking` 配置字段；准确战斗语义待确认。 */
    "_ranking": z.number().describe("RacingEnemyFilterByRankingAction 的 `ranking` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyFilterByRanking, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyFilterByRankingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyIsMine, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyIsMineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyIsMine, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyIsMine, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyIsMineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyLockMagnet, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyLockMagnetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyLockMagnet, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RacingEnemyLockMagnetAction 的 `magnetSpeed` 配置字段；准确战斗语义待确认。 */
    "_magnetSpeed": z.number().describe("RacingEnemyLockMagnetAction 的 `magnetSpeed` 配置字段；准确战斗语义待确认。"),
    /** RacingEnemyLockMagnetAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("RacingEnemyLockMagnetAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** RacingEnemyLockMagnetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("RacingEnemyLockMagnetAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** RacingEnemyLockMagnetAction 的 `unlock` 配置字段；准确战斗语义待确认。 */
    "_unlock": z.boolean().describe("RacingEnemyLockMagnetAction 的 `unlock` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyLockMagnet, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyLockMagnetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyRecover, Assembly-CSharp 的严格 Action 数据。
 */
export const RacingEnemyRecoverActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RacingEnemyRecover, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RacingEnemyRecover, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RacingEnemyRecoverAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RaiseDialogue, Assembly-CSharp 的严格 Action 数据。
 */
export const RaiseDialogueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RaiseDialogue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RaiseDialogueAction 的 `doNotCheckSource` 配置字段；准确战斗语义待确认。 */
    "_doNotCheckSource": z.boolean().describe("RaiseDialogueAction 的 `doNotCheckSource` 配置字段；准确战斗语义待确认。"),
    /** RaiseDialogueAction 的 `isAppearDialog` 配置字段；准确战斗语义待确认。 */
    "_isAppearDialog": z.boolean().describe("RaiseDialogueAction 的 `isAppearDialog` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RaiseDialogue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RaiseDialogueAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR01Schema = z
  .discriminatedUnion("$type", [RacingCameraZoomInActionSchema, RacingEnemyAddAttributeActionSchema, RacingEnemyBleedingActionSchema, RacingEnemyFilterByModeActionSchema, RacingEnemyFilterByMoveSpeedActionSchema, RacingEnemyFilterByRankingActionSchema, RacingEnemyIsMineActionSchema, RacingEnemyLockMagnetActionSchema, RacingEnemyRecoverActionSchema, RaiseDialogueActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR01>;
