/**

 * JSON 逻辑模块 `shared/core` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 BgmSignal 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type BgmSignal =
  | "ON_ROGUELIKE_MAP"
  | "ON_ROGUELIKE_MAPHIGH"
  | "ON_ROGUELIKE_MAPLOW"
  | "ON_ROGUELIKE_DEEPMAPHIGH"
  | "ON_ROGUELIKE_SECRET_MAP"
  | "ON_ROGUELIKE_MAPBOSS"
  | "ON_ROGUELIKE_MAPSECRET"
  | "ON_ROGUELIKE_MAPBOSS4"
  | "ON_ROGUELIKE_MAPAMIYA"
  | "ON_ROGUELIKE_MAPSKY";

/**
 * roguelike_topic_table.json 中 Id 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type Id =
  | "rogue_5_gild_1"
  | "rogue_5_gild_2"
  | "rogue_5_gild_3"
  | "rogue_5_gild_4"
  | "rogue_5_gild_5"
  | "rogue_5_gild_6"
  | "rogue_5_gild_7"
  | "rogue_5_gild_8"
  | "rogue_5_gild_9"
  | "rogue_5_gild_10";

/**
 * roguelike_topic_table.json 中 None 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface None {
  /** 原始数据字段 `content`。 */
  content: string[];
}

/**
 * roguelike_topic_table.json 中 Pos 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type Pos = "LOCATION" | "EFFECT" | "AFFIX";

/**
 * roguelike_topic_table.json 中 VariationClass 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type VariationClass = Record<string, never>;
