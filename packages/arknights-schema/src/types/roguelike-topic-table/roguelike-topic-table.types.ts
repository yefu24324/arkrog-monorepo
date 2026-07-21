/**

 * JSON 逻辑模块 `roguelike-topic-table/roguelike-topic-table` 的显式类型。

 */

import type { Constant } from "./constant/constant.types.js";

import type { CustomizeDatum } from "./customize-data/customize-data.types.js";

import type { Detail } from "./details/details.types.js";

import type { Module } from "./modules/modules.types.js";

import type { Topic } from "./topics/topics.types.js";

/**
 * roguelike_topic_table.json 中 RoguelikeTopicTable 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface RoguelikeTopicTable {
  /** 原始数据字段 `topics`。 */
  topics: Record<string, Topic>;
  /** 原始数据字段 `constant`。 */
  constant: Constant;
  /** 原始数据字段 `details`。 */
  details: Record<string, Detail>;
  /** 原始数据字段 `modules`。 */
  modules: Record<string, Module>;
  /** 原始数据字段 `customizeData`。 */
  customizeData: Record<string, CustomizeDatum>;
}
