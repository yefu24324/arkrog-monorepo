/** 当前属性版本的藏品路由、筛选和 FormulaBook 预览表。 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import type {
  ExportedRelicsReport,
  ExportedRoguelikeTopicReport,
  WrappedRelicItem,
} from '@arkrog/arknights-gamedata-report';
import type { FormulaWritableZoneId } from '@arkrog/arknights-knowledge-graph/formula';
import {
  routeRelicBuffToZones,
  type RelicBuffZoneRoute,
} from '@arkrog/arknights-knowledge-graph/mechanics';
import { CombatPreviewPanel } from './combat-preview-panel';
import { cn } from '../lib/cn';
import {
  collectFormulaZoneComments,
  loadFormulaBookPage,
} from '../lib/formula-book-runtime';

/** 无属性 zone 的筛选占位 ID。 */
const ZONE_FILTER_NONE = '__none__';

/** 单条原始 buff 的当前属性路由结果。 */
interface RoutedRelicEffect {
  buffIndex: number;
  route: RelicBuffZoneRoute;
  source: string;
}

/** 一件包装藏品及其现场路由得到的属性分析。 */
interface RoutedRelicItem {
  effects: RoutedRelicEffect[];
  item: WrappedRelicItem;
  zones: FormulaWritableZoneId[];
}

/** 组件只需要主题 ID。 */
interface RelicZoneTableProps {
  topicId: string;
  className?: string;
}

/** 主题异步加载状态，topicId 用于屏蔽切换主题时的旧结果。 */
interface TopicLoadState {
  topicId: string;
  status: 'loading' | 'ready' | 'error';
  error: string | null;
}

/** 对一件包装藏品的直接 buff 和 charBuffData 现场执行属性路由。 */
function routeWrappedRelic(item: WrappedRelicItem, topicId: string): RoutedRelicItem {
  const effects: RoutedRelicEffect[] = [];
  item.relic.buffs.forEach((buff, buffIndex) => {
    effects.push({
      source: 'relics',
      buffIndex,
      route: routeRelicBuffToZones({
        effectId: `effect:${topicId}:${item.id}:${buffIndex}`,
        source: 'relics',
        buffIndex,
        key: buff.key,
        blackboard: buff.blackboard,
        jsonPath: `$.details.${topicId}.relics[${JSON.stringify(item.id)}].buffs[${buffIndex}]`,
      }),
    });
  });
  for (const characterBuff of item.charBuffs) {
    (characterBuff.buffs ?? []).forEach((buff, buffIndex) => {
      effects.push({
        source: `charBuffData:${characterBuff.id}`,
        buffIndex,
        route: routeRelicBuffToZones({
          effectId: `effect:${topicId}:charBuffData:${characterBuff.id}:${buffIndex}`,
          source: `charBuffData:${characterBuff.id}`,
          buffIndex,
          key: buff.key,
          blackboard: buff.blackboard,
          jsonPath: `$.details.${topicId}.charBuffData[${JSON.stringify(characterBuff.id)}].buffs[${buffIndex}]`,
        }),
      });
    });
  }
  return {
    item,
    effects,
    zones: [...new Set(effects.flatMap((effect) => effect.route.zoneIds))],
  };
}

/** 将黑板压缩为便于浏览和搜索的文本。 */
function summarizeBlackboard(effect: RoutedRelicEffect): string {
  return effect.route.effect.blackboard
    .map((entry) => `${entry.key}=${entry.valueStr ?? entry.value}`)
    .join(', ');
}

/** 判断藏品是否命中名称、ID、原文、黑板或乘区搜索。 */
function matchesSearch(entry: RoutedRelicItem, query: string): boolean {
  if (!query) return true;
  const text = [
    entry.item.id,
    entry.item.name,
    entry.item.relic.usage,
    ...entry.zones,
    ...entry.effects.flatMap((effect) => [
      effect.route.effect.key,
      summarizeBlackboard(effect),
    ]),
  ].join(' ').toLowerCase();
  return text.includes(query);
}

/** 判断藏品是否满足全部已选 zone 筛选。 */
function matchesZones(entry: RoutedRelicItem, selected: ReadonlySet<string>): boolean {
  if (selected.size === 0) return true;
  for (const zoneId of selected) {
    if (zoneId === ZONE_FILTER_NONE) {
      if (entry.zones.length > 0) return false;
    } else if (!entry.zones.includes(zoneId as FormulaWritableZoneId)) {
      return false;
    }
  }
  return true;
}

/** 使用 FormulaZoneId 注释显示一个或多个属性 zone。 */
function ZoneBadges({
  zones,
  comments,
}: {
  zones: readonly FormulaWritableZoneId[];
  comments: Readonly<Record<string, string>>;
}) {
  if (zones.length === 0) {
    return <span className="text-xs text-fd-muted-foreground">—</span>;
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {zones.map((zoneId) => (
        <span
          key={zoneId}
          className="inline-flex flex-col rounded-lg border border-fd-primary/25 bg-fd-primary/5 px-2 py-1"
        >
          <span className="text-xs font-medium text-fd-primary">{comments[zoneId] ?? zoneId}</span>
          <code className="text-[0.6rem] text-fd-muted-foreground">{zoneId}</code>
        </span>
      ))}
    </div>
  );
}

/** 分类状态中文标签。 */
function classificationLabel(route: RelicBuffZoneRoute): string {
  if (route.classification === 'predicted') return '已路由';
  if (route.classification === 'unknown') return '未知';
  return '不适用';
}

/** 展示单件藏品的全部原始 buff 与规则证据。 */
function EffectDetails({
  effects,
  comments,
}: {
  effects: readonly RoutedRelicEffect[];
  comments: Readonly<Record<string, string>>;
}) {
  if (effects.length === 0) {
    return <p className="text-xs text-fd-muted-foreground">该藏品没有可路由 buff。</p>;
  }
  return (
    <div className="space-y-3">
      {effects.map((effect) => {
        const prediction = effect.route.predictions[0];
        return (
          <article
            key={effect.route.effect.effectId}
            className="rounded-xl border bg-fd-background p-3"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-mono text-xs font-semibold">{effect.route.effect.key}</p>
                <p className="mt-1 text-[0.65rem] text-fd-muted-foreground">
                  {effect.source} · buffs[{effect.buffIndex}]
                </p>
              </div>
              <span className="rounded-full border px-2 py-0.5 text-[0.65rem] text-fd-muted-foreground">
                {classificationLabel(effect.route)}
              </span>
            </div>
            <p className="mt-2 break-all font-mono text-[0.7rem] leading-5 text-fd-muted-foreground">
              {summarizeBlackboard(effect) || '无黑板参数'}
            </p>
            <div className="mt-2">
              <ZoneBadges zones={effect.route.zoneIds} comments={comments} />
            </div>
            <p className="mt-2 text-xs leading-5 text-fd-muted-foreground">
              {prediction?.reason ?? effect.route.unclassifiedReason}
            </p>
            <p className="mt-1 break-all font-mono text-[0.65rem] text-fd-muted-foreground/80">
              {prediction?.evidencePath ?? effect.route.effect.jsonPath}
            </p>
          </article>
        );
      })}
    </div>
  );
}

/** 单行藏品选择、启用、层数和路由详情。 */
function RelicRow({
  entry,
  comments,
  expanded,
  selected,
  onToggleExpand,
  onToggleSelect,
  onToggleEnable,
  onLayerChange,
}: {
  entry: RoutedRelicItem;
  comments: Readonly<Record<string, string>>;
  expanded: boolean;
  selected: boolean;
  onToggleExpand: () => void;
  onToggleSelect: () => void;
  onToggleEnable: () => void;
  onLayerChange: (layer: number) => void;
}) {
  const item = entry.item;
  return (
    <>
      <tr className={cn('border-b align-top hover:bg-fd-accent/30', selected && 'bg-fd-primary/5')}>
        <td className="select-none px-3 py-3">
          <input
            type="checkbox"
            checked={selected}
            onChange={onToggleSelect}
            aria-label={`选择藏品 ${item.name}`}
            className="size-4 select-none accent-[var(--color-fd-primary)]"
          />
        </td>
        <td className="select-none px-3 py-3">
          <input
            type="checkbox"
            checked={item.enable}
            disabled={!selected}
            onChange={onToggleEnable}
            aria-label={`启用藏品 ${item.name}`}
            className="size-4 select-none accent-[var(--color-fd-primary)] disabled:opacity-40"
          />
        </td>
        <td className="select-none px-3 py-3">
          <input
            type="number"
            min={0}
            step={1}
            value={item.layer}
            disabled={!selected}
            onChange={(event) => onLayerChange(
              Math.max(0, Math.trunc(Number(event.target.value) || 0)),
            )}
            aria-label={`${item.name} 生效层数`}
            className="w-16 select-none rounded-md border bg-fd-background px-2 py-1 font-mono text-xs disabled:opacity-40"
          />
        </td>
        <td className="select-none px-3 py-3">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={onToggleExpand}
            className="select-none rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"
          >
            <ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} />
          </button>
        </td>
        <td className="cursor-text px-3 py-3">
          <div className="w-full select-text text-left">
            <span className="font-medium">{item.name}</span>
            <code className="mt-1 block text-[0.65rem] text-fd-muted-foreground">{item.id}</code>
          </div>
        </td>
        <td className="px-3 py-3 text-fd-muted-foreground">{item.relic.usage || '—'}</td>
        <td className="px-3 py-3">
          <ZoneBadges zones={entry.zones} comments={comments} />
        </td>
      </tr>
      {expanded ? (
        <tr className="border-b bg-fd-muted/10">
          <td colSpan={7} className="px-4 py-4">
            <EffectDetails effects={entry.effects} comments={comments} />
          </td>
        </tr>
      ) : null}
    </>
  );
}

/** 属性藏品乘区表。 */
export function RelicZoneTable({ topicId, className }: RelicZoneTableProps) {
  const [wrappedRelics, setWrappedRelics] = useState<WrappedRelicItem[]>([]);
  const [topicName, setTopicName] = useState(topicId);
  const [zoneComments, setZoneComments] = useState<Readonly<Record<string, string>>>({});
  const [loadState, setLoadState] = useState<TopicLoadState>({
    topicId,
    status: 'loading',
    error: null,
  });
  const [query, setQuery] = useState('');
  const [selectedZoneIds, setSelectedZoneIds] = useState<string[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const [selectedRelicIds, setSelectedRelicIds] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      fetch(`/gamedata-report/roguelike/${topicId}/relics.json`).then(async (response) => {
        if (!response.ok) throw new Error(`relics HTTP ${response.status}`);
        return (await response.json()) as ExportedRelicsReport;
      }),
      fetch(`/gamedata-report/roguelike/${topicId}/topic.json`).then(async (response) => {
        if (!response.ok) throw new Error(`topic HTTP ${response.status}`);
        return (await response.json()) as ExportedRoguelikeTopicReport;
      }),
      loadFormulaBookPage(),
    ]).then(([relics, topicReport, formulaData]) => {
      if (cancelled) return;
      setWrappedRelics(relics);
      setTopicName(topicReport.topic.name);
      setZoneComments(collectFormulaZoneComments(formulaData));
      setSelectedZoneIds([]);
      setExpandedIds([]);
      setSelectedRelicIds([]);
      setLoadState({ topicId, status: 'ready', error: null });
    }).catch((error: unknown) => {
      if (cancelled) return;
      setLoadState({
        topicId,
        status: 'error',
        error: error instanceof Error ? error.message : String(error),
      });
    });
    return () => {
      cancelled = true;
    };
  }, [topicId]);

  // topicId 不一致表示新主题仍在加载，不能短暂展示上一主题的数据。
  const loading = loadState.topicId !== topicId || loadState.status === 'loading';
  const loadError = loadState.topicId === topicId && loadState.status === 'error'
    ? loadState.error
    : null;

  const routedItems = useMemo(
    () => wrappedRelics.map((item) => routeWrappedRelic(item, topicId)),
    [topicId, wrappedRelics],
  );
  const availableZones = useMemo(
    () => [...new Set(routedItems.flatMap((entry) => entry.zones))],
    [routedItems],
  );
  const selectedZones = useMemo(() => new Set(selectedZoneIds), [selectedZoneIds]);
  const expandedIdSet = useMemo(() => new Set(expandedIds), [expandedIds]);
  const selectedRelicIdSet = useMemo(() => new Set(selectedRelicIds), [selectedRelicIds]);
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(
    () => routedItems.filter((entry) =>
      matchesSearch(entry, normalizedQuery) && matchesZones(entry, selectedZones)),
    [normalizedQuery, routedItems, selectedZones],
  );
  const selectedRelics = useMemo(
    () => wrappedRelics.filter((item) => selectedRelicIdSet.has(item.id)),
    [selectedRelicIdSet, wrappedRelics],
  );
  const allFilteredSelected = filtered.length > 0
    && filtered.every((entry) => selectedRelicIdSet.has(entry.item.id));

  /** 切换一个属性 zone 筛选。 */
  function toggleZone(zoneId: string) {
    setSelectedZoneIds((previous) => previous.includes(zoneId)
      ? previous.filter((id) => id !== zoneId)
      : [...previous, zoneId]);
  }

  /** 切换单件藏品的公式计算选择。 */
  function toggleRelicSelected(itemId: string) {
    setSelectedRelicIds((previous) => previous.includes(itemId)
      ? previous.filter((id) => id !== itemId)
      : [...previous, itemId]);
  }

  /** 更新包装藏品启用状态，不修改原始 relic 和 charBuffData。 */
  function toggleRelicEnabled(itemId: string) {
    setWrappedRelics((previous) => previous.map((item) =>
      item.id === itemId ? { ...item, enable: !item.enable } : item));
  }

  /** 更新模板程序消费的非负整数层数。 */
  function updateRelicLayer(itemId: string, layer: number) {
    setWrappedRelics((previous) => previous.map((item) =>
      item.id === itemId ? { ...item, layer } : item));
  }

  /** 全选或取消当前筛选后的藏品。 */
  function toggleSelectFiltered() {
    if (allFilteredSelected) {
      const filteredIds = new Set(filtered.map((entry) => entry.item.id));
      setSelectedRelicIds((previous) => previous.filter((id) => !filteredIds.has(id)));
      return;
    }
    setSelectedRelicIds((previous) => [
      ...new Set([...previous, ...filtered.map((entry) => entry.item.id)]),
    ]);
  }

  if (loadError) {
    return (
      <div className={cn('not-prose my-6 rounded-2xl border border-dashed px-4 py-8 text-center text-sm text-fd-muted-foreground', className)}>
        加载主题 <code>{topicId}</code> 失败：{loadError}
      </div>
    );
  }
  if (loading) {
    return (
      <div className={cn('not-prose my-6 rounded-2xl border px-4 py-10 text-center text-sm text-fd-muted-foreground', className)}>
        正在分析属性藏品…
      </div>
    );
  }

  return (
    <div className={cn('not-prose my-4 space-y-4', className)}>
      <CombatPreviewPanel
        topicId={topicId}
        selectedRelics={selectedRelics}
        zoneComments={zoneComments}
      />

      <section className="rounded-2xl border bg-fd-card p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">{topicName}</h2>
            <p className="mt-1 text-xs text-fd-muted-foreground">
              属性版本 · 显示 {filtered.length} / {routedItems.length} 件 · 已选 {selectedRelicIds.length} 件
            </p>
          </div>
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fd-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索藏品、buff、黑板或属性乘区…"
              className="w-full rounded-xl border bg-fd-background py-2 pr-9 pl-9 text-sm outline-none focus:border-fd-primary"
            />
            {query ? (
              <button
                type="button"
                aria-label="清空搜索"
                onClick={() => setQuery('')}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"
              >
                <X className="size-3.5" />
              </button>
            ) : null}
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={selectedZones.has(ZONE_FILTER_NONE)}
            onClick={() => toggleZone(ZONE_FILTER_NONE)}
            className={cn(
              'rounded-full border px-2.5 py-1 text-xs',
              selectedZones.has(ZONE_FILTER_NONE) && 'border-fd-primary bg-fd-primary/10 text-fd-primary',
            )}
          >
            无属性乘区
          </button>
          {availableZones.map((zoneId) => (
            <button
              key={zoneId}
              type="button"
              aria-pressed={selectedZones.has(zoneId)}
              onClick={() => toggleZone(zoneId)}
              className={cn(
                'rounded-full border px-2.5 py-1 text-xs',
                selectedZones.has(zoneId) && 'border-fd-primary bg-fd-primary/10 text-fd-primary',
              )}
            >
              {zoneComments[zoneId] ?? zoneId}
            </button>
          ))}
        </div>
      </section>

      <div className="overflow-hidden rounded-2xl border bg-fd-card">
        <div className="overflow-x-auto">
          {/* 表格正文允许原生鼠标拖拽框选，交互控件各自保持 select-none。 */}
          <table className="w-full min-w-[48rem] border-collapse text-sm select-text selection:bg-fd-primary/25 selection:text-fd-foreground">
            <thead>
              <tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground">
                <th className="w-10 select-none px-3 py-2.5">
                  <input
                    type="checkbox"
                    checked={allFilteredSelected}
                    onChange={toggleSelectFiltered}
                    aria-label="全选当前过滤结果"
                    className="size-4 select-none accent-[var(--color-fd-primary)]"
                  />
                </th>
                <th className="w-14 px-3 py-2.5 font-medium">启用</th>
                <th className="w-20 px-3 py-2.5 font-medium">层数</th>
                <th className="w-10 px-3 py-2.5" aria-hidden />
                <th className="w-[20%] px-3 py-2.5 font-medium">藏品</th>
                <th className="px-3 py-2.5 font-medium">原文</th>
                <th className="w-[28%] px-3 py-2.5 font-medium">属性乘区</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => (
                <RelicRow
                  key={entry.item.id}
                  entry={entry}
                  comments={zoneComments}
                  expanded={expandedIdSet.has(entry.item.id)}
                  selected={selectedRelicIdSet.has(entry.item.id)}
                  onToggleExpand={() => setExpandedIds((previous) =>
                    previous.includes(entry.item.id)
                      ? previous.filter((id) => id !== entry.item.id)
                      : [...previous, entry.item.id])}
                  onToggleSelect={() => toggleRelicSelected(entry.item.id)}
                  onToggleEnable={() => toggleRelicEnabled(entry.item.id)}
                  onLayerChange={(layer) => updateRelicLayer(entry.item.id, layer)}
                />
              ))}
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-sm text-fd-muted-foreground">
                    没有匹配的藏品。
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
