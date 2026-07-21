/**

 * JSON 逻辑模块 `shared/rogue-variants` 的显式类型。

 */

import type { BuffDisplayInfo, BuffElement } from "./buffs.types.js";

import type { EffectType, ValidModeEnum } from "./common-enums.types.js";

import type { IconId } from "./item-enums.types.js";

import type {
  EnrollId,
  GroupId,
  Rogue2_Mutation1_BuffType,
} from "./rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 Ro4FailEnding1 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Ro4FailEnding1 {
  /** 原始数据字段 `id`。 */
  id: IconId;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `iconId`。 */
  iconId: IconId;
  /** 原始数据字段 `priority`。 */
  priority?: number;
  /** 原始数据字段 `unlockDesc`。 */
  unlockDesc?: null | string;
}

/**
 * roguelike_topic_table.json 中 Rogue2__Mutation4 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue2__Mutation4 {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `buffType`。 */
  buffType?: Rogue2_Mutation1_BuffType;
  /** 原始数据字段 `iconId`。 */
  iconId: null | string;
  /** 原始数据字段 `relatedItemId`。 */
  relatedItemId?: null | string;
  /** 原始数据字段 `outerName`。 */
  outerName?: string;
  /** 原始数据字段 `innerName`。 */
  innerName?: string;
  /** 原始数据字段 `functionDesc`。 */
  functionDesc: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `buffs`。 */
  buffs?: BuffElement[];
  /** 原始数据字段 `type`。 */
  type?: string;
  /** 原始数据字段 `sound`。 */
  sound?: null | string;
  /** 原始数据字段 `isPositive`。 */
  isPositive?: boolean;
  /** 原始数据字段 `name`。 */
  name?: string;
}

/**
 * roguelike_topic_table.json 中 Rogue2_Mutation1_Class 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue2_Mutation1_Class {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `buffType`。 */
  buffType?: Rogue2_Mutation1_BuffType;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
  /** 原始数据字段 `relatedItemId`。 */
  relatedItemId?: null | string;
  /** 原始数据字段 `outerName`。 */
  outerName: string;
  /** 原始数据字段 `innerName`。 */
  innerName: string;
  /** 原始数据字段 `functionDesc`。 */
  functionDesc: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `buffs`。 */
  buffs: BuffElement[];
}

/**
 * roguelike_topic_table.json 中 Rogue3__Difficulty1 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue3__Difficulty1 {
  /** 原始数据字段 `buffId`。 */
  buffId: string;
  /** 原始数据字段 `nodeType`。 */
  nodeType: ValidModeEnum;
  /** 原始数据字段 `frontNodeId`。 */
  frontNodeId: string[];
  /** 原始数据字段 `nextNodeId`。 */
  nextNodeId: string[];
  /** 原始数据字段 `positionRow`。 */
  positionRow: number;
  /** 原始数据字段 `positionOrder`。 */
  positionOrder: number;
  /** 原始数据字段 `tokenCost`。 */
  tokenCost: number;
  /** 原始数据字段 `buffName`。 */
  buffName: string;
  /** 原始数据字段 `activeIconId`。 */
  activeIconId?: string;
  /** 原始数据字段 `inactiveIconId`。 */
  inactiveIconId?: string;
  /** 原始数据字段 `bottomIconId`。 */
  bottomIconId?: string;
  /** 原始数据字段 `effectType`。 */
  effectType: EffectType;
  /** 原始数据字段 `rawDesc`。 */
  rawDesc: string[];
  /** 原始数据字段 `buffDisplayInfo`。 */
  buffDisplayInfo: BuffDisplayInfo[];
  /** 原始数据字段 `groupId`。 */
  groupId: GroupId;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
  /** 原始数据字段 `buffIconId`。 */
  buffIconId?: string;
}

/**
 * roguelike_topic_table.json 中 Rogue3__ExploreTool1 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rogue3__ExploreTool1 {
  /** 原始数据字段 `itemId`。 */
  itemId: string;
  /** 原始数据字段 `trapId`。 */
  trapId: string;
  /** 原始数据字段 `trapDesc`。 */
  trapDesc: string;
}
