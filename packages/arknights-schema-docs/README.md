# @arkrog/arknights-schema-docs

基于 [Fumadocs](https://fumadocs.dev) 的明日方舟类型与游戏数据浏览站。

`scripts/generate-docs.ts` 直接解析 `@arkrog/arknights-schema` 的 `.types.ts` 与 JSDoc 生成类型页面，同时读取知识图谱直出的乘区校验 JSON。Schema 包不保存中间 Markdown 文档。

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
- 游戏数据输入：`docs:generate` 调用 `arknights-gamedata-report --out public/gamedata-report` 生成报告，并让 `graph:export-relic-zones --out` 把 Graph 结果直接覆盖到 `public/data/zone-validation/graph/**`。
- 人工历史：`public/human-zone-validation/${topicId}.json` 是直接发布且人工维护的源码文件；生成流程只校验，绝不覆盖。缺失主题文件时页面按空历史处理。
- 输出：`content/docs/types/**`、`content/docs/relic-zones/**`、`content/docs/zone-validation/**`、`generated/type-sources.json`、`public/gamedata-report/**` 与对应的可再生成 `public/data/**`。
- 类型字段使用 `CnTypeTable` 展示，类型名称可跳转到对应模块页面。
- `TypeSource` 展示逻辑模块的 TypeScript 源码快照。
- `RelicZoneExplorer` 负责主题选择、搜索、乘区过滤及 buffs 原数据展开。
- `ZoneValidationExplorer` 对照 Graph、页面即时运行的 Mechanics 与人工历史；藏品执行完整三方校验，NORMAL 难度先展示 GameData 行和待补充的分析占位列。
- 藏品乘区页的 NORMAL 难度按等级降序展示，单行只分析本级乘区；属性预览通过 `applyDifficulty` 累计应用所选等级及以下规则。
- `rogue_6` 在难度表后展示实托邦、乌托邦与概念体；藏品乘区页把选择累计应用到 FormulaBook，乘区校验页仅保留待分析占位列。

## 人工乘区历史

一件藏品保存一条记录；同一 `zoneId` 可以出现多次，重复次数参与对照。`item` 使用已经按目标乘区规范化的 JSON 数字：

```json
{
  "relics": [
    {
      "name": "钝爪-新典训",
      "id": "rogue_6_relic_assign_1",
      "zones": [
        {
          "zoneId": "char_in_atk_mul",
          "item": 0.1
        }
      ]
    }
  ]
}
```

在乘区校验表中悬停或聚焦“程序结果”单元格，可把该藏品的当前 Mechanics 结果整条存入浏览器草稿。顶部“复制 JSON”与“下载 JSON”会导出完整主题文件；浏览器不能直接写回仓库，仍需人工覆盖 `public/human-zone-validation/${topicId}.json`。复制或下载不会清除未保存提示。

## 目录结构

```
packages/arknights-schema-docs/
  scripts/generate-docs.ts   # 组装脚本
  content/docs/              # Fumadocs 内容（大部分由脚本生成）
  generated/                 # TypeScript 源码快照
  src/app/                   # Next.js App Router
  src/components/            # 类型表、源码和藏品乘区组件
```
