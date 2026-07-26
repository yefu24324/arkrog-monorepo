/**
 * buff_template_data 的 F 组 Action Zod Schema。
 */

import { z } from "zod";

import type { FindSandboxV3BaseAndAssignTileToBlackboardAction, FinishAllBuffsWithCertainAbnormalFlagAction, FinishAllStatusResistableBuffsAction, FinishBuffAction, FinishBuffsByIdAction, FinishBuffsByIdByBuffSourceAction, FinishBuffsByIdFromBlockeeAction, FinishBuffsOfEveryCharacterByIdAction, FinishBuffsOfEveryEnemyByIdAction, FinishCardBuffAction, BattleActionF07 } from "../../../../types/buff-template-data/actions/f/actions-f-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FindSandboxV3BaseAndAssignTileToBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const FindSandboxV3BaseAndAssignTileToBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FindSandboxV3BaseAndAssignTileToBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `gridColKey` 配置字段；准确战斗语义待确认。 */
    "_gridColKey": z.string().describe("FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `gridColKey` 配置字段；准确战斗语义待确认。"),
    /** FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `gridRowKey` 配置字段；准确战斗语义待确认。 */
    "_gridRowKey": z.string().describe("FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `gridRowKey` 配置字段；准确战斗语义待确认。"),
    /** FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `useConstLocationKey` 配置字段；准确战斗语义待确认。 */
    "_useConstLocationKey": z.boolean().describe("FindSandboxV3BaseAndAssignTileToBlackboardAction 的 `useConstLocationKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FindSandboxV3BaseAndAssignTileToBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FindSandboxV3BaseAndAssignTileToBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishAllBuffsWithCertainAbnormalFlag, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishAllBuffsWithCertainAbnormalFlagActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishAllBuffsWithCertainAbnormalFlag, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishAllBuffsWithCertainAbnormalFlagAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
    "_abnormalFlag": z.literal("LEVITATE").describe("FinishAllBuffsWithCertainAbnormalFlagAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishAllBuffsWithCertainAbnormalFlag, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishAllBuffsWithCertainAbnormalFlagAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishAllStatusResistableBuffs, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishAllStatusResistableBuffsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishAllStatusResistableBuffs, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishAllStatusResistableBuffs, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishAllStatusResistableBuffsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishBuffAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishBuffAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishBuffAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishBuffAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishBuffsByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishBuffsById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishBuffsByIdAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。 */
    "_alsoClearNullSource": z.boolean().describe("FinishBuffsByIdAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("FinishBuffsByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("FinishBuffsByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `decCnt` 配置字段；准确战斗语义待确认。 */
    "_decCnt": z.number().describe("FinishBuffsByIdAction 的 `decCnt` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishBuffsByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `decCntKey` 配置字段；准确战斗语义待确认。 */
    "_decCntKey": z.union([
                        z.null(),
                        z.string(),
                      ]).describe("FinishBuffsByIdAction 的 `decCntKey` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `finishHostBuff` 配置字段；准确战斗语义待确认。 */
    "_finishHostBuff": z.boolean().describe("FinishBuffsByIdAction 的 `finishHostBuff` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishBuffsByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MODIFIER_TARGET","SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** FinishBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishBuffsByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishBuffsByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsByIdByBuffSource, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishBuffsByIdByBuffSourceActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishBuffsByIdByBuffSource, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishBuffsByIdByBuffSourceAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。 */
    "_alsoClearNullSource": z.boolean().describe("FinishBuffsByIdByBuffSourceAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdByBuffSourceAction 的 `alsoClearWhenSourceIsNull` 配置字段；准确战斗语义待确认。 */
    "_alsoClearWhenSourceIsNull": z.boolean().describe("FinishBuffsByIdByBuffSourceAction 的 `alsoClearWhenSourceIsNull` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdByBuffSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishBuffsByIdByBuffSourceAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
    /** FinishBuffsByIdByBuffSourceAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。 */
    "_useSourceHost": z.boolean().describe("FinishBuffsByIdByBuffSourceAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsByIdByBuffSource, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishBuffsByIdByBuffSourceAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsByIdFromBlockee, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishBuffsByIdFromBlockeeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishBuffsByIdFromBlockee, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishBuffsByIdFromBlockeeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishBuffsByIdFromBlockeeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdFromBlockeeAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishBuffsByIdFromBlockeeAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsByIdFromBlockeeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishBuffsByIdFromBlockeeAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** FinishBuffsByIdFromBlockeeAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishBuffsByIdFromBlockeeAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsByIdFromBlockee, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishBuffsByIdFromBlockeeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsOfEveryCharacterById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishBuffsOfEveryCharacterByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishBuffsOfEveryCharacterById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishBuffsOfEveryCharacterByIdAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。 */
    "_alsoClearNullSource": z.boolean().describe("FinishBuffsOfEveryCharacterByIdAction 的 `alsoClearNullSource` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryCharacterByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishBuffsOfEveryCharacterByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryCharacterByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("FinishBuffsOfEveryCharacterByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryCharacterByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishBuffsOfEveryCharacterByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryCharacterByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishBuffsOfEveryCharacterByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** FinishBuffsOfEveryCharacterByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishBuffsOfEveryCharacterByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsOfEveryCharacterById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishBuffsOfEveryCharacterByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsOfEveryEnemyById, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishBuffsOfEveryEnemyByIdActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishBuffsOfEveryEnemyById, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** FinishBuffsOfEveryEnemyByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("FinishBuffsOfEveryEnemyByIdAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryEnemyByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
    "_checkBuffSource": z.boolean().describe("FinishBuffsOfEveryEnemyByIdAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryEnemyByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。 */
    "_decCntIfStack": z.boolean().describe("FinishBuffsOfEveryEnemyByIdAction 的 `decCntIfStack` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryEnemyByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("FinishBuffsOfEveryEnemyByIdAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryEnemyByIdAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","SOURCE"]).describe("FinishBuffsOfEveryEnemyByIdAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** FinishBuffsOfEveryEnemyByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。 */
    "_updateOverrideMap": z.boolean().describe("FinishBuffsOfEveryEnemyByIdAction 的 `updateOverrideMap` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishBuffsOfEveryEnemyById, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishBuffsOfEveryEnemyByIdAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const FinishCardBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+FinishCardBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+FinishCardBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<FinishCardBuffAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionF07Schema = z
  .discriminatedUnion("$type", [FindSandboxV3BaseAndAssignTileToBlackboardActionSchema, FinishAllBuffsWithCertainAbnormalFlagActionSchema, FinishAllStatusResistableBuffsActionSchema, FinishBuffActionSchema, FinishBuffsByIdActionSchema, FinishBuffsByIdByBuffSourceActionSchema, FinishBuffsByIdFromBlockeeActionSchema, FinishBuffsOfEveryCharacterByIdActionSchema, FinishBuffsOfEveryEnemyByIdActionSchema, FinishCardBuffActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionF07>;
