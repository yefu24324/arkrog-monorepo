/**

 * JSON 逻辑模块 `details/roll-node-data/roll-node-data` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  BattleElite,
  RollNodeData,
  Zone,
  Zone1_Groups,
  ZonePortalNormal5_,
  ZonePortalNormal5_1_Groups,
  ZonePortalRevival,
  ZonePortalRevival3_Groups,
} from "../../../../types/roguelike-topic-table/details/roll-node-data/roll-node-data.types.js";

import { NodeTypeElementSchema } from "../../shared/common-enums.schemas.js";

/**
 * roguelike_topic_table.json 中 BattleElite 的运行时校验结构。
 */
export const BattleEliteSchema = z
  .strictObject({
    nodeType: NodeTypeElementSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 BattleElite 的运行时校验结构。",
  ) satisfies z.ZodType<BattleElite>;

/**
 * roguelike_topic_table.json 中 Zone1_Groups 的运行时校验结构。
 */
export const Zone1_GroupsSchema = z
  .strictObject({
    BATTLE_NORMAL: BattleEliteSchema,
    BATTLE_ELITE: BattleEliteSchema,
    INCIDENT: BattleEliteSchema.optional(),
    BATTLE_SHOP: BattleEliteSchema.optional(),
    WISH: BattleEliteSchema.optional(),
    DUEL: BattleEliteSchema.optional(),
    EXPEDITION: BattleEliteSchema.optional(),
    REST: BattleEliteSchema.optional(),
    SACRIFICE: BattleEliteSchema.optional(),
    ENTERTAINMENT: BattleEliteSchema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 Zone1_Groups 的运行时校验结构。",
  ) satisfies z.ZodType<Zone1_Groups>;

/**
 * roguelike_topic_table.json 中 ZonePortalNormal5_1_Groups 的运行时校验结构。
 */
export const ZonePortalNormal5_1_GroupsSchema = z
  .strictObject({
    INCIDENT: BattleEliteSchema,
    BATTLE_NORMAL: BattleEliteSchema,
    BATTLE_ELITE: BattleEliteSchema,
    BATTLE_SHOP: BattleEliteSchema,
    WISH: BattleEliteSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ZonePortalNormal5_1_Groups 的运行时校验结构。",
  ) satisfies z.ZodType<ZonePortalNormal5_1_Groups>;

/**
 * roguelike_topic_table.json 中 ZonePortalRevival3_Groups 的运行时校验结构。
 */
export const ZonePortalRevival3_GroupsSchema = z
  .strictObject({
    BATTLE_NORMAL: BattleEliteSchema,
    BATTLE_ELITE: BattleEliteSchema,
    REST: BattleEliteSchema,
    EXPEDITION: BattleEliteSchema,
    DUEL: BattleEliteSchema,
    INCIDENT: BattleEliteSchema,
    BATTLE_SHOP: BattleEliteSchema,
    WISH: BattleEliteSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ZonePortalRevival3_Groups 的运行时校验结构。",
  ) satisfies z.ZodType<ZonePortalRevival3_Groups>;

/**
 * roguelike_topic_table.json 中 ZonePortalNormal5_ 的运行时校验结构。
 */
export const ZonePortalNormal5_Schema = z
  .strictObject({
    zoneId: z.string(),
    groups: ZonePortalNormal5_1_GroupsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ZonePortalNormal5_ 的运行时校验结构。",
  ) satisfies z.ZodType<ZonePortalNormal5_>;

/**
 * roguelike_topic_table.json 中 ZonePortalRevival 的运行时校验结构。
 */
export const ZonePortalRevivalSchema = z
  .strictObject({
    zoneId: z.string(),
    groups: ZonePortalRevival3_GroupsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 ZonePortalRevival 的运行时校验结构。",
  ) satisfies z.ZodType<ZonePortalRevival>;

/**
 * roguelike_topic_table.json 中 Zone 的运行时校验结构。
 */
export const ZoneSchema = z
  .strictObject({
    zoneId: z.string(),
    groups: Zone1_GroupsSchema,
  })
  .describe(
    "roguelike_topic_table.json 中 Zone 的运行时校验结构。",
  ) satisfies z.ZodType<Zone>;

/**
 * roguelike_topic_table.json 中 RollNodeData 的运行时校验结构。
 */
export const RollNodeDataSchema = z
  .strictObject({
    zone_1: ZoneSchema.optional(),
    zone_2: ZoneSchema.optional(),
    zone_3: ZoneSchema.optional(),
    zone_4: ZoneSchema.optional(),
    zone_5: ZoneSchema.optional(),
    zone_6: ZoneSchema.optional(),
    zone_7: ZoneSchema.optional(),
    zone_8: ZoneSchema.optional(),
    zone_portal_normal_1: ZoneSchema.optional(),
    zone_portal_normal_2: ZoneSchema.optional(),
    zone_portal_normal_3: ZoneSchema.optional(),
    zone_portal_normal_4: ZoneSchema.optional(),
    zone_portal_normal_5: ZoneSchema.optional(),
    zone_portal_normal_6: ZoneSchema.optional(),
    zone_portal_revival_3: ZonePortalRevivalSchema.optional(),
    zone_portal_revival_4: ZonePortalRevivalSchema.optional(),
    zone_portal_revival_5: ZonePortalRevivalSchema.optional(),
    zone_portal_travel_1: ZoneSchema.optional(),
    zone_portal_end_1: ZoneSchema.optional(),
    zone_portal_end_2: ZoneSchema.optional(),
    zone_portal_normal_5_1: ZonePortalNormal5_Schema.optional(),
    zone_portal_normal_5_2: ZonePortalNormal5_Schema.optional(),
    zone_portal_normal_5_3: ZonePortalNormal5_Schema.optional(),
  })
  .describe(
    "roguelike_topic_table.json 中 RollNodeData 的运行时校验结构。",
  ) satisfies z.ZodType<RollNodeData>;
