/**
 * buff_template_data 的 T 组 Action Zod Schema。
 */

import { z } from "zod";

import type { TargetHpRatioToAtkScaleAction, TrackEnemyInLaterWaveAction, TransferRemainingCharacterCntVolumeAction, TrapRockflSummonLtrockAction, TriggerAbilityAction, TriggerAbilityMergeBBAction, TriggerAbilityUseSelectorAction, TriggerAbilityUseSelectorMergeBBAction, TriggerAttachListenerToTileAbilityAction, TriggerAutoSkillAction, BattleActionT01 } from "../../../../types/buff-template-data/actions/t/actions-t-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TargetHpRatioToAtkScale, Assembly-CSharp 的严格 Action 数据。
 */
export const TargetHpRatioToAtkScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TargetHpRatioToAtkScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TargetHpRatioToAtkScaleAction 的 `startHpRatio` 配置字段；准确战斗语义待确认。 */
    "_startHpRatio": z.number().describe("TargetHpRatioToAtkScaleAction 的 `startHpRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TargetHpRatioToAtkScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TargetHpRatioToAtkScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TrackEnemyInLaterWave, Assembly-CSharp 的严格 Action 数据。
 */
export const TrackEnemyInLaterWaveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TrackEnemyInLaterWave, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TrackEnemyInLaterWaveAction 的 `nextWaveStride` 配置字段；准确战斗语义待确认。 */
    "_nextWaveStride": z.number().describe("TrackEnemyInLaterWaveAction 的 `nextWaveStride` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TrackEnemyInLaterWave, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TrackEnemyInLaterWaveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TransferRemainingCharacterCntVolume, Assembly-CSharp 的严格 Action 数据。
 */
export const TransferRemainingCharacterCntVolumeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TransferRemainingCharacterCntVolume, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TransferRemainingCharacterCntVolume, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TransferRemainingCharacterCntVolumeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TrapRockflSummonLtrock, Assembly-CSharp 的严格 Action 数据。
 */
export const TrapRockflSummonLtrockActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TrapRockflSummonLtrock, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TrapRockflSummonLtrockAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("TrapRockflSummonLtrockAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** TrapRockflSummonLtrockAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
    "_endPosOffsetAlongDirection": z.number().describe("TrapRockflSummonLtrockAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。"),
    /** TrapRockflSummonLtrockAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.string().describe("TrapRockflSummonLtrockAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** TrapRockflSummonLtrockAction 的 `midPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
    "_midPosOffsetAlongDirection": z.number().describe("TrapRockflSummonLtrockAction 的 `midPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。"),
    /** TrapRockflSummonLtrockAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("TrapRockflSummonLtrockAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** TrapRockflSummonLtrockAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("SOURCE").describe("TrapRockflSummonLtrockAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** TrapRockflSummonLtrockAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("TrapRockflSummonLtrockAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TrapRockflSummonLtrock, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TrapRockflSummonLtrockAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityAction 的 `castDirectly` 配置字段；准确战斗语义待确认。 */
    "_castDirectly": z.boolean().describe("TriggerAbilityAction 的 `castDirectly` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
    "_checkCanUseAblityFlag": z.boolean().describe("TriggerAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityAction 的 `notInterruptAbilityIfCasting` 配置字段；准确战斗语义待确认。 */
    "_notInterruptAbilityIfCasting": z.boolean().describe("TriggerAbilityAction 的 `notInterruptAbilityIfCasting` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","MODIFIER_SOURCE","SOURCE"]).describe("TriggerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** TriggerAbilityAction 的 `triggerHostAbility` 配置字段；准确战斗语义待确认。 */
    "_triggerHostAbility": z.boolean().describe("TriggerAbilityAction 的 `triggerHostAbility` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityAction 的 `useCastResult` 配置字段；准确战斗语义待确认。 */
    "_useCastResult": z.boolean().describe("TriggerAbilityAction 的 `useCastResult` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
    "_useFirstActiveAbility": z.boolean().describe("TriggerAbilityAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbilityMergeBB, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerAbilityMergeBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerAbilityMergeBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerAbilityMergeBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerAbilityMergeBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `assignBBKeys` 配置字段；准确战斗语义待确认。 */
    "_assignBBKeys": z.array(z.string()).describe("TriggerAbilityMergeBBAction 的 `assignBBKeys` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `castDirectly` 配置字段；准确战斗语义待确认。 */
    "_castDirectly": z.boolean().describe("TriggerAbilityMergeBBAction 的 `castDirectly` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
    "_checkCanUseAblityFlag": z.boolean().describe("TriggerAbilityMergeBBAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("TriggerAbilityMergeBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `resetSelector` 配置字段；准确战斗语义待确认。 */
    "_resetSelector": z.boolean().describe("TriggerAbilityMergeBBAction 的 `resetSelector` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** TriggerAbilityMergeBBAction 的 `useCastResult` 配置字段；准确战斗语义待确认。 */
    "_useCastResult": z.boolean().describe("TriggerAbilityMergeBBAction 的 `useCastResult` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
    "_useFirstActiveAbility": z.boolean().describe("TriggerAbilityMergeBBAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityMergeBBAction 的 `useOwnerHost` 配置字段；准确战斗语义待确认。 */
    "_useOwnerHost": z.boolean().describe("TriggerAbilityMergeBBAction 的 `useOwnerHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbilityMergeBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerAbilityMergeBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbilityUseSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerAbilityUseSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerAbilityUseSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerAbilityUseSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerAbilityUseSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorAction 的 `checkCanUseAbilityFlag` 配置字段；准确战斗语义待确认。 */
    "_checkCanUseAbilityFlag": z.boolean().describe("TriggerAbilityUseSelectorAction 的 `checkCanUseAbilityFlag` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("TriggerAbilityUseSelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.enum(["SOURCE","TARGET"]).describe("TriggerAbilityUseSelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorAction 的 `returnFalseIfNoTarget` 配置字段；准确战斗语义待确认。 */
    "_returnFalseIfNoTarget": z.boolean().describe("TriggerAbilityUseSelectorAction 的 `returnFalseIfNoTarget` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbilityUseSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerAbilityUseSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbilityUseSelectorMergeBB, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerAbilityUseSelectorMergeBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerAbilityUseSelectorMergeBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerAbilityUseSelectorMergeBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerAbilityUseSelectorMergeBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorMergeBBAction 的 `castDirectly` 配置字段；准确战斗语义待确认。 */
    "_castDirectly": z.boolean().describe("TriggerAbilityUseSelectorMergeBBAction 的 `castDirectly` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorMergeBBAction 的 `checkAbilityIsReady` 配置字段；准确战斗语义待确认。 */
    "_checkAbilityIsReady": z.boolean().describe("TriggerAbilityUseSelectorMergeBBAction 的 `checkAbilityIsReady` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorMergeBBAction 的 `checkSrcCastable` 配置字段；准确战斗语义待确认。 */
    "_checkSrcCastable": z.boolean().describe("TriggerAbilityUseSelectorMergeBBAction 的 `checkSrcCastable` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorMergeBBAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("TriggerAbilityUseSelectorMergeBBAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** TriggerAbilityUseSelectorMergeBBAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.literal("SOURCE").describe("TriggerAbilityUseSelectorMergeBBAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerAbilityUseSelectorMergeBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerAbilityUseSelectorMergeBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerAttachListenerToTileAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerAttachListenerToTileAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerAttachListenerToTileAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("TriggerAttachListenerToTileAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `exceptTargetRootTile` 配置字段；准确战斗语义待确认。 */
    "_exceptTargetRootTile": z.boolean().describe("TriggerAttachListenerToTileAbilityAction 的 `exceptTargetRootTile` 配置字段；准确战斗语义待确认。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("TriggerAttachListenerToTileAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("TriggerAttachListenerToTileAbilityAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。 */
    "_rangeIdKey": z.string().describe("TriggerAttachListenerToTileAbilityAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `returnWhetherCreateNewTileListener` 配置字段；准确战斗语义待确认。 */
    "_returnWhetherCreateNewTileListener": z.boolean().describe("TriggerAttachListenerToTileAbilityAction 的 `returnWhetherCreateNewTileListener` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `useHostAsOwner` 配置字段；准确战斗语义待确认。 */
    "_useHostAsOwner": z.boolean().describe("TriggerAttachListenerToTileAbilityAction 的 `useHostAsOwner` 配置字段；准确战斗语义待确认。"),
    /** TriggerAttachListenerToTileAbilityAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRootTile": z.boolean().describe("TriggerAttachListenerToTileAbilityAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerAttachListenerToTileAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerAttachListenerToTileAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+TriggerAutoSkill, Assembly-CSharp 的严格 Action 数据。
 */
export const TriggerAutoSkillActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+TriggerAutoSkill, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** TriggerAutoSkillAction 的 `checkBeforeTrigger` 配置字段；准确战斗语义待确认。 */
    "_checkBeforeTrigger": z.boolean().describe("TriggerAutoSkillAction 的 `checkBeforeTrigger` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+TriggerAutoSkill, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<TriggerAutoSkillAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionT01Schema = z
  .discriminatedUnion("$type", [TargetHpRatioToAtkScaleActionSchema, TrackEnemyInLaterWaveActionSchema, TransferRemainingCharacterCntVolumeActionSchema, TrapRockflSummonLtrockActionSchema, TriggerAbilityActionSchema, TriggerAbilityMergeBBActionSchema, TriggerAbilityUseSelectorActionSchema, TriggerAbilityUseSelectorMergeBBActionSchema, TriggerAttachListenerToTileAbilityActionSchema, TriggerAutoSkillActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionT01>;
