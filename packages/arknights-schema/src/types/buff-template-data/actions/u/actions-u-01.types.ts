/**
 * buff_template_data 的 U 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UnitSummonApopsisEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UnitSummonApopsisEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UnitSummonApopsisEnemy, Assembly-CSharp";
  /** UnitSummonApopsisEnemyAction 的 `addBuffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_addBuffToEnemy": boolean;
  /** UnitSummonApopsisEnemyAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** UnitSummonApopsisEnemyAction 的 `buffToEnemy` 配置字段；准确战斗语义待确认。 */
  "_buffToEnemy": null | {
                       /** UnitSummonApopsisEnemyAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                       "attributes": {
                                            /** UnitSummonApopsisEnemyAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                            "abnormalAntis": never[];
                                            /** UnitSummonApopsisEnemyAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalComboImmunes": never[];
                                            /** UnitSummonApopsisEnemyAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                            "abnormalCombos": never[];
                                            /** UnitSummonApopsisEnemyAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                            "abnormalFlags": never[];
                                            /** UnitSummonApopsisEnemyAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                            "abnormalImmunes": never[];
                                            /** UnitSummonApopsisEnemyAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                            "attributeModifiers": never[];
                                          };
                       /** UnitSummonApopsisEnemyAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                       "audioSignal": null;
                       /** UnitSummonApopsisEnemyAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                       "blackboard": never[];
                       /** UnitSummonApopsisEnemyAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                       "buffKey": string;
                       /** UnitSummonApopsisEnemyAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                       "clearAllStackCntWhenTimeUp": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                       "disableOverride": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                       "durationKey": string;
                       /** UnitSummonApopsisEnemyAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                       "enableInitDirectionFromSource": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "firstTriggerInterval": number;
                       /** UnitSummonApopsisEnemyAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                       "independentCharacterSource": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                       "isDamageMissable": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                       "isDurableBuff": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                       "isFreezable": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                       "isLevitatable": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                       "isSilenceable": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                       "isStunnable": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                       "lifeTime": number;
                       /** UnitSummonApopsisEnemyAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                       "lifeTimeType": "LIMITED";
                       /** UnitSummonApopsisEnemyAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                       "loadFromDB": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxStackCnt": number;
                       /** UnitSummonApopsisEnemyAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                       "maxValidStackCnt": number;
                       /** 模板处理战斗事件时使用的优先级。 */
                       "onEventPriority": "DEFAULT";
                       /** UnitSummonApopsisEnemyAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                       "overrideEffectKey": null;
                       /** UnitSummonApopsisEnemyAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                       "overrideKey": null;
                       /** UnitSummonApopsisEnemyAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                       "overrideOnEventPriority": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                       "overrideType": "DEFAULT";
                       /** UnitSummonApopsisEnemyAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                       "priority": number;
                       /** UnitSummonApopsisEnemyAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                       "priorityBBKeys": never[];
                       /** UnitSummonApopsisEnemyAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                       "refreshRemainingTimeWhenStackMax": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                       "statusResistable": "AUTOMATIC";
                       /** UnitSummonApopsisEnemyAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                       "stripBlackboardParamsWithBuffKey": boolean;
                       /** UnitSummonApopsisEnemyAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                       "takeSnapshotWhenExtend": boolean;
                       /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                       "templateKey": string;
                       /** UnitSummonApopsisEnemyAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                       "triggerCnt": number;
                       /** UnitSummonApopsisEnemyAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                       "triggerInterval": number;
                       /** UnitSummonApopsisEnemyAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                       "triggerLifeType": "IMMEDIATELY";
                       /** UnitSummonApopsisEnemyAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                       "waitFirstTriggerInterval": boolean;
                     };
  /** UnitSummonApopsisEnemyAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": string;
  /** UnitSummonApopsisEnemyAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY";
  /** UnitSummonApopsisEnemyAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** UnitSummonApopsisEnemyAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UnlockHiddenArea, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UnlockHiddenAreaAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UnlockHiddenArea, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UnregisterMagicCircuitRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UnregisterMagicCircuitRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UnregisterMagicCircuitRoute, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UnregisterMagicCircuitSpAffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UnregisterMagicCircuitSpAffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UnregisterMagicCircuitSpAffect, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateAbilityCoolDown, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateAbilityCoolDownAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateAbilityCoolDown, Assembly-CSharp";
  /** UpdateAbilityCoolDownAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** UpdateAbilityCoolDownAction 的 `coolDownKey` 配置字段；准确战斗语义待确认。 */
  "_coolDownKey": string;
  /** UpdateAbilityCoolDownAction 的 `keepPassedTime` 配置字段；准确战斗语义待确认。 */
  "_keepPassedTime": boolean;
  /** UpdateAbilityCoolDownAction 的 `loadAbilityFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadAbilityFromBlackboard": boolean;
  /** UpdateAbilityCoolDownAction 的 `loadFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadFromBlackboard": boolean;
  /** UpdateAbilityCoolDownAction 的 `newPeriod` 配置字段；准确战斗语义待确认。 */
  "_newPeriod": number;
  /** UpdateAbilityCoolDownAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** UpdateAbilityCoolDownAction 的 `useAbilityBlackboard` 配置字段；准确战斗语义待确认。 */
  "_useAbilityBlackboard": boolean;
  /** UpdateAbilityCoolDownAction 的 `useNewPeriod` 配置字段；准确战斗语义待确认。 */
  "_useNewPeriod": boolean;
  /** UpdateAbilityCoolDownAction 的 `useOriginalCooldown` 配置字段；准确战斗语义待确认。 */
  "_useOriginalCooldown": boolean;
  /** UpdateAbilityCoolDownAction 的 `waitFirstPeriod` 配置字段；准确战斗语义待确认。 */
  "_waitFirstPeriod": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateAttackElementDamageScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateAttackElementDamageScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateAttackElementDamageScale, Assembly-CSharp";
  /** UpdateAttackElementDamageScaleAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** UpdateAttackElementDamageScaleAction 的 `epDamageRatioKey` 配置字段；准确战斗语义待确认。 */
  "_epDamageRatioKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateAttackSelectorByBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateAttackSelectorByBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateAttackSelectorByBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** UpdateAttackSelectorByBlackboardAction 的 `modeIndex` 配置字段；准确战斗语义待确认。 */
  "_modeIndex": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateAttributeRawData, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateAttributeRawDataAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateAttributeRawData, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "MAX_HP" | "MOVE_SPEED";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** UpdateAttributeRawDataAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateBuffAttributeModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateBuffAttributeModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateBuffAttributeModifier, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "DEF" | "DEF_PENETRATE" | "EP_RECOVERY_PER_SEC" | "HP_RECOVERY_PER_SEC" | "MOVE_SPEED";
  /** UpdateBuffAttributeModifierAction 的 `formulaType` 配置字段；准确战斗语义待确认。 */
  "_formulaType": "ADDITION" | "MULTIPLIER";
  /** UpdateBuffAttributeModifierAction 的 `useBlackboard` 配置字段；准确战斗语义待确认。 */
  "_useBlackboard": boolean;
  /** UpdateBuffAttributeModifierAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+UpdateCachedBuffToCastTargets, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface UpdateCachedBuffToCastTargetsAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+UpdateCachedBuffToCastTargets, Assembly-CSharp";
  /** UpdateCachedBuffToCastTargetsAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** UpdateCachedBuffToCastTargetsAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionU01 = UnitSummonApopsisEnemyAction | UnlockHiddenAreaAction | UnregisterMagicCircuitRouteAction | UnregisterMagicCircuitSpAffectAction | UpdateAbilityCoolDownAction | UpdateAttackElementDamageScaleAction | UpdateAttackSelectorByBlackboardAction | UpdateAttributeRawDataAction | UpdateBuffAttributeModifierAction | UpdateCachedBuffToCastTargetsAction;
