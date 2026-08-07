/** 尚未建立专用 Schema 的 GameData 原始 JSON 对象。 */
export interface OriginalGameDataObject {
  /** 原始对象允许保留任意游戏字段，报告生成器不得改写其值。 */
  readonly [key: string]: unknown;
}

/** 一类报告产物的写入摘要。 */
export interface GameDataReportSectionResult {
  /** 报告分类。 */
  scope: "operators" | "roguelike";
  /** 写入的 JSON 文件数量。 */
  fileCount: number;
  /** 该分类的主要业务对象数量。 */
  itemCount: number;
  /** 实际输出目录。 */
  outputPath: string;
}

/** 一次完整报告生成的控制台结果。 */
export interface GameDataReportResult {
  /** 解析后的绝对 GameData 根目录。 */
  dataRoot: string;
  /** 解析后的绝对报告根目录。 */
  outputRoot: string;
  /** 干员与集成战略两类报告摘要。 */
  results: GameDataReportSectionResult[];
}
