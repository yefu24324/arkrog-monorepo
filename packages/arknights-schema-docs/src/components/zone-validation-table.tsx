/** 乘区校验表：对照 Graph、Mechanics 与人工维护的历史版本。 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown, Copy, Download, Save, Search, X } from 'lucide-react';
import type { ExportedRelicsReport, WrappedRelicItem } from '@arkrog/arknights-gamedata-report';
import {
  FORMULA_ZONE_NAMES,
  type FormulaZoneId,
} from '@arkrog/arknights-knowledge-graph/formula';
import { analyzeRelic } from '@arkrog/arknights-knowledge-graph/mechanics';
import { cn } from '@/lib/cn';
import { useRoguelikeStageOptions } from '@/hooks/use-roguelike-stage-options';
import { RoguelikeStageSelector } from '@/components/roguelike-stage-selector';
import {
  compareZoneValidation,
  createMechanicsHistoryRecord,
  parseHumanZoneValidation,
  roundZoneItem,
  serializeHistoryDocument,
  type HumanRelicValidation,
  type HumanZoneValidationDocument,
  type ZoneItemValue,
  type ZoneValidationComparison,
} from '@/lib/zone-validation';

/** FormulaBook 乘区的人类可读引用。 */
interface ZoneRef {
  id: string;
  name: string;
}

/** Graph 产物中的单条乘区预测。 */
interface GraphZonePrediction {
  zoneId: string;
}

/** Graph 产物中的原始黑板参数。 */
interface GraphBlackboardEntry {
  key: string;
  value: number;
  valueStr: string | null;
}

/** Graph 产物中的单个 buff。 */
interface GraphEffect {
  effectId: string;
  key: string;
  blackboard: GraphBlackboardEntry[];
  predictions: GraphZonePrediction[];
  jsonPath: string;
}

/** Graph 产物中的藏品。 */
interface GraphRelicItem {
  id: string;
  name: string;
  usage: string | null;
  zones: string[];
  effects: GraphEffect[];
}

/** 页面读取的 Graph 主题产物。 */
interface GraphZoneValidationData {
  producer?: { kind?: 'graph' };
  topic: { id: string; name: string };
  items: GraphRelicItem[];
}

/** 当前 Mechanics 即时分析出的藏品结果。 */
interface MechanicsRelicItem {
  id: string;
  name: string;
  usage: string | null;
  items: ZoneItemValue[];
}

/** 公式簿 JSON 中递归节点的最小读取结构。 */
interface FormulaBookNode {
  comment?: string;
  expression?: FormulaBookNode;
  id?: string;
  operands?: FormulaBookNode[];
  zoneId?: string;
}

/** 公式簿 JSON 暴露的乘区注释。 */
interface FormulaBookPayload {
  formulas: FormulaBookNode[];
  writableZoneComments: Record<string, string>;
}

/** 三方数据合并后的一行。 */
interface ValidationRow {
  id: string;
  name: string;
  usage: string | null;
  graph?: GraphRelicItem;
  mechanics: MechanicsRelicItem;
  history?: HumanRelicValidation;
  comparison: ZoneValidationComparison;
}

type ValidationFilter = 'all' | 'mismatch' | 'match';

interface ZoneValidationTableProps {
  /** 集成战略主题 ID，例如 rogue_6。 */
  topicId: string;
  className?: string;
}

/** 从最终公式 AST 中递归收集乘区中文注释。 */
function collectFormulaZoneComments(node: FormulaBookNode, target: Record<string, string>): void {
  const id = node.zoneId ?? node.id;
  if (id && node.comment) target[id] = node.comment;
  if (node.expression) collectFormulaZoneComments(node.expression, target);
  for (const operand of node.operands ?? []) collectFormulaZoneComments(operand, target);
}

/** 将乘区 ID 转成当前 FormulaBook 的展示名称。 */
function resolveZone(id: string, comments: Readonly<Record<string, string>>): ZoneRef {
  // Formula 包是乘区名称的单一来源；comments 只兼容尚未进入当前枚举的生成数据。
  return { id, name: FORMULA_ZONE_NAMES[id as FormulaZoneId] ?? comments[id] ?? id };
}

/** Graph 列只展示去重后的乘区名称。 */
function GraphZoneBadges({ zoneIds, comments, emptyLabel = '—' }: {
  zoneIds: readonly string[];
  comments: Readonly<Record<string, string>>;
  emptyLabel?: string;
}) {
  const zones = [...new Set(zoneIds)].map((id) => resolveZone(id, comments));
  if (zones.length === 0) return <span className="break-words text-fd-muted-foreground">{emptyLabel}</span>;
  return (
    <div className="flex flex-wrap gap-1.5">
      {zones.map((zone) => (
        <span key={zone.id} title={`${zone.name}（${zone.id}）`} className="inline-flex rounded-md border bg-fd-muted/40 px-1.5 py-0.5 text-xs font-medium text-fd-primary">
          {zone.name}
        </span>
      ))}
    </div>
  );
}

/** Mechanics 与历史列逐条展示 FormulaBook item，重复项不折叠。 */
function ZoneItemBadges({ items, comments, emptyLabel = '—' }: {
  items: readonly ZoneItemValue[];
  comments: Readonly<Record<string, string>>;
  emptyLabel?: string;
}) {
  if (items.length === 0) return <span className="text-fd-muted-foreground">{emptyLabel}</span>;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((entry, index) => {
        const zone = resolveZone(entry.zoneId, comments);
        return (
          <span key={`${entry.zoneId}:${entry.item}:${index}`} title={`${zone.name}（${zone.id}）`} className="inline-flex rounded-md border bg-fd-muted/40 px-1.5 py-0.5 text-xs font-medium text-fd-primary">
            {zone.name} = {roundZoneItem(entry.item)}
          </span>
        );
      })}
    </div>
  );
}

/** 直接调用 Mechanics 静态分析，保留每一个 FormulaBook item。 */
function analyzeMechanicsItem(relic: WrappedRelicItem, topicId: string): MechanicsRelicItem {
  const analyses = analyzeRelic(relic, { topicId });
  const items = analyses.flatMap((analysis): ZoneItemValue[] => (
    analysis.status === 'supported'
      ? [{ zoneId: analysis.zoneId, item: analysis.item.value }]
      : []
  ));
  return {
    id: relic.id,
    name: relic.name,
    usage: relic.relic.usage,
    items,
  };
}

/** 展开区继续展示 Graph 导出的逐效果证据。 */
function GraphEffectDetails({ item, comments }: {
  item?: GraphRelicItem;
  comments: Readonly<Record<string, string>>;
}) {
  const effects = item?.effects ?? [];
  if (effects.length === 0) {
    return <p className="text-sm text-fd-muted-foreground">Graph 中没有该藏品的 buff 详情。</p>;
  }
  return (
    <div className="space-y-3">
      {effects.map((effect) => (
        <div key={effect.effectId} className="overflow-hidden rounded-xl border bg-fd-background">
          <div className="border-b bg-fd-muted/30 px-3 py-2">
            <code className="break-all text-xs text-fd-primary">{effect.effectId}</code>
            <span className="ml-2 text-xs text-fd-muted-foreground">{effect.key}</span>
          </div>
          <div className="p-3">
            <p className="mb-1 text-xs font-medium text-fd-muted-foreground">Graph</p>
            <GraphZoneBadges zoneIds={effect.predictions.map((entry) => entry.zoneId)} comments={comments} />
          </div>
          <details className="border-t">
            <summary className="cursor-pointer px-3 py-2 text-xs text-fd-muted-foreground">查看 Graph blackboard 与原始路径</summary>
            <pre className="overflow-x-auto border-t bg-fd-muted/20 p-3 text-xs">{JSON.stringify({ blackboard: effect.blackboard, jsonPath: effect.jsonPath }, null, 2)}</pre>
          </details>
        </div>
      ))}
    </div>
  );
}

/** 汇总展示三方对照结果，避免重复呈现三组两两比较。 */
function ComparisonBadge({ matches }: { matches: boolean }) {
  return (
    <span className={cn('inline-flex max-w-full rounded-full border px-2 py-1 text-center text-xs whitespace-normal', matches ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300')}>
      {matches ? '一致' : '差异'}
    </span>
  );
}

/** 下载浏览器内的人工历史草稿。 */
function downloadJson(fileName: string, content: string): void {
  const url = URL.createObjectURL(new Blob([content], { type: 'application/json;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

/** 文档站通用乘区校验主表；本次只实现藏品分区。 */
export function ZoneValidationTable({ topicId, className }: ZoneValidationTableProps) {
  const [graph, setGraph] = useState<GraphZoneValidationData | null>(null);
  const [relics, setRelics] = useState<ExportedRelicsReport | null>(null);
  const [zoneComments, setZoneComments] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<HumanZoneValidationDocument | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<ValidationFilter>('all');
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [changedIds, setChangedIds] = useState<string[]>([]);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const stageOptions = useRoguelikeStageOptions(topicId);

  useEffect(() => {
    let cancelled = false;
    // Graph、report、FormulaBook 与人工历史彼此独立；历史 404 按空文件处理。
    void Promise.all([
      fetch(`/data/zone-validation/graph/${topicId}.json`).then(async (response) => {
        if (!response.ok) throw new Error(`graph: HTTP ${response.status}`);
        return response.json() as Promise<GraphZoneValidationData>;
      }),
      fetch('/data/formula-book.json').then(async (response) => {
        if (!response.ok) throw new Error(`formula-book: HTTP ${response.status}`);
        return response.json() as Promise<FormulaBookPayload>;
      }),
      fetch(`/gamedata-report/roguelike/${topicId}/relics.json`).then(async (response) => {
        if (!response.ok) throw new Error(`relics: HTTP ${response.status}`);
        return response.json() as Promise<ExportedRelicsReport>;
      }),
    ]).then(async ([graphData, formulaBook, relicData]) => {
      if (cancelled) return;
      if (graphData.producer?.kind !== 'graph') throw new Error('Graph 文件缺少 graph 来源标记');
      const comments = { ...formulaBook.writableZoneComments };
      for (const formula of formulaBook.formulas ?? []) collectFormulaZoneComments(formula, comments);
      setGraph(graphData);
      setRelics(relicData);
      setZoneComments(comments);
      setLoadError(null);
      try {
        const response = await fetch(`/human-zone-validation/${topicId}.json`);
        const raw: unknown = response.status === 404
          ? { relics: [] }
          : response.ok
            ? await response.json()
            : (() => { throw new Error(`HTTP ${response.status}`); })();
        if (cancelled) return;
        setHistory(parseHumanZoneValidation(raw, new Set(Object.keys(comments))));
        setHistoryError(null);
      } catch (error: unknown) {
        if (cancelled) return;
        setHistory(null);
        setHistoryError(error instanceof Error ? error.message : String(error));
      }
    }).catch((error: unknown) => {
      if (!cancelled) setLoadError(error instanceof Error ? error.message : String(error));
    });
    return () => { cancelled = true; };
  }, [topicId]);

  useEffect(() => {
    if (changedIds.length === 0) return;
    // 浏览器无法确认下载内容是否已覆盖源码文件，因此草稿存在时始终提示离开风险。
    const warnBeforeUnload = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warnBeforeUnload);
    return () => window.removeEventListener('beforeunload', warnBeforeUnload);
  }, [changedIds.length]);

  const mechanics = useMemo(() => relics?.map((relic) => analyzeMechanicsItem(relic, topicId)) ?? [], [relics, topicId]);
  const rows = useMemo<ValidationRow[]>(() => {
    if (!graph) return [];
    const graphById = new Map(graph.items.map((entry) => [entry.id, entry]));
    const historyById = new Map((history?.relics ?? []).map((entry) => [entry.id, entry]));
    return mechanics.map((mechanicsItem) => {
      const graphItem = graphById.get(mechanicsItem.id);
      const historyItem = historyById.get(mechanicsItem.id);
      return {
        id: mechanicsItem.id,
        name: mechanicsItem.name,
        usage: mechanicsItem.usage,
        graph: graphItem,
        mechanics: mechanicsItem,
        history: historyItem,
        comparison: compareZoneValidation(graphItem?.zones ?? [], mechanicsItem.items, historyItem),
      };
    });
  }, [graph, history, mechanics]);

  const currentIds = mechanics.map((entry) => entry.id);
  const currentIdSet = new Set(currentIds);
  const orphanCount = history?.relics.filter((entry) => !currentIdSet.has(entry.id)).length ?? 0;
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = rows.filter((row) => {
    const matchesQuery = !normalizedQuery || [row.name, row.id, row.usage ?? ''].join('\n').toLowerCase().includes(normalizedQuery);
    if (!matchesQuery) return false;
    if (filter === 'mismatch') return !row.comparison.matches;
    if (filter === 'match') return row.comparison.matches;
    return true;
  });
  const mismatchCount = rows.filter((row) => !row.comparison.matches).length;
  const expanded = new Set(expandedIds);

  /** 用当前 Mechanics 结果整条覆盖指定藏品的历史草稿。 */
  const saveToHistory = (row: ValidationRow) => {
    if (!history) return;
    const record = createMechanicsHistoryRecord(row.id, row.name, row.mechanics.items);
    const existingIndex = history.relics.findIndex((entry) => entry.id === row.id);
    const nextRelics = [...history.relics];
    if (existingIndex >= 0) nextRelics[existingIndex] = record;
    else nextRelics.push(record);
    setHistory({ ...history, relics: nextRelics });
    setChangedIds((previous) => previous.includes(row.id) ? previous : [...previous, row.id]);
    setSavedId(row.id);
    window.setTimeout(() => setSavedId((current) => current === row.id ? null : current), 1200);
  };

  const historyJson = history ? serializeHistoryDocument(history, currentIds) : '';
  const copyHistory = async () => {
    if (!history) return;
    await navigator.clipboard.writeText(historyJson);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  if (loadError) {
    return <div className={cn('not-prose my-6 rounded-2xl border border-dashed p-6 text-sm text-fd-muted-foreground', className)}>加载乘区校验数据失败：{loadError}。请运行 <code>pnpm docs:generate</code>。</div>;
  }
  if (!graph || !relics) {
    return <div className={cn('not-prose my-6 rounded-2xl border p-8 text-center text-sm text-fd-muted-foreground', className)}>正在加载 Graph 并运行 Mechanics 分析…</div>;
  }

  return (
    <div className={cn('not-prose my-4 space-y-4', className)}>
      <div className="rounded-2xl border bg-fd-card p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">{graph.topic.name}</h2>
            <p className="mt-1 text-sm text-fd-muted-foreground">{rows.length} 件藏品 · 三方差异 {mismatchCount} 件</p>
            <p className="mt-1 text-xs text-fd-muted-foreground">Graph 来自图谱导出；Mechanics 由当前程序即时分析；历史版本由人工维护。</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {changedIds.length > 0 ? <span className="text-xs text-fd-muted-foreground">已修改 {changedIds.length} 件</span> : null}
            <button type="button" disabled={!history} onClick={() => { void copyHistory(); }} className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40">
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}{copied ? '已复制' : '复制 JSON'}
            </button>
            <button type="button" disabled={!history} onClick={() => downloadJson(`${topicId}.json`, historyJson)} className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-40">
              <Download className="size-3.5" />下载 JSON
            </button>
          </div>
        </div>
        {historyError ? <p className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-600 dark:text-red-300">历史版本格式错误：{historyError}。已禁用草稿写入、复制和下载。</p> : null}
        {orphanCount > 0 ? <p className="mt-2 text-xs text-amber-600 dark:text-amber-300">存在 {orphanCount} 条当前 GameData 中已不存在的历史记录；导出时会原样保留在末尾。</p> : null}
        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">{([['all', `全部 ${rows.length}`], ['mismatch', `差异 ${mismatchCount}`], ['match', `一致 ${rows.length - mismatchCount}`]] as Array<[ValidationFilter, string]>).map(([value, label]) => <button key={value} type="button" onClick={() => setFilter(value)} className={cn('rounded-full border px-3 py-1 text-xs', filter === value ? 'border-fd-primary bg-fd-primary/10 text-fd-primary' : 'text-fd-muted-foreground hover:text-fd-foreground')}>{label}</button>)}</div>
          <label className="relative block w-full max-w-md"><Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fd-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索藏品名、ID、原文…" className="w-full rounded-xl border bg-fd-background py-2 pr-9 pl-9 text-sm outline-none focus:border-fd-primary" />{query ? <button type="button" aria-label="清空搜索" onClick={() => setQuery('')} className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"><X className="size-3.5" /></button> : null}</label>
        </div>
      </div>
      <section className="rounded-2xl border bg-fd-card p-4 shadow-sm">
        <div className="mb-3"><h2 className="text-sm font-semibold">关卡上下文</h2><p className="mt-1 text-xs text-fd-muted-foreground">先选择区域，再选择该区域下的关卡；当前静态校验仍按“忽略生效条件”口径对照。</p></div>
        <RoguelikeStageSelector data={stageOptions.data} loading={stageOptions.loading} selectedRegionId={stageOptions.selectedRegionId} selectedStageId={stageOptions.selectedStageId} onRegionChange={stageOptions.selectRegion} onStageChange={stageOptions.selectStage} />
        {stageOptions.error ? <p className="mt-3 text-xs text-red-500">加载关卡选项失败：{stageOptions.error}</p> : null}
      </section>
      <div className="overflow-hidden rounded-2xl border bg-fd-card"><table className="w-full table-fixed border-collapse text-sm select-text"><colgroup><col className="w-[18%]" /><col className="w-[19%]" /><col className="w-[22%]" /><col className="w-[22%]" /><col className="w-[19%]" /></colgroup><thead><tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground"><th className="px-2 py-2.5 font-medium sm:px-3">藏品</th><th className="px-2 py-2.5 font-medium sm:px-3">图谱结果</th><th className="px-2 py-2.5 font-medium sm:px-3">程序结果</th><th className="px-2 py-2.5 font-medium sm:px-3">历史版本</th><th className="px-2 py-2.5 font-medium sm:px-3">对照</th></tr></thead><tbody>
        {filtered.map((row) => <ValidationTableRow key={row.id} row={row} expanded={expanded.has(row.id)} comments={zoneComments} historyDisabled={!history} changed={changedIds.includes(row.id)} saved={savedId === row.id} onSave={() => saveToHistory(row)} onToggle={() => setExpandedIds((previous) => previous.includes(row.id) ? previous.filter((id) => id !== row.id) : [...previous, row.id])} />)}
        {filtered.length === 0 ? <tr><td colSpan={5} className="px-4 py-10 text-center text-fd-muted-foreground">没有匹配的藏品。</td></tr> : null}
      </tbody></table></div>
    </div>
  );
}

/** 严格五列表格中的单行与 Graph 详情。 */
function ValidationTableRow({ row, expanded, comments, historyDisabled, changed, saved, onSave, onToggle }: {
  row: ValidationRow;
  expanded: boolean;
  comments: Readonly<Record<string, string>>;
  historyDisabled: boolean;
  changed: boolean;
  saved: boolean;
  onSave: () => void;
  onToggle: () => void;
}) {
  return <>
    <tr className={cn('border-b align-top hover:bg-fd-accent/30', expanded && 'bg-fd-accent/20')}>
      <td className="px-2 py-3 sm:px-3"><div className="flex min-w-0 items-start gap-1 sm:gap-2"><button type="button" onClick={onToggle} aria-label={expanded ? `收起 ${row.name}` : `展开 ${row.name}`} className="mt-0.5 shrink-0 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"><ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} /></button><div className="min-w-0"><span className="break-words font-medium">{row.name}</span><code className="mt-1 block break-all text-[0.7rem] text-fd-muted-foreground">{row.id}</code></div></div></td>
      <td className="px-2 py-3 sm:px-3"><GraphZoneBadges zoneIds={row.graph?.zones ?? []} comments={comments} emptyLabel="-" /></td>
      <td className="group relative px-2 py-3 pr-7 sm:px-3 sm:pr-9" tabIndex={0}><ZoneItemBadges items={row.mechanics.items} comments={comments} emptyLabel="-" /><button type="button" disabled={historyDisabled} onClick={onSave} title="存入历史版本草稿" aria-label={`将 ${row.name} 的程序结果存入历史版本草稿`} className="absolute top-2 right-1 rounded p-1 text-fd-muted-foreground opacity-0 transition-opacity hover:bg-fd-accent hover:text-fd-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100 group-focus-within:opacity-100 disabled:cursor-not-allowed disabled:opacity-0 sm:right-2">{saved ? <Check className="size-3.5 text-emerald-500" /> : <Save className="size-3.5" />}</button></td>
      <td className="px-2 py-3 sm:px-3"><div className="space-y-1.5"><ZoneItemBadges items={row.history?.zones ?? []} comments={comments} emptyLabel="-" />{changed ? <span className="block text-[0.7rem] text-fd-muted-foreground">草稿</span> : null}</div></td>
      <td className="px-2 py-3 sm:px-3"><ComparisonBadge matches={row.comparison.matches} /></td>
    </tr>
    {expanded ? <tr className="border-b bg-fd-muted/10"><td colSpan={5} className="px-4 py-4"><p className="mb-3 text-sm leading-relaxed text-fd-muted-foreground">{row.usage ?? '无藏品原文'}</p><GraphEffectDetails item={row.graph} comments={comments} /></td></tr> : null}
  </>;
}
