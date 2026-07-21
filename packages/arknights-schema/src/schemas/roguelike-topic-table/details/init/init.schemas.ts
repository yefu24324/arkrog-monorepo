/**

 * JSON 逻辑模块 `details/init/init` 的 Zod Schema。

 */

import { z } from "zod";

import type { Init } from "../../../../types/roguelike-topic-table/details/init/init.types.js";

import { ModeSchema } from "../../shared/common-enums.schemas.js";

import {
  IconIdSchema,
  StyleIdSchema,
} from "../../shared/item-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 Init 的运行时校验结构。
 */
export const InitSchema = z
  .strictObject({
    modeId: ModeSchema,
    modeGrade: z.number(),
    predefinedId: z.union([z.null(), z.string()]),
    predefinedStyle: z.union([StyleIdSchema, z.null()]),
    initialBandRelic: z.array(z.string()),
    initialRecruitGroup: z.union([z.array(IconIdSchema), z.null()]),
    initialHp: z.number(),
    initialPopulation: z.number(),
    initialGold: z.number(),
    initialSquadCapacity: z.number(),
    initialShield: z.number(),
    initialMaxHp: z.number(),
    initialKey: z.number(),
  })
  .describe(
    "roguelike_topic_table.json 中 Init 的运行时校验结构。",
  ) satisfies z.ZodType<Init>;
