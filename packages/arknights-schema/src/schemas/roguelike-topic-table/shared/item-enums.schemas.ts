/**

 * JSON 逻辑模块 `shared/item-enums` 的 Zod Schema。

 */

import { z } from "zod";

import type {
  IconId,
  ItemTypeEnum,
  Profession,
  Rarity,
  RarityList,
  RewardItemTypeEnum,
  StyleId,
  ZoneId,
} from "../../../types/roguelike-topic-table/shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 IconId 的运行时校验结构。
 */
export const IconIdSchema = z
  .enum([
    "recruit_group_1",
    "recruit_group_2",
    "recruit_group_3",
    "recruit_group_random",
    "recruit_group_c4",
    "recruit_group_c5",
    "recruit_group_m1",
    "recruit_group_m2",
    "recruit_group_m3",
    "recruit_group_m4",
    "recruit_group_m5",
    "recruit_group_m6",
    "recruit_group_m7",
    "recruit_group_m8",
    "ro3_recruit_group_c1",
    "recruit_group_c9",
    "recruit_group_c10",
    "recruit_group_4",
    "recruit_group_5",
    "rl04_fail_icon_1a",
    "ro4_fail_ending_1",
  ])
  .describe(
    "roguelike_topic_table.json 中 IconId 的运行时校验结构。",
  ) satisfies z.ZodType<IconId>;

/**
 * roguelike_topic_table.json 中 ItemTypeEnum 的运行时校验结构。
 */
export const ItemTypeEnumSchema = z
  .enum([
    "MATERIAL",
    "CARD_EXP",
    "GOLD",
    "CHAR",
    "CHAR_SKIN",
    "HOME_BACKGROUND",
    "HOME_THEME",
    "PLAYER_AVATAR",
    "UNI_COLLECTION",
    "FURN",
    "ITEM_PACK",
    "VOUCHER_SKILL_SPECIALLEVELMAX_6",
  ])
  .describe(
    "roguelike_topic_table.json 中 ItemTypeEnum 的运行时校验结构。",
  ) satisfies z.ZodType<ItemTypeEnum>;

/**
 * roguelike_topic_table.json 中 Profession 的运行时校验结构。
 */
export const ProfessionSchema = z
  .enum([
    "WARRIOR",
    "SNIPER",
    "TANK",
    "MEDIC",
    "SUPPORT",
    "CASTER",
    "SPECIAL",
    "PIONEER",
    "NONE",
  ])
  .describe(
    "roguelike_topic_table.json 中 Profession 的运行时校验结构。",
  ) satisfies z.ZodType<Profession>;

/**
 * roguelike_topic_table.json 中 RarityList 的运行时校验结构。
 */
export const RarityListSchema = z
  .enum(["TIER_1", "TIER_2", "TIER_3", "TIER_4", "TIER_5", "TIER_6"])
  .describe(
    "roguelike_topic_table.json 中 RarityList 的运行时校验结构。",
  ) satisfies z.ZodType<RarityList>;

/**
 * roguelike_topic_table.json 中 Rarity 的运行时校验结构。
 */
export const RaritySchema = z
  .enum(["NONE", "NORMAL", "BORN", "SUPER_RARE", "RARE"])
  .describe(
    "roguelike_topic_table.json 中 Rarity 的运行时校验结构。",
  ) satisfies z.ZodType<Rarity>;

/**
 * roguelike_topic_table.json 中 RewardItemTypeEnum 的运行时校验结构。
 */
export const RewardItemTypeEnumSchema = z
  .enum([
    "HP",
    "GOLD",
    "POPULATION",
    "SQUAD_CAPACITY",
    "EXP",
    "RECRUIT_TICKET",
    "UPGRADE_TICKET",
    "BAND",
    "RELIC",
    "ACTIVE_TOOL",
    "CAPSULE",
    "FEATURE",
    "HPMAX",
    "KEY_POINT",
    "SAN_POINT",
    "DICE_POINT",
    "SHIELD",
    "PILL",
    "BIGPILL",
    "DICE_TYPE",
    "CUSTOM_TICKET",
    "LOCKED_TREASURE",
    "VISION",
    "CHAOS",
    "CHAOS_PURIFY",
    "CHAOS_LEVEL",
    "TOTEM",
    "TOTEM_EFFECT",
    "EXPLORE_TOOL",
    "MAX_WEIGHT",
    "DISASTER",
    "DISASTER_TYPE",
    "ABSTRACT_DISASTER",
    "FRAGMENT",
    "DIVINATION_KIT",
    "SPECIAL_ZONE_AP",
    "COPPER_DRAW_NUM",
    "STASH_RECRUIT_LIMIT",
    "COPPER_BUFF",
    "COPPER",
    "WRATH",
    "LEGACY",
    "NODE_BUOY",
    "SCRAP",
    "CHARACTER",
  ])
  .describe(
    "roguelike_topic_table.json 中 RewardItemTypeEnum 的运行时校验结构。",
  ) satisfies z.ZodType<RewardItemTypeEnum>;

/**
 * roguelike_topic_table.json 中 StyleId 的运行时校验结构。
 */
export const StyleIdSchema = z
  .enum([
    "rogue_3_style_default",
    "rogue_3_style_challenge",
    "rogue_4_style_default",
    "rogue_4_style_challenge",
    "rogue_5_style_default",
    "rogue_5_style_challenge",
    "rogue_6_style_default",
  ])
  .describe(
    "roguelike_topic_table.json 中 StyleId 的运行时校验结构。",
  ) satisfies z.ZodType<StyleId>;

/**
 * roguelike_topic_table.json 中 ZoneId 的运行时校验结构。
 */
export const ZoneIdSchema = z
  .enum(["zone_1", "zone_3", "zone_5"])
  .describe(
    "roguelike_topic_table.json 中 ZoneId 的运行时校验结构。",
  ) satisfies z.ZodType<ZoneId>;
