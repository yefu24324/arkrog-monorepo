/**

 * JSON 逻辑模块 `details/init/init` 的显式类型。

 */

import type { Mode } from "../../shared/common-enums.types.js";

import type { IconId, StyleId } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 Init 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Init {
  /** 原始数据字段 `modeId`。 */
  modeId: Mode;
  /** 原始数据字段 `modeGrade`。 */
  modeGrade: number;
  /** 原始数据字段 `predefinedId`。 */
  predefinedId: null | string;
  /** 原始数据字段 `predefinedStyle`。 */
  predefinedStyle: StyleId | null;
  /** 原始数据字段 `initialBandRelic`。 */
  initialBandRelic: string[];
  /** 原始数据字段 `initialRecruitGroup`。 */
  initialRecruitGroup: IconId[] | null;
  /** 原始数据字段 `initialHp`。 */
  initialHp: number;
  /** 原始数据字段 `initialPopulation`。 */
  initialPopulation: number;
  /** 原始数据字段 `initialGold`。 */
  initialGold: number;
  /** 原始数据字段 `initialSquadCapacity`。 */
  initialSquadCapacity: number;
  /** 原始数据字段 `initialShield`。 */
  initialShield: number;
  /** 原始数据字段 `initialMaxHp`。 */
  initialMaxHp: number;
  /** 原始数据字段 `initialKey`。 */
  initialKey: number;
}
