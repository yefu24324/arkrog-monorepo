/**

 * JSON 逻辑模块 `modules/grid-zone/grid-zone` 的显式类型。

 */

import type { VariationClass } from "../../shared/core.types.js";

/**
 * roguelike_topic_table.json 中 BannerIcon 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type BannerIcon =
  | "zone_banner_goal_final"
  | "zone_banner_goal_boss_3"
  | "zone_banner_goal_boss_5"
  | "zone_banner_goal_back";

/**
 * roguelike_topic_table.json 中 BannerText 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type BannerText =
  | "目标：找到<color=#0f907f>险路尽头</color>节点进入下一区域"
  | "目标：找到<color=#0f907f>险路恶敌</color>节点并取得胜利"
  | "自由探索，行动力耗尽后，将返回林间";

/**
 * roguelike_topic_table.json 中 BuoyItemData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface BuoyItemData {
  /** 原始数据字段 `itemId`。 */
  itemId: string;
  /** 原始数据字段 `isVisible`。 */
  isVisible: boolean;
}

/**
 * roguelike_topic_table.json 中 GridZone 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface GridZone {
  /** 原始数据字段 `zoneMissionBannerData`。 */
  zoneMissionBannerData: { [key: string]: ZoneMissionBannerDatum };
  /** 原始数据字段 `scrapSideBarStepZeroHintBannerData`。 */
  scrapSideBarStepZeroHintBannerData: {
    [key: string]: ScrapSideBarStepZeroHintBannerDatum;
  };
  /** 原始数据字段 `buoyItemDatas`。 */
  buoyItemDatas: { [key: string]: BuoyItemData };
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: GridZoneModuleConsts;
}

/**
 * roguelike_topic_table.json 中 GridZoneModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface GridZoneModuleConsts {
  /** 原始数据字段 `savageBubble`。 */
  savageBubble: string;
  /** 原始数据字段 `secretZoneDisableBuff`。 */
  secretZoneDisableBuff: string;
  /** 原始数据字段 `maxBannerDifficulty`。 */
  maxBannerDifficulty: number;
  /** 原始数据字段 `focusViewBossHintStageId`。 */
  focusViewBossHintStageId: VariationClass;
}

/**
 * roguelike_topic_table.json 中 ScrapSideBarStepZeroHintBannerDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ScrapSideBarStepZeroHintBannerDatum {
  /** 原始数据字段 `zoneId`。 */
  zoneId: string;
  /** 原始数据字段 `hintText`。 */
  hintText: string;
}

/**
 * roguelike_topic_table.json 中 ZoneMissionBannerDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ZoneMissionBannerDatum {
  /** 原始数据字段 `zoneId`。 */
  zoneId: string;
  /** 原始数据字段 `bannerText`。 */
  bannerText: BannerText;
  /** 原始数据字段 `bannerIcon`。 */
  bannerIcon: BannerIcon;
}
