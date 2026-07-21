/**

 * JSON 逻辑模块 `details/items/items` 的显式类型。

 */

import type {
  Rarity,
  RewardItemTypeEnum,
} from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 Item 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Item {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `description`。 */
  description: null | string;
  /** 原始数据字段 `usage`。 */
  usage: null | string;
  /** 原始数据字段 `obtainApproach`。 */
  obtainApproach: ObtainApproach | null;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
  /** 原始数据字段 `itemIconGroupId`。 */
  itemIconGroupId: null | string;
  /** 原始数据字段 `type`。 */
  type: RewardItemTypeEnum;
  /** 原始数据字段 `subType`。 */
  subType: SubType;
  /** 原始数据字段 `rarity`。 */
  rarity: Rarity;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `canSacrifice`。 */
  canSacrifice: boolean;
  /** 原始数据字段 `tinyIconColor`。 */
  tinyIconColor: TinyIconColor | null;
  /** 原始数据字段 `unlockCondDesc`。 */
  unlockCondDesc: null | string;
  /** 原始数据字段 `shortUsage`。 */
  shortUsage: null | string;
}

/**
 * roguelike_topic_table.json 中 ObtainApproach 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type ObtainApproach = "在集成战略模式中获得" | "步数发放" | "完成遭遇战";

/**
 * roguelike_topic_table.json 中 SubType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type SubType =
  | "NONE"
  | "CURSE"
  | "RED_CAPSULE"
  | "TEMP_TICKET"
  | "TOTEM_UPPER"
  | "TOTEM_LOWER"
  | "SINGLE_RAND_FREE"
  | "SECRET";

/**
 * roguelike_topic_table.json 中 TinyIconColor 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type TinyIconColor = "33a8e2" | "02d3ae" | "008aff" | "ffffff";
