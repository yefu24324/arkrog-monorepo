/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ClearOverlappedCharacterIfExistAction, ClearTrapAction, CollectTargetInfoFunLiveModeOnlyAction, CompareCharSkillAvailableCntAction, CompareModifierValueWithTargetTypeAction, CompareRogueDiceNumberAction, ConsumeTimelineAction, ConsumeTrySetHpZeroModifierAction, ConvertResourceToItemAction, CoopAddEnemyKeyToSideSharedEnemyAction, BattleActionC20 } from "../../../../types/buff-template-data/actions/c/actions-c-20.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearOverlappedCharacterIfExist, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearOverlappedCharacterIfExistActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearOverlappedCharacterIfExist, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearOverlappedCharacterIfExist, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearOverlappedCharacterIfExistAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ClearTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const ClearTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ClearTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ClearTrapAction 的 `charKey` 配置字段；准确战斗语义待确认。 */
    "_charKey": z.string().describe("ClearTrapAction 的 `charKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ClearTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ClearTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CollectTargetInfoFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const CollectTargetInfoFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CollectTargetInfoFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CollectTargetInfoFunLiveModeOnlyAction 的 `collectRareTargetInfo` 配置字段；准确战斗语义待确认。 */
    "_collectRareTargetInfo": z.boolean().describe("CollectTargetInfoFunLiveModeOnlyAction 的 `collectRareTargetInfo` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CollectTargetInfoFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CollectTargetInfoFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CompareCharSkillAvailableCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const CompareCharSkillAvailableCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CompareCharSkillAvailableCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CompareCharSkillAvailableCntAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","LE","LT"]).describe("CompareCharSkillAvailableCntAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CompareCharSkillAvailableCntAction 的 `count` 配置字段；准确战斗语义待确认。 */
    "_count": z.number().describe("CompareCharSkillAvailableCntAction 的 `count` 配置字段；准确战斗语义待确认。"),
    /** CompareCharSkillAvailableCntAction 的 `dontShowWarnning` 配置字段；准确战斗语义待确认。 */
    "_dontShowWarnning": z.boolean().describe("CompareCharSkillAvailableCntAction 的 `dontShowWarnning` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CompareCharSkillAvailableCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CompareCharSkillAvailableCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CompareModifierValueWithTargetType, Assembly-CSharp 的严格 Action 数据。
 */
export const CompareModifierValueWithTargetTypeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CompareModifierValueWithTargetType, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CompareModifierValueWithTargetTypeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["GE","LE","LT"]).describe("CompareModifierValueWithTargetTypeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CompareModifierValueWithTargetTypeAction 的 `ignoreEs` 配置字段；准确战斗语义待确认。 */
    "_ignoreEs": z.boolean().describe("CompareModifierValueWithTargetTypeAction 的 `ignoreEs` 配置字段；准确战斗语义待确认。"),
    /** CompareModifierValueWithTargetTypeAction 的 `modifierTarget` 配置字段；准确战斗语义待确认。 */
    "_modifierTarget": z.literal("BUFF_OWNER").describe("CompareModifierValueWithTargetTypeAction 的 `modifierTarget` 配置字段；准确战斗语义待确认。"),
    /** CompareModifierValueWithTargetTypeAction 的 `ratio` 配置字段；准确战斗语义待确认。 */
    "_ratio": z.number().describe("CompareModifierValueWithTargetTypeAction 的 `ratio` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("HP").describe("Action 作用的目标实体类型。"),
    /** CompareModifierValueWithTargetTypeAction 的 `useMaxRatio` 配置字段；准确战斗语义待确认。 */
    "_useMaxRatio": z.boolean().describe("CompareModifierValueWithTargetTypeAction 的 `useMaxRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CompareModifierValueWithTargetType, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CompareModifierValueWithTargetTypeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CompareRogueDiceNumber, Assembly-CSharp 的严格 Action 数据。
 */
export const CompareRogueDiceNumberActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CompareRogueDiceNumber, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** CompareRogueDiceNumberAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("LE").describe("CompareRogueDiceNumberAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CompareRogueDiceNumberAction 的 `threshold` 配置字段；准确战斗语义待确认。 */
    "_threshold": z.number().describe("CompareRogueDiceNumberAction 的 `threshold` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CompareRogueDiceNumber, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CompareRogueDiceNumberAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ConsumeTimeline, Assembly-CSharp 的严格 Action 数据。
 */
export const ConsumeTimelineActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ConsumeTimeline, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ConsumeTimelineAction 的 `timelineKey` 配置字段；准确战斗语义待确认。 */
    "_timelineKey": z.string().describe("ConsumeTimelineAction 的 `timelineKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ConsumeTimeline, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ConsumeTimelineAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ConsumeTrySetHpZeroModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const ConsumeTrySetHpZeroModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ConsumeTrySetHpZeroModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ConsumeTrySetHpZeroModifierAction 的 `blockThisHpSet` 配置字段；准确战斗语义待确认。 */
    "_blockThisHpSet": z.boolean().describe("ConsumeTrySetHpZeroModifierAction 的 `blockThisHpSet` 配置字段；准确战斗语义待确认。"),
    /** ConsumeTrySetHpZeroModifierAction 的 `dontConsumeWhenUndeadable` 配置字段；准确战斗语义待确认。 */
    "_dontConsumeWhenUndeadable": z.boolean().describe("ConsumeTrySetHpZeroModifierAction 的 `dontConsumeWhenUndeadable` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ConsumeTrySetHpZeroModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ConsumeTrySetHpZeroModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ConvertResourceToItem, Assembly-CSharp 的严格 Action 数据。
 */
export const ConvertResourceToItemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ConvertResourceToItem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ConvertResourceToItemAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ConvertResourceToItemAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ConvertResourceToItem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ConvertResourceToItemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CoopAddEnemyKeyToSideSharedEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const CoopAddEnemyKeyToSideSharedEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CoopAddEnemyKeyToSideSharedEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CoopAddEnemyKeyToSideSharedEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("CoopAddEnemyKeyToSideSharedEnemyAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CoopAddEnemyKeyToSideSharedEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CoopAddEnemyKeyToSideSharedEnemyAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC20Schema = z
  .discriminatedUnion("$type", [ClearOverlappedCharacterIfExistActionSchema, ClearTrapActionSchema, CollectTargetInfoFunLiveModeOnlyActionSchema, CompareCharSkillAvailableCntActionSchema, CompareModifierValueWithTargetTypeActionSchema, CompareRogueDiceNumberActionSchema, ConsumeTimelineActionSchema, ConsumeTrySetHpZeroModifierActionSchema, ConvertResourceToItemActionSchema, CoopAddEnemyKeyToSideSharedEnemyActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC20>;
