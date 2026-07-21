/**

 * JSON 逻辑模块 `details/treasures/treasures` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 Rogue2_Treasure 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue2_Treasure {
  /** 原始数据字段 `treasureId`。 */
  treasureId: string;
  /** 原始数据字段 `groupId`。 */
  groupId: string;
  /** 原始数据字段 `subIndex`。 */
  subIndex: number;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `usage`。 */
  usage: string;
}

/**
 * roguelike_topic_table.json 中 Treasures 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Treasures {
  /** 原始数据字段 `rogue_2_treasure`。 */
  rogue_2_treasure?: Rogue2_Treasure[];
}
