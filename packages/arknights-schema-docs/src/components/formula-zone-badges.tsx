/** 使用 FormulaZoneId 中文注释展示一组去重后的可写属性乘区。 */

import type { FormulaWritableZoneId } from '@arkrog/arknights-knowledge-graph/formula';

/** 藏品与难度表共用的属性乘区徽章。 */
export function FormulaZoneBadges({
  zones,
  comments,
  emptyLabel = '—',
}: {
  zones: readonly FormulaWritableZoneId[];
  comments: Readonly<Record<string, string>>;
  emptyLabel?: string;
}) {
  const uniqueZones = [...new Set(zones)];
  if (uniqueZones.length === 0) {
    return <span className="text-xs text-fd-muted-foreground">{emptyLabel}</span>;
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {uniqueZones.map((zoneId) => (
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
