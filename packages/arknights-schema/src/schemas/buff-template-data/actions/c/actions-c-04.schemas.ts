/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckBuffAbnormalFlagsAction, CheckBuffAttributeModifierChangedAction, CheckBuffRemainingTimeAction, CheckBuildableTypeAction, CheckBuildableTypeOfCharacterRootTileAction, CheckBuildCntAction, CheckCanTriggerLikeAttackAction, CheckCanUseAtkOrCbtAction, CheckCharacterDataAction, CheckCharacterDefaultDirectionAction, BattleActionC04 } from "../../../../types/buff-template-data/actions/c/actions-c-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBuffAbnormalFlags, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBuffAbnormalFlagsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBuffAbnormalFlags, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBuffAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlags": z.array(z.string()).describe("CheckBuffAbnormalFlagsAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffAbnormalFlagsAction 的 `allMustMatch` 配置字段；准确战斗语义待确认。 */
    "_allMustMatch": z.boolean().describe("CheckBuffAbnormalFlagsAction 的 `allMustMatch` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffAbnormalFlagsAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
    "_buffType": z.literal("MAIN_BUFF").describe("CheckBuffAbnormalFlagsAction 的 `buffType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBuffAbnormalFlags, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBuffAbnormalFlagsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBuffAttributeModifierChanged, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBuffAttributeModifierChangedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBuffAttributeModifierChanged, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBuffAttributeModifierChangedAction 的 `buffAttributeType` 配置字段；准确战斗语义待确认。 */
    "_buffAttributeType": z.enum(["ATK","DEF","MAX_HP"]).describe("CheckBuffAttributeModifierChangedAction 的 `buffAttributeType` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffAttributeModifierChangedAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
    "_formulaType": z.literal("FINAL_ADDITION").describe("CheckBuffAttributeModifierChangedAction 的 `formulaType` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffAttributeModifierChangedAction 的 `sourceAttributeType` 配置字段；准确战斗语义待确认。 */
    "_sourceAttributeType": z.enum(["ATK","DEF","MAX_HP"]).describe("CheckBuffAttributeModifierChangedAction 的 `sourceAttributeType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** CheckBuffAttributeModifierChangedAction 的 `useFirstDerivedBuff` 配置字段；准确战斗语义待确认。 */
    "_useFirstDerivedBuff": z.boolean().describe("CheckBuffAttributeModifierChangedAction 的 `useFirstDerivedBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBuffAttributeModifierChanged, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBuffAttributeModifierChangedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBuffRemainingTime, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBuffRemainingTimeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBuffRemainingTime, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBuffRemainingTimeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("CheckBuffRemainingTimeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffRemainingTimeAction 的 `checkTime` 配置字段；准确战斗语义待确认。 */
    "_checkTime": z.number().describe("CheckBuffRemainingTimeAction 的 `checkTime` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffRemainingTimeAction 的 `checkTimeKey` 配置字段；准确战斗语义待确认。 */
    "_checkTimeKey": z.string().describe("CheckBuffRemainingTimeAction 的 `checkTimeKey` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffRemainingTimeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GT","LE"]).describe("CheckBuffRemainingTimeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffRemainingTimeAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("CheckBuffRemainingTimeAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** CheckBuffRemainingTimeAction 的 `useSnapshotBuff` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotBuff": z.boolean().describe("CheckBuffRemainingTimeAction 的 `useSnapshotBuff` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBuffRemainingTime, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBuffRemainingTimeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBuildableType, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBuildableTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBuildableType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBuildableTypeAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.enum(["ALL","MELEE","RANGED"]).describe("CheckBuildableTypeAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** CheckBuildableTypeAction 的 `checkOriginCondition` 配置字段；准确战斗语义待确认。 */
    "_checkOriginCondition": z.boolean().describe("CheckBuildableTypeAction 的 `checkOriginCondition` 配置字段；准确战斗语义待确认。"),
    /** CheckBuildableTypeAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET","TARGET"]).describe("CheckBuildableTypeAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBuildableType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBuildableTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBuildableTypeOfCharacterRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBuildableTypeOfCharacterRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBuildableTypeOfCharacterRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBuildableTypeOfCharacterRootTileAction 的 `buildableType` 配置字段；准确战斗语义待确认。 */
    "_buildableType": z.enum(["ALL","MELEE","NONE","RANGED"]).describe("CheckBuildableTypeOfCharacterRootTileAction 的 `buildableType` 配置字段；准确战斗语义待确认。"),
    /** CheckBuildableTypeOfCharacterRootTileAction 的 `filterAllUnit` 配置字段；准确战斗语义待确认。 */
    "_filterAllUnit": z.boolean().describe("CheckBuildableTypeOfCharacterRootTileAction 的 `filterAllUnit` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBuildableTypeOfCharacterRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBuildableTypeOfCharacterRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckBuildCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckBuildCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckBuildCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckBuildCntAction 的 `checkBuildCnt` 配置字段；准确战斗语义待确认。 */
    "_checkBuildCnt": z.number().describe("CheckBuildCntAction 的 `checkBuildCnt` 配置字段；准确战斗语义待确认。"),
    /** CheckBuildCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GT","LE"]).describe("CheckBuildCntAction 的 `condType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckBuildCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckBuildCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCanTriggerLikeAttack, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCanTriggerLikeAttackActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCanTriggerLikeAttack, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCanTriggerLikeAttackAction 的 `attackTimeBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_attackTimeBlackboardKey": z.string().describe("CheckCanTriggerLikeAttackAction 的 `attackTimeBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** CheckCanTriggerLikeAttackAction 的 `attackTriggerNodes` 配置字段；准确战斗语义待确认。 */
    "_attackTriggerNodes": z.array(BattleActionReferenceSchema).describe("CheckCanTriggerLikeAttackAction 的 `attackTriggerNodes` 配置字段；准确战斗语义待确认。"),
    /** CheckCanTriggerLikeAttackAction 的 `intervalCacheKey` 配置字段；准确战斗语义待确认。 */
    "_intervalCacheKey": z.string().describe("CheckCanTriggerLikeAttackAction 的 `intervalCacheKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCanTriggerLikeAttack, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCanTriggerLikeAttackAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCanUseAtkOrCbt, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCanUseAtkOrCbtActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCanUseAtkOrCbt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCanUseAtkOrCbt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCanUseAtkOrCbtAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterData, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterDataActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterData, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterDataAction 的 `filterAlias` 配置字段；准确战斗语义待确认。 */
    "_filterAlias": z.boolean().describe("CheckCharacterDataAction 的 `filterAlias` 配置字段；准确战斗语义待确认。"),
    /** CheckCharacterDataAction 的 `filterAliasFixed` 配置字段；准确战斗语义待确认。 */
    "_filterAliasFixed": z.boolean().describe("CheckCharacterDataAction 的 `filterAliasFixed` 配置字段；准确战斗语义待确认。"),
    /** CheckCharacterDataAction 的 `filterPredefine` 配置字段；准确战斗语义待确认。 */
    "_filterPredefine": z.boolean().describe("CheckCharacterDataAction 的 `filterPredefine` 配置字段；准确战斗语义待确认。"),
    /** CheckCharacterDataAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CheckCharacterDataAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterData, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterDataAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterDefaultDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckCharacterDefaultDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckCharacterDefaultDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckCharacterDefaultDirectionAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.string().describe("CheckCharacterDefaultDirectionAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** CheckCharacterDefaultDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。 */
    "_direction": z.string().describe("CheckCharacterDefaultDirectionAction 的 `direction` 配置字段；准确战斗语义待确认。"),
    /** CheckCharacterDefaultDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","SOURCE","TARGET"]).describe("CheckCharacterDefaultDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CheckCharacterDefaultDirectionAction 的 `useBB` 配置字段；准确战斗语义待确认。 */
    "_useBB": z.boolean().describe("CheckCharacterDefaultDirectionAction 的 `useBB` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckCharacterDefaultDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckCharacterDefaultDirectionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC04Schema = z
  .discriminatedUnion("$type", [CheckBuffAbnormalFlagsActionSchema, CheckBuffAttributeModifierChangedActionSchema, CheckBuffRemainingTimeActionSchema, CheckBuildableTypeActionSchema, CheckBuildableTypeOfCharacterRootTileActionSchema, CheckBuildCntActionSchema, CheckCanTriggerLikeAttackActionSchema, CheckCanUseAtkOrCbtActionSchema, CheckCharacterDataActionSchema, CheckCharacterDefaultDirectionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC04>;
