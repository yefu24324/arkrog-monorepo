/**
 * 将藏品乘区贡献映射委托给 @arkrog/arknights-knowledge-graph 的公式程序，
 * 避免 schema-docs 与 graph 包各维护一份取值逻辑。
 */

export {
  buildRelicContributions,
  contributionsFromClassifiedEffect,
  extractContributionValue,
  type BlackboardEntry,
  type RelicEffectForContribution,
  type RelicItemForContribution,
} from "@arkrog/arknights-knowledge-graph/formula";
