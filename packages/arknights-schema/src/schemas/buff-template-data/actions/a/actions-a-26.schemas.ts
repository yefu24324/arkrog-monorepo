/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { AssignTrainEnemyPastGridCntToBBAction, AssignUidToBlackBoardAction, AssignUidToBuffBlackBoardAction, AssignUnionFindMemberCntToBBAction, AssignValueToBBAction, AssignValueToBBWithWeightAction, AssignValueToTraitBBAction, AtkAdditionUpBeforeCalcDamageAction, AtkScaleUpAction, AtkToHpRecoveryAction, BattleActionA26 } from "../../../../types/buff-template-data/actions/a/actions-a-26.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignTrainEnemyPastGridCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignTrainEnemyPastGridCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignTrainEnemyPastGridCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignTrainEnemyPastGridCntToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。 */
    "_bbKey": z.string().describe("AssignTrainEnemyPastGridCntToBBAction 的 `bbKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignTrainEnemyPastGridCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignTrainEnemyPastGridCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignUidToBlackBoard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignUidToBlackBoardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignUidToBlackBoard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignUidToBlackBoardAction 的 `assignAsInt` 配置字段；准确战斗语义待确认。 */
    "_assignAsInt": z.boolean().describe("AssignUidToBlackBoardAction 的 `assignAsInt` 配置字段；准确战斗语义待确认。"),
    /** AssignUidToBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("AssignUidToBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignUidToBlackBoardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.union([
                      z.null(),
                      z.string(),
                    ]).describe("AssignUidToBlackBoardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignUidToBlackBoard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignUidToBlackBoardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignUidToBuffBlackBoard, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignUidToBuffBlackBoardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignUidToBuffBlackBoard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignUidToBuffBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。 */
    "_blackBoardKey": z.string().describe("AssignUidToBuffBlackBoardAction 的 `blackBoardKey` 配置字段；准确战斗语义待确认。"),
    /** AssignUidToBuffBlackBoardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("AssignUidToBuffBlackBoardAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("SOURCE").describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("TARGET").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignUidToBuffBlackBoard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignUidToBuffBlackBoardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignUnionFindMemberCntToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignUnionFindMemberCntToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignUnionFindMemberCntToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignUnionFindMemberCntToBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("AssignUnionFindMemberCntToBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** AssignUnionFindMemberCntToBBAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.string().describe("AssignUnionFindMemberCntToBBAction 的 `key` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignUnionFindMemberCntToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignUnionFindMemberCntToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignValueToBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignValueToBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignValueToBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AssignValueToBBAction 的 `assignString` 配置字段；准确战斗语义待确认。 */
    "_assignString": z.boolean().describe("AssignValueToBBAction 的 `assignString` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignValueToBBAction 的 `copyFromKey` 配置字段；准确战斗语义待确认。 */
    "_copyFromKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("AssignValueToBBAction 的 `copyFromKey` 配置字段；准确战斗语义待确认。"),
    /** AssignValueToBBAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("AssignValueToBBAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignValueToBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignValueToBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignValueToBBWithWeight, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignValueToBBWithWeightActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignValueToBBWithWeight, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** AssignValueToBBWithWeightAction 的 `maxWeight` 配置字段；准确战斗语义待确认。 */
    "_maxWeight": z.number().describe("AssignValueToBBWithWeightAction 的 `maxWeight` 配置字段；准确战斗语义待确认。"),
    /** AssignValueToBBWithWeightAction 的 `useNum2` 配置字段；准确战斗语义待确认。 */
    "_useNum2": z.boolean().describe("AssignValueToBBWithWeightAction 的 `useNum2` 配置字段；准确战斗语义待确认。"),
    /** AssignValueToBBWithWeightAction 的 `weightNum` 配置字段；准确战斗语义待确认。 */
    "_weightNum": z.number().describe("AssignValueToBBWithWeightAction 的 `weightNum` 配置字段；准确战斗语义待确认。"),
    /** AssignValueToBBWithWeightAction 的 `weightNum2` 配置字段；准确战斗语义待确认。 */
    "_weightNum2": z.number().describe("AssignValueToBBWithWeightAction 的 `weightNum2` 配置字段；准确战斗语义待确认。"),
    /** AssignValueToBBWithWeightAction 的 `weightNum2Key` 配置字段；准确战斗语义待确认。 */
    "_weightNum2Key": z.string().describe("AssignValueToBBWithWeightAction 的 `weightNum2Key` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignValueToBBWithWeight, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignValueToBBWithWeightAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AssignValueToTraitBB, Assembly-CSharp 的严格 Action 数据。
 */
export const AssignValueToTraitBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AssignValueToTraitBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** AssignValueToTraitBBAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("AssignValueToTraitBBAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AssignValueToTraitBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AssignValueToTraitBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AtkAdditionUpBeforeCalcDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const AtkAdditionUpBeforeCalcDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AtkAdditionUpBeforeCalcDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AtkAdditionUpBeforeCalcDamageAction 的 `atkAdditionKey` 配置字段；准确战斗语义待确认。 */
    "_atkAdditionKey": z.string().describe("AtkAdditionUpBeforeCalcDamageAction 的 `atkAdditionKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("MAGICAL").describe("本次伤害使用的伤害类型。"),
    /** AtkAdditionUpBeforeCalcDamageAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.number().describe("AtkAdditionUpBeforeCalcDamageAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** AtkAdditionUpBeforeCalcDamageAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("AtkAdditionUpBeforeCalcDamageAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AtkAdditionUpBeforeCalcDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AtkAdditionUpBeforeCalcDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AtkScaleUp, Assembly-CSharp 的严格 Action 数据。
 */
export const AtkScaleUpActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AtkScaleUp, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AtkScaleUpAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.enum(["ALL","MELEE","NONE","RANGED"]).describe("AtkScaleUpAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** AtkScaleUpAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。 */
    "_atkScaleKey": z.string().describe("AtkScaleUpAction 的 `atkScaleKey` 配置字段；准确战斗语义待确认。"),
    /** AtkScaleUpAction 的 `cancelIfAtkScaleZero` 配置字段；准确战斗语义待确认。 */
    "_cancelIfAtkScaleZero": z.boolean().describe("AtkScaleUpAction 的 `cancelIfAtkScaleZero` 配置字段；准确战斗语义待确认。"),
    /** AtkScaleUpAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
    "_defaultValue": z.number().describe("AtkScaleUpAction 的 `defaultValue` 配置字段；准确战斗语义待确认。"),
    /** AtkScaleUpAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("AtkScaleUpAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** AtkScaleUpAction 的 `filterNoneApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterNoneApplyWay": z.boolean().describe("AtkScaleUpAction 的 `filterNoneApplyWay` 配置字段；准确战斗语义待确认。"),
    /** AtkScaleUpAction 的 `filterProjectileKey` 配置字段；准确战斗语义待确认。 */
    "_filterProjectileKey": z.string().describe("AtkScaleUpAction 的 `filterProjectileKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AtkScaleUp, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AtkScaleUpAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+AtkToHpRecovery, Assembly-CSharp 的严格 Action 数据。
 */
export const AtkToHpRecoveryActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+AtkToHpRecovery, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** AtkToHpRecoveryAction 的 `getAtkFromTarget` 配置字段；准确战斗语义待确认。 */
    "_getAtkFromTarget": z.boolean().describe("AtkToHpRecoveryAction 的 `getAtkFromTarget` 配置字段；准确战斗语义待确认。"),
    /** AtkToHpRecoveryAction 的 `getAtkTargetType` 配置字段；准确战斗语义待确认。 */
    "_getAtkTargetType": z.enum(["BUFF_SOURCE","SOURCE"]).describe("AtkToHpRecoveryAction 的 `getAtkTargetType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+AtkToHpRecovery, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<AtkToHpRecoveryAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA26Schema = z
  .discriminatedUnion("$type", [AssignTrainEnemyPastGridCntToBBActionSchema, AssignUidToBlackBoardActionSchema, AssignUidToBuffBlackBoardActionSchema, AssignUnionFindMemberCntToBBActionSchema, AssignValueToBBActionSchema, AssignValueToBBWithWeightActionSchema, AssignValueToTraitBBActionSchema, AtkAdditionUpBeforeCalcDamageActionSchema, AtkScaleUpActionSchema, AtkToHpRecoveryActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA26>;
