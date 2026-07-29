import { describe, expect, it } from "vitest";

import {
  collectFormulaZones,
  explainFormula,
  FormulaBook,
  FormulaItemExpression,
  FormulaNodeExpression,
  FormulaZoneExpression,
  FormulaZoneId,
  item,
  printNumericFormula,
  printSymbolicFormula,
  renderFormula,
} from "../src/lib/formula/index.js";

/** 创建已经写入六个攻击力乘区的独立公式书。 */
function createAttackBook(): FormulaBook {
  return new FormulaBook()
    .add_item(FormulaZoneId.operator_base_atk, item("测试基础攻击力", 1_000))
    .add_item(FormulaZoneId.operator_out_atk_add, item("藏品局外攻击力加成", 100))
    .add_item(FormulaZoneId.operator_out_atk_mul, item("藏品局外攻击力倍率", 0.2))
    .add_item(FormulaZoneId.operator_in_atk_add, item("局内攻击力加成", 50))
    .add_item(FormulaZoneId.operator_in_atk_mul, item("局内攻击力倍率", 0.3))
    .add_item(FormulaZoneId.operator_final_atk_add, item("最终攻击力加成", 20));
}

describe("当前 FormulaBook 运行时", () => {
  it("从统一索引区分六个可写 zone 和三个派生 formula", () => {
    const expressions = Object.values(new FormulaBook().zones);

    expect(expressions).toHaveLength(9);
    expect(expressions.filter((entry) => entry instanceof FormulaZoneExpression)).toHaveLength(6);
    expect(expressions.filter((entry) => entry instanceof FormulaNodeExpression)).toHaveLength(3);
  });

  it("藏品可以直接向 book 中的 zone 追加 item", () => {
    const book = new FormulaBook();
    const zone = book.get_zone(FormulaZoneId.operator_base_atk);
    const contribution = item("基础攻击力", 100);

    zone.add_item(contribution);
    expect(zone.items).toEqual([contribution]);
    expect(zone.calculate()).toBe(100);
  });

  it("FormulaBook 的 add_item 只接受真实 zone", () => {
    const book = new FormulaBook();

    expect(() => book.add_item(
      FormulaZoneId.operator_out_atk as FormulaZoneId.operator_base_atk,
      item("非法写入", 1),
    )).toThrow("不是允许写入 item 的 zone");
  });

  it("静态基数和运行时 item 共同保存在倍率 zone", () => {
    const book = createAttackBook();
    const zone = book.get_zone(FormulaZoneId.operator_out_atk_mul);

    expect(zone.items).toEqual([
      new FormulaItemExpression("基数", 1),
      new FormulaItemExpression("藏品局外攻击力倍率", 0.2),
    ]);
    expect(zone.calculate()).toBeCloseTo(1.2);
  });

  it("按当前 AST 直接计算三个攻击力阶段", () => {
    const book = createAttackBook();

    expect(book.calculate(FormulaZoneId.operator_out_atk)).toBeCloseTo(1_320);
    expect(book.calculate(FormulaZoneId.operator_in_atk)).toBeCloseTo(1_781);
    expect(book.calculate(FormulaZoneId.operator_final_atk)).toBeCloseTo(1_801);
    expect(book.get_zone(FormulaZoneId.operator_final_atk).calculate()).toBeCloseTo(1_801);
  });

  it("不同 FormulaBook 实例之间不会共享运行时 item", () => {
    const first = new FormulaBook()
      .add_item(FormulaZoneId.operator_base_atk, item("第一份基础攻击力", 100));
    const second = new FormulaBook()
      .add_item(FormulaZoneId.operator_base_atk, item("第二份基础攻击力", 200));

    expect(first.calculate(FormulaZoneId.operator_final_atk)).toBe(100);
    expect(second.calculate(FormulaZoneId.operator_final_atk)).toBe(200);
    expect(first.get_zone(FormulaZoneId.operator_base_atk).items).toHaveLength(1);
    expect(second.get_zone(FormulaZoneId.operator_base_atk).items).toHaveLength(1);
  });

  it("AST 节点克隆后不共享可变 item 数组", () => {
    const original = createAttackBook().get_zone(FormulaZoneId.operator_out_atk_mul);
    const cloned = original.clone();

    cloned.add_item(item("克隆额外倍率", 0.1));
    expect(original.items).toHaveLength(2);
    expect(cloned.items).toHaveLength(3);
    expect(original.calculate()).toBeCloseTo(1.2);
    expect(cloned.calculate()).toBeCloseTo(1.3);
  });

  it("结构公式递归展开派生公式并保留真实 zone ID", () => {
    const symbolic = printSymbolicFormula(FormulaZoneId.operator_final_atk);

    expect(symbolic).toContain("operator_final_atk =");
    expect(symbolic).toContain("operator_base_atk");
    expect(symbolic).toContain("operator_out_atk_mul");
    expect(symbolic).toContain("operator_final_atk_add");
    expect(symbolic).not.toMatch(/[0-9]/u);
    expect(renderFormula(FormulaZoneId.operator_final_atk)).toBe(symbolic);
  });

  it("数字公式直接展开当前 book 中的全部 item", () => {
    const book = createAttackBook();
    const numeric = printNumericFormula(FormulaZoneId.operator_final_atk, book);

    expect(numeric).toContain("1000");
    expect(numeric).toContain("0.2");
    expect(numeric).toContain("= 1801");
    expect(numeric).not.toMatch(/[\u3400-\u9fff]/u);
    expect(renderFormula(FormulaZoneId.operator_final_atk, { mode: "numeric", book })).toBe(numeric);
  });

  it("递归收集 operator_final_atk 实际使用的六个 zone", () => {
    const book = createAttackBook();
    const zoneIds = collectFormulaZones(FormulaZoneId.operator_final_atk, book)
      .map((entry) => entry.zoneId);
    const explanations = explainFormula(FormulaZoneId.operator_final_atk, book);

    expect(zoneIds).toEqual([
      FormulaZoneId.operator_base_atk,
      FormulaZoneId.operator_out_atk_add,
      FormulaZoneId.operator_out_atk_mul,
      FormulaZoneId.operator_in_atk_add,
      FormulaZoneId.operator_in_atk_mul,
      FormulaZoneId.operator_final_atk_add,
    ]);
    expect(explanations.map((entry) => entry.zoneId)).toEqual(zoneIds);
    expect(explanations.find((entry) => entry.zoneId === FormulaZoneId.operator_in_atk_mul)?.value)
      .toBeCloseTo(1.3);
  });
});
