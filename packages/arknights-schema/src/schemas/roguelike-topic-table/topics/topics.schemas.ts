/**

 * JSON 逻辑模块 `topics/topics` 的 Zod Schema。

 */

import { z } from "zod";

import type { Topic } from "../../../types/roguelike-topic-table/topics/topics.types.js";

import { ConfigSchema } from "./config/config.schemas.js";

import { HomeEntryDisplayDatumSchema } from "./home-entry-display-data/home-entry-display-data.schemas.js";

/**
 * 集成战略主题的入口元数据，描述主题标识、展示周期、首页入口、机制模块和客户端功能配置。
 */
export const TopicSchema = z
  .strictObject({
    /** 主题唯一标识，同时用作 details、modules 与 customizeData 中的关联键。 */
    id: z
      .string()
      .describe(
        "主题唯一标识，同时用作 details、modules 与 customizeData 中的关联键。",
      ),
    /** 面向玩家展示的集成战略主题名称。 */
    name: z.string().describe("面向玩家展示的集成战略主题名称。"),
    /** 主题首次开放的 Unix 时间戳，单位为秒。 */
    startTime: z.number().describe("主题首次开放的 Unix 时间戳，单位为秒。"),
    /** 主题首次开放后从游戏主界面重点入口中移除的 Unix 时间戳，单位为秒；不表示主题数据失效。 */
    disappearTimeOnMainScreen: z
      .number()
      .describe(
        "主题首次开放后从游戏主界面重点入口中移除的 Unix 时间戳，单位为秒；不表示主题数据失效。",
      ),
    /** 主题在列表或入口中的排序序号，当前按发布时间递增。 */
    sort: z
      .number()
      .describe("主题在列表或入口中的排序序号，当前按发布时间递增。"),
    /** 主题入口用于展示的代表勋章 ID；具体出现位置仍需结合客户端界面确认。 */
    showMedalId: z
      .string()
      .describe(
        "主题入口用于展示的代表勋章 ID；具体出现位置仍需结合客户端界面确认。",
      ),
    /** 主题对应的勋章组 ID，用于关联该主题的成套勋章。 */
    medalGroupId: z
      .string()
      .describe("主题对应的勋章组 ID，用于关联该主题的成套勋章。"),
    /** 推测为主题内容完整收录或转入常驻状态的 Unix 时间戳，单位为秒；准确触发行为待确认。 */
    fullStoredTime: z
      .number()
      .describe(
        "推测为主题内容完整收录或转入常驻状态的 Unix 时间戳，单位为秒；准确触发行为待确认。",
      ),
    /** 主题入口展示的背景叙事引导文本。 */
    lineText: z.string().describe("主题入口展示的背景叙事引导文本。"),
    /** 主题在不同活动时间窗口中的首页入口展示配置列表，可包含首次开放与后续复刻窗口。 */
    homeEntryDisplayData: z
      .array(HomeEntryDisplayDatumSchema)
      .describe(
        "主题在不同活动时间窗口中的首页入口展示配置列表，可包含首次开放与后续复刻窗口。",
      ),
    /** 该主题启用的扩展机制模块标识列表；标识与同主题 modules 区块中的模块配置对应。 */
    moduleTypes: z
      .array(z.string())
      .describe(
        "该主题启用的扩展机制模块标识列表；标识与同主题 modules 区块中的模块配置对应。",
      ),
    /** 主题级客户端功能开关与交互路由配置。 */
    config: ConfigSchema.describe("主题级客户端功能开关与交互路由配置。"),
  })
  .describe(
    "集成战略主题的入口元数据，描述主题标识、展示周期、首页入口、机制模块和客户端功能配置。",
  ) satisfies z.ZodType<Topic>;
