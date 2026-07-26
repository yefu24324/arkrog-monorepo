/** 导出建图入口，供后端或定时更新任务调用。 */
export { buildKnowledgeGraph } from "./build.js";

/** 导出主题藏品乘区 JSON 生成入口。 */
export { exportRelicZoneJson } from "./export.js";

/** 导出 JSON 数据契约，便于前端和分析脚本直接消费。 */
export type {
  BlackboardValue,
  ExportedRelic,
  ExportedRelicEffect,
  ExportedZonePrediction,
  RelicZoneExport,
} from "./export.js";

/** 导出图查询与可解释问答入口。 */
export { answerQuestion, runCypher, traceItem } from "./query.js";

/** 导出领域类型，便于上层 UI 展示证据状态。 */
export type {
  EvidenceStatus,
  RepositoryPaths,
  TraceRow,
} from "./types.js";

/** 导出旁路实验公式系统；旧 BuffContext 在验证完成前保持不变。 */
export * from "./formula/index.js";
