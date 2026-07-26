/**
 * buff_template_data 的 E 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EmitProjectile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EmitProjectileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EmitProjectile, Assembly-CSharp";
  /** EmitProjectileAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** EmitProjectileAction 的 `abilityOwner` 配置字段；准确战斗语义待确认。 */
  "_abilityOwner": "BUFF_SOURCE" | "SOURCE";
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": null | Array<BattleAction>;
  /** EmitProjectileAction 的 `buffDataList` 配置字段；准确战斗语义待确认。 */
  "_buffDataList": Array<{
                        /** EmitProjectileAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                        "attributes": {
                                             /** EmitProjectileAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": null | never[];
                                             /** EmitProjectileAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": null | never[];
                                             /** EmitProjectileAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": null | never[];
                                             /** EmitProjectileAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": null | never[];
                                             /** EmitProjectileAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": null | Array<string>;
                                             /** EmitProjectileAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": null | Array<{
                                                                            /** 属性修改器指向的战斗属性。 */
                                                                            "attributeType": "ATTACK_SPEED" | "MOVE_SPEED";
                                                                            /** EmitProjectileAction 的 `fetchBaseValueFromSourceEntity` 配置字段；准确战斗语义待确认。 */
                                                                            "fetchBaseValueFromSourceEntity": boolean;
                                                                            /** 属性修改器使用的计算方式，例如加算或乘算。 */
                                                                            "formulaItem": string;
                                                                            /** EmitProjectileAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
                                                                            "loadFromBlackboard": boolean;
                                                                            /** 黑板参数的数值槽。 */
                                                                            "value": number;
                                                                          }>;
                                           };
                        /** EmitProjectileAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                        "audioSignal": null;
                        /** EmitProjectileAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                        "blackboard": never[];
                        /** EmitProjectileAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                        "buffKey": string;
                        /** EmitProjectileAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                        "clearAllStackCntWhenTimeUp": boolean;
                        /** EmitProjectileAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                        "disableOverride": boolean;
                        /** EmitProjectileAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                        "durationKey": null | string;
                        /** EmitProjectileAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                        "enableInitDirectionFromSource": boolean;
                        /** EmitProjectileAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "firstTriggerInterval": number;
                        /** EmitProjectileAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                        "independentCharacterSource": boolean;
                        /** EmitProjectileAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                        "isDamageMissable": boolean;
                        /** EmitProjectileAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                        "isDurableBuff": boolean;
                        /** EmitProjectileAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                        "isFreezable": boolean;
                        /** EmitProjectileAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                        "isLevitatable": boolean;
                        /** EmitProjectileAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                        "isSilenceable": boolean;
                        /** EmitProjectileAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                        "isStunnable": boolean;
                        /** EmitProjectileAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                        "lifeTime": number;
                        /** EmitProjectileAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                        "lifeTimeType": "IMMEDIATELY" | "INFINITY" | "LIMITED";
                        /** EmitProjectileAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                        "loadFromDB": boolean;
                        /** EmitProjectileAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxStackCnt": number;
                        /** EmitProjectileAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxValidStackCnt": number;
                        /** 模板处理战斗事件时使用的优先级。 */
                        "onEventPriority": "DEFAULT";
                        /** EmitProjectileAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                        "overrideEffectKey": null | string;
                        /** EmitProjectileAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                        "overrideKey": null;
                        /** EmitProjectileAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                        "overrideOnEventPriority": boolean;
                        /** EmitProjectileAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                        "overrideType": "DEFAULT" | "UNIQUE";
                        /** EmitProjectileAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                        "priority": number;
                        /** EmitProjectileAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                        "priorityBBKeys": never[];
                        /** EmitProjectileAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                        "refreshRemainingTimeWhenStackMax": boolean;
                        /** EmitProjectileAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                        "statusResistable": "AUTOMATIC";
                        /** EmitProjectileAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                        "stripBlackboardParamsWithBuffKey": boolean;
                        /** EmitProjectileAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                        "takeSnapshotWhenExtend": boolean;
                        /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                        "templateKey": string;
                        /** EmitProjectileAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                        "triggerCnt": number;
                        /** EmitProjectileAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                        "triggerInterval": number;
                        /** EmitProjectileAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                        "triggerLifeType": "IMMEDIATELY" | "INFINITY";
                        /** EmitProjectileAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "waitFirstTriggerInterval": boolean;
                      }>;
  /** EmitProjectileAction 的 `cacheAtkToActions` 配置字段；准确战斗语义待确认。 */
  "_cacheAtkToActions": boolean;
  /** EmitProjectileAction 的 `emitOnRootTile` 配置字段；准确战斗语义待确认。 */
  "_emitOnRootTile": boolean;
  /** EmitProjectileAction 的 `ev` 配置字段；准确战斗语义待确认。 */
  "_ev": string;
  /** EmitProjectileAction 的 `extraBlackboard` 配置字段；准确战斗语义待确认。 */
  "_extraBlackboard": boolean;
  /** EmitProjectileAction 的 `mountPoint` 配置字段；准确战斗语义待确认。 */
  "_mountPoint": string;
  /** EmitProjectileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
  "_overwriteActions": boolean;
  /** EmitProjectileAction 的 `overwriteBlackboard` 配置字段；准确战斗语义待确认。 */
  "_overwriteBlackboard": boolean;
  /** EmitProjectileAction 的 `overwriteBuffs` 配置字段；准确战斗语义待确认。 */
  "_overwriteBuffs": boolean;
  /** EmitProjectileAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
  "_projectileKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** EmitProjectileAction 的 `targetPosFromBB` 配置字段；准确战斗语义待确认。 */
  "_targetPosFromBB": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "TARGET";
  /** EmitProjectileAction 的 `useAbilityFromOther` 配置字段；准确战斗语义待确认。 */
  "_useAbilityFromOther": boolean;
  /** EmitProjectileAction 的 `useAbilityTileSelector` 配置字段；准确战斗语义待确认。 */
  "_useAbilityTileSelector": boolean;
  /** EmitProjectileAction 的 `useProjectileAsTarget` 配置字段；准确战斗语义待确认。 */
  "_useProjectileAsTarget": boolean;
  /** EmitProjectileAction 的 `useSnapshotAbilityWhenFromBuff` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotAbilityWhenFromBuff": boolean;
  /** EmitProjectileAction 的 `useSourceAsProjectileSource` 配置字段；准确战斗语义待确认。 */
  "_useSourceAsProjectileSource": boolean;
  /** EmitProjectileAction 的 `useSourceProjectileAsStartPoint` 配置字段；准确战斗语义待确认。 */
  "_useSourceProjectileAsStartPoint": boolean;
  /** EmitProjectileAction 的 `useTargetAsStartPoint` 配置字段；准确战斗语义待确认。 */
  "_useTargetAsStartPoint": boolean;
  /** EmitProjectileAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRootTile": boolean;
  /** EmitProjectileAction 的 `useTileAsTarget` 配置字段；准确战斗语义待确认。 */
  "_useTileAsTarget": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EmitProjectileFromManagedProjectiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EmitProjectileFromManagedProjectilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EmitProjectileFromManagedProjectiles, Assembly-CSharp";
  /** EmitProjectileFromManagedProjectilesAction 的 `addBbDefaultValue` 配置字段；准确战斗语义待确认。 */
  "_addBbDefaultValue": number;
  /** EmitProjectileFromManagedProjectilesAction 的 `addBbKeyForEachProjectile` 配置字段；准确战斗语义待确认。 */
  "_addBbKeyForEachProjectile": null | string;
  /** EmitProjectileFromManagedProjectilesAction 的 `addBbValue` 配置字段；准确战斗语义待确认。 */
  "_addBbValue": number;
  /** EmitProjectileFromManagedProjectilesAction 的 `copyBb` 配置字段；准确战斗语义待确认。 */
  "_copyBb": boolean;
  /** EmitProjectileFromManagedProjectilesAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
  "_projectileKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** EmitProjectileFromManagedProjectilesAction 的 `useProjectileAsSource` 配置字段；准确战斗语义待确认。 */
  "_useProjectileAsSource": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EmitProjectileOnSourceRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EmitProjectileOnSourceRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EmitProjectileOnSourceRootTile, Assembly-CSharp";
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": null | never[];
  /** EmitProjectileOnSourceRootTileAction 的 `ev` 配置字段；准确战斗语义待确认。 */
  "_ev": string;
  /** EmitProjectileOnSourceRootTileAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
  "_overwriteActions": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EmitProjectileToTileUseSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EmitProjectileToTileUseSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EmitProjectileToTileUseSelector, Assembly-CSharp";
  /** EmitProjectileToTileUseSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": Array<BattleAction>;
  /** EmitProjectileToTileUseSelectorAction 的 `assignBlackboardToProjectile` 配置字段；准确战斗语义待确认。 */
  "_assignBlackboardToProjectile": boolean;
  /** EmitProjectileToTileUseSelectorAction 的 `ev` 配置字段；准确战斗语义待确认。 */
  "_ev": string;
  /** EmitProjectileToTileUseSelectorAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
  "_overwriteActions": boolean;
  /** EmitProjectileToTileUseSelectorAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
  "_projectileKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** EmitProjectileToTileUseSelectorAction 的 `spawnSourceType` 配置字段；准确战斗语义待确认。 */
  "_spawnSourceType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EmitProjectileUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EmitProjectileUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EmitProjectileUseAbilitySelector, Assembly-CSharp";
  /** EmitProjectileUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** EmitProjectileUseAbilitySelectorAction 的 `abilityOwner` 配置字段；准确战斗语义待确认。 */
  "_abilityOwner": "BUFF_SOURCE" | "SOURCE";
  /** 当前节点执行的嵌套 Action 列表；准确触发顺序待确认。 */
  "_actions": null | Array<BattleAction>;
  /** EmitProjectileUseAbilitySelectorAction 的 `buffDataList` 配置字段；准确战斗语义待确认。 */
  "_buffDataList": Array<{
                        /** EmitProjectileUseAbilitySelectorAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                        "attributes": {
                                             /** EmitProjectileUseAbilitySelectorAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                             "abnormalAntis": null;
                                             /** EmitProjectileUseAbilitySelectorAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalComboImmunes": null;
                                             /** EmitProjectileUseAbilitySelectorAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                             "abnormalCombos": null;
                                             /** EmitProjectileUseAbilitySelectorAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                             "abnormalFlags": null;
                                             /** EmitProjectileUseAbilitySelectorAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                             "abnormalImmunes": null;
                                             /** EmitProjectileUseAbilitySelectorAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                             "attributeModifiers": null;
                                           };
                        /** EmitProjectileUseAbilitySelectorAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                        "audioSignal": null;
                        /** EmitProjectileUseAbilitySelectorAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                        "blackboard": never[];
                        /** EmitProjectileUseAbilitySelectorAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                        "buffKey": string;
                        /** EmitProjectileUseAbilitySelectorAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                        "clearAllStackCntWhenTimeUp": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                        "disableOverride": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                        "durationKey": null;
                        /** EmitProjectileUseAbilitySelectorAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                        "enableInitDirectionFromSource": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "firstTriggerInterval": number;
                        /** EmitProjectileUseAbilitySelectorAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                        "independentCharacterSource": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                        "isDamageMissable": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                        "isDurableBuff": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                        "isFreezable": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                        "isLevitatable": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                        "isSilenceable": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                        "isStunnable": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                        "lifeTime": number;
                        /** EmitProjectileUseAbilitySelectorAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                        "lifeTimeType": "IMMEDIATELY" | "LIMITED";
                        /** EmitProjectileUseAbilitySelectorAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                        "loadFromDB": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxStackCnt": number;
                        /** EmitProjectileUseAbilitySelectorAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                        "maxValidStackCnt": number;
                        /** 模板处理战斗事件时使用的优先级。 */
                        "onEventPriority": "DEFAULT";
                        /** EmitProjectileUseAbilitySelectorAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                        "overrideEffectKey": null;
                        /** EmitProjectileUseAbilitySelectorAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                        "overrideKey": null;
                        /** EmitProjectileUseAbilitySelectorAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                        "overrideOnEventPriority": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                        "overrideType": "DEFAULT";
                        /** EmitProjectileUseAbilitySelectorAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                        "priority": number;
                        /** EmitProjectileUseAbilitySelectorAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                        "priorityBBKeys": never[];
                        /** EmitProjectileUseAbilitySelectorAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                        "refreshRemainingTimeWhenStackMax": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                        "statusResistable": "AUTOMATIC";
                        /** EmitProjectileUseAbilitySelectorAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                        "stripBlackboardParamsWithBuffKey": boolean;
                        /** EmitProjectileUseAbilitySelectorAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                        "takeSnapshotWhenExtend": boolean;
                        /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                        "templateKey": string;
                        /** EmitProjectileUseAbilitySelectorAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                        "triggerCnt": number;
                        /** EmitProjectileUseAbilitySelectorAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                        "triggerInterval": number;
                        /** EmitProjectileUseAbilitySelectorAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                        "triggerLifeType": "IMMEDIATELY";
                        /** EmitProjectileUseAbilitySelectorAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                        "waitFirstTriggerInterval": boolean;
                      }>;
  /** EmitProjectileUseAbilitySelectorAction 的 `cacheAtkToActions` 配置字段；准确战斗语义待确认。 */
  "_cacheAtkToActions": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `emitCount` 配置字段；准确战斗语义待确认。 */
  "_emitCount": number;
  /** EmitProjectileUseAbilitySelectorAction 的 `ev` 配置字段；准确战斗语义待确认。 */
  "_ev": string;
  /** EmitProjectileUseAbilitySelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "BUFF_OWNER" | "SOURCE" | "TARGET";
  /** EmitProjectileUseAbilitySelectorAction 的 `extraBlackboard` 配置字段；准确战斗语义待确认。 */
  "_extraBlackboard": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `hookStartPoint` 配置字段；准确战斗语义待确认。 */
  "_hookStartPoint": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `mountPoint` 配置字段；准确战斗语义待确认。 */
  "_mountPoint": string;
  /** EmitProjectileUseAbilitySelectorAction 的 `mountPointGroup` 配置字段；准确战斗语义待确认。 */
  "_mountPointGroup": null | {
                           /** EmitProjectileUseAbilitySelectorAction 的 `loopType` 配置字段；准确战斗语义待确认。 */
                           "loopType": "RANDOM";
                           /** EmitProjectileUseAbilitySelectorAction 的 `mountPoints` 配置字段；准确战斗语义待确认。 */
                           "mountPoints": null | Array<string>;
                         };
  /** EmitProjectileUseAbilitySelectorAction 的 `overwriteActions` 配置字段；准确战斗语义待确认。 */
  "_overwriteActions": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `overwriteBlackboard` 配置字段；准确战斗语义待确认。 */
  "_overwriteBlackboard": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `overwriteBuffs` 配置字段；准确战斗语义待确认。 */
  "_overwriteBuffs": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `projectileKey` 配置字段；准确战斗语义待确认。 */
  "_projectileKey": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** EmitProjectileUseAbilitySelectorAction 的 `startPointTarget` 配置字段；准确战斗语义待确认。 */
  "_startPointTarget": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** EmitProjectileUseAbilitySelectorAction 的 `useAbilityFromOther` 配置字段；准确战斗语义待确认。 */
  "_useAbilityFromOther": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `useMountPointGroup` 配置字段；准确战斗语义待确认。 */
  "_useMountPointGroup": boolean;
  /** EmitProjectileUseAbilitySelectorAction 的 `useProjectilePos` 配置字段；准确战斗语义待确认。 */
  "_useProjectilePos": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Empty, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EmptyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Empty, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnableEffectTransform, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnableEffectTransformAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnableEffectTransform, Assembly-CSharp";
  /** EnableEffectTransformAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
  "_enabled": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnableShadowController, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnableShadowControllerAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnableShadowController, Assembly-CSharp";
  /** EnableShadowControllerAction 的 `enabled` 配置字段；准确战斗语义待确认。 */
  "_enabled": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnableTrait, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnableTraitAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnableTrait, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+EnemyChangeRouteToEndTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface EnemyChangeRouteToEndTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+EnemyChangeRouteToEndTile, Assembly-CSharp";
  /** EnemyChangeRouteToEndTileAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionE01 = EmitProjectileAction | EmitProjectileFromManagedProjectilesAction | EmitProjectileOnSourceRootTileAction | EmitProjectileToTileUseSelectorAction | EmitProjectileUseAbilitySelectorAction | EmptyAction | EnableEffectTransformAction | EnableShadowControllerAction | EnableTraitAction | EnemyChangeRouteToEndTileAction;
