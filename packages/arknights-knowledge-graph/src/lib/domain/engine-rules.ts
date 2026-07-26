import type { DamageZoneId } from "./damage-zones.js";
import type { EvidenceStatus } from "../types.js";

/** 从战斗模板 Action AST 提取的可查询事实。 */
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
  /** 保留 Action 原文，便于未来新增规则而无需重新解包。 */
  rawJson: string;
}

/** 语义规则接收的原始效果事实。 */
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

/** 声明式规则支持的条件。 */
export type EngineRuleCondition =
  | { kind: "effectKeyIn"; values: string[] }
  | { kind: "effectKeyContains"; values: string[] }
  | { kind: "hasParameter"; keys: string[] }
  | { kind: "lacksParameter"; keys: string[] }
  | { kind: "parameterKeyMatches"; pattern: string }
  | { kind: "parameterNumber"; key: string; operator: "lt" | "lte" | "gt" | "gte" | "eq"; value: number }
  | { kind: "mechanicContains"; values: string[] }
  | { kind: "actionMatches"; componentType?: string; attributeType?: string; formulaItem?: string; target?: string };

/** 可版本化的战斗引擎语义规则。 */
export interface EngineSemanticRule {
  /** 稳定规则 ID。 */
  id: string;
  /** 规则版本，语义变化时递增。 */
  version: number;
  /** 人类可读名称。 */
  name: string;
  /** 规则说明。 */
  description: string;
  /** 预测目标乘区。 */
  zoneId: DamageZoneId;
  /** 证据等级。 */
  status: EvidenceStatus;
  /** 置信度。 */
  confidence: number;
  /** 必须全部成立的条件。 */
  all: EngineRuleCondition[];
  /** 至少成立一个的可选条件。 */
  any?: EngineRuleCondition[];
  /** 可直接映射的兼容字段路径。 */
  fieldPaths?: string[];
}

/** 规则命中后写入图谱的预测。 */
export interface EnginePrediction {
  /** 命中的规则 ID。 */
  ruleId: string;
  /** 目标乘区。 */
  zoneId: DamageZoneId;
  /** 证据等级。 */
  status: EvidenceStatus;
  /** 置信度。 */
  confidence: number;
  /** 判定理由。 */
  reason: string;
  /** 仅由 GameData 和规则文件组成的证据路径。 */
  evidencePath: string;
}

/** 生产语义规则；新增引擎组件时只需扩展此声明数组及对应测试夹具。 */
export const ENGINE_SEMANTIC_RULES: EngineSemanticRule[] = [
  {
    id: "atk-static-multiplier",
    version: 1,
    name: "静态百分比攻击属性",
    description: "编队或藏品静态写入的 ATK multiplier 进入局外攻击区。",
    zoneId: "OUTER_ATK",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "hasParameter", keys: ["atk"] },
    ],
    fieldPaths: ["item.effect.attack_bonus"],
  },
  {
    id: "atk-runtime-multiplier",
    version: 1,
    name: "战斗内条件攻击属性",
    description: "由战斗事件、层数或角色能力写入的 ATK multiplier 进入局内攻击区。",
    zoneId: "INNER_ATK",
    status: "inferred",
    confidence: 0.85,
    all: [{ kind: "hasParameter", keys: ["atk"] }],
    any: [
      { kind: "effectKeyContains", values: ["layer_", "ability", "global_buff"] },
    ],
  },
  {
    id: "atk-flat-addition",
    version: 1,
    name: "攻击力点数直加",
    description: "char_attribute_add.atk 进入攻击力点数直加区。",
    zoneId: "FLAT_ATK",
    status: "inferred",
    confidence: 0.75,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "hasParameter", keys: ["atk"] },
    ],
  },
  {
    id: "hp-static-multiplier",
    version: 1,
    name: "静态百分比生命属性",
    description: "编队或藏品静态写入的 max_hp multiplier 进入局外生命区。",
    zoneId: "OUTER_MAX_HP",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "hasParameter", keys: ["max_hp"] },
    ],
  },
  {
    id: "hp-runtime-multiplier",
    version: 1,
    name: "战斗内条件生命属性",
    description: "由战斗事件、层数或角色能力写入的正向 max_hp multiplier 进入局内生命区。",
    zoneId: "INNER_MAX_HP",
    status: "inferred",
    confidence: 0.85,
    all: [
      { kind: "hasParameter", keys: ["max_hp"] },
      // 排除 enemy_max_hp_down 等负向敌方生命修改。
      { kind: "parameterNumber", key: "max_hp", operator: "gte", value: 0 },
    ],
    any: [
      { kind: "effectKeyContains", values: ["layer_", "ability", "global_buff"] },
    ],
  },
  {
    id: "hp-flat-addition",
    version: 1,
    name: "生命点数直加",
    description: "char_attribute_add.max_hp 进入干员生命点数直加区。",
    zoneId: "FLAT_MAX_HP",
    status: "inferred",
    confidence: 0.75,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "hasParameter", keys: ["max_hp"] },
    ],
  },
  {
    id: "char-def-static-multiplier",
    version: 1,
    name: "静态百分比防御属性",
    description: "编队或藏品静态写入的 def multiplier 进入局外防御区。",
    zoneId: "OUTER_CHAR_DEF",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "hasParameter", keys: ["def"] },
    ],
  },
  {
    id: "char-def-runtime-multiplier",
    version: 1,
    name: "战斗内条件防御属性",
    description: "由战斗事件、层数或角色能力写入的正向 def multiplier 进入局内防御区。",
    zoneId: "INNER_CHAR_DEF",
    status: "inferred",
    confidence: 0.85,
    all: [
      { kind: "hasParameter", keys: ["def"] },
      // 排除 enemy_def_down 等负向敌方防御修改。
      { kind: "parameterNumber", key: "def", operator: "gte", value: 0 },
    ],
    any: [
      { kind: "effectKeyContains", values: ["layer_", "ability", "global_buff"] },
    ],
  },
  {
    id: "char-def-flat-addition",
    version: 1,
    name: "干员防御点数直加",
    description: "char_attribute_add.def 进入干员防御点数直加区。",
    zoneId: "FLAT_CHAR_DEF",
    status: "inferred",
    confidence: 0.75,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "hasParameter", keys: ["def"] },
    ],
  },
  {
    id: "char-res-static-multiplier",
    version: 1,
    name: "静态百分比法抗属性",
    description: "编队或藏品静态写入的 magic_resistance multiplier 进入局外法抗区。",
    zoneId: "OUTER_CHAR_RES",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "hasParameter", keys: ["magic_resistance"] },
    ],
  },
  {
    id: "char-res-runtime-multiplier",
    version: 1,
    name: "战斗内条件法抗属性",
    description: "由战斗事件、层数或角色能力写入的正向 magic_resistance multiplier 进入局内法抗区。",
    zoneId: "INNER_CHAR_RES",
    status: "inferred",
    confidence: 0.85,
    all: [
      { kind: "hasParameter", keys: ["magic_resistance"] },
      // 排除目标法抗点数直减等负向敌方修改。
      { kind: "parameterNumber", key: "magic_resistance", operator: "gte", value: 0 },
    ],
    any: [
      { kind: "effectKeyContains", values: ["layer_", "ability", "global_buff"] },
    ],
  },
  {
    id: "char-res-flat-addition",
    version: 1,
    name: "干员法抗点数直加",
    description: "char_attribute_add.magic_resistance 进入干员法抗点数直加区。",
    zoneId: "FLAT_CHAR_RES",
    status: "inferred",
    confidence: 0.75,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "hasParameter", keys: ["magic_resistance"] },
    ],
  },
  {
    id: "damage-scale-action",
    version: 1,
    name: "DamageScale 伤害倍率",
    description: "战斗模板执行 DamageScale 且黑板提供伤害倍率时进入 AMP。",
    zoneId: "DAMAGE_AMPLIFICATION",
    status: "verified",
    confidence: 0.99,
    all: [
      { kind: "parameterKeyMatches", pattern: "^(damage_scale|ep_damage_scale|damage_scale_factor)$" },
      { kind: "actionMatches", componentType: "DamageScale" },
    ],
    fieldPaths: ["blackboard.damage_scale", "blackboard.ep_damage_scale"],
  },
  {
    id: "damage-scale-blackboard",
    version: 1,
    name: "伤害倍率黑板后备规则",
    description: "黑板或模板名明确声明 damage_scale，但 Action 细节缺失时推断为 AMP。",
    zoneId: "DAMAGE_AMPLIFICATION",
    status: "inferred",
    confidence: 0.9,
    all: [{ kind: "parameterKeyMatches", pattern: "^(damage_scale|ep_damage_scale|damage_scale_factor)$" }],
    any: [{ kind: "mechanicContains", values: ["damage_scale"] }],
  },
  {
    id: "additional-atk-packet",
    version: 1,
    name: "攻击力缩放追加伤害包",
    description: "atk_scale 描述独立计算的追加伤害包。",
    zoneId: "ADDITIONAL_DAMAGE_PACKET",
    status: "inferred",
    confidence: 0.95,
    all: [{ kind: "hasParameter", keys: ["atk_scale"] }],
    fieldPaths: ["blackboard.atk_scale"],
  },
  {
    id: "attack-speed-addition",
    version: 1,
    name: "攻击速度属性",
    description: "攻击速度黑板参数进入 SPD 区。",
    zoneId: "ATTACK_SPEED",
    status: "verified",
    confidence: 1,
    all: [{ kind: "parameterKeyMatches", pattern: "(^|_)attack_speed$" }],
    fieldPaths: ["blackboard.attack_speed"],
  },
  {
    id: "enemy-defense-percent",
    version: 1,
    name: "敌方防御百分比降低",
    description: "enemy_def_down 的 def multiplier 进入 DP。",
    zoneId: "DEF_PERCENT",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "mechanicContains", values: ["enemy_def_down"] },
      { kind: "hasParameter", keys: ["def"] },
    ],
  },
  {
    id: "enemy-hp-relic",
    version: 1,
    name: "藏品敌方生命降低",
    description: "普通藏品 enemy_max_hp_down 进入 HP_R。",
    zoneId: "ENEMY_HP_RELIC",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "mechanicContains", values: ["enemy_max_hp_down"] },
      { kind: "hasParameter", keys: ["max_hp"] },
      { kind: "lacksParameter", keys: ["trig_type"] },
    ],
  },
  {
    id: "enemy-hp-copper",
    version: 1,
    name: "通宝敌方生命降低",
    description: "带通宝触发类型的 enemy_max_hp_down 进入 HP_C。",
    zoneId: "ENEMY_HP_COPPER",
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "mechanicContains", values: ["enemy_max_hp_down"] },
      { kind: "hasParameter", keys: ["max_hp", "trig_type"] },
    ],
  },
  {
    id: "target-res-flat-addition",
    version: 1,
    name: "目标法抗点数修改",
    description: "对伤害目标执行 MAGIC_RESISTANCE ADDITION 且黑板为负值时进入 RF。",
    zoneId: "RES_FLAT",
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNumber", key: "magic_resistance", operator: "lt", value: 0 },
      { kind: "actionMatches", componentType: "CreateBuff", attributeType: "MAGIC_RESISTANCE", formulaItem: "ADDITION", target: "MODIFIER_TARGET" },
    ],
  },
  {
    id: "target-res-percent-multiplier",
    version: 1,
    name: "目标法抗百分比修改",
    description: "对伤害目标执行 MAGIC_RESISTANCE MULTIPLIER 且黑板为负值时进入 RP。",
    zoneId: "RES_PERCENT",
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNumber", key: "magic_resistance", operator: "lt", value: 0 },
      { kind: "actionMatches", componentType: "CreateBuff", attributeType: "MAGIC_RESISTANCE", formulaItem: "MULTIPLIER", target: "MODIFIER_TARGET" },
    ],
  },
  {
    id: "target-def-flat-addition",
    version: 1,
    name: "目标防御点数修改",
    description: "对伤害目标执行 DEF ADDITION 且黑板为负值时进入 DF。",
    zoneId: "DEF_FLAT",
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNumber", key: "def", operator: "lt", value: 0 },
      { kind: "actionMatches", componentType: "CreateBuff", attributeType: "DEF", formulaItem: "ADDITION", target: "MODIFIER_TARGET" },
    ],
  },
];

/** 读取 Action 组件的短类型名。 */
function componentType(value: unknown): string {
  return typeof value === "string"
    ? value.split(",")[0]?.replace("Torappu.Battle.Action.Nodes+", "") ?? value
    : "";
}

/** 在一个 Action 内收集属性修改器。 */
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

/** 把 buff_template_data 的事件 Action 转换成完整事实。 */
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

/** 判断单条声明式条件是否命中。 */
function conditionMatches(condition: EngineRuleCondition, facts: EngineEffectFacts): boolean {
  const effectKey = facts.effectKey.toLowerCase();
  const mechanicName = facts.mechanicName.toLowerCase();
  switch (condition.kind) {
    case "effectKeyIn":
      return condition.values.map((value) => value.toLowerCase()).includes(effectKey);
    case "effectKeyContains":
      return condition.values.some((value) => effectKey.includes(value.toLowerCase()));
    case "hasParameter":
      return condition.keys.every((key) => facts.parameters.has(key));
    case "lacksParameter":
      return condition.keys.every((key) => !facts.parameters.has(key));
    case "parameterKeyMatches": {
      const expression = new RegExp(condition.pattern, "i");
      return [...facts.parameters.keys()].some((key) => expression.test(key));
    }
    case "parameterNumber": {
      const actual = facts.parameters.get(condition.key);
      if (typeof actual !== "number") return false;
      if (condition.operator === "lt") return actual < condition.value;
      if (condition.operator === "lte") return actual <= condition.value;
      if (condition.operator === "gt") return actual > condition.value;
      if (condition.operator === "gte") return actual >= condition.value;
      return actual === condition.value;
    }
    case "mechanicContains":
      return condition.values.some((value) => mechanicName.includes(value.toLowerCase()));
    case "actionMatches":
      return facts.actions.some((action) =>
        (!condition.componentType || action.componentType === condition.componentType) &&
        (!condition.attributeType || action.attributeType === condition.attributeType) &&
        (!condition.formulaItem || action.formulaItem === condition.formulaItem) &&
        (!condition.target || action.targetType === condition.target || action.buffOwner === condition.target),
      );
  }
}

/** 返回规则中直接参与判断的 Action 路径。 */
function matchingActionPaths(rule: EngineSemanticRule, facts: EngineEffectFacts): string[] {
  const actionConditions = [...rule.all, ...(rule.any ?? [])]
    .filter((condition): condition is Extract<EngineRuleCondition, { kind: "actionMatches" }> => condition.kind === "actionMatches");
  return facts.actions
    .filter((action) => actionConditions.some((condition) =>
      (!condition.componentType || action.componentType === condition.componentType) &&
      (!condition.attributeType || action.attributeType === condition.attributeType) &&
      (!condition.formulaItem || action.formulaItem === condition.formulaItem) &&
      (!condition.target || action.targetType === condition.target || action.buffOwner === condition.target),
    ))
    .map((action) => action.jsonPath);
}

/** 只基于原始事实和可版本化语义规则预测乘区。 */
export function predictEngineZones(facts: EngineEffectFacts): EnginePrediction[] {
  const candidates = ENGINE_SEMANTIC_RULES
    .filter((rule) =>
      rule.all.every((condition) => conditionMatches(condition, facts)) &&
      (!rule.any || rule.any.some((condition) => conditionMatches(condition, facts))),
    )
    .map((rule) => ({
      ruleId: rule.id,
      zoneId: rule.zoneId,
      status: rule.status,
      confidence: rule.confidence,
      reason: `${rule.name}：${rule.description}`,
      evidencePath: [facts.jsonPath, ...matchingActionPaths(rule, facts)].join(" | "),
    }));

  // 同一乘区可能同时命中验证规则和后备规则，只保留证据最强的一条。
  const selected = new Map<DamageZoneId, EnginePrediction>();
  for (const prediction of candidates) {
    const current = selected.get(prediction.zoneId);
    const score = (prediction.status === "verified" ? 2 : 1) + prediction.confidence;
    const currentScore = current ? (current.status === "verified" ? 2 : 1) + current.confidence : -1;
    if (!current || score > currentScore) selected.set(prediction.zoneId, prediction);
  }
  return [...selected.values()];
}

/** 查询层识别的字段路径来自规则元数据，而非人工文档。 */
export const ENGINE_FIELD_PATHS = ENGINE_SEMANTIC_RULES.flatMap((rule) => rule.fieldPaths ?? []);
