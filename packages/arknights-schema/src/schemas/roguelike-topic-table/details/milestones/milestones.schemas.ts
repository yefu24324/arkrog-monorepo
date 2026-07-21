/**

 * JSON 逻辑模块 `details/milestones/milestones` 的 Zod Schema。

 */

import { z } from "zod";

import type { Milestone } from "../../../../types/roguelike-topic-table/details/milestones/milestones.types.js";

import { ItemTypeEnumSchema } from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 Milestone 的运行时校验结构。
 */
export const MilestoneSchema = z
  .strictObject({
    id: z.string(),
    level: z.number(),
    tokenNum: z.number(),
    nextTokenNum: z.number(),
    itemID: z.string(),
    itemType: ItemTypeEnumSchema,
    itemCount: z.number(),
    isGoodPrize: z.boolean(),
    isGrandPrize: z.boolean(),
    isReturnDisplay: z.boolean(),
    returnSortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Milestone 的运行时校验结构。",
  ) satisfies z.ZodType<Milestone>;
