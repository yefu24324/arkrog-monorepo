import { describe, expect, it } from "vitest";

import {
  collectFormulaZones,
  explainFormula,
  FormulaBook,
  FormulaItemExpression,
  FormulaNodeExpression,
  FormulaZoneExpression,
  FormulaZoneId,
  FORMULA_ZONE_NAMES,
  formulaZoneName,
  item,
  printNumericFormula,
  printSymbolicFormula,
  renderFormula,
} from "../src/lib/formula/index.js";

/** 创建已经写入六个攻击力乘区的独立公式书。 */
function createAttackBook(): FormulaBook {
  return new FormulaBook()
    .add_item(FormulaZoneId.char_base_atk, item("测试基础攻击力", 1_000))
    .add_item(FormulaZoneId.char_out_atk_add, item("藏品局外攻击力加成", 100))
    .add_item(FormulaZoneId.char_out_atk_mul, item("藏品局外攻击力倍率", 0.2))
    .add_item(FormulaZoneId.char_in_atk_add, item("局内攻击力加成", 50))
    .add_item(FormulaZoneId.char_in_atk_mul, item("局内攻击力倍率", 0.3))
    .add_item(FormulaZoneId.char_final_atk_add, item("最终攻击力加成", 20));
}

describe("当前 FormulaBook 运行时", () => {
  it("为每个 FormulaZoneId 提供来自枚举注释的中文名", () => {
    expect(Object.keys(FORMULA_ZONE_NAMES)).toEqual(Object.values(FormulaZoneId));
    expect(formulaZoneName(FormulaZoneId.char_in_atk_mul)).toBe("干员局内攻击力倍率");
    expect(formulaZoneName(FormulaZoneId.enemy_ep_damage_mul)).toBe("敌人受到元素损伤独立增幅");
  });

  it("从统一索引区分四十三个 zone 和十七个派生 formula", () => {
    const expressions = Object.values(new FormulaBook().zones);

    // 三种常规伤害各有易伤、脆弱和独立增幅；元素相关仅保留 FormulaBook 当前真实定义。
    expect(expressions).toHaveLength(60);
    expect(expressions.filter((entry) => entry instanceof FormulaZoneExpression)).toHaveLength(43);
    expect(expressions.filter((entry) => entry instanceof FormulaNodeExpression)).toHaveLength(17);
  });

  it("藏品可以直接向 book 中的 zone 追加 item", () => {
    const book = new FormulaBook();
    const zone = book.get_zone(FormulaZoneId.char_base_atk);
    const contribution = item("基础攻击力", 100);

    zone.add_item(contribution);
    expect(zone.items).toEqual([contribution]);
    expect(zone.calculate()).toBe(100);
  });

  it("FormulaBook 的 add_item 只接受真实 zone", () => {
    const book = new FormulaBook();

    expect(() => book.add_item(
      FormulaZoneId.char_out_atk as FormulaZoneId.char_base_atk,
      item("非法写入", 1),
    )).toThrow("不是允许写入 item 的 zone");
  });

  it("静态基数和运行时 item 共同保存在倍率 zone", () => {
    const book = createAttackBook();
    const zone = book.get_zone(FormulaZoneId.char_out_atk_mul);

    expect(zone.items).toEqual([
      new FormulaItemExpression("基数", 1),
      new FormulaItemExpression("藏品局外攻击力倍率", 0.2),
    ]);
    expect(zone.calculate()).toBeCloseTo(1.2);
  });

  it("按当前 AST 直接计算三个攻击力阶段", () => {
    const book = createAttackBook();

    expect(book.calculate(FormulaZoneId.char_out_atk)).toBeCloseTo(1_320);
    expect(book.calculate(FormulaZoneId.char_in_atk)).toBeCloseTo(1_781);
    expect(book.calculate(FormulaZoneId.char_final_atk)).toBeCloseTo(1_801);
    expect(book.get_zone(FormulaZoneId.char_final_atk).calculate()).toBeCloseTo(1_801);
  });

  it("按当前 AST 计算我方与敌方最大生命阶段", () => {
    const book = new FormulaBook()
      .add_item(FormulaZoneId.char_base_max_hp, item("干员基础最大生命", 1_000))
      .add_item(FormulaZoneId.char_out_max_hp_add, item("干员局外生命点数", 100))
      .add_item(FormulaZoneId.char_out_max_hp_mul, item("干员局外生命倍率", 0.2))
      .add_item(FormulaZoneId.char_in_max_hp_add, item("干员局内生命点数", 50))
      .add_item(FormulaZoneId.char_in_max_hp_mul, item("干员局内生命倍率", 0.3))
      .add_item(FormulaZoneId.char_final_max_hp_add, item("干员最终生命点数", 20))
      .add_item(FormulaZoneId.enemy_base_max_hp, item("敌方基础最大生命", 10_000))
      .add_item(FormulaZoneId.enemy_direct_max_hp_mul, item("敌方直接生命增量", -0.2))
      .add_item(FormulaZoneId.enemy_final_max_hp_mul, item("敌方最终生命倍率", 1.5));

    // 干员：(1000 + 100) * 1.2 = 1320；(1320 + 50) * 1.3 + 20 = 1801。
    expect(book.calculate(FormulaZoneId.char_final_max_hp)).toBeCloseTo(1_801);
    // 敌方：10000 * (1 - 0.2) * 1.5 = 12000。
    expect(book.calculate(FormulaZoneId.enemy_final_max_hp)).toBeCloseTo(12_000);
  });

  it("按当前 AST 计算干员防御力三个阶段", () => {
    const book = new FormulaBook()
      .add_item(FormulaZoneId.char_base_def, item("干员基础防御力", 500))
      .add_item(FormulaZoneId.char_out_def_add, item("干员局外防御点数", 100))
      .add_item(FormulaZoneId.char_out_def_mul, item("干员局外防御倍率", 0.2))
      .add_item(FormulaZoneId.char_in_def_add, item("干员局内防御点数", 50))
      .add_item(FormulaZoneId.char_in_def_mul, item("干员局内防御倍率", 0.3))
      .add_item(FormulaZoneId.char_final_def_add, item("干员最终防御点数", 20));

    // (500 + 100) * 1.2 = 720；(720 + 50) * 1.3 + 20 = 1021。
    expect(book.calculate(FormulaZoneId.char_out_def)).toBeCloseTo(720);
    expect(book.calculate(FormulaZoneId.char_in_def)).toBeCloseTo(1_001);
    expect(book.calculate(FormulaZoneId.char_final_def)).toBeCloseTo(1_021);
  });

  it("三种敌方承伤放大都按易伤加算、脆弱取最高和独立增幅相乘", () => {
    const cases = [
      {
        taken: FormulaZoneId.enemy_phy_taken_add,
        fragile: FormulaZoneId.enemy_phy_fragile,
        damage: FormulaZoneId.enemy_phy_damage_mul,
        final: FormulaZoneId.enemy_final_phy_damage_scale,
      },
      {
        taken: FormulaZoneId.enemy_mag_taken_add,
        fragile: FormulaZoneId.enemy_mag_fragile,
        damage: FormulaZoneId.enemy_mag_damage_mul,
        final: FormulaZoneId.enemy_final_mag_damage_scale,
      },
      {
        taken: FormulaZoneId.enemy_pure_taken_add,
        fragile: FormulaZoneId.enemy_pure_fragile,
        damage: FormulaZoneId.enemy_pure_damage_mul,
        final: FormulaZoneId.enemy_final_pure_damage_scale,
      },
    ] as const;

    for (const zoneIds of cases) {
      const book = new FormulaBook()
        .add_item(zoneIds.taken, item("第一份易伤", 0.2))
        .add_item(zoneIds.taken, item("第二份易伤", 0.1))
        .add_item(zoneIds.fragile, item("较低脆弱", 1.1))
        .add_item(zoneIds.fragile, item("较高脆弱", 1.5))
        .add_item(zoneIds.damage, item("第一份独立增幅", 1.2))
        .add_item(zoneIds.damage, item("第二份独立增幅", 1.3));

      // (1 + 0.2 + 0.1) × max(1, 1.1, 1.5) × 1.2 × 1.3 = 3.042。
      expect(book.calculate(zoneIds.final)).toBeCloseTo(3.042);
    }
  });

  it("按基础值与直接加成计算干员最终攻击速度", () => {
    const book = new FormulaBook()
      .add_item(FormulaZoneId.char_base_attack_speed, item("干员基础攻击速度", 100))
      .add_item(FormulaZoneId.char_direct_attack_speed_add, item("藏品攻击速度加成", 40))
      .add_item(FormulaZoneId.char_direct_attack_speed_add, item("另一件藏品攻击速度加成", 30));

    // 当前攻速公式只包含基础攻速与所有直接点数加成。
    expect(
      book.calculate(FormulaZoneId.char_base_attack_speed)
      + book.calculate(FormulaZoneId.char_direct_attack_speed_add),
    ).toBe(170);
  });

  it("不同 FormulaBook 实例之间不会共享运行时 item", () => {
    const first = new FormulaBook()
      .add_item(FormulaZoneId.char_base_atk, item("第一份基础攻击力", 100));
    const second = new FormulaBook()
      .add_item(FormulaZoneId.char_base_atk, item("第二份基础攻击力", 200));

    expect(first.calculate(FormulaZoneId.char_final_atk)).toBe(100);
    expect(second.calculate(FormulaZoneId.char_final_atk)).toBe(200);
    expect(first.get_zone(FormulaZoneId.char_base_atk).items).toHaveLength(1);
    expect(second.get_zone(FormulaZoneId.char_base_atk).items).toHaveLength(1);
  });

  it("AST 节点克隆后不共享可变 item 数组", () => {
    const original = createAttackBook().get_zone(FormulaZoneId.char_out_atk_mul);
    const cloned = original.clone();

    cloned.add_item(item("克隆额外倍率", 0.1));
    expect(original.items).toHaveLength(2);
    expect(cloned.items).toHaveLength(3);
    expect(original.calculate()).toBeCloseTo(1.2);
    expect(cloned.calculate()).toBeCloseTo(1.3);
  });

  it("结构公式递归展开派生公式并保留真实 zone ID", () => {
    const symbolic = printSymbolicFormula(FormulaZoneId.char_final_atk);

    expect(symbolic).toContain("char_final_atk =");
    expect(symbolic).toContain("char_base_atk");
    expect(symbolic).toContain("char_out_atk_mul");
    expect(symbolic).toContain("char_final_atk_add");
    expect(symbolic).not.toMatch(/[0-9]/u);
    expect(renderFormula(FormulaZoneId.char_final_atk)).toBe(symbolic);
  });

  it("数字公式直接展开当前 book 中的全部 item", () => {
    const book = createAttackBook();
    const numeric = printNumericFormula(FormulaZoneId.char_final_atk, book);

    expect(numeric).toContain("1000");
    expect(numeric).toContain("0.2");
    expect(numeric).toContain("= 1801");
    expect(numeric).not.toMatch(/[\u3400-\u9fff]/u);
    expect(renderFormula(FormulaZoneId.char_final_atk, { mode: "numeric", book })).toBe(numeric);
  });

  it("递归收集 char_final_atk 实际使用的六个 zone", () => {
    const book = createAttackBook();
    const zoneIds = collectFormulaZones(FormulaZoneId.char_final_atk, book)
      .map((entry) => entry.zoneId);
    const explanations = explainFormula(FormulaZoneId.char_final_atk, book);

    expect(zoneIds).toEqual([
      FormulaZoneId.char_base_atk,
      FormulaZoneId.char_out_atk_add,
      FormulaZoneId.char_out_atk_mul,
      FormulaZoneId.char_in_atk_add,
      FormulaZoneId.char_in_atk_mul,
      FormulaZoneId.char_final_atk_add,
    ]);
    expect(explanations.map((entry) => entry.zoneId)).toEqual(zoneIds);
    expect(explanations.find((entry) => entry.zoneId === FormulaZoneId.char_in_atk_mul)?.value)
      .toBeCloseTo(1.3);
  });
});
