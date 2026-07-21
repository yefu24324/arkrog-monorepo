/**

 * JSON 逻辑模块 `customize-data/development-raw-text-group/development-raw-text-group` 的 Zod Schema。

 */

import { z } from "zod";

import type { CustomizeDatumDevelopmentRawTextGroup } from "../../../../types/roguelike-topic-table/customize-data/development-raw-text-group/development-raw-text-group.types.js";

/**
 * roguelike_topic_table.json 中 CustomizeDatumDevelopmentRawTextGroup 的运行时校验结构。
 */
export const CustomizeDatumDevelopmentRawTextGroupSchema = z
  .strictObject({
    nodeIdList: z.array(z.string()),
    useLevelMark: z.boolean(),
    groupIconId: z.string(),
    useUpBreak: z.boolean().optional(),
    sortId: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 CustomizeDatumDevelopmentRawTextGroup 的运行时校验结构。",
  ) satisfies z.ZodType<CustomizeDatumDevelopmentRawTextGroup>;
