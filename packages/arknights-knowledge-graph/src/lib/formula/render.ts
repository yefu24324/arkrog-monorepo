import {
  FormulaItemExpression,
  FormulaNodeExpression,
  FormulaOperationExpression,
  FormulaZoneExpression,
  type FormulaExpression,
  type FormulaOperator,
} from "./ast.js";
import { FormulaBook, type FormulaId, type FormulaZoneId } from "./formula-book.js";

/** 当前公式书提供结构公式和数字公式两种输出。 */
export type FormulaRenderMode = "symbolic" | "numeric";

/** 公式渲染所需的最小选项。 */
export type FormulaRenderOptions = Readonly<{
  /** symbolic 展示稳定 ID，numeric 展开当前 FormulaBook 的 item。 */
  mode?: FormulaRenderMode;
  /** 要读取的公式书；numeric 模式应传入已经写入 item 的实例。 */
  book?: FormulaBook;
}>;

/** 一条公式实际引用的 zone 及其当前 item。 */
export type FormulaZoneExplanation = Readonly<{
  /** 可写入乘区的稳定 ID。 */
  zoneId: FormulaZoneId;
  /** 当前 zone 的直接计算结果。 */
  value: number;
  /** 包含静态基数和运行时贡献的 item 副本。 */
  items: readonly FormulaItemExpression[];
}>;

/** 把浮点数转换成稳定、紧凑的数字文本。 */
function formatNumber(value: number): string {
  return Number.isInteger(value) ? value.toString() : Number(value.toPrecision(12)).toString();
}

/** 返回普通中缀运算符的显示符号。 */
function operatorSymbol(operator: FormulaOperator): string {
  if (operator === "add" || operator === "sum") return "+";
  if (operator === "subtract") return "−";
  if (operator === "divide") return "÷";
  return "×";
}

/** 输出已经递归转换完成的数学运算。 */
function printOperation(operator: FormulaOperator, operands: readonly string[]): string {
  if (operator === "max" || operator === "min") return `${operator}(${operands.join(", ")})`;
  if (operator === "union") {
    if (operands.length === 0) return "0";
    return `(1 − ${operands.map((operand) => `(1 − ${operand})`).join(" × ")})`;
  }
  if (operator === "product-one-plus") {
    if (operands.length === 0) return "1";
    return operands.map((operand) => `(1 + ${operand})`).join(" × ");
  }
  if (operator === "percent-plus") {
    const [base = "0", ...percentages] = operands;
    if (percentages.length === 0) return base;
    return `(${base} + (${percentages.join(" + ")}) ÷ 100)`;
  }
  const identity = operator === "add" || operator === "sum" || operator === "subtract" ? "0" : "1";
  if (operands.length === 0) return identity;
  if (operands.length === 1) return operands[0] ?? identity;
  return `(${operands.join(` ${operatorSymbol(operator)} `)})`;
}

/** 递归展开命名公式，但把真实 zone 保持为稳定 ID 原子项。 */
function printSymbolicExpression(expression: FormulaExpression): string {
  if (expression instanceof FormulaItemExpression) return expression.tooltip;
  if (expression instanceof FormulaZoneExpression) return expression.zoneId;
  if (expression instanceof FormulaNodeExpression) return printSymbolicExpression(expression.expression);
  if (expression instanceof FormulaOperationExpression) {
    return printOperation(
      expression.operator,
      expression.operands.map((operand) => printSymbolicExpression(operand)),
    );
  }
  throw new Error("遇到未知公式节点");
}

/** 递归展开当前 FormulaBook 中 zone 的全部 item。 */
function printNumericExpression(expression: FormulaExpression): string {
  if (expression instanceof FormulaItemExpression) return formatNumber(expression.value);
  if (expression instanceof FormulaNodeExpression) return printNumericExpression(expression.expression);
  if (expression instanceof FormulaZoneExpression) return printNumericExpression(expression.expression);
  if (expression instanceof FormulaOperationExpression) {
    return printOperation(
      expression.operator,
      expression.operands.map((operand) => printNumericExpression(operand)),
    );
  }
  throw new Error("遇到未知公式节点");
}

/** 打印以稳定 zone ID 为原子项的递归结构公式。 */
export function printSymbolicFormula(
  formulaId: FormulaId,
  book: FormulaBook = new FormulaBook(),
): string {
  const definition = book.get_zone(formulaId);
  return `${definition.id} = ${printSymbolicExpression(definition.expression)}`;
}

/** 打印当前 FormulaBook 中只包含数值和数学运算符的公式。 */
export function printNumericFormula(
  formulaId: FormulaId,
  book: FormulaBook,
): string {
  const definition = book.get_zone(formulaId);
  return `${printNumericExpression(definition.expression)} = ${formatNumber(definition.calculate())}`;
}

/** 根据明确模式打印结构公式或数字公式。 */
export function renderFormula(
  formulaId: FormulaId,
  options: FormulaRenderOptions = {},
): string {
  const book = options.book ?? new FormulaBook();
  return options.mode === "numeric"
    ? printNumericFormula(formulaId, book)
    : printSymbolicFormula(formulaId, book);
}

/** 递归收集一条派生公式实际引用的真实 zone，保持首次出现顺序。 */
export function collectFormulaZones(
  formulaId: FormulaId,
  book: FormulaBook = new FormulaBook(),
): readonly FormulaZoneExpression[] {
  const target = new Map<FormulaZoneId, FormulaZoneExpression>();
  const visited = new Set<FormulaExpression>();

  /** 避免共享 AST 节点重复遍历，同时递归展开派生公式。 */
  function visit(expression: FormulaExpression): void {
    if (visited.has(expression)) return;
    visited.add(expression);
    if (expression instanceof FormulaZoneExpression) {
      target.set(expression.zoneId, expression);
      expression.operands.forEach(visit);
      return;
    }
    if (expression instanceof FormulaNodeExpression) {
      visit(expression.expression);
      return;
    }
    if (expression instanceof FormulaOperationExpression) expression.operands.forEach(visit);
  }

  visit(book.get_zone(formulaId).expression);
  return [...target.values()];
}

/** 返回一条派生公式引用的全部真实 zone 及其当前 item。 */
export function explainFormula(
  formulaId: FormulaId,
  book: FormulaBook,
): readonly FormulaZoneExplanation[] {
  return collectFormulaZones(formulaId, book).map((expression) => ({
    zoneId: expression.zoneId,
    value: expression.calculate(),
    items: expression.items.map((entry) => entry.clone()),
  }));
}
