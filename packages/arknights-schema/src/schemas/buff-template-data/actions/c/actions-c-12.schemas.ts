/**
 * buff_template_data 的 C 组 Action Zod Schema。
 */

import { z } from "zod";

import type { CheckHasCharacterInRangeAction, CheckHasEnemyIdInBlackboardAction, CheckHasEnemyIdInCharacterSharedBlackboardAction, CheckHasEnemyInRangeAction, CheckHasSpAction, CheckHasStandsAction, CheckHasUnitInRangeAction, CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnlyAction, CheckHeightTypeInRangeAction, CheckHeightTypeOfCharacterRootTileAction, BattleActionC12 } from "../../../../types/buff-template-data/actions/c/actions-c-12.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasCharacterInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasCharacterInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasCharacterInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasCharacterInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
    "_checkRadius": z.boolean().describe("CheckHasCharacterInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CheckHasCharacterInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `excludeTrapAndToken` 配置字段；准确战斗语义待确认。 */
    "_excludeTrapAndToken": z.boolean().describe("CheckHasCharacterInRangeAction 的 `excludeTrapAndToken` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `filterByGroupId` 配置字段；准确战斗语义待确认。 */
    "_filterByGroupId": z.boolean().describe("CheckHasCharacterInRangeAction 的 `filterByGroupId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `filterGroupId` 配置字段；准确战斗语义待确认。 */
    "_filterGroupId": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("CheckHasCharacterInRangeAction 的 `filterGroupId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `globalRange` 配置字段；准确战斗语义待确认。 */
    "_globalRange": z.boolean().describe("CheckHasCharacterInRangeAction 的 `globalRange` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckHasCharacterInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasCharacterInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("CheckHasCharacterInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasCharacterInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasCharacterInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasEnemyIdInBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasEnemyIdInBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasEnemyIdInBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasEnemyIdInBlackboardAction 的 `doNotCheckSourceType` 配置字段；准确战斗语义待确认。 */
    "_doNotCheckSourceType": z.boolean().describe("CheckHasEnemyIdInBlackboardAction 的 `doNotCheckSourceType` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyIdInBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("CheckHasEnemyIdInBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyIdInBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("CheckHasEnemyIdInBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasEnemyIdInBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasEnemyIdInBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasEnemyIdInCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasEnemyIdInCharacterSharedBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasEnemyIdInCharacterSharedBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasEnemyIdInCharacterSharedBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("CheckHasEnemyIdInCharacterSharedBlackboardAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyIdInCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("TARGET").describe("CheckHasEnemyIdInCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasEnemyIdInCharacterSharedBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasEnemyIdInCharacterSharedBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasEnemyInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasEnemyInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasEnemyInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasEnemyInRangeAction 的 `assignBBKey` 配置字段；准确战斗语义待确认。 */
    "_assignBBKey": z.string().describe("CheckHasEnemyInRangeAction 的 `assignBBKey` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `assignToBB` 配置字段；准确战斗语义待确认。 */
    "_assignToBB": z.boolean().describe("CheckHasEnemyInRangeAction 的 `assignToBB` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `checkId` 配置字段；准确战斗语义待确认。 */
    "_checkId": z.boolean().describe("CheckHasEnemyInRangeAction 的 `checkId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
    "_checkRadius": z.boolean().describe("CheckHasEnemyInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE"]).describe("CheckHasEnemyInRangeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `countKey` 配置字段；准确战斗语义待确认。 */
    "_countKey": z.string().describe("CheckHasEnemyInRangeAction 的 `countKey` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `excludedBuffIds` 配置字段；准确战斗语义待确认。 */
    "_excludedBuffIds": z.union([
                              z.null(),
                              z.array(z.string()),
                            ]).describe("CheckHasEnemyInRangeAction 的 `excludedBuffIds` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `excludeSource` 配置字段；准确战斗语义待确认。 */
    "_excludeSource": z.boolean().describe("CheckHasEnemyInRangeAction 的 `excludeSource` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `includedBuffIds` 配置字段；准确战斗语义待确认。 */
    "_includedBuffIds": z.union([
                              z.null(),
                              z.array(z.string()),
                            ]).describe("CheckHasEnemyInRangeAction 的 `includedBuffIds` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `needCheckCount` 配置字段；准确战斗语义待确认。 */
    "_needCheckCount": z.boolean().describe("CheckHasEnemyInRangeAction 的 `needCheckCount` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckHasEnemyInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。 */
    "_rangeRadius": z.number().describe("CheckHasEnemyInRangeAction 的 `rangeRadius` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `soureceType` 配置字段；准确战斗语义待确认。 */
    "_soureceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("CheckHasEnemyInRangeAction 的 `soureceType` 配置字段；准确战斗语义待确认。"),
    /** CheckHasEnemyInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。 */
    "_useAttackRange": z.boolean().describe("CheckHasEnemyInRangeAction 的 `useAttackRange` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasEnemyInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasEnemyInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasSp, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasSpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasSp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasSpAction 的 `checkHasSp` 配置字段；准确战斗语义待确认。 */
    "_checkHasSp": z.number().describe("CheckHasSpAction 的 `checkHasSp` 配置字段；准确战斗语义待确认。"),
    /** CheckHasSpAction 的 `checkKey` 配置字段；准确战斗语义待确认。 */
    "_checkKey": z.string().describe("CheckHasSpAction 的 `checkKey` 配置字段；准确战斗语义待确认。"),
    /** CheckHasSpAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.enum(["EQUALS","GE","GT","LE","LT"]).describe("CheckHasSpAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckHasSpAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("CheckHasSpAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasSp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasSpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasStands, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasStandsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasStands, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasStandsAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("CheckHasStandsAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasStands, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasStandsAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHasUnitInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHasUnitInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHasUnitInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHasUnitInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("CheckHasUnitInRangeAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。 */
    "_checkContainsBuff": z.boolean().describe("CheckHasUnitInRangeAction 的 `checkContainsBuff` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。 */
    "_checkRadius": z.boolean().describe("CheckHasUnitInRangeAction 的 `checkRadius` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `checkRangeId` 配置字段；准确战斗语义待确认。 */
    "_checkRangeId": z.boolean().describe("CheckHasUnitInRangeAction 的 `checkRangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `checkSideType` 配置字段；准确战斗语义待确认。 */
    "_checkSideType": z.boolean().describe("CheckHasUnitInRangeAction 的 `checkSideType` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("CheckHasUnitInRangeAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。 */
    "_radius": z.strictObject({
                     /** CheckHasUnitInRangeAction 的 `serializedValue` 配置字段；准确战斗语义待确认。 */
                     "_serializedValue": z.number().describe("CheckHasUnitInRangeAction 的 `serializedValue` 配置字段；准确战斗语义待确认。"),
                   }).describe("CheckHasUnitInRangeAction 的 `radius` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `radiusKey` 配置字段；准确战斗语义待确认。 */
    "_radiusKey": z.string().describe("CheckHasUnitInRangeAction 的 `radiusKey` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckHasUnitInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。 */
    "_rangeIdKey": z.string().describe("CheckHasUnitInRangeAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。"),
    /** CheckHasUnitInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
    "_targetSide": z.enum(["ALLY","NEUTRAL"]).describe("CheckHasUnitInRangeAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHasUnitInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHasUnitInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnlyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnly, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnly, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnlyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHeightTypeInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHeightTypeInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHeightTypeInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHeightTypeInRangeAction 的 `checkCnt` 配置字段；准确战斗语义待确认。 */
    "_checkCnt": z.number().describe("CheckHeightTypeInRangeAction 的 `checkCnt` 配置字段；准确战斗语义待确认。"),
    /** CheckHeightTypeInRangeAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("GE").describe("CheckHeightTypeInRangeAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** CheckHeightTypeInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
    "_rangeId": z.string().describe("CheckHeightTypeInRangeAction 的 `rangeId` 配置字段；准确战斗语义待确认。"),
    /** CheckHeightTypeInRangeAction 的 `m_sourceType` 配置字段；准确战斗语义待确认。 */
    "m_sourceType": z.literal("BUFF_OWNER").describe("CheckHeightTypeInRangeAction 的 `m_sourceType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHeightTypeInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHeightTypeInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+CheckHeightTypeOfCharacterRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const CheckHeightTypeOfCharacterRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+CheckHeightTypeOfCharacterRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** CheckHeightTypeOfCharacterRootTileAction 的 `heightType` 配置字段；准确战斗语义待确认。 */
    "_heightType": z.enum(["HIGHLAND","LOWLAND"]).describe("CheckHeightTypeOfCharacterRootTileAction 的 `heightType` 配置字段；准确战斗语义待确认。"),
    /** CheckHeightTypeOfCharacterRootTileAction 的 `isUnset` 配置字段；准确战斗语义待确认。 */
    "_isUnset": z.boolean().describe("CheckHeightTypeOfCharacterRootTileAction 的 `isUnset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","MODIFIER_SOURCE","MODIFIER_TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+CheckHeightTypeOfCharacterRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<CheckHeightTypeOfCharacterRootTileAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionC12Schema = z
  .discriminatedUnion("$type", [CheckHasCharacterInRangeActionSchema, CheckHasEnemyIdInBlackboardActionSchema, CheckHasEnemyIdInCharacterSharedBlackboardActionSchema, CheckHasEnemyInRangeActionSchema, CheckHasSpActionSchema, CheckHasStandsActionSchema, CheckHasUnitInRangeActionSchema, CheckHaveDangerousEventAfterCollectInfoFunLiveModeOnlyActionSchema, CheckHeightTypeInRangeActionSchema, CheckHeightTypeOfCharacterRootTileActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionC12>;
