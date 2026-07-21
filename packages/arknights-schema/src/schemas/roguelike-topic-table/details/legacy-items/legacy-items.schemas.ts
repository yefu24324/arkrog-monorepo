/**

 * JSON 逻辑模块 `details/legacy-items/legacy-items` 的 Zod Schema。

 */

import { z } from "zod";

import type { LegacyItem } from "../../../../types/roguelike-topic-table/details/legacy-items/legacy-items.types.js";

/**
 * roguelike_topic_table.json 中 LegacyItem 的运行时校验结构。
 */
export const LegacyItemSchema = z
  .strictObject({
    legacyId: z.string(),
    hideLegacyItem: z.boolean(),
    legacyGroupId: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 LegacyItem 的运行时校验结构。",
  ) satisfies z.ZodType<LegacyItem>;
