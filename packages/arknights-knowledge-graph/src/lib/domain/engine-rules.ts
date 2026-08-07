import type { FormulaWritableZoneId } from "../formula/formula-book.js";
import type { EvidenceStatus } from "../types.js";

/** 从战斗模板 Action AST 提取的属性语义事实。 */
export interface MechanicActionFact {
  /** 所属战斗事件。 */
  event: string;
  /** Action 组件类型。 */
  componentType: string;
  /** Action JSON 路径。 */
  jsonPath: string;
  /** Action 的目标类型。 */
  targetType: string;
  /** CreateBuff 的 buff 接收者。 */
  buffOwner: string;
  /** 属性修改器目标属性。 */
  attributeType: string;
  /** 属性修改器计算方式。 */
  formulaItem: string;
  /** 伤害类型筛选。 */
  damageMask: string;
  /** 伤害应用方式筛选。 */
  applyWay: string;
  /** Action 原文，便于后续扩展关系提取。 */
  rawJson: string;
}

/** 通用声明式规则接收的原始效果事实。 */
export interface EngineEffectFacts {
  /** 当前效果所属游戏对象的稳定 ID。 */
  objectId: string;
  /** 当前对象类型，例如 relic、difficulty、stage 或 topic-system。 */
  objectType: string;
  /** buff 元素类型。 */
  effectKey: string;
  /** 黑板参数。 */
  parameters: ReadonlyMap<string, number | string | null>;
  /** 引用的战斗模板名。 */
  mechanicName: string;
  /** 战斗模板 Action 事实。 */
  actions: readonly MechanicActionFact[];
  /** 效果来源种类。 */
  sourceKind: string;
  /** 原始效果 JSON 路径。 */
  jsonPath: string;
}

/** 构建程序支持的通用声明式条件语言。 */
export type EngineRuleCondition =
  | { kind: "objectIdIn"; values: readonly string[] }
  | { kind: "objectTypeIn"; values: readonly string[] }
  | { kind: "effectKeyIn"; values: readonly string[] }
  | { kind: "effectKeyContains"; values: readonly string[] }
  | { kind: "hasParameter"; keys: readonly string[] }
  | { kind: "parameterNonZero"; keys: readonly string[] }
  | { kind: "mechanicContains"; values: readonly string[] }
  | { kind: "mechanicNotContains"; values: readonly string[] }
  | {
      kind: "actionMatches";
      event?: string;
      componentType?: string;
      attributeType?: string;
      formulaItem?: string;
      target?: string;
    }
  | {
      kind: "actionNotMatches";
      event?: string;
      componentType?: string;
      attributeType?: string;
      formulaItem?: string;
      target?: string;
    };

/**
 * 通用可版本化语义规则契约。
 * 仓库只提交此规则语言；具体规则实例由 AI 写入 Git 忽略的本地工作区。
 */
export interface EngineSemanticRule {
  /** 稳定规则 ID。 */
  id: string;
  /** 语义发生变化时递增的版本。 */
  version: number;
  /** 人类可读名称。 */
  name: string;
  /** 规则说明。 */
  description: string;
  /** 当前 FormulaBook 中真实可写的乘区。 */
  zoneId: FormulaWritableZoneId;
  /** 证据权威级别；本地构建规则必须提供。 */
  authority?: "human" | "formula" | "gamedata";
  /** 证据状态。 */
  status: EvidenceStatus;
  /** 置信度。 */
  confidence: number;
  /** 必须全部满足的条件。 */
  all: readonly EngineRuleCondition[];
  /** 至少满足一项的可选条件。 */
  any?: readonly EngineRuleCondition[];
  /** 可直接查询的字段路径。 */
  fieldPaths?: readonly string[];
  /** 规则自身的证据路径。 */
  evidencePaths?: readonly string[];
}

/** 一条规则命中后的图谱推导。 */
export interface EnginePrediction {
  ruleId: string;
  zoneId: FormulaWritableZoneId;
  status: EvidenceStatus;
  confidence: number;
  reason: string;
  evidencePath: string;
}

/** 提取短 Action 组件名。 */
function componentType(value: unknown): string {
  return typeof value === "string"
    ? value.split(",")[0]?.replace("Torappu.Battle.Action.Nodes+", "") ?? value
    : "";
}

/** 在 Action 对象中递归收集属性修改器。 */
function collectAttributeModifiers(
  value: unknown,
  target: Array<{ attributeType: string; formulaItem: string }> = [],
): Array<{ attributeType: string; formulaItem: string }> {
  if (Array.isArray(value)) {
    value.forEach((entry) => collectAttributeModifiers(entry, target));
    return target;
  }
  if (!value || typeof value !== "object") return target;
  const record = value as Record<string, unknown>;
  if (typeof record.attributeType === "string" && typeof record.formulaItem === "string") {
    target.push({ attributeType: record.attributeType, formulaItem: record.formulaItem });
  }
  Object.values(record).forEach((entry) => collectAttributeModifiers(entry, target));
  return target;
}

/** 把 buff_template_data 的事件 Action 转换成可追溯事实。 */
export function extractMechanicActionFacts(
  template: { eventToActions?: Record<string, unknown[]> } | undefined,
  mechanicJsonPath: string,
): MechanicActionFact[] {
  const facts: MechanicActionFact[] = [];
  for (const [event, actions] of Object.entries(template?.eventToActions ?? {})) {
    actions.forEach((action, actionIndex) => {
      const record = action && typeof action === "object" ? action as Record<string, unknown> : {};
      const modifiers = collectAttributeModifiers(action);
      const common = {
        event,
        componentType: componentType(record.$type),
        jsonPath: `${mechanicJsonPath}.eventToActions.${event}[${actionIndex}]`,
        targetType: typeof record._targetType === "string" ? record._targetType : "",
        buffOwner: typeof record._buffOwner === "string" ? record._buffOwner : "",
        damageMask: typeof record._damageMask === "string" ? record._damageMask : "",
        applyWay: typeof record._applyWayFilter === "string" ? record._applyWayFilter : "",
        rawJson: JSON.stringify(action),
      };
      if (modifiers.length === 0) {
        facts.push({ ...common, attributeType: "", formulaItem: "" });
      } else {
        modifiers.forEach((modifier) => facts.push({ ...common, ...modifier }));
      }
    });
  }
  return facts;
}

/** 判断一条 Action 是否满足规则声明。 */
function actionMatchesCondition(
  action: MechanicActionFact,
  condition: Extract<EngineRuleCondition, { kind: "actionMatches" | "actionNotMatches" }>,
): boolean {
  return (
    (!condition.event || action.event === condition.event) &&
    (!condition.componentType || action.componentType === condition.componentType) &&
    (!condition.attributeType || action.attributeType === condition.attributeType) &&
    (!condition.formulaItem || action.formulaItem === condition.formulaItem) &&
    (!condition.target || action.targetType === condition.target || action.buffOwner === condition.target)
  );
}

/** 判断单条通用条件是否命中原始事实。 */
function conditionMatches(condition: EngineRuleCondition, facts: EngineEffectFacts): boolean {
  const effectKey = facts.effectKey.toLowerCase();
  const mechanicName = facts.mechanicName.toLowerCase();
  switch (condition.kind) {
    case "objectIdIn":
      return condition.values.includes(facts.objectId);
    case "objectTypeIn":
      return condition.values.includes(facts.objectType);
    case "effectKeyIn":
      return condition.values.some((value) => value.toLowerCase() === effectKey);
    case "effectKeyContains":
      return condition.values.some((value) => effectKey.includes(value.toLowerCase()));
    case "hasParameter":
      return condition.keys.every((key) => facts.parameters.has(key));
    case "parameterNonZero":
      return condition.keys.every((key) => {
        const value = facts.parameters.get(key);
        return typeof value === "number" && Number.isFinite(value) && value !== 0;
      });
    case "mechanicContains":
      return condition.values.some((value) => mechanicName.includes(value.toLowerCase()));
    case "mechanicNotContains":
      return condition.values.every((value) => !mechanicName.includes(value.toLowerCase()));
    case "actionMatches":
      return facts.actions.some((action) => actionMatchesCondition(action, condition));
    case "actionNotMatches":
      return !facts.actions.some((action) => actionMatchesCondition(action, condition));
  }
}

/** 返回直接参与当前规则判断的 Action 路径。 */
function matchingActionPaths(rule: EngineSemanticRule, facts: EngineEffectFacts): string[] {
  const actionConditions = [...rule.all, ...(rule.any ?? [])]
    .filter((condition): condition is Extract<EngineRuleCondition, { kind: "actionMatches" }> => condition.kind === "actionMatches");
  return facts.actions
    .filter((action) => actionConditions.some((condition) => actionMatchesCondition(action, condition)))
    .map((action) => action.jsonPath);
}

/** 使用显式传入的声明式规则预测乘区。 */
export function predictEngineZonesWithRules(
  rules: readonly EngineSemanticRule[],
  facts: EngineEffectFacts,
): EnginePrediction[] {
  const candidates = rules
    .filter((rule) =>
      rule.all.every((condition) => conditionMatches(condition, facts)) &&
      (!rule.any || rule.any.some((condition) => conditionMatches(condition, facts))),
    )
    .map((rule): EnginePrediction => ({
      ruleId: rule.id,
      zoneId: rule.zoneId,
      status: rule.status,
      confidence: rule.confidence,
      reason: `${rule.name}：${rule.description}`,
      evidencePath: [
        facts.jsonPath,
        ...(rule.evidencePaths ?? []),
        ...matchingActionPaths(rule, facts),
      ].join(" | "),
    }));

  // 同一 zone 同时命中多条规则时保留证据等级和置信度更高的一条。
  const selected = new Map<FormulaWritableZoneId, EnginePrediction>();
  const ruleById = new Map(rules.map((rule) => [rule.id, rule]));
  for (const prediction of candidates) {
    const current = selected.get(prediction.zoneId);
    const authorityScore = { human: 30, formula: 20, gamedata: 10 }[
      ruleById.get(prediction.ruleId)?.authority ?? "gamedata"
    ];
    const score = authorityScore + (prediction.status === "human_verified" ? 3 : prediction.status === "verified" ? 2 : prediction.status === "inferred" ? 1 : 0) + prediction.confidence;
    const currentAuthorityScore = current
      ? { human: 30, formula: 20, gamedata: 10 }[
          ruleById.get(current.ruleId)?.authority ?? "gamedata"
        ]
      : 0;
    const currentScore = current
      ? currentAuthorityScore + (current.status === "human_verified" ? 3 : current.status === "verified" ? 2 : current.status === "inferred" ? 1 : 0) + current.confidence
      : -1;
    if (!current || score > currentScore) selected.set(prediction.zoneId, prediction);
  }
  return [...selected.values()];
}

/**
 * 未显式提供规则时不产生具体知识结论。
 * 浏览器或 Mechanics 若需要分类，必须使用自身确定性程序或显式规则输入。
 */
export function predictEngineZones(facts: EngineEffectFacts): EnginePrediction[] {
  return predictEngineZonesWithRules([], facts);
}
