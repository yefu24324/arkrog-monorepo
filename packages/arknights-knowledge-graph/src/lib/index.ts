/** 对外包入口：纯 TS 领域、分类与公式，不含 Kuzu / 读盘工具。 */

export type { EvidenceStatus } from "./types.js";
// 新公式系统覆盖资源与属性，旧伤害命名仅作为兼容别名导出。
export {
  FORMULA_ZONES,
  type FormulaZoneId,
  DAMAGE_ZONES,
  type DamageZoneId,
} from "./domain/damage-zones.js";
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
// 难度语义规则与 Kuzu 建图、浏览器 formula 共用同一份定义。
export {
  ROGUE_DIFFICULTY_SEMANTIC_RULES,
  type RogueDifficultyRuleCoverage,
  type RogueDifficultySemanticRule,
  type RogueDifficultyTarget,
} from "./domain/difficulty-rules.js";

export * from "./classify/index.js";
export * from "./formula/index.js";
