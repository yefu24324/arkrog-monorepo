import type { DamageZoneId } from "../domain/damage-zones.js";
import type {
  DamageFormulaId,
  FormulaDamageType,
  FormulaExpression,
  OperationExpression,
} from "./ast.js";
import { FormulaContext, type EvaluatedFormulaZone } from "./context.js";
import type { FormulaInputs } from "./evaluator.js";
import { getDamageFormula } from "./formula-book.js";
import { getFormulaZone } from "./zones.js";

/** 公式渲染模式。 */
export type FormulaRenderMode = "symbolic" | "expanded";

/** 公式渲染选项。 */
export interface FormulaRenderOptions {
  /** symbolic 输出通用符号，expanded 展开当前输入和加成原因。 */
  mode?: FormulaRenderMode;
  /** 展开模式使用的加成上下文。 */
  context?: FormulaContext;
  /** 展开模式可替换到公式中的基础输入值。 */
  inputs?: FormulaInputs;
  /** 默认递归展开子公式，关闭后只展示子公式短符号。 */
  expandFormulaReferences?: boolean;
}

/** 一条公式使用的乘区及其当前来源说明。 */
export interface FormulaZoneExplanation extends EvaluatedFormulaZone {
  /** 当前公式引用该乘区时使用的伤害类型。 */
  damageType?: FormulaDamageType;
  /** 人类可读乘区名称。 */
  name: string;
  /** 乘区本身的用途说明。 */
  tooltip: string;
}

/** 把浮点数转换为稳定且紧凑的公式文本。 */
function formatNumber(value: number): string {
  return Number.isInteger(value) ? value.toString() : Number(value.toPrecision(12)).toString();
}

/** 为按伤害类型筛选的乘区添加可读下标。 */
function scopedSymbol(symbol: string, damageType?: FormulaDamageType): string {
  const suffix = damageType
    ? { physical: "phy", magical: "mag", pure: "pure", elemental: "ep" }[damageType]
    : "";
  return suffix ? `${symbol}[${suffix}]` : symbol;
}

/** 输出某个乘区的通用符号聚合式。 */
function renderSymbolicZone(zoneId: DamageZoneId, damageType?: FormulaDamageType): string {
  const zone = getFormulaZone(zoneId);
  const symbol = scopedSymbol(zone.symbol, damageType);
  if (zone.aggregation.kind === "product-one-plus") return `Πᵢ(1 + ${symbol}ᵢ)`;
  const { base, termScale } = zone.aggregation;
  if (base === 0 && termScale === 1) return `Σᵢ${symbol}ᵢ`;
  if (base === 1 && termScale === 1) return `(1 + Σᵢ${symbol}ᵢ)`;
  if (base === 1 && termScale === -1) return `(1 - Σᵢ${symbol}ᵢ)`;
  if (base === 1 && termScale === 0.01) return `(1 + Σᵢ${symbol}ᵢ / 100)`;
  return `(${formatNumber(base)} + ${formatNumber(termScale)} × Σᵢ${symbol}ᵢ)`;
}

/** 输出带 tooltip 的单个数值贡献项。 */
function renderContribution(value: number, tooltip: string): string {
  return `${formatNumber(Math.abs(value))}「${tooltip}」`;
}

/** 输出当前上下文中某个乘区的实际展开式。 */
function renderExpandedZone(
  zoneId: DamageZoneId,
  damageType: FormulaDamageType | undefined,
  context: FormulaContext,
): string {
  const zone = getFormulaZone(zoneId);
  const entries = context.getContributions(zoneId, { damageType });
  if (zone.aggregation.kind === "product-one-plus") {
    if (entries.length === 0) return "1";
    return `(${entries.map((entry) => `(1 + ${renderContribution(entry.value, entry.tooltip)})`).join(" × ")})`;
  }

  const terms: string[] = [];
  if (zone.aggregation.base !== 0 || entries.length === 0) terms.push(formatNumber(zone.aggregation.base));
  for (const entry of entries) {
    const value = zone.aggregation.termScale * entry.value;
    const rendered = renderContribution(value, entry.tooltip);
    if (terms.length === 0) terms.push(value < 0 ? `-${rendered}` : rendered);
    else terms.push(`${value < 0 ? "-" : "+"} ${rendered}`);
  }
  return terms.length > 1 ? `(${terms.join(" ")})` : terms[0] ?? "0";
}

/** 按运算符输出已经递归渲染完成的子表达式。 */
function renderOperation(node: OperationExpression, operands: string[]): string {
  if (node.operator === "max" || node.operator === "min") return `${node.operator}(${operands.join(", ")})`;
  const operator = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  }[node.operator];
  return `(${operands.join(` ${operator} `)})`;
}

/** 递归输出一棵公式 AST。 */
function renderExpression(
  expression: FormulaExpression,
  options: Required<Pick<FormulaRenderOptions, "mode" | "expandFormulaReferences">> & FormulaRenderOptions,
  formulaStack: readonly DamageFormulaId[],
): string {
  switch (expression.kind) {
    case "constant":
      return formatNumber(expression.value);
    case "input": {
      const value = options.inputs?.[expression.inputId];
      return options.mode === "expanded" && value !== undefined
        ? `${formatNumber(value)}「${expression.tooltip}」`
        : expression.symbol;
    }
    case "zone":
      return options.mode === "expanded" && options.context
        ? renderExpandedZone(expression.zoneId, expression.damageType, options.context)
        : renderSymbolicZone(expression.zoneId, expression.damageType);
    case "formula": {
      const referenced = getDamageFormula(expression.formulaId);
      if (!options.expandFormulaReferences) return referenced.symbol;
      if (formulaStack.includes(expression.formulaId)) {
        throw new Error(`公式存在循环引用：${[...formulaStack, expression.formulaId].join(" -> ")}`);
      }
      return renderExpression(referenced.expression, options, [...formulaStack, expression.formulaId]);
    }
    case "operation":
      return renderOperation(
        expression,
        expression.operands.map((operand) => renderExpression(operand, options, formulaStack)),
      );
  }
}

/** 输出带左值名称的完整公式预览。 */
export function renderDamageFormula(
  formulaId: DamageFormulaId,
  options: FormulaRenderOptions = {},
): string {
  const definition = getDamageFormula(formulaId);
  const normalizedOptions = {
    ...options,
    mode: options.mode ?? "symbolic",
    expandFormulaReferences: options.expandFormulaReferences ?? true,
  };
  return `${definition.symbol} = ${renderExpression(definition.expression, normalizedOptions, [formulaId])}`;
}

/** 递归收集公式实际引用到的乘区，并保留伤害类型筛选。 */
function collectZoneReferences(
  expression: FormulaExpression,
  target: Map<string, { zoneId: DamageZoneId; damageType?: FormulaDamageType }>,
  formulaStack: readonly DamageFormulaId[],
): void {
  if (expression.kind === "zone") {
    target.set(`${expression.zoneId}:${expression.damageType ?? "all"}`, {
      zoneId: expression.zoneId,
      damageType: expression.damageType,
    });
    return;
  }
  if (expression.kind === "formula") {
    if (formulaStack.includes(expression.formulaId)) return;
    collectZoneReferences(
      getDamageFormula(expression.formulaId).expression,
      target,
      [...formulaStack, expression.formulaId],
    );
    return;
  }
  if (expression.kind === "operation") {
    expression.operands.forEach((operand) => collectZoneReferences(operand, target, formulaStack));
  }
}

/** 返回一条公式使用的所有乘区、当前数值、tooltip、reason 和证据来源。 */
export function explainDamageFormula(
  formulaId: DamageFormulaId,
  context: FormulaContext,
): readonly FormulaZoneExplanation[] {
  const references = new Map<string, { zoneId: DamageZoneId; damageType?: FormulaDamageType }>();
  collectZoneReferences(getDamageFormula(formulaId).expression, references, [formulaId]);
  return [...references.values()].map(({ zoneId, damageType }) => {
    const definition = getFormulaZone(zoneId);
    const evaluated = context.evaluateZone(zoneId, { damageType });
    return {
      ...evaluated,
      damageType,
      name: definition.name,
      tooltip: definition.tooltip,
    };
  });
}
