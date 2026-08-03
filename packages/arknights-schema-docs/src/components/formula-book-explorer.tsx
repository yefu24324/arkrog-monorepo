/** 只加载并展示 char_final_atk 的公式簿页面。 */

'use client';

import { useEffect, useState } from 'react';
import { AdvancedFormula } from './advanced-formula';
import {
  loadFormulaBookPage,
  type FormulaBookPageData,
} from '../lib/formula-book-runtime';

/** 公式簿页面仅负责加载生成后的单公式 AST。 */
export function FormulaBookExplorer() {
  const [data, setData] = useState<FormulaBookPageData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void loadFormulaBookPage()
      .then((payload) => {
        if (!cancelled) setData(payload);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : String(error));
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loadError) {
    return (
      <div className="not-prose my-6 rounded-xl border border-dashed px-4 py-8 text-center text-sm text-fd-muted-foreground">
        加载公式失败：{loadError}
      </div>
    );
  }
  if (!data) {
    return (
      <div className="not-prose my-6 rounded-xl border px-4 py-8 text-center text-sm text-fd-muted-foreground">
        正在加载公式…
      </div>
    );
  }

  return <AdvancedFormula formula={data.formula} />;
}
