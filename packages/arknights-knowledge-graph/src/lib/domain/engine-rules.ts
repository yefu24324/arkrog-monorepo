import type { FormulaWritableZoneId } from "../formula/formula-book.js";
import { FormulaZoneId } from "../formula/formula-book.js";
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
  /** 伤害类型筛选；当前属性规则不消费，但保留原始事实。 */
  damageMask: string;
  /** 伤害应用方式筛选；当前属性规则不消费，但保留原始事实。 */
  applyWay: string;
  /** 保留 Action 原文，便于后续属性重构复用同一事实提取器。 */
  rawJson: string;
}

/** 属性语义规则接收的原始效果事实。 */
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

/** 当前属性规则需要的声明式条件。 */
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
    }
  | {
      kind: "actionNotMatches";
      event?: string;
      componentType?: string;
      attributeType?: string;
      formulaItem?: string;
      target?: string;
    };

/** 可版本化的属性战斗引擎语义规则。 */
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
 * 当前版本声明干员攻击力、攻击速度、防御力、最大生命与敌方属性规则。
 * zoneId 直接引用 FormulaBook，领域层不再维护第二套乘区名称或兼容映射。
 */
export const ENGINE_SEMANTIC_RULES: readonly EngineSemanticRule[] = [
  {
    id: "atk-static-multiplier",
    version: 3,
    name: "静态攻击力倍率",
    description: "char_attribute_mul 或 char_squad_attribute_mul 的 atk 增量进入干员局外攻击力倍率。",
    zoneId: FormulaZoneId.char_out_atk_mul,
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
    zoneId: FormulaZoneId.char_out_atk_add,
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
    zoneId: FormulaZoneId.char_in_atk_mul,
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
    zoneId: FormulaZoneId.char_in_atk_mul,
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
  {
    id: "attack-speed-direct-addition",
    version: 1,
    name: "直接攻击速度加算",
    description: "干员静态属性加算载体的 attack_speed 点数进入直接攻击速度加成。",
    zoneId: FormulaZoneId.char_direct_attack_speed_add,
    status: "inferred",
    confidence: 0.95,
    all: [
      {
        kind: "effectKeyIn",
        values: ["char_attribute_add", "char_squad_attribute_add", "layer_char_attribute_add"],
      },
      { kind: "parameterNonZero", keys: ["attack_speed"] },
    ],
  },
  {
    id: "attack-speed-action-addition",
    version: 1,
    name: "战斗内攻击速度加算 Action",
    description: "战斗模板对 BUFF_OWNER 执行 ATTACK_SPEED ADDITION，进入干员直接攻击速度加成。",
    zoneId: FormulaZoneId.char_direct_attack_speed_add,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["attack_speed"] },
      // 敌方减攻速模板同样使用 attack_speed 黑板，不能写入我方攻击速度公式。
      { kind: "mechanicNotContains", values: ["enemy_attack_speed_down"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "ATTACK_SPEED",
        formulaItem: "ADDITION",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "attack-speed-conditional-addition",
    version: 1,
    name: "条件攻击速度加算",
    description: "能力或战斗事件携带的 attack_speed 点数进入干员直接攻击速度加成。",
    zoneId: FormulaZoneId.char_direct_attack_speed_add,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "parameterNonZero", keys: ["attack_speed"] },
      // 敌方减攻速不属于我方攻击速度公式。
      { kind: "mechanicNotContains", values: ["enemy_attack_speed_down"] },
      // 明确 Action 由 verified 规则独占，避免同一效果产生重复预测。
      { kind: "actionNotMatches", componentType: "CreateBuff", attributeType: "ATTACK_SPEED", formulaItem: "ADDITION", target: "BUFF_OWNER" },
    ],
    any: [
      { kind: "effectKeyContains", values: ["ability", "global_buff"] },
    ],
  },
  {
    id: "def-static-multiplier",
    version: 1,
    name: "静态防御力倍率",
    description: "char_attribute_mul 或 char_squad_attribute_mul 的 def 增量进入干员局外防御力倍率。",
    zoneId: FormulaZoneId.char_out_def_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "parameterNonZero", keys: ["def"] },
    ],
  },
  {
    id: "def-flat-addition",
    version: 1,
    name: "局外防御力点数加算",
    description: "char_attribute_add.def 作为点数写入干员局外防御力加成。",
    zoneId: FormulaZoneId.char_out_def_add,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "parameterNonZero", keys: ["def"] },
    ],
  },
  {
    id: "def-runtime-multiplier-action",
    version: 1,
    name: "战斗内防御力倍率 Action",
    description: "非敌方战斗模板对 BUFF_OWNER 执行 DEF MULTIPLIER，进入干员局内防御力倍率。",
    zoneId: FormulaZoneId.char_in_def_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
      // 敌方减防模板同样可能以 BUFF_OWNER 为接收者，必须先按稳定模板名排除。
      { kind: "mechanicNotContains", values: ["enemy", "defdown"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "DEF",
        formulaItem: "MULTIPLIER",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "def-runtime-flat-addition-action",
    version: 1,
    name: "战斗内防御力点数 Action",
    description: "非敌方战斗模板对 BUFF_OWNER 执行 DEF ADDITION，进入干员局内防御力加成。",
    zoneId: FormulaZoneId.char_in_def_add,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
      // 支柱类减防与敌方减防不属于干员防御力公式。
      { kind: "mechanicNotContains", values: ["enemy", "defdown"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "DEF",
        formulaItem: "ADDITION",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "def-runtime-flat-addition-fallback",
    version: 1,
    name: "战斗内防御力点数后备规则",
    description: "浏览器未加载 Action 索引时，由 attr_up_on_trigger[def&mag_resist] 与 def 恢复同一局内防御力点数。",
    zoneId: FormulaZoneId.char_in_def_add,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
      { kind: "mechanicContains", values: ["attr_up_on_trigger[def&mag_resist]"] },
    ],
  },
  {
    id: "def-runtime-multiplier",
    version: 1,
    name: "战斗内条件防御力倍率",
    description: "能力、层数或战斗事件携带的 def 增量进入干员局内防御力倍率。",
    zoneId: FormulaZoneId.char_in_def_mul,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
      // 敌方减防与辅助减防沿用 def 黑板，但不能写入我方防御力公式。
      { kind: "mechanicNotContains", values: ["enemy", "defdown", "attr_up_on_trigger[def&mag_resist]"] },
      // 明确点数 Action 由上面的 verified 规则独占，避免同一效果同时落入倍率区。
      { kind: "actionNotMatches", componentType: "CreateBuff", attributeType: "DEF", formulaItem: "ADDITION", target: "BUFF_OWNER" },
    ],
    any: [
      { kind: "effectKeyContains", values: ["ability", "global_buff", "layer_"] },
    ],
  },
  {
    id: "enemy-direct-def-multiplier",
    version: 1,
    name: "敌方直接防御力倍率",
    description: "enemy_def_down 或 enemy_attribute_mul.def 的敌方防御倍率增量进入敌方直接防御力乘算。",
    zoneId: FormulaZoneId.enemy_direct_def_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
    ],
    any: [
      { kind: "mechanicContains", values: ["enemy_def_down"] },
      { kind: "mechanicContains", values: ["defdown[support]"] },
      { kind: "effectKeyIn", values: ["enemy_attribute_mul"] },
    ],
  },
  {
    id: "enemy-final-def-multiplier-action",
    version: 1,
    name: "敌方最终防御力倍率 Action",
    description: "敌方战斗模板对 BUFF_OWNER 执行 DEF MULTIPLIER，进入敌方最终防御力乘算。",
    zoneId: FormulaZoneId.enemy_final_def_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
      { kind: "mechanicContains", values: ["enemy"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "DEF",
        formulaItem: "MULTIPLIER",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "enemy-final-def-multiplier-fallback",
    version: 1,
    name: "敌方最终防御力倍率后备规则",
    description: "浏览器未加载 Action 索引时，由 enemy_durcar_def_down 与 def 参数恢复敌方最终防御力乘算。",
    zoneId: FormulaZoneId.enemy_final_def_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "parameterNonZero", keys: ["def"] },
      { kind: "mechanicContains", values: ["enemy_durcar_def_down"] },
    ],
  },
  {
    id: "enemy-direct-magic-resist-addition-action",
    version: 1,
    name: "敌方直接法抗点数 Action",
    description: "战斗模板对伤害目标执行 MAGIC_RESISTANCE ADDITION，进入敌方直接法抗乘区。",
    zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["magic_resistance"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "MAGIC_RESISTANCE",
        formulaItem: "ADDITION",
        target: "MODIFIER_TARGET",
      },
    ],
  },
  {
    id: "enemy-direct-magic-resist-multiplier",
    version: 1,
    name: "敌方直接法抗倍率",
    description: "enemy_attribute_mul.magic_resistance 或已知敌方藏品模板的法抗修改进入敌方直接法抗乘区。",
    zoneId: FormulaZoneId.enemy_direct_magic_resist_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "parameterNonZero", keys: ["magic_resistance"] },
    ],
    any: [
      { kind: "effectKeyIn", values: ["enemy_attribute_mul", "enemy_attribute_add"] },
      { kind: "mechanicContains", values: [
        "rogue_5_enemy_minus_magic_resistance[take_damage]",
        "rogue_6_caster_attack",
        "defdown[support]",
      ] },
    ],
  },
  {
    id: "enemy-final-magic-resist-multiplier-action",
    version: 1,
    name: "敌方最终法抗倍率 Action",
    description: "敌方战斗模板对 BUFF_OWNER 执行 MAGIC_RESISTANCE MULTIPLIER，进入敌方最终法抗乘算。",
    zoneId: FormulaZoneId.enemy_final_magic_resist_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["magic_resistance"] },
      { kind: "mechanicContains", values: ["enemy"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "MAGIC_RESISTANCE",
        formulaItem: "MULTIPLIER",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "enemy-final-magic-resist-multiplier-fallback",
    version: 1,
    name: "敌方最终法抗倍率后备规则",
    description: "浏览器未加载 Action 索引时，由 enemy_durcar_mag_resist_down 与 magic_resistance 参数恢复敌方最终法抗乘算。",
    zoneId: FormulaZoneId.enemy_final_magic_resist_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "parameterNonZero", keys: ["magic_resistance"] },
      { kind: "mechanicContains", values: ["enemy_durcar_mag_resist_down"] },
    ],
  },
  {
    id: "max-hp-static-multiplier",
    version: 1,
    name: "静态最大生命倍率",
    description: "char_attribute_mul 或 char_squad_attribute_mul 的 max_hp 增量进入干员局外最大生命倍率。",
    zoneId: FormulaZoneId.char_out_max_hp_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_mul", "char_squad_attribute_mul"] },
      { kind: "parameterNonZero", keys: ["max_hp"] },
    ],
  },
  {
    id: "max-hp-flat-addition",
    version: 1,
    name: "局外最大生命点数加算",
    description: "char_attribute_add.max_hp 作为点数写入干员局外最大生命加成。",
    zoneId: FormulaZoneId.char_out_max_hp_add,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "effectKeyIn", values: ["char_attribute_add"] },
      { kind: "parameterNonZero", keys: ["max_hp"] },
    ],
  },
  {
    id: "max-hp-runtime-multiplier-action",
    version: 1,
    name: "战斗内最大生命倍率 Action",
    description: "非敌方战斗模板对 BUFF_OWNER 执行 MAX_HP MULTIPLIER，进入干员局内最大生命倍率。",
    zoneId: FormulaZoneId.char_in_max_hp_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["max_hp"] },
      // 目标阵营未作为 Action 独立字段导出时，用模板稳定名排除敌方属性程序。
      { kind: "mechanicNotContains", values: ["enemy"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "MAX_HP",
        formulaItem: "MULTIPLIER",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "max-hp-runtime-flat-addition-action",
    version: 1,
    name: "战斗内最大生命点数 Action",
    description: "非敌方战斗模板对 BUFF_OWNER 执行 MAX_HP ADDITION，进入干员局内最大生命加成。",
    zoneId: FormulaZoneId.char_in_max_hp_add,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "parameterNonZero", keys: ["max_hp"] },
      // 与倍率 Action 使用同一阵营护栏，避免敌方 BUFF_OWNER 被误认为干员。
      { kind: "mechanicNotContains", values: ["enemy"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "MAX_HP",
        formulaItem: "ADDITION",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "max-hp-runtime-multiplier",
    version: 1,
    name: "战斗内条件最大生命倍率",
    description: "角色能力、层数或非敌方全局模板携带的 max_hp 增量进入干员局内最大生命倍率。",
    zoneId: FormulaZoneId.char_in_max_hp_mul,
    status: "inferred",
    confidence: 0.9,
    all: [
      { kind: "parameterNonZero", keys: ["max_hp"] },
      // enemy_max_hp_down、敌方专用模板与遗留支援使用敌方生命公式。
      { kind: "mechanicNotContains", values: ["enemy", "rogue_6_start_3"] },
      // 明确的点数加算与最终倍率 Action 不能再由通用名称规则猜成局内倍率。
      { kind: "actionNotMatches", componentType: "CreateBuff", attributeType: "MAX_HP", formulaItem: "ADDITION", target: "BUFF_OWNER" },
      { kind: "actionNotMatches", componentType: "CreateBuff", attributeType: "MAX_HP", formulaItem: "FINAL_SCALER", target: "BUFF_OWNER" },
    ],
    any: [
      { kind: "effectKeyContains", values: ["char_ability", "layer_char", "global_buff"] },
    ],
  },
  {
    id: "enemy-direct-max-hp-multiplier",
    version: 1,
    name: "敌方直接最大生命倍率",
    description: "enemy_max_hp_down 或 enemy_attribute_mul.max_hp 进入敌方直接血量乘算，并由 mechanics 统一为倍率增量。",
    zoneId: FormulaZoneId.enemy_direct_max_hp_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "parameterNonZero", keys: ["max_hp"] },
    ],
    any: [
      { kind: "mechanicContains", values: ["enemy_max_hp_down"] },
      { kind: "effectKeyIn", values: ["enemy_attribute_mul"] },
    ],
  },
  {
    id: "enemy-final-max-hp-scaler-action",
    version: 1,
    name: "敌方最终最大生命倍率 Action",
    description: "rogue_6_start_3 对敌方 BUFF_OWNER 执行 MAX_HP FINAL_SCALER，进入敌方最终血量乘算。",
    zoneId: FormulaZoneId.enemy_final_max_hp_mul,
    status: "verified",
    confidence: 1,
    all: [
      { kind: "effectKeyIn", values: ["global_buff_layer"] },
      { kind: "mechanicContains", values: ["rogue_6_start_3"] },
      { kind: "parameterNonZero", keys: ["max_hp"] },
      {
        kind: "actionMatches",
        componentType: "CreateBuff",
        attributeType: "MAX_HP",
        formulaItem: "FINAL_SCALER",
        target: "BUFF_OWNER",
      },
    ],
  },
  {
    id: "enemy-final-max-hp-scaler-fallback",
    version: 1,
    name: "敌方最终最大生命倍率后备规则",
    description: "浏览器未加载 Action 索引时，由 global_buff_layer、rogue_6_start_3 与 max_hp 恢复同一最终倍率。",
    zoneId: FormulaZoneId.enemy_final_max_hp_mul,
    status: "inferred",
    confidence: 0.95,
    all: [
      { kind: "effectKeyIn", values: ["global_buff_layer"] },
      { kind: "mechanicContains", values: ["rogue_6_start_3"] },
      { kind: "parameterNonZero", keys: ["max_hp"] },
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
      // 复合模板常携带零值占位参数，只有有限非零数才表示真实属性贡献。
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
      // 否定条件复用同一 Action 字段匹配器，保证正反规则的字段语义一致。
      return !facts.actions.some((action) => actionMatchesCondition(action, condition));
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

/** 只基于 GameData、战斗模板事实和版本化规则预测属性乘区。 */
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
