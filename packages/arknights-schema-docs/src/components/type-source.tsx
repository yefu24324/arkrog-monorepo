/**
 * 以纯 React 文本节点渲染 TypeScript 源码，避免把源码直接写入 MDX。
 */

import fs from 'node:fs';
import path from 'node:path';

interface TypeSourceProps {
  /** 类型模块键，对应 generated/type-sources.json 中的键。 */
  name: string;
}

/** 读取生成器根据 TypeScript 源文件创建的源码快照。 */
function readTypeSources(): Record<string, string> {
  const filePath = path.join(process.cwd(), 'generated', 'type-sources.json');
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, string>;
}

/** 展示指定逻辑模块的 TypeScript 源码。 */
export function TypeSource({ name }: TypeSourceProps) {
  const code = readTypeSources()[name];
  if (!code) {
    return (
      <p className="text-fd-muted-foreground text-sm">
        未找到类型模块 <code>{name}</code> 的源码快照，请先运行{' '}
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
