/**

 * JSON 逻辑模块 `customize-data/difficulties/difficulties` 的显式类型。

 */

import type { Mode } from "../../shared/common-enums.types.js";

import type {
  LeftDisasterDesc,
  LeftWrathDesc,
} from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 CustomizeDatumDifficulty 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface CustomizeDatumDifficulty {
  /** 原始数据字段 `modeDifficulty`。 */
  modeDifficulty: Mode;
  /** 原始数据字段 `grade`。 */
  grade: number;
  /** 原始数据字段 `buffDesc`。 */
  buffDesc: string[];
  /** 原始数据字段 `totemProb`。 */
  totemProb?: number;
  /** 原始数据字段 `relicDevLevel`。 */
  relicDevLevel?: null | string;
  /** 原始数据字段 `buffs`。 */
  buffs?: string[] | null;
  /** 原始数据字段 `leftDisasterDesc`。 */
  leftDisasterDesc?: LeftDisasterDesc;
  /** 原始数据字段 `leftOverweightDesc`。 */
  leftOverweightDesc?: LeftOverweightDesc;
  /** 原始数据字段 `weightStatusLimitDesc`。 */
  weightStatusLimitDesc?: WeightStatusLimitDesc;
  /** 原始数据字段 `leftWrathDesc`。 */
  leftWrathDesc?: LeftWrathDesc;
  /** 原始数据字段 `gildProbDisplay`。 */
  gildProbDisplay?: GildProbDisplay;
  /** 原始数据字段 `skyStepDescription`。 */
  skyStepDescription?: SkyStepDescription;
  /** 原始数据字段 `leftWeatherDesc`。 */
  leftWeatherDesc?: LeftWeatherDesc;
}

/**
 * roguelike_topic_table.json 中 GildProbDisplay 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type GildProbDisplay = "低" | "标准" | "中" | "高";

/**
 * roguelike_topic_table.json 中 LeftOverweightDesc 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type LeftOverweightDesc = "轻松" | "标准" | "沉重" | "崩溃";

/**
 * roguelike_topic_table.json 中 LeftWeatherDesc 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type LeftWeatherDesc = "无" | "早期" | "中期" | "晚期";

/**
 * roguelike_topic_table.json 中 SkyStepDescription 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type SkyStepDescription =
  "每进入一次节点，将有1点烛火熄灭，烛火全部熄灭时，意识将被逐回界园";

/**
 * roguelike_topic_table.json 中 WeightStatusLimitDesc 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type WeightStatusLimitDesc =
  | "每前进一步，失去1点目标生命（不会使目标生命低于1）"
  | "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+2"
  | "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+3"
  | "每前进一步，失去1点目标生命（不会使目标生命低于1），进入战斗时，所有单位部署费用+3，攻击力-20%，技力自然回复速度-20%";
