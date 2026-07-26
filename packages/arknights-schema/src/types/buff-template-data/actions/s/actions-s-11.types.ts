/**
 * buff_template_data 的 S 组 Action 显式类型。
 */

import type { BattleAction } from "../../battle-action.types.js";

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetTilesEnableOverlap, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetTilesEnableOverlapAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetTilesEnableOverlap, Assembly-CSharp";
  /** SetTilesEnableOverlapAction 的 `allTilesExceptRootTile` 配置字段；准确战斗语义待确认。 */
  "_allTilesExceptRootTile": boolean;
  /** SetTilesEnableOverlapAction 的 `isEnable` 配置字段；准确战斗语义待确认。 */
  "_isEnable": boolean;
  /** SetTilesEnableOverlapAction 的 `offsets` 配置字段；准确战斗语义待确认。 */
  "_offsets": null | Array<{
                   /** SetTilesEnableOverlapAction 的 `col` 配置字段；准确战斗语义待确认。 */
                   "col": number;
                   /** SetTilesEnableOverlapAction 的 `row` 配置字段；准确战斗语义待确认。 */
                   "row": number;
                 }>;
  /** SetTilesEnableOverlapAction 的 `onlyRootTile` 配置字段；准确战斗语义待确认。 */
  "_onlyRootTile": boolean;
  /** Action 读取的来源实体类型。 */
  "_sourceType": "BUFF_OWNER";
  /** SetTilesEnableOverlapAction 的 `useOffset` 配置字段；准确战斗语义待确认。 */
  "_useOffset": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetUnitAnimatorTransform, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetUnitAnimatorTransformAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetUnitAnimatorTransform, Assembly-CSharp";
  /** SetUnitAnimatorTransformAction 的 `defaultTransformOffset` 配置字段；准确战斗语义待确认。 */
  "_defaultTransformOffset": {
                                  /** SetUnitAnimatorTransformAction 的 `x` 配置字段；准确战斗语义待确认。 */
                                  "x": number;
                                  /** SetUnitAnimatorTransformAction 的 `y` 配置字段；准确战斗语义待确认。 */
                                  "y": number;
                                  /** SetUnitAnimatorTransformAction 的 `z` 配置字段；准确战斗语义待确认。 */
                                  "z": number;
                                };
  /** SetUnitAnimatorTransformAction 的 `offsetKey` 配置字段；准确战斗语义待确认。 */
  "_offsetKey": string;
  /** SetUnitAnimatorTransformAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
  /** SetUnitAnimatorTransformAction 的 `reset` 配置字段；准确战斗语义待确认。 */
  "_reset": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SetWithdrawCostRecoverRatio, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SetWithdrawCostRecoverRatioAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SetWithdrawCostRecoverRatio, Assembly-CSharp";
  /** SetWithdrawCostRecoverRatioAction 的 `dontLimitMaxWithdrawCost` 配置字段；准确战斗语义待确认。 */
  "_dontLimitMaxWithdrawCost": boolean;
  /** SetWithdrawCostRecoverRatioAction 的 `isReset` 配置字段；准确战斗语义待确认。 */
  "_isReset": boolean;
  /** SetWithdrawCostRecoverRatioAction 的 `ratio` 配置字段；准确战斗语义待确认。 */
  "_ratio": number;
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER" | "TARGET";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ShakeCamera, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ShakeCameraAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ShakeCamera, Assembly-CSharp";
  /** ShakeCameraAction 的 `allowNoSource` 配置字段；准确战斗语义待确认。 */
  "_allowNoSource": boolean;
  /** ShakeCameraAction 的 `duration` 配置字段；准确战斗语义待确认。 */
  "_duration": number;
  /** ShakeCameraAction 的 `randomness` 配置字段；准确战斗语义待确认。 */
  "_randomness": number;
  /** ShakeCameraAction 的 `strength` 配置字段；准确战斗语义待确认。 */
  "_strength": {
                    /** ShakeCameraAction 的 `x` 配置字段；准确战斗语义待确认。 */
                    "x": number;
                    /** ShakeCameraAction 的 `y` 配置字段；准确战斗语义待确认。 */
                    "y": number;
                    /** ShakeCameraAction 的 `z` 配置字段；准确战斗语义待确认。 */
                    "z": number;
                  };
  /** ShakeCameraAction 的 `vibrato` 配置字段；准确战斗语义待确认。 */
  "_vibrato": number;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ShowGameCityUiPluginText, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ShowGameCityUiPluginTextAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ShowGameCityUiPluginText, Assembly-CSharp";
  /** ShowGameCityUiPluginTextAction 的 `indexKey` 配置字段；准确战斗语义待确认。 */
  "_indexKey": string;
  /** ShowGameCityUiPluginTextAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ShowOrHideTokenByKey, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ShowOrHideTokenByKeyAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ShowOrHideTokenByKey, Assembly-CSharp";
  /** ShowOrHideTokenByKeyAction 的 `isShow` 配置字段；准确战斗语义待确认。 */
  "_isShow": boolean;
  /** ShowOrHideTokenByKeyAction 的 `tokenKey` 配置字段；准确战斗语义待确认。 */
  "_tokenKey": null;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ShowRoutePreviewCursor, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ShowRoutePreviewCursorAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ShowRoutePreviewCursor, Assembly-CSharp";
  /** ShowRoutePreviewCursorAction 的 `actionIndex` 配置字段；准确战斗语义待确认。 */
  "_actionIndex": number;
  /** ShowRoutePreviewCursorAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
  "_branchId": string;
  /** ShowRoutePreviewCursorAction 的 `fromCurrentPos` 配置字段；准确战斗语义待确认。 */
  "_fromCurrentPos": boolean;
  /** ShowRoutePreviewCursorAction 的 `overridePreviewEffect` 配置字段；准确战斗语义待确认。 */
  "_overridePreviewEffect": null | string;
  /** ShowRoutePreviewCursorAction 的 `showType` 配置字段；准确战斗语义待确认。 */
  "_showType": "FROM_BRANCH";
  /** Action 作用的目标实体类型。 */
  "_targetType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+ShowToast, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface ShowToastAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+ShowToast, Assembly-CSharp";
  /** ShowToastAction 的 `descriptionUseStringTableKey` 配置字段；准确战斗语义待确认。 */
  "_descriptionUseStringTableKey": boolean;
  /** ShowToastAction 的 `lastTime` 配置字段；准确战斗语义待确认。 */
  "_lastTime": number;
  /** ShowToastAction 的 `priority` 配置字段；准确战斗语义待确认。 */
  "_priority": number;
  /** ShowToastAction 的 `seType` 配置字段；准确战斗语义待确认。 */
  "_seType": "DEFAULT";
  /** ShowToastAction 的 `target` 配置字段；准确战斗语义待确认。 */
  "_target": "BUFF_OWNER";
  /** ShowToastAction 的 `toastKey` 配置字段；准确战斗语义待确认。 */
  "_toastKey": string;
  /** ShowToastAction 的 `toastType` 配置字段；准确战斗语义待确认。 */
  "_toastType": "ENEMY";
  /** ShowToastAction 的 `useTargetDescription` 配置字段；准确战斗语义待确认。 */
  "_useTargetDescription": boolean;
  /** ShowToastAction 的 `useTargetId` 配置字段；准确战斗语义待确认。 */
  "_useTargetId": boolean;
  /** ShowToastAction 的 `useTargetName` 配置字段；准确战斗语义待确认。 */
  "_useTargetName": boolean;
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SkipCursorCheckPoint, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SkipCursorCheckPointAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SkipCursorCheckPoint, Assembly-CSharp";
  /** SkipCursorCheckPointAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
  "_ownerType": "BUFF_OWNER";
}

/**
 * CLR 组件 `Torappu.Battle.Action.Nodes+SkipStage, Assembly-CSharp` 的严格 Action 数据。
 *
 * 字段来自当前完整真实数据；带“待确认”的语义需要结合客户端实现继续核实。
 */
export interface SkipStageAction {
  /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
  "$type": "Torappu.Battle.Action.Nodes+SkipStage, Assembly-CSharp";
}

/** 本模块 Action 分支的局部联合，用于分层构造完整递归联合。 */
export type BattleActionS11 = SetTilesEnableOverlapAction | SetUnitAnimatorTransformAction | SetWithdrawCostRecoverRatioAction | ShakeCameraAction | ShowGameCityUiPluginTextAction | ShowOrHideTokenByKeyAction | ShowRoutePreviewCursorAction | ShowToastAction | SkipCursorCheckPointAction | SkipStageAction;
