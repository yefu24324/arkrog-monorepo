/**

 * JSON 逻辑模块 `details/zones/zones` 的显式类型。

 */

import type { BgmSignal } from "../../shared/core.types.js";

/**
 * roguelike_topic_table.json 中 ZoneValue 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ZoneValue {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `clockPerformance`。 */
  clockPerformance: null | string;
  /** 原始数据字段 `displayTime`。 */
  displayTime: null | string;
  /** 原始数据字段 `description`。 */
  description: string;
  /** 原始数据字段 `buffDescription`。 */
  buffDescription: null | string;
  /** 原始数据字段 `endingDescription`。 */
  endingDescription: string;
  /** 原始数据字段 `backgroundId`。 */
  backgroundId: string;
  /** 原始数据字段 `zoneIconId`。 */
  zoneIconId: string;
  /** 原始数据字段 `isHiddenZone`。 */
  isHiddenZone: boolean;
  /** 原始数据字段 `bgmSignal`。 */
  bgmSignal: BgmSignal;
  /** 原始数据字段 `bgmSignalWithLowSan`。 */
  bgmSignalWithLowSan: null | string;
  /** 原始数据字段 `transitionEffectId`。 */
  transitionEffectId: null | string;
}
