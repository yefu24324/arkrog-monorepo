/**

 * JSON 逻辑模块 `constant/predefined-chars/predefined-chars` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 PredefinedChar 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface PredefinedChar {
  /** 原始数据字段 `charId`。 */
  charId: string;
  /** 原始数据字段 `canBeFree`。 */
  canBeFree: boolean;
  /** 原始数据字段 `uniEquipId`。 */
  uniEquipId: null | string;
  /** 原始数据字段 `recruitType`。 */
  recruitType: RecruitType;
}

/**
 * roguelike_topic_table.json 中 RecruitType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type RecruitType = "FREE" | "THIRD_LOW" | "THIRD";
