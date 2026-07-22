/** 导出建图入口，供后端或定时更新任务调用。 */
export { buildKnowledgeGraph } from "./build.js";

/** 导出主题藏品乘区表生成入口。 */
export { exportRelicZoneMarkdown } from "./export.js";

/** 导出图查询与可解释问答入口。 */
export { answerQuestion, runCypher, traceItem } from "./query.js";

/** 导出领域类型，便于上层 UI 展示证据状态。 */
export type {
  EvidenceStatus,
  RepositoryPaths,
  TraceRow,
  ZoneMapping,
} from "./types.js";
