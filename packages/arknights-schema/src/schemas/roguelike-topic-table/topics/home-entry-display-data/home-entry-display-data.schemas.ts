/**

 * JSON 逻辑模块 `topics/home-entry-display-data/home-entry-display-data` 的 Zod Schema。

 */

import { z } from "zod";

import type { HomeEntryDisplayDatum } from "../../../../types/roguelike-topic-table/topics/home-entry-display-data/home-entry-display-data.types.js";

/**
 * 集成战略主题在一个指定时间窗口内使用的首页入口展示配置。
 */
export const HomeEntryDisplayDatumSchema = z
  .strictObject({
    /** 所属集成战略主题 ID，应与外层 topics 字典键及 Topic.id 一致。 */
    topicId: z
      .string()
      .describe(
        "所属集成战略主题 ID，应与外层 topics 字典键及 Topic.id 一致。",
      ),
    /** 该时间窗口使用的首页入口展示配置 ID；对应资源或配置的具体来源待确认。 */
    displayId: z
      .string()
      .describe(
        "该时间窗口使用的首页入口展示配置 ID；对应资源或配置的具体来源待确认。",
      ),
    /** 首页入口展示窗口的开始 Unix 时间戳，单位为秒。 */
    startTs: z
      .number()
      .describe("首页入口展示窗口的开始 Unix 时间戳，单位为秒。"),
    /** 首页入口展示窗口的结束 Unix 时间戳，单位为秒；时间边界是否包含该秒待确认。 */
    endTs: z
      .number()
      .describe(
        "首页入口展示窗口的结束 Unix 时间戳，单位为秒；时间边界是否包含该秒待确认。",
      ),
  })
  .describe(
    "集成战略主题在一个指定时间窗口内使用的首页入口展示配置。",
  ) satisfies z.ZodType<HomeEntryDisplayDatum>;
