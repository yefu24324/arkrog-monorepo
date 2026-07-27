/**
 * 面向普通读者的战斗公式簿。
 * 公式按主要输出对象区分我方与敌方，再按属性、伤害和其他用途分组。
 */

'use client';

import { useEffect, useState } from 'react';
import type { FormulaId } from '@arkrog/arknights-knowledge-graph/formula';
import { AdvancedFormula } from '@/components/advanced-formula';
import { cn } from '@/lib/cn';
import {
  loadFormulaBook,
  type FormulaBookData,
} from '@/lib/formula-runtime';

/** 公式主要输出对象。 */
type FormulaSide = 'friendly' | 'enemy';

/** 公式在同一输出对象下的用途分类。 */
type FormulaCategory = 'attribute' | 'damage' | 'other';

/** 单条公式的固定页面分类。 */
interface FormulaClassification {
  category: FormulaCategory;
  side: FormulaSide;
}

/** 一级分类的页面标题与说明。 */
const FORMULA_SIDE_META: Readonly<
  Record<FormulaSide, { description: string; label: string }>
> = {
  friendly: {
    description: '以我方属性、资源、承伤或对敌输出为最终结果。',
    label: '我方',
  },
  enemy: {
    description: '以敌方属性、减伤或敌人造成的伤害为最终结果。',
    label: '敌方',
  },
};

/** 二级分类的页面标题与说明。 */
const FORMULA_CATEGORY_META: Readonly<
  Record<FormulaCategory, { description: string; label: string }>
> = {
  attribute: {
    description: '生命、攻击、防御、法抗、费用、阻挡与闪避等最终属性。',
    label: '属性加成',
  },
  damage: {
    description: '伤害包、承伤减免、伤害降低、元素损伤与每秒伤害。',
    label: '伤害加成',
  },
  other: {
    description: '初始资源、技力回复与尚未归入属性或伤害的结算。',
    label: '其他加成',
  },
};

/** 页面按固定顺序展示二级分类。 */
const FORMULA_CATEGORY_ORDER: readonly FormulaCategory[] = [
  'attribute',
  'damage',
  'other',
];

/**
 * 公式分类按“主要输出对象”定义，而不是按公式中引用了哪一方的属性定义。
 * satisfies 会在新增 FormulaId 后强制补充分类，避免公式静默遗漏。
 */
const FORMULA_CLASSIFICATION = {
  FINAL_ATK: { side: 'friendly', category: 'attribute' },
  FINAL_CHAR_HP: { side: 'friendly', category: 'attribute' },
  FINAL_CHAR_DEF: { side: 'friendly', category: 'attribute' },
  FINAL_CHAR_RES: { side: 'friendly', category: 'attribute' },
  FINAL_DEPLOY_COST: { side: 'friendly', category: 'attribute' },
  FINAL_INITIAL_DP: { side: 'friendly', category: 'other' },
  FINAL_BLOCK_COUNT: { side: 'friendly', category: 'attribute' },
  FINAL_INITIAL_SP: { side: 'friendly', category: 'other' },
  FINAL_SP_COST: { side: 'friendly', category: 'other' },
  FINAL_SP_RECOVERY_PER_SECOND: { side: 'friendly', category: 'other' },
  SP_GAIN_PER_TRIGGER: { side: 'friendly', category: 'other' },
  PHYSICAL_EVASION_RATE: { side: 'friendly', category: 'attribute' },
  MAGICAL_EVASION_RATE: { side: 'friendly', category: 'attribute' },
  FINAL_ENEMY_ATK: { side: 'enemy', category: 'attribute' },
  FINAL_ENEMY_ATTACK_SPEED: { side: 'enemy', category: 'attribute' },
  FINAL_ENEMY_MOVE_SPEED: { side: 'enemy', category: 'attribute' },
  FINAL_DEPLOY_LIMIT: { side: 'friendly', category: 'other' },
  FINAL_ENEMY_DEF: { side: 'enemy', category: 'attribute' },
  FINAL_ENEMY_RES: { side: 'enemy', category: 'attribute' },
  EFFECTIVE_DEF: { side: 'enemy', category: 'attribute' },
  EFFECTIVE_RES: { side: 'enemy', category: 'attribute' },
  ENEMY_MAX_HP: { side: 'enemy', category: 'attribute' },
  FINAL_ENEMY_DAMAGE_RESISTANCE: { side: 'enemy', category: 'damage' },
  CHAR_TAKEN_DAMAGE: { side: 'friendly', category: 'other' },
  ENEMY_OUTGOING_DAMAGE: { side: 'enemy', category: 'damage' },
  ELEMENTAL_IMPAIRMENT_TO_ENEMY: { side: 'friendly', category: 'damage' },
  ELEMENTAL_IMPAIRMENT_TO_CHAR: { side: 'friendly', category: 'other' },
  PHYSICAL_MAIN_DAMAGE: { side: 'friendly', category: 'damage' },
  MAGICAL_MAIN_DAMAGE: { side: 'friendly', category: 'damage' },
  PURE_MAIN_DAMAGE: { side: 'friendly', category: 'damage' },
  ELEMENTAL_MAIN_DAMAGE: { side: 'friendly', category: 'damage' },
  TOTAL_DAMAGE: { side: 'friendly', category: 'damage' },
  DPS: { side: 'friendly', category: 'damage' },
} as const satisfies Record<FormulaId, FormulaClassification>;

/** schema-docs 中的完整公式簿展示页。 */
export function FormulaBookExplorer() {
  const [data, setData] = useState<FormulaBookData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedSide, setSelectedSide] = useState<FormulaSide>('friendly');
  const [selectedCategory, setSelectedCategory] =
    useState<FormulaCategory>('attribute');
  const [pendingFormulaId, setPendingFormulaId] = useState<FormulaId | null>(null);
  const [expandFormulaReferences, setExpandFormulaReferences] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // 与战斗预览共享静态公式簿请求，避免同一页面重复拉取 JSON。
    void loadFormulaBook()
      .then((payload) => {
        if (!cancelled) setData(payload);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setLoadError(error instanceof Error ? error.message : String(error));
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!pendingFormulaId) return;
    const classification = FORMULA_CLASSIFICATION[pendingFormulaId];
    if (
      classification.side !== selectedSide ||
      classification.category !== selectedCategory
    ) {
      return;
    }

    // 等待新分类的公式卡片挂载后再滚动，保证跨分类引用也能正确定位。
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(`formula-${pendingFormulaId}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setPendingFormulaId(null);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [pendingFormulaId, selectedCategory, selectedSide]);

  /** 点击子公式时切换到目标分类，并平滑滚动到对应公式。 */
  function scrollToFormula(formulaId: FormulaId) {
    const classification = FORMULA_CLASSIFICATION[formulaId];
    setSelectedSide(classification.side);
    setSelectedCategory(classification.category);
    setPendingFormulaId(formulaId);
  }

  /** 切换一级分类时保留当前二级页签，便于直接比较双方同类公式。 */
  function selectSide(side: FormulaSide) {
    setPendingFormulaId(null);
    setSelectedSide(side);
  }

  /** 切换二级分类时取消尚未执行的跨分类定位。 */
  function selectCategory(category: FormulaCategory) {
    setPendingFormulaId(null);
    setSelectedCategory(category);
  }

  if (loadError) {
    return (
      <div className="not-prose my-6 rounded-2xl border border-dashed px-4 py-8 text-center text-sm text-fd-muted-foreground">
        加载公式簿失败：{loadError}。请先运行 <code>pnpm docs:generate</code>。
      </div>
    );
  }

  if (!data) {
    return (
      <div className="not-prose my-6 rounded-2xl border px-4 py-10 text-center text-sm text-fd-muted-foreground">
        正在加载战斗公式簿…
      </div>
    );
  }

  // 静态 JSON 保留公式簿定义顺序，页面只筛选当前两级分类。
  const visibleFormulas = data.formulas.filter((formula) => {
    const classification = FORMULA_CLASSIFICATION[formula.id];
    return (
      classification.side === selectedSide &&
      classification.category === selectedCategory
    );
  });
  const sideFormulaCount = data.formulas.filter(
    (formula) => FORMULA_CLASSIFICATION[formula.id].side === selectedSide,
  ).length;

  return (
    <div className="not-prose my-6 space-y-5">
      <div className="sticky top-16 z-20 space-y-3 rounded-2xl border bg-fd-card/95 p-4 shadow-sm backdrop-blur">
        {/* 一级导航明确区分公式最终作用于我方还是敌方。 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">完整战斗公式</p>
            <p className="mt-1 text-xs text-fd-muted-foreground">
              {FORMULA_SIDE_META[selectedSide].description} 当前共 {sideFormulaCount} 条。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex rounded-xl border bg-fd-background p-1 text-sm">
              {(Object.keys(FORMULA_SIDE_META) as FormulaSide[]).map((side) => (
                <button
                  key={side}
                  type="button"
                  onClick={() => selectSide(side)}
                  className={cn(
                    'rounded-lg px-4 py-1.5 transition-colors',
                    selectedSide === side && 'bg-fd-primary font-medium text-fd-primary-foreground',
                  )}
                >
                  {FORMULA_SIDE_META[side].label}
                </button>
              ))}
            </div>
            <div className="inline-flex rounded-xl border bg-fd-background p-1 text-xs">
              <button
                type="button"
                onClick={() => setExpandFormulaReferences(false)}
                className={cn(
                  'rounded-lg px-3 py-1.5 transition-colors',
                  !expandFormulaReferences && 'bg-fd-accent font-medium',
                )}
              >
                简洁公式
              </button>
              <button
                type="button"
                onClick={() => setExpandFormulaReferences(true)}
                className={cn(
                  'rounded-lg px-3 py-1.5 transition-colors',
                  expandFormulaReferences && 'bg-fd-accent font-medium',
                )}
              >
                展开子公式
              </button>
            </div>
          </div>
        </div>

        {/* 二级导航固定展示三个用途，空分类也保留入口。 */}
        <div className="flex gap-1 overflow-x-auto border-t pt-3">
          {FORMULA_CATEGORY_ORDER.map((category) => {
            const count = data.formulas.filter((formula) => {
              const classification = FORMULA_CLASSIFICATION[formula.id];
              return (
                classification.side === selectedSide &&
                classification.category === category
              );
            }).length;
            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={cn(
                  'shrink-0 rounded-lg px-3 py-1.5 text-xs transition-colors',
                  selectedCategory === category
                    ? 'bg-fd-accent font-medium text-fd-accent-foreground'
                    : 'text-fd-muted-foreground hover:bg-fd-muted/40',
                )}
              >
                {FORMULA_CATEGORY_META[category].label}
                <span className="ml-1 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-dashed bg-fd-muted/15 px-4 py-3">
        <p className="text-sm font-medium">
          {FORMULA_SIDE_META[selectedSide].label} ·{' '}
          {FORMULA_CATEGORY_META[selectedCategory].label}
        </p>
        <p className="mt-1 text-xs leading-5 text-fd-muted-foreground">
          {FORMULA_CATEGORY_META[selectedCategory].description}
        </p>
      </div>

      {visibleFormulas.length > 0 ? (
        <div className="space-y-5">
          {visibleFormulas.map((formula, index) => (
            <section
              key={formula.id}
              id={`formula-${formula.id}`}
              className="scroll-mt-64 rounded-2xl border bg-fd-card p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-xs font-semibold text-fd-primary">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-xl font-semibold">{formula.name}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-fd-muted-foreground">
                    {formula.tooltip}
                  </p>
                </div>
              </div>

              <AdvancedFormula
                formula={formula}
                book={data}
                expandFormulaReferences={expandFormulaReferences}
                onSelectFormula={scrollToFormula}
              />
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed px-4 py-12 text-center text-sm text-fd-muted-foreground">
          当前分类暂无公式。
        </div>
      )}

      <div className="rounded-xl border border-dashed bg-fd-muted/15 px-4 py-3">
        <p className="text-xs font-medium">如何阅读</p>
        <p className="mt-1 text-xs leading-5 text-fd-muted-foreground">
          从等号右侧按括号和乘除顺序计算。鼠标移入高亮乘区，可查看该区内部的来源如何相加或相乘；点击紫色子公式会自动切换分类，并滚动到它在本页的完整定义。
        </p>
      </div>
    </div>
  );
}
