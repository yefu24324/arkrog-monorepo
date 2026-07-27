import type {
  FormulaDamageType,
  FormulaId,
  FormulaExpression,
  FormulaInputId,
  OperationExpression,
} from "./ast.js";
import { getFormula } from "./formula-book.js";
import { FormulaContext } from "./context.js";

/** 公式求值所需的外部基础属性与伤害参数。 */
export type FormulaInputs = Partial<Record<FormulaInputId, number>>;

/** 公式求值时用于筛选事件型贡献的运行时范围。 */
export interface FormulaEvaluationScope {
  /** 通用承伤公式使用的伤害类型；AST 显式限定时优先使用节点限定。 */
  damageType?: FormulaDamageType;
  /** 攻击、受击、出生、击倒等稳定触发事件。 */
  triggerType?: string;
}

/** 对多参数运算执行统一数值语义。 */
function evaluateOperation(node: OperationExpression, operands: number[]): number {
  if (operands.length === 0) throw new Error(`运算“${node.tooltip}”没有操作数`);
  switch (node.operator) {
    case "add":
      return operands.reduce((result, value) => result + value, 0);
    case "subtract":
      return operands.slice(1).reduce((result, value) => result - value, operands[0] ?? 0);
    case "multiply":
      return operands.reduce((result, value) => result * value, 1);
    case "divide":
      return operands.slice(1).reduce((result, value) => result / value, operands[0] ?? 0);
    case "max":
      return Math.max(...operands);
    case "min":
      return Math.min(...operands);
  }
}

/** 递归求值公式节点，并检测意外的循环公式引用。 */
function evaluateExpression(
  expression: FormulaExpression,
  context: FormulaContext,
  inputs: FormulaInputs,
  formulaStack: readonly FormulaId[],
  scope: FormulaEvaluationScope,
): number {
  switch (expression.kind) {
    case "constant":
      return expression.value;
    case "input": {
      const value = inputs[expression.inputId];
      if (value === undefined) throw new Error(`公式缺少输入 ${expression.inputId}（${expression.tooltip}）`);
      return value;
    }
    case "zone":
      return context.evaluateZone(expression.zoneId, {
        damageType: expression.damageType ?? scope.damageType,
        triggerType: scope.triggerType,
      }).value;
    case "formula":
      return evaluateFormulaInternal(expression.formulaId, context, inputs, formulaStack, scope);
    case "operation":
      return evaluateOperation(
        expression,
        expression.operands.map((operand) => evaluateExpression(operand, context, inputs, formulaStack, scope)),
      );
  }
}

/** 求值一条公式，并把当前公式加入循环引用检查栈。 */
function evaluateFormulaInternal(
  formulaId: FormulaId,
  context: FormulaContext,
  inputs: FormulaInputs,
  formulaStack: readonly FormulaId[],
  scope: FormulaEvaluationScope,
): number {
  if (formulaStack.includes(formulaId)) {
    throw new Error(`公式存在循环引用：${[...formulaStack, formulaId].join(" -> ")}`);
  }
  const definition = getFormula(formulaId);
  return evaluateExpression(definition.expression, context, inputs, [...formulaStack, formulaId], scope);
}

/** 使用指定上下文和输入求值完整公式。 */
export function evaluateFormula(
  formulaId: FormulaId,
  context: FormulaContext,
  inputs: FormulaInputs,
  scope: FormulaEvaluationScope = {},
): number {
  return evaluateFormulaInternal(formulaId, context, inputs, [], scope);
}

/** @deprecated 公式簿已不限于伤害，请使用 evaluateFormula。 */
export const evaluateDamageFormula = evaluateFormula;
