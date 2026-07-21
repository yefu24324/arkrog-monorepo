/**

 * JSON 逻辑模块 `details/choice-scenes/choice-scenes` 的显式类型。

 */

/**
 * roguelike_topic_table.json 中 ChoiceScene 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface ChoiceScene {
  /** 原始数据字段 `id`。 */
  id: string;
  /** 原始数据字段 `title`。 */
  title: string;
  /** 原始数据字段 `description`。 */
  description: string;
  /** 原始数据字段 `background`。 */
  background: null | string;
  /** 原始数据字段 `titleIcon`。 */
  titleIcon: TitleIcon | null;
  /** 原始数据字段 `subTypeId`。 */
  subTypeId: number;
  /** 原始数据字段 `useHiddenMusic`。 */
  useHiddenMusic: boolean;
}

/**
 * roguelike_topic_table.json 中 TitleIcon 的显式 TypeScript 定义。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export type TitleIcon = "title_icon_task" | "title_icon_task_reward" | "";
