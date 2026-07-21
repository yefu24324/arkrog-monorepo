/**

 * JSON 逻辑模块 `details/style-config/style-config` 的 Zod Schema。

 */

import { z } from "zod";

import type { StyleConfig } from "../../../../types/roguelike-topic-table/details/style-config/style-config.types.js";

/**
 * roguelike_topic_table.json 中 StyleConfig 的运行时校验结构。
 */
export const StyleConfigSchema = z
  .strictObject({
    expStyleConfig: z.null(),
  })
  .describe(
    "roguelike_topic_table.json 中 StyleConfig 的运行时校验结构。",
  ) satisfies z.ZodType<StyleConfig>;
