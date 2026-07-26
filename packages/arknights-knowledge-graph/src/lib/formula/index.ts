/** 导出实验公式 AST 的类型和构造器。 */
export * from "./ast.js";

/** 导出带 tooltip、原因和证据来源的实验公式上下文。 */
export * from "./context.js";

/** 导出实验公式数值求值器。 */
export * from "./evaluator.js";

/** 导出实验完整公式簿。 */
export * from "./formula-book.js";

/** 导出符号公式、展开公式和来源解释器。 */
export * from "./render.js";

/** 导出结构化实验乘区定义。 */
export * from "./zones.js";

/** 导出藏品运行时生效判定（前置藏品 / 敌人 / 职业 / 关卡）。 */
export * from "./activation.js";

/** 导出藏品黑板 → 公式贡献映射（复用 classify 预测）。 */
export * from "./relic-contributions.js";

/** 导出按战斗模板和通用语义规则分派的藏品公式程序。 */
export * from "./relic-template-programs.js";

/** 导出藏品路由与写入公式簿的组合程序。 */
export * from "./relic-programs.js";

/** 导出 graph / formula 人工校验所需的函数乘区表构造器。 */
export * from "./relic-zone-validation.js";
