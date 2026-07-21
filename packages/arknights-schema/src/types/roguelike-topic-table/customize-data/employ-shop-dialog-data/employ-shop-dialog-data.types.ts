/**

 * JSON 逻辑模块 `customize-data/employ-shop-dialog-data/employ-shop-dialog-data` 的显式类型。

 */

import type { None } from "../../shared/core.types.js";

import type { BuyConfirm } from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 EmployShopDialogData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface EmployShopDialogData {
  /** 原始数据字段 `types`。 */
  types: EmployShopDialogDataTypes;
}

/**
 * roguelike_topic_table.json 中 EmployShopDialogDataTypes 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface EmployShopDialogDataTypes {
  /** 原始数据字段 `BUY_SELECT`。 */
  BUY_SELECT: PurpleBuySelect;
  /** 原始数据字段 `QUIT_SELECT`。 */
  QUIT_SELECT: BuyConfirm;
  /** 原始数据字段 `BUY_CONFIRM`。 */
  BUY_CONFIRM: BuyConfirm;
  /** 原始数据字段 `CANNOT_AFFORD`。 */
  CANNOT_AFFORD: BuyConfirm;
}

/**
 * roguelike_topic_table.json 中 PurpleBuySelect 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface PurpleBuySelect {
  /** 原始数据字段 `groups`。 */
  groups: PurpleGroups;
}

/**
 * roguelike_topic_table.json 中 PurpleGroups 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface PurpleGroups {
  /** 原始数据字段 `NONE`。 */
  NONE: None;
  /** 原始数据字段 `CHARACTER`。 */
  CHARACTER: None;
}
