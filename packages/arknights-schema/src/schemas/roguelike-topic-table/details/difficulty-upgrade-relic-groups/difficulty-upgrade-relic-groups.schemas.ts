/**

 * JSON 逻辑模块 `details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  DifficultyUpgradeRelicGroup,
  RelicDatum,
} from "../../../../types/roguelike-topic-table/details/difficulty-upgrade-relic-groups/difficulty-upgrade-relic-groups.types.js";

/**
 * roguelike_topic_table.json 中 RelicDatum 的运行时校验结构。
 */
export const RelicDatumSchema = z
  .strictObject({
    relicId: z.string(),
    equivalentGrade: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 RelicDatum 的运行时校验结构。",
  ) satisfies z.ZodType<RelicDatum>;

/**
 * roguelike_topic_table.json 中 DifficultyUpgradeRelicGroup 的运行时校验结构。
 */
export const DifficultyUpgradeRelicGroupSchema = z
  .strictObject({
    relicData: z.array(RelicDatumSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 DifficultyUpgradeRelicGroup 的运行时校验结构。",
  ) satisfies z.ZodType<DifficultyUpgradeRelicGroup>;
