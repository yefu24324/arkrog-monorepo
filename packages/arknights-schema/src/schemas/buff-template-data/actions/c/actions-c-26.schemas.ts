/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CreateCardBuffFilterByCardStateAction, CreateCardBuffFilterByDeckBuffAction, CreateCardBuffFilterByRarityAndProfessionAction, CreateCardBuffFilterByTagAction, CreateCardBuffMarkInAbilityBlackboardAction, CreateCardBuffToAllCardAction, CreateCardBuffToAllCardWithEffectAction, CreateCardBuffToBlackboardExcludeAction, CreateCardBuffToMaxCostAction, CreateCardBuffToMyHostAction, BattleActionC26 } from "../../../../types/buff-template-data/actions/c/actions-c-26.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByCardState, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffFilterByCardStateActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffFilterByCardState, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffFilterByCardStateAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffFilterByCardStateAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `cardState` 配置字段；准确战斗语义待确认。 */
    "_cardState": z.string().describe("CreateCardBuffFilterByCardStateAction 的 `cardState` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffFilterByCardStateAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffFilterByCardStateAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `ignoreNullOwner` 配置字段；准确战斗语义待确认。 */
    "_ignoreNullOwner": z.boolean().describe("CreateCardBuffFilterByCardStateAction 的 `ignoreNullOwner` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffFilterByCardStateAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("UNTIL_NEXT_SPAWN").describe("CreateCardBuffFilterByCardStateAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `randomCard` 配置字段；准确战斗语义待确认。 */
    "_randomCard": z.boolean().describe("CreateCardBuffFilterByCardStateAction 的 `randomCard` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByCardStateAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffFilterByCardStateAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByCardState, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffFilterByCardStateAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByDeckBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffFilterByDeckBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffFilterByDeckBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("CreateCardBuffFilterByDeckBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffFilterByDeckBuffAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffFilterByDeckBuffAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffFilterByDeckBuffAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffFilterByDeckBuffAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("HOLD_BY_BUFF").describe("CreateCardBuffFilterByDeckBuffAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByDeckBuffAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffFilterByDeckBuffAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByDeckBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffFilterByDeckBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByRarityAndProfession, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffFilterByRarityAndProfessionActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffFilterByRarityAndProfession, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","UNTIL_NEXT_SPAWN"]).describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。 */
    "_profession": z.array(z.enum(["CASTER","MEDIC","PIONEER","SNIPER","SPECIAL","SUPPORT","TANK","TOKEN, TRAP","TRAP","WARRIOR"])).describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `profession` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `rarity` 配置字段；准确战斗语义待确认。 */
    "_rarity": z.string().describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `rarity` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByRarityAndProfessionAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffFilterByRarityAndProfessionAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByRarityAndProfession, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffFilterByRarityAndProfessionAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByTag, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffFilterByTagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffFilterByTag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffFilterByTagAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffFilterByTagAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByTagAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffFilterByTagAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByTagAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffFilterByTagAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByTagAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffFilterByTagAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByTagAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["HOLD_BY_BUFF","UNTIL_NEXT_SPAWN"]).describe("CreateCardBuffFilterByTagAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByTagAction 的 `tag` 配置字段；准确战斗语义待确认。 */
    "_tag": z.string().describe("CreateCardBuffFilterByTagAction 的 `tag` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffFilterByTagAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffFilterByTagAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffFilterByTag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffFilterByTagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffMarkInAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffMarkInAbilityBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffMarkInAbilityBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。 */
    "_infoType": z.literal("UNIQUE_ID").describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `infoType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("IMMEDIATELY").describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** CreateCardBuffMarkInAbilityBlackboardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffMarkInAbilityBlackboardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffMarkInAbilityBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffMarkInAbilityBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToAllCard, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffToAllCardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffToAllCard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffToAllCardAction 的 `buffAsSource` 配置字段；准确战斗语义待确认。 */
    "_buffAsSource": z.boolean().describe("CreateCardBuffToAllCardAction 的 `buffAsSource` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CreateCardBuffToAllCardAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffToAllCardAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `exceptOwner` 配置字段；准确战斗语义待确认。 */
    "_exceptOwner": z.boolean().describe("CreateCardBuffToAllCardAction 的 `exceptOwner` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
    "_exceptTokenAndTrap": z.boolean().describe("CreateCardBuffToAllCardAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffToAllCardAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffToAllCardAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","HOLD_BY_BUFF","IMMEDIATELY","UNTIL_NEXT_SPAWN_DECK_TRIGGER_ONCE"]).describe("CreateCardBuffToAllCardAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffToAllCardAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToAllCard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffToAllCardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToAllCardWithEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffToAllCardWithEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffToAllCardWithEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `cardBuffEffectPlugin` 配置字段；准确战斗语义待确认。 */
    "_cardBuffEffectPlugin": z.string().describe("CreateCardBuffToAllCardWithEffectAction 的 `cardBuffEffectPlugin` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CreateCardBuffToAllCardWithEffectAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffToAllCardWithEffectAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffToAllCardWithEffectAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffToAllCardWithEffectAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","LIMITED"]).describe("CreateCardBuffToAllCardWithEffectAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `manuallyChangeCardState` 配置字段；准确战斗语义待确认。 */
    "_manuallyChangeCardState": z.string().describe("CreateCardBuffToAllCardWithEffectAction 的 `manuallyChangeCardState` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。 */
    "_onlyToTarget": z.boolean().describe("CreateCardBuffToAllCardWithEffectAction 的 `onlyToTarget` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** CreateCardBuffToAllCardWithEffectAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffToAllCardWithEffectAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToAllCardWithEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffToAllCardWithEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToBlackboardExclude, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffToBlackboardExcludeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffToBlackboardExclude, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffToBlackboardExcludeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.string().describe("CreateCardBuffToBlackboardExcludeAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToBlackboardExcludeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffToBlackboardExcludeAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToBlackboardExcludeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffToBlackboardExcludeAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToBlackboardExcludeAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffToBlackboardExcludeAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToBlackboardExcludeAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("HOLD_BY_BUFF").describe("CreateCardBuffToBlackboardExcludeAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToBlackboardExcludeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffToBlackboardExcludeAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToBlackboardExclude, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffToBlackboardExcludeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToMaxCost, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffToMaxCostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffToMaxCost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffToMaxCostAction 的 `cardBuffEffectPlugin` 配置字段；准确战斗语义待确认。 */
    "_cardBuffEffectPlugin": z.null().describe("CreateCardBuffToMaxCostAction 的 `cardBuffEffectPlugin` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.null().describe("CreateCardBuffToMaxCostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffToMaxCostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `excludeCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_excludeCardBuffKey": z.null().describe("CreateCardBuffToMaxCostAction 的 `excludeCardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffToMaxCostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffToMaxCostAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.literal("ALL_THE_TIME").describe("CreateCardBuffToMaxCostAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `manuallyChangeCardState` 配置字段；准确战斗语义待确认。 */
    "_manuallyChangeCardState": z.string().describe("CreateCardBuffToMaxCostAction 的 `manuallyChangeCardState` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `playAudio` 配置字段；准确战斗语义待确认。 */
    "_playAudio": z.null().describe("CreateCardBuffToMaxCostAction 的 `playAudio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMaxCostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffToMaxCostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToMaxCost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffToMaxCostAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToMyHost, Assembly-CSharp 的严格 Action 数据。
 */
export const CreateCardBuffToMyHostActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CreateCardBuffToMyHost, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CreateCardBuffToMyHostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_cardBuffKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("CreateCardBuffToMyHostAction 的 `cardBuffKey` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyHostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。 */
    "_enableMaxStackCount": z.boolean().describe("CreateCardBuffToMyHostAction 的 `enableMaxStackCount` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyHostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。 */
    "_filterIsInHand": z.boolean().describe("CreateCardBuffToMyHostAction 的 `filterIsInHand` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyHostAction 的 `isRatio` 配置字段；准确战斗语义待确认。 */
    "_isRatio": z.boolean().describe("CreateCardBuffToMyHostAction 的 `isRatio` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyHostAction 的 `lifeType` 配置字段；准确战斗语义待确认。 */
    "_lifeType": z.enum(["ALL_THE_TIME","UNTIL_NEXT_SPAWN"]).describe("CreateCardBuffToMyHostAction 的 `lifeType` 配置字段；准确战斗语义待确认。"),
    /** CreateCardBuffToMyHostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。 */
    "_useCardBuffKey": z.boolean().describe("CreateCardBuffToMyHostAction 的 `useCardBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CreateCardBuffToMyHost, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CreateCardBuffToMyHostAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC26Schema = z
  .discriminatedUnion("$type", [CreateCardBuffFilterByCardStateActionSchema, CreateCardBuffFilterByDeckBuffActionSchema, CreateCardBuffFilterByRarityAndProfessionActionSchema, CreateCardBuffFilterByTagActionSchema, CreateCardBuffMarkInAbilityBlackboardActionSchema, CreateCardBuffToAllCardActionSchema, CreateCardBuffToAllCardWithEffectActionSchema, CreateCardBuffToBlackboardExcludeActionSchema, CreateCardBuffToMaxCostActionSchema, CreateCardBuffToMyHostActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC26>;
