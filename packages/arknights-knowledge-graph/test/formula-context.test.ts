import { describe, expect, it } from "vitest";

import { DAMAGE_ZONES } from "../src/lib/domain/damage-zones.js";
import {
  FORMULA_DAMAGE_ZONES,
  FormulaContext,
  evaluateDamageFormula,
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
});
