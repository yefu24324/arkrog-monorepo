/**

 * JSON 逻辑模块 `details/ending-detail-list/ending-detail-list` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 EndingDetailList 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface EndingDetailList {
  /** 原始数据字段 `textId`。 */
  textId: string;
  /** 原始数据字段 `text`。 */
  text: string;
  /** 原始数据字段 `eventType`。 */
  eventType: EventType;
  /** 原始数据字段 `spZoneEvtType`。 */
  spZoneEvtType: SpZoneEvtType | null;
  /** 原始数据字段 `showType`。 */
  showType: EndingDetailListShowType;
  /** 原始数据字段 `choiceSceneId`。 */
  choiceSceneId: null | string;
  /** 原始数据字段 `paramList`。 */
  paramList: string[];
  /** 原始数据字段 `otherPara1`。 */
  otherPara1: null;
}

/**
 * roguelike_topic_table.json 中 EndingDetailListShowType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type EndingDetailListShowType =
  "SUM" | "SHOW_CONST" | "SHOW_CHOICE" | "SHOW_BOSS_END" | "SHOW_BATTLE";

/**
 * roguelike_topic_table.json 中 EventType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type EventType =
  | "INCIDENT"
  | "ENTERTAINMENT"
  | "BATTLE_BOSS"
  | "STASHED_RECRUIT"
  | "NONE"
  | "SPECIAL_ZONE";

/**
 * roguelike_topic_table.json 中 SpZoneEvtType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type SpZoneEvtType = "TRIAL_GATE";
