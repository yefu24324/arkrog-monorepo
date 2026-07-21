/**

 * JSON 逻辑模块 `modules/disaster/disaster` 的 Zod Schema。

 */

import { z } from "zod";

import type { ModuleDisaster } from "../../../../types/roguelike-topic-table/modules/disaster/disaster.types.js";

import { ErDatumSchema } from "../../shared/buffs.schemas.js";

/**
 * roguelike_topic_table.json 中 ModuleDisaster 的运行时校验结构。
 */
export const ModuleDisasterSchema = z
  .strictObject({
    disasterData: z.record(z.string(), ErDatumSchema),
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleDisaster 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleDisaster>;
