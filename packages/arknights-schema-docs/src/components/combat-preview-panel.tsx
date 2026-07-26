/**
 * 藏品页战斗属性预览：我方干员 / 敌方面板，按公式簿与多选藏品重算核心属性。
 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import {
  FormulaContext,
  applyRelicItemsToFormulaContext,
  evaluateDamageFormula,
  type DamageFormulaId,
  type FormulaActivationContext,
  type RelicItemForContribution,
} from '@arkrog/arknights-knowledge-graph/formula';
import {
  FormulaResultPopover,
  buildAttackSpeedExpr,
  buildNamedFormulaExpr,
  buildSpdMultiplierExpr,
  type FormulaExprNode,
} from '@/components/formula-expr-popover';
import { cn } from '@/lib/cn';
import { loadFormulaBook, type FormulaBookData } from '@/lib/formula-runtime';

/** 干员目录条目。 */
export interface OperatorIndexEntry {
  id: string;
  name: string;
  profession: string;
  rarity: string;
}

/** 干员精二满级详情。 */
export interface OperatorDetail {
  id: string;
  name: string;
  profession: string;
  rarity: string;
  phase: number;
  level: number;
  subProfessionId: string | null;
  position: string | null;
  hasToken: boolean;
  attributes: Record<string, unknown>;
}

/** 敌人目录条目。 */
export interface EnemyIndexEntry {
  id: string;
  name: string;
  prefabKey: string;
}

/** 敌人 level0 详情。 */
export interface EnemyDetail {
  id: string;
  name: string;
  prefabKey: string;
  level: number;
  attributes: Record<string, unknown>;
  enemyData: Record<string, unknown>;
}

interface CombatPreviewPanelProps {
  /** 当前多选的藏品（含 effects，用于贡献映射）。 */
  selectedRelics: readonly RelicItemForContribution[];
  className?: string;
}

/** 从属性对象安全读取数值。 */
function attrNumber(
  attributes: Record<string, unknown> | undefined,
  key: string,
  fallback = 0,
): number {
  const value = attributes?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

/** 从完整敌人数据安全读取字符串。 */
function recordString(record: Record<string, unknown> | undefined, key: string): string | undefined {
  const value = record?.[key];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

/** 从完整敌人数据安全读取字符串数组。 */
function recordStringArray(
  record: Record<string, unknown> | undefined,
  key: string,
): string[] | undefined {
  const value = record?.[key];
  if (!Array.isArray(value)) return undefined;
  return value.filter((entry): entry is string => typeof entry === 'string');
}

/** 把当前选择转换为 graph 藏品生效判定上下文。 */
function buildActivationContext(
  selectedRelics: readonly RelicItemForContribution[],
  operator: OperatorDetail | null,
  enemy: EnemyDetail | null,
): FormulaActivationContext {
  return {
    selectedRelicIds: selectedRelics.map((relic) => relic.id),
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

/** 格式化展示数值。 */
function formatNumber(value: number | null, digits = 1): string {
  if (value === null || !Number.isFinite(value)) return '—';
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(digits);
}

/** 搜索过滤目录项。 */
function filterByQuery<T extends { id: string; name: string }>(
  items: readonly T[],
  query: string,
): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [...items].slice(0, 40);
  return items
    .filter(
      (item) =>
        item.name.toLowerCase().includes(normalized) ||
        item.id.toLowerCase().includes(normalized),
    )
    .slice(0, 40);
}

/** 可搜索的实体选择器。 */
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
            setOpen(true);
            setQuery('');
          }}
          onBlur={() => {
            // 延迟关闭，允许点击选项。
            window.setTimeout(() => setOpen(false), 150);
          }}
          placeholder={loading ? '加载目录中…' : `搜索${label}…`}
          disabled={loading}
          className="w-full rounded-xl border bg-fd-background py-2 pr-9 pl-9 text-sm outline-none focus:border-fd-primary"
        />
        {selectedId ? (
          <button
            type="button"
            aria-label={`清除${label}`}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              onClear();
              setQuery('');
            }}
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>
      {open && !loading ? (
        <ul className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border bg-fd-background py-1 shadow-lg">
          {filtered.length === 0 ? (
            <li className="px-3 py-2 text-sm text-fd-muted-foreground">无匹配项</li>
          ) : (
            filtered.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={cn(
                    'flex w-full flex-col px-3 py-1.5 text-left text-sm hover:bg-fd-accent',
                    selectedId === item.id && 'bg-fd-primary/10',
                  )}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    onSelect(item);
                    setOpen(false);
                    setQuery('');
                  }}
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="font-mono text-[0.7rem] text-fd-muted-foreground">
                    {item.id}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}

/** 属性行：标签 + 基础值 → 可点击结果（Portal 弹出真实公式）。 */
function AttrRow({
  label,
  base,
  computed,
  hint,
  expression,
}: {
  label: string;
  base: string;
  computed?: string | null;
  hint?: string;
  expression?: FormulaExprNode | null;
}) {
  const display = computed ?? base;
  const showBaseArrow = computed != null && computed !== base;

  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-fd-border/60 py-1.5 last:border-b-0">
      <div className="min-w-0">
        <p className="text-xs text-fd-muted-foreground">{label}</p>
        {hint ? (
          <p className="text-[0.65rem] leading-tight text-fd-muted-foreground/80">
            {hint}
          </p>
        ) : null}
      </div>
      <div className="shrink-0 text-right font-mono text-sm">
        {showBaseArrow ? (
          <>
            <span className="text-fd-muted-foreground">{base}</span>
            <span className="mx-1 text-fd-muted-foreground">→</span>
            <FormulaResultPopover value={display} expression={expression} />
          </>
        ) : expression ? (
          <FormulaResultPopover value={display} expression={expression} />
        ) : (
          <span className="font-medium">{display}</span>
        )}
      </div>
    </div>
  );
}

/** 安全构建命名公式展示树。 */
function safeNamedExpr(
  formulaId: DamageFormulaId,
  book: FormulaBookData,
  context: FormulaContext,
  inputs: Record<string, number>,
): FormulaExprNode | null {
  try {
    return buildNamedFormulaExpr(formulaId, book, context, inputs);
  } catch {
    return null;
  }
}

/** 战斗属性预览双面板。 */
export function CombatPreviewPanel({
  selectedRelics,
  className,
}: CombatPreviewPanelProps) {
  const [operatorIndex, setOperatorIndex] = useState<OperatorIndexEntry[]>([]);
  const [enemyIndex, setEnemyIndex] = useState<EnemyIndexEntry[]>([]);
  const [indexError, setIndexError] = useState<string | null>(null);
  const [indexLoading, setIndexLoading] = useState(true);

  const [operatorId, setOperatorId] = useState<string | null>(null);
  const [enemyId, setEnemyId] = useState<string | null>(null);
  const [operator, setOperator] = useState<OperatorDetail | null>(null);
  const [enemy, setEnemy] = useState<EnemyDetail | null>(null);
  const [detailError, setDetailError] = useState<string | null>(null);

  const [formulaBook, setFormulaBook] = useState<FormulaBookData | null>(null);

  // 加载干员/敌人目录与公式簿。
  useEffect(() => {
    let cancelled = false;
    setIndexLoading(true);
    setIndexError(null);
    void Promise.all([
      fetch('/data/operators/index.json').then(async (response) => {
        if (!response.ok) throw new Error(`operators index HTTP ${response.status}`);
        return (await response.json()) as { items: OperatorIndexEntry[] };
      }),
      fetch('/data/enemies/index.json').then(async (response) => {
        if (!response.ok) throw new Error(`enemies index HTTP ${response.status}`);
        return (await response.json()) as { items: EnemyIndexEntry[] };
      }),
      loadFormulaBook(),
    ])
      .then(([operators, enemies, book]) => {
        if (cancelled) return;
        setOperatorIndex(operators.items ?? []);
        setEnemyIndex(enemies.items ?? []);
        setFormulaBook(book);
        setIndexLoading(false);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setIndexError(error instanceof Error ? error.message : String(error));
        setIndexLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // 选中干员后拉取完整精二满级属性。
  useEffect(() => {
    if (!operatorId) {
      setOperator(null);
      return;
    }
    let cancelled = false;
    setDetailError(null);
    void fetch(`/data/operators/${operatorId}.json`)
      .then(async (response) => {
        if (!response.ok) throw new Error(`operator HTTP ${response.status}`);
        return (await response.json()) as OperatorDetail;
      })
      .then((detail) => {
        if (!cancelled) setOperator(detail);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setOperator(null);
        setDetailError(error instanceof Error ? error.message : String(error));
      });
    return () => {
      cancelled = true;
    };
  }, [operatorId]);

  // 选中敌人后拉取完整 level0 属性。
  useEffect(() => {
    if (!enemyId) {
      setEnemy(null);
      return;
    }
    let cancelled = false;
    setDetailError(null);
    void fetch(`/data/enemies/${enemyId}.json`)
      .then(async (response) => {
        if (!response.ok) throw new Error(`enemy HTTP ${response.status}`);
        return (await response.json()) as EnemyDetail;
      })
      .then((detail) => {
        if (!cancelled) setEnemy(detail);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setEnemy(null);
        setDetailError(error instanceof Error ? error.message : String(error));
      });
    return () => {
      cancelled = true;
    };
  }, [enemyId]);

  /** 由多选藏品构建公式上下文并求核心属性。 */
  const computed = useMemo(() => {
    if (!formulaBook) return null;
    const context = new FormulaContext();
    // graph 程序统一完成乘区写入和生效判定，inactive 贡献保留来源但不参与求值。
    const contributions = applyRelicItemsToFormulaContext(context, selectedRelics, {
      // 定向 charBuffData 默认赋给当前选择的干员，graph 仅继续校验职业等条件。
      activation: buildActivationContext(selectedRelics, operator, enemy),
    });

    const atk0 = operator ? attrNumber(operator.attributes, 'atk') : null;
    const charHp0 = operator ? attrNumber(operator.attributes, 'maxHp') : null;
    const charDef0 = operator ? attrNumber(operator.attributes, 'def') : null;
    const charRes0 = operator
      ? attrNumber(operator.attributes, 'magicResistance')
      : null;
    const baseAttackTime = operator
      ? attrNumber(operator.attributes, 'baseAttackTime', 1)
      : null;
    const baseAttackSpeed = operator
      ? attrNumber(operator.attributes, 'attackSpeed', 100)
      : null;
    const def0 = enemy ? attrNumber(enemy.attributes, 'def') : null;
    const res0 = enemy ? attrNumber(enemy.attributes, 'magicResistance') : null;
    const hp0 = enemy ? attrNumber(enemy.attributes, 'maxHp') : null;

    const spdZone = context.evaluateZone('ATTACK_SPEED');

    let finalAtk: number | null = null;
    let finalCharHp: number | null = null;
    let finalCharDef: number | null = null;
    let finalCharRes: number | null = null;
    let effectiveDef: number | null = null;
    let effectiveRes: number | null = null;
    let finalHp: number | null = null;

    try {
      if (atk0 !== null) {
        finalAtk = evaluateDamageFormula('FINAL_ATK', context, { ATK0: atk0 });
      }
      if (charHp0 !== null) {
        finalCharHp = evaluateDamageFormula('FINAL_CHAR_HP', context, {
          CHAR_HP0: charHp0,
        });
      }
      if (charDef0 !== null) {
        finalCharDef = evaluateDamageFormula('FINAL_CHAR_DEF', context, {
          CHAR_DEF0: charDef0,
        });
      }
      if (charRes0 !== null) {
        finalCharRes = evaluateDamageFormula('FINAL_CHAR_RES', context, {
          CHAR_RES0: charRes0,
        });
      }
      if (def0 !== null) {
        effectiveDef = evaluateDamageFormula('EFFECTIVE_DEF', context, {
          DEF0: def0,
        });
      }
      if (res0 !== null) {
        effectiveRes = evaluateDamageFormula('EFFECTIVE_RES', context, {
          RES0: res0,
        });
      }
      if (hp0 !== null) {
        finalHp = evaluateDamageFormula('ENEMY_MAX_HP', context, { HP0: hp0 });
      }
    } catch {
      // 缺少输入时保持 null。
    }

    return {
      atk0,
      finalAtk,
      charHp0,
      finalCharHp,
      charDef0,
      finalCharDef,
      charRes0,
      finalCharRes,
      baseAttackTime,
      baseAttackSpeed,
      attackSpeedMultiplier: spdZone.value,
      def0,
      effectiveDef,
      res0,
      effectiveRes,
      hp0,
      finalHp,
      contributionCount: contributions.length,
      activeContributionCount: contributions.filter((entry) => entry.active).length,
      expressions: {
        charHp:
          charHp0 !== null
            ? safeNamedExpr('FINAL_CHAR_HP', formulaBook, context, {
                CHAR_HP0: charHp0,
              })
            : null,
        atk:
          atk0 !== null
            ? safeNamedExpr('FINAL_ATK', formulaBook, context, { ATK0: atk0 })
            : null,
        charDef:
          charDef0 !== null
            ? safeNamedExpr('FINAL_CHAR_DEF', formulaBook, context, {
                CHAR_DEF0: charDef0,
              })
            : null,
        charRes:
          charRes0 !== null
            ? safeNamedExpr('FINAL_CHAR_RES', formulaBook, context, {
                CHAR_RES0: charRes0,
              })
            : null,
        attackSpeed:
          baseAttackSpeed !== null
            ? buildAttackSpeedExpr(formulaBook, context, baseAttackSpeed)
            : null,
        spdMultiplier: buildSpdMultiplierExpr(formulaBook, context),
        enemyDef:
          def0 !== null
            ? safeNamedExpr('EFFECTIVE_DEF', formulaBook, context, { DEF0: def0 })
            : null,
        enemyRes:
          res0 !== null
            ? safeNamedExpr('EFFECTIVE_RES', formulaBook, context, { RES0: res0 })
            : null,
        enemyHp:
          hp0 !== null
            ? safeNamedExpr('ENEMY_MAX_HP', formulaBook, context, { HP0: hp0 })
            : null,
      },
    };
  }, [formulaBook, operator, enemy, selectedRelics]);

  return (
    <div
      className={cn(
        'rounded-2xl border bg-fd-card p-4 text-fd-card-foreground shadow-sm',
        className,
      )}
    >
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold">战斗属性预览</h2>
          <p className="mt-0.5 text-sm text-fd-muted-foreground">
            选择干员与敌人，多选藏品后重算属性；定向装备默认赋给当前干员
          </p>
        </div>
        <p className="text-xs text-fd-muted-foreground">
          已选 {selectedRelics.length} 件藏品
          {computed
            ? ` · ${computed.activeContributionCount}/${computed.contributionCount} 条贡献生效`
            : ''}
          <span className="ml-2 text-fd-muted-foreground/80">graph 运行时判定</span>
        </p>
      </div>

      {indexError ? (
        <p className="mb-3 rounded-xl border border-dashed px-3 py-2 text-sm text-fd-muted-foreground">
          加载目录失败：{indexError}。请先运行 <code>pnpm docs:generate</code>。
        </p>
      ) : null}
      {detailError ? (
        <p className="mb-3 text-sm text-fd-muted-foreground">详情加载失败：{detailError}</p>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 我方干员面板 */}
        <section className="rounded-xl border bg-fd-background/60 p-3">
          <h3 className="mb-3 text-sm font-semibold">我方干员</h3>
          <EntitySelect
            label="干员"
            items={operatorIndex}
            selectedId={operatorId}
            selectedName={operator?.name ?? null}
            loading={indexLoading}
            onSelect={(item) => setOperatorId(item.id)}
            onClear={() => setOperatorId(null)}
          />
          {operator ? (
            <div className="mt-3">
              <p className="mb-1 text-[0.7rem] text-fd-muted-foreground">
                精{operator.phase} 等级 {operator.level} · {operator.profession} ·{' '}
                {operator.rarity}
              </p>
              <AttrRow
                label="最大生命 HP"
                base={formatNumber(computed?.charHp0 ?? null, 0)}
                computed={
                  computed?.finalCharHp != null
                    ? formatNumber(computed.finalCharHp)
                    : null
                }
                hint="FINAL_CHAR_HP · 点击结果查看公式"
                expression={computed?.expressions.charHp}
              />
              <AttrRow
                label="攻击力 ATK"
                base={formatNumber(computed?.atk0 ?? null, 0)}
                computed={
                  computed?.finalAtk != null ? formatNumber(computed.finalAtk) : null
                }
                hint="FINAL_ATK · 点击结果查看公式"
                expression={computed?.expressions.atk}
              />
              <AttrRow
                label="防御力 DEF"
                base={formatNumber(computed?.charDef0 ?? null, 0)}
                computed={
                  computed?.finalCharDef != null
                    ? formatNumber(computed.finalCharDef)
                    : null
                }
                hint="FINAL_CHAR_DEF · 点击结果查看公式"
                expression={computed?.expressions.charDef}
              />
              <AttrRow
                label="法术抗性 RES"
                base={formatNumber(computed?.charRes0 ?? null, 0)}
                computed={
                  computed?.finalCharRes != null
                    ? formatNumber(computed.finalCharRes)
                    : null
                }
                hint="FINAL_CHAR_RES · 点击结果查看公式"
                expression={computed?.expressions.charRes}
              />
              <AttrRow
                label="攻击速度"
                base={formatNumber(computed?.baseAttackSpeed ?? null, 0)}
                computed={
                  computed
                    ? formatNumber(
                        (computed.baseAttackSpeed ?? 100) *
                          computed.attackSpeedMultiplier,
                      )
                    : null
                }
                hint="基础 × SPD · 点击结果查看公式"
                expression={computed?.expressions.attackSpeed}
              />
              <AttrRow
                label="攻击间隔"
                base={formatNumber(computed?.baseAttackTime ?? null, 2)}
                hint="T₀（秒）"
              />
              <AttrRow
                label="SPD 攻速倍率"
                base={formatNumber(computed?.attackSpeedMultiplier ?? 1, 3)}
                hint="ATTACK_SPEED · 点击结果查看公式"
                expression={computed?.expressions.spdMultiplier}
              />
            </div>
          ) : (
            <p className="mt-4 text-sm text-fd-muted-foreground">请选择干员以显示属性</p>
          )}
        </section>

        {/* 敌方面板 */}
        <section className="rounded-xl border bg-fd-background/60 p-3">
          <h3 className="mb-3 text-sm font-semibold">敌方</h3>
          <EntitySelect
            label="敌人"
            items={enemyIndex}
            selectedId={enemyId}
            selectedName={enemy?.name ?? null}
            loading={indexLoading}
            onSelect={(item) => setEnemyId(item.id)}
            onClear={() => setEnemyId(null)}
          />
          {enemy ? (
            <div className="mt-3">
              <p className="mb-1 text-[0.7rem] text-fd-muted-foreground">
                level 0 · {enemy.prefabKey}
              </p>
              <AttrRow
                label="防御力 DEF"
                base={formatNumber(computed?.def0 ?? null, 0)}
                computed={
                  computed?.effectiveDef != null
                    ? formatNumber(computed.effectiveDef)
                    : null
                }
                hint="EFFECTIVE_DEF · 点击结果查看公式"
                expression={computed?.expressions.enemyDef}
              />
              <AttrRow
                label="法术抗性 RES"
                base={formatNumber(computed?.res0 ?? null, 0)}
                computed={
                  computed?.effectiveRes != null
                    ? formatNumber(computed.effectiveRes)
                    : null
                }
                hint="EFFECTIVE_RES · 点击结果查看公式"
                expression={computed?.expressions.enemyRes}
              />
              <AttrRow
                label="最大生命 HP"
                base={formatNumber(computed?.hp0 ?? null, 0)}
                computed={
                  computed?.finalHp != null ? formatNumber(computed.finalHp) : null
                }
                hint="ENEMY_MAX_HP · 点击结果查看公式"
                expression={computed?.expressions.enemyHp}
              />
            </div>
          ) : (
            <p className="mt-4 text-sm text-fd-muted-foreground">请选择敌人以显示属性</p>
          )}
        </section>
      </div>
    </div>
  );
}
