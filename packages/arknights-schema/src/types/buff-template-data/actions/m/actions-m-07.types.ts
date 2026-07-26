/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyOverlapSourceIdWithAllCardId, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyOverlapSourceIdWithAllCardIdAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyOverlapSourceIdWithAllCardId, Assembly-CSharp";
  /** ModifyOverlapSourceIdWithAllCardIdAction 的 `exceptTokenAndTrap` 配置字段；准确战斗语义待确认。 */
  "_exceptTokenAndTrap": boolean;
  /** ModifyOverlapSourceIdWithAllCardIdAction 的 `isRemove` 配置字段；准确战斗语义待确认。 */
  "_isRemove": boolean;
  /** ModifyOverlapSourceIdWithAllCardIdAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyOverlapTakeEffect, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyOverlapTakeEffectAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyOverlapTakeEffect, Assembly-CSharp";
  /** ModifyOverlapTakeEffectAction 的 `isOverlapTakeEffect` 配置字段；准确战斗语义待确认。 */
  "_isOverlapTakeEffect": boolean;
  /** ModifyOverlapTakeEffectAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyRuntimeRouteUseBranchRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyRuntimeRouteUseBranchRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyRuntimeRouteUseBranchRoute, Assembly-CSharp";
  /** ModifyRuntimeRouteUseBranchRouteAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "BUFF_SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifySp, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifySpAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifySp, Assembly-CSharp";
  /** ModifySpAction 的 `customModifierKey` 配置字段；准确战斗语义待确认。 */
  "_customModifierKey": string;
  /** ModifySpAction 的 `dontCheckSpType` 配置字段；准确战斗语义待确认。 */
  "_dontCheckSpType": boolean;
  /** ModifySpAction 的 `dontShowSpUI` 配置字段；准确战斗语义待确认。 */
  "_dontShowSpUI": boolean;
  /** ModifySpAction 的 `forceFlag` 配置字段；准确战斗语义待确认。 */
  "_forceFlag": boolean;
  /** ModifySpAction 的 `isMinis` 配置字段；准确战斗语义待确认。 */
  "_isMinis": boolean;
  /** ModifySpAction 的 `modifyByRatio` 配置字段；准确战斗语义待确认。 */
  "_modifyByRatio": boolean;
  /** ModifySpAction 的 `modifyByRatioBasedOnCurSP` 配置字段；准确战斗语义待确认。 */
  "_modifyByRatioBasedOnCurSP": boolean;
  /** ModifySpAction 的 `modifyBySpCost` 配置字段；准确战斗语义待确认。 */
  "_modifyBySpCost": boolean;
  /** ModifySpAction 的 `modifyRatio` 配置字段；准确战斗语义待确认。 */
  "_modifyRatio": number;
  /** ModifySpAction 的 `modifyValue` 配置字段；准确战斗语义待确认。 */
  "_modifyValue": number;
  /** ModifySpAction 的 `spMask` 配置字段；准确战斗语义待确认。 */
  "_spMask": "ALL" | "ATTACK_OR_DAMAGE" | "INCREASE_WHEN_ATTACK" | "INCREASE_WHEN_TAKEN_DAMAGE" | "INCREASE_WITH_TIME" | "NONE";
  /** ModifySpAction 的 `spString` 配置字段；准确战斗语义待确认。 */
  "_spString": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "MAINBUFF_SOURCE" | "MAIN_TARGET" | "MODIFIER_SOURCE" | "MODIFIER_TARGET" | "SOURCE" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifySpData, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifySpDataAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifySpData, Assembly-CSharp";
  /** ModifySpDataAction 的 `assignOldValueKey` 配置字段；准确战斗语义待确认。 */
  "_assignOldValueKey": null | string;
  /** ModifySpDataAction 的 `onlyUpdateSpCost` 配置字段；准确战斗语义待确认。 */
  "_onlyUpdateSpCost": boolean;
  /** ModifySpDataAction 的 `spCostString` 配置字段；准确战斗语义待确认。 */
  "_spCostString": null | string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "BUFF_SOURCE" | "TARGET";
  /** ModifySpDataAction 的 `updateSkillSpCostMin` 配置字段；准确战斗语义待确认。 */
  "_updateSkillSpCostMin": boolean;
  /** ModifySpDataAction 的 `updateSpCostViaMaxRatioKey` 配置字段；准确战斗语义待确认。 */
  "_updateSpCostViaMaxRatioKey": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ModifyTileBlackboard, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ModifyTileBlackboardAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ModifyTileBlackboard, Assembly-CSharp";
  /** ModifyTileBlackboardAction 的 `assignStrValue` 配置字段；准确战斗语义待确认。 */
  "_assignStrValue": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "MAIN_TARGET";
  /** ModifyTileBlackboardAction 的 `useTargetRoottile` 配置字段；准确战斗语义待确认。 */
  "_useTargetRoottile": boolean;
  /** ModifyTileBlackboardAction 的 `value` 配置字段；准确战斗语义待确认。 */
  "_value": number;
  /** ModifyTileBlackboardAction 的 `valueKey` 配置字段；准确战斗语义待确认。 */
  "_valueKey": null;
  /** ModifyTileBlackboardAction 的 `valueStr` 配置字段；准确战斗语义待确认。 */
  "_valueStr": null | string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MoveEnemyToTargetDirPos, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MoveEnemyToTargetDirPosAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MoveEnemyToTargetDirPos, Assembly-CSharp";
  /** MoveEnemyToTargetDirPosAction 的 `motionMode` 配置字段；准确战斗语义待确认。 */
  "_motionMode": "FLY";
  /** MoveEnemyToTargetDirPosAction 的 `randomOffset` 配置字段；准确战斗语义待确认。 */
  "_randomOffset": number;
  /** MoveEnemyToTargetDirPosAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MoveNextLevelBranch, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MoveNextLevelBranchAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MoveNextLevelBranch, Assembly-CSharp";
  /** MoveNextLevelBranchAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": string;
  /** MoveNextLevelBranchAction 的 `isLoop` 配置字段；准确战斗语义待确认。 */
  "_isLoop": boolean;
  /** MoveNextLevelBranchAction 的 `maxValidEnemyCount` 配置字段；准确战斗语义待确认。 */
  "_maxValidEnemyCount": number;
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM07 = ModifyOverlapSourceIdWithAllCardIdAction | ModifyOverlapTakeEffectAction | ModifyRuntimeRouteUseBranchRouteAction | ModifySpAction | ModifySpDataAction | ModifyTileBlackboardAction | MoveEnemyToTargetDirPosAction | MoveNextLevelBranchAction;
