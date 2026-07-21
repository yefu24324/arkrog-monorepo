/**

 * JSON 逻辑模块 `details/month-squad/month-squad` 的显式类型。

 */

import type { ZoneId } from "../../shared/item-enums.types.js";

import type { Reward } from "../../shared/rewards.types.js";

/**
 * roguelike_topic_table.json 中 MonthSquad 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface MonthSquad {
  /** 原始数据字段 `month_team_1`。 */
  month_team_1: MonthTeam;
  /** 原始数据字段 `month_team_2`。 */
  month_team_2: MonthTeam;
  /** 原始数据字段 `month_team_3`。 */
  month_team_3?: MonthTeam;
  /** 原始数据字段 `month_team_4`。 */
  month_team_4?: MonthTeam;
  /** 原始数据字段 `month_team_5`。 */
  month_team_5?: MonthTeam;
  /** 原始数据字段 `month_team_6`。 */
  month_team_6?: MonthTeam;
  /** 原始数据字段 `month_team_7`。 */
  month_team_7?: MonthTeam;
  /** 原始数据字段 `month_team_8`。 */
  month_team_8?: MonthTeam;
}

/**
 * roguelike_topic_table.json 中 MonthTeam 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface MonthTeam {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `teamName`。 */
  teamName: string;
  /** 原始数据字段 `teamSubName`。 */
  teamSubName: null | string;
  /** 原始数据字段 `teamFlavorDesc`。 */
  teamFlavorDesc: null | string;
  /** 原始数据字段 `teamDes`。 */
  teamDes: string;
  /** 原始数据字段 `teamColor`。 */
  teamColor: string;
  /** 原始数据字段 `teamMonth`。 */
  teamMonth: string;
  /** 原始数据字段 `teamYear`。 */
  teamYear: string;
  /** 原始数据字段 `teamIndex`。 */
  teamIndex: null | string;
  /** 原始数据字段 `teamChars`。 */
  teamChars: TeamChar[];
  /** 原始数据字段 `zoneId`。 */
  zoneId: ZoneId | null;
  /** 原始数据字段 `chatId`。 */
  chatId: string;
  /** 原始数据字段 `tokenRewardNum`。 */
  tokenRewardNum: number;
  /** 原始数据字段 `items`。 */
  items: Reward[];
  /** 原始数据字段 `startTime`。 */
  startTime: number;
  /** 原始数据字段 `endTime`。 */
  endTime: number;
  /** 原始数据字段 `taskDes`。 */
  taskDes: null | string;
}

/**
 * roguelike_topic_table.json 中 TeamChar 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface TeamChar {
  /** 原始数据字段 `teamCharId`。 */
  teamCharId: string;
  /** 原始数据字段 `teamTmplId`。 */
  teamTmplId: null | string;
}
