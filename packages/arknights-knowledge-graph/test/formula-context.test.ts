import { describe, expect, it } from "vitest";

import { DAMAGE_ZONES } from "../src/lib/domain/damage-zones.js";
import {
  FORMULA_DAMAGE_ZONES,
  FormulaContext,
  evaluateDamageFormula,
  evaluateFormula,
  explainDamageFormula,
  renderDamageFormula,
  type FormulaInputs,
} from "../src/lib/formula/index.js";

/** 创建覆盖完整伤害预览所需的最小输入。 */
function createFormulaInputs(): FormulaInputs {
  return {
    ATK0: 1_000,
    DEF0: 1_000,
    RES0: 0,
    PHYSICAL_ATTACK_SCALE: 1,
    MAGICAL_ATTACK_SCALE: 0,
    PURE_ATTACK_SCALE: 0,
    PHYSICAL_MIN_DAMAGE_RATIO: 0.05,
    MAGICAL_MIN_DAMAGE_RATIO: 0.05,
    RAW_ELEMENTAL_DAMAGE: 0,
    // 元素伤害抗性由敌人基础属性提供，普通测试敌人按 0 处理。
    ENEMY_EP_DAMAGE_RESISTANCE0: 0,
    BASE_ATTACK_INTERVAL: 1,
  };
}

/** 创建一份同时包含属性、增伤、攻速和追加伤害包的测试上下文。 */
function createFormulaContext(): FormulaContext {
  return new FormulaContext()
    .add("FLAT_ATK", 100, "基础加成", {
      id: "flat-atk",
      reason: "测试攻击力点数直加进入 F 区。",
      source: { kind: "manual", parameterKey: "atk" },
    })
    .add("OUTER_ATK", 0.2, "局外藏品", {
      id: "outer-atk",
      reason: "char_attribute_mul.atk 由静态攻击规则归入局外攻击区。",
      source: {
        kind: "engine-rule",
        itemId: "relic_demo",
        buffKey: "char_attribute_mul",
        parameterKey: "atk",
        ruleId: "atk-static-multiplier",
        evidencePath: "$.details.demo.relics.demo.buffs[0]",
      },
    })
    .add("INNER_ATK", 0.3, "局内能力", { id: "inner-atk" })
    .add("DEF_PERCENT", 0.2, "百分比减防", { id: "def-percent" })
    .add("DEF_FLAT", 50, "点数减防", { id: "def-flat" })
    .add("DAMAGE_AMPLIFICATION", 0.1, "物理易伤", {
      id: "physical-amp",
      damageTypes: ["physical"],
    })
    .add("DAMAGE_AMPLIFICATION", 0.5, "法术易伤", {
      id: "magical-amp",
      damageTypes: ["magical"],
    })
    .add("ATTACK_SPEED", 20, "攻击速度藏品", { id: "attack-speed" })
    .add("ADDITIONAL_DAMAGE_PACKET", 100, "追加伤害藏品", { id: "packet" })
    .add("OUTER_ATK", 9, "未满足条件的藏品", { id: "inactive", active: false });
}

describe("并行实验公式上下文", () => {
  it("完整覆盖现有稳定乘区 ID，不要求旧 damage-zones.ts 立即迁移", () => {
    const stableZoneIds = DAMAGE_ZONES.map((zone) => zone.id).sort();
    expect(Object.keys(FORMULA_DAMAGE_ZONES).sort()).toEqual(stableZoneIds);
  });

  it("保留 tooltip、详细原因和知识图谱证据来源", () => {
    const context = createFormulaContext();
    const [contribution] = context.getContributions("OUTER_ATK");

    expect(contribution).toMatchObject({
      id: "outer-atk",
      tooltip: "局外藏品",
      reason: "char_attribute_mul.atk 由静态攻击规则归入局外攻击区。",
      source: {
        kind: "engine-rule",
        itemId: "relic_demo",
        ruleId: "atk-static-multiplier",
      },
    });
    expect(context.getContributions("OUTER_ATK")).toHaveLength(1);
    expect(context.getContributions("OUTER_ATK", { includeInactive: true })).toHaveLength(2);
  });

  it("按结构化乘区与完整公式计算攻击、防御、单次伤害和 DPS", () => {
    const context = createFormulaContext();
    const inputs = createFormulaInputs();

    expect(evaluateDamageFormula("FINAL_ATK", context, inputs)).toBeCloseTo(1_716);
    expect(evaluateDamageFormula("EFFECTIVE_DEF", context, inputs)).toBeCloseTo(750);
    expect(evaluateDamageFormula("PHYSICAL_MAIN_DAMAGE", context, inputs)).toBeCloseTo(1_062.6);
    expect(evaluateDamageFormula("TOTAL_DAMAGE", context, inputs)).toBeCloseTo(1_162.6);
    expect(evaluateDamageFormula("DPS", context, inputs)).toBeCloseTo(1_395.12);
  });

  it("按伤害类型筛选独立增伤，不让物理易伤污染法术公式", () => {
    const context = createFormulaContext().add("DAMAGE_AMPLIFICATION", 0.2, "通用增伤", {
      id: "global-amp",
    });

    expect(context.evaluateZone("DAMAGE_AMPLIFICATION", { damageType: "physical" }).value).toBeCloseTo(1.32);
    expect(context.evaluateZone("DAMAGE_AMPLIFICATION", { damageType: "magical" }).value).toBeCloseTo(1.8);
    expect(context.evaluateZone("DAMAGE_AMPLIFICATION", { damageType: "pure" }).value).toBeCloseTo(1.2);
  });

  it("同时生成快速阅读的符号公式和带 tooltip 的实际展开式", () => {
    const context = createFormulaContext();
    const symbolic = renderDamageFormula("FINAL_ATK");
    const expanded = renderDamageFormula("FINAL_ATK", {
      mode: "expanded",
      context,
      inputs: createFormulaInputs(),
    });

    expect(symbolic).toContain("ΣᵢFᵢ");
    expect(symbolic).toContain("(1 + ΣᵢOᵢ)");
    expect(symbolic).toContain("(1 + ΣᵢIᵢ)");
    expect(expanded).toContain("1000「未应用实验乘区前的基础攻击力」");
    expect(expanded).toContain("100「基础加成」");
    expect(expanded).toContain("0.2「局外藏品」");
    expect(expanded).toContain("0.3「局内能力」");
  });

  it("从完整公式反查所有乘区及其 reason 和 source", () => {
    const context = createFormulaContext();
    const explanations = explainDamageFormula("DPS", context);
    const outerAttack = explanations.find((entry) => entry.zoneId === "OUTER_ATK");

    expect(explanations.map((entry) => entry.zoneId)).toEqual(expect.arrayContaining([
      "FLAT_ATK",
      "OUTER_ATK",
      "INNER_ATK",
      "DEF_PERCENT",
      "RES_PERCENT",
      "DAMAGE_AMPLIFICATION",
      "ATTACK_SPEED",
      "ADDITIONAL_DAMAGE_PACKET",
    ]));
    expect(outerAttack?.contributions[0]?.reason).toContain("静态攻击规则");
    expect(outerAttack?.contributions[0]?.source?.evidencePath).toContain("buffs[0]");
  });

  it("克隆后可独立添加贡献，并拒绝重复贡献 ID", () => {
    const original = createFormulaContext();
    const cloned = original.clone().add("OUTER_ATK", 0.1, "克隆上下文新增", { id: "clone-only" });

    expect(original.getContributions("OUTER_ATK")).toHaveLength(1);
    expect(cloned.getContributions("OUTER_ATK")).toHaveLength(2);
    expect(() => cloned.add("OUTER_ATK", 0.1, "重复 ID", { id: "clone-only" })).toThrow("已存在贡献项 ID");
  });

  it("缺少公式输入时给出带 tooltip 的明确错误", () => {
    expect(() => evaluateDamageFormula("FINAL_ATK", new FormulaContext(), {})).toThrow(
      "公式缺少输入 ATK0（未应用实验乘区前的基础攻击力）",
    );
  });

  it("计算费用、阻挡、技力和闪避，并按事件筛选技力回复", () => {
    const context = new FormulaContext()
      .add("DEPLOY_COST_ADD", -2, "费用直减", { id: "cost-add" })
      .add("DEPLOY_COST_MULTIPLIER", -0.5, "费用减半", { id: "cost-mul" })
      .add("INITIAL_DP_ADD", 10, "初始费用", { id: "initial-dp" })
      .add("BLOCK_COUNT_ADD", -2, "阻挡降低", { id: "block-add" })
      .add("MIN_BLOCK_COUNT", 1, "最低阻挡", { id: "block-min" })
      .add("INITIAL_SP_ADD", 12, "初始技力", { id: "initial-sp" })
      .add("SP_COST_MULTIPLIER", 0.65, "技力消耗降低", { id: "sp-cost" })
      .add("SP_RECOVERY_PER_SECOND_ADD", 0.35, "自然回复", { id: "sp-recovery" })
      .add("SP_GAIN_PER_TRIGGER", 2, "攻击回复", {
        id: "sp-on-attack",
        triggerTypes: ["attack"],
      })
      .add("SP_GAIN_PER_TRIGGER", 3, "受击回复", {
        id: "sp-on-damage",
        triggerTypes: ["take-damage"],
      })
      .add("PHYSICAL_EVASION", 0.2, "物理闪避一", { id: "eva-phy-1" })
      .add("PHYSICAL_EVASION", 0.3, "物理闪避二", { id: "eva-phy-2" });

    expect(evaluateFormula("FINAL_DEPLOY_COST", context, { DEPLOY_COST0: 20 })).toBe(9);
    expect(evaluateFormula("FINAL_INITIAL_DP", context, { INITIAL_DP0: 10 })).toBe(20);
    expect(evaluateFormula("FINAL_BLOCK_COUNT", context, { BLOCK_COUNT0: 2 })).toBe(1);
    expect(evaluateFormula("FINAL_INITIAL_SP", context, { INITIAL_SP0: 5 })).toBe(17);
    expect(evaluateFormula("FINAL_SP_COST", context, { SP_COST0: 40 })).toBe(26);
    expect(evaluateFormula("FINAL_SP_RECOVERY_PER_SECOND", context, { SP_RECOVERY_PER_SECOND0: 1 })).toBe(1.35);
    expect(evaluateFormula("SP_GAIN_PER_TRIGGER", context, {}, { triggerType: "attack" })).toBe(2);
    expect(evaluateFormula("SP_GAIN_PER_TRIGGER", context, {}, { triggerType: "take-damage" })).toBe(3);
    expect(evaluateFormula("PHYSICAL_EVASION_RATE", context, {})).toBeCloseTo(0.44);
  });

  it("计算敌人属性、三种减伤方向和元素损伤", () => {
    const context = new FormulaContext()
      .add("OUTER_ENEMY_ATK", 0.2, "局外敌攻", { id: "enemy-atk-outer" })
      .add("INNER_ENEMY_ATK", 1.5, "局内敌攻", { id: "enemy-atk-inner" })
      .add("OUTER_ENEMY_DEF", 0.2, "局外敌防", { id: "enemy-def-outer" })
      .add("INNER_ENEMY_DEF", 1.5, "局内敌防", { id: "enemy-def-inner" })
      .add("DEF_PERCENT", 0.2, "减防比例", { id: "def-percent-new" })
      .add("DEF_FLAT", 100, "减防点数", { id: "def-flat-new" })
      .add("ENEMY_RES_ADD", 10, "敌人法抗", { id: "enemy-res-add" })
      .add("RES_PERCENT", 0.2, "减抗比例", { id: "res-percent-new" })
      .add("RES_FLAT", 5, "减抗点数", { id: "res-flat-new" })
      .add("OUTER_ENEMY_DAMAGE_RESISTANCE", 0.2, "局外减伤一", { id: "outer-dr-1" })
      .add("OUTER_ENEMY_DAMAGE_RESISTANCE", 0.3, "局外减伤二", { id: "outer-dr-2" })
      .add("INNER_ENEMY_DAMAGE_RESISTANCE", 0.4, "局内减伤一", { id: "inner-dr-1" })
      .add("INNER_ENEMY_DAMAGE_RESISTANCE", 0.5, "局内减伤二", { id: "inner-dr-2" })
      .add("CHAR_DAMAGE_RESISTANCE", 0.2, "我方减伤一", { id: "char-dr-1" })
      .add("CHAR_DAMAGE_RESISTANCE", 0.3, "我方减伤二", { id: "char-dr-2" })
      .add("CHAR_DAMAGE_RESISTANCE", 0.5, "仅元素类型减伤", {
        id: "char-dr-elemental",
        damageTypes: ["elemental"],
      })
      .add("ENEMY_OUTGOING_DAMAGE_REDUCTION", 0.3, "敌人输出降低", { id: "enemy-output-down" })
      .add("ELEMENTAL_IMPAIRMENT_AMPLIFICATION", 0.75, "元素损伤放大", { id: "ep-amp" })
      .add("CHAR_EP_DAMAGE_RESISTANCE", 0.5, "元素损伤减免", { id: "char-ep-res" });

    expect(evaluateFormula("FINAL_ENEMY_ATK", context, { ENEMY_ATK0: 1000 })).toBe(1800);
    expect(evaluateFormula("EFFECTIVE_DEF", context, { DEF0: 1000 })).toBe(1340);
    expect(evaluateFormula("EFFECTIVE_RES", context, { RES0: 50 })).toBe(43);
    // 局外取 30%，局内并集为 70%，两区剩余倍率为 0.7 × 0.3。
    expect(evaluateFormula("FINAL_ENEMY_DAMAGE_RESISTANCE", context, {})).toBeCloseTo(0.79);
    expect(evaluateFormula(
      "CHAR_TAKEN_DAMAGE",
      context,
      { RAW_INCOMING_DAMAGE: 1000 },
      { damageType: "physical" },
    )).toBeCloseTo(560);
    expect(evaluateFormula("ENEMY_OUTGOING_DAMAGE", context, { RAW_INCOMING_DAMAGE: 1000 })).toBe(700);
    expect(evaluateFormula("ELEMENTAL_IMPAIRMENT_TO_ENEMY", context, {
      RAW_ELEMENTAL_IMPAIRMENT: 100,
      ENEMY_EP_RESISTANCE0: 0.2,
    })).toBeCloseTo(140);
    expect(evaluateFormula("ELEMENTAL_IMPAIRMENT_TO_CHAR", context, {
      RAW_ELEMENTAL_IMPAIRMENT: 100,
    })).toBe(50);
  });
});
