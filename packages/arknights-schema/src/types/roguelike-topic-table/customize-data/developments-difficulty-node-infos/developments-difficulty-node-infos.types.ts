/**

 * JSON 逻辑模块 `customize-data/developments-difficulty-node-infos/developments-difficulty-node-infos` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 CustomizeDatumDevelopmentsDifficultyNodeInfos 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CustomizeDatumDevelopmentsDifficultyNodeInfos {
  /** 原始数据字段 `rogue_3_difficulty_1`。 */
  rogue_3_difficulty_1: Rogue3__Difficulty;
  /** 原始数据字段 `rogue_3_difficulty_2`。 */
  rogue_3_difficulty_2: Rogue3__Difficulty;
  /** 原始数据字段 `rogue_3_difficulty_3`。 */
  rogue_3_difficulty_3: Rogue3__Difficulty;
}

/**
 * roguelike_topic_table.json 中 Rogue3__Difficulty 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue3__Difficulty {
  /** 原始数据字段 `buffId`。 */
  buffId: string;
  /** 原始数据字段 `nodeMap`。 */
  nodeMap: Rogue3_Difficulty1_NodeMap[];
  /** 原始数据字段 `enableGrade`。 */
  enableGrade: number;
}

/**
 * roguelike_topic_table.json 中 Rogue3_Difficulty1_NodeMap 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue3_Difficulty1_NodeMap {
  /** 原始数据字段 `frontNode`。 */
  frontNode: string;
  /** 原始数据字段 `nextNode`。 */
  nextNode: string;
}
