/**

 * JSON 逻辑模块 `modules/grid-zone/grid-zone` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BannerIcon,
  BannerText,
  BuoyItemData,
  GridZone,
  GridZoneModuleConsts,
  ScrapSideBarStepZeroHintBannerDatum,
  ZoneMissionBannerDatum,
} from "../../../../types/roguelike-topic-table/modules/grid-zone/grid-zone.types.js";

import { VariationClassSchema } from "../../shared/core.schemas.js";

/**
 * roguelike_topic_table.json 中 BannerIcon 的运行时校验结构。
 */
export const BannerIconSchema = z
  .enum([
    "zone_banner_goal_final",
    "zone_banner_goal_boss_3",
    "zone_banner_goal_boss_5",
    "zone_banner_goal_back",
  ])
  .describe(
    "roguelike_topic_table.json 中 BannerIcon 的运行时校验结构。",
  ) satisfies z.ZodType<BannerIcon>;

/**
 * roguelike_topic_table.json 中 BannerText 的运行时校验结构。
 */
export const BannerTextSchema = z
  .enum([
    "目标：找到<color=#0f907f>险路尽头</color>节点进入下一区域",
    "目标：找到<color=#0f907f>险路恶敌</color>节点并取得胜利",
    "自由探索，行动力耗尽后，将返回林间",
  ])
  .describe(
    "roguelike_topic_table.json 中 BannerText 的运行时校验结构。",
  ) satisfies z.ZodType<BannerText>;

/**
 * roguelike_topic_table.json 中 BuoyItemData 的运行时校验结构。
 */
export const BuoyItemDataSchema = z
  .strictObject({
    itemId: z.string(),
    isVisible: z.boolean(),
  })
  .describe(
    "roguelike_topic_table.json 中 BuoyItemData 的运行时校验结构。",
  ) satisfies z.ZodType<BuoyItemData>;

/**
 * roguelike_topic_table.json 中 GridZoneModuleConsts 的运行时校验结构。
 */
export const GridZoneModuleConstsSchema = z
  .strictObject({
    savageBubble: z.string(),
    secretZoneDisableBuff: z.string(),
    maxBannerDifficulty: z.number(),
    focusViewBossHintStageId: VariationClassSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 GridZoneModuleConsts 的运行时校验结构。",
  ) satisfies z.ZodType<GridZoneModuleConsts>;

/**
 * roguelike_topic_table.json 中 ScrapSideBarStepZeroHintBannerDatum 的运行时校验结构。
 */
export const ScrapSideBarStepZeroHintBannerDatumSchema = z
  .strictObject({
    zoneId: z.string(),
    hintText: z.string(),
  })
  .describe(
    "roguelike_topic_table.json 中 ScrapSideBarStepZeroHintBannerDatum 的运行时校验结构。",
  ) satisfies z.ZodType<ScrapSideBarStepZeroHintBannerDatum>;

/**
 * roguelike_topic_table.json 中 ZoneMissionBannerDatum 的运行时校验结构。
 */
export const ZoneMissionBannerDatumSchema = z
  .strictObject({
    zoneId: z.string(),
    bannerText: BannerTextSchema,
    bannerIcon: BannerIconSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ZoneMissionBannerDatum 的运行时校验结构。",
  ) satisfies z.ZodType<ZoneMissionBannerDatum>;

/**
 * roguelike_topic_table.json 中 GridZone 的运行时校验结构。
 */
export const GridZoneSchema = z
  .strictObject({
    zoneMissionBannerData: z.record(z.string(), ZoneMissionBannerDatumSchema),
    scrapSideBarStepZeroHintBannerData: z.record(
      z.string(),
      ScrapSideBarStepZeroHintBannerDatumSchema,
    ),
    buoyItemDatas: z.record(z.string(), BuoyItemDataSchema),
    moduleConsts: GridZoneModuleConstsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 GridZone 的运行时校验结构。",
  ) satisfies z.ZodType<GridZone>;
