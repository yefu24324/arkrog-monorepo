/** 公式簿专用中文公式组件：递归展开命名公式，只保留真实数学表达式。 */

import { Fragment, type ReactNode } from 'react';
import type {
  FormulaAstNode,
  FormulaAstOperator,
} from '../lib/formula-book-runtime';

/** 中文公式使用与数字公式一致的标准数学运算符。 */
const OPERATOR_LABELS: Readonly<Record<FormulaAstOperator, string>> = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
  max: '最大值',
  min: '最小值',
  sum: '+',
  union: '并集',
  product: '×',
  'product-one-plus': '×',
  'percent-plus': '+',
};

/** 中文项沿用数字公式的尺寸、颜色、边框和阴影，只把内容替换为中文注释。 */
function ChineseChip({ label }: { label: string }) {
  return (
    <span className="inline-flex min-h-7 items-center whitespace-nowrap rounded-lg border border-amber-500/35 bg-amber-500/10 px-2.5 py-1 font-sans text-sm font-semibold text-amber-700 shadow-xs dark:text-amber-300">
      {label}
    </span>
  );
}

/** 在单一公式表达式流中插入运算符。 */
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

/** 中文运算节点与数字公式使用相同的括号和函数布局。 */
function ChineseOperation({ node }: { node: Extract<FormulaAstNode, { kind: 'operation' }> }) {
  const children = node.operands.map((operand, index) => (
    <ChineseStructure key={index} node={operand} />
  ));
  const isFunction = node.operator === 'max' || node.operator === 'min' || node.operator === 'union';
  return (
    <span className="inline-flex items-center">
      {isFunction ? (
        <span className="mr-0.5 font-mono text-sm text-fd-muted-foreground">
          {OPERATOR_LABELS[node.operator]}
        </span>
      ) : null}
      <span className="select-none font-mono text-fd-muted-foreground">（</span>
      {joinExpression(children, isFunction ? '，' : OPERATOR_LABELS[node.operator])}
      <span className="select-none font-mono text-fd-muted-foreground">）</span>
    </span>
  );
}

/** 命名公式直接展开为子表达式，避免在公式内部生成多层“名称 = 表达式”。 */
function ChineseStructure({ node }: { node: FormulaAstNode }) {
  if (node.kind === 'item') {
    // 中文公式只显示固定项的来源名称，不混入数值。
    return <ChineseChip label={node.tooltip || '固定项'} />;
  }
  if (node.kind === 'formula') return <ChineseStructure node={node.expression} />;
  if (node.kind === 'zone') return <ChineseChip label={node.comment} />;
  return <ChineseOperation node={node} />;
}

/** 公式簿完整递归展开所有命名公式，乘区作为中文数学变量保留。 */
export function ChineseFormulaDisplay({ node }: { node: FormulaAstNode }) {
  return (
    <div
      role="math"
      aria-label={node.kind === 'formula' ? node.comment : '中文公式'}
      className="overflow-x-auto overscroll-x-contain py-4 [scrollbar-color:var(--color-fd-border)_transparent] [scrollbar-width:thin]"
    >
      <div className="mx-auto inline-flex min-w-max items-center px-4 font-serif text-sm sm:text-base">
        <ChineseStructure node={node} />
      </div>
    </div>
  );
}
