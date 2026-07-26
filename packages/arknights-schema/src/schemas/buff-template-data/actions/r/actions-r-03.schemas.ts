/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RecordCurrentHpRatioAction, RecordDamageModifierAction, RefreshAttachListenerToTileAbilityAction, RefreshextraTileGraphicAction, RefreshMagicCircuitRouteAction, RefreshTokenDeployAndStackCntAction, RegisterAsStandAction, RegisterMagicCircuitRouteAction, RegisterMagicCircuitSpAffectAction, RegistProgressBuffAction, BattleActionR03 } from "../../../../types/buff-template-data/actions/r/actions-r-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RecordCurrentHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const RecordCurrentHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RecordCurrentHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RecordCurrentHpRatioAction 的 `needOffset` 配置字段；准确战斗语义待确认。 */
    "_needOffset": z.boolean().describe("RecordCurrentHpRatioAction 的 `needOffset` 配置字段；准确战斗语义待确认。"),
    /** RecordCurrentHpRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("RecordCurrentHpRatioAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** RecordCurrentHpRatioAction 的 `recordKey` 配置字段；准确战斗语义待确认。 */
    "_recordKey": z.string().describe("RecordCurrentHpRatioAction 的 `recordKey` 配置字段；准确战斗语义待确认。"),
    /** RecordCurrentHpRatioAction 的 `recordType` 配置字段；准确战斗语义待确认。 */
    "_recordType": z.enum(["hp","hpRatio","maxHp"]).describe("RecordCurrentHpRatioAction 的 `recordType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RecordCurrentHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RecordCurrentHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RecordDamageModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const RecordDamageModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RecordDamageModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RecordDamageModifierAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。 */
    "_filterModifierCancelled": z.boolean().describe("RecordDamageModifierAction 的 `filterModifierCancelled` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RecordDamageModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RecordDamageModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RefreshAttachListenerToTileAbility, Assembly-CSharp 的严格 Action 数据。
 */
export const RefreshAttachListenerToTileAbilityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RefreshAttachListenerToTileAbility, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RefreshAttachListenerToTileAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("RefreshAttachListenerToTileAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** RefreshAttachListenerToTileAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
    "_checkCanUseAblityFlag": z.boolean().describe("RefreshAttachListenerToTileAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。"),
    /** RefreshAttachListenerToTileAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("RefreshAttachListenerToTileAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** RefreshAttachListenerToTileAbilityAction 的 `syncAbilityName` 配置字段；准确战斗语义待确认。 */
    "_syncAbilityName": z.string().describe("RefreshAttachListenerToTileAbilityAction 的 `syncAbilityName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RefreshAttachListenerToTileAbility, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RefreshAttachListenerToTileAbilityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RefreshextraTileGraphic, Assembly-CSharp 的严格 Action 数据。
 */
export const RefreshextraTileGraphicActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RefreshextraTileGraphic, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RefreshextraTileGraphic, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RefreshextraTileGraphicAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RefreshMagicCircuitRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const RefreshMagicCircuitRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RefreshMagicCircuitRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RefreshMagicCircuitRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RefreshMagicCircuitRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RefreshTokenDeployAndStackCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const RefreshTokenDeployAndStackCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RefreshTokenDeployAndStackCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RefreshTokenDeployAndStackCntAction 的 `maxDeckStackCnt` 配置字段；准确战斗语义待确认。 */
    "_maxDeckStackCnt": z.number().describe("RefreshTokenDeployAndStackCntAction 的 `maxDeckStackCnt` 配置字段；准确战斗语义待确认。"),
    /** RefreshTokenDeployAndStackCntAction 的 `maxDeckStackCntKey` 配置字段；准确战斗语义待确认。 */
    "_maxDeckStackCntKey": z.string().describe("RefreshTokenDeployAndStackCntAction 的 `maxDeckStackCntKey` 配置字段；准确战斗语义待确认。"),
    /** RefreshTokenDeployAndStackCntAction 的 `maxDeployCnt` 配置字段；准确战斗语义待确认。 */
    "_maxDeployCnt": z.number().describe("RefreshTokenDeployAndStackCntAction 的 `maxDeployCnt` 配置字段；准确战斗语义待确认。"),
    /** RefreshTokenDeployAndStackCntAction 的 `maxDeployCntKey` 配置字段；准确战斗语义待确认。 */
    "_maxDeployCntKey": z.string().describe("RefreshTokenDeployAndStackCntAction 的 `maxDeployCntKey` 配置字段；准确战斗语义待确认。"),
    /** RefreshTokenDeployAndStackCntAction 的 `refreshTargetTokenOrHost` 配置字段；准确战斗语义待确认。 */
    "_refreshTargetTokenOrHost": z.boolean().describe("RefreshTokenDeployAndStackCntAction 的 `refreshTargetTokenOrHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RefreshTokenDeployAndStackCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RefreshTokenDeployAndStackCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RegisterAsStand, Assembly-CSharp 的严格 Action 数据。
 */
export const RegisterAsStandActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RegisterAsStand, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RegisterAsStandAction 的 `hostAbilityName` 配置字段；准确战斗语义待确认。 */
    "_hostAbilityName": z.string().describe("RegisterAsStandAction 的 `hostAbilityName` 配置字段；准确战斗语义待确认。"),
    /** RegisterAsStandAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("RegisterAsStandAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** RegisterAsStandAction 的 `standAbilityName` 配置字段；准确战斗语义待确认。 */
    "_standAbilityName": z.string().describe("RegisterAsStandAction 的 `standAbilityName` 配置字段；准确战斗语义待确认。"),
    /** RegisterAsStandAction 的 `hostId` 配置字段；准确战斗语义待确认。 */
    "hostId": z.string().describe("RegisterAsStandAction 的 `hostId` 配置字段；准确战斗语义待确认。"),
    /** RegisterAsStandAction 的 `useIdToFindHost` 配置字段；准确战斗语义待确认。 */
    "useIdToFindHost": z.boolean().describe("RegisterAsStandAction 的 `useIdToFindHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RegisterAsStand, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RegisterAsStandAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RegisterMagicCircuitRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const RegisterMagicCircuitRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RegisterMagicCircuitRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RegisterMagicCircuitRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RegisterMagicCircuitRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RegisterMagicCircuitSpAffect, Assembly-CSharp 的严格 Action 数据。
 */
export const RegisterMagicCircuitSpAffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RegisterMagicCircuitSpAffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RegisterMagicCircuitSpAffectAction 的 `isTwoEntriesOnly` 配置字段；准确战斗语义待确认。 */
    "_isTwoEntriesOnly": z.boolean().describe("RegisterMagicCircuitSpAffectAction 的 `isTwoEntriesOnly` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RegisterMagicCircuitSpAffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RegisterMagicCircuitSpAffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RegistProgressBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const RegistProgressBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RegistProgressBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RegistProgressBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RegistProgressBuffAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR03Schema = z
  .discriminatedUnion("$type", [RecordCurrentHpRatioActionSchema, RecordDamageModifierActionSchema, RefreshAttachListenerToTileAbilityActionSchema, RefreshextraTileGraphicActionSchema, RefreshMagicCircuitRouteActionSchema, RefreshTokenDeployAndStackCntActionSchema, RegisterAsStandActionSchema, RegisterMagicCircuitRouteActionSchema, RegisterMagicCircuitSpAffectActionSchema, RegistProgressBuffActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR03>;
