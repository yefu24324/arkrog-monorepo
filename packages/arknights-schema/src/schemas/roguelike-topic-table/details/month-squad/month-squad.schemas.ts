/**

 * JSON 逻辑模块 `details/month-squad/month-squad` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  MonthSquad,
  MonthTeam,
  TeamChar,
} from "../../../../types/roguelike-topic-table/details/month-squad/month-squad.types.js";

import { ZoneIdSchema } from "../../shared/item-enums.schemas.js";

import { RewardSchema } from "../../shared/rewards.schemas.js";

/**
 * roguelike_topic_table.json 中 TeamChar 的运行时校验结构。
 */
export const TeamCharSchema = z
  .strictObject({
    teamCharId: z.string(),
    teamTmplId: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 TeamChar 的运行时校验结构。",
  ) satisfies z.ZodType<TeamChar>;

/**
 * roguelike_topic_table.json 中 MonthTeam 的运行时校验结构。
 */
export const MonthTeamSchema = z
  .strictObject({
    id: z.string(),
    teamName: z.string(),
    teamSubName: z.union([z.null(), z.string()]),
    teamFlavorDesc: z.union([z.null(), z.string()]),
    teamDes: z.string(),
    teamColor: z.string(),
    teamMonth: z.string(),
    teamYear: z.string(),
    teamIndex: z.union([z.null(), z.string()]),
    teamChars: z.array(TeamCharSchema),
    zoneId: z.union([ZoneIdSchema, z.null()]),
    chatId: z.string(),
    tokenRewardNum: z.number(),
    items: z.array(RewardSchema),
    startTime: z.number(),
    endTime: z.number(),
    taskDes: z.union([z.null(), z.string()]),
  })
  .describe(
    "roguelike_topic_table.json 中 MonthTeam 的运行时校验结构。",
  ) satisfies z.ZodType<MonthTeam>;

/**
 * roguelike_topic_table.json 中 MonthSquad 的运行时校验结构。
 */
export const MonthSquadSchema = z
  .strictObject({
    month_team_1: MonthTeamSchema,
    month_team_2: MonthTeamSchema,
    month_team_3: MonthTeamSchema.optional(),
    month_team_4: MonthTeamSchema.optional(),
    month_team_5: MonthTeamSchema.optional(),
    month_team_6: MonthTeamSchema.optional(),
    month_team_7: MonthTeamSchema.optional(),
    month_team_8: MonthTeamSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 MonthSquad 的运行时校验结构。",
  ) satisfies z.ZodType<MonthSquad>;
