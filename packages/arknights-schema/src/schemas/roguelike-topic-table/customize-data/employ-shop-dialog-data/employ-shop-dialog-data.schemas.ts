/**

 * JSON 逻辑模块 `customize-data/employ-shop-dialog-data/employ-shop-dialog-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  EmployShopDialogData,
  EmployShopDialogDataTypes,
  PurpleBuySelect,
  PurpleGroups,
} from "../../../../types/roguelike-topic-table/customize-data/employ-shop-dialog-data/employ-shop-dialog-data.types.js";

import { NoneSchema } from "../../shared/core.schemas.js";

import { BuyConfirmSchema } from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 PurpleGroups 的运行时校验结构。
 */
export const PurpleGroupsSchema = z
  .strictObject({
    NONE: NoneSchema,
    CHARACTER: NoneSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 PurpleGroups 的运行时校验结构。",
  ) satisfies z.ZodType<PurpleGroups>;

/**
 * roguelike_topic_table.json 中 PurpleBuySelect 的运行时校验结构。
 */
export const PurpleBuySelectSchema = z
  .strictObject({
    groups: PurpleGroupsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 PurpleBuySelect 的运行时校验结构。",
  ) satisfies z.ZodType<PurpleBuySelect>;

/**
 * roguelike_topic_table.json 中 EmployShopDialogDataTypes 的运行时校验结构。
 */
export const EmployShopDialogDataTypesSchema = z
  .strictObject({
    BUY_SELECT: PurpleBuySelectSchema,
    QUIT_SELECT: BuyConfirmSchema,
    BUY_CONFIRM: BuyConfirmSchema,
    CANNOT_AFFORD: BuyConfirmSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 EmployShopDialogDataTypes 的运行时校验结构。",
  ) satisfies z.ZodType<EmployShopDialogDataTypes>;

/**
 * roguelike_topic_table.json 中 EmployShopDialogData 的运行时校验结构。
 */
export const EmployShopDialogDataSchema = z
  .strictObject({
    types: EmployShopDialogDataTypesSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 EmployShopDialogData 的运行时校验结构。",
  ) satisfies z.ZodType<EmployShopDialogData>;
