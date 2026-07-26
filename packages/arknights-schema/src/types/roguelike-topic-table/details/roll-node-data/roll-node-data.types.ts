/**

 * JSON 逻辑模块 `details/roll-node-data/roll-node-data` 的显式类型。

 */

import type { NodeTypeElement } from "../../shared/common-enums.types.js";

/**
 * roguelike_topic_table.json 中 BattleElite 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface BattleElite {
  /** 原始数据字段 `nodeType`。 */
  nodeType: NodeTypeElement;
}

/**
 * roguelike_topic_table.json 中 RollNodeData 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface RollNodeData {
  /** 原始数据字段 `zone_1`。 */
  zone_1?: Zone;
  /** 原始数据字段 `zone_2`。 */
  zone_2?: Zone;
  /** 原始数据字段 `zone_3`。 */
  zone_3?: Zone;
  /** 原始数据字段 `zone_4`。 */
  zone_4?: Zone;
  /** 原始数据字段 `zone_5`。 */
  zone_5?: Zone;
  /** 原始数据字段 `zone_6`。 */
  zone_6?: Zone;
  /** 原始数据字段 `zone_7`。 */
  zone_7?: Zone;
  /** 原始数据字段 `zone_8`。 */
  zone_8?: Zone;
  /** 原始数据字段 `zone_portal_normal_1`。 */
  zone_portal_normal_1?: Zone;
  /** 原始数据字段 `zone_portal_normal_2`。 */
  zone_portal_normal_2?: Zone;
  /** 原始数据字段 `zone_portal_normal_3`。 */
  zone_portal_normal_3?: Zone;
  /** 原始数据字段 `zone_portal_normal_4`。 */
  zone_portal_normal_4?: Zone;
  /** 原始数据字段 `zone_portal_normal_5`。 */
  zone_portal_normal_5?: Zone;
  /** 原始数据字段 `zone_portal_normal_6`。 */
  zone_portal_normal_6?: Zone;
  /** 原始数据字段 `zone_portal_revival_3`。 */
  zone_portal_revival_3?: ZonePortalRevival;
  /** 原始数据字段 `zone_portal_revival_4`。 */
  zone_portal_revival_4?: ZonePortalRevival;
  /** 原始数据字段 `zone_portal_revival_5`。 */
  zone_portal_revival_5?: ZonePortalRevival;
  /** 原始数据字段 `zone_portal_travel_1`。 */
  zone_portal_travel_1?: Zone;
  /** 原始数据字段 `zone_portal_end_1`。 */
  zone_portal_end_1?: Zone;
  /** 原始数据字段 `zone_portal_end_2`。 */
  zone_portal_end_2?: Zone;
  /** 原始数据字段 `zone_portal_normal_5_1`。 */
  zone_portal_normal_5_1?: ZonePortalNormal5_;
  /** 原始数据字段 `zone_portal_normal_5_2`。 */
  zone_portal_normal_5_2?: ZonePortalNormal5_;
  /** 原始数据字段 `zone_portal_normal_5_3`。 */
  zone_portal_normal_5_3?: ZonePortalNormal5_;
}

/**
 * roguelike_topic_table.json 中 Zone 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Zone {
  /** 原始数据字段 `zoneId`。 */
  zoneId: string;
  /** 原始数据字段 `groups`。 */
  groups: Zone1_Groups;
}

/**
 * roguelike_topic_table.json 中 Zone1_Groups 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Zone1_Groups {
  /** 原始数据字段 `BATTLE_NORMAL`。 */
  BATTLE_NORMAL: BattleElite;
  /** 原始数据字段 `BATTLE_ELITE`。 */
  BATTLE_ELITE: BattleElite;
  /** 原始数据字段 `INCIDENT`。 */
  INCIDENT?: BattleElite;
  /** 原始数据字段 `BATTLE_SHOP`。 */
  BATTLE_SHOP?: BattleElite;
  /** 原始数据字段 `WISH`。 */
  WISH?: BattleElite;
  /** 原始数据字段 `DUEL`。 */
  DUEL?: BattleElite;
  /** 原始数据字段 `EXPEDITION`。 */
  EXPEDITION?: BattleElite;
  /** 原始数据字段 `REST`。 */
  REST?: BattleElite;
  /** 原始数据字段 `SACRIFICE`。 */
  SACRIFICE?: BattleElite;
  /** 原始数据字段 `ENTERTAINMENT`。 */
  ENTERTAINMENT?: BattleElite;
}

/**
 * roguelike_topic_table.json 中 ZonePortalNormal5_ 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ZonePortalNormal5_ {
  /** 原始数据字段 `zoneId`。 */
  zoneId: string;
  /** 原始数据字段 `groups`。 */
  groups: ZonePortalNormal5_1_Groups;
}

/**
 * roguelike_topic_table.json 中 ZonePortalNormal5_1_Groups 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ZonePortalNormal5_1_Groups {
  /** 原始数据字段 `INCIDENT`。 */
  INCIDENT: BattleElite;
  /** 原始数据字段 `BATTLE_NORMAL`。 */
  BATTLE_NORMAL: BattleElite;
  /** 原始数据字段 `BATTLE_ELITE`。 */
  BATTLE_ELITE: BattleElite;
  /** 原始数据字段 `BATTLE_SHOP`。 */
  BATTLE_SHOP: BattleElite;
  /** 原始数据字段 `WISH`。 */
  WISH: BattleElite;
}

/**
 * roguelike_topic_table.json 中 ZonePortalRevival 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ZonePortalRevival {
  /** 原始数据字段 `zoneId`。 */
  zoneId: string;
  /** 原始数据字段 `groups`。 */
  groups: ZonePortalRevival3_Groups;
}

/**
 * roguelike_topic_table.json 中 ZonePortalRevival3_Groups 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ZonePortalRevival3_Groups {
  /** 原始数据字段 `BATTLE_NORMAL`。 */
  BATTLE_NORMAL: BattleElite;
  /** 原始数据字段 `BATTLE_ELITE`。 */
  BATTLE_ELITE: BattleElite;
  /** 原始数据字段 `REST`。 */
  REST: BattleElite;
  /** 原始数据字段 `EXPEDITION`。 */
  EXPEDITION: BattleElite;
  /** 原始数据字段 `DUEL`。 */
  DUEL: BattleElite;
  /** 原始数据字段 `INCIDENT`。 */
  INCIDENT: BattleElite;
  /** 原始数据字段 `BATTLE_SHOP`。 */
  BATTLE_SHOP: BattleElite;
  /** 原始数据字段 `WISH`。 */
  WISH: BattleElite;
}
