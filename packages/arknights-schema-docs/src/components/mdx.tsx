import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CnTypeTable } from '@/components/cn-type-table';
import { TypeSource } from '@/components/type-source';

/** 合并 Fumadocs 默认组件与文档站自定义组件。 */
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    CnTypeTable,
    TypeSource,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
