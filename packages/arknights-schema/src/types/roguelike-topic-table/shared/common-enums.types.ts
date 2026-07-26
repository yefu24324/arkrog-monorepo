/**

 * JSON 逻辑模块 `shared/common-enums` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 Category 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type Category = "ALL" | "TIER_5" | "TIER_6";

/**
 * roguelike_topic_table.json 中 DisplayForm 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type DisplayForm = "PERCENTAGE" | "ABSOLUTE_VAL";

/**
 * roguelike_topic_table.json 中 EffectType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type EffectType = "RAW_TEXT_EFFECT" | "BUFF" | "RAW_TEXT_BAND";

/**
 * roguelike_topic_table.json 中 HistoricalRecordsMode 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type HistoricalRecordsMode = "NONE" | "NORMAL" | "HARD";

/**
 * roguelike_topic_table.json 中 Mode 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type Mode = "EASY" | "NORMAL" | "MONTH_TEAM" | "CHALLENGE";

/**
 * roguelike_topic_table.json 中 NodeTypeElement 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type NodeTypeElement =
  | "BATTLE_ELITE"
  | "BATTLE_NORMAL"
  | "BATTLE_SHOP"
  | "DUEL"
  | "EXPEDITION"
  | "INCIDENT"
  | "WISH"
  | "REST"
  | "SACRIFICE"
  | "ENTERTAINMENT"
  | "BATTLE_BOSS"
  | "PORTAL";

/**
 * roguelike_topic_table.json 中 ResultType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type ResultType = "GOOD" | "BAD" | "NORMAL" | "BEST" | "VERYBAD";

/**
 * roguelike_topic_table.json 中 ValidModeEnum 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type ValidModeEnum = "DIFFICULTY" | "NORMAL" | "KEY";
