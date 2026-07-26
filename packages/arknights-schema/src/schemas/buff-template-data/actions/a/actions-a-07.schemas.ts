/**
 * buff_template_data 的 A 组 Action Zod Schema。
 */

import { z } from "zod";

import type { Act47SideSwitchToBanGroundModeAction, Act48SideRegistFunctionTrapAction, Act49sideBossApplySkillDamageAction, Act49sideBossEmitProjectileToSkillTargetPosAction, Act49sideBossFinishWarningEffectAction, Act49sideBossLevelCheckPartSealedAction, Act49sideBossLevelClearHolderTrapAction, Act49sideBossLevelEnemyReachExitAction, Act49sideBossLevelEnemyReportBornAction, Act49sideBossLevelEnemyReportDeathAction, BattleActionA07 } from "../../../../types/buff-template-data/actions/a/actions-a-07.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act47SideSwitchToBanGroundMode, Assembly-CSharp 的严格 Action 数据。
 */
export const Act47SideSwitchToBanGroundModeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act47SideSwitchToBanGroundMode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act47SideSwitchToBanGroundMode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act47SideSwitchToBanGroundModeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act48SideRegistFunctionTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const Act48SideRegistFunctionTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act48SideRegistFunctionTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act48SideRegistFunctionTrapAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("Act48SideRegistFunctionTrapAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act48SideRegistFunctionTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act48SideRegistFunctionTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossApplySkillDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossApplySkillDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossApplySkillDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossApplySkillDamageAction 的 `applyWay` 配置字段；准确战斗语义待确认。 */
    "_applyWay": z.literal("MELEE").describe("Act49sideBossApplySkillDamageAction 的 `applyWay` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossApplySkillDamageAction 的 `atkScale` 配置字段；准确战斗语义待确认。 */
    "_atkScale": z.number().describe("Act49sideBossApplySkillDamageAction 的 `atkScale` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossApplySkillDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.literal("SPLASH").describe("Act49sideBossApplySkillDamageAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.literal("PHYSICAL").describe("本次伤害使用的伤害类型。"),
    /** Act49sideBossApplySkillDamageAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossApplySkillDamageAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossApplySkillDamageAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossApplySkillDamageAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossApplySkillDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossApplySkillDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossEmitProjectileToSkillTargetPos, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossEmitProjectileToSkillTargetPosActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossEmitProjectileToSkillTargetPos, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossEmitProjectileToSkillTargetPosAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.string().describe("Act49sideBossEmitProjectileToSkillTargetPosAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossEmitProjectileToSkillTargetPosAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
    "_skillName": z.string().describe("Act49sideBossEmitProjectileToSkillTargetPosAction 的 `skillName` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossEmitProjectileToSkillTargetPos, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossEmitProjectileToSkillTargetPosAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossFinishWarningEffect, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossFinishWarningEffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossFinishWarningEffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossFinishWarningEffectAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossFinishWarningEffectAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossFinishWarningEffectAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossFinishWarningEffectAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossFinishWarningEffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossFinishWarningEffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelCheckPartSealed, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelCheckPartSealedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelCheckPartSealed, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossLevelCheckPartSealedAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossLevelCheckPartSealedAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossLevelCheckPartSealedAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossLevelCheckPartSealedAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelCheckPartSealed, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelCheckPartSealedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelClearHolderTrap, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelClearHolderTrapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelClearHolderTrap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Act49sideBossLevelClearHolderTrapAction 的 `partName` 配置字段；准确战斗语义待确认。 */
    "_partName": z.string().describe("Act49sideBossLevelClearHolderTrapAction 的 `partName` 配置字段；准确战斗语义待确认。"),
    /** Act49sideBossLevelClearHolderTrapAction 的 `partNameKey` 配置字段；准确战斗语义待确认。 */
    "_partNameKey": z.string().describe("Act49sideBossLevelClearHolderTrapAction 的 `partNameKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelClearHolderTrap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelClearHolderTrapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReachExit, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelEnemyReachExitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReachExit, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReachExit, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelEnemyReachExitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReportBorn, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelEnemyReportBornActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReportBorn, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReportBorn, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelEnemyReportBornAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReportDeath, Assembly-CSharp 的严格 Action 数据。
 */
export const Act49sideBossLevelEnemyReportDeathActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReportDeath, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Act49sideBossLevelEnemyReportDeath, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<Act49sideBossLevelEnemyReportDeathAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionA07Schema = z
  .discriminatedUnion("$type", [Act47SideSwitchToBanGroundModeActionSchema, Act48SideRegistFunctionTrapActionSchema, Act49sideBossApplySkillDamageActionSchema, Act49sideBossEmitProjectileToSkillTargetPosActionSchema, Act49sideBossFinishWarningEffectActionSchema, Act49sideBossLevelCheckPartSealedActionSchema, Act49sideBossLevelClearHolderTrapActionSchema, Act49sideBossLevelEnemyReachExitActionSchema, Act49sideBossLevelEnemyReportBornActionSchema, Act49sideBossLevelEnemyReportDeathActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionA07>;
