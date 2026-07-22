/** 图谱中可追溯结论的证据强度。 */
export type EvidenceStatus = "verified" | "inferred" | "unknown";

/** 一个乘区结论，同时保留依据，避免把键名猜测伪装成事实。 */
export interface ZoneMapping {
  /** 公式乘区的稳定标识。 */
  zoneId: string;
  /** 结论的证据强度。 */
  status: EvidenceStatus;
  /** 0 到 1 的置信度，用于排序而不替代证据文本。 */
  confidence: number;
  /** 人类可读的判定依据。 */
  reason: string;
  /** 支撑结论的仓库相对路径。 */
  evidencePath: string;
}

/** 从黑板上下文提炼出的可分类效果。 */
export interface EffectContext {
  /** GameData 中 buff 元素的 key。 */
  effectKey: string;
  /** 黑板参数键到原始值的映射。 */
  parameters: ReadonlyMap<string, number | string | null>;
}

/** 构建图谱时使用的仓库路径集合。 */
export interface RepositoryPaths {
  /** monorepo 根目录的绝对路径。 */
  root: string;
  /** ArknightsGameData 中文数据根目录。 */
  gameData: string;
  /** schema 包源码目录。 */
  schemaSource: string;
  /** 人工知识文档目录。 */
  docs: string;
  /** 默认 Kuzu 数据库目录。 */
  database: string;
}

/** 一条可展示的乘区追踪结果。 */
export interface TraceRow {
  /** 藏品 ID。 */
  itemId: string;
  /** 藏品显示名。 */
  itemName: string;
  /** buff 元素类型。 */
  effectKey: string;
  /** 黑板参数及其原始值。 */
  parameters: string;
  /** 目标乘区标识；没有可靠结论时为 UNKNOWN。 */
  zoneId: string;
  /** 目标乘区显示名。 */
  zoneName: string;
  /** 结论状态。 */
  status: EvidenceStatus;
  /** 判定依据。 */
  reason: string;
  /** 黑板 key 实际引用的战斗模板名。 */
  mechanicName: string;
  /** 战斗模板中的 Action 组件类型。 */
  componentTypes: string;
  /** 原始 JSON 路径。 */
  jsonPath: string;
}
