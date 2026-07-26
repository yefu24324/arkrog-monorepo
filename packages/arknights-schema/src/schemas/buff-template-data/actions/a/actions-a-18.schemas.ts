/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignBuffExistingTimeIntoBlackboardAction, AssignBuffLifeTimeToBBAction, AssignBuffRemainingTimeIntoBlackboardAction, AssignBuffStackCntToBlackboardAction, AssignBuffValueAccumulateByKeyFromAllBuffsAction, AssignCardRemainingCntToBlackboardAction, AssignCardUIDToBlackBoardAction, AssignCertainSideContainsBuffUnitsCntToBlackboardAction, AssignCharacterCostIntoBlackboardAction, AssignCharacterMaxEsIntoBlackBoardAction, BattleActionA18 } from "../../../../types/buff-template-data/actions/a/actions-a-18.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffExistingTimeIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffExistingTimeIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffExistingTimeIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBuffExistingTimeIntoBlackboardAction 的 `extraDurationKey` 配置字段；准确战斗语义待确认。 */
    "_extraDurationKey": z.string().describe("AssignBuffExistingTimeIntoBlackboardAction 的 `extraDurationKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffExistingTimeIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffExistingTimeIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffLifeTimeToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffLifeTimeToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffLifeTimeToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignBuffLifeTimeToBBAction 的 `buffType` 配置字段；准确战斗语义待确认。 */
    "_buffType": z.literal("MAIN_BUFF").describe("AssignBuffLifeTimeToBBAction 的 `buffType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffLifeTimeToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffLifeTimeToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffRemainingTimeIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffRemainingTimeIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffRemainingTimeIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignBuffRemainingTimeIntoBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignBuffRemainingTimeIntoBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffRemainingTimeIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffRemainingTimeIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffStackCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffStackCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffStackCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBuffStackCntToBlackboardAction 的 `assignToSnapshot` 配置字段；准确战斗语义待确认。 */
    "_assignToSnapshot": z.boolean().describe("AssignBuffStackCntToBlackboardAction 的 `assignToSnapshot` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignBuffStackCntToBlackboardAction 的 `buffCntSource` 配置字段；准确战斗语义待确认。 */
    "_buffCntSource": z.literal("BUFF_SOURCE").describe("AssignBuffStackCntToBlackboardAction 的 `buffCntSource` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffStackCntToBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignBuffStackCntToBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Buff 的接收实体类型。 */
    "_buffOwner": z.literal("BUFF_OWNER").describe("Buff 的接收实体类型。"),
    /** AssignBuffStackCntToBlackboardAction 的 `buffToAssignKey` 配置字段；准确战斗语义待确认。 */
    "_buffToAssignKey": z.string().describe("AssignBuffStackCntToBlackboardAction 的 `buffToAssignKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffStackCntToBlackboardAction 的 `checkBuffCntSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffCntSource": z.boolean().describe("AssignBuffStackCntToBlackboardAction 的 `checkBuffCntSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffStackCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffStackCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffValueAccumulateByKeyFromAllBuffs, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignBuffValueAccumulateByKeyFromAllBuffsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignBuffValueAccumulateByKeyFromAllBuffs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `buffBbKey` 配置字段；准确战斗语义待确认。 */
    "_buffBbKey": z.string().describe("AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `buffBbKey` 配置字段；准确战斗语义待确认。"),
    /** AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_SOURCE").describe("Action 作用的目标实体类型。"),
    /** AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `writeKey` 配置字段；准确战斗语义待确认。 */
    "_writeKey": z.string().describe("AssignBuffValueAccumulateByKeyFromAllBuffsAction 的 `writeKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignBuffValueAccumulateByKeyFromAllBuffs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignBuffValueAccumulateByKeyFromAllBuffsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCardRemainingCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCardRemainingCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCardRemainingCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignCardRemainingCntToBlackboardAction 的 `cardKey` 配置字段；准确战斗语义待确认。 */
    "_cardKey": z.string().describe("AssignCardRemainingCntToBlackboardAction 的 `cardKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCardRemainingCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCardRemainingCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCardUIDToBlackBoard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCardUIDToBlackBoardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCardUIDToBlackBoard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignCardUIDToBlackBoardAction 的 `assignAsKey` 配置字段；准确战斗语义待确认。 */
    "_assignAsKey": z.boolean().describe("AssignCardUIDToBlackBoardAction 的 `assignAsKey` 配置字段；准确战斗语义待确认。"),
    /** AssignCardUIDToBlackBoardAction 的 `assignAsString` 配置字段；准确战斗语义待确认。 */
    "_assignAsString": z.boolean().describe("AssignCardUIDToBlackBoardAction 的 `assignAsString` 配置字段；准确战斗语义待确认。"),
    /** AssignCardUIDToBlackBoardAction 的 `assignHostOrToken` 配置字段；准确战斗语义待确认。 */
    "_assignHostOrToken": z.boolean().describe("AssignCardUIDToBlackBoardAction 的 `assignHostOrToken` 配置字段；准确战斗语义待确认。"),
    /** AssignCardUIDToBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("AssignCardUIDToBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAINBUFF_SOURCE","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCardUIDToBlackBoard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCardUIDToBlackBoardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCertainSideContainsBuffUnitsCntToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCertainSideContainsBuffUnitsCntToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCertainSideContainsBuffUnitsCntToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `filterProfessionMask` 配置字段；准确战斗语义待确认。 */
    "_filterProfessionMask": z.boolean().describe("AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `filterProfessionMask` 配置字段；准确战斗语义待确认。"),
    /** AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `sideMask` 配置字段；准确战斗语义待确认。 */
    "_sideMask": z.literal("ALLY").describe("AssignCertainSideContainsBuffUnitsCntToBlackboardAction 的 `sideMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCertainSideContainsBuffUnitsCntToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCertainSideContainsBuffUnitsCntToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterCostIntoBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCharacterCostIntoBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCharacterCostIntoBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterCostIntoBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCharacterCostIntoBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterMaxEsIntoBlackBoard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignCharacterMaxEsIntoBlackBoardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignCharacterMaxEsIntoBlackBoard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignCharacterMaxEsIntoBlackBoard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignCharacterMaxEsIntoBlackBoardAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA18Schema = z
  .discriminatedUnion("$type", [AssignBuffExistingTimeIntoBlackboardActionSchema, AssignBuffLifeTimeToBBActionSchema, AssignBuffRemainingTimeIntoBlackboardActionSchema, AssignBuffStackCntToBlackboardActionSchema, AssignBuffValueAccumulateByKeyFromAllBuffsActionSchema, AssignCardRemainingCntToBlackboardActionSchema, AssignCardUIDToBlackBoardActionSchema, AssignCertainSideContainsBuffUnitsCntToBlackboardActionSchema, AssignCharacterCostIntoBlackboardActionSchema, AssignCharacterMaxEsIntoBlackBoardActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA18>;
