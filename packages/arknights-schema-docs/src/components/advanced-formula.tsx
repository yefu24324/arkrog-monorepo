/**
 * 面向普通读者的结构化数学公式组件。
 * 公式关系直接来自 graph AST；这里只把稳定 ID 翻译为中文，并为乘区提供悬浮计算说明。
 */

'use client';

import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import type {
  FormulaId,
  FormulaDamageType,
  FormulaExpression,
  FormulaInputId,
  FormulaZoneDefinition,
  OperationExpression,
} from '@arkrog/arknights-knowledge-graph/formula';
import type {
  FormulaBookData,
  FormulaBookDefinition,
} from '@/lib/formula-runtime';

/** 外部输入在公式中的自然语言名称。 */
const INPUT_LABELS: Record<FormulaInputId, string> = {
  ATK0: '基础攻击力',
  CHAR_HP0: '基础最大生命',
  CHAR_DEF0: '基础防御力',
  CHAR_RES0: '基础法术抗性',
  DEPLOY_COST0: '基础部署费用',
  INITIAL_DP0: '基础初始部署费用',
  BLOCK_COUNT0: '基础阻挡数',
  INITIAL_SP0: '基础初始技力',
  SP_COST0: '基础技力消耗',
  SP_RECOVERY_PER_SECOND0: '基础每秒技力恢复',
  ENEMY_ATK0: '敌方基础攻击力',
  ENEMY_ATTACK_SPEED0: '敌方基础攻击速度',
  ENEMY_MOVE_SPEED0: '敌方基础移动速度',
  DEPLOY_LIMIT0: '关卡基础可部署人数',
  DEF0: '敌方基础防御力',
  RES0: '敌方基础法术抗性',
  HP0: '敌方基础最大生命',
  PHYSICAL_ATTACK_SCALE: '物理攻击倍率',
  MAGICAL_ATTACK_SCALE: '法术攻击倍率',
  PURE_ATTACK_SCALE: '真实伤害攻击倍率',
  PHYSICAL_MIN_DAMAGE_RATIO: '物理最低伤害比例',
  MAGICAL_MIN_DAMAGE_RATIO: '法术最低伤害比例',
  RAW_ELEMENTAL_DAMAGE: '结算前元素伤害',
  RAW_ELEMENTAL_IMPAIRMENT: '结算前元素损伤',
  RAW_INCOMING_DAMAGE: '减伤前承受伤害',
  ENEMY_EP_RESISTANCE0: '敌方基础元素损伤抗性',
  ENEMY_EP_DAMAGE_RESISTANCE0: '敌方基础元素伤害抗性',
  BASE_ATTACK_INTERVAL: '基础攻击间隔',
};

/** 伤害类型的中文限定。 */
const DAMAGE_TYPE_LABELS: Record<FormulaDamageType, string> = {
  physical: '物理伤害',
  magical: '法术伤害',
  pure: '真实伤害',
  elemental: '元素伤害',
};

/** 乘区贡献单位。 */
const UNIT_LABELS: Record<FormulaZoneDefinition['unit'], string> = {
  point: '属性点数',
  ratio: '倍率增量',
  percent: '百分数点',
  damage: '已结算伤害',
  'sp-per-second': '技力/秒',
};

/** 用自然语言变量展示乘区内部如何聚合。 */
export function renderReadableZoneAggregation(zone: FormulaZoneDefinition): string {
  if (zone.aggregation.kind === 'product-one-plus') {
    return '(1 + 来源一) × (1 + 来源二) × …';
  }
  if (zone.aggregation.kind === 'product') return '来源一 × 来源二 × …';
  if (zone.aggregation.kind === 'union') return '1 − (1 − 来源一) × (1 − 来源二) × …';
  if (zone.aggregation.kind === 'max') return `max(${zone.aggregation.base}, 来源一, 来源二, …)`;
  const { base, termScale } = zone.aggregation;
  if (base === 0 && termScale === 1) return '来源一 + 来源二 + …';
  if (base === 1 && termScale === 1) return '1 + 来源一 + 来源二 + …';
  if (base === 1 && termScale === -1) return '1 − (降低一 + 降低二 + …)';
  if (base === 1 && termScale === 0.01) return '1 + (攻速一 + 攻速二 + …) ÷ 100';
  return `${base} + ${termScale} × (来源一 + 来源二 + …)`;
}

/** 乘区悬浮卡：解释局部聚合公式，而不是只显示内部 ID。 */
function ZoneTerm({
  zone,
  damageType,
}: {
  zone: FormulaZoneDefinition;
  damageType?: FormulaDamageType;
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, above: false });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipId = useId();

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const width = Math.min(352, window.innerWidth - 16);
    const left = Math.min(
      Math.max(8, rect.left + rect.width / 2 - width / 2),
      window.innerWidth - width - 8,
    );
    const above = window.innerHeight - rect.bottom < 260 && rect.top > 260;
    setPosition({
      top: above ? rect.top - 10 : rect.bottom + 10,
      left,
      above,
    });
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((current) => !current)}
        className="mx-1 inline-flex cursor-help items-center rounded-lg border border-fd-primary/35 bg-fd-primary/8 px-2.5 py-1.5 text-sm font-semibold text-fd-primary shadow-sm transition hover:-translate-y-0.5 hover:border-fd-primary/60 hover:bg-fd-primary/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
      >
        {zone.name}
        {damageType ? (
          <span className="ml-1.5 rounded bg-fd-background/80 px-1.5 py-0.5 text-[0.62rem] font-medium text-fd-muted-foreground">
            {DAMAGE_TYPE_LABELS[damageType]}
          </span>
        ) : null}
      </button>
      {open
        ? createPortal(
            <div
              id={tooltipId}
              role="tooltip"
              className="pointer-events-none fixed z-[100] w-[min(22rem,calc(100vw-1rem))] rounded-2xl border bg-fd-card p-4 text-left text-fd-card-foreground shadow-2xl"
              style={{
                top: position.top,
                left: position.left,
                transform: position.above ? 'translateY(-100%)' : undefined,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{zone.name}</p>
                  {damageType ? (
                    <p className="mt-0.5 text-xs text-fd-muted-foreground">
                      本次只筛选{DAMAGE_TYPE_LABELS[damageType]}贡献
                    </p>
                  ) : null}
                </div>
                <span className="rounded-full bg-fd-muted px-2 py-1 text-[0.65rem] text-fd-muted-foreground">
                  {UNIT_LABELS[zone.unit]}
                </span>
              </div>
              <div className="mt-3 rounded-xl border bg-fd-muted/30 px-3 py-3 text-center font-serif text-base font-semibold tracking-wide">
                {renderReadableZoneAggregation(zone)}
              </div>
              <p className="mt-3 text-xs leading-5 text-fd-muted-foreground">{zone.tooltip}</p>
              <div className="mt-3 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 border-t pt-3 text-xs">
                <span className="text-fd-muted-foreground">区内计算</span>
                <span>{zone.aggregation.kind === 'product-one-plus' ? '每个独立来源分别相乘' : '同区来源先统一求和'}</span>
                <span className="text-fd-muted-foreground">带回主式</span>
                <span>把上面的聚合结果作为一个整体参与外层运算</span>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

/** 外部输入用中文名称展示，技术符号仅保留在原生提示中。 */
function InputTerm({ expression }: { expression: Extract<FormulaExpression, { kind: 'input' }> }) {
  return (
    <span
      className="mx-1 inline-flex rounded-md border-b-2 border-sky-500/45 bg-sky-500/8 px-1.5 py-1 text-sm font-medium text-sky-700 dark:text-sky-300"
      title={`${expression.tooltip}（内部符号：${expression.symbol}）`}
    >
      {INPUT_LABELS[expression.inputId]}
    </span>
  );
}

/** 运算优先级用于只在必要时加括号。 */
function expressionPrecedence(expression: FormulaExpression): number {
  if (expression.kind !== 'operation') return 4;
  if (expression.operator === 'add' || expression.operator === 'subtract') return 1;
  if (expression.operator === 'multiply' || expression.operator === 'divide') return 2;
  return 3;
}

/** 数学运算符号。 */
const OPERATOR_SYMBOLS: Record<'add' | 'subtract' | 'multiply', string> = {
  add: '+',
  subtract: '−',
  multiply: '×',
};

/** 必要时给子表达式增加视觉括号。 */
function Parenthesized({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center">
      <span className="text-xl font-light text-fd-muted-foreground">(</span>
      {children}
      <span className="text-xl font-light text-fd-muted-foreground">)</span>
    </span>
  );
}

/** 递归渲染公式 AST，并可选择是否展开命名子公式。 */
function FormulaExpressionView({
  expression,
  book,
  expandFormulaReferences,
  onSelectFormula,
  formulaStack,
  parentPrecedence = 0,
}: {
  expression: FormulaExpression;
  book: FormulaBookData;
  expandFormulaReferences: boolean;
  onSelectFormula: (formulaId: FormulaId) => void;
  formulaStack: readonly FormulaId[];
  parentPrecedence?: number;
}): ReactNode {
  if (expression.kind === 'constant') {
    return <span className="mx-1 font-serif text-base font-semibold">{expression.value}</span>;
  }
  if (expression.kind === 'input') return <InputTerm expression={expression} />;
  if (expression.kind === 'zone') {
    const zone = book.zones.find((candidate) => candidate.id === expression.zoneId);
    return zone ? <ZoneTerm zone={zone} damageType={expression.damageType} /> : null;
  }
  if (expression.kind === 'formula') {
    const referenced = book.formulas.find((candidate) => candidate.id === expression.formulaId);
    if (!referenced) return <span className="text-sm text-red-500">未知子公式</span>;
    if (!expandFormulaReferences || formulaStack.includes(expression.formulaId)) {
      return (
        <button
          type="button"
          onClick={() => onSelectFormula(expression.formulaId)}
          className="mx-1 inline-flex rounded-lg border border-violet-500/35 bg-violet-500/8 px-2.5 py-1.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-500/15 dark:text-violet-300"
          title="点击查看这个子公式"
        >
          {referenced.name}
        </button>
      );
    }
    return (
      <Parenthesized>
        <FormulaExpressionView
          expression={referenced.expression}
          book={book}
          expandFormulaReferences
          onSelectFormula={onSelectFormula}
          formulaStack={[...formulaStack, expression.formulaId]}
        />
      </Parenthesized>
    );
  }

  const precedence = expressionPrecedence(expression);
  let content: ReactNode;
  if (expression.operator === 'divide') {
    const [numerator, ...denominators] = expression.operands;
    content = (
      <span className="mx-2 inline-flex min-w-20 flex-col items-stretch align-middle" title={expression.tooltip}>
        <span className="flex flex-wrap items-center justify-center gap-y-2 border-b border-current px-2 pb-1.5">
          {numerator ? (
            <FormulaExpressionView
              expression={numerator}
              book={book}
              expandFormulaReferences={expandFormulaReferences}
              onSelectFormula={onSelectFormula}
              formulaStack={formulaStack}
            />
          ) : null}
        </span>
        <span className="flex flex-wrap items-center justify-center gap-y-2 px-2 pt-1.5">
          {denominators.map((operand, index) => (
            <span key={index} className="inline-flex items-center">
              {index > 0 ? <span className="mx-1 text-fd-muted-foreground">×</span> : null}
              <FormulaExpressionView
                expression={operand}
                book={book}
                expandFormulaReferences={expandFormulaReferences}
                onSelectFormula={onSelectFormula}
                formulaStack={formulaStack}
              />
            </span>
          ))}
        </span>
      </span>
    );
  } else if (expression.operator === 'max' || expression.operator === 'min') {
    content = (
      <span className="mx-1 inline-flex flex-wrap items-center gap-y-2" title={expression.tooltip}>
        <span className="mr-1 text-sm font-semibold text-fd-muted-foreground">
          {expression.operator === 'max' ? '取较大值' : '取较小值'}
        </span>
        <Parenthesized>
          {expression.operands.map((operand, index) => (
            <span key={index} className="inline-flex items-center">
              {index > 0 ? <span className="mx-1.5 text-fd-muted-foreground">,</span> : null}
              <FormulaExpressionView
                expression={operand}
                book={book}
                expandFormulaReferences={expandFormulaReferences}
                onSelectFormula={onSelectFormula}
                formulaStack={formulaStack}
              />
            </span>
          ))}
        </Parenthesized>
      </span>
    );
  } else {
    // 前两个分支已排除 divide/max/min，这里只剩可中缀展示的三个运算符。
    const infixOperator = expression.operator as keyof typeof OPERATOR_SYMBOLS;
    content = (
      <span className="inline-flex flex-wrap items-center gap-y-2" title={expression.tooltip}>
        {expression.operands.map((operand, index) => (
          <span key={index} className="inline-flex items-center">
            {index > 0 ? (
              <span className="mx-2 font-serif text-lg font-semibold text-fd-muted-foreground">
                {OPERATOR_SYMBOLS[infixOperator]}
              </span>
            ) : null}
            <FormulaExpressionView
              expression={operand}
              book={book}
              expandFormulaReferences={expandFormulaReferences}
              onSelectFormula={onSelectFormula}
              formulaStack={formulaStack}
              parentPrecedence={precedence}
            />
          </span>
        ))}
      </span>
    );
  }

  return precedence < parentPrecedence ? <Parenthesized>{content}</Parenthesized> : content;
}

/** 高级公式画布：左侧显示结果名称，右侧显示可交互数学关系。 */
export function AdvancedFormula({
  formula,
  book,
  expandFormulaReferences,
  onSelectFormula,
}: {
  formula: FormulaBookDefinition;
  book: FormulaBookData;
  expandFormulaReferences: boolean;
  onSelectFormula: (formulaId: FormulaId) => void;
}) {
  return (
    <figure aria-label={`${formula.name}计算公式`} className="mt-5">
      <div className="overflow-x-auto rounded-2xl border bg-gradient-to-br from-fd-background to-fd-muted/25 px-4 py-7 shadow-inner sm:px-7">
        <div className="flex min-w-max flex-wrap items-center justify-center gap-y-4 font-serif text-fd-foreground">
          <span className="rounded-xl bg-fd-foreground px-3 py-2 text-base font-semibold text-fd-background shadow-sm">
            {formula.name}
          </span>
          <span className="mx-3 text-2xl font-light text-fd-muted-foreground">=</span>
          <FormulaExpressionView
            expression={formula.expression}
            book={book}
            expandFormulaReferences={expandFormulaReferences}
            onSelectFormula={onSelectFormula}
            formulaStack={[formula.id]}
          />
        </div>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-fd-muted-foreground">
        <span><span className="mr-1 inline-block size-2 rounded-full bg-sky-500" />蓝色项是战斗输入</span>
        <span><span className="mr-1 inline-block size-2 rounded-full bg-fd-primary" />高亮项是可悬停乘区</span>
        <span><span className="mr-1 inline-block size-2 rounded-full bg-violet-500" />紫色项是可跳转子公式</span>
      </figcaption>
    </figure>
  );
}
