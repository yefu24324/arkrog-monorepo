# @arkrog/arknights-schema-docs

基于 [Fumadocs](https://fumadocs.dev) 的 `@arkrog/arknights-schema` 类型文档浏览站。

文档内容不手写维护：由 `scripts/generate-docs.ts` 读取 schema 包内逻辑类型模块与一一对应的中文 Markdown，组装为 MDX 页面；每个页面可包含多个强关联类型章节。

## 常用命令

```bash
# 从 schema 包重新组装文档内容
pnpm docs:generate

# 组装后启动开发服务器（默认 http://localhost:3000）
pnpm --filter @arkrog/arknights-schema-docs dev

# 生产构建
pnpm --filter @arkrog/arknights-schema-docs build
```

根目录也可使用：

```bash
pnpm schema:docs:generate
pnpm schema:docs:dev
pnpm schema:docs:build
```

## 生成约定

- 输入：`packages/arknights-schema/src/types/**/*.types.ts` 与一一对应的 `packages/arknights-schema/docs/types/**/*.md`
- 输出：
  - `content/docs/**`（`types/` 为全量生成结果，已 gitignore）
  - `generated/type-sources.json`（类型源码快照，供页面内展示）
- 字段区使用中文三列 `CnTypeTable`（属性 / 类型 / 说明），说明直接展示 JSDoc
- `Record<string, Topic>` 等复杂表达式会为内部自定义类型生成 `typeLinks` 与 `typeDescriptionLink`
- TypeScript 源码通过 `<TypeSource />` 组件渲染，避免 MDX 解析源码中的泛型/花括号

## 目录结构

```
packages/arknights-schema-docs/
  scripts/generate-docs.ts   # 组装脚本
  content/docs/              # Fumadocs 内容（大部分由脚本生成）
  generated/                 # 源码快照 JSON
  src/app/                   # Next.js App Router
  src/components/            # MDX 组件（含 TypeSource）
```
