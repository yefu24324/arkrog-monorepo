/**

 * JSON 逻辑模块 `customize-data/customize-data` 的 Zod Schema。

 */

import { z } from "zod";

import type { CustomizeDatum } from "../../../types/roguelike-topic-table/customize-data/customize-data.types.js";

import { CommonDevelopmentSchema } from "./common-development/common-development.schemas.js";

import { DevelopmentLineSchema } from "./development-lines/development-lines.schemas.js";

import { CustomizeDatumDevelopmentRawTextGroupSchema } from "./development-raw-text-group/development-raw-text-group.schemas.js";

import { CustomizeDatumDevelopmentsDifficultyNodeInfosSchema } from "./developments-difficulty-node-infos/developments-difficulty-node-infos.schemas.js";

import { DevelopmentsSchema } from "./developments/developments.schemas.js";

import { CustomizeDatumDifficultySchema } from "./difficulties/difficulties.schemas.js";

import { EmployShopDialogDataSchema } from "./employ-shop-dialog-data/employ-shop-dialog-data.schemas.js";

import { EndingTextSchema } from "./ending-text/ending-text.schemas.js";

import { ScrapShopDialogDataSchema } from "./scrap-shop-dialog-data/scrap-shop-dialog-data.schemas.js";

import { SpecialShopDialogSchema } from "./special-shop-dialog/special-shop-dialog.schemas.js";

import { DevelopmentTokenSchema } from "../shared/buffs.schemas.js";

/**
 * roguelike_topic_table.json 中 CustomizeDatum 的运行时校验结构。
 */
export const CustomizeDatumSchema = z
  .strictObject({
    developments: DevelopmentsSchema.optional(),
    developmentTokens: z.record(z.string(), DevelopmentTokenSchema).optional(),
    endingText: EndingTextSchema,
    difficulties: z.array(CustomizeDatumDifficultySchema),
    developmentRawTextGroup: z
      .array(CustomizeDatumDevelopmentRawTextGroupSchema)
      .optional(),
    developmentLines: z.array(DevelopmentLineSchema).optional(),
    developmentsTokens: z.record(z.string(), DevelopmentTokenSchema).optional(),
    developmentsDifficultyNodeInfos:
      CustomizeDatumDevelopmentsDifficultyNodeInfosSchema.optional(),
    commonDevelopment: CommonDevelopmentSchema.optional(),
    specialShopDialog: SpecialShopDialogSchema.optional(),
    scrapShopDialogData: ScrapShopDialogDataSchema.optional(),
    employShopDialogData: EmployShopDialogDataSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 CustomizeDatum 的运行时校验结构。",
  ) satisfies z.ZodType<CustomizeDatum>;
