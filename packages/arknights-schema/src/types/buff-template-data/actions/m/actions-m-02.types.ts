/**
 * buff_template_data 的 M 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+Mainline17MoveCameraWithWithdraw, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface Mainline17MoveCameraWithWithdrawAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+Mainline17MoveCameraWithWithdraw, Assembly-CSharp";
  /** Mainline17MoveCameraWithWithdrawAction 的 `delay` 配置字段；准确战斗语义待确认。 */
  "_delay": number;
  /** Mainline17MoveCameraWithWithdrawAction 的 `loadOffsetFromBlackboard` 配置字段；准确战斗语义待确认。 */
  "_loadOffsetFromBlackboard": boolean;
  /** Mainline17MoveCameraWithWithdrawAction 的 `offset` 配置字段；准确战斗语义待确认。 */
  "_offset": {
                  /** Mainline17MoveCameraWithWithdrawAction 的 `x` 配置字段；准确战斗语义待确认。 */
                  "x": number;
                  /** Mainline17MoveCameraWithWithdrawAction 的 `y` 配置字段；准确战斗语义待确认。 */
                  "y": number;
                  /** Mainline17MoveCameraWithWithdrawAction 的 `z` 配置字段；准确战斗语义待确认。 */
                  "z": number;
                };
  /** Mainline17MoveCameraWithWithdrawAction 的 `offsetKey` 配置字段；准确战斗语义待确认。 */
  "_offsetKey": string;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MakeTargetDyingInCooperate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MakeTargetDyingInCooperateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MakeTargetDyingInCooperate, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MakeTargetRebornInCooperate, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MakeTargetRebornInCooperateAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MakeTargetRebornInCooperate, Assembly-CSharp";
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ManageAttachListenerAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ManageAttachListenerAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ManageAttachListenerAbility, Assembly-CSharp";
  /** ManageAttachListenerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ManageAttachListenerAbilityAction 的 `assignCastedTimesToBb` 配置字段；准确战斗语义待确认。 */
  "_assignCastedTimesToBb": boolean;
  /** 读取或写入战斗黑板的参数键。 */
  "_blackboardKey": string;
  /** ManageAttachListenerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** ManageAttachListenerAbilityAction 的 `removeTileListener` 配置字段；准确战斗语义待确认。 */
  "_removeTileListener": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ManageSbell2AttachListenerAbility, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ManageSbell2AttachListenerAbilityAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ManageSbell2AttachListenerAbility, Assembly-CSharp";
  /** ManageSbell2AttachListenerAbilityAction 的 `abilityName` 配置字段；准确战斗语义待确认。 */
  "_abilityName": string;
  /** ManageSbell2AttachListenerAbilityAction 的 `clearS1SnowTileList` 配置字段；准确战斗语义待确认。 */
  "_clearS1SnowTileList": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `isS1RelatedOperate` 配置字段；准确战斗语义待确认。 */
  "_isS1RelatedOperate": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `isS2RelatedOperate` 配置字段；准确战斗语义待确认。 */
  "_isS2RelatedOperate": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `isS3RelatedOperate` 配置字段；准确战斗语义待确认。 */
  "_isS3RelatedOperate": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** ManageSbell2AttachListenerAbilityAction 的 `resetTilesInRangeList` 配置字段；准确战斗语义待确认。 */
  "_resetTilesInRangeList": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `triggerS1SnowForward` 配置字段；准确战斗语义待确认。 */
  "_triggerS1SnowForward": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `triggerS2SnowOutward` 配置字段；准确战斗语义待确认。 */
  "_triggerS2SnowOutward": boolean;
  /** ManageSbell2AttachListenerAbilityAction 的 `tryCreateTokenEndTile` 配置字段；准确战斗语义待确认。 */
  "_tryCreateTokenEndTile": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ManageTileEffectAssociateWithTargetRoute, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ManageTileEffectAssociateWithTargetRouteAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ManageTileEffectAssociateWithTargetRoute, Assembly-CSharp";
  /** ManageTileEffectAssociateWithTargetRouteAction 的 `effectKey` 配置字段；准确战斗语义待确认。 */
  "_effectKey": string;
  /** ManageTileEffectAssociateWithTargetRouteAction 的 `isDelete` 配置字段；准确战斗语义待确认。 */
  "_isDelete": boolean;
  /** ManageTileEffectAssociateWithTargetRouteAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_OWNER";
  /** ManageTileEffectAssociateWithTargetRouteAction 的 `useRouteEndPosition` 配置字段；准确战斗语义待确认。 */
  "_useRouteEndPosition": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarblesApplyForceWithTarget, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarblesApplyForceWithTargetAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarblesApplyForceWithTarget, Assembly-CSharp";
  /** MarblesApplyForceWithTargetAction 的 `changeFaceByDirection` 配置字段；准确战斗语义待确认。 */
  "_changeFaceByDirection": boolean;
  /** MarblesApplyForceWithTargetAction 的 `source` 配置字段；准确战斗语义待确认。 */
  "_source": "BUFF_SOURCE";
  /** MarblesApplyForceWithTargetAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkCurrentHpRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkCurrentHpRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkCurrentHpRatio, Assembly-CSharp";
  /** MarkCurrentHpRatioAction 的 `markInBlackboard` 配置字段；准确战斗语义待确认。 */
  "_markInBlackboard": boolean;
  /** MarkCurrentHpRatioAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER" | "SOURCE";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkDangerAreaFinished, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkDangerAreaFinishedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkDangerAreaFinished, Assembly-CSharp";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+MarkEnemyHeightChanged, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface MarkEnemyHeightChangedAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+MarkEnemyHeightChanged, Assembly-CSharp";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionM02 = Mainline17MoveCameraWithWithdrawAction | MakeTargetDyingInCooperateAction | MakeTargetRebornInCooperateAction | ManageAttachListenerAbilityAction | ManageSbell2AttachListenerAbilityAction | ManageTileEffectAssociateWithTargetRouteAction | MarblesApplyForceWithTargetAction | MarkCurrentHpRatioAction | MarkDangerAreaFinishedAction | MarkEnemyHeightChangedAction;
