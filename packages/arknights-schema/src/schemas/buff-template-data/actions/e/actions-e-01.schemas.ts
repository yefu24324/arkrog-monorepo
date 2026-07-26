/**
 * buff_template_data 的 E 组 Action Zod Schema。
 */

import { z } from "zod";

import type { EmitProjectileAction, EmitProjectileFromManagedProjectilesAction, EmitProjectileOnSourceRootTileAction, EmitProjectileToTileUseSelectorAction, EmitProjectileUseAbilitySelectorAction, EmptyAction, EnableEffectTransformAction, EnableShadowControllerAction, EnableTraitAction, EnemyChangeRouteToEndTileAction, BattleActionE01 } from "../../../../types/buff-template-data/actions/e/actions-e-01.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectile, Assembly-CSharp 的严格 Action 数据。
 */
export const EmitProjectileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EmitProjectile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EmitProjectileAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("EmitProjectileAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `abilityOwner` 配置字段；准确战斗语义待确认。 */
    "_abilityOwner": z.enum(["BUFF_SOURCE","SOURCE"]).describe("EmitProjectileAction 的 `abilityOwner` 配置字段；准确战斗语义待确认。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.union([
                      z.null(),
                      z.array(BattleActionReferenceSchema),
                    ]).describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** EmitProjectileAction 的 `buffDataList` 配置字段；准确战斗语义待确认。 */
    "_buffDataList": z.array(z.strictObject({
                           /** EmitProjectileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                           "attributes": z.strictObject({
                                                 /** EmitProjectileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalAntis": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("EmitProjectileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalComboImmunes": z.union([
                                                                                   z.null(),
                                                                                   z.array(z.never()),
                                                                                 ]).describe("EmitProjectileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalCombos": z.union([
                                                                             z.null(),
                                                                             z.array(z.never()),
                                                                           ]).describe("EmitProjectileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalFlags": z.union([
                                                                            z.null(),
                                                                            z.array(z.never()),
                                                                          ]).describe("EmitProjectileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalImmunes": z.union([
                                                                              z.null(),
                                                                              z.array(z.string()),
                                                                            ]).describe("EmitProjectileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                 "attributeModifiers": z.union([
                                                                                 z.null(),
                                                                                 z.array(z.strictObject({
                                                                                             /** 属性修改器指向的战斗属性。 */
                                                                                             "attributeType": z.enum(["ATTACK_SPEED","MOVE_SPEED"]).describe("属性修改器指向的战斗属性。"),
                                                                                             /** EmitProjectileAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                                             "fetchBaseValueFromSourceEntity": z.boolean().describe("EmitProjectileAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。"),
                                                                                             /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                                             "formulaItem": z.string().describe("属性修改器使用的计算方式，例如加算或乘算。"),
                                                                                             /** EmitProjectileAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                                             "loadFromBlackboard": z.boolean().describe("EmitProjectileAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。"),
                                                                                             /** 黑板参数的数值槽。 */
                                                                                             "value": z.number().describe("黑板参数的数值槽。"),
                                                                                           })),
                                                                               ]).describe("EmitProjectileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                               }).describe("EmitProjectileAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                           "audioSignal": z.null().describe("EmitProjectileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                           "blackboard": z.array(z.never()).describe("EmitProjectileAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                           "buffKey": z.string().describe("EmitProjectileAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                           "clearAllStackCntWhenTimeUp": z.boolean().describe("EmitProjectileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                           "disableOverride": z.boolean().describe("EmitProjectileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                           "durationKey": z.union([
                                                  z.null(),
                                                  z.string(),
                                                ]).describe("EmitProjectileAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                           "enableInitDirectionFromSource": z.boolean().describe("EmitProjectileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "firstTriggerInterval": z.number().describe("EmitProjectileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                           "independentCharacterSource": z.boolean().describe("EmitProjectileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                           "isDamageMissable": z.boolean().describe("EmitProjectileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                           "isDurableBuff": z.boolean().describe("EmitProjectileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                           "isFreezable": z.boolean().describe("EmitProjectileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                           "isLevitatable": z.boolean().describe("EmitProjectileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                           "isSilenceable": z.boolean().describe("EmitProjectileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                           "isStunnable": z.boolean().describe("EmitProjectileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                           "lifeTime": z.number().describe("EmitProjectileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                           "lifeTimeType": z.enum(["IMMEDIATELY","INFINITY","LIMITED"]).describe("EmitProjectileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                           "loadFromDB": z.boolean().describe("EmitProjectileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxStackCnt": z.number().describe("EmitProjectileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxValidStackCnt": z.number().describe("EmitProjectileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** 模板处理战斗事件时使用的优先级。 */
                           "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                           /** EmitProjectileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                           "overrideEffectKey": z.union([
                                                        z.null(),
                                                        z.string(),
                                                      ]).describe("EmitProjectileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                           "overrideKey": z.null().describe("EmitProjectileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                           "overrideOnEventPriority": z.boolean().describe("EmitProjectileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                           "overrideType": z.enum(["DEFAULT","UNIQUE"]).describe("EmitProjectileAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                           "priority": z.number().describe("EmitProjectileAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                           "priorityBBKeys": z.array(z.never()).describe("EmitProjectileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                           "refreshRemainingTimeWhenStackMax": z.boolean().describe("EmitProjectileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                           "statusResistable": z.literal("AUTOMATIC").describe("EmitProjectileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                           "stripBlackboardParamsWithBuffKey": z.boolean().describe("EmitProjectileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                           "takeSnapshotWhenExtend": z.boolean().describe("EmitProjectileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                           /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                           "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                           /** EmitProjectileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                           "triggerCnt": z.number().describe("EmitProjectileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                           "triggerInterval": z.number().describe("EmitProjectileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                           "triggerLifeType": z.enum(["IMMEDIATELY","INFINITY"]).describe("EmitProjectileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "waitFirstTriggerInterval": z.boolean().describe("EmitProjectileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                         })).describe("EmitProjectileAction 的 `buffDataList` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `cacheAtkToActions` 配置字段；准确战斗语义待确认。 */
    "_cacheAtkToActions": z.boolean().describe("EmitProjectileAction 的 `cacheAtkToActions` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `emitOnRootTile` 配置字段；准确战斗语义待确认。 */
    "_emitOnRootTile": z.boolean().describe("EmitProjectileAction 的 `emitOnRootTile` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `ev` 配置字段；准确战斗语义待确认。 */
    "_ev": z.string().describe("EmitProjectileAction 的 `ev` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `extraBlackboard` 配置字段；准确战斗语义待确认。 */
    "_extraBlackboard": z.boolean().describe("EmitProjectileAction 的 `extraBlackboard` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `mountPoint` 配置字段；准确战斗语义待确认。 */
    "_mountPoint": z.string().describe("EmitProjectileAction 的 `mountPoint` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
    "_overwriteActions": z.boolean().describe("EmitProjectileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `overwriteBlackboard` 配置字段；准确战斗语义待确认。 */
    "_overwriteBlackboard": z.boolean().describe("EmitProjectileAction 的 `overwriteBlackboard` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `overwriteBuffs` 配置字段；准确战斗语义待确认。 */
    "_overwriteBuffs": z.boolean().describe("EmitProjectileAction 的 `overwriteBuffs` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.string().describe("EmitProjectileAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** EmitProjectileAction 的 `targetPosFromBB` 配置字段；准确战斗语义待确认。 */
    "_targetPosFromBB": z.boolean().describe("EmitProjectileAction 的 `targetPosFromBB` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","MAIN_TARGET","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** EmitProjectileAction 的 `useAbilityFromOther` 配置字段；准确战斗语义待确认。 */
    "_useAbilityFromOther": z.boolean().describe("EmitProjectileAction 的 `useAbilityFromOther` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useAbilityTileSelector` 配置字段；准确战斗语义待确认。 */
    "_useAbilityTileSelector": z.boolean().describe("EmitProjectileAction 的 `useAbilityTileSelector` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useProjectileAsTarget` 配置字段；准确战斗语义待确认。 */
    "_useProjectileAsTarget": z.boolean().describe("EmitProjectileAction 的 `useProjectileAsTarget` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useSnapshotAbilityWhenFromBuff` 配置字段；准确战斗语义待确认。 */
    "_useSnapshotAbilityWhenFromBuff": z.boolean().describe("EmitProjectileAction 的 `useSnapshotAbilityWhenFromBuff` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useSourceAsProjectileSource` 配置字段；准确战斗语义待确认。 */
    "_useSourceAsProjectileSource": z.boolean().describe("EmitProjectileAction 的 `useSourceAsProjectileSource` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useSourceProjectileAsStartPoint` 配置字段；准确战斗语义待确认。 */
    "_useSourceProjectileAsStartPoint": z.boolean().describe("EmitProjectileAction 的 `useSourceProjectileAsStartPoint` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useTargetAsStartPoint` 配置字段；准确战斗语义待确认。 */
    "_useTargetAsStartPoint": z.boolean().describe("EmitProjectileAction 的 `useTargetAsStartPoint` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
    "_useTargetRootTile": z.boolean().describe("EmitProjectileAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileAction 的 `useTileAsTarget` 配置字段；准确战斗语义待确认。 */
    "_useTileAsTarget": z.boolean().describe("EmitProjectileAction 的 `useTileAsTarget` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EmitProjectileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileFromManagedProjectiles, Assembly-CSharp 的严格 Action 数据。
 */
export const EmitProjectileFromManagedProjectilesActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EmitProjectileFromManagedProjectiles, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EmitProjectileFromManagedProjectilesAction 的 `addBbDefaultValue` 配置字段；准确战斗语义待确认。 */
    "_addBbDefaultValue": z.number().describe("EmitProjectileFromManagedProjectilesAction 的 `addBbDefaultValue` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileFromManagedProjectilesAction 的 `addBbKeyForEachProjectile` 配置字段；准确战斗语义待确认。 */
    "_addBbKeyForEachProjectile": z.union([
                                        z.null(),
                                        z.string(),
                                      ]).describe("EmitProjectileFromManagedProjectilesAction 的 `addBbKeyForEachProjectile` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileFromManagedProjectilesAction 的 `addBbValue` 配置字段；准确战斗语义待确认。 */
    "_addBbValue": z.number().describe("EmitProjectileFromManagedProjectilesAction 的 `addBbValue` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileFromManagedProjectilesAction 的 `copyBb` 配置字段；准确战斗语义待确认。 */
    "_copyBb": z.boolean().describe("EmitProjectileFromManagedProjectilesAction 的 `copyBb` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileFromManagedProjectilesAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.union([
                            z.null(),
                            z.string(),
                          ]).describe("EmitProjectileFromManagedProjectilesAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
    /** EmitProjectileFromManagedProjectilesAction 的 `useProjectileAsSource` 配置字段；准确战斗语义待确认。 */
    "_useProjectileAsSource": z.boolean().describe("EmitProjectileFromManagedProjectilesAction 的 `useProjectileAsSource` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileFromManagedProjectiles, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EmitProjectileFromManagedProjectilesAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileOnSourceRootTile, Assembly-CSharp 的严格 Action 数据。
 */
export const EmitProjectileOnSourceRootTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EmitProjectileOnSourceRootTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.union([
                      z.null(),
                      z.array(z.never()),
                    ]).describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** EmitProjectileOnSourceRootTileAction 的 `ev` 配置字段；准确战斗语义待确认。 */
    "_ev": z.string().describe("EmitProjectileOnSourceRootTileAction 的 `ev` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileOnSourceRootTileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
    "_overwriteActions": z.boolean().describe("EmitProjectileOnSourceRootTileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","SOURCE"]).describe("Action 读取的来源实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileOnSourceRootTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EmitProjectileOnSourceRootTileAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileToTileUseSelector, Assembly-CSharp 的严格 Action 数据。
 */
export const EmitProjectileToTileUseSelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EmitProjectileToTileUseSelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EmitProjectileToTileUseSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("EmitProjectileToTileUseSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.array(BattleActionReferenceSchema).describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** EmitProjectileToTileUseSelectorAction 的 `assignBlackboardToProjectile` 配置字段；准确战斗语义待确认。 */
    "_assignBlackboardToProjectile": z.boolean().describe("EmitProjectileToTileUseSelectorAction 的 `assignBlackboardToProjectile` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileToTileUseSelectorAction 的 `ev` 配置字段；准确战斗语义待确认。 */
    "_ev": z.string().describe("EmitProjectileToTileUseSelectorAction 的 `ev` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileToTileUseSelectorAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
    "_overwriteActions": z.boolean().describe("EmitProjectileToTileUseSelectorAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileToTileUseSelectorAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.string().describe("EmitProjectileToTileUseSelectorAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** EmitProjectileToTileUseSelectorAction 的 `spawnSourceType` 配置字段；准确战斗语义待确认。 */
    "_spawnSourceType": z.literal("BUFF_SOURCE").describe("EmitProjectileToTileUseSelectorAction 的 `spawnSourceType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileToTileUseSelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EmitProjectileToTileUseSelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。
 */
export const EmitProjectileUseAbilitySelectorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EmitProjectileUseAbilitySelector, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
    "_abilityName": z.string().describe("EmitProjectileUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `abilityOwner` 配置字段；准确战斗语义待确认。 */
    "_abilityOwner": z.enum(["BUFF_SOURCE","SOURCE"]).describe("EmitProjectileUseAbilitySelectorAction 的 `abilityOwner` 配置字段；准确战斗语义待确认。"),
    /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
    "_actions": z.union([
                      z.null(),
                      z.array(BattleActionReferenceSchema),
                    ]).describe("当前节点执行的嵌套 Action 列表；准确触发顺序待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `buffDataList` 配置字段；准确战斗语义待确认。 */
    "_buffDataList": z.array(z.strictObject({
                           /** EmitProjectileUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                           "attributes": z.strictObject({
                                                 /** EmitProjectileUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalAntis": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalComboImmunes": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalCombos": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalFlags": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                                 "abnormalImmunes": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。"),
                                                 /** EmitProjectileUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                                 "attributeModifiers": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。"),
                                               }).describe("EmitProjectileUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                           "audioSignal": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                           "blackboard": z.array(z.never()).describe("EmitProjectileUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                           "buffKey": z.string().describe("EmitProjectileUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                           "clearAllStackCntWhenTimeUp": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                           "disableOverride": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                           "durationKey": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                           "enableInitDirectionFromSource": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "firstTriggerInterval": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                           "independentCharacterSource": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                           "isDamageMissable": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                           "isDurableBuff": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                           "isFreezable": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                           "isLevitatable": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                           "isSilenceable": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                           "isStunnable": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                           "lifeTime": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                           "lifeTimeType": z.enum(["IMMEDIATELY","LIMITED"]).describe("EmitProjectileUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                           "loadFromDB": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxStackCnt": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                           "maxValidStackCnt": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。"),
                           /** 模板处理战斗事件时使用的优先级。 */
                           "onEventPriority": z.literal("DEFAULT").describe("模板处理战斗事件时使用的优先级。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                           "overrideEffectKey": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                           "overrideKey": z.null().describe("EmitProjectileUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                           "overrideOnEventPriority": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                           "overrideType": z.literal("DEFAULT").describe("EmitProjectileUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                           "priority": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                           "priorityBBKeys": z.array(z.never()).describe("EmitProjectileUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                           "refreshRemainingTimeWhenStackMax": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                           "statusResistable": z.literal("AUTOMATIC").describe("EmitProjectileUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                           "stripBlackboardParamsWithBuffKey": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                           "takeSnapshotWhenExtend": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。"),
                           /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                           "templateKey": z.string().describe("战斗模板唯一标识，应与外层动态字典键一致。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                           "triggerCnt": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                           "triggerInterval": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                           "triggerLifeType": z.literal("IMMEDIATELY").describe("EmitProjectileUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。"),
                           /** EmitProjectileUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                           "waitFirstTriggerInterval": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。"),
                         })).describe("EmitProjectileUseAbilitySelectorAction 的 `buffDataList` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `cacheAtkToActions` 配置字段；准确战斗语义待确认。 */
    "_cacheAtkToActions": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `cacheAtkToActions` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `emitCount` 配置字段；准确战斗语义待确认。 */
    "_emitCount": z.number().describe("EmitProjectileUseAbilitySelectorAction 的 `emitCount` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `ev` 配置字段；准确战斗语义待确认。 */
    "_ev": z.string().describe("EmitProjectileUseAbilitySelectorAction 的 `ev` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
    "_excludeTarget": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
    "_excludeTargetType": z.enum(["BUFF_OWNER","SOURCE","TARGET"]).describe("EmitProjectileUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `extraBlackboard` 配置字段；准确战斗语义待确认。 */
    "_extraBlackboard": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `extraBlackboard` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `hookStartPoint` 配置字段；准确战斗语义待确认。 */
    "_hookStartPoint": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `hookStartPoint` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `mountPoint` 配置字段；准确战斗语义待确认。 */
    "_mountPoint": z.string().describe("EmitProjectileUseAbilitySelectorAction 的 `mountPoint` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `mountPointGroup` 配置字段；准确战斗语义待确认。 */
    "_mountPointGroup": z.union([
                              z.null(),
                              z.strictObject({
                                      /** EmitProjectileUseAbilitySelectorAction 的 `loopType` 配置字段；准确战斗语义待确认。 */
                                      "loopType": z.literal("RANDOM").describe("EmitProjectileUseAbilitySelectorAction 的 `loopType` 配置字段；准确战斗语义待确认。"),
                                      /** EmitProjectileUseAbilitySelectorAction 的 `mountPoints` 配置字段；准确战斗语义待确认。 */
                                      "mountPoints": z.union([
                                                               z.null(),
                                                               z.array(z.string()),
                                                             ]).describe("EmitProjectileUseAbilitySelectorAction 的 `mountPoints` 配置字段；准确战斗语义待确认。"),
                                    }),
                            ]).describe("EmitProjectileUseAbilitySelectorAction 的 `mountPointGroup` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
    "_overwriteActions": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `overwriteBlackboard` 配置字段；准确战斗语义待确认。 */
    "_overwriteBlackboard": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `overwriteBlackboard` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `overwriteBuffs` 配置字段；准确战斗语义待确认。 */
    "_overwriteBuffs": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `overwriteBuffs` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
    "_projectileKey": z.string().describe("EmitProjectileUseAbilitySelectorAction 的 `projectileKey` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.enum(["BUFF_OWNER","BUFF_SOURCE","SOURCE"]).describe("Action 读取的来源实体类型。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `startPointTarget` 配置字段；准确战斗语义待确认。 */
    "_startPointTarget": z.literal("BUFF_OWNER").describe("EmitProjectileUseAbilitySelectorAction 的 `startPointTarget` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `useAbilityFromOther` 配置字段；准确战斗语义待确认。 */
    "_useAbilityFromOther": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `useAbilityFromOther` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `useMountPointGroup` 配置字段；准确战斗语义待确认。 */
    "_useMountPointGroup": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `useMountPointGroup` 配置字段；准确战斗语义待确认。"),
    /** EmitProjectileUseAbilitySelectorAction 的 `useProjectilePos` 配置字段；准确战斗语义待确认。 */
    "_useProjectilePos": z.boolean().describe("EmitProjectileUseAbilitySelectorAction 的 `useProjectilePos` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EmitProjectileUseAbilitySelector, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EmitProjectileUseAbilitySelectorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+Empty, Assembly-CSharp 的严格 Action 数据。
 */
export const EmptyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+Empty, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+Empty, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EmptyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnableEffectTransform, Assembly-CSharp 的严格 Action 数据。
 */
export const EnableEffectTransformActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnableEffectTransform, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnableEffectTransformAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
    "_enabled": z.boolean().describe("EnableEffectTransformAction 的 `enabled` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnableEffectTransform, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnableEffectTransformAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnableShadowController, Assembly-CSharp 的严格 Action 数据。
 */
export const EnableShadowControllerActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnableShadowController, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnableShadowControllerAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
    "_enabled": z.boolean().describe("EnableShadowControllerAction 的 `enabled` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","BUFF_SOURCE","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnableShadowController, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnableShadowControllerAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnableTrait, Assembly-CSharp 的严格 Action 数据。
 */
export const EnableTraitActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnableTrait, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnableTrait, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnableTraitAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+EnemyChangeRouteToEndTile, Assembly-CSharp 的严格 Action 数据。
 */
export const EnemyChangeRouteToEndTileActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+EnemyChangeRouteToEndTile, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** EnemyChangeRouteToEndTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("EnemyChangeRouteToEndTileAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+EnemyChangeRouteToEndTile, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<EnemyChangeRouteToEndTileAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionE01Schema = z
  .discriminatedUnion("$type", [EmitProjectileActionSchema, EmitProjectileFromManagedProjectilesActionSchema, EmitProjectileOnSourceRootTileActionSchema, EmitProjectileToTileUseSelectorActionSchema, EmitProjectileUseAbilitySelectorActionSchema, EmptyActionSchema, EnableEffectTransformActionSchema, EnableShadowControllerActionSchema, EnableTraitActionSchema, EnemyChangeRouteToEndTileActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionE01>;
