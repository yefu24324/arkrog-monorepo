import type { FormulaWritableZoneId } from "../lib/formula/formula-book.js";
import type { EvidenceStatus } from "../lib/types.js";

/** 当前静态图谱只覆盖集成战略一至六的 NORMAL 难度。 */
const SUPPORTED_TOPICS = new Set(Array.from({ length: 6 }, (_, index) => `rogue_${index + 1}`));

/** 本地声明式难度规则的目标类型。 */
export type DifficultyTarget = "all-enemies" | "elite" | "elite-and-boss" | "boss" | "specific-enemy";

/** AI 根据难度原文、FormulaBook 和独立证据生成的一条本地声明式规则。 */
export interface LocalDifficultyGraphRule {
  /** 稳定规则 ID。 */
  id: string;
  /** 语义发生变化时递增的版本。 */
  version: number;
  /** 人类可读名称。 */
  name: string;
  /** 规则说明。 */
  description: string;
  /** 集成战略主题 ID。 */
  topicId: string;
  /** 当前只允许 NORMAL。 */
  modeDifficulty: "NORMAL";
  /** 原始难度等级。 */
  grade: number;
  /** 完整原文版本护栏。 */
  expectedRuleDesc: string;
  /** 当前规则结构化出的原文片段。 */
  matchedText: string;
  /** 当前片段是否覆盖完整原文。 */
  coverage: "full" | "partial";
  /** 当前 FormulaBook 中真实可写的乘区。 */
  zoneId: FormulaWritableZoneId;
  /** 写入 FormulaBook 的数值。 */
  value: number;
  /** 生效目标。 */
  target: DifficultyTarget;
  /** 可选伤害类型说明。 */
  damageTypes?: readonly string[];
  /** 可选关卡类型条件。 */
  stageKinds?: readonly string[];
  /** 可选敌人登场持续秒数。 */
  durationSeconds?: number;
  /** 可选目标敌人 ID。 */
  enemyIds?: readonly string[];
  /** 可选目标敌人状态。 */
  requiredEnemyBuffs?: readonly string[];
  /** 证据权威级别。 */
  authority: "human" | "formula" | "gamedata";
  /** 证据状态。 */
  status: EvidenceStatus;
  /** 置信度。 */
  confidence: number;
  /** 可复核的仓库相对证据路径。 */
  evidencePaths: string[];
}

/** 图谱构建器需要的最小难度输入形态。 */
export interface RoguelikeDifficultySource {
  details: Record<string, {
    difficulties: readonly {
      modeDifficulty: string;
      grade: number;
      name: string;
      ruleDesc: string;
    }[];
  }>;
  customizeData: Record<string, Record<string, unknown> & {
    difficulties?: readonly {
      modeDifficulty: string;
      grade: number;
      buffs?: readonly string[] | null;
      buffDesc?: readonly string[];
    }[];
  }>;
}

/** 规范化后的难度节点。 */
export interface NormalizedDifficulty {
  id: string;
  topic: string;
  modeDifficulty: string;
  grade: number;
  name: string;
  ruleDesc: string;
  classification: string;
  unclassifiedReason: string;
  jsonPath: string;
}

/** 规范化后的难度效果节点。 */
export interface NormalizedDifficultyEffect {
  id: string;
  matchedText: string;
  numericValue: number;
  target: string;
  damageTypes: string;
  evidenceKind: string;
  jsonPath: string;
}

/** 由 customizedDifficulties 引用的科技树节点。 */
export interface NormalizedDifficultyTechnology {
  id: string;
  topic: string;
  buffId: string;
  name: string;
  description: string;
  jsonPath: string;
}

/** 规范化难度事实及其关系。 */
export interface NormalizedDifficultyKnowledge {
  difficulties: NormalizedDifficulty[];
  effects: NormalizedDifficultyEffect[];
  technologies: NormalizedDifficultyTechnology[];
  difficultyHasEffect: Array<{ from: string; to: string }>;
  difficultyEffectPredictedBy: Array<{ from: string; to: string }>;
  difficultyEffectEntersZone: Array<{
    from: string;
    to: FormulaWritableZoneId;
    ruleId: string;
    status: EvidenceStatus;
    confidence: number;
    reason: string;
    evidencePath: string;
  }>;
  difficultyEnablesTechnology: Array<{
    from: string;
    to: string;
    buffId: string;
    evidencePath: string;
  }>;
}

/** 判断未知值是否为普通对象。 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/** 在科技树原始对象中寻找 DIFFICULTY 节点，避免把 buffs 误当成 FormulaBook 贡献。 */
function findTechnology(
  value: unknown,
  buffId: string,
  jsonPath: string,
): { name: string; description: string; jsonPath: string } | null {
  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index += 1) {
      const found = findTechnology(value[index], buffId, `${jsonPath}[${index}]`);
      if (found) return found;
    }
    return null;
  }
  if (!isRecord(value)) return null;
  if (value.buffId === buffId && value.nodeType === "DIFFICULTY") {
    const description = Array.isArray(value.rawDesc)
      ? value.rawDesc.filter((entry): entry is string => typeof entry === "string").join("；")
      : "";
    return {
      name: typeof value.buffName === "string" ? value.buffName : buffId,
      description,
      jsonPath,
    };
  }
  for (const [key, child] of Object.entries(value)) {
    const found = findTechnology(child, buffId, `${jsonPath}[${JSON.stringify(key)}]`);
    if (found) return found;
  }
  return null;
}

/** 把六主题 NORMAL 难度、已解释效果和科技树启用关系转换成稳定图事实。 */
export function normalizeDifficultyKnowledge(
  data: RoguelikeDifficultySource,
  rules: readonly LocalDifficultyGraphRule[],
): NormalizedDifficultyKnowledge {
  const result: NormalizedDifficultyKnowledge = {
    difficulties: [],
    effects: [],
    technologies: [],
    difficultyHasEffect: [],
    difficultyEffectPredictedBy: [],
    difficultyEffectEntersZone: [],
    difficultyEnablesTechnology: [],
  };
  const technologyIds = new Set<string>();

  for (const [topicId, detail] of Object.entries(data.details)) {
    if (!SUPPORTED_TOPICS.has(topicId)) continue;
    detail.difficulties.forEach((difficulty, difficultyIndex) => {
      if (difficulty.modeDifficulty !== "NORMAL") return;
      const difficultyId = `difficulty:${topicId}:NORMAL:${difficulty.grade}`;
      const jsonPath = `$.details[${JSON.stringify(topicId)}].difficulties[${difficultyIndex}]`;
      const matchedRules = rules.filter((rule) =>
        rule.topicId === topicId
        && rule.modeDifficulty === "NORMAL"
        && rule.grade === difficulty.grade
        && rule.expectedRuleDesc === difficulty.ruleDesc
        && difficulty.ruleDesc.includes(rule.matchedText));
      result.difficulties.push({
        id: difficultyId,
        topic: topicId,
        modeDifficulty: difficulty.modeDifficulty,
        grade: difficulty.grade,
        name: difficulty.name,
        ruleDesc: difficulty.ruleDesc,
        classification: matchedRules.length > 0 ? "predicted" : "unclassified",
        unclassifiedReason: matchedRules.length > 0
          ? ""
          : "当前原文没有通过本地难度规则的完整 ruleDesc 版本护栏。",
        jsonPath,
      });
      matchedRules.forEach((rule) => {
        const effectId = `difficulty-effect:${rule.id}`;
        result.effects.push({
          id: effectId,
          matchedText: rule.matchedText,
          numericValue: rule.value,
          target: rule.target,
          damageTypes: (rule.damageTypes ?? []).join(" | "),
          evidenceKind: `${rule.authority}:${rule.status}`,
          jsonPath: `${jsonPath}.ruleDesc`,
        });
        result.difficultyHasEffect.push({ from: difficultyId, to: effectId });
        result.difficultyEffectPredictedBy.push({ from: effectId, to: rule.id });
        result.difficultyEffectEntersZone.push({
          from: effectId,
          to: rule.zoneId,
          ruleId: rule.id,
          status: rule.status,
          confidence: rule.confidence,
          reason: `${rule.name}：${rule.description}`,
          evidencePath: [`${jsonPath}.ruleDesc`, ...rule.evidencePaths].join(" | "),
        });
      });
    });

    const customize = data.customizeData[topicId];
    for (const [difficultyIndex, difficulty] of (customize?.difficulties ?? []).entries()) {
      if (difficulty.modeDifficulty !== "NORMAL") continue;
      const difficultyId = `difficulty:${topicId}:NORMAL:${difficulty.grade}`;
      for (const buffId of difficulty.buffs ?? []) {
        const technologyId = `difficulty-technology:${topicId}:${buffId}`;
        if (!technologyIds.has(technologyId)) {
          technologyIds.add(technologyId);
          const source = findTechnology(
            customize,
            buffId,
            `$.customizeData[${JSON.stringify(topicId)}]`,
          );
          result.technologies.push({
            id: technologyId,
            topic: topicId,
            buffId,
            name: source?.name ?? buffId,
            description: source?.description ?? "",
            jsonPath: source?.jsonPath ?? `$.customizeData[${JSON.stringify(topicId)}]`,
          });
        }
        result.difficultyEnablesTechnology.push({
          from: difficultyId,
          to: technologyId,
          buffId,
          evidencePath: `$.customizeData[${JSON.stringify(topicId)}].difficulties[${difficultyIndex}].buffs`,
        });
      }
    }
  }
  return result;
}
