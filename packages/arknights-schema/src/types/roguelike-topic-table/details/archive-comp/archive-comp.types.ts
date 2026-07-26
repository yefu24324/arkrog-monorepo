/**

 * JSON 逻辑模块 `details/archive-comp/archive-comp` 的显式类型。

 */

import type { ArchiveCompBuff } from "./buff.types.js";

import type { ArchiveCompCapsule } from "./capsule.types.js";

import type { ArchiveCompChaos } from "./chaos.types.js";

import type { ArchiveCompChat } from "./chat.types.js";

import type { ArchiveCompCopper } from "./copper.types.js";

import type { ArchiveCompEndbook } from "./endbook.types.js";

import type {
  ArchiveCompDisaster,
  ArchiveCompFragment,
  ArchiveCompScrap,
  ArchiveCompTotem,
  ArchiveCompWeather,
  ArchiveCompWrath,
} from "./module-archives.types.js";

import type { ArchiveCompRelic } from "./relic.types.js";

import type { ArchiveCompTrap } from "./trap.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveComp 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveComp {
  /** 原始数据字段 `relic`。 */
  relic: ArchiveCompRelic;
  /** 原始数据字段 `capsule`。 */
  capsule: ArchiveCompCapsule | null;
  /** 原始数据字段 `trap`。 */
  trap: ArchiveCompTrap;
  /** 原始数据字段 `chat`。 */
  chat: ArchiveCompChat;
  /** 原始数据字段 `endbook`。 */
  endbook: ArchiveCompEndbook;
  /** 原始数据字段 `buff`。 */
  buff: ArchiveCompBuff;
  /** 原始数据字段 `totem`。 */
  totem: ArchiveCompTotem | null;
  /** 原始数据字段 `chaos`。 */
  chaos: ArchiveCompChaos | null;
  /** 原始数据字段 `fragment`。 */
  fragment: ArchiveCompFragment | null;
  /** 原始数据字段 `disaster`。 */
  disaster: ArchiveCompDisaster | null;
  /** 原始数据字段 `wrath`。 */
  wrath: ArchiveCompWrath | null;
  /** 原始数据字段 `copper`。 */
  copper: ArchiveCompCopper | null;
  /** 原始数据字段 `scrap`。 */
  scrap: ArchiveCompScrap | null;
  /** 原始数据字段 `weather`。 */
  weather: ArchiveCompWeather | null;
}
