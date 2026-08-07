/** 使用 FormulaZoneId 源码注释展示可交互的最终公式 AST。 */

import type { FormulaAstFormulaNode } from '../lib/formula-book-runtime';
import { ChineseFormulaDisplay } from './chinese-formula-display';

/** 单公式画布使用 Chip 与可展开表达式，不展示纵向 AST 卡片。 */
export function AdvancedFormula({ formula }: { formula: FormulaAstFormulaNode }) {
  return (
    <figure className="not-prose my-0 overflow-hidden rounded-xl border bg-fd-card text-fd-card-foreground shadow-sm">
      <figcaption className="flex items-center gap-3 border-b bg-fd-muted/35 px-4 py-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-fd-background text-xs font-semibold text-fd-primary shadow-xs">
          公式
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-fd-foreground">{formula.comment}</p>
          <p className="truncate font-mono text-[0.65rem] text-fd-muted-foreground">{formula.id}</p>
        </div>
        <span className="ml-auto rounded-full border bg-fd-background px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-fd-muted-foreground">
          公式簿
        </span>
      </figcaption>
      <div className="relative bg-gradient-to-br from-fd-primary/[0.055] via-fd-card to-fd-muted/25 px-3 sm:px-6">
        <ChineseFormulaDisplay node={formula} />
      </div>
    </figure>
  );
}
