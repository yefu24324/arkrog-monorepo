/**
 * buff_template_data 的 B 组 Action Zod Schema。
 */

import { z } from "zod";

import type { BattleEventCenterEmitPluginEvtAction, BlackboardAddAction, BlackboardModInRangeAction, BleedingDamageIncreasingResetAction, BleedingDamagePerSecAction, BlinkNodeAction, BlockDamageAction, BlockElementDamageAction, BossRushMoveCameraAction, BuffAoeTargetForPepeEquipSandboxAction, BattleActionB01 } from "../../../../types/buff-template-data/actions/b/actions-b-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BattleEventCenterEmitPluginEvt, Assembly-CSharp 的严格 Action 数据。
 */
export const BattleEventCenterEmitPluginEvtActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BattleEventCenterEmitPluginEvt, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BattleEventCenterEmitPluginEvtAction 的 `eventId` 配置字段；准确战斗语义待确认。 */
    "_eventId": z.number().describe("BattleEventCenterEmitPluginEvtAction 的 `eventId` 配置字段；准确战斗语义待确认。"),
    /** BattleEventCenterEmitPluginEvtAction 的 `floatVal` 配置字段；准确战斗语义待确认。 */
    "_floatVal": z.number().describe("BattleEventCenterEmitPluginEvtAction 的 `floatVal` 配置字段；准确战斗语义待确认。"),
    /** BattleEventCenterEmitPluginEvtAction 的 `intVal` 配置字段；准确战斗语义待确认。 */
    "_intVal": z.number().describe("BattleEventCenterEmitPluginEvtAction 的 `intVal` 配置字段；准确战斗语义待确认。"),
    /** BattleEventCenterEmitPluginEvtAction 的 `strVal` 配置字段；准确战斗语义待确认。 */
    "_strVal": z.null().describe("BattleEventCenterEmitPluginEvtAction 的 `strVal` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BattleEventCenterEmitPluginEvt, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BattleEventCenterEmitPluginEvtAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BlackboardAdd, Assembly-CSharp 的严格 Action 数据。
 */
export const BlackboardAddActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BlackboardAdd, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BlackboardAddAction 的 `addition` 配置字段；准确战斗语义待确认。 */
    "_addition": z.number().describe("BlackboardAddAction 的 `addition` 配置字段；准确战斗语义待确认。"),
    /** BlackboardAddAction 的 `additionKey` 配置字段；准确战斗语义待确认。 */
    "_additionKey": z.union([
                          z.null(),
                          z.string(),
                        ]).describe("BlackboardAddAction 的 `additionKey` 配置字段；准确战斗语义待确认。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** BlackboardAddAction 的 `isFloat` 配置字段；准确战斗语义待确认。 */
    "_isFloat": z.boolean().describe("BlackboardAddAction 的 `isFloat` 配置字段；准确战斗语义待确认。"),
    /** BlackboardAddAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
    "_outputKey": z.union([
                        z.null(),
                        z.string(),
                      ]).describe("BlackboardAddAction 的 `outputKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BlackboardAdd, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BlackboardAddAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BlackboardModInRange, Assembly-CSharp 的严格 Action 数据。
 */
export const BlackboardModInRangeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BlackboardModInRange, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BlackboardModInRangeAction 的 `inputKey` 配置字段；准确战斗语义待确认。 */
    "_inputKey": z.string().describe("BlackboardModInRangeAction 的 `inputKey` 配置字段；准确战斗语义待确认。"),
    /** BlackboardModInRangeAction 的 `outputKey` 配置字段；准确战斗语义待确认。 */
    "_outputKey": z.string().describe("BlackboardModInRangeAction 的 `outputKey` 配置字段；准确战斗语义待确认。"),
    /** BlackboardModInRangeAction 的 `range` 配置字段；准确战斗语义待确认。 */
    "_range": z.number().describe("BlackboardModInRangeAction 的 `range` 配置字段；准确战斗语义待确认。"),
    /** BlackboardModInRangeAction 的 `rangeKey` 配置字段；准确战斗语义待确认。 */
    "_rangeKey": z.null().describe("BlackboardModInRangeAction 的 `rangeKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BlackboardModInRange, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BlackboardModInRangeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BleedingDamageIncreasingReset, Assembly-CSharp 的严格 Action 数据。
 */
export const BleedingDamageIncreasingResetActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BleedingDamageIncreasingReset, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BleedingDamageIncreasingReset, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BleedingDamageIncreasingResetAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BleedingDamagePerSec, Assembly-CSharp 的严格 Action 数据。
 */
export const BleedingDamagePerSecActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BleedingDamagePerSec, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BleedingDamagePerSecAction 的 `attackType` 配置字段；准确战斗语义待确认。 */
    "_attackType": z.enum(["BUFF","NORMAL"]).describe("BleedingDamagePerSecAction 的 `attackType` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `baseDamageKey` 配置字段；准确战斗语义待确认。 */
    "_baseDamageKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("BleedingDamagePerSecAction 的 `baseDamageKey` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `damageKey` 配置字段；准确战斗语义待确认。 */
    "_damageKey": z.string().describe("BleedingDamagePerSecAction 的 `damageKey` 配置字段；准确战斗语义待确认。"),
    /** 本次伤害使用的伤害类型。 */
    "_damageType": z.enum(["MAGICAL","PHYSICAL","PURE"]).describe("本次伤害使用的伤害类型。"),
    /** BleedingDamagePerSecAction 的 `durationToIncreaseKey` 配置字段；准确战斗语义待确认。 */
    "_durationToIncreaseKey": z.string().describe("BleedingDamagePerSecAction 的 `durationToIncreaseKey` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。 */
    "_elementDamageType": z.enum(["FIRE","NONE"]).describe("BleedingDamagePerSecAction 的 `elementDamageType` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。 */
    "_ignoreForSp": z.boolean().describe("BleedingDamagePerSecAction 的 `ignoreForSp` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
    "_isEnvDamage": z.boolean().describe("BleedingDamagePerSecAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `isIncreasingToCap` 配置字段；准确战斗语义待确认。 */
    "_isIncreasingToCap": z.boolean().describe("BleedingDamagePerSecAction 的 `isIncreasingToCap` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `isRatioToMaxHp` 配置字段；准确战斗语义待确认。 */
    "_isRatioToMaxHp": z.boolean().describe("BleedingDamagePerSecAction 的 `isRatioToMaxHp` 配置字段；准确战斗语义待确认。"),
    /** BleedingDamagePerSecAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。 */
    "_skipModifierEvent": z.boolean().describe("BleedingDamagePerSecAction 的 `skipModifierEvent` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BleedingDamagePerSec, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BleedingDamagePerSecAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BlinkNode, Assembly-CSharp 的严格 Action 数据。
 */
export const BlinkNodeActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BlinkNode, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BlinkNodeAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.union([
                       z.null(),
                       z.string(),
                     ]).describe("BlinkNodeAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `distanceCustomKey` 配置字段；准确战斗语义待确认。 */
    "_distanceCustomKey": z.null().describe("BlinkNodeAction 的 `distanceCustomKey` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `failIfTargetGridIsRoot` 配置字段；准确战斗语义待确认。 */
    "_failIfTargetGridIsRoot": z.boolean().describe("BlinkNodeAction 的 `failIfTargetGridIsRoot` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `forceSetDisappear` 配置字段；准确战斗语义待确认。 */
    "_forceSetDisappear": z.boolean().describe("BlinkNodeAction 的 `forceSetDisappear` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `forceToMapPosition` 配置字段；准确战斗语义待确认。 */
    "_forceToMapPosition": z.boolean().describe("BlinkNodeAction 的 `forceToMapPosition` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `newRouteStartPointAsTargetPosition` 配置字段；准确战斗语义待确认。 */
    "_newRouteStartPointAsTargetPosition": z.boolean().describe("BlinkNodeAction 的 `newRouteStartPointAsTargetPosition` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `skipDisappearCheckpoint` 配置字段；准确战斗语义待确认。 */
    "_skipDisappearCheckpoint": z.boolean().describe("BlinkNodeAction 的 `skipDisappearCheckpoint` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `switchState` 配置字段；准确战斗语义待确认。 */
    "_switchState": z.boolean().describe("BlinkNodeAction 的 `switchState` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `toEndIfNoCheckpoint` 配置字段；准确战斗语义待确认。 */
    "_toEndIfNoCheckpoint": z.boolean().describe("BlinkNodeAction 的 `toEndIfNoCheckpoint` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `toMapPosition` 配置字段；准确战斗语义待确认。 */
    "_toMapPosition": z.boolean().describe("BlinkNodeAction 的 `toMapPosition` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `toNextCheckpoint` 配置字段；准确战斗语义待确认。 */
    "_toNextCheckpoint": z.boolean().describe("BlinkNodeAction 的 `toNextCheckpoint` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `useAnimSpeed` 配置字段；准确战斗语义待确认。 */
    "_useAnimSpeed": z.boolean().describe("BlinkNodeAction 的 `useAnimSpeed` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `useNewRouteBeforeBlink` 配置字段；准确战斗语义待确认。 */
    "_useNewRouteBeforeBlink": z.boolean().describe("BlinkNodeAction 的 `useNewRouteBeforeBlink` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `useRowAndColAsWorldPosition` 配置字段；准确战斗语义待确认。 */
    "_useRowAndColAsWorldPosition": z.boolean().describe("BlinkNodeAction 的 `useRowAndColAsWorldPosition` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `useRowAndColOnBlackboard` 配置字段；准确战斗语义待确认。 */
    "_useRowAndColOnBlackboard": z.boolean().describe("BlinkNodeAction 的 `useRowAndColOnBlackboard` 配置字段；准确战斗语义待确认。"),
    /** BlinkNodeAction 的 `withoutSwitchToBlinkState` 配置字段；准确战斗语义待确认。 */
    "_withoutSwitchToBlinkState": z.boolean().describe("BlinkNodeAction 的 `withoutSwitchToBlinkState` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BlinkNode, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BlinkNodeAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BlockDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const BlockDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BlockDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BlockDamageAction 的 `allowNegativeDynamicVar` 配置字段；准确战斗语义待确认。 */
    "_allowNegativeDynamicVar": z.boolean().describe("BlockDamageAction 的 `allowNegativeDynamicVar` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。 */
    "_applyWayFilter": z.string().describe("BlockDamageAction 的 `applyWayFilter` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `damageMask` 配置字段；准确战斗语义待确认。 */
    "_damageMask": z.enum(["ANY_ATTACK","ANY_ATTACK_EXCEPT_ELEMENT","MAGICAL","NONE","PHYSICAL","PHYSICAL_AND_MAGICAL"]).describe("BlockDamageAction 的 `damageMask` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。 */
    "_filterApplyWay": z.boolean().describe("BlockDamageAction 的 `filterApplyWay` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。 */
    "_filterDamageType": z.boolean().describe("BlockDamageAction 的 `filterDamageType` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `showDamageNumber` 配置字段；准确战斗语义待确认。 */
    "_showDamageNumber": z.boolean().describe("BlockDamageAction 的 `showDamageNumber` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `showShieldUI` 配置字段；准确战斗语义待确认。 */
    "_showShieldUI": z.boolean().describe("BlockDamageAction 的 `showShieldUI` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** BlockDamageAction 的 `specifyBlockEffect` 配置字段；准确战斗语义待确认。 */
    "_specifyBlockEffect": z.union([
                                 z.null(),
                                 z.string(),
                               ]).describe("BlockDamageAction 的 `specifyBlockEffect` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `useDynamicVar` 配置字段；准确战斗语义待确认。 */
    "_useDynamicVar": z.boolean().describe("BlockDamageAction 的 `useDynamicVar` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `useFixedValue` 配置字段；准确战斗语义待确认。 */
    "_useFixedValue": z.boolean().describe("BlockDamageAction 的 `useFixedValue` 配置字段；准确战斗语义待确认。"),
    /** BlockDamageAction 的 `useSource` 配置字段；准确战斗语义待确认。 */
    "_useSource": z.boolean().describe("BlockDamageAction 的 `useSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BlockDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BlockDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BlockElementDamage, Assembly-CSharp 的严格 Action 数据。
 */
export const BlockElementDamageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BlockElementDamage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BlockElementDamageAction 的 `shieldBlackboardKey` 配置字段；准确战斗语义待确认。 */
    "_shieldBlackboardKey": z.string().describe("BlockElementDamageAction 的 `shieldBlackboardKey` 配置字段；准确战斗语义待确认。"),
    /** BlockElementDamageAction 的 `shieldByAnotherSource` 配置字段；准确战斗语义待确认。 */
    "_shieldByAnotherSource": z.boolean().describe("BlockElementDamageAction 的 `shieldByAnotherSource` 配置字段；准确战斗语义待确认。"),
    /** BlockElementDamageAction 的 `shieldSource` 配置字段；准确战斗语义待确认。 */
    "_shieldSource": z.enum(["BUFF_SOURCE","TARGET"]).describe("BlockElementDamageAction 的 `shieldSource` 配置字段；准确战斗语义待确认。"),
    /** BlockElementDamageAction 的 `sourceBuffKey` 配置字段；准确战斗语义待确认。 */
    "_sourceBuffKey": z.string().describe("BlockElementDamageAction 的 `sourceBuffKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BlockElementDamage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BlockElementDamageAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BossRushMoveCamera, Assembly-CSharp 的严格 Action 数据。
 */
export const BossRushMoveCameraActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BossRushMoveCamera, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** BossRushMoveCameraAction 的 `useAnotherColEnd` 配置字段；准确战斗语义待确认。 */
    "_useAnotherColEnd": z.boolean().describe("BossRushMoveCameraAction 的 `useAnotherColEnd` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BossRushMoveCamera, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BossRushMoveCameraAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+BuffAoeTargetForPepeEquipSandbox, Assembly-CSharp 的严格 Action 数据。
 */
export const BuffAoeTargetForPepeEquipSandboxActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+BuffAoeTargetForPepeEquipSandbox, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
    "_buff": z.strictObject({
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                   "attributes": z.strictObject({
                                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                         "abnormalAntis": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalComboImmunes": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                         "abnormalCombos": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                         "abnormalFlags": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                         "abnormalImmunes": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                         /** BuffAoeTargetForPepeEquipSandboxAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                         "attributeModifiers": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                       }).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                   "audioSignal": z.null().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                   "blackboard": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                   "buffKey": z.string().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                   "clearAllStackCntWhenTimeUp": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                   "disableOverride": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                   "durationKey": z.null().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                   "enableInitDirectionFromSource": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "firstTriggerInterval": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                   "independentCharacterSource": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                   "isDamageMissable": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                   "isDurableBuff": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                   "isFreezable": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                   "isLevitatable": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                   "isSilenceable": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                   "isStunnable": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                   "lifeTime": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                   "lifeTimeType": z.literal("LIMITED").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                   "loadFromDB": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxStackCnt": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                   "maxValidStackCnt": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                   /** 模板处理战斗事件时使用的优先级。 */
                   "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                   "overrideEffectKey": z.null().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                   "overrideKey": z.null().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                   "overrideOnEventPriority": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                   "overrideType": z.literal("UNIQUE").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                   "priority": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                   "priorityBBKeys": z.array(z.never()).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                   "refreshRemainingTimeWhenStackMax": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                   "statusResistable": z.literal("AUTOMATIC").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                   "stripBlackboardParamsWithBuffKey": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                   "takeSnapshotWhenExtend": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                   /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                   "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                   "triggerCnt": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                   "triggerInterval": z.number().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                   "triggerLifeType": z.literal("IMMEDIATELY").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                   /** BuffAoeTargetForPepeEquipSandboxAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                   "waitFirstTriggerInterval": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                 }).describe("由当前 Action 创建、附加或检查的内嵌 Buff 配置。"),
    /** BuffAoeTargetForPepeEquipSandboxAction 的 `filterTag` 配置字段；准确战斗语义待确认。 */
    "_filterTag": z.string().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `filterTag` 配置字段；准确战斗语义待确认。"),
    /** BuffAoeTargetForPepeEquipSandboxAction 的 `filterType` 配置字段；准确战斗语义待确认。 */
    "_filterType": z.literal("DIST_TO_SOURCE_ASC").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `filterType` 配置字段；准确战斗语义待确认。"),
    /** BuffAoeTargetForPepeEquipSandboxAction 的 `intervalKey` 配置字段；准确战斗语义待确认。 */
    "_intervalKey": z.string().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `intervalKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_SOURCE").describe("Action 读取的来源实体类型。"),
    /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetOptions` 配置字段；准确战斗语义待确认。 */
    "_targetOptions": z.strictObject({
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。 */
                            "abnormalCombo": z.string().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalCombo` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "abnormalFlag": z.literal("STUNNED").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `abnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。 */
                            "checkUnitType": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `checkUnitType` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "containAbnormalFlag": z.literal("STUNNED").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `containAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "containSomeAbnormalFlags": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `containSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。 */
                            "enableAdvancedOptions": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `enableAdvancedOptions` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。 */
                            "excludeAbnormalFlag": z.literal("STUNNED").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `excludeAbnormalFlag` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。 */
                            "excludeSomeAbnormalFlags": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `excludeSomeAbnormalFlags` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreAllyTargetFree": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreAllyTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreHealFree": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetFree": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreTargetFree` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。 */
                            "ignoreTargetSide": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `ignoreTargetSide` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。 */
                            "onlyIgnoreSomeOfTargetFreeCase": z.boolean().describe("BuffAoeTargetForPepeEquipSandboxAction 的 `onlyIgnoreSomeOfTargetFreeCase` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `professionMask` 配置字段；准确战斗语义待确认。 */
                            "professionMask": z.literal("NONE").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `professionMask` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `purposeMask` 配置字段；准确战斗语义待确认。 */
                            "purposeMask": z.literal("NONE").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `purposeMask` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetCategory` 配置字段；准确战斗语义待确认。 */
                            "targetCategory": z.literal("DEFAULT").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `targetCategory` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetMotion` 配置字段；准确战斗语义待确认。 */
                            "targetMotion": z.literal("ALL").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `targetMotion` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `targetSide` 配置字段；准确战斗语义待确认。 */
                            "targetSide": z.literal("ENEMY").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `targetSide` 配置字段；准确战斗语义待确认。"),
                            /** BuffAoeTargetForPepeEquipSandboxAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。 */
                            "unitTypeMask": z.literal("NONE").describe("BuffAoeTargetForPepeEquipSandboxAction 的 `unitTypeMask` 配置字段；准确战斗语义待确认。"),
                          }).describe("BuffAoeTargetForPepeEquipSandboxAction 的 `targetOptions` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+BuffAoeTargetForPepeEquipSandbox, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<BuffAoeTargetForPepeEquipSandboxAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionB01Schema = z
  .discriminatedUnion("$type", [BattleEventCenterEmitPluginEvtActionSchema, BlackboardAddActionSchema, BlackboardModInRangeActionSchema, BleedingDamageIncreasingResetActionSchema, BleedingDamagePerSecActionSchema, BlinkNodeActionSchema, BlockDamageActionSchema, BlockElementDamageActionSchema, BossRushMoveCameraActionSchema, BuffAoeTargetForPepeEquipSandboxActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionB01>;
