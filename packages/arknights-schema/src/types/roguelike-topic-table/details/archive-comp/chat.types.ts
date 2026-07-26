/**

 * JSON 逻辑模块 `details/archive-comp/chat` 的显式类型。

 */

import type { ZoneId } from "../../shared/item-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveCompChat 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveCompChat {
  /** 原始数据字段 `chat`。 */
  chat: { [key: string]: ChatValue };
}

/**
 * roguelike_topic_table.json 中 ChatItemList 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ChatItemList {
  /** 原始数据字段 `floor`。 */
  floor: number;
  /** 原始数据字段 `chatZoneId`。 */
  chatZoneId: ZoneId;
  /** 原始数据字段 `chatDesc`。 */
  chatDesc: null | string;
  /** 原始数据字段 `chatStoryId`。 */
  chatStoryId: string;
}

/**
 * roguelike_topic_table.json 中 ChatValue 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ChatValue {
  /** 原始数据字段 `sortId`。 */
  sortId: number;
  /** 原始数据字段 `chatItemList`。 */
  chatItemList: ChatItemList[];
}
