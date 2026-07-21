/**

 * JSON 逻辑模块 `modules/weather/weather` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  ModuleWeather,
  SubWeatherData,
} from "../../../../types/roguelike-topic-table/modules/weather/weather.types.js";

import { ErDatumSchema } from "../../shared/buffs.schemas.js";

import { Rogue2__Mutation4Schema } from "../../shared/rogue-variants.schemas.js";

/**
 * roguelike_topic_table.json 中 SubWeatherData 的运行时校验结构。
 */
export const SubWeatherDataSchema = z
  .strictObject({
    rogue_6_subweather_1: Rogue2__Mutation4Schema,
    rogue_6_subweather_2: Rogue2__Mutation4Schema,
    rogue_6_subweather_3: Rogue2__Mutation4Schema,
    rogue_6_subweather_4: Rogue2__Mutation4Schema,
  })
  .describe(
    "roguelike_topic_table.json 中 SubWeatherData 的运行时校验结构。",
  ) satisfies z.ZodType<SubWeatherData>;

/**
 * roguelike_topic_table.json 中 ModuleWeather 的运行时校验结构。
 */
export const ModuleWeatherSchema = z
  .strictObject({
    mainWeatherData: z.record(z.string(), ErDatumSchema),
    subWeatherData: SubWeatherDataSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ModuleWeather 的运行时校验结构。",
  ) satisfies z.ZodType<ModuleWeather>;
