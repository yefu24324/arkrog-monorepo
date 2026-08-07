/**
 * AI_GENERATED：此文件可根据人类知识、最新 report 数据与图谱证据重新生成。
 * 禁止将本文件作为第一证据；纠正应写入 mechanics-knowledge。
 */

import type { ExportedRoguelikeTopicReport } from "@arkrog/arknights-gamedata-report";

import {
  ROGUE_DIFFICULTY_SEMANTIC_RULES,
  type RogueDifficultySemanticRule,
} from "../../domain/difficulty-rules.js";
import { FormulaZoneId, type FormulaWritableZoneId } from "../../formula/formula-book.js";

/** 只引用 report 对外公开的难度元素类型。 */
type ReportDifficulty = ExportedRoguelikeTopicReport["difficulties"][number];

/** 当前 FormulaBook 能可靠表达的历史难度语义目标。 */
const WRITABLE_DIFFICULTY_ZONES: Readonly<Record<string, FormulaWritableZoneId>> = {
  difficulty_enemy_max_hp_mul: FormulaZoneId.enemy_direct_max_hp_mul,
  difficulty_enemy_atk_mul: FormulaZoneId.enemy_direct_atk_mul,
  difficulty_enemy_def_mul: FormulaZoneId.enemy_direct_def_mul,
};

/** 一条已通过完整 ruleDesc 版本护栏并可写入当前 FormulaBook 的规则。 */
export interface GeneratedDifficultyRule {
  /** 原始版本化规则。 */
  rule: RogueDifficultySemanticRule;
  /** 当前 FormulaBook 的真实可写乘区。 */
  zoneId: FormulaWritableZoneId;
}

/** 取得某个 report 难度对象当前可以执行的生成规则。 */
export function resolveDifficultyRules(
  topicId: string,
  difficulty: ReportDifficulty,
): GeneratedDifficultyRule[] {
  return ROGUE_DIFFICULTY_SEMANTIC_RULES.flatMap((rule): GeneratedDifficultyRule[] => {
    if (
      rule.topicId !== topicId
      || rule.modeDifficulty !== difficulty.modeDifficulty
      || rule.grade !== difficulty.grade
      || rule.expectedRuleDesc !== difficulty.ruleDesc
    ) return [];
    const zoneId = WRITABLE_DIFFICULTY_ZONES[rule.zoneId];
    return zoneId ? [{ rule, zoneId }] : [];
  });
}
