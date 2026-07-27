/**
 * 藏品乘区与生效条件交互表：支持搜索、乘区多选过滤，以及行展开查看 buffs 原数据。
 * 数据按主题从 /data/relic-zones/{topicId}.json 拉取，避免 RSC 序列化超大 JSON 触发水合问题。
 */

'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import type {
  WrappedRelicItem,
  WrappedRelicTopicArtifact,
} from '@arkrog/arknights-knowledge-graph/formula';
import { CombatPreviewPanel } from '@/components/combat-preview-panel';
import { cn } from '@/lib/cn';

/** 导出 JSON 中的乘区摘要。 */
export interface RelicZoneRef {
  id: string;
  symbol: string;
  name: string;
}

/** 导出 JSON 中的乘区预测。 */
export interface RelicZonePrediction {
  id: string;
  symbol: string;
  name: string;
  formula?: string;
  status?: string;
  reason: string;
  ruleId: string;
  evidencePaths?: string[];
}

/** 导出 JSON 中单条 buff / effect。 */
export interface RelicZoneEffect {
  effectId: string;
  source: string;
  buffIndex: number;
  key: string;
  blackboard: Array<{
    key: string;
    value: number;
    valueStr: string | null;
  }>;
  parameters: string;
  mechanic: {
    name: string;
    events: string[];
    componentTypes: string[];
  };
  condition: string;
  classification: string;
  evidenceStatuses: string[];
  predictions: RelicZonePrediction[];
  unclassifiedReason: string | null;
  jsonPath: string;
}

/** 导出 JSON 中的一件藏品。 */
export interface RelicZoneItem {
  id: string;
  name: string;
  rarity: string;
  sortId: number;
  usage: string | null;
  description: string | null;
  conditions: string[];
  zones: RelicZoneRef[];
  effectCount: number;
  effects: RelicZoneEffect[];
}

/** 传给表格的精简数据集。 */
export interface RelicZoneTableData {
  topic: { id: string; name: string };
  items: RelicZoneItem[];
}

interface RelicZoneTableProps {
  /** 集成战略主题 ID，例如 rogue_6。 */
  topicId: string;
  className?: string;
}

/** 从全部藏品中收集可选乘区，按 symbol 稳定排序。 */
function collectZones(items: RelicZoneItem[]): RelicZoneRef[] {
  const map = new Map<string, RelicZoneRef>();
  for (const item of items) {
    for (const zone of item.zones) {
      if (!map.has(zone.id)) map.set(zone.id, zone);
    }
  }
  return [...map.values()].sort((left, right) =>
    left.symbol.localeCompare(right.symbol),
  );
}

/** 是否命中搜索词（藏品名 / 原文 / 描述 / id）。 */
function matchesSearch(item: RelicZoneItem, query: string): boolean {
  if (!query) return true;
  const haystack = [
    item.name,
    item.id,
    item.usage ?? '',
    item.description ?? '',
    ...item.zones.map((zone) => `${zone.symbol} ${zone.name}`),
  ]
    .join('\n')
    .toLowerCase();
  return haystack.includes(query);
}

/** 乘区过滤哨兵：表示「无加成乘区」的藏品。 */
const ZONE_FILTER_NONE = '__NONE__';

/** 是否命中已选乘区（多选为 OR：命中任一即可；含「无乘区」）。 */
function matchesZones(item: RelicZoneItem, selected: ReadonlySet<string>): boolean {
  if (selected.size === 0) return true;
  if (selected.has(ZONE_FILTER_NONE) && item.zones.length === 0) return true;
  return item.zones.some((zone) => selected.has(zone.id));
}

/** 乘区徽章列表。 */
function ZoneBadges({ zones }: { zones: RelicZoneRef[] }) {
  if (zones.length === 0) {
    return <span className="text-fd-muted-foreground">—</span>;
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {zones.map((zone) => (
        <span
          key={zone.id}
          className="inline-flex items-center gap-1 rounded-md border bg-fd-muted/50 px-1.5 py-0.5 text-xs"
          title={`${zone.name}（${zone.id}）`}
        >
          <span className="font-mono font-medium text-fd-primary">{zone.symbol}</span>
          <span className="text-fd-muted-foreground">{zone.name}</span>
        </span>
      ))}
    </div>
  );
}

/** 展开区：逐条展示 buff / effect 原数据。 */
function EffectDetails({ effects }: { effects: RelicZoneEffect[] }) {
  if (effects.length === 0) {
    return (
      <p className="text-sm text-fd-muted-foreground">该藏品没有导出的 buffs。</p>
    );
  }

  return (
    <div className="space-y-3">
      {effects.map((effect) => (
        <div
          key={effect.effectId}
          className="overflow-hidden rounded-xl border bg-fd-background"
        >
          <div className="flex flex-wrap items-center gap-2 border-b bg-fd-muted/30 px-3 py-2 text-xs">
            <code className="font-mono text-fd-primary">{effect.key}</code>
            <span className="text-fd-muted-foreground">#{effect.buffIndex}</span>
            <span className="rounded border px-1.5 py-0.5">{effect.classification}</span>
            <span className="text-fd-muted-foreground">{effect.source}</span>
          </div>
          <div className="grid gap-3 p-3 text-sm md:grid-cols-2">
            <Field label="生效条件" value={effect.condition || '—'} />
            <Field label="参数摘要" value={effect.parameters || '—'} />
            <Field label="模板" value={effect.mechanic.name || '—'} />
            <Field
              label="事件"
              value={
                effect.mechanic.events.length > 0
                  ? effect.mechanic.events.join(', ')
                  : '—'
              }
            />
            <Field
              label="组件"
              value={
                effect.mechanic.componentTypes.length > 0
                  ? effect.mechanic.componentTypes.join(', ')
                  : '—'
              }
            />
            <Field label="JSON Path">
              <code className="break-all font-mono text-xs">{effect.jsonPath}</code>
            </Field>
            {effect.unclassifiedReason ? (
              <Field label="未分类原因" value={effect.unclassifiedReason} />
            ) : null}
          </div>
          <div className="border-t px-3 py-2">
            <p className="mb-2 text-xs font-medium text-fd-muted-foreground">
              blackboard
            </p>
            {effect.blackboard.length === 0 ? (
              <p className="text-sm text-fd-muted-foreground">空</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[24rem] border-collapse text-xs">
                  <thead>
                    <tr className="border-b text-left text-fd-muted-foreground">
                      <th className="px-2 py-1.5 font-medium">key</th>
                      <th className="px-2 py-1.5 font-medium">value</th>
                      <th className="px-2 py-1.5 font-medium">valueStr</th>
                    </tr>
                  </thead>
                  <tbody>
                    {effect.blackboard.map((entry, index) => (
                      <tr key={`${entry.key}-${index}`} className="border-b last:border-b-0">
                        <td className="px-2 py-1.5 font-mono">{entry.key}</td>
                        <td className="px-2 py-1.5 font-mono">{entry.value}</td>
                        <td className="px-2 py-1.5 font-mono">
                          {entry.valueStr ?? 'null'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {effect.predictions.length > 0 ? (
            <div className="border-t px-3 py-2">
              <p className="mb-2 text-xs font-medium text-fd-muted-foreground">
                predictions
              </p>
              <pre className="overflow-x-auto rounded-lg bg-fd-muted/40 p-2 text-xs">
                {JSON.stringify(effect.predictions, null, 2)}
              </pre>
            </div>
          ) : null}
          <details className="border-t">
            <summary className="cursor-pointer px-3 py-2 text-xs text-fd-muted-foreground hover:text-fd-foreground">
              查看完整 effect JSON
            </summary>
            <pre className="overflow-x-auto border-t bg-fd-muted/20 p-3 text-xs">
              {JSON.stringify(effect, null, 2)}
            </pre>
          </details>
        </div>
      ))}
    </div>
  );
}

/** 展开区内的标签字段。 */
function Field({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-0.5 text-xs text-fd-muted-foreground">{label}</p>
      {children ?? (
        <p className="break-words text-sm leading-relaxed">{value}</p>
      )}
    </div>
  );
}

/** 单行藏品：多选 + 主信息行 + 可选展开的 buffs 详情行。 */
function RelicRow({
  item,
  wrappedItem,
  expanded,
  selected,
  onToggleExpand,
  onToggleSelect,
  onToggleEnable,
  onLayerChange,
}: {
  item: RelicZoneItem;
  wrappedItem: WrappedRelicItem;
  expanded: boolean;
  selected: boolean;
  onToggleExpand: () => void;
  onToggleSelect: () => void;
  onToggleEnable: () => void;
  onLayerChange: (layer: number) => void;
}) {
  return (
    <>
      <tr
        className={cn(
          'border-b align-top transition-colors hover:bg-fd-accent/40',
          expanded && 'bg-fd-accent/25',
          selected && 'bg-fd-primary/5',
        )}
      >
        <td className="px-3 py-3">
          <input
            type="checkbox"
            checked={selected}
            onChange={onToggleSelect}
            aria-label={`选择藏品 ${item.name}`}
            className="size-4 accent-[var(--color-fd-primary)]"
          />
        </td>
        <td className="px-3 py-3">
          <input
            type="checkbox"
            checked={wrappedItem.enable}
            disabled={!selected}
            onChange={onToggleEnable}
            aria-label={`启用藏品 ${item.name}`}
            className="size-4 accent-[var(--color-fd-primary)] disabled:opacity-40"
          />
        </td>
        <td className="px-3 py-3">
          <input
            type="number"
            min={0}
            step={1}
            value={wrappedItem.layer}
            disabled={!selected}
            onChange={(event) => onLayerChange(Math.max(0, Math.trunc(Number(event.target.value) || 0)))}
            aria-label={`${item.name} 生效层数`}
            className="w-16 rounded-md border bg-fd-background px-2 py-1 font-mono text-xs disabled:opacity-40"
          />
        </td>
        <td className="px-3 py-3">
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={expanded ? `收起 ${item.name}` : `展开 ${item.name}`}
            onClick={onToggleExpand}
            className="rounded p-1 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground"
          >
            <ChevronDown
              className={cn(
                'size-4 transition-transform',
                expanded && 'rotate-180',
              )}
            />
          </button>
        </td>
        <td className="px-3 py-3">
          <button
            type="button"
            onClick={onToggleExpand}
            className="w-full text-left"
          >
            <span className="font-medium">{item.name}</span>
            <span className="mt-1 block font-mono text-[0.7rem] text-fd-muted-foreground">
              {item.id}
            </span>
          </button>
        </td>
        <td className="px-3 py-3">
          <button
            type="button"
            onClick={onToggleExpand}
            className="w-full text-left leading-relaxed text-fd-muted-foreground"
          >
            {item.usage ?? '—'}
          </button>
        </td>
        <td className="px-3 py-3">
          <button type="button" onClick={onToggleExpand} className="w-full text-left">
            <ZoneBadges zones={item.zones} />
          </button>
        </td>
      </tr>
      {expanded ? (
        <tr className="border-b last:border-b-0 bg-fd-muted/15">
          <td colSpan={7} className="px-4 py-4">
            <div className="mb-3 flex flex-wrap gap-3 text-xs text-fd-muted-foreground">
              <span>稀有度：{item.rarity}</span>
              <span>buff 数：{item.effectCount}</span>
              {item.description ? (
                <span className="basis-full text-[0.8125rem] leading-relaxed">
                  背景：{item.description}
                </span>
              ) : null}
            </div>
            <EffectDetails effects={item.effects} />
          </td>
        </tr>
      ) : null}
    </>
  );
}

/** 藏品乘区高级表格。 */
export function RelicZoneTable({ topicId, className }: RelicZoneTableProps) {
  const [data, setData] = useState<RelicZoneTableData | null>(null);
  /** 原始包装藏品是公式输入；乘区 JSON 只负责表格展示。 */
  const [wrappedRelics, setWrappedRelics] = useState<WrappedRelicItem[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [selectedZoneIds, setSelectedZoneIds] = useState<string[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  /** 参与公式求值的多选藏品 ID。 */
  const [selectedRelicIds, setSelectedRelicIds] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    // 按主题拉取静态 JSON；切换主题时取消上一次请求结果。
    void Promise.all([
      fetch(`/data/relic-zones/${topicId}.json`),
      fetch(`/data/wrapped-relics/${topicId}.json`),
    ])
      .then(async ([zoneResponse, wrappedResponse]) => {
        if (!zoneResponse.ok || !wrappedResponse.ok) {
          throw new Error(`HTTP zones=${zoneResponse.status}, wrapped=${wrappedResponse.status}`);
        }
        return Promise.all([
          zoneResponse.json() as Promise<RelicZoneTableData>,
          wrappedResponse.json() as Promise<WrappedRelicTopicArtifact>,
        ]);
      })
      .then(([payload, wrappedPayload]) => {
        if (cancelled) return;
        const wrappedIds = new Set(wrappedPayload.items.map((item) => item.id));
        const missing = (payload.items ?? []).find((item) => !wrappedIds.has(item.id));
        if (missing) throw new Error(`包装藏品缺少 ${missing.id}`);
        // 请求成功后再清理旧错误，避免 effect 内同步 setState 触发级联渲染。
        setLoadError(null);
        setData({
          topic: payload.topic,
          items: payload.items ?? [],
        });
        setWrappedRelics(wrappedPayload.items ?? []);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : String(error);
        setLoadError(message);
      });

    return () => {
      cancelled = true;
    };
  }, [topicId]);

  const selectedZones = useMemo(
    () => new Set(selectedZoneIds),
    [selectedZoneIds],
  );
  const expandedIdSet = useMemo(() => new Set(expandedIds), [expandedIds]);
  const selectedRelicIdSet = useMemo(
    () => new Set(selectedRelicIds),
    [selectedRelicIds],
  );
  const wrappedRelicMap = useMemo(
    () => new Map(wrappedRelics.map((item) => [item.id, item])),
    [wrappedRelics],
  );

  const zones = useMemo(
    () => (data ? collectZones(data.items) : []),
    [data],
  );
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.items.filter(
      (item) =>
        matchesSearch(item, normalizedQuery) &&
        matchesZones(item, selectedZones),
    );
  }, [data, normalizedQuery, selectedZones]);

  /** 当前多选藏品的完整对象，供战斗预览面板求值。 */
  const selectedRelics = useMemo(() => {
    return wrappedRelics.filter((item) => selectedRelicIdSet.has(item.id));
  }, [wrappedRelics, selectedRelicIdSet]);

  const allFilteredSelected =
    filtered.length > 0 && filtered.every((item) => selectedRelicIdSet.has(item.id));

  /** 切换某个乘区的选中状态。 */
  function toggleZone(zoneId: string) {
    setSelectedZoneIds((prev) =>
      prev.includes(zoneId)
        ? prev.filter((id) => id !== zoneId)
        : [...prev, zoneId],
    );
  }

  /** 切换行展开。 */
  function toggleExpanded(itemId: string) {
    setExpandedIds((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  }

  /** 切换藏品多选。 */
  function toggleRelicSelected(itemId: string) {
    setSelectedRelicIds((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  }

  /** 切换已选藏品的独立启用状态。 */
  function toggleRelicEnabled(itemId: string) {
    setWrappedRelics((previous) =>
      previous.map((item) =>
        item.id === itemId ? { ...item, enable: !item.enable } : item,
      ),
    );
  }

  /** 更新用户层数；只替换包装外层，绝不修改原始 relic/charBuffs。 */
  function updateRelicLayer(itemId: string, layer: number) {
    setWrappedRelics((previous) =>
      previous.map((item) => (item.id === itemId ? { ...item, layer } : item)),
    );
  }

  /** 全选 / 取消全选当前过滤结果。 */
  function toggleSelectFiltered() {
    if (allFilteredSelected) {
      const filteredIds = new Set(filtered.map((item) => item.id));
      setSelectedRelicIds((prev) => prev.filter((id) => !filteredIds.has(id)));
      return;
    }
    setSelectedRelicIds((prev) => {
      const next = new Set(prev);
      for (const item of filtered) next.add(item.id);
      return [...next];
    });
  }

  if (loadError) {
    return (
      <div
        className={cn(
          'not-prose my-6 rounded-2xl border border-dashed px-4 py-8 text-center text-sm text-fd-muted-foreground',
          className,
        )}
      >
        加载主题 <code>{topicId}</code> 失败：{loadError}。请先运行{' '}
        <code>pnpm graph:export -- {topicId}</code>，再执行{' '}
        <code>pnpm docs:generate</code>。
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className={cn(
          'not-prose my-6 rounded-2xl border px-4 py-10 text-center text-sm text-fd-muted-foreground',
          className,
        )}
      >
        正在加载藏品乘区数据…
      </div>
    );
  }

  return (
    <div className={cn('not-prose my-4 space-y-4', className)}>
      <CombatPreviewPanel topicId={topicId} selectedRelics={selectedRelics} />

      <div className="rounded-2xl border bg-fd-card p-4 text-fd-card-foreground shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">{data.topic.name}</h2>
            <p className="mt-0.5 text-sm text-fd-muted-foreground">
              显示 {filtered.length} / {data.items.length} 件藏品
              {selectedZoneIds.length > 0
                ? ` · 已选 ${selectedZoneIds.length} 个乘区`
                : ''}
              {selectedRelicIds.length > 0
                ? ` · 已选 ${selectedRelicIds.length} 件藏品参与计算`
                : ''}
            </p>
          </div>
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fd-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索藏品名、原文描述、乘区…"
              className="w-full rounded-xl border bg-fd-background py-2 pr-9 pl-9 text-sm outline-none focus:border-fd-primary"
            />
            {query ? (
              <button
                type="button"
                aria-label="清空搜索"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground"
                onClick={() => setQuery('')}
              >
                <X className="size-3.5" />
              </button>
            ) : null}
          </label>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-fd-muted-foreground">
              加成乘区过滤（多选）
            </p>
            <div className="flex items-center gap-3">
              {selectedRelicIds.length > 0 ? (
                <button
                  type="button"
                  className="text-xs text-fd-primary hover:underline"
                  onClick={() => setSelectedRelicIds([])}
                >
                  清除藏品选择
                </button>
              ) : null}
              {selectedZoneIds.length > 0 ? (
                <button
                  type="button"
                  className="text-xs text-fd-primary hover:underline"
                  onClick={() => setSelectedZoneIds([])}
                >
                  清除乘区筛选
                </button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={selectedZones.has(ZONE_FILTER_NONE)}
              onClick={() => toggleZone(ZONE_FILTER_NONE)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors',
                selectedZones.has(ZONE_FILTER_NONE)
                  ? 'border-fd-primary bg-fd-primary/10 text-fd-primary'
                  : 'bg-fd-background text-fd-muted-foreground hover:border-fd-primary/40 hover:text-fd-foreground',
              )}
            >
              <span className="font-mono font-medium">—</span>
              <span>无加成乘区</span>
            </button>
            {zones.map((zone) => {
              const active = selectedZones.has(zone.id);
              return (
                <button
                  key={zone.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleZone(zone.id)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors',
                    active
                      ? 'border-fd-primary bg-fd-primary/10 text-fd-primary'
                      : 'bg-fd-background text-fd-muted-foreground hover:border-fd-primary/40 hover:text-fd-foreground',
                  )}
                >
                  <span className="font-mono font-medium">{zone.symbol}</span>
                  <span>{zone.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-fd-card text-fd-card-foreground">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[48rem] border-collapse text-sm">
            <thead>
              <tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground">
                <th className="w-10 px-3 py-2.5">
                  <input
                    type="checkbox"
                    checked={allFilteredSelected}
                    onChange={toggleSelectFiltered}
                    aria-label="全选当前过滤结果"
                    className="size-4 accent-[var(--color-fd-primary)]"
                  />
                </th>
                <th className="w-14 px-3 py-2.5 font-medium">启用</th>
                <th className="w-20 px-3 py-2.5 font-medium">层数</th>
                <th className="w-10 px-3 py-2.5" aria-hidden />
                <th className="w-[18%] px-3 py-2.5 font-medium">藏品名</th>
                <th className="px-3 py-2.5 font-medium">原文描述</th>
                <th className="w-[28%] px-3 py-2.5 font-medium">加成乘区</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const wrappedItem = wrappedRelicMap.get(item.id);
                // 加载阶段已验证完整性；这里保留空保护以避免异常 JSON 破坏整个页面。
                if (!wrappedItem) return null;
                return (
                  <RelicRow
                    key={item.id}
                    item={item}
                    wrappedItem={wrappedItem}
                    expanded={expandedIdSet.has(item.id)}
                    selected={selectedRelicIdSet.has(item.id)}
                    onToggleExpand={() => toggleExpanded(item.id)}
                    onToggleSelect={() => toggleRelicSelected(item.id)}
                    onToggleEnable={() => toggleRelicEnabled(item.id)}
                    onLayerChange={(layer) => updateRelicLayer(item.id, layer)}
                  />
                );
              })}
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-10 text-center text-sm text-fd-muted-foreground"
                  >
                    没有匹配的藏品，试试调整搜索词或乘区筛选。
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
