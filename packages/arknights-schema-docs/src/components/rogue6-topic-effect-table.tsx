/** rogue_6 三类主题效果在藏品乘区与乘区校验页共用的表格。 */

'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FormulaZoneBadges } from './formula-zone-badges';
import { cn } from '../lib/cn';
import type { Rogue6TopicEffectRow } from '../lib/rogue6-topic-effects';

/** 表格名称和无结果文案按类别集中维护。 */
const TABLE_LABELS = {
  realUtopia: { title: '实托邦', empty: '实托邦阶段' },
  utopia: { title: '乌托邦', empty: '乌托邦 Buff' },
  conceptualEntity: { title: '概念体', empty: '概念体' },
} as const;

/** 主题效果图标使用 GameData manifest 对应的远程资源路径。 */
function TopicEffectIcon({ row }: { row: Rogue6TopicEffectRow }) {
  return (
    <span
      role="img"
      aria-label={`${row.name} 图标`}
      className="size-10 shrink-0 rounded-lg border bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${JSON.stringify(row.iconUrl)})` }}
    />
  );
}

/** 统一的对象身份列同时展示图标、名称、分类和稳定 ID。 */
function TopicEffectIdentity({ row }: { row: Rogue6TopicEffectRow }) {
  return (
    <div className="flex min-w-0 items-start gap-2.5">
      <TopicEffectIcon row={row} />
      <div className="min-w-0">
        <span className="break-words font-medium">{row.name}</span>
        <span className="ml-1.5 rounded-full border px-1.5 py-0.5 text-[0.65rem] text-fd-muted-foreground">{row.category}</span>
        <code className="mt-1 block break-all text-[0.7rem] text-fd-muted-foreground">{row.id}</code>
      </div>
    </div>
  );
}

/** 展开行展示说明文本与完整 report JSON，便于人工追溯。 */
function TopicEffectDetails({ row }: { row: Rogue6TopicEffectRow }) {
  return (
    <div className="space-y-3">
      {row.flavorText ? (
        <div className="rounded-xl border bg-fd-background p-3">
          <p className="text-xs font-medium text-fd-muted-foreground">描述</p>
          <p className="mt-1 whitespace-pre-wrap text-sm leading-6">{row.flavorText}</p>
        </div>
      ) : null}
      <details className="overflow-hidden rounded-xl border bg-fd-background">
        <summary className="cursor-pointer px-3 py-2 text-xs text-fd-muted-foreground">完整 GameData 详情</summary>
        <pre className="max-h-96 overflow-auto border-t bg-fd-muted/20 p-3 text-xs leading-5">{JSON.stringify(row.raw, null, 2)}</pre>
      </details>
    </div>
  );
}

/** 各表独立保存展开状态，过滤行隐藏时不清除用户选择。 */
function useExpandedRows(kind: Rogue6TopicEffectRow['kind']) {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const expanded = useMemo(() => new Set(expandedKeys.filter((key) => key.startsWith(`${kind}:`))
    .map((key) => key.slice(kind.length + 1))), [expandedKeys, kind]);
  const toggle = (id: string) => {
    const key = `${kind}:${id}`;
    setExpandedKeys((previous) => previous.includes(key)
      ? previous.filter((entry) => entry !== key)
      : [...previous, key]);
  };
  return { expanded, toggle };
}

/** 藏品乘区页的可选择主题效果表。 */
export function Rogue6TopicEffectZoneTable({
  kind,
  rows,
  totalCount,
  selectedIds,
  multiple,
  comments,
  onSelect,
  onClear,
}: {
  kind: Rogue6TopicEffectRow['kind'];
  rows: readonly Rogue6TopicEffectRow[];
  totalCount: number;
  selectedIds: ReadonlySet<string>;
  multiple: boolean;
  comments: Readonly<Record<string, string>>;
  onSelect: (row: Rogue6TopicEffectRow) => void;
  onClear: () => void;
}) {
  const { expanded, toggle } = useExpandedRows(kind);
  const labels = TABLE_LABELS[kind];
  return (
    <section className="overflow-hidden rounded-2xl border bg-fd-card">
      <div className="flex items-start justify-between gap-3 border-b px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold">{labels.title}乘区</h2>
          <p className="mt-1 text-xs text-fd-muted-foreground">显示 {rows.length} / {totalCount} 个{labels.empty} · {multiple ? '允许多选' : '整体单选'} · 默认不选</p>
        </div>
        {selectedIds.size > 0 ? <button type="button" onClick={onClear} className="rounded-lg border px-2.5 py-1 text-xs text-fd-muted-foreground hover:text-fd-foreground">清除选择</button> : null}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[48rem] border-collapse text-sm select-text">
          <thead><tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground">
            <th className="w-12 px-3 py-2.5 font-medium">选择</th><th className="w-10 px-3 py-2.5" aria-label="展开" /><th className="w-[28%] px-3 py-2.5 font-medium">对象</th><th className="px-3 py-2.5 font-medium">规则原文</th><th className="w-[28%] px-3 py-2.5 font-medium">属性乘区</th>
          </tr></thead>
          <tbody>
            {rows.map((row) => {
              const selected = selectedIds.has(row.id);
              const isExpanded = expanded.has(row.id);
              return <TopicEffectZoneRows key={row.id} row={row} selected={selected} expanded={isExpanded} multiple={multiple} comments={comments} onSelect={() => onSelect(row)} onToggle={() => toggle(row.id)} />;
            })}
            {rows.length === 0 ? <tr><td colSpan={5} className="px-4 py-10 text-center text-fd-muted-foreground">没有匹配的{labels.empty}。</td></tr> : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/** 可选择主题效果的主行和详情行。 */
function TopicEffectZoneRows({ row, selected, expanded, multiple, comments, onSelect, onToggle }: {
  row: Rogue6TopicEffectRow;
  selected: boolean;
  expanded: boolean;
  multiple: boolean;
  comments: Readonly<Record<string, string>>;
  onSelect: () => void;
  onToggle: () => void;
}) {
  return <>
    <tr className={cn('border-b align-top hover:bg-fd-accent/30', selected && 'bg-fd-primary/5')}>
      <td className="select-none px-3 py-3"><input type={multiple ? 'checkbox' : 'radio'} name={multiple ? undefined : `rogue6-${row.kind}`} checked={selected} onChange={onSelect} aria-label={`选择${row.name}`} className="size-4 accent-[var(--color-fd-primary)]" /></td>
      <td className="select-none px-3 py-3"><button type="button" onClick={onToggle} aria-label={expanded ? `收起${row.name}` : `展开${row.name}`} className="rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"><ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} /></button></td>
      <td className="px-3 py-3"><TopicEffectIdentity row={row} /></td>
      <td className="px-3 py-3 leading-6 text-fd-muted-foreground">{row.description || '-'}</td>
      <td className="px-3 py-3"><FormulaZoneBadges zones={row.zones} comments={comments} emptyLabel="-" /></td>
    </tr>
    {expanded ? <tr className="border-b bg-fd-muted/10"><td colSpan={5} className="px-4 py-4"><TopicEffectDetails row={row} /></td></tr> : null}
  </>;
}

/** 乘区校验页只展示对象数据，四个分析列统一保留“-”占位。 */
export function Rogue6TopicEffectValidationTable({
  kind,
  rows,
  totalCount,
}: {
  kind: Rogue6TopicEffectRow['kind'];
  rows: readonly Rogue6TopicEffectRow[];
  totalCount: number;
}) {
  const { expanded, toggle } = useExpandedRows(kind);
  const labels = TABLE_LABELS[kind];
  return (
    <section className="overflow-hidden rounded-2xl border bg-fd-card">
      <div className="border-b px-4 py-3"><h2 className="text-sm font-semibold">{labels.title}乘区校验</h2><p className="mt-1 text-xs text-fd-muted-foreground">显示 {rows.length} / {totalCount} 个{labels.empty} · 分析结果将在后续功能中补充</p></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[48rem] table-fixed border-collapse text-sm select-text">
        <colgroup><col className="w-[22%]" /><col className="w-[19.5%]" /><col className="w-[19.5%]" /><col className="w-[19.5%]" /><col className="w-[19.5%]" /></colgroup>
        <thead><tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground"><th className="px-3 py-2.5 font-medium">对象</th><th className="px-3 py-2.5 font-medium">图谱结果</th><th className="px-3 py-2.5 font-medium">程序结果</th><th className="px-3 py-2.5 font-medium">历史版本</th><th className="px-3 py-2.5 font-medium">对照</th></tr></thead>
        <tbody>
          {rows.map((row) => {
            const isExpanded = expanded.has(row.id);
            return <TopicEffectValidationRows key={row.id} row={row} expanded={isExpanded} onToggle={() => toggle(row.id)} />;
          })}
          {rows.length === 0 ? <tr><td colSpan={5} className="px-4 py-10 text-center text-fd-muted-foreground">没有匹配的{labels.empty}。</td></tr> : null}
        </tbody>
      </table></div>
    </section>
  );
}

/** 校验占位表的对象主行与完整 GameData 展开行。 */
function TopicEffectValidationRows({ row, expanded, onToggle }: {
  row: Rogue6TopicEffectRow;
  expanded: boolean;
  onToggle: () => void;
}) {
  return <>
    <tr className="border-b align-top hover:bg-fd-accent/30">
      <td className="px-3 py-3"><div className="flex min-w-0 items-start gap-2"><button type="button" onClick={onToggle} aria-label={expanded ? `收起${row.name}` : `展开${row.name}`} className="mt-0.5 shrink-0 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"><ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} /></button><TopicEffectIdentity row={row} /></div></td>
      {[0, 1, 2, 3].map((index) => <td key={index} className="px-3 py-3 text-fd-muted-foreground">-</td>)}
    </tr>
    {expanded ? <tr className="border-b bg-fd-muted/10"><td colSpan={5} className="px-4 py-4"><p className="mb-3 text-sm leading-6 text-fd-muted-foreground">{row.description}</p><TopicEffectDetails row={row} /></td></tr> : null}
  </>;
}
