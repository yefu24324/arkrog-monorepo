/**

 * JSON 逻辑模块 `customize-data/special-shop-dialog/special-shop-dialog` 的显式类型。

 */

import type {
  BuyConfirm,
  FluffyBuySelect,
} from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 SpecialShopDialog 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SpecialShopDialog {
  /** 原始数据字段 `types`。 */
  types: SpecialShopDialogTypes;
}

/**
 * roguelike_topic_table.json 中 SpecialShopDialogTypes 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SpecialShopDialogTypes {
  /** 原始数据字段 `BUY_SELECT`。 */
  BUY_SELECT: FluffyBuySelect;
  /** 原始数据字段 `BUY_CONFIRM`。 */
  BUY_CONFIRM: BuyConfirm;
}
