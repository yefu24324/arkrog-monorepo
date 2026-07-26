/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SetDisableClickCharacterInfoAction, SetDisappearAction, SetDitherIntensityOnAnimatorBehaviourAction, SetDynamicOffsetToTargetOffsetTileSelectorAction, SetEnemyBossCountDownAction, SetEnemyCanNotExitAction, SetEnemySpecialBlockConditionAction, SetEnemyStruggleAction, SetExternWithdrawGainCostFlagAction, SetHpSameToSourceAction, BattleActionS09 } from "../../../../types/buff-template-data/actions/s/actions-s-09.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetDisableClickCharacterInfo, Assembly-CSharp 的严格 Action 数据。
 */
export const SetDisableClickCharacterInfoActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetDisableClickCharacterInfo, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetDisableClickCharacterInfoAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
    "_enabled": z.boolean().describe("SetDisableClickCharacterInfoAction 的 `enabled` 配置字段；准确战斗语义待确认。"),
    /** SetDisableClickCharacterInfoAction 的 `reasonMask` 配置字段；准确战斗语义待确认。 */
    "_reasonMask": z.literal("OWNER_SETTING").describe("SetDisableClickCharacterInfoAction 的 `reasonMask` 配置字段；准确战斗语义待确认。"),
    /** SetDisableClickCharacterInfoAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SetDisableClickCharacterInfoAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetDisableClickCharacterInfo, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetDisableClickCharacterInfoAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetDisappear, Assembly-CSharp 的严格 Action 数据。
 */
export const SetDisappearActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetDisappear, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetDisappearAction 的 `isDisappear` 配置字段；准确战斗语义待确认。 */
    "_isDisappear": z.boolean().describe("SetDisappearAction 的 `isDisappear` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetDisappear, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetDisappearAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetDitherIntensityOnAnimatorBehaviour, Assembly-CSharp 的严格 Action 数据。
 */
export const SetDitherIntensityOnAnimatorBehaviourActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetDitherIntensityOnAnimatorBehaviour, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetDitherIntensityOnAnimatorBehaviourAction 的 `ditherIntensity` 配置字段；准确战斗语义待确认。 */
    "_ditherIntensity": z.number().describe("SetDitherIntensityOnAnimatorBehaviourAction 的 `ditherIntensity` 配置字段；准确战斗语义待确认。"),
    /** SetDitherIntensityOnAnimatorBehaviourAction 的 `ditherIntensityKey` 配置字段；准确战斗语义待确认。 */
    "_ditherIntensityKey": z.string().describe("SetDitherIntensityOnAnimatorBehaviourAction 的 `ditherIntensityKey` 配置字段；准确战斗语义待确认。"),
    /** SetDitherIntensityOnAnimatorBehaviourAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SetDitherIntensityOnAnimatorBehaviourAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetDitherIntensityOnAnimatorBehaviour, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetDitherIntensityOnAnimatorBehaviourAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetDynamicOffsetToTargetOffsetTileSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const SetDynamicOffsetToTargetOffsetTileSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetDynamicOffsetToTargetOffsetTileSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `defaultDirection` 配置字段；准确战斗语义待确认。 */
    "_defaultDirection": z.string().describe("SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `defaultDirection` 配置字段；准确战斗语义待确认。"),
    /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `defaultDistance` 配置字段；准确战斗语义待确认。 */
    "_defaultDistance": z.number().describe("SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `defaultDistance` 配置字段；准确战斗语义待确认。"),
    /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
    "_directionKey": z.string().describe("SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `directionKey` 配置字段；准确战斗语义待确认。"),
    /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `distanceKey` 配置字段；准确战斗语义待确认。 */
    "_distanceKey": z.string().describe("SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `distanceKey` 配置字段；准确战斗语义待确认。"),
    /** SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("SetDynamicOffsetToTargetOffsetTileSelectorAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetDynamicOffsetToTargetOffsetTileSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetDynamicOffsetToTargetOffsetTileSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetEnemyBossCountDown, Assembly-CSharp 的严格 Action 数据。
 */
export const SetEnemyBossCountDownActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetEnemyBossCountDown, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetEnemyBossCountDownAction 的 `countDownKey` 配置字段；准确战斗语义待确认。 */
    "_countDownKey": z.string().describe("SetEnemyBossCountDownAction 的 `countDownKey` 配置字段；准确战斗语义待确认。"),
    /** SetEnemyBossCountDownAction 的 `countDownTime` 配置字段；准确战斗语义待确认。 */
    "_countDownTime": z.number().describe("SetEnemyBossCountDownAction 的 `countDownTime` 配置字段；准确战斗语义待确认。"),
    /** SetEnemyBossCountDownAction 的 `disableCountDown` 配置字段；准确战斗语义待确认。 */
    "_disableCountDown": z.boolean().describe("SetEnemyBossCountDownAction 的 `disableCountDown` 配置字段；准确战斗语义待确认。"),
    /** SetEnemyBossCountDownAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("SetEnemyBossCountDownAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** SetEnemyBossCountDownAction 的 `resetIfAlreadyActive` 配置字段；准确战斗语义待确认。 */
    "_resetIfAlreadyActive": z.boolean().describe("SetEnemyBossCountDownAction 的 `resetIfAlreadyActive` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetEnemyBossCountDown, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetEnemyBossCountDownAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetEnemyCanNotExit, Assembly-CSharp 的严格 Action 数据。
 */
export const SetEnemyCanNotExitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetEnemyCanNotExit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetEnemyCanNotExitAction 的 `canNotExit` 配置字段；准确战斗语义待确认。 */
    "_canNotExit": z.boolean().describe("SetEnemyCanNotExitAction 的 `canNotExit` 配置字段；准确战斗语义待确认。"),
    /** SetEnemyCanNotExitAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SetEnemyCanNotExitAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetEnemyCanNotExit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetEnemyCanNotExitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetEnemySpecialBlockCondition, Assembly-CSharp 的严格 Action 数据。
 */
export const SetEnemySpecialBlockConditionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetEnemySpecialBlockCondition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetEnemySpecialBlockConditionAction 的 `buffKeyPairs` 配置字段；准确战斗语义待确认。 */
    "_buffKeyPairs": z.array(z.strictObject({
                           /** SetEnemySpecialBlockConditionAction 的 `blockeeBuffKey` 配置字段；准确战斗语义待确认。 */
                           "blockeeBuffKey": z.string().describe("SetEnemySpecialBlockConditionAction 的 `blockeeBuffKey` 配置字段；准确战斗语义待确认。"),
                           /** SetEnemySpecialBlockConditionAction 的 `blockerBuffKey` 配置字段；准确战斗语义待确认。 */
                           "blockerBuffKey": z.string().describe("SetEnemySpecialBlockConditionAction 的 `blockerBuffKey` 配置字段；准确战斗语义待确认。"),
                         })).describe("SetEnemySpecialBlockConditionAction 的 `buffKeyPairs` 配置字段；准确战斗语义待确认。"),
    /** SetEnemySpecialBlockConditionAction 的 `enemy` 配置字段；准确战斗语义待确认。 */
    "_enemy": z.string().describe("SetEnemySpecialBlockConditionAction 的 `enemy` 配置字段；准确战斗语义待确认。"),
    /** SetEnemySpecialBlockConditionAction 的 `filterTags` 配置字段；准确战斗语义待确认。 */
    "_filterTags": z.array(z.string()).describe("SetEnemySpecialBlockConditionAction 的 `filterTags` 配置字段；准确战斗语义待确认。"),
    /** SetEnemySpecialBlockConditionAction 的 `type` 配置字段；准确战斗语义待确认。 */
    "_type": z.enum(["BUFF_KEY_MATCH_AND","FILTER_TAGS","NONE"]).describe("SetEnemySpecialBlockConditionAction 的 `type` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetEnemySpecialBlockCondition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetEnemySpecialBlockConditionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetEnemyStruggle, Assembly-CSharp 的严格 Action 数据。
 */
export const SetEnemyStruggleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetEnemyStruggle, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetEnemyStruggleAction 的 `isStruggle` 配置字段；准确战斗语义待确认。 */
    "_isStruggle": z.boolean().describe("SetEnemyStruggleAction 的 `isStruggle` 配置字段；准确战斗语义待确认。"),
    /** SetEnemyStruggleAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("SetEnemyStruggleAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetEnemyStruggle, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetEnemyStruggleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetExternWithdrawGainCostFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const SetExternWithdrawGainCostFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetExternWithdrawGainCostFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** SetExternWithdrawGainCostFlagAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.boolean().describe("SetExternWithdrawGainCostFlagAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetExternWithdrawGainCostFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetExternWithdrawGainCostFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetHpSameToSource, Assembly-CSharp 的严格 Action 数据。
 */
export const SetHpSameToSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetHpSameToSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetHpSameToSourceAction 的 `isSkipEvent` 配置字段；准确战斗语义待确认。 */
    "_isSkipEvent": z.boolean().describe("SetHpSameToSourceAction 的 `isSkipEvent` 配置字段；准确战斗语义待确认。"),
    /** SetHpSameToSourceAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。 */
    "_isUndeadable": z.boolean().describe("SetHpSameToSourceAction 的 `isUndeadable` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetHpSameToSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetHpSameToSourceAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS09Schema = z
  .discriminatedUnion("$type", [SetDisableClickCharacterInfoActionSchema, SetDisappearActionSchema, SetDitherIntensityOnAnimatorBehaviourActionSchema, SetDynamicOffsetToTargetOffsetTileSelectorActionSchema, SetEnemyBossCountDownActionSchema, SetEnemyCanNotExitActionSchema, SetEnemySpecialBlockConditionActionSchema, SetEnemyStruggleActionSchema, SetExternWithdrawGainCostFlagActionSchema, SetHpSameToSourceActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS09>;
