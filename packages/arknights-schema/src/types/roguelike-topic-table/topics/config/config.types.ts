/**

 * JSON 逻辑模块 `topics/config/config` 的显式类型。

 */

/**
 * 集成战略主题的客户端功能配置，控制界面插件加载、Web 通信路由和月度对话触发方式。
 *
 * 字段语义应直接维护在类型与字段的源码注释中。
 */
export interface Config {
  /** 是否加载干员卡片相关客户端插件；插件影响的具体界面与行为待确认。 */
  loadCharCardPlugin: boolean;
  /** WebBus 业务类型标识，推测用于 Web 页面与原生客户端之间的消息路由；准确调用链待确认。 */
  webBusType: string;
  /** 月度小队或月度访谈对话的触发场景类型；TRANSITING 与 DUNGEON 的准确触发时机待确认。 */
  monthChatTrigType: string;
  /** 是否加载奖励界面的生命值装饰插件；目前仅 rogue_3 开启，具体视觉效果待确认。 */
  loadRewardHpDecoPlugin: boolean;
  /** 是否加载奖励额外信息插件；目前仅 rogue_3 开启，具体展示内容待确认。 */
  loadRewardExtraInfoPlugin: boolean;
}
