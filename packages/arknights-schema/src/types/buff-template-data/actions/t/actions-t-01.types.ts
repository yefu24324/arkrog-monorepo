/**
 * buff_template_data 的 T 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TargetHpRatioToAtkScale, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TargetHpRatioToAtkScaleAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TargetHpRatioToAtkScale, Assembly-CSharp";
  /** TargetHpRatioToAtkScaleAction 的 `startHpRatio` 配置字段；准确战斗语义待确认。 */
  "_startHpRatio": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TrackEnemyInLaterWave, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TrackEnemyInLaterWaveAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TrackEnemyInLaterWave, Assembly-CSharp";
  /** TrackEnemyInLaterWaveAction 的 `nextWaveStride` 配置字段；准确战斗语义待确认。 */
  "_nextWaveStride": number;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TransferRemainingCharacterCntVolume, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TransferRemainingCharacterCntVolumeAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TransferRemainingCharacterCntVolume, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TrapRockflSummonLtrock, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TrapRockflSummonLtrockAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TrapRockflSummonLtrock, Assembly-CSharp";
  /** TrapRockflSummonLtrockAction 的 `alwaysCountAsKilled` 配置字段；准确战斗语义待确认。 */
  "_alwaysCountAsKilled": boolean;
  /** TrapRockflSummonLtrockAction 的 `endPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
  "_endPosOffsetAlongDirection": number;
  /** TrapRockflSummonLtrockAction 的 `enemyKey` 配置字段；准确战斗语义待确认。 */
  "_enemyKey": string;
  /** TrapRockflSummonLtrockAction 的 `midPosOffsetAlongDirection` 配置字段；准确战斗语义待确认。 */
  "_midPosOffsetAlongDirection": number;
  /** TrapRockflSummonLtrockAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "WALK";
  /** TrapRockflSummonLtrockAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "SOURCE";
  /** TrapRockflSummonLtrockAction 的 `unharmful` 配置字段；准确战斗语义待确认。 */
  "_unharmful": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerAbility, Assembly-CSharp";
  /** TriggerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerAbilityAction 的 `castDirectly` 配置字段；准确战斗语义待确认。 */
  "_castDirectly": boolean;
  /** TriggerAbilityAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
  "_checkCanUseAblityFlag": boolean;
  /** TriggerAbilityAction 的 `notInterruptAbilityIfCasting` 配置字段；准确战斗语义待确认。 */
  "_notInterruptAbilityIfCasting": boolean;
  /** TriggerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
  /** TriggerAbilityAction 的 `triggerHostAbility` 配置字段；准确战斗语义待确认。 */
  "_triggerHostAbility": boolean;
  /** TriggerAbilityAction 的 `useCastResult` 配置字段；准确战斗语义待确认。 */
  "_useCastResult": boolean;
  /** TriggerAbilityAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
  "_useFirstActiveAbility": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerAbilityMergeBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerAbilityMergeBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerAbilityMergeBB, Assembly-CSharp";
  /** TriggerAbilityMergeBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerAbilityMergeBBAction 的 `assignBBKeys` 配置字段；准确战斗语义待确认。 */
  "_assignBBKeys": Array<string>;
  /** TriggerAbilityMergeBBAction 的 `castDirectly` 配置字段；准确战斗语义待确认。 */
  "_castDirectly": boolean;
  /** TriggerAbilityMergeBBAction 的 `checkCanUseAblityFlag` 配置字段；准确战斗语义待确认。 */
  "_checkCanUseAblityFlag": boolean;
  /** TriggerAbilityMergeBBAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** TriggerAbilityMergeBBAction 的 `resetSelector` 配置字段；准确战斗语义待确认。 */
  "_resetSelector": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** TriggerAbilityMergeBBAction 的 `useCastResult` 配置字段；准确战斗语义待确认。 */
  "_useCastResult": boolean;
  /** TriggerAbilityMergeBBAction 的 `useFirstActiveAbility` 配置字段；准确战斗语义待确认。 */
  "_useFirstActiveAbility": boolean;
  /** TriggerAbilityMergeBBAction 的 `useOwnerHost` 配置字段；准确战斗语义待确认。 */
  "_useOwnerHost": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerAbilityUseSelector, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerAbilityUseSelectorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerAbilityUseSelector, Assembly-CSharp";
  /** TriggerAbilityUseSelectorAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerAbilityUseSelectorAction 的 `checkCanUseAbilityFlag` 配置字段；准确战斗语义待确认。 */
  "_checkCanUseAbilityFlag": boolean;
  /** TriggerAbilityUseSelectorAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** TriggerAbilityUseSelectorAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "SOURCE" | "TARGET";
  /** TriggerAbilityUseSelectorAction 的 `returnFalseIfNoTarget` 配置字段；准确战斗语义待确认。 */
  "_returnFalseIfNoTarget": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerAbilityUseSelectorMergeBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerAbilityUseSelectorMergeBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerAbilityUseSelectorMergeBB, Assembly-CSharp";
  /** TriggerAbilityUseSelectorMergeBBAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerAbilityUseSelectorMergeBBAction 的 `castDirectly` 配置字段；准确战斗语义待确认。 */
  "_castDirectly": boolean;
  /** TriggerAbilityUseSelectorMergeBBAction 的 `checkAbilityIsReady` 配置字段；准确战斗语义待确认。 */
  "_checkAbilityIsReady": boolean;
  /** TriggerAbilityUseSelectorMergeBBAction 的 `checkSrcCastable` 配置字段；准确战斗语义待确认。 */
  "_checkSrcCastable": boolean;
  /** TriggerAbilityUseSelectorMergeBBAction 的 `excludeTarget` 配置字段；准确战斗语义待确认。 */
  "_excludeTarget": boolean;
  /** TriggerAbilityUseSelectorMergeBBAction 的 `excludeTargetType` 配置字段；准确战斗语义待确认。 */
  "_excludeTargetType": "SOURCE";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerAttachListenerToTileAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerAttachListenerToTileAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerAttachListenerToTileAbility, Assembly-CSharp";
  /** TriggerAttachListenerToTileAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** TriggerAttachListenerToTileAbilityAction 的 `exceptTargetRootTile` 配置字段；准确战斗语义待确认。 */
  "_exceptTargetRootTile": boolean;
  /** TriggerAttachListenerToTileAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER" | "BUFF_SOURCE";
  /** TriggerAttachListenerToTileAbilityAction 的 `rangeId` 配置字段；准确战斗语义待确认。 */
  "_rangeId": string;
  /** TriggerAttachListenerToTileAbilityAction 的 `rangeIdKey` 配置字段；准确战斗语义待确认。 */
  "_rangeIdKey": string;
  /** TriggerAttachListenerToTileAbilityAction 的 `returnWhetherCreateNewTileListener` 配置字段；准确战斗语义待确认。 */
  "_returnWhetherCreateNewTileListener": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MODIFIER_TARGET";
  /** TriggerAttachListenerToTileAbilityAction 的 `useHostAsOwner` 配置字段；准确战斗语义待确认。 */
  "_useHostAsOwner": boolean;
  /** TriggerAttachListenerToTileAbilityAction 的 `useTargetRootTile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRootTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+TriggerAutoSkill, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface TriggerAutoSkillAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+TriggerAutoSkill, Assembly-CSharp";
  /** TriggerAutoSkillAction 的 `checkBeforeTrigger` 配置字段；准确战斗语义待确认。 */
  "_checkBeforeTrigger": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionT01 = TargetHpRatioToAtkScaleAction | TrackEnemyInLaterWaveAction | TransferRemainingCharacterCntVolumeAction | TrapRockflSummonLtrockAction | TriggerAbilityAction | TriggerAbilityMergeBBAction | TriggerAbilityUseSelectorAction | TriggerAbilityUseSelectorMergeBBAction | TriggerAttachListenerToTileAbilityAction | TriggerAutoSkillAction;
