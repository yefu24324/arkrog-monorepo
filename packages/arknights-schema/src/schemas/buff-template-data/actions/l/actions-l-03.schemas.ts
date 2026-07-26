/**
 * buff_template_data 的 L 组 Action Zod Schema。
 */

import { z } from "zod";

import type { LegionModeOnlyDrawCardViaIDAction, LegionModeOnlyDrawCardViaProfessionAction, LegionModeOnlyDrawCardViaTagAction, LegionModeOnlyDrawNextCardAction, LegionModeOnlyEnemyDeathDropAction, LegionModeOnlyFilterByProfessionBuffMaxCntAction, LegionModeOnlyFinishTemporaryProfessionStatusAction, LegionModeOnlyForceRecycleUsingCardAction, LegionModeOnlyGainGoldAction, LegionModeOnlyGainGoldViaCardNumAction, BattleActionL03 } from "../../../../types/buff-template-data/actions/l/actions-l-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaID, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyDrawCardViaIDActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaID, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyDrawCardViaIDAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
    "_cardType": z.enum(["PENDING","USED"]).describe("LegionModeOnlyDrawCardViaIDAction 的 `cardType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyDrawCardViaIDAction 的 `id` 配置字段；准确战斗语义待确认。 */
    "_id": z.string().describe("LegionModeOnlyDrawCardViaIDAction 的 `id` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaID, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyDrawCardViaIDAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyDrawCardViaProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyDrawCardViaProfessionAction 的 `addCardBuff` 配置字段；准确战斗语义待确认。 */
    "_addCardBuff": z.boolean().describe("LegionModeOnlyDrawCardViaProfessionAction 的 `addCardBuff` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyDrawCardViaProfessionAction 的 `drawCardFromUsedAndPending` 配置字段；准确战斗语义待确认。 */
    "_drawCardFromUsedAndPending": z.boolean().describe("LegionModeOnlyDrawCardViaProfessionAction 的 `drawCardFromUsedAndPending` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyDrawCardViaProfessionAction 的 `professions` 配置字段；准确战斗语义待确认。 */
    "_professions": z.array(z.string()).describe("LegionModeOnlyDrawCardViaProfessionAction 的 `professions` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyDrawCardViaProfessionAction 的 `randomDrawCard` 配置字段；准确战斗语义待确认。 */
    "_randomDrawCard": z.boolean().describe("LegionModeOnlyDrawCardViaProfessionAction 的 `randomDrawCard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyDrawCardViaProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaTag, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyDrawCardViaTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyDrawCardViaTagAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
    "_cardType": z.literal("PENDING").describe("LegionModeOnlyDrawCardViaTagAction 的 `cardType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyDrawCardViaTagAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("LegionModeOnlyDrawCardViaTagAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyDrawCardViaTagAction 的 `tags` 配置字段；准确战斗语义待确认。 */
    "_tags": z.array(z.string()).describe("LegionModeOnlyDrawCardViaTagAction 的 `tags` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawCardViaTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyDrawCardViaTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawNextCard, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyDrawNextCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyDrawNextCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyDrawNextCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyDrawNextCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyEnemyDeathDrop, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyEnemyDeathDropActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyEnemyDeathDrop, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyEnemyDeathDrop, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyEnemyDeathDropAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyFilterByProfessionBuffMaxCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyFilterByProfessionBuffMaxCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyFilterByProfessionBuffMaxCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","LT"]).describe("LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `valueToCompareKey` 配置字段；准确战斗语义待确认。 */
    "_valueToCompareKey": z.null().describe("LegionModeOnlyFilterByProfessionBuffMaxCntAction 的 `valueToCompareKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyFilterByProfessionBuffMaxCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyFilterByProfessionBuffMaxCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyFinishTemporaryProfessionStatus, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyFinishTemporaryProfessionStatusActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyFinishTemporaryProfessionStatus, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyFinishTemporaryProfessionStatus, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyFinishTemporaryProfessionStatusAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyForceRecycleUsingCard, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyForceRecycleUsingCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyForceRecycleUsingCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyForceRecycleUsingCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyForceRecycleUsingCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGainGold, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyGainGoldActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyGainGold, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyGainGoldAction 的 `goldNum` 配置字段；准确战斗语义待确认。 */
    "_goldNum": z.number().describe("LegionModeOnlyGainGoldAction 的 `goldNum` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainGoldAction 的 `goldNumKey` 配置字段；准确战斗语义待确认。 */
    "_goldNumKey": z.string().describe("LegionModeOnlyGainGoldAction 的 `goldNumKey` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainGoldAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("LegionModeOnlyGainGoldAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGainGold, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyGainGoldAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGainGoldViaCardNum, Assembly-CSharp 的严格 Action 数据。
 */
export const LegionModeOnlyGainGoldViaCardNumActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+LegionModeOnlyGainGoldViaCardNum, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** LegionModeOnlyGainGoldViaCardNumAction 的 `cardType` 配置字段；准确战斗语义待确认。 */
    "_cardType": z.literal("NULL").describe("LegionModeOnlyGainGoldViaCardNumAction 的 `cardType` 配置字段；准确战斗语义待确认。"),
    /** LegionModeOnlyGainGoldViaCardNumAction 的 `goldPerCount` 配置字段；准确战斗语义待确认。 */
    "_goldPerCount": z.number().describe("LegionModeOnlyGainGoldViaCardNumAction 的 `goldPerCount` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+LegionModeOnlyGainGoldViaCardNum, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<LegionModeOnlyGainGoldViaCardNumAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionL03Schema = z
  .discriminatedUnion("$type", [LegionModeOnlyDrawCardViaIDActionSchema, LegionModeOnlyDrawCardViaProfessionActionSchema, LegionModeOnlyDrawCardViaTagActionSchema, LegionModeOnlyDrawNextCardActionSchema, LegionModeOnlyEnemyDeathDropActionSchema, LegionModeOnlyFilterByProfessionBuffMaxCntActionSchema, LegionModeOnlyFinishTemporaryProfessionStatusActionSchema, LegionModeOnlyForceRecycleUsingCardActionSchema, LegionModeOnlyGainGoldActionSchema, LegionModeOnlyGainGoldViaCardNumActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionL03>;
