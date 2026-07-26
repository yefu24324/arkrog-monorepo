/**

 * JSON 逻辑模块 `constant/constant` 的显式类型。

 */

import type { PredefinedChar } from "./predefined-chars/predefined-chars.types.js";

/**
 * roguelike_topic_table.json 中 Constant 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Constant {
  /** 原始数据字段 `milestoneTokenRatio`。 */
  milestoneTokenRatio: number;
  /** 原始数据字段 `outerBuffTokenRatio`。 */
  outerBuffTokenRatio: number;
  /** 原始数据字段 `relicTokenRatio`。 */
  relicTokenRatio: number;
  /** 原始数据字段 `rogueSystemUnlockStage`。 */
  rogueSystemUnlockStage: string;
  /** 原始数据字段 `ordiModeReOpenCoolDown`。 */
  ordiModeReOpenCoolDown: number;
  /** 原始数据字段 `monthModeReOpenCoolDown`。 */
  monthModeReOpenCoolDown: number;
  /** 原始数据字段 `monthlyTaskUncompletedTime`。 */
  monthlyTaskUncompletedTime: number;
  /** 原始数据字段 `monthlyTaskManualRefreshLimit`。 */
  monthlyTaskManualRefreshLimit: number;
  /** 原始数据字段 `monthlyTeamUncompletedTime`。 */
  monthlyTeamUncompletedTime: number;
  /** 原始数据字段 `bpPurchaseSystemUnlockTime`。 */
  bpPurchaseSystemUnlockTime: number;
  /** 原始数据字段 `predefinedChars`。 */
  predefinedChars: { [key: string]: PredefinedChar };
}
