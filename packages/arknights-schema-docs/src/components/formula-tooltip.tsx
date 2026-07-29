/** 数字公式节点专用 Tooltip，使用 Fumadocs 同源的 Base UI 浮层能力。 */

'use client';

import { Tooltip } from '@base-ui/react/tooltip';
import type { ReactElement, ReactNode } from 'react';

/** 通过 Portal 展示公式项来源，避免被公式面板的滚动区域裁剪。 */
export function FormulaTooltip({
  content,
  children,
}: {
  content: ReactNode;
  children: ReactElement;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={children} delay={200} />
      <Tooltip.Portal>
        <Tooltip.Positioner side="top" sideOffset={7} className="z-[110]">
          <Tooltip.Popup className="max-w-72 origin-(--transform-origin) rounded-lg border bg-fd-popover px-2.5 py-1.5 text-xs leading-relaxed text-fd-popover-foreground shadow-lg data-[closed]:animate-fd-popover-out data-[open]:animate-fd-popover-in">
            {content}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
