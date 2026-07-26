/**

 * JSON 逻辑模块 `modules/modules` 的显式类型。

 */

import type { Candle } from "./candle/candle.types.js";

import type { ModuleChaos } from "./chaos/chaos.types.js";

import type { ModuleCopper } from "./copper/copper.types.js";

import type { Dice } from "./dice/dice.types.js";

import type { ModuleDisaster } from "./disaster/disaster.types.js";

import type { ModuleFragment } from "./fragment/fragment.types.js";

import type { GridZone } from "./grid-zone/grid-zone.types.js";

import type { NodeUpgrade } from "./node-upgrade/node-upgrade.types.js";

import type { SanCheck } from "./san-check/san-check.types.js";

import type { ModuleScrap } from "./scrap/scrap.types.js";

import type { Sky } from "./sky/sky.types.js";

import type { TotemBuff } from "./totem-buff/totem-buff.types.js";

import type { Vision } from "./vision/vision.types.js";

import type { ModuleWeather } from "./weather/weather.types.js";

import type { ModuleWrath } from "./wrath/wrath.types.js";

/**
 * roguelike_topic_table.json 中 Module 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Module {
  /** 原始数据字段 `moduleTypes`。 */
  moduleTypes: string[];
  /** 原始数据字段 `sanCheck`。 */
  sanCheck: SanCheck | null;
  /** 原始数据字段 `dice`。 */
  dice: Dice | null;
  /** 原始数据字段 `chaos`。 */
  chaos: ModuleChaos | null;
  /** 原始数据字段 `totemBuff`。 */
  totemBuff: TotemBuff | null;
  /** 原始数据字段 `vision`。 */
  vision: Vision | null;
  /** 原始数据字段 `fragment`。 */
  fragment: ModuleFragment | null;
  /** 原始数据字段 `disaster`。 */
  disaster: ModuleDisaster | null;
  /** 原始数据字段 `nodeUpgrade`。 */
  nodeUpgrade: NodeUpgrade | null;
  /** 原始数据字段 `copper`。 */
  copper: ModuleCopper | null;
  /** 原始数据字段 `wrath`。 */
  wrath: ModuleWrath | null;
  /** 原始数据字段 `candle`。 */
  candle: Candle | null;
  /** 原始数据字段 `sky`。 */
  sky: Sky | null;
  /** 原始数据字段 `weather`。 */
  weather: ModuleWeather | null;
  /** 原始数据字段 `gridZone`。 */
  gridZone: GridZone | null;
  /** 原始数据字段 `scrap`。 */
  scrap: ModuleScrap | null;
}
