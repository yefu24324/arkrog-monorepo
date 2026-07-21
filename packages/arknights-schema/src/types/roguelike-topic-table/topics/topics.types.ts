/**

 * JSON 逻辑模块 `topics/topics` 的显式类型。

 */

import type { Config } from "./config/config.types.js";

import type { HomeEntryDisplayDatum } from "./home-entry-display-data/home-entry-display-data.types.js";

/**
 * 集成战略主题的入口元数据，描述主题标识、展示周期、首页入口、机制模块和客户端功能配置。
 *
 * 字段语义可在对应中文 Markdown 文档的人工说明区继续补充。
 */
export interface Topic {
  /** 主题唯一标识，同时用作 details、modules 与 customizeData 中的关联键。 */
  id: string;
  /** 面向玩家展示的集成战略主题名称。 */
  name: string;
  /** 主题首次开放的 Unix 时间戳，单位为秒。 */
  startTime: number;
  /** 主题首次开放后从游戏主界面重点入口中移除的 Unix 时间戳，单位为秒；不表示主题数据失效。 */
  disappearTimeOnMainScreen: number;
  /** 主题在列表或入口中的排序序号，当前按发布时间递增。 */
  sort: number;
  /** 主题入口用于展示的代表勋章 ID；具体出现位置仍需结合客户端界面确认。 */
  showMedalId: string;
  /** 主题对应的勋章组 ID，用于关联该主题的成套勋章。 */
  medalGroupId: string;
  /** 推测为主题内容完整收录或转入常驻状态的 Unix 时间戳，单位为秒；准确触发行为待确认。 */
  fullStoredTime: number;
  /** 主题入口展示的背景叙事引导文本。 */
  lineText: string;
  /** 主题在不同活动时间窗口中的首页入口展示配置列表，可包含首次开放与后续复刻窗口。 */
  homeEntryDisplayData: HomeEntryDisplayDatum[];
  /** 该主题启用的扩展机制模块标识列表；标识与同主题 modules 区块中的模块配置对应。 */
  moduleTypes: string[];
  /** 主题级客户端功能开关与交互路由配置。 */
  config: Config;
}
