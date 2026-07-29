import { formula, FormulaItemExpression, FormulaNodeExpression, FormulaZoneExpression, item, multiply, plus, zone } from "./ast.js";

/** FormulaBook 中全部命名乘区与派生公式的统一枚举。 */
export enum FormulaZoneId {
  /// ----------我方属性加成--------------
  /** 干员基础攻击力 */
  operator_base_atk = "operator_base_atk",
  /** 干员局外攻击力加成 */
  operator_out_atk_add = "operator_out_atk_add",
  /** 干员局外攻击力倍率 */
  operator_out_atk_mul = "operator_out_atk_mul",
  /** 干员局外攻击力 */
  operator_out_atk = "operator_out_atk",
  /** 干员局内攻击力加成 */
  operator_in_atk_add = "operator_in_atk_add",
  /** 干员局内攻击力倍率 */
  operator_in_atk_mul = "operator_in_atk_mul",
  /** 干员局内攻击力 */
  operator_in_atk = "operator_in_atk",
  /** 干员最终攻击力加成 */
  operator_final_atk_add = "operator_final_atk_add",
  /** 干员最终攻击力 */
  operator_final_atk = "operator_final_atk",
}

/** 由 `zone(...)` 定义、允许业务写入 item 的乘区 ID。 */
export type FormulaWritableZoneId =
  | FormulaZoneId.operator_base_atk
  | FormulaZoneId.operator_out_atk_add
  | FormulaZoneId.operator_out_atk_mul
  | FormulaZoneId.operator_in_atk_add
  | FormulaZoneId.operator_in_atk_mul
  | FormulaZoneId.operator_final_atk_add;

/** 由 `formula(...)` 定义、只负责派生计算的公式 ID。 */
export type FormulaId = FormulaZoneId.operator_out_atk | FormulaZoneId.operator_in_atk | FormulaZoneId.operator_final_atk;

/**
 * 一次公式计算使用的完整公式书。
 * 每个实例同时持有静态公式结构和本次计算写入 zone 的动态 item。
 */
export class FormulaBook {
  /** 所有 zone/formula 共用索引，保持源码定义顺序。 */
  readonly zones: Record<FormulaZoneId, FormulaNodeExpression | FormulaZoneExpression>;

  constructor() {
    const operator_base_atk = zone(FormulaZoneId.operator_base_atk, plus);
    const operator_out_atk_add = zone(FormulaZoneId.operator_out_atk_add, plus);
    const operator_out_atk_mul = zone(FormulaZoneId.operator_out_atk_mul, plus, item("基数", 1));
    const operator_out_atk = formula(FormulaZoneId.operator_out_atk, multiply(plus(operator_base_atk, operator_out_atk_add), operator_out_atk_mul));
    const operator_in_atk_add = zone(FormulaZoneId.operator_in_atk_add, plus);
    const operator_in_atk_mul = zone(FormulaZoneId.operator_in_atk_mul, plus, item("基数", 1));
    const operator_in_atk = formula(FormulaZoneId.operator_in_atk, multiply(plus(operator_out_atk, operator_in_atk_add), operator_in_atk_mul));
    const operator_final_atk_add = zone(FormulaZoneId.operator_final_atk_add, plus);
    const operator_final_atk = formula(FormulaZoneId.operator_final_atk, plus(operator_in_atk, operator_final_atk_add));

    this.zones = {
      operator_base_atk,
      operator_out_atk_add,
      operator_out_atk_mul,
      operator_out_atk,
      operator_in_atk_add,
      operator_in_atk_mul,
      operator_in_atk,
      operator_final_atk_add,
      operator_final_atk,
    };
  }

  /** 取得允许直接追加 item 的真实 zone。 */
  get_zone(id: FormulaWritableZoneId): FormulaZoneExpression;

  /** 取得只负责派生计算的命名公式。 */
  get_zone(id: FormulaId): FormulaNodeExpression;

  /** 通过统一枚举取得任意命名节点。 */
  get_zone(id: FormulaZoneId): FormulaNodeExpression | FormulaZoneExpression;

  get_zone(id: FormulaZoneId): FormulaNodeExpression | FormulaZoneExpression {
    return this.zones[id];
  }

  /** 向当前公式书中的真实 zone 追加一个 item。 */
  add_item(zoneId: FormulaWritableZoneId, entry: FormulaItemExpression): this {
    const expression = this.zones[zoneId];
    if (!(expression instanceof FormulaZoneExpression)) {
      throw new Error(`“${zoneId}”不是允许写入 item 的 zone`);
    }
    expression.add_item(entry);
    return this;
  }

  /** 计算当前公式书中的任意真实 zone 或派生公式。 */
  calculate(id: FormulaZoneId): number {
    return this.get_zone(id).calculate();
  }
}
