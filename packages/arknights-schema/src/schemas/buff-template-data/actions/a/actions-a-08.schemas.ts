/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act49sideBossLevelSummonHolderTrapAction, Act49sideBossLevelTriggerLevelFinishAction, Act49sideBossRegisterDefaultSkillFocusGridAction, Act49sideBossRegistSelfAction, Act49sideBossSyncHPRatioAction, Act49sideBossTailChargeSummonCntAction, Act49sideBossTailSetSummonEnemyIntervalAction, Act49sideBossUpdateSkillFocusGridAction, Act49sideBossUpdateWarningEffectAction, Act49sideChargePrintingProgressAction, BattleActionA08 } from "../../../../types/buff-template-data/actions/a/actions-a-08.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelSummonHolderTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelSummonHolderTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelSummonHolderTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossLevelSummonHolderTrapAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossLevelSummonHolderTrapAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossLevelSummonHolderTrapAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossLevelSummonHolderTrapAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelSummonHolderTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelSummonHolderTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelTriggerLevelFinish, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelTriggerLevelFinishActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelTriggerLevelFinish, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossLevelTriggerLevelFinishAction 的 `delayToFinishLevel` 配置字段；准确战斗语义待确认。 */
    "_delayToFinishLevel": z.number().describe("Act49sideBossLevelTriggerLevelFinishAction 的 `delayToFinishLevel` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossLevelTriggerLevelFinishAction 的 `delayToKillAll` 配置字段；准确战斗语义待确认。 */
    "_delayToKillAll": z.number().describe("Act49sideBossLevelTriggerLevelFinishAction 的 `delayToKillAll` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelTriggerLevelFinish, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelTriggerLevelFinishAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossRegisterDefaultSkillFocusGrid, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossRegisterDefaultSkillFocusGridActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossRegisterDefaultSkillFocusGrid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossRegisterDefaultSkillFocusGridAction 的 `defaultPosKey` 配置字段；准确战斗语义待确认。 */
    "_defaultPosKey": z.string().describe("Act49sideBossRegisterDefaultSkillFocusGridAction 的 `defaultPosKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossRegisterDefaultSkillFocusGridAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossRegisterDefaultSkillFocusGridAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossRegisterDefaultSkillFocusGridAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossRegisterDefaultSkillFocusGridAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossRegisterDefaultSkillFocusGrid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossRegisterDefaultSkillFocusGridAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossRegistSelf, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossRegistSelfActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossRegistSelf, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossRegistSelfAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossRegistSelfAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossRegistSelfAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossRegistSelfAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossRegistSelf, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossRegistSelfAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossSyncHPRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossSyncHPRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossSyncHPRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossSyncHPRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossSyncHPRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossTailChargeSummonCnt, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossTailChargeSummonCntActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossTailChargeSummonCnt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossTailChargeSummonCntAction 的 `cnt` 配置字段；准确战斗语义待确认。 */
    "_cnt": z.number().describe("Act49sideBossTailChargeSummonCntAction 的 `cnt` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossTailChargeSummonCntAction 的 `scaleKey` 配置字段；准确战斗语义待确认。 */
    "_scaleKey": z.string().describe("Act49sideBossTailChargeSummonCntAction 的 `scaleKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossTailChargeSummonCnt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossTailChargeSummonCntAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossTailSetSummonEnemyInterval, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossTailSetSummonEnemyIntervalActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossTailSetSummonEnemyInterval, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossTailSetSummonEnemyIntervalAction 的 `interval` 配置字段；准确战斗语义待确认。 */
    "_interval": z.number().describe("Act49sideBossTailSetSummonEnemyIntervalAction 的 `interval` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossTailSetSummonEnemyIntervalAction 的 `intervalKey` 配置字段；准确战斗语义待确认。 */
    "_intervalKey": z.string().describe("Act49sideBossTailSetSummonEnemyIntervalAction 的 `intervalKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossTailSetSummonEnemyInterval, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossTailSetSummonEnemyIntervalAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossUpdateSkillFocusGrid, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossUpdateSkillFocusGridActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossUpdateSkillFocusGrid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossUpdateSkillFocusGridAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossUpdateSkillFocusGridAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossUpdateSkillFocusGridAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossUpdateSkillFocusGridAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossUpdateSkillFocusGrid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossUpdateSkillFocusGridAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossUpdateWarningEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossUpdateWarningEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossUpdateWarningEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossUpdateWarningEffectAction 的 `force` 配置字段；准确战斗语义待确认。 */
    "_force": z.boolean().describe("Act49sideBossUpdateWarningEffectAction 的 `force` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossUpdateWarningEffectAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossUpdateWarningEffectAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossUpdateWarningEffectAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossUpdateWarningEffectAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossUpdateWarningEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossUpdateWarningEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideChargePrintingProgress, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideChargePrintingProgressActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideChargePrintingProgress, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideChargePrintingProgressAction 的 `chargeValue` 配置字段；准确战斗语义待确认。 */
    "_chargeValue": z.number().describe("Act49sideChargePrintingProgressAction 的 `chargeValue` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideChargePrintingProgress, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideChargePrintingProgressAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA08Schema = z
  .discriminatedUnion("$type", [Act49sideBossLevelSummonHolderTrapActionSchema, Act49sideBossLevelTriggerLevelFinishActionSchema, Act49sideBossRegisterDefaultSkillFocusGridActionSchema, Act49sideBossRegistSelfActionSchema, Act49sideBossSyncHPRatioActionSchema, Act49sideBossTailChargeSummonCntActionSchema, Act49sideBossTailSetSummonEnemyIntervalActionSchema, Act49sideBossUpdateSkillFocusGridActionSchema, Act49sideBossUpdateWarningEffectActionSchema, Act49sideChargePrintingProgressActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA08>;
