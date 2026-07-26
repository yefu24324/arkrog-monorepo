/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Mainline17MoveCameraWithWithdrawAction, MakeTargetDyingInCooperateAction, MakeTargetRebornInCooperateAction, ManageAttachListenerAbilityAction, ManageSbell2AttachListenerAbilityAction, ManageTileEffectAssociateWithTargetRouteAction, MarblesApplyForceWithTargetAction, MarkCurrentHpRatioAction, MarkDangerAreaFinishedAction, MarkEnemyHeightChangedAction, BattleActionM02 } from "../../../../types/buff-template-data/actions/m/actions-m-02.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Mainline17MoveCameraWithWithdraw, Assembly-CSharp 的严格 Action 数据。
 */
export const Mainline17MoveCameraWithWithdrawActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Mainline17MoveCameraWithWithdraw, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Mainline17MoveCameraWithWithdrawAction 的 `delay` 配置字段；准确战斗语义待确认。 */
    "_delay": z.number().describe("Mainline17MoveCameraWithWithdrawAction 的 `delay` 配置字段；准确战斗语义待确认。"),
    /** Mainline17MoveCameraWithWithdrawAction 的 `loadOffsetFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadOffsetFromBlackboard": z.boolean().describe("Mainline17MoveCameraWithWithdrawAction 的 `loadOffsetFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Mainline17MoveCameraWithWithdrawAction 的 `offset` 配置字段；准确战斗语义待确认。 */
    "_offset": z.strictObject({
                     /** Mainline17MoveCameraWithWithdrawAction 的 `x` 配置字段；准确战斗语义待确认。 */
                     "x": z.number().describe("Mainline17MoveCameraWithWithdrawAction 的 `x` 配置字段；准确战斗语义待确认。"),
                     /** Mainline17MoveCameraWithWithdrawAction 的 `y` 配置字段；准确战斗语义待确认。 */
                     "y": z.number().describe("Mainline17MoveCameraWithWithdrawAction 的 `y` 配置字段；准确战斗语义待确认。"),
                     /** Mainline17MoveCameraWithWithdrawAction 的 `z` 配置字段；准确战斗语义待确认。 */
                     "z": z.number().describe("Mainline17MoveCameraWithWithdrawAction 的 `z` 配置字段；准确战斗语义待确认。"),
                   }).describe("Mainline17MoveCameraWithWithdrawAction 的 `offset` 配置字段；准确战斗语义待确认。"),
    /** Mainline17MoveCameraWithWithdrawAction 的 `offsetKey` 配置字段；准确战斗语义待确认。 */
    "_offsetKey": z.string().describe("Mainline17MoveCameraWithWithdrawAction 的 `offsetKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Mainline17MoveCameraWithWithdraw, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Mainline17MoveCameraWithWithdrawAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MakeTargetDyingInCooperate, Assembly-CSharp 的严格 Action 数据。
 */
export const MakeTargetDyingInCooperateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MakeTargetDyingInCooperate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MakeTargetDyingInCooperate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MakeTargetDyingInCooperateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MakeTargetRebornInCooperate, Assembly-CSharp 的严格 Action 数据。
 */
export const MakeTargetRebornInCooperateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MakeTargetRebornInCooperate, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MakeTargetRebornInCooperate, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MakeTargetRebornInCooperateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ManageAttachListenerAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const ManageAttachListenerAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ManageAttachListenerAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ManageAttachListenerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ManageAttachListenerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ManageAttachListenerAbilityAction 的 `assignCastedTimesToBb` 配置字段；准确战斗语义待确认。 */
    "_assignCastedTimesToBb": z.boolean().describe("ManageAttachListenerAbilityAction 的 `assignCastedTimesToBb` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ManageAttachListenerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("ManageAttachListenerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ManageAttachListenerAbilityAction 的 `removeTileListener` 配置字段；准确战斗语义待确认。 */
    "_removeTileListener": z.boolean().describe("ManageAttachListenerAbilityAction 的 `removeTileListener` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ManageAttachListenerAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ManageAttachListenerAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ManageSbell2AttachListenerAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const ManageSbell2AttachListenerAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ManageSbell2AttachListenerAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ManageSbell2AttachListenerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `clearS1SnowTileList` 配置字段；准确战斗语义待确认。 */
    "_clearS1SnowTileList": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `clearS1SnowTileList` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `isS1RelatedOperate` 配置字段；准确战斗语义待确认。 */
    "_isS1RelatedOperate": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `isS1RelatedOperate` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `isS2RelatedOperate` 配置字段；准确战斗语义待确认。 */
    "_isS2RelatedOperate": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `isS2RelatedOperate` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `isS3RelatedOperate` 配置字段；准确战斗语义待确认。 */
    "_isS3RelatedOperate": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `isS3RelatedOperate` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("ManageSbell2AttachListenerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `resetTilesInRangeList` 配置字段；准确战斗语义待确认。 */
    "_resetTilesInRangeList": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `resetTilesInRangeList` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `triggerS1SnowForward` 配置字段；准确战斗语义待确认。 */
    "_triggerS1SnowForward": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `triggerS1SnowForward` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `triggerS2SnowOutward` 配置字段；准确战斗语义待确认。 */
    "_triggerS2SnowOutward": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `triggerS2SnowOutward` 配置字段；准确战斗语义待确认。"),
    /** ManageSbell2AttachListenerAbilityAction 的 `tryCreateTokenEndTile` 配置字段；准确战斗语义待确认。 */
    "_tryCreateTokenEndTile": z.boolean().describe("ManageSbell2AttachListenerAbilityAction 的 `tryCreateTokenEndTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ManageSbell2AttachListenerAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ManageSbell2AttachListenerAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ManageTileEffectAssociateWithTargetRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const ManageTileEffectAssociateWithTargetRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ManageTileEffectAssociateWithTargetRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ManageTileEffectAssociateWithTargetRouteAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
    "_effectKey": z.string().describe("ManageTileEffectAssociateWithTargetRouteAction 的 `effectKey` 配置字段；准确战斗语义待确认。"),
    /** ManageTileEffectAssociateWithTargetRouteAction 的 `isDelete` 配置字段；准确战斗语义待确认。 */
    "_isDelete": z.boolean().describe("ManageTileEffectAssociateWithTargetRouteAction 的 `isDelete` 配置字段；准确战斗语义待确认。"),
    /** ManageTileEffectAssociateWithTargetRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("ManageTileEffectAssociateWithTargetRouteAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** ManageTileEffectAssociateWithTargetRouteAction 的 `useRouteEndPosition` 配置字段；准确战斗语义待确认。 */
    "_useRouteEndPosition": z.boolean().describe("ManageTileEffectAssociateWithTargetRouteAction 的 `useRouteEndPosition` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ManageTileEffectAssociateWithTargetRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ManageTileEffectAssociateWithTargetRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarblesApplyForceWithTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const MarblesApplyForceWithTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarblesApplyForceWithTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MarblesApplyForceWithTargetAction 的 `changeFaceByDirection` 配置字段；准确战斗语义待确认。 */
    "_changeFaceByDirection": z.boolean().describe("MarblesApplyForceWithTargetAction 的 `changeFaceByDirection` 配置字段；准确战斗语义待确认。"),
    /** MarblesApplyForceWithTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_SOURCE").describe("MarblesApplyForceWithTargetAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** MarblesApplyForceWithTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("MarblesApplyForceWithTargetAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarblesApplyForceWithTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarblesApplyForceWithTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkCurrentHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkCurrentHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkCurrentHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** MarkCurrentHpRatioAction 的 `markInBlackboard` 配置字段；准确战斗语义待确认。 */
    "_markInBlackboard": z.boolean().describe("MarkCurrentHpRatioAction 的 `markInBlackboard` 配置字段；准确战斗语义待确认。"),
    /** MarkCurrentHpRatioAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","SOURCE"]).describe("MarkCurrentHpRatioAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkCurrentHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkCurrentHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkDangerAreaFinished, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkDangerAreaFinishedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkDangerAreaFinished, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkDangerAreaFinished, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkDangerAreaFinishedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+MarkEnemyHeightChanged, Assembly-CSharp 的严格 Action 数据。
 */
export const MarkEnemyHeightChangedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+MarkEnemyHeightChanged, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+MarkEnemyHeightChanged, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<MarkEnemyHeightChangedAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM02Schema = z
  .discriminatedUnion("$type", [Mainline17MoveCameraWithWithdrawActionSchema, MakeTargetDyingInCooperateActionSchema, MakeTargetRebornInCooperateActionSchema, ManageAttachListenerAbilityActionSchema, ManageSbell2AttachListenerAbilityActionSchema, ManageTileEffectAssociateWithTargetRouteActionSchema, MarblesApplyForceWithTargetActionSchema, MarkCurrentHpRatioActionSchema, MarkDangerAreaFinishedActionSchema, MarkEnemyHeightChangedActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM02>;
