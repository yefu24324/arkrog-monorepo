/**

 * JSON 逻辑模块 `details/archive-unlock-cond/archive-unlock-cond` 的显式类型。

 */

import type { EnrollId } from "../../shared/rogue-enums.types.js";

/**
 * roguelike_topic_table.json 中 ArchiveUnlockCond 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveUnlockCond {
  /** 原始数据字段 `unlockCondDesc`。 */
  unlockCondDesc: { [key: string]: UnlockCondDesc };
  /** 原始数据字段 `enroll`。 */
  enroll: { [key: string]: ArchiveUnlockCondEnroll };
}

/**
 * roguelike_topic_table.json 中 ArchiveUnlockCondEnroll 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ArchiveUnlockCondEnroll {
  /** 原始数据字段 `archiveType`。 */
  archiveType: EnrollArchiveType;
  /** 原始数据字段 `enrollId`。 */
  enrollId: EnrollId | null;
}

/**
 * roguelike_topic_table.json 中 EnrollArchiveType 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type EnrollArchiveType = "AVG" | "ENDBOOK" | "MUSIC" | "PIC";

/**
 * roguelike_topic_table.json 中 UnlockCondDesc 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface UnlockCondDesc {
  /** 原始数据字段 `archiveType`。 */
  archiveType: EnrollArchiveType;
  /** 原始数据字段 `description`。 */
  description: UnlockCondDescDescription | null;
}

/**
 * roguelike_topic_table.json 中 UnlockCondDescDescription 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export type UnlockCondDescDescription = "需要触发某个故事" | "继续探索以解锁";
