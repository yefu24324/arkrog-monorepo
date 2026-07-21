/**

 * JSON 逻辑模块 `customize-data/special-shop-dialog/special-shop-dialog` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  SpecialShopDialog,
  SpecialShopDialogTypes,
} from "../../../../types/roguelike-topic-table/customize-data/special-shop-dialog/special-shop-dialog.types.js";

import {
  BuyConfirmSchema,
  FluffyBuySelectSchema,
} from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 SpecialShopDialogTypes 的运行时校验结构。
 */
export const SpecialShopDialogTypesSchema = z
  .strictObject({
    BUY_SELECT: FluffyBuySelectSchema,
    BUY_CONFIRM: BuyConfirmSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 SpecialShopDialogTypes 的运行时校验结构。",
  ) satisfies z.ZodType<SpecialShopDialogTypes>;

/**
 * roguelike_topic_table.json 中 SpecialShopDialog 的运行时校验结构。
 */
export const SpecialShopDialogSchema = z
  .strictObject({
    types: SpecialShopDialogTypesSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 SpecialShopDialog 的运行时校验结构。",
  ) satisfies z.ZodType<SpecialShopDialog>;
