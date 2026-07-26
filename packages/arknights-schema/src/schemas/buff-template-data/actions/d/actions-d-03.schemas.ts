/**
 * buff_template_data 的 D 组 Action Zod Schema。
 */

import { z } from "zod";

import type { DoLaunchBallAction, DoPassTheBallAction, DoSlapShotAction, DragTowardSourceAction, DuelCheckChosenEnemiesEqualZeroAction, DuelCheckConvertToBattleStageAction, DuelInitDuelModeAction, DuelModifyPlaceAreaDataAction, DuelMoveCameraAction, DuelSyncChosenInfoToGameModeAction, BattleActionD03 } from "../../../../types/buff-template-data/actions/d/actions-d-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DoLaunchBall, Assembly-CSharp 的严格 Action 数据。
 */
export const DoLaunchBallActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DoLaunchBall, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DoLaunchBallAction 的 `dirSource` 配置字段；准确战斗语义待确认。 */
    "_dirSource": z.literal("SOURCE").describe("DoLaunchBallAction 的 `dirSource` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DoLaunchBall, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DoLaunchBallAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DoPassTheBall, Assembly-CSharp 的严格 Action 数据。
 */
export const DoPassTheBallActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DoPassTheBall, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DoPassTheBall, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DoPassTheBallAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DoSlapShot, Assembly-CSharp 的严格 Action 数据。
 */
export const DoSlapShotActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DoSlapShot, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DoSlapShot, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DoSlapShotAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DragTowardSource, Assembly-CSharp 的严格 Action 数据。
 */
export const DragTowardSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DragTowardSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DragTowardSourceAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_SOURCE","SOURCE"]).describe("DragTowardSourceAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** DragTowardSourceAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("DragTowardSourceAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DragTowardSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DragTowardSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DuelCheckChosenEnemiesEqualZero, Assembly-CSharp 的严格 Action 数据。
 */
export const DuelCheckChosenEnemiesEqualZeroActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DuelCheckChosenEnemiesEqualZero, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DuelCheckChosenEnemiesEqualZero, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DuelCheckChosenEnemiesEqualZeroAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DuelCheckConvertToBattleStage, Assembly-CSharp 的严格 Action 数据。
 */
export const DuelCheckConvertToBattleStageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DuelCheckConvertToBattleStage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DuelCheckConvertToBattleStage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DuelCheckConvertToBattleStageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DuelInitDuelMode, Assembly-CSharp 的严格 Action 数据。
 */
export const DuelInitDuelModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DuelInitDuelMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DuelInitDuelMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DuelInitDuelModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DuelModifyPlaceAreaData, Assembly-CSharp 的严格 Action 数据。
 */
export const DuelModifyPlaceAreaDataActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DuelModifyPlaceAreaData, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DuelModifyPlaceAreaData, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DuelModifyPlaceAreaDataAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DuelMoveCamera, Assembly-CSharp 的严格 Action 数据。
 */
export const DuelMoveCameraActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DuelMoveCamera, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DuelMoveCamera, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DuelMoveCameraAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+DuelSyncChosenInfoToGameMode, Assembly-CSharp 的严格 Action 数据。
 */
export const DuelSyncChosenInfoToGameModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+DuelSyncChosenInfoToGameMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** DuelSyncChosenInfoToGameModeAction 的 `excludeIds` 配置字段；准确战斗语义待确认。 */
    "_excludeIds": z.array(z.never()).describe("DuelSyncChosenInfoToGameModeAction 的 `excludeIds` 配置字段；准确战斗语义待确认。"),
    /** DuelSyncChosenInfoToGameModeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("DuelSyncChosenInfoToGameModeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+DuelSyncChosenInfoToGameMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<DuelSyncChosenInfoToGameModeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionD03Schema = z
  .discriminatedUnion("$type", [DoLaunchBallActionSchema, DoPassTheBallActionSchema, DoSlapShotActionSchema, DragTowardSourceActionSchema, DuelCheckChosenEnemiesEqualZeroActionSchema, DuelCheckConvertToBattleStageActionSchema, DuelInitDuelModeActionSchema, DuelModifyPlaceAreaDataActionSchema, DuelMoveCameraActionSchema, DuelSyncChosenInfoToGameModeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionD03>;
