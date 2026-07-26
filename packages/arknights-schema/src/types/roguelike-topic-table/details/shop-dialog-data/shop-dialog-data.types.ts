/**

 * JSON 逻辑模块 `details/shop-dialog-data/shop-dialog-data` 的显式类型。

 */

import type {
  BuyConfirm,
  FluffyBuySelect,
} from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 ShopDialogData 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ShopDialogData {
  /** 原始数据字段 `types`。 */
  types: ShopDialogDataTypes;
}

/**
 * roguelike_topic_table.json 中 ShopDialogDataTypes 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ShopDialogDataTypes {
  /** 原始数据字段 `BUY_SELECT`。 */
  BUY_SELECT: FluffyBuySelect;
  /** 原始数据字段 `BANK_ENTRY`。 */
  BANK_ENTRY: BuyConfirm;
  /** 原始数据字段 `BANK_INVEST`。 */
  BANK_INVEST: BuyConfirm;
  /** 原始数据字段 `BANK_WITHDRAWAL`。 */
  BANK_WITHDRAWAL: BuyConfirm;
  /** 原始数据字段 `BANK_FAULTY`。 */
  BANK_FAULTY: BuyConfirm;
  /** 原始数据字段 `BANK_REWARD_UNLOCK`。 */
  BANK_REWARD_UNLOCK: BuyConfirm;
  /** 原始数据字段 `OUTER_NORMAL`。 */
  OUTER_NORMAL: BuyConfirm;
  /** 原始数据字段 `OUTER_REWARD`。 */
  OUTER_REWARD: BuyConfirm;
  /** 原始数据字段 `FIGHT_BOSS`。 */
  FIGHT_BOSS?: BuyConfirm;
  /** 原始数据字段 `RECYCLE_SELECT`。 */
  RECYCLE_SELECT?: BuyConfirm;
  /** 原始数据字段 `RECYCLE_CONFIRM`。 */
  RECYCLE_CONFIRM?: BuyConfirm;
  /** 原始数据字段 `BUY_CONFIRM`。 */
  BUY_CONFIRM?: BuyConfirm;
  /** 原始数据字段 `RECYCLE_CHANGE`。 */
  RECYCLE_CHANGE?: BuyConfirm;
}
