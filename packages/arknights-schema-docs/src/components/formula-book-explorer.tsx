/** 加载并展示全部最终属性公式的公式簿页面。 */

'use client';

import { useEffect, useState } from 'react';
import { AdvancedFormula } from './advanced-formula';
import {
  loadFormulaBookPage,
  type FormulaBookPageData,
} from '../lib/formula-book-runtime';

/** 公式簿页面负责加载生成后的最终公式 AST 列表。 */
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

  return (
    <div className="not-prose space-y-6">
      {data.formulas.map((formula) => (
        <AdvancedFormula key={formula.id} formula={formula} />
      ))}
    </div>
  );
}
