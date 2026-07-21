/**

 * JSON 逻辑模块 `details/difficulties/difficulties` 的显式类型。

 */

import type {
  HistoricalRecordsMode,
  Mode,
} from "../../shared/common-enums.types.js";

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 DetailDifficulty 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface DetailDifficulty {
  /** 原始数据字段 `modeDifficulty`。 */
  modeDifficulty: Mode;
  /** 原始数据字段 `grade`。 */
  grade: number;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `nameImage`。 */
  nameImage: NameImage | null;
  /** 原始数据字段 `subName`。 */
  subName: null | string;
  /** 原始数据字段 `enrollId`。 */
  enrollId: null | string;
  /** 原始数据字段 `haveInitialRelicIcon`。 */
  haveInitialRelicIcon: boolean;
  /** 原始数据字段 `scoreFactor`。 */
  scoreFactor: number;
  /** 原始数据字段 `canUnlockItem`。 */
  canUnlockItem: boolean;
  /** 原始数据字段 `doMonthTask`。 */
  doMonthTask: boolean;
  /** 原始数据字段 `ruleDesc`。 */
  ruleDesc: string;
  /** 原始数据字段 `ruleDescReplacements`。 */
  ruleDescReplacements: RuleDescReplacement[] | null;
  /** 原始数据字段 `failTitle`。 */
  failTitle: FailTitle;
  /** 原始数据字段 `failImageId`。 */
  failImageId: string;
  /** 原始数据字段 `failForceDesc`。 */
  failForceDesc: FailForceDesc;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `equivalentGrade`。 */
  equivalentGrade: number;
  /** 原始数据字段 `color`。 */
  color: null | string;
  /** 原始数据字段 `bpValue`。 */
  bpValue: number;
  /** 原始数据字段 `bossValue`。 */
  bossValue: number;
  /** 原始数据字段 `addDesc`。 */
  addDesc: null | string;
  /** 原始数据字段 `warningType`。 */
  warningType: HistoricalRecordsMode;
  /** 原始数据字段 `unlockText`。 */
  unlockText: null | string;
  /** 原始数据字段 `displayIconId`。 */
  displayIconId: DisplayIconId | null;
  /** 原始数据字段 `hideEndingStory`。 */
  hideEndingStory: boolean;
  /** 原始数据字段 `haveLegacy`。 */
  haveLegacy: boolean;
}

/**
 * roguelike_topic_table.json 中 DisplayIconId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type DisplayIconId =
  | "icon_difficulty_0"
  | "icon_difficulty_1"
  | "icon_difficulty_2"
  | "icon_difficulty_3";

/**
 * roguelike_topic_table.json 中 FailForceDesc 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type FailForceDesc =
  | "通过提升干员等级、技能等级或将干员精英化，可以在战斗中取得更大优势"
  | "理解月度小队成员的特点并灵活运用，可以在战斗中取得更大优势"
  | "充分利用【调查条目】提供的特殊条件，可以在战斗中取得更大优势"
  | "理解追忆映射成员的特点并灵活运用，可以在战斗中取得更大优势"
  | "充分利用【探索条目】提供的特殊条件，可以在战斗中取得更大优势"
  | "掌握探索者档案所记录的成员特点并灵活运用，可以在战斗中取得更大优势"
  | "在本次深入调查中，非险路恶敌作战失败不会结束探索"
  | "掌握讲述者列表所记录的成员特点并灵活运用，可以在战斗中取得更大优势";

/**
 * roguelike_topic_table.json 中 FailTitle 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type FailTitle = "联系中断" | "小队解散" | "调查终止" | "暂时撤退";

/**
 * roguelike_topic_table.json 中 NameImage 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type NameImage = "name_2" | "name_1";

/**
 * roguelike_topic_table.json 中 RuleDescReplacement 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface RuleDescReplacement {
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId;
  /** 原始数据字段 `ruleDesc`。 */
  ruleDesc: string;
}
