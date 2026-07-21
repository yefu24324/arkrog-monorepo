/**
 * 面向中文阅读的字段类型表：首屏直接展示「属性 / 类型 / 说明」，
 * 并支持在复杂类型表达式中为多个自定义类型挂跳转链接。
 */

import type { ReactNode } from 'react';
import Link from 'fumadocs-core/link';
import { cn } from '@/lib/cn';

/** 单个字段的展示数据。 */
export interface CnTypeField {
  /** TypeScript 类型表达式原文。 */
  type: string;
  /** 字段注释（通常来自 JSDoc）。 */
  description?: string;
  /** 是否必需。 */
  required?: boolean;
  /** 表达式中可跳转的自定义类型名 → 文档路径。 */
  typeLinks?: Record<string, string>;
  /**
   * 主跳转目标；复杂表达式（如 Record 的值类型）时指向核心自定义类型。
   * 与 typeLinks 一并用于渲染可点击类型名。
   */
  typeDescriptionLink?: string;
}

interface CnTypeTableProps {
  /** 字段名 → 字段元数据。 */
  type: Record<string, CnTypeField>;
  className?: string;
}

/**
 * 合并 typeLinks 与 typeDescriptionLink，得到最终跳转映射。
 */
function resolveLinks(field: CnTypeField): Record<string, string> {
  const links: Record<string, string> = { ...(field.typeLinks ?? {}) };
  if (!field.typeDescriptionLink) return links;

  // 已有映射时，保证主链接对应的类型名也在表中。
  if (Object.keys(links).length > 0) {
    const alreadyMapped = Object.values(links).includes(field.typeDescriptionLink);
    if (!alreadyMapped) {
      const primary =
        field.type.match(/^Record<[^,]+,\s*([A-Z][A-Za-z0-9_]*)\s*>$/)?.[1] ??
        field.type.match(/^([A-Z][A-Za-z0-9_]*)(?:\[\])?$/)?.[1];
      if (primary) links[primary] = field.typeDescriptionLink;
    }
    return links;
  }

  const primary =
    field.type.match(/^Record<[^,]+,\s*([A-Z][A-Za-z0-9_]*)\s*>$/)?.[1] ??
    field.type.match(/^(?:Partial|Required|Readonly|Array|Promise|NonNullable)<\s*([A-Z][A-Za-z0-9_]*)\s*>$/)?.[1] ??
    field.type.match(/^([A-Z][A-Za-z0-9_]*)(?:\[\])?$/)?.[1];
  if (primary) links[primary] = field.typeDescriptionLink;
  return links;
}

/**
 * 按最长优先匹配，把类型表达式拆成可链接片段。
 */
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
    if (!/[A-Za-z_]/.test(expression[index]!)) {
      parts.push(expression[index]);
      index += 1;
      continue;
    }

    let matched: string | null = null;
    for (const name of names) {
      if (
        expression.startsWith(name, index) &&
        !/[A-Za-z0-9_]/.test(expression[index + name.length] ?? '')
      ) {
        matched = name;
        break;
      }
    }

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

    const identifier = expression.slice(index).match(/^[A-Za-z_][A-Za-z0-9_]*/)?.[0];
    if (!identifier) {
      parts.push(expression[index]);
      index += 1;
      continue;
    }
    parts.push(identifier);
    index += identifier.length;
  }

  return parts;
}

/** 中文三列表格：属性、类型、说明始终可见。 */
export function CnTypeTable({ type, className }: CnTypeTableProps) {
  const entries = Object.entries(type);

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
          {entries.map(([name, field]) => {
            const links = resolveLinks(field);
            return (
              <tr
                key={name}
                className="border-b last:border-b-0 align-top hover:bg-fd-accent/40"
              >
                <td className="px-4 py-3">
                  <code className="font-mono font-medium text-fd-primary">
                    {name}
                    {!field.required ? '?' : ''}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <code className="break-all whitespace-pre-wrap font-mono text-[0.8125rem]">
                    {renderLinkedType(field.type, links)}
                  </code>
                </td>
                <td className="px-4 py-3 leading-relaxed text-fd-muted-foreground">
                  {field.description ?? '—'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
