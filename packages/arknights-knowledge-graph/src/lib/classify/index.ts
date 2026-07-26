/** 导出藏品乘区纯 TS 分类 API（无 kuzu / 无 fs）。 */
export { buildRelicZoneTable, type BuildRelicZoneTableInput } from "./build-table.js";
export {
  classifyRelicEffect,
  deriveCondition,
  fallbackClassification,
  summarizeBlackboard,
  type ClassifyRelicEffectInput,
} from "./classify-effect.js";
export { classifyRelicItem, type ClassifyRelicItemInput } from "./classify-item.js";
export {
  buildMechanicIndex,
  resolveMechanicName,
  type BuffTemplateEntry,
  type MechanicIndex,
} from "./mechanic-index.js";
export type {
  BlackboardValue,
  BuffElement,
  CharacterBuff,
  ExportedRelic,
  ExportedRelicEffect,
  ExportedZonePrediction,
  RelicItem,
  RelicZoneExport,
  TopicDetailForClassify,
} from "./types.js";
