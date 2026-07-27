/**
 * 公式表达式 Portal 弹层：对齐伤害计算器 ExpressionDisplay 的交互——
 * 点击结果数值弹出真实计算展开式，每一项用 tooltip 展示来源。
 */

'use client';

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import type {
  FormulaContext,
  FormulaContribution,
  FormulaDamageType,
  FormulaExpression,
  FormulaInputs,
} from '@arkrog/arknights-knowledge-graph/formula';
import { cn } from '@/lib/cn';
import type { FormulaBookData } from '@/lib/formula-runtime';

/** 展示用表达式叶节点：带 tooltip 的数值。 */
export interface FormulaLiteralNode {
  kind: 'literal';
  value: number;
  tooltip: string;
}

/** 展示用表达式运算组。 */
export interface FormulaGroupNode {
  kind: 'group';
  operator: '+' | '-' | '×' | '÷' | 'max' | 'min';
  tooltip: string;
  children: FormulaExprNode[];
}

/** 可递归渲染的公式展示树。 */
export type FormulaExprNode = FormulaLiteralNode | FormulaGroupNode;

/** 格式化展示数值。 */
function formatValue(value: number): string {
  if (!Number.isFinite(value)) return '—';
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return String(rounded);
}

/** 拼装贡献项的来源说明，供 tooltip 展示。 */
function contributionTooltip(entry: FormulaContribution): string {
  const lines = [entry.tooltip];
  if (entry.reason) lines.push(entry.reason);
  const meta = [
    entry.source?.itemId,
    entry.source?.ruleId,
    entry.source?.parameterKey,
  ].filter(Boolean);
  if (meta.length > 0) lines.push(meta.join(' · '));
  return lines.join('\n');
}

/** 从乘区聚合规则与贡献构建展示树。 */
function buildZoneExpr(
  zoneId: FormulaContribution['zoneId'],
  book: FormulaBookData,
  context: FormulaContext,
  damageType?: FormulaDamageType,
): FormulaExprNode {
  const zone = book.zones.find((entry) => entry.id === zoneId);
  const contributions = context.getContributions(zoneId, { damageType });
  const name = zone?.name ?? zoneId;

  if (!zone) {
    return { kind: 'literal', value: 0, tooltip: `未知乘区 ${zoneId}` };
  }

  if (zone.aggregation.kind === 'product-one-plus') {
    if (contributions.length === 0) {
      return { kind: 'literal', value: 1, tooltip: `${name}（无加成）` };
    }
    return {
      kind: 'group',
      operator: '×',
      tooltip: name,
      children: contributions.map((entry) => ({
        kind: 'group' as const,
        operator: '+' as const,
        tooltip: contributionTooltip(entry),
        children: [
          { kind: 'literal' as const, value: 1, tooltip: '基数' },
          {
            kind: 'literal' as const,
            value: entry.value,
            tooltip: contributionTooltip(entry),
          },
        ],
      })),
    };
  }
  if (zone.aggregation.kind === 'product') {
    if (contributions.length === 0) return { kind: 'literal', value: 1, tooltip: `${name}（无倍率）` };
    return {
      kind: 'group',
      operator: '×',
      tooltip: name,
      children: contributions.map((entry) => ({
        kind: 'literal' as const,
        value: entry.value,
        tooltip: contributionTooltip(entry),
      })),
    };
  }
  if (zone.aggregation.kind === 'union') {
    if (contributions.length === 0) return { kind: 'literal', value: 0, tooltip: `${name}（无概率）` };
    return {
      kind: 'group',
      operator: '-',
      tooltip: name,
      children: [
        { kind: 'literal', value: 1, tooltip: '完整概率' },
        {
          kind: 'group',
          operator: '×',
          tooltip: `${name}未命中部分`,
          children: contributions.map((entry) => ({
            kind: 'group' as const,
            operator: '-' as const,
            tooltip: contributionTooltip(entry),
            children: [
              { kind: 'literal' as const, value: 1, tooltip: '完整概率' },
              { kind: 'literal' as const, value: entry.value, tooltip: contributionTooltip(entry) },
            ],
          })),
        },
      ],
    };
  }
  if (zone.aggregation.kind === 'max') {
    return {
      kind: 'group',
      operator: 'max',
      tooltip: name,
      children: [
        { kind: 'literal', value: zone.aggregation.base, tooltip: `${name}基数` },
        ...contributions.map((entry) => ({
          kind: 'literal' as const,
          value: entry.value,
          tooltip: contributionTooltip(entry),
        })),
      ],
    };
  }

  // 其余分支均为基数加缩放后的求和乘区。
  const children: FormulaExprNode[] = [];
  if (zone.aggregation.base !== 0 || contributions.length === 0) {
    children.push({
      kind: 'literal',
      value: zone.aggregation.base,
      tooltip: `${name}基数`,
    });
  }
  for (const entry of contributions) {
    children.push({
      kind: 'literal',
      value: zone.aggregation.termScale * entry.value,
      tooltip: contributionTooltip(entry),
    });
  }
  if (children.length === 1) return children[0]!;
  return { kind: 'group', operator: '+', tooltip: name, children };
}

/** 从公式 AST 构建展示树。 */
function buildFromExpression(
  expression: FormulaExpression,
  book: FormulaBookData,
  context: FormulaContext,
  inputs: FormulaInputs,
  formulaStack: readonly string[],
): FormulaExprNode {
  switch (expression.kind) {
    case 'constant':
      return { kind: 'literal', value: expression.value, tooltip: '常量' };
    case 'input': {
      const value = inputs[expression.inputId] ?? 0;
      return { kind: 'literal', value, tooltip: expression.tooltip };
    }
    case 'zone':
      return buildZoneExpr(
        expression.zoneId,
        book,
        context,
        expression.damageType,
      );
    case 'formula': {
      if (formulaStack.includes(expression.formulaId)) {
        return {
          kind: 'literal',
          value: 0,
          tooltip: `循环引用 ${expression.formulaId}`,
        };
      }
      const referenced = book.formulas.find(
        (entry) => entry.id === expression.formulaId,
      );
      if (!referenced) {
        return {
          kind: 'literal',
          value: 0,
          tooltip: `未知公式 ${expression.formulaId}`,
        };
      }
      return buildFromExpression(referenced.expression, book, context, inputs, [
        ...formulaStack,
        expression.formulaId,
      ]);
    }
    case 'operation': {
      const operator =
        expression.operator === 'add'
          ? '+'
          : expression.operator === 'subtract'
            ? '-'
            : expression.operator === 'multiply'
              ? '×'
              : expression.operator === 'divide'
                ? '÷'
                : expression.operator;
      return {
        kind: 'group',
        operator,
        tooltip: expression.tooltip,
        children: expression.operands.map((operand) =>
          buildFromExpression(operand, book, context, inputs, formulaStack),
        ),
      };
    }
  }
}

/** 从命名公式构建展示树。 */
export function buildNamedFormulaExpr(
  formulaId: string,
  book: FormulaBookData,
  context: FormulaContext,
  inputs: FormulaInputs,
): FormulaExprNode | null {
  const definition = book.formulas.find((entry) => entry.id === formulaId);
  if (!definition) return null;
  return buildFromExpression(definition.expression, book, context, inputs, [
    formulaId,
  ]);
}

/** 构建「基础攻速 × SPD 区」展示树。 */
export function buildAttackSpeedExpr(
  book: FormulaBookData,
  context: FormulaContext,
  baseAttackSpeed: number,
): FormulaExprNode {
  return {
    kind: 'group',
    operator: '×',
    tooltip: '攻击速度',
    children: [
      { kind: 'literal', value: baseAttackSpeed, tooltip: '基础攻击速度' },
      buildZoneExpr('ATTACK_SPEED', book, context),
    ],
  };
}

/** 仅展示 SPD 乘区。 */
export function buildSpdMultiplierExpr(
  book: FormulaBookData,
  context: FormulaContext,
): FormulaExprNode {
  return buildZoneExpr('ATTACK_SPEED', book, context);
}

/** 求展示树的数值结果。 */
function evaluateExpr(node: FormulaExprNode): number {
  if (node.kind === 'literal') return node.value;
  const values = node.children.map(evaluateExpr);
  switch (node.operator) {
    case '+':
      return values.reduce((sum, value) => sum + value, 0);
    case '-':
      return values.slice(1).reduce((result, value) => result - value, values[0] ?? 0);
    case '×':
      return values.reduce((product, value) => product * value, 1);
    case '÷':
      return values.slice(1).reduce((result, value) => result / value, values[0] ?? 0);
    case 'max':
      return Math.max(...values);
    case 'min':
      return Math.min(...values);
  }
}

/** 过滤恒等元，避免展开式被无意义的 0 / 1 撑满。 */
function pruneExpr(node: FormulaExprNode): FormulaExprNode {
  if (node.kind === 'literal') return node;
  const children = node.children
    .map(pruneExpr)
    .filter((child) => {
      const value = evaluateExpr(child);
      if ((node.operator === '+' || node.operator === '-') && value === 0) {
        return false;
      }
      if ((node.operator === '×' || node.operator === '÷') && value === 1) {
        return false;
      }
      return true;
    });
  if (children.length === 1) return children[0]!;
  if (children.length === 0) {
    return {
      kind: 'literal',
      value: node.operator === '×' || node.operator === '÷' ? 1 : 0,
      tooltip: node.tooltip,
    };
  }
  return { ...node, children };
}

/** 悬停 tooltip（Portal）。 */
function SourceTooltip({
  content,
  children,
}: {
  content: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  }, [open]);

  return (
    <span
      ref={triggerRef}
      className="inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-describedby={open ? tooltipId : undefined}
    >
      {children}
      {open
        ? createPortal(
            <div
              id={tooltipId}
              role="tooltip"
              className="pointer-events-none fixed z-[100] max-w-xs -translate-x-1/2 -translate-y-full whitespace-pre-wrap rounded-lg border bg-fd-card px-2.5 py-1.5 text-xs text-fd-card-foreground shadow-lg"
              style={{ top: pos.top, left: pos.left }}
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}

/** 数值 Chip，悬停显示来源。 */
function ValueChip({ value, tooltip }: { value: number; tooltip: string }) {
  return (
    <SourceTooltip content={tooltip}>
      <span className="inline-flex cursor-help items-center rounded-md border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 font-mono text-xs text-amber-700 dark:text-amber-300">
        {formatValue(value)}
      </span>
    </SourceTooltip>
  );
}

/** 递归渲染真实计算展开式。 */
function FormulaExprView({
  node,
  defaultExpanded = true,
}: {
  node: FormulaExprNode;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const pruned = pruneExpr(node);

  if (pruned.kind === 'literal') {
    return <ValueChip value={pruned.value} tooltip={pruned.tooltip} />;
  }

  if (!expanded) {
    return (
      <SourceTooltip content={pruned.tooltip}>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center rounded-md border border-fd-primary/40 bg-fd-primary/10 px-1.5 py-0.5 font-mono text-xs text-fd-primary"
          onClick={() => setExpanded(true)}
        >
          {formatValue(evaluateExpr(pruned))}
        </button>
      </SourceTooltip>
    );
  }

  if (pruned.operator === 'max' || pruned.operator === 'min') {
    return (
      <span className="inline-flex flex-wrap items-center gap-1">
        <span className="font-mono text-xs">{pruned.operator}(</span>
        {pruned.children.map((child, index) => (
          <span key={index} className="inline-flex items-center gap-1">
            <FormulaExprView node={child} />
            {index < pruned.children.length - 1 ? (
              <span className="font-mono text-xs">,</span>
            ) : null}
          </span>
        ))}
        <span className="font-mono text-xs">)</span>
      </span>
    );
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      <span className="font-mono text-xs">(</span>
      {pruned.children.map((child, index) => (
        <span key={index} className="inline-flex items-center gap-1">
          <FormulaExprView node={child} />
          {index < pruned.children.length - 1 ? (
            <span className="mx-0.5 font-mono text-xs text-fd-muted-foreground">
              {pruned.operator}
            </span>
          ) : null}
        </span>
      ))}
      <span className="font-mono text-xs">)</span>
    </span>
  );
}

/** 点击结果数值，用 Portal 弹出真实计算公式。 */
export function FormulaResultPopover({
  value,
  expression,
  className,
}: {
  /** 展示的最终数值文本。 */
  value: string;
  /** 真实计算展开树；为空时不可点击。 */
  expression: FormulaExprNode | null | undefined;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const width = 360;
    const left = Math.min(
      Math.max(8, rect.left + rect.width / 2 - width / 2),
      window.innerWidth - width - 8,
    );
    setPos({
      top: rect.bottom + 8,
      left,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    /** 点击外部关闭弹层。 */
    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (!expression) {
    return <span className={cn('font-mono text-sm font-medium', className)}>{value}</span>;
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'cursor-pointer font-mono text-sm font-medium text-fd-primary underline-offset-2 hover:underline',
          className,
        )}
        title="查看计算公式"
      >
        {value}
      </button>
      {open
        ? createPortal(
            <div
              ref={panelRef}
              role="dialog"
              aria-label="属性计算公式"
              className="fixed z-[90] w-[min(22.5rem,calc(100vw-1rem))] rounded-xl border bg-fd-card p-3 text-fd-card-foreground shadow-xl"
              style={{ top: pos.top, left: pos.left }}
            >
              <p className="mb-2 text-[0.65rem] font-medium text-fd-muted-foreground">
                真实计算展开 · 悬停数值查看来源
              </p>
              <div className="max-h-64 overflow-auto leading-8">
                <FormulaExprView node={expression} defaultExpanded />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
