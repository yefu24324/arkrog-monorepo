/** 对外包入口：纯 TS 领域、分类与公式，不含 Kuzu / 读盘工具。 */

export type { EvidenceStatus } from "./types.js";
export { DAMAGE_ZONES, type DamageZoneId } from "./domain/damage-zones.js";
export {
  ENGINE_FIELD_PATHS,
  ENGINE_SEMANTIC_RULES,
  extractMechanicActionFacts,
  predictEngineZones,
  type EngineEffectFacts,
  type EnginePrediction,
  type EngineRuleCondition,
  type EngineSemanticRule,
  type MechanicActionFact,
} from "./domain/engine-rules.js";

export * from "./classify/index.js";
export * from "./formula/index.js";
