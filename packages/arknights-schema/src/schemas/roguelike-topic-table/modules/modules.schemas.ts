/**

 * JSON 逻辑模块 `modules/modules` 的 Zod Schema。

 */

import { z } from "zod";

import type { Module } from "../../../types/roguelike-topic-table/modules/modules.types.js";

import { CandleSchema } from "./candle/candle.schemas.js";

import { ModuleChaosSchema } from "./chaos/chaos.schemas.js";

import { ModuleCopperSchema } from "./copper/copper.schemas.js";

import { DiceSchema } from "./dice/dice.schemas.js";

import { ModuleDisasterSchema } from "./disaster/disaster.schemas.js";

import { ModuleFragmentSchema } from "./fragment/fragment.schemas.js";

import { GridZoneSchema } from "./grid-zone/grid-zone.schemas.js";

import { NodeUpgradeSchema } from "./node-upgrade/node-upgrade.schemas.js";

import { SanCheckSchema } from "./san-check/san-check.schemas.js";

import { ModuleScrapSchema } from "./scrap/scrap.schemas.js";

import { SkySchema } from "./sky/sky.schemas.js";

import { TotemBuffSchema } from "./totem-buff/totem-buff.schemas.js";

import { VisionSchema } from "./vision/vision.schemas.js";

import { ModuleWeatherSchema } from "./weather/weather.schemas.js";

import { ModuleWrathSchema } from "./wrath/wrath.schemas.js";

/**
 * roguelike_topic_table.json 中 Module 的运行时校验结构。
 */
export const ModuleSchema = z
  .strictObject({
    moduleTypes: z.array(z.string()),
    sanCheck: z.union([SanCheckSchema, z.null()]),
    dice: z.union([DiceSchema, z.null()]),
    chaos: z.union([ModuleChaosSchema, z.null()]),
    totemBuff: z.union([TotemBuffSchema, z.null()]),
    vision: z.union([VisionSchema, z.null()]),
    fragment: z.union([ModuleFragmentSchema, z.null()]),
    disaster: z.union([ModuleDisasterSchema, z.null()]),
    nodeUpgrade: z.union([NodeUpgradeSchema, z.null()]),
    copper: z.union([ModuleCopperSchema, z.null()]),
    wrath: z.union([ModuleWrathSchema, z.null()]),
    candle: z.union([CandleSchema, z.null()]),
    sky: z.union([SkySchema, z.null()]),
    weather: z.union([ModuleWeatherSchema, z.null()]),
    gridZone: z.union([GridZoneSchema, z.null()]),
    scrap: z.union([ModuleScrapSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 Module 的运行时校验结构。",
  ) satisfies z.ZodType<Module>;
