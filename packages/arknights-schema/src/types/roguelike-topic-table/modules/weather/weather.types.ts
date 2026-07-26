/**

 * JSON 逻辑模块 `modules/weather/weather` 的显式类型。

 */

import type { ErDatum } from "../../shared/buffs.types.js";

import type { Rogue2__Mutation4 } from "../../shared/rogue-variants.types.js";

/**
 * roguelike_topic_table.json 中 ModuleWeather 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ModuleWeather {
  /** 原始数据字段 `mainWeatherData`。 */
  mainWeatherData: { [key: string]: ErDatum };
  /** 原始数据字段 `subWeatherData`。 */
  subWeatherData: SubWeatherData;
}

/**
 * roguelike_topic_table.json 中 SubWeatherData 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface SubWeatherData {
  /** 原始数据字段 `rogue_6_subweather_1`。 */
  rogue_6_subweather_1: Rogue2__Mutation4;
  /** 原始数据字段 `rogue_6_subweather_2`。 */
  rogue_6_subweather_2: Rogue2__Mutation4;
  /** 原始数据字段 `rogue_6_subweather_3`。 */
  rogue_6_subweather_3: Rogue2__Mutation4;
  /** 原始数据字段 `rogue_6_subweather_4`。 */
  rogue_6_subweather_4: Rogue2__Mutation4;
}
