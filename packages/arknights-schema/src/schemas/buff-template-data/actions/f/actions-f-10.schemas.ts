/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FixedValueHealAction, FootballAssignScoreToBBAction, FootballPlayerForceSearchTargetAction, ForceCharacterAnimatorFaceFrontAction, ForceCharacterFaceDefaultDirectionAction, ForceHideSkillRangeToShowAction, ForceRechargeTokenAction, ForceSetBattleSpeedLevelAction, ForceSetToSourcePositionAction, ForceSetToTilePositionAction, BattleActionF10 } from "../../../../types/buff-template-data/actions/f/actions-f-10.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FixedValueHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const FixedValueHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FixedValueHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FixedValueHealAction 的 `healValueKey` 配置字段；准确战斗语义待确认。 */
    "_healValueKey": z.string().describe("FixedValueHealAction 的 `healValueKey` 配置字段；准确战斗语义待确认。"),
    /** FixedValueHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
    "_ignoreHealFree": z.boolean().describe("FixedValueHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FixedValueHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FixedValueHealAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FootballAssignScoreToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const FootballAssignScoreToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FootballAssignScoreToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** FootballAssignScoreToBBAction 的 `scoreType` 配置字段；准确战斗语义待确认。 */
    "_scoreType": z.literal("Behind").describe("FootballAssignScoreToBBAction 的 `scoreType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FootballAssignScoreToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FootballAssignScoreToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FootballPlayerForceSearchTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const FootballPlayerForceSearchTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FootballPlayerForceSearchTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FootballPlayerForceSearchTargetAction 的 `isActive` 配置字段；准确战斗语义待确认。 */
    "_isActive": z.boolean().describe("FootballPlayerForceSearchTargetAction 的 `isActive` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FootballPlayerForceSearchTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FootballPlayerForceSearchTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceCharacterAnimatorFaceFront, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceCharacterAnimatorFaceFrontActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceCharacterAnimatorFaceFront, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceCharacterAnimatorFaceFrontAction 的 `FroceFaceFront` 配置字段；准确战斗语义待确认。 */
    "_FroceFaceFront": z.boolean().describe("ForceCharacterAnimatorFaceFrontAction 的 `FroceFaceFront` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceCharacterAnimatorFaceFront, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceCharacterAnimatorFaceFrontAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceCharacterFaceDefaultDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceCharacterFaceDefaultDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceCharacterFaceDefaultDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceCharacterFaceDefaultDirectionAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("ForceCharacterFaceDefaultDirectionAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** ForceCharacterFaceDefaultDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("ForceCharacterFaceDefaultDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceCharacterFaceDefaultDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceCharacterFaceDefaultDirectionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceHideSkillRangeToShow, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceHideSkillRangeToShowActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceHideSkillRangeToShow, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceHideSkillRangeToShowAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ForceHideSkillRangeToShowAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceHideSkillRangeToShow, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceHideSkillRangeToShowAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceRechargeToken, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceRechargeTokenActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceRechargeToken, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceRechargeTokenAction 的 `cntKey` 配置字段；准确战斗语义待确认。 */
    "_cntKey": z.string().describe("ForceRechargeTokenAction 的 `cntKey` 配置字段；准确战斗语义待确认。"),
    /** ForceRechargeTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
    "_rechargeTiming": z.enum(["NORMAL","ON_FINISH"]).describe("ForceRechargeTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。"),
    /** ForceRechargeTokenAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。 */
    "_refreshRemainingCnt": z.boolean().describe("ForceRechargeTokenAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。"),
    /** ForceRechargeTokenAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ForceRechargeTokenAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceRechargeToken, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceRechargeTokenAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceSetBattleSpeedLevel, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceSetBattleSpeedLevelActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceSetBattleSpeedLevel, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceSetBattleSpeedLevelAction 的 `setPause` 配置字段；准确战斗语义待确认。 */
    "_setPause": z.boolean().describe("ForceSetBattleSpeedLevelAction 的 `setPause` 配置字段；准确战斗语义待确认。"),
    /** ForceSetBattleSpeedLevelAction 的 `speedLevel` 配置字段；准确战斗语义待确认。 */
    "_speedLevel": z.string().describe("ForceSetBattleSpeedLevelAction 的 `speedLevel` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceSetBattleSpeedLevel, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceSetBattleSpeedLevelAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceSetToSourcePosition, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceSetToSourcePositionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceSetToSourcePosition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceSetToSourcePositionAction 的 `disableCurrentStillPull` 配置字段；准确战斗语义待确认。 */
    "_disableCurrentStillPull": z.boolean().describe("ForceSetToSourcePositionAction 的 `disableCurrentStillPull` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToSourcePositionAction 的 `reassignRoute` 配置字段；准确战斗语义待确认。 */
    "_reassignRoute": z.boolean().describe("ForceSetToSourcePositionAction 的 `reassignRoute` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToSourcePositionAction 的 `releaseFromBlocker` 配置字段；准确战斗语义待确认。 */
    "_releaseFromBlocker": z.boolean().describe("ForceSetToSourcePositionAction 的 `releaseFromBlocker` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceSetToSourcePosition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceSetToSourcePositionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ForceSetToTilePosition, Assembly-CSharp 的严格 Action 数据。
 */
export const ForceSetToTilePositionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ForceSetToTilePosition, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ForceSetToTilePositionAction 的 `checkTeleportImmune` 配置字段；准确战斗语义待确认。 */
    "_checkTeleportImmune": z.boolean().describe("ForceSetToTilePositionAction 的 `checkTeleportImmune` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("ForceSetToTilePositionAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `disableCurrentStillPull` 配置字段；准确战斗语义待确认。 */
    "_disableCurrentStillPull": z.boolean().describe("ForceSetToTilePositionAction 的 `disableCurrentStillPull` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `findNearestPassableTile` 配置字段；准确战斗语义待确认。 */
    "_findNearestPassableTile": z.boolean().describe("ForceSetToTilePositionAction 的 `findNearestPassableTile` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `randomOffset` 配置字段；准确战斗语义待确认。 */
    "_randomOffset": z.number().describe("ForceSetToTilePositionAction 的 `randomOffset` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `randomOffsetInnerRange` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetInnerRange": z.number().describe("ForceSetToTilePositionAction 的 `randomOffsetInnerRange` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `randomOffsetKey` 配置字段；准确战斗语义待确认。 */
    "_randomOffsetKey": z.string().describe("ForceSetToTilePositionAction 的 `randomOffsetKey` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `releaseFromBlocker` 配置字段；准确战斗语义待确认。 */
    "_releaseFromBlocker": z.boolean().describe("ForceSetToTilePositionAction 的 `releaseFromBlocker` 配置字段；准确战斗语义待确认。"),
    /** ForceSetToTilePositionAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("ForceSetToTilePositionAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** ForceSetToTilePositionAction 的 `useSnapshotTile` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotTile": z.boolean().describe("ForceSetToTilePositionAction 的 `useSnapshotTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ForceSetToTilePosition, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ForceSetToTilePositionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF10Schema = z
  .discriminatedUnion("$type", [FixedValueHealActionSchema, FootballAssignScoreToBBActionSchema, FootballPlayerForceSearchTargetActionSchema, ForceCharacterAnimatorFaceFrontActionSchema, ForceCharacterFaceDefaultDirectionActionSchema, ForceHideSkillRangeToShowActionSchema, ForceRechargeTokenActionSchema, ForceSetBattleSpeedLevelActionSchema, ForceSetToSourcePositionActionSchema, ForceSetToTilePositionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF10>;
