/**
 * buff_template_data 的 R 组 Action Zod Schema。
 */

import { z } from "zod";

import type { RegistTaskUIAction, ReInitEnemySkillCoolDownAction, ReleaseEnemyFromCurrentWaveAction, ReleaseFromBlockerAction, RemainingRatioToAttributeModifierAction, RemoveCostTimerModifierAction, RemoveFearTargetTilesAction, RemoveGameFinishBlockerByKeyAction, RemoveRootTileFromBBAction, RemoveTileBindingGlobalBuffAction, BattleActionR04 } from "../../../../types/buff-template-data/actions/r/actions-r-04.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RegistTaskUI, Assembly-CSharp 的严格 Action 数据。
 */
export const RegistTaskUIActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RegistTaskUI, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RegistTaskUI, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RegistTaskUIAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ReInitEnemySkillCoolDown, Assembly-CSharp 的严格 Action 数据。
 */
export const ReInitEnemySkillCoolDownActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ReInitEnemySkillCoolDown, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ReInitEnemySkillCoolDownAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。 */
    "_checkSkillActive": z.boolean().describe("ReInitEnemySkillCoolDownAction 的 `checkSkillActive` 配置字段；准确战斗语义待确认。"),
    /** ReInitEnemySkillCoolDownAction 的 `onlyResetCD` 配置字段；准确战斗语义待确认。 */
    "_onlyResetCD": z.boolean().describe("ReInitEnemySkillCoolDownAction 的 `onlyResetCD` 配置字段；准确战斗语义待确认。"),
    /** ReInitEnemySkillCoolDownAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("ReInitEnemySkillCoolDownAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** ReInitEnemySkillCoolDownAction 的 `skillName` 配置字段；准确战斗语义待确认。 */
    "_skillName": z.union([
                        z.null(),
                        z.string(),
                      ]).describe("ReInitEnemySkillCoolDownAction 的 `skillName` 配置字段；准确战斗语义待确认。"),
    /** ReInitEnemySkillCoolDownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
    "_waitFirstPeriod": z.boolean().describe("ReInitEnemySkillCoolDownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ReInitEnemySkillCoolDown, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ReInitEnemySkillCoolDownAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ReleaseEnemyFromCurrentWave, Assembly-CSharp 的严格 Action 数据。
 */
export const ReleaseEnemyFromCurrentWaveActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ReleaseEnemyFromCurrentWave, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ReleaseEnemyFromCurrentWaveAction 的 `removeWaveCache` 配置字段；准确战斗语义待确认。 */
    "_removeWaveCache": z.boolean().describe("ReleaseEnemyFromCurrentWaveAction 的 `removeWaveCache` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtNextWave` 配置字段；准确战斗语义待确认。 */
    "_trackEnemyAtNextWave": z.boolean().describe("ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtNextWave` 配置字段；准确战斗语义待确认。"),
    /** ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtSpecificWave` 配置字段；准确战斗语义待确认。 */
    "_trackEnemyAtSpecificWave": z.boolean().describe("ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtSpecificWave` 配置字段；准确战斗语义待确认。"),
    /** ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtWaveDelta` 配置字段；准确战斗语义待确认。 */
    "_trackEnemyAtWaveDelta": z.number().describe("ReleaseEnemyFromCurrentWaveAction 的 `trackEnemyAtWaveDelta` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ReleaseEnemyFromCurrentWave, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ReleaseEnemyFromCurrentWaveAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ReleaseFromBlocker, Assembly-CSharp 的严格 Action 数据。
 */
export const ReleaseFromBlockerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ReleaseFromBlocker, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ReleaseFromBlockerAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("ReleaseFromBlockerAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ReleaseFromBlocker, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ReleaseFromBlockerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RemainingRatioToAttributeModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const RemainingRatioToAttributeModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RemainingRatioToAttributeModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","ATTACK_SPEED","DEF","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** RemainingRatioToAttributeModifierAction 的 `endTime` 配置字段；准确战斗语义待确认。 */
    "_endTime": z.number().describe("RemainingRatioToAttributeModifierAction 的 `endTime` 配置字段；准确战斗语义待确认。"),
    /** RemainingRatioToAttributeModifierAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
    "_formulaType": z.enum(["ADDITION","MULTIPLIER"]).describe("RemainingRatioToAttributeModifierAction 的 `formulaType` 配置字段；准确战斗语义待确认。"),
    /** RemainingRatioToAttributeModifierAction 的 `isInversed` 配置字段；准确战斗语义待确认。 */
    "_isInversed": z.boolean().describe("RemainingRatioToAttributeModifierAction 的 `isInversed` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RemainingRatioToAttributeModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RemainingRatioToAttributeModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RemoveCostTimerModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const RemoveCostTimerModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RemoveCostTimerModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RemoveCostTimerModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RemoveCostTimerModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RemoveFearTargetTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const RemoveFearTargetTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RemoveFearTargetTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RemoveFearTargetTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RemoveFearTargetTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RemoveGameFinishBlockerByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const RemoveGameFinishBlockerByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RemoveGameFinishBlockerByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RemoveGameFinishBlockerByKeyAction 的 `blockerKey` 配置字段；准确战斗语义待确认。 */
    "_blockerKey": z.string().describe("RemoveGameFinishBlockerByKeyAction 的 `blockerKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RemoveGameFinishBlockerByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RemoveGameFinishBlockerByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RemoveRootTileFromBB, Assembly-CSharp 的严格 Action 数据。
 */
export const RemoveRootTileFromBBActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RemoveRootTileFromBB, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RemoveRootTileFromBBAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
    "_buffKey": z.string().describe("RemoveRootTileFromBBAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
    /** RemoveRootTileFromBBAction 的 `buffSource` 配置字段；准确战斗语义待确认。 */
    "_buffSource": z.literal("BUFF_SOURCE").describe("RemoveRootTileFromBBAction 的 `buffSource` 配置字段；准确战斗语义待确认。"),
    /** RemoveRootTileFromBBAction 的 `specificBuffBB` 配置字段；准确战斗语义待确认。 */
    "_specificBuffBB": z.boolean().describe("RemoveRootTileFromBBAction 的 `specificBuffBB` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RemoveRootTileFromBB, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RemoveRootTileFromBBAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+RemoveTileBindingGlobalBuff, Assembly-CSharp 的严格 Action 数据。
 */
export const RemoveTileBindingGlobalBuffActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+RemoveTileBindingGlobalBuff, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** RemoveTileBindingGlobalBuffAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("RemoveTileBindingGlobalBuffAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** RemoveTileBindingGlobalBuffAction 的 `abilitySource` 配置字段；准确战斗语义待确认。 */
    "_abilitySource": z.literal("SOURCE").describe("RemoveTileBindingGlobalBuffAction 的 `abilitySource` 配置字段；准确战斗语义待确认。"),
    /** RemoveTileBindingGlobalBuffAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffKey": z.string().describe("RemoveTileBindingGlobalBuffAction 的 `globalBuffKey` 配置字段；准确战斗语义待确认。"),
    /** RemoveTileBindingGlobalBuffAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。 */
    "_globalBuffPrefabKey": z.string().describe("RemoveTileBindingGlobalBuffAction 的 `globalBuffPrefabKey` 配置字段；准确战斗语义待确认。"),
    /** RemoveTileBindingGlobalBuffAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。 */
    "_selectorTarget": z.literal("TARGET").describe("RemoveTileBindingGlobalBuffAction 的 `selectorTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+RemoveTileBindingGlobalBuff, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<RemoveTileBindingGlobalBuffAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionR04Schema = z
  .discriminatedUnion("$type", [RegistTaskUIActionSchema, ReInitEnemySkillCoolDownActionSchema, ReleaseEnemyFromCurrentWaveActionSchema, ReleaseFromBlockerActionSchema, RemainingRatioToAttributeModifierActionSchema, RemoveCostTimerModifierActionSchema, RemoveFearTargetTilesActionSchema, RemoveGameFinishBlockerByKeyActionSchema, RemoveRootTileFromBBActionSchema, RemoveTileBindingGlobalBuffActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionR04>;
