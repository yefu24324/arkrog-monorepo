/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ModifyOverlapSourceIdWithAllCardIdAction, ModifyOverlapTakeEffectAction, ModifyRuntimeRouteUseBranchRouteAction, ModifySpAction, ModifySpDataAction, ModifyTileBlackboardAction, MoveEnemyToTargetDirPosAction, MoveNextLevelBranchAction, BattleActionM07 } from "../../../../types/buff-template-data/actions/m/actions-m-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapSourceIdWithAllCardId, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyOverlapSourceIdWithAllCardIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyOverlapSourceIdWithAllCardId, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyOverlapSourceIdWithAllCardIdAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
    "_exceptTokenAndTrap": z.boolean().describe("ModifyOverlapSourceIdWithAllCardIdAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapSourceIdWithAllCardIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
    "_isRemove": z.boolean().describe("ModifyOverlapSourceIdWithAllCardIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapSourceIdWithAllCardIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ModifyOverlapSourceIdWithAllCardIdAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapSourceIdWithAllCardId, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyOverlapSourceIdWithAllCardIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapTakeEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyOverlapTakeEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyOverlapTakeEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyOverlapTakeEffectAction 的 `isOverlapTakeEffect` 配置字段；准确战斗语义待确认。 */
    "_isOverlapTakeEffect": z.boolean().describe("ModifyOverlapTakeEffectAction 的 `isOverlapTakeEffect` 配置字段；准确战斗语义待确认。"),
    /** ModifyOverlapTakeEffectAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ModifyOverlapTakeEffectAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyOverlapTakeEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyOverlapTakeEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyRuntimeRouteUseBranchRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyRuntimeRouteUseBranchRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyRuntimeRouteUseBranchRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyRuntimeRouteUseBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("ModifyRuntimeRouteUseBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyRuntimeRouteUseBranchRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyRuntimeRouteUseBranchRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifySp, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifySpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifySp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifySpAction 的 `customModifierKey` 配置字段；准确战斗语义待确认。 */
    "_customModifierKey": z.string().describe("ModifySpAction 的 `customModifierKey` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `dontCheckSpType` 配置字段；准确战斗语义待确认。 */
    "_dontCheckSpType": z.boolean().describe("ModifySpAction 的 `dontCheckSpType` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `dontShowSpUI` 配置字段；准确战斗语义待确认。 */
    "_dontShowSpUI": z.boolean().describe("ModifySpAction 的 `dontShowSpUI` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `forceFlag` 配置字段；准确战斗语义待确认。 */
    "_forceFlag": z.boolean().describe("ModifySpAction 的 `forceFlag` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `isMinis` 配置字段；准确战斗语义待确认。 */
    "_isMinis": z.boolean().describe("ModifySpAction 的 `isMinis` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `modifyByRatio` 配置字段；准确战斗语义待确认。 */
    "_modifyByRatio": z.boolean().describe("ModifySpAction 的 `modifyByRatio` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `modifyByRatioBasedOnCurSP` 配置字段；准确战斗语义待确认。 */
    "_modifyByRatioBasedOnCurSP": z.boolean().describe("ModifySpAction 的 `modifyByRatioBasedOnCurSP` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `modifyBySpCost` 配置字段；准确战斗语义待确认。 */
    "_modifyBySpCost": z.boolean().describe("ModifySpAction 的 `modifyBySpCost` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `modifyRatio` 配置字段；准确战斗语义待确认。 */
    "_modifyRatio": z.number().describe("ModifySpAction 的 `modifyRatio` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `modifyValue` 配置字段；准确战斗语义待确认。 */
    "_modifyValue": z.number().describe("ModifySpAction 的 `modifyValue` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `spMask` 配置字段；准确战斗语义待确认。 */
    "_spMask": z.enum(["ALL","ATTACK_OR_DAMAGE","INCREASE_WHEN_ATTACK","INCREASE_WHEN_TAKEN_DAMAGE","INCREASE_WITH_TIME","NONE"]).describe("ModifySpAction 的 `spMask` 配置字段；准确战斗语义待确认。"),
    /** ModifySpAction 的 `spString` 配置字段；准确战斗语义待确认。 */
    "_spString": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("ModifySpAction 的 `spString` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAINBUFF_SOURCE","MAIN_TARGET","MODIFIER_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifySp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifySpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifySpData, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifySpDataActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifySpData, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifySpDataAction 的 `assignOldValueKey` 配置字段；准确战斗语义待确认。 */
    "_assignOldValueKey": z.union([
                                z.null(),
                                z.string(),
                              ]).describe("ModifySpDataAction 的 `assignOldValueKey` 配置字段；准确战斗语义待确认。"),
    /** ModifySpDataAction 的 `onlyUpdateSpCost` 配置字段；准确战斗语义待确认。 */
    "_onlyUpdateSpCost": z.boolean().describe("ModifySpDataAction 的 `onlyUpdateSpCost` 配置字段；准确战斗语义待确认。"),
    /** ModifySpDataAction 的 `spCostString` 配置字段；准确战斗语义待确认。 */
    "_spCostString": z.union([
                           z.null(),
                           z.string(),
                         ]).describe("ModifySpDataAction 的 `spCostString` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** ModifySpDataAction 的 `updateSkillSpCostMin` 配置字段；准确战斗语义待确认。 */
    "_updateSkillSpCostMin": z.boolean().describe("ModifySpDataAction 的 `updateSkillSpCostMin` 配置字段；准确战斗语义待确认。"),
    /** ModifySpDataAction 的 `updateSpCostViaMaxRatioKey` 配置字段；准确战斗语义待确认。 */
    "_updateSpCostViaMaxRatioKey": z.union([
                                         z.null(),
                                         z.string(),
                                       ]).describe("ModifySpDataAction 的 `updateSpCostViaMaxRatioKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifySpData, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifySpDataAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyTileBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyTileBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyTileBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyTileBlackboardAction 的 `assignStrValue` 配置字段；准确战斗语义待确认。 */
    "_assignStrValue": z.boolean().describe("ModifyTileBlackboardAction 的 `assignStrValue` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MAIN_TARGET"]).describe("Action 作用的目标实体类型。"),
    /** ModifyTileBlackboardAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRoottile": z.boolean().describe("ModifyTileBlackboardAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。"),
    /** ModifyTileBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("ModifyTileBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。"),
    /** ModifyTileBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.null().describe("ModifyTileBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyTileBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。 */
    "_valueStr": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("ModifyTileBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyTileBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyTileBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MoveEnemyToTargetDirPos, Assembly-CSharp 的严格 Action 数据。
 */
export const MoveEnemyToTargetDirPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MoveEnemyToTargetDirPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MoveEnemyToTargetDirPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("FLY").describe("MoveEnemyToTargetDirPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** MoveEnemyToTargetDirPosAction 的 `randomOffset` 配置字段；准确战斗语义待确认。 */
    "_randomOffset": z.number().describe("MoveEnemyToTargetDirPosAction 的 `randomOffset` 配置字段；准确战斗语义待确认。"),
    /** MoveEnemyToTargetDirPosAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("MoveEnemyToTargetDirPosAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MoveEnemyToTargetDirPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MoveEnemyToTargetDirPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MoveNextLevelBranch, Assembly-CSharp 的严格 Action 数据。
 */
export const MoveNextLevelBranchActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MoveNextLevelBranch, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MoveNextLevelBranchAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.string().describe("MoveNextLevelBranchAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
    /** MoveNextLevelBranchAction 的 `isLoop` 配置字段；准确战斗语义待确认。 */
    "_isLoop": z.boolean().describe("MoveNextLevelBranchAction 的 `isLoop` 配置字段；准确战斗语义待确认。"),
    /** MoveNextLevelBranchAction 的 `maxValidEnemyCount` 配置字段；准确战斗语义待确认。 */
    "_maxValidEnemyCount": z.number().describe("MoveNextLevelBranchAction 的 `maxValidEnemyCount` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MoveNextLevelBranch, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MoveNextLevelBranchAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM07Schema = z
  .discriminatedUnion("$type", [ModifyOverlapSourceIdWithAllCardIdActionSchema, ModifyOverlapTakeEffectActionSchema, ModifyRuntimeRouteUseBranchRouteActionSchema, ModifySpActionSchema, ModifySpDataActionSchema, ModifyTileBlackboardActionSchema, MoveEnemyToTargetDirPosActionSchema, MoveNextLevelBranchActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM07>;
