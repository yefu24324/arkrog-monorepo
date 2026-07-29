/** 战斗计算专用数字公式组件：只显示数值，并过滤不改变父运算结果的节点。 */

'use client';

import { Fragment, useState, type ReactNode } from 'react';
import type {
  FormulaExpression,
  FormulaOperator,
} from '@arkrog/arknights-knowledge-graph/formula';
import { cn } from '../lib/cn';
import { FormulaTooltip } from './formula-tooltip';

/** 数字公式使用的运算符文本。 */
const OPERATOR_LABELS: Readonly<Record<FormulaOperator, string>> = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
  max: 'max',
  min: 'min',
  sum: '+',
  union: 'union',
  product: '×',
  'product-one-plus': '×',
  'percent-plus': '+',
};

/** 将浮点计算值稳定显示到两位小数以内。 */
function formatValue(value: number): string {
  if (!Number.isFinite(value)) return String(value);
  return String(Math.round(value * 100) / 100);
}

/** 数字项和收起的表达式统一使用参考组件中的数值 Chip。 */
function NumericChip({
  value,
  tooltip,
  expandable = false,
  onExpand,
}: {
  value: number;
  tooltip?: string;
  expandable?: boolean;
  onExpand?: () => void;
}) {
  const className = cn(
    'inline-flex min-h-7 items-center rounded-lg border border-amber-500/35 bg-amber-500/10 px-2.5 py-1 font-mono text-sm font-semibold text-amber-700 shadow-xs dark:text-amber-300',
    expandable && 'cursor-pointer transition-colors hover:border-amber-500/60 hover:bg-amber-500/15',
  );
  const trigger = expandable ? (
    <button type="button" onClick={onExpand} className={className}>
      {formatValue(value)}
    </button>
  ) : (
    <span tabIndex={tooltip ? 0 : undefined} className={className}>{formatValue(value)}</span>
  );
  // 只有 item 与 zone 提供 tooltip；公式和普通运算保持纯数字且不附加无意义说明。
  return tooltip ? <FormulaTooltip content={tooltip}>{trigger}</FormulaTooltip> : trigger;
}

/** 从命名公式、乘区或普通运算节点取得其实际运算结构。 */
function groupExpression(node: Exclude<FormulaExpression, { kind: 'item' }>): {
  operator: FormulaOperator | null;
  operands: readonly FormulaExpression[];
} {
  if (node.kind === 'operation' || node.kind === 'zone') {
    return { operator: node.operator, operands: node.operands };
  }
  if (node.expression.kind === 'operation') {
    return {
      operator: node.expression.operator,
      operands: node.expression.operands,
    };
  }
  return { operator: null, operands: [node.expression] };
}

/** 判断子节点是否是当前父运算的单位元，过滤后不会改变最终计算结果。 */
function isNeutralOperand(operator: FormulaOperator, value: number, index: number): boolean {
  if (operator === 'add' || operator === 'sum' || operator === 'union') return value === 0;
  if (operator === 'multiply' || operator === 'product') return value === 1;
  if (operator === 'product-one-plus') return value === 0;
  if (operator === 'subtract' || operator === 'percent-plus') return index > 0 && value === 0;
  if (operator === 'divide') return index > 0 && value === 1;
  return false;
}

/** 数字公式的 tooltip 允许说明来源，但可见内容始终保持纯数字。 */
function nodeTooltip(
  node: FormulaExpression,
  labels: Readonly<Record<string, string>>,
): string | undefined {
  if (node.kind === 'item') return node.tooltip;
  if (node.kind === 'zone') return labels[node.zoneId] ?? node.zoneId;
  return undefined;
}

/** 在同一数学表达式流中插入运算符。 */
function joinExpression(nodes: readonly ReactNode[], label: string): ReactNode {
  return nodes.map((node, index) => (
    <Fragment key={index}>
      {index > 0 ? (
        <span className="mx-1.5 select-none font-mono text-sm font-medium text-fd-muted-foreground">
          {label}
        </span>
      ) : null}
      {node}
    </Fragment>
  ));
}

/** 递归数字表达式与参考组件一致：根展开，内部组收起为计算值。 */
function NumericStructure({
  node,
  labels,
  defaultExpanded = false,
}: {
  node: FormulaExpression;
  labels: Readonly<Record<string, string>>;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  if (node.kind === 'item') {
    return <NumericChip value={node.value} tooltip={node.tooltip} />;
  }

  const group = groupExpression(node);
  if (!group.operator) {
    return <NumericStructure node={group.operands[0]!} labels={labels} defaultExpanded />;
  }
  const visibleOperands = group.operands.filter((operand, index) => (
    !isNeutralOperand(group.operator!, operand.calculate(), index)
  ));
  if (visibleOperands.length === 0) {
    return <NumericChip value={node.calculate()} tooltip={nodeTooltip(node, labels)} />;
  }
  if (visibleOperands.length === 1) {
    return <NumericStructure node={visibleOperands[0]!} labels={labels} defaultExpanded />;
  }
  if (!expanded) {
    return (
      <NumericChip
        value={node.calculate()}
        tooltip={nodeTooltip(node, labels)}
        expandable
        onExpand={() => setExpanded(true)}
      />
    );
  }

  const children = visibleOperands.map((operand, index) => (
    <NumericStructure key={index} node={operand} labels={labels} />
  ));
  const isFunction = group.operator === 'max' || group.operator === 'min' || group.operator === 'union';
  return (
    <span className="inline-flex items-center">
      {isFunction ? (
        <span className="mr-0.5 font-mono text-sm text-fd-muted-foreground">
          {OPERATOR_LABELS[group.operator]}
        </span>
      ) : null}
      <span className="select-none font-mono text-fd-muted-foreground">（</span>
      {joinExpression(children, isFunction ? ',' : OPERATOR_LABELS[group.operator])}
      <span className="select-none font-mono text-fd-muted-foreground">）</span>
    </span>
  );
}

/** 完全数字公式不显示乘区或公式名称，只在 tooltip 中保留来源说明。 */
export function NumericFormulaDisplay({
  node,
  labels = {},
}: {
  node: FormulaExpression;
  labels?: Readonly<Record<string, string>>;
}) {
  return (
    <div
      role="math"
      aria-label="数字公式"
      className="overflow-x-auto overscroll-x-contain py-4 [scrollbar-color:var(--color-fd-border)_transparent] [scrollbar-width:thin]"
    >
      <div className="mx-auto inline-flex min-w-max items-center px-4 font-serif text-sm sm:text-base">
        <NumericStructure node={node} labels={labels} defaultExpanded />
      </div>
    </div>
  );
}
