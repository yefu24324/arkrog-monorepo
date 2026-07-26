/**

 * JSON 逻辑模块 `details/grand-prizes/grand-prizes` 的显式类型。

 */

import type { Reward } from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 GrandPrize 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface GrandPrize {
  /** 原始数据字段 `grandPrizeDisplayId`。 */
  grandPrizeDisplayId: string;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `displayUnlockYear`。 */
  displayUnlockYear: number;
  /** 原始数据字段 `displayUnlockMonth`。 */
  displayUnlockMonth: number;
  /** 原始数据字段 `acquireTitle`。 */
  acquireTitle: string;
  /** 原始数据字段 `purchaseTitle`。 */
  purchaseTitle: string;
  /** 原始数据字段 `displayName`。 */
  displayName: string;
  /** 原始数据字段 `displayDiscription`。 */
  displayDiscription: string;
  /** 原始数据字段 `bpLevelId`。 */
  bpLevelId: string;
  /** 原始数据字段 `itemBundle`。 */
  itemBundle: Reward | null;
  /** 原始数据字段 `detailAnnounceTime`。 */
  detailAnnounceTime: null | string;
  /** 原始数据字段 `picIdAftrerUnlock`。 */
  picIdAftrerUnlock: null | string;
}
