/**
 * buff_template_data 的 A 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ActivePredifinedInst, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ActivePredifinedInstAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ActivePredifinedInst, Assembly-CSharp";
  /** ActivePredifinedInstAction 的 `hiddenCardKey` 配置字段；准确战斗语义待确认。 */
  "_hiddenCardKey": string;
  /** ActivePredifinedInstAction 的 `instAlias` 配置字段；准确战斗语义待确认。 */
  "_instAlias": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddAbilityBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddAbilityBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddAbilityBlackboard, Assembly-CSharp";
  /** AddAbilityBlackboardAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** AddAbilityBlackboardAction 的 `abilityOwnerType` 配置字段；准确战斗语义待确认。 */
  "_abilityOwnerType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** AddAbilityBlackboardAction 的 `addBlackboardKey` 配置字段；准确战斗语义待确认。 */
  "_addBlackboardKey": null | string;
  /** AddAbilityBlackboardAction 的 `blackboardKeys` 配置字段；准确战斗语义待确认。 */
  "_blackboardKeys": string;
  /** AddAbilityBlackboardAction 的 `fromOwnerBlackBoard` 配置字段；准确战斗语义待确认。 */
  "_fromOwnerBlackBoard": boolean;
  /** AddAbilityBlackboardAction 的 `isLimitValue` 配置字段；准确战斗语义待确认。 */
  "_isLimitValue": boolean;
  /** AddAbilityBlackboardAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
  "_isMinus": boolean;
  /** AddAbilityBlackboardAction 的 `isUpdateSelector` 配置字段；准确战斗语义待确认。 */
  "_isUpdateSelector": boolean;
  /** AddAbilityBlackboardAction 的 `limitValue` 配置字段；准确战斗语义待确认。 */
  "_limitValue": number;
  /** AddAbilityBlackboardAction 的 `limitValueKey` 配置字段；准确战斗语义待确认。 */
  "_limitValueKey": null | string;
  /** AddAbilityBlackboardAction 的 `overwrite` 配置字段；准确战斗语义待确认。 */
  "_overwrite": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddAttackRangeAsFearTargetTiles, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddAttackRangeAsFearTargetTilesAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddAttackRangeAsFearTargetTiles, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddAttractToTargetNearestTileUseAbilitySelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddAttractToTargetNearestTileUseAbilitySelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddAttractToTargetNearestTileUseAbilitySelector, Assembly-CSharp";
  /** AddAttractToTargetNearestTileUseAbilitySelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddAttractToTargetRootTile, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddAttractToTargetRootTileAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddAttractToTargetRootTile, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddBuffBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddBuffBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddBuffBlackboard, Assembly-CSharp";
  /** AddBuffBlackboardAction 的 `addition` 配置字段；准确战斗语义待确认。 */
  "_addition": number;
  /** AddBuffBlackboardAction 的 `additionKey` 配置字段；准确战斗语义待确认。 */
  "_additionKey": null | string;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AddBuffBlackboardAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AddBuffBlackboardAction 的 `checkBuffSource` 配置字段；准确战斗语义待确认。 */
  "_checkBuffSource": boolean;
  /** AddBuffBlackboardAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
  "_isMinus": boolean;
  /** AddBuffBlackboardAction 的 `maxValueKey` 配置字段；准确战斗语义待确认。 */
  "_maxValueKey": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** AddBuffBlackboardAction 的 `useCurBuffBBWhenCheckMaxValue` 配置字段；准确战斗语义待确认。 */
  "_useCurBuffBBWhenCheckMaxValue": boolean;
  /** AddBuffBlackboardAction 的 `useCurBuffBBWhenDoAddition` 配置字段；准确战斗语义待确认。 */
  "_useCurBuffBBWhenDoAddition": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddBuffToRandomCharacterWithSpecificBuff, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddBuffToRandomCharacterWithSpecificBuffAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddBuffToRandomCharacterWithSpecificBuff, Assembly-CSharp";
  /** 由当前 Action 创建、附加或检查的内嵌 Buff 配置。 */
  "_buff": {
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `attributes` 配置字段；准确战斗语义待确认。 */
                "attributes": {
                                     /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalAntis` 配置字段；准确战斗语义待确认。 */
                                     "abnormalAntis": null | never[];
                                     /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalComboImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalComboImmunes": null | never[];
                                     /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalCombos` 配置字段；准确战斗语义待确认。 */
                                     "abnormalCombos": null | never[];
                                     /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalFlags` 配置字段；准确战斗语义待确认。 */
                                     "abnormalFlags": null | never[];
                                     /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `abnormalImmunes` 配置字段；准确战斗语义待确认。 */
                                     "abnormalImmunes": null | never[];
                                     /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `attributeModifiers` 配置字段；准确战斗语义待确认。 */
                                     "attributeModifiers": null | never[];
                                   };
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `audioSignal` 配置字段；准确战斗语义待确认。 */
                "audioSignal": null;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `blackboard` 配置字段；准确战斗语义待确认。 */
                "blackboard": never[];
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
                "buffKey": string;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `clearAllStackCntWhenTimeUp` 配置字段；准确战斗语义待确认。 */
                "clearAllStackCntWhenTimeUp": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `disableOverride` 配置字段；准确战斗语义待确认。 */
                "disableOverride": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `durationKey` 配置字段；准确战斗语义待确认。 */
                "durationKey": null;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `enableInitDirectionFromSource` 配置字段；准确战斗语义待确认。 */
                "enableInitDirectionFromSource": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `firstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "firstTriggerInterval": number;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `independentCharacterSource` 配置字段；准确战斗语义待确认。 */
                "independentCharacterSource": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDamageMissable` 配置字段；准确战斗语义待确认。 */
                "isDamageMissable": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDurableBuff` 配置字段；准确战斗语义待确认。 */
                "isDurableBuff": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isFreezable` 配置字段；准确战斗语义待确认。 */
                "isFreezable": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isLevitatable` 配置字段；准确战斗语义待确认。 */
                "isLevitatable": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isSilenceable` 配置字段；准确战斗语义待确认。 */
                "isSilenceable": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isStunnable` 配置字段；准确战斗语义待确认。 */
                "isStunnable": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `lifeTime` 配置字段；准确战斗语义待确认。 */
                "lifeTime": number;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `lifeTimeType` 配置字段；准确战斗语义待确认。 */
                "lifeTimeType": "IMMEDIATELY";
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `loadFromDB` 配置字段；准确战斗语义待确认。 */
                "loadFromDB": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `maxStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxStackCnt": number;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `maxValidStackCnt` 配置字段；准确战斗语义待确认。 */
                "maxValidStackCnt": number;
                /** 模板处理战斗事件时使用的优先级。 */
                "onEventPriority": "DEFAULT";
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideEffectKey` 配置字段；准确战斗语义待确认。 */
                "overrideEffectKey": null;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideKey` 配置字段；准确战斗语义待确认。 */
                "overrideKey": null;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideOnEventPriority` 配置字段；准确战斗语义待确认。 */
                "overrideOnEventPriority": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `overrideType` 配置字段；准确战斗语义待确认。 */
                "overrideType": "DEFAULT";
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `priority` 配置字段；准确战斗语义待确认。 */
                "priority": number;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `priorityBBKeys` 配置字段；准确战斗语义待确认。 */
                "priorityBBKeys": never[];
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `refreshRemainingTimeWhenStackMax` 配置字段；准确战斗语义待确认。 */
                "refreshRemainingTimeWhenStackMax": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `statusResistable` 配置字段；准确战斗语义待确认。 */
                "statusResistable": "AUTOMATIC";
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `stripBlackboardParamsWithBuffKey` 配置字段；准确战斗语义待确认。 */
                "stripBlackboardParamsWithBuffKey": boolean;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `takeSnapshotWhenExtend` 配置字段；准确战斗语义待确认。 */
                "takeSnapshotWhenExtend": boolean;
                /** 战斗模板唯一标识，应与外层动态字典键一致。 */
                "templateKey": string;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerCnt` 配置字段；准确战斗语义待确认。 */
                "triggerCnt": number;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerInterval` 配置字段；准确战斗语义待确认。 */
                "triggerInterval": number;
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `triggerLifeType` 配置字段；准确战斗语义待确认。 */
                "triggerLifeType": "IMMEDIATELY";
                /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `waitFirstTriggerInterval` 配置字段；准确战斗语义待确认。 */
                "waitFirstTriggerInterval": boolean;
              };
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `buffKey` 配置字段；准确战斗语义待确认。 */
  "_buffKey": string;
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeSpecificTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeSpecificTarget": boolean;
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "BUFF_OWNER";
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeToken` 配置字段；准确战斗语义待确认。 */
  "_excludeToken": boolean;
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `excludeTrap` 配置字段；准确战斗语义待确认。 */
  "_excludeTrap": boolean;
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `finishDerivedBuffIfParentFinish` 配置字段；准确战斗语义待确认。 */
  "_finishDerivedBuffIfParentFinish": boolean;
  /** AddBuffToRandomCharacterWithSpecificBuffAction 的 `isDerivedBuff` 配置字段；准确战斗语义待确认。 */
  "_isDerivedBuff": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddCharacterSharedBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddCharacterSharedBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddCharacterSharedBlackboard, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AddCharacterSharedBlackboardAction 的 `isOverwrite` 配置字段；准确战斗语义待确认。 */
  "_isOverwrite": boolean;
  /** AddCharacterSharedBlackboardAction 的 `isStringBB` 配置字段；准确战斗语义待确认。 */
  "_isStringBB": boolean;
  /** AddCharacterSharedBlackboardAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
  /** AddCharacterSharedBlackboardAction 的 `useValueKey` 配置字段；准确战斗语义待确认。 */
  "_useValueKey": boolean;
  /** AddCharacterSharedBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** AddCharacterSharedBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": string;
  /** AddCharacterSharedBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。 */
  "_valueStr": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddCostTimerModifier, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddCostTimerModifierAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddCostTimerModifier, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** AddCostTimerModifierAction 的 `costAddLocked` 配置字段；准确战斗语义待确认。 */
  "_costAddLocked": boolean;
  /** AddCostTimerModifierAction 的 `costAddLockedBB` 配置字段；准确战斗语义待确认。 */
  "_costAddLockedBB": null;
  /** AddCostTimerModifierAction 的 `priority` 配置字段；准确战斗语义待确认。 */
  "_priority": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** AddCostTimerModifierAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+AddEnemyBlockVolume, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface AddEnemyBlockVolumeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+AddEnemyBlockVolume, Assembly-CSharp";
  /** AddEnemyBlockVolumeAction 的 `additionVolume` 配置字段；准确战斗语义待确认。 */
  "_additionVolume": number;
  /** AddEnemyBlockVolumeAction 的 `isMinus` 配置字段；准确战斗语义待确认。 */
  "_isMinus": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionA12 = ActivePredifinedInstAction | AddAbilityBlackboardAction | AddAttackRangeAsFearTargetTilesAction | AddAttractToTargetNearestTileUseAbilitySelectorAction | AddAttractToTargetRootTileAction | AddBuffBlackboardAction | AddBuffToRandomCharacterWithSpecificBuffAction | AddCharacterSharedBlackboardAction | AddCostTimerModifierAction | AddEnemyBlockVolumeAction;
