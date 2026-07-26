/**

 * JSON 逻辑模块 `details/battle-summery-descriptions/battle-summery-descriptions` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 BattleSummeryDescriptions 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface BattleSummeryDescriptions {
  /** 原始数据字段 `EASY`。 */
  EASY: ChallengeClass;
  /** 原始数据字段 `NORMAL`。 */
  NORMAL: ChallengeClass;
  /** 原始数据字段 `HARD`。 */
  HARD: ChallengeClass;
  /** 原始数据字段 `MONTH_TEAM`。 */
  MONTH_TEAM: ChallengeClass;
  /** 原始数据字段 `CHALLENGE`。 */
  CHALLENGE: ChallengeClass;
}

/**
 * roguelike_topic_table.json 中 ChallengeClass 的显式 TypeScript 定义。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface ChallengeClass {
  /** 原始数据字段 `randomDescriptionList`。 */
  randomDescriptionList: string[];
}
