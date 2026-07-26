# @arkrog/arknights-schema-docs

基于 [Fumadocs](https://fumadocs.dev) 的明日方舟类型与游戏数据浏览站。

`scripts/generate-docs.ts` 直接解析 `@arkrog/arknights-schema` 的 `.types.ts` 与 JSDoc 生成类型页面，同时读取知识图谱导出的藏品乘区 JSON。Schema 包不保存中间 Markdown 文档。

## 常用命令

```bash
# 从 TypeScript/JSDoc 与知识图谱导出结果重新组装文档内容
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

- 类型输入：`packages/arknights-schema/src/types/**/*.types.ts`，字段和定义说明来自 JSDoc。
- 游戏数据输入：`pnpm graph:export` 写入 `docs/game/relic-zone-validation/{graph,formula}/rogue_N.json` 的结果，以及可选的 `human/rogue_N.json`。
- 输出：`content/docs/types/**`、`content/docs/relic-zones/**`、`content/docs/relic-zone-validation/**`、`generated/type-sources.json` 与对应 `public/data/**`，均可重新生成。
- 类型字段使用 `CnTypeTable` 展示，类型名称可跳转到对应模块页面。
- `TypeSource` 展示逻辑模块的 TypeScript 源码快照。
- `RelicZoneExplorer` 负责主题选择、搜索、乘区过滤及 buffs 原数据展开。
- `RelicZoneValidationExplorer` 对照 graph、formula 和 `human > formula` 最终乘区，供人工确认与纠正。

## 目录结构

```
packages/arknights-schema-docs/
  scripts/generate-docs.ts   # 组装脚本
  content/docs/              # Fumadocs 内容（大部分由脚本生成）
  generated/                 # TypeScript 源码快照
  src/app/                   # Next.js App Router
  src/components/            # 类型表、源码和藏品乘区组件
```
