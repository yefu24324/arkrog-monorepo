/**
 * 藏品乘区人工校验表：并排展示 graph、formula 与 human > formula 最终结果。
 * formula 数据已在导出期统一假设全部 buff 生效，本组件不执行公式数值求值。
 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { cn } from '@/lib/cn';

/** 当前 FormulaBook 攻击力乘区的文档展示引用。 */
interface RelicZoneRef {
  id: string;
  name: string;
}

/** 当前攻击力校验产物中的单条乘区预测及其证据。 */
interface RelicZonePrediction {
  zoneId: string;
  ruleId: string;
  reason: string;
  status: string;
  confidence: number;
  evidencePaths: string[];
}

/** 校验产物中的原始黑板参数。 */
interface RelicZoneBlackboardEntry {
  key: string;
  value: number;
  valueStr: string | null;
}

/** 当前攻击力校验产物中的单个 buff 效果。 */
interface RelicZoneEffect {
  effectId: string;
  key: string;
  blackboard: RelicZoneBlackboardEntry[];
  predictions: RelicZonePrediction[];
  jsonPath: string;
}

/** 当前攻击力校验产物中的藏品记录。 */
interface RelicZoneItem {
  id: string;
  name: string;
  usage: string | null;
  zones: string[];
  effects: RelicZoneEffect[];
}

/** graph/formula 校验 JSON 的页面读取契约。 */
interface RelicZoneTableData {
  topic: { id: string; name: string };
  items: RelicZoneItem[];
}

/** 公式簿 JSON 中递归节点的最小读取结构。 */
interface FormulaBookNode {
  comment?: string;
  expression?: FormulaBookNode;
  id?: string;
  operands?: FormulaBookNode[];
  zoneId?: string;
}

/** 公式簿 JSON 只暴露 operator_final_atk 根公式。 */
interface FormulaBookPayload {
  formula: FormulaBookNode;
}

/** 稀疏 human 文件中的单 effect 修正。 */
interface HumanEffectOverride {
  effectId: string;
  zones: string[];
  note?: string;
}

/** 稀疏 human 文件中的单件藏品修正。 */
interface HumanItemOverride {
  id: string;
  reviewer: string;
  reviewedAt?: string;
  note?: string;
  zones?: string[];
  effects?: HumanEffectOverride[];
}

/** 浏览器读取的 human 主题文件。 */
interface HumanRelicZoneArtifact {
  topic: { id: string; name?: string };
  description?: string;
  items: HumanItemOverride[];
}

/** 三层合并后的一行藏品。 */
interface ValidationRow {
  base: RelicZoneItem;
  graph?: RelicZoneItem;
  formula?: RelicZoneItem;
  human?: HumanItemOverride;
  effectiveZones: RelicZoneRef[];
  graphMatchesEffective: boolean;
  formulaMatchesGraph: boolean;
}

type ValidationFilter = 'all' | 'mismatch' | 'human' | 'match';

interface RelicZoneValidationTableProps {
  /** 集成战略主题 ID，例如 rogue_6。 */
  topicId: string;
  className?: string;
}

/** 将乘区数组归一成稳定 ID 集合字符串，供对照判断。 */
function zoneSignature(zones: readonly string[]): string {
  return [...new Set(zones)].sort().join('|');
}

/** 从 operator_final_atk 递归公式中收集 FormulaZoneId 的中文注释。 */
function collectFormulaZoneComments(node: FormulaBookNode, target: Record<string, string> = {}): Record<string, string> {
  const id = node.zoneId ?? node.id;
  if (id && node.comment) target[id] = node.comment;
  if (node.expression) collectFormulaZoneComments(node.expression, target);
  for (const operand of node.operands ?? []) collectFormulaZoneComments(operand, target);
  return target;
}

/** 建立主题内乘区 ID 到 FormulaBook 中文注释的索引。 */
function buildZoneIndex(comments: Readonly<Record<string, string>>, ...datasets: Array<RelicZoneTableData | null>): Map<string, RelicZoneRef> {
  const zones = new Map<string, RelicZoneRef>();
  for (const data of datasets) {
    for (const item of data?.items ?? []) {
      for (const zoneId of item.zones) {
        zones.set(zoneId, { id: zoneId, name: comments[zoneId] ?? zoneId });
      }
      for (const effect of item.effects) {
        for (const prediction of effect.predictions) {
          zones.set(prediction.zoneId, {
            id: prediction.zoneId,
            name: comments[prediction.zoneId] ?? prediction.zoneId,
          });
        }
      }
    }
  }
  return zones;
}

/** 将 human 的乘区 ID 转为可展示引用；未知 ID 保留原文而不静默丢弃。 */
function resolveZoneIds(ids: readonly string[], zoneIndex: ReadonlyMap<string, RelicZoneRef>): RelicZoneRef[] {
  return [...new Set(ids)].map(
    (id) => zoneIndex.get(id) ?? { id, name: '未知攻击力乘区' },
  );
}

/** 计算 human > formula 的单 effect 最终乘区。 */
function resolveEffectZones(
  effect: RelicZoneEffect,
  human: HumanItemOverride | undefined,
  zoneIndex: ReadonlyMap<string, RelicZoneRef>,
): RelicZoneRef[] {
  const override = human?.effects?.find((entry) => entry.effectId === effect.effectId);
  if (override) return resolveZoneIds(override.zones, zoneIndex);
  return effect.predictions.map((prediction) => ({
    id: prediction.zoneId,
    name: zoneIndex.get(prediction.zoneId)?.name ?? prediction.zoneId,
  }));
}

/** 计算整件藏品的最终乘区：整件覆盖优先，否则合并 effect 覆盖与 formula。 */
function resolveEffectiveZones(
  formula: RelicZoneItem | undefined,
  human: HumanItemOverride | undefined,
  zoneIndex: ReadonlyMap<string, RelicZoneRef>,
): RelicZoneRef[] {
  if (human?.zones) return resolveZoneIds(human.zones, zoneIndex);
  const zones = new Map<string, RelicZoneRef>();
  for (const effect of formula?.effects ?? []) {
    for (const zone of resolveEffectZones(effect, human, zoneIndex)) zones.set(zone.id, zone);
  }
  return [...zones.values()];
}

/** 紧凑乘区徽章。 */
function ZoneBadges({ zones, empty = '—' }: { zones: RelicZoneRef[]; empty?: string }) {
  if (zones.length === 0) return <span className="text-fd-muted-foreground">{empty}</span>;
  return (
    <div className="flex flex-wrap gap-1.5">
      {zones.map((zone) => (
        <span
          key={zone.id}
          title={`${zone.name}（${zone.id}）`}
          className="inline-flex items-center gap-1 rounded-md border bg-fd-muted/40 px-1.5 py-0.5 text-xs"
        >
          <span className="font-medium text-fd-primary">{zone.name}</span>
        </span>
      ))}
    </div>
  );
}

/** 将 effect 预测转换为乘区引用。 */
function effectPredictionZones(effect: RelicZoneEffect | undefined, zoneIndex: ReadonlyMap<string, RelicZoneRef>): RelicZoneRef[] {
  return (effect?.predictions ?? []).map((prediction) => ({
    id: prediction.zoneId,
    name: zoneIndex.get(prediction.zoneId)?.name ?? prediction.zoneId,
  }));
}

/** 展示一件藏品逐 effect 的 graph/formula/human 对照。 */
function EffectComparison({ row, zoneIndex }: { row: ValidationRow; zoneIndex: ReadonlyMap<string, RelicZoneRef> }) {
  const graphEffects = new Map((row.graph?.effects ?? []).map((effect) => [effect.effectId, effect]));
  const formulaEffects = new Map((row.formula?.effects ?? []).map((effect) => [effect.effectId, effect]));
  const effectIds = [...new Set([...graphEffects.keys(), ...formulaEffects.keys()])];

  if (effectIds.length === 0) {
    return <p className="text-sm text-fd-muted-foreground">该藏品没有可对照的 buff。</p>;
  }
  return (
    <div className="space-y-3">
      {effectIds.map((effectId) => {
        const graphEffect = graphEffects.get(effectId);
        const formulaEffect = formulaEffects.get(effectId);
        const baseEffect = formulaEffect ?? graphEffect;
        const humanEffect = row.human?.effects?.find((effect) => effect.effectId === effectId);
        const finalZones = formulaEffect
          ? resolveEffectZones(formulaEffect, row.human, zoneIndex)
          : resolveZoneIds(humanEffect?.zones ?? [], zoneIndex);
        return (
          <div key={effectId} className="overflow-hidden rounded-xl border bg-fd-background">
            <div className="border-b bg-fd-muted/30 px-3 py-2">
              <code className="break-all text-xs text-fd-primary">{effectId}</code>
              {baseEffect ? (
                <span className="ml-2 text-xs text-fd-muted-foreground">{baseEffect.key}</span>
              ) : null}
            </div>
            <div className="grid gap-3 p-3 md:grid-cols-3">
              <div>
                <p className="mb-1 text-xs font-medium text-fd-muted-foreground">Graph</p>
                <ZoneBadges zones={effectPredictionZones(graphEffect, zoneIndex)} />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-fd-muted-foreground">Formula</p>
                <ZoneBadges zones={effectPredictionZones(formulaEffect, zoneIndex)} />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium text-fd-muted-foreground">
                  最终（{humanEffect ? 'Human' : 'Formula'}）
                </p>
                <ZoneBadges zones={finalZones} />
              </div>
            </div>
            {humanEffect?.note ? (
              <p className="border-t px-3 py-2 text-xs text-fd-muted-foreground">
                人工说明：{humanEffect.note}
              </p>
            ) : null}
            {baseEffect ? (
              <details className="border-t">
                <summary className="cursor-pointer px-3 py-2 text-xs text-fd-muted-foreground">
                  查看 blackboard 与原始路径
                </summary>
                <pre className="overflow-x-auto border-t bg-fd-muted/20 p-3 text-xs">
                  {JSON.stringify(
                    { blackboard: baseEffect.blackboard, jsonPath: baseEffect.jsonPath },
                    null,
                    2,
                  )}
                </pre>
              </details>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

/** 文档站人工校验主表。 */
export function RelicZoneValidationTable({ topicId, className }: RelicZoneValidationTableProps) {
  const [graph, setGraph] = useState<RelicZoneTableData | null>(null);
  const [formula, setFormula] = useState<RelicZoneTableData | null>(null);
  const [human, setHuman] = useState<HumanRelicZoneArtifact | null>(null);
  const [zoneComments, setZoneComments] = useState<Record<string, string>>({});
  const [loadError, setLoadError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<ValidationFilter>('all');
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    // 三层文件独立拉取，确保页面能明确暴露任一缺失或格式错误。
    void Promise.all([
      ...['graph', 'formula', 'human'].map(async (layer) => {
        const response = await fetch(`/data/relic-zone-validation/${layer}/${topicId}.json`);
        if (!response.ok) throw new Error(`${layer}: HTTP ${response.status}`);
        return response.json() as Promise<unknown>;
      }),
      fetch('/data/formula-book.json').then(async (response) => {
        if (!response.ok) throw new Error(`formula-book: HTTP ${response.status}`);
        return response.json() as Promise<unknown>;
      }),
    ])
      .then(([graphData, formulaData, humanData, formulaBookData]) => {
        if (cancelled) return;
        // 请求成功后再清理旧错误，避免 effect 内同步 setState 触发级联渲染。
        setLoadError(null);
        setGraph(graphData as RelicZoneTableData);
        setFormula(formulaData as RelicZoneTableData);
        setHuman(humanData as HumanRelicZoneArtifact);
        setZoneComments(collectFormulaZoneComments((formulaBookData as FormulaBookPayload).formula));
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setLoadError(error instanceof Error ? error.message : String(error));
      });
    return () => {
      cancelled = true;
    };
  }, [topicId]);

  const zoneIndex = useMemo(
    () => buildZoneIndex(zoneComments, graph, formula),
    [formula, graph, zoneComments],
  );
  const rows = useMemo<ValidationRow[]>(() => {
    if (!graph || !formula || !human) return [];
    const graphById = new Map(graph.items.map((item) => [item.id, item]));
    const formulaById = new Map(formula.items.map((item) => [item.id, item]));
    const humanById = new Map(human.items.map((item) => [item.id, item]));
    const ids = [...new Set([...formulaById.keys(), ...graphById.keys()])];
    return ids.map((id) => {
      const graphItem = graphById.get(id);
      const formulaItem = formulaById.get(id);
      const humanItem = humanById.get(id);
      const base = formulaItem ?? graphItem!;
      const effectiveZones = resolveEffectiveZones(formulaItem, humanItem, zoneIndex);
      return {
        base,
        graph: graphItem,
        formula: formulaItem,
        human: humanItem,
        effectiveZones,
        graphMatchesEffective: zoneSignature(graphItem?.zones ?? []) === zoneSignature(effectiveZones.map((zone) => zone.id)),
        formulaMatchesGraph: zoneSignature(graphItem?.zones ?? []) === zoneSignature(formulaItem?.zones ?? []),
      };
    });
  }, [formula, graph, human, zoneIndex]);

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(
    () => rows.filter((row) => {
      const matchesQuery = !normalizedQuery || [row.base.name, row.base.id, row.base.usage ?? '']
        .join('\n')
        .toLowerCase()
        .includes(normalizedQuery);
      if (!matchesQuery) return false;
      if (filter === 'mismatch') return !row.graphMatchesEffective;
      if (filter === 'human') return Boolean(row.human);
      if (filter === 'match') return row.graphMatchesEffective;
      return true;
    }),
    [filter, normalizedQuery, rows],
  );
  const expanded = useMemo(() => new Set(expandedIds), [expandedIds]);
  const mismatchCount = rows.filter((row) => !row.graphMatchesEffective).length;
  const humanCount = rows.filter((row) => row.human).length;

  if (loadError) {
    return (
      <div className={cn('not-prose my-6 rounded-2xl border border-dashed p-6 text-sm text-fd-muted-foreground', className)}>
        加载人工校验数据失败：{loadError}。请依次运行 <code>pnpm graph:export -- {topicId}</code> 与 <code>pnpm docs:generate</code>。
      </div>
    );
  }
  if (!graph || !formula || !human) {
    return <div className={cn('not-prose my-6 rounded-2xl border p-8 text-center text-sm text-fd-muted-foreground', className)}>正在加载 graph / formula / human…</div>;
  }

  return (
    <div className={cn('not-prose my-4 space-y-4', className)}>
      <div className="rounded-2xl border bg-fd-card p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">{formula.topic.name}</h2>
            <p className="mt-1 text-sm text-fd-muted-foreground">
              {rows.length} 件藏品 · graph/final 差异 {mismatchCount} 件 · human 已记录 {humanCount} 件
            </p>
            <p className="mt-1 text-xs text-fd-muted-foreground">
              最终显示优先级：human &gt; formula；formula 默认全部 buff 生效且不求公式数值。
            </p>
          </div>
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fd-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索藏品名、ID、原文…" className="w-full rounded-xl border bg-fd-background py-2 pr-9 pl-9 text-sm outline-none focus:border-fd-primary" />
            {query ? <button type="button" aria-label="清空搜索" onClick={() => setQuery('')} className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"><X className="size-3.5" /></button> : null}
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {([
            ['all', `全部 ${rows.length}`],
            ['mismatch', `差异 ${mismatchCount}`],
            ['human', `Human ${humanCount}`],
            ['match', `一致 ${rows.length - mismatchCount}`],
          ] as Array<[ValidationFilter, string]>).map(([value, label]) => (
            <button key={value} type="button" onClick={() => setFilter(value)} className={cn('rounded-full border px-3 py-1 text-xs', filter === value ? 'border-fd-primary bg-fd-primary/10 text-fd-primary' : 'text-fd-muted-foreground hover:text-fd-foreground')}>{label}</button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-fd-card">
        <div className="overflow-x-auto">
          {/* 校验产物允许跨单元格拖拽框选，展开按钮保持独立交互。 */}
          <table className="w-full min-w-[70rem] border-collapse text-sm select-text selection:bg-fd-primary/25 selection:text-fd-foreground">
            <thead><tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground"><th className="w-10 px-3 py-2.5" /><th className="w-[18%] px-3 py-2.5 font-medium">藏品</th><th className="w-[22%] px-3 py-2.5 font-medium">Graph</th><th className="w-[22%] px-3 py-2.5 font-medium">Formula</th><th className="w-[22%] px-3 py-2.5 font-medium">最终 Human &gt; Formula</th><th className="px-3 py-2.5 font-medium">校验</th></tr></thead>
            <tbody>
              {filtered.map((row) => {
                const isExpanded = expanded.has(row.base.id);
                return (
                  <FragmentRow key={row.base.id} row={row} expanded={isExpanded} zoneIndex={zoneIndex} onToggle={() => setExpandedIds((previous) => previous.includes(row.base.id) ? previous.filter((id) => id !== row.base.id) : [...previous, row.base.id])} />
                );
              })}
              {filtered.length === 0 ? <tr><td colSpan={6} className="px-4 py-10 text-center text-fd-muted-foreground">没有匹配的藏品。</td></tr> : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/** 独立行组件保持主渲染函数可读。 */
function FragmentRow({ row, expanded, zoneIndex, onToggle }: { row: ValidationRow; expanded: boolean; zoneIndex: ReadonlyMap<string, RelicZoneRef>; onToggle: () => void }) {
  return (
    <>
      <tr className={cn('border-b align-top hover:bg-fd-accent/30', expanded && 'bg-fd-accent/20')}>
        <td className="select-none px-3 py-3"><button type="button" onClick={onToggle} aria-label={expanded ? `收起 ${row.base.name}` : `展开 ${row.base.name}`} className="select-none rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"><ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} /></button></td>
        <td className="cursor-text px-3 py-3"><div className="w-full select-text text-left"><span className="font-medium">{row.base.name}</span><code className="mt-1 block text-[0.7rem] text-fd-muted-foreground">{row.base.id}</code></div></td>
        <td className="px-3 py-3"><ZoneBadges zones={resolveZoneIds(row.graph?.zones ?? [], zoneIndex)} /></td>
        <td className="px-3 py-3"><ZoneBadges zones={resolveZoneIds(row.formula?.zones ?? [], zoneIndex)} /></td>
        <td className="px-3 py-3"><ZoneBadges zones={row.effectiveZones} /><p className="mt-2 text-xs text-fd-muted-foreground">来源：{row.human ? `Human · ${row.human.reviewer}` : 'Formula fallback'}</p></td>
        <td className="px-3 py-3"><span className={cn('inline-flex rounded-full border px-2 py-1 text-xs', row.graphMatchesEffective ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300')}>{row.graphMatchesEffective ? '一致' : '有差异'}</span>{!row.formulaMatchesGraph ? <p className="mt-2 text-xs text-fd-muted-foreground">graph ≠ formula</p> : null}</td>
      </tr>
      {expanded ? <tr className="border-b bg-fd-muted/10"><td colSpan={6} className="px-4 py-4"><p className="mb-3 text-sm leading-relaxed text-fd-muted-foreground">{row.base.usage ?? '无藏品原文'}{row.human?.note ? <><br /><span className="text-fd-foreground">人工说明：{row.human.note}</span></> : null}</p><EffectComparison row={row} zoneIndex={zoneIndex} /></td></tr> : null}
    </>
  );
}
