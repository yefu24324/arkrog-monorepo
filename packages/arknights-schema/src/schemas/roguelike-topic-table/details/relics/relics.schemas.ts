/**

 * JSON 逻辑模块 `details/relics/relics` 的 Zod Schema。

 */

import { z } from "zod";

import type { DetailRelic } from "../../../../types/roguelike-topic-table/details/relics/relics.types.js";

import { BuffElementSchema } from "../../shared/buffs.schemas.js";

/**
 * roguelike_topic_table.json 中 DetailRelic 的运行时校验结构。
 */
export const DetailRelicSchema = z
  .strictObject({
    id: z.string(),
    buffs: z.array(BuffElementSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 DetailRelic 的运行时校验结构。",
  ) satisfies z.ZodType<DetailRelic>;
