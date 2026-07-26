/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SandboxV3ShowHiddenRoomAction, SandboxV3SkipEnemyDropItemsAction, SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction, SandboxV3TryMaintainServiceAction, SandboxV3TryProcessAction, SaveHpToDynamicVarAction, ScoreAGoalAction, SetAtkScaleZeroAction, SetBodyDirectionAction, SetBodyDirectionByBuffTimeAction, BattleActionS07 } from "../../../../types/buff-template-data/actions/s/actions-s-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ShowHiddenRoom, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3ShowHiddenRoomActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3ShowHiddenRoom, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3ShowHiddenRoomAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。 */
    "_roomOffsetX": z.number().describe("SandboxV3ShowHiddenRoomAction 的 `roomOffsetX` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ShowHiddenRoomAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。 */
    "_roomOffsetY": z.number().describe("SandboxV3ShowHiddenRoomAction 的 `roomOffsetY` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3ShowHiddenRoomAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3ShowHiddenRoomAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3ShowHiddenRoom, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3ShowHiddenRoomAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3SkipEnemyDropItems, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3SkipEnemyDropItemsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3SkipEnemyDropItems, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3SkipEnemyDropItemsAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("SandboxV3SkipEnemyDropItemsAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3SkipEnemyDropItems, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3SkipEnemyDropItemsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3TriggerSkillForReadyOtherCharactersWithSameFood, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3TriggerSkillForReadyOtherCharactersWithSameFood, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction 的 `runeKey` 配置字段；准确战斗语义待确认。 */
    "_runeKey": z.string().describe("SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction 的 `runeKey` 配置字段；准确战斗语义待确认。"),
    /** SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3TriggerSkillForReadyOtherCharactersWithSameFood, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3TryMaintainService, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3TryMaintainServiceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3TryMaintainService, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3TryMaintainServiceAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3TryMaintainServiceAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3TryMaintainService, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3TryMaintainServiceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3TryProcess, Assembly-CSharp 的严格 Action 数据。
 */
export const SandboxV3TryProcessActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SandboxV3TryProcess, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SandboxV3TryProcessAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SandboxV3TryProcessAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SandboxV3TryProcess, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SandboxV3TryProcessAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SaveHpToDynamicVar, Assembly-CSharp 的严格 Action 数据。
 */
export const SaveHpToDynamicVarActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SaveHpToDynamicVar, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SaveHpToDynamicVarAction 的 `alwaysAssign` 配置字段；准确战斗语义待确认。 */
    "_alwaysAssign": z.boolean().describe("SaveHpToDynamicVarAction 的 `alwaysAssign` 配置字段；准确战斗语义待确认。"),
    /** SaveHpToDynamicVarAction 的 `buffNameOfBlackboard` 配置字段；准确战斗语义待确认。 */
    "_buffNameOfBlackboard": z.union([
                                   z.null(),
                                   z.string(),
                                 ]).describe("SaveHpToDynamicVarAction 的 `buffNameOfBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SaveHpToDynamicVarAction 的 `saveType` 配置字段；准确战斗语义待确认。 */
    "_saveType": z.enum(["HP","LOST_HP"]).describe("SaveHpToDynamicVarAction 的 `saveType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SaveHpToDynamicVar, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SaveHpToDynamicVarAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ScoreAGoal, Assembly-CSharp 的严格 Action 数据。
 */
export const ScoreAGoalActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ScoreAGoal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ScoreAGoalAction 的 `sideType` 配置字段；准确战斗语义待确认。 */
    "_sideType": z.enum(["ALLY","ENEMY"]).describe("ScoreAGoalAction 的 `sideType` 配置字段；准确战斗语义待确认。"),
    /** 黑板参数的数值槽。 */
    "value": z.number().describe("黑板参数的数值槽。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ScoreAGoal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ScoreAGoalAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetAtkScaleZero, Assembly-CSharp 的严格 Action 数据。
 */
export const SetAtkScaleZeroActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetAtkScaleZero, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetAtkScaleZeroAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.literal("NONE").describe("SetAtkScaleZeroAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** SetAtkScaleZeroAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("SetAtkScaleZeroAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetAtkScaleZero, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetAtkScaleZeroAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetBodyDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const SetBodyDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetBodyDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetBodyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("SetBodyDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
    "_directionKey": z.string().describe("SetBodyDirectionAction 的 `directionKey` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionAction 的 `directionSourceType` 配置字段；准确战斗语义待确认。 */
    "_directionSourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("SetBodyDirectionAction 的 `directionSourceType` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SetBodyDirectionAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionAction 的 `includeFace` 配置字段；准确战斗语义待确认。 */
    "_includeFace": z.boolean().describe("SetBodyDirectionAction 的 `includeFace` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionAction 的 `onlyChangeFace` 配置字段；准确战斗语义待确认。 */
    "_onlyChangeFace": z.boolean().describe("SetBodyDirectionAction 的 `onlyChangeFace` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** SetBodyDirectionAction 的 `useDirectionFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_useDirectionFromBlackboard": z.boolean().describe("SetBodyDirectionAction 的 `useDirectionFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
    "_useSourceDirection": z.boolean().describe("SetBodyDirectionAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetBodyDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetBodyDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetBodyDirectionByBuffTime, Assembly-CSharp 的严格 Action 数据。
 */
export const SetBodyDirectionByBuffTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetBodyDirectionByBuffTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetBodyDirectionByBuffTimeAction 的 `changeType` 配置字段；准确战斗语义待确认。 */
    "_changeType": z.literal("Face").describe("SetBodyDirectionByBuffTimeAction 的 `changeType` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionByBuffTimeAction 的 `endDirKey` 配置字段；准确战斗语义待确认。 */
    "_endDirKey": z.string().describe("SetBodyDirectionByBuffTimeAction 的 `endDirKey` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionByBuffTimeAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("SetBodyDirectionByBuffTimeAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** SetBodyDirectionByBuffTimeAction 的 `startDirKey` 配置字段；准确战斗语义待确认。 */
    "_startDirKey": z.string().describe("SetBodyDirectionByBuffTimeAction 的 `startDirKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetBodyDirectionByBuffTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetBodyDirectionByBuffTimeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS07Schema = z
  .discriminatedUnion("$type", [SandboxV3ShowHiddenRoomActionSchema, SandboxV3SkipEnemyDropItemsActionSchema, SandboxV3TriggerSkillForReadyOtherCharactersWithSameFoodActionSchema, SandboxV3TryMaintainServiceActionSchema, SandboxV3TryProcessActionSchema, SaveHpToDynamicVarActionSchema, ScoreAGoalActionSchema, SetAtkScaleZeroActionSchema, SetBodyDirectionActionSchema, SetBodyDirectionByBuffTimeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS07>;
