/**

 * JSON 逻辑模块 `customize-data/common-development/common-development` 的显式类型。

 */

import type { DevelopmentToken } from "../../shared/buffs.types.js";

import type { Rogue3__Difficulty1 } from "../../shared/rogue-variants.types.js";

/**
 * roguelike_topic_table.json 中 CommonDevelopment 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CommonDevelopment {
  /** 原始数据字段 `developments`。 */
  developments: { [key: string]: Rogue3__Difficulty1 };
  /** 原始数据字段 `developmentsTokens`。 */
  developmentsTokens: { [key: string]: DevelopmentToken };
  /** 原始数据字段 `developmentRawTextGroup`。 */
  developmentRawTextGroup: CommonDevelopmentDevelopmentRawTextGroup[];
  /** 原始数据字段 `developmentsDifficultyNodeInfos`。 */
  developmentsDifficultyNodeInfos: CommonDevelopmentDevelopmentsDifficultyNodeInfos;
}

/**
 * roguelike_topic_table.json 中 CommonDevelopmentDevelopmentRawTextGroup 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CommonDevelopmentDevelopmentRawTextGroup {
  /** 原始数据字段 `nodeIdList`。 */
  nodeIdList: string[];
  /** 原始数据字段 `groupIconId`。 */
  groupIconId: GroupIconId;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
}

/**
 * roguelike_topic_table.json 中 CommonDevelopmentDevelopmentsDifficultyNodeInfos 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CommonDevelopmentDevelopmentsDifficultyNodeInfos {
  /** 原始数据字段 `rogue_4_difficulty_1`。 */
  rogue_4_difficulty_1?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_4_difficulty_2`。 */
  rogue_4_difficulty_2?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_4_difficulty_3`。 */
  rogue_4_difficulty_3?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_5_difficulty_1`。 */
  rogue_5_difficulty_1?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_5_difficulty_2`。 */
  rogue_5_difficulty_2?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_5_difficulty_3`。 */
  rogue_5_difficulty_3?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_6_difficulty_1`。 */
  rogue_6_difficulty_1?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_6_difficulty_2`。 */
  rogue_6_difficulty_2?: Rogue4_Difficulty1_Class;
  /** 原始数据字段 `rogue_6_difficulty_3`。 */
  rogue_6_difficulty_3?: Rogue4_Difficulty1_Class;
}

/**
 * roguelike_topic_table.json 中 GroupIconId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type GroupIconId =
  | "img_summary_node_lock"
  | "img_summary_node_teamenhance"
  | "img_summary_node_fragment"
  | "img_summary_node_teamupgrade";

/**
 * roguelike_topic_table.json 中 Rogue4_Difficulty1_Class 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue4_Difficulty1_Class {
  /** 原始数据字段 `buffId`。 */
  buffId: string;
  /** 原始数据字段 `nodeMap`。 */
  nodeMap: Rogue4_Difficulty1_NodeMap[];
  /** 原始数据字段 `enableGrade`。 */
  enableGrade: number;
  /** 原始数据字段 `enableDesc`。 */
  enableDesc: string;
  /** 原始数据字段 `lightId`。 */
  lightId: string;
  /** 原始数据字段 `decoId`。 */
  decoId: null;
}

/**
 * roguelike_topic_table.json 中 Rogue4_Difficulty1_NodeMap 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue4_Difficulty1_NodeMap {
  /** 原始数据字段 `frontNodes`。 */
  frontNodes: string[];
  /** 原始数据字段 `nextNode`。 */
  nextNode: string;
}
