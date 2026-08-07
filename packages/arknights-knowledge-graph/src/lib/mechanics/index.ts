/** 导出 mechanics 对外稳定的结果与运行时事实契约。 */
export * from "./contracts/index.js";
export type { FormulaActivationContext } from "./shared/activation.js";

/** 导出藏品、难度与关卡的独立分析入口。 */
export * from "./analyze-relic.js";
export * from "./analyze-difficulty.js";
export * from "./analyze-stage.js";

/** 导出 rogue_4 至 rogue_6 互不共享的主题特殊系统入口。 */
export * from "./analyze-rogue_4-topic-spec.js";
export * from "./analyze-rogue_5-topic-spec.js";
export * from "./analyze-rogue_6-topic-spec.js";
