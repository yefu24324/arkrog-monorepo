/**
 * buff_template_data 的 K 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Kalts2CheckShouldTriggerDitherAction, Kalts2S3ApplyExtraBuildableCheckerAction, Kalts2S3ApplyPunishBuffAction, Kalts2S3CancelExtraBuildableCheckerAction, Kalts2S3RecordSkillAffectedCardInfoAction, Kalts2S3ResetCardRecordAction, KillCharacterOnTileIfExistsAction, KillTokensAction, KnockbackAction, KnockBackWithCharacterDirectionAction, BattleActionK01 } from "../../../../types/buff-template-data/actions/k/actions-k-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Kalts2CheckShouldTriggerDither, Assembly-CSharp 的严格 Action 数据。
 */
export const Kalts2CheckShouldTriggerDitherActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Kalts2CheckShouldTriggerDither, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Kalts2CheckShouldTriggerDitherAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Kalts2CheckShouldTriggerDitherAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Kalts2CheckShouldTriggerDither, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Kalts2CheckShouldTriggerDitherAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3ApplyExtraBuildableChecker, Assembly-CSharp 的严格 Action 数据。
 */
export const Kalts2S3ApplyExtraBuildableCheckerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Kalts2S3ApplyExtraBuildableChecker, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3ApplyExtraBuildableChecker, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Kalts2S3ApplyExtraBuildableCheckerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3ApplyPunishBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const Kalts2S3ApplyPunishBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Kalts2S3ApplyPunishBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3ApplyPunishBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Kalts2S3ApplyPunishBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3CancelExtraBuildableChecker, Assembly-CSharp 的严格 Action 数据。
 */
export const Kalts2S3CancelExtraBuildableCheckerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Kalts2S3CancelExtraBuildableChecker, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3CancelExtraBuildableChecker, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Kalts2S3CancelExtraBuildableCheckerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3RecordSkillAffectedCardInfo, Assembly-CSharp 的严格 Action 数据。
 */
export const Kalts2S3RecordSkillAffectedCardInfoActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Kalts2S3RecordSkillAffectedCardInfo, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3RecordSkillAffectedCardInfo, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Kalts2S3RecordSkillAffectedCardInfoAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3ResetCardRecord, Assembly-CSharp 的严格 Action 数据。
 */
export const Kalts2S3ResetCardRecordActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Kalts2S3ResetCardRecord, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Kalts2S3ResetCardRecord, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Kalts2S3ResetCardRecordAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+KillCharacterOnTileIfExists, Assembly-CSharp 的严格 Action 数据。
 */
export const KillCharacterOnTileIfExistsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+KillCharacterOnTileIfExists, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** KillCharacterOnTileIfExistsAction 的 `noSource` 配置字段；准确战斗语义待确认。 */
    "_noSource": z.boolean().describe("KillCharacterOnTileIfExistsAction 的 `noSource` 配置字段；准确战斗语义待确认。"),
    /** KillCharacterOnTileIfExistsAction 的 `skipClearCharacterIfExists` 配置字段；准确战斗语义待确认。 */
    "_skipClearCharacterIfExists": z.boolean().describe("KillCharacterOnTileIfExistsAction 的 `skipClearCharacterIfExists` 配置字段；准确战斗语义待确认。"),
    /** KillCharacterOnTileIfExistsAction 的 `skipReborn` 配置字段；准确战斗语义待确认。 */
    "_skipReborn": z.boolean().describe("KillCharacterOnTileIfExistsAction 的 `skipReborn` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** KillCharacterOnTileIfExistsAction 的 `useProjectileTraceMapPos` 配置字段；准确战斗语义待确认。 */
    "_useProjectileTraceMapPos": z.boolean().describe("KillCharacterOnTileIfExistsAction 的 `useProjectileTraceMapPos` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+KillCharacterOnTileIfExists, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<KillCharacterOnTileIfExistsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+KillTokens, Assembly-CSharp 的严格 Action 数据。
 */
export const KillTokensActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+KillTokens, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** KillTokensAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("KillTokensAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** KillTokensAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。 */
    "_checkContainsBuff": z.boolean().describe("KillTokensAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。"),
    /** KillTokensAction 的 `checkModes` 配置字段；准确战斗语义待确认。 */
    "_checkModes": z.boolean().describe("KillTokensAction 的 `checkModes` 配置字段；准确战斗语义待确认。"),
    /** KillTokensAction 的 `modes` 配置字段；准确战斗语义待确认。 */
    "_modes": z.array(z.number()).describe("KillTokensAction 的 `modes` 配置字段；准确战斗语义待确认。"),
    /** KillTokensAction 的 `snapshotSourceAsTarget` 配置字段；准确战斗语义待确认。 */
    "_snapshotSourceAsTarget": z.boolean().describe("KillTokensAction 的 `snapshotSourceAsTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+KillTokens, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<KillTokensAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Knockback, Assembly-CSharp 的严格 Action 数据。
 */
export const KnockbackActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Knockback, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** KnockbackAction 的 `decreaseForceLevelWhenNotInDirection` 配置字段；准确战斗语义待确认。 */
    "_decreaseForceLevelWhenNotInDirection": z.number().describe("KnockbackAction 的 `decreaseForceLevelWhenNotInDirection` 配置字段；准确战斗语义待确认。"),
    /** KnockbackAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("SOURCE").describe("KnockbackAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** KnockbackAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("KnockbackAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** KnockbackAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。 */
    "_useSourceDirection": z.boolean().describe("KnockbackAction 的 `useSourceDirection` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Knockback, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<KnockbackAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+KnockBackWithCharacterDirection, Assembly-CSharp 的严格 Action 数据。
 */
export const KnockBackWithCharacterDirectionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+KnockBackWithCharacterDirection, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** KnockBackWithCharacterDirectionAction 的 `dontChangeFaceByDirection` 配置字段；准确战斗语义待确认。 */
    "_dontChangeFaceByDirection": z.boolean().describe("KnockBackWithCharacterDirectionAction 的 `dontChangeFaceByDirection` 配置字段；准确战斗语义待确认。"),
    /** KnockBackWithCharacterDirectionAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_SOURCE","SOURCE"]).describe("KnockBackWithCharacterDirectionAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** KnockBackWithCharacterDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("KnockBackWithCharacterDirectionAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+KnockBackWithCharacterDirection, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<KnockBackWithCharacterDirectionAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionK01Schema = z
  .discriminatedUnion("$type", [Kalts2CheckShouldTriggerDitherActionSchema, Kalts2S3ApplyExtraBuildableCheckerActionSchema, Kalts2S3ApplyPunishBuffActionSchema, Kalts2S3CancelExtraBuildableCheckerActionSchema, Kalts2S3RecordSkillAffectedCardInfoActionSchema, Kalts2S3ResetCardRecordActionSchema, KillCharacterOnTileIfExistsActionSchema, KillTokensActionSchema, KnockbackActionSchema, KnockBackWithCharacterDirectionActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionK01>;
