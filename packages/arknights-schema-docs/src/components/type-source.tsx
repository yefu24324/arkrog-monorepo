/**
 * 以纯 React 文本节点渲染 TypeScript 源码，避免把源码写进 MDX 导致解析失败。
 */

import fs from 'node:fs';
import path from 'node:path';

interface TypeSourceProps {
  /** 类型导出名，对应 generated/type-sources.json 中的键。 */
  name: string;
}

/** 读取生成脚本产出的源码快照。 */
function readTypeSources(): Record<string, string> {
  const filePath = path.join(process.cwd(), 'generated', 'type-sources.json');
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, string>;
}

/** 展示指定类型的 TypeScript 源码块。 */
export function TypeSource({ name }: TypeSourceProps) {
  const code = readTypeSources()[name];
  if (!code) {
    return (
      <p className="text-fd-muted-foreground text-sm">
        未找到类型 <code>{name}</code> 的源码快照，请先运行{' '}
        <code>pnpm docs:generate</code>。
      </p>
    );
  }

  return (
    <pre className="overflow-x-auto rounded-lg border bg-fd-secondary/50 p-4 text-sm">
      <code>{code}</code>
    </pre>
  );
}
