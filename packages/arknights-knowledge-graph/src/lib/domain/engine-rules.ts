import type { FormulaWritableZoneId } from "../formula/formula-book.js";
import { FormulaZoneId } from "../formula/formula-book.js";
import type { EvidenceStatus } from "../types.js";

/** 从战斗模板 Action AST 提取的攻击力语义事实。 */
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
  /** 伤害类型筛选；当前攻击力规则不消费，但保留原始事实。 */
  damageMask: string;
  /** 伤害应用方式筛选；当前攻击力规则不消费，但保留原始事实。 */
  applyWay: string;
  /** 保留 Action 原文，便于后续属性重构复用同一事实提取器。 */
  rawJson: string;
}

/** 攻击力语义规则接收的原始效果事实。 */
export interface EngineEffectFacts {
  /** buff 元素类型。 */
  effectKey: string;
  /** 黑板参数。 */
  parameters: ReadonlyMap<string, number | string | null>;
  /** 引用的战斗模板名。 */
  mechanicName: string;
  /** 战斗模板 Action 事实。 */
  actions: readonly MechanicActionFact[];
  /** 效果来自 relics、charBuffData 或其他数据表。 */
  sourceKind: string;
  /** 原始效果 JSON 路径。 */
  jsonPath: string;
}

/** 当前攻击力规则需要的声明式条件。 */
export type EngineRuleCondition =
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
    };

/** 可版本化的攻击力战斗引擎语义规则。 */
export interface EngineSemanticRule {
  /** 稳定规则 ID。 */
  id: string;
  /** 规则版本，语义或乘区发生变化时递增。 */
  version: number;
  /** 人类可读名称。 */
  name: string;
  /** 规则说明。 */
  description: string;
  /** FormulaBook 中允许业务写入的真实 zone。 */
  zoneId: FormulaWritableZoneId;
  /** 证据等级。 */
  status: EvidenceStatus;
  /** 置信度。 */
  confidence: number;
  /** 必须全部成立的条件。 */
  all: readonly EngineRuleCondition[];
  /** 至少成立一个的可选条件。 */
  any?: readonly EngineRuleCondition[];
  /** 可直接映射的生产字段路径。 */
  fieldPaths?: readonly string[];
}

/** 规则命中后交给图谱路由和藏品程序的预测。 */
export interface EnginePrediction {
  /** 命中的稳定规则 ID。 */
  ruleId: string;
  /** FormulaBook 中的真实写入 zone。 */
  zoneId: FormulaWritableZoneId;
  /** 证据等级。 */
  status: EvidenceStatus;
  /** 置信度。 */
  confidence: number;
  /** 判定理由。 */
  reason: string;
  /** 只由 GameData、战斗模板和规则文件组成的证据路径。 */
  evidencePath: string;
}

/**
 * 当前版本只声明干员攻击力加成规则。
 * zoneId 直接引用 FormulaBook，领域层不再维护第二套乘区名称或兼容映射。
 */
export const ENGINE_SEMANTIC_RULES: readonly EngineSemanticRule[] = [
  {
    id: "atk-static-multiplier",
    version: 3,
    name: "静态攻击力倍率",
    description: "char_attribute_mul 或 char_squad_attribute_mul 的 atk 增量进入干员局外攻击力倍率。",
    zoneId: FormulaZoneId.operator_out_atk_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "parameterNonZero", keys: ["atk"] },
    ],
    fieldPaths: ["item.effect.attack_bonus"],
  },
  {
    id: "atk-flat-addition",
    version: 3,
    name: "局外攻击力点数加算",
    description: "char_attribute_add.atk 作为点数写入干员局外攻击力加成。",
    zoneId: FormulaZoneId.operator_out_atk_add,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "parameterNonZero", keys: ["atk"] },
    ],
  },
  {
    id: "atk-runtime-multiplier-action",
    version: 2,
    name: "战斗内攻击力倍率 Action",
    description: "战斗模板对 BUFF_OWNER 执行 ATK MULTIPLIER，进入干员局内攻击力倍率。",
    zoneId: FormulaZoneId.operator_in_atk_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["atk"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "ATK",
        formulaItem: "MULTIPLIER",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "atk-runtime-multiplier",
    version: 3,
    name: "战斗内条件攻击力倍率",
    description: "能力、层数或战斗事件携带的 atk 增量进入干员局内攻击力倍率。",
    zoneId: FormulaZoneId.operator_in_atk_mul,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "parameterNonZero", keys: ["atk"] },
      // 敌方攻击力修改不能因同样使用 atk 黑板而写入干员攻击力公式。
      { kind: "mechanicNotContains", values: ["enemy_atk_down"] },
    ],
    any: [
      { kind: "effectKeyContains", values: ["ability", "global_buff", "layer_"] },
      { kind: "mechanicContains", values: ["rogue_6_pioneer_skill"] },
    ],
  },
];

/** 读取 Action 组件的短类型名。 */
function componentType(value: unknown): string {
  return typeof value === "string"
    ? value.split(",")[0]?.replace("Torappu.Battle.Action.Nodes+", "") ?? value
    : "";
}

/** 在一个 Action 内递归收集属性修改器。 */
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

/** 判断一条 Action 是否满足规则声明的属性、算法和目标约束。 */
function actionMatchesCondition(
  action: MechanicActionFact,
  condition: Extract<EngineRuleCondition, { kind: "actionMatches" }>,
): boolean {
  return (
    (!condition.event || action.event === condition.event) &&
    (!condition.componentType || action.componentType === condition.componentType) &&
    (!condition.attributeType || action.attributeType === condition.attributeType) &&
    (!condition.formulaItem || action.formulaItem === condition.formulaItem) &&
    (!condition.target || action.targetType === condition.target || action.buffOwner === condition.target)
  );
}

/** 判断单条声明式条件是否命中原始事实。 */
function conditionMatches(condition: EngineRuleCondition, facts: EngineEffectFacts): boolean {
  const effectKey = facts.effectKey.toLowerCase();
  const mechanicName = facts.mechanicName.toLowerCase();
  switch (condition.kind) {
    case "effectKeyIn":
      return condition.values.some((value) => value.toLowerCase() === effectKey);
    case "effectKeyContains":
      return condition.values.some((value) => effectKey.includes(value.toLowerCase()));
    case "hasParameter":
      return condition.keys.every((key) => facts.parameters.has(key));
    case "parameterNonZero":
      // 攻速等复合模板常携带 atk=0 占位值，只有有限非零数才表示真实攻击力贡献。
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
  }
}

/** 返回直接参与当前规则判断的战斗模板 Action 路径。 */
function matchingActionPaths(rule: EngineSemanticRule, facts: EngineEffectFacts): string[] {
  const actionConditions = [...rule.all, ...(rule.any ?? [])]
    .filter((condition): condition is Extract<EngineRuleCondition, { kind: "actionMatches" }> => condition.kind === "actionMatches");
  return facts.actions
    .filter((action) => actionConditions.some((condition) => actionMatchesCondition(action, condition)))
    .map((action) => action.jsonPath);
}

/** 只基于 GameData、战斗模板事实和版本化规则预测攻击力乘区。 */
export function predictEngineZones(facts: EngineEffectFacts): EnginePrediction[] {
  const candidates = ENGINE_SEMANTIC_RULES
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
      evidencePath: [facts.jsonPath, ...matchingActionPaths(rule, facts)].join(" | "),
    }));

  // 同一真实 zone 同时命中 Action 与后备规则时，只保留证据更强的一条。
  const selected = new Map<FormulaWritableZoneId, EnginePrediction>();
  for (const prediction of candidates) {
    const current = selected.get(prediction.zoneId);
    const score = (prediction.status === "verified" ? 2 : 1) + prediction.confidence;
    const currentScore = current
      ? (current.status === "verified" ? 2 : 1) + current.confidence
      : -1;
    if (!current || score > currentScore) selected.set(prediction.zoneId, prediction);
  }
  return [...selected.values()];
}

/** 查询层可识别字段路径只来自生产规则元数据。 */
export const ENGINE_FIELD_PATHS = ENGINE_SEMANTIC_RULES.flatMap((rule) => rule.fieldPaths ?? []);
