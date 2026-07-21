/**

 * JSON 逻辑模块 `details/shop-dialog-data/shop-dialog-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ShopDialogData,
  ShopDialogDataTypes,
} from "../../../../types/roguelike-topic-table/details/shop-dialog-data/shop-dialog-data.types.js";

import {
  BuyConfirmSchema,
  FluffyBuySelectSchema,
} from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 ShopDialogDataTypes 的运行时校验结构。
 */
export const ShopDialogDataTypesSchema = z
  .strictObject({
    BUY_SELECT: FluffyBuySelectSchema,
    BANK_ENTRY: BuyConfirmSchema,
    BANK_INVEST: BuyConfirmSchema,
    BANK_WITHDRAWAL: BuyConfirmSchema,
    BANK_FAULTY: BuyConfirmSchema,
    BANK_REWARD_UNLOCK: BuyConfirmSchema,
    OUTER_NORMAL: BuyConfirmSchema,
    OUTER_REWARD: BuyConfirmSchema,
    FIGHT_BOSS: BuyConfirmSchema.optional(),
    RECYCLE_SELECT: BuyConfirmSchema.optional(),
    RECYCLE_CONFIRM: BuyConfirmSchema.optional(),
    BUY_CONFIRM: BuyConfirmSchema.optional(),
    RECYCLE_CHANGE: BuyConfirmSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 ShopDialogDataTypes 的运行时校验结构。",
  ) satisfies z.ZodType<ShopDialogDataTypes>;

/**
 * roguelike_topic_table.json 中 ShopDialogData 的运行时校验结构。
 */
export const ShopDialogDataSchema = z
  .strictObject({
    types: ShopDialogDataTypesSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ShopDialogData 的运行时校验结构。",
  ) satisfies z.ZodType<ShopDialogData>;
