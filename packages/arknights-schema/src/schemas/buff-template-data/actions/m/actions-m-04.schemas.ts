/**
 * buff_template_data 的 M 组 Action Zod Schema。
 */

import { z } from "zod";

import type { ModifyAttackMaxTargetAction, ModifyAttackMaxTileNumAction, ModifyAttributeDataRangeOverrideAction, ModifyAttributeRawDataByEntityAction, ModifyBlackboardAction, ModifyBlackboardFromTraitAction, ModifyBlackboardMainline12Action, ModifyBlackboardStrAction, ModifyBoomberangMaxCntAction, ModifyBossRushBattleAreaDataAction, BattleActionM04 } from "../../../../types/buff-template-data/actions/m/actions-m-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttackMaxTarget, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAttackMaxTargetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAttackMaxTarget, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAttackMaxTargetAction 的 `maxTarget` 配置字段；准确战斗语义待确认。 */
    "_maxTarget": z.number().describe("ModifyAttackMaxTargetAction 的 `maxTarget` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttackMaxTargetAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("ModifyAttackMaxTargetAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttackMaxTarget, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAttackMaxTargetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttackMaxTileNum, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAttackMaxTileNumActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAttackMaxTileNum, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyAttackMaxTileNumAction 的 `maxTileNum` 配置字段；准确战斗语义待确认。 */
    "_maxTileNum": z.number().describe("ModifyAttackMaxTileNumAction 的 `maxTileNum` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttackMaxTileNumAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("ModifyAttackMaxTileNumAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttackMaxTileNum, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAttackMaxTileNumAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttributeDataRangeOverride, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAttributeDataRangeOverrideActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAttributeDataRangeOverride, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATTACK_SPEED","BASE_ATTACK_TIME","MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** ModifyAttributeDataRangeOverrideAction 的 `doClear` 配置字段；准确战斗语义待确认。 */
    "_doClear": z.boolean().describe("ModifyAttributeDataRangeOverrideAction 的 `doClear` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttributeDataRangeOverrideAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。 */
    "_maxValueKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("ModifyAttributeDataRangeOverrideAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttributeDataRangeOverrideAction 的 `minValueKey` 配置字段；准确战斗语义待确认。 */
    "_minValueKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("ModifyAttributeDataRangeOverrideAction 的 `minValueKey` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttributeDataRangeOverrideAction 的 `refresh` 配置字段；准确战斗语义待确认。 */
    "_refresh": z.boolean().describe("ModifyAttributeDataRangeOverrideAction 的 `refresh` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttributeDataRangeOverride, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAttributeDataRangeOverrideAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttributeRawDataByEntity, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyAttributeRawDataByEntityActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyAttributeRawDataByEntity, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_SOURCE","TARGET"]).describe("Action 读取的来源实体类型。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** ModifyAttributeRawDataByEntityAction 的 `typesNeedtoModify` 配置字段；准确战斗语义待确认。 */
    "_typesNeedtoModify": z.array(z.string()).describe("ModifyAttributeRawDataByEntityAction 的 `typesNeedtoModify` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttributeRawDataByEntityAction 的 `typesNeedtoUseRatio` 配置字段；准确战斗语义待确认。 */
    "_typesNeedtoUseRatio": z.array(z.string()).describe("ModifyAttributeRawDataByEntityAction 的 `typesNeedtoUseRatio` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttributeRawDataByEntityAction 的 `useCardSnapshot` 配置字段；准确战斗语义待确认。 */
    "_useCardSnapshot": z.boolean().describe("ModifyAttributeRawDataByEntityAction 的 `useCardSnapshot` 配置字段；准确战斗语义待确认。"),
    /** ModifyAttributeRawDataByEntityAction 的 `useRatio` 配置字段；准确战斗语义待确认。 */
    "_useRatio": z.boolean().describe("ModifyAttributeRawDataByEntityAction 的 `useRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyAttributeRawDataByEntity, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyAttributeRawDataByEntityAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyBlackboardAction 的 `addBasedOriginValue` 配置字段；准确战斗语义待确认。 */
    "_addBasedOriginValue": z.boolean().describe("ModifyBlackboardAction 的 `addBasedOriginValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeys": z.string().describe("ModifyBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。 */
    "_checkFromBlackboardValue": z.boolean().describe("ModifyBlackboardAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_fromBlackboardKeys": z.union([
                                 z.null(),
                                 z.string(),
                               ]).describe("ModifyBlackboardAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("ModifyBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboardFromTrait, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyBlackboardFromTraitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyBlackboardFromTrait, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyBlackboardFromTraitAction 的 `addBasedOriginValue` 配置字段；准确战斗语义待确认。 */
    "_addBasedOriginValue": z.boolean().describe("ModifyBlackboardFromTraitAction 的 `addBasedOriginValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardFromTraitAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeys": z.string().describe("ModifyBlackboardFromTraitAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardFromTraitAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。 */
    "_checkFromBlackboardValue": z.boolean().describe("ModifyBlackboardFromTraitAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardFromTraitAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_fromBlackboardKeys": z.string().describe("ModifyBlackboardFromTraitAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** ModifyBlackboardFromTraitAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("ModifyBlackboardFromTraitAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboardFromTrait, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyBlackboardFromTraitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboardMainline12, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyBlackboardMainline12ActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyBlackboardMainline12, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyBlackboardMainline12Action 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("ModifyBlackboardMainline12Action 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** ModifyBlackboardMainline12Action 的 `hostBuffID` 配置字段；准确战斗语义待确认。 */
    "_hostBuffID": z.union([
                         z.null(),
                         z.string(),
                       ]).describe("ModifyBlackboardMainline12Action 的 `hostBuffID` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardMainline12Action 的 `rewriteBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_rewriteBlackboardKey": z.union([
                                   z.null(),
                                   z.string(),
                                 ]).describe("ModifyBlackboardMainline12Action 的 `rewriteBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** ModifyBlackboardMainline12Action 的 `viaHostBuffStackCount` 配置字段；准确战斗语义待确认。 */
    "_viaHostBuffStackCount": z.boolean().describe("ModifyBlackboardMainline12Action 的 `viaHostBuffStackCount` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardMainline12Action 的 `viaStandsCount` 配置字段；准确战斗语义待确认。 */
    "_viaStandsCount": z.boolean().describe("ModifyBlackboardMainline12Action 的 `viaStandsCount` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboardMainline12, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyBlackboardMainline12Action>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboardStr, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyBlackboardStrActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyBlackboardStr, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyBlackboardStrAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_blackboardKeys": z.string().describe("ModifyBlackboardStrAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardStrAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。 */
    "_checkFromBlackboardValue": z.boolean().describe("ModifyBlackboardStrAction 的 `checkFromBlackboardValue` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardStrAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。 */
    "_fromBlackboardKeys": z.union([
                                 z.null(),
                                 z.string(),
                               ]).describe("ModifyBlackboardStrAction 的 `fromBlackboardKeys` 配置字段；准确战斗语义待确认。"),
    /** ModifyBlackboardStrAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.union([
                    z.null(),
                    z.string(),
                  ]).describe("ModifyBlackboardStrAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyBlackboardStr, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyBlackboardStrAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyBoomberangMaxCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyBoomberangMaxCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyBoomberangMaxCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ModifyBoomberangMaxCntAction 的 `reset` 配置字段；准确战斗语义待确认。 */
    "_reset": z.boolean().describe("ModifyBoomberangMaxCntAction 的 `reset` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyBoomberangMaxCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyBoomberangMaxCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ModifyBossRushBattleAreaData, Assembly-CSharp 的严格 Action 数据。
 */
export const ModifyBossRushBattleAreaDataActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ModifyBossRushBattleAreaData, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ModifyBossRushBattleAreaData, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ModifyBossRushBattleAreaDataAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionM04Schema = z
  .discriminatedUnion("$type", [ModifyAttackMaxTargetActionSchema, ModifyAttackMaxTileNumActionSchema, ModifyAttributeDataRangeOverrideActionSchema, ModifyAttributeRawDataByEntityActionSchema, ModifyBlackboardActionSchema, ModifyBlackboardFromTraitActionSchema, ModifyBlackboardMainline12ActionSchema, ModifyBlackboardStrActionSchema, ModifyBoomberangMaxCntActionSchema, ModifyBossRushBattleAreaDataActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionM04>;
