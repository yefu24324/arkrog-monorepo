/** 当前 FormulaBook class AST 的运行时公式弹层。 */

'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { FormulaExpression } from '@arkrog/arknights-knowledge-graph/formula';
import { cn } from '../lib/cn';
import { NumericFormulaDisplay } from './numeric-formula-display';

/** 点击最终攻击力数值后弹出当前 FormulaBook 的递归 AST。 */
export function FormulaResultPopover({
  value,
  expression,
  labels,
  className,
}: {
  value: string;
  expression: FormulaExpression | null | undefined;
  labels?: Readonly<Record<string, string>>;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const width = Math.min(640, window.innerWidth - 16);
    const height = panelRef.current?.offsetHeight ?? 400;
    setPosition({
      // 按实际弹层尺寸定位，并在小视口中保留 8px 安全距离。
      top: Math.max(8, Math.min(rect.bottom + 8, window.innerHeight - height - 8)),
      left: Math.min(
        Math.max(8, rect.right - width),
        window.innerWidth - width - 8,
      ),
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function closeOnOutsidePointer(event: PointerEvent) {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  if (!expression) return <span className={cn('font-medium', className)}>{value}</span>;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          'rounded px-1 font-medium text-fd-primary underline decoration-dotted underline-offset-4',
          className,
        )}
      >
        {value}
      </button>
      {open
        ? createPortal(
            <div
              ref={panelRef}
              role="dialog"
              aria-label="最终攻击力公式"
              className="fixed z-[90] w-[min(40rem,calc(100vw-1rem))] overflow-hidden rounded-xl border bg-fd-card text-fd-card-foreground shadow-xl ring-1 ring-black/5 dark:ring-white/10"
              style={{ top: position.top, left: position.left }}
            >
              <div className="flex items-center gap-3 border-b bg-fd-muted/35 px-4 py-3">
                <span className="flex size-7 items-center justify-center rounded-md border bg-fd-background font-serif text-xs font-semibold text-fd-primary">
                  ƒ
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium">干员最终攻击力</p>
                  <p className="text-[0.65rem] text-fd-muted-foreground">公式计算</p>
                </div>
                <span className="ml-auto rounded-md bg-fd-primary/10 px-2 py-1 font-mono text-xs font-semibold text-fd-primary">
                  {value}
                </span>
                <button
                  type="button"
                  aria-label="关闭公式"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-1 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-foreground"
                >
                  <X className="size-3.5" />
                </button>
              </div>
              <div className="max-h-80 overflow-auto bg-gradient-to-br from-fd-primary/[0.04] via-fd-card to-fd-muted/20 px-3 py-2">
                <NumericFormulaDisplay
                  node={expression}
                  labels={labels}
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
