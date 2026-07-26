/**
 * buff_template_data 的 E 组 Action Zod Schema。
 */

import { z } from "zod";

import type { EnemyLrtsiaCheckDamageBlockedAction, EnemyLrtsiaSummonEnemyOnSurroundTilesAction, EnemyReconstructRouteToBlackboardGridAction, EnemySkipWaitCheckPointAction, EnsureBlackboardDefaultValueAction, EnsureDmgOrHealAction, EnsureFeverSystemAction, EpDamageScaleAction, EqualizeTargetHpRatioAction, EvadeAction, BattleActionE03 } from "../../../../types/buff-template-data/actions/e/actions-e-03.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyLrtsiaCheckDamageBlocked, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyLrtsiaCheckDamageBlockedActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyLrtsiaCheckDamageBlocked, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyLrtsiaCheckDamageBlockedAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("EnemyLrtsiaCheckDamageBlockedAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaCheckDamageBlockedAction 的 `angleKey` 配置字段；准确战斗语义待确认。 */
    "_angleKey": z.string().describe("EnemyLrtsiaCheckDamageBlockedAction 的 `angleKey` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaCheckDamageBlockedAction 的 `blockAngle` 配置字段；准确战斗语义待确认。 */
    "_blockAngle": z.number().describe("EnemyLrtsiaCheckDamageBlockedAction 的 `blockAngle` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaCheckDamageBlockedAction 的 `clockWise` 配置字段；准确战斗语义待确认。 */
    "_clockWise": z.boolean().describe("EnemyLrtsiaCheckDamageBlockedAction 的 `clockWise` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaCheckDamageBlockedAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("EnemyLrtsiaCheckDamageBlockedAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaCheckDamageBlockedAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("MODIFIER_SOURCE").describe("EnemyLrtsiaCheckDamageBlockedAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyLrtsiaCheckDamageBlocked, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyLrtsiaCheckDamageBlockedAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyLrtsiaSummonEnemyOnSurroundTiles, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyLrtsiaSummonEnemyOnSurroundTilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyLrtsiaSummonEnemyOnSurroundTiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `assignTileBBAfterSummon` 配置字段；准确战斗语义待确认。 */
    "_assignTileBBAfterSummon": z.boolean().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `assignTileBBAfterSummon` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `checkCharIdBeforeSummon` 配置字段；准确战斗语义待确认。 */
    "_checkCharIdBeforeSummon": z.boolean().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `checkCharIdBeforeSummon` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `checkTileBBBeforeSummon` 配置字段；准确战斗语义待确认。 */
    "_checkTileBBBeforeSummon": z.boolean().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `checkTileBBBeforeSummon` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `condType` 配置字段；准确战斗语义待确认。 */
    "_condType": z.literal("LE").describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `condType` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.string().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `forbiddenIds` 配置字段；准确战斗语义待确认。 */
    "_forbiddenIds": z.array(z.string()).describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `forbiddenIds` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `host` 配置字段；准确战斗语义待确认。 */
    "_host": z.string().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `host` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("WALK").describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `useSpecialHost` 配置字段；准确战斗语义待确认。 */
    "_useSpecialHost": z.boolean().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `useSpecialHost` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `valueToAssign` 配置字段；准确战斗语义待确认。 */
    "_valueToAssign": z.number().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `valueToAssign` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。 */
    "_valueToCompare": z.number().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `valueToCompare` 配置字段；准确战斗语义待确认。"),
    /** EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `waitTime` 配置字段；准确战斗语义待确认。 */
    "_waitTime": z.number().describe("EnemyLrtsiaSummonEnemyOnSurroundTilesAction 的 `waitTime` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyLrtsiaSummonEnemyOnSurroundTiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyLrtsiaSummonEnemyOnSurroundTilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyReconstructRouteToBlackboardGrid, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyReconstructRouteToBlackboardGridActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyReconstructRouteToBlackboardGrid, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyReconstructRouteToBlackboardGridAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
    "_colKey": z.string().describe("EnemyReconstructRouteToBlackboardGridAction 的 `colKey` 配置字段；准确战斗语义待确认。"),
    /** EnemyReconstructRouteToBlackboardGridAction 的 `randomReachOffset` 配置字段；准确战斗语义待确认。 */
    "_randomReachOffset": z.number().describe("EnemyReconstructRouteToBlackboardGridAction 的 `randomReachOffset` 配置字段；准确战斗语义待确认。"),
    /** EnemyReconstructRouteToBlackboardGridAction 的 `randomReachOffsetKey` 配置字段；准确战斗语义待确认。 */
    "_randomReachOffsetKey": z.string().describe("EnemyReconstructRouteToBlackboardGridAction 的 `randomReachOffsetKey` 配置字段；准确战斗语义待确认。"),
    /** EnemyReconstructRouteToBlackboardGridAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
    "_rowKey": z.string().describe("EnemyReconstructRouteToBlackboardGridAction 的 `rowKey` 配置字段；准确战斗语义待确认。"),
    /** EnemyReconstructRouteToBlackboardGridAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("EnemyReconstructRouteToBlackboardGridAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyReconstructRouteToBlackboardGrid, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyReconstructRouteToBlackboardGridAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemySkipWaitCheckPoint, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemySkipWaitCheckPointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemySkipWaitCheckPoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** EnemySkipWaitCheckPointAction 的 `useSkipInsteadOfSetToZero` 配置字段；准确战斗语义待确认。 */
    "_useSkipInsteadOfSetToZero": z.boolean().describe("EnemySkipWaitCheckPointAction 的 `useSkipInsteadOfSetToZero` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemySkipWaitCheckPoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemySkipWaitCheckPointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnsureBlackboardDefaultValue, Assembly-CSharp 的严格 Action 数据。
 */
export const EnsureBlackboardDefaultValueActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnsureBlackboardDefaultValue, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnsureBlackboardDefaultValueAction 的 `defaultSettings` 配置字段；准确战斗语义待确认。 */
    "_defaultSettings": z.array(z.strictObject({
                              /** 黑板参数键或当前配置项的稳定键。 */
                              "key": z.string().describe("黑板参数键或当前配置项的稳定键。"),
                              /** EnsureBlackboardDefaultValueAction 的 `overrideIfExists` 配置字段；准确战斗语义待确认。 */
                              "overrideIfExists": z.boolean().describe("EnsureBlackboardDefaultValueAction 的 `overrideIfExists` 配置字段；准确战斗语义待确认。"),
                              /** EnsureBlackboardDefaultValueAction 的 `val` 配置字段；准确战斗语义待确认。 */
                              "val": z.number().describe("EnsureBlackboardDefaultValueAction 的 `val` 配置字段；准确战斗语义待确认。"),
                              /** EnsureBlackboardDefaultValueAction 的 `valStr` 配置字段；准确战斗语义待确认。 */
                              "valStr": z.union([
                                                z.null(),
                                                z.string(),
                                              ]).describe("EnsureBlackboardDefaultValueAction 的 `valStr` 配置字段；准确战斗语义待确认。"),
                            })).describe("EnsureBlackboardDefaultValueAction 的 `defaultSettings` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnsureBlackboardDefaultValue, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnsureBlackboardDefaultValueAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnsureDmgOrHeal, Assembly-CSharp 的严格 Action 数据。
 */
export const EnsureDmgOrHealActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnsureDmgOrHeal, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnsureDmgOrHealAction 的 `key` 配置字段；准确战斗语义待确认。 */
    "_key": z.union([
                  z.null(),
                  z.string(),
                ]).describe("EnsureDmgOrHealAction 的 `key` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnsureDmgOrHeal, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnsureDmgOrHealAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnsureFeverSystem, Assembly-CSharp 的严格 Action 数据。
 */
export const EnsureFeverSystemActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnsureFeverSystem, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnsureFeverSystemAction 的 `feverKey` 配置字段；准确战斗语义待确认。 */
    "_feverKey": z.string().describe("EnsureFeverSystemAction 的 `feverKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnsureFeverSystem, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnsureFeverSystemAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EpDamageScale, Assembly-CSharp 的严格 Action 数据。
 */
export const EpDamageScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EpDamageScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EpDamageScaleAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("EpDamageScaleAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** EpDamageScaleAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
    "_elementType": z.enum(["DARK","FIRE","NONE","SANITY"]).describe("EpDamageScaleAction 的 `elementType` 配置字段；准确战斗语义待确认。"),
    /** EpDamageScaleAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("EpDamageScaleAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** EpDamageScaleAction 的 `filterElementType` 配置字段；准确战斗语义待确认。 */
    "_filterElementType": z.boolean().describe("EpDamageScaleAction 的 `filterElementType` 配置字段；准确战斗语义待确认。"),
    /** EpDamageScaleAction 的 `isOneMinus` 配置字段；准确战斗语义待确认。 */
    "_isOneMinus": z.boolean().describe("EpDamageScaleAction 的 `isOneMinus` 配置字段；准确战斗语义待确认。"),
    /** EpDamageScaleAction 的 `isStackable` 配置字段；准确战斗语义待确认。 */
    "_isStackable": z.boolean().describe("EpDamageScaleAction 的 `isStackable` 配置字段；准确战斗语义待确认。"),
    /** EpDamageScaleAction 的 `isValidStackCnt` 配置字段；准确战斗语义待确认。 */
    "_isValidStackCnt": z.boolean().describe("EpDamageScaleAction 的 `isValidStackCnt` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EpDamageScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EpDamageScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EqualizeTargetHpRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const EqualizeTargetHpRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EqualizeTargetHpRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EqualizeTargetHpRatioAction 的 `hpRatio` 配置字段；准确战斗语义待确认。 */
    "_hpRatio": z.number().describe("EqualizeTargetHpRatioAction 的 `hpRatio` 配置字段；准确战斗语义待确认。"),
    /** EqualizeTargetHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("EqualizeTargetHpRatioAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
    /** EqualizeTargetHpRatioAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("EqualizeTargetHpRatioAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** EqualizeTargetHpRatioAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.enum(["BUFF_OWNER","TARGET"]).describe("EqualizeTargetHpRatioAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** EqualizeTargetHpRatioAction 的 `useSourceHpRatio` 配置字段；准确战斗语义待确认。 */
    "_useSourceHpRatio": z.boolean().describe("EqualizeTargetHpRatioAction 的 `useSourceHpRatio` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EqualizeTargetHpRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EqualizeTargetHpRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Evade, Assembly-CSharp 的严格 Action 数据。
 */
export const EvadeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Evade, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EvadeAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("EvadeAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** EvadeAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.enum(["ANY_ATTACK","ANY_ATTACK_EXCEPT_ELEMENT","MAGICAL","PHYSICAL","PHYSICAL_AND_MAGICAL"]).describe("EvadeAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Evade, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EvadeAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionE03Schema = z
  .discriminatedUnion("$type", [EnemyLrtsiaCheckDamageBlockedActionSchema, EnemyLrtsiaSummonEnemyOnSurroundTilesActionSchema, EnemyReconstructRouteToBlackboardGridActionSchema, EnemySkipWaitCheckPointActionSchema, EnsureBlackboardDefaultValueActionSchema, EnsureDmgOrHealActionSchema, EnsureFeverSystemActionSchema, EpDamageScaleActionSchema, EqualizeTargetHpRatioActionSchema, EvadeActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionE03>;
