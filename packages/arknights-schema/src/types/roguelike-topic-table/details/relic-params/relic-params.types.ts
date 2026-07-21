/**

 * JSON 逻辑模块 `details/relic-params/relic-params` 的显式类型。

 */

import type { Profession } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 CheckCharBoxParam 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CheckCharBoxParam {
  /** 原始数据字段 `valueProfessionMask`。 */
  valueProfessionMask: Profession;
  /** 原始数据字段 `valueStrs`。 */
  valueStrs: string[] | null;
  /** 原始数据字段 `valueInt`。 */
  valueInt: number;
}

/**
 * roguelike_topic_table.json 中 CheckCharBoxType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type CheckCharBoxType = "PROFESSION" | "SUB_PROFESSION" | "UPGRADE";

/**
 * roguelike_topic_table.json 中 RelicParam 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface RelicParam {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `checkCharBoxTypes`。 */
  checkCharBoxTypes: CheckCharBoxType[];
  /** 原始数据字段 `checkCharBoxParams`。 */
  checkCharBoxParams: CheckCharBoxParam[];
}
