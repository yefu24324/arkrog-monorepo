/**

 * JSON 逻辑模块 `customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data` 的显式类型。

 */

import type { BuyConfirm } from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 ScrapShopDialogData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapShopDialogData {
  /** 原始数据字段 `types`。 */
  types: ScrapShopDialogDataTypes;
}

/**
 * roguelike_topic_table.json 中 ScrapShopDialogDataTypes 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapShopDialogDataTypes {
  /** 原始数据字段 `BUY_SELECT`。 */
  BUY_SELECT: BuyConfirm;
  /** 原始数据字段 `BUY_SELECT_SCRAP_MOVE`。 */
  BUY_SELECT_SCRAP_MOVE: BuyConfirm;
  /** 原始数据字段 `BUY_SELECT_SCRAP_GOODS`。 */
  BUY_SELECT_SCRAP_GOODS: BuyConfirm;
  /** 原始数据字段 `BUY_SELECT_SCRAP_PASSIVE`。 */
  BUY_SELECT_SCRAP_PASSIVE: BuyConfirm;
  /** 原始数据字段 `BUY_CONFIRM`。 */
  BUY_CONFIRM: BuyConfirm;
  /** 原始数据字段 `RECYCLE_CHANGE`。 */
  RECYCLE_CHANGE: BuyConfirm;
  /** 原始数据字段 `RECYCLE_SELECT`。 */
  RECYCLE_SELECT: BuyConfirm;
  /** 原始数据字段 `RECYCLE_CONFIRM`。 */
  RECYCLE_CONFIRM: BuyConfirm;
  /** 原始数据字段 `SEED_ENTRY`。 */
  SEED_ENTRY: BuyConfirm;
  /** 原始数据字段 `SEED_CONFIRM`。 */
  SEED_CONFIRM: BuyConfirm;
}
