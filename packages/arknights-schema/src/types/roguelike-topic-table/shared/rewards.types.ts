/**

 * JSON 逻辑模块 `shared/rewards` 的显式类型。

 */

import type { None } from "./core.types.js";

import type { ItemTypeEnum } from "./item-enums.types.js";

/**
 * roguelike_topic_table.json 中 BuyConfirm 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface BuyConfirm {
  /** 原始数据字段 `groups`。 */
  groups: BuyConfirmGroups;
}

/**
 * roguelike_topic_table.json 中 BuyConfirmGroups 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface BuyConfirmGroups {
  /** 原始数据字段 `NONE`。 */
  NONE: None;
}

/**
 * roguelike_topic_table.json 中 FluffyBuySelect 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface FluffyBuySelect {
  /** 原始数据字段 `groups`。 */
  groups: FluffyGroups;
}

/**
 * roguelike_topic_table.json 中 FluffyGroups 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface FluffyGroups {
  /** 原始数据字段 `NONE`。 */
  NONE: None;
  /** 原始数据字段 `RECRUIT_TICKET`。 */
  RECRUIT_TICKET: None;
  /** 原始数据字段 `RELIC`。 */
  RELIC: None;
  /** 原始数据字段 `ACTIVE_TOOL`。 */
  ACTIVE_TOOL: None;
  /** 原始数据字段 `COPPER`。 */
  COPPER?: None;
  /** 原始数据字段 `DIVINATION_KIT`。 */
  DIVINATION_KIT?: None;
  /** 原始数据字段 `VISION`。 */
  VISION?: None;
  /** 原始数据字段 `SCRAP`。 */
  SCRAP?: None;
}

/**
 * roguelike_topic_table.json 中 Reward 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Reward {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `count`。 */
  count: number;
  /** 原始数据字段 `type`。 */
  type: ItemTypeEnum;
}
