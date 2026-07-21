/**

 * JSON 逻辑模块 `customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ScrapShopDialogData,
  ScrapShopDialogDataTypes,
} from "../../../../types/roguelike-topic-table/customize-data/scrap-shop-dialog-data/scrap-shop-dialog-data.types.js";

import { BuyConfirmSchema } from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 ScrapShopDialogDataTypes 的运行时校验结构。
 */
export const ScrapShopDialogDataTypesSchema = z
  .strictObject({
    BUY_SELECT: BuyConfirmSchema,
    BUY_SELECT_SCRAP_MOVE: BuyConfirmSchema,
    BUY_SELECT_SCRAP_GOODS: BuyConfirmSchema,
    BUY_SELECT_SCRAP_PASSIVE: BuyConfirmSchema,
    BUY_CONFIRM: BuyConfirmSchema,
    RECYCLE_CHANGE: BuyConfirmSchema,
    RECYCLE_SELECT: BuyConfirmSchema,
    RECYCLE_CONFIRM: BuyConfirmSchema,
    SEED_ENTRY: BuyConfirmSchema,
    SEED_CONFIRM: BuyConfirmSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapShopDialogDataTypes 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapShopDialogDataTypes>;

/**
 * roguelike_topic_table.json 中 ScrapShopDialogData 的运行时校验结构。
 */
export const ScrapShopDialogDataSchema = z
  .strictObject({
    types: ScrapShopDialogDataTypesSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapShopDialogData 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapShopDialogData>;
