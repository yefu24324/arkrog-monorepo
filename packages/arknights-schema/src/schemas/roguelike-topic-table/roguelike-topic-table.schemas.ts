/**

 * JSON 逻辑模块 `roguelike-topic-table/roguelike-topic-table` 的 Zod Schema。

 */

import { z } from "zod";

import type { RoguelikeTopicTable } from "../../types/roguelike-topic-table/roguelike-topic-table.types.js";

import { ConstantSchema } from "./constant/constant.schemas.js";

import { CustomizeDatumSchema } from "./customize-data/customize-data.schemas.js";

import { DetailSchema } from "./details/details.schemas.js";

import { ModuleSchema } from "./modules/modules.schemas.js";

import { TopicSchema } from "./topics/topics.schemas.js";

/**
 * roguelike_topic_table.json 中 RoguelikeTopicTable 的运行时校验结构。
 */
export const RoguelikeTopicTableSchema = z
  .strictObject({
    topics: z.record(z.string(), TopicSchema),
    constant: ConstantSchema,
    details: z.record(z.string(), DetailSchema),
    modules: z.record(z.string(), ModuleSchema),
    customizeData: z.record(z.string(), CustomizeDatumSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 RoguelikeTopicTable 的运行时校验结构。",
  ) satisfies z.ZodType<RoguelikeTopicTable>;
