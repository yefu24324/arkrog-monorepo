/**

 * JSON 逻辑模块 `topics/home-entry-display-data/home-entry-display-data` 的显式类型。

 */

/**
 * 集成战略主题在一个指定时间窗口内使用的首页入口展示配置。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface HomeEntryDisplayDatum {
  /** 所属集成战略主题 ID，应与外层 topics 字典键及 Topic.id 一致。 */
  topicId: string;
  /** 该时间窗口使用的首页入口展示配置 ID；对应资源或配置的具体来源待确认。 */
  displayId: string;
  /** 首页入口展示窗口的开始 Unix 时间戳，单位为秒。 */
  startTs: number;
  /** 首页入口展示窗口的结束 Unix 时间戳，单位为秒；时间边界是否包含该秒待确认。 */
  endTs: number;
}
