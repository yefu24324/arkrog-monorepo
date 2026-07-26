/**
 * buff_template_data 的 L 组 Action Zod Schema。
 */

import { z } from "zod";

import type { LegionModeOnlyResetDangerUpgradeTimeScaleAction, LegionModeOnlySelectCardAction, LegionModeOnlyShowStatusMessageAction, LegionModeOnlyTakeCardBackToHandAction, LegionModeOnlyTemporaryAddEachProfessionStatusAction, Leizi2Talent1CastToAttackRangeTilesAction, LockCharacterSkillProgressAction, LogEventFunLiveModeOnlyAction, LogExtraBattleInfoAction, LogExtraBattleInfoForBossRushAction, BattleActionL05 } from "../../../../types/buff-template-data/actions/l/actions-l-05.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyResetDangerUpgradeTimeScale, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyResetDangerUpgradeTimeScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyResetDangerUpgradeTimeScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyResetDangerUpgradeTimeScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyResetDangerUpgradeTimeScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlySelectCard, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlySelectCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlySelectCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlySelectCardAction 的 `canSelectNumKey` 配置字段；准确战斗语义待确认。 */
    "_canSelectNumKey": z.string().describe("LegionModeOnlySelectCardAction 的 `canSelectNumKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
    "_cardType": z.enum(["NULL","PENDING"]).describe("LegionModeOnlySelectCardAction 的 `cardType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `discardUnselected` 配置字段；准确战斗语义待确认。 */
    "_discardUnselected": z.boolean().describe("LegionModeOnlySelectCardAction 的 `discardUnselected` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `goldNumWhenSellCard` 配置字段；准确战斗语义待确认。 */
    "_goldNumWhenSellCard": z.string().describe("LegionModeOnlySelectCardAction 的 `goldNumWhenSellCard` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `profession` 配置字段；准确战斗语义待确认。 */
    "_profession": z.union([
                         z.null(),
                         z.array(z.never()),
                       ]).describe("LegionModeOnlySelectCardAction 的 `profession` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `putInPendingIfHandFull` 配置字段；准确战斗语义待确认。 */
    "_putInPendingIfHandFull": z.boolean().describe("LegionModeOnlySelectCardAction 的 `putInPendingIfHandFull` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `rangeNumKey` 配置字段；准确战斗语义待确认。 */
    "_rangeNumKey": z.string().describe("LegionModeOnlySelectCardAction 的 `rangeNumKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `selectCardType` 配置字段；准确战斗语义待确认。 */
    "_selectCardType": z.enum(["DISCARD","NULL","SELL"]).describe("LegionModeOnlySelectCardAction 的 `selectCardType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlySelectCardAction 的 `specificCardKeys` 配置字段；准确战斗语义待确认。 */
    "_specificCardKeys": z.array(z.never()).describe("LegionModeOnlySelectCardAction 的 `specificCardKeys` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlySelectCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlySelectCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyShowStatusMessage, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyShowStatusMessageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyShowStatusMessage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyShowStatusMessage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyShowStatusMessageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyTakeCardBackToHand, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyTakeCardBackToHandActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyTakeCardBackToHand, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyTakeCardBackToHand, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyTakeCardBackToHandAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyTemporaryAddEachProfessionStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyTemporaryAddEachProfessionStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyTemporaryAddEachProfessionStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyTemporaryAddEachProfessionStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyTemporaryAddEachProfessionStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Leizi2Talent1CastToAttackRangeTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const Leizi2Talent1CastToAttackRangeTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Leizi2Talent1CastToAttackRangeTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Leizi2Talent1CastToAttackRangeTilesAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("Leizi2Talent1CastToAttackRangeTilesAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Leizi2Talent1CastToAttackRangeTilesAction 的 `castTimes` 配置字段；准确战斗语义待确认。 */
    "_castTimes": z.number().describe("Leizi2Talent1CastToAttackRangeTilesAction 的 `castTimes` 配置字段；准确战斗语义待确认。"),
    /** Leizi2Talent1CastToAttackRangeTilesAction 的 `castTimesKey` 配置字段；准确战斗语义待确认。 */
    "_castTimesKey": z.string().describe("Leizi2Talent1CastToAttackRangeTilesAction 的 `castTimesKey` 配置字段；准确战斗语义待确认。"),
    /** Leizi2Talent1CastToAttackRangeTilesAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("Leizi2Talent1CastToAttackRangeTilesAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** Leizi2Talent1CastToAttackRangeTilesAction 的 `specialRangeCastDelay` 配置字段；准确战斗语义待确认。 */
    "_specialRangeCastDelay": z.number().describe("Leizi2Talent1CastToAttackRangeTilesAction 的 `specialRangeCastDelay` 配置字段；准确战斗语义待确认。"),
    /** Leizi2Talent1CastToAttackRangeTilesAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
    "_useFirstActiveAbility": z.boolean().describe("Leizi2Talent1CastToAttackRangeTilesAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Leizi2Talent1CastToAttackRangeTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Leizi2Talent1CastToAttackRangeTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LockCharacterSkillProgress, Assembly-CSharp 的严格 Action 数据。
 */
export const LockCharacterSkillProgressActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LockCharacterSkillProgress, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LockCharacterSkillProgress, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LockCharacterSkillProgressAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogEventFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const LogEventFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogEventFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogEventFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogEventFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfo, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfo, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoAction 的 `additionValue` 配置字段；准确战斗语义待确认。 */
    "_additionValue": z.number().describe("LogExtraBattleInfoAction 的 `additionValue` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoAction 的 `additionValueKey` 配置字段；准确战斗语义待确认。 */
    "_additionValueKey": z.string().describe("LogExtraBattleInfoAction 的 `additionValueKey` 配置字段；准确战斗语义待确认。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["HP_RATIO","NONE","SP"]).describe("属性修改器指向的战斗属性。"),
    /** LogExtraBattleInfoAction 的 `countInHostIfToken` 配置字段；准确战斗语义待确认。 */
    "_countInHostIfToken": z.boolean().describe("LogExtraBattleInfoAction 的 `countInHostIfToken` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.union([
                  z.null(),
                  z.string(),
                ]).describe("LogExtraBattleInfoAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoAction 的 `loadKeyFromBlackBoard` 配置字段；准确战斗语义待确认。 */
    "_loadKeyFromBlackBoard": z.boolean().describe("LogExtraBattleInfoAction 的 `loadKeyFromBlackBoard` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoAction 的 `logType` 配置字段；准确战斗语义待确认。 */
    "_logType": z.enum(["ATTRIBUTE","CHARACTER_SKILL","DETAILED","HIDDEN_WAVE_END","HIDDEN_WAVE_START","NONE","SIMPLE"]).describe("LogExtraBattleInfoAction 的 `logType` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("LogExtraBattleInfoAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfo, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBossRush, Assembly-CSharp 的严格 Action 数据。
 */
export const LogExtraBattleInfoForBossRushActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBossRush, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LogExtraBattleInfoForBossRushAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
    "_infoType": z.enum(["CURRENT_BOSS_WAVE","CURRENT_WAVE_CHAR_USE","MAX_BOSS_WAVE"]).describe("LogExtraBattleInfoForBossRushAction 的 `infoType` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForBossRushAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.union([
                  z.null(),
                  z.string(),
                ]).describe("LogExtraBattleInfoForBossRushAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** LogExtraBattleInfoForBossRushAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("LogExtraBattleInfoForBossRushAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LogExtraBattleInfoForBossRush, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LogExtraBattleInfoForBossRushAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionL05Schema = z
  .discriminatedUnion("$type", [LegionModeOnlyResetDangerUpgradeTimeScaleActionSchema, LegionModeOnlySelectCardActionSchema, LegionModeOnlyShowStatusMessageActionSchema, LegionModeOnlyTakeCardBackToHandActionSchema, LegionModeOnlyTemporaryAddEachProfessionStatusActionSchema, Leizi2Talent1CastToAttackRangeTilesActionSchema, LockCharacterSkillProgressActionSchema, LogEventFunLiveModeOnlyActionSchema, LogExtraBattleInfoActionSchema, LogExtraBattleInfoForBossRushActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionL05>;
