/** 使用当前 FormulaBook 计算选中藏品下的干员最终攻击力。 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type {
  ExportedOperatorArtifact,
  ExportedOperatorIndexArtifact,
  ExportedOperatorIndexItem,
  OriginalGameDataObject,
  WrappedRelicItem,
} from '@arkrog/arknights-schema/game-data';
import {
  FormulaBook,
  FormulaZoneId,
  item,
} from '@arkrog/arknights-knowledge-graph/formula';
import {
  applyRelicItemsToFormulaBook,
  type FormulaActivationContext,
} from '@arkrog/arknights-knowledge-graph/mechanics';
import { FormulaResultPopover } from './formula-expr-popover';
import { cn } from '../lib/cn';

/** 干员目录直接使用 relics:export 的轻量条目。 */
type OperatorIndexEntry = ExportedOperatorIndexItem;

/** 计算攻击力所需的最高阶段干员数据。 */
interface OperatorDetail {
  id: string;
  name: string;
  profession: string;
  subProfessionId: string | null;
  position: string | null;
  hasToken: boolean;
  attributes: OriginalGameDataObject;
}

/** 敌人目录只用于攻击力藏品的生效条件。 */
interface EnemyIndexEntry {
  id: string;
  name: string;
  prefabKey: string;
}

/** 敌人详情只保留激活判断需要的原始字段。 */
interface EnemyDetail extends EnemyIndexEntry {
  enemyData: Record<string, unknown>;
}

/** 攻击力预览只接收藏品选择和主题证据路径。 */
interface CombatPreviewPanelProps {
  selectedRelics: readonly WrappedRelicItem[];
  topicId: string;
  zoneComments?: Readonly<Record<string, string>>;
  className?: string;
}

/** 从属性对象安全读取有限数值。 */
function attrNumber(attributes: OriginalGameDataObject | undefined, key: string): number | null {
  const value = attributes?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

/** 从完整干员产物读取最高阶段最后一个属性关键帧。 */
function buildOperatorDetail(artifact: ExportedOperatorArtifact): OperatorDetail {
  const character = artifact.character;
  const phase = character.phases?.at(-1);
  const frame = phase?.attributesKeyFrames?.at(-1);
  if (!frame?.data) throw new Error(`干员缺少最高阶段属性帧：${artifact.id}`);
  return {
    id: artifact.id,
    name: character.name ?? artifact.id,
    profession: character.profession ?? '',
    subProfessionId: character.subProfessionId ?? null,
    position: character.position ?? null,
    hasToken: Boolean(character.displayTokenDict),
    attributes: frame.data,
  };
}

/** 安全读取敌人原始字符串字段。 */
function recordString(record: Record<string, unknown>, key: string): string | undefined {
  const value = record[key];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

/** 安全读取敌人原始字符串数组字段。 */
function recordStringArray(record: Record<string, unknown>, key: string): string[] | undefined {
  const value = record[key];
  return Array.isArray(value)
    ? value.filter((entry): entry is string => typeof entry === 'string')
    : undefined;
}

/** 构建攻击力藏品的运行时生效上下文。 */
function buildActivationContext(
  operator: OperatorDetail | null,
  enemy: EnemyDetail | null,
): Omit<FormulaActivationContext, 'selectedRelicIds'> {
  return {
    character: operator
      ? {
          profession: operator.profession,
          subProfessionId: operator.subProfessionId ?? undefined,
          position: operator.position ?? undefined,
          hasToken: operator.hasToken,
        }
      : undefined,
    enemy: enemy
      ? {
          id: enemy.id,
          levelType: recordString(enemy.enemyData, 'levelType'),
          tags: recordStringArray(enemy.enemyData, 'enemyTags'),
        }
      : undefined,
  };
}

/** 对实体目录执行名称和 ID 搜索。 */
function filterByQuery<T extends { id: string; name: string }>(items: readonly T[], query: string): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [...items].slice(0, 40);
  return items.filter((entry) =>
    entry.name.toLowerCase().includes(normalized)
    || entry.id.toLowerCase().includes(normalized)).slice(0, 40);
}

/** 可搜索的干员或敌人选择器。 */
function EntitySelect<T extends { id: string; name: string }>({
  label,
  items,
  selectedId,
  selectedName,
  loading,
  onSelect,
  onClear,
}: {
  label: string;
  items: readonly T[];
  selectedId: string | null;
  selectedName: string | null;
  loading: boolean;
  onSelect: (item: T) => void;
  onClear: () => void;
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const filtered = useMemo(() => filterByQuery(items, query), [items, query]);

  return (
    <div className="relative">
      <p className="mb-1.5 text-xs font-medium text-fd-muted-foreground">{label}</p>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-fd-muted-foreground" />
        <input
          value={open ? query : (selectedName ?? '')}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setQuery('');
            setOpen(true);
          }}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
          placeholder={loading ? '加载中…' : `搜索${label}…`}
          disabled={loading}
          className="w-full rounded-xl border bg-fd-background py-2 pr-9 pl-9 text-sm outline-none focus:border-fd-primary"
        />
        {selectedId ? (
          <button
            type="button"
            aria-label={`清除${label}`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              onClear();
              setQuery('');
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent"
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>
      {open && !loading ? (
        <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border bg-fd-background py-1 shadow-lg">
          {filtered.length === 0 ? (
            <li className="px-3 py-2 text-sm text-fd-muted-foreground">无匹配项</li>
          ) : filtered.map((entry) => (
            <li key={entry.id}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onSelect(entry);
                  setOpen(false);
                }}
                className="flex w-full flex-col px-3 py-1.5 text-left text-sm hover:bg-fd-accent"
              >
                <span className="font-medium">{entry.name}</span>
                <span className="font-mono text-[0.7rem] text-fd-muted-foreground">{entry.id}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/** 格式化最终攻击力。 */
function formatAttack(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return '—';
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

/** 攻击力限定的 FormulaBook 预览。 */
export function CombatPreviewPanel({
  selectedRelics,
  topicId,
  zoneComments,
  className,
}: CombatPreviewPanelProps) {
  const [operatorIndex, setOperatorIndex] = useState<OperatorIndexEntry[]>([]);
  const [enemyIndex, setEnemyIndex] = useState<EnemyIndexEntry[]>([]);
  const [operatorId, setOperatorId] = useState<string | null>(null);
  const [enemyId, setEnemyId] = useState<string | null>(null);
  const [operator, setOperator] = useState<OperatorDetail | null>(null);
  const [enemy, setEnemy] = useState<EnemyDetail | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      fetch('/data/operators/index.json').then(async (response) => {
        if (!response.ok) throw new Error(`operators HTTP ${response.status}`);
        return (await response.json()) as ExportedOperatorIndexArtifact;
      }),
      fetch('/data/enemies/index.json').then(async (response) => {
        if (!response.ok) throw new Error(`enemies HTTP ${response.status}`);
        return (await response.json()) as { items: EnemyIndexEntry[] };
      }),
    ]).then(([operators, enemies]) => {
      if (cancelled) return;
      setOperatorIndex(operators.items ?? []);
      setEnemyIndex(enemies.items ?? []);
      setLoading(false);
    }).catch((error: unknown) => {
      if (cancelled) return;
      setLoadError(error instanceof Error ? error.message : String(error));
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!operatorId) return;
    let cancelled = false;
    void fetch(`/data/operators/${encodeURIComponent(operatorId)}.json`)
      .then(async (response) => {
        if (!response.ok) throw new Error(`operator HTTP ${response.status}`);
        return buildOperatorDetail((await response.json()) as ExportedOperatorArtifact);
      })
      .then((detail) => {
        if (!cancelled) setOperator(detail);
      })
      .catch((error: unknown) => {
        if (!cancelled) setLoadError(error instanceof Error ? error.message : String(error));
      });
    return () => {
      cancelled = true;
    };
  }, [operatorId]);

  useEffect(() => {
    if (!enemyId) return;
    let cancelled = false;
    void fetch(`/data/enemies/${encodeURIComponent(enemyId)}.json`)
      .then(async (response) => {
        if (!response.ok) throw new Error(`enemy HTTP ${response.status}`);
        return (await response.json()) as EnemyDetail;
      })
      .then((detail) => {
        if (!cancelled) setEnemy(detail);
      })
      .catch((error: unknown) => {
        if (!cancelled) setLoadError(error instanceof Error ? error.message : String(error));
      });
    return () => {
      cancelled = true;
    };
  }, [enemyId]);

  /** 选择干员时先清理上一份详情，避免异步加载期间混用旧属性。 */
  function selectOperator(entry: OperatorIndexEntry) {
    setOperator(null);
    setOperatorId(entry.id);
  }

  /** 清空干员选择和已经加载的详情。 */
  function clearOperator() {
    setOperatorId(null);
    setOperator(null);
  }

  /** 选择敌人时先清理上一份详情，避免旧敌人参与藏品条件。 */
  function selectEnemy(entry: EnemyIndexEntry) {
    setEnemy(null);
    setEnemyId(entry.id);
  }

  /** 清空敌人选择和已经加载的详情。 */
  function clearEnemy() {
    setEnemyId(null);
    setEnemy(null);
  }

  const result = useMemo(() => {
    const baseAttack = attrNumber(operator?.attributes, 'atk');
    if (baseAttack === null) return null;
    const book = new FormulaBook();
    book.add_item(
      FormulaZoneId.operator_base_atk,
      item('干员基础攻击力', baseAttack),
    );
    const placements = applyRelicItemsToFormulaBook(book, selectedRelics, {
      topicId,
      activation: buildActivationContext(operator, enemy),
    });
    return {
      baseAttack,
      finalAttack: book.calculate(FormulaZoneId.operator_final_atk),
      formula: book.get_zone(FormulaZoneId.operator_final_atk),
      placementCount: placements.length,
    };
  }, [enemy, operator, selectedRelics, topicId]);

  return (
    <section className={cn('rounded-2xl border bg-fd-card p-4 shadow-sm', className)}>
      <div className="mb-4">
        <h2 className="text-base font-semibold">最终攻击力预览</h2>
        <p className="mt-1 text-xs text-fd-muted-foreground">
          选择干员和可选敌人后，使用当前 FormulaBook 计算 operator_final_atk。
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <EntitySelect
          label="干员"
          items={operatorIndex}
          selectedId={operatorId}
          selectedName={operator?.name ?? null}
          loading={loading}
          onSelect={selectOperator}
          onClear={clearOperator}
        />
        <EntitySelect
          label="条件敌人"
          items={enemyIndex}
          selectedId={enemyId}
          selectedName={enemy?.name ?? null}
          loading={loading}
          onSelect={selectEnemy}
          onClear={clearEnemy}
        />
      </div>
      {loadError ? (
        <p className="mt-3 text-xs text-red-500">{loadError}</p>
      ) : null}
      <div className="mt-4 flex items-center justify-between rounded-xl border bg-fd-muted/15 px-4 py-3">
        <div>
          <p className="text-xs text-fd-muted-foreground">干员最终攻击力</p>
          <p className="mt-1 text-[0.7rem] text-fd-muted-foreground">
            基础 {formatAttack(result?.baseAttack ?? null)} · 生效公式项 {result?.placementCount ?? 0}
          </p>
        </div>
        <div className="font-mono text-lg">
          <FormulaResultPopover
            value={formatAttack(result?.finalAttack ?? null)}
            expression={result?.formula}
            labels={zoneComments}
          />
        </div>
      </div>
    </section>
  );
}
