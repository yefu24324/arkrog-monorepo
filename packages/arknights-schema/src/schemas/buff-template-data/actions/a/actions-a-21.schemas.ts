/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignEntityEsIntoBlackboardAction, AssignEPBreakRecoveryToBBAction, AssignFinishedBossWaveIntoBlackBoardAction, AssignGiantBossColRangeToBBAction, AssignGlobalBlackboardToBlackboardAction, AssignGlobalBuffBlackboardToBBAction, AssignGoldToBlackboardAction, AssignGridPositionToBlackboardAction, AssignHighestBlackboardValueFromBuffsAction, AssignHostAttributeToBBAction, BattleActionA21 } from "../../../../types/buff-template-data/actions/a/actions-a-21.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEntityEsIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEntityEsIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEntityEsIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEntityEsIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEntityEsIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignEPBreakRecoveryToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignEPBreakRecoveryToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignEPBreakRecoveryToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignEPBreakRecoveryToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("AssignEPBreakRecoveryToBBAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignEPBreakRecoveryToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignEPBreakRecoveryToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignFinishedBossWaveIntoBlackBoard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignFinishedBossWaveIntoBlackBoardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignFinishedBossWaveIntoBlackBoard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignFinishedBossWaveIntoBlackBoard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignFinishedBossWaveIntoBlackBoardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignGiantBossColRangeToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignGiantBossColRangeToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignGiantBossColRangeToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignGiantBossColRangeToBBAction 的 `maxColKey` 配置字段；准确战斗语义待确认。 */
    "_maxColKey": z.string().describe("AssignGiantBossColRangeToBBAction 的 `maxColKey` 配置字段；准确战斗语义待确认。"),
    /** AssignGiantBossColRangeToBBAction 的 `minColKey` 配置字段；准确战斗语义待确认。 */
    "_minColKey": z.string().describe("AssignGiantBossColRangeToBBAction 的 `minColKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignGiantBossColRangeToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignGiantBossColRangeToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignGlobalBlackboardToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignGlobalBlackboardToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignGlobalBlackboardToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignGlobalBlackboardToBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
    "_assignString": z.boolean().describe("AssignGlobalBlackboardToBlackboardAction 的 `assignString` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignGlobalBlackboardToBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。 */
    "_channel": z.enum(["CHARACTER","ENEMY","LEVEL","ROGUELIKE"]).describe("AssignGlobalBlackboardToBlackboardAction 的 `channel` 配置字段；准确战斗语义待确认。"),
    /** AssignGlobalBlackboardToBlackboardAction 的 `globalblackboardKey` 配置字段；准确战斗语义待确认。 */
    "_globalblackboardKey": z.string().describe("AssignGlobalBlackboardToBlackboardAction 的 `globalblackboardKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignGlobalBlackboardToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignGlobalBlackboardToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignGlobalBuffBlackboardToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignGlobalBuffBlackboardToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignGlobalBuffBlackboardToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignGlobalBuffBlackboardToBBAction 的 `globalBuffBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffBlackboardKey": z.string().describe("AssignGlobalBuffBlackboardToBBAction 的 `globalBuffBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignGlobalBuffBlackboardToBBAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffKey": z.string().describe("AssignGlobalBuffBlackboardToBBAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignGlobalBuffBlackboardToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignGlobalBuffBlackboardToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignGoldToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignGoldToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignGoldToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignGoldToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignGoldToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignGridPositionToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignGridPositionToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignGridPositionToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignGridPositionToBlackboardAction 的 `gridColKey` 配置字段；准确战斗语义待确认。 */
    "_gridColKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("AssignGridPositionToBlackboardAction 的 `gridColKey` 配置字段；准确战斗语义待确认。"),
    /** AssignGridPositionToBlackboardAction 的 `gridRowKey` 配置字段；准确战斗语义待确认。 */
    "_gridRowKey": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("AssignGridPositionToBlackboardAction 的 `gridRowKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** AssignGridPositionToBlackboardAction 的 `useConstLocationKey` 配置字段；准确战斗语义待确认。 */
    "_useConstLocationKey": z.boolean().describe("AssignGridPositionToBlackboardAction 的 `useConstLocationKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignGridPositionToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignGridPositionToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignHighestBlackboardValueFromBuffs, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignHighestBlackboardValueFromBuffsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignHighestBlackboardValueFromBuffs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.array(z.string()).describe("读取或写入战斗黑板的参数键。"),
    /** AssignHighestBlackboardValueFromBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignHighestBlackboardValueFromBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AssignHighestBlackboardValueFromBuffsAction 的 `getMax` 配置字段；准确战斗语义待确认。 */
    "_getMax": z.boolean().describe("AssignHighestBlackboardValueFromBuffsAction 的 `getMax` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignHighestBlackboardValueFromBuffs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignHighestBlackboardValueFromBuffsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignHostAttributeToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignHostAttributeToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignHostAttributeToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","DEF","MAGIC_RESISTANCE","MAX_HP"]).describe("属性修改器指向的战斗属性。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignHostAttributeToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。 */
    "_scaleVar": z.string().describe("AssignHostAttributeToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。"),
    /** AssignHostAttributeToBBAction 的 `setCurrentHp` 配置字段；准确战斗语义待确认。 */
    "_setCurrentHp": z.boolean().describe("AssignHostAttributeToBBAction 的 `setCurrentHp` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignHostAttributeToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignHostAttributeToBBAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA21Schema = z
  .discriminatedUnion("$type", [AssignEntityEsIntoBlackboardActionSchema, AssignEPBreakRecoveryToBBActionSchema, AssignFinishedBossWaveIntoBlackBoardActionSchema, AssignGiantBossColRangeToBBActionSchema, AssignGlobalBlackboardToBlackboardActionSchema, AssignGlobalBuffBlackboardToBBActionSchema, AssignGoldToBlackboardActionSchema, AssignGridPositionToBlackboardActionSchema, AssignHighestBlackboardValueFromBuffsActionSchema, AssignHostAttributeToBBActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA21>;
