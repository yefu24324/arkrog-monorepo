/**
 * 面向中文阅读的字段类型表，并支持复杂类型表达式内的类型跳转。
 */

import type { ReactNode } from 'react';
import Link from 'fumadocs-core/link';
import { cn } from '@/lib/cn';

/** 单个字段的展示数据。 */
export interface CnTypeField {
  /** TypeScript 类型表达式原文。 */
  type: string;
  /** 直接从字段 JSDoc 提取的说明。 */
  description?: string;
  /** 是否必需。 */
  required?: boolean;
  /** 表达式中可跳转的自定义类型名与文档路径。 */
  typeLinks?: Record<string, string>;
  /** 复杂表达式的主要类型跳转目标。 */
  typeDescriptionLink?: string;
}

interface CnTypeTableProps {
  /** 字段名与字段元数据映射。 */
  type: Record<string, CnTypeField>;
  className?: string;
}

/** 合并显式类型链接与复杂表达式的主要跳转目标。 */
function resolveLinks(field: CnTypeField): Record<string, string> {
  const links: Record<string, string> = { ...(field.typeLinks ?? {}) };
  if (!field.typeDescriptionLink || Object.values(links).includes(field.typeDescriptionLink)) {
    return links;
  }
  const primary =
    field.type.match(/^Record<[^,]+,\s*([A-Z][A-Za-z0-9_]*)\s*>$/)?.[1] ??
    field.type.match(/^([A-Z][A-Za-z0-9_]*)(?:\[\])?$/)?.[1];
  if (primary) links[primary] = field.typeDescriptionLink;
  return links;
}

/** 按最长名称优先，把类型表达式拆成文本与可跳转类型片段。 */
function renderLinkedType(
  expression: string,
  typeLinks: Record<string, string>,
): ReactNode {
  const names = Object.keys(typeLinks).sort((left, right) => right.length - left.length);
  if (names.length === 0) return expression;

  const parts: ReactNode[] = [];
  let index = 0;
  let partKey = 0;
  while (index < expression.length) {
    const matched = names.find(
      (name) =>
        (index === 0 || !/[A-Za-z0-9_]/.test(expression[index - 1] ?? '')) &&
        expression.startsWith(name, index) &&
        !/[A-Za-z0-9_]/.test(expression[index + name.length] ?? ''),
    );
    if (matched && typeLinks[matched]) {
      parts.push(
        <Link
          key={`link-${partKey++}`}
          href={typeLinks[matched]}
          className="text-fd-primary underline underline-offset-2 hover:opacity-80"
        >
          {matched}
        </Link>,
      );
      index += matched.length;
      continue;
    }
    parts.push(expression[index]);
    index += 1;
  }
  return parts;
}

/** 中文三列表格：属性、类型和 JSDoc 说明始终可见。 */
export function CnTypeTable({ type, className }: CnTypeTableProps) {
  return (
    <div
      className={cn(
        'not-prose my-6 overflow-x-auto rounded-2xl border bg-fd-card text-fd-card-foreground',
        className,
      )}
    >
      <table className="w-full min-w-[36rem] border-collapse text-sm">
        <thead>
          <tr className="border-b bg-fd-muted/40 text-left text-fd-muted-foreground">
            <th className="w-[22%] px-4 py-2.5 font-medium">属性</th>
            <th className="w-[28%] px-4 py-2.5 font-medium">类型</th>
            <th className="px-4 py-2.5 font-medium">说明</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type).map(([name, field]) => (
            <tr key={name} className="border-b last:border-b-0 align-top hover:bg-fd-accent/40">
              <td className="px-4 py-3">
                <code className="font-mono font-medium text-fd-primary">
                  {name}{!field.required ? '?' : ''}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="break-all whitespace-pre-wrap font-mono text-[0.8125rem]">
                  {renderLinkedType(field.type, resolveLinks(field))}
                </code>
              </td>
              <td className="px-4 py-3 leading-relaxed text-fd-muted-foreground">
                {field.description ?? '待补充。'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
