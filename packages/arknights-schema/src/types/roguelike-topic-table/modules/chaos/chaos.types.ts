/**

 * JSON 逻辑模块 `modules/chaos/chaos` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 ChaosData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ChaosData {
  /** 原始数据字段 `chaosId`。 */
  chaosId: string;
  /** 原始数据字段 `level`。 */
  level: number;
  /** 原始数据字段 `nextChaosId`。 */
  nextChaosId: null | string;
  /** 原始数据字段 `prevChaosId`。 */
  prevChaosId: null | string;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `functionDesc`。 */
  functionDesc: string;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `sound`。 */
  sound: ChaosDataSound;
  /** 原始数据字段 `sortId`。 */
  sortId: number;
}

/**
 * roguelike_topic_table.json 中 ChaosDataSound 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type ChaosDataSound =
  "ON_ROGUELIKE_VARIATION1" | "ON_ROGUELIKE_VARIATION2";

/**
 * roguelike_topic_table.json 中 ChaosModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ChaosModuleConsts {
  /** 原始数据字段 `maxChaosLevel`。 */
  maxChaosLevel: number;
  /** 原始数据字段 `maxChaosSlot`。 */
  maxChaosSlot: number;
  /** 原始数据字段 `chaosNotMaxDescription`。 */
  chaosNotMaxDescription: string;
  /** 原始数据字段 `chaosMaxDescription`。 */
  chaosMaxDescription: string;
  /** 原始数据字段 `chaosPredictDescription`。 */
  chaosPredictDescription: string;
}

/**
 * roguelike_topic_table.json 中 ChaosRange 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ChaosRange {
  /** 原始数据字段 `chaosMax`。 */
  chaosMax: number;
  /** 原始数据字段 `chaosDungeonEffect`。 */
  chaosDungeonEffect: string;
}

/**
 * roguelike_topic_table.json 中 LevelInfoDict 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface LevelInfoDict {
  /** 原始数据字段 `rule_1`。 */
  rule_1: { [key: string]: Rule };
  /** 原始数据字段 `rule_2`。 */
  rule_2: { [key: string]: Rule };
  /** 原始数据字段 `rule_3`。 */
  rule_3: { [key: string]: Rule };
}

/**
 * roguelike_topic_table.json 中 ModuleChaos 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ModuleChaos {
  /** 原始数据字段 `chaosDatas`。 */
  chaosDatas: { [key: string]: ChaosData };
  /** 原始数据字段 `chaosRanges`。 */
  chaosRanges: ChaosRange[];
  /** 原始数据字段 `levelInfoDict`。 */
  levelInfoDict: LevelInfoDict;
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: ChaosModuleConsts;
}

/**
 * roguelike_topic_table.json 中 Rule 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Rule {
  /** 原始数据字段 `chaosLevelBeginNum`。 */
  chaosLevelBeginNum: number;
  /** 原始数据字段 `chaosLevelEndNum`。 */
  chaosLevelEndNum: number;
}
