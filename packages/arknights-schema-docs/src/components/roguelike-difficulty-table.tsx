/** 藏品乘区与乘区校验共用的 NORMAL 难度表和 GameData 详情。 */

'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/cn';
import type { RoguelikeDifficultyRow } from '../lib/roguelike-difficulties';
import { FormulaZoneBadges } from './formula-zone-badges';

/** 将 GameData 标量统一转换为详情文本。 */
function detailText(value: unknown): string | null {
  if (value === null || value === undefined || value === '') return null;
  if (Array.isArray(value)) return value.length > 0 ? value.join('、') : null;
  return String(value);
}

/** 展示主难度及其 customizedDifficulty 中与玩法相关的原始详情。 */
function DifficultyGameDataDetails({ row }: { row: RoguelikeDifficultyRow }) {
  const { difficulty, customized } = row;
  const details = [
    ['副标题', difficulty.subName],
    ['规则说明', difficulty.ruleDesc],
    ['附加说明', difficulty.addDesc],
    ['扩展说明', customized?.buffDesc],
    ['难度 Buff', customized?.buffs],
    ['藏品开发等级', customized?.relicDevLevel],
    ['天气阶段', customized?.leftWeatherDesc],
    ['灾害阶段', customized?.leftDisasterDesc],
    ['负重状态', customized?.leftOverweightDesc],
    ['负重限制', customized?.weightStatusLimitDesc],
    ['愤怒阶段', customized?.leftWrathDesc],
    ['岁痕概率', customized?.gildProbDisplay],
    ['天阶说明', customized?.skyStepDescription],
  ].flatMap(([label, value]) => {
    const text = detailText(value);
    return text ? [{ label: String(label), text }] : [];
  });

  if (details.length === 0) {
    return <p className="text-sm text-fd-muted-foreground">该等级没有额外 GameData 详情。</p>;
  }
  return (
    <dl className="grid gap-3 md:grid-cols-2">
      {details.map((entry) => (
        <div key={entry.label} className="rounded-xl border bg-fd-background p-3">
          <dt className="text-xs font-medium text-fd-muted-foreground">{entry.label}</dt>
          <dd className="mt-1 whitespace-pre-wrap text-sm leading-6">{entry.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/** 难度名称和等级使用统一布局。 */
function DifficultyIdentity({ row }: { row: RoguelikeDifficultyRow }) {
  return (
    <div className="min-w-0">
      <span className="break-words font-medium">{row.difficulty.name} {row.difficulty.grade}</span>
      <code className="mt-1 block break-all text-[0.7rem] text-fd-muted-foreground">{row.id}</code>
    </div>
  );
}

/** 难度主行共用的展开按钮。 */
function DifficultyExpandButton({ row, expanded, onToggle }: {
  row: RoguelikeDifficultyRow;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={expanded ? `收起难度 ${row.difficulty.grade}` : `展开难度 ${row.difficulty.grade}`}
      className="select-none rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"
    >
      <ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} />
    </button>
  );
}

/** 复合键隔离不同主题的展开状态，无需用 effect 同步重置。 */
function useExpandedDifficulties(topicId: string) {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const prefix = `${topicId}:`;
  const expanded = useMemo(() => new Set(expandedKeys.flatMap((key) =>
    key.startsWith(prefix) ? [key.slice(prefix.length)] : [])), [expandedKeys, prefix]);
  const toggle = (id: string) => {
    const key = `${prefix}${id}`;
    setExpandedKeys((previous) => previous.includes(key)
      ? previous.filter((entry) => entry !== key)
      : [...previous, key]);
  };
  return { expanded, toggle };
}

/** 藏品乘区页的可选择难度表。 */
export function DifficultyZoneTable({
  topicId,
  rows,
  totalCount,
  selectedId,
  comments,
  onSelect,
}: {
  topicId: string;
  rows: readonly RoguelikeDifficultyRow[];
  totalCount: number;
  selectedId: string;
  comments: Readonly<Record<string, string>>;
  onSelect: (row: RoguelikeDifficultyRow) => void;
}) {
  const { expanded, toggle } = useExpandedDifficulties(topicId);
  return (
    <section className="overflow-hidden rounded-2xl border bg-fd-card">
      <div className="border-b px-4 py-3">
        <h2 className="text-sm font-semibold">难度乘区</h2>
        <p className="mt-1 text-xs text-fd-muted-foreground">显示 {rows.length} / {totalCount} 个 NORMAL 难度 · 属性计算累计应用已选等级及以下效果</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[48rem] border-collapse text-sm select-text">
          <thead><tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground">
            <th className="w-12 px-3 py-2.5 font-medium">选择</th>
            <th className="w-10 px-3 py-2.5" aria-label="展开" />
            <th className="w-[24%] px-3 py-2.5 font-medium">难度</th>
            <th className="px-3 py-2.5 font-medium">规则原文</th>
            <th className="w-[30%] px-3 py-2.5 font-medium">属性乘区</th>
          </tr></thead>
          <tbody>
            {rows.map((row) => {
              const isExpanded = expanded.has(row.id);
              const selected = selectedId === row.id;
              return (
                <DifficultyZoneRows
                  key={row.id}
                  row={row}
                  expanded={isExpanded}
                  selected={selected}
                  comments={comments}
                  onSelect={() => onSelect(row)}
                  onToggle={() => toggle(row.id)}
                />
              );
            })}
            {rows.length === 0 ? <tr><td colSpan={5} className="px-4 py-10 text-center text-fd-muted-foreground">没有匹配的难度。</td></tr> : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/** 可选择难度的主行与 GameData 展开行。 */
function DifficultyZoneRows({
  row,
  expanded,
  selected,
  comments,
  onSelect,
  onToggle,
}: {
  row: RoguelikeDifficultyRow;
  expanded: boolean;
  selected: boolean;
  comments: Readonly<Record<string, string>>;
  onSelect: () => void;
  onToggle: () => void;
}) {
  return (
    <>
      <tr className={cn('border-b align-top hover:bg-fd-accent/30', selected && 'bg-fd-primary/5')}>
        <td className="select-none px-3 py-3">
          <input type="radio" name="roguelike-difficulty" checked={selected} onChange={onSelect} aria-label={`选择难度 ${row.difficulty.grade}`} className="size-4 accent-[var(--color-fd-primary)]" />
        </td>
        <td className="select-none px-3 py-3"><DifficultyExpandButton row={row} expanded={expanded} onToggle={onToggle} /></td>
        <td className="px-3 py-3"><DifficultyIdentity row={row} /></td>
        <td className="px-3 py-3 leading-6 text-fd-muted-foreground">{row.difficulty.ruleDesc || '-'}</td>
        <td className="px-3 py-3"><FormulaZoneBadges zones={row.zones} comments={comments} emptyLabel="-" /></td>
      </tr>
      {expanded ? <tr className="border-b bg-fd-muted/10"><td colSpan={5} className="px-4 py-4"><DifficultyGameDataDetails row={row} /></td></tr> : null}
    </>
  );
}

/** 乘区校验页暂只展示 GameData，四个分析列保留稳定占位。 */
export function DifficultyValidationTable({
  topicId,
  rows,
  totalCount,
}: {
  topicId: string;
  rows: readonly RoguelikeDifficultyRow[];
  totalCount: number;
}) {
  const { expanded, toggle } = useExpandedDifficulties(topicId);
  return (
    <section className="overflow-hidden rounded-2xl border bg-fd-card">
      <div className="border-b px-4 py-3">
        <h2 className="text-sm font-semibold">难度乘区校验</h2>
        <p className="mt-1 text-xs text-fd-muted-foreground">显示 {rows.length} / {totalCount} 个 NORMAL 难度 · 分析结果将在后续功能中补充</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[48rem] table-fixed border-collapse text-sm select-text">
          <colgroup><col className="w-[22%]" /><col className="w-[19.5%]" /><col className="w-[19.5%]" /><col className="w-[19.5%]" /><col className="w-[19.5%]" /></colgroup>
          <thead><tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground">
            <th className="px-3 py-2.5 font-medium">难度</th><th className="px-3 py-2.5 font-medium">图谱结果</th><th className="px-3 py-2.5 font-medium">程序结果</th><th className="px-3 py-2.5 font-medium">历史版本</th><th className="px-3 py-2.5 font-medium">对照</th>
          </tr></thead>
          <tbody>
            {rows.map((row) => {
              const isExpanded = expanded.has(row.id);
              return <DifficultyValidationRows key={row.id} row={row} expanded={isExpanded} onToggle={() => toggle(row.id)} />;
            })}
            {rows.length === 0 ? <tr><td colSpan={5} className="px-4 py-10 text-center text-fd-muted-foreground">没有匹配的难度。</td></tr> : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/** 校验难度的占位主行与 GameData 展开行。 */
function DifficultyValidationRows({ row, expanded, onToggle }: {
  row: RoguelikeDifficultyRow;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr className="border-b align-top hover:bg-fd-accent/30">
        <td className="px-3 py-3"><div className="flex min-w-0 items-start gap-2"><DifficultyExpandButton row={row} expanded={expanded} onToggle={onToggle} /><DifficultyIdentity row={row} /></div></td>
        {[0, 1, 2, 3].map((index) => <td key={index} className="px-3 py-3 text-fd-muted-foreground">-</td>)}
      </tr>
      {expanded ? <tr className="border-b bg-fd-muted/10"><td colSpan={5} className="px-4 py-4"><DifficultyGameDataDetails row={row} /></td></tr> : null}
    </>
  );
}
