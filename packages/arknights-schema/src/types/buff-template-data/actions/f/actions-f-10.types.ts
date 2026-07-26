/**
 * buff_template_data 的 F 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FixedValueHeal, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FixedValueHealAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FixedValueHeal, Assembly-CSharp";
  /** FixedValueHealAction 的 `healValueKey` 配置字段；准确战斗语义待确认。 */
  "_healValueKey": string;
  /** FixedValueHealAction 的 `ignoreHealFree` 配置字段；准确战斗语义待确认。 */
  "_ignoreHealFree": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER" | "BUFF_SOURCE" | "SOURCE";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FootballAssignScoreToBB, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FootballAssignScoreToBBAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FootballAssignScoreToBB, Assembly-CSharp";
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** FootballAssignScoreToBBAction 的 `scoreType` 配置字段；准确战斗语义待确认。 */
  "_scoreType": "Behind";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+FootballPlayerForceSearchTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface FootballPlayerForceSearchTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+FootballPlayerForceSearchTarget, Assembly-CSharp";
  /** FootballPlayerForceSearchTargetAction 的 `isActive` 配置字段；准确战斗语义待确认。 */
  "_isActive": boolean;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceCharacterAnimatorFaceFront, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceCharacterAnimatorFaceFrontAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceCharacterAnimatorFaceFront, Assembly-CSharp";
  /** ForceCharacterAnimatorFaceFrontAction 的 `FroceFaceFront` 配置字段；准确战斗语义待确认。 */
  "_FroceFaceFront": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceCharacterFaceDefaultDirection, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceCharacterFaceDefaultDirectionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceCharacterFaceDefaultDirection, Assembly-CSharp";
  /** ForceCharacterFaceDefaultDirectionAction 的 `force` 配置字段；准确战斗语义待确认。 */
  "_force": boolean;
  /** ForceCharacterFaceDefaultDirectionAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceHideSkillRangeToShow, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceHideSkillRangeToShowAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceHideSkillRangeToShow, Assembly-CSharp";
  /** ForceHideSkillRangeToShowAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceRechargeToken, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceRechargeTokenAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceRechargeToken, Assembly-CSharp";
  /** ForceRechargeTokenAction 的 `cntKey` 配置字段；准确战斗语义待确认。 */
  "_cntKey": string;
  /** ForceRechargeTokenAction 的 `rechargeTiming` 配置字段；准确战斗语义待确认。 */
  "_rechargeTiming": "NORMAL" | "ON_FINISH";
  /** ForceRechargeTokenAction 的 `refreshRemainingCnt` 配置字段；准确战斗语义待确认。 */
  "_refreshRemainingCnt": boolean;
  /** ForceRechargeTokenAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceSetBattleSpeedLevel, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceSetBattleSpeedLevelAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceSetBattleSpeedLevel, Assembly-CSharp";
  /** ForceSetBattleSpeedLevelAction 的 `setPause` 配置字段；准确战斗语义待确认。 */
  "_setPause": boolean;
  /** ForceSetBattleSpeedLevelAction 的 `speedLevel` 配置字段；准确战斗语义待确认。 */
  "_speedLevel": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceSetToSourcePosition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceSetToSourcePositionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceSetToSourcePosition, Assembly-CSharp";
  /** ForceSetToSourcePositionAction 的 `disableCurrentStillPull` 配置字段；准确战斗语义待确认。 */
  "_disableCurrentStillPull": boolean;
  /** ForceSetToSourcePositionAction 的 `reassignRoute` 配置字段；准确战斗语义待确认。 */
  "_reassignRoute": boolean;
  /** ForceSetToSourcePositionAction 的 `releaseFromBlocker` 配置字段；准确战斗语义待确认。 */
  "_releaseFromBlocker": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ForceSetToTilePosition, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ForceSetToTilePositionAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ForceSetToTilePosition, Assembly-CSharp";
  /** ForceSetToTilePositionAction 的 `checkTeleportImmune` 配置字段；准确战斗语义待确认。 */
  "_checkTeleportImmune": boolean;
  /** ForceSetToTilePositionAction 的 `colKey` 配置字段；准确战斗语义待确认。 */
  "_colKey": string;
  /** ForceSetToTilePositionAction 的 `disableCurrentStillPull` 配置字段；准确战斗语义待确认。 */
  "_disableCurrentStillPull": boolean;
  /** ForceSetToTilePositionAction 的 `findNearestPassableTile` 配置字段；准确战斗语义待确认。 */
  "_findNearestPassableTile": boolean;
  /** ForceSetToTilePositionAction 的 `randomOffset` 配置字段；准确战斗语义待确认。 */
  "_randomOffset": number;
  /** ForceSetToTilePositionAction 的 `randomOffsetInnerRange` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetInnerRange": number;
  /** ForceSetToTilePositionAction 的 `randomOffsetKey` 配置字段；准确战斗语义待确认。 */
  "_randomOffsetKey": string;
  /** ForceSetToTilePositionAction 的 `releaseFromBlocker` 配置字段；准确战斗语义待确认。 */
  "_releaseFromBlocker": boolean;
  /** ForceSetToTilePositionAction 的 `rowKey` 配置字段；准确战斗语义待确认。 */
  "_rowKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
  /** ForceSetToTilePositionAction 的 `useSnapshotTile` 配置字段；准确战斗语义待确认。 */
  "_useSnapshotTile": boolean;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionF10 = FixedValueHealAction | FootballAssignScoreToBBAction | FootballPlayerForceSearchTargetAction | ForceCharacterAnimatorFaceFrontAction | ForceCharacterFaceDefaultDirectionAction | ForceHideSkillRangeToShowAction | ForceRechargeTokenAction | ForceSetBattleSpeedLevelAction | ForceSetToSourcePositionAction | ForceSetToTilePositionAction;
