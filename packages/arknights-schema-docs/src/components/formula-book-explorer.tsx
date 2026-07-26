/**
 * 面向普通读者的伤害公式簿。
 * 所有公式按计算层级直接陈列，读者无需理解稳定 ID 或先进行筛选。
 */

'use client';

import { useEffect, useState } from 'react';
import type { DamageFormulaId } from '@arkrog/arknights-knowledge-graph/formula';
import { AdvancedFormula } from '@/components/advanced-formula';
import { cn } from '@/lib/cn';
import {
  loadFormulaBook,
  type FormulaBookData,
} from '@/lib/formula-runtime';

/** schema-docs 中的完整公式簿展示页。 */
export function FormulaBookExplorer() {
  const [data, setData] = useState<FormulaBookData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
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

  /** 点击子公式时平滑滚动到同页对应公式。 */
  function scrollToFormula(formulaId: DamageFormulaId) {
    document.getElementById(`formula-${formulaId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
        正在加载伤害公式簿…
      </div>
    );
  }

  return (
    <div className="not-prose my-6 space-y-5">
      <div className="sticky top-16 z-20 flex flex-col gap-3 rounded-2xl border bg-fd-card/95 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">完整伤害公式</p>
          <p className="mt-1 text-xs text-fd-muted-foreground">
            共 {data.formulas.length} 条，按属性、减伤、伤害包与每秒伤害的计算顺序展示。
          </p>
        </div>
        <div className="inline-flex shrink-0 self-start rounded-xl border bg-fd-background p-1 text-xs sm:self-auto">
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

      <div className="space-y-5">
        {data.formulas.map((formula, index) => (
          <section
            key={formula.id}
            id={`formula-${formula.id}`}
            className="scroll-mt-36 rounded-2xl border bg-fd-card p-5 shadow-sm sm:p-6"
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

      <div className="rounded-xl border border-dashed bg-fd-muted/15 px-4 py-3">
        <p className="text-xs font-medium">如何阅读</p>
        <p className="mt-1 text-xs leading-5 text-fd-muted-foreground">
          从等号右侧按括号和乘除顺序计算。鼠标移入高亮乘区，可查看该区内部的来源如何相加或相乘；点击紫色子公式会滚动到它在本页的完整定义。
        </p>
      </div>
    </div>
  );
}
