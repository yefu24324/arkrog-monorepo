/**

 * JSON 逻辑模块 `customize-data/customize-data` 的显式类型。

 */

import type { CommonDevelopment } from "./common-development/common-development.types.js";

import type { DevelopmentLine } from "./development-lines/development-lines.types.js";

import type { CustomizeDatumDevelopmentRawTextGroup } from "./development-raw-text-group/development-raw-text-group.types.js";

import type { CustomizeDatumDevelopmentsDifficultyNodeInfos } from "./developments-difficulty-node-infos/developments-difficulty-node-infos.types.js";

import type { Developments } from "./developments/developments.types.js";

import type { CustomizeDatumDifficulty } from "./difficulties/difficulties.types.js";

import type { EmployShopDialogData } from "./employ-shop-dialog-data/employ-shop-dialog-data.types.js";

import type { EndingText } from "./ending-text/ending-text.types.js";

import type { ScrapShopDialogData } from "./scrap-shop-dialog-data/scrap-shop-dialog-data.types.js";

import type { SpecialShopDialog } from "./special-shop-dialog/special-shop-dialog.types.js";

import type { DevelopmentToken } from "../shared/buffs.types.js";

/**
 * roguelike_topic_table.json 中 CustomizeDatum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface CustomizeDatum {
  /** 原始数据字段 `developments`。 */
  developments?: Developments;
  /** 原始数据字段 `developmentTokens`。 */
  developmentTokens?: { [key: string]: DevelopmentToken };
  /** 原始数据字段 `endingText`。 */
  endingText: EndingText;
  /** 原始数据字段 `difficulties`。 */
  difficulties: CustomizeDatumDifficulty[];
  /** 原始数据字段 `developmentRawTextGroup`。 */
  developmentRawTextGroup?: CustomizeDatumDevelopmentRawTextGroup[];
  /** 原始数据字段 `developmentLines`。 */
  developmentLines?: DevelopmentLine[];
  /** 原始数据字段 `developmentsTokens`。 */
  developmentsTokens?: { [key: string]: DevelopmentToken };
  /** 原始数据字段 `developmentsDifficultyNodeInfos`。 */
  developmentsDifficultyNodeInfos?: CustomizeDatumDevelopmentsDifficultyNodeInfos;
  /** 原始数据字段 `commonDevelopment`。 */
  commonDevelopment?: CommonDevelopment;
  /** 原始数据字段 `specialShopDialog`。 */
  specialShopDialog?: SpecialShopDialog;
  /** 原始数据字段 `scrapShopDialogData`。 */
  scrapShopDialogData?: ScrapShopDialogData;
  /** 原始数据字段 `employShopDialogData`。 */
  employShopDialogData?: EmployShopDialogData;
}
