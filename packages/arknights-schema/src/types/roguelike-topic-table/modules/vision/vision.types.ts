/**

 * JSON 逻辑模块 `modules/vision/vision` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 Vision 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Vision {
  /** 原始数据字段 `visionDatas`。 */
  visionDatas: { [key: string]: VisionData };
  /** 原始数据字段 `visionChoices`。 */
  visionChoices: { [key: string]: VisionChoice };
  /** 原始数据字段 `moduleConsts`。 */
  moduleConsts: VisionModuleConsts;
}

/**
 * roguelike_topic_table.json 中 VisionChoice 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface VisionChoice {
  /** 原始数据字段 `value`。 */
  value: number;
  /** 原始数据字段 `type`。 */
  type: VisionChoiceType;
}

/**
 * roguelike_topic_table.json 中 VisionChoiceType 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type VisionChoiceType = "LOWER";

/**
 * roguelike_topic_table.json 中 VisionData 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface VisionData {
  /** 原始数据字段 `sightNum`。 */
  sightNum: number;
  /** 原始数据字段 `level`。 */
  level: number;
  /** 原始数据字段 `canForesee`。 */
  canForesee: boolean;
  /** 原始数据字段 `dividedDis`。 */
  dividedDis: number;
  /** 原始数据字段 `status`。 */
  status: string;
  /** 原始数据字段 `clr`。 */
  clr: string;
  /** 原始数据字段 `desc1`。 */
  desc1: string;
  /** 原始数据字段 `desc2`。 */
  desc2: string;
  /** 原始数据字段 `icon`。 */
  icon: string;
}

/**
 * roguelike_topic_table.json 中 VisionModuleConsts 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface VisionModuleConsts {
  /** 原始数据字段 `maxVision`。 */
  maxVision: number;
  /** 原始数据字段 `totemBottomDescription`。 */
  totemBottomDescription: string;
  /** 原始数据字段 `chestBottomDescription`。 */
  chestBottomDescription: string;
  /** 原始数据字段 `goodsBottomDescription`。 */
  goodsBottomDescription: string;
}
