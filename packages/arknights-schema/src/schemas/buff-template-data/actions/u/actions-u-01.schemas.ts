/**
 * buff_template_data 的 U 组 Action Zod Schema。
 */

import { z } from "zod";

import type { UnitSummonApopsisEnemyAction, UnlockHiddenAreaAction, UnregisterMagicCircuitRouteAction, UnregisterMagicCircuitSpAffectAction, UpdateAbilityCoolDownAction, UpdateAttackElementDamageScaleAction, UpdateAttackSelectorByBlackboardAction, UpdateAttributeRawDataAction, UpdateBuffAttributeModifierAction, UpdateCachedBuffToCastTargetsAction, BattleActionU01 } from "../../../../types/buff-template-data/actions/u/actions-u-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UnitSummonApopsisEnemy, Assembly-CSharp 的严格 Action 数据。
 */
export const UnitSummonApopsisEnemyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UnitSummonApopsisEnemy, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UnitSummonApopsisEnemyAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_addBuffToEnemy": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** UnitSummonApopsisEnemyAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
    "_alwaysCountAsKilled": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。"),
    /** UnitSummonApopsisEnemyAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
    "_buffToEnemy": z.union([
                          z.null(),
                          z.strictObject({
                                  /** UnitSummonApopsisEnemyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                                  "attributes": z.strictObject({
                                                          /** UnitSummonApopsisEnemyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalAntis": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                          /** UnitSummonApopsisEnemyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalComboImmunes": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** UnitSummonApopsisEnemyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalCombos": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                          /** UnitSummonApopsisEnemyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalFlags": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                          /** UnitSummonApopsisEnemyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                          "abnormalImmunes": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                          /** UnitSummonApopsisEnemyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                          "attributeModifiers": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                                        }).describe("UnitSummonApopsisEnemyAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                                  "audioSignal": z.null().describe("UnitSummonApopsisEnemyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                                  "blackboard": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                                  "buffKey": z.string().describe("UnitSummonApopsisEnemyAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                                  "clearAllStackCntWhenTimeUp": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                                  "disableOverride": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                                  "durationKey": z.string().describe("UnitSummonApopsisEnemyAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                                  "enableInitDirectionFromSource": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "firstTriggerInterval": z.number().describe("UnitSummonApopsisEnemyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                                  "independentCharacterSource": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                                  "isDamageMissable": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                                  "isDurableBuff": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                                  "isFreezable": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                                  "isLevitatable": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                                  "isSilenceable": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                                  "isStunnable": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                                  "lifeTime": z.number().describe("UnitSummonApopsisEnemyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                                  "lifeTimeType": z.literal("LIMITED").describe("UnitSummonApopsisEnemyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                                  "loadFromDB": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxStackCnt": z.number().describe("UnitSummonApopsisEnemyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                                  "maxValidStackCnt": z.number().describe("UnitSummonApopsisEnemyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                                  /** 模板处理战斗事件时使用的优先级。 */
                                  "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                                  /** UnitSummonApopsisEnemyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideEffectKey": z.null().describe("UnitSummonApopsisEnemyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                                  "overrideKey": z.null().describe("UnitSummonApopsisEnemyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                                  "overrideOnEventPriority": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                                  "overrideType": z.literal("DEFAULT").describe("UnitSummonApopsisEnemyAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                                  "priority": z.number().describe("UnitSummonApopsisEnemyAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                                  "priorityBBKeys": z.array(z.never()).describe("UnitSummonApopsisEnemyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                                  "refreshRemainingTimeWhenStackMax": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                                  "statusResistable": z.literal("AUTOMATIC").describe("UnitSummonApopsisEnemyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                                  "stripBlackboardParamsWithBuffKey": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                                  "takeSnapshotWhenExtend": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                                  /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                                  "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                                  /** UnitSummonApopsisEnemyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                                  "triggerCnt": z.number().describe("UnitSummonApopsisEnemyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "triggerInterval": z.number().describe("UnitSummonApopsisEnemyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                                  "triggerLifeType": z.literal("IMMEDIATELY").describe("UnitSummonApopsisEnemyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                                  /** UnitSummonApopsisEnemyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                                  "waitFirstTriggerInterval": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                                }),
                        ]).describe("UnitSummonApopsisEnemyAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。"),
    /** UnitSummonApopsisEnemyAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
    "_enemyKey": z.string().describe("UnitSummonApopsisEnemyAction 的 `enemyKey` 配置字段；准确战斗语义待确认。"),
    /** UnitSummonApopsisEnemyAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
    "_motionMode": z.literal("FLY").describe("UnitSummonApopsisEnemyAction 的 `motionMode` 配置字段；准确战斗语义待确认。"),
    /** UnitSummonApopsisEnemyAction 的 `source` 配置字段；准确战斗语义待确认。 */
    "_source": z.literal("BUFF_OWNER").describe("UnitSummonApopsisEnemyAction 的 `source` 配置字段；准确战斗语义待确认。"),
    /** UnitSummonApopsisEnemyAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
    "_unharmful": z.boolean().describe("UnitSummonApopsisEnemyAction 的 `unharmful` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UnitSummonApopsisEnemy, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UnitSummonApopsisEnemyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UnlockHiddenArea, Assembly-CSharp 的严格 Action 数据。
 */
export const UnlockHiddenAreaActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UnlockHiddenArea, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UnlockHiddenArea, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UnlockHiddenAreaAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UnregisterMagicCircuitRoute, Assembly-CSharp 的严格 Action 数据。
 */
export const UnregisterMagicCircuitRouteActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UnregisterMagicCircuitRoute, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UnregisterMagicCircuitRoute, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UnregisterMagicCircuitRouteAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UnregisterMagicCircuitSpAffect, Assembly-CSharp 的严格 Action 数据。
 */
export const UnregisterMagicCircuitSpAffectActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UnregisterMagicCircuitSpAffect, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UnregisterMagicCircuitSpAffect, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UnregisterMagicCircuitSpAffectAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateAbilityCoolDown, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateAbilityCoolDownActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateAbilityCoolDown, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateAbilityCoolDownAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("UpdateAbilityCoolDownAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `coolDownKey` 配置字段；准确战斗语义待确认。 */
    "_coolDownKey": z.string().describe("UpdateAbilityCoolDownAction 的 `coolDownKey` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `keepPassedTime` 配置字段；准确战斗语义待确认。 */
    "_keepPassedTime": z.boolean().describe("UpdateAbilityCoolDownAction 的 `keepPassedTime` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `loadAbilityFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadAbilityFromBlackboard": z.boolean().describe("UpdateAbilityCoolDownAction 的 `loadAbilityFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
    "_loadFromBlackboard": z.boolean().describe("UpdateAbilityCoolDownAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `newPeriod` 配置字段；准确战斗语义待确认。 */
    "_newPeriod": z.number().describe("UpdateAbilityCoolDownAction 的 `newPeriod` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("UpdateAbilityCoolDownAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `useAbilityBlackboard` 配置字段；准确战斗语义待确认。 */
    "_useAbilityBlackboard": z.boolean().describe("UpdateAbilityCoolDownAction 的 `useAbilityBlackboard` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `useNewPeriod` 配置字段；准确战斗语义待确认。 */
    "_useNewPeriod": z.boolean().describe("UpdateAbilityCoolDownAction 的 `useNewPeriod` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `useOriginalCooldown` 配置字段；准确战斗语义待确认。 */
    "_useOriginalCooldown": z.boolean().describe("UpdateAbilityCoolDownAction 的 `useOriginalCooldown` 配置字段；准确战斗语义待确认。"),
    /** UpdateAbilityCoolDownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
    "_waitFirstPeriod": z.boolean().describe("UpdateAbilityCoolDownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateAbilityCoolDown, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateAbilityCoolDownAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateAttackElementDamageScale, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateAttackElementDamageScaleActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateAttackElementDamageScale, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateAttackElementDamageScaleAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("UpdateAttackElementDamageScaleAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** UpdateAttackElementDamageScaleAction 的 `epDamageRatioKey` 配置字段；准确战斗语义待确认。 */
    "_epDamageRatioKey": z.string().describe("UpdateAttackElementDamageScaleAction 的 `epDamageRatioKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateAttackElementDamageScale, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateAttackElementDamageScaleAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateAttackSelectorByBlackboard, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateAttackSelectorByBlackboardActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateAttackSelectorByBlackboard, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 读取或写入战斗黑板的参数键。 */
    "_blackboardKey": z.string().describe("读取或写入战斗黑板的参数键。"),
    /** UpdateAttackSelectorByBlackboardAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
    "_modeIndex": z.number().describe("UpdateAttackSelectorByBlackboardAction 的 `modeIndex` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateAttackSelectorByBlackboard, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateAttackSelectorByBlackboardAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateAttributeRawData, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateAttributeRawDataActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateAttributeRawData, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["MAX_HP","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** UpdateAttributeRawDataAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
    "_valueKey": z.string().describe("UpdateAttributeRawDataAction 的 `valueKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateAttributeRawData, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateAttributeRawDataAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateBuffAttributeModifier, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateBuffAttributeModifierActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateBuffAttributeModifier, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 属性修改器指向的战斗属性。 */
    "_attributeType": z.enum(["ATK","DEF","DEF_PENETRATE","EP_RECOVERY_PER_SEC","HP_RECOVERY_PER_SEC","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
    /** UpdateBuffAttributeModifierAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
    "_formulaType": z.enum(["ADDITION","MULTIPLIER"]).describe("UpdateBuffAttributeModifierAction 的 `formulaType` 配置字段；准确战斗语义待确认。"),
    /** UpdateBuffAttributeModifierAction 的 `useBlackboard` 配置字段；准确战斗语义待确认。 */
    "_useBlackboard": z.boolean().describe("UpdateBuffAttributeModifierAction 的 `useBlackboard` 配置字段；准确战斗语义待确认。"),
    /** UpdateBuffAttributeModifierAction 的 `value` 配置字段；准确战斗语义待确认。 */
    "_value": z.number().describe("UpdateBuffAttributeModifierAction 的 `value` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateBuffAttributeModifier, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateBuffAttributeModifierAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+UpdateCachedBuffToCastTargets, Assembly-CSharp 的严格 Action 数据。
 */
export const UpdateCachedBuffToCastTargetsActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+UpdateCachedBuffToCastTargets, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** UpdateCachedBuffToCastTargetsAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("UpdateCachedBuffToCastTargetsAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** UpdateCachedBuffToCastTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("UpdateCachedBuffToCastTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+UpdateCachedBuffToCastTargets, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<UpdateCachedBuffToCastTargetsAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionU01Schema = z
  .discriminatedUnion("$type", [UnitSummonApopsisEnemyActionSchema, UnlockHiddenAreaActionSchema, UnregisterMagicCircuitRouteActionSchema, UnregisterMagicCircuitSpAffectActionSchema, UpdateAbilityCoolDownActionSchema, UpdateAttackElementDamageScaleActionSchema, UpdateAttackSelectorByBlackboardActionSchema, UpdateAttributeRawDataActionSchema, UpdateBuffAttributeModifierActionSchema, UpdateCachedBuffToCastTargetsActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionU01>;
