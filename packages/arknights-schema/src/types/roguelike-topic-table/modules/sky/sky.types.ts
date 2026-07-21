/**

 * JSON 逻辑模块 `modules/sky/sky` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 EffId 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type EffId = "sp_green" | "sp_cyan";

/**
 * roguelike_topic_table.json 中 NodeDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface NodeDatum {
  /** 原始数据字段 `evtType`。 */
  evtType: string;
  /** 原始数据字段 `name`。 */
  name: string;
  /** 原始数据字段 `iconId`。 */
  iconId: string;
  /** 原始数据字段 `effId`。 */
  effId: EffId;
  /** 原始数据字段 `desc`。 */
  desc: string;
  /** 原始数据字段 `nameBkgClr`。 */
  nameBkgClr: string;
  /** 原始数据字段 `selectClr`。 */
  selectClr: string;
  /** 原始数据字段 `isRepeatedly`。 */
  isRepeatedly: boolean;
}

/**
 * roguelike_topic_table.json 中 Sky 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Sky {
  /** 原始数据字段 `nodeData`。 */
  nodeData: { [key: string]: NodeDatum };
  /** 原始数据字段 `subTypeData`。 */
  subTypeData: SkySubTypeDatum[];
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: SkyModuleConsts;
}

/**
 * roguelike_topic_table.json 中 SkyModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SkyModuleConsts {
  /** 原始数据字段 `skyApItemId`。 */
  skyApItemId: string;
  /** 原始数据字段 `skyMaxColumns`。 */
  skyMaxColumns: number;
  /** 原始数据字段 `skySacrificeChoiceDynamicKey`。 */
  skySacrificeChoiceDynamicKey: string;
}

/**
 * roguelike_topic_table.json 中 SkySubTypeDatum 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface SkySubTypeDatum {
  /** 原始数据字段 `evtType`。 */
  evtType: string;
  /** 原始数据字段 `subTypeId`。 */
  subTypeId: number;
  /** 原始数据字段 `desc`。 */
  desc: string;
}
