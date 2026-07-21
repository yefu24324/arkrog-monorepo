/**

 * JSON 逻辑模块 `details/archive-comp/archive-comp` 的 Zod Schema。

 */

import { z } from "zod";

import type { ArchiveComp } from "../../../../types/roguelike-topic-table/details/archive-comp/archive-comp.types.js";

import { ArchiveCompBuffSchema } from "./buff.schemas.js";

import { ArchiveCompCapsuleSchema } from "./capsule.schemas.js";

import { ArchiveCompChaosSchema } from "./chaos.schemas.js";

import { ArchiveCompChatSchema } from "./chat.schemas.js";

import { ArchiveCompCopperSchema } from "./copper.schemas.js";

import { ArchiveCompEndbookSchema } from "./endbook.schemas.js";

import {
  ArchiveCompDisasterSchema,
  ArchiveCompFragmentSchema,
  ArchiveCompScrapSchema,
  ArchiveCompTotemSchema,
  ArchiveCompWeatherSchema,
  ArchiveCompWrathSchema,
} from "./module-archives.schemas.js";

import { ArchiveCompRelicSchema } from "./relic.schemas.js";

import { ArchiveCompTrapSchema } from "./trap.schemas.js";

/**
 * roguelike_topic_table.json 中 ArchiveComp 的运行时校验结构。
 */
export const ArchiveCompSchema = z
  .strictObject({
    relic: ArchiveCompRelicSchema,
    capsule: z.union([ArchiveCompCapsuleSchema, z.null()]),
    trap: ArchiveCompTrapSchema,
    chat: ArchiveCompChatSchema,
    endbook: ArchiveCompEndbookSchema,
    buff: ArchiveCompBuffSchema,
    totem: z.union([ArchiveCompTotemSchema, z.null()]),
    chaos: z.union([ArchiveCompChaosSchema, z.null()]),
    fragment: z.union([ArchiveCompFragmentSchema, z.null()]),
    disaster: z.union([ArchiveCompDisasterSchema, z.null()]),
    wrath: z.union([ArchiveCompWrathSchema, z.null()]),
    copper: z.union([ArchiveCompCopperSchema, z.null()]),
    scrap: z.union([ArchiveCompScrapSchema, z.null()]),
    weather: z.union([ArchiveCompWeatherSchema, z.null()]),
  })
  .describe(
    "roguelike_topic_table.json 中 ArchiveComp 的运行时校验结构。",
  ) satisfies z.ZodType<ArchiveComp>;
