/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckDistanceToTileCenterAction, CheckDynamicBuffTileModeInEnumAction, CheckDynamicBuffTileModeOneLineAction, CheckEnemyAbilityNameAction, CheckEnemyCountWhenAttackDoCastAction, CheckEnemyCurrentCheckpointAction, CheckEnemyCursorTargetPosAction, CheckEnemyDirectionAction, CheckEnemyFaceAndMoveDirAction, CheckEnemyIdAction, BattleActionC08 } from "../../../../types/buff-template-data/actions/c/actions-c-08.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDistanceToTileCenter, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDistanceToTileCenterActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDistanceToTileCenter, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckDistanceToTileCenterAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["LE","LT"]).describe("CheckDistanceToTileCenterAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckDistanceToTileCenterAction 的 `distance` 配置字段；准确战斗语义待确认。 */
    "_distance": z.number().describe("CheckDistanceToTileCenterAction 的 `distance` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDistanceToTileCenter, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDistanceToTileCenterAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeInEnum, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDynamicBuffTileModeInEnumActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeInEnum, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckDynamicBuffTileModeInEnumAction 的 `exclude` 配置字段；准确战斗语义待确认。 */
    "_exclude": z.boolean().describe("CheckDynamicBuffTileModeInEnumAction 的 `exclude` 配置字段；准确战斗语义待确认。"),
    /** CheckDynamicBuffTileModeInEnumAction 的 `modes` 配置字段；准确战斗语义待确认。 */
    "_modes": z.array(z.number()).describe("CheckDynamicBuffTileModeInEnumAction 的 `modes` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeInEnum, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDynamicBuffTileModeInEnumAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeOneLine, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckDynamicBuffTileModeOneLineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeOneLine, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckDynamicBuffTileModeOneLineAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("CheckDynamicBuffTileModeOneLineAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** CheckDynamicBuffTileModeOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("CheckDynamicBuffTileModeOneLineAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckDynamicBuffTileModeOneLineAction 的 `dontCheckButRecordDirectionToBb` 配置字段；准确战斗语义待确认。 */
    "_dontCheckButRecordDirectionToBb": z.boolean().describe("CheckDynamicBuffTileModeOneLineAction 的 `dontCheckButRecordDirectionToBb` 配置字段；准确战斗语义待确认。"),
    /** CheckDynamicBuffTileModeOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。 */
    "_exceptCurrentTile": z.boolean().describe("CheckDynamicBuffTileModeOneLineAction 的 `exceptCurrentTile` 配置字段；准确战斗语义待确认。"),
    /** CheckDynamicBuffTileModeOneLineAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("CheckDynamicBuffTileModeOneLineAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CheckDynamicBuffTileModeOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。 */
    "_useCurrentTileDirection": z.boolean().describe("CheckDynamicBuffTileModeOneLineAction 的 `useCurrentTileDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckDynamicBuffTileModeOneLine, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckDynamicBuffTileModeOneLineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyAbilityName, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyAbilityNameActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyAbilityName, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyAbilityNameAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("CheckEnemyAbilityNameAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyAbilityNameAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckEnemyAbilityNameAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyAbilityName, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyAbilityNameAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyCountWhenAttackDoCast, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyCountWhenAttackDoCastActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyCountWhenAttackDoCast, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyCountWhenAttackDoCastAction 的 `checkSkillAbility` 配置字段；准确战斗语义待确认。 */
    "_checkSkillAbility": z.boolean().describe("CheckEnemyCountWhenAttackDoCastAction 的 `checkSkillAbility` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyCountWhenAttackDoCastAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GE").describe("CheckEnemyCountWhenAttackDoCastAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyCountWhenAttackDoCastAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
    "_countKey": z.string().describe("CheckEnemyCountWhenAttackDoCastAction 的 `countKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyCountWhenAttackDoCastAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckEnemyCountWhenAttackDoCastAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyCountWhenAttackDoCast, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyCountWhenAttackDoCastAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyCurrentCheckpoint, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyCurrentCheckpointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyCurrentCheckpoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyCurrentCheckpointAction 的 `checkpointTypes` 配置字段；准确战斗语义待确认。 */
    "_checkpointTypes": z.array(z.string()).describe("CheckEnemyCurrentCheckpointAction 的 `checkpointTypes` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyCurrentCheckpoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyCurrentCheckpointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyCursorTargetPos, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyCursorTargetPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyCursorTargetPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyCursorTargetPosAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("CheckEnemyCursorTargetPosAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyCursorTargetPosAction 的 `cursorIndexOffset` 配置字段；准确战斗语义待确认。 */
    "_cursorIndexOffset": z.number().describe("CheckEnemyCursorTargetPosAction 的 `cursorIndexOffset` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyCursorTargetPosAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("CheckEnemyCursorTargetPosAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyCursorTargetPosAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckEnemyCursorTargetPosAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyCursorTargetPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyCursorTargetPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyDirectionAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.string().describe("CheckEnemyDirectionAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("CheckEnemyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckEnemyDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyDirectionAction 的 `useBB` 配置字段；准确战斗语义待确认。 */
    "_useBB": z.boolean().describe("CheckEnemyDirectionAction 的 `useBB` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyFaceAndMoveDir, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyFaceAndMoveDirActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyFaceAndMoveDir, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyFaceAndMoveDirAction 的 `checkType` 配置字段；准确战斗语义待确认。 */
    "_checkType": z.enum(["OPPOSITE","SAME"]).describe("CheckEnemyFaceAndMoveDirAction 的 `checkType` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyFaceAndMoveDirAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("CheckEnemyFaceAndMoveDirAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyFaceAndMoveDir, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyFaceAndMoveDirAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyId, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckEnemyIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckEnemyId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckEnemyIdAction 的 `filterIds` 配置字段；准确战斗语义待确认。 */
    "_filterIds": z.array(z.string()).describe("CheckEnemyIdAction 的 `filterIds` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckEnemyIdAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** CheckEnemyIdAction 的 `loadIdFromBb` 配置字段；准确战斗语义待确认。 */
    "_loadIdFromBb": z.boolean().describe("CheckEnemyIdAction 的 `loadIdFromBb` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckEnemyId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckEnemyIdAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC08Schema = z
  .discriminatedUnion("$type", [CheckDistanceToTileCenterActionSchema, CheckDynamicBuffTileModeInEnumActionSchema, CheckDynamicBuffTileModeOneLineActionSchema, CheckEnemyAbilityNameActionSchema, CheckEnemyCountWhenAttackDoCastActionSchema, CheckEnemyCurrentCheckpointActionSchema, CheckEnemyCursorTargetPosActionSchema, CheckEnemyDirectionActionSchema, CheckEnemyFaceAndMoveDirActionSchema, CheckEnemyIdActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC08>;
