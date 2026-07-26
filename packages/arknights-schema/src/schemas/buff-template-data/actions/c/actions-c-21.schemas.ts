/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CoopApplyForceByTargetAction, CoopApplyRecordDamageToMoveCtrlAction, CoopBoatGainScoreAction, CoopChangeVelocityByDirectionAction, CoopCheckInLastWaveAction, CoopCheckInRestingAction, CoopRecordDamageToBBAction, CoopRecordDefenceBossStatusAction, CoopReplaceActionKeyAction, CopyCharacterSharedBlackboardAction, BattleActionC21 } from "../../../../types/buff-template-data/actions/c/actions-c-21.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopApplyForceByTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopApplyForceByTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopApplyForceByTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopApplyForceByTargetAction 的 `directByInputTarget` 配置字段；准确战斗语义待确认。 */
    "_directByInputTarget": z.boolean().describe("CoopApplyForceByTargetAction 的 `directByInputTarget` 配置字段；准确战斗语义待确认。"),
    /** CoopApplyForceByTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CoopApplyForceByTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CoopApplyForceByTargetAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。 */
    "_useBuffAbility": z.boolean().describe("CoopApplyForceByTargetAction 的 `useBuffAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopApplyForceByTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopApplyForceByTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopApplyRecordDamageToMoveCtrl, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopApplyRecordDamageToMoveCtrlActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopApplyRecordDamageToMoveCtrl, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopApplyRecordDamageToMoveCtrlAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
    "_recordKey": z.string().describe("CoopApplyRecordDamageToMoveCtrlAction 的 `recordKey` 配置字段；准确战斗语义待确认。"),
    /** CoopApplyRecordDamageToMoveCtrlAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CoopApplyRecordDamageToMoveCtrlAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CoopApplyRecordDamageToMoveCtrlAction 的 `useTargetDirect` 配置字段；准确战斗语义待确认。 */
    "_useTargetDirect": z.boolean().describe("CoopApplyRecordDamageToMoveCtrlAction 的 `useTargetDirect` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopApplyRecordDamageToMoveCtrl, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopApplyRecordDamageToMoveCtrlAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopBoatGainScore, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopBoatGainScoreActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopBoatGainScore, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopBoatGainScoreAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("CoopBoatGainScoreAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** CoopBoatGainScoreAction 的 `score` 配置字段；准确战斗语义待确认。 */
    "_score": z.number().describe("CoopBoatGainScoreAction 的 `score` 配置字段；准确战斗语义待确认。"),
    /** CoopBoatGainScoreAction 的 `scoreKey` 配置字段；准确战斗语义待确认。 */
    "_scoreKey": z.string().describe("CoopBoatGainScoreAction 的 `scoreKey` 配置字段；准确战斗语义待确认。"),
    /** CoopBoatGainScoreAction 的 `isMin` 配置字段；准确战斗语义待确认。 */
    "isMin": z.boolean().describe("CoopBoatGainScoreAction 的 `isMin` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopBoatGainScore, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopBoatGainScoreAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopChangeVelocityByDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopChangeVelocityByDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopChangeVelocityByDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopChangeVelocityByDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CoopChangeVelocityByDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** CoopChangeVelocityByDirectionAction 的 `velocity` 配置字段；准确战斗语义待确认。 */
    "_velocity": z.number().describe("CoopChangeVelocityByDirectionAction 的 `velocity` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopChangeVelocityByDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopChangeVelocityByDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopCheckInLastWave, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopCheckInLastWaveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopCheckInLastWave, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopCheckInLastWave, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopCheckInLastWaveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopCheckInResting, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopCheckInRestingActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopCheckInResting, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopCheckInResting, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopCheckInRestingAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopRecordDamageToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopRecordDamageToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopRecordDamageToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopRecordDamageToBBAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
    "_filterModifierCancelled": z.boolean().describe("CoopRecordDamageToBBAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。"),
    /** CoopRecordDamageToBBAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
    "_recordKey": z.string().describe("CoopRecordDamageToBBAction 的 `recordKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopRecordDamageToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopRecordDamageToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopRecordDefenceBossStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopRecordDefenceBossStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopRecordDefenceBossStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopRecordDefenceBossStatusAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CoopRecordDefenceBossStatusAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopRecordDefenceBossStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopRecordDefenceBossStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopReplaceActionKey, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopReplaceActionKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopReplaceActionKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CoopReplaceActionKeyAction 的 `defaultKey` 配置字段；准确战斗语义待确认。 */
    "_defaultKey": z.string().describe("CoopReplaceActionKeyAction 的 `defaultKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopReplaceActionKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopReplaceActionKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CopyCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CopyCharacterSharedBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CopyCharacterSharedBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CopyCharacterSharedBlackboardAction 的 `copyToSharedBlackboard` 配置字段；准确战斗语义待确认。 */
    "_copyToSharedBlackboard": z.boolean().describe("CopyCharacterSharedBlackboardAction 的 `copyToSharedBlackboard` 配置字段；准确战斗语义待确认。"),
    /** CopyCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("CopyCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CopyCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CopyCharacterSharedBlackboardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC21Schema = z
  .discriminatedUnion("$type", [CoopApplyForceByTargetActionSchema, CoopApplyRecordDamageToMoveCtrlActionSchema, CoopBoatGainScoreActionSchema, CoopChangeVelocityByDirectionActionSchema, CoopCheckInLastWaveActionSchema, CoopCheckInRestingActionSchema, CoopRecordDamageToBBActionSchema, CoopRecordDefenceBossStatusActionSchema, CoopReplaceActionKeyActionSchema, CopyCharacterSharedBlackboardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC21>;
