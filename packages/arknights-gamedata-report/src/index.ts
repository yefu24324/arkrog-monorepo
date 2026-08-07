/** 导出报告生成 API 与 CLI 参数契约。 */
export * from "#config/arguments";
export * from "#config/paths";
export * from "#report";
export * from "#shared/types";

/** 导出干员报告的主要数据契约与纯组装函数。 */
export * from "#operators/types";
export * from "#operators/collect-operator-family";
export * from "#operators/export-operators-index";

/** 导出集成战略报告契约、藏品包装和难度关联纯函数。 */
export * from "#roguelike/types";
export * from "#roguelike/wrapped-relics";
export * from "#roguelike/collect-difficulty-relics";
export * from "#roguelike/export-roguelike-index";
export * from "#roguelike/export-topic";
export * from "#roguelike/export-relics";
export * from "#roguelike/export-stages";
export * from "#roguelike/export-topic-ext";
