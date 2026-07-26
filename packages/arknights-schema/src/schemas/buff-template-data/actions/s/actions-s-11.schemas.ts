/**
 * buff_template_data 的 S 组 Action Zod Schema。
 */

import { z } from "zod";

import type { SetTilesEnableOverlapAction, SetUnitAnimatorTransformAction, SetWithdrawCostRecoverRatioAction, ShakeCameraAction, ShowGameCityUiPluginTextAction, ShowOrHideTokenByKeyAction, ShowRoutePreviewCursorAction, ShowToastAction, SkipCursorCheckPointAction, SkipStageAction, BattleActionS11 } from "../../../../types/buff-template-data/actions/s/actions-s-11.types.js";
import { BattleActionReferenceSchema } from "../../battle-action-reference.schemas.js";

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetTilesEnableOverlap, Assembly-CSharp 的严格 Action 数据。
 */
export const SetTilesEnableOverlapActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetTilesEnableOverlap, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetTilesEnableOverlapAction 的 `allTilesExceptRootTile` 配置字段；准确战斗语义待确认。 */
    "_allTilesExceptRootTile": z.boolean().describe("SetTilesEnableOverlapAction 的 `allTilesExceptRootTile` 配置字段；准确战斗语义待确认。"),
    /** SetTilesEnableOverlapAction 的 `isEnable` 配置字段；准确战斗语义待确认。 */
    "_isEnable": z.boolean().describe("SetTilesEnableOverlapAction 的 `isEnable` 配置字段；准确战斗语义待确认。"),
    /** SetTilesEnableOverlapAction 的 `offsets` 配置字段；准确战斗语义待确认。 */
    "_offsets": z.union([
                      z.null(),
                      z.array(z.strictObject({
                              /** SetTilesEnableOverlapAction 的 `col` 配置字段；准确战斗语义待确认。 */
                              "col": z.number().describe("SetTilesEnableOverlapAction 的 `col` 配置字段；准确战斗语义待确认。"),
                              /** SetTilesEnableOverlapAction 的 `row` 配置字段；准确战斗语义待确认。 */
                              "row": z.number().describe("SetTilesEnableOverlapAction 的 `row` 配置字段；准确战斗语义待确认。"),
                            })),
                    ]).describe("SetTilesEnableOverlapAction 的 `offsets` 配置字段；准确战斗语义待确认。"),
    /** SetTilesEnableOverlapAction 的 `onlyRootTile` 配置字段；准确战斗语义待确认。 */
    "_onlyRootTile": z.boolean().describe("SetTilesEnableOverlapAction 的 `onlyRootTile` 配置字段；准确战斗语义待确认。"),
    /** Action 读取的来源实体类型。 */
    "_sourceType": z.literal("BUFF_OWNER").describe("Action 读取的来源实体类型。"),
    /** SetTilesEnableOverlapAction 的 `useOffset` 配置字段；准确战斗语义待确认。 */
    "_useOffset": z.boolean().describe("SetTilesEnableOverlapAction 的 `useOffset` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetTilesEnableOverlap, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetTilesEnableOverlapAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetUnitAnimatorTransform, Assembly-CSharp 的严格 Action 数据。
 */
export const SetUnitAnimatorTransformActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetUnitAnimatorTransform, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetUnitAnimatorTransformAction 的 `defaultTransformOffset` 配置字段；准确战斗语义待确认。 */
    "_defaultTransformOffset": z.strictObject({
                                     /** SetUnitAnimatorTransformAction 的 `x` 配置字段；准确战斗语义待确认。 */
                                     "x": z.number().describe("SetUnitAnimatorTransformAction 的 `x` 配置字段；准确战斗语义待确认。"),
                                     /** SetUnitAnimatorTransformAction 的 `y` 配置字段；准确战斗语义待确认。 */
                                     "y": z.number().describe("SetUnitAnimatorTransformAction 的 `y` 配置字段；准确战斗语义待确认。"),
                                     /** SetUnitAnimatorTransformAction 的 `z` 配置字段；准确战斗语义待确认。 */
                                     "z": z.number().describe("SetUnitAnimatorTransformAction 的 `z` 配置字段；准确战斗语义待确认。"),
                                   }).describe("SetUnitAnimatorTransformAction 的 `defaultTransformOffset` 配置字段；准确战斗语义待确认。"),
    /** SetUnitAnimatorTransformAction 的 `offsetKey` 配置字段；准确战斗语义待确认。 */
    "_offsetKey": z.string().describe("SetUnitAnimatorTransformAction 的 `offsetKey` 配置字段；准确战斗语义待确认。"),
    /** SetUnitAnimatorTransformAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("SetUnitAnimatorTransformAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
    /** SetUnitAnimatorTransformAction 的 `reset` 配置字段；准确战斗语义待确认。 */
    "_reset": z.boolean().describe("SetUnitAnimatorTransformAction 的 `reset` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetUnitAnimatorTransform, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetUnitAnimatorTransformAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SetWithdrawCostRecoverRatio, Assembly-CSharp 的严格 Action 数据。
 */
export const SetWithdrawCostRecoverRatioActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SetWithdrawCostRecoverRatio, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SetWithdrawCostRecoverRatioAction 的 `dontLimitMaxWithdrawCost` 配置字段；准确战斗语义待确认。 */
    "_dontLimitMaxWithdrawCost": z.boolean().describe("SetWithdrawCostRecoverRatioAction 的 `dontLimitMaxWithdrawCost` 配置字段；准确战斗语义待确认。"),
    /** SetWithdrawCostRecoverRatioAction 的 `isReset` 配置字段；准确战斗语义待确认。 */
    "_isReset": z.boolean().describe("SetWithdrawCostRecoverRatioAction 的 `isReset` 配置字段；准确战斗语义待确认。"),
    /** SetWithdrawCostRecoverRatioAction 的 `ratio` 配置字段；准确战斗语义待确认。 */
    "_ratio": z.number().describe("SetWithdrawCostRecoverRatioAction 的 `ratio` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.enum(["BUFF_OWNER","TARGET"]).describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SetWithdrawCostRecoverRatio, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SetWithdrawCostRecoverRatioAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ShakeCamera, Assembly-CSharp 的严格 Action 数据。
 */
export const ShakeCameraActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ShakeCamera, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ShakeCameraAction 的 `allowNoSource` 配置字段；准确战斗语义待确认。 */
    "_allowNoSource": z.boolean().describe("ShakeCameraAction 的 `allowNoSource` 配置字段；准确战斗语义待确认。"),
    /** ShakeCameraAction 的 `duration` 配置字段；准确战斗语义待确认。 */
    "_duration": z.number().describe("ShakeCameraAction 的 `duration` 配置字段；准确战斗语义待确认。"),
    /** ShakeCameraAction 的 `randomness` 配置字段；准确战斗语义待确认。 */
    "_randomness": z.number().describe("ShakeCameraAction 的 `randomness` 配置字段；准确战斗语义待确认。"),
    /** ShakeCameraAction 的 `strength` 配置字段；准确战斗语义待确认。 */
    "_strength": z.strictObject({
                       /** ShakeCameraAction 的 `x` 配置字段；准确战斗语义待确认。 */
                       "x": z.number().describe("ShakeCameraAction 的 `x` 配置字段；准确战斗语义待确认。"),
                       /** ShakeCameraAction 的 `y` 配置字段；准确战斗语义待确认。 */
                       "y": z.number().describe("ShakeCameraAction 的 `y` 配置字段；准确战斗语义待确认。"),
                       /** ShakeCameraAction 的 `z` 配置字段；准确战斗语义待确认。 */
                       "z": z.number().describe("ShakeCameraAction 的 `z` 配置字段；准确战斗语义待确认。"),
                     }).describe("ShakeCameraAction 的 `strength` 配置字段；准确战斗语义待确认。"),
    /** ShakeCameraAction 的 `vibrato` 配置字段；准确战斗语义待确认。 */
    "_vibrato": z.number().describe("ShakeCameraAction 的 `vibrato` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ShakeCamera, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ShakeCameraAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ShowGameCityUiPluginText, Assembly-CSharp 的严格 Action 数据。
 */
export const ShowGameCityUiPluginTextActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ShowGameCityUiPluginText, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ShowGameCityUiPluginTextAction 的 `indexKey` 配置字段；准确战斗语义待确认。 */
    "_indexKey": z.string().describe("ShowGameCityUiPluginTextAction 的 `indexKey` 配置字段；准确战斗语义待确认。"),
    /** ShowGameCityUiPluginTextAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ShowGameCityUiPluginTextAction 的 `target` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ShowGameCityUiPluginText, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ShowGameCityUiPluginTextAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ShowOrHideTokenByKey, Assembly-CSharp 的严格 Action 数据。
 */
export const ShowOrHideTokenByKeyActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ShowOrHideTokenByKey, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ShowOrHideTokenByKeyAction 的 `isShow` 配置字段；准确战斗语义待确认。 */
    "_isShow": z.boolean().describe("ShowOrHideTokenByKeyAction 的 `isShow` 配置字段；准确战斗语义待确认。"),
    /** ShowOrHideTokenByKeyAction 的 `tokenKey` 配置字段；准确战斗语义待确认。 */
    "_tokenKey": z.null().describe("ShowOrHideTokenByKeyAction 的 `tokenKey` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ShowOrHideTokenByKey, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ShowOrHideTokenByKeyAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ShowRoutePreviewCursor, Assembly-CSharp 的严格 Action 数据。
 */
export const ShowRoutePreviewCursorActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ShowRoutePreviewCursor, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ShowRoutePreviewCursorAction 的 `actionIndex` 配置字段；准确战斗语义待确认。 */
    "_actionIndex": z.number().describe("ShowRoutePreviewCursorAction 的 `actionIndex` 配置字段；准确战斗语义待确认。"),
    /** ShowRoutePreviewCursorAction 的 `branchId` 配置字段；准确战斗语义待确认。 */
    "_branchId": z.string().describe("ShowRoutePreviewCursorAction 的 `branchId` 配置字段；准确战斗语义待确认。"),
    /** ShowRoutePreviewCursorAction 的 `fromCurrentPos` 配置字段；准确战斗语义待确认。 */
    "_fromCurrentPos": z.boolean().describe("ShowRoutePreviewCursorAction 的 `fromCurrentPos` 配置字段；准确战斗语义待确认。"),
    /** ShowRoutePreviewCursorAction 的 `overridePreviewEffect` 配置字段；准确战斗语义待确认。 */
    "_overridePreviewEffect": z.union([
                                    z.null(),
                                    z.string(),
                                  ]).describe("ShowRoutePreviewCursorAction 的 `overridePreviewEffect` 配置字段；准确战斗语义待确认。"),
    /** ShowRoutePreviewCursorAction 的 `showType` 配置字段；准确战斗语义待确认。 */
    "_showType": z.literal("FROM_BRANCH").describe("ShowRoutePreviewCursorAction 的 `showType` 配置字段；准确战斗语义待确认。"),
    /** Action 作用的目标实体类型。 */
    "_targetType": z.literal("BUFF_OWNER").describe("Action 作用的目标实体类型。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ShowRoutePreviewCursor, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ShowRoutePreviewCursorAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+ShowToast, Assembly-CSharp 的严格 Action 数据。
 */
export const ShowToastActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+ShowToast, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** ShowToastAction 的 `descriptionUseStringTableKey` 配置字段；准确战斗语义待确认。 */
    "_descriptionUseStringTableKey": z.boolean().describe("ShowToastAction 的 `descriptionUseStringTableKey` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `lastTime` 配置字段；准确战斗语义待确认。 */
    "_lastTime": z.number().describe("ShowToastAction 的 `lastTime` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `priority` 配置字段；准确战斗语义待确认。 */
    "_priority": z.number().describe("ShowToastAction 的 `priority` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `seType` 配置字段；准确战斗语义待确认。 */
    "_seType": z.literal("DEFAULT").describe("ShowToastAction 的 `seType` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `target` 配置字段；准确战斗语义待确认。 */
    "_target": z.literal("BUFF_OWNER").describe("ShowToastAction 的 `target` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `toastKey` 配置字段；准确战斗语义待确认。 */
    "_toastKey": z.string().describe("ShowToastAction 的 `toastKey` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `toastType` 配置字段；准确战斗语义待确认。 */
    "_toastType": z.literal("ENEMY").describe("ShowToastAction 的 `toastType` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `useTargetDescription` 配置字段；准确战斗语义待确认。 */
    "_useTargetDescription": z.boolean().describe("ShowToastAction 的 `useTargetDescription` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `useTargetId` 配置字段；准确战斗语义待确认。 */
    "_useTargetId": z.boolean().describe("ShowToastAction 的 `useTargetId` 配置字段；准确战斗语义待确认。"),
    /** ShowToastAction 的 `useTargetName` 配置字段；准确战斗语义待确认。 */
    "_useTargetName": z.boolean().describe("ShowToastAction 的 `useTargetName` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+ShowToast, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<ShowToastAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SkipCursorCheckPoint, Assembly-CSharp 的严格 Action 数据。
 */
export const SkipCursorCheckPointActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SkipCursorCheckPoint, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
    /** SkipCursorCheckPointAction 的 `ownerType` 配置字段；准确战斗语义待确认。 */
    "_ownerType": z.literal("BUFF_OWNER").describe("SkipCursorCheckPointAction 的 `ownerType` 配置字段；准确战斗语义待确认。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SkipCursorCheckPoint, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SkipCursorCheckPointAction>;

/**
 * CLR 组件 Torappu.Battle.Action.Nodes+SkipStage, Assembly-CSharp 的严格 Action 数据。
 */
export const SkipStageActionSchema = z
  .strictObject({
    /** CLR Action 组件的完整类型名，也是递归动作联合的判别字段。 */
    "$type": z.literal("Torappu.Battle.Action.Nodes+SkipStage, Assembly-CSharp").describe("CLR Action 组件的完整类型名，也是递归动作联合的判别字段。"),
  })
  .describe("CLR 组件 Torappu.Battle.Action.Nodes+SkipStage, Assembly-CSharp 的严格 Action 数据。") satisfies z.ZodType<SkipStageAction>;

/** 本模块 Action 分支的局部判别联合。 */
export const BattleActionS11Schema = z
  .discriminatedUnion("$type", [SetTilesEnableOverlapActionSchema, SetUnitAnimatorTransformActionSchema, SetWithdrawCostRecoverRatioActionSchema, ShakeCameraActionSchema, ShowGameCityUiPluginTextActionSchema, ShowOrHideTokenByKeyActionSchema, ShowRoutePreviewCursorActionSchema, ShowToastActionSchema, SkipCursorCheckPointActionSchema, SkipStageActionSchema])
  .describe("buff_template_data 当前模块内按 CLR $type 判别的 Action 联合。") satisfies z.ZodType<BattleActionS11>;
