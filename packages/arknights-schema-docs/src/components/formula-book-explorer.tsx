/**
 * 实验伤害公式簿浏览器：展示完整公式、公式 AST、乘区聚合方式和节点 tooltip。
 * 数据由 docs:generate 从知识图谱包生成，客户端不维护第二份公式定义。
 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import { cn } from '@/lib/cn';

/** 公式支持的伤害类型。 */
type FormulaDamageType = 'physical' | 'magical' | 'pure' | 'elemental';

/** 公式 AST 的常量节点。 */
interface ConstantExpression {
  kind: 'constant';
  value: number;
}

/** 公式 AST 的外部输入节点。 */
interface InputExpression {
  kind: 'input';
  inputId: string;
  symbol: string;
  tooltip: string;
}

/** 公式 AST 的乘区引用节点。 */
interface ZoneExpression {
  kind: 'zone';
  zoneId: string;
  damageType?: FormulaDamageType;
}

/** 公式 AST 的子公式引用节点。 */
interface FormulaReferenceExpression {
  kind: 'formula';
  formulaId: string;
}

/** 公式 AST 的运算节点。 */
interface OperationExpression {
  kind: 'operation';
  operator: 'add' | 'subtract' | 'multiply' | 'divide' | 'max' | 'min';
  operands: FormulaExpression[];
  tooltip: string;
}

/** 文档站读取的公式 AST 联合。 */
type FormulaExpression =
  | ConstantExpression
  | InputExpression
  | ZoneExpression
  | FormulaReferenceExpression
  | OperationExpression;

/** 一条公式对乘区的引用摘要。 */
interface FormulaZoneUsage {
  damageType: FormulaDamageType | null;
  name: string;
  tooltip: string;
  zoneId: string;
}

/** 生成后的单条公式。 */
interface FormulaDefinition {
  id: string;
  name: string;
  symbol: string;
  tooltip: string;
  expression: FormulaExpression;
  compactFormula: string;
  fullFormula: string;
  zones: FormulaZoneUsage[];
}

/** 求和乘区聚合定义。 */
interface SumAggregation {
  kind: 'sum';
  base: number;
  termScale: number;
}

/** 独立来源乘算定义。 */
interface ProductOnePlusAggregation {
  kind: 'product-one-plus';
}

/** 生成后的单条乘区。 */
interface FormulaZoneDefinition {
  id: string;
  symbol: string;
  name: string;
  tooltip: string;
  unit: 'point' | 'ratio' | 'percent' | 'damage';
  aggregation: SumAggregation | ProductOnePlusAggregation;
}

/** formula-book.json 的顶层契约。 */
interface FormulaBookData {
  schemaVersion: number;
  source: string;
  formulas: FormulaDefinition[];
  zones: FormulaZoneDefinition[];
}

/** AST 运算符的人类可读名称和符号。 */
const OPERATOR_LABELS: Record<OperationExpression['operator'], string> = {
  add: '加法 +',
  subtract: '减法 −',
  multiply: '乘法 ×',
  divide: '除法 ÷',
  max: '取最大值 max',
  min: '取最小值 min',
};

/** 伤害类型的中文短标签。 */
const DAMAGE_TYPE_LABELS: Record<FormulaDamageType, string> = {
  physical: '物理',
  magical: '法术',
  pure: '真实',
  elemental: '元素',
};

/** 数值单位的中文说明。 */
const UNIT_LABELS: Record<FormulaZoneDefinition['unit'], string> = {
  point: '点数',
  ratio: '比例',
  percent: '百分数点',
  damage: '已结算伤害',
};

/** 把乘区聚合规则转换为快速阅读的局部公式。 */
function renderZoneAggregation(zone: FormulaZoneDefinition): string {
  if (zone.aggregation.kind === 'product-one-plus') {
    return `Πᵢ(1 + ${zone.symbol}ᵢ)`;
  }
  const { base, termScale } = zone.aggregation;
  if (base === 0 && termScale === 1) return `Σᵢ${zone.symbol}ᵢ`;
  if (base === 1 && termScale === 1) return `1 + Σᵢ${zone.symbol}ᵢ`;
  if (base === 1 && termScale === -1) return `1 − Σᵢ${zone.symbol}ᵢ`;
  if (base === 1 && termScale === 0.01) return `1 + Σᵢ${zone.symbol}ᵢ / 100`;
  return `${base} + ${termScale} × Σᵢ${zone.symbol}ᵢ`;
}

/** 乘区引用徽章。 */
function ZoneBadge({ usage }: { usage: FormulaZoneUsage }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border bg-fd-background px-2.5 py-1 text-xs"
      title={usage.tooltip}
    >
      <code className="font-mono font-semibold text-fd-primary">{usage.zoneId}</code>
      <span className="text-fd-muted-foreground">{usage.name}</span>
      {usage.damageType ? (
        <span className="rounded bg-fd-muted px-1 py-0.5 text-[0.65rem] text-fd-muted-foreground">
          {DAMAGE_TYPE_LABELS[usage.damageType]}
        </span>
      ) : null}
    </span>
  );
}

/** 递归展示一棵公式 AST，并保留每个节点的 tooltip。 */
function FormulaTreeNode({
  expression,
  zones,
  onSelectFormula,
}: {
  expression: FormulaExpression;
  zones: ReadonlyMap<string, FormulaZoneDefinition>;
  onSelectFormula: (formulaId: string) => void;
}) {
  if (expression.kind === 'constant') {
    return (
      <TreeLeaf label="常量" value={String(expression.value)} tooltip="公式中的固定数值" />
    );
  }
  if (expression.kind === 'input') {
    return (
      <TreeLeaf
        label="输入"
        value={`${expression.symbol} · ${expression.inputId}`}
        tooltip={expression.tooltip}
      />
    );
  }
  if (expression.kind === 'zone') {
    const zone = zones.get(expression.zoneId);
    return (
      <TreeLeaf
        label="乘区"
        value={`${zone?.symbol ?? expression.zoneId} · ${zone?.name ?? expression.zoneId}${
          expression.damageType ? ` · ${DAMAGE_TYPE_LABELS[expression.damageType]}` : ''
        }`}
        tooltip={zone?.tooltip ?? expression.zoneId}
        accent
      />
    );
  }
  if (expression.kind === 'formula') {
    return (
      <button
        type="button"
        onClick={() => onSelectFormula(expression.formulaId)}
        className="flex w-full items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-left text-xs hover:border-fd-primary/50 hover:bg-fd-accent/40"
      >
        <span className="text-fd-muted-foreground">子公式</span>
        <code className="font-mono font-semibold text-fd-primary">{expression.formulaId}</code>
        <ChevronRight className="ml-auto size-3.5 text-fd-muted-foreground" />
      </button>
    );
  }

  return (
    <details open className="rounded-xl border bg-fd-background">
      <summary className="cursor-pointer list-none px-3 py-2.5">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="rounded bg-fd-primary/10 px-1.5 py-0.5 font-mono text-xs font-semibold text-fd-primary">
            {OPERATOR_LABELS[expression.operator]}
          </span>
          <span className="text-sm font-medium">{expression.tooltip}</span>
          <span className="text-xs text-fd-muted-foreground">
            {expression.operands.length} 个操作数
          </span>
        </div>
      </summary>
      <div className="space-y-2 border-t bg-fd-muted/15 p-3 pl-5">
        {expression.operands.map((operand, index) => (
          <div key={index} className="relative border-l pl-3">
            <FormulaTreeNode
              expression={operand}
              zones={zones}
              onSelectFormula={onSelectFormula}
            />
          </div>
        ))}
      </div>
    </details>
  );
}

/** AST 树中的无子节点项目。 */
function TreeLeaf({
  label,
  value,
  tooltip,
  accent = false,
}: {
  label: string;
  value: string;
  tooltip: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border bg-fd-background px-3 py-2" title={tooltip}>
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-[0.68rem] uppercase tracking-wide text-fd-muted-foreground">
          {label}
        </span>
        <code className={cn('font-mono text-xs font-medium', accent && 'text-fd-primary')}>
          {value}
        </code>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-fd-muted-foreground">{tooltip}</p>
    </div>
  );
}

/** 单个乘区的结构化定义卡片。 */
function ZoneDefinitionCard({ zone }: { zone: FormulaZoneDefinition }) {
  return (
    <div className="rounded-xl border bg-fd-background p-3">
      <div className="flex flex-wrap items-center gap-2">
        <code className="rounded bg-fd-primary/10 px-2 py-1 font-mono text-sm font-bold text-fd-primary">
          {zone.symbol}
        </code>
        <div>
          <p className="text-sm font-medium">{zone.name}</p>
          <code className="font-mono text-[0.68rem] text-fd-muted-foreground">{zone.id}</code>
        </div>
      </div>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-fd-muted/40 px-3 py-2 font-mono text-xs">
        {renderZoneAggregation(zone)}
      </pre>
      <p className="mt-2 text-xs leading-relaxed text-fd-muted-foreground">{zone.tooltip}</p>
      <p className="mt-2 text-[0.68rem] text-fd-muted-foreground">
        贡献项单位：{UNIT_LABELS[zone.unit]}
      </p>
    </div>
  );
}

/** schema-docs 中的完整公式簿交互浏览器。 */
export function FormulaBookExplorer() {
  const [data, setData] = useState<FormulaBookData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>('FINAL_ATK');
  const [query, setQuery] = useState('');
  const [showFullFormula, setShowFullFormula] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // 读取由 docs:generate 产生的稳定 JSON，避免客户端打包知识图谱实现。
    void fetch('/data/formula-book.json')
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return (await response.json()) as FormulaBookData;
      })
      .then((payload) => {
        if (cancelled) return;
        setData(payload);
        // 热更新或数据版本变化时，仅在当前公式已不存在的情况下回退到第一项。
        setSelectedFormulaId((current) =>
          payload.formulas.some((formula) => formula.id === current)
            ? current
            : (payload.formulas[0]?.id ?? ''),
        );
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setLoadError(error instanceof Error ? error.message : String(error));
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredFormulas = useMemo(
    () =>
      data?.formulas.filter((formula) =>
        [formula.id, formula.name, formula.symbol, formula.tooltip]
          .join('\n')
          .toLowerCase()
          .includes(normalizedQuery),
      ) ?? [],
    [data, normalizedQuery],
  );
  const selectedFormula = data?.formulas.find((formula) => formula.id === selectedFormulaId)
    ?? data?.formulas[0];
  const zones = useMemo(
    () => new Map(data?.zones.map((zone) => [zone.id, zone]) ?? []),
    [data],
  );

  if (loadError) {
    return (
      <div className="not-prose my-6 rounded-2xl border border-dashed px-4 py-8 text-center text-sm text-fd-muted-foreground">
        加载公式簿失败：{loadError}。请先运行 <code>pnpm docs:generate</code>。
      </div>
    );
  }

  if (!data || !selectedFormula) {
    return (
      <div className="not-prose my-6 rounded-2xl border px-4 py-10 text-center text-sm text-fd-muted-foreground">
        正在加载伤害公式簿…
      </div>
    );
  }

  return (
    <div className="not-prose my-6 space-y-5">
      <div className="grid gap-4 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border bg-fd-card p-3 lg:sticky lg:top-20">
          <label className="relative block">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fd-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索公式…"
              className="w-full rounded-xl border bg-fd-background py-2 pr-3 pl-9 text-sm outline-none focus:border-fd-primary"
            />
          </label>
          <div className="mt-3 space-y-1">
            {filteredFormulas.map((formula) => (
              <button
                key={formula.id}
                type="button"
                onClick={() => setSelectedFormulaId(formula.id)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                  selectedFormula.id === formula.id
                    ? 'bg-fd-primary/10 text-fd-primary'
                    : 'hover:bg-fd-accent/50',
                )}
              >
                <code className="w-12 shrink-0 font-mono text-xs font-bold">{formula.symbol}</code>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{formula.name}</span>
                  <span className="block truncate font-mono text-[0.65rem] text-fd-muted-foreground">
                    {formula.id}
                  </span>
                </span>
              </button>
            ))}
            {filteredFormulas.length === 0 ? (
              <p className="px-3 py-5 text-center text-xs text-fd-muted-foreground">没有匹配公式</p>
            ) : null}
          </div>
        </aside>

        <main className="min-w-0 space-y-4">
          <section className="rounded-2xl border bg-fd-card p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold">{selectedFormula.name}</h2>
                  <code className="rounded bg-fd-muted px-2 py-1 font-mono text-xs text-fd-muted-foreground">
                    {selectedFormula.id}
                  </code>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">
                  {selectedFormula.tooltip}
                </p>
              </div>
              <div className="inline-flex shrink-0 rounded-lg border bg-fd-background p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setShowFullFormula(false)}
                  className={cn('rounded-md px-2.5 py-1.5', !showFullFormula && 'bg-fd-accent font-medium')}
                >
                  保留子公式
                </button>
                <button
                  type="button"
                  onClick={() => setShowFullFormula(true)}
                  className={cn('rounded-md px-2.5 py-1.5', showFullFormula && 'bg-fd-accent font-medium')}
                >
                  完全展开
                </button>
              </div>
            </div>
            <pre className="mt-4 overflow-x-auto rounded-xl border bg-fd-muted/35 p-4 font-mono text-sm leading-7 text-fd-foreground">
              {showFullFormula ? selectedFormula.fullFormula : selectedFormula.compactFormula}
            </pre>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedFormula.zones.length > 0 ? (
                selectedFormula.zones.map((usage) => (
                  <ZoneBadge key={`${usage.zoneId}:${usage.damageType ?? 'all'}`} usage={usage} />
                ))
              ) : (
                <span className="text-xs text-fd-muted-foreground">该公式不直接引用乘区。</span>
              )}
            </div>
          </section>

          <section className="rounded-2xl border bg-fd-card p-5">
            <div className="mb-4">
              <h3 className="font-semibold">公式结构</h3>
              <p className="mt-1 text-xs text-fd-muted-foreground">
                展开节点查看运算顺序；每个节点直接展示其 tooltip。点击子公式可跳转。
              </p>
            </div>
            <FormulaTreeNode
              expression={selectedFormula.expression}
              zones={zones}
              onSelectFormula={setSelectedFormulaId}
            />
          </section>
        </main>
      </div>

      <section className="rounded-2xl border bg-fd-card p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold">乘区定义</h2>
            <p className="mt-1 text-sm text-fd-muted-foreground">
              共 {data.zones.length} 个稳定乘区；局部公式由结构化 aggregation 生成。
            </p>
          </div>
          <code className="font-mono text-[0.68rem] text-fd-muted-foreground">{data.source}</code>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {data.zones.map((zone) => (
            <ZoneDefinitionCard key={zone.id} zone={zone} />
          ))}
        </div>
      </section>
    </div>
  );
}
