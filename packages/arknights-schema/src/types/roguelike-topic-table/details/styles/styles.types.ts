/**

 * JSON 逻辑模块 `details/styles/styles` 的显式类型。

 */

import type { StyleId } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 Rogue3_StyleChallengeClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue3_StyleChallengeClass {
  /** 原始数据字段 `styleId`。 */
  styleId: StyleId;
  /** 原始数据字段 `styleConfig`。 */
  styleConfig: number;
}

/**
 * roguelike_topic_table.json 中 Styles 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Styles {
  /** 原始数据字段 `rogue_3_style_default`。 */
  rogue_3_style_default?: Rogue3_StyleChallengeClass;
  /** 原始数据字段 `rogue_3_style_challenge`。 */
  rogue_3_style_challenge?: Rogue3_StyleChallengeClass;
  /** 原始数据字段 `rogue_4_style_default`。 */
  rogue_4_style_default?: Rogue3_StyleChallengeClass;
  /** 原始数据字段 `rogue_4_style_challenge`。 */
  rogue_4_style_challenge?: Rogue3_StyleChallengeClass;
  /** 原始数据字段 `rogue_5_style_default`。 */
  rogue_5_style_default?: Rogue3_StyleChallengeClass;
  /** 原始数据字段 `rogue_5_style_challenge`。 */
  rogue_5_style_challenge?: Rogue3_StyleChallengeClass;
}
