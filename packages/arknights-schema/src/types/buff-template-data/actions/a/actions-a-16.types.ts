/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyFixedElementDamage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyFixedElementDamageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyFixedElementDamage, Assembly-CSharp";
  /** ApplyFixedElementDamageAction 的 `allowNoSourceDamage` 配置字段；准确战斗语义待确认。 */
  "_allowNoSourceDamage": boolean;
  /** ApplyFixedElementDamageAction 的 `damageScaleKey` 配置字段；准确战斗语义待确认。 */
  "_damageScaleKey": null | string;
  /** ApplyFixedElementDamageAction 的 `damageValueKey` 配置字段；准确战斗语义待确认。 */
  "_damageValueKey": string;
  /** ApplyFixedElementDamageAction 的 `elementType` 配置字段；准确战斗语义待确认。 */
  "_elementType": "FIRE" | "SANITY" | "WATER";
  /** ApplyFixedElementDamageAction 的 `isEnvDamage` 配置字段；准确战斗语义待确认。 */
  "_isEnvDamage": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyForceOnRogue4DLC2BounceEnemy, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyForceOnRogue4DLC2BounceEnemyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyForceOnRogue4DLC2BounceEnemy, Assembly-CSharp";
  /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `applyForceDirectly` 配置字段；准确战斗语义待确认。 */
  "_applyForceDirectly": boolean;
  /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `directionKey` 配置字段；准确战斗语义待确认。 */
  "_directionKey": string;
  /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** ApplyForceOnRogue4DLC2BounceEnemyAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ApplyHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ApplyHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ApplyHeal, Assembly-CSharp";
  /** ApplyHealAction 的 `isCont` 配置字段；准确战斗语义待确认。 */
  "_isCont": boolean;
  /** ApplyHealAction 的 `isHpRatio` 配置字段；准确战斗语义待确认。 */
  "_isHpRatio": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ArcgachaGainTrap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ArcgachaGainTrapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ArcgachaGainTrap, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAbilityBlackboard, Assembly-CSharp";
  /** AssignAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AssignAbilityBlackboardAction 的 `defaultValue` 配置字段；准确战斗语义待确认。 */
  "_defaultValue": string;
  /** AssignAbilityBlackboardAction 的 `targetBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_targetBlackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignAbilityBlackboardAction 的 `stringValue` 配置字段；准确战斗语义待确认。 */
  "stringValue": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAbilityBlackboardFromOthers, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAbilityBlackboardFromOthersAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAbilityBlackboardFromOthers, Assembly-CSharp";
  /** AssignAbilityBlackboardFromOthersAction 的 `sourceAbilityName` 配置字段；准确战斗语义待确认。 */
  "_sourceAbilityName": string;
  /** AssignAbilityBlackboardFromOthersAction 的 `sourceBBKeys` 配置字段；准确战斗语义待确认。 */
  "_sourceBBKeys": never[];
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "SOURCE";
  /** AssignAbilityBlackboardFromOthersAction 的 `targetAbilityName` 配置字段；准确战斗语义待确认。 */
  "_targetAbilityName": string;
  /** AssignAbilityBlackboardFromOthersAction 的 `targetBBKeys` 配置字段；准确战斗语义待确认。 */
  "_targetBBKeys": never[];
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignAbilityBlackboardFromOthersAction 的 `useSnapshotAbilityAsTarget` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotAbilityAsTarget": boolean;
  /** AssignAbilityBlackboardFromOthersAction 的 `useSourceHost` 配置字段；准确战斗语义待确认。 */
  "_useSourceHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAmmoSkillMaxCountToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAmmoSkillMaxCountToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAmmoSkillMaxCountToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** AssignAmmoSkillMaxCountToBBAction 的 `originalMaxCount` 配置字段；准确战斗语义待确认。 */
  "originalMaxCount": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAmmoSkillRemainingCountToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAmmoSkillRemainingCountToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAmmoSkillRemainingCountToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAphrisRangeInfoToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAphrisRangeInfoToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAphrisRangeInfoToBB, Assembly-CSharp";
  /** AssignAphrisRangeInfoToBBAction 的 `aphrisRangeSource` 配置字段；准确战斗语义待确认。 */
  "_aphrisRangeSource": "BUFF_SOURCE";
  /** AssignAphrisRangeInfoToBBAction 的 `dirChangeTimesBbKey` 配置字段；准确战斗语义待确认。 */
  "_dirChangeTimesBbKey": string;
  /** AssignAphrisRangeInfoToBBAction 的 `extendTimesBbKey` 配置字段；准确战斗语义待确认。 */
  "_extendTimesBbKey": string;
  /** AssignAphrisRangeInfoToBBAction 的 `gridIndexBbKey` 配置字段；准确战斗语义待确认。 */
  "_gridIndexBbKey": null;
  /** AssignAphrisRangeInfoToBBAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AssignAttributeAsDynamicVarToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AssignAttributeAsDynamicVarToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AssignAttributeAsDynamicVarToBB, Assembly-CSharp";
  /** 属性修改器指向的战斗属性。 */
  "_attributeType": "ATK" | "MAX_HP";
  /** AssignAttributeAsDynamicVarToBBAction 的 `scaleVar` 配置字段；准确战斗语义待确认。 */
  "_scaleVar": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA16 = ApplyFixedElementDamageAction | ApplyForceOnRogue4DLC2BounceEnemyAction | ApplyHealAction | ArcgachaGainTrapAction | AssignAbilityBlackboardAction | AssignAbilityBlackboardFromOthersAction | AssignAmmoSkillMaxCountToBBAction | AssignAmmoSkillRemainingCountToBBAction | AssignAphrisRangeInfoToBBAction | AssignAttributeAsDynamicVarToBBAction;
